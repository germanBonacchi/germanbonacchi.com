import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProblemLanding } from "@/components/landings/ProblemLanding";
import { Contact } from "@/components/home/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { problems } from "@/content/problems";
import {
  getProblemPage,
  problemSlugs,
} from "@/content/problemPages";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { OG_LOCALE } from "@/content/languages";

interface ProblemPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return problemSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProblemPageProps): Promise<Metadata> {
  const { locale: segment, slug } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const page = getProblemPage(slug);
  const teaser = problems.find((p) => p.id === slug);
  if (!page || !teaser) return {};

  const title = `${localize(teaser.title, locale)} | Germán Bonacchi`;
  const description = localize(page.description, locale);
  const canonical = localizedHref(locale, `/problems/${slug}`);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: hreflangAlternates(`/problems/${slug}`),
    },
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

export default async function ProblemSlugPage({ params }: ProblemPageProps) {
  const { locale: segment, slug } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const page = getProblemPage(slug);
  const teaser = problems.find((p) => p.id === slug);
  if (!page || !teaser) notFound();

  const title = localize(teaser.title, locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd(locale),
            breadcrumbJsonLd([
              { name: "Home", path: localizedHref(locale, "/") },
              {
                name: title,
                path: localizedHref(locale, `/problems/${slug}`),
              },
            ]),
          ],
        }}
      />
      <ProblemLanding page={page} />
      <Contact />
    </>
  );
}
