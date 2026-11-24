/* =============================================================
   data.js — CONTEÚDO CENTRAL DO PORTFÓLIO
   -------------------------------------------------------------
   Quase tudo que aparece no site vem deste arquivo.
   Para atualizar informações, links, tecnologias ou projetos,
   edite apenas aqui — não é preciso mexer no HTML.

   Textos bilíngues usam o formato:  { pt: "...", en: "..." }
   Campos vazios ("") são tratados como "ainda não configurado":
   o site oculta o item ou mostra um estado neutro.
   ============================================================= */

/* -------------------------------------------------------------
   1. INFORMAÇÕES PESSOAIS E LINKS
   ------------------------------------------------------------- */
const PROFILE = {
  name: "Lorenzo Orsetti",
  initials: "LO",

  role: {
    pt: "Estudante de Engenharia de Software & Desenvolvedor Web",
    en: "Software Engineering Student & Web Developer",
  },

  location: { pt: "Brasil", en: "Brazil" },

  // Foto de perfil. Ex.: "assets/images/profile.webp"
  // Vazio ou arquivo inexistente → exibe as iniciais "LO".
  photo: "assets/images/profile.webp",

  // Mostra o indicador discreto "Aberto a oportunidades".
  openToOpportunities: true,

  // Seu e-mail. Vazio → o e-mail e o botão "Copiar e-mail" ficam ocultos.
  email: "lmorsetti@gmail.com",

  // Usuário do GitHub (apenas o nome, sem URL). Ex.: "lorenzoorsetti"
  // Com ele preenchido, o site monta os links e busca estatísticas
  // reais pela API pública do GitHub.
  githubUsername: "lorenzo-or7",

  linkedin: "https://www.linkedin.com/in/lorenzo-orsetti-031906349/",

  // Instagram (vazio = oculto)
  instagram: "https://www.instagram.com/or7.dev/",
  twitter: "https://x.com/lorenzo__or7",
  discord: "https://discord.com/users/706965087411372032",
  spotify: "https://open.spotify.com/user/lmorsetti",

  // Áreas de interesse (aparecem no bloco de código do topo e no "Sobre").
  interests: [
    { pt: "Desenvolvimento Web", en: "Web Development" },
    { pt: "Engenharia de Software", en: "Software Engineering" },
    { pt: "Desenvolvimento de Interfaces", en: "UI Development" },
  ],

  // O que você está fazendo agora (bloco "No momento" do Sobre).
  now: [
    { pt: "Cursando Engenharia de Software na PUCPR", en: "Studying Software Engineering at PUCPR" },
    { pt: "Evoluindo o Or7 Table e o VotAI, os dois já no ar", en: "Improving Or7 Table and VotAI, both already live" },
    { pt: "Criando modelos de sites para segmentos comerciais na Or7", en: "Building website models for different industries at Or7" },
  ],
};

/* Estatísticas que a API pública do GitHub não fornece.
   Deixe null para exibir "--". Preencha apenas com números reais. */
const GITHUB_MANUAL_STATS = {
  contributions: null, // null = busca automática (último ano); um número substitui
  commits: null,
};

/* Gráfico de contribuições do último ano (dados reais do seu perfil,
   via github-contributions-api.jogruber.de). false = oculta o gráfico. */
const GITHUB_CONTRIBUTION_GRAPH = true;

/* -------------------------------------------------------------
   2. TECNOLOGIAS
   -------------------------------------------------------------
   icon:  caminho do ícone/logo. Ex.: "assets/icons/html5.svg"
          Vazio → exibe uma sigla (short) no lugar do ícone.
   color: cor usada no pontinho das badges (estilo GitHub).
   ------------------------------------------------------------- */
const TECHNOLOGIES = {
  HTML:       { name: "HTML5",      short: "H5",  icon: "assets/icons/html5.webp", color: "#E34C26", tip: { pt: "Estrutura semântica e acessível das páginas", en: "Semantic, accessible page structure" } },
  CSS:        { name: "CSS3",       short: "C3",  icon: "assets/icons/css3.webp", color: "#663399", tip: { pt: "Layouts responsivos, temas e animações", en: "Responsive layouts, theming and animation" } },
  JavaScript: { name: "JavaScript", short: "JS",  icon: "assets/icons/javascript.webp", color: "#E2C400", tip: { pt: "Interatividade e manipulação do DOM", en: "Interactivity and DOM manipulation" } },
  PHP:        { name: "PHP",        short: "PHP", icon: "assets/icons/php.webp", color: "#777BB3", tip: { pt: "Lógica de servidor e integração com banco de dados", en: "Server-side logic and database integration" } },
  MySQL:      { name: "MySQL",      short: "SQL", icon: "assets/icons/mysql.webp", color: "#00758F", tip: { pt: "Modelagem e consultas em banco relacional", en: "Relational modeling and queries" } },
  Git:        { name: "Git",        short: "Git", icon: "assets/icons/git.webp", color: "#F05032", tip: { pt: "Controle de versão", en: "Version control" } },
  GitHub:     { name: "GitHub",     short: "GH",  icon: "assets/icons/github.webp", color: "#8B949E", tip: { pt: "Repositórios e publicação de projetos", en: "Repositories and project hosting" } },
  Python:     { name: "Python",     short: "Py",  icon: "assets/icons/python.webp", color: "#3572A5", tip: { pt: "Linguagem de programação de uso geral", en: "General-purpose programming language" } },
  Figma:      { name: "Figma",      short: "Fg",  icon: "assets/icons/figma.webp", color: "#A259FF", tip: { pt: "Prototipação e design de interfaces", en: "Interface design and prototyping" } },
  VSCode:     { name: "VS Code",    short: "VS",  icon: "assets/icons/vscode.webp", color: "#23A9F2", tip: { pt: "Editor de código do dia a dia", en: "My everyday code editor" } },
  ChatGPT:    { name: "ChatGPT",    short: "GPT", icon: "assets/icons/chatgpt.webp", color: "#10A37F", tip: { pt: "Pesquisa, ideias e revisão de código", en: "Research, ideas and code review" } },
  Claude:     { name: "Claude",     short: "Cl",  icon: "assets/icons/claude.webp", color: "#D97757", tip: { pt: "Desenvolvimento, revisão de código e textos", en: "Development, code review and writing" } },
  Gemini:     { name: "Gemini",     short: "Gm",  icon: "assets/icons/gemini.webp", color: "#4E86F7", tip: { pt: "Pesquisa e apoio na solução de problemas", en: "Research and problem-solving support" } },
  Copilot:    { name: "Copilot",    short: "Co",  icon: "assets/icons/copilot.webp", color: "#8957E5", tip: { pt: "Sugestões de código dentro do editor", en: "In-editor code suggestions" } },
  Lovable:    { name: "Lovable",    short: "Lv",  icon: "assets/icons/lovable.webp", color: "#FF5A8A", tip: { pt: "Prototipação rápida de interfaces", en: "Rapid interface prototyping" } },
  Antigravity:{ name: "Antigravity", short: "Ag", icon: "assets/icons/antigravity.webp", color: "#4285F4", tip: { pt: "Ambiente de desenvolvimento com agentes de IA", en: "Agent-powered development environment" } },
  Astah:      { name: "Astah",      short: "As",  icon: "assets/icons/astah.webp", color: "#2F6DB5", tip: { pt: "Criação de diagramas e modelagem de sistemas", en: "Diagramming and system modeling" } },
  DBModeling: { name: { pt: "Modelagem de Banco de Dados", en: "Database Modeling" }, short: "ER", icon: "assets/icons/db-modeling.webp", color: "#00758F", tip: { pt: "Modelos conceitual, lógico e físico", en: "Conceptual, logical and physical models" } },
  Requirements: { name: { pt: "Requisitos", en: "Requirements" }, short: "RQ", icon: "assets/icons/requirements.webp", color: "#5A8F6A", tip: { pt: "Levantamento e especificação de requisitos", en: "Requirements elicitation and specification" } },
  SWModeling: { name: { pt: "Modelagem de Software", en: "Software Modeling" }, short: "SM", icon: "assets/icons/software-modeling.webp", color: "#9A6BD1", tip: { pt: "Representação da estrutura e do comportamento de sistemas", en: "Describing system structure and behavior" } },
  TypeScript: { name: "TypeScript", short: "TS", icon: "assets/icons/typescript.webp", color: "#3178C6", tip: { pt: "JavaScript com tipagem estática", en: "JavaScript with static types" } },
  React:      { name: "React",      short: "Re", icon: "assets/icons/react.webp", color: "#61DAFB", tip: { pt: "Interfaces em componentes", en: "Component-based interfaces" } },
  NextJS:     { name: "Next.js",    short: "Nx", icon: "assets/icons/nextjs.webp", color: "#888888", tip: { pt: "Framework React com renderização no servidor", en: "React framework with server rendering" } },
  Tailwind:   { name: "Tailwind CSS", short: "Tw", icon: "assets/icons/tailwind.webp", color: "#38BDF8", tip: { pt: "Estilização com classes utilitárias", en: "Utility-first styling" } },
  Supabase:   { name: "Supabase",   short: "Sb", icon: "assets/icons/supabase.webp", color: "#3ECF8E", tip: { pt: "PostgreSQL, autenticação e armazenamento", en: "PostgreSQL, auth and storage" } },
  Vite:       { name: "Vite",       short: "Vi", icon: "assets/icons/vite.webp", color: "#9468FF", tip: { pt: "Build e servidor de desenvolvimento", en: "Build tool and dev server" } },
  Motion:     { name: "Motion",     short: "Mo", icon: "assets/icons/motion.webp", color: "#F5D547", tip: { pt: "Animações e transições em React", en: "Animation and transitions in React" } },
  GSAP:       { name: "GSAP",       short: "GS", icon: "assets/icons/gsap.webp", color: "#88CE02", tip: { pt: "Animações guiadas por rolagem e timelines", en: "Scroll-driven animation and timelines" } },
  ThreeJS:    { name: "Three.js",   short: "3D", icon: "assets/icons/threejs.webp", color: "#B4B4C8", tip: { pt: "Cenas 3D com WebGL no navegador", en: "WebGL 3D scenes in the browser" } },
};

/* Categorias da seção "Stack" (usam as chaves de TECHNOLOGIES).
   Sem porcentagens: cada grupo mostra o que uso de fato nos projetos. */
const STACK = [
  { label: { pt: "Front-end", en: "Front-end" }, file: "frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJS", "Tailwind"] },
  { label: { pt: "Back-end", en: "Back-end" }, file: "backend", items: ["PHP", "Python"] },
  { label: { pt: "Banco / Serviços", en: "Database / Services" }, file: "data", items: ["MySQL", "Supabase"] },
  { label: { pt: "UI / Motion", en: "UI / Motion" }, file: "ui", items: ["Figma", "Motion", "GSAP", "ThreeJS"] },
  { label: { pt: "Ferramentas", en: "Tools" }, file: "tools", items: ["VSCode", "Git", "GitHub", "Vite", "Astah"] },
  { label: { pt: "Engenharia de Software", en: "Software Engineering" }, file: "engineering", items: ["DBModeling", "Requirements", "SWModeling"] },
  { label: { pt: "Inteligência Artificial", en: "AI tools" }, file: "ai", items: ["ChatGPT", "Claude", "Gemini", "Copilot", "Lovable", "Antigravity"] },
];

/* Faixa de tecnologias em movimento. */
const MARQUEE = ["HTML", "CSS", "JavaScript", "PHP", "Python", "MySQL", "Git", "GitHub"];

