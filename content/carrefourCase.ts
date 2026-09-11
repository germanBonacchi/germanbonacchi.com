import type { Localized } from "./types";

/** Deep case-study extras for Carrefour (home of the flagship story). */
export const carrefourCase: {
  eyebrow: Localized;
  architectureTitle: Localized;
  architectureNote: Localized;
  decisionsTitle: Localized;
  decisions: Localized<string[]>;
  tradeoffsTitle: Localized;
  tradeoffs: Localized<string[]>;
  complexityTitle: Localized;
  complexity: Localized<string[]>;
  responsibilitiesTitle: Localized;
  responsibilities: Localized<string[]>;
  resultsTitle: Localized;
  results: Localized<string[]>;
  confidentiality: Localized;
} = {
  eyebrow: {
    es: "Arquitectura VTEX IO para retail multi-vertical",
    en: "VTEX IO architecture for multi-vertical retail",
    "pt-BR": "Arquitetura VTEX IO para retail multi-vertical",
    it: "Architettura VTEX IO per retail multi-verticale",
  },
  architectureTitle: {
    es: "Arquitectura (simplificada)",
    en: "Architecture (simplified)",
    "pt-BR": "Arquitetura (simplificada)",
    it: "Architettura (semplificata)",
  },
  architectureNote: {
    es: "Vista de alto nivel: storefront IO + apps custom, checkout/logística, y sistemas externos detrás de una capa de integración.",
    en: "High-level view: IO storefront + custom apps, checkout/logistics, and external systems behind an integration layer.",
    "pt-BR":
      "Visão de alto nível: storefront IO + apps custom, checkout/logística, e sistemas externos atrás de uma camada de integração.",
    it: "Vista ad alto livello: storefront IO + app custom, checkout/logistica, e sistemi esterni dietro un layer di integrazione.",
  },
  decisionsTitle: {
    es: "Decisiones clave",
    en: "Key decisions",
    "pt-BR": "Decisões-chave",
    it: "Decisioni chiave",
  },
  decisions: {
    es: [
      "Separar minicart por segmento (supermercado / hogar-electro / sellers) para respetar mínimos, simulación de envío y políticas incompatibles.",
      "Hacer que el regionalizador fije región, seller y sales channel antes de navegar — no después del carrito.",
      "Mantener Mega Menu administrable desde Admin con visibilidad por segmento food / non-food.",
      "Evolucionar theme + apps sin big-bang: cambios incrementales sobre una operación diaria de alto tráfico.",
    ],
    en: [
      "Split the minicart by segment (supermarket / home-appliances / sellers) to respect minimums, shipping simulation and incompatible policies.",
      "Make the regionalizer set region, seller and sales channel before browsing — not after the cart.",
      "Keep Mega Menu Admin-managed with food / non-food segment visibility.",
      "Evolve theme + apps without a big-bang: incremental changes on a high-traffic daily operation.",
    ],
  },
  tradeoffsTitle: {
    es: "Trade-offs",
    en: "Trade-offs",
  },
  tradeoffs: {
    es: [
      "Un solo storefront multi-vertical vs. sitios separados: se gana experiencia unificada y se paga complejidad de reglas de carrito/logística.",
      "Customizaciones profundas en IO vs. capacidades nativas: se priorizó lo nativo donde alcanzaba; lo custom quedó con ownership claro.",
      "Velocidad de entrega vs. deuda: features críticas se hicieron hands-on; el resto se coordinó con equipos y partners.",
    ],
    en: [
      "One multi-vertical storefront vs. separate sites: unified experience at the cost of cart/logistics rule complexity.",
      "Deep IO customizations vs. native capabilities: native first where enough; customs kept with clear ownership.",
      "Delivery speed vs. debt: critical features were hands-on; the rest coordinated with teams and partners.",
    ],
  },
  complexityTitle: {
    es: "Complejidad del dominio",
    en: "Domain complexity",
    "pt-BR": "Complexidade do domínio",
    it: "Complessità del dominio",
  },
  complexity: {
    es: [
      "Catálogo multi-vertical (grocery, hogar y electro, marketplace)",
      "Checkout y promociones con reglas por segmento",
      "Logística omnicanal (domicilio, Drive, entrega inmediata)",
      "Integraciones y middleware de operación diaria",
      "Performance de storefront bajo tráfico alto",
    ],
    en: [
      "Multi-vertical catalog (grocery, home & appliances, marketplace)",
      "Checkout and promotions with per-segment rules",
      "Omnichannel logistics (home delivery, Drive, quick commerce)",
      "Integrations and middleware for daily operations",
      "Storefront performance under high traffic",
    ],
  },
  responsibilitiesTitle: {
    es: "Mi responsabilidad",
    en: "My responsibility",
    "pt-BR": "Minha responsabilidade",
    it: "La mia responsabilità",
  },
  responsibilities: {
    es: [
      "Architecture & solution design",
      "Technical decisions y trade-offs",
      "Code & architecture reviews",
      "Desarrollo VTEX IO (theme y apps)",
      "Diseño de integraciones",
      "Coordinación de equipos y stakeholders",
      "Troubleshooting y support de producción",
    ],
    en: [
      "Architecture & solution design",
      "Technical decisions and trade-offs",
      "Code & architecture reviews",
      "VTEX IO development (theme and apps)",
      "Integration design",
      "Team and stakeholder coordination",
      "Troubleshooting and production support",
    ],
  },
  resultsTitle: {
    es: "Resultado (público / no confidencial)",
    en: "Outcome (public / non-confidential)",
    "pt-BR": "Resultado (público / não confidencial)",
    it: "Risultato (pubblico / non confidenziale)",
  },
  results: {
    es: [
      "Plataforma omnicanal en producción continua sobre VTEX IO.",
      "Comunicaciones públicas del canal digital han citado millones de visitas mensuales y alto volumen de pedidos.",
      "Entregas clave en producción: Mega Menu, regionalizador moderno y split de carritos por segmento.",
    ],
    en: [
      "Omnichannel platform in continuous production on VTEX IO.",
      "Public reporting on the digital channel has cited millions of monthly visits and high order volume.",
      "Key production deliveries: Mega Menu, modern regionalizer and cart split by segment.",
    ],
  },
  confidentiality: {
    es: "Por razones de confidencialidad, algunos componentes y métricas fueron simplificados u omitidos.",
    en: "For confidentiality reasons, some components and metrics were simplified or omitted.",
    "pt-BR":
      "Por razões de confidencialidade, alguns componentes e métricas foram simplificados ou omitidos.",
    it: "Per motivi di riservatezza, alcuni componenti e metriche sono stati semplificati o omessi.",
  },
};
