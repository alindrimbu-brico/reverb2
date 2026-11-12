"use client";

// Antetul comun al secțiunilor raportului: o pereche de roți care se învârt, eticheta, titlul în două tonuri
// (alb + gri, ca pe prima pagină a site-ului) și subtitlul.

import { motion } from "framer-motion";
import GearTrain from "@/components/mech/GearTrain";

const PAIR = [{ teeth: 14 }, { teeth: 9, at: 0 }];

export default function SectionHead({
  badge,
  title,
  accent,
  subtitle,
  align = "center",
}: {
  badge: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={center ? "mb-16 text-center md:mb-20" : "mb-8"}
    >
      <div className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <GearTrain gears={PAIR} module={3.2} speed={1.6} />
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-300">
          {badge}
        </span>
      </div>
      <h2 className="text-3xl font-light leading-tight tracking-tight text-white md:text-5xl">
        {title} {accent && <span className="text-neutral-400">{accent}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base font-light leading-relaxed text-neutral-400 md:text-lg ${center ? "mx-auto max-w-xl" : ""}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
