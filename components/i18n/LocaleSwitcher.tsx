"use client";

// Selectorul de limbă din bară: butonul cu codul limbii, panoul cu toate limbile și rândul care apare sub bară pe paginile
// ce există doar în română și engleză. Regulile: docs/designs/selector_limba_2026-11-13/design_v1_decizii.md.
// - Română și English sunt legături spre pagina-pereche; celelalte limbi se aplică pe loc, peste pagina românească.
// - Panoul și rândul au `data-no-translate`: textele lor sunt deja scrise în limba afișată.

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LOCALES } from "@/lib/i18n/locales";
import { DICT_VERSION } from "@/lib/i18n/generated";
import { choose, setNoticePath, type I18nState } from "@/lib/i18n/store";
import { hasEnPair, isEnPath, scopeFor, toEn, toRo } from "@/lib/i18n/scope";
import { useI18n, useTr } from "@/lib/i18n/useT";

const isDict = (code: string) => code !== "ro" && code !== "en";

/** Limba pe care o vede omul acum pe această pagină. */
function shownCode(pathname: string, s: I18nState): string {
  if (isEnPath(pathname)) return "en";
  if (isDict(s.locale) && s.scope !== "off" && (s.status === "ready" || s.status === "loading")) return s.locale;
  return "ro";
}

function countryName(cc: string, locale: string): string {
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(cc) ?? cc;
  } catch {
    return cc;
  }
}

export function LocaleButton({ pathname, open, onToggle }: { pathname: string; open: boolean; onToggle: () => void }) {
  const s = useI18n();
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isEnPath(pathname) ? "Choose language" : "Alege limba"}
      aria-haspopup="true"
      aria-expanded={open}
      aria-controls="rv-locale-panel"
      data-locale-button
      className="mech-magnetic inline-flex h-8 items-center gap-1 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/10 px-2.5 text-[9px] font-extrabold uppercase tracking-widest text-[#111215] dark:text-white transition-colors duration-300 hover:bg-black/[0.08] dark:hover:bg-white/20 shrink-0"
    >
      <span data-no-translate>{shownCode(pathname, s)}</span>
      <span aria-hidden="true" className={`text-[8px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}>▾</span>
    </button>
  );
}

export function LocalePanel({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const s = useI18n();
  const tr = useTr();
  const router = useRouter();
  const en = isEnPath(pathname);
  const current = shownCode(pathname, s);
  const items = LOCALES.filter((l) => !isDict(l.code) || Object.prototype.hasOwnProperty.call(DICT_VERSION, l.code));

  const item = (active: boolean) =>
    `flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors duration-200 ${
      active
        ? "bg-[#111215] text-[#ffffff] dark:bg-white dark:text-[#0a0a0c]"
        : "text-[#111215]/80 dark:text-neutral-200 hover:bg-black/[0.06] dark:hover:bg-white/10"
    }`;
  const code = (active: boolean) => `text-[9px] font-mono uppercase tracking-widest ${active ? "opacity-70" : "opacity-45"}`;

  const pick = (lang: string) => {
    choose(lang);
    if (en) {
      // de pe o pagină englezească: mergem la perechea românească doar dacă aceea se traduce în întregime
      const target = toRo(pathname);
      if (scopeFor(target) === "full") router.push(target);
      else setNoticePath(pathname);
    }
    onClose();
  };

  return (
    <div id="rv-locale-panel" data-no-translate className="w-full max-w-6xl mt-2 px-0 sm:px-2 flex justify-end pointer-events-none">
      <div
        role="group"
        aria-label={en ? "Language" : tr("Limbă")}
        className="pointer-events-auto w-full sm:w-[34rem] max-h-[70vh] overflow-y-auto rounded-2xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-[#23262b]/95 backdrop-blur-lg p-4 sm:p-5 shadow-2xl"
      >
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#111215]/55 dark:text-neutral-400">{en ? "Language" : tr("Limbă")}</span>
          {s.country ? (
            <span className="text-[10px] font-mono text-[#111215]/55 dark:text-neutral-400">
              {en ? "Detected country:" : tr("Țara detectată:")} {countryName(s.country, current)}
            </span>
          ) : null}
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          {items.map((l) => {
            const active = l.code === current;
            const inner = (
              <>
                <span lang={l.code}>{l.name}</span>
                <span className={code(active)}>{l.code}</span>
              </>
            );
            if (l.code === "ro") {
              return (
                <li key={l.code}>
                  <Link
                    href={en ? toRo(pathname) : pathname}
                    hrefLang="ro"
                    aria-current={active ? "true" : undefined}
                    className={item(active)}
                    onClick={(e) => {
                      if (!en) e.preventDefault(); // pe o pagină românească doar punem textele la loc
                      choose("ro");
                      onClose();
                    }}
                  >
                    {inner}
                  </Link>
                </li>
              );
            }
            if (l.code === "en") {
              return (
                <li key={l.code}>
                  <Link
                    href={en ? pathname : toEn(pathname)}
                    hrefLang="en"
                    aria-current={active ? "true" : undefined}
                    className={item(active)}
                    onClick={(e) => {
                      if (en) e.preventDefault();
                      choose("en");
                      onClose();
                    }}
                  >
                    {inner}
                  </Link>
                </li>
              );
            }
            return (
              <li key={l.code}>
                <button type="button" aria-current={active ? "true" : undefined} className={item(active)} onClick={() => pick(l.code)}>
                  {inner}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

let dismissed = false; // ține cât fila: rândul nu reapare la fiecare pagină după ce a fost închis

/** „Această pagină există doar în română și engleză”: pe paginile unde se traduc doar bara și subsolul. */
export function LocaleNotice({ pathname }: { pathname: string }) {
  const s = useI18n();
  const tr = useTr();
  const [closed, setClosed] = useState(dismissed);
  const applies = isDict(s.locale) && s.status === "ready" && (s.scope === "chrome" || s.noticePath === pathname);
  if (!applies || closed) return null;
  const english = !isEnPath(pathname) && hasEnPair(pathname) ? toEn(pathname) : null;

  return (
    <div data-no-translate lang={s.locale} className="w-full max-w-6xl mt-2 px-0 sm:px-2 flex justify-center pointer-events-none">
      <div
        role="status"
        className="pointer-events-auto inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-[#23262b]/95 backdrop-blur-lg px-4 py-2 text-[11px] leading-snug text-[#111215]/80 dark:text-neutral-200 shadow-lg"
      >
        <span>{tr("Această pagină există doar în română și engleză.")}</span>
        {english ? (
          <Link href={english} hrefLang="en" onClick={() => choose("en")} className="font-bold underline underline-offset-4 hover:text-[#111215] dark:hover:text-white">
            {tr("Vezi în engleză")} →
          </Link>
        ) : null}
        <button
          type="button"
          aria-label={tr("Închide")}
          onClick={() => {
            dismissed = true;
            setClosed(true);
          }}
          className="-mr-1 flex h-6 w-6 items-center justify-center rounded-md text-sm leading-none text-[#111215]/60 dark:text-neutral-400 hover:text-[#111215] dark:hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}
