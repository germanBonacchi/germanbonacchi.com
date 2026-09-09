import type { Locale } from "./types";

export interface UiCopy {
  nav: {
    about: string;
    expertise: string;
    experience: string;
    projects: string;
    skills: string;
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
    ctaProjects: string;
    ctaContact: string;
    scrollDown: string;
  };
  about: {
    topLine: string;
    heading: string;
    body: string[];
    valtechLinkLabel: string;
    photoAlt: string;
  };
  experience: {
    topLine: string;
    heading: string;
    present: string;
    previous: string;
    educationLabel: string;
  };
  projects: {
    topLine: string;
    heading: string;
    intro: string;
    viewProject: string;
    viewCase: string;
    visitSite: string;
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
  cv: {
    download: string;
  };
  scrollToTop: string;
}

export const ui: Record<Locale, UiCopy> = {
  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
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
      ctaProjects: "Selected projects",
      ctaContact: "Get in touch",
      scrollDown: "Scroll down",
    },
    about: {
      topLine: "About",
      heading:
        "Technical Lead in VTEX and ecommerce architecture.",
      body: [
        "I design and lead technical solutions for digital commerce platforms: architecture, integrations, and coding when the complexity needs it.",
        "At Valtech I work across VTEX IO, FastStore, checkout, payments, logistics, search, APIs, and middleware, coordinating with teams and stakeholders while staying close to the code.",
        "Working at VTEX and on enterprise systems taught me to turn architecture into solutions people actually use.",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi in a modern tech office, looking at the camera.",
    },
    experience: {
      topLine: "Experience",
      heading: "From engineering to technical leadership.",
      present: "Present",
      previous: "Previous",
      educationLabel: "Education",
    },
    projects: {
      topLine: "Selected projects",
      heading: "Commerce platforms I worked on.",
      intro:
        "Work on large VTEX projects, with deepest focus on Carrefour Argentina and Cetrogar: technical leadership, FastStore, integrations and solution design.",
      viewProject: "View project",
      viewCase: "View case study",
      visitSite: "Visit live site",
      backToProjects: "Back to projects",
      allProjects: "All selected projects",
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
        "Current Technical Lead role: architecture, custom VTEX IO apps, checkout and logistics coordination across teams.",
      ],
      cetrogarFacts: [
        "National electronics and home-appliance retailer; digital channel connected to a large physical-store network.",
        "Public go-live highlighted by VTEX as a FastStore implementation at scale, delivered in about 90 days with Grupo Cetrogar, Valtech, and VTEX.",
        "FastStore / Next.js storefront with custom modules, preparing the platform for Marketplace expansion.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Platforms, languages, and commerce domains I work with.",
      intro:
        "Main stack: VTEX, React, TypeScript and Node.js, plus the commerce pieces that keep platforms alive in production.",
      networkNote:
        "The graph on the right is how those skills connected over time. Pulses follow the path from early tools to VTEX and commerce.",
      dragHint: "Drag a node. Pulses follow how skills unlocked each other.",
    },
    trainings: {
      topLine: "Trainings",
      heading: "Trainings from my time at VTEX.",
      intro:
        "Trainings I gave on application lifecycle and platform practices. Teaching still helps me learn.",
      watchOnYoutube: "Watch on YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Questions about my role, VTEX and projects.",
      intro:
        "Short answers based on what is public on this site.",
    },
    contact: {
      topLine: "Contact",
      heading:
        "Let's talk about VTEX, architecture or your next commerce project.",
      intro:
        "WhatsApp, LinkedIn or email. No forms.",
      whatsapp: "WhatsApp",
      whatsappHint: "Fastest way to reach me",
      whatsappMessage:
        "Hi Germán, I found your portfolio and I'd like to talk about a VTEX / commerce project.",
      linkedin: "LinkedIn",
      linkedinHint: "Connect or send a message",
      email: "Email",
      emailSubject: "Hello from your portfolio",
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
    cv: {
      download: "Download CV",
    },
    scrollToTop: "Back to top",
  },
  es: {
    nav: {
      about: "Sobre mí",
      expertise: "Expertise",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
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
      ctaProjects: "Proyectos seleccionados",
      ctaContact: "Contacto",
      scrollDown: "Ver más",
    },
    about: {
      topLine: "Sobre mí",
      heading:
        "Technical Lead en VTEX y arquitectura ecommerce.",
      body: [
        "Diseño y lidereo soluciones técnicas para plataformas de commerce: arquitectura, integraciones, y código cuando la complejidad lo pide.",
        "En Valtech trabajo sobre VTEX IO, FastStore, checkout, pagos, logística, búsqueda, APIs y middleware, coordinando con equipos y stakeholders sin alejarme del código.",
        "Pasar por VTEX y por sistemas enterprise me enseñó a traducir arquitectura a soluciones que se usan de verdad.",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi en una oficina tech moderna, mirando a cámara.",
    },
    experience: {
      topLine: "Experiencia",
      heading: "De ingeniería a liderazgo técnico.",
      present: "Actualidad",
      previous: "Anterior",
      educationLabel: "Formación",
    },
    projects: {
      topLine: "Proyectos seleccionados",
      heading: "Plataformas commerce en las que trabajé.",
      intro:
        "Trabajo en proyectos VTEX grandes: liderazgo técnico en Carrefour, FastStore en Cetrogar, integraciones y diseño de soluciones.",
      viewProject: "Ver proyecto",
      viewCase: "Ver case study",
      visitSite: "Visitar sitio",
      backToProjects: "Volver a proyectos",
      allProjects: "Todos los proyectos seleccionados",
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
        "Rol actual como Technical Lead: arquitectura, apps VTEX IO custom, checkout y coordinación de logística entre equipos.",
      ],
      cetrogarFacts: [
        "Retailer nacional de electrodomésticos y tecnología; canal digital conectado a una red amplia de sucursales.",
        "Go-live público destacado por VTEX como implementación FastStore a gran escala, entregado en alrededor de 90 días con Grupo Cetrogar, Valtech y VTEX.",
        "Storefront FastStore / Next.js con módulos custom, preparando la plataforma para expansión de Marketplace.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Plataformas, lenguajes y dominios commerce con los que trabajo.",
      intro:
        "Stack principal: VTEX, React, TypeScript y Node.js, más lo de commerce que hace que las plataformas vivan en producción.",
      networkNote:
        "El grafo de la derecha es cómo se fueron conectando esas skills con el tiempo. Los pulsos siguen el camino desde las primeras herramientas hasta VTEX y commerce.",
      dragHint: "Arrastrá un nodo. Los pulsos siguen cómo una skill habilitó la siguiente.",
    },
    trainings: {
      topLine: "Capacitaciones",
      heading: "Capacitaciones de mi etapa en VTEX.",
      intro:
        "Capacitaciones que dicté sobre ciclo de vida de aplicaciones y prácticas de plataforma. Enseñar todavía me ayuda a aprender.",
      watchOnYoutube: "Ver en YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Preguntas sobre mi rol, VTEX y proyectos.",
      intro:
        "Respuestas cortas, con info pública de este sitio.",
    },
    contact: {
      topLine: "Contacto",
      heading:
        "Hablemos de VTEX, arquitectura o tu próximo proyecto de commerce.",
      intro:
        "WhatsApp, LinkedIn o email. Sin formularios.",
      whatsapp: "WhatsApp",
      whatsappHint: "La forma más rápida de contactarme",
      whatsappMessage:
        "Hola Germán, vi tu portfolio y me gustaría hablar sobre un proyecto VTEX / commerce.",
      linkedin: "LinkedIn",
      linkedinHint: "Conectar o enviar mensaje",
      email: "Email",
      emailSubject: "Hola desde tu portfolio",
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
    cv: {
      download: "Descargar CV",
    },
    scrollToTop: "Volver arriba",
  },
  "pt-BR": {
    nav: {
      about: "Sobre mim",
      expertise: "Expertise",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
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
      ctaProjects: "Projetos selecionados",
      ctaContact: "Contato",
      scrollDown: "Ver mais",
    },
    about: {
      topLine: "Sobre mim",
      heading:
        "Technical Lead em VTEX e arquitetura de ecommerce.",
      body: [
        "Desenho e lidero soluções técnicas para plataformas de commerce: arquitetura, integrações, e código quando a complexidade pede.",
        "Na Valtech atuo em VTEX IO, FastStore, checkout, pagamentos, logística, busca, APIs e middleware, coordenando times e stakeholders sem me afastar do código.",
        "Passar pela VTEX e por sistemas enterprise me ensinou a traduzir arquitetura em soluções que se usam de verdade.",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi em um escritório tech moderno, olhando para a câmera.",
    },
    experience: {
      topLine: "Experiência",
      heading: "Da engenharia à liderança técnica.",
      present: "Atual",
      previous: "Anterior",
      educationLabel: "Formação",
    },
    projects: {
      topLine: "Projetos selecionados",
      heading: "Plataformas commerce em que trabalhei.",
      intro:
        "Trabalho em projetos VTEX grandes, com foco principal em Carrefour Argentina e Cetrogar: liderança técnica, FastStore, integrações e desenho de soluções.",
      viewProject: "Ver projeto",
      viewCase: "Ver case study",
      visitSite: "Visitar site",
      backToProjects: "Voltar aos projetos",
      allProjects: "Todos os projetos selecionados",
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
        "Papel atual como Technical Lead: arquitetura, apps VTEX IO custom, checkout e coordenação logística entre times.",
      ],
      cetrogarFacts: [
        "Varejista nacional de eletrodomésticos e tecnologia; canal digital conectado a uma ampla rede de lojas físicas.",
        "Go-live público destacado pela VTEX como implementação FastStore em grande escala, entregue em cerca de 90 dias com Grupo Cetrogar, Valtech e VTEX.",
        "Storefront FastStore / Next.js com módulos custom, preparando a plataforma para expansão de Marketplace.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Plataformas, linguagens e domínios commerce com os quais trabalho.",
      intro:
        "Stack principal: VTEX, React, TypeScript e Node.js, mais o que de commerce faz as plataformas viverem em produção.",
      networkNote:
        "O grafo à direita é como essas skills foram se conectando no tempo. Os pulsos seguem o caminho das primeiras ferramentas até VTEX e commerce.",
      dragHint: "Arraste um nó. Os pulsos seguem como uma skill destravou a seguinte.",
    },
    trainings: {
      topLine: "Treinamentos",
      heading: "Treinamentos da minha etapa na VTEX.",
      intro:
        "Treinamentos que dei sobre ciclo de vida de aplicações e práticas de plataforma. Ensinar ainda me ajuda a aprender.",
      watchOnYoutube: "Assistir no YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Perguntas sobre meu papel, VTEX e projetos.",
      intro:
        "Respostas curtas, com info pública deste site.",
    },
    contact: {
      topLine: "Contato",
      heading:
        "Vamos falar de VTEX, arquitetura ou do seu próximo projeto de commerce.",
      intro:
        "WhatsApp, LinkedIn ou email. Sem formulários.",
      whatsapp: "WhatsApp",
      whatsappHint: "A forma mais rápida de me contatar",
      whatsappMessage:
        "Olá Germán, vi seu portfólio e gostaria de falar sobre um projeto VTEX / commerce.",
      linkedin: "LinkedIn",
      linkedinHint: "Conectar ou enviar mensagem",
      email: "Email",
      emailSubject: "Olá a partir do seu portfólio",
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
    cv: {
      download: "Baixar CV",
    },
    scrollToTop: "Voltar ao topo",
  },
  it: {
    nav: {
      about: "Chi sono",
      expertise: "Expertise",
      experience: "Esperienza",
      projects: "Progetti",
      skills: "Skills",
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
      ctaProjects: "Progetti selezionati",
      ctaContact: "Contatti",
      scrollDown: "Scopri di più",
    },
    about: {
      topLine: "Chi sono",
      heading:
        "Technical Lead in VTEX e architettura ecommerce.",
      body: [
        "Progetto e guido soluzioni tecniche per piattaforme di commerce: architettura, integrazioni, e codice quando serve.",
        "In Valtech lavoro su VTEX IO, FastStore, checkout, pagamenti, logistics, search, API e middleware, coordinando team e stakeholder senza allontanarmi dal codice.",
        "Passare da VTEX e da sistemi enterprise mi ha insegnato a tradurre architettura in soluzioni che si usano davvero.",
      ],
      valtechLinkLabel: "Valtech",
      photoAlt:
        "Germán Bonacchi in un ufficio tech moderno, rivolto verso la fotocamera.",
    },
    experience: {
      topLine: "Esperienza",
      heading: "Dall'ingegneria alla leadership tecnica.",
      present: "Attuale",
      previous: "Precedente",
      educationLabel: "Formazione",
    },
    projects: {
      topLine: "Progetti selezionati",
      heading: "Piattaforme commerce su cui ho lavorato.",
      intro:
        "Lavoro su grandi progetti VTEX, con focus principale su Carrefour Argentina e Cetrogar: leadership tecnica, FastStore, integrazioni e solution design.",
      viewProject: "Vedi progetto",
      viewCase: "Vedi case study",
      visitSite: "Visita il sito",
      backToProjects: "Torna ai progetti",
      allProjects: "Tutti i progetti selezionati",
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
        "Ruolo attuale come Technical Lead: architettura, app VTEX IO custom, checkout e coordinamento logistico tra team.",
      ],
      cetrogarFacts: [
        "Retailer nazionale di elettrodomestici e tecnologia; canale digitale collegato a una ampia rete di negozi fisici.",
        "Go-live pubblico evidenziato da VTEX come implementazione FastStore su larga scala, consegnato in circa 90 giorni con Grupo Cetrogar, Valtech e VTEX.",
        "Storefront FastStore / Next.js con moduli custom, preparando la piattaforma all'espansione Marketplace.",
      ],
    },
    skills: {
      topLine: "Skills",
      heading: "Piattaforme, linguaggi e domini commerce con cui lavoro.",
      intro:
        "Stack principale: VTEX, React, TypeScript e Node.js, più ciò che di commerce tiene le piattaforme vive in produzione.",
      networkNote:
        "Il grafo a destra è come queste skill si sono collegate nel tempo. I pulsi seguono il percorso dai primi strumenti fino a VTEX e commerce.",
      dragHint: "Trascina un nodo. I pulsi seguono come una skill ha sbloccato la successiva.",
    },
    trainings: {
      topLine: "Formazioni",
      heading: "Formazioni dei miei anni in VTEX.",
      intro:
        "Formazioni che ho tenuto su ciclo di vita delle applicazioni e pratiche di piattaforma. Insegnare mi aiuta ancora a imparare.",
      watchOnYoutube: "Guarda su YouTube",
    },
    faq: {
      topLine: "FAQ",
      heading: "Domande sul mio ruolo, VTEX e progetti.",
      intro:
        "Risposte brevi, con info pubblica di questo sito.",
    },
    contact: {
      topLine: "Contatti",
      heading:
        "Parliamo di VTEX, architettura o del tuo prossimo progetto di commerce.",
      intro:
        "WhatsApp, LinkedIn o email. Niente form.",
      whatsapp: "WhatsApp",
      whatsappHint: "Il modo più veloce per raggiungermi",
      whatsappMessage:
        "Ciao Germán, ho visto il tuo portfolio e vorrei parlare di un progetto VTEX / commerce.",
      linkedin: "LinkedIn",
      linkedinHint: "Connettiti o invia un messaggio",
      email: "Email",
      emailSubject: "Ciao dal tuo portfolio",
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
    cv: {
      download: "Scarica CV",
    },
    scrollToTop: "Torna su",
  },
};
