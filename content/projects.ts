import type { Project } from "./types";

export const projects: Project[] = [
 {
 slug: "carrefour",
 client: "Carrefour Argentina",
 product: "carrefour.com.ar",
 url: "https://www.carrefour.com.ar/",
 role: {
 en: "Technical Lead",
 es: "Technical Lead",
 },
 status: "current",
 featured: true,
 featuredWeight: 1,
 caseStudy: true,
 summary: {
 en: "Technical Lead on Carrefour Argentina's ecommerce on VTEX IO: multi-vertical retail at production scale, pushing the full capabilities of the platform.",
 es: "Technical Lead en el ecommerce de Carrefour Argentina sobre VTEX IO: retail multi-vertical a escala de producción, explotando las capacidades de la plataforma.",
 },
 context: {
 en: "Carrefour Argentina is one of the country's leading supermarket chains, with a high-traffic omnichannel ecommerce on VTEX IO. Public reporting around its digital channel has cited millions of monthly visits and a large order volume across hypermarkets, supermarkets, express, wholesale, pickup and marketplace. Inside Valtech I lead technical work on this platform: theme, custom VTEX IO apps, checkout, logistics and the commerce capabilities that keep grocery and non-food selling together.",
 es: "Carrefour Argentina es una de las cadenas de supermercados líderes del país, con un ecommerce omnicanal de alto tráfico sobre VTEX IO. Comunicaciones públicas del canal digital han citado millones de visitas mensuales y un volumen alto de pedidos, cubriendo hiper, súper, express, mayorista, pickup y marketplace. Dentro de Valtech lidero el trabajo técnico sobre esta plataforma: theme, apps VTEX IO custom, checkout, logística y las capacidades commerce que hacen convivir grocery y non-food.",
 },
 challenges: {
 en: [
 "Operating a multi-vertical catalog (supermarket, home & appliances, external marketplace sellers) on one storefront without breaking logistics or checkout rules.",
 "Modernizing delivery-zone selection so shoppers pick home delivery, Drive pickup or quick commerce before browsing, with region, seller and sales channel aligned.",
 "Splitting the minicart by commerce segment so each group can checkout with its own minimums, shipping simulation and policies.",
 "Evolving a large VTEX IO theme + custom apps ecosystem without interrupting daily commerce.",
 ],
 es: [
 "Operar un catálogo multi-vertical (supermercado, hogar y electro, sellers externos de marketplace) en un solo storefront sin romper logística ni reglas de checkout.",
 "Modernizar la selección de zona de entrega para que el shopper elija envío a domicilio, Drive o entrega inmediata antes de navegar, alineando región, seller y sales channel.",
 "Separar el minicart por segmento de commerce para que cada grupo pueda ir a checkout con sus mínimos, simulación de envío y políticas.",
 "Evolucionar un ecosistema grande de theme VTEX IO + apps custom sin interrumpir la operación diaria.",
 ],
 },
 contributions: {
 en: [
 "Technical leadership on architecture and solution design across the VTEX / VTEX IO stack.",
 "Mega Menu: administrable three-level category navigation for desktop and mobile, with segment-aware visibility (food / non-food) and Admin management of the category tree.",
 "Regionalizer: modern delivery-method and service-area flow (home delivery, Drive, quick commerce) that sets region, sellers and sales channel before shopping.",
 "Cart split: minicart segmented into Supermarket, Home & Appliances and external sellers, with per-segment checkout, purchase minimums and incompatibility rules when products cannot share a cart.",
 "Hands-on implementation and troubleshooting on complex checkout, logistics, search and middleware workstreams, coordinating teams and stakeholders.",
 ],
 es: [
 "Liderazgo técnico en arquitectura y diseño de soluciones sobre el stack VTEX / VTEX IO.",
 "Mega Menu: navegación de categorías de tres niveles administrable (desktop y mobile), con visibilidad por segmento (food / non-food) y gestión del árbol desde Admin.",
 "Regionalizador: flujo moderno de método de entrega y zona de servicio (envío a domicilio, Drive, entrega inmediata) que fija región, sellers y sales channel antes de comprar.",
 "Split de carritos: minicart segmentado en Supermercado, Hogar y Electro y sellers externos, con checkout por segmento, mínimos de compra y reglas de incompatibilidad cuando los productos no pueden compartir carrito.",
 "Implementación hands-on y troubleshooting en frentes complejos de checkout, logística, búsqueda y middleware, coordinando equipos y stakeholders.",
 ],
 },
 technologies: [
 "vtex",
 "vtex-io",
 "react",
 "typescript",
 "nodejs",
 "checkout",
 "integrations",
 "logistics",
 "search",
 "middleware",
 "performance",
 ],
 areas: [
 "technical-leadership",
 "architecture",
 "vtex-io",
 "checkout",
 "integrations",
 "logistics",
 "search",
 "middleware",
 "performance",
 "solution-design",
 ],
 },
 {
 slug: "cetrogar",
 client: "Cetrogar",
 product: "cetrogar.com.ar",
 url: "https://www.cetrogar.com.ar/",
 role: {
 en: "Technical contributor, VTEX FastStore",
 es: "Contribución técnica, VTEX FastStore",
 },
 status: "featured",
 featured: true,
 featuredWeight: 2,
 caseStudy: true,
 summary: {
 en: "National electronics and home-appliance retailer relaunched on VTEX FastStore: Next.js storefront, custom modules and a performance-oriented architecture delivered with Valtech and VTEX.",
 es: "Retailer nacional de electrodomésticos y tecnología relanzado sobre VTEX FastStore: storefront Next.js, módulos custom y arquitectura orientada a performance, entregado junto a Valtech y VTEX.",
 },
 context: {
 en: "Grupo Cetrogar is a major Argentine retail chain for technology, home appliances and related categories, with a nationwide store network and a digital channel that is a meaningful share of billing. The VTEX FastStore relaunch was delivered in about 90 days as a joint effort between Grupo Cetrogar, Valtech and VTEX, and was publicly highlighted by VTEX as a large-scale FastStore go-live.",
 es: "Grupo Cetrogar es una cadena retail argentina relevante en tecnología, electrodomésticos y categorías afines, con red de sucursales a nivel nacional y un canal digital que representa una porción significativa de la facturación. El relanzamiento sobre VTEX FastStore se entregó en alrededor de 90 días como trabajo conjunto entre Grupo Cetrogar, Valtech y VTEX, y fue destacado públicamente por VTEX como un go-live FastStore a gran escala.",
 },
 challenges: {
 en: [
 "Migrating a high-visibility national electro retailer onto a modern FastStore / Next.js architecture under a short delivery window.",
 "Custom modules and commerce flows beyond a default FastStore template.",
 "Performance and scalability expectations for a multi-store retail operation with national coverage.",
 "Integrating VTEX platform capabilities while preparing the digital channel for marketplace expansion.",
 ],
 es: [
 "Migrar un retailer nacional de electro de alta visibilidad a una arquitectura moderna FastStore / Next.js en una ventana corta de entrega.",
 "Módulos custom y flujos commerce más allá de un template FastStore por defecto.",
 "Expectativas de performance y escalabilidad para una operación multi-tienda con cobertura nacional.",
 "Integrar capacidades de la plataforma VTEX preparando el canal digital para expansión de Marketplace.",
 ],
 },
 contributions: {
 en: [
 "Participated in the FastStore implementation and custom module development on the Next.js storefront.",
 "Helped solve complex storefront and commerce requirements for a national electro retail catalog.",
 "Worked on integrations with VTEX capabilities and solution design for non-trivial flows.",
 "Contributed to a delivery that connects the digital channel with a broad physical-store network.",
 ],
 es: [
 "Participé en la implementación FastStore y el desarrollo de módulos custom sobre el storefront Next.js.",
 "Ayudé a resolver requerimientos complejos de storefront y commerce para un catálogo retail de electro a escala nacional.",
 "Trabajé en integraciones con capacidades VTEX y diseño de soluciones para flujos no triviales.",
 "Contribuí a una entrega que conecta el canal digital con una red amplia de tiendas físicas.",
 ],
 },
 technologies: [
 "faststore",
 "vtex",
 "react",
 "typescript",
 "nodejs",
 "graphql",
 "integrations",
 "performance",
 ],
 areas: [
 "faststore",
 "architecture",
 "solution-design",
 "integrations",
 "performance",
 ],
 externalRefs: [
 {
 label: {
 en: "View VTEX announcement",
 es: "Ver publicación de VTEX",
 },
 href: "https://www.linkedin.com/posts/vtex_un-nuevo-cap%C3%ADtulo-digital-para-uno-de-los-activity-7470132585541648388-VMpR",
 kind: "linkedin",
 },
 ],
 },
 {
 slug: "medis",
 client: "Médis",
 product: "marketplace.medis.pt",
 url: "https://marketplace.medis.pt/",
 role: {
 en: "Technical contributor, from project inception",
 es: "Contribución técnica, desde el inicio del proyecto",
 },
 status: "featured",
 featured: true,
 featuredWeight: 3,
 caseStudy: true,
 summary: {
 en: "Digital commerce channel for health and wellness products within Médis (Ageas Portugal). Technical work from the early stages of the VTEX platform.",
 es: "Canal de commerce digital de productos de salud y bienestar dentro de Médis (Ageas Portugal). Participación técnica desde las etapas iniciales de la plataforma VTEX.",
 },
 context: {
 en: "Médis is a Portuguese health brand of the Ageas Portugal group. Beyond health insurance, its digital ecosystem (Saúde360) includes booking, a virtual wallet with partner cashback, wellness programs and an online store for health and wellness products and services, open with or without a Médis policy. Within Valtech I joined from project inception to help build that commerce channel on VTEX.",
 es: "Médis es una marca de salud portuguesa del grupo Ageas Portugal. Más allá del seguro de salud, su ecosistema digital (Saúde360) incluye reserva de consultas, cartera virtual con cashback en partners, programas de bienestar y una tienda online de productos y servicios de salud y bienestar, abierta con o sin póliza Médis. Dentro de Valtech participé desde el inicio del proyecto para construir ese canal de commerce sobre VTEX.",
 },
 challenges: {
 en: [
 "Standing up a marketplace-oriented commerce experience from early delivery stages inside a regulated health brand.",
 "Catalog and purchase flows for health and wellness products beyond a simple listing site.",
 "Platform integrations needed to operate a live multi-seller style commerce channel on VTEX.",
 "Aligning technical delivery with business and stakeholder needs from day one.",
 ],
 es: [
 "Levantar una experiencia de commerce orientada a marketplace desde etapas tempranas, dentro de una marca de salud regulada.",
 "Catálogo y flujos de compra de productos de salud y bienestar más allá de un listado simple.",
 "Integraciones de plataforma necesarias para operar un canal de commerce multi-seller en producción sobre VTEX.",
 "Alinear la entrega técnica con necesidades de negocio y stakeholders desde el primer día.",
 ],
 },
 contributions: {
 en: [
 "Technical participation from project inception through platform evolution.",
 "Architecture-aligned implementations on the VTEX ecosystem for the Médis digital commerce channel.",
 "Hands-on support for marketplace-style and ecommerce capabilities as the product took shape.",
 "Solution-oriented work with the teams that shipped the health and wellness storefront.",
 ],
 es: [
 "Participación técnica desde el inicio del proyecto y a lo largo de la evolución de la plataforma.",
 "Implementaciones alineadas a la arquitectura sobre el ecosistema VTEX para el canal de commerce digital de Médis.",
 "Soporte hands-on a capacidades de marketplace y ecommerce a medida que el producto tomó forma.",
 "Trabajo orientado a soluciones junto a los equipos que entregaron el storefront de salud y bienestar.",
 ],
 },
 technologies: [
 "vtex",
 "vtex-io",
 "react",
 "typescript",
 "integrations",
 "checkout",
 "middleware",
 ],
 areas: [
 "architecture",
 "vtex-io",
 "integrations",
 "solution-design",
 "checkout",
 ],
 },
 {
 slug: "rouge",
 client: "Rouge",
 product: "Perfumerías Rouge · Beauty24 · Rouge Maison",
 url: "https://www.perfumeriasrouge.com/",
 sites: [
 {
 name: "Perfumerías Rouge",
 url: "https://www.perfumeriasrouge.com/",
 },
 {
 name: "Beauty24",
 url: "https://www.beauty24.com.ar/",
 },
 {
 name: "Rouge Maison",
 url: "https://www.rougemaison.com.ar/",
 },
 ],
 role: {
 en: "Technical contributor, beauty retail ecosystem on VTEX",
 es: "Contribución técnica, ecosistema beauty retail sobre VTEX",
 },
 status: "current",
 featured: true,
 featuredWeight: 4,
 caseStudy: true,
 summary: {
 en: "Technical evolution of the Rouge beauty ecommerce ecosystem on VTEX: Perfumerías Rouge, Beauty24 and Rouge Maison as related storefronts that share architecture, integrations and platform capabilities.",
 es: "Evolución técnica del ecosistema ecommerce beauty de Rouge sobre VTEX: Perfumerías Rouge, Beauty24 y Rouge Maison como storefronts relacionados que comparten arquitectura, integraciones y capacidades de plataforma.",
 },
 context: {
 en: "Perfumerías Rouge, Beauty24, and Rouge Maison belong to the same beauty retail chain. Within Valtech I contribute to the technical evolution of this multi-storefront VTEX ecosystem: shared patterns, integrations with external systems and solution design across the properties.",
 es: "Perfumerías Rouge, Beauty24 y Rouge Maison pertenecen a la misma cadena de beauty retail. Dentro de Valtech contribuyo a la evolución técnica de este ecosistema VTEX multi-storefront: patrones compartidos, integraciones con sistemas externos y diseño de soluciones entre las propiedades.",
 },
 challenges: {
 en: [
 "Multi-storefront evolution inside one beauty retail chain.",
 "Consistent architecture and integrations across related VTEX properties.",
 "Solution design for commerce capabilities shared or specialized per brand.",
 "Technical accompaniment for implementation quality across the ecosystem.",
 ],
 es: [
 "Evolución multi-storefront dentro de una misma cadena beauty retail.",
 "Arquitectura e integraciones consistentes entre propiedades VTEX relacionadas.",
 "Diseño de soluciones para capacidades commerce compartidas o especializadas por marca.",
 "Acompañamiento técnico para calidad de implementación en todo el ecosistema.",
 ],
 },
 contributions: {
 en: [
 "Architecture and solution design across the Rouge ecommerce ecosystem.",
 "Integration design and technical evolution of the shared VTEX platform.",
 "Hands-on support for storefront and commerce capabilities on related brands.",
 "Keeping delivery aligned between Perfumerías Rouge, Beauty24, and Rouge Maison.",
 ],
 es: [
 "Arquitectura y diseño de soluciones a lo largo del ecosistema ecommerce Rouge.",
 "Diseño de integraciones y evolución técnica de la plataforma VTEX compartida.",
 "Soporte hands-on a capacidades de storefront y commerce en marcas relacionadas.",
 "Alinear la entrega entre Perfumerías Rouge, Beauty24 y Rouge Maison.",
 ],
 },
 technologies: [
 "vtex",
 "vtex-io",
 "react",
 "typescript",
 "integrations",
 "checkout",
 ],
 areas: [
 "architecture",
 "vtex-io",
 "integrations",
 "solution-design",
 "technical-leadership",
 ],
 },
];

export function getProjectBySlug(slug: string): Project | undefined {
 return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
 return [...projects]
 .filter((project) => project.featured)
 .sort((a, b) => a.featuredWeight - b.featuredWeight);
}

export function getCaseStudyProjects(): Project[] {
 return getFeaturedProjects().filter((project) => project.caseStudy);
}
