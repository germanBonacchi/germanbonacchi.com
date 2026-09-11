import type { Metadata } from "next";
import { Philosophy } from "@/components/home/Philosophy";
import { Contact } from "@/components/home/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { philosophyPageSeo } from "@/content/seo";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { OG_LOCALE } from "@/content/languages";

interface PhilosophyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PhilosophyPageProps): Promise<Metadata> {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title, description } = localize(philosophyPageSeo, locale);
  const canonical = localizedHref(locale, "/philosophy");

  return {
    title,
    description,
    alternates: { canonical, languages: hreflangAlternates("/philosophy") },
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

export default async function PhilosophyPage({ params }: PhilosophyPageProps) {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title } = localize(philosophyPageSeo, locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd(locale),
            breadcrumbJsonLd([
              { name: "Home", path: localizedHref(locale, "/") },
              { name: title, path: localizedHref(locale, "/philosophy") },
            ]),
          ],
        }}
      />
      <Philosophy isPage />
      <Contact />
    </>
  );
}
