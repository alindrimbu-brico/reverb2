"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, UserCheck, ShieldAlert, Scale } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const tipIcons = [Database, UserCheck, ShieldAlert, Scale];
const tipAccents = ["#00E5FF", "#FFE600", "#00E5FF", "#FFE600"];

export default function SurvivalGuide() {
  const { lang } = useLanguage();
  const tx = translations[lang].guide;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="survival-guide" className="relative bg-[#06060f] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-[#FFE600]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
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

        {/* Book-style guide */}
        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFE600]/0 via-[#FFE600]/20 to-[#FFE600]/0 hidden md:block" />

          <div className="space-y-4">
            {tx.tips.map((tip, i) => {
              const Icon = tipIcons[i];
              const accent = tipAccents[i];
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={tip.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative md:pl-8 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-[#0e0e1a] border border-white/10"
                      : "bg-[#0a0a14]/80 border border-white/5 hover:border-white/8"
                  }`}
                >
                  {/* Spine dot */}
                  <div
                    className={`absolute left-[-4.5px] top-8 w-2.5 h-2.5 rounded-full hidden md:block border-2 transition-all duration-300 ${
                      isOpen ? "border-[#FFE600] bg-[#FFE600]" : "border-white/20 bg-[#06060f]"
                    }`}
                    style={isOpen ? { boxShadow: `0 0 12px ${accent}80` } : {}}
                  />

                  {/* Chapter header button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start gap-5 md:gap-7 p-6 md:p-8 text-left cursor-pointer"
                  >
                    {/* Big chapter number */}
                    <div className="shrink-0 flex flex-col items-center">
                      <span
                        className="text-5xl md:text-7xl font-black leading-none tabular-nums transition-all duration-300"
                        style={{
                          color: isOpen ? accent : "rgba(255,255,255,0.06)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {tip.number}
                      </span>
                      <span
                        className="text-[8px] uppercase tracking-[0.3em] mt-1 transition-colors duration-300"
                        style={{ color: isOpen ? `${accent}70` : "rgba(255,255,255,0.15)" }}
                      >
                        {tx.chapterLabel}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Tagline pill */}
                          <div
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 transition-all duration-300"
                            style={
                              isOpen
                                ? { background: `${accent}12`, border: `1px solid ${accent}25` }
                                : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }
                            }
                          >
                            <Icon
                              size={11}
                              style={{ color: isOpen ? accent : "rgba(255,255,255,0.30)" }}
                              strokeWidth={2}
                            />
                            <span
                              className="text-[9px] font-bold uppercase tracking-widest transition-colors duration-300"
                              style={{ color: isOpen ? accent : "rgba(255,255,255,0.30)" }}
                            >
                              {tip.tagline}
                            </span>
                          </div>
                          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">{tip.title}</h3>
                        </div>

                        {/* Expand indicator */}
                        <div
                          className="shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300"
                          style={
                            isOpen
                              ? { borderColor: `${accent}40`, background: `${accent}10`, color: accent }
                              : { borderColor: "rgba(255,255,255,0.08)", background: "transparent", color: "rgba(255,255,255,0.25)" }
                          }
                        >
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-lg font-light leading-none"
                          >
                            +
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 md:pl-[calc(2rem+5rem+1.75rem)]">
                          {/* Divider */}
                          <div
                            className="h-px mb-6"
                            style={{ background: `linear-gradient(90deg, ${accent}30, transparent)` }}
                          />

                          {/* Main description */}
                          <p className="text-white/60 font-light leading-relaxed text-[15px] mb-6">
                            {tip.description}
                          </p>

                          {/* Pull quote / key insight */}
                          <div
                            className="relative rounded-xl p-5 mb-6 overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${accent}08, transparent)`,
                              border: `1px solid ${accent}20`,
                              borderLeft: `3px solid ${accent}`,
                            }}
                          >
                            <div
                              className="text-[9px] uppercase tracking-[0.3em] font-bold mb-2"
                              style={{ color: `${accent}80` }}
                            >
                              Key Insight
                            </div>
                            <p
                              className="text-sm font-medium leading-relaxed italic"
                              style={{ color: `${accent}cc` }}
                            >
                              "{tip.keyInsight}"
                            </p>
                          </div>

                          {/* Metric badge */}
                          <div className="flex items-center gap-4">
                            <div
                              className="flex items-center gap-3 rounded-xl px-5 py-3"
                              style={{
                                background: `${accent}0d`,
                                border: `1px solid ${accent}20`,
                              }}
                            >
                              <span className="text-2xl font-black" style={{ color: accent }}>
                                {tip.metric}
                              </span>
                              <span className="text-white/40 text-xs font-light max-w-[160px] leading-tight">
                                {tip.metricLabel}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
