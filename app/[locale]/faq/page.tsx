import type { Metadata } from "next";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { faqPageSeo } from "@/content/seo";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  personJsonLd,
} from "@/lib/schema";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { OG_LOCALE } from "@/content/languages";

interface FaqRoutePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: FaqRoutePageProps): Promise<Metadata> {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title, description } = localize(faqPageSeo, locale);
  const canonical = localizedHref(locale, "/faq");

  return {
    title,
    description,
    alternates: { canonical, languages: hreflangAlternates("/faq") },
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

export default async function FaqRoutePage({ params }: FaqRoutePageProps) {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title } = localize(faqPageSeo, locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd(locale),
            faqPageJsonLd(locale),
            breadcrumbJsonLd([
              { name: "Home", path: localizedHref(locale, "/") },
              { name: title, path: localizedHref(locale, "/faq") },
            ]),
          ],
        }}
      />
      <Faq isPage />
      <Contact />
    </>
  );
}
