"use client";

import { useEffect, useState } from "react";

export default function InstallPWA({ className = "" }: { className?: string }) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // Verifică dacă este deja instalat ca PWA (standalone)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Detectează iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Android / Chrome / Desktop PWA 1-click install prompt
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      // Ghid simplu pentru iOS Safari
      setShowIosGuide(true);
    } else {
      // Fallback
      alert("Pentru a instala pe telefon: deschide meniul browserului și alege 'Instalează aplicația' sau 'Adaugă pe ecranul principal'.");
    }
  };

  if (isInstalled) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        ✓ Aplicație Instalată
      </span>
    );
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        className={`inline-flex items-center gap-2 rounded-full bg-emerald-400 text-black px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:scale-105 active:scale-95 ${className}`}
        title="Instalează Panoul pe telefon sau tabletă dintr-un singur click"
      >
        <span>📲</span>
        <span>Instalează Panoul</span>
      </button>

      {/* Ghid Popup pentru iOS */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="max-w-sm rounded-3xl border border-white/20 bg-neutral-900 p-6 text-center text-white font-mono text-xs shadow-2xl">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-emerald-400">
              Instalare pe iPhone / iPad
            </h3>
            <p className="text-neutral-300 mb-4 leading-relaxed font-sans text-xs">
              Pe dispozitivele Apple, sistemul iOS cere o simplă confirmare:
            </p>
            <ol className="text-left space-y-2 mb-6 text-neutral-300 bg-black/40 p-4 rounded-xl border border-white/10 text-[11px]">
              <li>1. Apasă butonul de <strong>Partajare (Share)</strong> [⎋] de jos.</li>
              <li>2. Derulează puțin și alege <strong>„Adaugă pe ecranul principal”</strong> (Add to Home Screen).</li>
              <li>3. Apasă <strong>„Adaugă”</strong> în dreapta sus. Gata!</li>
            </ol>
            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full rounded-full bg-white text-black py-2.5 font-bold uppercase tracking-wider"
            >
              Am înțeles
            </button>
          </div>
        </div>
      )}
    </>
  );
}
