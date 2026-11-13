// Starea selectorului de limbă, în browser: limba, dicționarul, zona în care motorul are voie să lucreze.
// React o citește prin lib/i18n/useT.ts; paginile o schimbă prin components/i18n/LocaleRuntime.tsx și LocaleSwitcher.tsx;
// DOM-ul îl rescrie lib/i18n/translator.ts. Regulile de detecție sunt și în scriptul din HTML (lib/i18n/inline.ts), care
// rulează înaintea React-ului: se schimbă împreună.

import { COUNTRY_LANG, STORAGE_KEY } from "./locales";
import { DICT_VERSION, LINES_OFF } from "./generated";
import type { Scope } from "./scope";

export type Status = "idle" | "loading" | "ready" | "failed";

export type I18nState = {
  /** Limba cerută: "ro", "en" sau codul unui dicționar. */
  locale: string;
  status: Status;
  scope: Scope;
  /** Țara detectată (două litere) sau "". */
  country: string;
  /** true = limba vine din alegerea omului (panou), nu din detecție. */
  chosen: boolean;
  /** Adresa pe care omul a ales o limbă ce nu se poate aplica acolo (pagină englezească fără pereche tradusă). */
  noticePath: string;
};

type Boot = { locale: string | null; auto: boolean; cc: string; dict?: Promise<Record<string, string> | null>; timer?: number };
declare global {
  interface Window {
    __rvI18n?: Boot;
    __rvI18nMisses?: Set<string>;
    __rvI18nWrites?: number;
  }
}

const NUM = /\d+(?:[.,]\d+)*/g;

let state: I18nState = { locale: "ro", status: "idle", scope: "off", country: "", chosen: false, noticePath: "" };
let dict: Map<string, string> | null = null;
let version = 0;
let seq = 0;
let booted = false;
const listeners = new Set<() => void>();

const hasDict = (code: string) => Object.prototype.hasOwnProperty.call(DICT_VERSION, code);

function set(patch: Partial<I18nState>) {
  state = { ...state, ...patch };
  version++;
  listeners.forEach((l) => l());
}

export const getState = () => state;
export const getVersion = () => version;
export function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

/** Textul normalizat, ca în scripts/i18n_extrage.py: fără caractere de lățime zero, cu spațiile strânse. */
export const norm = (s: string) => s.replace(/[⁠​‌‍﻿]/g, "").replace(/[\s  ]+/g, " ").trim();

/** true = text care se traduce (are cel puțin două litere la rând și nu e o adresă). */
export function translatable(t: string): boolean {
  return /\p{L}{2,}/u.test(t) && !/^[\w.+-]+@[\w.-]+$/.test(t) && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(t);
}

/** Traducerea unui text normalizat sau null. Numerele sunt șabloane: cheia și traducerea țin „#” în locul fiecărui număr. */
export function lookup(t: string): string | null {
  if (!dict) return null;
  const literal = dict.get(t);
  if (literal !== undefined) return literal;
  if (t.includes("#")) return null;
  const nums = t.match(NUM);
  if (!nums) return null;
  const template = dict.get(t.replace(NUM, "#"));
  if (template === undefined) return null;
  let i = 0;
  return template.replace(/#/g, () => nums[i++] ?? "#");
}

/** true = acum se afișează o traducere din dicționar (limbă cu dicționar, încărcat, pe o pagină unde motorul are voie). */
export const isActive = () => state.status === "ready" && dict !== null && state.scope !== "off";

/** true = titlurile au voie să își deseneze liniuțele (în română și engleză mereu; în alte limbi doar dacă atlasul le acoperă). */
export const linesAllowed = () => !(isActive() && state.scope === "full" && LINES_OFF.includes(state.locale));

export function noteMiss(t: string) {
  if (typeof window === "undefined") return;
  (window.__rvI18nMisses ??= new Set()).add(t);
}

function load(code: string, ready?: Promise<Record<string, string> | null>) {
  const mine = ++seq;
  dict = null;
  set({ locale: code, status: "loading" });
  const request =
    ready ??
    fetch(`/i18n/${code}.json?v=${DICT_VERSION[code]}`).then((r) => {
      if (!r.ok) throw new Error(String(r.status));
      return r.json() as Promise<Record<string, string>>;
    });
  request
    .then((data) => {
      if (mine !== seq) return; // între timp s-a ales altă limbă
      if (!data) throw new Error("fără dicționar");
      dict = new Map(Object.entries(data));
      try {
        sessionStorage.removeItem("rv_i18n_fail");
      } catch {
        /* fără stocare */
      }
      set({ status: "ready" });
    })
    .catch(() => {
      if (mine !== seq) return;
      try {
        sessionStorage.setItem("rv_i18n_fail", code);
      } catch {
        /* fără stocare */
      }
      set({ status: "failed" });
    });
}

function apply(code: string, chosen: boolean, ready?: Promise<Record<string, string> | null>) {
  if (hasDict(code)) {
    if (state.locale === code && (state.status === "ready" || state.status === "loading")) set({ chosen });
    else {
      set({ chosen });
      load(code, ready);
    }
  } else {
    seq++;
    dict = null;
    set({ locale: code === "en" ? "en" : "ro", status: "idle", chosen });
  }
}

/** Limba de pornire: alegerea salvată, altfel țara (fără nimic automat pentru browserele în română). Vezi lib/i18n/inline.ts. */
function detect(): { locale: string | null; auto: boolean; cc: string } {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    /* fără stocare */
  }
  let cc = "";
  try {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const hit = nav?.serverTiming?.find((t) => t.name === "rvcc" && /^[A-Za-z]{2}$/.test(t.description));
    if (hit) cc = hit.description.toUpperCase();
  } catch {
    /* browser fără serverTiming: fără detecție */
  }
  if (saved && (saved === "ro" || saved === "en" || hasDict(saved))) return { locale: saved, auto: false, cc };
  if (cc && cc !== "RO" && cc !== "MD") {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
    if (!langs.some((l) => /^ro\b/i.test(l))) return { locale: COUNTRY_LANG[cc] || "en", auto: true, cc };
  }
  return { locale: null, auto: false, cc };
}

/** Pornirea, o singură dată pe încărcare de pagină: preia ce a hotărât scriptul din HTML sau hotărăște singură. */
export function bootstrap() {
  if (booted || typeof window === "undefined") return;
  booted = true;
  const boot = window.__rvI18n ?? detect();
  set({ country: boot.cc || "" });
  if (boot.locale && boot.locale !== "ro") apply(boot.locale, !boot.auto, window.__rvI18n?.dict);
}

/** După „Înapoi” din memoria browserului: alegerea salvată poate fi alta decât cea cu care a fost desenată pagina. */
export function resync() {
  const d = detect();
  const want = d.locale ?? "ro";
  if (want !== state.locale) apply(want, !d.auto);
}

/** Alegerea din panou: se ține minte și se aplică. */
export function choose(code: string) {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* fără stocare: alegerea ține cât pagina */
  }
  apply(code, true);
  if (state.noticePath) set({ noticePath: "" });
}

export function setScope(scope: Scope) {
  if (scope !== state.scope) set({ scope });
}

export function setNoticePath(path: string) {
  if (path !== state.noticePath) set({ noticePath: path });
}
