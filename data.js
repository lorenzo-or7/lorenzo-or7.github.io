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
  instagram: "https://www.instagram.com/lorenzo.or7/",
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
    { pt: "Desenvolvendo o VotAI", en: "Building VotAI" },
    { pt: "Criando propostas de sites para negócios locais de Curitiba", en: "Building website proposals for local businesses in Curitiba" },
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
};

/* Categorias da seção "Tech Stack" (usam as chaves de TECHNOLOGIES). */
const STACK = [
  { label: { pt: "Frontend", en: "Frontend" }, file: "frontend", items: ["HTML", "CSS", "JavaScript"] },
  { label: { pt: "Backend & linguagens", en: "Backend & languages" }, file: "backend", items: ["PHP", "Python"] },
  { label: { pt: "Banco de dados", en: "Database" }, file: "database", items: ["MySQL"] },
  { label: { pt: "Ferramentas", en: "Tools" }, file: "tools", items: ["VSCode", "Git", "GitHub", "Astah"] },
  { label: { pt: "Engenharia de Software", en: "Software Engineering" }, file: "engineering", items: ["DBModeling", "Requirements", "SWModeling"] },
  { label: { pt: "Inteligência Artificial", en: "AI tools" }, file: "ai", items: ["ChatGPT", "Claude", "Gemini", "Copilot", "Lovable", "Antigravity"] },
];

/* Faixa de tecnologias em movimento. */
const MARQUEE = ["HTML", "CSS", "JavaScript", "PHP", "Python", "MySQL", "Git", "GitHub"];

