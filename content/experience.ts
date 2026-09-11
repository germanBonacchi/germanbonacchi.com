import type { ExperienceItem } from "./types";

/**
 * Career timeline from LinkedIn (company tenure).
 * Dates as YYYY-MM; endDate "present" when current.
 * https://www.linkedin.com/in/germanbonacchi/
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
    startDate: "2022-09",
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
      en: "Apps Engineer → Technical Leadership",
      es: "Apps Engineer → Liderazgo técnico",
    },
    location: {
      en: "Argentina",
      es: "Argentina",
    },
    startDate: "2021-03",
    endDate: "2022-09",
    summary: {
      en: "Apps · TypeScript · React · GraphQL · Node — Clients · Partners · LATAM Technical Training.",
      es: "Apps · TypeScript · React · GraphQL · Node — Clientes · Partners · Formación técnica LATAM.",
    },
    highlights: {
      en: [
        "Developed VTEX apps (TypeScript, React, GraphQL, Node.js) for customers and partners.",
        "Supported platform capabilities and application lifecycle.",
        "Grew into technical leadership: Scrum, clearer cross-team workflows.",
        "Delivered LATAM technical trainings on app lifecycle and platform practices.",
      ],
      es: [
        "Desarrollé apps VTEX (TypeScript, React, GraphQL, Node.js) para clientes y partners.",
        "Soporte de capacidades de plataforma y ciclo de vida de aplicaciones.",
        "Evolucioné a liderazgo técnico: Scrum y flujos más claros entre equipos.",
        "Capacitaciones técnicas LATAM sobre lifecycle de apps y prácticas de plataforma.",
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
    startDate: "2017-09",
    endDate: "2021-01",
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
    startDate: "2016-04",
    endDate: "2017-09",
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
  url: "https://undav.edu.ar/index.php",
  logo: "/images/logos/undav.png?v=2",
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
