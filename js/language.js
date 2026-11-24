/* =============================================================
   language.js — textos da interface (PT / EN) e troca de idioma
   -------------------------------------------------------------
   • Elementos com  data-i18n="chave"        recebem o texto.
   • Elementos com  data-i18n-attr="attr:chave;attr2:chave2"
     recebem atributos traduzidos (aria-label, title...).
   • Conteúdo de projetos/modelos/tecnologias fica em data.js.
   • A escolha é salva em localStorage ("lo-lang") e vale para
     todas as páginas (Home, Projetos e Modelos).
   • Título/descrição da aba seguem a página atual:
     <html data-page="home | projects | showcase">.
   ============================================================= */

const I18N = (() => {
  const STORAGE_KEY = "lo-lang";
  const SUPPORTED = ["pt", "en"];

  const STRINGS = {
    pt: {
      "meta.home.title": "Lorenzo Orsetti | Desenvolvedor Web & Estudante de Engenharia de Software",
      "meta.home.description": "Lorenzo Orsetti, estudante de Engenharia de Software na PUCPR e desenvolvedor web. Produtos, sistemas e experiências digitais.",
      "meta.projects.title": "Projetos | Lorenzo Orsetti",
      "meta.projects.description": "Produtos, sistemas e sites que Lorenzo Orsetti desenvolveu: Or7 Table, VotAI, NEXO, Rare Encounter, Pulse e outros, com status e estudos de caso.",
      "meta.showcase.title": "Modelos de sites por segmento | Lorenzo Orsetti",
      "meta.showcase.description": "29 modelos completos de sites para restaurantes, clínicas, academias, hotéis, imobiliárias e outros segmentos. Marcas fictícias, demonstrações reais.",

      "skip": "Pular para o conteúdo",
      "nav.label": "Navegação principal",
      "nav.about": "Sobre",
      "nav.projects": "Projetos",
      "nav.showcase": "Modelos",
      "nav.stack": "Stack",
      "nav.education": "Formação",
      "nav.english": "Inglês",
      "nav.github": "GitHub",
      "nav.contact": "Contato",
      "nav.open": "Abrir menu",
      "nav.close": "Fechar menu",
      "nav.home": "Início",
      "crumb.label": "Você está em",
      "lang.label": "Idioma",
      "theme.toLight": "Ativar tema claro",
      "theme.toDark": "Ativar tema escuro",
      "progress.label": "Progresso de leitura",

      "hero.hello": "Olá, eu sou",
      "hero.role1": "Estudante de Engenharia de Software",
      "hero.role2": "& Desenvolvedor Web",
      "hero.lead": "Transformo ideias em produtos que funcionam: do modelo de dados à interface, até estarem no ar.",
      "hero.ctaProjects": "Ver projetos",
      "hero.ctaShowcase": "Modelos",
      "hero.status": "Aberto a oportunidades",
      "hero.editor": "Editor de código com o perfil de Lorenzo",
      "hero.marquee": "Tecnologias que utilizo",
      "hero.social": "Redes",

      "term.tab": "terminal",
      "term.input": "Digite um comando",
      "term.hint": "digite <b>help</b> para ver os comandos",
      "term.help": "comandos disponíveis:",
      "term.cmd.whoami": "quem sou eu",
      "term.cmd.stack": "tecnologias",
      "term.cmd.projects": "projetos",
      "term.cmd.showcase": "modelos por segmento",
      "term.cmd.education": "formação",
      "term.cmd.english": "idiomas",
      "term.cmd.contact": "contato",
      "term.cmd.theme": "alterna o tema",
      "term.cmd.lang": "alterna o idioma",
      "term.cmd.clear": "limpa o terminal",
      "term.notFound": "comando não encontrado:",
      "term.themeDone": "tema alterado",
      "term.langDone": "language switched to English",
      "term.notSet": "(ainda não configurado)",
      "term.openProjects": "abrir a página de projetos",
      "term.openShowcase": "abrir a página de modelos",

      "profile.label": "Perfil",
      "profile.photoAlt": "Foto de Lorenzo Orsetti",
      "profile.projects": "projetos",
      "profile.models": "modelos",
      "profile.tech": "tecnologias",
      "profile.building": "construindo",

      "about.title": "Sobre mim",
      "about.p1": "Sou Lorenzo, estudante de Engenharia de Software na PUCPR e desenvolvedor web. Gosto do momento em que uma ideia vira produto: entender o que ele precisa fazer, modelar os dados, desenhar a interface e colocar no ar.",
      "about.p2": "Meus projetos vão de sistemas com banco de dados e regras de negócio, como o VotAI e o NEXO, a experiências mais visuais, como o Pulse. Começo pelo básico bem feito em HTML, CSS e JavaScript e, quando o projeto pede, uso React, TypeScript e Supabase.",
      "about.p3": "Pela Or7, também crio sites para empresas e modelos para diferentes segmentos. O que mais me interessa é onde engenharia e design se encontram: um sistema bem estruturado que também seja bom de usar.",
      "about.interests": "Interesses",
      "about.now": "No momento",
      "about.connect": "Conecte-se comigo",

      "work.label": "Trabalho",
      "work.projects.title": "Projetos",
      "work.projects.text": "Produtos, sistemas e sites que desenvolvi, com status e estudos de caso.",
      "work.showcase.title": "Modelos",
      "work.showcase.text": "Conceitos completos de sites para diferentes segmentos comerciais.",
      "work.projectsMeta": "{n} projetos · {live} no ar",
      "work.showcaseMeta": "{n} modelos · {c} segmentos",

      "projects.title": "Projetos",
      "projects.lead": "Produtos, experiências e soluções digitais que desenvolvi, dos que estão no ar aos que ficaram pelo caminho.",
      "projects.catalog": "Todos os projetos",
      "projects.catalogIntro": "Filtre pelo estado de cada projeto. Os descontinuados continuam aqui: também contam a história.",
      "projects.filterLabel": "Filtrar projetos por estado",
      "projects.showing": "{n} de {total}",
      "projects.empty": "Nenhum projeto neste filtro.",
      "projects.features": "Principais funcionalidades",
      "projects.role": "Minha participação",
      "projects.tech": "Tecnologias",
      "projects.view": "Ver projeto",
      "projects.demo": "Abrir demo",
      "projects.case": "Estudo de caso",
      "projects.more": "Ver detalhes",
      "projects.soon": "em breve",
      "projects.coverAlt": "Capa do projeto",
      "projects.coverPending": "Capa oficial pendente",
      "projects.videoLabel": "Vídeo de demonstração do projeto",
      "projects.toShowcase": "Procurando sites por segmento?",
      "projects.toShowcaseLink": "Ver os modelos",

      "filter.all": "Todos",
      "filter.live": "No ar",
      "filter.in-progress": "Em desenvolvimento",
      "filter.completed": "Concluídos",
      "filter.prototype": "Protótipos",
      "filter.discontinued": "Descontinuados",

      "status.in-progress": "Em desenvolvimento",
      "status.live": "No ar",
      "status.completed": "Concluído",
      "status.prototype": "Protótipo",
      "status.concept": "Conceito",
      "status.discontinued": "Descontinuado",

      "kind.own-product": "Produto próprio",
      "kind.authorial": "Projeto autoral",
      "kind.commercial": "Projeto comercial",

      "showcase.title": "Modelos",
      "showcase.kicker": "Direções digitais para diferentes segmentos.",
      "showcase.lead": "Conceitos autorais, completos e navegáveis, que mostram na prática o que um site pode fazer por um restaurante, uma clínica ou um hotel.",
      "showcase.note": "Todos os modelos são projetos autorais demonstrativos, com marcas fictícias.",
      "showcase.statModels": "Modelos",
      "showcase.statSegments": "Segmentos",
      "showcase.statOriginal": "Projetos autorais",
      "showcase.filterLabel": "Filtrar modelos por segmento",
      "showcase.brand": "Marca fictícia",
      "showcase.open": "Abrir demonstração",
      "showcase.want": "Quero algo nessa direção",
      "showcase.coverAlt": "Capa do modelo",
      "showcase.ctaEyebrow": "Para empresas",
      "showcase.ctaTitle": "Gostou de alguma direção?",
      "showcase.ctaText": "Posso criar uma experiência exclusiva para a sua empresa, partindo de um destes modelos ou do zero, com a identidade, o conteúdo e os objetivos do seu negócio.",
      "showcase.ctaChosen": "Direção escolhida",
      "showcase.ctaClear": "Limpar escolha",
      "showcase.ctaInstagram": "Falar com a Or7 no Instagram",
      "showcase.ctaEmail": "Enviar e-mail",
      "showcase.mailSubject": "Projeto de site",
      "showcase.mailSubjectChosen": "Projeto de site na direção",
      "showcase.toProjects": "Quer ver o que já está no ar?",
      "showcase.toProjectsLink": "Ver projetos",

      "case.label": "Estudo de caso",
      "case.close": "Fechar",
      "case.project": "O projeto",
      "case.problem": "O problema",
      "case.idea": "A ideia",
      "case.tech": "Tecnologias",
      "case.challenges": "Desafios",
      "case.solutions": "Soluções",
      "case.features": "Funcionalidades",
      "case.screenshots": "Imagens",
      "case.learned": "O que aprendi",
      "case.links": "Links",
      "case.role": "Minha participação",
      "case.process": "Processo",
      "case.design": "Design",
      "case.context": "Contexto",
      "case.open": "Abrir imagem em tamanho real",

      "stack.title": "Stack",
      "stack.intro": "O que uso de fato nos projetos, organizado por área. Sem porcentagens: o nível aparece no que está publicado.",

      "edu.title": "Formação",
      "edu.status": "Situação",
      "edu.semester": "Período",
      "edu.areas": "Áreas estudadas",
      "edu.timeline": "Linha do tempo",
      "edu.now": "agora",

      "lang.title": "Inglês",
      "lang.contexts": "Onde uso inglês",
      "lang.demo": "Todo este site foi escrito em português e em inglês, sem tradução automática. Experimente alternar:",
      "lang.switch": "Read it in English",

      "gh.title": "GitHub",
      "gh.intro": "Onde os projetos ficam versionados. A atividade do último ano e os repositórios em que estou mexendo agora.",
      "gh.repos": "Repositórios públicos",
      "gh.contributions": "Contribuições no último ano",
      "gh.lastPush": "Último push",
      "gh.pinned": "Repositórios dos projetos em destaque",
      "gh.recent": "Atualizados recentemente",
      "gh.languages": "Linguagens nos repositórios",
      "gh.visit": "Ver perfil no GitHub",
      "gh.contribTitle": "contribuições no último ano",
      "gh.less": "Menos",
      "gh.more": "Mais",
      "gh.contribOn": "contribuições em",
      "gh.contribSource": "Dados públicos do perfil no GitHub",

      "contact.title": "Vamos criar alguma coisa.",
      "contact.text": "Escolha o assunto e eu respondo pelo canal que fizer mais sentido.",
      "contact.jobTitle": "Falar sobre oportunidade",
      "contact.jobText": "Estágio, vaga ou colaboração em um time de produto ou desenvolvimento.",
      "contact.jobCta": "Conversar no LinkedIn",
      "contact.projectTitle": "Falar sobre projeto",
      "contact.projectText": "Um site, sistema ou produto digital para a sua empresa, feito pela Or7.",
      "contact.projectCta": "Falar com a Or7 no Instagram",
      "contact.other": "Outros canais",
      "contact.email": "E-mail",
      "contact.copy": "Copiar e-mail",
      "contact.copied": "Copiado!",

      "footer.credit": "Projetado e desenvolvido por Lorenzo Orsetti",
      "footer.top": "Voltar ao topo",
      "external": "(abre em nova aba)",
    },

    en: {
      "meta.home.title": "Lorenzo Orsetti | Web Developer & Software Engineering Student",
      "meta.home.description": "Lorenzo Orsetti, Software Engineering student at PUCPR and web developer. Products, systems and digital experiences.",
      "meta.projects.title": "Projects | Lorenzo Orsetti",
      "meta.projects.description": "Products, systems and websites built by Lorenzo Orsetti: Or7 Table, VotAI, NEXO, Rare Encounter, Pulse and more, with status and case studies.",
      "meta.showcase.title": "Website Showcase by Industry | Lorenzo Orsetti",
      "meta.showcase.description": "29 complete website concepts for restaurants, clinics, gyms, hotels, real estate and other industries. Fictional brands, real demos.",

      "skip": "Skip to content",
      "nav.label": "Main navigation",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.showcase": "Showcase",
      "nav.stack": "Stack",
      "nav.education": "Education",
      "nav.english": "English",
      "nav.github": "GitHub",
      "nav.contact": "Contact",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.home": "Home",
      "crumb.label": "You are here",
      "lang.label": "Language",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",
      "progress.label": "Reading progress",

      "hero.hello": "Hello, I'm",
      "hero.role1": "Software Engineering Student",
      "hero.role2": "& Web Developer",
      "hero.lead": "I turn ideas into products that work: from the data model to the interface, all the way to launch.",
      "hero.ctaProjects": "View projects",
      "hero.ctaShowcase": "Showcase",
      "hero.status": "Available for opportunities",
      "hero.editor": "Code editor showing Lorenzo's profile",
      "hero.marquee": "Technologies I use",
      "hero.social": "Social",

      "term.tab": "terminal",
      "term.input": "Type a command",
      "term.hint": "type <b>help</b> to list commands",
      "term.help": "available commands:",
      "term.cmd.whoami": "who am I",
      "term.cmd.stack": "technologies",
      "term.cmd.projects": "projects",
      "term.cmd.showcase": "website models by industry",
      "term.cmd.education": "education",
      "term.cmd.english": "languages",
      "term.cmd.contact": "contact",
      "term.cmd.theme": "toggle theme",
      "term.cmd.lang": "toggle language",
      "term.cmd.clear": "clear the terminal",
      "term.notFound": "command not found:",
      "term.themeDone": "theme switched",
      "term.langDone": "idioma alterado para português",
      "term.notSet": "(not configured yet)",
      "term.openProjects": "open the projects page",
      "term.openShowcase": "open the showcase page",

      "profile.label": "Profile",
      "profile.photoAlt": "Photo of Lorenzo Orsetti",
      "profile.projects": "projects",
      "profile.models": "models",
      "profile.tech": "technologies",
      "profile.building": "building",

      "about.title": "About Me",
      "about.p1": "I'm Lorenzo, a Software Engineering student at PUCPR and a web developer. My favorite part is when an idea becomes a product: figuring out what it needs to do, modeling the data, designing the interface and shipping it.",
      "about.p2": "My projects range from systems with databases and business rules, like VotAI and NEXO, to more visual experiences, like Pulse. I start from solid HTML, CSS and JavaScript and, when a project calls for it, reach for React, TypeScript and Supabase.",
      "about.p3": "Through Or7, I also build websites for businesses and models for different industries. What interests me most is where engineering meets design: a well-structured system that is also good to use.",
      "about.interests": "Interests",
      "about.now": "Right now",
      "about.connect": "Connect with me",

      "work.label": "Work",
      "work.projects.title": "Projects",
      "work.projects.text": "Products, systems and websites I've built, with status and case studies.",
      "work.showcase.title": "Showcase",
      "work.showcase.text": "Complete website concepts for different industries.",
      "work.projectsMeta": "{n} projects · {live} live",
      "work.showcaseMeta": "{n} models · {c} industries",

      "projects.title": "Projects",
      "projects.lead": "Products, experiences and digital solutions I've built, from the ones that are live to the ones that stayed behind.",
      "projects.catalog": "All projects",
      "projects.catalogIntro": "Filter by each project's status. Discontinued work stays here too: it's part of the story.",
      "projects.filterLabel": "Filter projects by status",
      "projects.showing": "{n} of {total}",
      "projects.empty": "No projects in this filter.",
      "projects.features": "Key features",
      "projects.role": "My role",
      "projects.tech": "Technologies",
      "projects.view": "View project",
      "projects.demo": "Open demo",
      "projects.case": "Case study",
      "projects.more": "See details",
      "projects.soon": "soon",
      "projects.coverAlt": "Project cover",
      "projects.coverPending": "Official cover pending",
      "projects.videoLabel": "Project demo video",
      "projects.toShowcase": "Looking for websites by industry?",
      "projects.toShowcaseLink": "See the showcase",

      "filter.all": "All",
      "filter.live": "Live",
      "filter.in-progress": "In development",
      "filter.completed": "Completed",
      "filter.prototype": "Prototypes",
      "filter.discontinued": "Discontinued",

      "status.in-progress": "In development",
      "status.live": "Live",
      "status.completed": "Completed",
      "status.prototype": "Prototype",
      "status.concept": "Concept",
      "status.discontinued": "Discontinued",

      "kind.own-product": "Own product",
      "kind.authorial": "Original project",
      "kind.commercial": "Commercial project",

      "showcase.title": "Showcase",
      "showcase.kicker": "Digital directions for every kind of business.",
      "showcase.lead": "Original, fully navigable concepts that show what a website can actually do for a restaurant, a clinic or a hotel.",
      "showcase.note": "Every model is an original demo project with a fictional brand.",
      "showcase.statModels": "Models",
      "showcase.statSegments": "Industries",
      "showcase.statOriginal": "Original work",
      "showcase.filterLabel": "Filter models by industry",
      "showcase.brand": "Fictional brand",
      "showcase.open": "Open demo",
      "showcase.want": "I want something like this",
      "showcase.coverAlt": "Model cover",
      "showcase.ctaEyebrow": "For businesses",
      "showcase.ctaTitle": "Like one of these directions?",
      "showcase.ctaText": "I can build an exclusive experience for your company, starting from one of these models or from scratch, shaped around your identity, content and goals.",
      "showcase.ctaChosen": "Chosen direction",
      "showcase.ctaClear": "Clear choice",
      "showcase.ctaInstagram": "Talk to Or7 on Instagram",
      "showcase.ctaEmail": "Send an email",
      "showcase.mailSubject": "Website project",
      "showcase.mailSubjectChosen": "Website project in the direction of",
      "showcase.toProjects": "Want to see what's already live?",
      "showcase.toProjectsLink": "View projects",

      "case.label": "Case study",
      "case.close": "Close",
      "case.project": "The project",
      "case.problem": "The problem",
      "case.idea": "The idea",
      "case.tech": "Technologies",
      "case.challenges": "Challenges",
      "case.solutions": "Solutions",
      "case.features": "Features",
      "case.screenshots": "Images",
      "case.learned": "What I learned",
      "case.links": "Links",
      "case.role": "My role",
      "case.process": "Process",
      "case.design": "Design",
      "case.context": "Context",
      "case.open": "Open full-size image",

      "stack.title": "Stack",
      "stack.intro": "What I actually use in my projects, grouped by area. No percentages: the level shows in what's published.",

      "edu.title": "Education",
      "edu.status": "Status",
      "edu.semester": "Semester",
      "edu.areas": "Areas of study",
      "edu.timeline": "Timeline",
      "edu.now": "now",

      "lang.title": "English",
      "lang.contexts": "Where I use English",
      "lang.demo": "This entire website was written in both Portuguese and English, with no machine translation. Try switching:",
      "lang.switch": "Ler em português",

      "gh.title": "GitHub",
      "gh.intro": "Where my projects are versioned. Last year's activity and the repositories I'm working on right now.",
      "gh.repos": "Public repositories",
      "gh.contributions": "Contributions in the last year",
      "gh.lastPush": "Last push",
      "gh.pinned": "Repositories behind the highlighted projects",
      "gh.recent": "Recently updated",
      "gh.languages": "Languages across repositories",
      "gh.visit": "View GitHub profile",
      "gh.contribTitle": "contributions in the last year",
      "gh.less": "Less",
      "gh.more": "More",
      "gh.contribOn": "contributions on",
      "gh.contribSource": "Public data from the GitHub profile",

      "contact.title": "Let's build something.",
      "contact.text": "Pick a topic and I'll reply through whichever channel makes the most sense.",
      "contact.jobTitle": "Talk about an opportunity",
      "contact.jobText": "An internship, a role or a collaboration in a product or development team.",
      "contact.jobCta": "Message me on LinkedIn",
      "contact.projectTitle": "Talk about a project",
      "contact.projectText": "A website, system or digital product for your company, built by Or7.",
      "contact.projectCta": "Talk to Or7 on Instagram",
      "contact.other": "Other channels",
      "contact.email": "Email",
      "contact.copy": "Copy email",
      "contact.copied": "Copied!",

      "footer.credit": "Designed & Developed by Lorenzo Orsetti",
      "footer.top": "Back to top",
      "external": "(opens in a new tab)",
    },
  };

  function detect() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(saved)) return saved;
    } catch (_) { /* storage indisponível */ }
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("pt") ? "pt" : "en";
  }

  let current = detect();
  const page = () => document.documentElement.dataset.page || "home";

  /** Texto da interface pela chave. Aceita {variáveis}. */
  function t(key, vars) {
    let s = (STRINGS[current] && STRINGS[current][key]) ?? STRINGS.en[key] ?? key;
    if (vars) s = s.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));
    return s;
  }

  /** Escolhe o idioma atual em valores { pt, en } (ou devolve strings simples). */
  function pick(value) {
    if (value == null) return "";
    if (typeof value === "string" || Array.isArray(value)) return value;
    return value[current] ?? value.en ?? value.pt ?? "";
  }

  function apply() {
    const html = document.documentElement;
    html.lang = current === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    // SEO / compartilhamento da página atual
    const title = t(`meta.${page()}.title`);
    const desc = t(`meta.${page()}.description`);
    document.title = title;
    const setMeta = (sel, val) => { const m = document.querySelector(sel); if (m) m.setAttribute("content", val); };
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:locale"]', current === "pt" ? "pt_BR" : "en_US");
    setMeta('meta[property="og:locale:alternate"]', current === "pt" ? "en_US" : "pt_BR");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', desc);

    document.querySelectorAll("[data-lang-option]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.langOption === current));
    });
  }

  function set(lang) {
    if (!SUPPORTED.includes(lang) || lang === current) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function toggle() { set(current === "pt" ? "en" : "pt"); }

  return {
    t, pick, set, toggle, apply,
    get lang() { return current; },
    get page() { return page(); },
  };
})();
