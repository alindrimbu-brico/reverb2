"use client";

import React, { useState, useEffect } from "react";

export interface PreviewProject {
  name: string;
  category: string;
  tech: string;
  host?: string;
  desc: string;
  href: string;
  status?: string;
  badge?: string;
}

interface ProjectPreviewModalProps {
  project: PreviewProject | null;
  onClose: () => void;
  lang?: "ro" | "en";
}

export default function ProjectPreviewModal({
  project,
  onClose,
  lang = "ro",
}: ProjectPreviewModalProps) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const isEn = lang === "en";

  useEffect(() => {
    setIsLoading(true);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const deviceWidths = {
    desktop: "w-full",
    tablet: "w-[768px]",
    mobile: "w-[390px]",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      {/* Prominent Floating Top-Right Close Pill (Instant Visibility) */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 md:top-5 md:right-8 z-[60]">
        <button
          onClick={onClose}
          aria-label={isEn ? "Close preview window" : "Închide fereastra de previzualizare"}
          className="mech-magnetic mech-btn flex items-center gap-2 px-4 py-2 rounded-full bg-black/90 dark:bg-black/90 light:bg-white/95 border border-white/20 dark:border-white/20 light:border-black/20 text-white dark:text-white light:text-neutral-900 font-mono text-xs font-bold uppercase tracking-widest shadow-2xl backdrop-blur-md hover:bg-rose-600 hover:border-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all"
        >
          <span>{isEn ? "Close Window" : "Închide Fereastra"}</span>
          <span className="text-sm font-bold">✕</span>
        </button>
      </div>

      <div
        className="relative w-full max-w-6xl h-[92vh] max-h-[920px] flex flex-col rounded-2xl border border-white/20 dark:border-white/20 light:border-black/20 bg-[#090a0d] dark:bg-[#090a0d] light:bg-[#FAF8F5] shadow-2xl overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Window Bar (Brutalist OS Chrome) */}
        <div className="h-14 px-4 sm:px-6 border-b border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between gap-3 bg-[#0c0d11] dark:bg-[#0c0d11] light:bg-[#F3EFEA] shrink-0 font-mono text-xs">
          
          {/* Left: Window Dots & Project Title */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                aria-label="Close window"
                className="h-3.5 w-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors flex items-center justify-center text-[8px] text-white font-bold group cursor-pointer"
                title={isEn ? "Close Window" : "Închide Fereastra"}
              >
                <span>✕</span>
              </button>
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-white/10 dark:border-white/10 light:border-black/10">
              <span className="font-bold text-white dark:text-white light:text-neutral-900 tracking-tight">
                {project.name}
              </span>
              <span className="text-[10px] text-neutral-400 font-normal">
                [{project.category}]
              </span>
            </div>
          </div>

          {/* Center: Interactive Device Viewport Switcher & Simulated URL Bar */}
          <div className="flex-1 max-w-xl mx-2 flex items-center gap-2">
            {/* Simulated Address Bar */}
            <div className="flex-1 hidden md:flex items-center justify-between px-3 py-1.5 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 bg-black/40 dark:bg-black/40 light:bg-white/60 text-[10px] text-neutral-400">
              <div className="flex items-center gap-2 truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="truncate">{project.href}</span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-emerald-400 shrink-0 font-bold">
                LIVE
              </span>
            </div>

            {/* Viewport Width Switchers */}
            <div className="hidden sm:flex bg-white/5 dark:bg-white/5 light:bg-black/5 p-1 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 shrink-0">
              <button
                onClick={() => setDevice("desktop")}
                title={isEn ? "Desktop View (100%)" : "Vedere Desktop (100%)"}
                className={`mech-magnetic px-2.5 py-1 text-[9px] font-bold uppercase rounded-full transition-all ${
                  device === "desktop"
                    ? "bg-white text-black shadow-sm font-extrabold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                1440px
              </button>
              <button
                onClick={() => setDevice("tablet")}
                title={isEn ? "Tablet View (768px)" : "Vedere Tabletă (768px)"}
                className={`mech-magnetic px-2.5 py-1 text-[9px] font-bold uppercase rounded-full transition-all ${
                  device === "tablet"
                    ? "bg-white text-black shadow-sm font-extrabold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                768px
              </button>
              <button
                onClick={() => setDevice("mobile")}
                title={isEn ? "Mobile View (390px)" : "Vedere Mobil (390px)"}
                className={`mech-magnetic px-2.5 py-1 text-[9px] font-bold uppercase rounded-full transition-all ${
                  device === "mobile"
                    ? "bg-white text-black shadow-sm font-extrabold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                390px
              </button>
            </div>
          </div>

          {/* Right: Direct External Link & Explicit Close Button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mech-magnetic mech-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white light:bg-neutral-900 text-black dark:text-black light:text-white font-bold text-[10px] uppercase tracking-wider hover:opacity-90 transition-all shadow-sm"
            >
              <span>{isEn ? "Open Site" : "Deschide Site"}</span>
              <span>↗</span>
            </a>

            <button
              onClick={onClose}
              aria-label={isEn ? "Close preview" : "Închide previzualizarea"}
              className="mech-magnetic mech-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/20 hover:bg-rose-500 border border-rose-500/40 hover:border-rose-500 text-rose-300 hover:text-white dark:text-rose-300 dark:hover:text-white light:text-rose-700 light:hover:text-white font-bold text-[10px] uppercase tracking-wider transition-all"
            >
              <span>{isEn ? "Close" : "Închide"}</span>
              <span className="text-xs">✕</span>
            </button>
          </div>
        </div>

        {/* Viewport Canvas Stage */}
        <div className="flex-1 relative bg-[#050608] dark:bg-[#050608] light:bg-[#EBE7E1] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          
          {/* Background Grid Pattern inside Stage */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Device Frame */}
          <div
            className={`h-full max-h-full transition-all duration-300 relative flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/15 dark:border-white/15 light:border-black/15 bg-white ${deviceWidths[device]}`}
          >
            {/* Loading Scanner Bar */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090a0d] text-white font-mono text-xs">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="tracking-[0.2em] uppercase">
                    {isEn ? "Connecting live viewport..." : "Se conectează la sistemul live..."}
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500">
                  {project.name} • {project.tech}
                </div>
              </div>
            )}

            {/* Live Interactive Iframe */}
            <iframe
              src={project.href}
              title={project.name}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Technical Spec Bar */}
        <div className="h-11 px-4 sm:px-6 border-t border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between bg-[#08090b] dark:bg-[#08090b] light:bg-[#F3EFEA] font-mono text-[10px] text-neutral-400 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 truncate">
            <span className="text-white dark:text-white light:text-neutral-900 font-semibold truncate">
              SYS: {project.name}
            </span>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <span className="hidden sm:inline truncate">{project.tech}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-emerald-400 font-bold uppercase tracking-wider hidden sm:inline">
              {project.status || "PRODUCȚIE LIVE"}
            </span>

            {/* Prominent Footer Close Button */}
            <button
              onClick={onClose}
              className="mech-magnetic mech-btn flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-rose-500 hover:text-white dark:bg-white/10 dark:hover:bg-rose-500 dark:hover:text-white light:bg-black/10 light:hover:bg-rose-600 light:hover:text-white text-white dark:text-white light:text-neutral-900 font-bold uppercase tracking-wider transition-all"
            >
              <span>{isEn ? "Close Preview" : "Închide Previzualizarea"}</span>
              <span>✕</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
