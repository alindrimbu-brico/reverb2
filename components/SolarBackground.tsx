"use client";

/**
 * Fundalul fix al site-ului: sistemul solar real, în 3D, din linii de 1 px CSS (în locul siglei statice de până acum).
 * Desenul (geometria, timpii, ordinea de desen) vine din proba aprobată pentru emblemă; aici diferă doar cerneala (plafonată,
 * ca liniile și corpurile să stea la tăria unui fundal) și cât lucru se face pe cadru: orbitele și cercurile inelelor se
 * calculează o dată, la încărcarea modulului; pe cadru rămân camera și proiecția.
 * Regulile (rute, greutate, contrast) sunt în AI_SYNC.md („Sistemul solar din fundal”).
 */
import { memo, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const TAU = Math.PI * 2;
const DEG = Math.PI / 180;
const W = 340, H = 176, CX = 170, CY = 80, CAM_D = 720, SUN = 8.5, YEAR = 5;
const STILL = 8.4;                 // clipa desenată la „mișcare redusă”, pe /studio și la pornire
const SPEED = 0.34;                // 340 / 1000: pe laptop, aceeași viteză pe ecran ca proba de 340 px
const CAP = 0.35;                  // cerneala de fundal: tot ce trece de 0,35 se desenează plin, restul proporțional
// Sistemul mai vizibil fără să scadă contrastul textului (16 nov 2026, măsurat pe toată pagina derulată, la 12 momente):
// pixelul cel mai luminos al canvasului (cerneala plină × opacitatea din CSS) e cel care coboară contrastul când trece pe sub
// text, iar suprapunerile (orbită peste planetă, peste Soare, peste inele) ajung la el. De aceea opacitatea și cerneala plină
// rămân cele de până acum, iar sistemul se vede mai bine prin: orbitele din față mai groase (FRONT_W, 1,5 px CSS: adâncime),
// orbitele din spate și orbita cometei pe o cerneală proprie mai tare (LINE_CAP 0,2 în loc de CAP 0,35: ~75 % mai tari).
// O opacitate mai mare sau a doua cerneală cu alfa sub 1 au coborât textul de corp la 3,8–4,4 : 1 (se adună la suprapuneri).
const LINE_CAP = 0.2, FRONT_W = 1.5;
// Soarele stă fix în mijlocul ferestrei, deci tot textul trece prin el: e ținut la ~57 % din tăria planetelor și a orbitelor
// (cât era în prima variantă, mai discretă), ca fundalul să poată fi mai vizibil fără să scadă contrastul în centru.
const SUN_INK = 0.2, SUN_GLOW = 0.1;
// 15 cadre pe secundă, pe felii fixe de timp care cad mereu pe un cadru al AmbientBeams (30 pe secundă, aceleași felii):
// pagina se recompune la fel de des ca fără fundal, iar desenul costă jumătate față de 30 (măsurat, 15 nov 2026).
const FRAME_MS = 2000 / 30;
const SLOW_MS = 12;                // protecția: mediana duratei unui desen
const SLOW_GAP = 100;              // protecția: mediana intervalului dintre cadre (sub 10 cadre pe secundă)
const MEASURE_AFTER = 2000, CHECK_EVERY = 300, SAMPLES = 30;
const ORBIT_N = 96, COMET_N = 160, RING_N = 48, LEVELS = 32;

// Distanțele, mărimile și perioadele reale nu încap: se comprimă, păstrând ordinea.
const p45 = (x: number) => Math.pow(x, 0.45);
const dist = (au: number) => 24 + 126 * (p45(au) - p45(0.387)) / (p45(30.07) - p45(0.387));
const period = (yrs: number) => YEAR * Math.pow(yrs, 0.42);
const size = (re: number) => 1.1 + 1.25 * Math.sqrt(re);

type Extra = "moon" | "saturn" | "uranus" | undefined;
type Orbit = {
  a: number; e: number; q: number; P: number; r: number; M0: number; extra: Extra;
  cw: number; sw: number; cO: number; sO: number; ci: number; si: number;
};
function orbit(a: number, e: number, i: number, O: number, w: number, P: number, r: number, M0: number, extra?: Extra): Orbit {
  return {
    a, e, q: Math.sqrt(1 - e * e), P, r, M0, extra,
    cw: Math.cos(w), sw: Math.sin(w), cO: Math.cos(O), sO: Math.sin(O), ci: Math.cos(i), si: Math.sin(i),
  };
}

// Elementele orbitale reale (J2000): semiaxa (UA), excentricitatea, înclinarea, nodul, periheliul (grade), perioada (ani), raza (Pământ = 1), anomalia medie.
const PLANETS: Orbit[] = ([
  [0.387, 0.206, 7.00, 48.3, 29.1, 0.241, 0.383, 174.8],
  [0.723, 0.007, 3.39, 76.7, 54.9, 0.615, 0.949, 50.1],
  [1.000, 0.017, 0.00, 0.0, 114.2, 1.000, 1.000, 358.6, "moon"],
  [1.524, 0.093, 1.85, 49.6, 286.5, 1.881, 0.532, 19.4],
  [5.203, 0.049, 1.30, 100.5, 273.9, 11.86, 11.21, 20.0],
  [9.537, 0.057, 2.49, 113.7, 339.4, 29.46, 9.45, 317.0, "saturn"],
  [19.19, 0.046, 0.77, 74.0, 96.9, 84.01, 4.01, 142.2, "uranus"],
  [30.07, 0.009, 1.77, 131.8, 273.2, 164.8, 3.88, 256.2],
] as [number, number, number, number, number, number, number, number, Extra?][]).map(([au, e, i, O, w, T, R, M0, extra]) =>
  orbit(dist(au), e, i * DEG, O * DEG, w * DEG, period(T), size(R), M0 * DEG, extra));
// Cometa, după elementele lui Halley (retrogradă, foarte alungită), comprimată: periheliul lângă Venus, afeliul dincolo de Neptun.
const COMET = orbit(92, 0.77, 162.3 * DEG, 58.4 * DEG, 111.3 * DEG, period(75.3), 0, 0.35);
const MOON_P = period(0.0748), MOON_CI = Math.cos(5.1 * DEG), MOON_SI = Math.sin(5.1 * DEG);

let seed = 11;
const rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
const BELT = Array.from({ length: 110 }, () => {
  const au = 2.2 + rnd() * 1.1;
  const i = (rnd() * 2 - 1) * 9 * DEG, O = rnd() * TAU;
  return { a: dist(au), P: period(Math.pow(au, 1.5)), M0: rnd() * TAU, cO: Math.cos(O), sO: Math.sin(O), ci: Math.cos(i), si: Math.sin(i) };
});
const STARS = Array.from({ length: 60 }, () => {
  const z = rnd() * 2 - 1, f = rnd() * TAU, q = Math.sqrt(1 - z * z);
  return { x: q * Math.cos(f), y: q * Math.sin(f), z, s: 0.4 + rnd() * 1.2, p: rnd() * 10, r: 0.45 + rnd() * 0.5 };
});

// Poziția pe orbită din anomalia excentrică, în coordonate ecliptice (Z = în sus).
function posE(o: Orbit, E: number, out: Float32Array, k: number) {
  const xv = o.a * (Math.cos(E) - o.e), yv = o.a * o.q * Math.sin(E);
  const x = xv * o.cw - yv * o.sw, y = xv * o.sw + yv * o.cw;
  out[k] = o.cO * x - o.sO * o.ci * y;
  out[k + 1] = o.sO * x + o.cO * o.ci * y;
  out[k + 2] = o.si * y;
}
// Legea a doua a lui Kepler: ecuația lui Kepler rezolvată prin 6 iterații (aproximare, ca în probă).
function posM(o: Orbit, M: number, out: Float32Array, k: number) {
  let E = M;
  for (let n = 0; n < 6; n++) E = M + o.e * Math.sin(E);
  posE(o, E, out, k);
}
function orbitPoints(o: Orbit, n: number) {
  const pts = new Float32Array((n + 1) * 3);
  for (let k = 0; k <= n; k++) posE(o, TAU * k / n, pts, k * 3);
  return pts;
}
const ORBIT_W = PLANETS.map((o) => orbitPoints(o, ORBIT_N));
const COMET_W = orbitPoints(COMET, COMET_N);

// Inele cu axa fixă față de stele (Saturn 26,7°, Uranus 97,8°): baza și cercul unitate se calculează o dată.
function ringBasis(tilt: number, lon: number) {
  const n = [Math.sin(tilt) * Math.cos(lon), Math.sin(tilt) * Math.sin(lon), Math.cos(tilt)];
  let u = Math.hypot(n[0], n[1]) > 1e-6 ? [-n[1], n[0], 0] : [1, 0, 0];
  const ul = Math.hypot(u[0], u[1], u[2]); u = [u[0] / ul, u[1] / ul, u[2] / ul];
  const v = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
  const pts = new Float32Array((RING_N + 1) * 3);
  for (let k = 0; k <= RING_N; k++) {
    const f = TAU * k / RING_N, cf = Math.cos(f), sf = Math.sin(f);
    pts[k * 3] = u[0] * cf + v[0] * sf; pts[k * 3 + 1] = u[1] * cf + v[1] * sf; pts[k * 3 + 2] = u[2] * cf + v[2] * sf;
  }
  return pts;
}
const SATURN_RING = ringBasis(26.7 * DEG, 79.5 * DEG);
const URANUS_RING = ringBasis(97.8 * DEG, 257 * DEG);
const SATURN_BANDS: [number, number][] = [[1.45, 0.4], [1.85, 0.85], [2.25, 0.55]];

type Screen = { x: Float32Array; y: Float32Array; d: Float32Array; s: Float32Array };
const screen = (n: number): Screen => ({ x: new Float32Array(n), y: new Float32Array(n), d: new Float32Array(n), s: new Float32Array(n) });

function createRenderer(cv: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  let ca = 1, sa = 0, ce = 1, se = 0;
  let scale = 1;
  let ink: string[] = [], inkBody: string[] = [];
  let sunGlow: CanvasGradient | null = null;
  const lvl = (a: number) => Math.round(Math.max(0, Math.min(1, a)) * LEVELS);
  const col = (a: number) => ink[lvl(a)];           // linii: orbite, inele, orbita și coada cometei (LINE_CAP)
  const colB = (a: number) => inkBody[lvl(a)];      // Soarele și punctele pline: planete, Lună, capul cometei, centura, stele (CAP)

  // Bufere refolosite la fiecare cadru.
  const orbitS = ORBIT_W.map(() => screen(ORBIT_N + 1));
  const cometS = screen(COMET_N + 1);
  const ringS = screen(RING_N + 1);
  const beltS = screen(BELT.length);
  const bodyW = new Float32Array(9 * 3);
  const bodyS = screen(9);
  const one = screen(1);
  const tmp = new Float32Array(3);
  const order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const byDepth = (a: number, b: number) => bodyS.d[a] - bodyS.d[b];

  function setCamera(t: number) {
    const az = 0.6 + TAU * t / 240, el = (23 + 7 * Math.sin(TAU * t / 52)) * DEG;
    ca = Math.cos(az); sa = Math.sin(az); ce = Math.cos(el); se = Math.sin(el);
  }
  function proj(x: number, y: number, z: number, out: Screen, k: number) {
    const x1 = x * ca - y * sa, y1 = x * sa + y * ca;
    const d = -y1 * ce + z * se, up = y1 * se + z * ce, s = CAM_D / (CAM_D - d);
    out.x[k] = CX + x1 * s; out.y[k] = CY - up * s; out.d[k] = d; out.s[k] = s;
  }
  function projAll(src: Float32Array, n: number, out: Screen) {
    for (let k = 0; k < n; k++) proj(src[k * 3], src[k * 3 + 1], src[k * 3 + 2], out, k);
  }
  // Linie continuă împărțită după planul Soarelui (orbite) sau al planetei (inele): partea din spate înainte, cea din față după.
  // `addSplit` doar adaugă la drumul curent, ca toate orbitele unei părți să plece într-o singură trăsătură.
  function addSplit(o: Screen, n: number, pivot: number, front: boolean) {
    let open = false;
    for (let k = 1; k < n; k++) {
      if (((o.d[k - 1] + o.d[k]) / 2 >= pivot) === front) {
        if (!open) { ctx.moveTo(o.x[k - 1], o.y[k - 1]); open = true; }
        ctx.lineTo(o.x[k], o.y[k]);
      } else open = false;
    }
  }
  function strokeSplit(o: Screen, n: number, pivot: number, front: boolean, color: string) {
    ctx.beginPath(); addSplit(o, n, pivot, front);
    ctx.strokeStyle = color; ctx.stroke();
  }
  function strokeOrbits(front: boolean, color: string) {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) addSplit(orbitS[i], ORBIT_N + 1, 0, front);
    ctx.strokeStyle = color; ctx.stroke();
  }
  function ring(basis: Float32Array, cx: number, cy: number, cz: number, R: number) {
    for (let k = 0; k <= RING_N; k++)
      proj(cx + R * basis[k * 3], cy + R * basis[k * 3 + 1], cz + R * basis[k * 3 + 2], ringS, k);
  }
  // Planeta luminată dinspre Soare: partea de noapte slabă, partea de zi după unghiul Soare – planetă – cameră (fazele).
  function body(wx: number, wy: number, wz: number, x: number, y: number, d: number, r: number) {
    const len = Math.hypot(wx, wy, wz) || 1;
    const lit = (1 + (-d / len)) / 2;
    if (r < 2.1) {
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = colB(0.45 + 0.55 * lit); ctx.fill();
      return;
    }
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = colB(0.26); ctx.fill();
    const dx = CX - x, dy = CY - y, dl = Math.hypot(dx, dy) || 1;
    const off = r * (1 - lit) * 0.95, gx = x + dx / dl * off, gy = y + dy / dl * off;
    const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, r * (0.45 + 0.95 * lit));
    g.addColorStop(0, colB(1)); g.addColorStop(0.65, colB(0.92)); g.addColorStop(1, colB(0));
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = g; ctx.fill();
  }
  function planet(i: number, t: number) {
    const o = PLANETS[i];
    const wx = bodyW[i * 3], wy = bodyW[i * 3 + 1], wz = bodyW[i * 3 + 2];
    const x = bodyS.x[i], y = bodyS.y[i], d = bodyS.d[i], r = o.r * bodyS.s[i];
    if (o.extra === "saturn") for (const [k, a] of SATURN_BANDS) { ring(SATURN_RING, wx, wy, wz, o.r * k); strokeSplit(ringS, RING_N + 1, d, false, col(a)); }
    if (o.extra === "uranus") { ring(URANUS_RING, wx, wy, wz, o.r * 1.9); strokeSplit(ringS, RING_N + 1, d, false, col(0.35)); }
    let mx = 0, my = 0, mz = 0, moonFront = false;
    if (o.extra === "moon") {
      const mu = TAU * t / MOON_P;
      mx = wx + 5.5 * Math.cos(mu); my = wy + 5.5 * Math.sin(mu) * MOON_CI; mz = wz + 5.5 * Math.sin(mu) * MOON_SI;
      proj(mx, my, mz, one, 0);
      moonFront = one.d[0] >= d;
      if (!moonFront) body(mx, my, mz, one.x[0], one.y[0], one.d[0], 0.9 * one.s[0]);
    }
    body(wx, wy, wz, x, y, d, r);
    if (o.extra === "moon" && moonFront) body(mx, my, mz, one.x[0], one.y[0], one.d[0], 0.9 * one.s[0]);
    if (o.extra === "saturn") for (const [k, a] of SATURN_BANDS) { ring(SATURN_RING, wx, wy, wz, o.r * k); strokeSplit(ringS, RING_N + 1, d, true, col(a)); }
    if (o.extra === "uranus") { ring(URANUS_RING, wx, wy, wz, o.r * 1.9); strokeSplit(ringS, RING_N + 1, d, true, col(0.35)); }
  }
  // Cometa: coada stă mereu dinspre Soare și crește când cometa se apropie de el.
  function comet() {
    const wx = bodyW[24], wy = bodyW[25], wz = bodyW[26], x = bodyS.x[8], y = bodyS.y[8], s = bodyS.s[8];
    const r = Math.hypot(wx, wy, wz) || 1;
    const L = 64 * Math.exp(-(r - 20) / 30);
    if (L > 1.5) {
      proj(wx + wx / r * L, wy + wy / r * L, wz + wz / r * L, one, 0);
      const g = ctx.createLinearGradient(x, y, one.x[0], one.y[0]);
      g.addColorStop(0, col(0.9)); g.addColorStop(1, col(0));
      ctx.strokeStyle = g;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(one.x[0], one.y[0]); ctx.stroke();
      const lw = ctx.lineWidth; ctx.lineWidth = lw * 2.6; ctx.globalAlpha = 0.25;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(one.x[0], one.y[0]); ctx.stroke();
      ctx.globalAlpha = 1; ctx.lineWidth = lw;
    }
    ctx.beginPath(); ctx.arc(x, y, 1.2 * s, 0, TAU); ctx.fillStyle = colB(1); ctx.fill();
  }
  function drawItem(i: number, t: number) { if (i === 8) comet(); else planet(i, t); }
  function beltPath(front: boolean, k: number) {
    ctx.beginPath();
    for (let b = 0; b < BELT.length; b++) {
      if ((beltS.d[b] >= 0) !== front) continue;
      const r = k * beltS.s[b];
      ctx.moveTo(beltS.x[b] + r, beltS.y[b]); ctx.arc(beltS.x[b], beltS.y[b], r, 0, TAU);
    }
  }

  return {
    // Densitatea e fixă, 1: la tăria unui fundal, liniile nu se văd diferit, iar pixelii de desenat scad de 4–9 ori pe ecranele dense.
    resize() {
      const w = cv.clientWidth;
      if (!w) return false;
      cv.width = Math.round(w); cv.height = Math.round(w * H / W);
      scale = cv.width / W;
      return true;
    },
    readInk() {
      const m = getComputedStyle(cv).color.match(/[\d.]+/g);
      const rgb = m ? `${m[0]},${m[1]},${m[2]}` : "255,255,255";
      ink = Array.from({ length: LEVELS + 1 }, (_, k) => `rgba(${rgb},${Math.min(1, k / LEVELS / LINE_CAP).toFixed(3)})`);
      inkBody = Array.from({ length: LEVELS + 1 }, (_, k) => `rgba(${rgb},${Math.min(1, k / LEVELS / CAP).toFixed(3)})`);
      sunGlow = ctx.createRadialGradient(CX, CY, SUN * 0.7, CX, CY, SUN * 3.4);
      sunGlow.addColorStop(0, colB(SUN_GLOW)); sunGlow.addColorStop(1, colB(0));
    },
    draw(t: number) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.lineWidth = 1 / scale;   // 1 px CSS
      setCamera(t);

      // stelele: pe sfera cerului, se rotesc doar cu camera
      for (const s of STARS) {
        const x1 = s.x * ca - s.y * sa, y1 = s.x * sa + s.y * ca;
        if (-y1 * ce + s.z * se < -0.15) continue;
        const X = CX + x1 * 250, Y = CY - (y1 * se + s.z * ce) * 250;
        if (X < 0 || X > W || Y < 0 || Y > H) continue;
        ctx.beginPath(); ctx.arc(X, Y, s.r, 0, TAU);
        ctx.fillStyle = colB(0.1 + 0.35 * (0.5 + 0.5 * Math.sin(t * s.s + s.p))); ctx.fill();
      }

      for (let i = 0; i < 8; i++) projAll(ORBIT_W[i], ORBIT_N + 1, orbitS[i]);
      projAll(COMET_W, COMET_N + 1, cometS);
      for (let i = 0; i < 8; i++) {
        const o = PLANETS[i];
        posM(o, o.M0 + TAU * t / o.P, bodyW, i * 3);
        proj(bodyW[i * 3], bodyW[i * 3 + 1], bodyW[i * 3 + 2], bodyS, i);
      }
      posM(COMET, COMET.M0 + TAU * t / COMET.P, bodyW, 24);
      proj(bodyW[24], bodyW[25], bodyW[26], bodyS, 8);
      for (let b = 0; b < BELT.length; b++) {
        const o = BELT[b], M = o.M0 + TAU * t / o.P, x = o.a * Math.cos(M), y = o.a * Math.sin(M);
        tmp[0] = o.cO * x - o.sO * o.ci * y; tmp[1] = o.sO * x + o.cO * o.ci * y; tmp[2] = o.si * y;
        proj(tmp[0], tmp[1], tmp[2], beltS, b);
      }
      order.sort(byDepth);

      // în spate
      strokeOrbits(false, col(0.13));
      strokeSplit(cometS, COMET_N + 1, 0, false, col(0.07));
      beltPath(false, 0.55); ctx.fillStyle = colB(0.22); ctx.fill();
      for (const i of order) if (bodyS.d[i] < 0) drawItem(i, t);

      // Soarele, cu un halo slab
      if (sunGlow) { ctx.fillStyle = sunGlow; ctx.beginPath(); ctx.arc(CX, CY, SUN * 3.4, 0, TAU); ctx.fill(); }
      ctx.beginPath(); ctx.arc(CX, CY, SUN, 0, TAU); ctx.fillStyle = colB(SUN_INK); ctx.fill();

      // în față: orbitele mai groase (adâncime și vizibilitate fără un pixel mai luminos decât planetele)
      ctx.lineWidth = FRONT_W / scale;
      strokeOrbits(true, col(0.3));
      ctx.lineWidth = 1 / scale;
      strokeSplit(cometS, COMET_N + 1, 0, true, col(0.12));
      beltPath(true, 0.6); ctx.fillStyle = colB(0.4); ctx.fill();
      for (const i of order) if (bodyS.d[i] >= 0) drawItem(i, t);
    },
  };
}

