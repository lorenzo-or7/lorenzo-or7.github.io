/* =============================================================
   theme.js — alternância entre tema escuro e claro
   -------------------------------------------------------------
   O tema inicial é aplicado por um pequeno script no <head> do
   index.html (evita "piscar" o tema errado). Aqui ficam o botão,
   a transição suave e a persistência em localStorage ("lo-theme").
   ============================================================= */

const Theme = (() => {
  const STORAGE_KEY = "lo-theme";
  const root = document.documentElement;

  const get = () => root.dataset.theme === "light" ? "light" : "dark";

  function updateButton() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const isDark = get() === "dark";
    btn.setAttribute("aria-pressed", String(!isDark));
    btn.setAttribute("aria-label", I18N.t(isDark ? "theme.toLight" : "theme.toDark"));
    btn.title = btn.getAttribute("aria-label");
  }

  function set(theme) {
    // Transição curta apenas durante a troca (evita animar tudo o tempo todo)
    root.classList.add("theme-transition");
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#040607" : "#E3D9FC");
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
    updateButton();
    window.clearTimeout(set._t);
    set._t = window.setTimeout(() => root.classList.remove("theme-transition"), 450);
  }

  function toggle() { set(get() === "dark" ? "light" : "dark"); }

  function init() {
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
    updateButton();
    document.addEventListener("langchange", updateButton);

    // Segue o sistema enquanto o usuário não escolher manualmente
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    mq.addEventListener?.("change", (e) => {
      let saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) {}
      if (!saved) { root.dataset.theme = e.matches ? "light" : "dark"; updateButton(); }
    });
  }

  return { init, toggle, set, get };
})();
