/* =============================================================
   github.js — seção "GitHub Activity"
   -------------------------------------------------------------
   • Sem usuário configurado: mostra apenas dados reais do site
     (projetos e tecnologias) e "--" no restante.
   • Com PROFILE.githubUsername preenchido: busca repositórios e
     linguagens pela API pública do GitHub (sem token), com cache
     de 1 hora em localStorage para não estourar o limite da API.
   • Contribuições e commits não estão na API pública: preencha
     GITHUB_MANUAL_STATS em data.js se quiser exibi-los.
   ============================================================= */

const GitHub = (() => {
  const CACHE_MS = 60 * 60 * 1000;
  let apiData = null; // { user, repos }
  let contrib = null; // { total, days: [{ date, count, level }] }

  /* Contribuições do último ano (a API oficial exige token; este serviço
     público lê o gráfico do perfil). Falhou → o gráfico simplesmente não aparece. */
  async function fetchContributions(username) {
    const key = `lo-gh-contrib-${username}`;
    try {
      const cached = JSON.parse(localStorage.getItem(key) || "null");
      if (cached && Date.now() - cached.t < CACHE_MS) return cached.data;
    } catch (_) {}
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`);
    if (!res.ok) throw new Error("contributions " + res.status);
    const json = await res.json();
    const data = { total: json.total?.lastYear ?? null, days: json.contributions || [] };
    try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), data })); } catch (_) {}
    return data;
  }

  function contribHTML() {
    if (!GITHUB_CONTRIBUTION_GRAPH || !contrib || !contrib.days.length) return "";
    const { esc } = U;
    const t = I18N.t;
    const locale = I18N.lang === "pt" ? "pt-BR" : "en-US";
    // Alinha a primeira coluna no domingo, como no GitHub
    const first = new Date(contrib.days[0].date + "T00:00:00");
    const pad = Array.from({ length: first.getDay() }, () => `<span class="contrib__cell" style="visibility:hidden"></span>`).join("");
    const cells = contrib.days.map((d) => {
      const label = `${d.count} ${t("gh.contribOn")} ${new Date(d.date + "T00:00:00").toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" })}`;
      return `<span class="contrib__cell" data-l="${d.level}" data-tip="${esc(label)}"></span>`;
    }).join("");
    const legend = [0, 1, 2, 3, 4].map((l) => `<i class="contrib__cell" data-l="${l}"></i>`).join("");
    return `
      <div class="contrib">
        <div class="contrib__head">
          <p class="contrib__title"><b>${fmt(contrib.total)}</b> ${esc(t("gh.contribTitle"))}</p>
        </div>
        <div class="contrib__scroll">
          <div class="contrib__grid" role="img" aria-label="${esc(`${fmt(contrib.total)} ${t("gh.contribTitle")}`)}">${pad}${cells}</div>
        </div>
        <div class="contrib__foot">
          <span>${esc(t("gh.contribSource"))}</span>
          <span class="contrib__legend" aria-hidden="true"><span>${esc(t("gh.less"))}</span>${legend}<span>${esc(t("gh.more"))}</span></span>
        </div>
      </div>`;
  }

  function initTooltip() {
    const tip = document.createElement("div");
    tip.className = "contrib__tip";
    tip.hidden = true;
    document.body.appendChild(tip);
    const root = document.getElementById("github-content");
    root.addEventListener("mouseover", (e) => {
      const cell = e.target.closest(".contrib__cell[data-tip]");
      if (!cell) { tip.hidden = true; return; }
      const r = cell.getBoundingClientRect();
      tip.textContent = cell.dataset.tip;
      tip.style.left = r.left + r.width / 2 + "px";
      tip.style.top = r.top + "px";
      tip.hidden = false;
    });
    root.addEventListener("mouseleave", () => { tip.hidden = true; });
    window.addEventListener("scroll", () => { tip.hidden = true; }, { passive: true });
  }

  async function fetchData(username) {
    const key = `lo-gh-${username}`;
    try {
      const cached = JSON.parse(localStorage.getItem(key) || "null");
      if (cached && Date.now() - cached.t < CACHE_MS) return cached.data;
    } catch (_) {}

    const base = `https://api.github.com/users/${encodeURIComponent(username)}`;
    const [userRes, reposRes] = await Promise.all([
      fetch(base, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(`${base}/repos?per_page=100&sort=pushed`, { headers: { Accept: "application/vnd.github+json" } }),
    ]);
    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API " + userRes.status);

    const user = await userRes.json();
    const repos = (await reposRes.json())
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
        pushed: r.pushed_at,
      }));

    const data = { user: { public_repos: user.public_repos, html_url: user.html_url }, repos };
    try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), data })); } catch (_) {}
    return data;
  }

  const fmt = (n) => (typeof n === "number" ? n.toLocaleString(I18N.lang === "pt" ? "pt-BR" : "en-US") : "--");

  function langColor(name) {
    const hit = Object.values(TECHNOLOGIES).find((tc) => I18N.pick(tc.name).toLowerCase().replace(/\d/g, "") === String(name).toLowerCase());
    return hit ? hit.color : "var(--text-3)";
  }

  function render() {
    const root = document.getElementById("github-content");
    if (!root) return;
    const { esc, icon } = U;
    const t = I18N.t;
    const user = PROFILE.githubUsername;
    const url = U.githubUrl();

    const stats = [
      { label: t("gh.projects"), value: PROJECTS.length },
      { label: t("gh.repos"), value: apiData ? apiData.user.public_repos : null },
      { label: t("gh.tech"), value: Object.keys(TECHNOLOGIES).length },
      { label: t("gh.contributions"), value: GITHUB_MANUAL_STATS.contributions ?? (contrib ? contrib.total : null) },
      { label: t("gh.commits"), value: GITHUB_MANUAL_STATS.commits },
    ];

    const statsHTML = stats
      .map((s) => `<li class="gh-stat${s.value == null ? " is-empty" : ""}"><span class="gh-stat__value mono">${fmt(s.value)}</span><span class="gh-stat__label">${esc(s.label)}</span></li>`)
      .join("");

    // Cartões no estilo "pinned repositories", gerados a partir dos projetos
    const pinned = PROJECTS.slice(0, 6)
      .map((p) => {
        const repoName = p.links.github ? p.links.github.split("/").filter(Boolean).pop() : p.name;
        // Linguagem principal exibida no cartão: PHP > JavaScript > primeira da lista
        const main = U.tech(["PHP", "JavaScript"].find((k) => p.technologies.includes(k)) || p.technologies[0]);
        const tag = p.links.github ? "a" : "div";
        const attrs = p.links.github ? ` href="${esc(p.links.github)}" target="_blank" rel="noopener noreferrer"` : "";
        return `
        <li>
          <${tag} class="repo"${attrs}>
            <p class="repo__name mono">${icon("repo", "repo__icon")}<span>${esc(repoName)}</span>
              <span class="repo__vis">${esc(I18N.t("status." + p.status))}</span></p>
            <p class="repo__desc">${esc(I18N.pick(p.tagline))}</p>
            <p class="repo__meta mono"><span class="tag__dot" style="--dot:${main.color}" aria-hidden="true"></span>${esc(main.label)}</p>
          </${tag}>
        </li>`;
      })
      .join("");

    // Dados reais da API (quando configurado)
    let apiHTML = "";
    if (apiData && apiData.repos.length) {
      const counts = {};
      apiData.repos.forEach((r) => { if (r.language) counts[r.language] = (counts[r.language] || 0) + 1; });
      const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const recent = apiData.repos.slice(0, 4);
      apiHTML = `
        <div class="gh-block">
          <h3 class="gh-block__title mono">${esc(t("gh.recent"))}</h3>
          <ul class="gh-recent">
            ${recent.map((r) => `
              <li><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">
                <span class="mono">${esc(r.name)}</span>
                ${r.language ? `<span class="gh-recent__lang"><span class="tag__dot" style="--dot:${langColor(r.language)}" aria-hidden="true"></span>${esc(r.language)}</span>` : ""}
                <time class="gh-recent__date mono" datetime="${esc(r.pushed)}">${new Date(r.pushed).toLocaleDateString(I18N.lang === "pt" ? "pt-BR" : "en-US", { day: "2-digit", month: "short", year: "numeric" })}</time>
              </a></li>`).join("")}
          </ul>
        </div>
        ${langs.length ? `
        <div class="gh-block">
          <h3 class="gh-block__title mono">${esc(t("gh.languages"))}</h3>
          <ul class="tags">${langs.map(([l, c]) => `<li class="tag"><span class="tag__dot" style="--dot:${langColor(l)}" aria-hidden="true"></span>${esc(l)} <span class="tag__count">${c}</span></li>`).join("")}</ul>
        </div>` : ""}`;
    }

    root.innerHTML = `
      <div class="gh-card" data-reveal>
        <div class="gh-card__head">
          <p class="gh-card__user mono">${icon("github", "gh-card__logo")}
            <span>${user ? `github.com/<b>${esc(user)}</b>` : "GitHub"}</span>
          </p>
          ${url
            ? `<a class="btn btn--primary btn--sm" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${icon("github", "btn__icon")}${esc(t("gh.visit"))}<span class="visually-hidden"> ${esc(t("external"))}</span></a>`
            : U.linkButton({ href: "", label: t("gh.visit"), iconId: "github", variant: "primary" })}
        </div>
        <ul class="gh-stats">${statsHTML}</ul>
        ${contribHTML()}
      </div>

      <div class="gh-block" data-reveal>
        <h3 class="gh-block__title mono">${esc(t("gh.pinned"))}</h3>
        <ul class="repo-grid">${pinned}</ul>
      </div>
      ${apiHTML ? `<div data-reveal>${apiHTML}</div>` : ""}`;
  }

  function init() {
    render();
    document.addEventListener("langchange", () => { render(); U.observeReveal(document.getElementById("github"), { instant: true }); });

    if (!PROFILE.githubUsername) return;
    initTooltip();
    const user = PROFILE.githubUsername;
    const rerender = () => { render(); U.observeReveal(document.getElementById("github"), { instant: true }); };

    fetchData(user)
      .then((d) => { apiData = d; rerender(); })
      .catch((err) => console.info("[portfolio] Não foi possível carregar dados do GitHub:", err.message));

    if (GITHUB_CONTRIBUTION_GRAPH) {
      fetchContributions(user)
        .then((d) => { contrib = d; rerender(); })
        .catch((err) => console.info("[portfolio] Gráfico de contribuições indisponível:", err.message));
    }
  }

  return { init };
})();
