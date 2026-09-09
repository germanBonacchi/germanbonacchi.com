import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREFIXED_LOCALES = ["en", "pt-br", "it"];

/**
 * Serves the default locale (es) unprefixed at "/" (preserves the URL
 * search engines already indexed) while en/pt-BR/it get real, crawlable
 * routes at /en, /pt-br, /it. Both are backed by the same app/[locale]
 * route tree — this only decides which URL the browser sees.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Canonicalize: redirect /es (which would duplicate "/") to the unprefixed URL.
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const hasLocalePrefix = PREFIXED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|opengraph-image|.*\\..*).*)",
  ],
};
