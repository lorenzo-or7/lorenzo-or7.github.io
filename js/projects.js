/* =============================================================
   projects.js — projetos em destaque, conceitos e estudo de caso
   -------------------------------------------------------------
   Tudo é gerado a partir de PROJECTS (js/data.js).
   Para adicionar um projeto, edite apenas data.js.
   ============================================================= */

const Projects = (() => {
  const esc = U.esc;
  const t = (k) => I18N.t(k);
  const pick = (v) => I18N.pick(v);

  const featured = () => PROJECTS.filter((p) => p.category === "featured");
  const concepts = () => PROJECTS.filter((p) => p.category === "concept");

  const statusBadge = (status) =>
    `<span class="status status--${esc(status)}"><span class="status__dot" aria-hidden="true"></span>${esc(t("status." + status))}</span>`;

  const list = (items, cls = "checklist") =>
    `<ul class="${cls}">${(items || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

  /* ---------- Projetos em destaque ---------- */
  function renderFeatured() {
    const root = document.getElementById("featured-projects");
    if (!root) return;

    root.innerHTML = featured()
      .map((p, i) => {
        const num = String(i + 1).padStart(2, "0");
        return `
        <article class="feature" data-reveal aria-labelledby="p-${esc(p.id)}-title">
          <div class="feature__media media">
            ${U.media(p)}
          </div>

          <div class="feature__body">
            <div class="feature__main">
              <p class="feature__meta mono">
                <span class="feature__label">${esc(t("projects.label")).toUpperCase()} ${num}</span>
                ${p.context ? `<span class="feature__context">· ${esc(pick(p.context))}</span>` : ""}
                ${statusBadge(p.status)}
              </p>
              <h3 class="feature__title" id="p-${esc(p.id)}-title">${esc(p.name)}</h3>
              <p class="feature__tagline">${esc(pick(p.tagline))}</p>
              <p class="feature__desc">${esc(pick(p.description))}</p>

              <h4 class="visually-hidden">${esc(t("projects.tech"))}</h4>
              <ul class="tags">${p.technologies.map(U.techTag).join("")}</ul>

              <div class="feature__actions">
                ${U.linkButton({ href: p.links.demo, label: t("projects.view"), iconId: "external", variant: "primary" })}
                ${U.linkButton({ href: p.links.github, label: "GitHub", iconId: "github" })}
                <button type="button" class="btn btn--text btn--sm" data-case="${esc(p.id)}">
                  ${esc(t("projects.case"))} ${U.icon("arrow", "btn__icon")}
                </button>
              </div>
            </div>

            <div class="feature__details">
              <div class="feature__block">
                <h4 class="feature__block-title mono">${esc(t("projects.features"))}</h4>
                ${list(pick(p.features))}
              </div>
              <div class="feature__block">
                <h4 class="feature__block-title mono">${esc(t("projects.role"))}</h4>
                ${list(pick(p.role), "chips")}
              </div>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  /* ---------- Conceitos de websites ---------- */
  function renderConcepts() {
    const root = document.getElementById("concept-projects");
    if (!root) return;

    root.innerHTML = concepts()
      .map(
        (p) => `
        <article class="concept" data-reveal aria-labelledby="c-${esc(p.id)}-title">
          <div class="concept__media media${p.video ? " has-video" : ""}">
            ${U.media(p)}
          </div>
          <div class="concept__body">
            <p class="concept__type mono">${esc(t("type." + (p.type || "website-concept")))}</p>
            <h4 class="concept__title" id="c-${esc(p.id)}-title">${esc(p.name)} <span>${esc(pick(p.tagline))}</span></h4>
            <p class="concept__desc">${esc(pick(p.description))}</p>
            <ul class="tags tags--sm">${p.technologies.map(U.techTag).join("")}</ul>
            <div class="concept__actions">
              ${U.linkButton({ href: p.links.demo, label: t("projects.demo"), iconId: "external" })}
              ${U.linkButton({ href: p.links.github, label: "GitHub", iconId: "github" })}
              <button type="button" class="btn btn--text btn--sm" data-case="${esc(p.id)}">
                ${esc(t("projects.more"))} ${U.icon("arrow", "btn__icon")}
              </button>
            </div>
          </div>
        </article>`
      )
      .join("");

    // Vídeos tocam só ao passar o mouse / focar (e nunca com movimento reduzido)
    root.querySelectorAll(".has-video").forEach((box) => {
      const v = box.querySelector("video");
      const card = box.closest(".concept");
      const play = () => { if (!U.reducedMotion()) v.play().catch(() => {}); };
      const stop = () => { v.pause(); };
      card.addEventListener("mouseenter", play);
      card.addEventListener("mouseleave", stop);
      card.addEventListener("focusin", play);
      card.addEventListener("focusout", stop);
    });
  }

  /* ---------- Modal: estudo de caso ---------- */
  const dialog = () => document.getElementById("case-dialog");
  let openId = null;
  let lastFocus = null;

  function caseSection(n, titleKey, body) {
    if (!body) return "";
    return `
      <section class="case__section">
        <h3 class="case__label mono"><span class="accent">${String(n).padStart(2, "0")}</span> ${esc(t(titleKey))}</h3>
        <div class="case__body">${body}</div>
      </section>`;
  }

  function renderCase(p) {
    const cs = p.caseStudy || {};
    const txt = (v) => (pick(v) ? `<p>${esc(pick(v))}</p>` : "");
    const arr = (v, cls) => (pick(v) && pick(v).length ? list(pick(v), cls) : "");
    // Paisagem ocupa meia linha (ou a linha toda, se sobrar uma); retrato, um terço
    const allShots = cs.screenshots || [];
    const landscape = allShots.filter((s) => !s.portrait);
    const shots = allShots
      .map(
        (s) => `<figure class="case__shot${s.portrait ? " is-portrait" : ""}${!s.portrait && landscape.length % 2 && s === landscape[0] ? " is-wide" : ""}">
          <a href="${esc(s.src)}" target="_blank" rel="noopener noreferrer" title="${esc(t("case.open"))}">
            <img src="${esc(s.src)}" alt="${esc(pick(s.caption) || p.name)}" loading="lazy" decoding="async">
          </a>
          ${s.caption ? `<figcaption>${esc(pick(s.caption))}</figcaption>` : ""}
        </figure>`
      )
      .join("");

    const links = `<div class="case__links">
        ${U.linkButton({ href: p.links.demo, label: t(p.category === "featured" ? "projects.view" : "projects.demo"), iconId: "external", variant: "primary" })}
        ${U.linkButton({ href: p.links.github, label: "GitHub", iconId: "github" })}
      </div>`;

    const projectBody = `<p>${esc(pick(p.description))}</p>${p.context ? `<p class="case__role mono">${esc(t("case.context"))}: <span class="accent">${esc(pick(p.context))}</span></p>` : ""}${p.role ? `<p class="case__role mono">${esc(t("case.role"))}:</p>${list(pick(p.role), "chips")}` : ""}`;

    let n = 0;
    const sections = [
      ["case.project", projectBody],
      ["case.problem", txt(cs.problem)],
      ["case.idea", txt(cs.idea)],
      ["case.design", txt(cs.design)],
      ["case.tech", `<ul class="tags">${p.technologies.map(U.techTag).join("")}</ul>`],
      ["case.challenges", arr(cs.challenges, "numbered")],
      ["case.solutions", arr(cs.solutions, "numbered")],
      ["case.features", arr(p.features)],
      ["case.screenshots", shots ? `<div class="case__shots">${shots}</div>` : ""],
      ["case.learned", arr(cs.learned)],
      ["case.process", pick(cs.process) ? `<p class="case__process">${esc(pick(cs.process))}</p>` : ""],
      ["case.links", links],
    ]
      .map(([k, body]) => (body ? caseSection(++n, k, body) : ""))
      .join("");

    return `
      <header class="case__head">
        <div>
          <p class="case__kicker mono">${esc(t("case.label"))} · ${statusBadge(p.status)}</p>
          <h2 class="case__title" id="case-title">${esc(p.name)}</h2>
          <p class="case__tagline">${esc(pick(p.tagline))}</p>
        </div>
        <button type="button" class="case__close" data-case-close aria-label="${esc(t("case.close"))}">${U.icon("close")}</button>
      </header>
      <div class="case__cover media">${U.media(p)}</div>
      <div class="case__sections">${sections}</div>`;
  }

  function open(id, { updateHash = true } = {}) {
    const p = PROJECTS.find((x) => x.id === id);
    const d = dialog();
    if (!p || !d) return;
    openId = id;
    lastFocus = document.activeElement;
    document.getElementById("case-content").innerHTML = renderCase(p);
    if (!d.open) d.showModal();
    d.scrollTop = 0;
    document.documentElement.classList.add("has-modal");
    if (updateHash) history.replaceState(null, "", `#project/${id}`);
    d.querySelector("[data-case-close]")?.focus();
  }

  function close() {
    const d = dialog();
    if (d?.open) d.close();
  }

  function onClosed() {
    openId = null;
    document.documentElement.classList.remove("has-modal");
    if (location.hash.startsWith("#project/")) history.replaceState(null, "", "#projects");
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  function init() {
    renderFeatured();
    renderConcepts();

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-case]");
      if (trigger) { open(trigger.dataset.case); return; }
      if (e.target.closest("[data-case-close]")) close();
    });

    const d = dialog();
    if (d) {
      d.addEventListener("close", onClosed);
      // Clique fora do conteúdo (no backdrop) fecha o modal
      d.addEventListener("click", (e) => { if (e.target === d) close(); });
    }

    // Link direto: seusite.com/#project/votai
    const m = location.hash.match(/^#project\/([\w-]+)/);
    if (m) open(m[1], { updateHash: false });

    document.addEventListener("langchange", () => {
      renderFeatured();
      renderConcepts();
      U.observeReveal(document.getElementById("projects"), { instant: true });
      if (openId) {
        document.getElementById("case-content").innerHTML = renderCase(PROJECTS.find((x) => x.id === openId));
      }
    });
  }

  return { init, open, close, featured, concepts };
})();
