/* =============================================================
   projects.js — página /projects/
   -------------------------------------------------------------
   • Destaques: projetos com  featured: 1..5  (data.js)
   • Catálogo completo com filtros por estado (animação FLIP)
   • Estudo de caso em <dialog> (link direto: #project/<id>)
   Tudo é gerado a partir de PROJECTS — edite apenas data.js.
   ============================================================= */

const Projects = (() => {
  const esc = U.esc;
  const t = (k, v) => I18N.t(k, v);
  const pick = (v) => I18N.pick(v);

  const STATUSES = ["live", "in-progress", "completed", "prototype", "discontinued"];
  const ORDER = Object.fromEntries(STATUSES.map((s, i) => [s, i]));

  const all = () => PROJECTS.slice();
  const featured = () => PROJECTS.filter((p) => p.featured).sort((a, b) => a.featured - b.featured);
  const catalog = () =>
    PROJECTS
      .map((p, i) => ({ p, i }))
      .sort((a, b) => (a.p.featured || 99) - (b.p.featured || 99) || (ORDER[a.p.status] ?? 9) - (ORDER[b.p.status] ?? 9) || a.i - b.i)
      .map(({ p }) => p);
  const count = (status) => PROJECTS.filter((p) => p.status === status).length;

  let filter = "all";

  /* ---------- Peças ---------- */
  const statusBadge = (status) =>
    `<span class="status status--${esc(status)}"><span class="status__dot" aria-hidden="true"></span>${esc(t("status." + status))}</span>`;

  const kindLabel = (p) => (p.kind ? `<span class="kind mono">${esc(t("kind." + p.kind))}</span>` : "");

  const list = (items, cls = "checklist") =>
    `<ul class="${cls}">${(items || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

  function hasCase(p) {
    const cs = p.caseStudy || {};
    return Boolean(cs.problem || cs.idea || cs.challenges || cs.solutions || (cs.screenshots && cs.screenshots.length));
  }

  function actions(p, { primary = false } = {}) {
    const demoLabel = p.status === "live" ? t("projects.view") : t("projects.demo");
    return `
      ${U.linkButton({ href: p.links.demo, label: demoLabel, iconId: "external", variant: primary ? "primary" : "ghost" })}
      ${p.links.github ? U.linkButton({ href: p.links.github, label: "GitHub", iconId: "github" }) : ""}
      ${hasCase(p) ? `<button type="button" class="btn btn--text btn--sm" data-case="${esc(p.id)}" aria-haspopup="dialog">${esc(t(primary ? "projects.case" : "projects.more"))} ${U.icon("arrow", "btn__icon")}</button>` : ""}`;
  }

  /* ---------- Destaques (hierarquia visual, sem rótulo de categoria) ---------- */
  function spot(p, lead) {
    return `
      <article class="spot${lead ? " spot--lead" : ""}" data-spotlight data-reveal="rise" aria-labelledby="s-${esc(p.id)}-title">
        <div class="spot__media media" data-reveal-media>
          ${U.cover({ name: p.name, cover: p.cover, eager: lead, sizes: lead ? "(max-width: 960px) 100vw, 62vw" : "(max-width: 768px) 100vw, 50vw" })}
        </div>
        <div class="spot__body">
          <p class="spot__meta">${statusBadge(p.status)}${kindLabel(p)}</p>
          <h2 class="spot__title" id="s-${esc(p.id)}-title">${esc(p.name)}</h2>
          <p class="spot__tagline">${esc(pick(p.tagline))}</p>
          <p class="spot__desc">${esc(pick(p.summary))}</p>
          <ul class="tags tags--sm" aria-label="${esc(t("projects.tech"))}">${p.technologies.map(U.techTag).join("")}</ul>
          <div class="spot__actions">${actions(p, { primary: true })}</div>
        </div>
      </article>`;
  }

  function renderFeatured() {
    const root = document.getElementById("featured-projects");
    if (!root) return;
    const [lead, ...rest] = featured();
    const pairs = [];
    for (let i = 0; i < rest.length; i += 2) pairs.push(rest.slice(i, i + 2));
    root.innerHTML = `
      ${lead ? spot(lead, true) : ""}
      ${pairs.map((pair) => `<div class="spot-row">${pair.map((p) => spot(p, false)).join("")}</div>`).join("")}`;
  }

  /* ---------- Filtros ---------- */
  function renderFilters() {
    const root = document.getElementById("project-filters");
    if (!root) return;
    const opts = [["all", PROJECTS.length], ...STATUSES.map((s) => [s, count(s)])];
    root.innerHTML = opts
      .map(([id, n]) => `
        <button type="button" class="filter${id !== "all" ? ` filter--${id}` : ""}" data-filter="${id}" aria-pressed="${id === filter}">
          ${id !== "all" ? `<span class="status__dot" aria-hidden="true"></span>` : ""}
          <span>${esc(t("filter." + id))}</span><span class="filter__count mono">${n}</span>
        </button>`)
      .join("");
  }

  /* ---------- Catálogo ---------- */
  function card(p) {
    return `
      <article class="pcard${p.status === "discontinued" ? " is-discontinued" : ""}" data-status="${esc(p.status)}" data-spotlight data-reveal="rise" aria-labelledby="c-${esc(p.id)}-title">
        <div class="pcard__media media" data-reveal-media>
          ${U.cover({ name: p.name, cover: p.cover, video: p.video, sizes: "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" })}
        </div>
        <div class="pcard__body">
          <p class="pcard__meta">${statusBadge(p.status)}${kindLabel(p)}</p>
          <h3 class="pcard__title" id="c-${esc(p.id)}-title">${esc(p.name)}</h3>
          <p class="pcard__tagline">${esc(pick(p.tagline))}</p>
          <p class="pcard__desc">${esc(pick(p.summary))}</p>
          <ul class="tags tags--sm" aria-label="${esc(t("projects.tech"))}">${p.technologies.slice(0, 4).map(U.techTag).join("")}</ul>
          <div class="pcard__actions">${actions(p)}</div>
        </div>
      </article>`;
  }

  function renderCatalog() {
    const root = document.getElementById("project-catalog");
    if (!root) return;
    root.innerHTML = catalog().map(card).join("");
    applyFilter({ animate: false });

    // Vídeos tocam só ao passar o mouse / focar (e nunca com movimento reduzido)
    root.querySelectorAll("video").forEach((v) => {
      const c = v.closest(".pcard");
      const play = () => { if (!U.reducedMotion()) v.play().catch(() => {}); };
      const stop = () => v.pause();
      c.addEventListener("mouseenter", play); c.addEventListener("mouseleave", stop);
      c.addEventListener("focusin", play); c.addEventListener("focusout", stop);
    });
  }

  function applyFilter({ animate = true } = {}) {
    const root = document.getElementById("project-catalog");
    if (!root) return;
    const items = [...root.children];
    const show = (el) => filter === "all" || el.dataset.status === filter;
    if (animate) U.flipFilter(items, show);
    else items.forEach((el) => { el.hidden = !show(el); });

    const n = items.filter((el) => !el.hidden).length;
    const out = document.getElementById("project-count");
    if (out) out.textContent = t("projects.showing", { n, total: items.length });
    const empty = document.getElementById("project-empty");
    if (empty) empty.hidden = n > 0;
    document.querySelectorAll("#project-filters [data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === filter)));
  }

  function setFilter(next) {
    if (!["all", ...STATUSES].includes(next) || next === filter) return;
    filter = next;
    applyFilter();
    const url = new URL(location.href);
    if (filter === "all") url.searchParams.delete("status"); else url.searchParams.set("status", filter);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
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
    const allShots = cs.screenshots || [];
    const landscape = allShots.filter((s) => !s.portrait);
    const shots = allShots
      .map(
        (s) => `<figure class="case__shot${s.portrait ? " is-portrait" : ""}${!s.portrait && landscape.length % 2 && s === landscape[0] ? " is-wide" : ""}">
          <a href="${esc(U.asset(s.src))}" target="_blank" rel="noopener noreferrer" title="${esc(t("case.open"))}">
            <img src="${esc(U.asset(s.src))}" alt="${esc(pick(s.caption) || p.name)}" loading="lazy" decoding="async">
          </a>
          ${s.caption ? `<figcaption>${esc(pick(s.caption))}</figcaption>` : ""}
        </figure>`
      )
      .join("");

    const links = `<div class="case__links">${actions({ ...p, caseStudy: {} }, { primary: true })}</div>`;
    const projectBody = `<p>${esc(pick(p.description || p.summary))}</p>${p.context ? `<p class="case__role mono">${esc(t("case.context"))}: <span class="accent">${esc(pick(p.context))}</span></p>` : ""}${p.role ? `<p class="case__role mono">${esc(t("case.role"))}:</p>${list(pick(p.role), "chips")}` : ""}`;

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
      <div class="case__cover media">${U.cover({ name: p.name, cover: p.cover, sizes: "(max-width: 960px) 100vw, 960px" })}</div>
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
    if (updateHash) history.replaceState(null, "", `${location.pathname}${location.search}#project/${id}`);
    d.querySelector("[data-case-close]")?.focus();
  }

  function close() {
    const d = dialog();
    if (d?.open) d.close();
  }

  function onClosed() {
    openId = null;
    document.documentElement.classList.remove("has-modal");
    if (location.hash.startsWith("#project/")) history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  function renderAll() {
    renderFeatured();
    renderFilters();
    renderCatalog();
  }

  function init() {
    const initial = new URLSearchParams(location.search).get("status");
    if (initial && STATUSES.includes(initial)) filter = initial;

    renderAll();

    document.addEventListener("click", (e) => {
      const f = e.target.closest("#project-filters [data-filter]");
      if (f) { setFilter(f.dataset.filter); return; }
      const trigger = e.target.closest("[data-case]");
      if (trigger) { open(trigger.dataset.case); return; }
      if (e.target.closest("[data-case-close]")) close();
    });

    const d = dialog();
    if (d) {
      d.addEventListener("close", onClosed);
      d.addEventListener("click", (e) => { if (e.target === d) close(); });
    }

    // Link direto: /projects/#project/votai
    const m = location.hash.match(/^#project\/([\w-]+)/);
    if (m) open(m[1], { updateHash: false });

    document.addEventListener("langchange", () => {
      renderAll();
      U.observeReveal(document.getElementById("main"), { instant: true });
      if (openId) document.getElementById("case-content").innerHTML = renderCase(PROJECTS.find((x) => x.id === openId));
    });
  }

  return { init, open, close, all, featured, count };
})();
