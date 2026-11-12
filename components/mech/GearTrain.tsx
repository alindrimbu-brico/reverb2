"use client";

// Tren de roți dințate care angrenează: o singură valoare (unghiul trenului) le mișcă pe toate, fiecare cu raportul
// și faza ei. Fiecare roată e un <svg> propriu, rotit ca element HTML (strat propriu, fără redesenarea vecinelor).
// Desenele folosesc currentColor pe <svg class="text-white">, deci urmează tema light a site-ului.

import { useMemo, useRef } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { gearPath, layoutTrain, round2, type GearSpec, type PlacedGear } from "./geometry";
import { useTrainAngle } from "./useTrainAngle";

function Gear({ g, m, angle, index }: { g: PlacedGear; m: number; angle: MotionValue<number>; index: number }) {
  const rotate = useTransform(angle, (a) => g.phase + a * g.ratio);
  const d = useMemo(() => gearPath(g.teeth, m), [g.teeth, m]);
  const R = round2(g.outer + 1);
  const rf = g.pitch - m * 1.1;
  const hub = round2(Math.max(3, rf * 0.22));
  const rim = round2(rf * 0.78);
  const spokes = g.teeth >= 20 ? 6 : g.teeth >= 12 ? 5 : 4;
  return (
    <motion.svg
      aria-hidden="true"
      focusable="false"
      className="absolute text-white"
      width={R * 2}
      height={R * 2}
      viewBox={`${-R} ${-R} ${R * 2} ${R * 2}`}
      style={{ left: g.cx - R, top: g.cy - R, rotate, opacity: index % 2 === 0 ? 0.55 : 0.4 }}
      fill="none"
      stroke="currentColor"
    >
      <path d={d} strokeWidth={1.1} strokeLinejoin="round" fill="currentColor" fillOpacity={0.035} />
      {rf > 14 && <circle r={rim} strokeWidth={0.8} strokeOpacity={0.6} />}
      {rf > 14 &&
        Array.from({ length: spokes }, (_, i) => {
          const a = (i * 2 * Math.PI) / spokes;
          return (
            <line
              key={i}
              x1={round2(hub * Math.cos(a))}
              y1={round2(hub * Math.sin(a))}
              x2={round2(rim * Math.cos(a))}
              y2={round2(rim * Math.sin(a))}
              strokeWidth={0.9}
              strokeOpacity={0.7}
            />
          );
        })}
      <circle r={hub} strokeWidth={1} />
      <circle r={Math.max(1, hub * 0.35)} fill="currentColor" stroke="none" />
    </motion.svg>
  );
}

export default function GearTrain({
  gears,
  module: m = 5,
  speed = 1,
  near = 3,
  id,
  className = "",
}: {
  gears: GearSpec[];
  /** Mărimea dinților: pixeli pe dinte, pe diametru. */
  module?: number;
  speed?: number;
  /** Cât accelerează când cursorul e aproape (0 = deloc). */
  near?: number;
  /** Numele sub care unghiul apare în window.__mech.trains (pentru verificare). */
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const train = useMemo(() => layoutTrain(gears, m), [gears, m]);
  const { angle, inView } = useTrainAngle(ref, { speed, near, id });
  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none relative shrink-0 ${className}`}
      style={{ width: train.width, height: train.height }}
      // Trenul se „montează” când intră în ecran și se desface când iese.
      initial={false}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {train.gears.map((g, i) => (
        <Gear key={i} g={g} m={m} angle={angle} index={i} />
      ))}
    </motion.div>
  );
}
