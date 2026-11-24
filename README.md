# Lorenzo Orsetti — Portfolio

Portfólio pessoal de **Lorenzo Orsetti**, estudante de Engenharia de Software e desenvolvedor web.
Três páginas (Home, Projetos e Modelos), bilíngue (PT/EN), com tema escuro e claro, feito com **HTML, CSS e JavaScript puros**, sem frameworks nem build.

> **Por que não tem PHP/MySQL?** Nenhuma funcionalidade do portfólio precisa de servidor: o conteúdo vem de um arquivo JS, o idioma e o tema ficam salvos no navegador e as estatísticas do GitHub vêm da API pública. Sem backend, o site pode ser hospedado de graça (GitHub Pages, Netlify, Vercel) e carrega mais rápido.

---

## Objetivo

Apresentar, de forma rápida e organizada:

1. quem é Lorenzo e o que ele faz (**Home**, `/`);
2. os **projetos** (`/projects/`), com status, filtros e estudos de caso;
3. os **modelos** por segmento comercial (`/showcase/`), marcas fictícias usadas como vitrine da Or7;
4. as tecnologias e práticas de engenharia de software;
5. a formação na PUCPR;
6. o nível de inglês (o próprio site bilíngue serve de demonstração);
7. GitHub, LinkedIn e contato.

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
├── index.html              # Home: quem é Lorenzo (seções preenchidas via JS)
├── projects/index.html     # Projetos: destaques, filtros por estado e estudos de caso
├── showcase/index.html     # Modelos: 29 conceitos por segmento + bloco comercial
├── assets/
│   ├── covers/projects/    # capas OFICIAIS dos projetos (<id>.webp + <id>-800.webp)
│   ├── covers/showcase/    # capas OFICIAIS dos modelos (<id>.webp + <id>-800.webp)
│   ├── images/             # foto de perfil e imagens de compartilhamento (og-*.png)
│   ├── icons/              # favicon e logos das tecnologias
│   └── projects/           # screenshots dos estudos de caso
├── css/
│   ├── themes.css          # TODAS as cores (tema escuro e claro)
│   ├── style.css           # base e componentes da Home
│   ├── pages.css           # páginas internas, cards, filtros, bloco comercial
│   ├── motion.css          # revelações, split text, transições entre páginas
│   └── responsive.css      # breakpoints (1440 → 360px)
├── js/
│   ├── data.js             # ★ CONTEÚDO: perfil, tecnologias, PROJECTS, SHOWCASE, formação, idiomas
│   ├── language.js         # textos da interface PT/EN + metadados de cada página
│   ├── icons.js            # sprite de ícones SVG (único para as três páginas)
│   ├── theme.js            # botão de tema + localStorage
│   ├── utils.js            # caminhos, capas, filtros com animação (FLIP), revelação
│   ├── projects.js         # página Projetos + modal de estudo de caso
│   ├── showcase.js         # página Modelos
│   ├── github.js           # seção GitHub (API pública)
│   ├── motion.js           # movimento: nome do hero, spotlight, progresso de leitura
│   └── main.js             # inicialização comum, seções da Home, menu, terminal
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
  id: "meu-projeto",                 // único, sem espaços (link direto: /projects/#project/meu-projeto)
  name: "Meu Projeto",
  summary: { pt: "1–3 linhas para o card", en: "..." },   // obrigatório
  kind: "authorial",                 // opcional: "own-product" | "authorial" | "commercial"
  featured: 0,                       // opcional: 1–5 = bloco de destaque (ordem)
  tagline: { pt: "Subtítulo", en: "Subtitle" },
  status: "in-progress",             // "live" | "in-progress" | "completed" | "prototype" | "discontinued"
  description: { pt: "...", en: "..." },   // texto longo do estudo de caso
  technologies: ["HTML", "CSS", "JavaScript"],   // chaves de TECHNOLOGIES
  features: { pt: ["..."], en: ["..."] },
  role:     { pt: ["..."], en: ["..."] },
  cover: "assets/covers/projects/meu-projeto.webp",   // + meu-projeto-800.webp
  video: "",                          // opcional (protótipos): toca ao passar o mouse
  links: { demo: "https://...", github: "https://github.com/..." },
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

- Filtros, contadores e o perfil da Home são calculados automaticamente.
- Qualquer seção do estudo de caso deixada vazia é simplesmente ocultada.
- Links vazios aparecem como botão tracejado **"em breve"**.
- Sem `cover` (ou se o arquivo não existir), o card mostra o estado **"Capa oficial pendente"** e um aviso no console. Nunca é trocado por imagem genérica.
- Projetos descontinuados continuam no catálogo, com a capa levemente dessaturada.

> ⚠️ Os textos de **Desafios / Soluções / O que aprendi** do VotAI e as descrições dos protótipos são **rascunhos** baseados nas informações fornecidas. Revise-os com a sua experiência real antes de publicar.

## Como adicionar um modelo (Showcase)

Os modelos ficam em `SHOWCASE` (`js/data.js`) e os segmentos em `SHOWCASE_CATEGORIES`. São demonstrações autorais com marcas fictícias, nunca clientes reais. Códigos internos (ex.: 01.01) **não** devem aparecer em `name`.

```js
{
  id: "restaurante-premium",
  name: { pt: "Restaurante Premium", en: "Premium Restaurant" },
  brand: "Lume",                       // marca fictícia (opcional)
  category: "food",                    // id de SHOWCASE_CATEGORIES
  summary: { pt: "...", en: "..." },
  technologies: ["React", "TypeScript", "Motion"],
  cover: "assets/covers/showcase/restaurante-premium.webp",
  demo: "https://lorenzo-or7.github.io/restaurant-premium-demo/",
}
```

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
| Capa de projeto | `assets/covers/projects/<id>.webp` (1600px) + `<id>-800.webp` | `cover` do projeto |
| Capa de modelo | `assets/covers/showcase/<id>.webp` (1600px) + `<id>-800.webp` | `cover` do modelo |
| Screenshots | `assets/projects/<id>/*.webp` | `caseStudy.screenshots` |
| Vídeo de conceito | `assets/projects/<id>/preview.mp4` | `video` do projeto |
| Logos das tecnologias | `assets/icons/html5.webp` etc. (fundo transparente) | `icon` em `TECHNOLOGIES` |
| Favicon | `assets/icons/favicon.svg` / `apple-touch-icon.png` | substitua os arquivos |
| Imagens de compartilhamento | `assets/images/og-image.png`, `og-projects.png`, `og-showcase.png` (1200×630) | meta tags de cada página |

Sem foto, o site mostra as iniciais **LO**. Se uma imagem não carregar, o site volta automaticamente para o fallback. Prefira **WebP** (converta em [squoosh.app](https://squoosh.app)).

## Como configurar o GitHub

Em `js/data.js`:

```js
githubUsername: "seu-usuario",
```

Isso ativa automaticamente os botões de GitHub (hero, perfil, contato, rodapé), o `@usuario` do perfil e busca na **API pública do GitHub** o número de repositórios, os repositórios atualizados recentemente e as linguagens usadas (com cache de 1 hora).

A seção mostra só números com dado real: contribuições do último ano (gráfico público do perfil), repositórios públicos e data do último push. Sem dado, o item é ocultado (nada de `--`). Para fixar o total de contribuições manualmente:

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
