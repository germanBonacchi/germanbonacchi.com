import type { Metadata } from "next";
import { Decisions } from "@/components/home/Decisions";
import { Contact } from "@/components/home/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { decisionsPageSeo } from "@/content/seo";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { OG_LOCALE } from "@/content/languages";

interface DecisionsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: DecisionsPageProps): Promise<Metadata> {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title, description } = localize(decisionsPageSeo, locale);
  const canonical = localizedHref(locale, "/decisions");

  return {
    title,
    description,
    alternates: { canonical, languages: hreflangAlternates("/decisions") },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
      locale: OG_LOCALE[locale],
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function DecisionsPage({ params }: DecisionsPageProps) {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title } = localize(decisionsPageSeo, locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd(locale),
            breadcrumbJsonLd([
              { name: "Home", path: localizedHref(locale, "/") },
              { name: title, path: localizedHref(locale, "/decisions") },
            ]),
          ],
        }}
      />
      <Decisions isPage />
      <Contact />
    </>
  );
}
