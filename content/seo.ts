import type { Localized } from "./types";

/**
 * SEO keywords and on-page expertise copy.
 */
export const seoKeywords = [
  "Germán Bonacchi",
  "German Bonacchi",
  "Technical Lead VTEX",
  "líder técnico VTEX",
  "experto VTEX",
  "expertos en VTEX",
  "especialista VTEX Argentina",
  "Valtech VTEX",
  "Valtech Technical Lead",
  "VTEX IO",
  "VTEX FastStore",
  "arquitectura ecommerce",
  "ecommerce architecture",
  "líder técnico ecommerce",
  "Carrefour VTEX",
  "Cetrogar FastStore",
  "Médis Saúde360 VTEX",
  "marketplace.medis.pt",
  "Perfumerías Rouge VTEX",
  "Beauty24 VTEX",
  "Rouge Maison VTEX",
  "ecosistema Rouge",
  "React TypeScript Node.js VTEX",
];

export const seoTitle: Record<"default" | "home", Localized> = {
  default: {
    es: "Germán Bonacchi | Líder técnico VTEX & Technical Lead Commerce | Valtech",
    en: "Germán Bonacchi | VTEX Technical Lead & Commerce Architecture | Valtech",
    "pt-BR":
      "Germán Bonacchi | Líder Técnico VTEX & Technical Lead Commerce | Valtech",
    it: "Germán Bonacchi | Technical Lead VTEX & Commerce Architecture | Valtech",
  },
  home: {
    es: "Germán Bonacchi | Líder técnico VTEX en Valtech | FastStore, IO y arquitectura ecommerce",
    en: "Germán Bonacchi | VTEX Technical Lead at Valtech | FastStore, IO & Ecommerce Architecture",
    "pt-BR":
      "Germán Bonacchi | Líder Técnico VTEX na Valtech | FastStore, IO e Arquitetura Ecommerce",
    it: "Germán Bonacchi | Technical Lead VTEX in Valtech | FastStore, IO e Architettura Ecommerce",
  },
};

export const projectsPageSeo: Localized<{ title: string; description: string }> = {
  es: {
    title: "Proyectos VTEX & Ecommerce | Carrefour, Cetrogar, Médis, Rouge",
    description:
      "Proyectos destacados de Germán Bonacchi, líder técnico VTEX en Valtech: Carrefour Argentina, Cetrogar FastStore, Médis Marketplace y el ecosistema Rouge (Perfumerías Rouge, Beauty24, Rouge Maison).",
  },
  en: {
    title: "VTEX & Ecommerce Projects | Carrefour, Cetrogar, Médis, Rouge",
    description:
      "Selected projects by Germán Bonacchi, Technical Lead for VTEX at Valtech: Carrefour Argentina, Cetrogar FastStore, Médis Marketplace and the Rouge ecosystem (Perfumerías Rouge, Beauty24, Rouge Maison).",
  },
  "pt-BR": {
    title: "Projetos VTEX & Ecommerce | Carrefour, Cetrogar, Médis, Rouge",
    description:
      "Projetos selecionados de Germán Bonacchi, Technical Lead de VTEX na Valtech: Carrefour Argentina, Cetrogar FastStore, Médis Marketplace e o ecossistema Rouge (Perfumerías Rouge, Beauty24, Rouge Maison).",
  },
  it: {
    title: "Progetti VTEX & Ecommerce | Carrefour, Cetrogar, Médis, Rouge",
    description:
      "Progetti selezionati di Germán Bonacchi, Technical Lead VTEX in Valtech: Carrefour Argentina, Cetrogar FastStore, Médis Marketplace e l'ecosistema Rouge (Perfumerías Rouge, Beauty24, Rouge Maison).",
  },
};

export const seoDescription: Localized = {
  en: "I'm Germán Bonacchi, Technical Lead for VTEX at Valtech. I work with VTEX IO, FastStore, ecommerce architecture, checkout and integrations on projects like Carrefour, Cetrogar, Médis and Rouge.",
  es: "Soy Germán Bonacchi, líder técnico VTEX en Valtech. Trabajo con VTEX IO, FastStore, arquitectura ecommerce, checkout e integraciones en proyectos como Carrefour, Cetrogar, Médis y Rouge.",
  "pt-BR":
    "Sou Germán Bonacchi, Technical Lead de VTEX na Valtech. Trabalho com VTEX IO, FastStore, arquitetura ecommerce, checkout e integrações em projetos como Carrefour, Cetrogar, Médis e Rouge.",
  it: "Sono Germán Bonacchi, Technical Lead VTEX in Valtech. Lavoro con VTEX IO, FastStore, architettura ecommerce, checkout e integrazioni su progetti come Carrefour, Cetrogar, Médis e Rouge.",
};

export interface SeoBlock {
  id: string;
  heading: Localized;
  paragraphs: Localized<string[]>;
}

