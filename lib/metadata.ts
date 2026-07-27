import type { Metadata } from "next";
import type { Locale, SupportingPageSlug } from "@/lib/i18n/config";
import { languageAlternates, pagePath } from "@/lib/i18n/config";

const socialImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Stela permanent asset identification for vehicles and solar panels.",
};

export function pageMetadata({
  title,
  description,
  locale = "en",
  slug,
}: {
  title: string;
  description: string;
  locale?: Locale;
  slug?: SupportingPageSlug;
}): Metadata {
  const path = pagePath(locale, slug);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates(slug),
    },
    openGraph: {
      type: "website",
      siteName: "Stela",
      title,
      description,
      url: path,
      locale: locale === "es" ? "es_ES" : locale === "pl" ? "pl_PL" : "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
