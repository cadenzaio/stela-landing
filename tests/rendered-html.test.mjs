import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/", headers = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html", ...headers },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("selects Spanish on first visit and preserves manual language choices", async () => {
  const spanishFirstVisit = await render("/", { "accept-language": "es-ES,es;q=0.9,en;q=0.8" });
  assert.equal(spanishFirstVisit.status, 307);
  assert.equal(spanishFirstVisit.headers.get("location"), "http://localhost/es");
  assert.match(spanishFirstVisit.headers.get("set-cookie") ?? "", /stela_locale=es/);
  assert.match(spanishFirstVisit.headers.get("vary") ?? "", /Accept-Language/);

  const englishFirstVisit = await render("/", { "accept-language": "en-GB,en;q=0.9,es;q=0.8" });
  assert.equal(englishFirstVisit.status, 200);

  const manualEnglishChoice = await render("/", {
    "accept-language": "es-ES,es;q=0.9",
    cookie: "stela_locale=en",
  });
  assert.equal(manualEnglishChoice.status, 200);

  const manualSpanishChoice = await render("/", {
    "accept-language": "en-GB,en;q=0.9",
    cookie: "stela_locale=es",
  });
  assert.equal(manualSpanishChoice.status, 307);
  assert.equal(manualSpanishChoice.headers.get("location"), "http://localhost/es");

  const directSpanishRoute = await render("/es", { "accept-language": "en-GB,en;q=0.9" });
  assert.equal(directSpanishRoute.status, 200);
});

test("server-renders the Stela landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Stela \| Permanent Asset Identification<\/title>/i);
  assert.match(
    html,
    /Stela combines permanent diamond marking with secure digital records to identify and verify vehicle glass and solar panels throughout the asset lifecycle\./,
  );
  assert.match(html, /href="https:\/\/stelamark\.com\/favicon-48\.png" sizes="48x48" type="image\/png"/);
  assert.match(html, /rel="apple-touch-icon" href="https:\/\/stelamark\.com\/apple-touch-icon\.png"/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /"@type":"Organization"/);
  assert.match(html, /"@type":"WebSite"/);
  assert.match(html, /Permanent identity for physical assets\./);
  assert.match(html, /A digital record is only as reliable as its connection to the physical asset\./);
  assert.match(html, /Mark\. Record\. Verify\./);
  assert.match(html, /STLA A7K4 92X8 1847/);
  assert.match(html, /permanent Stela identifier and QR code applied along the lower border of a vehicle windshield/);
  assert.match(html, /Built for assets where trusted identity matters\./);
  assert.match(html, /A permanent identity creates value throughout the asset lifecycle\./);
  assert.match(html, /The mark identifies the asset\. The record proves its origin\./);
  assert.match(html, /A permanent mark alone is not a complete identity system\./);
  assert.match(html, /Built on decades of practical asset protection\./);
  assert.match(html, /Building with the industries we serve\./);
  assert.match(html, /property="og:image" content="https:\/\/stelamark\.com\/og\.png"/);
  assert.match(html, /Stela is a brand of SafeSingleMark S\.L\./);
  assert.doesNotMatch(
    html,
    /Verid|codex-preview|react-loading-skeleton|Every mark becomes part of an asset trust history|A physical anchor for digital confidence/i,
  );
});

