import type { Metadata, Viewport } from "next";
import { Encode_Sans_Expanded } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import { siteConfig } from "@/content/site";
import { seoDescription, seoKeywords, seoTitle } from "@/content/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { AnalyticsProviders } from "@/components/analytics/AnalyticsProviders";
import "@/styles/globals.css";

const encode = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-encode",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoTitle.default,
    template: `%s | ${siteConfig.name}`,
  },
  description: seoDescription.es,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: seoKeywords,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      en: "/",
      "pt-BR": "/",
      it: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US", "pt_BR", "it_IT"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seoTitle.default,
    description: seoDescription.es,
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
    title: seoTitle.default,
    description: seoDescription.es,
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
    icon: "/favicon.ico",
    apple: "/logo128.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1e1e1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={encode.variable}>
      <body>
        <LocaleProvider initialLocale="es">
          <a href="#main" className="skip-link">
            Saltar al contenido
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
