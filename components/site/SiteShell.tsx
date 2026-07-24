"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function persistLocale(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `stela_locale=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = localeFromPathname(pathname);
  const messages = shellMessages[locale];
  const basePath = stripLocale(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function changeLanguage(nextLocale: Locale) {
    const search = typeof window === "undefined" ? "" : window.location.search;
    const nextPath = `${localizePath(pathname, nextLocale)}${search}`;
    if (typeof window !== "undefined") {
      persistLocale(nextLocale);
      window.location.assign(nextPath);
    }
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={pagePath(locale)} className="stela-lockup group flex items-center" aria-label={messages.homeLabel}>
          <Image className="stela-master-lockup" src="/brand/stela-lockup.svg" alt="" width={650} height={108} unoptimized priority />
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
          <details className="desktop-language-menu">
            <summary aria-label={messages.language}>{localeNames[locale]}</summary>
            <div className="desktop-language-options">
              {locales.map((option) => (
                <Link
                  key={option}
                  href={localizePath(pathname, option)}
                  aria-current={locale === option ? "page" : undefined}
                  onClick={() => persistLocale(option)}
                >
                  {localeNames[option]}
                </Link>
              ))}
            </div>
          </details>
          <Link href={`${pagePath(locale, "contact")}?intent=pilot`} className="header-cta">
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
          <Image className="stela-master-lockup" src="/brand/stela-lockup.svg" alt="" width={650} height={108} unoptimized />
        </Link>
        <nav aria-label={messages.footerNavigation}>
          {navigation.map((slug) => (
            <Link key={slug} href={pagePath(locale, slug)}>
              {messages.nav[slug]}
            </Link>
          ))}
        </nav>
        <div className="site-footer-status">
          <p>{messages.footerStage}</p>
          <p>{messages.legalEntity}</p>
        </div>
      </div>
    </footer>
  );
}
