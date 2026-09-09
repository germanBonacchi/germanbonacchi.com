import type { Localized } from "./types";

export interface FaqItem {
 id: string;
 question: Localized;
 answer: Localized;
}

/**
 * Visible FAQ + FAQPage JSON-LD source.
 * Includes Spanish search intents: expertos VTEX, líder técnico VTEX, Valtech VTEX.
 */
export const faqs: FaqItem[] = [
 {
 id: "who",
 question: {
 en: "Who is Germán Bonacchi?",
 es: "¿Quién es Germán Bonacchi?",
 },
 answer: {
 en: "Germán Bonacchi is a Technical Lead for VTEX at Valtech. He works on ecommerce platforms with React, TypeScript, Node.js, checkout, integrations and platform evolution.",
 es: "Germán Bonacchi es Technical Lead VTEX en Valtech. Trabaja en plataformas ecommerce con React, TypeScript, Node.js, checkout, integraciones y evolución de plataforma.",
 },
 },
 {
 id: "expert-vtex",
 question: {
 en: "Is Germán Bonacchi a VTEX expert / VTEX technical lead?",
 es: "¿Germán Bonacchi es un experto en VTEX o líder técnico VTEX?",
 },
 answer: {
 en: "Yes. He is Technical Lead VTEX at Valtech and previously worked as an Apps Engineer at VTEX. He works with VTEX IO, FastStore, ecommerce architecture, integrations and checkout.",
 es: "Sí. Es Technical Lead VTEX en Valtech y antes fue Apps Engineer en VTEX. Trabaja con VTEX IO, FastStore, arquitectura ecommerce, integraciones y checkout.",
 },
 },
 {
 id: "valtech-vtex",
 question: {
 en: "What is Germán Bonacchi's connection to Valtech and VTEX?",
 es: "¿Cuál es la relación de Germán Bonacchi con Valtech y VTEX?",
 },
 answer: {
 en: "He works at Valtech as Technical Lead on VTEX ecommerce. Before that he was at VTEX building apps and supporting customers and partners.",
 es: "Trabaja en Valtech como Technical Lead en commerce sobre VTEX. Antes estuvo en VTEX armando apps y dando soporte a clientes y partners.",
 },
 },
 {
 id: "role-valtech",
 question: {
 en: "What is Germán Bonacchi's role at Valtech?",
 es: "¿Cuál es el rol de Germán Bonacchi en Valtech?",
 },
 answer: {
 en: "At Valtech he is Technical Lead for VTEX ecommerce: architecture, solution design, coordination with teams and stakeholders, reviews, troubleshooting, and coding when needed.",
 es: "En Valtech es Technical Lead de commerce sobre VTEX: arquitectura, diseño de soluciones, coordinación con equipos y stakeholders, reviews, troubleshooting y código cuando hace falta.",
 },
 },
 {
 id: "vtex-expertise",
 question: {
 en: "Is Germán Bonacchi a VTEX developer?",
 es: "¿Germán Bonacchi es desarrollador VTEX?",
 },
 answer: {
 en: "Yes. He worked with VTEX, VTEX IO and FastStore as an Apps Engineer at VTEX, and now as Technical Lead on retailer platforms at Valtech.",
 es: "Sí. Trabajó con VTEX, VTEX IO y FastStore como Apps Engineer en VTEX, y ahora como Technical Lead en plataformas de retailers en Valtech.",
 },
 },
 {
 id: "argentina",
 question: {
 en: "Where is Germán Bonacchi based?",
 es: "¿Dónde está basado Germán Bonacchi?",
 },
 answer: {
 en: "He is based in Avellaneda, Buenos Aires, Argentina, and works on VTEX ecommerce with Valtech.",
 es: "Está basado en Avellaneda, Buenos Aires, Argentina, y trabaja en ecommerce VTEX con Valtech.",
 },
 },
 {
 id: "faststore",
 question: {
 en: "What experience does Germán Bonacchi have with FastStore?",
 es: "¿Qué experiencia tiene Germán Bonacchi con FastStore?",
 },
 answer: {
 en: "He participated in the Cetrogar ecommerce relaunch on VTEX FastStore for a national electronics and home-appliance retailer: custom modules and complex storefront requirements. VTEX publicly highlighted the go-live as a large-scale FastStore case delivered in about 90 days by Grupo Cetrogar, Valtech, and VTEX.",
 es: "Participó en el relanzamiento ecommerce de Cetrogar sobre VTEX FastStore para un retailer nacional de electrodomésticos y tecnología: módulos custom y requerimientos complejos de storefront. VTEX destacó públicamente el go-live como un caso FastStore a gran escala entregado en alrededor de 90 días por Grupo Cetrogar, Valtech y VTEX.",
 },
 },
 {
 id: "projects",
 question: {
 en: "What ecommerce projects has Germán Bonacchi worked on?",
 es: "¿En qué proyectos ecommerce trabajó Germán Bonacchi?",
 },
 answer: {
 en: "Main focus: Carrefour Argentina as Technical Lead on VTEX IO, and Cetrogar, a successful VTEX FastStore migration in record time. Also Médis (health and wellness commerce channel in Portugal, from project start) and the Rouge beauty ecosystem (Perfumerías Rouge, Beauty24, Rouge Maison).",
 es: "Foco principal: Carrefour Argentina como Technical Lead sobre VTEX IO, y Cetrogar, una migración a VTEX FastStore con éxito en tiempo récord. También Médis (canal de commerce de salud y bienestar en Portugal, desde el inicio) y el ecosistema beauty Rouge (Perfumerías Rouge, Beauty24, Rouge Maison).",
 },
 },
 {
 id: "stack",
 question: {
 en: "What technologies does Germán Bonacchi specialize in?",
 es: "¿En qué tecnologías se especializa Germán Bonacchi?",
 },
 answer: {
 en: "VTEX, VTEX IO, VTEX FastStore, React, TypeScript, Node.js, GraphQL, checkout, payments, logistics, search, APIs/middleware, integrations, and ecommerce performance.",
 es: "VTEX, VTEX IO, VTEX FastStore, React, TypeScript, Node.js, GraphQL, checkout, pagos, logística, búsqueda, APIs/middleware, integraciones y performance ecommerce.",
 },
 },
 {
 id: "hire-or-contact",
 question: {
 en: "How can I contact a VTEX technical lead like Germán Bonacchi?",
 es: "¿Cómo contactar a un líder técnico VTEX como Germán Bonacchi?",
 },
 answer: {
 en: "From the contact section on germanbonacchi.vercel.app (WhatsApp, LinkedIn or email), or via LinkedIn and GitHub.",
 es: "Desde la sección de contacto en germanbonacchi.vercel.app (WhatsApp, LinkedIn o email), o por LinkedIn y GitHub.",
 },
 },
];
