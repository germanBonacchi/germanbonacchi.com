import type { Localized } from "./types";

export interface ProblemItem {
  id: string;
  title: Localized;
  body: Localized;
}

export const problemsIntro: {
  topLine: Localized;
  heading: Localized;
  lead: Localized;
} = {
  topLine: {
    es: "Problemas que resuelvo",
    en: "Problems I solve",
    "pt-BR": "Problemas que resolvo",
    it: "Problemi che risolvo",
  },
  heading: {
    es: "Decisiones difíciles alrededor de VTEX.",
    en: "Hard decisions around VTEX.",
    "pt-BR": "Decisões difíceis em torno de VTEX.",
    it: "Decisioni difficili intorno a VTEX.",
  },
  lead: {
    es: "No vendo una lista de tecnologías: ayudo a retailers y equipos a decidir qué vive dentro de VTEX, qué se externaliza y cómo mantener la plataforma operable a escala.",
    en: "I don't sell a tech checklist: I help retailers and teams decide what belongs inside VTEX, what to externalize, and how to keep the platform operable at scale.",
    "pt-BR":
      "Não vendo uma lista de tecnologias: ajudo retailers e times a decidir o que vive dentro da VTEX, o que externalizar e como manter a plataforma operável em escala.",
    it: "Non vendo una lista di tecnologie: aiuto retailer e team a decidere cosa vive dentro di VTEX, cosa esternalizzare e come mantenere la piattaforma operabile su scala.",
  },
};

export const problems: ProblemItem[] = [
  {
    id: "architecture",
    title: {
      es: "Arquitectura VTEX",
      en: "VTEX architecture",
      "pt-BR": "Arquitetura VTEX",
      it: "Architettura VTEX",
    },
    body: {
      es: "Diseño de arquitecturas para retailers de alta escala: límites entre VTEX, servicios externos y sistemas core (ERP, OMS, PIM, WMS).",
      en: "Architecture design for large-scale retailers: boundaries between VTEX, external services and core systems (ERP, OMS, PIM, WMS).",
      "pt-BR":
        "Desenho de arquiteturas para retailers de alta escala: limites entre VTEX, serviços externos e sistemas core (ERP, OMS, PIM, WMS).",
      it: "Design di architetture per retailer su larga scala: confini tra VTEX, servizi esterni e sistemi core (ERP, OMS, PIM, WMS).",
    },
  },
  {
    id: "checkout",
    title: {
      es: "Checkout",
      en: "Checkout",
    },
    body: {
      es: "Arquitectura y troubleshooting de checkout, promociones, pagos y extensiones cuando la plataforma nativa no alcanza.",
      en: "Checkout architecture and troubleshooting: promotions, payments and extensions when native platform capabilities fall short.",
      "pt-BR":
        "Arquitetura e troubleshooting de checkout, promoções, pagamentos e extensões quando a plataforma nativa não basta.",
      it: "Architettura e troubleshooting di checkout, promozioni, pagamenti ed estensioni quando la piattaforma nativa non basta.",
    },
  },
  {
    id: "integrations",
    title: {
      es: "Integraciones",
      en: "Integrations",
      "pt-BR": "Integrações",
      it: "Integrazioni",
    },
    body: {
      es: "ERP · OMS · PIM · WMS · CRM · marketplaces · pagos. Diseño de flujos síncronos y asíncronos sin acoplar de más la plataforma.",
      en: "ERP · OMS · PIM · WMS · CRM · marketplaces · payments. Sync and async flow design without over-coupling the platform.",
      "pt-BR":
        "ERP · OMS · PIM · WMS · CRM · marketplaces · pagamentos. Desenho de fluxos síncronos e assíncronos sem acoplar demais a plataforma.",
      it: "ERP · OMS · PIM · WMS · CRM · marketplace · pagamenti. Design di flussi sincroni e asincroni senza accoppiare troppo la piattaforma.",
    },
  },
  {
    id: "performance",
    title: {
      es: "Performance",
      en: "Performance",
    },
    body: {
      es: "Performance de storefront, APIs, integraciones y arquitectura de frontend (IO y FastStore) con impacto real en conversión.",
      en: "Storefront, API, integration and frontend architecture performance (IO and FastStore) with real conversion impact.",
      "pt-BR":
        "Performance de storefront, APIs, integrações e arquitetura de frontend (IO e FastStore) com impacto real em conversão.",
      it: "Performance di storefront, API, integrazioni e architettura frontend (IO e FastStore) con impatto reale sulla conversione.",
    },
  },
  {
    id: "migrations",
    title: {
      es: "Migraciones",
      en: "Migrations",
      "pt-BR": "Migrações",
      it: "Migrazioni",
    },
    body: {
      es: "Legacy → VTEX IO / FastStore: estrategia, límites de customización y plan de entrega que no rompa la operación.",
      en: "Legacy → VTEX IO / FastStore: strategy, customization boundaries and a delivery plan that doesn't break operations.",
      "pt-BR":
        "Legacy → VTEX IO / FastStore: estratégia, limites de customização e plano de entrega que não quebre a operação.",
      it: "Legacy → VTEX IO / FastStore: strategia, limiti di customizzazione e piano di consegna che non interrompa le operazioni.",
    },
  },
  {
    id: "leadership",
    title: {
      es: "Technical Leadership",
      en: "Technical Leadership",
    },
    body: {
      es: "Definición técnica, code reviews, mentoring, arquitectura y coordinación de equipos en proyectos enterprise.",
      en: "Technical direction, code reviews, mentoring, architecture and team coordination on enterprise projects.",
      "pt-BR":
        "Definição técnica, code reviews, mentoring, arquitetura e coordenação de times em projetos enterprise.",
      it: "Direzione tecnica, code review, mentoring, architettura e coordinamento di team su progetti enterprise.",
    },
  },
];
