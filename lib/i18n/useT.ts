"use client";

// Legătura dintre React și starea selectorului de limbă (lib/i18n/store.ts).
// Serverul și hidratarea văd mereu româna; după pornire, React trece singur pe limba aleasă.

import { useSyncExternalStore } from "react";
import { getState, getVersion, isActive, linesAllowed, lookup, norm, noteMiss, subscribe, translatable, type I18nState } from "./store";

const serverVersion = () => 0;

/** Starea selectorului (limbă, stare, zonă, țară). Pe server și la hidratare: româna, oprit. */
export function useI18n(): I18nState {
  useSyncExternalStore(subscribe, getVersion, serverVersion);
  return getState();
}

/** Un text românesc scris în React, în limba afișată. Folosit de panoul de limbi și de rândul de sub bară (zone netraduse de motor). */
export function useTr(): (source: string) => string {
  useSyncExternalStore(subscribe, getVersion, serverVersion);
  return (source) => (getState().status === "ready" ? lookup(norm(source)) ?? source : source);
}

/**
 * Textul unui titlu <Linie> în limba afișată și dacă are voie să își deseneze liniuțele.
 * Titlurile se traduc aici, nu în motorul de DOM: desenul literelor se calculează din textul pe care îl știe React.
 */
export function useLineText(source: string): { text: string; lines: boolean } {
  useSyncExternalStore(subscribe, getVersion, serverVersion);
  if (!isActive() || getState().scope !== "full") return { text: source, lines: true };
  const key = norm(source);
  const out = translatable(key) ? lookup(key) : null;
  if (out === null && translatable(key)) noteMiss(key);
  return { text: out ?? source, lines: linesAllowed() };
}
