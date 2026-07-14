import { locales, type Dictionary, type Locale, type SupportingPageSlug } from "@/lib/i18n/types";

export { locales };
export type { Locale, SupportingPageSlug };

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  pt: "Português",
};

export const shellMessages: Record<Locale, Dictionary["shell"]> = {
  en: { nav: { platform: "Platform", applications: "Applications", partners: "Partners", investors: "Investors", contact: "Contact" }, requestBrief: "Request brief", briefShort: "Brief", openNavigation: "Open navigation", closeNavigation: "Close navigation", mainNavigation: "Main navigation", mobileNavigation: "Mobile navigation", footerNavigation: "Footer navigation", homeLabel: "Stela home", footerStage: "Pre-commercial development and validation.", language: "Language" },
  es: { nav: { platform: "Plataforma", applications: "Aplicaciones", partners: "Socios", investors: "Inversores", contact: "Contacto" }, requestBrief: "Solicitar dossier", briefShort: "Dossier", openNavigation: "Abrir navegación", closeNavigation: "Cerrar navegación", mainNavigation: "Navegación principal", mobileNavigation: "Navegación móvil", footerNavigation: "Navegación del pie", homeLabel: "Inicio de Stela", footerStage: "Desarrollo y validación precomercial.", language: "Idioma" },
  fr: { nav: { platform: "Plateforme", applications: "Applications", partners: "Partenaires", investors: "Investisseurs", contact: "Contact" }, requestBrief: "Demander le dossier", briefShort: "Dossier", openNavigation: "Ouvrir la navigation", closeNavigation: "Fermer la navigation", mainNavigation: "Navigation principale", mobileNavigation: "Navigation mobile", footerNavigation: "Navigation de pied de page", homeLabel: "Accueil Stela", footerStage: "Développement et validation précommerciale.", language: "Langue" },
  it: { nav: { platform: "Piattaforma", applications: "Applicazioni", partners: "Partner", investors: "Investitori", contact: "Contatti" }, requestBrief: "Richiedi il dossier", briefShort: "Dossier", openNavigation: "Apri navigazione", closeNavigation: "Chiudi navigazione", mainNavigation: "Navigazione principale", mobileNavigation: "Navigazione mobile", footerNavigation: "Navigazione a piè di pagina", homeLabel: "Home Stela", footerStage: "Sviluppo e validazione precommerciale.", language: "Lingua" },
  de: { nav: { platform: "Plattform", applications: "Anwendungen", partners: "Partner", investors: "Investoren", contact: "Kontakt" }, requestBrief: "Dossier anfordern", briefShort: "Dossier", openNavigation: "Navigation öffnen", closeNavigation: "Navigation schließen", mainNavigation: "Hauptnavigation", mobileNavigation: "Mobile Navigation", footerNavigation: "Fußnavigation", homeLabel: "Stela Startseite", footerStage: "Vorkommerzielle Entwicklung und Validierung.", language: "Sprache" },
  pt: { nav: { platform: "Plataforma", applications: "Aplicações", partners: "Parceiros", investors: "Investidores", contact: "Contacto" }, requestBrief: "Pedir dossier", briefShort: "Dossier", openNavigation: "Abrir navegação", closeNavigation: "Fechar navegação", mainNavigation: "Navegação principal", mobileNavigation: "Navegação móvel", footerNavigation: "Navegação do rodapé", homeLabel: "Início Stela", footerStage: "Desenvolvimento e validação pré-comercial.", language: "Idioma" },
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
  return Object.fromEntries(locales.map((locale) => [locale, pagePath(locale, slug)]));
}
