"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, UserCheck, ShieldAlert, Scale, Plus } from "lucide-react";
import SectionHead from "./SectionHead";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const tipIcons = [Database, UserCheck, ShieldAlert, Scale];
const tipAccents = ["var(--ink)", "var(--ink)", "var(--ink)", "var(--ink)"];

export default function SurvivalGuide() {
  const { lang } = useLanguage();
  const tx = translations[lang].guide;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="survival-guide" className="relative bg-transparent py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SectionHead badge={tx.badge} title={tx.title} accent={tx.titleAccent} subtitle={tx.subtitle} />

        {/* Book-style guide */}
        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

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
                      ? "bg-neutral-900/40 border border-white/10"
                      : "bg-neutral-900/40 border border-white/10 hover:border-white/10"
                  }`}
                >
                  {/* Spine dot */}
                  <div
                    className={`absolute left-[-4.5px] top-8 w-2.5 h-2.5 rounded-full hidden md:block border-2 transition-all duration-300 ${
                      isOpen ? "border-white/30 bg-white" : "border-white/20 bg-transparent"
                    }`}
                    style={isOpen ? { } : {}}
                  />

                  {/* Chapter header button */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start gap-5 md:gap-7 p-6 md:p-8 text-left cursor-pointer"
                  >
                    {/* Big chapter number */}
                    <div className="shrink-0 flex flex-col items-center">
                      <span
                        className="text-5xl md:text-7xl font-medium leading-none tabular-nums transition-all duration-300"
                        style={{
                          color: isOpen ? accent : "color-mix(in srgb, var(--ink) 6%, transparent)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {tip.number}
                      </span>
                      <span
                        className="text-[8px] uppercase tracking-[0.3em] mt-1 transition-colors duration-300"
                        style={{ color: isOpen ? `color-mix(in srgb, ${accent} 44%, transparent)` : "color-mix(in srgb, var(--ink) 15%, transparent)" }}
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
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1 mb-3 transition-all duration-300"
                            style={
                              isOpen
                                ? { background: `color-mix(in srgb, ${accent} 7%, transparent)`, border: `1px solid color-mix(in srgb, ${accent} 15%, transparent)` }
                                : { background: "color-mix(in srgb, var(--ink) 4%, transparent)", border: "1px solid color-mix(in srgb, var(--ink) 6%, transparent)" }
                            }
                          >
                            <Icon
                              size={11}
                              style={{ color: isOpen ? accent : "color-mix(in srgb, var(--ink) 30%, transparent)" }}
                              strokeWidth={2}
                            />
                            <span
                              className="text-[9px] font-medium uppercase tracking-widest transition-colors duration-300"
                              style={{ color: isOpen ? accent : "color-mix(in srgb, var(--ink) 30%, transparent)" }}
                            >
                              {tip.tagline}
                            </span>
                          </div>
                          <h3 className="text-white font-medium text-xl md:text-2xl leading-tight">{tip.title}</h3>
                        </div>

                        {/* Expand indicator */}
                        <div
                          className="shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300"
                          style={
                            isOpen
                              ? { borderColor: `color-mix(in srgb, ${accent} 25%, transparent)`, background: `color-mix(in srgb, ${accent} 6%, transparent)`, color: accent }
                              : { borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)", background: "transparent", color: "color-mix(in srgb, var(--ink) 25%, transparent)" }
                          }
                        >
                          <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="flex">
                            <Plus size={14} strokeWidth={1.5} aria-hidden="true" />
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
                            style={{ background: `linear-gradient(90deg, color-mix(in srgb, ${accent} 19%, transparent), transparent)` }}
                          />

                          {/* Main description */}
                          <p className="text-neutral-400 font-light leading-relaxed text-[15px] mb-6">
                            {tip.description}
                          </p>

                          {/* Pull quote / key insight */}
                          <div
                            className="relative rounded-xl p-5 mb-6 overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, color-mix(in srgb, ${accent} 3%, transparent), transparent)`,
                              border: `1px solid color-mix(in srgb, ${accent} 13%, transparent)`,
                              borderLeft: `3px solid ${accent}`,
                            }}
                          >
                            <div
                              className="text-[9px] uppercase tracking-[0.3em] font-medium mb-2"
                              style={{ color: `color-mix(in srgb, ${accent} 50%, transparent)` }}
                            >
                              Key Insight
                            </div>
                            <p
                              className="text-sm font-medium leading-relaxed italic"
                              style={{ color: `color-mix(in srgb, ${accent} 80%, transparent)` }}
                            >
                              „{tip.keyInsight}”
                            </p>
                          </div>

                          {/* Metric badge */}
                          <div className="flex items-center gap-4">
                            <div
                              className="flex items-center gap-3 rounded-xl px-5 py-3"
                              style={{
                                background: `color-mix(in srgb, ${accent} 5%, transparent)`,
                                border: `1px solid color-mix(in srgb, ${accent} 13%, transparent)`,
                              }}
                            >
                              <span className="text-2xl font-medium" style={{ color: accent }}>
                                {tip.metric}
                              </span>
                              <span className="text-neutral-500 text-xs font-light max-w-[160px] leading-tight">
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
