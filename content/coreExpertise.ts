import type { Localized } from "./types";

export interface CoreExpertiseGroup {
  id: string;
  title: Localized;
  items: string[];
}

export const coreExpertiseIntro: {
  topLine: Localized;
  heading: Localized;
} = {
  topLine: {
    es: "Core expertise",
    en: "Core expertise",
  },
  heading: {
    es: "Stack y dominios con los que trabajo.",
    en: "The stack and domains I work with.",
    "pt-BR": "Stack e domínios com os quais trabalho.",
    it: "Lo stack e i domini con cui lavoro.",
  },
};

export const coreExpertiseGroups: CoreExpertiseGroup[] = [
  {
    id: "architecture",
    title: {
      es: "Architecture",
      en: "Architecture",
    },
    items: ["VTEX IO", "FastStore", "Headless", "APIs", "Distributed Systems"],
  },
  {
    id: "commerce",
    title: {
      es: "Commerce",
      en: "Commerce",
    },
    items: ["Checkout", "Payments", "OMS", "Catalog", "Search", "Logistics"],
  },
  {
    id: "engineering",
    title: {
      es: "Engineering",
      en: "Engineering",
    },
    items: ["TypeScript", "React", "Node.js", "GraphQL"],
  },
  {
    id: "leadership",
    title: {
      es: "Leadership",
      en: "Leadership",
    },
    items: [
      "Architecture Reviews",
      "Code Reviews",
      "Technical Strategy",
      "Mentoring",
    ],
  },
];
