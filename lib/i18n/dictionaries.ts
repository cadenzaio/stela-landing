import { en } from "@/lib/i18n/locales/en";
import { es } from "@/lib/i18n/locales/es";
import { pl } from "@/lib/i18n/locales/pl";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export const dictionaries: Record<Locale, Dictionary> = { en, es, pl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
