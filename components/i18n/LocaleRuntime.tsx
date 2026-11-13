"use client";

// Pornește selectorul de limbă pe paginile cu bara Reverb și îi spune motorului, la fiecare schimbare de adresă, unde are
// voie să lucreze (lib/i18n/scope.ts). Montat din components/Header.tsx; pe machete și în Studio nu există, deci acolo
// motorul e oprit (la demontare pune textele la loc).

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { bootstrap, resync, setScope } from "@/lib/i18n/store";
import { startTranslator } from "@/lib/i18n/translator";
import { scopeFor } from "@/lib/i18n/scope";

// Zona se schimbă înainte ca browserul să deseneze pagina nouă: altfel o pagină englezească ar apărea o clipă tradusă.
const useBeforePaint = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function LocaleRuntime() {
  const pathname = usePathname() || "/";

  useBeforePaint(() => {
    setScope(scopeFor(pathname));
    bootstrap();
    startTranslator();
  }, [pathname]);

  useEffect(() => {
    // „Înapoi” din memoria browserului: pagina e cea desenată atunci, dar alegerea salvată poate fi alta
    const back = (e: PageTransitionEvent) => {
      if (e.persisted) resync();
    };
    window.addEventListener("pageshow", back);
    return () => {
      window.removeEventListener("pageshow", back);
      setScope("off");
    };
  }, []);

  return null;
}
