import type { Localized } from "./types";

/** Deep case-study extras for Carrefour (flagship story). */
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
  diagram: {
    ariaLabel: Localized;
    webStorefront: Localized;
    webStorefrontSub: Localized;
    webStorefrontDetail: Localized;
    mobileApp: Localized;
    mobileAppSub: Localized;
    mobileAppDetail: Localized;
    vtexPlatform: Localized;
    vtexPlatformDetail: Localized;
    middleware: Localized;
    middlewareDetail: Localized;
    connector: Localized;
    ioBffs: Localized;
    ioBffsDetail: Localized;
    sharedDomain: Localized;
    sharedDomainLine1: Localized;
    sharedDomainLine2: Localized;
    sharedDomainTiny: Localized;
    decision: Localized;
  };
} = {
  eyebrow: {
    es: "Arquitectura VTEX IO para retail multi-vertical",
    en: "VTEX IO architecture for multi-vertical retail",
    "pt-BR": "Arquitetura VTEX IO para retail multi-vertical",
    it: "Architettura VTEX IO per retail multi-verticale",
  },
  architectureTitle: {
    es: "Arquitectura (vista realista)",
    en: "Architecture (realistic view)",
    "pt-BR": "Arquitetura (visão realista)",
    it: "Architettura (vista realistica)",
  },
  architectureNote: {
    es: "Web sobre VTEX IO Store Framework + checkout custom; app React Native sobre middleware Carrefour (VTEX-backed). Misma lógica de negocio, backends distintos.",
    en: "Web on VTEX IO Store Framework + custom checkout; React Native app on Carrefour middleware (VTEX-backed). Same business domain, different backends.",
    "pt-BR":
      "Web em VTEX IO Store Framework + checkout custom; app React Native sobre middleware Carrefour (VTEX-backed). Mesma lógica de negócio, backends distintos.",
    it: "Web su VTEX IO Store Framework + checkout custom; app React Native sul middleware Carrefour (VTEX-backed). Stessa logica di business, backend diversi.",
  },
  decisionsTitle: {
    es: "Decisiones clave",
    en: "Key decisions",
    "pt-BR": "Decisões-chave",
    it: "Decisioni chiave",
  },
  decisions: {
    es: [
      "Separar el minicart por segmento (supermercado / hogar-electro / sellers) para respetar mínimos, simulación de envío y políticas incompatibles.",
      "Hacer que el regionalizador fije método de entrega, región, seller y sales channel antes de navegar, no después del carrito.",
      "Mantener el mega menú administrable desde Admin con visibilidad por segmento food / non-food (y config distinta web vs app).",
      "Tratar Quick Commerce y compra programada como sales channels distintos: un OrderForm no puede ser ambos a la vez.",
      "Evolucionar theme + 60+ apps custom sin big-bang sobre una operación diaria de alto tráfico.",
    ],
    en: [
      "Split the minicart by segment (supermarket / home-appliances / sellers) to respect minimums, shipping simulation and incompatible policies.",
      "Make the regionalizer set delivery method, region, seller and sales channel before browsing, not after the cart.",
      "Keep the mega menu Admin-managed with food / non-food segment visibility (and different web vs app config).",
      "Treat Quick Commerce and scheduled purchase as separate sales channels: one OrderForm cannot be both at once.",
      "Evolve the theme + 60+ custom apps without a big-bang on a high-traffic daily operation.",
    ],
  },
  tradeoffsTitle: {
    es: "Trade-offs",
    en: "Trade-offs",
  },
  tradeoffs: {
    es: [
      "Un solo storefront multi-vertical vs. sitios separados: experiencia unificada a costa de reglas de carrito/logística más complejas.",
      "Checkout web = Checkout 6 nativo + custom profundo; App = React Native sobre middleware: misma dominio, dos implementaciones. Convergencia headless en curso.",
      "Customizaciones profundas en IO vs. capacidades nativas: nativo primero donde alcanza; lo custom con ownership claro.",
      "Velocidad de entrega vs. deuda: features críticas hands-on; el resto coordinado con equipos y partners.",
    ],
    en: [
      "One multi-vertical storefront vs. separate sites: unified experience at the cost of cart/logistics rule complexity.",
      "Web checkout = native Checkout 6 + deep custom; App = React Native on middleware: same domain, two implementations. Headless convergence in progress.",
      "Deep IO customizations vs. native capabilities: native first where enough; customs with clear ownership.",
      "Delivery speed vs. debt: critical features hands-on; the rest coordinated with teams and partners.",
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
      "Regionalización multi-método (domicilio, Drive, Quick Commerce)",
      "Multi-carrito food / electro / sellers + reglas de incompatibilidad",
      "Checkout web custom + checkout app vía middleware",
      "Integraciones (pagos, logística, loyalty, personalización, analytics)",
      "Performance de storefront bajo tráfico alto",
    ],
    en: [
      "Multi-vertical catalog (grocery, home & appliances, marketplace)",
      "Multi-fulfillment regionalization (home delivery, Drive, Quick Commerce)",
      "Split cart food / electronics / sellers + incompatibility rules",
      "Custom web checkout + app checkout via middleware",
      "Integrations (payments, logistics, loyalty, personalization, analytics)",
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
      "Desarrollo VTEX IO (theme, apps y BFFs)",
      "Diseño de integraciones",
      "Coordinación con el equipo mobile (app React Native)",
      "Coordinación de equipos y stakeholders",
      "Troubleshooting y support de producción",
    ],
    en: [
      "Architecture & solution design",
      "Technical decisions and trade-offs",
      "Code & architecture reviews",
      "VTEX IO development (theme, apps and BFFs)",
      "Integration design",
      "Coordination with the mobile team (React Native app)",
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
      "Plataforma omnicanal en producción continua sobre VTEX IO Store Framework.",
      "Comunicaciones públicas del canal digital han citado millones de visitas mensuales y alto volumen de pedidos.",
      "Hitos en producción: regionalizador multi-método, split de carritos, mega menú, checkout custom e integración con la app React Native.",
    ],
    en: [
      "Omnichannel platform in continuous production on VTEX IO Store Framework.",
      "Public reporting on the digital channel has cited millions of monthly visits and high order volume.",
      "Production milestones: multi-method regionalizer, cart split, mega menu, custom checkout and React Native app integration.",
    ],
  },
  confidentiality: {
    es: "Por razones de confidencialidad, algunos componentes y métricas fueron simplificados u omitidos.",
    en: "For confidentiality reasons, some components and metrics were simplified or omitted.",
    "pt-BR":
      "Por razões de confidencialidade, alguns componentes e métricas foram simplificados ou omitidos.",
    it: "Per motivi di riservatezza, alcuni componenti e metriche sono stati semplificati o omessi.",
  },
  diagram: {
    ariaLabel: {
      es: "Diagrama de arquitectura VTEX de Carrefour",
      en: "Carrefour VTEX architecture diagram",
      "pt-BR": "Diagrama de arquitetura VTEX do Carrefour",
      it: "Diagramma di architettura VTEX di Carrefour",
    },
    webStorefront: {
      es: "Storefront web",
      en: "Web storefront",
      "pt-BR": "Storefront web",
      it: "Storefront web",
    },
    webStorefrontSub: {
      es: "VTEX IO Store Framework",
      en: "VTEX IO Store Framework",
    },
    webStorefrontDetail: {
      es: "Theme · apps custom · Checkout 6",
      en: "Theme · custom apps · Checkout 6",
      "pt-BR": "Theme · apps custom · Checkout 6",
      it: "Theme · app custom · Checkout 6",
    },
    mobileApp: {
      es: "App móvil",
      en: "Mobile app",
      "pt-BR": "App mobile",
      it: "App mobile",
    },
    mobileAppSub: {
      es: "React Native",
      en: "React Native",
    },
    mobileAppDetail: {
      es: "Catálogo · carrito · pantallas de checkout",
      en: "Catalog · cart · checkout screens",
      "pt-BR": "Catálogo · carrinho · telas de checkout",
      it: "Catalogo · carrello · schermate checkout",
    },
    vtexPlatform: {
      es: "Plataforma VTEX",
      en: "VTEX platform",
      "pt-BR": "Plataforma VTEX",
      it: "Piattaforma VTEX",
    },
    vtexPlatformDetail: {
      es: "Catálogo · Sessions · OMS · Master Data",
      en: "Catalog · Sessions · OMS · Master Data",
      "pt-BR": "Catálogo · Sessions · OMS · Master Data",
      it: "Catalogo · Sessions · OMS · Master Data",
    },
    middleware: {
      es: "Middleware Carrefour",
      en: "Carrefour middleware",
      "pt-BR": "Middleware Carrefour",
      it: "Middleware Carrefour",
    },
    middlewareDetail: {
      es: "Catálogo · Checkout · Logística · Pagos",
      en: "Catalog · Checkout · Logistics · Payments",
      "pt-BR": "Catálogo · Checkout · Logística · Pagamentos",
      it: "Catalogo · Checkout · Logistica · Pagamenti",
    },
    connector: {
      es: "connector",
      en: "connector",
      "pt-BR": "connector",
      it: "connector",
    },
    ioBffs: {
      es: "BFFs IO / servicios Node",
      en: "IO BFFs / Node services",
      "pt-BR": "BFFs IO / serviços Node",
      it: "BFF IO / servizi Node",
    },
    ioBffsDetail: {
      es: "regionalizador · checkout · sync de carrito",
      en: "regionalizer · checkout · cart sync",
      "pt-BR": "regionalizador · checkout · sync do carrinho",
      it: "regionalizzatore · checkout · sync carrello",
    },
    sharedDomain: {
      es: "Dominio commerce compartido",
      en: "Shared commerce domain",
      "pt-BR": "Domínio commerce compartilhado",
      it: "Dominio commerce condiviso",
    },
    sharedDomainLine1: {
      es: "Regionalizador · Split de carritos · Food / Non-food",
      en: "Regionalizer · Split cart · Food / Non-food",
      "pt-BR": "Regionalizador · Split de carrinhos · Food / Non-food",
      it: "Regionalizzatore · Split carrelli · Food / Non-food",
    },
    sharedDomainLine2: {
      es: "Drive · Quick Commerce · Reglas de incompatibilidad",
      en: "Drive · Quick Commerce · Incompatibility rules",
      "pt-BR": "Drive · Quick Commerce · Regras de incompatibilidade",
      it: "Drive · Quick Commerce · Regole di incompatibilità",
    },
    sharedDomainTiny: {
      es: "Mismas reglas, implementaciones distintas por canal",
      en: "Same rules, different channel implementations",
      "pt-BR": "Mesmas regras, implementações distintas por canal",
      it: "Stesse regole, implementazioni diverse per canale",
    },
    decision: {
      es: "Decisión: UIs de canal separadas; alinear reglas de dominio entre web y app",
      en: "Decision: keep channel UIs separate; align domain rules across web and app",
      "pt-BR":
        "Decisão: UIs de canal separadas; alinhar regras de domínio entre web e app",
      it: "Decisione: UI di canale separate; allineare le regole di dominio tra web e app",
    },
  },
};
