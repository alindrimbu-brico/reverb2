"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero", labelEn: "Hero" },
  { id: "economic-impact", label: "Impact", labelEn: "Impact" },
  { id: "market-leaders", label: "Lideri", labelEn: "Leaders" },
  { id: "brain-behind", label: "Creier", labelEn: "Brain" },
  { id: "survival-guide", label: "Ghid", labelEn: "Guide" },
  { id: "certifications", label: "Cert.", labelEn: "Certs" },
  { id: "footer-cta", label: "Raport", labelEn: "Report" },
];

export default function HumanoidScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [lang, setLang] = useState<"ro" | "en">("ro");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Read lang from localStorage
    const stored = localStorage.getItem("humanoid-lang");
    if (stored === "en" || stored === "ro") setLang(stored);

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top progress bar — 3px, track visible, overrides global ScrollProgress */}
      <div
        className="fixed left-0 right-0 z-[200] pointer-events-none"
        style={{ top: 0, height: "3px", background: "rgba(255,255,255,0.08)" }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #00E5FF, #00b8cc 50%, #FFE600)",
            boxShadow: "0 0 10px rgba(0,229,255,0.7)",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      {/* Right side section nav — hidden on mobile */}
      <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 items-end">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              title={lang === "ro" ? sec.label : sec.labelEn}
              className="group flex items-center gap-2 cursor-pointer"
            >
              <span
                className="text-[9px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                style={{ color: isActive ? "#00E5FF" : "rgba(255,255,255,0.4)" }}
              >
                {lang === "ro" ? sec.label : sec.labelEn}
              </span>
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? "8px" : "4px",
                  height: isActive ? "8px" : "4px",
                  background: isActive ? "#00E5FF" : "rgba(255,255,255,0.25)",
                  boxShadow: isActive ? "0 0 8px rgba(0,229,255,0.6)" : "none",
                }}
              />
            </button>
          );
        })}
        <div className="mt-2 text-[8px] font-mono text-white/20 text-right tabular-nums">
          {Math.round(progress)}%
        </div>
      </div>
    </>
  );
}