/* -------------------------------------------------------------
   3. PROJETOS
   -------------------------------------------------------------
   Para adicionar um projeto, copie um bloco { ... } e edite.

   category:  "featured" → Projetos em Destaque
              "concept"  → Conceitos de Websites
   status:    "in-progress" | "completed" | "prototype" | "concept"
   image:     capa. Ex.: "assets/projects/votai/cover.webp"
              Vazio → exibe uma prévia ilustrada (placeholder).
   video:     opcional (concepts). Ex.: "assets/projects/maca/preview.mp4"
   links:     demo / github. Vazio → botão aparece como "Em breve".
   placeholder: cores da prévia ilustrada, usada só quando não há imagem.
   caseStudy: conteúdo do modal "Ver detalhes". Seções vazias são ocultadas.
   ------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "votai",
    category: "featured",
    name: "VotAI",
    tagline: {
      pt: "Plataforma de Informações e Comparação Eleitoral",
      en: "Electoral Information & Comparison Platform",
    },
    status: "in-progress",
    context: { pt: "Projeto pessoal", en: "Personal project" },
    description: {
      pt: "Plataforma que centraliza as propostas das candidaturas das Eleições 2026, extraídas dos planos de governo oficiais, e permite pesquisar, filtrar e comparar lado a lado o que cada candidato propõe para cada tema.",
      en: "A platform that gathers the proposals of the 2026 Brazilian election candidates, extracted from their official government plans, and lets you search, filter and compare side by side what each candidate proposes on every topic.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: {
      pt: [
        "Propostas organizadas em 14 temas e subtemas",
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
        "Proposals organized into 14 topics and subtopics",
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
    image: "assets/projects/votai/cover.webp",
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
    id: "chapula",
    category: "concept",
    type: "website-demo",
    name: "Barbearia Chapula",
    tagline: { pt: "Site próprio com agendamento online", en: "Custom website with online booking" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para uma barbearia real de Curitiba", en: "Personal project · proposal for a real barbershop in Curitiba" },
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
    image: "assets/projects/chapula/cover.webp",
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
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio durante todas as etapas — planejamento, criação do design, desenvolvimento, revisão de código e solução de problemas. As decisões, adaptações e a implementação final foram conduzidas por mim. Protótipo funcional, publicado no GitHub Pages.",
        en: "Personal project. I used several AI tools as support throughout every stage — planning, design, development, code review and problem solving. The decisions, adaptations and final implementation were led by me. A working prototype, published on GitHub Pages.",
      },
      screenshots: [
        { src: "assets/projects/chapula/agendamento.webp", caption: { pt: "Agendamento em etapas com resumo e confirmação", en: "Step-by-step booking with summary and confirmation" } },
        { src: "assets/projects/chapula/planos.webp", caption: { pt: "Planos mensais com comparação de economia", en: "Monthly plans with savings comparison" } },
        { src: "assets/projects/chapula/avaliacoes.webp", caption: { pt: "Avaliações de clientes", en: "Customer reviews" } },
        { src: "assets/projects/chapula/localizacao.webp", caption: { pt: "Horários com status em tempo real e localização", en: "Opening hours with live status and location" } },
        { src: "assets/projects/chapula/minha-chapula.webp", caption: { pt: "Mobile — área do cliente (demo)", en: "Mobile — customer area (demo)" }, portrait: true },
      ],
    },
  },
  {
    id: "casa-di-lucente",
    category: "concept",
    type: "website-demo",
    name: "Casa di Lucente",
    tagline: { pt: "Gelato, café e confeitaria", en: "Gelato, coffee & patisserie" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para um estabelecimento real de Curitiba", en: "Personal project · proposal for a real business in Curitiba" },
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
    image: "assets/projects/casa-di-lucente/cover.webp",
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
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — pesquisa de ideias, planejamento da estrutura, criação e revisão de código, elaboração de textos, prompts para conteúdos visuais e resolução de problemas. As decisões sobre identidade visual, funcionalidades, organização do site e direção do projeto foram definidas por mim. Demo funcional, publicada no GitHub Pages: algumas funcionalidades são simuladas, pois o objetivo é demonstrar o conceito antes de uma versão definitiva.",
        en: "Personal project. I used several AI tools as support — researching ideas, planning the structure, writing and reviewing code, drafting copy, creating prompts for visual content and solving problems. Decisions on visual identity, features, site organization and project direction were mine. A working demo, published on GitHub Pages: some features are simulated, since the goal is to demonstrate the concept before a final version.",
      },
      screenshots: [
        { src: "assets/projects/casa-di-lucente/torta.webp", caption: { pt: "A torta de gelato, camada por camada", en: "The gelato cake, layer by layer" } },
        { src: "assets/projects/casa-di-lucente/cardapio.webp", caption: { pt: "Cardápio com filtros e disponibilidade do dia", en: "Menu with filters and daily availability" } },
        { src: "assets/projects/casa-di-lucente/avaliacoes.webp", caption: { pt: "Avaliações de clientes", en: "Customer reviews" } },
        { src: "assets/projects/casa-di-lucente/painel.webp", caption: { pt: "Painel de gerenciamento do cardápio (simulação)", en: "Menu management dashboard (simulation)" } },
      ],
    },
  },
  {
    id: "iguana",
    category: "concept",
    type: "website-demo",
    name: "Iguana Empório Pet",
    tagline: { pt: "Pet shop, banho & tosa", en: "Pet shop, bath & grooming" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para um pet shop real de Curitiba", en: "Personal project · proposal for a real pet shop in Curitiba" },
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
    image: "assets/projects/iguana/cover.webp",
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
        { src: "assets/projects/iguana/loja.webp", caption: { pt: "Produtos e categorias (tema escuro)", en: "Products and categories (dark theme)" } },
        { src: "assets/projects/iguana/banho-e-tosa.webp", caption: { pt: "Banho & tosa", en: "Bath & grooming" } },
        { src: "assets/projects/iguana/delivery.webp", caption: { pt: "Horários de delivery", en: "Delivery times" } },
        { src: "assets/projects/iguana/cashback.webp", caption: { pt: "Programa de cashback", en: "Cashback program" } },
        { src: "assets/projects/iguana/lojas.webp", caption: { pt: "Localização das lojas", en: "Store locations" } },
      ],
    },
  },
  {
    id: "maca",
    category: "concept",
    type: "website-demo",
    name: "Maçã Padaria Artesanal",
    tagline: { pt: "Padaria artesanal brasileira", en: "Brazilian artisan bakery" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para uma padaria real de Curitiba", en: "Personal project · proposal for a real bakery in Curitiba" },
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
    image: "assets/projects/maca/cover.webp",
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
        { src: "assets/projects/maca/sonhos.webp", caption: { pt: "A especialidade: sonhos", en: "The specialty: sonhos" } },
        { src: "assets/projects/maca/favoritos.webp", caption: { pt: "Favoritos da casa com filtros (tema claro)", en: "House favorites with filters (light theme)" } },
        { src: "assets/projects/maca/cada-hora.webp", caption: { pt: "Momentos do dia", en: "Moments of the day" } },
        { src: "assets/projects/maca/historia.webp", caption: { pt: "Nossa história", en: "Our story" } },
        { src: "assets/projects/maca/delivery.webp", caption: { pt: "Delivery", en: "Delivery" } },
        { src: "assets/projects/maca/unidades.webp", caption: { pt: "Unidades e serviços", en: "Locations and services" } },
      ],
    },
  },
];

/* -------------------------------------------------------------
   4. FORMAÇÃO
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
   5. IDIOMAS
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
      pt: "Proficiência desenvolvida por meio de aprendizado independente, contato com tecnologia, documentação de programação e consumo frequente de conteúdo em inglês.",
      en: "English proficiency developed through independent learning, technology, programming documentation and daily exposure to English content.",
    },
    contexts: [
      { pt: "Documentação técnica", en: "Technical documentation" },
      { pt: "Programação", en: "Programming" },
      { pt: "Tecnologia", en: "Technology" },
      { pt: "Conteúdo diário", en: "Daily content" },
    ],
  },
];
