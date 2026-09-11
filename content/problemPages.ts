import type { Localized } from "./types";
import { problems } from "./problems";

export type ProblemSlug = (typeof problems)[number]["id"];

export interface ProblemRelatedLink {
  href: string;
  label: Localized;
}

export interface ProblemPage {
  slug: ProblemSlug;
  /** Short SEO/meta description */
  description: Localized;
  lead: Localized;
  points: Localized<string[]>;
  related?: ProblemRelatedLink[];
}

export const problemPages: ProblemPage[] = [
  {
    slug: "architecture",
    description: {
      es: "Arquitectura VTEX para retailers de alta escala: límites de plataforma, acoplamiento y diseño operable.",
      en: "VTEX architecture for large-scale retailers: platform boundaries, coupling and operable design.",
      "pt-BR":
        "Arquitetura VTEX para retailers de alta escala: limites de plataforma, acoplamento e design operável.",
      it: "Architettura VTEX per retailer su larga scala: confini di piattaforma, accoppiamento e design operabile.",
    },
    lead: {
      es: "La pregunta no es “qué tan customizable es VTEX”, sino qué debe vivir adentro, qué afuera y cómo se opera a escala sin convertir la plataforma en un monolito. Trabajo límites entre storefront, checkout, BFFs, ERP/OMS/WMS y servicios externos.",
      en: "The question isn't “how customizable is VTEX”, but what belongs inside, what outside, and how you operate at scale without turning the platform into a monolith. I work boundaries between storefront, checkout, BFFs, ERP/OMS/WMS and external services.",
      "pt-BR":
        "A pergunta não é “o quão customizável é a VTEX”, e sim o que deve viver dentro, o que fora e como operar em escala sem transformar a plataforma em monolito. Trabalho limites entre storefront, checkout, BFFs, ERP/OMS/WMS e serviços externos.",
      it: "La domanda non è “quanto è customizzabile VTEX”, ma cosa deve vivere dentro, cosa fuori e come operare a scala senza trasformare la piattaforma in un monolite. Lavoro sui confini tra storefront, checkout, BFF, ERP/OMS/WMS e servizi esterni.",
    },
    points: {
      es: [
        "Mapear dominios: commerce nativo vs lógica de negocio core.",
        "Definir ownership y contratos entre VTEX apps, BFFs e integraciones.",
        "Reducir customización innecesaria que encarece upgrades y soporte.",
        "Dejar trade-offs explícitos para negocio y equipo técnico.",
      ],
      en: [
        "Map domains: native commerce vs core business logic.",
        "Define ownership and contracts across VTEX apps, BFFs and integrations.",
        "Cut unnecessary customization that inflates upgrades and support cost.",
        "Make trade-offs explicit for business and the engineering team.",
      ],
      "pt-BR": [
        "Mapear domínios: commerce nativo vs lógica de negócio core.",
        "Definir ownership e contratos entre apps VTEX, BFFs e integrações.",
        "Reduzir customização desnecessária que encarece upgrades e suporte.",
        "Deixar trade-offs explícitos para negócio e time técnico.",
      ],
      it: [
        "Mappare i domini: commerce nativo vs logica di business core.",
        "Definire ownership e contratti tra app VTEX, BFF e integrazioni.",
        "Ridurre custom non necessarie che alzano costo di upgrade e supporto.",
        "Rendere i trade-off espliciti per business e team tecnico.",
      ],
    },
    related: [
      {
        href: "/decisions",
        label: {
          es: "Decisiones de arquitectura (IO vs FastStore, apps, ERP…)",
          en: "Architecture decisions (IO vs FastStore, apps, ERP…)",
          "pt-BR": "Decisões de arquitetura (IO vs FastStore, apps, ERP…)",
          it: "Decisioni di architettura (IO vs FastStore, app, ERP…)",
        },
      },
      {
        href: "/philosophy",
        label: {
          es: "Filosofía de arquitectura",
          en: "Architecture philosophy",
          "pt-BR": "Filosofia de arquitetura",
          it: "Filosofia di architettura",
        },
      },
    ],
  },
  {
    slug: "checkout",
    description: {
      es: "Checkout VTEX: promociones, pagos, extensiones y troubleshooting cuando lo nativo no alcanza.",
      en: "VTEX checkout: promotions, payments, extensions and troubleshooting when native falls short.",
      "pt-BR":
        "Checkout VTEX: promoções, pagamentos, extensões e troubleshooting quando o nativo não basta.",
      it: "Checkout VTEX: promozioni, pagamenti, estensioni e troubleshooting quando il nativo non basta.",
    },
    lead: {
      es: "El checkout es donde la arquitectura se encuentra con la conversión. Cuando promociones, pagos o reglas de negocio superan lo nativo, hay que elegir extensión (Checkout UI, apps, orderForm, pre/post) sin hipotecar upgrades.",
      en: "Checkout is where architecture meets conversion. When promotions, payments or business rules outgrow native capabilities, you choose an extension path (Checkout UI, apps, orderForm, pre/post) without mortgaging upgrades.",
      "pt-BR":
        "O checkout é onde a arquitetura encontra a conversão. Quando promoções, pagamentos ou regras de negócio passam do nativo, é preciso escolher a extensão (Checkout UI, apps, orderForm, pré/pós) sem hipotecar upgrades.",
      it: "Il checkout è dove l'architettura incontra la conversione. Quando promo, pagamenti o regole superano il nativo, va scelta un'estensione (Checkout UI, app, orderForm, pre/post) senza ipotecare gli upgrade.",
    },
    points: {
      es: [
        "Diagnosticar si el gap es de producto VTEX, de datos o de requerimiento de negocio.",
        "Elegir el menor custom que resuelva el caso con ownership claro.",
        "Diseñar degradación y observabilidad en el camino crítico de compra.",
        "Alinear checkout con reglas de negocio, canales y logística sin romper upgrades.",
      ],
      en: [
        "Diagnose whether the gap is VTEX product, data, or a business requirement.",
        "Pick the smallest custom that solves the case with clear ownership.",
        "Design degradation and observability on the critical purchase path.",
        "Align checkout with business rules, channels and logistics without breaking upgrades.",
      ],
      "pt-BR": [
        "Diagnosticar se o gap é de produto VTEX, de dados ou de requisito de negócio.",
        "Escolher o menor custom que resolva o caso com ownership claro.",
        "Desenhar degradação e observabilidade no caminho crítico da compra.",
        "Alinhar checkout com regras de negócio, canais e logística sem quebrar upgrades.",
      ],
      it: [
        "Capire se il gap è prodotto VTEX, dati o requisito di business.",
        "Scegliere il custom minimo che risolva il caso con ownership chiaro.",
        "Progettare degradazione e osservabilità sul percorso critico d'acquisto.",
        "Allineare il checkout a regole di business, canali e logistica senza rompere gli upgrade.",
      ],
    },
    related: [
      {
        href: "/decisions#checkout-gap",
        label: {
          es: "Qué hacer cuando el checkout necesita algo no nativo",
          en: "What when checkout needs something non-native",
          "pt-BR": "O que fazer quando o checkout precisa de algo não nativo",
          it: "Cosa fare quando il checkout serve qualcosa di non nativo",
        },
      },
    ],
  },
  {
    slug: "integrations",
    description: {
      es: "Integraciones VTEX con ERP, OMS, WMS, CRM, marketplaces y pagos: sync/async sin sobreacoplar.",
      en: "VTEX integrations with ERP, OMS, WMS, CRM, marketplaces and payments: sync/async without over-coupling.",
      "pt-BR":
        "Integrações VTEX com ERP, OMS, WMS, CRM, marketplaces e pagamentos: sync/async sem sobreacoplar.",
      it: "Integrazioni VTEX con ERP, OMS, WMS, CRM, marketplace e pagamenti: sync/async senza sovracoppiare.",
    },
    lead: {
      es: "Las integraciones suelen ser el costo oculto de una implementación. Diseño flujos síncronos y asíncronos con idempotencia, reintentos y reconciliación visible, para que el storefront no dependa del ERP en el camino crítico salvo que el negocio lo exija.",
      en: "Integrations are often the hidden cost of an implementation. I design sync and async flows with idempotency, retries and visible reconciliation, so the storefront doesn't wait on the ERP on the critical path unless business requires it.",
      "pt-BR":
        "Integrações costumam ser o custo oculto de uma implementação. Desenho fluxos síncronos e assíncronos com idempotência, retries e reconciliação visível, para o storefront não depender do ERP no caminho crítico salvo se o negócio exigir.",
      it: "Le integrazioni sono spesso il costo nascosto di un'implementazione. Progetto flussi sync e async con idempotenza, retry e riconciliazione visibile, così lo storefront non dipende dall'ERP sul percorso critico salvo richiesta di business.",
    },
    points: {
      es: [
        "Contratos claros: eventos, colas, APIs y estados de reconciliación.",
        "Separar caminos críticos de compra de procesos batch/backoffice.",
        "Observabilidad: métricas, logs y trazas como parte del “done”.",
        "Evitar meter lógica de dominio core dentro de apps VTEX por comodidad.",
      ],
      en: [
        "Clear contracts: events, queues, APIs and reconciliation states.",
        "Separate critical purchase paths from batch/backoffice processes.",
        "Observability: metrics, logs and traces as part of “done”.",
        "Avoid stuffing core domain logic into VTEX apps for convenience.",
      ],
      "pt-BR": [
        "Contratos claros: eventos, filas, APIs e estados de reconciliação.",
        "Separar caminhos críticos de compra de processos batch/backoffice.",
        "Observabilidade: métricas, logs e traces como parte do “done”.",
        "Evitar meter lógica de domínio core dentro de apps VTEX por comodidade.",
      ],
      it: [
        "Contratti chiari: eventi, code, API e stati di riconciliazione.",
        "Separare i percorsi critici d'acquisto dai processi batch/backoffice.",
        "Osservabilità: metriche, log e trace come parte del “done”.",
        "Evitare di mettere logica di dominio core dentro le app VTEX per comodità.",
      ],
    },
    related: [
      {
        href: "/decisions#async-erp",
        label: {
          es: "Integraciones asincrónicas con ERP",
          en: "Async ERP integrations",
          "pt-BR": "Integrações assíncronas com ERP",
          it: "Integrazioni asincrone con ERP",
        },
      },
      {
        href: "/decisions#in-vs-out",
        label: {
          es: "App VTEX vs externalizar",
          en: "VTEX app vs externalize",
          "pt-BR": "App VTEX vs externalizar",
          it: "App VTEX vs esternalizzare",
        },
      },
    ],
  },
  {
    slug: "performance",
    description: {
      es: "Performance VTEX en storefront, APIs e integraciones (IO y FastStore) con impacto en conversión.",
      en: "VTEX performance across storefront, APIs and integrations (IO and FastStore) with conversion impact.",
      "pt-BR":
        "Performance VTEX em storefront, APIs e integrações (IO e FastStore) com impacto em conversão.",
      it: "Performance VTEX su storefront, API e integrazioni (IO e FastStore) con impatto sulla conversione.",
    },
    lead: {
      es: "La performance no es polish final: condiciona límites de servicios, caching, payload y diseño de storefront. Trabajo bottlenecks en IO/FastStore, latencia de APIs e integraciones, y prioridades de remediación accionables.",
      en: "Performance isn't final polish: it shapes service boundaries, caching, payloads and storefront design. I work bottlenecks on IO/FastStore, API and integration latency, and actionable remediation priorities.",
      "pt-BR":
        "Performance não é polish final: condiciona limites de serviços, caching, payload e desenho de storefront. Trabalho bottlenecks em IO/FastStore, latência de APIs e integrações, e prioridades de remediação acionáveis.",
      it: "La performance non è polish finale: condiziona confini di servizi, caching, payload e design dello storefront. Lavoro su bottleneck IO/FastStore, latenza di API e integrazioni, e priorità di remediation azionabili.",
    },
    points: {
      es: [
        "Medir antes de optimizar: storefront, BFF, APIs e integraciones.",
        "Separar síntomas de frontend de causas en datos o backend.",
        "Priorizar remediación por impacto en conversión y costo de ownership.",
        "Tratar performance como requisito arquitectónico desde el diseño.",
      ],
      en: [
        "Measure before optimizing: storefront, BFF, APIs and integrations.",
        "Separate frontend symptoms from data or backend causes.",
        "Prioritize remediation by conversion impact and ownership cost.",
        "Treat performance as an architectural requirement from day one.",
      ],
      "pt-BR": [
        "Medir antes de otimizar: storefront, BFF, APIs e integrações.",
        "Separar sintomas de frontend de causas em dados ou backend.",
        "Priorizar remediação por impacto em conversão e custo de ownership.",
        "Tratar performance como requisito arquitetônico desde o desenho.",
      ],
      it: [
        "Misurare prima di ottimizzare: storefront, BFF, API e integrazioni.",
        "Separare sintomi frontend da cause dati o backend.",
        "Priorizzare la remediation per impatto su conversione e costo di ownership.",
        "Trattare la performance come requisito architetturale dal design.",
      ],
    },
    related: [
      {
        href: "/services",
        label: {
          es: "Performance Review y troubleshooting",
          en: "Performance Review and troubleshooting",
          "pt-BR": "Performance Review e troubleshooting",
          it: "Performance Review e troubleshooting",
        },
      },
    ],
  },
  {
    slug: "migrations",
    description: {
      es: "Migraciones Legacy → VTEX IO / FastStore: estrategia, límites de custom y plan de entrega operable.",
      en: "Migrations Legacy → VTEX IO / FastStore: strategy, customization boundaries and an operable delivery plan.",
      "pt-BR":
        "Migrações Legacy → VTEX IO / FastStore: estratégia, limites de custom e plano de entrega operável.",
      it: "Migrazioni Legacy → VTEX IO / FastStore: strategia, limiti di custom e piano di consegna operabile.",
    },
    lead: {
      es: "Una migración exitosa no es solo “levantar el storefront”: es decidir qué migrar, en qué orden y qué no customizar. Combino estrategia de plataforma con un plan de entrega que no rompa la operación (como en migraciones FastStore con ventanas cortas).",
      en: "A successful migration isn't just “standing up the storefront”: it's deciding what to migrate, in what order, and what not to customize. I combine platform strategy with a delivery plan that doesn't break operations (including FastStore migrations under short windows).",
      "pt-BR":
        "Uma migração bem-sucedida não é só “subir o storefront”: é decidir o que migrar, em que ordem e o que não customizar. Combino estratégia de plataforma com um plano de entrega que não quebre a operação (incluindo migrações FastStore em janelas curtas).",
      it: "Una migrazione riuscita non è solo “alzare lo storefront”: è decidere cosa migrare, in che ordine e cosa non customizzare. Combino strategia di piattaforma e un piano di consegna che non interrompa le operazioni (anche migrazioni FastStore in finestre corte).",
    },
    points: {
      es: [
        "Baseline del legacy: dependencias, deuda y riesgos de cutover.",
        "Elegir IO vs FastStore según constraints reales, no moda.",
        "Fases y rollback explícitos; custom solo donde aporta valor.",
        "Alinear equipos, partners y negocio en el plan de entrega.",
      ],
      en: [
        "Legacy baseline: dependencies, debt and cutover risks.",
        "Choose IO vs FastStore from real constraints, not trends.",
        "Explicit phases and rollback; customize only where it adds value.",
        "Align teams, partners and business around the delivery plan.",
      ],
      "pt-BR": [
        "Baseline do legacy: dependências, dívida e riscos de cutover.",
        "Escolher IO vs FastStore por constraints reais, não moda.",
        "Fases e rollback explícitos; custom só onde agrega valor.",
        "Alinhar times, partners e negócio no plano de entrega.",
      ],
      it: [
        "Baseline del legacy: dipendenze, debito e rischi di cutover.",
        "Scegliere IO vs FastStore da constraint reali, non da moda.",
        "Fasi e rollback espliciti; custom solo dove genera valore.",
        "Allineare team, partner e business sul piano di consegna.",
      ],
    },
    related: [
      {
        href: "/decisions#io-vs-faststore",
        label: {
          es: "Cuándo IO y cuándo FastStore",
          en: "When IO vs FastStore",
          "pt-BR": "Quando IO e quando FastStore",
          it: "Quando IO e quando FastStore",
        },
      },
      {
        href: "/projects/cetrogar",
        label: {
          es: "Case Cetrogar: migración FastStore",
          en: "Cetrogar case: FastStore migration",
          "pt-BR": "Case Cetrogar: migração FastStore",
          it: "Case Cetrogar: migrazione FastStore",
        },
      },
    ],
  },
  {
    slug: "leadership",
    description: {
      es: "Technical leadership VTEX: dirección técnica, reviews, mentoring y coordinación en proyectos enterprise.",
      en: "VTEX technical leadership: technical direction, reviews, mentoring and coordination on enterprise projects.",
      "pt-BR":
        "Technical leadership VTEX: direção técnica, reviews, mentoring e coordenação em projetos enterprise.",
      it: "Technical leadership VTEX: direzione tecnica, review, mentoring e coordinamento su progetti enterprise.",
    },
    lead: {
      es: "Liderazgo técnico en commerce VTEX: definir dirección, revisar arquitectura y código, mentorear, y coordinar con producto, partners y stakeholders — codeando cuando la complejidad lo pide.",
      en: "Technical leadership on VTEX commerce: set direction, review architecture and code, mentor, and coordinate with product, partners and stakeholders — coding when complexity demands it.",
      "pt-BR":
        "Liderança técnica em commerce VTEX: definir direção, revisar arquitetura e código, mentorar e coordenar com produto, partners e stakeholders — codando quando a complexidade pede.",
      it: "Leadership tecnica su commerce VTEX: definire direzione, revisionare architettura e codice, fare mentoring e coordinare con prodotto, partner e stakeholder — scrivendo codice quando la complessità lo richiede.",
    },
    points: {
      es: [
        "Dirección técnica alineada a constraints de negocio y plataforma.",
        "Reviews de arquitectura y código con foco en operabilidad.",
        "Mentoring y leveling de equipos VTEX (agencia o internos).",
        "Traducir trade-offs técnicos a lenguaje de stakeholders.",
      ],
      en: [
        "Technical direction aligned to business and platform constraints.",
        "Architecture and code reviews focused on operability.",
        "Mentoring and leveling of VTEX teams (agency or internal).",
        "Translate technical trade-offs into stakeholder language.",
      ],
      "pt-BR": [
        "Direção técnica alinhada a constraints de negócio e plataforma.",
        "Reviews de arquitetura e código com foco em operabilidade.",
        "Mentoring e leveling de times VTEX (agência ou internos).",
        "Traduzir trade-offs técnicos para linguagem de stakeholders.",
      ],
      it: [
        "Direzione tecnica allineata a constraint di business e piattaforma.",
        "Review di architettura e codice con focus sull'operabilità.",
        "Mentoring e leveling di team VTEX (agenzia o interni).",
        "Tradurre i trade-off tecnici nel linguaggio degli stakeholder.",
      ],
    },
    related: [
      {
        href: "/services",
        label: {
          es: "Cómo puedo ayudarte (engagements)",
          en: "How I can help (engagements)",
          "pt-BR": "Como posso ajudar (engagements)",
          it: "Come posso aiutarti (engagement)",
        },
      },
      {
        href: "/testimonials",
        label: {
          es: "Recomendaciones",
          en: "Testimonials",
          "pt-BR": "Recomendações",
          it: "Raccomandazioni",
        },
      },
    ],
  },
];

export function getProblemPage(slug: string): ProblemPage | undefined {
  return problemPages.find((p) => p.slug === slug);
}

export const problemSlugs = problemPages.map((p) => p.slug);
