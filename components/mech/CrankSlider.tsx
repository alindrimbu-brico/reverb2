"use client";

// Despărțitor de secțiune: o manivelă care se învârte, o bielă și un piston care merge dus-întors într-un cilindru.
// Poziția pistonului se calculează din unghiul manivelei (geometria reală a mecanismului), nu e o animație separată.

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { sliderX } from "./geometry";
import { useTrainAngle } from "./useTrainAngle";

const R = 15; // raza manivelei
const L = 62; // lungimea bielei
const RAD = Math.PI / 180;

export default function CrankSlider({ label, id, className = "" }: { label?: string; id?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { angle } = useTrainAngle(ref, { speed: 2.2, near: 2.5, id });
  const pinX = useTransform(angle, (a) => R * Math.cos(a * RAD));
  const pinY = useTransform(angle, (a) => R * Math.sin(a * RAD));
  const pistonX = useTransform(angle, (a) => sliderX(a, R, L));
  const headX = useTransform(pistonX, (x) => x - 4);
  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none mx-auto flex max-w-7xl items-center gap-4 px-6 ${className}`}>
      <svg
        focusable="false"
        className="shrink-0 text-white opacity-60"
        width="150"
        height="44"
        viewBox="-22 -22 150 44"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      >
        {/* volantul manivelei */}
        <circle r={20} strokeWidth={1} strokeOpacity={0.5} />
        <circle r={3} strokeWidth={1} />
        <motion.line x1={0} y1={0} x2={pinX} y2={pinY} strokeWidth={2} strokeOpacity={0.8} />
        {/* cilindrul */}
        <path d="M 42 -9 H 124 M 42 9 H 124 M 124 -9 V 9" strokeWidth={1} strokeOpacity={0.5} />
        {/* biela */}
        <motion.line x1={pinX} y1={pinY} x2={pistonX} y2={0} strokeWidth={1.6} />
        <motion.circle cx={pinX} cy={pinY} r={2.4} fill="currentColor" stroke="none" />
        {/* pistonul */}
        <motion.rect x={headX} y={-7} width={18} height={14} rx={2} strokeWidth={1.2} fill="currentColor" fillOpacity={0.08} />
        <motion.circle cx={pistonX} cy={0} r={1.8} fill="currentColor" stroke="none" />
      </svg>
      <div className="h-px flex-1 bg-white/10" />
      {label && <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">{label}</span>}
    </div>
  );
}
