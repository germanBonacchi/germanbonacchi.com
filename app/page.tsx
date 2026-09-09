import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { Trainings } from "@/components/home/Trainings";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";
import { EntitySeoContent } from "@/components/seo/EntitySeoContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeGraphJsonLd } from "@/lib/schema";
import { seoDescription, seoKeywords, seoTitle } from "@/content/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: seoTitle.home },
  description: seoDescription.es,
  keywords: seoKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: seoTitle.home,
    description: seoDescription.es,
    locale: "es_AR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle.home,
    description: seoDescription.es,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraphJsonLd()} />
      <Hero />
      <About />
      <EntitySeoContent />
      <Experience />
      <Projects />
      <Skills />
      <Trainings />
      <Faq />
      <Contact />
    </>
  );
}
