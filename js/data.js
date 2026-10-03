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
    { pt: "Evoluindo o VotAI, já no ar em planosdegoverno.com.br", en: "Improving VotAI, now live at planosdegoverno.com.br" },
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
    id: "theclub",
    category: "concept",
    type: "website-demo",
    name: "The Club Barbearia",
    tagline: { pt: "Barbearia, estética e bem-estar masculino", en: "Barbershop, grooming & men's wellness" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para uma barbearia real de Curitiba", en: "Personal project · proposal for a real barbershop in Curitiba" },
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
    image: "assets/projects/theclub-cover.webp",
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
        { src: "assets/projects/theclub-servicos.webp", caption: { pt: "Menu de serviços por categoria", en: "Service menu by category" } },
        { src: "assets/projects/theclub-assinatura.webp", caption: { pt: "Planos de assinatura", en: "Membership plans" } },
        { src: "assets/projects/theclub-inclusao.webp", caption: { pt: "Um espaço feito para receber bem", en: "A space built to welcome everyone" } },
        { src: "assets/projects/theclub-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "face-doctor",
    category: "concept",
    type: "website-demo",
    name: "Face Doctor Água Verde",
    tagline: { pt: "Clínica de estética", en: "Aesthetic clinic" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para uma clínica real de Curitiba", en: "Personal project · proposal for a real clinic in Curitiba" },
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
    image: "assets/projects/face-doctor-cover.webp",
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
        { src: "assets/projects/face-doctor-tecnologias.webp", caption: { pt: "Tecnologias e tratamentos", en: "Technologies and treatments" } },
        { src: "assets/projects/face-doctor-resultados.webp", caption: { pt: "Comparador antes/depois", en: "Before/after comparison" } },
        { src: "assets/projects/face-doctor-avaliacoes.webp", caption: { pt: "Avaliações de pacientes", en: "Patient reviews" } },
        { src: "assets/projects/face-doctor-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "auto-supremo",
    category: "concept",
    type: "website-demo",
    name: "Auto Supremo",
    tagline: { pt: "Estética automotiva", en: "Car detailing" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para uma estética automotiva real de Curitiba", en: "Personal project · proposal for a real car detailing shop in Curitiba" },
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
    image: "assets/projects/auto-supremo-cover.webp",
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
        { src: "assets/projects/auto-supremo-servicos.webp", caption: { pt: "Serviços com ficha técnica", en: "Services with spec cards" } },
        { src: "assets/projects/auto-supremo-resultados.webp", caption: { pt: "Antes/depois com janela de arrastar", en: "Before/after with a draggable window" } },
        { src: "assets/projects/auto-supremo-galeria.webp", caption: { pt: "Galeria do box", en: "Shop gallery" } },
        { src: "assets/projects/auto-supremo-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
  {
    id: "contlup",
    category: "concept",
    type: "website-demo",
    name: "ContLup Studio Contábil",
    tagline: { pt: "Escritório de contabilidade", en: "Accounting firm" },
    status: "prototype",
    context: { pt: "Projeto pessoal · proposta para um escritório real de Pedreira/SP", en: "Personal project · proposal for a real firm in Pedreira, SP" },
    description: {
      pt: "Demo de site para um escritório de contabilidade real de Pedreira/SP, com tema escuro e claro, painel de números ilustrativo e uma mascote que responde às dúvidas mais comuns.",
      en: "A website demo for a real accounting firm in Pedreira, SP, with dark and light themes, an illustrative numbers dashboard and a mascot that answers common questions.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      pt: [
        "Barra lateral que expande ao passar o mouse",
        "Tema escuro e claro",
        "Áreas de atuação com ilustrações de cada serviço",
        "Painel \"Visão do mês\" com números ilustrativos",
        "Apresentação da contadora responsável",
        "\"A Lupi explica\": perguntas frequentes com a mascote",
        "Contatos com botão de copiar",
        "WhatsApp e Instagram",
        "Layout responsivo com menu mobile",
      ],
      en: [
        "Sidebar that expands on hover",
        "Dark and light themes",
        "Practice areas with an illustration for each service",
        "\"Month overview\" panel with illustrative numbers",
        "Introduction of the lead accountant",
        "\"Lupi explains\": FAQ with the mascot",
        "Contact details with a copy button",
        "WhatsApp and Instagram",
        "Responsive layout with mobile menu",
      ],
    },
    role: {
      pt: ["Idealização", "Identidade visual aplicada", "Design da interface", "Desenvolvimento front-end"],
      en: ["Concept", "Applied visual identity", "Interface design", "Front-end development"],
    },
    image: "assets/projects/contlup-cover.webp",
    video: "",
    links: { demo: "https://lorenzo-or7.github.io/contlup-demo/", github: "https://github.com/lorenzo-or7/contlup-demo" },
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
        { src: "assets/projects/contlup-servicos.webp", caption: { pt: "Áreas de atuação", en: "Practice areas" } },
        { src: "assets/projects/contlup-numeros.webp", caption: { pt: "Seus números contam uma história", en: "Your numbers tell a story" } },
        { src: "assets/projects/contlup-contato.webp", caption: { pt: "Contato", en: "Contact" } },
        { src: "assets/projects/contlup-mobile.webp", caption: { pt: "Versão mobile", en: "Mobile version" }, portrait: true },
      ],
    },
  },
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
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio durante todas as etapas — planejamento, criação do design, desenvolvimento, revisão de código e solução de problemas. As decisões, adaptações e a implementação final foram conduzidas por mim. Protótipo funcional, publicado como demonstração no GitHub Pages, com código aberto no GitHub.",
        en: "Personal project. I used several AI tools as support throughout every stage — planning, design, development, code review and problem solving. The decisions, adaptations and final implementation were led by me. A working prototype, published as a demo on GitHub Pages, with its code open on GitHub.",
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
  {
    id: "casa-di-lucente",
    category: "concept",
    type: "website-demo",
    name: "Casa di Lucente",
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
        pt: "Projeto pessoal. Utilizei diferentes ferramentas de IA como apoio — pesquisa de ideias, planejamento da estrutura, criação e revisão de código, elaboração de textos, prompts para conteúdos visuais e resolução de problemas. As decisões sobre identidade visual, funcionalidades, organização do site e direção do projeto foram definidas por mim. Demo funcional, publicada no GitHub Pages. O projeto foi descontinuado e não recebe mais atualizações, mas o site continua no ar como registro do trabalho.",
        en: "Personal project. I used several AI tools as support — researching ideas, planning the structure, writing and reviewing code, drafting copy, creating prompts for visual content and solving problems. Decisions on visual identity, features, site organization and project direction were mine. A working demo, published on GitHub Pages. The project has been discontinued and is no longer updated, but the site remains online as a record of the work.",
      },
      screenshots: [
        { src: "assets/projects/casa-di-lucente/torta.webp", caption: { pt: "A torta de gelato, camada por camada", en: "The gelato cake, layer by layer" } },
        { src: "assets/projects/casa-di-lucente/cardapio.webp", caption: { pt: "Cardápio com filtros e disponibilidade do dia", en: "Menu with filters and daily availability" } },
        { src: "assets/projects/casa-di-lucente/avaliacoes.webp", caption: { pt: "Avaliações de clientes", en: "Customer reviews" } },
        { src: "assets/projects/casa-di-lucente/painel.webp", caption: { pt: "Painel de gerenciamento do cardápio (simulação)", en: "Menu management dashboard (simulation)" } },
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
