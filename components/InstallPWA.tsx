"use client";

import { useEffect, useState } from "react";

interface InstallPWAProps {
  className?: string;
  mode?: "studio" | "site";
  compact?: boolean;
}

declare global {
  interface Window {
    __reverbDeferredPrompt?: any;
  }
}

export default function InstallPWA({
  className = "",
  mode = "studio",
  compact = false,
}: InstallPWAProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrepModal, setShowPrepModal] = useState(false);
  const [prepProgress, setPrepProgress] = useState(10);
  const [prepTimedOut, setPrepTimedOut] = useState(false);
  const [isIos, setIsIos] = useState(false);

  const storageKey =
    mode === "site"
      ? "reverb_pwa_installed_site_v3"
      : "reverb_pwa_installed_studio_v3";

  useEffect(() => {
    // Asigură că în <head> există doar manifestul corespunzător paginii curente (fără conflicte între / și /studio)
    const targetManifest = mode === "studio" ? "/studio-manifest.json" : "/site-manifest.json";
    const links = Array.from(document.querySelectorAll('link[rel="manifest"]')) as HTMLLinkElement[];
    if (links.length === 0) {
      const l = document.createElement("link");
      l.rel = "manifest";
      l.href = targetManifest;
      document.head.appendChild(l);
    } else {
      links[0].href = targetManifest;
      for (let i = 1; i < links.length; i++) {
        links[i].remove();
      }
    }

    // Reînregistrează Service Worker-ul potrivit
    if ("serviceWorker" in navigator) {
      const swUrl = mode === "studio" ? "/studio/sw.js" : "/sw.js";
      const swScope = mode === "studio" ? "/studio" : "/";
      navigator.serviceWorker.register(swUrl, { scope: swScope }).catch(() => {});
    }

    // Verifică dacă aplicația rulează deja în mod standalone sau e marcată instalată
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Dacă Chrome a trimis deja beforeinstallprompt înainte de hidratarea React, îl preluăm imediat.
    // „Instalat” nu se mai crede din localStorage (semnul rămânea după dezinstalare și ascundea butonul);
    // îl spune doar browserul, prin getInstalledRelatedApps (manifestul se declară pe sine în related_applications).
    if (window.__reverbDeferredPrompt) {
      setDeferredPrompt(window.__reverbDeferredPrompt);
      localStorage.removeItem(storageKey);
      setIsInstalled(false);
    } else {
      localStorage.removeItem(storageKey);
      const nav = navigator as any;
      if (typeof nav.getInstalledRelatedApps === "function") {
        nav
          .getInstalledRelatedApps()
          .then((apps: unknown[]) => {
            if (Array.isArray(apps) && apps.length > 0 && !window.__reverbDeferredPrompt) setIsInstalled(true);
          })
          .catch(() => {});
      }
    }

    // Detectează iOS / iPadOS (nu tabletele Android care au UA Linux)
    const ua = window.navigator.userAgent || "";
    const isIosDevice =
      /iPhone|iPad|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIos(isIosDevice);

    const syncPrompt = () => {
      if (window.__reverbDeferredPrompt) {
        setDeferredPrompt(window.__reverbDeferredPrompt);
        localStorage.removeItem(storageKey);
        setIsInstalled(false);
      }
    };

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      window.__reverbDeferredPrompt = e;
      setDeferredPrompt(e);
      localStorage.removeItem(storageKey);
      setIsInstalled(false);
    };

    const handleAppInstalled = () => {
      window.__reverbDeferredPrompt = null;
      localStorage.setItem(storageKey, "1");
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowPrepModal(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("reverb-pwa-ready", syncPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("reverb-pwa-installed", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("reverb-pwa-ready", syncPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("reverb-pwa-installed", handleAppInstalled);
    };
  }, [mode, storageKey]);

  // Cronometrul din fereastra de pregătire (exact ca la Raft Plin v1.3.4): așteaptă ca Chrome să activeze Service Worker-ul și să dea beforeinstallprompt
  useEffect(() => {
    if (!showPrepModal || isIos) return;

    setPrepProgress(12);
    setPrepTimedOut(false);
    const t0 = Date.now();
    const DURATION = 30000;

    const timer = setInterval(() => {
      const p = window.__reverbDeferredPrompt || deferredPrompt;
      if (p) {
        setDeferredPrompt(p);
        setPrepProgress(100);
        clearInterval(timer);
        return;
      }
      const elapsed = Date.now() - t0;
      const pct = Math.min(95, Math.round((elapsed / DURATION) * 100));
      setPrepProgress(pct);
      if (elapsed >= DURATION) {
        setPrepTimedOut(true);
        clearInterval(timer);
      }
    }, 250);

    return () => clearInterval(timer);
  }, [showPrepModal, isIos, deferredPrompt]);

  const triggerNativeInstall = async (promptObj: any) => {
    try {
      promptObj.prompt();
      const choiceResult = await promptObj.userChoice;
      if (choiceResult && choiceResult.outcome === "accepted") {
        localStorage.setItem(storageKey, "1");
        setIsInstalled(true);
        setShowPrepModal(false);
      }
    } catch {}
    window.__reverbDeferredPrompt = null;
    setDeferredPrompt(null);
  };

  const handleInstallClick = async () => {
    const promptNow = window.__reverbDeferredPrompt || deferredPrompt;
    if (promptNow) {
      await triggerNativeInstall(promptNow);
      return;
    }

    if (isIos) {
      setShowPrepModal(true);
      return;
    }

    // Pe Android/Desktop, prima atingere de pe pagină declanșează de multe ori evenimentul în ~300-1200ms:
    // așteptăm scurt în gestul atingerii și dacă vine, deschidem direct fereastra nativă Chrome!
    const t0 = Date.now();
    const checkQuick = () => {
      const p = window.__reverbDeferredPrompt;
      if (p) {
        setDeferredPrompt(p);
        triggerNativeInstall(p);
        return;
      }
      if (Date.now() - t0 < 1200) {
        setTimeout(checkQuick, 200);
      } else {
        setShowPrepModal(true);
      }
    };
    checkQuick();
  };

  if (isInstalled) {
    if (compact) {
      return null;
    }
    const numeApp = mode === "site" ? "Reverb.ro" : "Reverb Studio";
    return (
      <span
        className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-300 border border-white/15 px-3 py-1 rounded-full"
        title={`Aplicația e instalată pe acest dispozitiv. O găsești în lista tuturor aplicațiilor (glisează în sus pe ecranul principal) cu numele „${numeApp}”, sau din Chrome: ⋮ → „Deschide în aplicație”.`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
        Instalată · caut-o în aplicații ca „{numeApp}”
      </span>
    );
  }

  const label =
    mode === "site"
      ? compact
        ? "Aplicație"
        : "Instalează Aplicația Reverb.ro"
      : "Instalează Panoul Studio";

  const btnStyle =
    mode === "site"
      ? compact
        ? "inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shrink-0"
        : "inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all"
      : "inline-flex items-center gap-2 rounded-full border border-white/15 text-neutral-300 px-3.5 py-2 text-xs font-mono uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all";

  const readyNow = Boolean(
    (typeof window !== "undefined" && window.__reverbDeferredPrompt) || deferredPrompt
  );

  return (
    <>
      <button
        onClick={handleInstallClick}
        className={`${btnStyle} ${className}`}
        title={
          mode === "site"
            ? "Instalează aplicația Reverb.ro direct pe ecran"
            : "Instalează Panoul Reverb Studio AI direct pe ecran"
        }
      >
        <span>{label}</span>
      </button>

      {showPrepModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm pointer-events-auto">
          <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-neutral-900 p-6 text-center text-white font-mono text-xs shadow-2xl relative">
            <button
              onClick={() => setShowPrepModal(false)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center text-sm"
              aria-label="Închide"
            >
              ×
            </button>
            <img
              src={mode === "site" ? "/icon-192.png?v=3" : "/icon-studio-192.png?v=3"}
              alt="App Icon"
              className="w-16 h-16 mx-auto mb-3 rounded-2xl shadow-lg border border-white/15"
            />
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-neutral-400">
              {mode === "site"
                ? "Instalează Aplicația Reverb.ro"
                : "Instalează Panoul Reverb Studio"}
            </h3>

            {isIos ? (
              <>
                <p className="text-neutral-300 mb-4 leading-relaxed font-sans text-xs">
                  Pe iPhone sau iPad, adaugă aplicația pe ecran:
                </p>
                <ol className="text-left space-y-2 mb-6 text-neutral-200 bg-black/50 p-4 rounded-xl border border-white/10 text-[11px] font-sans">
                  <li>1. Apasă butonul <strong>Partajează (Share)</strong> din bară.</li>
                  <li>2. Alege <strong>„Adaugă pe ecranul principal”</strong>.</li>
                  <li>3. Apasă <strong>„Adaugă”</strong>.</li>
                </ol>
              </>
            ) : readyNow ? (
              <>
                <p className="text-neutral-300 mb-4 leading-relaxed font-sans text-xs font-semibold">
                  ✓ Instalarea automată este pregătită! Apasă butonul de mai jos și confirmă cu „Instalează”:
                </p>
                <button
                  onClick={() => triggerNativeInstall(window.__reverbDeferredPrompt || deferredPrompt)}
                  className="w-full rounded-full bg-white text-black py-3.5 px-5 font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-all mb-3"
                >
                  INSTALEAZĂ ACUM
                </button>
              </>
            ) : !prepTimedOut ? (
              <>
                <p className="text-neutral-300 mb-3 leading-relaxed font-sans text-xs">
                  Chrome pregătește pachetul aplicației (Service Worker). Durează câteva secunde — butonul se activează singur:
                </p>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-white transition-all duration-300 rounded-full"
                    style={{ width: `${prepProgress}%` }}
                  />
                </div>
                <button
                  disabled
                  className="w-full rounded-full bg-white/15 text-neutral-300 py-3 px-4 font-bold uppercase tracking-wider text-xs opacity-80 mb-3"
                >
                  Se pregătește instalarea ({prepProgress}%)…
                </button>
              </>
            ) : (
              <p className="text-neutral-300 mb-3 leading-relaxed font-sans text-xs">
                Chrome nu a oferit singur instalarea (după un „Anulează” mai vechi o blochează o vreme). Instalează din meniu: apasă ⋮ sus în dreapta → „Instalează aplicația” sau „Adaugă pe ecranul de pornire” → „Instalează”. Dacă în meniu vezi „Deschide în aplicație”, e deja instalată: apasă acolo.
              </p>
            )}

            <button
              onClick={() => setShowPrepModal(false)}
              className="w-full rounded-full border border-white/15 text-neutral-400 py-2 font-bold uppercase tracking-wider text-[10px] hover:text-white"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </>
  );
}