/* -------------------------------------------------------------
   3. PROJETOS
   -------------------------------------------------------------
   Página /projects/. Para adicionar um projeto, copie um bloco { ... } e edite.

   status:    "live" (No ar) | "in-progress" (Em desenvolvimento) |
              "completed" (Concluído) | "prototype" (Protótipo) |
              "discontinued" (Descontinuado)
   summary:   descrição curta do card (1–3 linhas). Obrigatória.
   kind:      opcional — "own-product" (Produto próprio) | "authorial"
              (Projeto autoral) | "commercial" (Projeto comercial)
   featured:  opcional — 1 a 5 define a ordem do bloco de destaque.
   cover:     capa OFICIAL. Ex.: "assets/covers/projects/votai.webp"
              (+ versão "-800.webp" para telas menores). Sem capa →
              estado "capa oficial pendente" (nunca uma imagem genérica).
   links:     demo / github. Vazio → botão aparece como "Em breve".
   caseStudy: conteúdo do estudo de caso. Seções vazias são ocultadas.
   ------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "or7-table",
    name: "Or7 Table",
    summary: {
      pt: "Plataforma de cardápios digitais em que cada restaurante tem identidade própria. O cliente abre pelo QR Code, sem aplicativo, e o dono atualiza produtos e preços pelo painel.",
      en: "A digital menu platform where every restaurant gets its own identity. Guests open it with a QR code, no app needed, and owners update products and prices from their dashboard.",
    },
    kind: "own-product",
    featured: 1,
    tagline: { pt: "Cardápios digitais exclusivos por QR Code", en: "Custom digital menus via QR code" },
    status: "live",
    context: { pt: "Produto próprio da Or7 · no ar em or7table.com.br", en: "Or7's own product · live at or7table.com.br" },
    description: {
      pt: "SaaS de cardápios digitais da Or7. Cada restaurante ganha um cardápio com identidade própria, acessado por QR Code, e um painel para gerenciar produtos, categorias e preços. As mudanças aparecem na hora para quem está na mesa.",
      en: "Or7's digital menu SaaS. Each restaurant gets a menu with its own identity, opened by QR code, and a dashboard to manage products, categories and prices. Changes show up instantly for whoever is at the table.",
    },
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "Motion", "Supabase"],
    features: {
      pt: [
        "Cardápio com identidade visual própria para cada restaurante",
        "Acesso por QR Code, sem instalar aplicativo",
        "Gestão de produtos, categorias e preços",
        "Painel do restaurante e área de administração central",
        "Autenticação com Supabase e MFA por TOTP nas áreas administrativas",
        "Dados de cada restaurante isolados com Row Level Security",
        "Experiências de demonstração, como Casa Maré e La Brasa",
      ],
      en: [
        "A menu with its own visual identity for each restaurant",
        "QR code access, no app to install",
        "Product, category and price management",
        "Restaurant dashboard and a central admin area",
        "Supabase authentication with TOTP MFA on admin areas",
        "Each restaurant's data isolated with Row Level Security",
        "Demo experiences such as Casa Maré and La Brasa",
      ],
    },
    role: {
      pt: ["Idealização do produto", "Direção visual", "UX/UI", "Front-end", "Banco e segurança (Supabase)", "Publicação"],
      en: ["Product concept", "Visual direction", "UX/UI", "Front-end", "Database and security (Supabase)", "Publishing"],
    },
    cover: "assets/covers/projects/or7-table.webp",
    video: "",
    links: { demo: "https://or7table.com.br/", github: "https://github.com/lorenzo-or7/or7-table" },
    caseStudy: {
      problem: {
        pt: "Cardápio em PDF ou em plataforma genérica deixa todo restaurante com a mesma cara, e cada mudança de preço ou de produto vira retrabalho.",
        en: "A PDF menu or a generic platform makes every restaurant look the same, and each price or product change turns into rework.",
      },
      idea: {
        pt: "Um cardápio digital que parece parte da marca do restaurante, aberto por QR Code, com um painel simples para o dono atualizar tudo sozinho.",
        en: "A digital menu that feels like part of the restaurant's brand, opened by QR code, with a simple dashboard so owners can update everything themselves.",
      },
      challenges: {
        pt: [
          "Manter os dados de cada restaurante separados e seguros.",
          "Proteger as áreas administrativas sem complicar o uso do painel.",
          "Dar identidade própria a cada cardápio sem reescrever a plataforma para cada cliente.",
        ],
        en: [
          "Keeping each restaurant's data separate and secure.",
          "Protecting admin areas without making the dashboard harder to use.",
          "Giving each menu its own identity without rewriting the platform for every client.",
        ],
      },
      solutions: {
        pt: [
          "Postgres no Supabase com Row Level Security isolando os dados por restaurante.",
          "Sessões autenticadas com MFA (TOTP) para recursos administrativos; chaves secretas nunca ficam no cliente.",
          "Experiências de cardápio como camadas visuais sobre a mesma base de produtos e categorias.",
        ],
        en: [
          "Postgres on Supabase with Row Level Security isolating data per restaurant.",
          "Authenticated sessions with TOTP MFA for admin features; secret keys never reach the client.",
          "Menu experiences built as visual layers on top of the same product and category base.",
        ],
      },
      process: {
        pt: "Produto próprio da Or7, idealizado e desenvolvido por mim, do conceito à publicação em or7table.com.br. Usei ferramentas de IA como apoio no código e na revisão; as decisões de produto, arquitetura e interface foram minhas.",
        en: "Or7's own product, conceived and built by me, from concept to launch at or7table.com.br. I used AI tools as support for coding and review; product, architecture and interface decisions were mine.",
      },
    },
  },
  {
    id: "votai",
    name: "VotAI",
    summary: {
      pt: "Plataforma apartidária que organiza as 1.866 propostas das 13 candidaturas à Presidência em 2026. Você escolhe um tema e compara, lado a lado, o que cada uma propõe, com o trecho do plano oficial.",
      en: "A non-partisan platform that organizes the 1,866 proposals from the 13 presidential candidates in Brazil's 2026 election. Pick a topic and compare, side by side, what each one proposes, with the excerpt from the official plan.",
    },
    kind: "authorial",
    featured: 2,
    tagline: {
      pt: "Plataforma de Informações e Comparação Eleitoral",
      en: "Electoral Information & Comparison Platform",
    },
    status: "live",
    context: { pt: "Projeto pessoal · no ar em planosdegoverno.com.br", en: "Personal project · live at planosdegoverno.com.br" },
    description: {
      pt: "Plataforma informativa e apartidária, já no ar, que centraliza as propostas das candidaturas à Presidência nas Eleições 2026 — 13 candidaturas, 1.866 propostas e 14 temas — extraídas dos planos de governo oficiais, para pesquisar, filtrar e comparar lado a lado o que cada candidato propõe.",
      en: "A live, non-partisan information platform that gathers the proposals of the 2026 Brazilian presidential candidates — 13 candidates, 1,866 proposals and 14 topics — extracted from their official government plans, so anyone can search, filter and compare side by side what each candidate proposes.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: {
      pt: [
        "13 candidaturas e 1.866 propostas publicadas",
        "Propostas organizadas em 14 temas e subtemas",
        "Extração dos documentos oficiais, classificação por tema e revisão humana antes da publicação",
        "Plataforma apartidária: sem recomendações, notas ou rankings",
        "Comparação lado a lado entre candidaturas",
        "Filtros por tema, subtema e candidato",
        "Filtro de propostas com meta, prazo ou custo definidos",
        "Referência ao trecho e à página do documento oficial",
        "Busca por assunto (ex.: fila do SUS, creches)",
        "Tema do dia com rodízio automático e imparcial",
        "Páginas individuais de candidatos",
        "Navegação mobile inspirada na urna eletrônica",
        "Modo apresentação, compartilhamento e modo escuro",
        "Interface responsiva",
      ],
      en: [
        "13 candidates and 1,866 published proposals",
        "Proposals organized into 14 topics and subtopics",
        "Extraction from official documents, topic classification and human review before publishing",
        "Non-partisan: no endorsements, scores or rankings",
        "Side-by-side comparison between candidates",
        "Filters by topic, subtopic and candidate",
        "Filter for proposals with a stated goal, deadline or cost",
        "Reference to the excerpt and page of the official document",
        "Search by subject (e.g. public health queues, daycare)",
        "Topic of the day with automatic, impartial rotation",
        "Individual candidate pages",
        "Mobile navigation inspired by the electronic voting machine",
        "Presentation mode, sharing and dark mode",
        "Responsive interface",
      ],
    },
    role: {
      pt: ["Idealização do projeto", "Definição das funcionalidades", "Modelagem do banco de dados", "Backend em PHP", "Interface", "Implementação", "GitHub"],
      en: ["Project concept", "Feature definition", "Database modeling", "PHP backend", "Interface", "Implementation", "GitHub"],
    },
    cover: "assets/covers/projects/votai.webp",
    links: { demo: "https://planosdegoverno.com.br/", github: "https://github.com/lorenzo-or7/VotAI" },
    placeholder: { url: "votai", bg: "#F7F5FF", ink: "#1B1530", accent: "#4928C2" },

    caseStudy: {
      problem: {
        pt: "As propostas das candidaturas ficam espalhadas em planos de governo longos, em formatos diferentes. Comparar o que cada candidato propõe para um mesmo problema exige ler dezenas de documentos e ainda assim é fácil se perder na quantidade de informação.",
        en: "Candidates' proposals are scattered across long government plans in different formats. Comparing what each candidate proposes for the same problem means reading dozens of documents — and it is still easy to get lost in the sheer amount of information.",
      },
      idea: {
        pt: "Partir dos dados oficiais do TSE e transformar esses documentos em informação organizada: escolha um problema e veja, lado a lado, o que cada candidatura propõe, sempre com a referência ao trecho original para que o usuário tire suas próprias conclusões.",
        en: "Start from the official electoral court (TSE) data and turn those documents into organized information: pick a problem and see, side by side, what each candidate proposes, always linked to the original excerpt so users can draw their own conclusions.",
      },
      challenges: {
        pt: [
          "Transformar os dados oficiais do TSE em informações organizadas, fáceis de pesquisar e comparar.",
          "Estruturar candidatos, partidos, cargos e propostas de forma que o usuário navegue pelo conteúdo sem se perder em uma grande quantidade de dados.",
        ],
        en: [
          "Turning official TSE data into organized information that is easy to search and compare.",
          "Structuring candidates, parties, offices and proposals so users can navigate the content without getting lost in a large amount of data.",
        ],
      },
      solutions: {
        pt: [
          "Organizei as informações em um banco de dados relacional com MySQL.",
          "Desenvolvi em PHP a lógica de consulta e filtragem dos dados.",
          "Construí a interface com HTML, CSS e JavaScript para apresentar candidatos e propostas de maneira mais visual, simples e intuitiva.",
        ],
        en: [
          "I organized the information in a relational MySQL database.",
          "I built the query and filtering logic in PHP.",
          "I developed the interface with HTML, CSS and JavaScript to present candidates and proposals in a more visual, simple and intuitive way.",
        ],
      },
      learned: {
        pt: [
          "Desenvolver um sistema vai muito além de criar uma interface.",
          "Modelagem de banco de dados e relacionamento entre tabelas, na prática.",
          "Consultas com PHP e MySQL.",
          "Organização de grandes volumes de informação.",
          "Principalmente: transformar dados brutos em uma experiência compreensível para o usuário.",
        ],
        en: [
          "Building a system goes far beyond creating an interface.",
          "Database modeling and table relationships, in practice.",
          "Querying data with PHP and MySQL.",
          "Organizing large volumes of information.",
          "Above all: turning raw data into an experience users can understand.",
        ],
      },
      // Como o projeto foi desenvolvido (aparece como seção "Processo" no estudo de caso)
      process: {
        pt: "Projeto pessoal, idealizado e desenvolvido por mim — da definição da proposta e das funcionalidades à estruturação dos dados, interface e implementação. Usei ferramentas de inteligência artificial como apoio para pesquisa, geração de ideias, resolução de problemas técnicos, revisão de código, organização da estrutura e refinamento da interface. As decisões de produto, arquitetura, funcionalidades e a implementação final foram conduzidas e validadas por mim.",
        en: "A personal project, conceived and built by me — from defining the idea and features to structuring the data, designing the interface and implementing the system. I used AI tools as support for research, brainstorming, solving technical problems, code review, organizing the project structure and refining the interface. Product, architecture and feature decisions, as well as the final implementation, were led and validated by me.",
      },
      screenshots: [
        { src: "assets/projects/votai/cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/votai/temas.webp", caption: { pt: "Escolha de temas — 14 áreas de problemas", en: "Topic selection — 14 problem areas" } },
        { src: "assets/projects/votai/comparador.webp", caption: { pt: "Comparador lado a lado com subtemas e filtros", en: "Side-by-side comparison with subtopics and filters" } },
        { src: "assets/projects/votai/busca.webp", caption: { pt: "Busca por assunto em linguagem natural", en: "Search by subject in plain language" } },
        { src: "assets/projects/votai/mobile.webp", caption: { pt: "Mobile — manifesto e números da base", en: "Mobile — manifesto and dataset numbers" }, portrait: true },
        { src: "assets/projects/votai/tema-do-dia.webp", caption: { pt: "Mobile — tema do dia, lado a lado", en: "Mobile — topic of the day, side by side" }, portrait: true },
        { src: "assets/projects/votai/mobile-nav.webp", caption: { pt: "Mobile — navegação inspirada na urna eletrônica", en: "Mobile — navigation inspired by the voting machine" }, portrait: true },
      ],
    },
  },
  /* ---------- CONCEITOS DE WEBSITES ---------- */
  {
    id: "nexo",
    name: "NEXO",
    summary: {
      pt: "App de finanças pessoais que junta contas, cartões, faturas, parcelas e assinaturas para projetar o saldo dia a dia e mostrar quanto ainda dá para gastar no mês.",
      en: "A personal finance app that brings accounts, cards, invoices, installments and subscriptions together to project the balance day by day and show how much is still safe to spend this month.",
    },
    kind: "authorial",
    featured: 3,
    tagline: { pt: "Gestão financeira pessoal", en: "Personal finance app" },
    status: "live",
    context: { pt: "Projeto pessoal · aplicação web completa", en: "Personal project · full web application" },
    description: {
      pt: "Aplicação de finanças pessoais com contas, cartões, faturas, parcelamentos, assinaturas e projeção do saldo dia a dia. Feita com Next.js, TypeScript e Supabase, com testes automatizados.",
      en: "A personal finance app with accounts, cards, invoices, installments, subscriptions and a day-by-day balance projection. Built with Next.js, TypeScript and Supabase, with automated tests.",
    },
    technologies: ["TypeScript", "React", "NextJS", "Tailwind", "Supabase"],
    features: {
      pt: [
        "Contas, lançamentos, transferências e ajuste de saldo",
        "Cartões com faturas, limite e datas de fechamento e vencimento",
        "Parcelamentos e reembolsos de terceiros",
        "Assinaturas com cobranças automáticas, pausa e cancelamento",
        "Categorias personalizadas com subcategorias e cores",
        "Dashboard com o quanto dá para gastar até o fim do período",
        "Projeção do saldo dia a dia",
        "Tema claro e escuro, no computador e no celular",
      ],
      en: [
        "Accounts, entries, transfers and balance adjustments",
        "Cards with invoices, limits and closing and due dates",
        "Installments and third-party reimbursements",
        "Subscriptions with automatic charges, pause and cancellation",
        "Custom categories with subcategories and colors",
        "Dashboard showing how much you can spend until the end of the period",
        "Day-by-day balance projection",
        "Light and dark themes, on desktop and mobile",
      ],
    },
    role: {
      pt: ["Idealização do produto", "Regras financeiras", "Modelagem do banco e segurança (RLS)", "Interface", "Implementação", "Testes"],
      en: ["Product concept", "Financial rules", "Database modeling and security (RLS)", "Interface", "Implementation", "Testing"],
    },
    cover: "assets/covers/projects/nexo.webp",
    links: { demo: "https://nexo-gamma-one.vercel.app", github: "https://github.com/lorenzo-or7/nexo" },
    placeholder: { url: "nexo", bg: "#1A0B14", ink: "#F7EDF3", accent: "#E8336D" },
    caseStudy: {
      problem: {
        pt: "Apps de finanças costumam mostrar só o saldo de hoje. Com cartões, faturas, parcelas e assinaturas, o difícil é saber quanto realmente dá para gastar até o fim do mês.",
        en: "Finance apps usually show only today's balance. With cards, invoices, installments and subscriptions, the hard part is knowing how much you can really spend until the end of the month.",
      },
      idea: {
        pt: "Conectar tudo — contas, cartões, faturas, parcelas e assinaturas — e projetar o saldo dia a dia, mostrando o menor saldo previsto do período.",
        en: "Connect everything — accounts, cards, invoices, installments and subscriptions — and project the balance day by day, showing the lowest expected balance in the period.",
      },
      challenges: {
        pt: [
          "Garantir que as regras financeiras (centavos, ciclos de fatura, recorrências) fossem sempre corretas.",
          "Manter os dados de cada usuário isolados e seguros.",
        ],
        en: [
          "Making sure the financial rules (cents, invoice cycles, recurrences) are always correct.",
          "Keeping each user's data isolated and secure.",
        ],
      },
      solutions: {
        pt: [
          "Motor financeiro em TypeScript puro, separado da interface e coberto por testes.",
          "Banco no Supabase com Row Level Security, funções atômicas e auditoria.",
          "Testes do banco rodando as migrations reais em PostgreSQL (PGlite) e testes de tela com Playwright.",
        ],
        en: [
          "A pure TypeScript financial engine, separate from the UI and covered by tests.",
          "A Supabase database with Row Level Security, atomic functions and auditing.",
          "Database tests that run the real migrations on PostgreSQL (PGlite) and UI tests with Playwright.",
        ],
      },
      learned: {
        pt: [
          "Next.js com App Router e componentes de servidor.",
          "Modelagem de banco e segurança com RLS.",
          "Testes automatizados em várias camadas.",
        ],
        en: [
          "Next.js App Router and server components.",
          "Database modeling and security with RLS.",
          "Automated testing across several layers.",
        ],
      },
      process: {
        pt: "Projeto pessoal, idealizado e desenvolvido por mim. Usei ferramentas de IA como apoio no código, na revisão e na solução de problemas; as regras do produto, a arquitetura e as decisões de interface foram definidas por mim. Em desenvolvimento: as telas são construídas por etapas sobre o motor financeiro já testado.",
        en: "A personal project, conceived and built by me. I used AI tools as support for coding, review and problem solving; the product rules, architecture and interface decisions were mine. In development: screens are being built in stages on top of the already-tested financial engine.",
      },
      screenshots: [
        { src: "assets/projects/nexo-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/nexo-lancamentos.webp", caption: { pt: "Lançamentos com filtros e resumo", en: "Entries with filters and summary" } },
        { src: "assets/projects/nexo-cartoes.webp", caption: { pt: "Cartões, faturas e limites", en: "Cards, invoices and limits" } },
        { src: "assets/projects/nexo-assinaturas.webp", caption: { pt: "Assinaturas e custo mensal", en: "Subscriptions and monthly cost" } },
        { src: "assets/projects/nexo-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "dark-pool",
    name: "Dark Pool",
    summary: {
      pt: "Laboratório de pesquisa para traders: reconstrói sessões históricas, testa estratégias e mede risco e desempenho. É só simulação, sem corretora conectada.",
      en: "A research lab for traders: it rebuilds historical sessions, tests strategies and measures risk and performance. Simulation only, with no broker connected.",
    },
    kind: "authorial",
    tagline: {
      pt: "Plataforma de pesquisa, simulação e análise para traders",
      en: "Research, simulation and analytics platform for traders",
    },
    status: "in-progress",
    context: {
      pt: "Projeto autoral · em desenvolvimento",
      en: "Original project · in development",
    },
    description: {
      pt: "Laboratório de pesquisa quantitativa para explorar o mercado, testar hipóteses, simular cenários e analisar estratégias com dados históricos. O projeto é voltado a pesquisa e simulação, sem corretora conectada ou envio de ordens reais.",
      en: "A quantitative research lab for exploring markets, testing hypotheses, simulating scenarios and analyzing strategies with historical data. The project is research- and simulation-focused, with no connected broker or real order execution.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Python", "Supabase"],
    features: {
      pt: [
        "Time Machine para reconstrução e simulação de sessões históricas",
        "Market Scanner para varredura de ativos",
        "Strategy Lab para criação e comparação de regras",
        "Analytics com métricas de desempenho e risco",
        "Trading Journal para hipóteses, erros e aprendizados",
        "Frontend React com backend FastAPI e dados persistidos no Supabase",
      ],
      en: [
        "Time Machine for reconstructing and simulating historical sessions",
        "Market Scanner for scanning assets",
        "Strategy Lab for building and comparing rules",
        "Analytics with performance and risk metrics",
        "Trading Journal for hypotheses, mistakes and learnings",
        "React frontend with FastAPI backend and Supabase persistence",
      ],
    },
    role: {
      pt: ["Idealização", "Arquitetura", "UX/UI", "Frontend", "Backend", "Testes"],
      en: ["Concept", "Architecture", "UX/UI", "Frontend", "Backend", "Testing"],
    },
    cover: "assets/covers/projects/dark-pool.webp",
    links: {
      demo: "https://lorenzo-or7.github.io/dark-pool/",
      github: "https://github.com/lorenzo-or7/dark-pool",
    },
    placeholder: { url: "dark-pool", bg: "#04111A", ink: "#F5F7F8", accent: "#FF5A00" },
    caseStudy: {},
  },
  {
    id: "duskdex",
    name: "DuskDex",
    summary: {
      pt: "Plataforma para colecionadores de Pokémon TCG, com catálogo internacional, fichários, decks, wishlist e trocas. Funciona direto no navegador ou com conta.",
      en: "A platform for Pokémon TCG collectors, with an international catalog, binders, decks, wishlist and trades. It works straight in the browser or with an account.",
    },
    kind: "authorial",
    tagline: { pt: "Plataforma para colecionadores de Pokémon TCG", en: "A platform for Pokémon TCG collectors" },
    status: "in-progress",
    context: { pt: "Projeto em desenvolvimento", en: "Project in development" },
    description: {
      pt: "Plataforma para colecionadores de Pokémon TCG: catálogo internacional via TCGdex, coleção de cópias físicas, fichários, inventário, decks, wishlist, objetivos, comunidade e trocas. Funciona sem conta (no navegador) ou com conta (PHP + MySQL).",
      en: "A platform for Pokémon TCG collectors: an international catalog via TCGdex, a collection of physical copies, binders, inventory, decks, wishlist, goals, community and trades. Works without an account (in the browser) or with one (PHP + MySQL).",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: {
      pt: [
        "Catálogo internacional (TCGdex) com busca instantânea e 13 idiomas",
        "Coleção de cópias físicas com idioma, versão e estado de conservação",
        "Fichários físicos e virtuais, com artes panorâmicas para impressão",
        "Inventário com histórico e reversão",
        "Decks com montagem física",
        "Wishlist e objetivos por expansão",
        "Comunidade, perfis e trocas entre colecionadores",
        "Modo sem conta (IndexedDB) com coleção de exemplo e importação para a conta",
        "Contas com Argon2id, CSRF, limites de tentativa e moderação",
      ],
      en: [
        "International catalog (TCGdex) with instant search and 13 languages",
        "Collection of physical copies with language, version and condition",
        "Physical and virtual binders, with panoramic print art",
        "Inventory with history and undo",
        "Decks with physical assembly",
        "Wishlist and per-set goals",
        "Community, profiles and trades between collectors",
        "No-account mode (IndexedDB) with a sample collection and import into an account",
        "Accounts with Argon2id, CSRF, rate limits and moderation",
      ],
    },
    role: {
      pt: ["Idealização do produto", "Design da interface", "Front-end (SPA em JavaScript)", "API em PHP e banco MySQL", "Segurança e moderação", "Testes"],
      en: ["Product concept", "Interface design", "Front-end (JavaScript SPA)", "PHP API and MySQL database", "Security and moderation", "Testing"],
    },
    cover: "assets/covers/projects/duskdex.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/duskdex/", github: "https://github.com/lorenzo-or7/duskdex" },
    placeholder: { url: "duskdex", bg: "#0D0B12", ink: "#F3EDF4", accent: "#9E79BC", serif: true },
    caseStudy: {
      problem: {
        pt: "Colecionadores de Pokémon TCG controlam cartas em planilhas e apps genéricos, que não entendem cópias físicas, idiomas, estado de conservação nem fichários reais.",
        en: "Pokémon TCG collectors track cards in spreadsheets and generic apps that don't understand physical copies, languages, condition or real binders.",
      },
      idea: {
        pt: "Um app que espelha a coleção física: cada cópia com idioma, versão e estado, organizada em fichários e decks, com catálogo oficial e trocas entre colecionadores.",
        en: "An app that mirrors the physical collection: each copy with language, version and condition, organized into binders and decks, with an official catalog and trades between collectors.",
      },
      design: {
        pt: "Identidade crepuscular: violeta (#9E79BC), carmim (#A73D5E) e noite (#0D0B12), serifa de display nos títulos e ilustrações de céu e lua. Tema claro e escuro.",
        en: "A dusk identity: violet (#9E79BC), crimson (#A73D5E) and night (#0D0B12), a display serif for headings and sky-and-moon illustrations. Light and dark themes.",
      },
      challenges: {
        pt: [
          "Funcionar sem cadastro e também com conta, sem duplicar a lógica.",
          "Catálogo com dezenas de milhares de cartas, rápido e em vários idiomas.",
          "Trocas justas, com o estado de cada carta registrado na proposta.",
        ],
        en: [
          "Working without sign-up and with an account, without duplicating logic.",
          "A catalog of tens of thousands of cards, fast and in several languages.",
          "Fair trades, with each card's condition recorded in the proposal.",
        ],
      },
      solutions: {
        pt: [
          "Camada de dados com dois adaptadores: IndexedDB no navegador e API PHP (/api/v1), com importação da coleção ao criar conta.",
          "Base local do catálogo embutida e TCGdex como fonte online.",
          "Backend com Argon2id, CSRF, limites de tentativa, migrations e instalador para hospedagem cPanel.",
        ],
        en: [
          "A data layer with two adapters: browser IndexedDB and a PHP API (/api/v1), importing the collection on sign-up.",
          "A bundled local catalog base with TCGdex as the online source.",
          "A backend with Argon2id, CSRF, rate limits, migrations and an installer for cPanel hosting.",
        ],
      },
      learned: {
        pt: [
          "Arquitetura de SPA sem framework.",
          "APIs REST em PHP com segurança de sessão.",
          "Modelagem de dados para coleções e trocas.",
        ],
        en: [
          "Framework-free SPA architecture.",
          "REST APIs in PHP with session security.",
          "Data modeling for collections and trades.",
        ],
      },
      process: {
        pt: "Projeto pessoal, idealizado e desenvolvido por mim. Usei ferramentas de IA como apoio no código, na revisão e na solução de problemas; as regras do produto, a arquitetura e as decisões de interface foram definidas por mim. A demo no GitHub Pages roda no modo sem conta; o modo com conta usa PHP + MySQL.",
        en: "A personal project, conceived and built by me. I used AI tools as support for coding, review and problem solving; the product rules, architecture and interface decisions were mine. The GitHub Pages demo runs in no-account mode; the account mode uses PHP + MySQL.",
      },
      screenshots: [
        { src: "assets/projects/duskdex-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/duskdex-colecao.webp", caption: { pt: "Minha coleção", en: "My collection" } },
        { src: "assets/projects/duskdex-catalogo.webp", caption: { pt: "Catálogo internacional (TCGdex)", en: "International catalog (TCGdex)" } },
        { src: "assets/projects/duskdex-ficharios.webp", caption: { pt: "Fichários físicos e virtuais", en: "Physical and virtual binders" } },
        { src: "assets/projects/duskdex-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "retrama",
    name: "re.trama | Ateliê de Crochê",
    summary: {
      pt: "Vitrine para o re.trama, ateliê de crochê: coleções com fotos e preços reais, um passo a passo para encomendas personalizadas e pedido pronto no WhatsApp.",
      en: "A storefront for re.trama, a crochet studio: collections with real photos and prices, a step-by-step flow for custom orders and a ready-made WhatsApp request.",
    },
    tagline: { pt: "Ateliê de crochê feito à mão", en: "Handmade crochet studio" },
    status: "in-progress",
    context: { pt: "Projeto em desenvolvimento", en: "Project in development" },
    description: {
      pt: "Protótipo de vitrine para o re.trama, ateliê de crochê da Mari Orsetti: coleções, peças com preço e fotos reais, um passo a passo para encomendas personalizadas e contato direto pelo WhatsApp.",
      en: "A storefront prototype for re.trama, Mari Orsetti's crochet studio: collections, products with real prices and photos, a step-by-step flow for custom orders and direct WhatsApp contact.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Barra lateral com ícones no desktop e navegação adaptada no celular",
        "Coleções: amigurumis, acessórios, artigos de mesa e decoração",
        "Catálogo com filtros, preços e parcelamento conferidos na loja atual",
        "Galeria de fotos de cada peça com lightbox",
        "\"Personalize\": passo a passo para descrever a encomenda",
        "Pedido enviado pronto pelo WhatsApp",
        "Seção \"Nosso Ateliê\" apresentando a Mari",
        "Mosaico de inspiração e link para o Instagram",
        "Tema claro e escuro",
      ],
      en: [
        "Icon sidebar on desktop and adapted navigation on mobile",
        "Collections: amigurumis, accessories, table linens and decor",
        "Catalog with filters, prices and installments checked against the current store",
        "Photo gallery for each piece with lightbox",
        "\"Customize\": a step-by-step flow to describe the order",
        "Order sent ready-made via WhatsApp",
        "\"Our Studio\" section introducing Mari",
        "Inspiration mosaic and Instagram link",
        "Light and dark themes",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Fotos e catálogo", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Photos and catalog", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/retrama.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/retrama/", github: "https://github.com/lorenzo-or7/retrama" },
    placeholder: { url: "retrama", bg: "#EBEFF2", ink: "#0E619E", accent: "#D23C6E", serif: true },
    caseStudy: {
      problem: { pt: "As peças são únicas e quase sempre feitas sob encomenda, mas a loja virtual genérica mostra só uma lista de produtos, sem a história do ateliê nem um caminho claro para pedir algo personalizado.", en: "The pieces are unique and mostly made to order, but the generic online store only shows a product list, with no studio story and no clear path to request something custom." },
      idea: { pt: "Uma vitrine com a identidade do re.trama, que apresenta coleções e peças e transforma a ideia do cliente em um pedido pronto para a Mari no WhatsApp.", en: "A storefront with re.trama's identity that presents collections and pieces and turns the customer's idea into a ready-made request to Mari on WhatsApp." },
      design: { pt: "Azul da marca (#0E619E), rosa e fundo #EBEFF2, Fraunces nos títulos, Outfit no texto, Caveat nos detalhes manuscritos e um padrão de pontos de crochê.", en: "The brand blue (#0E619E), pink and a #EBEFF2 background, Fraunces headings, Outfit body text, Caveat handwritten details and a crochet stitch pattern." },
      challenges: { pt: [
          "Explicar encomendas personalizadas sem formulário complicado.",
          "Manter preços e fotos fáceis de atualizar.",
        ], en: [
          "Explaining custom orders without a complicated form.",
          "Keeping prices and photos easy to update.",
        ] },
      solutions: { pt: [
          "Passo a passo curto que monta a mensagem do pedido.",
          "Todos os dados editáveis em um único objeto de configuração.",
          "Fotos reais das peças, com galeria por produto.",
        ], en: [
          "A short step-by-step flow that writes the order message.",
          "All data editable in a single configuration object.",
          "Real product photos, with a gallery per product.",
        ] },
      learned: { pt: [
          "Projetar para um cliente real e próximo.",
          "Fluxos de conversão por WhatsApp.",
          "Direção de arte para artesanato.",
        ], en: [
          "Designing for a real, close client.",
          "WhatsApp conversion flows.",
          "Art direction for handmade goods.",
        ] },
      process: {
        pt: "Projeto real, feito para o ateliê da minha mãe. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Protótipo funcional, publicado no GitHub Pages.",
        en: "A real project, made for my mother's studio. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/retrama-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/retrama-colecoes.webp", caption: { pt: "Coleções", en: "Collections" } },
        { src: "assets/projects/retrama-criacoes.webp", caption: { pt: "Peças em destaque", en: "Featured pieces" } },
        { src: "assets/projects/retrama-personalize.webp", caption: { pt: "Encomenda personalizada", en: "Custom order" } },
        { src: "assets/projects/retrama-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "saiso",
    name: "Saiso – Korean Food Market",
    summary: {
      pt: "Site para um restaurante e mercado coreano do Centro de Curitiba, com cardápio pesquisável, vitrine do K-market, galeria e reserva de mesa.",
      en: "A website for a Korean restaurant and market in downtown Curitiba, with a searchable menu, a K-market showcase, gallery and table booking.",
    },
    tagline: { pt: "Restaurante e mercado coreano", en: "Korean restaurant & market" },
    status: "prototype",
    context: { pt: "Protótipo comercial", en: "Commercial prototype" },
    description: {
      pt: "Demo de site para um restaurante e mercado coreano real do Centro de Curitiba, com cardápio lateral pesquisável, pratos em destaque, vitrine do K-market, galeria, reserva de mesa e mapa.",
      en: "A website demo for a real Korean restaurant and market in downtown Curitiba, with a searchable side menu, featured dishes, a K-market showcase, gallery, table booking and map.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Navegação lateral no desktop e barra inferior no celular",
        "\"Sabores\": oito pratos em destaque, um de cada vez",
        "Cardápio lateral com busca, categorias e detalhe do prato",
        "Vitrine do K-market com filtros por tipo de bebida",
        "Galeria de fotos com lightbox",
        "Avaliações de clientes",
        "Reserva de mesa com calendário (domingo fechado)",
        "Horários, mapa e informações de acessibilidade",
        "Tema claro e escuro",
      ],
      en: [
        "Side navigation on desktop and bottom bar on mobile",
        "\"Flavors\": eight featured dishes, one at a time",
        "Side menu with search, categories and dish details",
        "K-market showcase with drink-type filters",
        "Photo gallery with lightbox",
        "Customer reviews",
        "Table booking with calendar (closed on Sundays)",
        "Opening hours, map and accessibility info",
        "Light and dark themes",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/saiso.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/saiso-demo/", github: "https://github.com/lorenzo-or7/saiso-demo" },
    placeholder: { url: "saiso", bg: "#211B1A", ink: "#F8E2D1", accent: "#B75D4D", serif: true },
    caseStudy: {
      problem: { pt: "A casa tem cardápio grande, um mercado junto e muitos clientes chegando pelo Instagram, mas cardápio, horários e reservas ficavam espalhados.", en: "The place has a large menu, a market inside and many customers arriving via Instagram, but the menu, hours and bookings were scattered." },
      idea: { pt: "Um site com cara de revista de gastronomia coreana, que apresenta os pratos, o mercado e a reserva de mesa num só lugar.", en: "A site that feels like a Korean food magazine, bringing the dishes, the market and table booking together." },
      design: { pt: "Terracota (#B75D4D), creme (#F8E2D1) e cacau, Newsreader nos títulos, DM Sans no texto e Noto Serif KR nos detalhes em coreano.", en: "Terracotta (#B75D4D), cream (#F8E2D1) and cocoa, Newsreader headings, DM Sans body text and Noto Serif KR for Korean details." },
      challenges: { pt: [
          "Apresentar um cardápio extenso sem pesar a página.",
          "Manter a seção de destaques estável ao trocar de prato.",
        ], en: [
          "Presenting a long menu without weighing down the page.",
          "Keeping the highlights section stable when switching dishes.",
        ] },
      solutions: { pt: [
          "Cardápio em painel lateral com busca e categorias.",
          "Área de texto que reserva a altura do maior prato.",
          "Fontes locais e imagens WebP para carregar rápido e funcionar offline.",
        ], en: [
          "Menu in a side panel with search and categories.",
          "A text area that reserves the height of the longest dish.",
          "Local fonts and WebP images to load fast and work offline.",
        ] },
      learned: { pt: [
          "Direção de arte editorial para gastronomia.",
          "Painéis e diálogos acessíveis.",
          "Otimização de imagens e fontes.",
        ], en: [
          "Editorial art direction for food.",
          "Accessible panels and dialogs.",
          "Image and font optimization.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/saiso-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/saiso-sabores.webp", caption: { pt: "Pratos em destaque", en: "Featured dishes" } },
        { src: "assets/projects/saiso-market.webp", caption: { pt: "Vitrine do K-market", en: "K-market showcase" } },
        { src: "assets/projects/saiso-galeria.webp", caption: { pt: "Galeria da casa", en: "House gallery" } },
        { src: "assets/projects/saiso-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "mkt",
    name: "MKT — A Bolsa da Internet",
    summary: {
      pt: "Bolsa de valores fictícia da cultura da internet. Criadores, jogos, marcas e memes viram ativos, e os preços reagem ao hype e às notícias.",
      en: "A fictional stock exchange for internet culture. Creators, games, brands and memes become assets, and prices react to hype and news.",
    },
    kind: "authorial",
    tagline: { pt: "Jogo de mercado fictício", en: "Fictional market game" },
    status: "completed",
    context: { pt: "Projeto autoral · concluído", en: "Original project · completed" },
    description: {
      pt: "Uma bolsa de valores fictícia da cultura da internet: criadores, jogos, marcas e memes viram ativos negociados com uma moeda virtual, com preços que reagem ao hype e a notícias.",
      en: "A fictional stock exchange of internet culture: creators, games, brands and memes become assets traded with a virtual currency, with prices that react to hype and news.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    features: {
      pt: [
        "Cadastro e login com moeda virtual (Units)",
        "Painel de ativos com cotações e variação",
        "Mapa de calor do mercado",
        "Motor de notícias e eventos que movimenta os preços",
        "Gráficos de preço",
        "Três idiomas (PT, EN e ES)",
        "Área administrativa (planos e notícias)",
        "Tema claro e escuro",
        "Build que gera um único arquivo HTML",
      ],
      en: [
        "Sign-up and login with a virtual currency (Units)",
        "Asset board with quotes and changes",
        "Market heat map",
        "News and events engine that moves prices",
        "Price charts",
        "Three languages (PT, EN and ES)",
        "Admin area (plans and news)",
        "Light and dark themes",
        "Build step that outputs a single HTML file",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/mkt.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/mkt/", github: "https://github.com/lorenzo-or7/mkt" },
    placeholder: { url: "mkt", bg: "#050505", ink: "#F7F7F7", accent: "#FF342B" },
    caseStudy: {
      problem: { pt: "Acompanhar o que está em alta na internet é divertido, mas não existe um jeito de \"apostar\" nisso de forma segura e sem dinheiro real.", en: "Following what's trending online is fun, but there's no safe, no-real-money way to \"bet\" on it." },
      idea: { pt: "Transformar a cultura da internet num mercado fictício, com moeda virtual e preços movidos por hype e notícias.", en: "Turn internet culture into a fictional market, with a virtual currency and prices driven by hype and news." },
      design: { pt: "Estética de terminal financeiro, vermelho (#FF342B) de destaque, tipografia condensada e tabelas densas de cotação.", en: "Financial terminal aesthetic, red (#FF342B) accents, condensed type and dense quote tables." },
      challenges: { pt: [
          "Criar um mercado que pareça vivo sem servidor.",
        ], en: [
          "Making a market feel alive without a server.",
        ] },
      solutions: { pt: [
          "Motor de notícias e eventos que altera hype e preço dos ativos.",
          "Testes automatizados do motor.",
          "Build em Python que empacota tudo em um único HTML.",
        ], en: [
          "A news and events engine that changes asset hype and price.",
          "Automated tests for the engine.",
          "A Python build step that packs everything into one HTML file.",
        ] },
      learned: { pt: [
          "Simulação e regras de jogo.",
          "Internacionalização (i18n).",
          "Organizar código em módulos e automatizar o build.",
        ], en: [
          "Simulation and game rules.",
          "Internationalization (i18n).",
          "Organizing code into modules and automating the build.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/mkt-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/mkt-sec-board.webp", caption: { pt: "Painel de ativos", en: "Asset board" } },
        { src: "assets/projects/mkt-sec-heat.webp", caption: { pt: "Mapa de calor", en: "Heat map" } },
        { src: "assets/projects/mkt-sec-events.webp", caption: { pt: "Notícias e eventos", en: "News and events" } },
        { src: "assets/projects/mkt-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "namba",
    name: "Cine Camera Service Namba",
    summary: {
      pt: "Site e sistema para uma assistência técnica Canon de São Paulo: consulta de ordem de serviço, carta de envio, assistente virtual e painel da equipe.",
      en: "A website and system for a Canon repair service in São Paulo: service order lookup, shipping letter, virtual assistant and a staff dashboard.",
    },
    tagline: { pt: "Assistência técnica Canon", en: "Canon repair service" },
    status: "in-progress",
    context: { pt: "Projeto em desenvolvimento", en: "Project in development" },
    description: {
      pt: "Demo de site e sistema para uma assistência técnica Canon de São Paulo, com consulta de ordem de serviço, carta de envio, assistente virtual e painel da equipe.",
      en: "A website and system demo for a Canon repair shop in São Paulo, with service order lookup, a shipping letter, a virtual assistant and a staff dashboard.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Site institucional: serviços, oficina, história e visita",
        "Passo a passo do equipamento na oficina",
        "Consulta pública de ordem de serviço",
        "Carta de envio para imprimir, com máscaras e CEP automático",
        "Assistente virtual (Carmen) para tirar dúvidas",
        "Painel da equipe com login",
        "Cadastro e edição de O.S. e clientes",
        "Tema claro e escuro",
        "Layout responsivo",
      ],
      en: [
        "Company website: services, workshop, history and visit",
        "Step-by-step of the equipment in the workshop",
        "Public service order lookup",
        "Printable shipping letter with input masks and automatic ZIP lookup",
        "Virtual assistant (Carmen) for questions",
        "Staff dashboard with login",
        "Create and edit service orders and customers",
        "Light and dark themes",
        "Responsive layout",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/namba.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/namba-demo/", github: "https://github.com/lorenzo-or7/namba-demo" },
    placeholder: { url: "namba", bg: "#F5F6F5", ink: "#1C2220", accent: "#C8161E", serif: true },
    caseStudy: {
      problem: { pt: "A assistência atende clientes do Brasil inteiro, mas acompanhar ordens de serviço e preparar envios pelo correio dependia de telefone e e-mail.", en: "The shop serves customers across Brazil, but tracking service orders and preparing mail shipments relied on phone and email." },
      idea: { pt: "Unir site institucional e ferramentas práticas: consulta de O.S., carta de envio, assistente virtual e um painel para a equipe.", en: "Combine a company website with practical tools: order lookup, shipping letter, virtual assistant and a staff dashboard." },
      design: { pt: "Fundo claro com vermelho (#C8161E) de destaque, Newsreader e Schibsted Grotesk, e ilustrações técnicas em traço aplicadas como máscara CSS.", en: "Light background with red (#C8161E) accents, Newsreader and Schibsted Grotesk, and technical line illustrations applied as CSS masks." },
      challenges: { pt: [
          "Simular um sistema com banco de dados em um site estático, para apresentação.",
        ], en: [
          "Simulating a database-backed system on a static site, for presentation.",
        ] },
      solutions: { pt: [
          "\"Banco\" simulado em JavaScript espelhando as funções da versão PHP.",
          "Máscaras de CPF, CNPJ, telefone e CEP.",
          "Assistente com as mesmas regras de palavras-chave do original.",
        ], en: [
          "A JavaScript mock database mirroring the PHP version's functions.",
          "CPF, CNPJ, phone and ZIP input masks.",
          "An assistant with the same keyword rules as the original.",
        ] },
      learned: { pt: [
          "Planejar telas de sistema (painel, cadastro, consulta).",
          "Formulários com máscaras e validação.",
          "Prototipar um sistema antes do back-end.",
        ], en: [
          "Planning system screens (dashboard, forms, lookup).",
          "Forms with masks and validation.",
          "Prototyping a system before the back end.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/namba-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/namba-servicos.webp", caption: { pt: "Serviços", en: "Services" } },
        { src: "assets/projects/namba-oficina.webp", caption: { pt: "O caminho do equipamento na oficina", en: "The equipment's path in the workshop" } },
        { src: "assets/projects/namba-historia.webp", caption: { pt: "Uma oficina de família", en: "A family workshop" } },
        { src: "assets/projects/namba-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "capim-leao",
    name: "Capim Leão – Bar & Brasa",
    summary: {
      pt: "Proposta para um bar e restaurante do Água Verde, em Curitiba: cardápio em abas, guia do ponto da carne, happy hour e reserva de mesa.",
      en: "A proposal for a bar and grill in Água Verde, Curitiba: tabbed menu, a guide to meat doneness, happy hour and table booking.",
    },
    tagline: { pt: "Bar, brasa e coquetelaria", en: "Bar, grill & cocktails" },
    status: "prototype",
    context: { pt: "Protótipo comercial", en: "Commercial prototype" },
    description: {
      pt: "Demo de site para um bar e restaurante real do Água Verde, em Curitiba, com cardápio em abas, guia do ponto da carne, Happy Hour, galeria e reserva de mesa.",
      en: "A website demo for a real bar and grill in Água Verde, Curitiba, with a tabbed menu, a meat doneness guide, happy hour, gallery and table booking.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Cardápio em abas: brasa e cozinha, bar e bebidas",
        "Guia visual do ponto da carne",
        "Happy Hour com dias, horários e preços",
        "\"Qual é o seu momento?\": sugestões pelo tipo de visita",
        "Galeria de fotos com lightbox",
        "Avaliações de clientes",
        "Reserva de mesa e contato pelo WhatsApp",
        "Mapa e tema claro/escuro",
        "Layout responsivo",
      ],
      en: [
        "Tabbed menu: grill and kitchen, bar and drinks",
        "Visual meat doneness guide",
        "Happy hour with days, times and prices",
        "\"What's your moment?\": suggestions by type of visit",
        "Photo gallery with lightbox",
        "Customer reviews",
        "Table booking and WhatsApp contact",
        "Map and light/dark theme",
        "Responsive layout",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/capim-leao.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/capim-leao-demo/", github: "https://github.com/lorenzo-or7/capim-leao-demo" },
    placeholder: { url: "capimleao", bg: "#0E0E18", ink: "#F9F5C8", accent: "#EBD951", serif: true },
    caseStudy: {
      problem: { pt: "O bar tem uma identidade forte e muito movimento, mas as informações (cardápio, Happy Hour, reservas) estavam espalhadas nas redes sociais.", en: "The bar has a strong identity and plenty of regulars, but its information (menu, happy hour, bookings) was scattered across social media." },
      idea: { pt: "Um site com clima de encontro, que reúne cardápio, promoções e reserva de mesa num só lugar.", en: "A website with a gathering mood that brings the menu, promotions and table booking together." },
      design: { pt: "Amarelo da fachada (#EBD951) com preto e laranja-brasa, Cormorant Garamond nos títulos, Manrope no texto e detalhes manuscritos em Caveat.", en: "The façade's yellow (#EBD951) with black and ember orange, Cormorant Garamond headings, Manrope body text and handwritten Caveat details." },
      challenges: { pt: [
          "Organizar um cardápio grande sem deixar a página cansativa.",
        ], en: [
          "Organizing a large menu without making the page tiring.",
        ] },
      solutions: { pt: [
          "Cardápio dividido em abas (cozinha e bar).",
          "Guia visual do ponto da carne.",
          "Sugestões pelo tipo de visita para ajudar na escolha.",
        ], en: [
          "Menu split into tabs (kitchen and bar).",
          "A visual meat doneness guide.",
          "Suggestions by type of visit to help people choose.",
        ] },
      learned: { pt: [
          "Organização de conteúdo extenso.",
          "Componentes interativos com JavaScript puro.",
          "Direção de arte para gastronomia.",
        ], en: [
          "Organizing extensive content.",
          "Interactive components with vanilla JavaScript.",
          "Art direction for food and drink.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/capim-leao-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/capim-leao-cardapio.webp", caption: { pt: "Cardápio em abas", en: "Tabbed menu" } },
        { src: "assets/projects/capim-leao-happy-hour.webp", caption: { pt: "Happy Hour", en: "Happy hour" } },
        { src: "assets/projects/capim-leao-experiencia.webp", caption: { pt: "Galeria da casa", en: "House gallery" } },
        { src: "assets/projects/capim-leao-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "studio-astra",
    name: "Studio Astra Pilates",
    summary: {
      pt: "Proposta para um estúdio de Pilates de Curitiba, com guia de objetivos, galeria do espaço, informações do Wellhub e agendamento de aula experimental.",
      en: "A proposal for a Pilates studio in Curitiba, with a goals guide, space gallery, Wellhub info and trial class booking.",
    },
    tagline: { pt: "Estúdio de Pilates", en: "Pilates studio" },
    status: "discontinued",
    context: { pt: "Projeto descontinuado", en: "Discontinued project" },
    description: {
      pt: "Demo de site para um estúdio de Pilates real de Curitiba, com visual acolhedor, guia de objetivos, galeria do espaço, Wellhub e agendamento de aula experimental.",
      en: "A website demo for a real Pilates studio in Curitiba, with a welcoming look, a goals guide, space gallery, Wellhub info and trial class booking.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Navegação lateral no desktop",
        "\"Encontre seu equilíbrio\": conteúdo por objetivo",
        "Princípios do Pilates",
        "Galeria do espaço com lightbox",
        "Depoimentos de alunas",
        "Planos Wellhub aceitos",
        "Agendamento de aula experimental",
        "Área do aluno e tema claro/escuro",
        "Mapa, horários e WhatsApp",
      ],
      en: [
        "Side navigation on desktop",
        "\"Find your balance\": content by goal",
        "Pilates principles",
        "Space gallery with lightbox",
        "Student testimonials",
        "Accepted Wellhub plans",
        "Trial class booking",
        "Student area and light/dark theme",
        "Map, opening hours and WhatsApp",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/studio-astra.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/studio-astra-demo/", github: "https://github.com/lorenzo-or7/studio-astra-demo" },
    placeholder: { url: "studioastra", bg: "#FAF6F2", ink: "#444645", accent: "#9D838C", serif: true },
    caseStudy: {
      problem: { pt: "Quem nunca fez Pilates costuma ter dúvidas sobre como começar, e o estúdio não tinha um site que respondesse isso.", en: "People who have never done Pilates often don't know how to start, and the studio had no website answering that." },
      idea: { pt: "Um site calmo, que guia a pessoa pelo objetivo dela e termina no agendamento da aula experimental.", en: "A calm website that guides people by their goal and ends at booking a trial class." },
      design: { pt: "Areia, rosé (#9D838C) e grafite, Cormorant Garamond com Manrope, formas em arco inspiradas no logo e fotos reais do estúdio.", en: "Sand, rosé (#9D838C) and graphite, Cormorant Garamond with Manrope, arch shapes inspired by the logo and real photos of the studio." },
      challenges: { pt: [
          "Passar sensação de calma sem deixar o site sem informação.",
        ], en: [
          "Conveying calm without leaving the site short on information.",
        ] },
      solutions: { pt: [
          "Conteúdo organizado por objetivo (postura, flexibilidade, força).",
          "Chamadas claras para a aula experimental.",
          "Fotos grandes e bastante respiro.",
        ], en: [
          "Content organized by goal (posture, flexibility, strength).",
          "Clear calls to action for the trial class.",
          "Large photos and plenty of breathing room.",
        ] },
      learned: { pt: [
          "Design para bem-estar e saúde.",
          "Jornada do usuário até a conversão.",
          "Tema claro/escuro com variáveis CSS.",
        ], en: [
          "Design for wellness and health.",
          "User journey to conversion.",
          "Light/dark theming with CSS variables.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/studio-astra-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/studio-astra-pilates.webp", caption: { pt: "Princípios do Pilates", en: "Pilates principles" } },
        { src: "assets/projects/studio-astra-espaco.webp", caption: { pt: "O espaço", en: "The studio" } },
        { src: "assets/projects/studio-astra-primeira-aula.webp", caption: { pt: "Primeira aula", en: "First class" } },
        { src: "assets/projects/studio-astra-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "eloplus",
    name: "EloPlus",
    summary: {
      pt: "Site para um serviço voltado a jogadores de Valorant, com preços por divisão, calculadora de orçamento e uma experiência de ranks animada pela rolagem.",
      en: "A website for a service aimed at Valorant players, with per-division pricing, a quote calculator and a rank experience driven by scrolling.",
    },
    tagline: { pt: "Serviço para jogadores de Valorant", en: "Service for Valorant players" },
    status: "discontinued",
    context: { pt: "Projeto descontinuado", en: "Discontinued project" },
    description: {
      pt: "Site para um serviço voltado a jogadores de Valorant, com tabela de preços por divisão, calculadora de orçamento, pacotes, extras e uma experiência de ranks animada pela rolagem.",
      en: "A website for a service aimed at Valorant players, with per-division pricing, a quote calculator, packages, add-ons and a scroll-driven rank experience.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Tabela de preços por divisão",
        "Calculadora de orçamento: clique na linha e ela entra no pedido",
        "Pacotes High Elo",
        "Serviços adicionais com acréscimo calculado",
        "Experiência de ranks animada pela rolagem",
        "Seleção de agentes",
        "Perguntas frequentes",
        "Barra lateral de navegação",
        "Layout responsivo",
      ],
      en: [
        "Per-division price table",
        "Quote calculator: click a row to add it to the order",
        "High Elo packages",
        "Add-on services with calculated surcharge",
        "Scroll-driven rank experience",
        "Agent selection",
        "FAQ",
        "Sidebar navigation",
        "Responsive layout",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/eloplus.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/eloplus-demo/", github: "https://github.com/lorenzo-or7/eloplus-demo" },
    placeholder: { url: "eloplus", bg: "#0D1323", ink: "#FFFFFF", accent: "#6CB7FF" },
    caseStudy: {
      problem: { pt: "O serviço era vendido só por conversa, e cada cliente precisava pedir um orçamento manual.", en: "The service was sold only through chat, and every customer had to ask for a manual quote." },
      idea: { pt: "Um site com cara de jogo, em que o próprio cliente monta o orçamento e entende os extras antes de chamar a equipe.", en: "A game-like website where customers build their own quote and understand add-ons before contacting the team." },
      design: { pt: "Azul-marinho (#0D1323) e azul-céu (#6CB7FF), Big Shoulders Display nos títulos, Figtree no texto e JetBrains Mono nos detalhes, com animação quadro a quadro dos ranks.", en: "Navy (#0D1323) and sky blue (#6CB7FF), Big Shoulders Display headings, Figtree body text and JetBrains Mono details, with frame-by-frame rank animation." },
      challenges: { pt: [
          "Fazer uma animação longa ligada à rolagem sem travar o site.",
        ], en: [
          "Building a long scroll-linked animation without making the site lag.",
        ] },
      solutions: { pt: [
          "Quadros em WebP carregados sob demanda.",
          "Vídeo de reserva para navegadores mais simples.",
          "Calculadora que soma divisões e acréscimos automaticamente.",
        ], en: [
          "WebP frames loaded on demand.",
          "A fallback video for simpler browsers.",
          "A calculator that adds up divisions and surcharges automatically.",
        ] },
      learned: { pt: [
          "Animações controladas pela rolagem.",
          "Lógica de orçamento com JavaScript.",
          "Linguagem visual para o público gamer.",
        ], en: [
          "Scroll-driven animation.",
          "Quote logic in JavaScript.",
          "Visual language for a gaming audience.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/eloplus-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/eloplus-precos.webp", caption: { pt: "Preços por divisão", en: "Price per division" } },
        { src: "assets/projects/eloplus-pacotes.webp", caption: { pt: "Pacotes High Elo", en: "High Elo packages" } },
        { src: "assets/projects/eloplus-faq.webp", caption: { pt: "Perguntas frequentes", en: "FAQ" } },
        { src: "assets/projects/eloplus-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "contlup",
    name: "ContLup Studio Contábil",
    summary: {
      pt: "Site do escritório de contabilidade ContLup, de Pedreira/SP. Apresenta as áreas de atuação, responde às dúvidas mais comuns e leva o visitante direto ao pedido de proposta.",
      en: "The website of ContLup, an accounting firm in Pedreira, SP. It presents the practice areas, answers the most common questions and takes visitors straight to a proposal request.",
    },
    kind: "commercial",
    tagline: { pt: "Escritório de contabilidade", en: "Accounting firm" },
    status: "live",
    context: { pt: "Projeto comercial · no ar em contlup.com.br", en: "Commercial project · live at contlup.com.br" },
    description: {
      pt: "Demo de site para um escritório de contabilidade real de Pedreira/SP, com tema escuro e claro, áreas de atuação, painel de números ilustrativo, dúvidas frequentes e pedido de proposta.",
      en: "A website demo for a real accounting firm in Pedreira, SP, with dark and light themes, practice areas, an illustrative numbers panel, FAQ and a proposal request form.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Barra lateral que expande ao passar o mouse",
        "Tema escuro e claro",
        "Áreas de atuação: contábil, fiscal, trabalhista e societário",
        "\"Para quem é\": do MEI à empresa em crescimento",
        "Painel \"Visão do mês\" com números ilustrativos",
        "Apresentação da contadora responsável",
        "\"A Lupi explica\" e perguntas frequentes",
        "Formulário de pedido de proposta",
        "Contatos com botão de copiar e WhatsApp",
      ],
      en: [
        "Sidebar that expands on hover",
        "Dark and light themes",
        "Practice areas: accounting, tax, payroll and corporate",
        "\"Who it's for\": from sole traders to growing companies",
        "\"Month overview\" panel with illustrative numbers",
        "Introduction of the lead accountant",
        "\"Lupi explains\" and FAQ",
        "Proposal request form",
        "Contact details with copy button and WhatsApp",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/contlup.webp",
    video: "",
    links: { demo: "https://contlup.com.br/", github: "https://github.com/lorenzo-or7/contlup-demo" },
    placeholder: { url: "contlup", bg: "#070C1C", ink: "#EEF0FA", accent: "#7357F0" },
    caseStudy: {
      problem: { pt: "Sites de contabilidade costumam ser frios e iguais. O escritório precisava mostrar proximidade e a experiência da contadora responsável.", en: "Accounting websites tend to be cold and all alike. The firm needed to show closeness and its lead accountant's experience." },
      idea: { pt: "Uma homepage que explicasse a contabilidade de forma simples, com a contadora em destaque e recursos visuais que dão sentido aos números.", en: "A homepage that explains accounting simply, featuring the accountant and visuals that make numbers meaningful." },
      design: { pt: "Azul-marinho (#070C1C) com violeta (#7357F0) e lilás, Archivo condensada nos títulos, Hanken Grotesk no texto e detalhes em pixel derivados do monograma.", en: "Navy (#070C1C) with violet (#7357F0) and lilac, condensed Archivo for headings, Hanken Grotesk for body text and pixel details drawn from the monogram." },
      challenges: { pt: [
          "Deixar um tema técnico, como contabilidade, leve e fácil de entender.",
        ], en: [
          "Making a technical subject like accounting feel light and easy to understand.",
        ] },
      solutions: { pt: [
          "Ilustrações para cada área de atuação.",
          "Painel com números ilustrativos contando a \"história\" do mês.",
          "Mascote (Lupi) respondendo às perguntas frequentes.",
        ], en: [
          "Illustrations for each practice area.",
          "A panel with illustrative numbers telling the month's \"story\".",
          "A mascot (Lupi) answering frequently asked questions.",
        ] },
      learned: { pt: [
          "Storytelling visual com dados.",
          "Temas claro/escuro com variáveis CSS.",
          "Organização de projeto em arquivos separados.",
        ], en: [
          "Visual storytelling with data.",
          "Light/dark themes with CSS variables.",
          "Organizing a project into separate files.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/contlup-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/contlup-servicos.webp", caption: { pt: "Áreas de atuação", en: "Practice areas" } },
        { src: "assets/projects/contlup-comecar.webp", caption: { pt: "Do MEI à empresa em crescimento", en: "From sole traders to growing companies" } },
        { src: "assets/projects/contlup-duvidas.webp", caption: { pt: "Perguntas frequentes", en: "FAQ" } },
        { src: "assets/projects/contlup-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "chapula",
    name: "Barbearia Chapula",
    summary: {
      pt: "Site próprio para a Barbearia Chapula, de Curitiba, pensado como alternativa ao AppBarber: serviços, planos, avaliações e agendamento completo.",
      en: "A custom website for Barbearia Chapula in Curitiba, designed as an alternative to AppBarber: services, plans, reviews and a full booking flow.",
    },
    tagline: { pt: "Site próprio com agendamento online", en: "Custom website with online booking" },
    status: "prototype",
    context: { pt: "Protótipo comercial", en: "Commercial prototype" },
    description: {
      pt: "Demo de site próprio para uma barbearia real de Curitiba, criada para ser apresentada ao proprietário como alternativa mais personalizada ao AppBarber — com serviços, planos, avaliações, localização e um fluxo completo de agendamento.",
      en: "A custom website demo for a real barbershop in Curitiba, built to be pitched to the owner as a more personal alternative to AppBarber — with services, plans, reviews, location and a complete booking flow.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Apresentação da barbearia com vídeo no topo",
        "Catálogo de serviços e preços",
        "Profissionais da equipe",
        "Planos mensais com comparação de economia",
        "Avaliações de clientes",
        "Galeria",
        "Horários de funcionamento com status em tempo real",
        "Localização com mapa e integração com WhatsApp",
        "Modo claro/escuro",
        "Agendamento completo: serviço, profissional, data e horário",
        "Área do cliente para remarcar ou cancelar (simulada)",
        "Interface responsiva",
      ],
      en: [
        "Barbershop introduction with a hero video",
        "Service catalog and prices",
        "Team professionals",
        "Monthly plans with savings comparison",
        "Customer reviews",
        "Gallery",
        "Opening hours with live open/closed status",
        "Location with map and WhatsApp integration",
        "Light/dark mode",
        "Complete booking: service, professional, date and time",
        "Customer area to reschedule or cancel (simulated)",
        "Responsive interface",
      ],
    },
    role: {
      pt: ["Idealização", "Design da interface", "Desenvolvimento front-end", "Fluxo de agendamento"],
      en: ["Concept", "Interface design", "Front-end development", "Booking flow"],
    },
    cover: "assets/covers/projects/chapula.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/barbearia-chapula-demo/", github: "https://github.com/lorenzo-or7/barbearia-chapula-demo" },
    placeholder: { url: "barbeariachapula", bg: "#0B0B0B", ink: "#F3EEE2", accent: "#E2BA24" },
    caseStudy: {
      problem: {
        pt: "A barbearia dependia do AppBarber, uma plataforma genérica de terceiros, para mostrar serviços e receber agendamentos. A identidade da marca ficava em segundo plano e as informações estavam espalhadas.",
        en: "The barbershop relied on AppBarber, a generic third-party platform, to show services and take bookings. The brand identity took a back seat and information was scattered.",
      },
      idea: {
        pt: "Criar uma alternativa mais personalizada ao AppBarber: um site próprio que fortalece a identidade digital da Barbearia Chapula e centraliza informações, serviços e agendamentos em um só lugar.",
        en: "Build a more personal alternative to AppBarber: a website of its own that strengthens Barbearia Chapula's digital identity and brings information, services and bookings together in one place.",
      },
      design: {
        pt: "A identidade visual partiu da própria marca da Chapula: preto (#000000) e dourado (#E2BA24). O estilo combina elementos clássicos de barbearia — tipografia condensada e serifada em itálico — com uma interface moderna e premium.",
        en: "The visual identity comes straight from Chapula's own brand: black (#000000) and gold (#E2BA24). The style blends classic barbershop elements — condensed type and an italic serif — with a modern, premium interface.",
      },
      challenges: {
        pt: ["Desenvolver uma experiência de agendamento convincente sem utilizar backend ou banco de dados."],
        en: ["Building a convincing booking experience without a backend or a database."],
      },
      solutions: {
        pt: [
          "Estruturei todo o fluxo em JavaScript, com etapas para serviço, profissional, data, horário, dados e confirmação.",
          "Usei localStorage para guardar o estado dos agendamentos e simular a área do cliente.",
          "A confirmação do agendamento é enviada pelo WhatsApp da barbearia.",
          "Manipulação do DOM, filtros, modais e um calendário próprio para as interações dinâmicas.",
        ],
        en: [
          "I built the whole flow in JavaScript, with steps for service, professional, date, time, details and confirmation.",
          "I used localStorage to keep booking state and simulate the customer area.",
          "The booking confirmation is sent through the barbershop's WhatsApp.",
          "DOM manipulation, filters, modals and a custom calendar power the dynamic interactions.",
        ],
      },
      learned: {
        pt: [
          "Responsividade em uma interface rica em conteúdo.",
          "JavaScript e manipulação de estados na interface.",
          "Experiência do usuário em fluxos de várias etapas.",
          "Criar um projeto pensado para atender uma necessidade comercial real.",
        ],
        en: [
          "Responsiveness in a content-rich interface.",
          "JavaScript and managing UI state.",
          "User experience in multi-step flows.",
          "Building a project designed around a real business need.",
        ],
      },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio durante todas as etapas — planejamento, criação do design, desenvolvimento, revisão de código e solução de problemas. As decisões, adaptações e a implementação final foram conduzidas por mim. Protótipo funcional, publicado como demonstração no GitHub Pages, com código aberto no GitHub.",
        en: "Personal project. I used several AI tools as support throughout every stage — planning, design, development, code review and problem solving. The decisions, adaptations and final implementation were led by me. A working prototype, published as a demo on GitHub Pages, with its code open on GitHub.",
      },
      screenshots: [
        { src: "assets/projects/chapula/cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/chapula/agendamento.webp", caption: { pt: "Agendamento em etapas com resumo e confirmação", en: "Step-by-step booking with summary and confirmation" } },
        { src: "assets/projects/chapula/planos.webp", caption: { pt: "Planos mensais com comparação de economia", en: "Monthly plans with savings comparison" } },
        { src: "assets/projects/chapula/avaliacoes.webp", caption: { pt: "Avaliações de clientes", en: "Customer reviews" } },
        { src: "assets/projects/chapula/localizacao.webp", caption: { pt: "Horários com status em tempo real e localização", en: "Opening hours with live status and location" } },
        { src: "assets/projects/chapula/minha-chapula.webp", caption: { pt: "Mobile — área do cliente (demo)", en: "Mobile — customer area (demo)" }, portrait: true },
      ],
    },
  },
  {
    id: "maca",
    name: "Maçã Padaria Artesanal",
    summary: {
      pt: "Proposta de site para a Maçã, padaria artesanal de Curitiba, mostrando como a identidade da marca poderia virar uma experiência digital com delivery, unidades e história.",
      en: "A website proposal for Maçã, an artisan bakery in Curitiba, showing how the brand's identity could become a digital experience with delivery, locations and story.",
    },
    tagline: { pt: "Padaria artesanal brasileira", en: "Brazilian artisan bakery" },
    status: "prototype",
    context: { pt: "Protótipo comercial", en: "Commercial prototype" },
    description: {
      pt: "Demo de site para uma padaria artesanal real de Curitiba, criada para ser apresentada ao proprietário e mostrar na prática como a identidade da Maçã poderia virar uma experiência digital moderna, responsiva e atrativa.",
      en: "A website demo for a real artisan bakery in Curitiba, built to be pitched to the owner and show in practice how Maçã's identity could become a modern, responsive and appealing digital experience.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Página inicial de destaque",
        "Apresentação dos produtos e da especialidade (sonhos)",
        "Cardápio com categorias e filtros",
        "Seção de favoritos da casa",
        "História da padaria",
        "Avaliações de clientes",
        "Unidades, serviços disponíveis e rotas no Google Maps",
        "Contato e redes sociais",
        "Navegação por âncoras, animações e microinterações",
        "Tema claro e escuro",
        "Layout responsivo com menu mobile",
      ],
      en: [
        "Standout home page",
        "Products and the house specialty (sonhos, Brazilian doughnuts)",
        "Menu with categories and filters",
        "House favorites section",
        "The bakery's story",
        "Customer reviews",
        "Locations, available services and Google Maps directions",
        "Contact and social links",
        "Anchor navigation, animations and micro-interactions",
        "Light and dark themes",
        "Responsive layout with mobile menu",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/maca.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/maca-padaria-demo/", github: "https://github.com/lorenzo-or7/maca-padaria-demo" },
    placeholder: { url: "macapadaria", bg: "#FEF9E5", ink: "#231A18", accent: "#ED1F29" },
    caseStudy: {
      problem: {
        pt: "A Maçã tem uma identidade forte e produtos muito fotogênicos, mas não havia um site próprio à altura da marca para apresentar cardápio, história e unidades em um só lugar.",
        en: "Maçã has a strong identity and very photogenic products, but no website of its own that lived up to the brand, bringing menu, story and locations together in one place.",
      },
      idea: {
        pt: "Oferecer ao estabelecimento uma proposta de site que mostrasse, na prática, como a identidade da Maçã poderia ser aplicada em uma experiência digital moderna, responsiva e atrativa.",
        en: "Offer the business a website proposal showing, in practice, how Maçã's identity could be applied to a modern, responsive and appealing digital experience.",
      },
      design: {
        pt: "A identidade partiu das próprias cores da Maçã: creme (#FEF9E5), vermelho (#ED1F29) e rosa (#FFB4B1). O objetivo foi transmitir uma sensação artesanal, acolhedora e moderna, combinando fotografias gastronômicas, tipografia marcante, formas orgânicas e elementos inspirados na marca.",
        en: "The identity builds on Maçã's own colors: cream (#FEF9E5), red (#ED1F29) and pink (#FFB4B1). The goal was to feel artisanal, warm and modern, combining food photography, bold typography, organic shapes and elements inspired by the brand.",
      },
      challenges: {
        pt: ["Criar um site visualmente moderno sem perder a identidade artesanal e característica da Maçã."],
        en: ["Building a visually modern website without losing Maçã's distinctive artisanal identity."],
      },
      solutions: {
        pt: [
          "Trabalhei a composição das seções e a hierarquia tipográfica até equilibrar modernidade e personalidade de padaria.",
          "Usei a paleta da marca e fotografias gastronômicas como base de todas as seções.",
          "Adicionei microinterações e animações para dar vida à navegação sem pesar a página.",
          "JavaScript puro para menu mobile, filtros do cardápio, animações e troca de tema.",
        ],
        en: [
          "I worked on section composition and typographic hierarchy until modern design and bakery personality were in balance.",
          "I used the brand palette and food photography as the foundation of every section.",
          "I added micro-interactions and animations to bring the page to life without weighing it down.",
          "Vanilla JavaScript for the mobile menu, menu filters, animations and theme switching.",
        ],
      },
      learned: {
        pt: [
          "Design responsivo e organização visual.",
          "Experiência do usuário em interfaces para negócios reais.",
          "Pensar além do código: como o site pode representar a identidade e os objetivos de uma empresa.",
        ],
        en: [
          "Responsive design and visual organization.",
          "User experience in interfaces for real businesses.",
          "Thinking beyond code: how a website can represent a company's identity and goals.",
        ],
      },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — brainstorming, organização de ideias, desenvolvimento e revisão de código, criação e edição de elementos visuais e refinamento do design. As decisões sobre estrutura, identidade visual, funcionalidades e resultado final foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages: algumas funcionalidades são demonstrativas e poderiam ser integradas a sistemas reais em uma versão final.",
        en: "Personal project. I used several AI tools as support — brainstorming, organizing ideas, writing and reviewing code, creating and editing visual elements and refining the design. Decisions on structure, visual identity, features and the final result were defined and refined by me. A working demo, published on GitHub Pages: some features are illustrative and could be connected to real systems in a final version.",
      },
      screenshots: [
        { src: "assets/projects/maca/cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/maca/sonhos.webp", caption: { pt: "A especialidade: sonhos", en: "The specialty: sonhos" } },
        { src: "assets/projects/maca/favoritos.webp", caption: { pt: "Favoritos da casa com filtros (tema claro)", en: "House favorites with filters (light theme)" } },
        { src: "assets/projects/maca/cada-hora.webp", caption: { pt: "Momentos do dia", en: "Moments of the day" } },
        { src: "assets/projects/maca/historia.webp", caption: { pt: "Nossa história", en: "Our story" } },
        { src: "assets/projects/maca/delivery.webp", caption: { pt: "Delivery", en: "Delivery" } },
        { src: "assets/projects/maca/unidades.webp", caption: { pt: "Unidades e serviços", en: "Locations and services" } },
      ],
    },
  },
  {
    id: "theclub",
    name: "The Club Barbearia",
    summary: {
      pt: "Site para uma barbearia de Curitiba com agendamento online em etapas, área do cliente e planos de assinatura.",
      en: "A website for a barbershop in Curitiba with step-by-step online booking, a customer area and membership plans.",
    },
    tagline: { pt: "Barbearia, estética e bem-estar masculino", en: "Barbershop, grooming & men's wellness" },
    status: "discontinued",
    context: { pt: "Projeto pessoal · proposta para uma barbearia real de Curitiba · descontinuado", en: "Personal project · proposal for a real barbershop in Curitiba · discontinued" },
    description: {
      pt: "Demo de site para uma barbearia real de Curitiba, com agendamento online em etapas, área do cliente e planos de assinatura, pensada para transmitir a experiência premium da marca.",
      en: "A website demo for a real barbershop in Curitiba, with step-by-step online booking, a customer area and membership plans, designed to convey the brand's premium experience.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Hero com vídeo em tela cheia",
        "Menu de serviços por categoria (cabelo, barba, detalhes e bem-estar)",
        "Planos de assinatura com filtro pelo que entra no plano",
        "Seção de inclusão e acessibilidade",
        "Equipe, avaliações e galeria com lightbox",
        "Agendamento em 4 etapas: serviço, profissional, data e confirmação",
        "Área \"Meus agendamentos\"",
        "Localização com mapa e WhatsApp",
        "Layout responsivo",
      ],
      en: [
        "Full-screen video hero",
        "Service menu by category (hair, beard, details and wellness)",
        "Membership plans filtered by what each plan includes",
        "Inclusion and accessibility section",
        "Team, reviews and gallery with lightbox",
        "4-step booking: service, barber, date and confirmation",
        "\"My bookings\" customer area",
        "Location with map and WhatsApp",
        "Responsive layout",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/theclub.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/theclub-demo/", github: "https://github.com/lorenzo-or7/theclub-demo" },
    placeholder: { url: "theclub", bg: "#070909", ink: "#F3F5F4", accent: "#00D9CC" },
    caseStudy: {
      problem: { pt: "A barbearia tem uma experiência premium no salão, mas a presença digital não mostrava isso, e o agendamento dependia de canais externos.", en: "The barbershop offers a premium in-store experience, but its online presence didn't show it, and booking relied on external channels." },
      idea: { pt: "Criar um site que fosse a vitrine da marca e, ao mesmo tempo, resolvesse o agendamento de ponta a ponta dentro dele.", en: "Build a website that works as the brand's showcase while handling booking end to end on the site itself." },
      design: { pt: "Preto profundo com o ciano (#00D9CC) da marca como destaque, tipografia condensada em caixa alta (Bebas Neue) combinada com uma serifa italiana, e vídeos reais do salão.", en: "Deep black with the brand's cyan (#00D9CC) as accent, condensed uppercase type (Bebas Neue) paired with an Italian serif, and real footage from the shop." },
      challenges: { pt: [
          "Fazer um fluxo de agendamento completo que fosse rápido no celular.",
        ], en: [
          "Building a complete booking flow that feels fast on mobile.",
        ] },
      solutions: { pt: [
          "Agendamento em 4 etapas curtas, com resumo e confirmação no final.",
          "Área \"Meus agendamentos\" salva no navegador para simular a experiência real.",
          "Vídeos com pôster e reprodução pausável para não pesar a navegação.",
        ], en: [
          "Booking split into 4 short steps, with a summary and confirmation at the end.",
          "A \"My bookings\" area saved in the browser to simulate the real experience.",
          "Videos with posters and pausable playback to keep browsing light.",
        ] },
      learned: { pt: [
          "Fluxos em várias etapas e gerenciamento de estado com JavaScript.",
          "Uso de vídeo na web sem prejudicar o desempenho.",
          "Acessibilidade e comunicação inclusiva.",
        ], en: [
          "Multi-step flows and state management with JavaScript.",
          "Using video on the web without hurting performance.",
          "Accessibility and inclusive communication.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/theclub-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/theclub-servicos.webp", caption: { pt: "Menu de serviços por categoria", en: "Service menu by category" } },
        { src: "assets/projects/theclub-assinatura.webp", caption: { pt: "Planos de assinatura", en: "Membership plans" } },
        { src: "assets/projects/theclub-inclusao.webp", caption: { pt: "Um espaço feito para receber bem", en: "A space built to welcome everyone" } },
        { src: "assets/projects/theclub-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "face-doctor",
    name: "Face Doctor Água Verde",
    summary: {
      pt: "Site para uma clínica de estética de Curitiba, com visual editorial, comparador antes/depois e agendamento de avaliação em quatro etapas.",
      en: "A website for an aesthetic clinic in Curitiba, with an editorial look, a before/after comparison and four-step appointment booking.",
    },
    tagline: { pt: "Clínica de estética", en: "Aesthetic clinic" },
    status: "discontinued",
    context: { pt: "Projeto pessoal · proposta para uma clínica real de Curitiba · descontinuado", en: "Personal project · proposal for a real clinic in Curitiba · discontinued" },
    description: {
      pt: "Demo de site para uma clínica de estética real de Curitiba, com visual editorial, comparador antes/depois e agendamento de avaliação em 4 etapas com área do paciente.",
      en: "A website demo for a real aesthetic clinic in Curitiba, with an editorial look, a before/after comparison and 4-step appointment booking with a patient area.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Navegação lateral no desktop e menu compacto no celular",
        "Modo claro e escuro com o ícone de espelho",
        "Tecnologias e lista editorial de tratamentos",
        "Comparador antes/depois de arrastar",
        "Carrossel de avaliações e diferenciais",
        "Agendamento de avaliação em 4 etapas",
        "Área \"Meu perfil\" com próximos horários, histórico, remarcação e cancelamento",
        "Mapa e WhatsApp",
        "Layout responsivo",
      ],
      en: [
        "Side navigation on desktop and compact menu on mobile",
        "Light and dark mode with a mirror icon",
        "Technologies and an editorial treatments list",
        "Drag-to-compare before/after slider",
        "Reviews carousel and highlights",
        "4-step appointment booking",
        "\"My profile\" area with upcoming visits, history, rescheduling and cancellation",
        "Map and WhatsApp",
        "Responsive layout",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/face-doctor.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/face-doctor-demo/", github: "https://github.com/lorenzo-or7/face-doctor-demo" },
    placeholder: { url: "facedoctor", bg: "#FAF7F3", ink: "#221D1C", accent: "#AF555F", serif: true },
    caseStudy: {
      problem: { pt: "A clínica tem estrutura e tecnologias próprias, mas não havia um site que transmitisse esse cuidado e facilitasse o primeiro contato.", en: "The clinic has its own facilities and technology, but no website that conveyed that care and made the first contact easy." },
      idea: { pt: "Uma proposta de site editorial que explicasse tecnologias e tratamentos com clareza e levasse a paciente até o agendamento da avaliação.", en: "An editorial website proposal that explains technologies and treatments clearly and guides the patient to booking an assessment." },
      design: { pt: "Rosé (#AF555F), creme e champanhe, com Cormorant Garamond nos títulos e Manrope no texto, em um layout com bastante respiro.", en: "Rosé (#AF555F), cream and champagne, with Cormorant Garamond for headings and Manrope for body text, in an airy layout." },
      challenges: { pt: [
          "Falar de procedimentos estéticos com elegância e sem promessas exageradas.",
        ], en: [
          "Presenting aesthetic procedures elegantly, without overpromising.",
        ] },
      solutions: { pt: [
          "Textos focados em naturalidade e avaliação individual.",
          "Comparador antes/depois com aviso de que cada organismo responde de forma única.",
          "Agendamento e área do paciente simulados no navegador.",
        ], en: [
          "Copy focused on natural results and individual assessment.",
          "Before/after slider with a note that every body responds differently.",
          "Booking and patient area simulated in the browser.",
        ] },
      learned: { pt: [
          "Design editorial e hierarquia tipográfica.",
          "Fluxos de agendamento com estado salvo no navegador.",
          "Comunicação responsável na área da saúde.",
        ], en: [
          "Editorial design and typographic hierarchy.",
          "Booking flows with state saved in the browser.",
          "Responsible communication in healthcare.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/face-doctor-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/face-doctor-tecnologias.webp", caption: { pt: "Tecnologias e tratamentos", en: "Technologies and treatments" } },
        { src: "assets/projects/face-doctor-resultados.webp", caption: { pt: "Comparador antes/depois", en: "Before/after comparison" } },
        { src: "assets/projects/face-doctor-avaliacoes.webp", caption: { pt: "Avaliações de pacientes", en: "Patient reviews" } },
        { src: "assets/projects/face-doctor-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "auto-supremo",
    name: "Auto Supremo",
    summary: {
      pt: "Proposta para uma estética automotiva de Curitiba, com abertura interativa, fichas de serviço, comparador antes/depois e agendamento pelo WhatsApp.",
      en: "A proposal for a car detailing studio in Curitiba, with an interactive intro, service cards, a before/after comparison and WhatsApp booking.",
    },
    tagline: { pt: "Estética automotiva", en: "Car detailing" },
    status: "discontinued",
    context: { pt: "Projeto pessoal · proposta para uma estética automotiva real de Curitiba · descontinuado", en: "Personal project · proposal for a real car detailing shop in Curitiba · discontinued" },
    description: {
      pt: "Demo de site para uma estética automotiva real de Curitiba, com experiência interativa de abertura, fichas de serviço, comparador antes/depois e agendamento pelo WhatsApp.",
      en: "A website demo for a real car detailing shop in Curitiba, with an interactive intro, service spec cards, a before/after comparison and WhatsApp booking.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Experiência interativa \"Supremo Ignition\" com botão start/stop",
        "Serviços com ficha técnica de cada cuidado",
        "Comparador antes/depois com janela de arrastar",
        "Vídeos do processo no box",
        "Como funciona em 4 passos",
        "Galeria e avaliações de clientes",
        "Tema claro/escuro no botão de faróis",
        "Localização com mapa e agendamento pelo WhatsApp",
        "Layout responsivo",
      ],
      en: [
        "Interactive \"Supremo Ignition\" intro with a start/stop button",
        "Services with a spec card for each treatment",
        "Before/after comparison with a draggable window",
        "Videos of the process in the shop",
        "How it works in 4 steps",
        "Gallery and customer reviews",
        "Light/dark theme on a headlights switch",
        "Location with map and WhatsApp booking",
        "Responsive layout",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/auto-supremo.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/auto-supremo-demo/", github: "https://github.com/lorenzo-or7/auto-supremo-demo" },
    placeholder: { url: "autosupremo", bg: "#000000", ink: "#ECF1E9", accent: "#62EA4D" },
    caseStudy: {
      problem: { pt: "O serviço é visual, mas a divulgação dependia só das redes sociais, sem um lugar que reunisse serviços, resultados e contato.", en: "The service is visual, but promotion relied only on social media, with no single place for services, results and contact." },
      idea: { pt: "Um site que mostrasse o resultado acima de tudo, com interações que fazem o cliente \"ver\" o carro antes e depois.", en: "A website that puts results first, with interactions that let customers \"see\" the car before and after." },
      design: { pt: "Preto (#000000) e verde neon (#62EA4D) da marca, Archivo em larguras variadas e IBM Plex Mono nos detalhes técnicos, com estética de painel automotivo.", en: "The brand's black (#000000) and neon green (#62EA4D), Archivo in variable widths and IBM Plex Mono for technical details, with a dashboard-like aesthetic." },
      challenges: { pt: [
          "Criar interações marcantes sem deixar o site pesado.",
        ], en: [
          "Creating striking interactions without making the site heavy.",
        ] },
      solutions: { pt: [
          "Imagens em WebP e vídeos com pôster.",
          "Comparador antes/depois com janela que o usuário arrasta sobre o carro.",
          "Abertura interativa acionada pelo próprio usuário, com botão start/stop.",
        ], en: [
          "WebP images and videos with posters.",
          "Before/after comparison with a window the user drags over the car.",
          "An interactive intro triggered by the user, with a start/stop button.",
        ] },
      learned: { pt: [
          "Interações com JavaScript puro (arrastar, start/stop, troca de tema).",
          "Otimização de mídia para a web.",
          "Direção de arte para um nicho específico.",
        ], en: [
          "Vanilla JavaScript interactions (drag, start/stop, theme switching).",
          "Media optimization for the web.",
          "Art direction for a specific niche.",
        ] },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — planejamento, criação e revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages.",
        en: "Personal project. I used several AI tools as support — planning, writing and reviewing code, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/auto-supremo-cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/auto-supremo-servicos.webp", caption: { pt: "Serviços com ficha técnica", en: "Services with spec cards" } },
        { src: "assets/projects/auto-supremo-resultados.webp", caption: { pt: "Antes/depois com janela de arrastar", en: "Before/after with a draggable window" } },
        { src: "assets/projects/auto-supremo-galeria.webp", caption: { pt: "Galeria do box", en: "Shop gallery" } },
        { src: "assets/projects/auto-supremo-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "iguana",
    name: "Iguana Empório Pet",
    summary: {
      pt: "Proposta de presença digital para um pet shop de Curitiba, reunindo loja, banho e tosa, delivery, cashback e unidades.",
      en: "A digital presence proposal for a pet shop in Curitiba, bringing together store, bath and grooming, delivery, cashback and locations.",
    },
    tagline: { pt: "Pet shop, banho & tosa", en: "Pet shop, bath & grooming" },
    status: "discontinued",
    context: { pt: "Projeto pessoal · proposta para um pet shop real de Curitiba · descontinuado", en: "Personal project · proposal for a real pet shop in Curitiba · discontinued" },
    description: {
      pt: "Demo de site próprio para um pet shop real de Curitiba, criada para ser apresentada ao estabelecimento e mostrar como a marca poderia ter uma presença digital mais moderna e profissional.",
      en: "A custom website demo for a real pet shop in Curitiba, built to be pitched to the business and show how the brand could have a more modern, professional digital presence.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Página inicial com os diferenciais da loja",
        "Principais produtos e categorias",
        "Área dedicada ao banho e tosa",
        "Horários de delivery e programa de cashback",
        "Avaliações de clientes",
        "Sobre a empresa e localização das lojas",
        "Integração com WhatsApp, Instagram e mapa",
        "Tema claro e escuro, com animações suaves",
        "Interface responsiva",
      ],
      en: [
        "Home page with the store's highlights",
        "Main products and categories",
        "Dedicated bath & grooming section",
        "Delivery times and cashback program",
        "Customer reviews",
        "About the company and store locations",
        "WhatsApp, Instagram and map integration",
        "Light and dark themes, with subtle animations",
        "Responsive interface",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    cover: "assets/covers/projects/iguana.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/iguana-emporio-pet-demo/", github: "https://github.com/lorenzo-or7/iguana-emporio-pet-demo" },
    placeholder: { url: "iguanapet", bg: "#FAF6EE", ink: "#1D3524", accent: "#5AAE32" },
    caseStudy: {
      problem: {
        pt: "O pet shop não tinha um site próprio que reunisse produtos, serviços, lojas e contatos em um só lugar, com a cara da marca.",
        en: "The pet shop had no website of its own bringing products, services, stores and contacts together in one place, with the brand's personality.",
      },
      idea: {
        pt: "Desenvolver uma demonstração visual para oferecer ao estabelecimento, mostrando o potencial de um site próprio para a marca.",
        en: "Build a visual demo to offer to the business, showing the potential of a website of its own for the brand.",
      },
      design: {
        pt: "A identidade partiu das próprias cores da Iguana Empório Pet: verde como cor principal e laranja como destaque. O estilo foi pensado para ser amigável, moderno e acolhedor, ligado ao universo pet — fontes, fotografias, formas arredondadas e elementos gráficos que deixam o site profissional sem perder a personalidade descontraída da marca.",
        en: "The identity builds on Iguana Empório Pet's own colors: green as the main color and orange as the accent. The style aims to be friendly, modern and welcoming, tied to the pet world — typefaces, photography, rounded shapes and graphic elements that keep the site professional without losing the brand's relaxed personality.",
      },
      challenges: {
        pt: [
          "Criar um design com bastante personalidade, coerente com a identidade já existente da empresa, sem parecer um template genérico de pet shop.",
          "Manter uma boa experiência tanto no desktop quanto no celular.",
        ],
        en: [
          "Creating a design with real personality, consistent with the company's existing identity, without looking like a generic pet shop template.",
          "Keeping a good experience on both desktop and mobile.",
        ],
      },
      solutions: {
        pt: [
          "Analisei a identidade visual da Iguana, os materiais das redes sociais e as imagens das lojas.",
          "Adaptei o layout para usar essas características de forma consistente em todas as seções.",
          "Trabalhei bastante a responsividade, testando a experiência em diferentes tamanhos de tela.",
          "HTML para a estrutura, CSS para a identidade e a responsividade, JavaScript para interações, animações, tema e menus.",
        ],
        en: [
          "I studied Iguana's visual identity, its social media materials and photos of the stores.",
          "I adapted the layout to apply those traits consistently across every section.",
          "I put a lot of work into responsiveness, testing the experience across screen sizes.",
          "HTML for structure, CSS for identity and responsiveness, JavaScript for interactions, animations, theming and menus.",
        ],
      },
      learned: {
        pt: [
          "Criar interfaces voltadas para negócios reais.",
          "Transformar a identidade de uma empresa física em uma experiência digital coerente.",
          "Responsividade, organização visual e experiência do usuário.",
          "JavaScript para pequenas interações.",
        ],
        en: [
          "Designing interfaces for real businesses.",
          "Turning a physical business's identity into a coherent digital experience.",
          "Responsiveness, visual organization and user experience.",
          "JavaScript for small interactions.",
        ],
      },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — geração de ideias, planejamento da estrutura, revisão de código, sugestões de interface e solução de problemas. As decisões sobre identidade visual, estrutura, conteúdo e funcionamento foram definidas e ajustadas por mim. Demo funcional, publicada no GitHub Pages: não possui backend, banco de dados nem sistemas reais de compra e agendamento.",
        en: "Personal project. I used several AI tools as support — brainstorming, planning the structure, code review, interface suggestions and problem solving. Decisions on visual identity, structure, content and behavior were defined and refined by me. A working demo, published on GitHub Pages: it has no backend, database or real purchase and booking systems.",
      },
      screenshots: [
        { src: "assets/projects/iguana/cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/iguana/loja.webp", caption: { pt: "Produtos e categorias (tema escuro)", en: "Products and categories (dark theme)" } },
        { src: "assets/projects/iguana/banho-e-tosa.webp", caption: { pt: "Banho & tosa", en: "Bath & grooming" } },
        { src: "assets/projects/iguana/delivery.webp", caption: { pt: "Horários de delivery", en: "Delivery times" } },
        { src: "assets/projects/iguana/cashback.webp", caption: { pt: "Programa de cashback", en: "Cashback program" } },
        { src: "assets/projects/iguana/lojas.webp", caption: { pt: "Localização das lojas", en: "Store locations" } },
      ],
    },
  },
  {
    id: "casa-di-lucente",
    name: "Casa di Lucente",
    summary: {
      pt: "Proposta para uma gelateria, cafeteria e confeitaria de Curitiba ir além do Instagram e do Linktree, com cardápio, avaliações e um painel de gestão simulado.",
      en: "A proposal to take a gelato shop, café and patisserie in Curitiba beyond Instagram and Linktree, with menu, reviews and a simulated management panel.",
    },
    tagline: { pt: "Gelato, café e confeitaria", en: "Gelato, coffee & patisserie" },
    status: "discontinued",
    context: { pt: "Projeto pessoal · proposta para um estabelecimento real de Curitiba · descontinuado", en: "Personal project · proposal for a real business in Curitiba · discontinued" },
    description: {
      pt: "Demo de site próprio para uma gelateria, cafeteria e confeitaria real de Curitiba, criada como proposta comercial para mostrar como a marca poderia ir além do Instagram e do Linktree, valorizando os produtos e facilitando o contato com os clientes.",
      en: "A custom website demo for a real gelato shop, café and patisserie in Curitiba, built as a business proposal to show how the brand could go beyond Instagram and Linktree, showcasing its products and making it easier for customers to get in touch.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Apresentação da marca e destaque para a torta de gelato",
        "Cardápio visual com filtros por categoria",
        "Produtos disponíveis e esgotados do dia",
        "Galeria de fotos e vídeos em loop automático",
        "Avaliações de clientes",
        "Localização e horários",
        "Integração com WhatsApp e QR Code demonstrativo",
        "Tema claro e escuro, com animações",
        "Simulação de painel de gerenciamento do cardápio",
        "Interface responsiva",
      ],
      en: [
        "Brand introduction featuring the gelato cake",
        "Visual menu with category filters",
        "Daily available and sold-out products",
        "Photo and auto-looping video gallery",
        "Customer reviews",
        "Location and opening hours",
        "WhatsApp integration and a demo QR code",
        "Light and dark themes, with animations",
        "Simulated menu management dashboard",
        "Responsive interface",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end", "Textos"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development", "Copywriting"],
    },
    cover: "assets/covers/projects/casa-di-lucente.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/casa-di-lucente-demo/", github: "https://github.com/lorenzo-or7/casa-di-lucente-demo" },
    placeholder: { url: "casadilucente", bg: "#5B1422", ink: "#F4E9D7", accent: "#F4E9D7", serif: true },
    caseStudy: {
      problem: {
        pt: "A presença digital da Casa di Lucente se resumia ao Instagram e a um Linktree. Não havia um lugar próprio que valorizasse os produtos, contasse a história da marca e facilitasse o contato com os clientes.",
        en: "Casa di Lucente's digital presence was limited to Instagram and a Linktree. There was no place of its own to showcase the products, tell the brand's story and make it easy for customers to get in touch.",
      },
      idea: {
        pt: "Oferecer uma presença digital mais completa: um site próprio que mostre como a marca poderia ser apresentada, com cardápio, disponibilidade do dia e contato direto — e que funcione como proposta concreta para os responsáveis pelo estabelecimento.",
        en: "Offer a fuller digital presence: a website of its own showing how the brand could be presented, with a menu, daily availability and direct contact — working as a concrete proposal for the owners.",
      },
      design: {
        pt: "O design partiu da própria identidade da Casa di Lucente, com bordô (#5B1422) e creme (#F4E9D7). A proposta foi uma estética elegante, artesanal e moderna, inspirada em gelaterias e cafeterias premium: fotografias grandes, vídeos, tipografia sofisticada, bastante espaço visual e elementos derivados da marca.",
        en: "The design builds on Casa di Lucente's own identity, with burgundy (#5B1422) and cream (#F4E9D7). The goal was an elegant, artisanal and modern look inspired by premium gelato shops and cafés: large photography, video, refined typography, generous whitespace and elements derived from the brand.",
      },
      challenges: {
        pt: ["Criar uma experiência que não parecesse apenas um cardápio online, mas que realmente transmitisse a identidade e a experiência da Casa di Lucente."],
        en: ["Creating an experience that didn't feel like just an online menu, but truly conveyed Casa di Lucente's identity and atmosphere."],
      },
      solutions: {
        pt: [
          "Storytelling e seções editoriais, como a torta de gelato apresentada camada por camada.",
          "Vídeos, animações e troca de tema para dar ritmo à navegação.",
          "Simulações de funcionalidades reais: disponibilidade dos produtos e um painel de gerenciamento do cardápio.",
          "Tudo em um único arquivo HTML: CSS para identidade, responsividade, temas e animações; JavaScript para tema, filtros, modais e demais interações.",
        ],
        en: [
          "Storytelling and editorial sections, such as the gelato cake presented layer by layer.",
          "Video, animation and theme switching to give the page rhythm.",
          "Simulations of real features: product availability and a menu management dashboard.",
          "Everything in a single HTML file: CSS for identity, responsiveness, themes and animation; JavaScript for theming, filters, modals and other interactions.",
        ],
      },
      learned: {
        pt: [
          "Pensar um site não apenas como código, mas como solução para um negócio real.",
          "Transformar necessidades de um estabelecimento em funcionalidades digitais.",
          "Responsividade e organização de interfaces.",
          "JavaScript, identidade visual e experiência do usuário.",
        ],
        en: [
          "Thinking of a website not just as code, but as a solution for a real business.",
          "Turning a business's needs into digital features.",
          "Responsiveness and interface organization.",
          "JavaScript, visual identity and user experience.",
        ],
      },
      process: {
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — pesquisa de ideias, planejamento da estrutura, criação e revisão de código, elaboração de textos, prompts para conteúdos visuais e resolução de problemas. As decisões sobre identidade visual, funcionalidades, organização do site e direção do projeto foram definidas por mim. Demo funcional, publicada no GitHub Pages. O projeto foi descontinuado e não recebe mais atualizações, mas o site continua no ar como registro do trabalho.",
        en: "Personal project. I used several AI tools as support — researching ideas, planning the structure, writing and reviewing code, drafting copy, creating prompts for visual content and solving problems. Decisions on visual identity, features, site organization and project direction were mine. A working demo, published on GitHub Pages. The project has been discontinued and is no longer updated, but the site remains online as a record of the work.",
      },
      screenshots: [
        { src: "assets/projects/casa-di-lucente/cover.webp", caption: { pt: "Página inicial", en: "Home page" } },
        { src: "assets/projects/casa-di-lucente/torta.webp", caption: { pt: "A torta de gelato, camada por camada", en: "The gelato cake, layer by layer" } },
        { src: "assets/projects/casa-di-lucente/cardapio.webp", caption: { pt: "Cardápio com filtros e disponibilidade do dia", en: "Menu with filters and daily availability" } },
        { src: "assets/projects/casa-di-lucente/avaliacoes.webp", caption: { pt: "Avaliações de clientes", en: "Customer reviews" } },
        { src: "assets/projects/casa-di-lucente/painel.webp", caption: { pt: "Painel de gerenciamento do cardápio (simulação)", en: "Menu management dashboard (simulation)" } },
      ],
    },
  },
  {
    id: "gordon-travel",
    name: "Gordon Travel",
    summary: {
      pt: "Site oficial da Gordon Travel, agência especializada em Orlando, com Orlando Explorer, Travel Guide, uma jornada interativa em seis etapas e atendimento pelo WhatsApp.",
      en: "The official website of Gordon Travel, an agency specialized in Orlando, with Orlando Explorer, a Travel Guide, a six-step interactive journey and WhatsApp support.",
    },
    kind: "commercial",
    tagline: { pt: "Agência de viagens especializada em Orlando", en: "Travel agency specialized in Orlando" },
    status: "live",
    context: { pt: "Projeto comercial · no ar em gordontravel.com.br", en: "Commercial project · live at gordontravel.com.br" },
    description: {
      pt: "Website oficial da Gordon Travel com apresentação da agência, Orlando Explorer, serviços, produtos de parceiros, história, Travel Guide, Journey interativo e contato pelo WhatsApp.",
      en: "Official Gordon Travel website featuring the agency, Orlando Explorer, services, partner products, brand story, Travel Guide, an interactive Journey flow and WhatsApp contact."
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: { pt: ["Orlando Explorer", "Gordon Journey em seis etapas", "Travel Guide", "Cotação USD/BRL", "Contato pelo WhatsApp", "Experiência responsiva"], en: ["Orlando Explorer", "Six-step Gordon Journey", "Travel Guide", "USD/BRL reference rate", "WhatsApp contact", "Responsive experience"] },
    role: { pt: ["Planejamento", "Direção visual", "Desenvolvimento", "UX/UI", "Publicação"], en: ["Planning", "Visual direction", "Development", "UX/UI", "Publishing"] },
    cover: "assets/covers/projects/gordon-travel.webp",
    video: "",
    links: { demo: "https://gordontravel.com.br/", github: "" },
    placeholder: { url: "gordon-travel", bg: "#0E1A31", ink: "#F4EBDD", accent: "#C69B5D", serif: true },
    caseStudy: {}
  },
  {
    id: "rare-encounter",
    name: "Rare Encounter",
    summary: {
      pt: "Quiz que cruza respostas de personalidade e afinidade para revelar três Pokémon compatíveis com você, com narrativa visual, motion e versões em português, inglês e espanhol.",
      en: "A quiz that combines personality and affinity answers to reveal three Pokémon that match you, with visual storytelling, motion and Portuguese, English and Spanish versions.",
    },
    kind: "authorial",
    featured: 4,
    tagline: { pt: "Quiz de afinidade Pokémon", en: "Pokémon affinity quiz" },
    status: "live",
    context: { pt: "Projeto autoral · no ar", en: "Original project · live" },
    description: {
      pt: "Experiência interativa que cruza respostas de personalidade e afinidade para revelar três Pokémon compatíveis, com narrativa visual, motion e suporte multilíngue.",
      en: "An interactive experience that combines personality and affinity answers to reveal three compatible Pokémon, with visual storytelling, motion and multilingual support."
    },
    technologies: ["React", "TypeScript", "CSS", "JavaScript"],
    features: { pt: ["Quiz de personalidade", "Três resultados compatíveis", "PT/EN/ES", "Experiência responsiva", "Persistência local", "Motion e transições"], en: ["Personality quiz", "Three compatible results", "PT/EN/ES", "Responsive experience", "Local persistence", "Motion and transitions"] },
    role: { pt: ["Idealização", "Algoritmo", "Direção visual", "UX/UI", "Desenvolvimento"], en: ["Concept", "Algorithm", "Visual direction", "UX/UI", "Development"] },
    cover: "assets/covers/projects/rare-encounter.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/rare-encounter/", github: "https://github.com/lorenzo-or7/rare-encounter" },
    placeholder: { url: "rare-encounter", bg: "#080611", ink: "#F4F0FF", accent: "#8A5CFF", serif: false },
    caseStudy: {
      idea: {
        pt: "Um quiz que não premia o Pokémon mais popular: as respostas são comparadas com cada espécie elegível por pontuação ponderada e normalizada, e cada resultado vem com a explicação do porquê.",
        en: "A quiz that doesn't reward the most popular Pokémon: answers are compared with every eligible species using normalized, weighted scores, and each result comes with an explanation of why.",
      },
      challenges: {
        pt: [
          "Deixar o resultado justo, sem bônus de popularidade.",
          "Manter a experiência leve e clara em três idiomas.",
        ],
        en: [
          "Keeping results fair, with no popularity bonus.",
          "Keeping the experience light and clear in three languages.",
        ],
      },
      process: {
        pt: "Projeto autoral, desenvolvido em fases com aprovação a cada etapa: fundação, identidade visual, quiz, catálogo, motor de compatibilidade e resultados.",
        en: "An original project built in phases, each one approved before the next: foundation, visual identity, quiz, catalog, matching engine and results.",
      },
    }
  },
  {
    id: "rb-carnes",
    name: "RB Carnes",
    summary: {
      pt: "Site institucional para a distribuidora RB Carnes, com catálogo editorial de cortes, soluções para Food Service, história da empresa e contato comercial.",
      en: "A corporate website for RB Carnes, a meat distributor, with an editorial cuts catalog, Food Service solutions, company history and sales contact.",
    },
    tagline: { pt: "Distribuidora de carnes · experiência premium", en: "Meat distributor · premium experience" },
    status: "prototype",
    context: { pt: "Protótipo comercial", en: "Commercial prototype" },
    description: { pt: "Protótipo premium para a RB Carnes, com apresentação institucional, catálogo de cortes, soluções para Food Service, história da empresa e contato comercial.", en: "Premium prototype for RB Carnes, with institutional presentation, meat catalog, Food Service solutions, company history and commercial contact." },
    technologies: ["React", "TypeScript", "CSS", "JavaScript"],
    features: { pt: ["Catálogo editorial", "Food Service", "Timeline da empresa", "Tema claro e escuro", "Contato comercial"], en: ["Editorial catalog", "Food Service", "Company timeline", "Light and dark themes", "Commercial contact"] },
    role: { pt: ["Planejamento", "Direção visual", "UX/UI", "Desenvolvimento"], en: ["Planning", "Visual direction", "UX/UI", "Development"] },
    cover: "assets/covers/projects/rb-carnes.webp", video: "",
    links: { demo: "https://lorenzo-or7.github.io/rb-carnes/", github: "" },
    placeholder: { url: "rb-carnes", bg: "#0B0A09", ink: "#F7F3ED", accent: "#CBA46A", serif: true }, caseStudy: {}
  },
  {
    id: "clinica-haes",
    name: "Clínica HAES",
    summary: {
      pt: "Site para clínica odontológica com tratamentos, equipe, avaliações, perguntas frequentes e pré-agendamento pelo WhatsApp.",
      en: "A dental clinic website with treatments, team, reviews, FAQ and WhatsApp pre-booking.",
    },
    tagline: { pt: "Odontologia premium", en: "Premium dentistry" },
    status: "prototype",
    context: { pt: "Protótipo comercial", en: "Commercial prototype" },
    description: { pt: "Protótipo de site premium para clínica odontológica, destacando profissionais, tratamentos, avaliações, localização e pré-agendamento pelo WhatsApp.", en: "Premium dental clinic website prototype highlighting professionals, treatments, reviews, location and WhatsApp pre-booking." },
    technologies: ["React", "TypeScript", "CSS", "JavaScript"],
    features: { pt: ["Catálogo de tratamentos", "Equipe", "Avaliações", "FAQ", "Localização", "Pré-agendamento"], en: ["Treatment catalog", "Team", "Reviews", "FAQ", "Location", "Pre-booking"] },
    role: { pt: ["Planejamento", "Direção visual", "UX/UI", "Desenvolvimento"], en: ["Planning", "Visual direction", "UX/UI", "Development"] },
    cover: "assets/covers/projects/clinica-haes.webp", video: "",
    links: { demo: "https://lorenzo-or7.github.io/clinica-haes/", github: "" },
    placeholder: { url: "clinica-haes", bg: "#15372E", ink: "#F6F0E7", accent: "#A8C2B3", serif: true }, caseStudy: {}
  },
  {
    id: "master-frio",
    name: "Master Frio Climatização",
    summary: {
      pt: "Site para uma empresa de climatização residencial e comercial, com hero em vídeo, serviços, galeria, tema claro e escuro e contato pelo WhatsApp.",
      en: "A website for a residential and commercial HVAC company, with a video hero, services, gallery, light and dark themes and WhatsApp contact.",
    },
    tagline: { pt: "Climatização residencial e comercial", en: "Residential and commercial HVAC" },
    status: "discontinued",
    context: { pt: "Projeto descontinuado", en: "Discontinued project" },
    description: { pt: "Demonstração de website para empresa de climatização, com serviços, galeria, experiência visual em temas claro/escuro e contato direto pelo WhatsApp.", en: "Website demo for an HVAC company, with services, gallery, light/dark visual experience and direct WhatsApp contact." },
    technologies: ["React", "TypeScript", "CSS", "JavaScript"],
    features: { pt: ["Hero em vídeo", "Serviços", "Galeria", "Tema claro e escuro", "WhatsApp"], en: ["Video hero", "Services", "Gallery", "Light and dark themes", "WhatsApp"] },
    role: { pt: ["Planejamento", "Direção visual", "UX/UI", "Desenvolvimento"], en: ["Planning", "Visual direction", "UX/UI", "Development"] },
    cover: "assets/covers/projects/master-frio.webp", video: "",
    links: { demo: "https://lorenzo-or7.github.io/master-frio-demo/", github: "" },
    placeholder: { url: "master-frio", bg: "#0B1220", ink: "#E7EDF8", accent: "#5BA8FF", serif: false }, caseStudy: {}
  },
  {
    id: "odontologia-peixoto",
    name: "Odontologia Peixoto",
    summary: {
      pt: "Site institucional para consultório odontológico, organizado para apresentar a clínica, os tratamentos e os canais de contato.",
      en: "A corporate website for a dental practice, organized to present the clinic, its treatments and contact channels.",
    },
    tagline: { pt: "Website para clínica odontológica", en: "Dental clinic website" },
    status: "discontinued",
    context: { pt: "Projeto descontinuado", en: "Discontinued project" },
    description: { pt: "Protótipo institucional para consultório odontológico, estruturado para apresentar a clínica, tratamentos, diferenciais e canais de contato.", en: "Institutional prototype for a dental practice, structured to present the clinic, treatments, differentiators and contact channels." },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: { pt: ["Apresentação institucional", "Tratamentos", "Responsividade", "Contato"], en: ["Institutional presentation", "Treatments", "Responsive layout", "Contact"] },
    role: { pt: ["Planejamento", "Design", "Desenvolvimento"], en: ["Planning", "Design", "Development"] },
    cover: "assets/covers/projects/odontologia-peixoto.webp", video: "",
    links: { demo: "https://lorenzo-or7.github.io/odontologia-peixoto/", github: "" },
    placeholder: { url: "odontologia-peixoto", bg: "#F3EFE7", ink: "#183348", accent: "#5F8BA7", serif: true }, caseStudy: {}
  },
  {
    id: "parana-implantes",
    name: "Paraná Implantes",
    summary: {
      pt: "Site para clínica focada em implantes e reabilitação oral, com procedimentos, estrutura da clínica e contato.",
      en: "A website for a clinic focused on dental implants and oral rehabilitation, with procedures, facilities and contact.",
    },
    tagline: { pt: "Implantodontia e reabilitação oral", en: "Implant dentistry and oral rehabilitation" },
    status: "discontinued",
    context: { pt: "Projeto descontinuado", en: "Discontinued project" },
    description: { pt: "Protótipo institucional para clínica odontológica focada em implantes, organizado para apresentar procedimentos, confiança, estrutura e contato.", en: "Institutional prototype for a dental clinic focused on implants, organized to present procedures, trust, facilities and contact." },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: { pt: ["Procedimentos", "Apresentação da clínica", "Responsividade", "Contato"], en: ["Procedures", "Clinic presentation", "Responsive layout", "Contact"] },
    role: { pt: ["Planejamento", "Design", "Desenvolvimento"], en: ["Planning", "Design", "Development"] },
    cover: "assets/covers/projects/parana-implantes.webp", video: "",
    links: { demo: "https://lorenzo-or7.github.io/parana-implantes/", github: "" },
    placeholder: { url: "parana-implantes", bg: "#0C2335", ink: "#F5F7F8", accent: "#60AFC6", serif: false }, caseStudy: {}
  },
  {
    id: "super-dog-cwb",
    name: "Super Dog CWB",
    summary: {
      pt: "Site para a Super Dog CWB, de alimentação pet, com identidade visual forte, apresentação dos produtos e caminhos diretos de contato.",
      en: "A website for Super Dog CWB, a pet food brand, with a bold visual identity, product presentation and direct contact paths.",
    },
    tagline: { pt: "Website para alimentação pet", en: "Pet food website" },
    status: "prototype",
    context: { pt: "Protótipo comercial", en: "Commercial prototype" },
    description: { pt: "Protótipo de website para a Super Dog CWB, com identidade visual marcante, apresentação da marca, produtos e caminhos de contato para clientes.", en: "Website prototype for Super Dog CWB, with a bold visual identity, brand presentation, products and customer contact paths." },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: { pt: ["Identidade de marca", "Produtos", "Responsividade", "Contato"], en: ["Brand identity", "Products", "Responsive layout", "Contact"] },
    role: { pt: ["Planejamento", "Design", "Desenvolvimento"], en: ["Planning", "Design", "Development"] },
    cover: "assets/covers/projects/super-dog-cwb.webp", video: "",
    links: { demo: "https://lorenzo-or7.github.io/super-dog-cwb/", github: "" },
    placeholder: { url: "super-dog-cwb", bg: "#F5C400", ink: "#111111", accent: "#ED1C24", serif: false }, caseStudy: {}
  },
  {
    id: "pulse",
    name: "Pulse",
    summary: {
      pt: "Site conceitual para uma marca de barras de proteína: a embalagem em 3D acompanha a rolagem, apresenta os seis sabores e termina num monte-seu-kit com carrinho demonstrativo.",
      en: "A concept site for a protein bar brand: a 3D pack follows your scroll, walks through six flavors and ends in a build-your-own pack with a demo cart.",
    },
    kind: "authorial",
    featured: 5,
    tagline: { pt: "Energia que vira experiência", en: "Energy in every bite" },
    status: "completed",
    context: { pt: "Projeto autoral · conceito independente", en: "Original project · independent concept" },
    description: {
      pt: "Experiência web para uma barra de proteína, com um único palco WebGL em que o produto viaja do hero ao catálogo. Projeto conceitual independente, feito para portfólio, sem vínculo oficial com a marca BOLD.",
      en: "A web experience for a protein bar, with a single WebGL stage where the product travels from the hero to the catalog. An independent concept made for my portfolio, with no official link to the BOLD brand.",
    },
    technologies: ["React", "TypeScript", "ThreeJS", "GSAP"],
    features: {
      pt: [
        "Palco 3D persistente: a embalagem acompanha a jornada da página",
        "Seis sabores com cores, imagens e informações de cada embalagem",
        "Atos guiados pela rolagem na seção Feel the Pulse",
        "Monte seu kit e carrinho demonstrativo (sem pagamento)",
        "PT-BR e EN, com a escolha salva no navegador",
      ],
      en: [
        "A persistent 3D stage: the pack follows the page journey",
        "Six flavors with each pack's colors, images and facts",
        "Scroll-driven acts in the Feel the Pulse section",
        "Build-your-own pack and a demo cart (no payment)",
        "PT-BR and EN, with the choice saved in the browser",
      ],
    },
    role: {
      pt: ["Conceito", "Direção visual", "3D e motion", "Desenvolvimento"],
      en: ["Concept", "Visual direction", "3D and motion", "Development"],
    },
    cover: "assets/covers/projects/pulse.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/pulse/", github: "https://github.com/lorenzo-or7/pulse" },
    caseStudy: {
      idea: {
        pt: "Tratar o produto como protagonista: em vez de fotos soltas, uma única embalagem em 3D que conduz o visitante do primeiro impacto até a escolha do sabor.",
        en: "Make the product the lead: instead of loose photos, a single 3D pack guides visitors from the first impression to picking a flavor.",
      },
      challenges: {
        pt: [
          "Manter um palco WebGL vivo durante toda a página sem pesar na rolagem.",
          "Coordenar posição e pose do produto entre hero, interior e catálogo.",
        ],
        en: [
          "Keeping a WebGL stage alive across the whole page without hurting scrolling.",
          "Coordinating the product's position and pose across hero, inside and catalog.",
        ],
      },
      solutions: {
        pt: [
          "Um único ProductStage persistente, com a geometria da embalagem gerada no código.",
          "Uma camada de jornada que calcula as poses a partir do progresso da rolagem.",
          "Imagens originais convertidas em WebP por script, separadas dos arquivos usados no site.",
        ],
        en: [
          "A single persistent ProductStage, with the pack geometry generated in code.",
          "A journey layer that computes poses from scroll progress.",
          "Original images converted to WebP by script, kept apart from the files the site uses.",
        ],
      },
      process: {
        pt: "Projeto autoral e independente, sem vínculo oficial com a BOLD. O carrinho é demonstrativo e não processa pagamentos.",
        en: "An independent original project with no official link to BOLD. The cart is a demo and processes no payments.",
      },
    },
  },
  {
    id: "gimmy-cards",
    name: "Gimmy Cards",
    summary: {
      pt: "Plataforma de leilões de cartas colecionáveis: lances registrados em ordem no servidor, arremate imediato, encerramento automático, pedidos e entregas acompanhados até o fim.",
      en: "An auction platform for collectible cards: bids recorded in order on the server, buy-now, automatic closing, and orders and deliveries tracked to the end.",
    },
    tagline: { pt: "Leilões de cartas colecionáveis", en: "Collectible card auctions" },
    status: "in-progress",
    context: { pt: "Em desenvolvimento", en: "In development" },
    description: {
      pt: "Plataforma de leilões para a comunidade Gimmy Cards, com lances, arremate imediato, encerramento automático, pedidos, comprovantes, controle de inadimplência, cartas armazenadas, entregas e painel administrativo. Sem Supabase configurado, a demo roda em modo demonstração dentro do navegador.",
      en: "An auction platform for the Gimmy Cards community, with bidding, buy-now, automatic closing, orders, payment proofs, overdue control, stored cards, deliveries and an admin panel. Without Supabase configured, the demo runs in a demonstration mode inside the browser.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion", "Supabase"],
    features: {
      pt: [
        "Lances com ordem de registro no servidor",
        "Arremate imediato e encerramento automático dos lotes",
        "Pedidos, comprovantes e prazo oficial de pagamento",
        "Cartas armazenadas e controle de entregas",
        "Painel administrativo com papéis e auditoria",
        "Modo demonstração com as migrations reais rodando no navegador",
      ],
      en: [
        "Bids ordered by server-side registration",
        "Buy-now and automatic lot closing",
        "Orders, payment proofs and an official payment deadline",
        "Stored cards and delivery tracking",
        "Admin panel with roles and auditing",
        "Demo mode with the real migrations running in the browser",
      ],
    },
    role: {
      pt: ["Produto", "UX/UI", "Front-end", "Banco e regras (Supabase)", "Testes"],
      en: ["Product", "UX/UI", "Front-end", "Database and rules (Supabase)", "Testing"],
    },
    cover: "assets/covers/projects/gimmy-cards.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/gimmy-cards/", github: "https://github.com/lorenzo-or7/gimmy-cards" },
    caseStudy: {},
  },
  {
    id: "nimbo",
    name: "NIMBO",
    summary: {
      pt: "Perfumaria multimarcas fictícia com catálogo de 33 perfumes, Fragrance Finder, comparador e favoritos. É um protótipo: nenhuma compra é processada.",
      en: "A fictional multi-brand perfumery with a 33-fragrance catalog, Fragrance Finder, comparison and favorites. It's a prototype: no purchase is processed.",
    },
    tagline: { pt: "Perfumaria multimarcas", en: "Multi-brand perfumery" },
    status: "prototype",
    context: { pt: "Protótipo demonstrativo · marca fictícia", en: "Demo prototype · fictional brand" },
    description: {
      pt: "Protótipo de e-commerce para uma perfumaria multimarcas fictícia, com galeria de fragrâncias no hero, catálogo, página de cada perfume, Fragrance Finder, comparador, favoritos e uma finalização apenas demonstrativa.",
      en: "An e-commerce prototype for a fictional multi-brand perfumery, with a fragrance gallery hero, catalog, product pages, Fragrance Finder, comparison, favorites and a demo-only checkout.",
    },
    technologies: ["React", "TypeScript", "GSAP"],
    features: {
      pt: ["Catálogo com 33 perfumes", "Fragrance Finder", "Comparador", "Favoritos", "Finalização demonstrativa"],
      en: ["33-fragrance catalog", "Fragrance Finder", "Comparison", "Favorites", "Demo checkout"],
    },
    role: {
      pt: ["Direção visual", "UX/UI", "Motion", "Desenvolvimento"],
      en: ["Visual direction", "UX/UI", "Motion", "Development"],
    },
    cover: "assets/covers/projects/nimbo.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/nimbo-perfumaria/", github: "https://github.com/lorenzo-or7/nimbo-perfumaria" },
    caseStudy: {},
  }

];

/* -------------------------------------------------------------
   4. MODELOS / SHOWCASE
   -------------------------------------------------------------
   Página /showcase/. Conceitos completos criados para segmentos
   comerciais. São projetos autorais com marcas fictícias — nunca
   clientes reais.

   Os códigos internos (ex.: 01.01) NÃO aparecem para o visitante.
   cover: capa OFICIAL em assets/covers/showcase/<id>.webp
          ("" → estado "capa oficial pendente", nunca imagem genérica)
   brand: nome da marca fictícia usada na demonstração (opcional)
   ------------------------------------------------------------- */
const SHOWCASE_CATEGORIES = [
  { id: "food",        label: { pt: "Gastronomia",   en: "Food & Drink" } },
  { id: "beauty",      label: { pt: "Beleza",        en: "Beauty" } },
  { id: "fashion",     label: { pt: "Moda",          en: "Fashion" } },
  { id: "automotive",  label: { pt: "Automotivo",    en: "Automotive" } },
  { id: "health",      label: { pt: "Saúde",         en: "Health" } },
  { id: "fitness",     label: { pt: "Fitness",       en: "Fitness" } },
  { id: "real-estate", label: { pt: "Imóveis",       en: "Real Estate" } },
  { id: "services",    label: { pt: "Serviços",      en: "Services" } },
  { id: "hospitality", label: { pt: "Hospitalidade", en: "Hospitality" } },
  { id: "pets",        label: { pt: "Pets",          en: "Pets" } },
];

const SHOWCASE = [
  /* ---------- Gastronomia ---------- */
  {
    id: "restaurante-premium",
    name: { pt: "Restaurante Premium", en: "Premium Restaurant" },
    brand: "Lume",
    category: "food",
    summary: {
      pt: "Cozinha de brasa contada em tom editorial, com cardápio interativo, galeria e pré-reserva pelo WhatsApp.",
      en: "A fire-cooking kitchen told in an editorial voice, with an interactive menu, gallery and WhatsApp pre-booking.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/restaurante-premium.webp",
    demo: "https://lorenzo-or7.github.io/restaurant-premium-demo/",
  },
  {
    id: "restaurante-contemporaneo",
    name: { pt: "Restaurante Contemporâneo", en: "Contemporary Restaurant" },
    brand: "Séria",
    category: "food",
    summary: {
      pt: "Cardápio da estação, experiências gastronômicas e reserva de mesa para uma cozinha que se apresenta pela narrativa.",
      en: "Seasonal menu, dining experiences and table booking for a kitchen that introduces itself through storytelling.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/restaurante-contemporaneo.webp",
    demo: "https://lorenzo-or7.github.io/restaurant-contemporaneo-demo/",
  },
  {
    id: "cafeteria-artesanal",
    name: { pt: "Cafeteria Artesanal", en: "Artisan Coffee Shop" },
    brand: "Torra",
    category: "food",
    summary: {
      pt: "Cafés de origem e preparo artesanal, com um cardápio feito para explorar, experiências e pedido online.",
      en: "Single-origin coffee and hand brewing, with a menu made for exploring, experiences and online ordering.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/cafeteria-artesanal.webp",
    demo: "https://lorenzo-or7.github.io/cafeteria-artesanal-demo/",
  },
  {
    id: "bar-pub",
    name: { pt: "Bar & Pub", en: "Bar & Pub" },
    brand: "Cobre",
    category: "food",
    summary: {
      pt: "Cardápio digital, agenda de eventos, happy hour e pré-reservas para um bar com cara de ponto de encontro.",
      en: "Digital menu, events calendar, happy hour and pre-booking for a bar that feels like a meeting point.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/bar-pub.webp",
    demo: "https://lorenzo-or7.github.io/bar-pub-demo/",
  },

  /* ---------- Beleza ---------- */
  {
    id: "barbearia",
    name: { pt: "Barbearia", en: "Barbershop" },
    brand: "Ofício",
    category: "beauty",
    summary: {
      pt: "Serviços, galeria, equipe e planos de assinatura, com agendamento em seis etapas do serviço ao horário.",
      en: "Services, gallery, team and membership plans, with six-step booking from service to time slot.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/barbearia.webp",
    demo: "https://lorenzo-or7.github.io/barbearia-demo/",
  },
  {
    id: "salao-de-beleza",
    name: { pt: "Salão de Beleza", en: "Beauty Salon" },
    brand: "Atelier",
    category: "beauty",
    summary: {
      pt: "Serviços, galeria de transformações, equipe e pré-agendamento num visual de estúdio.",
      en: "Services, a transformations gallery, team and pre-booking with a studio feel.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/salao-de-beleza.webp",
    demo: "https://lorenzo-or7.github.io/salao-de-beleza-demo/",
  },
  {
    id: "estetica-facial",
    name: { pt: "Estética Facial", en: "Facial Aesthetics" },
    brand: "AURA",
    category: "beauty",
    summary: {
      pt: "Atelier de estética facial focado em cuidado individual, rejuvenescimento e beleza natural.",
      en: "A facial aesthetics atelier focused on individual care, rejuvenation and natural beauty.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "GSAP"],
    cover: "assets/covers/showcase/estetica-facial.webp",
    demo: "https://lorenzo-or7.github.io/estetica-facial-demo/",
  },

  /* ---------- Moda ---------- */
  {
    id: "moda-feminina",
    name: { pt: "Moda Feminina", en: "Womenswear" },
    brand: "Maison Elle",
    category: "fashion",
    summary: {
      pt: "Boutique feminina com curadoria editorial, coleções em destaque e uma vitrine que se lê como revista.",
      en: "A womenswear boutique with editorial curation, featured collections and a storefront that reads like a magazine.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/moda-feminina.webp",
    demo: "https://lorenzo-or7.github.io/moda-feminina-demo/",
  },
  {
    id: "moda-masculina",
    name: { pt: "Moda Masculina", en: "Menswear" },
    brand: "Alvar",
    category: "fashion",
    summary: {
      pt: "Moda masculina contemporânea organizada em três coleções: Essentials, Contemporary e After Hours.",
      en: "Contemporary menswear organized into three collections: Essentials, Contemporary and After Hours.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/moda-masculina.webp",
    demo: "https://lorenzo-or7.github.io/moda-masculina-demo/",
  },

  /* ---------- Automotivo ---------- */
  {
    id: "showroom-automotivo",
    name: { pt: "Showroom Automotivo", en: "Car Showroom" },
    brand: "Ferrum",
    category: "automotive",
    summary: {
      pt: "Showroom digital com veículos de exemplo, fichas detalhadas e valores ilustrativos.",
      en: "A digital showroom with sample vehicles, detailed spec sheets and illustrative prices.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/showroom-automotivo.webp",
    demo: "https://lorenzo-or7.github.io/showroom-automotivo-demo/",
  },
  {
    id: "locadora-de-veiculos",
    name: { pt: "Locadora de Veículos", en: "Car Rental" },
    brand: "VÉLOR",
    category: "automotive",
    summary: {
      pt: "Frota, comparador de modelos e simulador de locação numa experiência de estúdio de mobilidade.",
      en: "Fleet, model comparison and a rental simulator in a mobility-studio experience.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/locadora-de-veiculos.webp",
    demo: "https://lorenzo-or7.github.io/locadora-de-veiculos-demo/",
  },
  {
    id: "estetica-automotiva",
    name: { pt: "Estética Automotiva", en: "Car Detailing" },
    brand: "Lume",
    category: "automotive",
    summary: {
      pt: "Catálogo de serviços, comparador antes/depois, processo, galeria e simulador de orçamento.",
      en: "Service catalog, before/after comparison, process, gallery and a quote simulator.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/estetica-automotiva.webp",
    demo: "https://lorenzo-or7.github.io/estetica-automotiva-demo/",
  },
  {
    id: "oficina-mecanica",
    name: { pt: "Oficina Mecânica", en: "Auto Repair Shop" },
    brand: "TORQ",
    category: "automotive",
    summary: {
      pt: "Diagnóstico eletrônico, revisão, freios, suspensão e motor explicados com clareza, com agendamento pelo WhatsApp.",
      en: "Electronic diagnostics, servicing, brakes, suspension and engine explained clearly, with WhatsApp booking.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/oficina-mecanica.webp",
    demo: "https://lorenzo-or7.github.io/oficina-mecanica-demo/",
  },

  /* ---------- Saúde ---------- */
  {
    id: "clinica-odontologica",
    name: { pt: "Clínica Odontológica", en: "Dental Clinic" },
    brand: "Alva Odontologia",
    category: "health",
    summary: {
      pt: "Tratamentos, visita guiada pelo espaço, especialistas e agendamento online.",
      en: "Treatments, a guided tour of the space, specialists and online booking.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "ThreeJS"],
    cover: "assets/covers/showcase/clinica-odontologica.webp",
    demo: "https://lorenzo-or7.github.io/clinica-odontologica-demo/",
  },
  {
    id: "clinica-medica",
    name: { pt: "Clínica Médica", en: "Medical Clinic" },
    brand: "Clínica Áurea",
    category: "health",
    summary: {
      pt: "Clínica particular de medicina contemporânea, com especialidades, equipe e agendamento online.",
      en: "A private clinic for contemporary medicine, with specialties, team and online booking.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/clinica-medica.webp",
    demo: "https://lorenzo-or7.github.io/clinica-medica-demo/",
  },
  {
    id: "saude-wellness",
    name: { pt: "Saúde Integrativa & Wellness", en: "Integrative Health & Wellness" },
    brand: "AURA",
    category: "health",
    summary: {
      pt: "Espaço de saúde integrativa com especialidades integradas, rituais de cuidado e equipe multidisciplinar.",
      en: "An integrative health space with joined-up specialties, care rituals and a multidisciplinary team.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/saude-wellness.webp",
    demo: "https://lorenzo-or7.github.io/saude-wellness-demo/",
  },

  /* ---------- Fitness ---------- */
  {
    id: "academia-comercial",
    name: { pt: "Academia Comercial", en: "Gym" },
    brand: "PULSE Training Club",
    category: "fitness",
    summary: {
      pt: "Modalidades, grade de aulas, planos, simulador e agendamento de visita.",
      en: "Classes, timetable, plans, a simulator and visit booking.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/academia-comercial.webp",
    demo: "https://lorenzo-or7.github.io/academia-comercial-demo/",
  },
  {
    id: "academia-premium",
    name: { pt: "Academia Premium", en: "Premium Gym" },
    brand: "VERTEX Performance Club",
    category: "fitness",
    summary: {
      pt: "Modalidades, espaço, simulador de treino, planos, agenda e pré-agendamento pelo WhatsApp.",
      en: "Classes, facilities, a training simulator, plans, schedule and WhatsApp pre-booking.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/academia-premium.webp",
    demo: "https://lorenzo-or7.github.io/academia-premium-demo/",
  },
  {
    id: "yoga-pilates",
    name: { pt: "Yoga & Pilates", en: "Yoga & Pilates" },
    brand: "",
    category: "fitness",
    summary: {
      pt: "Estúdio boutique com modalidades, agenda da semana, aula experimental e planos, tudo num ritmo mais calmo.",
      en: "A boutique studio with classes, a weekly schedule, a trial class and plans, all at a calmer pace.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/yoga-pilates.webp",
    demo: "https://lorenzo-or7.github.io/yoga-pilates-demo/",
  },

  /* ---------- Imóveis ---------- */
  {
    id: "construtora",
    name: { pt: "Construtora", en: "Construction Company" },
    brand: "ATRIUM",
    category: "real-estate",
    summary: {
      pt: "Empreendimentos, processo construtivo e materialidade para uma construtora de alto padrão.",
      en: "Developments, building process and materials for a high-end construction company.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/construtora.webp",
    demo: "https://lorenzo-or7.github.io/construtora-demo/",
  },
  {
    id: "imobiliaria",
    name: { pt: "Imobiliária", en: "Real Estate Agency" },
    brand: "Atelier Imóveis",
    category: "real-estate",
    summary: {
      pt: "Curadoria de imóveis escolhidos por arquitetura, luz, materiais e localização.",
      en: "A curated selection of properties chosen for architecture, light, materials and location.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/imobiliaria.webp",
    demo: "https://lorenzo-or7.github.io/imobiliaria-demo/",
  },

  /* ---------- Serviços ---------- */
  {
    id: "climatizacao",
    name: { pt: "Climatização", en: "HVAC" },
    brand: "AERON",
    category: "services",
    summary: {
      pt: "Simulador de BTU, diagnóstico interativo, serviços e orçamento online.",
      en: "BTU calculator, interactive diagnosis, services and an online quote.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/climatizacao.webp",
    demo: "https://lorenzo-or7.github.io/climatizacao-demo/",
  },
  {
    id: "energia-solar",
    name: { pt: "Energia Solar", en: "Solar Energy" },
    brand: "HELION",
    category: "services",
    summary: {
      pt: "Energia solar para casas, empresas e indústrias, com simulação de economia e o processo do projeto explicado.",
      en: "Solar energy for homes, businesses and industry, with a savings simulation and the project process explained.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/energia-solar.webp",
    demo: "https://lorenzo-or7.github.io/energia-solar-demo/",
  },

  /* ---------- Hospitalidade ---------- */
  {
    id: "hotel-premium",
    name: { pt: "Hotel Premium", en: "Premium Hotel" },
    brand: "Maison Aurel",
    category: "hospitality",
    summary: {
      pt: "Hotel boutique com arquitetura autoral, suítes privativas, gastronomia e experiências.",
      en: "A boutique hotel with signature architecture, private suites, dining and experiences.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/hotel-premium.webp",
    demo: "https://lorenzo-or7.github.io/hotel-premium-demo/",
  },
  {
    id: "pousada-boutique",
    name: { pt: "Pousada Boutique", en: "Boutique Inn" },
    brand: "Casa Nativa",
    category: "hospitality",
    summary: {
      pt: "Suítes acolhedoras, experiências, galeria e uma reserva simples, com tarifas ilustrativas.",
      en: "Cozy suites, experiences, gallery and a simple booking flow, with illustrative rates.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/pousada-boutique.webp",
    demo: "https://lorenzo-or7.github.io/pousada-boutique-demo/",
  },

  /* ---------- Pets ---------- */
  {
    id: "clinica-veterinaria",
    name: { pt: "Clínica Veterinária", en: "Veterinary Clinic" },
    brand: "NOMA",
    category: "pets",
    summary: {
      pt: "Especialidades, equipe, área Meu Pet e pré-agendamento.",
      en: "Specialties, team, a My Pet area and pre-booking.",
    },
    technologies: ["React", "TypeScript", "Motion"],
    cover: "assets/covers/showcase/clinica-veterinaria.webp",
    demo: "https://lorenzo-or7.github.io/clinica-veterinaria-demo/",
  },
  {
    id: "pet-shop",
    name: { pt: "Pet Shop & Banho e Tosa", en: "Pet Shop & Grooming" },
    brand: "MIMO",
    category: "pets",
    summary: {
      pt: "Banho, tosa e cuidados especiais para cães e gatos, com agendamento direto.",
      en: "Bathing, grooming and special care for dogs and cats, with direct booking.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/pet-shop.webp",
    demo: "https://lorenzo-or7.github.io/pet-shop-demo/",
  },
  /* ---------- Serviços (logística e indústria) ---------- */
  {
    id: "transportadora",
    name: { pt: "Transportadora & Logística", en: "Transport & Logistics" },
    brand: "Rotaxis",
    category: "services",
    summary: {
      pt: "Cargas fracionadas e dedicadas, distribuição, armazenagem e logística integrada.",
      en: "Less-than-truckload and dedicated freight, distribution, warehousing and integrated logistics.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/transportadora.webp",
    demo: "https://lorenzo-or7.github.io/transportadora-demo/",
  },
  {
    id: "solucoes-industriais",
    name: { pt: "Soluções Industriais", en: "Industrial Solutions" },
    brand: "AXIOM Industrial",
    category: "services",
    summary: {
      pt: "Automação, manutenção, projetos de engenharia e otimização de processos para a indústria.",
      en: "Automation, maintenance, engineering projects and process optimization for industry.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    cover: "assets/covers/showcase/solucoes-industriais.webp",
    demo: "https://lorenzo-or7.github.io/solucoes-industriais-demo/",
  },
];

/* -------------------------------------------------------------
   5. FORMAÇÃO
   -------------------------------------------------------------
   Datas e semestre ficam vazios até você preencher.
   Itens com  optional: true  só aparecem quando "date" é preenchido.
   ------------------------------------------------------------- */
const EDUCATION = {
  course: { pt: "Engenharia de Software", en: "Software Engineering" },
  institution: "PUCPR",
  institutionFull: "Pontifícia Universidade Católica do Paraná",
  status: { pt: "Em andamento", en: "In progress" },
  currentSemester: { pt: "3º período", en: "3rd semester" },

  areas: [
    { pt: "Desenvolvimento Web", en: "Web Development" },
    { pt: "Banco de Dados", en: "Databases" },
    { pt: "Engenharia de Requisitos", en: "Requirements Engineering" },
    { pt: "Modelagem de Software", en: "Software Modeling" },
    { pt: "Desenvolvimento de Sistemas", en: "Systems Development" },
  ],

  timeline: [
    {
      date: "2025",
      title: { pt: "Início da graduação", en: "Started the degree" },
      text: { pt: "Ingresso em Engenharia de Software na PUCPR.", en: "Started Software Engineering at PUCPR." },
    },
    {
      date: "",
      title: { pt: "Projetos acadêmicos e próprios", en: "Academic & personal projects" },
      text: {
        pt: "Aplicação prática de desenvolvimento web, banco de dados e modelagem em projetos como o VotAI.",
        en: "Putting web development, databases and modeling into practice in projects such as VotAI.",
      },
    },
    {
      date: "2026",
      current: true,
      title: { pt: "Atualmente", en: "Now" },
      text: {
        pt: "Aprofundando conhecimentos em requisitos, modelagem de software e desenvolvimento de sistemas.",
        en: "Deepening my knowledge of requirements, software modeling and systems development.",
      },
    },
    {
      date: "2029",
      optional: true,
      title: { pt: "Conclusão prevista", en: "Expected graduation" },
      text: { pt: "Graduação em Engenharia de Software pela PUCPR.", en: "Software Engineering degree from PUCPR." },
    },
  ],
};

/* -------------------------------------------------------------
   6. IDIOMAS
   ------------------------------------------------------------- */
const LANGUAGES = [
  {
    code: "PT",
    name: { pt: "Português", en: "Portuguese" },
    level: { pt: "Nativo", en: "Native" },
  },
  {
    code: "EN",
    highlight: true,
    name: { pt: "Inglês", en: "English" },
    level: { pt: "Avançado", en: "Advanced" },
    qualifier: { pt: "Autoavaliado", en: "Self-assessed" },
    note: {
      pt: "Aprendi de forma independente, lendo, assistindo e programando em inglês. Hoje é a língua em que leio documentação, pesquiso erros e acompanho o que acontece na área, além do uso no dia a dia.",
      en: "I learned it on my own, by reading, watching and coding in English. Today it's the language I read documentation in, debug with and follow the industry through, on top of everyday use.",
    },
    contexts: [
      { pt: "Documentação técnica", en: "Technical documentation" },
      { pt: "Leitura", en: "Reading" },
      { pt: "Desenvolvimento", en: "Development" },
      { pt: "Comunicação no dia a dia", en: "Everyday communication" },
    ],
  },
];
