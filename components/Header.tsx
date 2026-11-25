"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import LocaleRuntime from "@/components/i18n/LocaleRuntime";
import { LocaleButton, LocaleNotice, LocalePanel } from "@/components/i18n/LocaleSwitcher";
import { INLINE_I18N } from "@/lib/i18n/inline";
import { isEnPath } from "@/lib/i18n/scope";

const navInfo = {
  ro: [
    { href: "/servicii", label: "Servicii" },
    { href: "/pachete", label: "Pachete" },
    { href: "/portofoliu", label: "Portofoliu" },
    { href: "/despre", label: "Despre" },
    { href: "/contact", label: "Contact" },
  ],
  en: [
    { href: "/en/services", label: "Services" },
    { href: "/en/packages", label: "Packages" },
    { href: "/en/portfolio", label: "Portfolio" },
    { href: "/en/about", label: "About" },
    { href: "/en/contact", label: "Contact" },
  ]
};

/** Lățimea barei după derulare (`max-w-5xl`): meniul trebuie să încapă și atunci, ca să nu dispară la prima derulare. */
const BAR_SCROLLED_MAX = 1024;

export default function Header() {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const isEn = isEnPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  // Când bara nu încape pe un rând (limbă cu cuvinte lungi, text mărit din browser) cedează pe rând: 1 = dispare rândul mic
  // de sub siglă și meniul se strânge, 2 = meniul trece pe butonul cu trei liniuțe, 3 = dispare și numele de lângă siglă
  // (rămâne pentru cititoarele de ecran). Pe telefon există doar treptele 0 și 3.
  const [fit, setFit] = useState<0 | 1 | 2 | 3>(0);
  const compact = fit >= 2;
  const barRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const kept = useRef({ navWide: 0, navTight: 0, sub: 0, name: 0 });

  // Panoul de limbi și meniul de telefon se închid la schimbarea paginii, la Esc și la clic în afara barei.
  useEffect(() => {
    setLangOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!langOpen) return;
    const key = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setLangOpen(false);
      document.querySelector<HTMLButtonElement>("[data-locale-button]")?.focus();
    };
    const outside = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target && !target.closest("#rv-locale-panel, [data-locale-button]")) setLangOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("mousedown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("mousedown", outside);
    };
  }, [langOpen]);

  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };
    const outside = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target && !target.closest("#rv-menu, [data-menu-button]")) setOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("mousedown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("mousedown", outside);
    };
  }, [open]);

  // Tema o pune pe <html> primul script din app/layout.tsx, înaintea primei vopsiri. Aici se pune încă o dată, din aceeași
  // sursă: pe paginile unde React reface arborele la hidratare (de ex. raportul Humanoid), clasa pusă de script se pierde.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("reverb_theme");
    } catch {}
    const next = saved === "light" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.add(next);
    document.documentElement.classList.remove(next === "light" ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("reverb_theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sigla + meniul + butoanele din dreapta se măsoară față de lățimea barei. Lățimile pieselor ascunse (meniul, rândul mic)
  // se țin minte cât sunt ascunse; la schimbarea limbii totul se arată din nou și se măsoară iar. Revenirea la o treaptă mai
  // largă cere 12 px în plus, ca bara să nu pâlpâie la limită.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const wide = window.matchMedia("(min-width: 1024px)");
    const xl = window.matchMedia("(min-width: 1280px)");
    const check = () => {
      const logo = logoRef.current;
      const name = nameRef.current;
      const right = rightRef.current;
      const icon = logo?.firstElementChild as HTMLElement | null;
      if (!logo || !name || !right || !icon) return;
      const nav = navRef.current;
      const sub = subRef.current;
      const menu = menuButtonRef.current;
      // meniul are două lățimi: cea largă (treapta 0) și cea strânsă (treapta 1: literă de 14 px, spații mici)
      if (nav && nav.offsetWidth > 0) {
        if (nav.dataset.tight === "true") kept.current.navTight = nav.offsetWidth;
        else kept.current.navWide = nav.offsetWidth;
      }
      if (sub && sub.offsetWidth > 0) kept.current.sub = sub.scrollWidth;
      if (name.offsetWidth > 0 && !name.closest(".sr-only")) kept.current.name = name.offsetWidth;
      const navWide = kept.current.navWide || kept.current.navTight;
      const navTight = kept.current.navTight || navWide * 0.9;
      const cs = getComputedStyle(bar);
      const room = Math.min(bar.clientWidth, BAR_SCROLLED_MAX) - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const gap = parseFloat(getComputedStyle(logo).columnGap) || 0;
      const rightGap = parseFloat(getComputedStyle(right).columnGap) || 0;
      const menuShown = !!menu && menu.offsetWidth > 0;
      const buttons = right.offsetWidth - (menuShown ? menu.offsetWidth + rightGap : 0); // fără butonul de meniu
      const menuNeed = (menuShown ? menu.offsetWidth : icon.offsetWidth) + rightGap;
      const logoShort = icon.offsetWidth + gap + kept.current.name;
      const logoFull = icon.offsetWidth + gap + Math.max(kept.current.name, xl.matches ? kept.current.sub : 0);
      const isWide = wide.matches;
      const air = isWide ? 40 : 12; // spațiul dintre cele trei grupuri
      setFit((was) => {
        const fits = (need: number, level: number) => need <= room - (was > level ? 12 : 0);
        if (isWide && fits(logoFull + navWide + buttons + air, 0)) return 0;
        if (isWide && fits(logoShort + navTight + buttons + air, 1)) return 1;
        if (fits(logoShort + buttons + menuNeed + 12, isWide ? 2 : 0)) return isWide ? 2 : 0;
        return 3;
      });
    };
    const remeasure = () => {
      kept.current = { navWide: 0, navTight: 0, sub: 0, name: 0 };
      setFit(0);
      requestAnimationFrame(() => requestAnimationFrame(check));
    };
    const ro = new ResizeObserver(check);
    ro.observe(bar);
    if (navRef.current) ro.observe(navRef.current);
    if (logoRef.current) ro.observe(logoRef.current);
    if (rightRef.current) ro.observe(rightRef.current);
    xl.addEventListener("change", check);
    const mo = new MutationObserver(remeasure);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-rv-lang", "data-rv-i18n"] });
    // pe paginile unde se traduc doar bara și subsolul, limba e scrisă pe <header>, nu pe <html>
    const header = bar.closest("header");
    if (header) mo.observe(header, { attributes: true, attributeFilter: ["data-rv-lang"] });
    wide.addEventListener("change", check);
    document.fonts?.ready.then(check).catch(() => {});
    check();
    return () => {
      ro.disconnect();
      mo.disconnect();
      wide.removeEventListener("change", check);
      xl.removeEventListener("change", check);
    };
  }, [pathname]);

  const nav = isEn ? navInfo.en : navInfo.ro;
  // Pe calculator „Contact” e butonul din dreapta, deci nu se repetă în meniu; în meniul cu trei liniuțe rămâne.
  const barNav = nav.filter(({ href }) => !href.endsWith("/contact"));

  const translations = {
    clarity: isEn ? "Websites and online stores" : "Site-uri și magazine online",
    start: isEn ? "Start Project" : "Start Proiect",
    themeToLight: isEn ? "Switch to the light theme" : "Treci pe tema deschisă",
    themeToDark: isEn ? "Switch to the dark theme" : "Treci pe tema închisă",
    menuOpen: isEn ? "Open the menu" : "Deschide meniul",
    menuClose: isEn ? "Close the menu" : "Închide meniul",
    menu: isEn ? "Menu" : "Meniu",
  };

  // Reverb Studio e aplicația de lucru a lui Alin: bara rămâne (sigla + tema), dar fără meniul site-ului,
  // fără „Start Proiect”, fără RO/EN și fără cele trei liniuțe (din ele se ieșea în reverb.ro fără drum înapoi).
  const inStudio = pathname === "/studio" || pathname.startsWith("/studio/");

  // Hide global Reverb header on individual showcase prototypes (after all hooks)
  const isShowcaseDemo = Boolean(
    (pathname.startsWith("/showcase/") && pathname !== "/showcase") ||
    (pathname.startsWith("/en/showcase/") && pathname !== "/en/showcase")
  );
  if (isShowcaseDemo) {
    // Machetele își au propriul antet; bara Reverb dispare, dar rămâne mereu un drum înapoi.
    const inEnglish = pathname.startsWith("/en/");
    return (
      <Link
        href={inEnglish ? "/en/showcase" : "/showcase"}
        data-reverb-back
        className="mech-magnetic fixed left-4 bottom-4 z-[70] inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#111215]/90 px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#ffffff] shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors hover:bg-black"
      >
        <span aria-hidden="true">←</span>
        {inEnglish ? "Back to concepts" : "Înapoi la concepte"}
      </Link>
    );
  }

  const themeLabel = theme === "dark" ? translations.themeToLight : translations.themeToDark;
  const menuVisible = open && !inStudio;

  return (
    <>
      {/* Selectorul de limbă: hotărăște limba înaintea React-ului, ca pagina să nu apară întâi în română (lib/i18n/inline.ts). */}
      {!inStudio && <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: INLINE_I18N }} />}
      {!inStudio && <LocaleRuntime />}
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-[12px] sm:px-[16px] pt-[12px] sm:pt-[16px] pointer-events-none">
      {/* Bara are colț ca restul site-ului (Alin, 13 nov: „nu rămâne capsulă”): `pill-bar` îi dă raza de 16 px (globals.css,
          „Pastile cu colț”). `data-no-lift`: butoanele din bară nu se ridică la cursor.
          25 nov 2026: literele barei au cel puțin 13 px (meniul 14 px, 15 px de la 1280 px), scrise normal, nu cu majuscule
          rărite (nu încăpeau pe un rând); butonul de contact apare de la 1024 px. Mărimile barei sunt în pixeli, nu în rem:
          la text mărit din browser butoanele se dublau și nu mai încăpeau pe telefon. */}
      <div
        ref={barRef}
        data-no-lift
        className={`pill-bar w-full max-w-6xl rounded-full border bg-white/90 dark:bg-[#23262b]/90 backdrop-blur-md px-[16px] sm:px-[24px] flex items-center justify-between gap-[16px] pointer-events-auto transition-all duration-500 shadow-sm ${
          scrolled
            ? "border-black/10 dark:border-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-[8px] sm:py-[10px] max-w-5xl"
            : "border-black/[0.07] dark:border-white/10 py-[10px] sm:py-[14px]"
        }`}
      >
        {/* Left: Logo and Brand Name */}
        <div className="flex-1 flex justify-start items-center min-w-0">
          <Link ref={logoRef} href={inStudio ? "/studio" : isEn ? "/en" : "/"} className="flex items-center gap-[10px] sm:gap-[12px] group shrink-0">
            <div className="flex h-[36px] w-[36px] sm:h-[40px] sm:w-[40px] items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/10 shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(29,39,49,0.15)] group-hover:-translate-y-0.5 text-[#111215] dark:text-white">
              <Logo size={26} />
            </div>
            <div className={fit === 3 ? "sr-only" : "text-left"}>
              <div className="text-[13px] font-bold tracking-[0.18em] sm:tracking-[0.24em] uppercase text-[#111215] dark:text-neutral-100 transition-colors duration-300"><span ref={nameRef}>{inStudio ? "reverb studio" : "reverb.ro"}</span></div>
              <div ref={subRef} data-i18n-wait className={`${fit >= 1 ? "hidden" : "hidden xl:block"} whitespace-nowrap text-[13px] leading-tight text-[#111215]/60 dark:text-neutral-400`}>{translations.clarity}</div>
            </div>
          </Link>
        </div>

        {/* Center: centered navigation menu (visible on desktop >= 1024px to prevent tablet clipping) */}
        <nav ref={navRef} data-i18n-wait data-tight={fit >= 1} className={`${inStudio || compact ? "hidden" : "hidden lg:flex"} items-center gap-[4px] ${fit >= 1 ? "" : "xl:gap-[12px]"} shrink-0`}>
          {barNav.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`mech-nav-link whitespace-nowrap transition-colors duration-300 text-[14px] ${fit >= 1 ? "" : "xl:text-[15px]"} font-medium relative py-[4px] px-[8px] ${
                  isActive
                    ? "text-[#111215] dark:text-white"
                    : "text-[#111215]/60 dark:text-neutral-300 hover:text-[#111215] dark:hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-[8px] right-[8px] h-[2px] bg-[#111215] dark:bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA button, Theme Toggle, Language Switcher, Hamburger */}
        <div className="flex-1 flex justify-end items-center shrink-0">
          <div ref={rightRef} className="flex items-center gap-[8px] sm:gap-[12px]">
          {!inStudio && <Link
            href={isEn ? "/en/contact" : "/contact"}
            data-i18n-wait
            data-umami-event="contact-click"
            data-umami-event-loc="bara"
            className="mech-magnetic mech-btn hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#111215] dark:bg-white px-[16px] py-[8px] text-[13px] leading-[20px] font-bold uppercase tracking-[0.08em] text-[#ffffff] dark:text-[#0a0a0c] hover:bg-black dark:hover:bg-neutral-200 transition-all duration-300 shadow-[0_4px_12px_rgba(29,39,49,0.15)] hover:shadow-[0_8px_20px_rgba(29,39,49,0.3)] dark:shadow-none shrink-0"
          >
            {translations.start}
          </Link>}

          {/* Minimalist Theme Toggle (Dark / Light) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="mech-magnetic flex items-center justify-center h-[36px] w-[36px] rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/10 text-[#111215] dark:text-white transition-colors duration-300 hover:bg-black/[0.08] dark:hover:bg-white/20 shrink-0"
          >
            <span aria-hidden="true" className="text-[14px] leading-none">{theme === "dark" ? "☾" : "☼"}</span>
          </button>

          {/* Selectorul de limbă (components/i18n/LocaleSwitcher.tsx): butonul stă aici, panoul se deschide sub bară. */}
          {!inStudio && (
            <LocaleButton
              pathname={pathname}
              open={langOpen}
              onToggle={() => {
                setLangOpen(!langOpen);
                setOpen(false);
              }}
            />
          )}

          {/* Butonul meniului: sub 1024 px sau când meniul nu încape pe un rând. */}
          <button
            ref={menuButtonRef}
            type="button"
            data-menu-button
            className={`${inStudio ? "hidden" : compact ? "flex" : "flex lg:hidden"} relative h-[36px] w-[36px] items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/10 transition-colors duration-300 hover:bg-black/[0.08] dark:hover:bg-white/20 pointer-events-auto shrink-0`}
            onClick={() => {
              setOpen(!open);
              setLangOpen(false);
            }}
            aria-label={open ? translations.menuClose : translations.menuOpen}
            aria-expanded={open}
            aria-controls="rv-menu"
          >
            <span className={`absolute block h-px w-[16px] bg-[#111215] dark:bg-white transition-all ${open ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute block h-px w-[16px] bg-[#111215] dark:bg-white transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute block h-px w-[16px] bg-[#111215] dark:bg-white transition-all ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
          </div>
        </div>
      </div>

      {langOpen && !inStudio && <LocalePanel pathname={pathname} onClose={() => setLangOpen(false)} />}
      {!langOpen && !open && !inStudio && <LocaleNotice pathname={pathname} />}

      {/* Meniul cu trei liniuțe, deschis sub bară */}
      {menuVisible && (
        <div id="rv-menu" className={`w-full max-w-6xl mt-2 px-3 sm:px-4 pointer-events-auto ${compact ? "" : "lg:hidden"}`}>
          <nav aria-label={translations.menu} className="rounded-3xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-[#23262b]/95 backdrop-blur-lg p-6 shadow-2xl space-y-2">
            {nav.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={pathname === href ? "page" : undefined}
                className={`block py-2.5 text-base font-medium transition-colors ${
                  pathname === href ? "text-[#111215] dark:text-white" : "text-[#111215]/70 dark:text-neutral-300"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href={isEn ? "/en/contact" : "/contact"}
              onClick={() => setOpen(false)}
              data-umami-event="contact-click"
              data-umami-event-loc="meniu"
              className="!mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#111215] dark:bg-white py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#ffffff] dark:text-[#0a0a0c] hover:opacity-90 transition-opacity"
            >
              {translations.start}
            </Link>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