test("keeps the starter preview removed from the finished site", async () => {
  const [page, layout, packageJson, landing, prototype, shell, brand, favicon] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../components/landing/StelaLanding.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/landing/StelaHomepagePrototype.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/site/SiteShell.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/brand/StelaMark.tsx", import.meta.url), "utf8"),
    readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
    access(new URL("../public/favicon-48.png", import.meta.url)),
    access(new URL("../public/favicon-192.png", import.meta.url)),
    access(new URL("../public/favicon-512.png", import.meta.url)),
    access(new URL("../public/apple-touch-icon.png", import.meta.url)),
  ]);

  assert.match(page, /<StelaLanding \/>/);
  assert.match(layout, /https:\/\/stelamark\.com/);
  assert.match(layout, /\/og\.png/);
  assert.match(landing, /PrecisionMarkVisual/);
  assert.match(landing, /StelaHomepagePrototype/);
  assert.match(prototype, /stela-home-hero-art-desktop-v7\.jpg/);
  assert.match(prototype, /stela-home-hero-art-tablet-v7\.jpg/);
  assert.match(prototype, /stela-home-hero-art-mobile-v8\.jpg/);
  assert.match(prototype, /<picture className="prototype-hero-picture">/);
  assert.match(prototype, /className="prototype-hero-certificate"/);
  assert.doesNotMatch(prototype, /prototype-hero-connection/);
  assert.match(landing, /const HERO_VARIANT: HeroVariant = "etched-origin"/);
  assert.match(landing, /const MATERIAL_TREATMENT: MaterialTreatment = "optical-incision"/);
  assert.match(landing, /<h1 className="hero-title font-semibold text-white">/);
  assert.match(landing, /messages\.hero\.title\.map/);
  assert.doesNotMatch(landing, /hero-title text-balance|lg:text-8xl/);
  assert.match(landing, /import \{ StelaMark \}/);
  assert.match(landing, /<SiteHeader \/>/);
  assert.match(shell, /src="\/brand\/stela-lockup\.svg"/);
  assert.match(landing, /hero-variant-\$\{HERO_VARIANT\}/);
  assert.match(landing, /material-\$\{MATERIAL_TREATMENT\}/);
  assert.match(landing, /glass-reflection/);
  assert.doesNotMatch(landing, /surface-depth/);
  assert.doesNotMatch(landing, /<StelaMark variant="full" size="hero" tone="etched"/);
  assert.doesNotMatch(landing, /diamond-cut|incision-core|mark-line-a/);
  assert.match(landing, /proof-assembly-vehicle/);
  assert.match(landing, /HowItWorksBand/);
  assert.match(landing, /proof-link/);
  assert.match(landing, /<path d="M102 20 L241 34"/);
  assert.match(landing, /device-trust-line/);
  assert.match(landing, /final-trust-line/);
  assert.match(landing, /lifecycle-timeline/);
  assert.match(landing, /sequence-track/);
  assert.match(landing, /device-module/);
  assert.match(landing, /FinalSection/);
  assert.match(landing, /messages\.stageCopy/);
  assert.doesNotMatch(landing, /PhysicalAnchor|PlatformSection|AudiencePathways|CurrentStage|FinalCTA/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page + layout + landing, /Verid|safeSingleMark|SkeletonPreview|codex-preview/i);
  assert.match(brand, /type StelaMarkVariant = "full" \| "compact"/);
  assert.match(brand, /stela-mark-\$\{variant\}/);
  assert.match(brand, /M50 9L91 50L50 91L9 50Z/);
  assert.match(brand, /stela-mark-origin-cutout/);
  assert.doesNotMatch(brand, /stela-mark-glare|stela-mark-trace/);
  assert.match(favicon, /M50 9L91 50L50 91L9 50L50 9Z/);
  assert.match(favicon, /<circle cx="43" cy="53"/);
  assert.doesNotMatch(brand, /arrow|shield|monogram/i);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});

test("server-renders every public page in all supported languages", async () => {
  const localeChecks = {
    es: /Identidad permanente para activos físicos\./,
  };
  const slugs = ["platform", "applications", "partners", "investors", "contact"];

  for (const [locale, expectedHomeCopy] of Object.entries(localeChecks)) {
    const homeResponse = await render(`/${locale}`);
    assert.equal(homeResponse.status, 200, `/${locale}`);
    const homeHtml = await homeResponse.text();
    assert.match(homeHtml, new RegExp(`<html lang="${locale}">`));
    assert.match(homeHtml, expectedHomeCopy);
    assert.match(homeHtml, new RegExp(`href="/${locale}/platform"`));
    assert.match(homeHtml, new RegExp(`hrefLang="${locale}" href="https://stelamark.com/${locale}"`));

    for (const slug of slugs) {
      const response = await render(`/${locale}/${slug}`);
      assert.equal(response.status, 200, `/${locale}/${slug}`);
      const html = await response.text();
      assert.match(html, new RegExp(`href="/${locale}/contact"`));
      assert.match(html, new RegExp(`<div lang="${locale}">`));
    }
  }
});

