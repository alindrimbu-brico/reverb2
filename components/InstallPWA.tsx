"use client";

import { useEffect, useState } from "react";

interface InstallPWAProps {
  className?: string;
  mode?: "studio" | "site";
  compact?: boolean;
}

export default function InstallPWA({
  className = "",
  mode = "studio",
  compact = false,
}: InstallPWAProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isIos, setIsIos] = useState(false);

  const storageKey =
    mode === "site" ? "reverb_pwa_installed_site_v2" : "reverb_pwa_installed_studio_v2";

  useEffect(() => {
    // 1. Dacă rulează deja ca aplicație instalată (standalone) sau a fost deja instalată one-time
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true ||
      localStorage.getItem(storageKey) === "1"
    ) {
      setIsInstalled(true);
    }

    // 2. Detectează iOS / iPadOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIos(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      localStorage.setItem(storageKey, "1");
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [storageKey]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        localStorage.setItem(storageKey, "1");
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      setShowIosGuide(true);
    } else {
      // Dacă browserul a instalat deja sau cere confirmare din bara de adresă
      setShowIosGuide(true);
    }
  };

  const confirmManualInstall = () => {
    localStorage.setItem(storageKey, "1");
    setIsInstalled(true);
    setShowIosGuide(false);
  };

  if (isInstalled) {
    // Pe bara principală a site-ului (compact), butonul one-time dispare complet după instalare ca să lase meniul curat
    if (compact) {
      return null;
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        ✓ {mode === "site" ? "Aplicația Reverb.ro Instalată" : "Panou Studio Instalat"}
      </span>
    );
  }

  const label =
    mode === "site"
      ? compact
        ? "📲 Aplicație"
        : "📲 Instalează Aplicația Reverb.ro"
      : "📲 Instalează Panoul Studio";

  const btnStyle =
    mode === "site"
      ? compact
        ? "inline-flex items-center gap-1.5 rounded-full bg-cyan-400 text-slate-950 px-3 py-1.5 text-[10px] font-mono font-extrabold uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_16px_rgba(0,229,255,0.35)] hover:scale-105 active:scale-95 shrink-0"
        : "inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 text-slate-950 px-4 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,229,255,0.35)]"
      : "inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-rose-400 transition-all shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:scale-105 active:scale-95";

  return (
    <>
      <button
        onClick={handleInstallClick}
        className={`${btnStyle} ${className}`}
        title={
          mode === "site"
            ? "Instalează aplicația Reverb.ro pe ecranul principal (One-Time)"
            : "Instalează Panoul Reverb Studio AI cu iconița mov-aurie dedicată"
        }
      >
        <span>{label}</span>
      </button>

      {showIosGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm pointer-events-auto">
          <div className="max-w-sm rounded-3xl border border-white/20 bg-neutral-900 p-6 text-center text-white font-mono text-xs shadow-2xl">
            <img
              src={mode === "site" ? "/icon-192.png?v=2" : "/icon-studio-192.png?v=2"}
              alt="App Icon"
              className="w-16 h-16 mx-auto mb-3 rounded-2xl shadow-lg border border-white/15"
            />
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-cyan-400">
              {mode === "site"
                ? "Instalează Aplicația Reverb.ro"
                : "Instalează Panoul Reverb Studio"}
            </h3>
            <p className="text-neutral-300 mb-4 leading-relaxed font-sans text-xs">
              {isIos
                ? "Pe iPhone sau iPad, adaugă aplicația pe ecran în 2 secunde:"
                : "Din bara de sus a browserului sau din meniul cu 3 puncte (⋮):"}
            </p>
            <ol className="text-left space-y-2 mb-6 text-neutral-200 bg-black/50 p-4 rounded-xl border border-white/10 text-[11px] font-sans">
              {isIos ? (
                <>
                  <li>
                    1. Apasă butonul de <strong>Partajare (Share)</strong> din bară.
                  </li>
                  <li>
                    2. Alege <strong>„Adaugă pe ecranul principal”</strong> (Add to Home Screen).
                  </li>
                  <li>
                    3. Apasă <strong>„Adaugă”</strong> — va apărea cu iconița ei proprie!
                  </li>
                </>
              ) : (
                <>
                  <li>
                    1. Apasă pe iconița de instalare <strong>[⊕ Instalează]</strong> din dreapta barei de adresă (sau meniul ⋮ → <strong>„Instalează aplicația”</strong>).
                  </li>
                  <li>
                    2. Confirmă clic pe <strong>„Instalează”</strong>.
                  </li>
                </>
              )}
            </ol>
            <div className="flex gap-2">
              <button
                onClick={() => setShowIosGuide(false)}
                className="flex-1 rounded-full border border-white/20 text-neutral-300 py-2.5 font-bold uppercase tracking-wider text-[10px]"
              >
                Închide
              </button>
              <button
                onClick={confirmManualInstall}
                className="flex-1 rounded-full bg-cyan-400 text-slate-950 py-2.5 font-bold uppercase tracking-wider text-[10px]"
              >
                ✓ Am instalat-o
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
