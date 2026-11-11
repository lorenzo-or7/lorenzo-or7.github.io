# Lorenzo Orsetti — Portfolio

Portfólio pessoal de **Lorenzo Orsetti**, estudante de Engenharia de Software e desenvolvedor web.
One page, bilíngue (PT/EN), com tema escuro e claro, feito com **HTML, CSS e JavaScript puros**, sem frameworks nem build.

> **Por que não tem PHP/MySQL?** Nenhuma funcionalidade do portfólio precisa de servidor: o conteúdo vem de um arquivo JS, o idioma e o tema ficam salvos no navegador e as estatísticas do GitHub vêm da API pública. Sem backend, o site pode ser hospedado de graça (GitHub Pages, Netlify, Vercel) e carrega mais rápido.

---

## Objetivo

Apresentar, de forma rápida e organizada:

1. quem é Lorenzo e o que ele faz;
2. os **projetos** (parte central), com estudo de caso de cada um;
3. as tecnologias e práticas de engenharia de software;
4. a formação na PUCPR;
5. o nível de inglês (o próprio site bilíngue serve de demonstração);
6. GitHub, LinkedIn e contato.

## Tecnologias

| Camada | Uso |
| --- | --- |
| HTML5 | Estrutura semântica, `<dialog>` nativo para o estudo de caso, SEO e Open Graph |
| CSS3 | Custom properties para os temas, Grid/Flexbox, container queries, `prefers-reduced-motion` |
| JavaScript | Renderização a partir de dados, i18n, tema, terminal interativo, IntersectionObserver |
| Google Fonts | Bricolage Grotesque (títulos) + IBM Plex Sans + IBM Plex Mono (uma única requisição, `display=swap`) |

Nenhuma biblioteca externa de JavaScript.

## Estrutura

```
/
├── index.html              # esqueleto da página (seções vazias preenchidas via JS)
├── projects/               # (opcional) demos hospedadas junto do portfólio
├── assets/
│   ├── images/             # foto de perfil e og-image.png
│   ├── icons/              # favicon e logos das tecnologias
│   └── projects/           # capas, screenshots e vídeos de cada projeto
├── css/
│   ├── themes.css          # TODAS as cores (tema escuro e claro)
│   ├── style.css           # componentes
│   └── responsive.css      # breakpoints (1440 → 360px)
├── js/
│   ├── data.js             # ★ CONTEÚDO: perfil, links, tecnologias, projetos, formação, idiomas
│   ├── language.js         # textos da interface PT/EN + troca de idioma
│   ├── theme.js            # botão de tema + localStorage
│   ├── utils.js            # funções auxiliares compartilhadas
│   ├── projects.js         # cards de projetos + modal de estudo de caso
│   ├── github.js           # seção GitHub (API pública opcional)
│   └── main.js             # demais seções, menu, terminal, animações, cursor
└── README.md
```

**Regra geral:** conteúdo → `js/data.js` · textos fixos da interface → `js/language.js` · cores → `css/themes.css`.

## Como rodar

Não há instalação. Duas opções:

- Abra `index.html` direto no navegador; **ou**
- Rode um servidor local (recomendado, simula o site publicado):

```bash
# na pasta do projeto
python -m http.server 8000
# acesse http://localhost:8000
```

Com o VS Code, a extensão **Live Server** também funciona.

## Como adicionar um projeto

Abra `js/data.js`, copie um bloco de `PROJECTS` e edite:

```js
{
  id: "meu-projeto",                 // único, sem espaços (usado no link #project/meu-projeto)
  category: "featured",              // "featured" = Projetos em Destaque | "concept" = Conceitos de Websites
  type: "website-concept",           // só para concepts: "website-concept" | "concept-project" | "prototype"
  name: "Meu Projeto",
  tagline: { pt: "Subtítulo", en: "Subtitle" },
  status: "in-progress",             // "in-progress" | "completed" | "prototype" | "concept"
  description: { pt: "...", en: "..." },
  technologies: ["HTML", "CSS", "JavaScript"],   // chaves de TECHNOLOGIES
  features: { pt: ["..."], en: ["..."] },
  role:     { pt: ["..."], en: ["..."] },
  image: "assets/projects/meu-projeto/cover.webp",
  video: "",                          // opcional (concepts): toca ao passar o mouse
  links: { demo: "https://...", github: "https://github.com/..." },
  placeholder: { url: "meuprojeto", bg: "#FFFFFF", ink: "#111111", accent: "#4928C2" },
  caseStudy: {
    problem:    { pt: "...", en: "..." },
    idea:       { pt: "...", en: "..." },
    challenges: { pt: ["..."], en: ["..."] },
    solutions:  { pt: ["..."], en: ["..."] },
    learned:    { pt: ["..."], en: ["..."] },
    screenshots: [
      { src: "assets/projects/meu-projeto/tela.webp", caption: { pt: "Legenda", en: "Caption" } }
    ],
  },
},
```

- A numeração (PROJECT 01, 02…) e os contadores do perfil são automáticos.
- Qualquer seção do estudo de caso deixada vazia é simplesmente ocultada.
- Links vazios aparecem como botão tracejado **"em breve"**.
- Sem `image`, o card mostra uma prévia ilustrada com as cores de `placeholder`.

