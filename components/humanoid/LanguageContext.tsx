"use client";

// Limba raportului (RO / EN), comună paginii și celor patru capitole: stă în cadrul segmentului
// (HumanoidFrame) și se ține minte între pagini și între vizite.

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useStored } from "@/lib/useStored";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ro",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useStored("humanoid-lang", "ro");
  const lang: Lang = stored === "en" ? "en" : "ro";
  const setLang = useCallback((l: Lang) => setStored(l), [setStored]);
  const toggle = useCallback(() => setStored(lang === "ro" ? "en" : "ro"), [lang, setStored]);
  return <LanguageContext.Provider value={{ lang, setLang, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
