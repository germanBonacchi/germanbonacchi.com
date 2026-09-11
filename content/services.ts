import type { Localized } from "./types";

export interface ServiceItem {
  id: string;
  title: Localized;
  body: Localized;
}

export const servicesIntro: {
  topLine: Localized;
  heading: Localized;
  lead: Localized;
} = {
  topLine: {
    es: "Cómo puedo ayudarte",
    en: "How I can help",
    "pt-BR": "Como posso ajudar",
    it: "Come posso aiutarti",
  },
  heading: {
    es: "Cuando la implementación VTEX ya es suficientemente compleja como para que las decisiones arquitectónicas importen.",
    en: "When your VTEX implementation is complex enough that architectural decisions matter.",
    "pt-BR":
      "Quando a implementação VTEX já é complexa o bastante para que decisões arquitetônicas importem.",
    it: "Quando l'implementazione VTEX è abbastanza complessa da far contare le decisioni architetturali.",
  },
  lead: {
    es: "Podés contactarme para architecture review, discovery técnico, estrategia de migración, performance o liderazgo técnico de equipos VTEX.",
    en: "Reach out for architecture review, technical discovery, migration strategy, performance work, or technical leadership of VTEX teams.",
    "pt-BR":
      "Pode me contatar para architecture review, discovery técnico, estratégia de migração, performance ou liderança técnica de times VTEX.",
    it: "Contattami per architecture review, discovery tecnica, strategia di migrazione, performance o leadership tecnica di team VTEX.",
  },
};

export const services: ServiceItem[] = [
  {
    id: "architecture-review",
    title: {
      es: "Architecture Review",
      en: "Architecture Review",
    },
    body: {
      es: "Revisión de una arquitectura VTEX existente: límites, acoplamiento, riesgos y oportunidades de simplificación.",
      en: "Review of an existing VTEX architecture: boundaries, coupling, risks and simplification opportunities.",
      "pt-BR":
        "Revisão de uma arquitetura VTEX existente: limites, acoplamento, riscos e oportunidades de simplificação.",
      it: "Revisione di un'architettura VTEX esistente: confini, accoppiamento, rischi e opportunità di semplificazione.",
    },
  },
  {
    id: "solution-architecture",
    title: {
      es: "Solution Architecture",
      en: "Solution Architecture",
    },
    body: {
      es: "Diseño de arquitectura para nuevas implementaciones o evoluciones grandes sobre IO o FastStore.",
      en: "Architecture design for new implementations or major evolutions on IO or FastStore.",
      "pt-BR":
        "Desenho de arquitetura para novas implementações ou evoluções grandes em IO ou FastStore.",
      it: "Design di architettura per nuove implementazioni o grandi evoluzioni su IO o FastStore.",
    },
  },
  {
    id: "migration",
    title: {
      es: "Migration Strategy",
      en: "Migration Strategy",
    },
    body: {
      es: "Legacy → VTEX / IO → FastStore: qué migrar, en qué orden y qué no customizar.",
      en: "Legacy → VTEX / IO → FastStore: what to migrate, in what order, and what not to customize.",
      "pt-BR":
        "Legacy → VTEX / IO → FastStore: o que migrar, em que ordem e o que não customizar.",
      it: "Legacy → VTEX / IO → FastStore: cosa migrare, in che ordine e cosa non customizzare.",
    },
  },
  {
    id: "leadership",
    title: {
      es: "Technical Leadership",
      en: "Technical Leadership",
    },
    body: {
      es: "Liderazgo técnico de equipos VTEX: definición, reviews, mentoring y coordinación con negocio.",
      en: "Technical leadership of VTEX teams: direction, reviews, mentoring and alignment with business.",
      "pt-BR":
        "Liderança técnica de times VTEX: definição, reviews, mentoring e alinhamento com o negócio.",
      it: "Leadership tecnica di team VTEX: direzione, review, mentoring e allineamento col business.",
    },
  },
  {
    id: "troubleshooting",
    title: {
      es: "Troubleshooting",
      en: "Troubleshooting",
    },
    body: {
      es: "Problemas complejos de producción en checkout, integraciones, performance o customizaciones difíciles de aislar.",
      en: "Complex production issues in checkout, integrations, performance or hard-to-isolate customizations.",
      "pt-BR":
        "Problemas complexos de produção em checkout, integrações, performance ou customizações difíceis de isolar.",
      it: "Problemi complessi di produzione in checkout, integrazioni, performance o customizzazioni difficili da isolare.",
    },
  },
];
