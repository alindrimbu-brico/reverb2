"use client";

// O valoare mică ținută minte în localStorage (limba raportului, întrerupătorul mecanicii), citită fără setState
// într-un efect: serverul și hidratarea văd valoarea implicită, apoi React trece singur pe cea ținută minte.
// Dacă stocarea nu e disponibilă, valoarea trăiește doar cât pagina.

import { useCallback, useSyncExternalStore } from "react";

const EVENT = "reverb-stored";
const memory = new Map<string, string>();

function read(key: string, fallback: string): string {
  try {
    const v = localStorage.getItem(key);
    if (v !== null) return v;
  } catch {
    /* fără stocare */
  }
  return memory.get(key) ?? fallback;
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}

export function useStored(key: string, fallback: string): [string, (v: string) => void] {
  const value = useSyncExternalStore(
    subscribe,
    () => read(key, fallback),
    () => fallback,
  );
  const set = useCallback(
    (v: string) => {
      memory.set(key, v);
      try {
        localStorage.setItem(key, v);
      } catch {
        /* fără stocare */
      }
      window.dispatchEvent(new Event(EVENT));
    },
    [key],
  );
  return [value, set];
}
