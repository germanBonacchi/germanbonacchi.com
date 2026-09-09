import type { Localized } from "./types";

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

/**
 * Visible FAQ + FAQPage JSON-LD.
 * Keep short: avoid repeating the Valtech / VTEX Technical Lead pitch.
 * Spanish questions still cover search intents (experto VTEX, Valtech, FastStore).
 */
export const faqs: FaqItem[] = [
  {
    id: "who",
    question: {
      en: "Who is Germán Bonacchi?",
      es: "¿Quién es Germán Bonacchi?",
    },
    answer: {
      en: "Technical Lead for VTEX ecommerce at Valtech. Previously Apps Engineer at VTEX. Stack centered on VTEX IO, FastStore, React, TypeScript, Node.js, checkout, integrations and platform architecture.",
      es: "Technical Lead de ecommerce VTEX en Valtech. Antes Apps Engineer en VTEX. Stack centrado en VTEX IO, FastStore, React, TypeScript, Node.js, checkout, integraciones y arquitectura de plataforma.",
    },
  },
  {
    id: "vtex-valtech",
    question: {
      en: "Is he a VTEX expert, and how does Valtech fit in?",
      es: "¿Es un experto / líder técnico VTEX, y qué relación tiene con Valtech?",
    },
    answer: {
      en: "Yes: he worked inside VTEX building apps and supporting customers and partners, and now leads technical work on retailer platforms at Valtech.",
      es: "Sí: trabajó dentro de VTEX armando apps y dando soporte a clientes y partners, y ahora lidera el trabajo técnico en plataformas de retailers en Valtech.",
    },
  },
  {
    id: "projects",
    question: {
      en: "What ecommerce projects has he worked on?",
      es: "¿En qué proyectos ecommerce trabajó?",
    },
    answer: {
      en: "Main focus: Carrefour Argentina (Technical Lead & Architect on VTEX IO) and Cetrogar (successful FastStore migration in record time, publicly highlighted by VTEX). Also Médis in Portugal and the Rouge beauty ecosystem.",
      es: "Foco principal: Carrefour Argentina (Technical Lead & Architect sobre VTEX IO) y Cetrogar (migración FastStore con éxito en tiempo récord, destacada públicamente por VTEX). También Médis en Portugal y el ecosistema beauty Rouge.",
    },
  },
  {
    id: "argentina",
    question: {
      en: "Where does he live?",
      es: "¿Dónde reside?",
    },
    answer: {
      en: "Buenos Aires, Argentina.",
      es: "Buenos Aires, Argentina.",
    },
  },
  {
    id: "hire-or-contact",
    question: {
      en: "How can I contact him?",
      es: "¿Cómo contactarlo?",
    },
    answer: {
      en: "From the contact section on this site (WhatsApp, LinkedIn or email), or via LinkedIn and GitHub.",
      es: "Desde la sección de contacto de este sitio (WhatsApp, LinkedIn o email), o por LinkedIn y GitHub.",
    },
  },
];
