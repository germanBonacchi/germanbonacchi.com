import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Problems } from "@/components/home/Problems";
// import { Services } from "@/components/home/Services";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
// Landings: /decisions · /philosophy (kept out of the home scroll)
// import { Decisions } from "@/components/home/Decisions";
// import { Philosophy } from "@/components/home/Philosophy";
import { Skills } from "@/components/home/Skills";
import { Trainings } from "@/components/home/Trainings";
// import { Testimonials } from "@/components/home/Testimonials";
// import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeGraphJsonLd } from "@/lib/schema";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { OG_LOCALE } from "@/content/languages";
import { seoDescription, seoKeywords, seoTitle } from "@/content/seo";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const title = localize(seoTitle.home, locale);
  const description = localize(seoDescription, locale);
  const canonical = localizedHref(locale, "/");

  return {
    title: { absolute: title },
    description,
    keywords: seoKeywords,
    alternates: { canonical, languages: hreflangAlternates("/") },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: OG_LOCALE[locale],
      alternateLocale: Object.entries(OG_LOCALE)
        .filter(([code]) => code !== locale)
        .map(([, value]) => value),
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

export default async function HomePage({ params }: HomePageProps) {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";

  return (
    <>
      <JsonLd data={homeGraphJsonLd(locale)} />
      <Hero />
      <About />
      <Problems />
      <Experience />
      <Projects />
      {/* <Decisions /> */}
      {/* <Philosophy /> */}
      <Skills />
      <Trainings />
      {/* Engagement landings: /services · /testimonials · /faq */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      <Contact />
    </>
  );
}
