/* =============================================================
   showcase.js — página /showcase/ (Modelos)
   -------------------------------------------------------------
   • 29 modelos de SHOWCASE (data.js), filtrados por segmento
   • Os códigos internos (01.01 etc.) nunca são exibidos
   • "Quero algo nessa direção" leva a escolha até o bloco
     comercial no fim da página (Instagram / e-mail da Or7)
   ============================================================= */

const Showcase = (() => {
  const esc = U.esc;
  const t = (k, v) => I18N.t(k, v);
  const pick = (v) => I18N.pick(v);

  const cats = () => SHOWCASE_CATEGORIES.filter((c) => SHOWCASE.some((m) => m.category === c.id));
  const catLabel = (id) => pick((SHOWCASE_CATEGORIES.find((c) => c.id === id) || {}).label);

  let filter = "all";
  let chosen = null;

  /* ---------- Hero: indicadores editoriais + composição de capas ---------- */
  // Capas de segmentos bem diferentes entre si (gastronomia, saúde, automotivo, hotelaria)
  const HERO_COVERS = ["restaurante-premium", "clinica-odontologica", "showroom-automotivo", "hotel-premium"];

  function renderHero() {
    const stats = document.getElementById("showcase-stats");
    if (stats) {
      const items = [
        [SHOWCASE.length, "", "showcase.statModels"],
        [cats().length, "", "showcase.statSegments"],
        [100, "%", "showcase.statOriginal"],
      ];
      stats.innerHTML = items
        .map(([n, suffix, key]) => `<div class="sc-stat"><dt class="sc-stat__label mono">${esc(t(key))}</dt><dd class="sc-stat__value" data-count="${n}" data-suffix="${suffix}">${n}${suffix}</dd></div>`)
        .join("");
    }

    const visual = document.getElementById("showcase-hero-covers");
    if (visual && !visual.childElementCount) {
      const models = HERO_COVERS.map((id) => SHOWCASE.find((m) => m.id === id)).filter((m) => m && m.cover);
      // Camadas sobrepostas: a camada recebe o deslocamento (JS), o card guarda a inclinação (CSS)
      const DEPTH = [-0.7, 0.45, -0.35, 1];
      visual.innerHTML = `<div class="sc-stack">${models.map((m, i) => `
        <div class="sc-layer sc-layer--${i + 1}" data-depth="${DEPTH[i]}">
          <figure class="sc-card" style="--i:${i}">
            <img src="${esc(U.asset(m.cover.replace(/\.webp$/, "-800.webp")))}" alt="" width="800" height="450" decoding="async" fetchpriority="${i < 2 ? "high" : "low"}" onerror="this.closest('.sc-layer').remove()">
            <figcaption class="sc-card__tag mono" data-cat="${esc(m.category)}">${esc(catLabel(m.category))}</figcaption>
          </figure>
        </div>`).join("")}</div>`;
    } else if (visual) {
      visual.querySelectorAll(".sc-card__tag").forEach((tag) => { tag.textContent = catLabel(tag.dataset.cat); });
    }
  }

  function renderFilters() {
    const root = document.getElementById("showcase-filters");
    if (!root) return;
    const opts = [{ id: "all", label: t("filter.all"), n: SHOWCASE.length },
      ...cats().map((c) => ({ id: c.id, label: pick(c.label), n: SHOWCASE.filter((m) => m.category === c.id).length }))];
    root.innerHTML = opts
      .map((o) => `<button type="button" class="filter" data-filter="${esc(o.id)}" aria-pressed="${o.id === filter}"><span>${esc(o.label)}</span><span class="filter__count mono">${o.n}</span></button>`)
      .join("");
  }

  function card(m) {
    const name = pick(m.name);
    return `
      <article class="mcard" data-category="${esc(m.category)}" data-spotlight data-reveal="rise" aria-labelledby="m-${esc(m.id)}-title">
        <a class="mcard__media media" href="${esc(m.demo)}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true" data-reveal-media>
          ${U.cover({ name, cover: m.cover, altKey: "showcase.coverAlt", sizes: "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" })}
          <span class="mcard__open" aria-hidden="true">${U.icon("external", "icon icon--sm")}</span>
        </a>
        <div class="mcard__body">
          <p class="mcard__cat mono">${esc(catLabel(m.category))}</p>
          <h2 class="mcard__title" id="m-${esc(m.id)}-title">${esc(name)}</h2>
          ${m.brand ? `<p class="mcard__brand"><span class="mono">${esc(t("showcase.brand"))}</span> ${esc(m.brand)}</p>` : ""}
          <p class="mcard__desc">${esc(pick(m.summary))}</p>
          <ul class="tags tags--sm" aria-label="${esc(t("projects.tech"))}">${(m.technologies || []).map(U.techTag).join("")}</ul>
          <div class="mcard__actions">
            ${U.linkButton({ href: m.demo, label: t("showcase.open"), iconId: "external" })}
            <button type="button" class="btn btn--text btn--sm mcard__want" data-want="${esc(m.id)}">${esc(t("showcase.want"))} ${U.icon("arrow", "btn__icon")}</button>
          </div>
        </div>
      </article>`;
  }

  function renderGrid() {
    const root = document.getElementById("showcase-grid");
    if (!root) return;
    root.innerHTML = SHOWCASE.map(card).join("");
    applyFilter({ animate: false });
  }

  function applyFilter({ animate = true } = {}) {
    const root = document.getElementById("showcase-grid");
    if (!root) return;
    const items = [...root.children];
    const show = (el) => filter === "all" || el.dataset.category === filter;
    if (animate) U.flipFilter(items, show);
    else items.forEach((el) => { el.hidden = !show(el); });
    const n = items.filter((el) => !el.hidden).length;
    const out = document.getElementById("showcase-showing");
    if (out) out.textContent = t("projects.showing", { n, total: items.length });
    document.querySelectorAll("#showcase-filters [data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === filter)));
  }

  function setFilter(next) {
    const valid = ["all", ...cats().map((c) => c.id)];
    if (!valid.includes(next) || next === filter) return;
    filter = next;
    applyFilter();
    const url = new URL(location.href);
    if (filter === "all") url.searchParams.delete("segment"); else url.searchParams.set("segment", filter);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  /* ---------- Bloco comercial ---------- */
  function renderCta() {
    const root = document.getElementById("direction-actions");
    if (!root) return;
    const m = chosen ? SHOWCASE.find((x) => x.id === chosen) : null;
    const subject = m ? `${t("showcase.mailSubjectChosen")} ${pick(m.name)}` : t("showcase.mailSubject");
    const chip = document.getElementById("direction-chosen");
    if (chip) {
      chip.hidden = !m;
      chip.innerHTML = m
        ? `<span class="mono">${esc(t("showcase.ctaChosen"))}</span> <strong>${esc(pick(m.name))}</strong>
           <button type="button" class="direction__clear" data-want-clear aria-label="${esc(t("showcase.ctaClear"))}">${U.icon("close", "icon icon--sm")}</button>`
        : "";
    }
    root.innerHTML = `
      ${PROFILE.instagram ? `<a class="btn btn--primary" href="${esc(PROFILE.instagram)}" target="_blank" rel="noopener noreferrer" data-magnetic>${U.icon("instagram", "btn__icon")}${esc(t("showcase.ctaInstagram"))}<span class="visually-hidden"> ${esc(t("external"))}</span></a>` : ""}
      ${PROFILE.email ? `<a class="btn btn--ghost" href="mailto:${esc(PROFILE.email)}?subject=${encodeURIComponent(subject)}">${U.icon("mail", "btn__icon")}${esc(t("showcase.ctaEmail"))}</a>` : ""}`;
  }

  function choose(id) {
    chosen = id;
    renderCta();
    const target = document.getElementById("direction");
    if (!target) return;
    target.scrollIntoView({ behavior: U.reducedMotion() ? "auto" : "smooth", block: "center" });
    target.classList.remove("is-pulsing");
    void target.offsetWidth; // reinicia a animação de destaque
    target.classList.add("is-pulsing");
    document.getElementById("direction-title")?.focus({ preventScroll: true });
  }

  function renderAll() {
    renderHero();
    renderFilters();
    renderGrid();
    renderCta();
  }

  function init() {
    const initial = new URLSearchParams(location.search).get("segment");
    if (initial && cats().some((c) => c.id === initial)) filter = initial;
    renderAll();

    document.addEventListener("click", (e) => {
      const f = e.target.closest("#showcase-filters [data-filter]");
      if (f) { setFilter(f.dataset.filter); return; }
      const w = e.target.closest("[data-want]");
      if (w) { choose(w.dataset.want); return; }
      if (e.target.closest("[data-want-clear]")) { chosen = null; renderCta(); }
    });

    document.addEventListener("langchange", () => {
      renderAll();
      U.observeReveal(document.getElementById("main"), { instant: true });
    });
  }

  return { init };
})();