const median = (a: Float32Array) => Array.from(a).sort((x, y) => x - y)[a.length >> 1];

const SolarCanvas = memo(function SolarCanvas({ still: alwaysStill }: { still: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const r = createRenderer(cv, ctx);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const t0 = performance.now();
    let raf = 0, running = false, frozen = false, slot = -1, prev = 0, n = 0, shown = false;
    const durs = new Float32Array(SAMPLES), gaps = new Float32Array(SAMPLES);

    // `data-drawn` pornește apariția lină din CSS; se pune o singură dată (un atribut rescris la fiecare cadru recalculează stilurile).
    const show = () => { if (!shown) { shown = true; cv.dataset.drawn = ""; } };
    const still = () => { r.draw(STILL); show(); };
    // Protecția: pe un dispozitiv care nu ține pasul (desen lent sau cadre rare), fundalul rămâne pe cadrul nemișcat.
    const guard = (now: number, took: number) => {
      if (now - t0 < MEASURE_AFTER) return;
      if (prev) {
        durs[n % SAMPLES] = took; gaps[n % SAMPLES] = now - prev; n++;
        if ((n === SAMPLES || (n > SAMPLES && (n - SAMPLES) % CHECK_EVERY === 0)) &&
            (median(durs) > SLOW_MS || median(gaps) > SLOW_GAP)) { frozen = true; stop(); still(); return; }
      }
      prev = now;
    };
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      // Felii fixe de timp, aliniate cu AmbientBeams: ambele straturi se redesenează în aceeași reîmprospătare.
      const s = Math.floor(now / FRAME_MS);
      if (s === slot) return;
      slot = s;
      if (root.dataset.rvI18n === "full") { prev = 0; return; }   // conținutul e ascuns cât se încarcă traducerea
      const a = performance.now();
      r.draw(STILL + SPEED * (now - t0) / 1000);
      show();
      guard(now, performance.now() - a);
    };
    const start = () => {
      if (running || frozen || alwaysStill || reduce.matches || document.hidden) return;
      running = true; slot = -1; prev = 0; raf = requestAnimationFrame(loop);
    };
    function stop() { if (running) { running = false; cancelAnimationFrame(raf); } }
    const repaintIfIdle = () => { if (!running) still(); };

    const onVisibility = () => (document.hidden ? stop() : start());
    const onReduce = () => { stop(); if (reduce.matches) still(); else start(); };
    const ro = new ResizeObserver(() => { if (r.resize()) repaintIfIdle(); });
    const mo = new MutationObserver(() => { r.readInk(); repaintIfIdle(); });

    if (r.resize()) { r.readInk(); still(); }
    ro.observe(cv);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    reduce.addEventListener("change", onReduce);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", start);
    start();

    return () => {
      stop();
      ro.disconnect(); mo.disconnect();
      reduce.removeEventListener("change", onReduce);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", start);
    };
  }, [alwaysStill]);

  return <canvas ref={ref} className="text-white" />;
});

// Unde apare: peste tot, ca sigla de până acum, mai puțin demonstrațiile clienților și portalul (fond opac propriu).
// În Reverb Studio (aplicația de lucru, ținută deschisă ore întregi) rămâne nemișcat.
const HIDDEN = /^\/(?:(?:en|es|pt|ru|zh)\/)?showcase\/.+|^\/(?:en\/)?portal(?:\/|$)/;
const STILL_ROUTES = /^\/studio(?:\/|$)/;

export default function SolarBackground() {
  const pathname = usePathname() || "";
  if (HIDDEN.test(pathname)) return null;
  const mode = STILL_ROUTES.test(pathname) ? "still" : "moving";
  return (
    <div aria-hidden="true" className="solar-bg">
      <SolarCanvas key={mode} still={mode === "still"} />
    </div>
  );
}
