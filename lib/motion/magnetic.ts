/**
 * Biblioteca de mișcare Reverb — „butonul magnetic”.
 *
 * Butonul se trage câțiva pixeli spre cursor cât timp mouse-ul e deasupra lui și
 * revine lin când pleacă. Un singur ascultător pe document (delegare), deci merge
 * și pe butoanele apărute mai târziu în pagină (file, liste filtrate, ferestre).
 *
 * Cum se folosește:
 *   - automat: orice buton-pastilă din conținutul paginii (`<a>` sau `<button>` cu
 *     `rounded-full`, în `<main>`) e magnetic, fără nimic de scris;
 *   - explicit, oriunde (bară, footer, ferestre): clasa `mech-magnetic`
 *     sau atributul `data-mech="magnetic"`;
 *   - forța, pe un element: `data-magnetic-pull="10"` (pixeli; implicit 6);
 *   - scos de pe un element: `data-no-magnetic`.
 *
 * Nu pornește pe ecrane tactile (fără cursor fin) și nici când vizitatorul a cerut
 * mișcare redusă în sistemul de operare. Machetele izolate (`data-showcase`,
 * `.showcase-root`) își păstrează propriile mișcări.
 *
 * Pornirea: `const stop = initMagnetic(); … stop();` — vezi
 * components/MechanicalInteractions.tsx, care o pornește pe tot site-ul.
 */

export const MAGNETIC_EXPLICIT = '.mech-magnetic, [data-mech="magnetic"]';
export const MAGNETIC_AUTO = "main a.rounded-full, main button.rounded-full";
const ISOLATED = '[data-showcase], .showcase-root, [data-no-magnetic]';

export type MagneticOptions = {
  /** Deplasarea maximă, în pixeli. */
  maxPull?: number;
  /** Cât de repede ajunge la țintă (0–1); mai mic = mai moale. */
  ease?: number;
  /** Butoanele-pastilă din <main> devin magnetice fără clasă. */
  auto?: boolean;
};

type State = { tx: number; ty: number; cx: number; cy: number; raf: number | null; over: boolean };

export function initMagnetic({ maxPull = 6, ease = 0.18, auto = true }: MagneticOptions = {}): () => void {
  if (typeof window === "undefined") return () => {};
  if (!window.matchMedia("(pointer: fine)").matches) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const selector = auto ? `${MAGNETIC_EXPLICIT}, ${MAGNETIC_AUTO}` : MAGNETIC_EXPLICIT;
  const states = new Map<HTMLElement, State>();
  let active: HTMLElement | null = null;

  const find = (target: EventTarget | null): HTMLElement | null => {
    if (!(target instanceof Element)) return null;
    const el = target.closest<HTMLElement>(selector);
    if (!el) return null;
    // clasa explicită câștigă; regula automată ocolește machetele izolate și elementele scoase
    if (!el.matches(MAGNETIC_EXPLICIT) && el.closest(ISOLATED)) return null;
    if (el.hasAttribute("data-no-magnetic")) return null;
    return el;
  };

  const step = (el: HTMLElement) => {
    const st = states.get(el);
    if (!st) return;
    if (!st.over && Math.abs(st.cx) < 0.1 && Math.abs(st.cy) < 0.1) {
      el.style.transform = "";
      st.raf = null;
      states.delete(el);
      return;
    }
    st.cx += (st.tx - st.cx) * ease;
    st.cy += (st.ty - st.cy) * ease;
    el.style.transform = `translate3d(${st.cx.toFixed(2)}px, ${st.cy.toFixed(2)}px, 0)`;
    st.raf = requestAnimationFrame(() => step(el));
  };

  const release = (el: HTMLElement) => {
    const st = states.get(el);
    if (!st) return;
    st.over = false;
    st.tx = 0;
    st.ty = 0;
    if (st.raf === null) st.raf = requestAnimationFrame(() => step(el));
  };

  const onMove = (e: MouseEvent) => {
    const el = find(e.target);
    if (el !== active) {
      if (active) release(active);
      active = el;
    }
    if (!el) return;

    let st = states.get(el);
    if (!st) {
      st = { tx: 0, ty: 0, cx: 0, cy: 0, raf: null, over: true };
      states.set(el, st);
    }
    st.over = true;

    const rect = el.getBoundingClientRect();
    const own = Number(el.dataset.magneticPull);
    const pull = Number.isFinite(own) && own > 0 ? own : maxPull;
    // poziția cursorului față de centrul butonului, fără deplasarea deja aplicată
    const dx = (e.clientX - (rect.left - st.cx + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top - st.cy + rect.height / 2)) / (rect.height / 2);
    st.tx = Math.max(-pull, Math.min(pull, dx * pull));
    st.ty = Math.max(-pull, Math.min(pull, dy * pull));
    if (st.raf === null) st.raf = requestAnimationFrame(() => step(el));
  };

  const onLeaveDocument = () => {
    if (active) release(active);
    active = null;
  };

  document.addEventListener("mousemove", onMove, { passive: true });
  document.documentElement.addEventListener("mouseleave", onLeaveDocument, { passive: true });

  return () => {
    document.removeEventListener("mousemove", onMove);
    document.documentElement.removeEventListener("mouseleave", onLeaveDocument);
    states.forEach((st, el) => {
      if (st.raf !== null) cancelAnimationFrame(st.raf);
      el.style.transform = "";
    });
    states.clear();
    active = null;
  };
}
