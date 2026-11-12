"use client";

// Diafragma cu șase lamele. Implicit e deschisă (din CSS). Fazele vin din MechProvider:
//   intro   — la prima intrare în pagină se deschide (animație CSS, merge și fără JavaScript);
//   blink   — clipește la trecerea între două pagini cu mecanică;
//   closing — se închide înainte de plecare (MechLink); opening — se deschide după o închidere.
// Regulile sunt în app/globals.css („Diafragma paginilor cu mecanică”). La mișcare redusă nu se animă nimic.

import { useMech } from "./MechProvider";

const BLADES = 6;
const R = 240; // raza lamelei, în unitățile desenului (acoperă și colțurile ecranului)
const OUT = 190; // cât iese lamela din ecran când diafragma e deschisă

export default function Shutter() {
  const { shutter } = useMech();
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-phase={shutter}
      className="mech-iris text-white"
      viewBox="-100 -100 200 200"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
    >
      {Array.from({ length: BLADES }, (_, k) => {
        const a0 = (k * 2 * Math.PI) / BLADES - 0.01;
        const a1 = ((k + 1) * 2 * Math.PI) / BLADES + 0.01;
        const mid = (a0 + a1) / 2;
        const p = (a: number) => `${(R * Math.cos(a)).toFixed(1)} ${(R * Math.sin(a)).toFixed(1)}`;
        return (
          <path
            key={k}
            className="mech-blade"
            d={`M 0 0 L ${p(a0)} A ${R} ${R} 0 0 1 ${p(a1)} Z`}
            style={{ "--dx": `${(OUT * Math.cos(mid)).toFixed(1)}px`, "--dy": `${(OUT * Math.sin(mid)).toFixed(1)}px`, animationDelay: `${k * 18}ms` } as React.CSSProperties}
            fill="var(--bg)"
            stroke="currentColor"
            strokeOpacity={0.35}
            strokeWidth={0.4}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}
