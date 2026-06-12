"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const icons = [TrendingUp, Users, DollarSign];
const accents = ["#00E5FF", "#FFE600", "#00E5FF"];
const glows = [
  "shadow-[0_0_40px_rgba(0,229,255,0.08)]",
  "shadow-[0_0_40px_rgba(255,230,0,0.08)]",
  "shadow-[0_0_40px_rgba(0,229,255,0.08)]",
];
const borders = ["border-[#00E5FF]/20", "border-[#FFE600]/20", "border-[#00E5FF]/20"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function EconomicImpact() {
  const { lang } = useLanguage();
  const tx = translations[lang].economic;

  return (
    <section id="economic-impact" className="relative bg-[#080810] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 border border-[#00E5FF]/15 rounded-full px-4 py-1.5 bg-[#00E5FF]/5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]/70 font-semibold">{tx.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {tx.title}{" "}
            <span className="text-[#00E5FF]">{tx.titleAccent}</span>
          </h2>
          <p className="text-white/40 font-light max-w-xl mx-auto text-base md:text-lg">{tx.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {tx.stats.map((stat, i) => {
            const Icon = icons[i];
            const accent = accents[i];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative group rounded-2xl border ${borders[i]} bg-[#0e0e1a] p-8 md:p-10 overflow-hidden ${glows[i]} transition-all duration-300`}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[40px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to bottom left, ${accent}18, transparent)` }}
                />
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                  style={{
                    background: `linear-gradient(135deg, ${accent}18, ${accent}05)`,
                    border: `1px solid ${accent}25`,
                  }}
                >
                  <Icon size={22} style={{ color: accent }} strokeWidth={1.5} />
                </div>
                <div className="relative z-10 text-4xl md:text-5xl font-bold tracking-tight mb-3" style={{ color: accent }}>
                  {stat.value}
                </div>
                <h3 className="relative z-10 text-white font-semibold text-lg mb-4 leading-snug">{stat.label}</h3>
                <p className="relative z-10 text-white/40 text-sm font-light leading-relaxed">{stat.detail}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
