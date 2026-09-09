import type { Locale } from "@/content/types";

/**
 * URL segment for each locale. `null` means the default locale (es) is
 * served unprefixed at the root — the URL a search engine already indexed
 * keeps working, while en/pt-BR/it get real, crawlable, distinct URLs.
 * middleware.ts rewrites "/" traffic to the "es" route internally.
 */
export const LOCALE_URL_SLUGS: Record<Locale, string | null> = {
  es: null,
  en: "en",
  "pt-BR": "pt-br",
  it: "it",
};

export const LOCALE_ROUTE_SEGMENTS = ["es", "en", "pt-br", "it"] as const;
export type LocaleRouteSegment = (typeof LOCALE_ROUTE_SEGMENTS)[number];

const SEGMENT_TO_LOCALE: Record<LocaleRouteSegment, Locale> = {
  es: "es",
  en: "en",
  "pt-br": "pt-BR",
  it: "it",
};

export function isLocaleRouteSegment(
  value: string,
): value is LocaleRouteSegment {
  return (LOCALE_ROUTE_SEGMENTS as readonly string[]).includes(value);
}

export function localeFromRouteSegment(segment: string): Locale | null {
  return isLocaleRouteSegment(segment) ? SEGMENT_TO_LOCALE[segment] : null;
}

/** Builds an internal href for `path` ("/", "/projects", "/#about", ...) in `locale`. */
export function localizedHref(locale: Locale, path: string): string {
  const slug = LOCALE_URL_SLUGS[locale];
  if (!slug) return path;
  if (path === "/") return `/${slug}`;
  if (path.startsWith("/#")) return `/${slug}${path.slice(1)}`;
  return `/${slug}${path}`;
}

/** Strips a known locale prefix from a pathname, returning the default-locale path. */
export function stripLocalePrefix(pathname: string): string {
  const [, maybeSlug, ...rest] = pathname.split("/");
  if (maybeSlug && isLocaleRouteSegment(maybeSlug)) {
    const remainder = rest.join("/");
    return remainder ? `/${remainder}` : "/";
  }
  return pathname;
}

/**
 * hreflang alternates for `path` ("/", "/projects", ...). Next.js does NOT
 * deep-merge `alternates` across nested `generateMetadata` calls — any page
 * that declares its own `alternates.canonical` must also spread this in, or
 * it silently wipes out the languages declared by the parent layout.
 */
export function hreflangAlternates(path: string): Record<string, string> {
  return {
    "es-AR": localizedHref("es", path),
    en: localizedHref("en", path),
    "pt-BR": localizedHref("pt-BR", path),
    it: localizedHref("it", path),
    "x-default": localizedHref("es", path),
  };
}
