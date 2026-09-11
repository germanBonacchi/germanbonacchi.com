import type { Localized } from "./types";

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

/**
 * FAQ oriented to potential clients (engagement, scope, problems).
 * Also feeds FAQPage JSON-LD.
 */
export const faqs: FaqItem[] = [
  {
    id: "faststore-when",
    question: {
      en: "When does FastStore make sense?",
      es: "¿Cuándo conviene usar FastStore?",
      "pt-BR": "Quando faz sentido usar FastStore?",
      it: "Quando ha senso usare FastStore?",
    },
    answer: {
      en: "When you need stronger frontend control, headless performance and a modern GraphQL BFF — and the team can own a Next.js storefront. VTEX IO remains a strong fit for deep block ecosystems and mature checkout customizations. I help choose based on constraints, not hype.",
      es: "Cuando necesitás más control de frontend, performance headless y un BFF GraphQL moderno — y el equipo puede ownership de un storefront Next.js. VTEX IO sigue siendo fuerte para ecosistemas de bloques y customizaciones maduras de checkout. Ayudo a elegir por constraints, no por moda.",
    },
  },
  {
    id: "architecture-review",
    question: {
      en: "Can you review an existing VTEX architecture?",
      es: "¿Podés revisar una arquitectura VTEX existente?",
      "pt-BR": "Você pode revisar uma arquitetura VTEX existente?",
      it: "Puoi revisionare un'architettura VTEX esistente?",
    },
    answer: {
      en: "Yes. Typical scope: platform boundaries, coupling risks, checkout/integration hotspots, customization debt and a prioritized remediation roadmap.",
      es: "Sí. Alcance típico: límites de plataforma, riesgos de acoplamiento, hotspots de checkout/integraciones, deuda de customización y un roadmap priorizado de remediación.",
    },
  },
  {
    id: "existing-vs-new",
    question: {
      en: "Do you work on existing implementations or only greenfield?",
      es: "¿Trabajás sobre implementaciones existentes o solo proyectos nuevos?",
      "pt-BR":
        "Você trabalha em implementações existentes ou só em projetos novos?",
      it: "Lavori su implementazioni esistenti o solo su progetti nuovi?",
    },
    answer: {
      en: "Both. Most of my recent work is evolving large production platforms (e.g. Carrefour on VTEX IO) and migrations (e.g. Cetrogar to FastStore in ~90 days).",
      es: "Ambos. Gran parte de mi trabajo reciente es evolucionar plataformas grandes en producción (p. ej. Carrefour sobre VTEX IO) y migraciones (p. ej. Cetrogar a FastStore en ~90 días).",
    },
  },
  {
    id: "internal-teams",
    question: {
      en: "Can you work with internal teams?",
      es: "¿Podés trabajar con equipos internos?",
      "pt-BR": "Você pode trabalhar com times internos?",
      it: "Puoi lavorare con team interni?",
    },
    answer: {
      en: "Yes — that's the default in agency delivery. I define technical direction, review architecture/code, mentor and coordinate with product, partners and stakeholders.",
      es: "Sí — es el modo default en delivery de agencia. Defino dirección técnica, reviso arquitectura/código, mentoreo y coordino con producto, partners y stakeholders.",
    },
  },
  {
    id: "performance",
    question: {
      en: "What kind of performance problems do you solve?",
      es: "¿Qué tipo de problemas de performance resolvés?",
      "pt-BR": "Que tipo de problemas de performance você resolve?",
      it: "Che tipo di problemi di performance risolvi?",
    },
    answer: {
      en: "Storefront bottlenecks (IO / FastStore), API and integration latency, checkout friction and architectural choices that quietly kill conversion under load.",
      es: "Cuellos de botella de storefront (IO / FastStore), latencia de APIs e integraciones, fricción de checkout y decisiones arquitectónicas que silenciosamente matan conversión bajo carga.",
    },
  },
  {
    id: "lead-team",
    question: {
      en: "Can you lead a team of VTEX developers?",
      es: "¿Podés liderar un equipo de developers VTEX?",
      "pt-BR": "Você pode liderar um time de developers VTEX?",
      it: "Puoi guidare un team di developer VTEX?",
    },
    answer: {
      en: "Yes. That's my current role at Valtech: technical leadership plus hands-on delivery when complexity demands it. Previously Apps Engineer at VTEX with LATAM technical training.",
      es: "Sí. Es mi rol actual en Valtech: liderazgo técnico más delivery hands-on cuando la complejidad lo pide. Antes Apps Engineer en VTEX con formación técnica LATAM.",
    },
  },
  {
    id: "contact",
    question: {
      en: "How can I start a conversation?",
      es: "¿Cómo empezamos una conversación?",
      "pt-BR": "Como começamos uma conversa?",
      it: "Come iniziamo una conversazione?",
    },
    answer: {
      en: "WhatsApp, LinkedIn or email from the contact section — no forms. A 30-minute architecture conversation is usually enough to see if there's fit.",
      es: "WhatsApp, LinkedIn o email desde la sección de contacto — sin formularios. Una conversación de arquitectura de 30 minutos suele alcanzar para ver si hay fit.",
    },
  },
];
