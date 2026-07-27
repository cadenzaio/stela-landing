import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedPage } from "@/components/i18n/LocalizedPages";
import {
  isLocale,
  locales,
  localizedSlugs,
  type SupportingPageSlug,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { pageMetadata } from "@/lib/metadata";

type PageParams = { locale: string; slug?: string[] };

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .flatMap((locale) => [
      { locale },
      ...localizedSlugs.map((slug) => ({ locale, slug: [slug] })),
    ]);
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { locale: localeParam, slug: slugSegments } = await params;
  if (!isLocale(localeParam) || localeParam === "en" || (slugSegments?.length ?? 0) > 1) return {};

  const slug = slugSegments?.[0] as SupportingPageSlug | undefined;
  if (slug && !localizedSlugs.includes(slug)) return {};
  const dictionary = getDictionary(localeParam);
  const page = slug ? dictionary[slug] : null;
  const homepageMetadata = {
    es: {
      title: "Stela | Identificación permanente de activos",
      description: "Stela combina marcado permanente con diamante y registros digitales seguros para identificar y verificar vehículos y paneles solares durante todo su ciclo de vida.",
    },
    pl: {
      title: "Stela | Trwała identyfikacja aktywów",
      description: "Stela łączy trwałe znakowanie diamentowe z bezpiecznymi rejestrami cyfrowymi, aby identyfikować i weryfikować pojazdy oraz panele słoneczne przez cały cykl ich życia.",
    },
  }[localeParam];
  const title =
    page && "metaTitle" in page
      ? page.metaTitle
      : homepageMetadata.title;
  const description =
    page && "metaDescription" in page
      ? page.metaDescription
      : homepageMetadata.description;

  return pageMetadata({
    title,
    description,
    locale: localeParam,
    slug,
  });
}

export default async function LocalePage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<{ intent?: string | string[] }>;
}) {
  const [{ locale: localeParam, slug: slugSegments }, query] = await Promise.all([params, searchParams]);
  if (!isLocale(localeParam) || localeParam === "en" || (slugSegments?.length ?? 0) > 1) notFound();

  const slug = slugSegments?.[0] as SupportingPageSlug | undefined;
  if (slug && !localizedSlugs.includes(slug)) notFound();
  const intent = Array.isArray(query.intent) ? query.intent[0] : query.intent;

  return (
    <div lang={localeParam}>
      <LocalizedPage locale={localeParam} slug={slug} dictionary={getDictionary(localeParam)} intent={intent} />
    </div>
  );
}
