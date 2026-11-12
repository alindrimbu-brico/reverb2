"use client";

import { motion } from "framer-motion";
import { Eye, Cpu, GitMerge } from "lucide-react";
import Bolts from "@/components/mech/Bolts";
import Conveyor from "@/components/mech/Conveyor";
import SectionHead from "./SectionHead";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const conceptIcons = [Eye, Cpu, GitMerge];

export default function BrainBehind() {
  const { lang } = useLanguage();
  const tx = translations[lang].brain;

  return (
    <section id="brain-behind" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Stânga: titlul, cifra și banda rulantă a pașilor */}
          <div className="min-w-0 lg:sticky lg:top-36">
            <SectionHead badge={tx.badge} title={tx.title} accent={tx.titleAccent} subtitle={tx.subtitle} align="left" />

            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-4xl font-light tracking-tight text-white">{tx.statValue}</div>
              <p className="text-sm font-light text-neutral-400">{tx.statLabel}</p>
            </div>

            <Conveyor label={tx.pipelineLabel} steps={tx.pipelineSteps.filter((s) => s !== "→")} id="conveyor" />
          </div>

          {/* Dreapta: cele trei concepte */}
          <div className="min-w-0 space-y-5">
            {tx.concepts.map((concept, i) => {
              const Icon = conceptIcons[i];
              return (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-3xl border border-white/10 bg-neutral-900/40 p-7"
                >
                  <Bolts />
                  <div className="flex items-start gap-5">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon size={20} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-neutral-500">{concept.subtitle}</div>
                      <h3 className="mb-3 text-xl font-medium leading-tight text-white">{concept.title}</h3>
                      <p className="mb-5 text-sm font-light leading-relaxed text-neutral-400">{concept.description}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
                        <span className="text-xl font-medium tracking-tight text-white">{concept.metric}</span>
                        <span className="min-w-0 text-xs font-light leading-tight text-neutral-400">{concept.metricLabel}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
