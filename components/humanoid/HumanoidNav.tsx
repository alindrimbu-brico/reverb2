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
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on scroll
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
      {/* Desktop / main bar */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -64, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed top-0 left-0 right-0 z-[180] flex items-center justify-between gap-4 px-4 md:px-8 h-14"
            style={{
              background: "rgba(8,8,16,0.88)",
              backdropFilter: "blur(18px)",
              borderBottom: "1px solid rgba(0,229,255,0.08)",
            }}
          >
            {/* Brand */}
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2 shrink-0 cursor-pointer group"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#00E5FF] group-hover:shadow-[0_0_10px_#00E5FF] transition-shadow"
                style={{ boxShadow: "0 0 6px rgba(0,229,255,0.6)" }}
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 group-hover:text-[#00E5FF] transition-colors">
                {lang === "ro" ? "Realitatea Umanoidă" : "Humanoid Reality"}{" "}
                <span className="text-[#00E5FF]">2026</span>
              </span>
            </button>

            {/* Section links — desktop only */}
            <div className="hidden md:flex items-center gap-1">
              {SECTIONS.map((sec) => {
                const isActive = active === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className="relative px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer rounded-md"
                    style={{
                      color: isActive ? "#00E5FF" : "rgba(255,255,255,0.38)",
                      background: isActive ? "rgba(0,229,255,0.08)" : "transparent",
                    }}
                  >
                    {lang === "ro" ? sec.ro : sec.en}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-2 right-2 h-px bg-[#00E5FF]"
                        style={{ boxShadow: "0 0 6px rgba(0,229,255,0.8)" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: lang toggle + hamburger */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={toggle}
                className="hidden md:flex items-center gap-1 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all cursor-pointer"
              >
                {lang === "ro" ? "EN" : "RO"}
              </button>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60 hover:text-white hover:border-white/20 transition-all cursor-pointer"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-14 left-0 right-0 z-[179] md:hidden flex flex-col"
            style={{
              background: "rgba(8,8,16,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(0,229,255,0.08)",
            }}
          >
            {SECTIONS.map((sec, i) => (
              <motion.button
                key={sec.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(sec.id)}
                className="flex items-center gap-3 px-6 py-4 text-left border-b border-white/[0.04] cursor-pointer group"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
                  style={{
                    background: active === sec.id ? "#00E5FF" : "rgba(255,255,255,0.2)",
                    boxShadow: active === sec.id ? "0 0 6px rgba(0,229,255,0.7)" : "none",
                  }}
                />
                <span
                  className="text-sm font-semibold uppercase tracking-wider transition-colors"
                  style={{ color: active === sec.id ? "#00E5FF" : "rgba(255,255,255,0.55)" }}
                >
                  {lang === "ro" ? sec.ro : sec.en}
                </span>
              </motion.button>
            ))}

            {/* Lang toggle inside mobile menu */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-[11px] text-white/25 uppercase tracking-widest">Limbă</span>
              <button
                onClick={() => { toggle(); setMenuOpen(false); }}
                className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all cursor-pointer"
              >
                <span className="text-[#00E5FF]">{lang === "ro" ? "RO" : "EN"}</span>
                <span className="w-px h-3 bg-white/20" />
                <span>{lang === "ro" ? "EN" : "RO"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
