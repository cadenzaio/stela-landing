"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StelaMark } from "@/components/brand/StelaMark";
import {
  localeFromPathname,
  localeNames,
  locales,
  localizePath,
  pagePath,
  shellMessages,
  stripLocale,
  type Locale,
  type SupportingPageSlug,
} from "@/lib/i18n/config";

const navigation: SupportingPageSlug[] = ["platform", "applications", "partners", "investors", "contact"];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = localeFromPathname(pathname);
  const messages = shellMessages[locale];
  const basePath = stripLocale(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function changeLanguage(nextLocale: Locale) {
    const search = typeof window === "undefined" ? "" : window.location.search;
    router.push(`${localizePath(pathname, nextLocale)}${search}`);
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={pagePath(locale)} className="stela-lockup group flex items-center" aria-label={messages.homeLabel}>
          <StelaMark variant="compact" size="nav" />
          <span className="stela-wordmark text-white">STELA</span>
        </Link>

        <nav className="site-desktop-nav" aria-label={messages.mainNavigation}>
          {navigation.map((slug) => {
            const href = pagePath(locale, slug);
            return (
              <Link
                key={slug}
                href={href}
                className="nav-link"
                aria-current={basePath === `/${slug}` ? "page" : undefined}
              >
                {messages.nav[slug]}
              </Link>
            );
          })}
        </nav>

        <div className="site-header-actions">
          <label className="desktop-language-select">
            <span>{messages.language}</span>
            <select value={locale} onChange={(event) => changeLanguage(event.target.value as Locale)} aria-label={messages.language}>
              {locales.map((option) => <option key={option} value={option}>{localeNames[option]}</option>)}
            </select>
          </label>
          <Link href={`${pagePath(locale, "contact")}?intent=brief`} className="header-cta">
            <span className="header-cta-full">{messages.requestBrief}</span>
            <span className="header-cta-short">{messages.briefShort}</span>
          </Link>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? messages.closeNavigation : messages.openNavigation}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className="site-mobile-nav" data-open={menuOpen} aria-label={messages.mobileNavigation}>
        {navigation.map((slug) => (
          <Link
            key={slug}
            href={pagePath(locale, slug)}
            aria-current={basePath === `/${slug}` ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {messages.nav[slug]}
          </Link>
        ))}
        <div className="mobile-language-options" aria-label={messages.language}>
          {locales.map((option) => (
            <button key={option} type="button" aria-current={locale === option ? "true" : undefined} onClick={() => changeLanguage(option)}>
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const messages = shellMessages[locale];

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link href={pagePath(locale)} className="site-footer-lockup" aria-label={messages.homeLabel}>
          <StelaMark variant="compact" size="small" />
          <span>Stela</span>
        </Link>
        <nav aria-label={messages.footerNavigation}>
          {navigation.map((slug) => (
            <Link key={slug} href={pagePath(locale, slug)}>
              {messages.nav[slug]}
            </Link>
          ))}
        </nav>
        <p>{messages.footerStage}</p>
      </div>
    </footer>
  );
}
