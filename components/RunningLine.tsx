"use client";

// „Linia care merge” (12 nov 2026): o bandă scurtă care aleargă în lungul unei linii.
// Ce e pus pe site și ce e doar probă: vezi nota din AI_SYNC.md. Nu o întindeți singuri pe alte titluri sau carduri.
// Stilurile sunt în app/globals.css (clasele rl-*).

import { memo, useEffect, useRef, useState, type CSSProperties } from "react";

/** Contururile literelor unui text, generate de scripts/linia_litere.py din fontul site-ului. */
export type OutlineData = {
  text: string;
  upem: number;
  words: { text: string; glyphs: string[] }[];
};

/** Contururile mai multor texte, generate de scripts/linia_texte.py (știe diacritice, grosimi și spațieri diferite). */
export type OutlineSet = {
  upem: number;
  fonts: string[];
  texts: Record<string, { weight: number; tracking: number; words: { text: string; adv: number; glyphs: string[] }[] }>;
};

const PERIOD_S = 6; // aceeași valoare ca durata animației rl-glyphs din globals.css
const STROKE_UNITS = 28; // grosimea benzii, în miimi din mărimea literei (rețeta din titlul primei pagini)
const STROKE_MIN_PX = 0.9; // sub atât banda nu se mai desenează curat (titluri de 20 px)

/**
 * Banda pe conturul literelor, pentru titlul primei pagini. Textul rămâne text obișnuit și apare o singură dată în pagină
 * (pentru citit, Google, asistenții AI și cititoarele de ecran); peste fiecare cuvânt se desenează doar contururile literelor,
 * pe care aleargă banda. Contururile vin din `data` și se potrivesc doar cu fontul Geist la grosimea și spațierea pentru care
 * au fost generate: dacă textul nu e cel din `data` sau fontul nu s-a încărcat, se arată doar textul.
 * Desenul are 1×1 px, stă pe linia de bază înaintea cuvântului și se scalează cu mărimea fontului (unități em).
 */
export function OutlineRun({ text, data, className = "text-white" }: { text: string; data: OutlineData; className?: string }) {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    const fonts = document.fonts;
    if (!fonts) return;
    let alive = true;
    const test = () => {
      if (alive && fonts.check('300 16px "Geist"', text)) setFontReady(true);
    };
    fonts.ready.then(test);
    fonts.addEventListener("loadingdone", test);
    return () => {
      alive = false;
      fonts.removeEventListener("loadingdone", test);
    };
  }, [text]);

  const parts = text.split(" ");
  const show = fontReady && data.text === text && data.words.length === parts.length;
  const u = data.upem;
  let glyphIndex = 0;

  return (
    <>
      {parts.map((word, i) => (
        <span key={i}>
          {i > 0 ? " " : null}
          <span className="rl-word">
            {show ? (
              <svg className={`rl-glyphs ${className}`} width="1" height="1" aria-hidden="true" focusable="false">
                <svg x="0" y="-1em" width="1em" height="1em" viewBox={`0 ${-u} ${u} ${u}`}>
                  {data.words[i].glyphs.map((d, g) => {
                    // fiecare literă pornește în alt moment, ca benzile să nu meargă toate deodată
                    const delay = -(((glyphIndex++ * 0.618034) % 1) * PERIOD_S).toFixed(2);
                    return <path key={g} d={d} style={{ animationDelay: `${delay}s` }} />;
                  })}
                </svg>
              </svg>
            ) : null}
            {word}
          </span>
        </span>
      ))}
    </>
  );
}

/**
 * Banda pe conturul literelor, pentru orice text din `set` (titluri cu diacritice, alte grosimi și spațieri).
 * Folosită deocamdată doar în proba de pe /proba-linii.
 * - Textul apare o singură dată; desenele sunt goale în HTML-ul de pe server și se umplu în browser.
 * - Un cuvânt primește linie doar dacă lățimea lui din pagină e cea din datele generate (max(0,6 px; 1,2 % din mărimea
 *   literei)). Așa nu se desenează nimic peste un font de rezervă, altă grosime, text tradus sau o versiune nouă de Geist.
 * - În afara ecranului benzile se opresc și se ascund (clasa rl-off).
 * `className` dă culoarea benzii (o clasă de text).
 */
