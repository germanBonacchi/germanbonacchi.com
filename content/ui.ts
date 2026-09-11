import type { Locale } from "./types";

export interface UiCopy {
  nav: {
    about: string;
    expertise: string;
    experience: string;
    projects: string;
    skills: string;
    services: string;
    trainings: string;
    faq: string;
    contact: string;
    home: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    credentials: string;
    trustLine: string;
    companies: string;
    authorityLabel: string;
    ctaProjects: string;
    ctaContact: string;
    ctaArchitecture: string;
    ctaHire: string;
    scrollDown: string;
    photoAlt: string;
  };
  about: {
    topLine: string;
    heading: string;
    body: string[];
    questions: string[];
    valtechLinkLabel: string;
    photoAlt: string;
  };
  experience: {
    topLine: string;
    heading: string;
    present: string;
    educationLabel: string;
    exVtexBadge: string;
  };
  projects: {
    topLine: string;
    heading: string;
    intro: string;
    viewProject: string;
    viewCase: string;
    visitSite: string;
    visitStore: string;
    backToProjects: string;
    allProjects: string;
    roleLabel: string;
    techLabel: string;
    areasLabel: string;
    challengesLabel: string;
    contributionsLabel: string;
    contextLabel: string;
    sitesLabel: string;
    externalRefNote: string;
    carrefourFacts: string[];
    cetrogarFacts: string[];
  };
  skills: {
    topLine: string;
    heading: string;
    intro: string;
    networkNote: string;
    dragHint: string;
  };
  trainings: {
    topLine: string;
    heading: string;
    intro: string;
    watchOnYoutube: string;
  };
  faq: {
    topLine: string;
    heading: string;
    intro: string;
  };
  contact: {
    topLine: string;
    heading: string;
    intro: string;
    offerHeading: string;
    offerItems: string[];
    scheduleCta: string;
    whatsapp: string;
    whatsappHint: string;
    whatsappMessage: string;
    linkedin: string;
    linkedinHint: string;
    email: string;
    emailSubject: string;
    emailBody: string;
    github: string;
    githubHint: string;
  };
  footer: {
    rights: string;
  };
  language: {
    label: string;
    selectLabel: string;
  };
  scrollToTop: string;
}

