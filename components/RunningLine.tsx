"use client";

// „Linia care merge” (12–13 nov 2026): o bandă scurtă care aleargă pe conturul literelor, doar pe textele mari.
// Unde se pune și unde nu: nota din AI_SYNC.md („Linia care merge”). Nu pe contururi de carduri (respins de Alin).
// Stilurile sunt în app/globals.css (clasele rl-*).

import { memo, useEffect, useRef, useState, type CSSProperties } from "react";
import { useLineText } from "@/lib/i18n/useT";

/** Contururile literelor unui text, generate de scripts/linia_litere.py din fontul site-ului (doar titlul primei pagini). */
export type OutlineData = {
  text: string;
  upem: number;
  words: { text: string; glyphs: string[] }[];
};

/** Atlasul de litere al unei grosimi, generat de scripts/linia_atlas.py (lib/outlineRun/w<grosime>.ts). */
export type GlyphAtlas = {
  upem: number;
  weight: number;
  /** Caracterele cunoscute; ligaturile sunt la sfârșit, în zona de uz privat. */
  chars: string;
  /** Fața fontului din care vine fiecare caracter (o cifră pe caracter): între două fețe nu există kerning. */
  faces: string;
  adv: number[];
  /** Conturul la origine; "" = caracter fără bandă (punct, virgulă). */
  paths: string[];
  /** Litera din stânga → valoare → literele din dreapta care au acea valoare. */
  kern: Record<string, Record<string, string>>;
  /** Două litere → ligatura lor (doar fără spațiere între litere). */
  lig: Record<string, string>;
  skip0: string[];
  skipT: string[];
};

const PERIOD_S = 6; // aceeași valoare ca durata animației rl-glyphs din globals.css
const STROKE_UNITS = 28; // grosimea benzii, în miimi din mărimea literei (rețeta din titlul primei pagini)
const STROKE_MIN_PX = 0.9; // sub atât banda nu se mai desenează curat (titluri de 20 px)
const THICK = 1.25; // pe text de culoarea benzii (alb pe alb) banda e cu 25 % mai groasă (Alin, 13 nov 2026)

/**
 * Banda pe conturul literelor, pentru titlul primei pagini. Textul rămâne text obișnuit și apare o singură dată în pagină
 * (pentru citit, Google, asistenții AI și cititoarele de ecran); peste fiecare cuvânt se desenează doar contururile literelor,
 * pe care aleargă banda. Contururile vin din `data` și se potrivesc doar cu fontul Geist la grosimea și spațierea pentru care
 * au fost generate: dacă textul nu e cel din `data` sau fontul nu s-a încărcat, se arată doar textul.
 * Desenul are 1×1 px, stă pe linia de bază înaintea cuvântului și se scalează cu mărimea fontului (unități em).
 */
