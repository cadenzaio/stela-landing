import { de } from "@/lib/i18n/locales/de";
import { en } from "@/lib/i18n/locales/en";
import { es } from "@/lib/i18n/locales/es";
import { fr } from "@/lib/i18n/locales/fr";
import { it } from "@/lib/i18n/locales/it";
import { pt } from "@/lib/i18n/locales/pt";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export const dictionaries: Record<Locale, Dictionary> = { en, es, fr, it, de, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
