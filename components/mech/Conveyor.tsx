"use client";

// Bandă rulantă: pașii unui proces sunt stații, dedesubt curge banda (liniuțe) între două role, iar o piesă
// merge de la un capăt la altul. Totul e legat de același unghi, luat din arborele motor.
// Stațiile stau în grilă (două coloane pe telefon), deci banda încape la orice lățime.

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { gearPath } from "./geometry";
import { useTrainAngle } from "./useTrainAngle";

const ROLLER = gearPath(8, 3.2);

export default function Conveyor({ label, steps, id }: { label: string; steps: string[]; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { angle } = useTrainAngle(ref, { speed: 2, near: 2.5, id });
  const belt = useTransform(angle, (a) => `${(a * 0.45) % 18}px 0px`);
  const roller = useTransform(angle, (a) => a * 1.6);
  const item = useTransform(angle, (a) => `${(((a * 0.12) % 100) + 100) % 100}%`);
  return (
    <div ref={ref} className="relative rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <ol className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s}
            className="min-w-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] font-medium leading-snug text-neutral-300 [overflow-wrap:anywhere]"
          >
            <span className="mr-1.5 text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </li>
        ))}
      </ol>
      {/* banda */}
      <div aria-hidden="true" className="relative mt-5 flex items-center gap-2 text-white">
        <motion.svg focusable="false" className="shrink-0 opacity-60" width="26" height="26" viewBox="-13 -13 26 26" fill="none" stroke="currentColor" style={{ rotate: roller }}>
          <path d={ROLLER} strokeWidth={1} />
          <circle r={2} fill="currentColor" stroke="none" />
        </motion.svg>
        <div className="relative h-3 flex-1 border-y border-white/20">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 18px)", backgroundPosition: belt }}
          />
          <motion.span className="absolute -top-[7px] h-2 w-3 -translate-x-1/2 rounded-[2px] border border-current bg-[var(--bg)]" style={{ left: item }} />
        </div>
        <motion.svg focusable="false" className="shrink-0 opacity-60" width="26" height="26" viewBox="-13 -13 26 26" fill="none" stroke="currentColor" style={{ rotate: roller }}>
          <path d={ROLLER} strokeWidth={1} />
          <circle r={2} fill="currentColor" stroke="none" />
        </motion.svg>
      </div>
    </div>
  );
}
