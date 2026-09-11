import type { Localized } from "./types";

export interface DecisionItem {
  id: string;
  question: Localized;
  answer: Localized;
}

export const decisionsIntro: {
  topLine: Localized;
  heading: Localized;
  lead: Localized;
} = {
  topLine: {
    es: "Decisiones de arquitectura",
    en: "Architecture decisions",
    "pt-BR": "Decisões de arquitetura",
    it: "Decisioni di architettura",
  },
  heading: {
    es: "Preguntas que aparecen en proyectos VTEX reales",
    en: "Questions that show up on real VTEX projects",
    "pt-BR": "Perguntas que aparecem em projetos VTEX reais",
    it: "Domande che emergono in progetti VTEX reali",
  },
  lead: {
    es: "Respuestas cortas, basadas en trabajo enterprise, no en tutoriales genéricos.",
    en: "Short answers grounded in enterprise work, not generic tutorials.",
    "pt-BR":
      "Respostas curtas, baseadas em trabalho enterprise, não em tutoriais genéricos.",
    it: "Risposte brevi, basate su lavoro enterprise, non su tutorial generici.",
  },
};

export const decisions: DecisionItem[] = [
  {
    id: "io-vs-faststore",
    question: {
      es: "¿Cuándo usar VTEX IO y cuándo FastStore?",
      en: "When to use VTEX IO vs FastStore?",
      "pt-BR": "Quando usar VTEX IO e quando FastStore?",
      it: "Quando usare VTEX IO e quando FastStore?",
    },
    answer: {
      es: "IO encaja cuando necesitás profundidad de bloques, checkout custom y un ecosistema de apps maduro. FastStore cuando el storefront necesita performance headless, control de frontend y un BFF GraphQL moderno. La decisión real suele ser: velocidad de time-to-market vs control de experiencia y deuda futura.",
      en: "IO fits when you need deep block customization, custom checkout and a mature apps ecosystem. FastStore when the storefront needs headless performance, frontend control and a modern GraphQL BFF. The real trade-off is usually time-to-market vs experience control and future debt.",
      "pt-BR":
        "IO encaixa quando você precisa de profundidade de blocks, checkout custom e um ecossistema de apps maduro. FastStore quando o storefront precisa de performance headless, controle de frontend e um BFF GraphQL moderno. A decisão real costuma ser: time-to-market vs controle de experiência e dívida futura.",
      it: "IO va bene quando serve profondità di block, checkout custom e un ecosistema di app maturo. FastStore quando lo storefront serve performance headless, controllo del frontend e un BFF GraphQL moderno. Il trade-off reale è di solito time-to-market vs controllo dell'esperienza e debito futuro.",
    },
  },
  {
    id: "in-vs-out",
    question: {
      es: "¿Cuándo construir una app VTEX y cuándo externalizar?",
      en: "When to build a VTEX app vs externalize?",
      "pt-BR": "Quando construir uma app VTEX e quando externalizar?",
      it: "Quando costruire un'app VTEX e quando esternalizzare?",
    },
    answer: {
      es: "Si el dominio es intrínsecamente commerce (promos, checkout UX, storefront) y se beneficia de identidad VTEX, una app tiene sentido. Si es lógica de negocio core, ETL pesado o un sistema que ya existe fuera, externalizá e integrá. Meter todo adentro convierte la plataforma en un monolito difícil de operar.",
      en: "If the domain is intrinsically commerce (promos, checkout UX, storefront) and benefits from VTEX identity, an app makes sense. If it's core business logic, heavy ETL or a system that already lives outside, externalize and integrate. Putting everything inside turns the platform into a hard-to-operate monolith.",
      "pt-BR":
        "Se o domínio é intrinsecamente commerce (promos, checkout UX, storefront) e se beneficia da identidade VTEX, uma app faz sentido. Se é lógica de negócio core, ETL pesado ou um sistema que já existe fora, externalize e integre. Meter tudo dentro transforma a plataforma em um monolito difícil de operar.",
      it: "Se il dominio è intrinsecamente commerce (promo, checkout UX, storefront) e beneficia dell'identità VTEX, un'app ha senso. Se è logica di business core, ETL pesante o un sistema che già vive fuori, esternalizza e integra. Mettere tutto dentro trasforma la piattaforma in un monolite difficile da operare.",
    },
  },
  {
    id: "async-erp",
    question: {
      es: "¿Cómo manejar integraciones asincrónicas con ERP?",
      en: "How to handle async ERP integrations?",
      "pt-BR": "Como lidar com integrações assíncronas com ERP?",
      it: "Come gestire integrazioni asincrone con ERP?",
    },
    answer: {
      es: "Desacoplar con colas o eventos, idempotencia, reintentos con backoff y un estado de reconciliación visible. El storefront no debería esperar al ERP en el camino crítico de compra salvo que el negocio lo exija. En ese caso hay que diseñar degradación explícita.",
      en: "Decouple with queues or events, idempotency, backoff retries and a visible reconciliation state. The storefront shouldn't wait on the ERP on the critical purchase path unless business requires it. In that case you need explicit degradation design.",
      "pt-BR":
        "Desacoplar com filas ou eventos, idempotência, retries com backoff e um estado de reconciliação visível. O storefront não deveria esperar o ERP no caminho crítico da compra a menos que o negócio exija. Nesse caso é preciso desenhar degradação explícita.",
      it: "Disaccoppia con code o eventi, idempotenza, retry con backoff e uno stato di riconciliazione visibile. Lo storefront non dovrebbe aspettare l'ERP sul percorso critico d'acquisto a meno che il business lo richieda. In quel caso serve un design di degradazione esplicito.",
    },
  },
  {
    id: "checkout-gap",
    question: {
      es: "¿Qué hacer cuando el checkout necesita algo que VTEX no soporta nativo?",
      en: "What when checkout needs something VTEX doesn't support natively?",
      "pt-BR":
        "O que fazer quando o checkout precisa de algo que a VTEX não suporta nativo?",
      it: "Cosa fare quando il checkout serve qualcosa che VTEX non supporta nativamente?",
    },
    answer: {
      es: "Primero mapear si se resuelve con Checkout UI Custom, apps, orderForm o un flujo pre/post checkout. Si ninguna opción alcanza sin romper upgrades, el trade-off es: simplificar el requerimiento de negocio, o aceptar un costo de mantenimiento alto con ownership claro y tests de regresión.",
      en: "First map whether Checkout UI Custom, apps, orderForm or a pre/post-checkout flow can solve it. If nothing works without breaking upgrades, the trade-off is: simplify the business requirement, or accept high maintenance cost with clear ownership and regression tests.",
      "pt-BR":
        "Primeiro mapear se resolve com Checkout UI Custom, apps, orderForm ou um fluxo pré/pós checkout. Se nenhuma opção resolve sem quebrar upgrades, o trade-off é: simplificar o requisito de negócio, ou aceitar um custo alto de manutenção com ownership claro e testes de regressão.",
      it: "Prima mappa se si risolve con Checkout UI Custom, app, orderForm o un flusso pre/post checkout. Se nessuna opzione basta senza rompere gli upgrade, il trade-off è: semplificare il requisito di business, oppure accettare un alto costo di manutenzione con ownership chiaro e test di regressione.",
    },
  },
];
