"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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

// Textele ferestrei, după limbă. Mărimile: nimic sub 13 px (treapta 1, 25 nov 2026). Numele proiectului e nume propriu:
// stă în data-no-translate, iar unde poate fi tăiat are title cu numele întreg.
const TXT = {
  ro: {
    closeWindowAria: "Închide fereastra de previzualizare",
    closeWindow: "Închide fereastra",
    closeDot: "Închide fereastra",
    viewDesktop: "Vedere pe calculator (100%)",
    viewTablet: "Vedere pe tabletă (768 px)",
    viewMobile: "Vedere pe telefon (390 px)",
    openSite: "Deschide site-ul",
    // un singur șir, fără numele lucrării: așa are traducere în toate limbile (numele e scris lângă buton)
    openSiteAria: "Deschide site-ul într-o filă nouă",
    close: "Închide",
    closeAria: "Închide previzualizarea",
    connecting: "Se încarcă site-ul…",
    closePreview: "Închide previzualizarea",
    managed: "În administrare",
  },
  en: {
    closeWindowAria: "Close preview window",
    closeWindow: "Close window",
    closeDot: "Close window",
    viewDesktop: "Desktop view (100%)",
    viewTablet: "Tablet view (768 px)",
    viewMobile: "Phone view (390 px)",
    openSite: "Open the site",
    openSiteAria: "Open the site in a new tab",
    close: "Close",
    closeAria: "Close preview",
    connecting: "Loading the site…",
    closePreview: "Close preview",
    managed: "Managed",
  },
} as const;

