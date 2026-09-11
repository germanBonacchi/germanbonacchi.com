import type { Localized } from "./types";

export interface PhilosophyItem {
  id: string;
  title: Localized;
  body: Localized;
}

export const philosophyIntro: {
  topLine: Localized;
  heading: Localized;
} = {
  topLine: {
    es: "Filosofía de arquitectura",
    en: "Architecture philosophy",
    "pt-BR": "Filosofia de arquitetura",
    it: "Filosofia di architettura",
  },
  heading: {
    es: "Cómo pienso la arquitectura",
    en: "How I think about architecture",
    "pt-BR": "Como penso a arquitetura",
    it: "Come penso l'architettura",
  },
};

export const philosophyItems: PhilosophyItem[] = [
  {
    id: "platform-first",
    title: {
      es: "Menos customización, más plataforma",
      en: "Less customization, more platform",
      "pt-BR": "Menos customização, mais plataforma",
      it: "Meno customizzazione, più piattaforma",
    },
    body: {
      es: "Aprovechar capacidades nativas antes de construir. Cada custom suma costo de ownership.",
      en: "Use native capabilities before building. Every custom adds ownership cost.",
      "pt-BR":
        "Aproveitar capacidades nativas antes de construir. Cada custom soma custo de ownership.",
      it: "Sfruttare le capacità native prima di costruire. Ogni custom aggiunge costo di ownership.",
    },
  },
  {
    id: "loose-coupling",
    title: {
      es: "Bajo acoplamiento",
      en: "Loose coupling",
      "pt-BR": "Baixo acoplamento",
      it: "Basso accoppiamento",
    },
    body: {
      es: "VTEX no debería convertirse en el lugar donde vive toda la lógica del negocio.",
      en: "VTEX shouldn't become the place where all business logic lives.",
      "pt-BR":
        "A VTEX não deveria se tornar o lugar onde vive toda a lógica de negócio.",
      it: "VTEX non dovrebbe diventare il posto dove vive tutta la logica di business.",
    },
  },
  {
    id: "observability",
    title: {
      es: "Observabilidad primero",
      en: "Observability first",
      "pt-BR": "Observabilidade primeiro",
      it: "Osservabilità prima",
    },
    body: {
      es: "Una integración sin métricas, logs y trazabilidad no está terminada.",
      en: "An integration without metrics, logs and traceability isn't done.",
      "pt-BR":
        "Uma integração sem métricas, logs e rastreabilidade não está terminada.",
      it: "Un'integrazione senza metriche, log e tracciabilità non è finita.",
    },
  },
  {
    id: "performance",
    title: {
      es: "Performance como requisito arquitectónico",
      en: "Performance as an architectural requirement",
      "pt-BR": "Performance como requisito arquitetônico",
      it: "Performance come requisito architetturale",
    },
    body: {
      es: "No es un polish final: condiciona límites de servicios, caching y diseño de storefront.",
      en: "Not a final polish: it shapes service boundaries, caching and storefront design.",
      "pt-BR":
        "Não é polish final: condiciona limites de serviços, caching e desenho de storefront.",
      it: "Non è un polish finale: condiziona confini di servizi, caching e design dello storefront.",
    },
  },
  {
    id: "explainable",
    title: {
      es: "Decisiones que se puedan explicar",
      en: "Decisions you can explain",
      "pt-BR": "Decisões que se possam explicar",
      it: "Decisioni che si possano spiegare",
    },
    body: {
      es: "Si no podés justificar un trade-off frente a negocio y al equipo, probablemente no esté listo.",
      en: "If you can't justify a trade-off to business and the team, it probably isn't ready.",
      "pt-BR":
        "Se você não consegue justificar um trade-off perante o negócio e o time, provavelmente não está pronto.",
      it: "Se non puoi giustificare un trade-off davanti al business e al team, probabilmente non è pronto.",
    },
  },
];