export const ui: Record<Locale, UiCopy> = {
  en: {
    nav: {
      about: "About",
      expertise: "Problems",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      services: "Services",
      trainings: "Trainings",
      faq: "FAQ",
      contact: "Contact",
      home: "Home",
      skipToContent: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      greeting: "Hi, I'm",
      tagline:
        "I design enterprise ecommerce architectures on VTEX IO and FastStore. Integrations, checkout, performance and high-scale platforms.",
      credentials: "Ex-VTEX · Valtech · Carrefour · Cetrogar",
      trustLine:
        "8+ years in software · 5+ years in VTEX · Ex-VTEX · Technical Lead on enterprise projects",
      companies: "VTEX · Valtech · Carrefour · Cetrogar · Médis · Rouge",
      authorityLabel: "Professional credentials",
      ctaProjects: "See experience",
      ctaContact: "Get in touch",
      ctaArchitecture: "I need VTEX architecture help",
      ctaHire: "Hire me for a project",
      scrollDown: "Scroll down",
      photoAlt: "Germán Bonacchi portrait",
    },
    about: {
      topLine: "About",
      heading: "I help retailers make hard technical decisions around VTEX.",
      body: [
        "At Valtech I lead architecture and delivery on VTEX IO, FastStore, checkout, payments, logistics, search, APIs and middleware — close to the code and to stakeholders.",
        "Having worked inside VTEX and on enterprise systems taught me to turn architecture into solutions people actually ship.",
      ],
      questions: [
        "What should live inside VTEX?",
        "What should be solved with external services?",
        "How do you integrate ERP, OMS, PIM, WMS and payment providers?",
        "How do you stop customizations from turning VTEX into an unmaintainable system?",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi in a modern tech office, looking at the camera.",
    },
    experience: {
      topLine: "Experience",
      heading: "From engineering to technical leadership.",
      present: "Present",
      educationLabel: "Education",
      exVtexBadge: "EX-VTEX",
    },
    projects: {
      topLine: "Selected projects",
      heading: "Commerce platforms I worked on.",
      intro:
        "Work on large VTEX projects, with deepest focus on Carrefour Argentina and Cetrogar: architecture, FastStore migration (~90 days), integrations and solution design.",
      viewProject: "View project",
      viewCase: "View case study",
      visitSite: "Visit store",
      visitStore: "Visit store",
      backToProjects: "Back",
      allProjects: "All projects",
      roleLabel: "Role",
      techLabel: "Technologies",
      areasLabel: "Focus areas",
      challengesLabel: "Challenges",
      contributionsLabel: "Where I contributed",
      contextLabel: "Context",
      sitesLabel: "Storefronts in this ecosystem",
      externalRefNote:
        "The launch was publicly highlighted by VTEX as a large-scale FastStore implementation.",
      carrefourFacts: [
        "High-traffic omnichannel supermarket ecommerce on VTEX IO (grocery, home & appliances, marketplace sellers).",
        "Key deliveries: Mega Menu, modern regionalizer (home delivery / Drive / quick commerce), and cart split by commerce segment.",
        "Current role as Technical Lead & Architect: architecture, custom VTEX IO apps, checkout and logistics coordination across teams.",
      ],
      cetrogarFacts: [
        "National electronics and home-appliance retailer; digital channel connected to a large physical-store network.",
        "Public go-live highlighted by VTEX as a FastStore implementation at scale, delivered in about 90 days.",
        "FastStore / Next.js storefront with custom modules, preparing the platform for Marketplace expansion.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Core expertise first. Evolution graph second.",
      intro:
        "Architecture, commerce domains, engineering stack and leadership — the map that matters when deciding to work together.",
      networkNote:
        "Want to explore how those skills connected over time? The graph shows the path from early tools to VTEX and commerce.",
      dragHint: "Drag a node. Pulses show how each skill unlocked the next.",
    },
    trainings: {
      topLine: "Technical training at VTEX",
      heading: "VTEX trusted me to train LATAM teams — not only to ship code.",
      intro:
        "During my time at VTEX I taught technical sessions on app lifecycle and platform practices across LATAM.",
      watchOnYoutube: "Watch on YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Questions potential clients actually ask.",
      intro: "Short answers about scope, engagement and how we can work together.",
    },
    contact: {
      topLine: "Contact",
      heading: "Do you have a VTEX architecture that needs a review?",
      intro: "WhatsApp, LinkedIn or email. No forms.",
      offerHeading: "I can help with:",
      offerItems: [
        "Architecture review",
        "Technical discovery",
        "Migration strategy",
        "Performance review",
        "Technical leadership",
      ],
      scheduleCta: "Book a 30-min conversation",
      whatsapp: "WhatsApp",
      whatsappHint: "Fastest way to reach me",
      whatsappMessage:
        "Hi Germán, I found your portfolio and I'd like to talk about a VTEX architecture / commerce project.",
      linkedin: "LinkedIn",
      linkedinHint: "Connect or send a message",
      email: "Email",
      emailSubject: "VTEX architecture conversation",
      emailBody:
        "Hi Germán,\n\nI found your portfolio and I'd like to talk about...\n\n",
      github: "GitHub",
      githubHint: "See public work",
    },
    footer: {
      rights: "All rights reserved.",
    },
    language: {
      label: "Language",
      selectLabel: "Select language",
    },
    scrollToTop: "Back to top",
  },
  es: {
    nav: {
      about: "Sobre mí",
      expertise: "Problemas",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
      services: "Servicios",
      trainings: "Capacitaciones",
      faq: "FAQ",
      contact: "Contacto",
      home: "Inicio",
      skipToContent: "Saltar al contenido",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      greeting: "Hola, soy",
      tagline:
        "Diseño arquitecturas ecommerce enterprise sobre VTEX IO y FastStore. Integraciones, checkout, performance y plataformas de alta escala.",
      credentials: "Ex-VTEX · Valtech · Carrefour · Cetrogar",
      trustLine:
        "8+ años en software · 5+ años en VTEX · Ex-VTEX · Technical Lead en proyectos enterprise",
      companies: "VTEX · Valtech · Carrefour · Cetrogar · Médis · Rouge",
      authorityLabel: "Credenciales profesionales",
      ctaProjects: "Ver experiencia",
      ctaContact: "Contacto",
      ctaArchitecture: "Necesito ayuda con arquitectura VTEX",
      ctaHire: "Quiero contratarlo para un proyecto",
      scrollDown: "Ver más",
      photoAlt: "Retrato de Germán Bonacchi",
    },
    about: {
      topLine: "Sobre mí",
      heading: "Ayudo a retailers a tomar decisiones técnicas difíciles alrededor de VTEX.",
      body: [
        "En Valtech lidereo arquitectura y entrega sobre VTEX IO, FastStore, checkout, pagos, logística, búsqueda, APIs y middleware — cerca del código y de los stakeholders.",
        "Pasar por VTEX y por sistemas enterprise me enseñó a traducir arquitectura a soluciones que se usan de verdad.",
      ],
      questions: [
        "¿Qué debería vivir dentro de VTEX?",
        "¿Qué conviene resolver con servicios externos?",
        "¿Cómo integrar ERP, OMS, PIM, WMS y medios de pago?",
        "¿Cómo evitar que las customizaciones conviertan una plataforma VTEX en un sistema inmantenible?",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi en una oficina tech moderna, mirando a cámara.",
    },
    experience: {
      topLine: "Experiencia",
      heading: "De ingeniería a liderazgo técnico.",
      present: "Actualidad",
      educationLabel: "Formación",
      exVtexBadge: "EX-VTEX",
    },
    projects: {
      topLine: "Proyectos destacados",
      heading: "Plataformas commerce en las que trabajé.",
      intro:
        "Trabajo en proyectos VTEX grandes: arquitectura en Carrefour, migración FastStore en Cetrogar (~90 días), integraciones y diseño de soluciones.",
      viewProject: "Ver proyecto",
      viewCase: "Ver caso",
      visitSite: "Ver tienda",
      visitStore: "Ver tienda",
      backToProjects: "Volver",
      allProjects: "Todos los proyectos",
      roleLabel: "Rol",
      techLabel: "Tecnologías",
      areasLabel: "Áreas de foco",
      challengesLabel: "Desafíos",
      contributionsLabel: "Dónde aporté",
      contextLabel: "Contexto",
      sitesLabel: "Storefronts de este ecosistema",
      externalRefNote:
        "El lanzamiento fue destacado públicamente por VTEX como un caso de implementación FastStore a gran escala.",
      carrefourFacts: [
        "Ecommerce omnicanal de supermercado de alto tráfico sobre VTEX IO (grocery, hogar y electro, sellers de marketplace).",
        "Hitos clave: Mega Menu, regionalizador moderno (envío a domicilio / Drive / entrega inmediata) y split de carritos por segmento.",
        "Rol actual como Technical Lead & Architect: arquitectura, apps VTEX IO custom, checkout y coordinación de logística entre equipos.",
      ],
      cetrogarFacts: [
        "Retailer nacional de electrodomésticos y tecnología; canal digital conectado a una red amplia de sucursales.",
        "Go-live público destacado por VTEX como implementación FastStore a gran escala, entregado en alrededor de 90 días.",
        "Storefront FastStore / Next.js con módulos custom, preparando la plataforma para expansión de Marketplace.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Core expertise primero. El grafo, después.",
      intro:
        "Arquitectura, dominios commerce, stack de ingeniería y liderazgo — el mapa útil para decidir trabajar juntos.",
      networkNote:
        "¿Querés explorar mi evolución técnica? El grafo muestra el camino desde las primeras herramientas hasta VTEX y commerce.",
      dragHint:
        "Arrastrá un nodo. Los pulsos muestran cómo cada skill abrió paso a la siguiente.",
    },
    trainings: {
      topLine: "Formación técnica en VTEX",
      heading:
        "VTEX confió en mí para capacitar equipos LATAM — no solo para programar.",
      intro:
        "Durante mi etapa en VTEX participé como instructor en capacitaciones técnicas sobre lifecycle de apps y prácticas de plataforma para LATAM.",
      watchOnYoutube: "Ver en YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Preguntas que realmente hace un potencial cliente.",
      intro: "Respuestas cortas sobre alcance, engagement y cómo podemos trabajar.",
    },
    contact: {
      topLine: "Contacto",
      heading: "¿Tenés una arquitectura VTEX que necesita revisión?",
      intro: "WhatsApp, LinkedIn o email. Sin formularios.",
      offerHeading: "Puedo ayudarte con:",
      offerItems: [
        "Architecture review",
        "Technical discovery",
        "Migration strategy",
        "Performance review",
        "Technical leadership",
      ],
      scheduleCta: "Agendar una conversación de 30 min",
      whatsapp: "WhatsApp",
      whatsappHint: "La forma más rápida de contactarme",
      whatsappMessage:
        "Hola Germán, vi tu portfolio y me gustaría hablar sobre arquitectura VTEX / un proyecto de commerce.",
      linkedin: "LinkedIn",
      linkedinHint: "Conectar o enviar mensaje",
      email: "Email",
      emailSubject: "Conversación sobre arquitectura VTEX",
      emailBody:
        "Hola Germán,\n\nVi tu portfolio y me gustaría hablar sobre...\n\n",
      github: "GitHub",
      githubHint: "Ver trabajo público",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    language: {
      label: "Idioma",
      selectLabel: "Seleccionar idioma",
    },
    scrollToTop: "Volver arriba",
  },
  "pt-BR": {
    nav: {
      about: "Sobre mim",
      expertise: "Problemas",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      services: "Serviços",
      trainings: "Treinamentos",
      faq: "FAQ",
      contact: "Contato",
      home: "Início",
      skipToContent: "Pular para o conteúdo",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      greeting: "Olá, eu sou",
      tagline:
        "Desenho arquiteturas ecommerce enterprise em VTEX IO e FastStore. Integrações, checkout, performance e plataformas de alta escala.",
      credentials: "Ex-VTEX · Valtech · Carrefour · Cetrogar",
      trustLine:
        "8+ anos em software · 5+ anos em VTEX · Ex-VTEX · Technical Lead em projetos enterprise",
      companies: "VTEX · Valtech · Carrefour · Cetrogar · Médis · Rouge",
      authorityLabel: "Credenciais profissionais",
      ctaProjects: "Ver experiência",
      ctaContact: "Contato",
      ctaArchitecture: "Preciso de ajuda com arquitetura VTEX",
      ctaHire: "Quero contratá-lo para um projeto",
      scrollDown: "Ver mais",
      photoAlt: "Retrato de Germán Bonacchi",
    },
    about: {
      topLine: "Sobre mim",
      heading:
        "Ajudo retailers a tomar decisões técnicas difíceis em torno de VTEX.",
      body: [
        "Na Valtech lidero arquitetura e entrega em VTEX IO, FastStore, checkout, pagamentos, logística, busca, APIs e middleware — perto do código e dos stakeholders.",
        "Passar pela VTEX e por sistemas enterprise me ensinou a traduzir arquitetura em soluções que se usam de verdade.",
      ],
      questions: [
        "O que deveria viver dentro da VTEX?",
        "O que convém resolver com serviços externos?",
        "Como integrar ERP, OMS, PIM, WMS e meios de pagamento?",
        "Como evitar que customizações transformem uma plataforma VTEX em um sistema imanutenível?",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi em um escritório tech moderno, olhando para a câmera.",
    },
    experience: {
      topLine: "Experiência",
      heading: "Da engenharia à liderança técnica.",
      present: "Atual",
      educationLabel: "Formação",
      exVtexBadge: "EX-VTEX",
    },
    projects: {
      topLine: "Projetos selecionados",
      heading: "Plataformas commerce em que trabalhei.",
      intro:
        "Trabalho em projetos VTEX grandes, com foco principal em Carrefour Argentina e Cetrogar: liderança técnica, FastStore, integrações e desenho de soluções.",
      viewProject: "Ver projeto",
      viewCase: "Ver caso",
      visitSite: "Ver loja",
      visitStore: "Ver loja",
      backToProjects: "Voltar",
      allProjects: "Todos os projetos",
      roleLabel: "Papel",
      techLabel: "Tecnologias",
      areasLabel: "Áreas de foco",
      challengesLabel: "Desafios",
      contributionsLabel: "Onde contribui",
      contextLabel: "Contexto",
      sitesLabel: "Storefronts deste ecossistema",
      externalRefNote:
        "O lançamento foi destacado publicamente pela VTEX como uma implementação FastStore em grande escala.",
      carrefourFacts: [
        "Ecommerce omnichannel de supermercados de alto tráfego em VTEX IO (supermercado, casa e eletro, sellers de marketplace).",
        "Entregas-chave: Mega Menu, regionalizador moderno (entrega em casa / Drive / entrega imediata) e split de carrinhos por segmento.",
        "Papel atual como Technical Lead & Architect: arquitetura, apps VTEX IO custom, checkout e coordenação logística entre times.",
      ],
      cetrogarFacts: [
        "Varejista nacional de eletrodomésticos e tecnologia; canal digital conectado a uma ampla rede de lojas físicas.",
        "Go-live público destacado pela VTEX como implementação FastStore em grande escala, entregue em cerca de 90 dias.",
        "Storefront FastStore / Next.js com módulos custom, preparando a plataforma para expansão de Marketplace.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Core expertise primeiro. O grafo, depois.",
      intro:
        "Arquitetura, domínios commerce, stack de engenharia e liderança — o mapa útil para decidir trabalhar juntos.",
      networkNote:
        "Quer explorar minha evolução técnica? O grafo mostra o caminho das primeiras ferramentas até VTEX e commerce.",
      dragHint:
        "Arraste um nó. Os pulsos mostram como cada skill abriu caminho para a seguinte.",
    },
    trainings: {
      topLine: "Formação técnica na VTEX",
      heading:
        "A VTEX confiou em mim para treinar times LATAM — não só para programar.",
      intro:
        "Durante minha etapa na VTEX participei como instrutor em treinamentos técnicos sobre lifecycle de apps e práticas de plataforma para LATAM.",
      watchOnYoutube: "Assistir no YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Perguntas que um potencial cliente realmente faz.",
      intro:
        "Respostas curtas sobre escopo, engagement e como podemos trabalhar.",
    },
    contact: {
      topLine: "Contato",
      heading: "Tem uma arquitetura VTEX que precisa de revisão?",
      intro: "WhatsApp, LinkedIn ou email. Sem formulários.",
      offerHeading: "Posso ajudar com:",
      offerItems: [
        "Architecture review",
        "Technical discovery",
        "Migration strategy",
        "Performance review",
        "Technical leadership",
      ],
      scheduleCta: "Agendar uma conversa de 30 min",
      whatsapp: "WhatsApp",
      whatsappHint: "A forma mais rápida de me contatar",
      whatsappMessage:
        "Olá Germán, vi seu portfólio e gostaria de falar sobre arquitetura VTEX / um projeto de commerce.",
      linkedin: "LinkedIn",
      linkedinHint: "Conectar ou enviar mensagem",
      email: "Email",
      emailSubject: "Conversa sobre arquitetura VTEX",
      emailBody:
        "Olá Germán,\n\nVi seu portfólio e gostaria de falar sobre...\n\n",
      github: "GitHub",
      githubHint: "Ver trabalho público",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    language: {
      label: "Idioma",
      selectLabel: "Selecionar idioma",
    },
    scrollToTop: "Voltar ao topo",
  },
  it: {
    nav: {
      about: "Chi sono",
      expertise: "Problemi",
      experience: "Esperienza",
      projects: "Progetti",
      skills: "Skills",
      services: "Servizi",
      trainings: "Formazioni",
      faq: "FAQ",
      contact: "Contatti",
      home: "Home",
      skipToContent: "Vai al contenuto",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu",
    },
    hero: {
      greeting: "Ciao, sono",
      tagline:
        "Progetto architetture ecommerce enterprise su VTEX IO e FastStore. Integrazioni, checkout, performance e piattaforme ad alta scala.",
      credentials: "Ex-VTEX · Valtech · Carrefour · Cetrogar",
      trustLine:
        "8+ anni nel software · 5+ anni in VTEX · Ex-VTEX · Technical Lead su progetti enterprise",
      companies: "VTEX · Valtech · Carrefour · Cetrogar · Médis · Rouge",
      authorityLabel: "Credenziali professionali",
      ctaProjects: "Vedi esperienza",
      ctaContact: "Contatti",
      ctaArchitecture: "Mi serve aiuto con architettura VTEX",
      ctaHire: "Voglio assoldarlo per un progetto",
      scrollDown: "Scopri di più",
      photoAlt: "Ritratto di Germán Bonacchi",
    },
    about: {
      topLine: "Chi sono",
      heading:
        "Aiuto i retailer a prendere decisioni tecniche difficili intorno a VTEX.",
      body: [
        "In Valtech guido architettura e delivery su VTEX IO, FastStore, checkout, pagamenti, logistics, search, API e middleware — vicino al codice e agli stakeholder.",
        "Passare da VTEX e da sistemi enterprise mi ha insegnato a tradurre architettura in soluzioni che si usano davvero.",
      ],
      questions: [
        "Cosa dovrebbe vivere dentro VTEX?",
        "Cosa conviene risolvere con servizi esterni?",
        "Come integrare ERP, OMS, PIM, WMS e mezzi di pagamento?",
        "Come evitare che le customizzazioni trasformino una piattaforma VTEX in un sistema non manutenibile?",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi in un ufficio tech moderno, rivolto verso la fotocamera.",
    },
    experience: {
      topLine: "Esperienza",
      heading: "Dall'ingegneria alla leadership tecnica.",
      present: "Attuale",
      educationLabel: "Formazione",
      exVtexBadge: "EX-VTEX",
    },
    projects: {
      topLine: "Progetti selezionati",
      heading: "Piattaforme commerce su cui ho lavorato.",
      intro:
        "Lavoro su grandi progetti VTEX, con focus principale su Carrefour Argentina e Cetrogar: leadership tecnica, FastStore, integrazioni e solution design.",
      viewProject: "Vedi progetto",
      viewCase: "Vedi caso",
      visitSite: "Vedi il negozio",
      visitStore: "Vedi il negozio",
      backToProjects: "Torna",
      allProjects: "Tutti i progetti",
      roleLabel: "Ruolo",
      techLabel: "Tecnologie",
      areasLabel: "Aree di focus",
      challengesLabel: "Sfide",
      contributionsLabel: "Dove ho contribuito",
      contextLabel: "Contesto",
      sitesLabel: "Storefront di questo ecosistema",
      externalRefNote:
        "Il lancio è stato evidenziato pubblicamente da VTEX come un'implementazione FastStore su larga scala.",
      carrefourFacts: [
        "Ecommerce omnicanale di supermercati ad alto traffico su VTEX IO (supermercato, casa ed elettro, seller di marketplace).",
        "Consegne chiave: Mega Menu, regionalizzatore moderno (consegna a domicilio / Drive / consegna immediata) e split dei carrelli per segmento.",
        "Ruolo attuale come Technical Lead & Architect: architettura, app VTEX IO custom, checkout e coordinamento logistico tra team.",
      ],
      cetrogarFacts: [
        "Retailer nazionale di elettrodomestici e tecnologia; canale digitale collegato a una ampia rete di negozi fisici.",
        "Go-live pubblico evidenziato da VTEX come implementazione FastStore su larga scala, consegnato in circa 90 giorni.",
        "Storefront FastStore / Next.js con moduli custom, preparando la piattaforma all'espansione Marketplace.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Core expertise prima. Il grafo, dopo.",
      intro:
        "Architettura, domini commerce, stack di engineering e leadership — la mappa utile per decidere di lavorare insieme.",
      networkNote:
        "Vuoi esplorare la mia evoluzione tecnica? Il grafo mostra il percorso dai primi strumenti fino a VTEX e commerce.",
      dragHint:
        "Trascina un nodo. I pulsi mostrano come ogni skill ha aperto la successiva.",
    },
    trainings: {
      topLine: "Formazione tecnica in VTEX",
      heading:
        "VTEX si è fidata di me per formare team LATAM — non solo per programmare.",
      intro:
        "Durante i miei anni in VTEX ho partecipato come istruttore a formazioni tecniche su lifecycle delle app e pratiche di piattaforma per LATAM.",
      watchOnYoutube: "Guarda su YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Domande che un potenziale cliente fa davvero.",
      intro:
        "Risposte brevi su scope, engagement e come possiamo lavorare insieme.",
    },
    contact: {
      topLine: "Contatti",
      heading: "Hai un'architettura VTEX che ha bisogno di una review?",
      intro: "WhatsApp, LinkedIn o email. Niente form.",
      offerHeading: "Posso aiutarti con:",
      offerItems: [
        "Architecture review",
        "Technical discovery",
        "Migration strategy",
        "Performance review",
        "Technical leadership",
      ],
      scheduleCta: "Prenota una conversazione di 30 min",
      whatsapp: "WhatsApp",
      whatsappHint: "Il modo più veloce per raggiungermi",
      whatsappMessage:
        "Ciao Germán, ho visto il tuo portfolio e vorrei parlare di architettura VTEX / un progetto di commerce.",
      linkedin: "LinkedIn",
      linkedinHint: "Connettiti o invia un messaggio",
      email: "Email",
      emailSubject: "Conversazione su architettura VTEX",
      emailBody:
        "Ciao Germán,\n\nHo visto il tuo portfolio e vorrei parlare di...\n\n",
      github: "GitHub",
      githubHint: "Vedi lavoro pubblico",
    },
    footer: {
      rights: "Tutti i diritti riservati.",
    },
    language: {
      label: "Lingua",
      selectLabel: "Seleziona lingua",
    },
    scrollToTop: "Torna su",
  },
};
