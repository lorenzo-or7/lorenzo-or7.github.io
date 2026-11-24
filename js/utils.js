/* =============================================================
   utils.js — pequenas funções compartilhadas por todas as páginas
   ============================================================= */

const U = (() => {
  const esc = (str) =>
    String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const icon = (id, cls = "icon") => `<svg class="${cls}" viewBox="0 0 16 16" aria-hidden="true"><use href="#i-${id}"/></svg>`;

  const githubUrl = () => (PROFILE.githubUsername ? `https://github.com/${PROFILE.githubUsername}` : "");

  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Caminhos: os dados usam caminhos relativos à raiz do site
     ("assets/..."). Páginas internas declaram <html data-root="../">. */
  const ROOT = document.documentElement.dataset.root || "";
  const isExternal = (p) => /^(https?:)?\/\//.test(p) || /^(mailto|tel|data):/.test(p);
  const asset = (p) => (!p || isExternal(p) || p.startsWith("/") ? p || "" : ROOT + p);
  /* Ícones de tecnologia aparecem com 26–44px: usa a versão de 96px (nítida em telas 2x),
     em vez do original de 256px. */
  const iconSrc = (p) => asset(String(p || "").replace(/^assets\/icons\/(?!96\/)/, "assets/icons/96/"));

  /** Dados de uma tecnologia pela chave de TECHNOLOGIES. */
  function tech(key) {
    const t = TECHNOLOGIES[key] || { name: key, short: key.slice(0, 2), color: "#888" };
    return { key, ...t, label: I18N.pick(t.name) };
  }

  /** Badge de tecnologia no estilo GitHub (bolinha colorida + nome). */
  function techTag(key) {
    const t = tech(key);
    return `<li class="tag"><span class="tag__dot" style="--dot:${t.color}" aria-hidden="true"></span>${esc(t.label)}</li>`;
  }

  /** Ícone de tecnologia: imagem se configurada, senão a sigla. */
  function techIcon(key) {
    const t = tech(key);
    const initials = `<span class="tech-icon__short" aria-hidden="true">${esc(t.short)}</span>`;
    if (!t.icon) return `<span class="tech-icon" style="--tech:${t.color}">${initials}</span>`;
    return `<span class="tech-icon has-img" style="--tech:${t.color}"><img src="${esc(iconSrc(t.icon))}" alt="" width="44" height="44" loading="lazy" decoding="async" onerror="this.parentNode.classList.remove('has-img');this.remove()">${initials}</span>`;
  }

  /**
   * Link externo ou botão "em breve" quando o link ainda não existe.
   * opts: { href, label, iconId, variant, external, attrs }
   */
  function linkButton({ href, label, iconId, variant = "ghost", external = true, attrs = "" }) {
    const ic = iconId ? icon(iconId, "btn__icon") : "";
    if (!href) {
      return `<span class="btn btn--${variant} btn--sm is-disabled" aria-disabled="true">${ic}${esc(label)} <em class="btn__soon">${esc(I18N.t("projects.soon"))}</em></span>`;
    }
    const ext = external ? ` target="_blank" rel="noopener noreferrer"` : "";
    const sr = external ? `<span class="visually-hidden"> ${esc(I18N.t("external"))}</span>` : "";
    return `<a class="btn btn--${variant} btn--sm" href="${esc(href)}"${ext}${attrs}>${ic}${esc(label)}${sr}</a>`;
  }

  /**
   * Estado controlado quando a capa OFICIAL não existe (ou não carregou).
   * Nunca troca a capa por uma imagem genérica: mostra o nome do item e
   * um rótulo explícito de "capa oficial pendente".
   */
  function coverPending(name) {
    return `
      <div class="cover-pending" role="img" aria-label="${esc(name)}: ${esc(I18N.t("projects.coverPending"))}">
        <span class="cover-pending__name">${esc(name)}</span>
        <span class="cover-pending__label mono">${icon("image", "icon icon--sm")} ${esc(I18N.t("projects.coverPending"))}</span>
      </div>`;
  }

  /** Erro de carregamento da capa: registra e troca pelo estado controlado. */
  function coverError(img) {
    const name = img.dataset.name || "";
    console.warn(`[portfolio] Capa oficial não encontrada: ${img.getAttribute("src")} (${name})`);
    const box = fromHTML(coverPending(name));
    img.replaceWith(box);
  }

  /**
   * Capa oficial (projetos e modelos). Usa a versão "-800.webp" em telas
   * menores via srcset. opts: { name, cover, sizes, eager, altKey, video }
   */
  function cover({ name, cover: src, sizes = "(max-width: 768px) 100vw, 50vw", eager = false, altKey = "projects.coverAlt", video = "" }) {
    if (!src) return coverPending(name);
    const full = asset(src);
    const small = full.replace(/\.webp$/, "-800.webp");
    const alt = `${I18N.t(altKey)}: ${name}`;
    if (video) {
      return `<video class="media__video" src="${esc(asset(video))}" poster="${esc(full)}" muted loop playsinline preload="none" aria-label="${esc(I18N.t("projects.videoLabel"))}: ${esc(name)}"></video>
              <span class="media__play" aria-hidden="true">${icon("play")}</span>`;
    }
    return `<img class="media__img" src="${esc(full)}" srcset="${esc(small)} 800w, ${esc(full)} 1600w" sizes="${esc(sizes)}"
              width="1600" height="900" alt="${esc(alt)}" data-name="${esc(name)}"
              ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" onerror="U.coverError(this)">`;
  }

  const fromHTML = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  /* ---------------------------------------------------------
     Revelação na rolagem: [data-reveal] (+ variantes em motion.css)
     --------------------------------------------------------- */
  const revealObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("is-visible");
                revealObserver.unobserve(e.target);
              }
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        )
      : null;

  function observeReveal(root = document, { instant = false } = {}) {
    if (!root) return;
    root.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
      if (revealObserver && !reducedMotion() && !instant) revealObserver.observe(el);
      else el.classList.add("is-visible");
    });
  }

  /* ---------------------------------------------------------
     Filtro com animação de layout (técnica FLIP, sem bibliotecas).
     items: elementos do grid · show(el) → boolean
     --------------------------------------------------------- */
  function flipFilter(items, show) {
    const animate = !reducedMotion() && typeof Element.prototype.animate === "function";
    const first = new Map();
    if (animate) items.forEach((el) => { if (!el.hidden) first.set(el, el.getBoundingClientRect()); });

    const entering = [];
    items.forEach((el) => {
      const visible = show(el);
      if (visible && el.hidden) entering.push(el);
      el.hidden = !visible;
      el.classList.add("is-visible"); // garante que não fique preso no estado de revelação
    });
    if (!animate) return;

    const vh = window.innerHeight;
    items.forEach((el) => {
      if (el.hidden) return;
      const a = first.get(el);
      if (!a) return;
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left, dy = a.top - b.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      // Veio de longe (fora da tela): entra no lugar em vez de "voar" pela página
      if (Math.abs(dy) > vh * 0.75) { entering.push(el); return; }
      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
        { duration: 520, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" }
      );
    });
    entering.forEach((el, i) => {
      el.animate(
        [{ opacity: 0, transform: "translateY(14px) scale(0.98)" }, { opacity: 1, transform: "none" }],
        { duration: 460, delay: Math.min(i, 8) * 35, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "backwards" }
      );
    });
  }

  return { esc, icon, githubUrl, reducedMotion, asset, iconSrc, tech, techTag, techIcon, linkButton, cover, coverPending, coverError, fromHTML, observeReveal, flipFilter };
})();
