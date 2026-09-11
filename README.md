# germanbonacchi.com

Portfolio personal de **Germán Bonacchi**, Technical Lead de VTEX y arquitectura ecommerce.

Sitio: [germanbonacchi.vercel.app](https://germanbonacchi.vercel.app)

## Stack

- **Next.js 15** (App Router) + **React 19** + TypeScript (strict)
- CSS Modules + design tokens (`styles/globals.css`)
- i18n: `es` (default, sin prefijo), `en`, `pt-BR`, `it`
- Vercel Analytics + Speed Insights
- Google Analytics 4 (gtag)
- Contacto vía WhatsApp / LinkedIn / email / GitHub

## Scripts

```bash
yarn
yarn dev
yarn lint
yarn typecheck
yarn build
yarn indexnow:dry-run   # preview URLs para IndexNow (Bing/Yandex)
yarn indexnow           # envía el sitemap a IndexNow
```

## Environment

Copiá `.env.example` a `.env.local`:

| **Variable** | **Uso** |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical, OG, sitemap, IndexNow |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 |

## Locales y rutas

El middleware sirve `es` en `/` (sin prefijo) y reescribe internamente a `app/[locale]`. El resto usa prefijo crawlable:

| **Locale** | **URL** |
| --- | --- |
| Español (default) | `/`, `/projects`, `/projects/:slug` |
| English | `/en`, `/en/projects`, … |
| Português | `/pt-br`, `/pt-br/projects`, … |
| Italiano | `/it`, `/it/projects`, … |

`/es` y `/es/*` redirigen con 308 a la URL sin prefijo.

## Content

Contenido tipado en `/content` (sin CMS):

| **Archivo** | **Qué define** |
| --- | --- |
| `site.ts` | Nombre, URLs, job title, tagline, sameAs |
| `ui.ts` | Copy de UI (secciones, CTAs, labels) |
| `experience.ts` | Experiencia laboral |
| `projects.ts` | Proyectos (listado + detalle) |
| `technologies.ts` | Stack / tecnologías |
| `trainings.ts` | Capacitaciones |
| `faq.ts` | FAQ |
| `seo.ts` | Meta / SEO por entidad |
| `nav.ts` | Navegación |
| `languages.ts` | Locales y fallbacks |
| `skillsGraph.ts` | Grafo de skills (home) |

## Estructura

```
app/                  # App Router: layout, home, projects, sitemap, robots, OG
components/
  home/               # Hero, About, Experience, Skills, Projects, Trainings, FAQ, Contact
  projects/           # Index y detalle de proyectos
  layout/             # Header, Footer
  seo/                # JSON-LD, EntitySeoContent
  analytics/          # GA + Vercel providers
  ui/                 # Language switcher, particles, scroll helpers
content/              # Datos tipados multilocale
lib/                  # locale, paths, schema, analytics, localize
scripts/              # IndexNow (Python), utilidades Playwright
public/               # CV, imágenes, llms.txt, key IndexNow
```

## SEO

- `app/sitemap.ts` y `app/robots.ts`
- JSON-LD (Person / WebSite / Project)
- Open Graph (`app/opengraph-image.tsx`)
- `llms.txt` + submit a IndexNow (`scripts/submit_indexnow.py`)
- Headers de seguridad y CSP en `next.config.ts`

## Notas

- El contenido y los strings de UI se editan en TypeScript bajo `/content`; no hay i18n runtime ni archivos JSON de traducción.
- Redirects permanentes: `/projects/beauty24` y `/projects/rouge-maison` → `/projects/rouge`.