> ⚠️ Os textos de **Desafios / Soluções / O que aprendi** do VotAI e as descrições dos conceitos são **rascunhos** baseados nas informações fornecidas. Revise-os com a sua experiência real antes de publicar.

## Como modificar informações pessoais

Tudo em `PROFILE` (`js/data.js`): cargo, localização, foto, e-mail, GitHub, LinkedIn, interesses, "No momento" e o indicador "Aberto a oportunidades" (`openToOpportunities: false` para ocultar).

- **Tecnologias:** `TECHNOLOGIES` (nome, sigla, cor, tooltip) e `STACK` (categorias). A faixa animada usa `MARQUEE`.
- **Formação:** `EDUCATION`. Datas e período estão vazios de propósito — preencha `date` em cada item da linha do tempo e `currentSemester` (ex.: `{ pt: "3º período", en: "3rd semester" }`). O item "Conclusão prevista" só aparece quando tiver data.
- **Idiomas:** `LANGUAGES`.
- **Textos da interface** (menu, botões, títulos, parágrafos do "Sobre", hero): `js/language.js`, sempre nas duas línguas.

## Como trocar imagens

| O quê | Onde colocar | Onde configurar |
| --- | --- | --- |
| Foto de perfil | `assets/images/profile.webp` (quadrada, ~480px) | `PROFILE.photo` |
| Capa de projeto | `assets/projects/<id>/cover.webp` | `image` do projeto |
| Screenshots | `assets/projects/<id>/*.webp` | `caseStudy.screenshots` |
| Vídeo de conceito | `assets/projects/<id>/preview.mp4` | `video` do projeto |
| Logos das tecnologias | `assets/icons/html5.webp` etc. (fundo transparente) | `icon` em `TECHNOLOGIES` |
| Favicon | `assets/icons/favicon.svg` / `apple-touch-icon.png` | substitua os arquivos |
| Imagem de compartilhamento | `assets/images/og-image.png` (1200×630) | substitua o arquivo |

Sem foto, o site mostra as iniciais **LO**. Se uma imagem não carregar, o site volta automaticamente para o fallback. Prefira **WebP** (converta em [squoosh.app](https://squoosh.app)).

## Como configurar o GitHub

Em `js/data.js`:

```js
githubUsername: "seu-usuario",
```

Isso ativa automaticamente os botões de GitHub (hero, perfil, contato, rodapé), o `@usuario` do perfil e busca na **API pública do GitHub** o número de repositórios, os repositórios atualizados recentemente e as linguagens usadas (com cache de 1 hora).

Contribuições e commits **não** estão disponíveis na API pública sem token; por isso aparecem como `--`. Se quiser exibi-los, preencha com números reais:

```js
const GITHUB_MANUAL_STATS = { contributions: 214, commits: null };
```

Nos projetos, preencha `links.github` com a URL do repositório.

## Como configurar o contato

```js
email: "seu-email@dominio.com",
```

Com o e-mail preenchido, aparecem o endereço, o botão **Copiar e-mail** e o ícone de e-mail no perfil e no rodapé. Vazio, tudo isso fica oculto. O LinkedIn já está configurado em `PROFILE.linkedin`.

## Como publicar

### GitHub Pages (gratuito)
1. Crie um repositório (ex.: `portfolio` ou `seu-usuario.github.io`) e envie os arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/portfolio.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Branch: `main` / root → Save**.
3. O site ficará em `https://seu-usuario.github.io/portfolio/`.

### Netlify / Vercel
Arraste a pasta em [app.netlify.com/drop](https://app.netlify.com/drop) ou importe o repositório na Vercel (sem comando de build).

### Depois de publicar
No `<head>` do `index.html`, troque `https://seu-dominio.com/` pela URL real em:
`<link rel="canonical">`, `og:url`, `og:image` e `twitter:image`.
Teste o compartilhamento no [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Recursos

- **Bilíngue sem recarregar** — PT/EN salvo em `localStorage`; na primeira visita segue o idioma do navegador. Título e meta description também mudam.
- **Tema escuro/claro** — salvo em `localStorage`; na primeira visita segue `prefers-color-scheme`. Um script no `<head>` aplica o tema antes da renderização (sem "piscar").
- **Terminal interativo** no hero (aba `terminal`): `help`, `whoami`, `stack`, `projects`, `education`, `english`, `contact`, `theme`, `lang`, `clear`. ↑/↓ navegam no histórico.
- **Estudo de caso em modal** com link direto: `seusite.com/#project/votai`.
- **Acessibilidade** — HTML semântico, skip link, foco visível, navegação por teclado (abas com setas, modal com Esc), `aria-*`, contraste AA nos dois temas e `prefers-reduced-motion` (desativa animações, faixa e cursor).
- **Performance** — zero dependências JS, lazy loading de imagens, vídeos com `preload="none"`, fontes em uma requisição.
- **Responsivo** — testado em 1920, 1440, 1024, 768, 430, 390 e 360px, sem rolagem horizontal.

---

Designed & Developed by **Lorenzo Orsetti**
