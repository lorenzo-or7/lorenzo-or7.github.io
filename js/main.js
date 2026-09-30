/* =============================================================
   main.js — montagem das seções e interações gerais
   ============================================================= */

(() => {
  const { esc, icon } = U;
  const t = (k) => I18N.t(k);
  const pick = (v) => I18N.pick(v);
  const $ = (sel, root = document) => root.querySelector(sel);

  /* -----------------------------------------------------------
     Links globais (hero, perfil, contato, rodapé)
     ----------------------------------------------------------- */
  function applyLinks() {
    const gh = U.githubUrl();
    document.querySelectorAll('[data-link="github"]').forEach((a) => {
      if (gh) { a.href = gh; a.classList.remove("is-disabled"); a.removeAttribute("aria-disabled"); a.removeAttribute("tabindex"); }
      else { a.removeAttribute("href"); a.classList.add("is-disabled"); a.setAttribute("aria-disabled", "true"); }
    });
    document.querySelectorAll('[data-link="linkedin"]').forEach((a) => { a.href = PROFILE.linkedin; });
    document.querySelectorAll('[data-link="instagram"]').forEach((a) => {
      if (PROFILE.instagram) a.href = PROFILE.instagram; else a.remove();
    });
    document.querySelectorAll("[data-open-to-work]").forEach((el) => { el.hidden = !PROFILE.openToOpportunities; });
  }

  function socialList() {
    const items = [];
    const gh = U.githubUrl();
    if (gh) items.push({ href: gh, label: "GitHub", id: "github" });
    items.push({ href: PROFILE.linkedin, label: "LinkedIn", id: "linkedin" });
    if (PROFILE.instagram) items.push({ href: PROFILE.instagram, label: "Instagram", id: "instagram" });
    if (PROFILE.discord) items.push({ href: PROFILE.discord, label: "Discord", id: "discord" });
    if (PROFILE.spotify) items.push({ href: PROFILE.spotify, label: "Spotify", id: "spotify" });
    if (PROFILE.email) items.push({ href: `mailto:${PROFILE.email}`, label: t("contact.email"), id: "mail", internal: true });
    return items
      .map((s) => `<li><a class="social__link" href="${esc(s.href)}"${s.internal ? "" : ' target="_blank" rel="noopener noreferrer"'} aria-label="${esc(s.label)}${s.internal ? "" : " " + esc(t("external"))}" title="${esc(s.label)}">${icon(s.id)}</a></li>`)
      .join("");
  }

  /* -----------------------------------------------------------
     Hero: código com syntax highlighting (sem biblioteca)
     ----------------------------------------------------------- */
  function renderCode() {
    const code = $("#hero-code");
    if (!code) return;
    const s = (v) => `<span class="tk-str">"${esc(v)}"</span>`;
    const p = (v) => `<span class="tk-pun">${v}</span>`;
    const k = (v) => `<span class="tk-prop">${v}</span>`;
    const arr = (key, values) => [
      `  ${k(key)}${p(":")} ${p("[")}`,
      ...values.map((v, i) => `    ${s(v)}${i < values.length - 1 ? p(",") : ""}`),
      `  ${p("],")}`,
    ];

    // O código fica em inglês (padrão de mercado) independentemente do idioma
    const lines = [
      `<span class="tk-com">// hello, world</span>`,
      `<span class="tk-kw">const</span> <span class="tk-var">lorenzo</span> ${p("=")} ${p("{")}`,
      `  ${k("role")}${p(":")} ${s("Web Developer")}${p(",")}`,
      `  ${k("degree")}${p(":")} ${s("Software Engineering")}${p(",")}`,
      `  ${k("university")}${p(":")} ${s(EDUCATION.institution)}${p(",")}`,
      `  ${k("location")}${p(":")} ${s(PROFILE.location.en)}${p(",")}`,
      ...arr("interests", PROFILE.interests.map((i) => i.en)),
      ...arr("technologies", ["HTML", "CSS", "JavaScript", "PHP", "Python", "MySQL"]),
      `  ${k("openToOpportunities")}${p(":")} <span class="tk-bool">${PROFILE.openToOpportunities}</span>${p(",")}`,
      `${p("};")}`,
      ``,
      `<span class="tk-kw">export default</span> <span class="tk-var">lorenzo</span>${p(";")}<span class="caret" aria-hidden="true"></span>`,
    ];

    code.innerHTML = lines.map((l) => `<span class="code__line">${l || " "}</span>`).join("");
  }

  /* -----------------------------------------------------------
     Abas do editor (código / terminal)
     ----------------------------------------------------------- */
  function initEditorTabs() {
    const tabs = [...document.querySelectorAll(".editor__tab")];
    const lang = $(".editor__lang");
    const select = (tab, focus = false) => {
      tabs.forEach((tb) => {
        const on = tb === tab;
        tb.setAttribute("aria-selected", String(on));
        tb.tabIndex = on ? 0 : -1;
        document.getElementById(tb.getAttribute("aria-controls")).hidden = !on;
      });
      if (lang) lang.textContent = tab.id === "tab-term" ? "bash" : "JavaScript";
      if (focus) tab.focus();
      if (tab.id === "tab-term") Terminal.boot();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
          select(next, true);
        }
      });
    });
  }

  /* -----------------------------------------------------------
     Terminal interativo
     ----------------------------------------------------------- */
  const Terminal = (() => {
    let booted = false;
    const out = () => $("#term-out");
    const prompt = `<span class="accent">lorenzo@portfolio</span>:<span class="terminal__path">~</span>$`;

    const print = (html, cls = "") => {
      const div = document.createElement("div");
      div.className = "terminal__row " + cls;
      div.innerHTML = html;
      out().appendChild(div);
      const panel = $("#panel-term");
      panel.scrollTop = panel.scrollHeight;
    };

    const commands = {
      help: () => {
        const names = ["whoami", "stack", "projects", "education", "english", "contact", "theme", "lang", "clear"];
        print(`<span class="muted">${esc(t("term.help"))}</span>`);
        print(names.map((n) => `  <span class="accent">${n.padEnd(10)}</span> <span class="muted">${esc(t("term.cmd." + n))}</span>`).join("\n"), "pre");
      },
      whoami: () => print(`&gt; ${esc(t("hero.role1"))}\n&gt; ${esc(t("hero.role2").replace(/^&\s*/, ""))}`, "pre"),
      stack: () => print(STACK.map((c) => `<span class="accent">${esc(pick(c.label)).padEnd(24)}</span>${c.items.map((i) => esc(U.tech(i).label)).join(", ")}`).join("\n"), "pre"),
      projects: () => print(PROJECTS.map((p) => `<span class="accent">•</span> ${esc(p.name)} <span class="muted">— ${esc(pick(p.tagline))}</span>`).join("\n"), "pre"),
      education: () => print(`${esc(pick(EDUCATION.course))} @ ${esc(EDUCATION.institution)} <span class="muted">(${esc(pick(EDUCATION.status))})</span>`),
      english: () => print(LANGUAGES.map((l) => `${esc(l.code)}  ${esc(pick(l.name))} <span class="muted">— ${esc(pick(l.level))}${l.qualifier ? " · " + esc(pick(l.qualifier)) : ""}</span>`).join("\n"), "pre"),
      contact: () => {
        const gh = U.githubUrl();
        print([
          `linkedin  <a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener noreferrer">${esc(PROFILE.linkedin.replace("https://www.", ""))}</a>`,
          `github    ${gh ? `<a href="${esc(gh)}" target="_blank" rel="noopener noreferrer">${esc(gh.replace("https://", ""))}</a>` : `<span class="muted">${esc(t("term.notSet"))}</span>`}`,
          `instagram ${PROFILE.instagram ? `<a href="${esc(PROFILE.instagram)}" target="_blank" rel="noopener noreferrer">@${esc(PROFILE.instagram.replace(/\/$/, "").split("/").pop())}</a>` : `<span class="muted">${esc(t("term.notSet"))}</span>`}`,
          `email     ${PROFILE.email ? `<a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a>` : `<span class="muted">${esc(t("term.notSet"))}</span>`}`,
        ].join("\n"), "pre");
      },
      theme: () => { Theme.toggle(); print(`<span class="muted">${esc(t("term.themeDone"))} → ${Theme.get()}</span>`); },
      lang: () => { const msg = t("term.langDone"); I18N.toggle(); print(`<span class="muted">${esc(msg)}</span>`); },
      clear: () => { out().innerHTML = ""; },
      sudo: () => print(`<span class="muted">nice try 🙂</span>`),
    };
    commands.ls = commands.projects;
    commands.about = commands.whoami;

    function run(raw) {
      const cmd = raw.trim().toLowerCase();
      print(`${prompt} ${esc(raw)}`, "cmd");
      if (!cmd) return;
      const fn = commands[cmd.split(/\s+/)[0]];
      if (fn) fn();
      else print(`<span class="muted">${esc(t("term.notFound"))}</span> ${esc(cmd)}`);
    }

    function boot() {
      if (booted) return;
      booted = true;
      print(`${prompt} whoami`, "cmd");
      commands.whoami();
      print(`<span class="muted">${t("term.hint")}</span>`);
    }

    function init() {
      const form = $("#term-form");
      const input = $("#term-input");
      const history = [];
      let hIndex = 0;
      form?.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value.trim()) history.push(input.value);
        hIndex = history.length;
        run(input.value);
        input.value = "";
      });
      input?.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp" && history.length) { e.preventDefault(); hIndex = Math.max(0, hIndex - 1); input.value = history[hIndex]; }
        if (e.key === "ArrowDown" && history.length) { e.preventDefault(); hIndex = Math.min(history.length, hIndex + 1); input.value = history[hIndex] || ""; }
      });
      // Clicar em qualquer área do terminal foca o input
      $("#panel-term")?.addEventListener("click", (e) => { if (!e.target.closest("a")) input.focus({ preventScroll: true }); });
    }

    return { init, boot };
  })();

  /* -----------------------------------------------------------
     Faixa de tecnologias
     ----------------------------------------------------------- */
  function renderMarquee() {
    const track = $("#marquee-track");
    if (!track) return;
    const group = (hidden) =>
      `<ul class="marquee__group"${hidden ? ' aria-hidden="true"' : ""}>${MARQUEE.map((k) => {
        const tc = U.tech(k);
        const img = tc.icon ? `<img class="marquee__icon" src="${esc(tc.icon)}" alt="" width="24" height="24" loading="lazy" decoding="async">` : "";
        return `<li><span class="marquee__sep" aria-hidden="true">/</span>${img}${esc(tc.label.replace(/\d$/, ""))}</li>`;
      }).join("")}</ul>`;
    // Duas cópias para o loop contínuo; a segunda é ignorada por leitores de tela
    track.innerHTML = group(false) + group(true) + group(true);
  }

  /* -----------------------------------------------------------
     Perfil lateral
     ----------------------------------------------------------- */
  function renderAvatar() {
    const box = $("#avatar");
    if (!box) return;
    box.querySelector("img")?.remove();
    if (!PROFILE.photo) return;
    const img = new Image();
    img.src = PROFILE.photo;
    img.alt = t("profile.photoAlt");
    img.width = 240; img.height = 240;
    img.decoding = "async";
    img.className = "avatar__img";
    img.onload = () => box.classList.add("has-photo");
    img.onerror = () => { img.remove(); box.classList.remove("has-photo"); };
    box.prepend(img);
  }

  function renderProfile() {
    const handle = $("#profile-handle");
    if (PROFILE.githubUsername) { handle.textContent = "@" + PROFILE.githubUsername; handle.hidden = false; }

    $("#profile-role").textContent = pick(PROFILE.role);

    const ext = ` target="_blank" rel="noopener noreferrer"`;
    const gh = U.githubUrl();
    const semester = pick(EDUCATION.currentSemester);
    const facts = [
      ["pin", esc(pick(PROFILE.location))],
      ["cap", `${esc(pick(EDUCATION.course))} · ${esc(EDUCATION.institution)}${semester ? ` <span class="muted">· ${esc(semester)}</span>` : ""}`],
      ["globe", esc(LANGUAGES.map((l) => `${l.code} ${pick(l.level)}`).join(" · "))],
      PROFILE.email && ["mail", `<a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a>`],
      gh && ["github", `<a href="${esc(gh)}"${ext}>${esc(gh.replace("https://", ""))}</a>`],
      ["linkedin", `<a href="${esc(PROFILE.linkedin)}"${ext}>in/${esc(PROFILE.linkedin.split("/in/")[1].replace(/\/$/, ""))}</a>`],
      PROFILE.instagram && ["instagram", `<a href="${esc(PROFILE.instagram)}"${ext}>@${esc(PROFILE.instagram.replace(/\/$/, "").split("/").pop())}</a>`],
      PROFILE.discord && ["discord", `<a href="${esc(PROFILE.discord)}"${ext}>Discord</a>`],
      PROFILE.spotify && ["spotify", `<a href="${esc(PROFILE.spotify)}"${ext}>Spotify</a>`],
    ].filter(Boolean);
    $("#profile-facts").innerHTML = facts.map(([ic, html]) => `<li>${icon(ic)}<span>${html}</span></li>`).join("");

    const pad = (n) => String(n).padStart(2, "0");
    $("#profile-stats").innerHTML = [
      [pad(Projects.featured().length), t("profile.featured")],
      [pad(Projects.concepts().length), t("profile.concepts")],
      [pad(Object.keys(TECHNOLOGIES).length), t("profile.tech")],
    ].map(([n, l]) => `<li><span class="mono">${n}</span>${esc(l)}</li>`).join("");

    const current = Projects.featured().find((p) => p.status === "in-progress" || p.status === "live");
    $("#profile-branch").innerHTML = current
      ? `${icon("branch", "icon icon--sm")} main <span class="muted">·</span> ${esc(t("profile.building"))} <span class="accent">${esc(current.name)}</span>`
      : "";
  }

  /* -----------------------------------------------------------
     Sobre
     ----------------------------------------------------------- */
  function renderAbout() {
    $("#about-interests").innerHTML = PROFILE.interests.map((i) => `<li>${esc(pick(i))}</li>`).join("");
    $("#about-now").innerHTML = PROFILE.now.map((i) => `<li>${esc(pick(i))}</li>`).join("");

    // Badges "Connect with me" (estilo shields.io)
    const gh = U.githubUrl();
    const badges = [
      { href: PROFILE.linkedin, label: "LinkedIn", id: "linkedin", color: "#0A66C2" },
      gh && { href: gh, label: "GitHub", id: "github", color: "#24292F" },
      PROFILE.instagram && { href: PROFILE.instagram, label: "Instagram", id: "instagram", color: "#C13584" },
      PROFILE.discord && { href: PROFILE.discord, label: "Discord", id: "discord", color: "#5865F2" },
      PROFILE.spotify && { href: PROFILE.spotify, label: "Spotify", id: "spotify", color: "#1DB954" },
      PROFILE.email && { href: `mailto:${PROFILE.email}`, label: "Gmail", id: "mail", color: "#C5221F", internal: true },
    ].filter(Boolean);
    $("#about-connect").innerHTML = badges.map((b) => `
      <li><a class="shield" href="${esc(b.href)}"${b.internal ? "" : ' target="_blank" rel="noopener noreferrer"'} style="--shield:${b.color}">
        <span class="shield__icon" aria-hidden="true">${icon(b.id)}</span><span class="shield__label">${esc(b.label)}</span>
        ${b.internal ? "" : `<span class="visually-hidden"> ${esc(t("external"))}</span>`}
      </a></li>`).join("");
  }

  /* -----------------------------------------------------------
     Tech stack
     ----------------------------------------------------------- */
  function renderStack() {
    const root = $("#stack-grid");
    if (!root) return;
    root.innerHTML = STACK.map((cat, ci) => `
      <div class="stack__group" data-reveal style="--i:${ci}">
        <h3 class="stack__title"><span class="mono muted">${esc(cat.file)}/</span>${esc(pick(cat.label))}</h3>
        <ul class="stack__list">
          ${cat.items.map((key, i) => {
            const tc = U.tech(key);
            const tipId = `tip-${ci}-${i}`;
            return `<li class="tech" tabindex="0" aria-describedby="${tipId}">
              ${U.techIcon(key)}
              <span class="tech__name">${esc(tc.label)}</span>
              <span class="tooltip" role="tooltip" id="${tipId}">${esc(pick(tc.tip))}</span>
            </li>`;
          }).join("")}
        </ul>
      </div>`).join("");
  }

  /* -----------------------------------------------------------
     Formação
     ----------------------------------------------------------- */
  function renderEducation() {
    const root = $("#education-content");
    if (!root) return;
    const semester = pick(EDUCATION.currentSemester);
    const items = EDUCATION.timeline.filter((it) => !(it.optional && !it.date));

    root.innerHTML = `
      <article class="edu-card" data-reveal>
        <p class="edu-card__inst mono">${esc(EDUCATION.institution)}</p>
        <h3 class="edu-card__course">${esc(pick(EDUCATION.course))}</h3>
        <p class="edu-card__full">${esc(EDUCATION.institutionFull)}</p>
        <dl class="edu-card__facts">
          <div><dt>${esc(t("edu.status"))}</dt><dd><span class="status status--in-progress"><span class="status__dot" aria-hidden="true"></span>${esc(pick(EDUCATION.status))}</span></dd></div>
          ${semester ? `<div><dt>${esc(t("edu.semester"))}</dt><dd>${esc(semester)}</dd></div>` : ""}
        </dl>
        <h4 class="edu-card__sub mono">${esc(t("edu.areas"))}</h4>
        <ul class="chips">${EDUCATION.areas.map((a) => `<li>${esc(pick(a))}</li>`).join("")}</ul>
      </article>

      <div class="timeline-wrap" data-reveal>
        <h3 class="timeline__heading mono">${esc(t("edu.timeline"))}</h3>
        <ol class="timeline">
          ${items.map((it) => `
            <li class="timeline__item${it.current ? " is-current" : ""}">
              <span class="timeline__date mono">${esc(it.date)}</span>
              <h4 class="timeline__title">${esc(pick(it.title))}</h4>
              <p class="timeline__text">${esc(pick(it.text))}</p>
            </li>`).join("")}
        </ol>
      </div>`;
  }

  /* -----------------------------------------------------------
     Idiomas / inglês
     ----------------------------------------------------------- */
  function renderLanguages() {
    const root = $("#languages-content");
    if (!root) return;
    const en = LANGUAGES.find((l) => l.highlight);
    const others = LANGUAGES.filter((l) => !l.highlight);

    root.innerHTML = `
      ${en ? `
      <article class="lang-feature" data-reveal>
        <div class="lang-feature__code" aria-hidden="true">${esc(en.code)}</div>
        <div class="lang-feature__body">
          <h3 class="lang-feature__name">${esc(pick(en.name))}</h3>
          <p class="lang-feature__level">${esc(pick(en.level))}${en.qualifier ? ` <span class="lang-feature__qual mono">${esc(pick(en.qualifier))}</span>` : ""}</p>
          <p class="lang-feature__note">${esc(pick(en.note))}</p>
          ${en.contexts ? `<h4 class="lang-feature__sub mono">${esc(t("lang.contexts"))}</h4>
          <ul class="chips">${en.contexts.map((c) => `<li>${esc(pick(c))}</li>`).join("")}</ul>` : ""}
          <p class="lang-feature__demo">${esc(t("lang.demo"))}
            <button type="button" class="link-btn" data-toggle-lang>${esc(t("lang.switch"))} ${icon("arrow", "btn__icon")}</button>
          </p>
        </div>
      </article>` : ""}
      <ul class="lang-list" data-reveal>
        ${others.map((l) => `
          <li class="lang-item">
            <span class="lang-item__code mono" aria-hidden="true">${esc(l.code)}</span>
            <span class="lang-item__name">${esc(pick(l.name))}</span>
            <span class="lang-item__level">${esc(pick(l.level))}</span>
          </li>`).join("")}
      </ul>`;
  }

  /* -----------------------------------------------------------
     Contato
     ----------------------------------------------------------- */
  function renderContact() {
    const root = $("#contact-links");
    if (!root) return;
    const gh = U.githubUrl();
    root.innerHTML = `
      <a class="btn btn--primary" href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener noreferrer">
        ${icon("linkedin", "btn__icon")}${esc(t("contact.linkedin"))}<span class="visually-hidden"> ${esc(t("external"))}</span>
      </a>
      ${gh ? `<a class="btn btn--ghost" href="${esc(gh)}" target="_blank" rel="noopener noreferrer">${icon("github", "btn__icon")}GitHub<span class="visually-hidden"> ${esc(t("external"))}</span></a>` : ""}
      ${PROFILE.instagram ? `<a class="btn btn--ghost" href="${esc(PROFILE.instagram)}" target="_blank" rel="noopener noreferrer">${icon("instagram", "btn__icon")}Instagram<span class="visually-hidden"> ${esc(t("external"))}</span></a>` : ""}
      ${PROFILE.email ? `
        <div class="email-box">
          <a class="email-box__addr mono" href="mailto:${esc(PROFILE.email)}">${icon("mail", "btn__icon")}${esc(PROFILE.email)}</a>
          <button type="button" class="email-box__copy" data-copy-email>
            ${icon("copy", "btn__icon")}<span data-copy-label>${esc(t("contact.copy"))}</span>
          </button>
        </div>` : ""}`;
  }

  async function copyEmail(btn) {
    const label = btn.querySelector("[data-copy-label]");
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch (_) {
      const ta = document.createElement("textarea");
      ta.value = PROFILE.email; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
    btn.classList.add("is-copied");
    label.textContent = t("contact.copied");
    setTimeout(() => { btn.classList.remove("is-copied"); label.textContent = t("contact.copy"); }, 1800);
  }

  function renderFooter() {
    $("#footer-social").innerHTML = socialList();
    $("#year").textContent = new Date().getFullYear();
  }

  /* -----------------------------------------------------------
     Navegação: menu mobile, seção ativa, header
     ----------------------------------------------------------- */
  function initNav() {
    const header = $(".site-header");
    const toggle = $("#menu-toggle");
    const nav = $("#site-nav");

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"));
      document.documentElement.classList.toggle("nav-open", open);
    };
    toggle?.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav?.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.documentElement.classList.contains("nav-open")) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 961px)").addEventListener?.("change", (e) => { if (e.matches) setOpen(false); });

    // Sombra/borda do header após rolar
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Destaca o link da seção visível
    const links = [...document.querySelectorAll(".nav__link")];
    const sections = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((l) => {
            const on = l.getAttribute("href") === "#" + e.target.id;
            l.classList.toggle("is-active", on);
            if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      sections.forEach((s) => io.observe(s));
    }
  }

  /* -----------------------------------------------------------
     Cursor discreto (apenas desktop com mouse)
     ----------------------------------------------------------- */
  function initCursor() {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || U.reducedMotion()) return;

    const ring = document.createElement("div");
    ring.className = "cursor";
    ring.setAttribute("aria-hidden", "true");
    document.body.appendChild(ring);

    let x = -100, y = -100, cx = x, cy = y, raf = null;
    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      ring.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.3 ? requestAnimationFrame(loop) : null;
    };
    window.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      ring.classList.add("is-on");
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    document.addEventListener("mouseleave", () => ring.classList.remove("is-on"));
    document.addEventListener("mouseover", (e) => {
      const interactive = e.target.closest("a, button, [role='tab'], .tech, input, summary");
      ring.classList.toggle("is-link", !!interactive);
      ring.classList.toggle("is-text", !!e.target.closest("input"));
    });
  }

  /* -----------------------------------------------------------
     Renderização geral + eventos
     ----------------------------------------------------------- */
  function renderAll() {
    applyLinks();
    renderCode();
    renderMarquee();
    renderAvatar();
    renderProfile();
    renderAbout();
    renderStack();
    renderEducation();
    renderLanguages();
    renderContact();
    renderFooter();
  }

  function init() {
    I18N.apply();
    Theme.init();
    Projects.init();
    renderAll();
    GitHub.init();
    initEditorTabs();
    Terminal.init();
    initNav();
    initCursor();
    U.observeReveal();

    document.querySelectorAll("[data-lang-option]").forEach((btn) =>
      btn.addEventListener("click", () => I18N.set(btn.dataset.langOption))
    );

    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-toggle-lang]")) {
        I18N.toggle();
        document.getElementById("english")?.scrollIntoView({ block: "start" });
      }
      const copy = e.target.closest("[data-copy-email]");
      if (copy) copyEmail(copy);
      const disabled = e.target.closest(".is-disabled");
      if (disabled) e.preventDefault();
    });

    document.addEventListener("langchange", () => {
      const photo = document.querySelector(".avatar__img");
      if (photo) photo.alt = t("profile.photoAlt");
      applyLinks(); renderCode(); renderProfile(); renderAbout(); renderStack();
      renderEducation(); renderLanguages(); renderContact(); renderFooter();
      U.observeReveal(document, { instant: true });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