export const OutlineWords = memo(function OutlineWords({ text, set, className = "text-white" }: { text: string; set: OutlineSet | null; className?: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const [fit, setFit] = useState<boolean[]>([]);
  const [strokeUnits, setStrokeUnits] = useState(STROKE_UNITS);
  const [inView, setInView] = useState(false);
  const entry = set ? set.texts[text] : undefined;
  const parts = text.split(" ");

  useEffect(() => {
    const el = root.current;
    if (!el || !set || !entry || entry.words.length !== parts.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true;

    const measure = () => {
      if (!alive) return;
      const size = parseFloat(getComputedStyle(el).fontSize);
      const sameText = el.textContent === text;
      const words = el.querySelectorAll<HTMLElement>(".rl-word");
      const tolerance = Math.max(0.6, 0.012 * size);
      const next = entry.words.map((w, i) => {
        const node = words[i];
        if (!sameText || !node || !size) return false;
        return Math.abs(node.getBoundingClientRect().width - (w.adv / set.upem) * size) <= tolerance;
      });
      setFit((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next));
      if (size) setStrokeUnits(Math.max(STROKE_UNITS, (STROKE_MIN_PX * set.upem) / size));
    };

    const block = (el.closest("h1,h2,h3,h4,p,div") as HTMLElement | null) ?? el;
    const resize = new ResizeObserver(measure);
    resize.observe(block);
    const mutation = new MutationObserver(measure); // textul schimbat de o traducere automată oprește linia
    mutation.observe(el, { characterData: true, childList: true, subtree: true });
    const view = new IntersectionObserver((entries) => setInView(entries.some((e) => e.isIntersecting)), { rootMargin: "200px" });
    view.observe(block);
    document.fonts?.ready.then(measure);
    document.fonts?.addEventListener("loadingdone", measure);
    measure();

    return () => {
      alive = false;
      resize.disconnect();
      mutation.disconnect();
      view.disconnect();
      document.fonts?.removeEventListener("loadingdone", measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, set]);

  const u = set ? set.upem : 1000;
  let glyphIndex = 0;

  return (
    <span ref={root} data-rl="" className={inView ? undefined : "rl-off"}>
      {parts.map((word, i) => (
        <span key={i}>
          {i > 0 ? " " : null}
          <span className="rl-word">
            <svg
              className={`rl-glyphs ${className}`}
              width="1"
              height="1"
              aria-hidden="true"
              focusable="false"
              style={{ "--rl-sw": strokeUnits } as CSSProperties}
            >
              {entry && fit[i] ? (
                <svg x="0" y="-1em" width="1em" height="1em" viewBox={`0 ${-u} ${u} ${u}`}>
                  {entry.words[i].glyphs.map((d, g) => {
                    const delay = -(((glyphIndex++ * 0.618034) % 1) * PERIOD_S).toFixed(2);
                    return <path key={g} d={d} style={{ animationDelay: `${delay}s` }} />;
                  })}
                </svg>
              ) : null}
            </svg>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
});

/**
 * Liniuțe care merg pe conturul unui card. Părintele trebuie să fie `relative` și să aibă chenar de 1 px;
 * `radius` = raza colțului cardului minus 0,5 (rounded-3xl → 23.5, rounded-2xl → 15.5).
 * `dashes` = câte liniuțe (un divizor al lui 100: 1, 2, 4, 5), `dash` = lungimea uneia, în procente din perimetru,
 * `delay` = decalaj în secunde, ca două carduri vecine să nu meargă în pas. În afara ecranului se oprește.
 */
export function BorderRun({ radius, dashes = 4, dash = 5, delay = 0, className = "text-white" }: { radius: number; dashes?: number; dash?: number; delay?: number; className?: string }) {
  const svg = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const card = svg.current?.parentElement;
    if (!card) return;
    const view = new IntersectionObserver((entries) => setInView(entries.some((e) => e.isIntersecting)), { rootMargin: "100px" });
    view.observe(card);
    return () => view.disconnect();
  }, []);

  return (
    <svg ref={svg} className={`rl-border ${className}${inView ? "" : " rl-off"}`} aria-hidden="true" focusable="false">
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx={radius}
        pathLength={100}
        style={{ strokeDasharray: `${dash} ${100 / dashes - dash}`, animationDelay: `${-delay}s` }}
      />
    </svg>
  );
}

/** Linie despărțitoare cu bandă care o parcurge (între rândurile unui tabel). `delay` în secunde, ca benzile să nu pornească deodată. */
export function LineRun({ delay = 0, className = "text-white" }: { delay?: number; className?: string }) {
  return (
    <span className={`rl-line ${className}`} aria-hidden="true">
      <span className="rl-flow" style={{ animationDelay: `${-delay}s` }}>
        <span />
      </span>
    </span>
  );
}
