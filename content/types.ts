export type Locale = "es" | "en" | "pt-BR" | "it";

/**
 * Localized content: ES + EN required; other VTEX locales optional
 * (resolved via localize() fallbacks).
 */
export type Localized<T = string> = { es: T; en: T } & Partial<
  Record<Locale, T>
>;

export interface SocialLink {
  id: "linkedin" | "github" | "email";
  label: string;
  href: string;
  ariaLabel: Localized;
}

export interface ContactInfo {
  email: string;
  phone: string;
  /** Digits only, international format for wa.me (e.g. 54911...) */
  whatsapp: string;
  location: Localized;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  email: string;
  jobTitle: Localized;
  tagline: Localized;
  description: Localized;
  localeDefault: Locale;
  sameAs: string[];
  knowsAbout: string[];
}

export interface Technology {
  id: string;
  name: string;
  category:
    | "platform"
    | "frontend"
    | "backend"
    | "commerce"
    | "methodology"
    | "legacy";
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: Localized;
  location: Localized;
  startDate: string;
  endDate: string | "present";
  current?: boolean;
  summary: Localized;
  highlights: Localized<string[]>;
  technologies: string[];
}

export type ProjectArea =
  | "architecture"
  | "vtex-io"
  | "faststore"
  | "checkout"
  | "integrations"
  | "payments"
  | "logistics"
  | "search"
  | "middleware"
  | "performance"
  | "solution-design"
  | "technical-leadership";

export interface ProjectExternalRef {
  label: Localized;
  href: string;
  kind: "linkedin" | "article" | "site" | "other";
}

export interface ProjectSite {
  name: string;
  url: string;
  logo?: string;
}

export interface Project {
  slug: string;
  client: string;
  product: string;
  url: string;
  /** Brand / store logo under public/ */
  logo?: string;
  /** Isotype / on-dark mark when the full logo includes wordmark or is black-only */
  logoMark?: string;
  /** Related storefronts in the same brand/ecosystem */
  sites?: ProjectSite[];
  role: Localized;
  status: "current" | "featured" | "past";
  featured: boolean;
  featuredWeight: number;
  caseStudy: boolean;
  summary: Localized;
  context: Localized;
  challenges: Localized<string[]>;
  contributions: Localized<string[]>;
  technologies: string[];
  areas: ProjectArea[];
  externalRefs?: ProjectExternalRef[];
  ogImage?: string;
}

export interface Training {
  id: string;
  youtubeId: string;
  title: Localized;
  subtitle: Localized;
  thumbnail: string;
}

export type AnalyticsEventName =
  | "nav_section"
  | "section_view"
  | "project_click"
  | "project_external"
  | "social_click"
  | "contact_click"
  | "language_switch"
  | "vtex_reference_click"
  | "cv_click"
  | "scroll_to_top";

export interface AnalyticsEventMap {
  nav_section: { section: string };
  section_view: { section_id: string; section_name: string };
  project_click: { slug: string; source: "home" | "projects" | "detail" };
  project_external: { slug: string; href: string };
  social_click: { network: SocialLink["id"] };
  contact_click: {
    channel: "whatsapp" | "linkedin" | "email" | "github";
  };
  language_switch: { locale: Locale };
  vtex_reference_click: { slug: string };
  cv_click: { source: string; locale: Locale };
  scroll_to_top: Record<string, never>;
}
