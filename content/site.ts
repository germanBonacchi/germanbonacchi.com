import type { ContactInfo, SiteConfig, SocialLink } from "./types";

export const SITE_URL =
 process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
 "https://germanbonacchi.vercel.app";

export const siteConfig: SiteConfig = {
 name: "Germán Bonacchi",
 shortName: "Germán Bonacchi",
 url: SITE_URL,
 email: "bonacchigerman@gmail.com",
 jobTitle: {
 en: "Technical Lead | VTEX & Commerce Architecture",
 es: "Technical Lead | VTEX & Arquitectura Commerce",
 "pt-BR": "Technical Lead | VTEX & Arquitetura Commerce",
 it: "Technical Lead | VTEX & Architettura Commerce",
 },
 tagline: {
 en: "Technical leadership for ecommerce platforms: architecture, VTEX and engineering.",
 es: "Liderazgo técnico en plataformas ecommerce: arquitectura, VTEX e ingeniería.",
 "pt-BR":
 "Liderança técnica em plataformas ecommerce: arquitetura, VTEX e engenharia.",
 it: "Leadership tecnica per piattaforme ecommerce: architettura, VTEX e ingegneria.",
 },
  description: {
    en: "I'm Germán Bonacchi, Technical Lead for VTEX at Valtech. I work with VTEX IO, FastStore, ecommerce architecture, checkout and integrations on projects like Carrefour, Cetrogar, Médis and Rouge.",
    es: "Soy Germán Bonacchi, líder técnico VTEX en Valtech. Trabajo con VTEX IO, FastStore, arquitectura ecommerce, checkout e integraciones en proyectos como Carrefour, Cetrogar, Médis y Rouge.",
    "pt-BR":
      "Sou Germán Bonacchi, Technical Lead de VTEX na Valtech. Trabalho com VTEX IO, FastStore, arquitetura ecommerce, checkout e integrações em projetos como Carrefour, Cetrogar, Médis e Rouge.",
    it: "Sono Germán Bonacchi, Technical Lead VTEX in Valtech. Lavoro con VTEX IO, FastStore, architettura ecommerce, checkout e integrazioni su progetti come Carrefour, Cetrogar, Médis e Rouge.",
  },
 localeDefault: "es",
 sameAs: [
 "https://www.linkedin.com/in/germ%C3%A1n-bonacchi-91b59a123/",
 "https://github.com/germanBonacchi",
 ],
 knowsAbout: [
 "VTEX",
 "VTEX IO",
 "VTEX FastStore",
 "Ecommerce Architecture",
 "Arquitectura ecommerce",
 "Technical Leadership",
 "Liderazgo técnico",
 "React",
 "TypeScript",
 "Node.js",
 "Checkout",
 "Commerce",
 "System Integration",
 "Integraciones",
 "Payments",
 "Logistics",
 "Search",
 "Valtech",
 ],
};

export const socialLinks: SocialLink[] = [
 {
 id: "linkedin",
 label: "LinkedIn",
 href: "https://www.linkedin.com/in/germ%C3%A1n-bonacchi-91b59a123/",
 ariaLabel: {
 en: "Germán Bonacchi on LinkedIn",
 es: "Germán Bonacchi en LinkedIn",
 "pt-BR": "Germán Bonacchi no LinkedIn",
 it: "Germán Bonacchi su LinkedIn",
 },
 },
 {
 id: "github",
 label: "GitHub",
 href: "https://github.com/germanBonacchi",
 ariaLabel: {
 en: "Germán Bonacchi on GitHub",
 es: "Germán Bonacchi en GitHub",
 "pt-BR": "Germán Bonacchi no GitHub",
 it: "Germán Bonacchi su GitHub",
 },
 },
 {
 id: "email",
 label: "Email",
 href: `mailto:${siteConfig.email}`,
 ariaLabel: {
 en: "Email Germán Bonacchi",
 es: "Enviar email a Germán Bonacchi",
 "pt-BR": "Enviar email para Germán Bonacchi",
 it: "Invia email a Germán Bonacchi",
 },
 },
];

export const contactInfo: ContactInfo = {
 email: siteConfig.email,
 phone: "+54 11 5836-2197",
 whatsapp: "5491158362197",
 location: {
 en: "Buenos Aires, Argentina",
 es: "Buenos Aires, Argentina",
 "pt-BR": "Buenos Aires, Argentina",
 it: "Buenos Aires, Argentina",
 },
};

export const VALTECH_URL = "https://www.valtech.com/es-ar/";
