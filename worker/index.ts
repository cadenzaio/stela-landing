/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const LOCALE_COOKIE = "stela_locale";
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const CONTACT_RECIPIENT = "info@stelamark.com";
const CONTACT_ORIGIN = "https://stelamark.com";
const CONTACT_FIELDS = [
  "name",
  "organization",
  "role",
  "email",
  "country",
  "reason",
  "contactReason",
  "message",
  "assetType",
  "identificationMethod",
  "workflow",
  "scale",
  "urgency",
] as const;

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function handleContactRequest(request: Request): Promise<Response> {
  if (request.method !== "POST") return jsonResponse({ ok: false }, 405);

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 24_000) return jsonResponse({ ok: false }, 413);

  let payload: Record<string, unknown>;
  try {
    payload = await request.json() as Record<string, unknown>;
  } catch {
    return jsonResponse({ ok: false }, 400);
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return jsonResponse({ ok: true }, 200);
  }

  const required = ["name", "organization", "role", "email", "country", "reason", "message"] as const;
  const values = Object.fromEntries(
    CONTACT_FIELDS.map((field) => [field, typeof payload[field] === "string" ? payload[field].trim() : ""]),
  ) as Record<(typeof CONTACT_FIELDS)[number], string>;

  if (
    required.some((field) => !values[field]) ||
    values.message.length < 20 ||
    values.message.length > 5_000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    return jsonResponse({ ok: false }, 400);
  }

  const delivery = new FormData();
  for (const field of CONTACT_FIELDS) {
    if (values[field]) delivery.append(field, values[field].slice(0, field === "message" ? 5_000 : 300));
  }
  delivery.append("_subject", `Stela website inquiry: ${values.reason}`);
  delivery.append("_template", "table");
  delivery.append("_captcha", "false");
  delivery.append("_replyto", values.email.slice(0, 300));

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_RECIPIENT}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Origin: CONTACT_ORIGIN,
        Referer: `${CONTACT_ORIGIN}/contact`,
        "X-Requested-With": "XMLHttpRequest",
      },
      body: delivery,
    });

    const result = await response.json().catch(() => undefined) as
      | { success?: boolean | string; message?: string }
      | undefined;
    const delivered = result?.success === true || result?.success === "true";

    if (!response.ok || !delivered) {
      console.error("Contact delivery rejected", {
        providerStatus: response.status,
        providerMessage: result?.message ?? "Invalid response from FormSubmit",
      });
      return jsonResponse({ ok: false, code: "delivery_unavailable" }, 502);
    }
  } catch (error) {
    console.error("Contact delivery failed", {
      error: error instanceof Error ? error.message : "Unknown delivery error",
    });
    return jsonResponse({ ok: false, code: "delivery_unavailable" }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}

function preferredLocale(request: Request): "en" | "es" | "pl" {
  const cookie = request.headers.get("cookie") ?? "";
  const savedLocale = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${LOCALE_COOKIE}=`))
    ?.split("=")[1];

  if (savedLocale === "en" || savedLocale === "es" || savedLocale === "pl") return savedLocale;

  const acceptedLanguages = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry, index) => {
      const [language, ...parameters] = entry.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
      const quality = qualityParameter ? Number.parseFloat(qualityParameter.trim().slice(2)) : 1;
      return { language, quality: Number.isFinite(quality) ? quality : 0, index };
    })
    .filter(({ language, quality }) => language && quality > 0)
    .sort((left, right) => right.quality - left.quality || left.index - right.index);

  for (const { language } of acceptedLanguages) {
    if (language === "es" || language.startsWith("es-")) return "es";
    if (language === "pl" || language.startsWith("pl-")) return "pl";
    if (language === "en" || language.startsWith("en-")) return "en";
  }

  return "en";
}

function languageRedirect(request: Request): Response | undefined {
  const url = new URL(request.url);
  if (url.pathname !== "/" || !["GET", "HEAD"].includes(request.method)) return undefined;
  const locale = preferredLocale(request);
  if (locale === "en") return undefined;

  const destination = new URL(`/${locale}${url.search}`, url);
  const secure = destination.protocol === "https:" ? "; Secure" : "";

  return new Response(null, {
    status: 307,
    headers: {
      Location: destination.toString(),
      "Set-Cookie": `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax${secure}`,
      "Cache-Control": "private, no-store",
      Vary: "Accept-Language, Cookie",
    },
  });
}

async function localizeDocumentLanguage(request: Request, response: Response): Promise<Response> {
  const pathname = new URL(request.url).pathname;
  const contentType = response.headers.get("content-type") ?? "";
  const locale = pathname.split("/").filter(Boolean)[0];
  if (!["es", "pl"].includes(locale) || !contentType.startsWith("text/html")) return response;

  const html = await response.text();
  const headers = new Headers(response.headers);
  headers.delete("content-length");

  return new Response(html.replace("<html lang=\"en\">", `<html lang="${locale}">`), {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const redirect = languageRedirect(request);
    if (redirect) return redirect;

    if (url.pathname === "/api/contact") {
      return handleContactRequest(request);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const response = await handler.fetch(request, env, ctx);
    return localizeDocumentLanguage(request, response);
  },
};

export default worker;
