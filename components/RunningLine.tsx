"use client";

// „Linia care merge” (12 nov 2026): o bandă scurtă care aleargă în lungul unei linii.
// Regula lui Alin: cu măsură. Pe litere doar în titlul primei pagini; pe contur doar la cardul scos în evidență.
// Stilurile sunt în app/globals.css (clasele rl-*).

import { useEffect, useState } from "react";

/** Contururile literelor unui text, generate de scripts/linia_litere.py din fontul site-ului. */
export type OutlineData = {
  text: string;
  upem: number;
  words: { text: string; glyphs: string[] }[];
};

const PERIOD_S = 6; // aceeași valoare ca durata animației rl-glyphs din globals.css

/**
 * Banda pe conturul literelor. Textul rămâne text obișnuit și apare o singură dată în pagină (pentru citit, Google,
 * asistenții AI și cititoarele de ecran); peste fiecare cuvânt se desenează doar contururile literelor, pe care aleargă banda.
 * Contururile vin din `data` și se potrivesc doar cu fontul Geist la grosimea și spațierea pentru care au fost generate:
 * dacă textul nu e cel din `data` sau fontul nu s-a încărcat, se arată doar textul.
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
 * Banda pe conturul unui card. Părintele trebuie să fie `relative` și să aibă chenar de 1 px;
 * `radius` = raza colțului cardului minus 0,5 (rounded-3xl → 23.5, rounded-2xl → 15.5).
 */
export function BorderRun({ radius, className = "text-white" }: { radius: number; className?: string }) {
  return (
    <svg className={`rl-border ${className}`} aria-hidden="true" focusable="false">
      <rect x="0" y="0" width="100%" height="100%" rx={radius} pathLength={100} />
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
