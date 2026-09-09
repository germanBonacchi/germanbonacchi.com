import type { ExperienceItem } from "./types";

/**
 * Career timeline sourced from existing portfolio content,
 * reorganized to weight the current Valtech Technical Lead stage.
 *
 * Exact employment months/years were not present in the original
 * repository content, so date fields stay intentionally coarse
 * (or omitted) rather than inventing a precise chronology.
 */
export const experiences: ExperienceItem[] = [
  {
    id: "valtech",
    company: "Valtech",
    companyUrl: "https://www.valtech.com/es-ar/",
    role: {
      en: "Technical Lead, Commerce / VTEX",
      es: "Technical Lead, Commerce / VTEX",
    },
    location: {
      en: "Argentina",
      es: "Argentina",
    },
    startDate: "",
    endDate: "present",
    current: true,
    summary: {
      en: "Technical leadership for digital commerce on VTEX. Combines architecture decisions, solution design, and hands-on engineering across storefront, checkout, integrations, and platform evolution.",
      es: "Liderazgo técnico en commerce digital sobre VTEX. Combina decisiones de arquitectura, diseño de soluciones e ingeniería hands-on en storefront, checkout, integraciones y evolución de plataforma.",
    },
    highlights: {
      en: [
        "Lead technical architecture and solution design for large-scale ecommerce platforms on VTEX (VTEX IO, FastStore).",
        "Define and review integrations across checkout, payments, logistics, search, and middleware / APIs.",
        "Guide implementation quality through code and architecture reviews, technical research, and troubleshooting of complex issues.",
        "Coordinate with developers, functional stakeholders, and partner teams to turn requirements into maintainable technical roadmaps.",
        "Stay hands-on: implement critical modules and platform changes when the problem demands it.",
      ],
      es: [
        "Lidereo arquitectura técnica y diseño de soluciones para plataformas ecommerce de gran escala sobre VTEX (VTEX IO, FastStore).",
        "Defino y reviso integraciones en checkout, pagos, logística, búsqueda y middleware / APIs.",
        "Acompaño la calidad de implementación con revisiones de código y arquitectura, investigación técnica y troubleshooting de problemas complejos.",
        "Coordino con developers, stakeholders funcionales y equipos partners para convertir requerimientos en roadmaps técnicos mantenibles.",
        "Sigo siendo hands-on: implemento módulos y cambios críticos de plataforma cuando el problema lo requiere.",
      ],
    },
    technologies: [
      "vtex",
      "vtex-io",
      "faststore",
      "react",
      "typescript",
      "nodejs",
      "graphql",
      "checkout",
      "integrations",
      "payments",
      "logistics",
      "search",
      "middleware",
      "performance",
    ],
  },
  {
    id: "vtex",
    company: "VTEX",
    companyUrl: "https://vtex.com/",
    role: {
      en: "Apps Engineer / Technical Leadership",
      es: "Apps Engineer / Liderazgo técnico",
    },
    location: {
      en: "Argentina",
      es: "Argentina",
    },
    startDate: "",
    endDate: "",
    summary: {
      en: "Built and supported VTEX applications for customers and partners. Grew into technical leadership responsibilities across delivery workflows and team coordination.",
      es: "Desarrollé y di soporte a aplicaciones VTEX para clientes y partners. Evolucioné hacia responsabilidades de liderazgo técnico en workflows de entrega y coordinación de equipos.",
    },
    highlights: {
      en: [
        "Developed VTEX applications using TypeScript, React (Hooks), GraphQL, and Node.js.",
        "Supported customers and partners with platform capabilities and application lifecycle.",
        "As a technical leader, improved team management with Scrum and clearer cross-team workflows.",
        "Delivered technical trainings on app lifecycle and platform practices across LATAM.",
      ],
      es: [
        "Desarrollé aplicaciones VTEX con TypeScript, React (Hooks), GraphQL y Node.js.",
        "Di soporte a clientes y partners sobre capacidades de plataforma y ciclo de vida de aplicaciones.",
        "Como líder técnico, mejoré la gestión del equipo con Scrum y flujos de trabajo más claros entre equipos.",
        "Dicté capacitaciones técnicas sobre ciclo de vida de apps y prácticas de plataforma en LATAM.",
      ],
    },
    technologies: [
      "vtex",
      "vtex-io",
      "typescript",
      "react",
      "graphql",
      "nodejs",
      "scrum",
      "git",
    ],
  },
  {
    id: "altocom",
    company: "ALTOCOM S.R.L.",
    role: {
      en: "Co-analyst, Developer & Tester",
      es: "Co-analista, Desarrollador y Tester",
    },
    location: {
      en: "Argentina",
      es: "Argentina",
    },
    startDate: "",
    endDate: "",
    summary: {
      en: "Worked across analysis, development, and testing on Oracle-based systems, expanding into JavaScript to meet customer needs.",
      es: "Trabajé en análisis, desarrollo y testing sobre sistemas Oracle, ampliando hacia JavaScript para cubrir necesidades de clientes.",
    },
    highlights: {
      en: [
        "Built and maintained solutions with Oracle APEX, Oracle Database, and PL/SQL.",
        "Combined analysis, development, and testing responsibilities.",
        "Learned JavaScript independently to deliver frontend capabilities required by customers.",
      ],
      es: [
        "Construí y mantuve soluciones con Oracle APEX, Oracle Database y PL/SQL.",
        "Combiné responsabilidades de análisis, desarrollo y testing.",
        "Aprendí JavaScript de forma autodidacta para entregar capacidades frontend requeridas por clientes.",
      ],
    },
    technologies: ["oracle-apex", "oracle-db", "plsql", "javascript"],
  },
  {
    id: "iplusb",
    company: "IPLUSB S.A.",
    role: {
      en: "Developer",
      es: "Desarrollador",
    },
    location: {
      en: "Argentina",
      es: "Argentina",
    },
    startDate: "",
    endDate: "",
    summary: {
      en: "First professional role. Started building software with Visual Basic.",
      es: "Primer rol profesional. Comencé a construir software con Visual Basic.",
    },
    highlights: {
      en: [
        "Entry point into professional software development.",
        "Worked with Visual Basic on business applications.",
      ],
      es: [
        "Punto de entrada al desarrollo de software profesional.",
        "Trabajé con Visual Basic en aplicaciones de negocio.",
      ],
    },
    technologies: ["visual-basic"],
  },
];

export const education = {
  institution: "Universidad Nacional de Avellaneda",
  program: {
    en: "Software Engineering (Ingeniería en Informática)",
    es: "Ingeniería en Informática",
  },
  startYear: "2016",
  note: {
    en: "Studying Software Engineering since 2016.",
    es: "Estudiante de Ingeniería en Informática desde 2016.",
  },
};
