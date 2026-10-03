/* =============================================================
   language.js — textos da interface (PT / EN) e troca de idioma
   -------------------------------------------------------------
   • Elementos com  data-i18n="chave"        recebem o texto.
   • Elementos com  data-i18n-attr="attr:chave;attr2:chave2"
     recebem atributos traduzidos (aria-label, title...).
   • Conteúdo de projetos/tecnologias fica em data.js.
   • A escolha é salva em localStorage ("lo-lang").
   ============================================================= */

const I18N = (() => {
  const STORAGE_KEY = "lo-lang";
  const SUPPORTED = ["pt", "en"];

  const STRINGS = {
    pt: {
      "meta.title": "Lorenzo Orsetti | Desenvolvedor Web & Estudante de Engenharia de Software",
      "meta.description": "Portfólio de Lorenzo Orsetti, estudante de Engenharia de Software e desenvolvedor web focado na criação de aplicações web modernas.",

      "skip": "Pular para o conteúdo",
      "nav.label": "Navegação principal",
      "nav.about": "Sobre",
      "nav.projects": "Projetos",
      "nav.stack": "Stack",
      "nav.education": "Formação",
      "nav.english": "Inglês",
      "nav.github": "GitHub",
      "nav.contact": "Contato",
      "nav.open": "Abrir menu",
      "nav.close": "Fechar menu",
      "lang.label": "Idioma",
      "theme.toLight": "Ativar tema claro",
      "theme.toDark": "Ativar tema escuro",

      "hero.hello": "Olá, eu sou",
      "hero.role1": "Estudante de Engenharia de Software",
      "hero.role2": "& Desenvolvedor Web",
      "hero.lead": "Transformo ideias em experiências digitais funcionais, desenvolvendo aplicações web enquanto evoluo meus conhecimentos em Engenharia de Software.",
      "hero.ctaProjects": "Ver Projetos",
      "hero.status": "Aberto a oportunidades",
      "hero.editor": "Editor de código com o perfil de Lorenzo",
      "hero.marquee": "Tecnologias que utilizo",

      "term.tab": "terminal",
      "term.input": "Digite um comando",
      "term.hint": "digite <b>help</b> para ver os comandos",
      "term.help": "comandos disponíveis:",
      "term.cmd.whoami": "quem sou eu",
      "term.cmd.stack": "tecnologias",
      "term.cmd.projects": "projetos",
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

      "profile.label": "Perfil",
      "profile.photoAlt": "Foto de Lorenzo Orsetti",
      "profile.location": "Localização",
      "profile.degree": "Graduação",
      "profile.languages": "Idiomas",
      "profile.featured": "destaque",
      "profile.concepts": "conceitos",
      "profile.tech": "tecnologias",
      "profile.building": "construindo",

      "about.title": "Sobre mim",
      "about.p1": "Sou estudante de Engenharia de Software e desenvolvedor web. Gosto de pegar uma ideia e transformá-la em uma aplicação funcional, bem estruturada e agradável de usar.",
      "about.p2": "Desenvolvo projetos próprios e acadêmicos com HTML, CSS, JavaScript, PHP, Python e MySQL, aplicando na prática conceitos de programação, banco de dados, modelagem de software e experiência do usuário.",
      "about.p3": "Cada projeto é uma forma de aprender uma tecnologia nova, resolver um problema real e evoluir como engenheiro de software — do levantamento de requisitos ao código publicado.",
      "about.interests": "Interesses",
      "about.now": "No momento",
      "about.connect": "Conecte-se comigo",

      "projects.title": "Projetos em Destaque",
      "projects.intro": "Projetos em que atuei da ideia ao código. Em cada um, você encontra o que foi feito, como foi feito e o que aprendi no processo.",
      "projects.label": "Projeto",
      "projects.features": "Principais funcionalidades",
      "projects.role": "Minha participação",
      "projects.tech": "Tecnologias",
      "projects.view": "Acessar projeto",
      "projects.demo": "Ver demo",
      "projects.case": "Ver detalhes",
      "projects.more": "Ver mais",
      "projects.soon": "em breve",
      "projects.coverAlt": "Capa do projeto",
      "projects.videoLabel": "Vídeo de demonstração do projeto",

      "status.in-progress": "Em desenvolvimento",
      "status.live": "No ar",
      "status.completed": "Concluído",
      "status.prototype": "Protótipo",
      "status.concept": "Conceito",
      "status.discontinued": "Descontinuado",

      "type.website-concept": "Website Concept",
      "type.concept-project": "Concept Project",
      "type.prototype": "Prototype",
      "type.website-demo": "Website Demo",

      "concepts.title": "Conceitos de Websites",
      "concepts.intro": "Demos de sites que desenvolvi por iniciativa própria para estabelecimentos reais de Curitiba, como propostas a serem apresentadas aos donos. São protótipos independentes — não trabalhos contratados.",

      "case.label": "Estudo de caso",
      "case.close": "Fechar",
      "case.project": "O projeto",
      "case.problem": "O problema",
      "case.idea": "A ideia",
      "case.tech": "Tecnologias",
      "case.challenges": "Desafios",
      "case.solutions": "Soluções",
      "case.features": "Funcionalidades",
      "case.screenshots": "Screenshots",
      "case.learned": "O que aprendi",
      "case.links": "Links",
      "case.role": "Minha participação",
      "case.process": "Processo",
      "case.design": "Design",
      "case.context": "Contexto",
      "case.open": "Abrir imagem em tamanho real",

      "stack.title": "Tech Stack",
      "stack.intro": "Tecnologias e práticas que utilizo nos meus projetos, organizadas por área.",

      "edu.title": "Formação",
      "edu.status": "Status",
      "edu.semester": "Período",
      "edu.areas": "Áreas estudadas",
      "edu.timeline": "Linha do tempo",
      "edu.now": "agora",

      "lang.title": "Idiomas",
      "lang.contexts": "Onde uso inglês no dia a dia",
      "lang.demo": "Todo este site foi escrito em português e em inglês — sem tradução automática. Experimente alternar o idioma:",
      "lang.switch": "Read it in English",

      "gh.title": "Atividade no GitHub",
      "gh.intro": "Onde meus projetos vivem, evoluem e ficam versionados.",
      "gh.projects": "Projetos",
      "gh.repos": "Repositórios",
      "gh.tech": "Tecnologias",
      "gh.contributions": "Contribuições",
      "gh.commits": "Commits",
      "gh.pinned": "Projetos fixados",
      "gh.recent": "Atualizados recentemente",
      "gh.languages": "Linguagens nos repositórios",
      "gh.visit": "Visite meu GitHub",
      "gh.unavailable": "indisponível",
      "gh.contribTitle": "contribuições no último ano",
      "gh.less": "Menos",
      "gh.more": "Mais",
      "gh.contribOn": "contribuições em",
      "gh.contribSource": "Dados públicos do perfil no GitHub",

      "contact.title": "Vamos criar alguma coisa.",
      "contact.text": "Estou sempre interessado em novos projetos, oportunidades de estágio e experiências que me ajudem a evoluir como desenvolvedor. Se quiser conversar, é só chamar.",
      "contact.linkedin": "Conecte-se comigo no LinkedIn",
      "contact.email": "E-mail",
      "contact.copy": "Copiar e-mail",
      "contact.copied": "Copiado!",

      "footer.credit": "Projetado e desenvolvido por Lorenzo Orsetti",
      "footer.top": "Voltar ao topo",
      "external": "(abre em nova aba)",
    },

    en: {
      "meta.title": "Lorenzo Orsetti | Web Developer & Software Engineering Student",
      "meta.description": "Portfolio of Lorenzo Orsetti, Software Engineering student and web developer focused on building modern web applications.",

      "skip": "Skip to content",
      "nav.label": "Main navigation",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.stack": "Stack",
      "nav.education": "Education",
      "nav.english": "English",
      "nav.github": "GitHub",
      "nav.contact": "Contact",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.label": "Language",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",

      "hero.hello": "Hello, I'm",
      "hero.role1": "Software Engineering Student",
      "hero.role2": "& Web Developer",
      "hero.lead": "I turn ideas into functional digital experiences while developing web applications and expanding my knowledge in Software Engineering.",
      "hero.ctaProjects": "View Projects",
      "hero.status": "Available for opportunities",
      "hero.editor": "Code editor showing Lorenzo's profile",
      "hero.marquee": "Technologies I use",

      "term.tab": "terminal",
      "term.input": "Type a command",
      "term.hint": "type <b>help</b> to list commands",
      "term.help": "available commands:",
      "term.cmd.whoami": "who am I",
      "term.cmd.stack": "technologies",
      "term.cmd.projects": "projects",
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

      "profile.label": "Profile",
      "profile.photoAlt": "Photo of Lorenzo Orsetti",
      "profile.location": "Location",
      "profile.degree": "Degree",
      "profile.languages": "Languages",
      "profile.featured": "featured",
      "profile.concepts": "concepts",
      "profile.tech": "technologies",
      "profile.building": "building",

      "about.title": "About Me",
      "about.p1": "I'm a Software Engineering student and web developer. I enjoy taking an idea and turning it into an application that works well, is well structured and feels good to use.",
      "about.p2": "I build personal and academic projects with HTML, CSS, JavaScript, PHP, Python and MySQL, putting programming, databases, software modeling and user experience concepts into practice.",
      "about.p3": "Every project is a way to learn a new technology, solve a real problem and grow as a software engineer — from gathering requirements to shipping the code.",
      "about.interests": "Interests",
      "about.now": "Right now",
      "about.connect": "Connect with me",

      "projects.title": "Featured Projects",
      "projects.intro": "Projects I took from idea to code. For each one you'll find what was built, how it was built and what I learned along the way.",
      "projects.label": "Project",
      "projects.features": "Key features",
      "projects.role": "My role",
      "projects.tech": "Technologies",
      "projects.view": "View Project",
      "projects.demo": "View Demo",
      "projects.case": "View Case Study",
      "projects.more": "See more",
      "projects.soon": "soon",
      "projects.coverAlt": "Project cover",
      "projects.videoLabel": "Project demo video",

      "status.in-progress": "In development",
      "status.live": "Live",
      "status.completed": "Completed",
      "status.prototype": "Prototype",
      "status.concept": "Concept",
      "status.discontinued": "Discontinued",

      "type.website-concept": "Website Concept",
      "type.concept-project": "Concept Project",
      "type.prototype": "Prototype",
      "type.website-demo": "Website Demo",

      "concepts.title": "Web Design & Development Concepts",
      "concepts.intro": "Website demos I built on my own initiative for real businesses in Curitiba, as proposals to be pitched to their owners. They are independent prototypes — not commissioned work.",

      "case.label": "Case study",
      "case.close": "Close",
      "case.project": "The project",
      "case.problem": "The problem",
      "case.idea": "The idea",
      "case.tech": "Technologies",
      "case.challenges": "Challenges",
      "case.solutions": "Solutions",
      "case.features": "Features",
      "case.screenshots": "Screenshots",
      "case.learned": "What I learned",
      "case.links": "Links",
      "case.role": "My role",
      "case.process": "Process",
      "case.design": "Design",
      "case.context": "Context",
      "case.open": "Open full-size image",

      "stack.title": "Tech Stack",
      "stack.intro": "Technologies and practices I use across my projects, grouped by area.",

      "edu.title": "Education",
      "edu.status": "Status",
      "edu.semester": "Semester",
      "edu.areas": "Areas of study",
      "edu.timeline": "Timeline",
      "edu.now": "now",

      "lang.title": "Languages",
      "lang.contexts": "Where I use English every day",
      "lang.demo": "This entire website was written in both Portuguese and English — no machine translation. Try switching:",
      "lang.switch": "Ler em português",

      "gh.title": "GitHub Activity",
      "gh.intro": "Where my projects live, evolve and stay version-controlled.",
      "gh.projects": "Projects",
      "gh.repos": "Repositories",
      "gh.tech": "Technologies",
      "gh.contributions": "Contributions",
      "gh.commits": "Commits",
      "gh.pinned": "Pinned projects",
      "gh.recent": "Recently updated",
      "gh.languages": "Languages across repositories",
      "gh.visit": "Visit my GitHub",
      "gh.unavailable": "unavailable",
      "gh.contribTitle": "contributions in the last year",
      "gh.less": "Less",
      "gh.more": "More",
      "gh.contribOn": "contributions on",
      "gh.contribSource": "Public data from the GitHub profile",

      "contact.title": "Let's build something.",
      "contact.text": "I'm always interested in new projects, internship opportunities and experiences that help me grow as a developer. If you'd like to talk, just reach out.",
      "contact.linkedin": "Connect on LinkedIn",
      "contact.email": "Email",
      "contact.copy": "Copy Email",
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

  /** Texto da interface pela chave. */
  function t(key) {
    return (STRINGS[current] && STRINGS[current][key]) ?? STRINGS.en[key] ?? key;
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

    // SEO / compartilhamento
    document.title = t("meta.title");
    const setMeta = (sel, val) => { const m = document.querySelector(sel); if (m) m.setAttribute("content", val); };
    setMeta('meta[name="description"]', t("meta.description"));
    setMeta('meta[property="og:title"]', t("meta.title"));
    setMeta('meta[property="og:description"]', t("meta.description"));
    setMeta('meta[property="og:locale"]', current === "pt" ? "pt_BR" : "en_US");
    setMeta('meta[name="twitter:title"]', t("meta.title"));
    setMeta('meta[name="twitter:description"]', t("meta.description"));

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
  };
})();
