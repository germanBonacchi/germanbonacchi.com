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
 en: "VTEX Solution Architect & Technical Lead",
 es: "VTEX Solution Architect & Technical Lead",
 "pt-BR": "VTEX Solution Architect & Technical Lead",
 it: "VTEX Solution Architect & Technical Lead",
 },
 tagline: {
 en: "I design enterprise ecommerce architectures on VTEX IO and FastStore: integrations, checkout, performance and high-scale platforms.",
 es: "Diseño arquitecturas ecommerce enterprise sobre VTEX IO y FastStore: integraciones, checkout, performance y plataformas de alta escala.",
 "pt-BR":
 "Desenho arquiteturas ecommerce enterprise em VTEX IO e FastStore: integrações, checkout, performance e plataformas de alta escala.",
 it: "Progetto architetture ecommerce enterprise su VTEX IO e FastStore: integrazioni, checkout, performance e piattaforme ad alta scala.",
 },
  description: {
    en: "Germán Bonacchi — Ex-VTEX, VTEX Solution Architect & Technical Lead at Valtech. Enterprise ecommerce on VTEX IO and FastStore: Carrefour, Cetrogar, Médis and Rouge.",
    es: "Germán Bonacchi — Ex-VTEX, VTEX Solution Architect & Technical Lead en Valtech. Ecommerce enterprise sobre VTEX IO y FastStore: Carrefour, Cetrogar, Médis y Rouge.",
    "pt-BR":
      "Germán Bonacchi — Ex-VTEX, VTEX Solution Architect & Technical Lead na Valtech. Ecommerce enterprise em VTEX IO e FastStore: Carrefour, Cetrogar, Médis e Rouge.",
    it: "Germán Bonacchi — Ex-VTEX, VTEX Solution Architect & Technical Lead in Valtech. Ecommerce enterprise su VTEX IO e FastStore: Carrefour, Cetrogar, Médis e Rouge.",
  },
 localeDefault: "es",
 sameAs: [
 "https://www.linkedin.com/in/germanbonacchi/",
 "https://github.com/germanBonacchi",
 ],
 knowsAbout: [
 "VTEX",
 "VTEX IO",
 "VTEX FastStore",
 "VTEX Solution Architect",
 "Ecommerce Architecture",
 "Arquitectura ecommerce",
 "Technical Leadership",
 "Liderazgo técnico",
 "Ex-VTEX",
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
 href: "https://www.linkedin.com/in/germanbonacchi/",
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
