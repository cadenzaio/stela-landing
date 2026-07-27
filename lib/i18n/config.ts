import { locales, type Dictionary, type Locale, type SupportingPageSlug } from "@/lib/i18n/types";

export { locales };
export type { Locale, SupportingPageSlug };

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pl: "Polski",
};

export const shellMessages: Record<Locale, Dictionary["shell"]> = {
  en: { nav: { platform: "Platform", applications: "Applications", partners: "Partners", investors: "Investors", contact: "Contact" }, requestBrief: "Discuss a pilot", briefShort: "Pilot", openNavigation: "Open navigation", closeNavigation: "Close navigation", mainNavigation: "Main navigation", mobileNavigation: "Mobile navigation", footerNavigation: "Footer navigation", homeLabel: "Stela home", footerStage: "Pre-commercial development and validation.", legalEntity: "Stela is a brand of SafeSingleMark S.L.", language: "Language" },
  es: { nav: { platform: "Plataforma", applications: "Aplicaciones", partners: "Socios", investors: "Inversores", contact: "Contacto" }, requestBrief: "Comentar un piloto", briefShort: "Piloto", openNavigation: "Abrir navegación", closeNavigation: "Cerrar navegación", mainNavigation: "Navegación principal", mobileNavigation: "Navegación móvil", footerNavigation: "Navegación del pie", homeLabel: "Inicio de Stela", footerStage: "Desarrollo y validación precomercial.", legalEntity: "Stela es una marca de SafeSingleMark S.L.", language: "Idioma" },
  pl: { nav: { platform: "Platforma", applications: "Zastosowania", partners: "Partnerzy", investors: "Inwestorzy", contact: "Kontakt" }, requestBrief: "Porozmawiajmy o pilotażu", briefShort: "Pilotaż", openNavigation: "Otwórz nawigację", closeNavigation: "Zamknij nawigację", mainNavigation: "Główna nawigacja", mobileNavigation: "Nawigacja mobilna", footerNavigation: "Nawigacja w stopce", homeLabel: "Strona główna Stela", footerStage: "Rozwój przedkomercyjny i walidacja.", legalEntity: "Stela jest marką SafeSingleMark S.L.", language: "Język" },
};

export const localizedSlugs: SupportingPageSlug[] = ["platform", "applications", "partners", "investors", "contact"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : "en";
}

export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) segments.shift();
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function localizePath(pathname: string, locale: Locale): string {
  const basePath = stripLocale(pathname);
  return locale === "en" ? basePath : `/${locale}${basePath === "/" ? "" : basePath}`;
}

export function pagePath(locale: Locale, slug?: SupportingPageSlug): string {
  const path = slug ? `/${slug}` : "/";
  return localizePath(path, locale);
}

export function contactPath(locale: Locale, intent: string): string {
  return `${pagePath(locale, "contact")}?intent=${intent}`;
}

export function languageAlternates(slug?: SupportingPageSlug) {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, pagePath(locale, slug)])),
    "x-default": pagePath("en", slug),
  };
}