export function OutlineRun({ text, data, className = "text-white" }: { text: string; data: OutlineData; className?: string }) {
  const [fontReady, setFontReady] = useState(false);
  // Selectorul de limbă: contururile din `data` sunt ale textului românesc. Când rândul e tradus, îl desenează <Linie>, din atlas.
  const translated = useLineText(text).text !== text;

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

  if (translated) return <Linie band={className}>{text}</Linie>;

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

// ── Atlasul: se încarcă la cerere, o dată pe grosime, după prima afișare a paginii ──

type Ready = { atlas: GlyphAtlas; index: Map<string, number>; kern: Map<string, number>; source: Map<string, string> };

const LOADERS: Record<number, () => Promise<{ atlas: GlyphAtlas }>> = {
  300: () => import("@/lib/outlineRun/w300"),
  400: () => import("@/lib/outlineRun/w400"),
  500: () => import("@/lib/outlineRun/w500"),
  600: () => import("@/lib/outlineRun/w600"),
};
const loaded = new Map<number, Promise<Ready | null>>();

function loadAtlas(weight: number): Promise<Ready | null> {
  let p = loaded.get(weight);
  if (!p) {
    const loader = LOADERS[weight];
    p = loader
      ? loader()
          .then(({ atlas }) => {
            const chars = Array.from(atlas.chars);
            const index = new Map(chars.map((c, i) => [c, i] as const));
            const kern = new Map<string, number>();
            for (const left in atlas.kern) {
              for (const value in atlas.kern[left]) {
                for (const right of Array.from(atlas.kern[left][value])) kern.set(left + right, Number(value));
              }
            }
            const source = new Map(Object.entries(atlas.lig).map(([pair, lig]) => [lig, pair] as const));
            return { atlas, index, kern, source };
          })
          .catch(() => null) // fără atlas (rețea căzută): titlul rămâne text simplu
      : Promise.resolve(null);
    loaded.set(weight, p);
  }
  return p;
}

type Placed = { adv: number; glyphs: [number, number][] };

/**
 * Așază literele unei bucăți de text ca browserul: avans + kerning (doar între litere din aceeași față) + spațiere.
 * Întoarce lățimea totală și, pentru fiecare literă cu contur, (indicele din atlas, poziția pe x), în unități de font.
 * Un șir = de ce nu se poate (caracter necunoscut, pereche care își schimbă forma).
 * Aceeași aritmetică e în scripts/linia_atlas.py (`aritmetic`), unde e verificată față de HarfBuzz: se schimbă împreună.
 */
function place({ atlas, index, kern, source }: Ready, text: string, trackUnits: number): Placed | string {
  let chars = Array.from(text);
  if (chars.some((c) => c >= "" && c <= "")) return "caracter din zona de uz privat";
  if (!trackUnits) {
    // ligaturile se aplică de la stânga la dreapta, doar fără spațiere între litere
    const next: string[] = [];
    for (let i = 0; i < chars.length; i++) {
      const lig = i + 1 < chars.length ? atlas.lig[chars[i] + chars[i + 1]] : undefined;
      if (lig) {
        next.push(lig);
        i++;
      } else next.push(chars[i]);
    }
    chars = next;
  }
  const skip = trackUnits ? atlas.skipT : atlas.skip0;
  const glyphs: [number, number][] = [];
  let x = 0;
  let prev = -1;
  let left = "";
  for (const ch of chars) {
    const k = index.get(ch);
    if (k === undefined) return `caracter necunoscut „${ch}”`;
    if (prev >= 0) {
      // perechea în litere obișnuite (o ligatură se judecă după ultima / prima ei literă)
      const pair = (source.get(left) ?? left).slice(-1) + (source.get(ch) ?? ch).charAt(0);
      if (skip.length && skip.includes(pair)) return `pereche cu formă schimbată „${pair}”`;
      if (atlas.faces[prev] === atlas.faces[k]) x += kern.get(left + ch) ?? 0;
    }
    if (atlas.paths[k]) glyphs.push([k, Math.round(x * 10) / 10]);
    x += atlas.adv[k] + trackUnits;
    prev = k;
    left = ch;
  }
  return { adv: x, glyphs };
}

// Bucățile unui rând: cuvintele, rupte și după cratimă (ca „AI-Readable” să se poată rupe pe ecrane înguste).
function splitUnits(text: string): { text: string; space: boolean }[] {
  const out: { text: string; space: boolean }[] = [];
  text.split(" ").forEach((word, w) => {
    // fără expresii regulate cu „privire în urmă”: Safari mai vechi de 16.4 nu le cunoaște
    let start = 0;
    let first = true;
    for (let i = 1; i < word.length - 1; i++) {
      if (word[i] === "-" && word[i - 1] !== "-" && word[i + 1] !== "-") {
        out.push({ text: word.slice(start, i + 1), space: w > 0 && first });
        start = i + 1;
        first = false;
      }
    }
    out.push({ text: word.slice(start), space: w > 0 && first });
  });
  return out;
}

function rgb(color: string): [number, number, number] | null {
  const m = color.match(/rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

type Shown = { key: string; text: string; ready: Ready; placed: Placed[]; strokeUnits: number };

let measurer: HTMLCanvasElement | undefined; // pânza pe care se măsoară cuvintele traduse (una pentru toate titlurile)

/**
 * Banda pe conturul literelor, pentru orice rând de titlu: `<Linie>Text</Linie>`. Conținutul e strict un șir; un titlu pe două
 * rânduri = două `<Linie>`, cu `<br />` între ele.
 * - Textul apare o singură dată în pagină; desenele sunt goale în HTML-ul de pe server și se umplu în browser.
 * - Literele vin din atlasul grosimii citite din stilul calculat; pozițiile se calculează (avans, kerning, spațiere).
 * - Totul sau nimic pe rând: linia apare doar dacă FIECARE bucată are în pagină lățimea calculată (toleranță max(0,6 px;
 *   1,2 % din mărimea literei)). Așa nu se desenează nimic peste un font de rezervă, text tradus, italic, majuscule din CSS
 *   sau o versiune nouă de Geist. În `next dev`, motivul se scrie în consolă.
 * - Culoarea benzii = `band` (o clasă de text). Pe text de culoare apropiată de a benzii (alb pe alb) banda e cu 25 % mai
 *   groasă; `thick` o forțează.
 * - În afara ecranului benzile se opresc și se ascund (clasa rl-off).
 * - Selectorul de limbă: textul vine prin `useLineText` (româna pe server și la hidratare, apoi limba afișată). Desenul ține
 *   minte textul pentru care a fost calculat și nu se arată peste altul. Limbile cu litere în afara atlasului nu au liniuțe deloc.
 */
export const Linie = memo(function Linie({ children, band = "text-white", thick }: { children: string; band?: string; thick?: boolean }) {
  const { text, lines } = useLineText(children);
  const root = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<Shown | null>(null);
  const [inView, setInView] = useState(false);
  const [breaks, setBreaks] = useState(false); // text tradus cu un cuvânt mai lat decât rândul: se rupe, fără linie
  const units = splitUnits(text);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true;
    let retries = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const block = (el.closest("h1,h2,h3,h4,p,div") as HTMLElement | null) ?? el;

    const stop = (why: string) => {
      if (process.env.NODE_ENV !== "production") console.warn(`[Linie] fără linie pe „${text}”: ${why}`);
      setShown(null);
    };

    const measure = async () => {
      if (!alive) return;
      const cs = getComputedStyle(el);
      const size = parseFloat(cs.fontSize);
      if (!size) return;
      // Selectorul de limbă: într-un titlu tradus, un cuvânt poate fi mai lat decât rândul (germană, maghiară, pe telefon).
      // Atunci cuvintele au voie să se rupă (clasa rl-break) și rândul rămâne fără linie, în loc să iasă din ecran.
      // Lățimea se măsoară pe o pânză, nu în pagină: un cuvânt deja rupt ar părea că încape. Româna nu trece pe aici.
      let tooWide = false;
      if (text !== children) {
        const bcs = getComputedStyle(block);
        const room = block.clientWidth - parseFloat(bcs.paddingLeft) - parseFloat(bcs.paddingRight);
        const pen = (measurer ??= document.createElement("canvas")).getContext("2d");
        if (pen && room > 0) {
          pen.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
          const gap = cs.letterSpacing === "normal" ? 0 : parseFloat(cs.letterSpacing) || 0;
          tooWide = units.some((unit) => pen.measureText(unit.text).width + gap * unit.text.length > room + 1);
        }
      }
      setBreaks(tooWide);
      if (tooWide) return stop("un cuvânt tradus e mai lat decât rândul");
      if (!lines) return stop("limba afișată nu are liniuțe (litere în afara atlasului)");
      if (el.textContent !== text) return stop("textul din pagină e altul (traducere automată?)");
      if (cs.fontStyle !== "normal") return stop("text înclinat");
      if (cs.textTransform !== "none") return stop("majuscule din CSS");
      const weight = Math.round(parseFloat(cs.fontWeight));
      const ready = await loadAtlas(weight);
      if (!alive) return;
      if (!ready) return stop(`nu există atlas pentru grosimea ${weight}`);
      const spacing = cs.letterSpacing === "normal" ? 0 : parseFloat(cs.letterSpacing) || 0;
      const track = Math.round((spacing / size) * 1000); // miimi de em
      const u = ready.atlas.upem;
      // lățimile se compară fără scalarea cardului (carduri cu `scale`, înclinare la hover)
      const scale = block.offsetWidth ? block.getBoundingClientRect().width / block.offsetWidth : 1;
      const nodes = el.querySelectorAll<HTMLElement>(".rl-word");
      const tolerance = Math.max(0.6, 0.012 * size);
      const placed: Placed[] = [];
      for (let i = 0; i < units.length; i++) {
        const p = place(ready, units[i].text, (track * u) / 1000);
        if (typeof p === "string") return stop(p);
        const node = nodes[i];
        const width = node ? node.getBoundingClientRect().width / (scale || 1) : -1;
        if (Math.abs(width - (p.adv / u) * size) > tolerance) {
          // poate fontul nu s-a încărcat încă sau cardul e în mișcare: mai încerc de trei ori
          if (retries < 3) {
            retries++;
            clearTimeout(timer);
            timer = setTimeout(measure, 400);
            return;
          }
          return stop(`„${units[i].text}” are ${width.toFixed(1)} px în pagină, ${((p.adv / u) * size).toFixed(1)} px calculat (grosime ${weight}, spațiere ${track})`);
        }
        placed.push(p);
      }
      retries = 0;
      // grosimea benzii: mai mare când textul are aproape culoarea benzii
      let factor = thick ? THICK : 1;
      if (thick === undefined) {
        const glyphs = el.querySelector(".rl-glyphs");
        const a = rgb(cs.color);
        const b = glyphs ? rgb(getComputedStyle(glyphs).color) : null;
        if (a && b && Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 90) factor = THICK;
      }
      const strokeUnits = Math.round(Math.max(STROKE_UNITS * factor, (STROKE_MIN_PX * factor * u) / size) * 10) / 10;
      const key = `${text}|${weight}|${track}|${strokeUnits}`;
      setShown((prev) => (prev && prev.key === key ? prev : { key, text, ready, placed, strokeUnits }));
    };

    const again = () => {
      retries = 0;
      measure();
    };
    const resize = new ResizeObserver(again);
    resize.observe(block);
    const mutation = new MutationObserver(again); // textul schimbat de o traducere automată oprește linia
    mutation.observe(el, { characterData: true, childList: true, subtree: true });
    const view = new IntersectionObserver((entries) => setInView(entries.some((e) => e.isIntersecting)));
    view.observe(block);
    document.fonts?.ready.then(again);
    document.fonts?.addEventListener("loadingdone", again);
    const theme = new MutationObserver(again); // la schimbarea temei se schimbă și culorile comparate
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    measure();

    return () => {
      alive = false;
      clearTimeout(timer);
      resize.disconnect();
      mutation.disconnect();
      view.disconnect();
      theme.disconnect();
      document.fonts?.removeEventListener("loadingdone", again);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, thick, lines]);

  // desenul calculat pentru alt text (limba tocmai s-a schimbat) nu se arată
  const drawn = shown && shown.text === text ? shown : null;
  const u = drawn ? drawn.ready.atlas.upem : 1000;
  let glyphIndex = 0;

  return (
    <span ref={root} data-rl="" className={[inView ? "" : "rl-off", breaks ? "rl-break" : ""].filter(Boolean).join(" ") || undefined}>
      {units.map((unit, i) => (
        <span key={i}>
          {unit.space ? " " : null}
          <span className="rl-word">
            <svg
              className={`rl-glyphs ${band}`}
              width="1"
              height="1"
              aria-hidden="true"
              focusable="false"
              style={drawn ? ({ "--rl-sw": drawn.strokeUnits } as CSSProperties) : undefined}
            >
              {drawn && drawn.placed[i] ? (
                <svg x="0" y="-1em" width="1em" height="1em" viewBox={`0 ${-u} ${u} ${u}`}>
                  {drawn.placed[i].glyphs.map(([k, x], g) => {
                    // fiecare literă pornește în alt moment, ca benzile să nu meargă toate deodată
                    const delay = -(((glyphIndex++ * 0.618034) % 1) * PERIOD_S).toFixed(2);
                    return <path key={g} d={drawn.ready.atlas.paths[k]} transform={`translate(${x} 0)`} style={{ animationDelay: `${delay}s` }} />;
                  })}
                </svg>
              ) : null}
            </svg>
            {unit.text}
          </span>
        </span>
      ))}
    </span>
  );
});
