# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Home sections: **Problems**, **Services**, **Decisions**, **Philosophy**, **Testimonials**
- Content modules: `problems`, `services`, `decisions`, `philosophy`, `testimonials`, `coreExpertise`, `carrefourCase`
- Carrefour architecture diagram (`ArchitectureDiagram`) in the project detail
- Locale-scoped `not-found` page under `app/[locale]`
- Hero CTAs with distinct desktop / mobile labels
- Mobile drawer: full section list (`FOOTER_SECTIONS`), sticky footer with socials + language switcher

### Changed

- Hero positioning: VTEX Technical Lead & Architect; credentials and trust line (Ex-VTEX · Valtech; years on VTEX)
- Skills: core expertise first, skills graph secondary; graph note hidden on small screens
- Trainings: stronger play CTA and “Ver en YouTube” impulse
- FAQ oriented to potential clients
- Services placed after Trainings; light/dark section rhythm restored
- Language switcher: portal on desktop, inline upward menu in the mobile drawer
- `data-scroll-behavior="smooth"` on `<html>` for Next.js scroll transitions

### Fixed

- Mobile menu: background scroll while open; sticky header disappearing after scroll + open
- Mobile language dropdown clipped / opening the wrong way
- Chunk / not-found layout issues by moving 404 under `[locale]`

## [2.0.0] — 2026-09-11

Major rebuild of the personal portfolio on **Next.js 15** (App Router) + **React 19**.

### Added

- Full rewrite from the legacy CRA stack to Next.js + TypeScript (strict)
- Multilocale routing: `es` (default, unprefixed), `en`, `pt-BR`, `it`
- Typed content under `/content` (experience, projects, FAQ, SEO, UI copy, nav, skills graph)
- SEO: sitemap, robots, JSON-LD, Open Graph, IndexNow, `llms.txt`
- Analytics: Vercel Analytics + Speed Insights + GA4
- Security headers + CSP
- Project pages with loading states and scroll restoration
- Experience section with localized date formatting and UNDAV logo
- Yarn as the package manager; README updated for localization and content structure

### Changed

- Design system via CSS Modules + tokens in `styles/globals.css`
- Contact via WhatsApp / LinkedIn / email / GitHub (no contact form dependency on the old stack)

### Removed

- Legacy Create React App / `gh-pages` publishing path as the primary site

## [1.1.1] — 2022-07-22

### Fixed

- Footer name translation
- Removed leftover i18n debug logging

## [1.1.0] — 2022-07-22

### Added

- Spanish translations across the site
- Language switcher (responsive), i18n wiring
- Contact form translations

### Changed

- Language switcher interaction (`onChange` vs `onClick`) and container layout
- Profile image

### Removed

- Instagram link from socials

## [1.0.0] — 2022-07-06

### Added

- First public version of the portfolio site (CRA-era stack)

[Unreleased]: https://github.com/germanBonacchi/germanbonacchi.com/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/germanBonacchi/germanbonacchi.com/compare/v1.1.1...v2.0.0
[1.1.1]: https://github.com/germanBonacchi/germanbonacchi.com/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/germanBonacchi/germanbonacchi.com/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/germanBonacchi/germanbonacchi.com/releases/tag/v1.0.0
