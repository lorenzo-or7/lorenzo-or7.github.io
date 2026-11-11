/* =============================================================
   easter-egg.js — Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
   -------------------------------------------------------------
   • Ao completar a sequência: animação fullscreen roxa (sem texto),
     libera a seção #beyond-code e mostra o link "Beyond ✦" no menu.
   • O desbloqueio vale só para a página aberta: ao recarregar,
     é preciso digitar o código de novo (nada é salvo).
   • O link e a seção já existem no index.html com o atributo
     [hidden] (não ocupam espaço); aqui só controlamos o estado.
   ============================================================= */

const EasterEgg = (() => {
  const LEGACY_STORAGE_KEY = "beyondCodeUnlocked"; // versão antiga salvava o desbloqueio
  const SECTION_ID = "beyond-code";

  const KONAMI_CODE = [
    "arrowup", "arrowup",
    "arrowdown", "arrowdown",
    "arrowleft", "arrowright",
    "arrowleft", "arrowright",
    "b", "a",
  ];

  // Teclas que não quebram a sequência (Shift para digitar "B", por exemplo).
  const IGNORED_KEYS = new Set(["shift", "capslock"]);

  const ANIMATION_MS = 1500;
  const REDUCED_ANIMATION_MS = 700;

  let buffer = [];
  let isUnlocked = false;
  let isAnimating = false;

  /* ---------------------------------------------------------- utils */

  const reducedMotion = () =>
    !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  function clearLegacyUnlock() {
    try { localStorage.removeItem(LEGACY_STORAGE_KEY); } catch (_) {}
  }

  function isEditable(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.isContentEditable) return true;
    return /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
  }

  /* ---------------------------------------------------- konami input */

  function handleKonamiInput(event) {
    if (isUnlocked || isAnimating) return;
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;

    // Digitando no terminal ou em qualquer campo: ignora e zera.
    if (isEditable(event.target) || isEditable(document.activeElement)) {
      buffer = [];
      return;
    }

    const key = typeof event.key === "string" ? event.key.toLowerCase() : "";
    if (!key || IGNORED_KEYS.has(key)) return;

    // Janela deslizante com as últimas N teclas: uma tecla errada
    // reinicia a sequência e "↑ ↑ ↑ ↓ ↓ …" continua valendo.
    buffer.push(key);
    if (buffer.length > KONAMI_CODE.length) buffer.shift();

    if (buffer.length === KONAMI_CODE.length && buffer.every((k, i) => k === KONAMI_CODE[i])) {
      buffer = [];
      unlockBeyondCode(true);
    }
  }

  /* ---------------------------------------------------------- unlock */

  function unlockBeyondCode(withAnimation) {
    if (isUnlocked) return;
    isUnlocked = true;
    document.removeEventListener("keydown", handleKonamiInput);

    if (!withAnimation) {
      revealSection();
      showBeyondButton(false);
      return;
    }

    playUnlockAnimation({
      onCovered: revealSection,            // troca o layout enquanto a tela está coberta
      onDone: () => showBeyondButton(true),
    });
  }

  function revealSection() {
    const section = document.getElementById(SECTION_ID);
    if (section) {
      section.hidden = false;
      section.removeAttribute("aria-hidden");
    }
    // Renumera as seções seguintes (Contato 07 → 08).
    document.querySelectorAll("[data-index-unlocked]").forEach((el) => {
      el.textContent = el.dataset.indexUnlocked;
    });
  }

  /* ------------------------------------------------------- animation */

  function playUnlockAnimation({ onCovered, onDone }) {
    isAnimating = true;

    const reduced = reducedMotion();
    const duration = reduced ? REDUCED_ANIMATION_MS : ANIMATION_MS;
    const root = document.documentElement;

    const overlay = document.createElement("div");
    overlay.className = "ee-overlay";
    overlay.setAttribute("aria-hidden", "true");

    if (reduced) {
      overlay.innerHTML = '<div class="ee-fade"></div>';
    } else {
      overlay.innerHTML =
        '<div class="ee-flood"></div>' +
        '<div class="ee-ring"></div>' +
        '<div class="ee-core"></div>' +
        '<div class="ee-scan"></div>' +
        '<div class="ee-sweep"></div>' +
        '<div class="ee-flash"></div>';
      overlay.appendChild(createGlitchBlocks(7));
      root.classList.add("ee-glitching");
    }

    document.body.appendChild(overlay);

    window.setTimeout(onCovered, duration * (reduced ? 0.35 : 0.45));
    window.setTimeout(onDone, duration * (reduced ? 0.6 : 0.85));
    window.setTimeout(() => {
      overlay.remove();
      root.classList.remove("ee-glitching");
      isAnimating = false;
    }, duration + 80);
  }

  function createGlitchBlocks(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const block = document.createElement("span");
      block.className = "ee-block" + (i % 3 === 0 ? " ee-block--light" : "");
      const w = 4 + Math.random() * 22;    // vw
      const h = 0.4 + Math.random() * 2.2; // vh
      block.style.left = (Math.random() * (100 - w)).toFixed(2) + "vw";
      block.style.top = (Math.random() * 96).toFixed(2) + "vh";
      block.style.width = w.toFixed(2) + "vw";
      block.style.height = h.toFixed(2) + "vh";
      block.style.setProperty("--d", Math.round(Math.random() * 90) + "ms");
      block.style.setProperty("--x", Math.round((Math.random() * 2 - 1) * 24) + "px");
      frag.appendChild(block);
    }
    return frag;
  }

  /* ----------------------------------------------------- header link */

  function showBeyondButton(animate) {
    document.querySelectorAll("[data-beyond-nav]").forEach((item) => {
      item.hidden = false;
      if (!animate) return;
      item.classList.add(reducedMotion() ? "nav-beyond--fade" : "nav-beyond--enter");
      item.addEventListener("animationend", () => {
        item.classList.remove("nav-beyond--enter", "nav-beyond--fade");
      }, { once: true });
    });
  }

  /* ------------------------------------------------------------ init */

  function initKonamiCode() {
    clearLegacyUnlock();
    document.addEventListener("keydown", handleKonamiInput);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initKonamiCode);
  else initKonamiCode();

  return { init: initKonamiCode };
})();
