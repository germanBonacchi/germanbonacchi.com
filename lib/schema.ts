import { getLanguageMeta } from "@/content/languages";
import { siteConfig } from "@/content/site";
import { education } from "@/content/experience";
import { faqs } from "@/content/faq";
import { getFeaturedProjects } from "@/content/projects";
import { seoDescription } from "@/content/seo";
import type { Locale, Project } from "@/content/types";
import { localize } from "@/lib/localize";
import { localizedHref } from "@/lib/paths";

const PERSON_ID = `${siteConfig.url}/#person`;

export function personJsonLd(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    alternateName: ["German Bonacchi", "Germán Bonacchi VTEX"],
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: [
      siteConfig.jobTitle.en,
      siteConfig.jobTitle.es,
      "VTEX Architect",
      "Ex-VTEX",
      "Líder técnico VTEX",
      "VTEX Technical Lead",
    ],
    description: localize(seoDescription, locale),
    worksFor: {
      "@type": "Organization",
      name: "Valtech",
      url: "https://www.valtech.com/",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "VTEX Technical Lead & Architect",
      occupationLocation: {
        "@type": "Country",
        name: "Argentina",
      },
      skills: siteConfig.knowsAbout.join(", "),
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.institution,
      url: education.url,
    },
    knowsAbout: siteConfig.knowsAbout,
    sameAs: siteConfig.sameAs,
    image: `${siteConfig.url}/images/profile.jpg`,
    nationality: {
      "@type": "Country",
      name: "Argentina",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
  };
}

export function websiteJsonLd(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: "Germán Bonacchi | Líder técnico VTEX",
    url: siteConfig.url,
    description: localize(seoDescription, locale),
    inLanguage: ["es-AR", "en", "pt-BR", "it"],
    author: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
}

export function profilePageJsonLd(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profile`,
    name: `${siteConfig.name} | ${localize(siteConfig.jobTitle, locale)}`,
    url: siteConfig.url,
    inLanguage: ["es-AR", "en", "pt-BR", "it"],
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
    description: localize(seoDescription, locale),
  };
}

export function faqPageJsonLd(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}${localizedHref(locale, "/faq")}#faq`,
    inLanguage: getLanguageMeta(locale).htmlLang,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: localize(item.question, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: localize(item.answer, locale),
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function projectJsonLd(project: Project, locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteConfig.url}/projects/${project.slug}#project`,
    name: `${project.client} | ${project.product}`,
    url: `${siteConfig.url}/projects/${project.slug}`,
    description: localize(project.summary, locale),
    creator: { "@id": PERSON_ID },
    about: project.technologies,
    keywords: project.areas.join(", "),
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    sameAs: [
      project.url,
      ...(project.sites?.map((site) => site.url) ?? []),
      ...(project.externalRefs?.map((r) => r.href) ?? []),
    ],
  };
}

export function homeGraphJsonLd(locale: Locale = "es") {
  const featured = getFeaturedProjects();
  return {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd(locale),
      websiteJsonLd(locale),
      profilePageJsonLd(locale),
      ...featured.map((project) => projectJsonLd(project, locale)),
    ],
  };
}
