import type { Localized } from "./types";

/** Deep case-study extras for Cetrogar (FastStore + custom modules). */
export const cetrogarCase: {
  eyebrow: Localized;
  architectureTitle: Localized;
  architectureNote: Localized;
  modulesTitle: Localized;
  modules: Localized<string[]>;
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
    faststore: Localized;
    faststoreSub: Localized;
    faststoreDetail: Localized;
    checkout: Localized;
    checkoutSub: Localized;
    checkoutDetail: Localized;
    vtexPlatform: Localized;
    vtexPlatformDetail: Localized;
    adminApps: Localized;
    adminAppsLine1: Localized;
    adminAppsLine2: Localized;
    ioServices: Localized;
    ioServicesLine1: Localized;
    ioServicesLine2: Localized;
    vbaseApis: Localized;
    customDomain: Localized;
    customDomainDetail: Localized;
    decision: Localized;
  };
} = {
  eyebrow: {
    es: "FastStore + módulos custom para retail electro",
    en: "FastStore + custom modules for electronics retail",
    "pt-BR": "FastStore + módulos custom para varejo eletro",
    it: "FastStore + moduli custom per retail elettro",
  },
  architectureTitle: {
    es: "Arquitectura (vista realista)",
    en: "Architecture (realistic view)",
    "pt-BR": "Arquitetura (visão realista)",
    it: "Architettura (vista realistica)",
  },
  architectureNote: {
    es: "Storefront FastStore (Next.js) + checkout custom; Admin apps e IO Node services para loyalty, migración, cucardas y matrices de pago. Misma cuenta VTEX, capas claramente separadas.",
    en: "FastStore storefront (Next.js) + custom checkout; Admin apps and IO Node services for loyalty, migration, badges and payment matrices. Same VTEX account, clearly separated layers.",
    "pt-BR":
      "Storefront FastStore (Next.js) + checkout custom; Admin apps e IO Node services para loyalty, migração, badges e matrizes de pagamento. Mesma conta VTEX, camadas bem separadas.",
    it: "Storefront FastStore (Next.js) + checkout custom; Admin app e IO Node services per loyalty, migrazione, badge e matrici di pagamento. Stesso account VTEX, layer ben separati.",
  },
  modulesTitle: {
    es: "Módulos custom clave",
    en: "Key custom modules",
    "pt-BR": "Módulos custom chave",
    it: "Moduli custom chiave",
  },
  modules: {
    es: [
      "Puntos Cetrogar — loyalty propio: saldo/ledger en Master Data, canje en checkout, acreditación y refund vía eventos OMS, My Account y admin.",
      "Migration Helper — pipelines Magento → VTEX de clientes (CL), direcciones (AD) y puntos (pointsTransactions), con reconciliación de saldos.",
      "Admin Cucardas — gestión de badges (texto/imagen, vigencia, prioridad, posición) en VBase; FastStore las consume con cache por hash.",
      "Matrices de Pago — segmento de productos × cuotas/interés; sync gobernado hacia Payment Rules y condiciones comerciales.",
    ],
    en: [
      "Cetrogar Points — custom loyalty: Master Data balance/ledger, checkout redemption, OMS accrual and refund events, My Account and admin.",
      "Migration Helper — Magento → VTEX pipelines for customers (CL), addresses (AD) and points (pointsTransactions), with balance reconciliation.",
      "Admin Badges (Cucardas) — badge CRUD (text/image, schedule, priority, position) on VBase; FastStore consumes them with hash-based cache.",
      "Payment Matrices — product segment × installments/interest; governed sync to Payment Rules and commercial conditions.",
    ],
    "pt-BR": [
      "Pontos Cetrogar — loyalty próprio: saldo/ledger no Master Data, resgate no checkout, acreditação e refund via eventos OMS, My Account e admin.",
      "Migration Helper — pipelines Magento → VTEX de clientes (CL), endereços (AD) e pontos (pointsTransactions), com reconciliação de saldos.",
      "Admin Cucardas — gestão de badges (texto/imagem, vigência, prioridade, posição) no VBase; FastStore consome com cache por hash.",
      "Matrizes de Pagamento — segmento de produtos × parcelas/juros; sync governado para Payment Rules e condições comerciais.",
    ],
    it: [
      "Punti Cetrogar — loyalty proprietario: saldo/ledger su Master Data, riscatto in checkout, accredito e refund via eventi OMS, My Account e admin.",
      "Migration Helper — pipeline Magento → VTEX per clienti (CL), indirizzi (AD) e punti (pointsTransactions), con riconciliazione saldi.",
      "Admin Cucardas — gestione badge (testo/immagine, validità, priorità, posizione) su VBase; FastStore li consuma con cache per hash.",
      "Matrici di Pagamento — segmento prodotti × rate/interessi; sync governato verso Payment Rules e condizioni commerciali.",
    ],
  },
  decisionsTitle: {
    es: "Decisiones clave",
    en: "Key decisions",
    "pt-BR": "Decisões-chave",
    it: "Decisioni chiave",
  },
  decisions: {
    es: [
      "Ir a FastStore / Next.js para el storefront y dejar checkout, loyalty y backoffice en apps VTEX IO (no forzar todo al theme headless).",
      "Modelar puntos como ledger en Master Data (transacciones + saldo) en lugar de un contador opaco, para auditoría y migración Magento.",
      "Exponer cucardas y matrices de pago como Admin apps con persistencia en VBase y sync explícito a Catalog / Payments.",
      "Tratar la migración de clientes, direcciones y puntos como pipelines con dry-run, resume y reconciliación — no como un import único.",
      "Preparar el canal digital para Marketplace sin reescribir el storefront: capas de reglas (pagos, badges, puntos) desacopladas del front.",
    ],
    en: [
      "Move the storefront to FastStore / Next.js and keep checkout, loyalty and backoffice as VTEX IO apps (do not force everything into the headless theme).",
      "Model points as a Master Data ledger (transactions + balance) instead of an opaque counter, for auditability and Magento migration.",
      "Expose badges and payment matrices as Admin apps with VBase persistence and explicit Catalog / Payments sync.",
      "Treat customer, address and points migration as pipelines with dry-run, resume and reconciliation — not a one-shot import.",
      "Prepare the digital channel for Marketplace without rewriting the storefront: rule layers (payments, badges, points) decoupled from the front.",
    ],
  },
  tradeoffsTitle: {
    es: "Trade-offs",
    en: "Trade-offs",
  },
  tradeoffs: {
    es: [
      "FastStore + muchos customs IO vs. Store Framework monolítico: más superficie de ownership, mejor separación storefront / dominio.",
      "Loyalty custom vs. programa nativo: control total del ledger y reglas offline a costa de operar eventos OMS y tax protocol propios.",
      "Admin + VBase para cucardas/matrices vs. solo specs de catálogo: UX operable para negocio, con sync y conflictos de SKU a gobernar.",
      "Ventana ~90 días de go-live vs. profundidad post-launch: el core FastStore salió rápido; puntos, migración y matrices maduraron en evolución.",
    ],
    en: [
      "FastStore + many IO customs vs. a monolithic Store Framework: more ownership surface, better storefront / domain separation.",
      "Custom loyalty vs. a native program: full ledger and offline-rule control at the cost of owning OMS events and tax-protocol flows.",
      "Admin + VBase for badges/matrices vs. catalog specs only: operable UX for business, with sync and SKU conflicts to govern.",
      "~90-day go-live window vs. post-launch depth: FastStore core shipped fast; points, migration and matrices matured in evolution.",
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
      "Catálogo nacional electro / hogar con preparación Marketplace",
      "Loyalty: acreditación, canje, refund y recompensas offline",
      "Migración Magento: CL, AD y reconciliación de saldos de puntos",
      "Cucardas dinámicas consumidas por FastStore",
      "Matrices de pago (cuotas, interés, condiciones comerciales)",
      "Checkout custom + servicios IO (tax, créditos, garantías)",
    ],
    en: [
      "National electronics / home catalog with Marketplace readiness",
      "Loyalty: accrual, redemption, refund and offline rewards",
      "Magento migration: CL, AD and points-balance reconciliation",
      "Dynamic badges consumed by FastStore",
      "Payment matrices (installments, interest, commercial conditions)",
      "Custom checkout + IO services (tax, credit, warranties)",
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
      "Desarrollo FastStore / Next.js y apps VTEX IO",
      "Diseño de módulos Admin y servicios Node",
      "Pipelines de migración y reconciliación de datos",
      "Coordinación de equipos y stakeholders",
      "Troubleshooting y support de producción",
    ],
    en: [
      "Architecture & solution design",
      "Technical decisions and trade-offs",
      "Code & architecture reviews",
      "FastStore / Next.js and VTEX IO app development",
      "Admin module and Node service design",
      "Migration pipelines and data reconciliation",
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
      "Go-live FastStore a escala nacional en alrededor de 90 días, destacado públicamente por VTEX.",
      "Canal digital en producción con storefront Next.js y módulo custom para operación retail electro.",
      "Capacidades post-launch en producción: puntos, migración Magento, cucardas y matrices de pago.",
    ],
    en: [
      "National-scale FastStore go-live in about 90 days, publicly highlighted by VTEX.",
      "Digital channel in production with a Next.js storefront and custom modules for electronics retail operations.",
      "Post-launch capabilities in production: points, Magento migration, badges and payment matrices.",
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
      es: "Diagrama de arquitectura VTEX FastStore de Cetrogar",
      en: "Cetrogar VTEX FastStore architecture diagram",
      "pt-BR": "Diagrama de arquitetura VTEX FastStore da Cetrogar",
      it: "Diagramma di architettura VTEX FastStore di Cetrogar",
    },
    faststore: {
      es: "Storefront FastStore",
      en: "FastStore storefront",
      "pt-BR": "Storefront FastStore",
      it: "Storefront FastStore",
    },
    faststoreSub: {
      es: "Next.js · GraphQL BFF",
      en: "Next.js · GraphQL BFF",
    },
    faststoreDetail: {
      es: "PDPs · PLPs · cucardas · UI de puntos",
      en: "PDPs · PLPs · badges · points UI",
      "pt-BR": "PDPs · PLPs · cucardas · UI de pontos",
      it: "PDP · PLP · badge · UI punti",
    },
    checkout: {
      es: "Checkout custom",
      en: "Custom checkout",
      "pt-BR": "Checkout custom",
      it: "Checkout custom",
    },
    checkoutSub: {
      es: "Checkout UI + servicios IO",
      en: "Checkout UI + IO services",
      "pt-BR": "Checkout UI + serviços IO",
      it: "Checkout UI + servizi IO",
    },
    checkoutDetail: {
      es: "Canje puntos · tax · créditos",
      en: "Points redemption · tax · credit",
      "pt-BR": "Resgate de pontos · tax · créditos",
      it: "Riscatto punti · tax · crediti",
    },
    vtexPlatform: {
      es: "Plataforma VTEX",
      en: "VTEX platform",
      "pt-BR": "Plataforma VTEX",
      it: "Piattaforma VTEX",
    },
    vtexPlatformDetail: {
      es: "Catálogo · Sessions · OMS · Master Data · Payments Gateway",
      en: "Catalog · Sessions · OMS · Master Data · Payments Gateway",
      "pt-BR": "Catálogo · Sessions · OMS · Master Data · Payments Gateway",
      it: "Catalogo · Sessions · OMS · Master Data · Payments Gateway",
    },
    adminApps: {
      es: "Admin apps (IO)",
      en: "Admin apps (IO)",
      "pt-BR": "Admin apps (IO)",
      it: "Admin app (IO)",
    },
    adminAppsLine1: {
      es: "Cucardas · Matrices de pago",
      en: "Badges · Payment matrices",
      "pt-BR": "Cucardas · Matrizes de pagamento",
      it: "Badge · Matrici di pagamento",
    },
    adminAppsLine2: {
      es: "Roles · Créditos · Puntos",
      en: "Roles · Credit · Points",
      "pt-BR": "Roles · Créditos · Pontos",
      it: "Ruoli · Crediti · Punti",
    },
    ioServices: {
      es: "Servicios Node IO",
      en: "IO Node services",
      "pt-BR": "Serviços Node IO",
      it: "Servizi Node IO",
    },
    ioServicesLine1: {
      es: "Puntos · Migration helper",
      en: "Points · Migration helper",
      "pt-BR": "Pontos · Migration helper",
      it: "Punti · Migration helper",
    },
    ioServicesLine2: {
      es: "Tax · Checkout · Buy together",
      en: "Tax · Checkout · Buy together",
      "pt-BR": "Tax · Checkout · Buy together",
      it: "Tax · Checkout · Buy together",
    },
    vbaseApis: {
      es: "VBase / APIs",
      en: "VBase / APIs",
    },
    customDomain: {
      es: "Dominio commerce custom",
      en: "Custom commerce domain",
      "pt-BR": "Domínio commerce custom",
      it: "Dominio commerce custom",
    },
    customDomainDetail: {
      es: "Ledger de loyalty · migración Magento · cucardas · matrices de pago",
      en: "Loyalty ledger · Magento migration · badges · payment matrices",
      "pt-BR":
        "Ledger de loyalty · migração Magento · cucardas · matrizes de pagamento",
      it: "Ledger loyalty · migrazione Magento · badge · matrici di pagamento",
    },
    decision: {
      es: "Decisión: FastStore para el storefront; apps IO para reglas de dominio operables",
      en: "Decision: FastStore for the storefront; IO apps for operable domain rules",
      "pt-BR":
        "Decisão: FastStore para o storefront; apps IO para regras de domínio operáveis",
      it: "Decisione: FastStore per lo storefront; app IO per regole di dominio operabili",
    },
  },
};
