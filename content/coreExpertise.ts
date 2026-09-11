import type { Localized } from "./types";

export interface CoreExpertiseGroup {
  id: string;
  title: Localized;
  items: string[];
}

export const coreExpertiseIntro: {
  topLine: Localized;
  heading: Localized;
  lead: Localized;
  exploreLabel: Localized;
} = {
  topLine: {
    es: "Core expertise",
    en: "Core expertise",
  },
  heading: {
    es: "Lo que uso para resolver problemas de commerce.",
    en: "What I use to solve commerce problems.",
    "pt-BR": "O que uso para resolver problemas de commerce.",
    it: "Cosa uso per risolvere problemi di commerce.",
  },
  lead: {
    es: "Primero el mapa útil para contratar o alinearnos. El grafo interactivo queda como exploración secundaria.",
    en: "First the map that helps hiring or alignment. The interactive graph stays as secondary exploration.",
    "pt-BR":
      "Primeiro o mapa útil para contratar ou alinhar. O grafo interativo fica como exploração secundária.",
    it: "Prima la mappa utile per assumere o allinearci. Il grafo interattivo resta come esplorazione secondaria.",
  },
  exploreLabel: {
    es: "¿Querés explorar mi evolución técnica?",
    en: "Want to explore how my skills evolved?",
    "pt-BR": "Quer explorar minha evolução técnica?",
    it: "Vuoi esplorare la mia evoluzione tecnica?",
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
