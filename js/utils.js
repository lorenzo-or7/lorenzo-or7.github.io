/* =============================================================
   utils.js — pequenas funções compartilhadas
   ============================================================= */

const U = (() => {
  const esc = (str) =>
    String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const icon = (id, cls = "icon") => `<svg class="${cls}" viewBox="0 0 16 16" aria-hidden="true"><use href="#i-${id}"/></svg>`;

  const githubUrl = () => (PROFILE.githubUsername ? `https://github.com/${PROFILE.githubUsername}` : "");

  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    return `<span class="tech-icon has-img" style="--tech:${t.color}"><img src="${esc(t.icon)}" alt="" width="28" height="28" loading="lazy" decoding="async" onerror="this.parentNode.classList.remove('has-img');this.remove()">${initials}</span>`;
  }

  /**
   * Link externo ou botão "em breve" quando o link ainda não existe.
   * opts: { href, label, icon, variant }
   */
  function linkButton({ href, label, iconId, variant = "ghost", external = true }) {
    const ic = iconId ? icon(iconId, "btn__icon") : "";
    if (!href) {
      return `<span class="btn btn--${variant} btn--sm is-disabled" aria-disabled="true">${ic}${esc(label)} <em class="btn__soon">${esc(I18N.t("projects.soon"))}</em></span>`;
    }
    const ext = external
      ? ` target="_blank" rel="noopener noreferrer"`
      : "";
    const sr = external ? `<span class="visually-hidden"> ${esc(I18N.t("external"))}</span>` : "";
    return `<a class="btn btn--${variant} btn--sm" href="${esc(href)}"${ext}>${ic}${esc(label)}${sr}</a>`;
  }

  /** Prévia ilustrada usada quando o projeto ainda não tem imagem. */
  function placeholder(p) {
    const ph = p.placeholder || {};
    const style = `--ph-bg:${ph.bg || "var(--surface-2)"};--ph-ink:${ph.ink || "var(--text)"};--ph-accent:${ph.accent || "var(--accent)"}`;
    return `
      <div class="frame${ph.serif ? " frame--serif" : ""}" style="${style}" aria-hidden="true">
        <div class="frame__bar"><i></i><i></i><i></i><span class="frame__url">${esc(ph.url || p.id)}.com</span></div>
        <div class="frame__canvas">
          <div class="frame__nav"><b>${esc(p.name)}</b><span><i></i><i></i><i></i></span></div>
          <div class="frame__hero">
            <strong>${esc(p.name)}</strong>
            <em>${esc(I18N.pick(p.tagline))}</em>
            <span class="frame__btn"></span>
          </div>
          <div class="frame__grid"><i></i><i></i><i></i></div>
        </div>
      </div>`;
  }

  /** Capa do projeto: vídeo, imagem ou prévia ilustrada. */
  function media(p) {
    const alt = `${I18N.t("projects.coverAlt")}: ${p.name}`;
    if (p.video) {
      const poster = p.image ? ` poster="${esc(p.image)}"` : "";
      return `<video class="media__video" src="${esc(p.video)}"${poster} muted loop playsinline preload="none" aria-label="${esc(I18N.t("projects.videoLabel"))}: ${esc(p.name)}"></video>
              <span class="media__play" aria-hidden="true">${icon("play")}</span>`;
    }
    if (p.image) {
      return `<img class="media__img" src="${esc(p.image)}" alt="${esc(alt)}" loading="lazy" decoding="async"
                onerror="this.replaceWith(U.fromHTML(U.placeholder(PROJECTS.find(x=>x.id==='${esc(p.id)}'))))">`;
    }
    return placeholder(p);
  }

  const fromHTML = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  /** Observa elementos [data-reveal] para animar a entrada. */
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

  return { esc, icon, githubUrl, reducedMotion, tech, techTag, techIcon, linkButton, placeholder, media, fromHTML, observeReveal };
})();
