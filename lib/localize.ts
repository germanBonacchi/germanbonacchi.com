import { LOCALE_FALLBACK } from "@/content/languages";
import type { Locale, Localized } from "@/content/types";

/**
 * Resolve a localized value with VTEX-aware fallbacks
 * (e.g. pt-BR → es → en).
 */
export function localize<T>(value: Localized<T>, locale: Locale): T {
  for (const code of LOCALE_FALLBACK[locale]) {
    const found = value[code];
    if (found !== undefined) return found as T;
  }
  return (value.es ?? value.en) as T;
}
