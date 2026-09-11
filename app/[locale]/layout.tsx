import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Architects_Daughter, Encode_Sans_Expanded } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import { localize } from "@/lib/localize";
import {
  LOCALE_ROUTE_SEGMENTS,
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { getLanguageMeta } from "@/content/languages";
import { siteConfig } from "@/content/site";
import { seoDescription, seoKeywords, seoTitle } from "@/content/seo";
import { OG_LOCALE } from "@/content/languages";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollRestoration } from "@/components/ui/ScrollRestoration";
import { AnalyticsProviders } from "@/components/analytics/AnalyticsProviders";
import "@/styles/globals.css";

const encode = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-encode",
  display: "swap",
});

const pencil = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pencil",
  display: "swap",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALE_ROUTE_SEGMENTS.map((locale) => ({ locale }));
}

const SKIP_LINK_LABEL: Record<string, string> = {
  es: "Saltar al contenido",
  en: "Skip to content",
  "pt-BR": "Pular para o conteúdo",
  it: "Vai al contenuto",
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment);
  if (!locale) return {};

  const canonical = localizedHref(locale, "/");

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: localize(seoTitle.default, locale),
      template: `%s | ${siteConfig.name}`,
    },
    description: localize(seoDescription, locale),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    keywords: seoKeywords,
    category: "technology",
    alternates: {
      canonical,
      languages: hreflangAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: Object.entries(OG_LOCALE)
        .filter(([code]) => code !== locale)
        .map(([, value]) => value),
      url: `${siteConfig.url}${canonical}`,
      siteName: siteConfig.name,
      title: localize(seoTitle.default, locale),
      description: localize(seoDescription, locale),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} | Líder técnico VTEX | Technical Lead Commerce`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: localize(seoTitle.default, locale),
      description: localize(seoDescription, locale),
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/logo128.png",
    },
    manifest: "/manifest.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: "#1e1e1e",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment);
  if (!locale) notFound();

  return (
    <html
      lang={getLanguageMeta(locale).htmlLang}
      className={`${encode.variable} ${pencil.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <LocaleProvider initialLocale={locale}>
          <ScrollRestoration />
          <a href="#main" className="skip-link">
            {SKIP_LINK_LABEL[locale] ?? SKIP_LINK_LABEL.es}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ScrollToTop />
        </LocaleProvider>
        <AnalyticsProviders />
      </body>
    </html>
  );
}
