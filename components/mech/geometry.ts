// Geometria pieselor mecanice: conturul unei roți dințate și așezarea unui tren de roți care angrenează corect.
// Funcții pure, fără React. Unghiurile sunt în grade, în sensul ecranului (pozitiv = în sensul acelor de ceas).

const RAD = Math.PI / 180;

/** Două zecimale: destul pentru desen și identic pe server și în browser. */
export const round2 = (n: number) => Math.round(n * 100) / 100;

export type GearSpec = {
  /** Numărul de dinți. */
  teeth: number;
  /** Unghiul (grade) la care stă roata față de cea dinainte. Prima roată îl ignoră. */
  at?: number;
};

export type PlacedGear = {
  teeth: number;
  /** Centrul, în pixeli, în cutia trenului. */
  cx: number;
  cy: number;
  /** Raza cercului de divizare și raza exterioară (vârful dinților). */
  pitch: number;
  outer: number;
  /** Rotația = phase + ratio × unghiul trenului. */
  ratio: number;
  phase: number;
};

/** Conturul roții, centrat în (0,0): dintele 0 e îndreptat spre +x. `m` = modulul (pixeli pe dinte, pe diametru). */
export function gearPath(teeth: number, m: number): string {
  const rp = (m * teeth) / 2;
  const ra = rp + m * 0.9;
  const rf = rp - m * 1.1;
  const p = 360 / teeth;
  const pt = (r: number, deg: number) => `${(r * Math.cos(deg * RAD)).toFixed(2)} ${(r * Math.sin(deg * RAD)).toFixed(2)}`;
  let d = `M ${pt(rf, -0.25 * p)}`;
  for (let i = 0; i < teeth; i++) {
    const c = i * p;
    d += ` L ${pt(ra, c - 0.11 * p)} L ${pt(ra, c + 0.11 * p)} L ${pt(rf, c + 0.25 * p)}`;
    d += ` A ${rf.toFixed(2)} ${rf.toFixed(2)} 0 0 1 ${pt(rf, c + 0.75 * p)}`;
  }
  return d + " Z";
}

/**
 * Așază roțile una lângă alta la distanța de angrenare și calculează, pentru fiecare, raportul și faza:
 * roata următoare se învârte invers, cu raportul dinților, iar la contact un dinte intră într-un gol.
 */
export function layoutTrain(gears: GearSpec[], m: number): { gears: PlacedGear[]; width: number; height: number } {
  const placed: PlacedGear[] = [];
  gears.forEach((g, i) => {
    const pitch = (m * g.teeth) / 2;
    const outer = pitch + m * 0.9;
    if (i === 0) {
      placed.push({ teeth: g.teeth, cx: 0, cy: 0, pitch, outer, ratio: 1, phase: 0 });
      return;
    }
    const prev = placed[i - 1];
    const theta = g.at ?? 0;
    const dist = prev.pitch + pitch;
    const ratio = (-prev.ratio * prev.teeth) / g.teeth;
    const phase = theta + 180 + 180 / g.teeth - ((prev.phase - theta) * prev.teeth) / g.teeth;
    placed.push({
      teeth: g.teeth,
      cx: prev.cx + dist * Math.cos(theta * RAD),
      cy: prev.cy + dist * Math.sin(theta * RAD),
      pitch,
      outer,
      ratio,
      phase,
    });
  });
  const minX = Math.min(...placed.map((g) => g.cx - g.outer));
  const minY = Math.min(...placed.map((g) => g.cy - g.outer));
  const maxX = Math.max(...placed.map((g) => g.cx + g.outer));
  const maxY = Math.max(...placed.map((g) => g.cy + g.outer));
  // Rotunjit: ultimele zecimale ale sinusului diferă între server și browser, iar React compară atributele la hidratare.
  placed.forEach((g) => {
    g.cx = round2(g.cx - minX);
    g.cy = round2(g.cy - minY);
    g.phase = round2(((g.phase % 360) + 360) % 360);
  });
  return { gears: placed, width: round2(maxX - minX), height: round2(maxY - minY) };
}

/** Bielă-manivelă: poziția pistonului pentru unghiul manivelei (r = raza manivelei, l = lungimea bielei). */
export function sliderX(deg: number, r: number, l: number): number {
  const a = deg * RAD;
  return r * Math.cos(a) + Math.sqrt(l * l - r * r * Math.sin(a) * Math.sin(a));
}
