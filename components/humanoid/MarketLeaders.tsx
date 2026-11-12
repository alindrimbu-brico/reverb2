"use client";

import { motion } from "framer-motion";
import { Brain, Factory, Zap, Globe } from "lucide-react";
import Bolts from "@/components/mech/Bolts";
import MechLink from "@/components/mech/MechLink";
import SectionHead from "./SectionHead";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const catIcons = [Brain, Factory, Zap, Globe];
export const chapterSlugs = ["ai-leaders", "mass-production", "peak-performance", "democratization"];

// Fiecare robot are textul lui în română și în engleză, separat (înainte erau lipite într-un singur șir, în ordine amestecată).
const robotsData: { name: string; company: string; badge: string; ro: string; en: string }[][] = [
  [
    {
      name: "Figure 03",
      company: "Figure AI",
      badge: "OpenAI Partnership",
      ro: "Motor de raționament multimodal GPT-4o. Viteză de lucru: 90% din viteza umană.",
      en: "Multimodal GPT-4o reasoning engine. Work speed: 90% of human pace.",
    },
    {
      name: "Sanctuary Phoenix",
      company: "Sanctuary AI",
      badge: "AGI-focused",
      ro: "Platformă Carbon AI. Transfer de sarcini zero-shot în medii necunoscute.",
      en: "Carbon AI platform. Zero-shot task transfer in unknown environments.",
    },
  ],
  [
    {
      name: "Tesla Optimus Gen 3",
      company: "Tesla",
      badge: "1M units/yr target",
      ro: "Linia Gigafactory: 1.000 unități/săptămână. Cost țintă: sub 20.000$.",
      en: "Gigafactory assembly line: 1,000 units/week. Cost target: under $20,000.",
    },
  ],
  [
    {
      name: "Boston Dynamics Atlas",
      company: "Boston Dynamics",
      badge: "Fully Electric",
      ro: "Forța de 800N. Parkour în medii haotice. SDK deschis.",
      en: "800N force. Parkour & object manipulation in chaotic environments. Open SDK.",
    },
    {
      name: "Apptronik Apollo",
      company: "Apptronik",
      badge: "Google Partnership",
      ro: "Logistică grea: portare de 55kg. Sistem de schimb rapid al bateriei.",
      en: "Designed for heavy logistics: 55kg carry. Fast battery swap system.",
    },
  ],
  [
    {
      name: "Unitree G1",
      company: "Unitree Robotics",
      badge: "$16,000",
      ro: "Primul humanoidal sub $20K. 43 grade de libertate. API Python deschis.",
      en: "First humanoid under $20K. 43 degrees of freedom. Open Python API.",
    },
    {
      name: "Unitree R1",
      company: "Unitree Robotics",
      badge: "$4,900",
      ro: "Robot cu roți pentru spații interioare. Ideal pentru retail.",
      en: "Wheeled robot for indoor spaces. Ideal for retail and hospitality.",
    },
    {
      name: "Noetix Bumi",
      company: "Noetix Robotics",
      badge: "$1,400",
      ro: "Cel mai ieftin humanoidal funcțional. Target: gospodării și educație.",
      en: "Cheapest functional humanoid. Target: homes and education.",
    },
  ],
];

export default function MarketLeaders() {
  const { lang } = useLanguage();
  const tx = translations[lang].market;

  return (
    <section id="market-leaders" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead badge={tx.badge} title={tx.title} accent={tx.titleAccent} subtitle={tx.subtitle} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tx.categories.map((cat, i) => {
            const Icon = catIcons[i];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl border border-white/10 bg-neutral-900/40 p-8"
              >
                <Bolts />
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={20} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-0.5 font-mono text-[10px] tracking-widest text-neutral-500">
                      0{i + 1} / {tx.catLabel}
                    </div>
                    <h3 className="text-xl font-medium leading-tight text-white">{cat.title}</h3>
                    <p className="mt-1 text-sm font-light text-neutral-400">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {robotsData[i].map((robot) => (
                    <div key={robot.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="mb-2 flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                        <div className="min-w-0">
                          <span className="text-base font-medium text-white">{robot.name}</span>
                          <span className="ml-2 text-sm font-light text-neutral-400">{robot.company}</span>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/20 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-wider text-neutral-300">
                          {robot.badge}
                        </span>
                      </div>
                      <p className="text-sm font-light leading-relaxed text-neutral-400">{lang === "ro" ? robot.ro : robot.en}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <MechLink
                    href={`/humanoid-reality-2026/${chapterSlugs[i]}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-200 transition-colors hover:bg-white hover:text-black"
                  >
                    {lang === "ro" ? "Citește capitolul" : "Read the chapter"}&nbsp;→
                  </MechLink>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
