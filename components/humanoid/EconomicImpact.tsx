"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

const icons = [TrendingUp, Users, DollarSign];
const accents = ["#00E5FF", "#FFE600", "#00E5FF"];
const glows = [
  "hover:shadow-[0_0_60px_rgba(0,229,255,0.12)]",
  "hover:shadow-[0_0_60px_rgba(255,230,0,0.12)]",
  "hover:shadow-[0_0_60px_rgba(0,229,255,0.12)]",
];
const borders = ["border-[#00E5FF]/15", "border-[#FFE600]/15", "border-[#00E5FF]/15"];

// Animated counter hook
function useCounter(target: number, inView: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return val;
}

// Stat display configs (numeric + suffix for counter animation)
const statNumerics = [750, 18, 2];
const statFormats = [
  (n: number, lang: "ro" | "en") => lang === "ro" ? `${n} Mld $` : `$${n}B`,
  (n: number) => `−${n}%`,
  (n: number, lang: "ro" | "en") => lang === "ro" ? `${n}$/oră` : `$${n}/hr`,
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function StatCard({ stat, i, lang, inView }: {
  stat: { value: string; label: string; detail: string };
  i: number;
  lang: "ro" | "en";
  inView: boolean;
}) {
  const Icon = icons[i];
  const accent = accents[i];
  const count = useCounter(statNumerics[i], inView);
  const displayValue = inView ? statFormats[i](count, lang) : "0";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative group rounded-2xl border ${borders[i]} bg-[#0c0c1a] p-8 md:p-10 overflow-hidden transition-all duration-300 ${glows[i]}`}
    >
      {/* Corner gradient */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-50 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `radial-gradient(circle, ${accent}20, transparent 70%)` }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}40, transparent)` }}
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

      {/* Animated value */}
      <div
        className="relative z-10 text-4xl md:text-5xl font-black tracking-tight mb-3 tabular-nums"
        style={{
          color: accent,
          textShadow: `0 0 40px ${accent}40`,
        }}
      >
        {displayValue}
      </div>

      <h3 className="relative z-10 text-white font-semibold text-lg mb-4 leading-snug">{stat.label}</h3>
      <p className="relative z-10 text-white/40 text-sm font-light leading-relaxed">{stat.detail}</p>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
      />
    </motion.div>
  );
}

export default function EconomicImpact() {
  const { lang } = useLanguage();
  const tx = translations[lang].economic;
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="economic-impact" ref={sectionRef} className="relative bg-[#080810] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 border border-[#00E5FF]/15 rounded-full px-4 py-1.5 bg-[#00E5FF]/5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]/70 font-semibold">{tx.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {tx.title}{" "}
            <span style={{ color: "#00E5FF" }}>{tx.titleAccent}</span>
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
          {tx.stats.map((stat, i) => (
            <StatCard key={i} stat={stat} i={i} lang={lang} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
