/* =============================================================
   easter-egg.js — Konami Code + Beyond Code
   ↑ ↑ ↓ ↓ ← → ← → B A
   ============================================================= */
(() => {
  const STORAGE_KEY = "beyondCodeUnlocked";
  const sequence = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
  ];
  let index = 0;
  let animating = false;

  const pick = (v) => I18N.pick(v);
  const esc = (v) => U.esc(String(v));
  const normalize = (key) => key.length === 1 ? key.toLowerCase() : key;
  const ignoredTarget = (el) => el?.matches?.("input, textarea, select, [contenteditable='true']");

  function chipList(items) {
    return `<ul class="beyond__chips">${items.map((x) => `<li>${esc(pick(x))}</li>`).join("")}</ul>`;
  }

  function renderBeyond() {
    const root = document.getElementById("beyond-grid");
    if (!root || typeof BEYOND_CODE === "undefined") return;

    const cards = [
      ["music", I18N.t("beyond.music"), `
        <div class="beyond__sub"><span>${esc(I18N.t("beyond.artists"))}</span>${chipList(BEYOND_CODE.music.artists)}</div>
        <div class="beyond__sub"><span>${esc(I18N.t("beyond.genres"))}</span>${chipList(BEYOND_CODE.music.genres)}</div>`],
      ["games", I18N.t("beyond.games"), chipList(BEYOND_CODE.games)],
      ["anime", I18N.t("beyond.anime"), chipList(BEYOND_CODE.anime)],
      ["movies", I18N.t("beyond.movies"), `
        ${chipList(BEYOND_CODE.movies.favorites)}
        <div class="beyond__sub"><span>${esc(I18N.t("beyond.genres"))}</span>${chipList(BEYOND_CODE.movies.genres)}</div>`],
      ["series", I18N.t("beyond.series"), chipList(BEYOND_CODE.series)],
      ["sports", I18N.t("beyond.sports"), `
        ${chipList(BEYOND_CODE.sports.favorites)}
        <div class="beyond__sub"><span>${esc(I18N.t("beyond.teams"))}</span>${chipList(BEYOND_CODE.sports.teams)}</div>`],
    ];

    const fav = BEYOND_CODE.favorites;
    const favoriteRows = [
      [I18N.t("beyond.artists"), fav.artist],
      [I18N.t("beyond.games"), fav.game],
      [I18N.t("beyond.anime"), fav.anime],
      [I18N.t("beyond.movies"), fav.movie],
      [I18N.t("beyond.series"), fav.series],
      [I18N.lang === "pt" ? "Futebol" : "Football", fav.football],
      [I18N.lang === "pt" ? "Basquete" : "Basketball", fav.basketball],
    ];

    root.innerHTML = `
      <div class="beyond__cards">
        ${cards.map(([id, title, body], i) => `
          <article class="beyond-card beyond-card--${id}" data-reveal style="--i:${i}">
            <p class="beyond-card__file mono">${esc(id)}.json</p>
            <h3 class="beyond-card__title">${esc(title)}</h3>
            ${body}
          </article>`).join("")}
      </div>
      <aside class="beyond-favorites" data-reveal>
        <p class="beyond-card__file mono">favorites.json</p>
        <h3 class="beyond-card__title">${esc(I18N.t("beyond.favorites"))}</h3>
        <dl>${favoriteRows.map(([k,v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      </aside>`;

    U.observeReveal?.(document.getElementById("beyond-code"), { instant: true });
  }

  function showUnlockedState({ focus = false } = {}) {
    const nav = document.getElementById("beyond-nav-item");
    const section = document.getElementById("beyond-code");
    if (nav) nav.hidden = false;
    if (section) section.hidden = false;
    document.documentElement.classList.add("beyond-unlocked");
    renderBeyond();
    if (focus) nav?.querySelector("a")?.focus({ preventScroll: true });
  }

  function playUnlockAnimation() {
    const overlay = document.getElementById("unlock-overlay");
    if (!overlay || animating) return Promise.resolve();
    animating = true;
    overlay.classList.remove("is-active");
    void overlay.offsetWidth;
    overlay.classList.add("is-active");
    return new Promise((resolve) => {
      window.setTimeout(() => {
        overlay.classList.remove("is-active");
        animating = false;
        resolve();
      }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 450 : 1500);
    });
  }

  async function unlock() {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      showUnlockedState();
      return;
    }
    localStorage.setItem(STORAGE_KEY, "true");
    await playUnlockAnimation();
    showUnlockedState({ focus: true });
  }

  function onKeydown(event) {
    if (ignoredTarget(event.target)) return;
    const key = normalize(event.key);
    if (key === sequence[index]) {
      index += 1;
      if (index === sequence.length) {
        index = 0;
        unlock();
      }
      return;
    }
    index = key === sequence[0] ? 1 : 0;
  }

  function init() {
    if (localStorage.getItem(STORAGE_KEY) === "true") showUnlockedState();
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("langchange", () => {
      if (localStorage.getItem(STORAGE_KEY) === "true") renderBeyond();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
