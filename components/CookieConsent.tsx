"use client";

// Nota despre cookie-uri, la prima vizită. NU e o cerere de acord: site-ul nu pune cookie-uri de publicitate și nu are
// niciun program de măsurare (verificat 13 nov 2026: niciun Set-Cookie, niciun script de măsurare). Textul spune asta.
// Dacă adaugi vreodată măsurare (Vercel Analytics, Google, Meta…), textul devine fals: banda se reface atunci ca cerere
// de acord, cu ALTĂ cheie (`reverb_cookie_consent_v2`), fiindcă răspunsurile vechi au fost date pe altă descriere.
// `scripts/check-seo.mjs` pică dacă apare un pachet de măsurare în package.json.
// `aria-label="Cookie consent banner"` NU se schimbă: după el recunoaște motorul de traducere banda (lib/i18n/translator.ts).

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const KEY = "reverb_cookie_consent";

export default function CookieConsent() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  // Machetele din galerie și Studio sunt pagini separate (ca la subsol): nota nu apare acolo.
  const hidden =
    (pathname.startsWith("/showcase/") && pathname !== "/showcase") ||
    (pathname.startsWith("/en/showcase/") && pathname !== "/en/showcase") ||
    pathname === "/studio" ||
    pathname.startsWith("/studio/");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let answered = false;
    try {
      answered = Boolean(localStorage.getItem(KEY));
    } catch {
      // Stocare blocată: nota apare, iar butonul o închide pentru vizita curentă.
    }
    if (answered) return;
    const timer = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ necessary: true, analytics: false, performance: false, date: new Date().toISOString() })
      );
    } catch {
      // fără stocare: rămâne închisă până la următoarea încărcare
    }
    setVisible(false);
  };

  if (!visible || hidden) return null;

  const t = {
    desc: isEn
      ? "We use no advertising cookies and we do not measure what you do on this site."
      : "Nu folosim cookie-uri de publicitate și nu măsurăm ce faci pe site.",
    ok: isEn ? "Got it" : "Am înțeles",
  };

  // O propoziție și butonul, pe un rând: doi cititori fără context au spus că nota mare le acoperea primul ecran
  // (13 nov 2026). Rândul de preț al primei pagini se termină la 475 px; nota trebuie să rămână sub el și la 360×740.
  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 md:right-8 z-50 max-w-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-6"
    >
      <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/15 dark:border-white/15 light:border-black/15 bg-[#090a0c]/95 dark:bg-[#090a0c]/95 light:bg-[#F6F7F8]/95 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-white dark:text-white light:text-neutral-900 font-sans">
        <p className="min-w-0 flex-1 text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed font-light">{t.desc}</p>
        <button
          onClick={close}
          className="mech-magnetic mech-btn shrink-0 whitespace-nowrap px-4 py-2.5 rounded-full bg-white dark:bg-white light:bg-neutral-900 text-black dark:text-black light:text-white font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-sm"
        >
          {t.ok}
        </button>
      </div>
    </aside>
  );
}