export const entitySeoBlocks: SeoBlock[] = [
  {
    id: "who-vtex-lead",
    heading: {
      en: "Technical Lead VTEX at Valtech",
      es: "Technical Lead VTEX en Valtech",
      "pt-BR": "Technical Lead VTEX na Valtech",
      it: "Technical Lead VTEX in Valtech",
    },
    paragraphs: {
      en: [
        "I lead technical work on VTEX ecommerce at Valtech. That means architecture decisions, coordination with teams and stakeholders, and coding when the problem needs it.",
        "Most of my day-to-day sits between platform design and delivery: storefronts, checkout, integrations and the glue that keeps large retailers running.",
      ],
      es: [
        "En Valtech lidero el trabajo técnico en commerce sobre VTEX. Tomo decisiones de arquitectura, coordino con equipos y stakeholders, y codeo cuando el problema lo pide.",
        "Gran parte del día a día está entre diseño de plataforma y entrega: storefronts, checkout, integraciones y todo lo que hace que un retailer grande siga andando.",
      ],
      "pt-BR": [
        "Na Valtech lidero o trabalho técnico em commerce sobre VTEX. Tomo decisões de arquitetura, coordeno times e stakeholders, e codifico quando o problema pede.",
        "Boa parte do dia a dia fica entre desenho de plataforma e entrega: storefronts, checkout, integrações e o que faz um grande retailer continuar rodando.",
      ],
      it: [
        "In Valtech guido il lavoro tecnico su commerce VTEX. Prendo decisioni di architettura, coordino team e stakeholder, e scrivo codice quando serve.",
        "Gran parte della giornata sta tra design di piattaforma e delivery: storefront, checkout, integrazioni e ciò che tiene in piedi un grande retailer.",
      ],
    },
  },
  {
    id: "expertise-domains",
    heading: {
      en: "What I work on in the VTEX stack",
      es: "En qué trabajo dentro del stack VTEX",
      "pt-BR": "No que trabalho dentro do stack VTEX",
      it: "Su cosa lavoro nello stack VTEX",
    },
    paragraphs: {
      en: [
        "VTEX IO, FastStore, checkout, payments, logistics, search, APIs, middleware, integrations and performance.",
        "I also do solution design and technical reviews. If a module is messy or blocked, I get into the code.",
      ],
      es: [
        "VTEX IO, FastStore, checkout, pagos, logística, búsqueda, APIs, middleware, integraciones y performance.",
        "También hago diseño de soluciones y reviews técnicas. Si un módulo está trabado o es complejo, entro al código.",
      ],
      "pt-BR": [
        "VTEX IO, FastStore, checkout, pagamentos, logística, busca, APIs, middleware, integrações e performance.",
        "Também faço desenho de soluções e reviews técnicas. Se um módulo trava ou fica complexo, entro no código.",
      ],
      it: [
        "VTEX IO, FastStore, checkout, pagamenti, logistics, search, API, middleware, integrazioni e performance.",
        "Faccio anche solution design e review tecniche. Se un modulo è bloccato o complesso, entro nel codice.",
      ],
    },
  },
  {
    id: "career-path",
    heading: {
      en: "How I got here",
      es: "Cómo llegué acá",
      "pt-BR": "Como cheguei aqui",
      it: "Come ci sono arrivato",
    },
    paragraphs: {
      en: [
        "I started at IPLUSB and ALTOCOM building and shipping software. At VTEX I built apps with TypeScript, React, GraphQL and Node.js, supported customers and partners, and later led technical work and LATAM trainings.",
        "At Valtech I lead and ship on large retailer platforms: Carrefour Argentina on VTEX IO, pushing the full capabilities of the framework; Cetrogar, a successful VTEX FastStore migration in record time; the Médis health and wellness commerce channel in Portugal; and the Rouge beauty ecosystem.",
      ],
      es: [
        "Empecé en IPLUSB y ALTOCOM construyendo y entregando software. En VTEX armé apps con TypeScript, React, GraphQL y Node.js, di soporte a clientes y partners, y después lideré trabajo técnico y capacitaciones LATAM.",
        "En Valtech lidero y entrego sobre plataformas de retailers grandes: Carrefour Argentina sobre VTEX IO, explotando las capacidades del framework; Cetrogar, una migración a VTEX FastStore con éxito en tiempo récord; el canal de commerce de salud y bienestar de Médis en Portugal; y el ecosistema beauty Rouge.",
      ],
      "pt-BR": [
        "Comecei na IPLUSB e ALTOCOM construindo e entregando software. Na VTEX montei apps com TypeScript, React, GraphQL e Node.js, dei suporte a clientes e partners, e depois liderei trabalho técnico e treinamentos LATAM.",
        "Na Valtech lidero e entrego em plataformas de grandes varejistas: Carrefour Argentina em VTEX IO, explorando as capacidades do framework; Cetrogar, uma migração para VTEX FastStore com sucesso em tempo recorde; o canal de commerce de saúde e bem-estar da Médis em Portugal; e o ecossistema beauty Rouge.",
      ],
      it: [
        "Ho iniziato in IPLUSB e ALTOCOM costruendo e rilasciando software. In VTEX ho costruito app con TypeScript, React, GraphQL e Node.js, supportato clienti e partner, e poi ho guidato lavoro tecnico e formazioni LATAM.",
        "In Valtech guido e consegno su piattaforme di grandi retailer: Carrefour Argentina su VTEX IO, sfruttando le capacità del framework; Cetrogar, una migrazione a VTEX FastStore riuscita in tempo record; il canale commerce salute e benessere di Médis in Portogallo; e l'ecosistema beauty Rouge.",
      ],
    },
  },
];