export default function ProjectPreviewModal({
  project,
  onClose,
  lang = "ro",
}: ProjectPreviewModalProps) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const t = TXT[lang === "en" ? "en" : "ro"];

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

  const views = [
    { id: "desktop" as const, label: "1440px", title: t.viewDesktop },
    { id: "tablet" as const, label: "768px", title: t.viewTablet },
    { id: "mobile" as const, label: "390px", title: t.viewMobile },
  ];

  // Fereastra se pune direct în <body>: în pagină stătea sub bara fixă a site-ului (z-50, iar secțiunile părinte au
  // contextul lor de stivuire), care îi acoperea bara de sus și jumătate din butonul „Închide fereastra”.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-[90] flex items-center justify-center p-2 pt-16 sm:p-4 sm:pt-16 md:p-6 bg-black/85 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      {/* Butonul plutitor „Închide fereastra”, deasupra ferestrei, doar sub 768 px (acolo bara ferestrei nu are loc de „Închide”).
          De la 768 px acoperea butonul „Închide” din bară, deci acolo închid butoanele din bară și cel de jos. */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 z-[60] md:hidden">
        <button
          onClick={onClose}
          aria-label={t.closeWindowAria}
          className="mech-magnetic mech-btn flex items-center gap-2 px-4 py-2 rounded-full bg-black/90 border border-white/20 text-white font-mono text-[13px] font-bold uppercase tracking-widest shadow-2xl backdrop-blur-md hover:bg-rose-600 hover:border-rose-600 hover:text-white transition-all"
        >
          <span>{t.closeWindow}</span>
          <span aria-hidden="true" className="text-sm font-bold">✕</span>
        </button>
      </div>

      <div
        className="relative w-full max-w-6xl h-[calc(100dvh-5rem)] md:h-[92vh] max-h-[920px] flex flex-col rounded-2xl border border-white/20 bg-[#090a0d] shadow-2xl overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Window Bar (Brutalist OS Chrome) */}
        <div className="h-14 px-4 sm:px-6 border-b border-white/10 flex items-center justify-between gap-3 bg-[#0c0d11] shrink-0 font-mono text-[13px]">

          {/* Left: Window Dots & Project Title */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex shrink-0 items-center gap-1.5">
              {/* Punctul roșu închide fereastra; fără literă în el (ar fi fost sub 13 px), numele îl dă aria-label. */}
              <button
                onClick={onClose}
                aria-label={t.closeDot}
                title={t.closeDot}
                className="h-3.5 w-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors cursor-pointer"
              />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="hidden min-w-0 sm:flex items-center gap-2 pl-2 border-l border-white/10">
              <span
                title={project.name}
                data-no-translate
                className="max-w-[16rem] truncate font-bold text-white tracking-tight"
              >
                {project.name}
              </span>
              <span className="hidden xl:inline truncate text-[13px] text-neutral-400 font-normal">
                [{project.category}]
              </span>
            </div>
          </div>

          {/* Center: Interactive Device Viewport Switcher & Simulated URL Bar */}
          <div className="flex-1 min-w-0 max-w-xl mx-2 flex items-center justify-end gap-2">
            {/* Simulated Address Bar. Fundalurile din bară sunt scrise ca valori (#000000/40, #ffffff/5): regulile globale
                `html.light .bg-black/40` și `.bg-white/5` le-ar albi, iar fereastra rămâne neagră și pe tema deschisă. */}
            <div className="flex-1 min-w-0 hidden lg:flex items-center justify-between gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#000000]/40 text-[13px] text-neutral-400">
              {/* Fără eticheta „LIVE” (regula din AI_SYNC.md, 13 nov): adresa și punctul verde spun deja că e site-ul adevărat. */}
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
                <span title={project.href} data-no-translate className="truncate">{project.href}</span>
              </div>
            </div>

            {/* Viewport Width Switchers */}
            <div data-no-lift style={{ "--pill-r": "10px" } as React.CSSProperties} className="hidden sm:flex bg-[#ffffff]/5 px-1 py-1 rounded-full border border-white/10 shrink-0">
              {views.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setDevice(v.id)}
                  title={v.title}
                  aria-label={v.title}
                  aria-pressed={device === v.id}
                  className={`mech-magnetic px-2.5 py-1 text-[13px] font-bold uppercase rounded-full transition-all ${
                    device === v.id
                      ? "bg-white text-black shadow-sm font-extrabold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Direct External Link & Explicit Close Button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.openSiteAria}
              className="mech-magnetic mech-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black font-bold text-[13px] uppercase tracking-wider whitespace-nowrap hover:opacity-90 transition-all shadow-sm"
            >
              <span>{t.openSite}</span>
              <span aria-hidden="true">↗</span>
            </a>

            <button
              onClick={onClose}
              aria-label={t.closeAria}
              className="mech-magnetic mech-btn hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/20 hover:bg-rose-500 border border-rose-500/40 hover:border-rose-500 text-rose-300 hover:text-white font-bold text-[13px] uppercase tracking-wider whitespace-nowrap transition-all"
            >
              <span>{t.close}</span>
              <span aria-hidden="true" className="text-[13px]">✕</span>
            </button>
          </div>
        </div>

        {/* Viewport Canvas Stage */}
        <div className="flex-1 relative bg-[#050608] flex items-center justify-center p-2 sm:p-4 overflow-hidden">

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
            className={`h-full max-h-full max-w-full transition-all duration-300 relative flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-white ${deviceWidths[device]}`}
          >
            {/* Loading Scanner Bar */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-center bg-[#090a0d] text-white font-mono text-[13px]">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-ping" />
                  <span className="tracking-[0.14em] uppercase">{t.connecting}</span>
                </div>
                <div className="text-[13px] text-neutral-500">
                  <span data-no-translate>{project.name}</span> • {project.tech}
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
        <div className="h-11 px-4 sm:px-6 border-t border-white/10 flex items-center justify-between gap-3 bg-[#08090b] font-mono text-[13px] text-neutral-400 shrink-0">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span title={project.name} data-no-translate className="min-w-0 text-white font-semibold truncate">
              {project.name}
            </span>
            <span className="hidden lg:inline text-neutral-500">•</span>
            <span className="hidden lg:inline truncate">{project.tech}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Culoarea scrisă direct: regula globală `html.light .text-emerald-400` o închide, iar fereastra rămâne neagră și pe tema deschisă. */}
            <span className="text-[#34d399] font-bold uppercase tracking-wider hidden sm:inline whitespace-nowrap">
              {project.status || t.managed}
            </span>

            {/* Prominent Footer Close Button */}
            <button
              onClick={onClose}
              aria-label={t.closeAria}
              className="mech-magnetic mech-btn flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-rose-500 text-white font-bold uppercase tracking-wider whitespace-nowrap transition-all"
            >
              <span>{t.closePreview}</span>
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