test("keeps the homepage headline at exactly three authored lines in every language", async () => {
  const localeFiles = ["en", "es"];

  for (const locale of localeFiles) {
    const source = await readFile(new URL(`../lib/i18n/locales/${locale}.ts`, import.meta.url), "utf8");
    const headline = source.match(/hero:\s*\{[\s\S]*?title:\s*\[([^\]]+)]/);
    assert.ok(headline, `${locale} homepage headline not found`);
    assert.equal((headline[1].match(/"/g) ?? []).length, 6, `${locale} headline must contain three strings`);
  }
});

test("keeps inactive languages out of the public site", async () => {
  for (const locale of ["fr", "it", "de", "pt"]) {
    const response = await render(`/${locale}`);
    assert.equal(response.status, 404, `/${locale}`);
  }
});

test("keeps the internal identity review out of the public site", async () => {
  const response = await render("/identity");
  assert.equal(response.status, 404);
});

test("server-renders each focused supporting page", async () => {
  const routes = [
    ["/platform", /Permanent identification, recorded at its source\./, "platform"],
    ["/applications", /Built for assets where trusted identity matters\./, "applications"],
    ["/partners", /Build with the industries we serve\./, "partners"],
    ["/investors", /A permanent identity layer for physical assets\./, "investors"],
    ["/contact", /Could your assets benefit from permanent identity\?/, "contact"],
  ];

  for (const [pathname, expectedCopy, variant] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, expectedCopy);
    assert.match(html, new RegExp(`content-page-${variant}`));
    assert.match(html, /href="\/platform"/);
    assert.match(html, /href="\/applications"/);
    assert.match(html, /href="\/partners"/);
    assert.match(html, /href="\/investors"/);
    assert.match(html, /href="\/contact"/);
    assert.match(html, /Pre-commercial development and validation\./);
    if (variant === "applications") assert.match(html, /editorial-media/);
  }
});

test("preselects supported contact intents and discloses delivery", async () => {
  const intents = ["use-case", "pilot", "investor", "brief", "technical-brief"];

  for (const intent of intents) {
    const response = await render(`/contact?intent=${intent}`);
    assert.equal(response.status, 200, intent);
    const html = await response.text();
    const expectedValue = intent === "technical-brief" ? "brief" : intent;
    const selectedInput = html.match(new RegExp(`<input[^>]*value="${expectedValue}"[^>]*>`, "i"))?.[0];
    assert.ok(selectedInput, `missing ${expectedValue} contact option`);
    assert.match(selectedInput, /checked/i);
    assert.match(html, /Your details are sent securely to Stela and used only to respond to this request\./);
    assert.doesNotMatch(html, /brief@stela\.example|pilot@stela\.example/);
  }
});

test("preselects contact intent on localized routes", async () => {
  const response = await render("/es/contact?intent=pilot");
  assert.equal(response.status, 200);
  const html = await response.text();
  const selectedInput = html.match(/<input[^>]*value="pilot"[^>]*>/i)?.[0];
  assert.ok(selectedInput);
  assert.match(selectedInput, /checked/i);
  assert.match(html, /Sus datos se envían de forma segura a Stela y se utilizan únicamente para responder a esta solicitud\./);
  assert.match(html, /href="\/es\/contact\?intent=pilot"/);
});

test("publishes production search-engine directives", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);
  assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap: https:\/\/stelamark\.com\/sitemap\.xml/);

  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /<loc>https:\/\/stelamark\.com\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/stelamark\.com\/es<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/stelamark\.com\/applications<\/loc>/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.doesNotMatch(sitemap, /\/identity/);
});

test("documents the focused sitemap and conversion boundaries", async () => {
  const [siteMap, contentStrategy, conversionPaths] = await Promise.all([
    readFile(new URL("../SITE_MAP.md", import.meta.url), "utf8"),
    readFile(new URL("../CONTENT_STRATEGY.md", import.meta.url), "utf8"),
    readFile(new URL("../CONVERSION_PATHS.md", import.meta.url), "utf8"),
  ]);

  assert.match(siteMap, /\/platform/);
  assert.match(siteMap, /\/applications/);
  assert.match(siteMap, /\/partners/);
  assert.match(siteMap, /\/investors/);
  assert.match(siteMap, /\/es\/platform/);
  assert.match(siteMap, /Portuguese/);
  assert.match(contentStrategy, /Pre-commercial Claim Rules/);
  assert.match(contentStrategy, /Private Information/);
  assert.match(contentStrategy, /Translation Standard/);
  assert.match(conversionPaths, /intent=technical-brief/);
  assert.match(conversionPaths, /locale prefix/);
  assert.match(conversionPaths, /does not deliver data to a backend/);
});
