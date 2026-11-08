"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CookieConsent() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [perfEnabled, setPerfEnabled] = useState(true);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem("reverb_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "reverb_cookie_consent",
      JSON.stringify({ necessary: true, analytics: true, performance: true, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(
      "reverb_cookie_consent",
      JSON.stringify({ necessary: true, analytics: false, performance: false, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "reverb_cookie_consent",
      JSON.stringify({ necessary: true, analytics: analyticsEnabled, performance: perfEnabled, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  const t = {
    badge: isEn ? "[ PRIVACY & TELEMETRY PROTOCOL ]" : "[ PROTOCOL DE CONFIDENȚIALITATE ]",
    title: isEn ? "Minimalist Cookies & Direct Telemetry" : "Cookie-uri Tehnice & Telemetrie Directă",
    desc: isEn
      ? "We use strictly necessary cookies to ensure edge security, system uptime, and anonymous performance analytics. Zero aggressive marketing trackers."
      : "Utilizăm module cookie strict necesare pentru funcționarea platformei de mare viteză și telemetrie analitică anonimă. Fără trackere de publicitate intruzivă.",
    acceptAll: isEn ? "Accept All" : "Acceptă Toate",
    essential: isEn ? "Essential Only" : "Doar Necesare",
    preferences: isEn ? "Preferences" : "Preferințe",
    savePrefs: isEn ? "Save Preferences" : "Salvează Preferințele",
    learnMore: isEn ? "Legal & Privacy" : "Legal & Confidențialitate",
    types: {
      necessary: {
        title: isEn ? "01 / Essential Engine" : "01 / Motor Esențial",
        desc: isEn ? "Required for navigation, theme toggle, and security." : "Necesar pentru navigare, comutare temă și securitate.",
        status: isEn ? "Always Active" : "Activ Mereu",
      },
      analytics: {
        title: isEn ? "02 / Anonymous Telemetry" : "02 / Telemetrie Anonimă",
        desc: isEn ? "Sub-second edge latency and performance measurement." : "Măsurarea latenței și performanței de încărcare sub 1.2s.",
      },
      performance: {
        title: isEn ? "03 / UI Experience & Sound" : "03 / Experiență UI & Audio",
        desc: isEn ? "Procedural Web Audio synthesis and device presets." : "Sinteză audio Web Audio procedurală și presetări de dispozitiv.",
      },
    },
  };

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 md:right-8 z-50 max-w-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-6"
    >
      <div className="relative rounded-2xl border border-white/15 dark:border-white/15 light:border-black/15 bg-[#090a0c]/95 dark:bg-[#090a0c]/95 light:bg-[#FAF8F5]/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-white dark:text-white light:text-neutral-900 font-sans">
        
        {/* CAD Crosshairs on corners */}
        <span className="absolute -top-1.5 -left-1.5 text-neutral-500 font-mono text-xs select-none">+</span>
        <span className="absolute -top-1.5 -right-1.5 text-neutral-500 font-mono text-xs select-none">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 text-neutral-500 font-mono text-xs select-none">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 text-neutral-500 font-mono text-xs select-none">+</span>

        {/* Header / Protocol badge */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <Link
            href={isEn ? "/en/legal" : "/legal"}
            className="text-[10px] font-mono text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-black underline underline-offset-4 transition-colors"
          >
            {t.learnMore} ↗
          </Link>
        </div>

        {/* Content */}
        <h4 className="text-base sm:text-lg font-medium tracking-tight mb-2">
          {t.title}
        </h4>
        <p className="text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed font-light mb-5">
          {t.desc}
        </p>

        {/* Preferences Accordion Drawer */}
        {showPreferences && (
          <div className="mb-5 pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10 space-y-3 font-mono text-xs">
            
            {/* 1. Necessary */}
            <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] border border-white/5 dark:border-white/5 light:border-black/5">
              <div>
                <div className="font-bold text-white dark:text-white light:text-black">
                  {t.types.necessary.title}
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5 font-light">
                  {t.types.necessary.desc}
                </div>
              </div>
              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-emerald-400 shrink-0 font-bold">
                {t.types.necessary.status}
              </span>
            </div>

            {/* 2. Analytics */}
            <label className="flex items-start justify-between gap-4 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] border border-white/5 dark:border-white/5 light:border-black/5 cursor-pointer">
              <div>
                <div className="font-bold text-white dark:text-white light:text-black">
                  {t.types.analytics.title}
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5 font-light">
                  {t.types.analytics.desc}
                </div>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-neutral-700 bg-neutral-900 text-emerald-500 focus:ring-0 cursor-pointer"
              />
            </label>

            {/* 3. Performance */}
            <label className="flex items-start justify-between gap-4 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] border border-white/5 dark:border-white/5 light:border-black/5 cursor-pointer">
              <div>
                <div className="font-bold text-white dark:text-white light:text-black">
                  {t.types.performance.title}
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5 font-light">
                  {t.types.performance.desc}
                </div>
              </div>
              <input
                type="checkbox"
                checked={perfEnabled}
                onChange={(e) => setPerfEnabled(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-neutral-700 bg-neutral-900 text-emerald-500 focus:ring-0 cursor-pointer"
              />
            </label>
          </div>
        )}

        {/* Buttons Row with Mechanical Magnetic Feedbacks */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2">
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="mech-magnetic px-3 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
          >
            {showPreferences ? (isEn ? "Hide Details ↑" : "Ascunde Detalii ↑") : t.preferences}
          </button>

          <div className="flex items-center gap-2">
            {showPreferences ? (
              <button
                onClick={handleSavePreferences}
                className="mech-magnetic mech-btn px-4 py-2 rounded-full bg-emerald-400 text-black font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-emerald-300 transition-all shadow-sm"
              >
                {t.savePrefs}
              </button>
            ) : (
              <>
                <button
                  onClick={handleAcceptEssential}
                  className="mech-magnetic mech-btn px-3.5 py-2 rounded-full border border-white/20 dark:border-white/20 light:border-black/20 text-neutral-300 dark:text-neutral-300 light:text-neutral-800 font-mono text-[10px] uppercase tracking-wider hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all"
                >
                  {t.essential}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="mech-magnetic mech-btn px-4 py-2 rounded-full bg-white dark:bg-white light:bg-neutral-900 text-black dark:text-black light:text-white font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-sm"
                >
                  {t.acceptAll}
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </aside>
  );
}
