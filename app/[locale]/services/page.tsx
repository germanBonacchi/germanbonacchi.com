import type { Metadata } from "next";
import { Services } from "@/components/home/Services";
import { Contact } from "@/components/home/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { servicesPageSeo } from "@/content/seo";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { OG_LOCALE } from "@/content/languages";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title, description } = localize(servicesPageSeo, locale);
  const canonical = localizedHref(locale, "/services");

  return {
    title,
    description,
    alternates: { canonical, languages: hreflangAlternates("/services") },
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

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title } = localize(servicesPageSeo, locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd(locale),
            breadcrumbJsonLd([
              { name: "Home", path: localizedHref(locale, "/") },
              { name: title, path: localizedHref(locale, "/services") },
            ]),
          ],
        }}
      />
      <Services isPage />
      <Contact />
    </>
  );
}
