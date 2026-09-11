import type { Localized } from "./types";

export interface Testimonial {
  id: string;
  name: string;
  role: Localized;
  relationship: Localized;
  /** Short quote shown on the card */
  quote: Localized;
  authorHref?: string;
  sourceLabel: Localized;
  sourceHref?: string;
}

export const testimonialsIntro: {
  topLine: Localized;
  heading: Localized;
} = {
  topLine: {
    es: "Recomendaciones",
    en: "Recommendations",
    "pt-BR": "Recomendações",
    it: "Raccomandazioni",
  },
  heading: {
    es: "Lo que dicen colegas que trabajaron conmigo.",
    en: "What colleagues who've worked with me say.",
    "pt-BR": "O que dizem colegas que trabalharam comigo.",
    it: "Cosa dicono i colleghi con cui ho lavorato.",
  },
};

export const testimonials: Testimonial[] = [
  {
    id: "esteban-degaetano",
    name: "Esteban Degaetano",
    role: {
      es: "Ex-VTEX · Solution Architect & Engineer · Ecommerce Consultant",
      en: "Ex-VTEX · Solution Architect & Engineer · Ecommerce Consultant",
    },
    relationship: {
      es: "Trabajó conmigo en el mismo equipo en VTEX y en Valtech",
      en: "Worked with me on the same team at VTEX and at Valtech",
      "pt-BR": "Trabalhou comigo no mesmo time na VTEX e na Valtech",
      it: "Ha lavorato con me nello stesso team in VTEX e in Valtech",
    },
    quote: {
      en: "I had the pleasure of working with Germán at VTEX and at Valtech on truly challenging projects where the core product didn't meet business needs. Thanks to his technical knowledge and his ability to turn requirements into apps and digital products, we shipped new features, custom workflows and extensions. Hands-on, great teammate, committed mentor — I'd choose him as a colleague again.",
      es: "Tuve el placer de trabajar con Germán en VTEX y en Valtech, en proyectos realmente desafiantes donde el producto core no cubría las necesidades de negocio. Gracias a su conocimiento técnico y a su capacidad de traducir requerimientos en apps y productos digitales, sacamos features nuevas, workflows custom y extensiones. Hands-on, gran compañero, mentor comprometido: lo elegiría otra vez como colega.",
    },
    authorHref: "https://www.linkedin.com/in/estebandegaetano/",
    sourceLabel: {
      es: "Recomendación en LinkedIn",
      en: "LinkedIn recommendation",
      "pt-BR": "Recomendação no LinkedIn",
      it: "Raccomandazione su LinkedIn",
    },
    sourceHref: "https://www.linkedin.com/in/germanbonacchi/",
  },
];
