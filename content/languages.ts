import type { Locale } from "./types";

/**
 * Locales aligned with VTEX market reach:
 * ES (LATAM/ES), EN (global), BR (core VTEX), IT (EU expansion).
 */
export const LANGUAGES = [
  { code: "es", label: "ES", name: "Español", htmlLang: "es" },
  { code: "en", label: "EN", name: "English", htmlLang: "en" },
  { code: "pt-BR", label: "BR", name: "Português", htmlLang: "pt-BR" },
  { code: "it", label: "IT", name: "Italiano", htmlLang: "it" },
] as const satisfies ReadonlyArray<{
  code: Locale;
  label: string;
  name: string;
  htmlLang: string;
}>;

export type LanguageMeta = (typeof LANGUAGES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_CODES: Locale[] = LANGUAGES.map((l) => l.code);

export function isLocale(value: string): value is Locale {
  return (LOCALE_CODES as string[]).includes(value);
}

export function getLanguageMeta(code: Locale): LanguageMeta {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
}

export const OG_LOCALE: Record<Locale, string> = {
  es: "es_AR",
  en: "en_US",
  "pt-BR": "pt_BR",
  it: "it_IT",
};

/** Content fallback when a locale has no dedicated translation. */
export const LOCALE_FALLBACK: Record<Locale, Locale[]> = {
  es: ["es", "en"],
  en: ["en", "es"],
  "pt-BR": ["pt-BR", "es", "en"],
  it: ["it", "en", "es"],
};
