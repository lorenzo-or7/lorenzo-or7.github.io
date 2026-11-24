/* =============================================================
   motion.js — movimento discreto, com função
   -------------------------------------------------------------
   • Nome do hero e títulos internos entram letra a letra (máscara)
   • Luz do hero, editor, spotlight, CTAs magnéticos e capas da Hero
     de Modelos: UM listener de ponteiro e UM frame por quadro
   • Loops pausam fora da tela; progresso de leitura no header
   Tudo usa transform/opacity + requestAnimationFrame e é
   desligado com prefers-reduced-motion ou em telas de toque.
   ============================================================= */

const Motion = (() => {
  const reduced = () => U.reducedMotion();
  const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Split text do nome ---------- */
  function splitHeroName() {
    const h1 = document.querySelector(".hero__name");
    if (!h1 || h1.dataset.nameSplit) return;
    h1.dataset.nameSplit = "1";
    const label = [...h1.querySelectorAll(":scope > span")].map((s) => s.textContent.trim()).join(" ");
    h1.setAttribute("aria-label", label);
    let ci = 0;
    h1.querySelectorAll(":scope > span").forEach((line) => {
      const text = line.textContent;
      line.setAttribute("aria-hidden", "true");
      line.classList.add("split-line");
      line.innerHTML = [...text].map((ch) => `<span class="split-char" style="--ci:${ci++}">${ch === " " ? "&nbsp;" : ch}</span>`).join("");
    });
    if (!reduced()) h1.classList.add("is-splitting");
  }

  /* ---------- Títulos das páginas internas: letras por máscara ----------
     O texto vem do i18n (textContent); refaz a divisão a cada troca de idioma. */
  function splitTitles({ animate = true } = {}) {
    document.querySelectorAll("[data-split]").forEach((el) => {
      const text = el.textContent.trim();
      el.setAttribute("aria-label", text);
      el.innerHTML = `<span class="split-line" aria-hidden="true">${[...text].map((ch, i) => `<span class="split-char" style="--ci:${i}">${ch === " " ? "&nbsp;" : U.esc(ch)}</span>`).join("")}</span>`;
      el.classList.toggle("is-splitting", animate && !reduced());
      el.classList.add("is-split");
    });
  }

  /* ---------- Números que contam até o valor (uma vez) ---------- */
  function countUp(root = document) {
    root.querySelectorAll("[data-count]:not([data-counted])").forEach((el) => {
      el.dataset.counted = "1";
      const end = +el.dataset.count, suffix = el.dataset.suffix || "";
      if (reduced() || !end) return;
      const dur = 700, t0 = performance.now() + 250;
      const tick = (now) => {
        const p = Math.min(1, Math.max(0, (now - t0) / dur));
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      el.textContent = "0" + suffix;
      requestAnimationFrame(tick);
    });
  }

  /* ---------- Ponteiro: UM listener + UM frame por quadro ----------
     Efeitos: luz do hero (microparallax), inclinação do editor, spotlight
     dos cards, resposta magnética dos CTAs e profundidade da Hero de Modelos.
     Regras de desempenho:
       • só em desktop com mouse (hover: hover + pointer: fine) e sem reduced motion;
       • efeitos de hero só enquanto o hero está na tela (IntersectionObserver);
       • em cada quadro: primeiro TODAS as leituras de layout, depois as escritas;
       • escrever transform direto no elemento pequeno — variáveis CSS em
         containers grandes forçam recálculo de estilo de todos os filhos. */
  function initPointer() {
    if (reduced() || !finePointer()) return;
    const hero = document.querySelector(".hero");
    const glow = hero?.querySelector(".hero__bg");
    const editor = hero?.querySelector(".editor");
    const sc = document.querySelector(".sc-hero");
    const layers = sc ? [...sc.querySelectorAll(".sc-layer")] : [];
    const inView = new Map();
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => es.forEach((e) => inView.set(e.target, e.isIntersecting)));
      [hero, sc].filter(Boolean).forEach((el) => io.observe(el));
    }
    const visible = (el) => el && inView.get(el) !== false;

    let px = 0, py = 0, spot = null, magnet = null, lastMagnet = null, raf = null;
    let heroActive = false, scActive = false;

    const frame = () => {
      raf = null;
      const vw = window.innerWidth, vh = window.innerHeight;
      // ---- leituras
      const hr = heroActive && visible(hero) ? hero.getBoundingClientRect() : null;
      const er = hr && editor && vw > 960 ? editor.getBoundingClientRect() : null;
      const sr = spot ? spot.getBoundingClientRect() : null;
      const mr = magnet ? magnet.getBoundingClientRect() : null;
      // ---- escritas
      if (hr && glow) glow.style.transform = `translate3d(${(((px - hr.left) / hr.width) - 0.5) * 28}px, ${(((py - hr.top) / hr.height) - 0.5) * 20}px, 0)`;
      if (er) {
        const dx = (px - (er.left + er.width / 2)) / vw, dy = (py - (er.top + er.height / 2)) / vh;
        editor.style.transform = `perspective(1400px) rotateX(${(-dy * 3).toFixed(2)}deg) rotateY(${(dx * 4).toFixed(2)}deg)`;
      }
      if (sr) { spot.style.setProperty("--sx", `${px - sr.left}px`); spot.style.setProperty("--sy", `${py - sr.top}px`); }
      if (lastMagnet && lastMagnet !== magnet) lastMagnet.style.transform = "";
      if (mr) magnet.style.transform = `translate3d(${(((px - mr.left) / mr.width) - 0.5) * 8}px, ${(((py - mr.top) / mr.height) - 0.5) * 6}px, 0)`;
      lastMagnet = magnet;
      if (scActive && visible(sc)) {
        const hx = px / vw - 0.5, hy = py / vh - 0.5;
        layers.forEach((l) => { const d = +l.dataset.depth || 0; l.style.transform = `translate3d(${(hx * d * 18).toFixed(1)}px, ${(hy * d * 12).toFixed(1)}px, 0)`; });
      }
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(frame); };

    document.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      px = e.clientX; py = e.clientY;
      const t = e.target.closest ? e.target : null;
      spot = t ? t.closest("[data-spotlight]") : null;
      magnet = t ? t.closest("[data-magnetic]") : null;
      heroActive = !!(hero && t && hero.contains(t));
      scActive = !!(sc && t && sc.contains(t));
      if (spot || magnet || heroActive || scActive || lastMagnet) queue();
    }, { passive: true });

    hero?.addEventListener("pointerleave", () => {
      if (editor) editor.style.transform = "";
      if (glow) glow.style.transform = "";
    });
    sc?.addEventListener("pointerleave", () => { layers.forEach((l) => { l.style.transform = ""; }); });
  }

  /* ---------- Loops (faixa de tecnologias, ping, cursor) pausam fora da tela ---------- */
  function pauseOffscreen() {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("is-offscreen", !e.isIntersecting)));
    document.querySelectorAll(".marquee, .hero").forEach((el) => io.observe(el));
  }

  /* ---------- Progresso de leitura ----------
     A altura do documento é medida só quando muda (ResizeObserver), não a cada rolagem. */
  function initProgress() {
    const bar = document.querySelector(".scroll-progress");
    if (!bar) return;
    let raf = null, max = 1;
    const measure = () => { max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight); update(); };
    const update = () => {
      raf = null;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / max)).toFixed(4)})`;
    };
    window.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    if ("ResizeObserver" in window) new ResizeObserver(measure).observe(document.body);
    measure();
  }

  function init() {
    splitHeroName();
    splitTitles();
    countUp();
    initPointer();
    pauseOffscreen();
    initProgress();
    document.addEventListener("langchange", () => { splitTitles({ animate: false }); });
    // Volta pelo histórico (bfcache): garante que a página não fique "saindo"
    window.addEventListener("pageshow", () => document.documentElement.classList.remove("is-leaving"));
  }

  return { init };
})();
