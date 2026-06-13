"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const SECTIONS = [
  { id: "economic-impact", ro: "Impact", en: "Impact" },
  { id: "market-leaders", ro: "Lideri", en: "Leaders" },
  { id: "brain-behind", ro: "Creier AI", en: "AI Brain" },
  { id: "survival-guide", ro: "Ghid", en: "Guide" },
  { id: "certifications", ro: "Certificări", en: "Certifications" },
  { id: "footer-cta", ro: "Raport", en: "Report" },
];

export default function HumanoidNav() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll for glass intensify
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true, once: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  // Track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main nav bar — always visible, overlays the global header */}
      <nav
        className="fixed top-0 left-0 right-0 z-[250] flex items-center justify-between px-4 md:px-8 h-14 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8,8,16,0.92)"
            : "rgba(8,8,16,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,229,255,0.10)"
            : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 shrink-0 cursor-pointer group"
        >
          <span
            className="w-2 h-2 rounded-full bg-[#00E5FF] shrink-0"
            style={{ boxShadow: "0 0 8px rgba(0,229,255,0.7)" }}
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/75 group-hover:text-white transition-colors leading-none">
            Realitatea Umanoidă{" "}
            <span className="text-[#00E5FF]">2026</span>
          </span>
        </button>

        {/* Desktop section links */}
        <div className="hidden md:flex items-center gap-0.5">
          {SECTIONS.map((sec) => {
            const isActive = active === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="relative px-3 py-1.5 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                style={{
                  color: isActive ? "#00E5FF" : "rgba(255,255,255,0.35)",
                  background: isActive ? "rgba(0,229,255,0.08)" : "transparent",
                }}
              >
                {lang === "ro" ? sec.ro : sec.en}
                {isActive && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute bottom-0.5 left-2 right-2 h-px bg-[#00E5FF]"
                    style={{ boxShadow: "0 0 6px rgba(0,229,255,0.9)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Lang toggle — desktop */}
          <button
            onClick={toggle}
            className="hidden md:flex items-center gap-1.5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-all hover:border-[#00E5FF]/40"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <span className="text-[#00E5FF]">{lang.toUpperCase()}</span>
            <span className="w-px h-3 bg-white/15" />
            <span>{lang === "ro" ? "EN" : "RO"}</span>
          </button>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border cursor-pointer transition-all"
            style={{
              borderColor: menuOpen ? "rgba(0,229,255,0.4)" : "rgba(255,255,255,0.12)",
              background: menuOpen ? "rgba(0,229,255,0.08)" : "rgba(255,255,255,0.04)",
              color: menuOpen ? "#00E5FF" : "rgba(255,255,255,0.6)",
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-14 left-0 right-0 z-[249] md:hidden"
            style={{
              background: "rgba(8,8,16,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(0,229,255,0.08)",
            }}
          >
            {SECTIONS.map((sec, i) => (
              <motion.button
                key={sec.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.035 }}
                onClick={() => scrollTo(sec.id)}
                className="w-full flex items-center gap-3 px-6 py-4 text-left border-b border-white/[0.04] cursor-pointer"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: active === sec.id ? "#00E5FF" : "rgba(255,255,255,0.18)",
                    boxShadow: active === sec.id ? "0 0 6px rgba(0,229,255,0.8)" : "none",
                  }}
                />
                <span
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: active === sec.id ? "#00E5FF" : "rgba(255,255,255,0.52)" }}
                >
                  {lang === "ro" ? sec.ro : sec.en}
                </span>
              </motion.button>
            ))}

            {/* Lang row */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-[10px] text-white/25 uppercase tracking-widest">Limbă / Language</span>
              <button
                onClick={() => { toggle(); setMenuOpen(false); }}
                className="flex items-center gap-2 border border-white/12 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer hover:border-[#00E5FF]/30 transition-all"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span className="text-[#00E5FF]">{lang.toUpperCase()}</span>
                <span className="w-px h-3 bg-white/15" />
                <span>{lang === "ro" ? "EN" : "RO"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
