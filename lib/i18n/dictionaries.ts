import { en } from "@/lib/i18n/locales/en";
import { es } from "@/lib/i18n/locales/es";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
