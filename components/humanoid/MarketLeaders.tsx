"use client";

import { motion } from "framer-motion";
import { Brain, Factory, Zap, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const catIcons = [Brain, Factory, Zap, Globe];
const catAccents = ["#00E5FF", "#FFE600", "#00E5FF", "#FFE600"];
const catSlugs = ["ai-leaders", "mass-production", "peak-performance", "democratization"];

const robotsData = [
  [
    { name: "Figure 03", company: "Figure AI", badge: "OpenAI Partnership", detail: "Motor de raționament multimodal GPT-4o. Viteză de lucru: 90% din viteza umană. / Multimodal GPT-4o reasoning engine. Work speed: 90% of human pace." },
    { name: "Sanctuary Phoenix", company: "Sanctuary AI", badge: "AGI-focused", detail: "Carbon AI platform. Zero-shot task transfer in unknown environments. / Platformă Carbon AI. Transfer de sarcini zero-shot în medii necunoscute." },
  ],
  [
    { name: "Tesla Optimus Gen 3", company: "Tesla", badge: "1M units/yr target", detail: "Gigafactory assembly line: 1,000 units/week. Cost target: under $20,000. / Linia Gigafactory: 1.000 unități/săptămână. Cost țintă: sub 20.000$." },
  ],
  [
    { name: "Boston Dynamics Atlas", company: "Boston Dynamics", badge: "Fully Electric", detail: "800N force. Parkour & object manipulation in chaotic environments. Open SDK. / Forța de 800N. Parkour în medii haotice. SDK deschis." },
    { name: "Apptronik Apollo", company: "Apptronik", badge: "Google Partnership", detail: "Designed for heavy logistics: 55kg carry. Fast battery swap system. / Logistică grea: portare de 55kg. Sistem de schimb rapid al bateriei." },
  ],
  [
    { name: "Unitree G1", company: "Unitree Robotics", badge: "$16,000", detail: "First humanoid under $20K. 43 degrees of freedom. Open Python API. / Primul humanoidal sub $20K. 43 grade de libertate. API Python deschis." },
    { name: "Unitree R1", company: "Unitree Robotics", badge: "$4,900", detail: "Wheeled robot for indoor spaces. Ideal for retail and hospitality. / Robot cu roți pentru spații interioare. Ideal pentru retail." },
    { name: "Noetix Bumi", company: "Noetix Robotics", badge: "$1,400", detail: "Cheapest functional humanoid. Target: homes and education. / Cel mai ieftin humanoidal funcțional. Target: gospodării și educație." },
  ],
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function MarketLeaders() {
  const { lang } = useLanguage();
  const tx = translations[lang].market;

  return (
    <section id="market-leaders" className="relative bg-[#0a0a14] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 border border-[#FFE600]/15 rounded-full px-4 py-1.5 bg-[#FFE600]/5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFE600]/70 font-semibold">{tx.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {tx.title}{" "}
            <span className="text-[#FFE600]">{tx.titleAccent}</span>
          </h2>
          <p className="text-white/40 font-light max-w-xl mx-auto text-base md:text-lg">{tx.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {tx.categories.map((cat, i) => {
            const Icon = catIcons[i];
            const accent = catAccents[i];
            const robots = robotsData[i];
            const slug = catSlugs[i];
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative group rounded-2xl border border-white/6 bg-[#0e0e1a] p-8 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ background: accent }}
                />
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${accent}20, ${accent}06)`,
                      border: `1px solid ${accent}25`,
                    }}
                  >
                    <Icon size={20} style={{ color: accent }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 font-mono tracking-widest mb-0.5">
                      0{i + 1} / {tx.catLabel}
                    </div>
                    <h3 className="text-white font-bold text-xl leading-tight">{cat.title}</h3>
                    <p className="text-white/40 text-sm font-light mt-1">{cat.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {robots.map((robot) => (
                    <div
                      key={robot.name}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="text-white font-semibold text-base">{robot.name}</span>
                          <span className="text-white/40 text-sm font-light ml-2">{robot.company}</span>
                        </div>
                        <span
                          className="shrink-0 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{
                            background: `${accent}15`,
                            color: accent,
                            border: `1px solid ${accent}30`,
                          }}
                        >
                          {robot.badge}
                        </span>
                      </div>
                      <p className="text-white/40 text-sm font-light leading-relaxed">
                        {lang === "ro"
                          ? robot.detail.split(" / ")[0]
                          : robot.detail.split(" / ")[1] || robot.detail.split(" / ")[0]}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Detail page link */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <Link
                    href={`/humanoid-reality-2026/${slug}`}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200"
                    style={{ color: `${accent}70` }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = `${accent}70`)}
                  >
                    {lang === "ro" ? "Detalii complete" : "Full details"}
                    <ArrowRight size={12} />
                  </Link>
                </div>

                <div
                  className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}50, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
