import type { MetadataRoute } from "next";
import { localizedSlugs, pagePath, type Locale } from "@/lib/i18n/config";

const siteUrl = "https://stelamark.com";
const locales: Locale[] = ["en", "es"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    [undefined, ...localizedSlugs].map((slug) => ({
      url: `${siteUrl}${pagePath(locale, slug)}`,
      changeFrequency: "monthly" as const,
      priority: slug ? 0.8 : 1,
      alternates: {
        languages: {
          en: `${siteUrl}${pagePath("en", slug)}`,
          es: `${siteUrl}${pagePath("es", slug)}`,
          "x-default": `${siteUrl}${pagePath("en", slug)}`,
        },
      },
    })),
  );
}
