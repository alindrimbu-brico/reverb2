"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Briefcase, Image, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

const SECTIONS = [
  { id: "economic-impact", ro: "Impact", en: "Impact" },
  { id: "market-leaders", ro: "Lideri", en: "Leaders" },
  { id: "brain-behind", ro: "Creier AI", en: "AI Brain" },
  { id: "survival-guide", ro: "Ghid", en: "Guide" },
  { id: "certifications", ro: "Certificări", en: "Certs" },
  { id: "footer-cta", ro: "Raport", en: "Report" },
];

const SITE_LINKS = [
  { href: "/", icon: Home, ro: "Acasă", en: "Home" },
  { href: "/despre", icon: Info, ro: "Despre", en: "About" },
  { href: "/servicii", icon: Briefcase, ro: "Servicii", en: "Services" },
  { href: "/showcase", icon: Image, ro: "Showcase", en: "Showcase" },
  { href: "/contact", icon: Phone, ro: "Contact", en: "Contact" },
];

export default function HumanoidNav() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true, once: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

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
      <nav
        className="fixed top-0 left-0 right-0 z-[250] flex items-center justify-between px-4 md:px-8 h-14 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,8,16,0.95)" : "rgba(8,8,16,0.82)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,229,255,0.12)"
            : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.6)" : "none",
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
          {/* reverb.ro link — desktop */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-white/25 hover:text-[#00E5FF]/70 transition-colors duration-200 mr-1"
          >
            ← reverb.ro
          </Link>

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

          {/* Hamburger — mobile: always visible, bright cyan */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu"
            className="md:hidden flex items-center gap-1.5 rounded-xl cursor-pointer transition-all duration-200"
            style={{
              padding: "7px 12px",
              background: menuOpen ? "rgba(0,229,255,0.20)" : "rgba(0,229,255,0.12)",
              border: "1px solid rgba(0,229,255,0.50)",
              color: "#00E5FF",
            }}
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
            <span className="text-[9px] font-bold uppercase tracking-widest">
              {menuOpen ? (lang === "ro" ? "Închide" : "Close") : "Menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-14 left-0 right-0 z-[249] md:hidden overflow-y-auto"
            style={{
              background: "rgba(6,6,14,0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(0,229,255,0.10)",
              maxHeight: "calc(100vh - 3.5rem)",
            }}
          >
            {/* Humanoid section links */}
            <div className="px-4 pt-3 pb-1">
              <div className="text-[9px] text-[#00E5FF]/40 uppercase tracking-[0.25em] font-bold mb-1 px-2">
                {lang === "ro" ? "Secțiuni" : "Sections"}
              </div>
              {SECTIONS.map((sec, i) => (
                <motion.button
                  key={sec.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => scrollTo(sec.id)}
                  className="w-full flex items-center gap-3 px-2 py-3.5 text-left cursor-pointer rounded-xl transition-colors duration-150"
                  style={{
                    background: active === sec.id ? "rgba(0,229,255,0.07)" : "transparent",
                  }}
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
                    style={{ color: active === sec.id ? "#00E5FF" : "rgba(255,255,255,0.55)" }}
                  >
                    {lang === "ro" ? sec.ro : sec.en}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-4 my-2 h-px bg-white/[0.06]" />

            {/* reverb.ro site links */}
            <div className="px-4 pb-2">
              <div className="text-[9px] text-white/25 uppercase tracking-[0.25em] font-bold mb-1 px-2">
                reverb.ro
              </div>
              {SITE_LINKS.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-3 rounded-xl transition-colors duration-150 hover:bg-white/[0.04]"
                    >
                      <Icon size={14} style={{ color: "rgba(255,255,255,0.25)" }} />
                      <span className="text-sm font-medium uppercase tracking-wider text-white/40 hover:text-white/70 transition-colors">
                        {lang === "ro" ? link.ro : link.en}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Lang + actions row */}
            <div className="border-t border-white/[0.06] mx-0">
              <div className="flex items-center justify-between px-6 py-4">
                <span className="text-[9px] text-white/25 uppercase tracking-widest">
                  {lang === "ro" ? "Limbă / Language" : "Language / Limbă"}
                </span>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
