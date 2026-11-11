import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import type { LiveProject } from "@/lib/liveProjects";

type Lang = "ro" | "en";

const copy = {
  ro: {
    badge: "Portofoliu · Sisteme live",
    h1a: "Sisteme live.",
    h1b: "Făcute de noi.",
    lead: "Reverb construiește site-uri, magazine online și aplicații web pentru firme. Mai jos sunt proiectele pe care le-am realizat, fiecare pe adresa ei: deschide-le și verifică singur.",
    pricesCta: "Pachete și prețuri fixe",
    pricesHref: "/pachete",
    prompt: "ls --live ./sisteme",
    path: "reverb@prod: ~/portofoliu",
    count: (n: number) => `${n} sisteme`,
    colName: "Sistem",
    colType: "Tip",
    colStack: "Tehnologie",
    colState: "Stare",
    journey: "Călătoria",
    result: "Azi",
    open: "Deschide",
    done: (n: number) => `${n} sisteme listate. Toate adresele sunt publice.`,
    conceptsLabel: "Separat de portofoliu",
    conceptsTitle: "Concepte și direcții de design",
    conceptsText: "Machetele și studiile de stil pe nișe diferite stau într-o galerie separată. Sunt mostre de direcție vizuală, nu lucrări livrate.",
    conceptsCta: "Vezi conceptele",
    contactCta: "Discută proiectul tău",
    conceptsHref: "/showcase",
    contactHref: "/contact",
  },
  en: {
    badge: "Portfolio · Live systems",
    h1a: "Live systems.",
    h1b: "Built by us.",
    lead: "Reverb builds websites, online stores and web applications for companies. Below are the projects we built, each on its own address: open them and check for yourself.",
    pricesCta: "Packages and fixed prices",
    pricesHref: "/en/packages",
    prompt: "ls --live ./systems",
    path: "reverb@prod: ~/portfolio",
    count: (n: number) => `${n} systems`,
    colName: "System",
    colType: "Type",
    colStack: "Stack",
    colState: "Status",
    journey: "The journey",
    result: "Today",
    open: "Open",
    done: (n: number) => `${n} systems listed. Every address is public.`,
    conceptsLabel: "Kept apart from the portfolio",
    conceptsTitle: "Design concepts and directions",
    conceptsText: "Mock-ups and style studies for different niches live in a separate gallery. They are samples of visual direction, not delivered work.",
    conceptsCta: "See the concepts",
    contactCta: "Discuss your project",
    conceptsHref: "/en/showcase",
    contactHref: "/en/contact",
  },
} as const;

function domainOf(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function PortfolioIndex({ lang, projects }: { lang: Lang; projects: LiveProject[] }) {
  const t = copy[lang];
  // Portofoliul arată toate proiectele realizate de noi; un concept nedeschis încă e marcat ca demo.
  const live = projects;
  const pad = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <div className="text-neutral-100 min-h-screen font-sans antialiased">
      <PageBackdrop />

      {/* Hero — același tipar ca pe pagina de pornire */}
      <section className="relative z-10 pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
            {t.h1a}
            <br />
            <span className="text-neutral-400 font-light">{t.h1b}</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
            {t.lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={t.contactHref}
              className="mech-btn rounded-full bg-white px-7 py-3.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
            >
              {t.contactCta} <span className="mech-arrow">→</span>
            </Link>
            <Link
              href={t.pricesHref}
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
            >
              {t.pricesCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Indexul de terminal */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-20 md:pb-28">
        <div className="rounded-2xl border border-white/15 bg-neutral-900/40 backdrop-blur-md overflow-hidden font-mono">
          {/* Bara ferestrei */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
              </div>
              <span className="truncate text-[11px] text-neutral-400">{t.path}</span>
            </div>
            <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              {t.count(live.length)}
            </span>
          </div>

          {/* Comanda */}
          <div className="px-4 sm:px-6 pt-5 pb-4 text-[13px] text-neutral-300">
            <span className="text-emerald-400">$</span> {t.prompt}
          </div>

          {/* Capul de tabel (doar pe ecrane late) */}
          <div className="hidden lg:grid grid-cols-[3rem_minmax(0,1.5fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_10rem_4.5rem] gap-4 border-y border-white/10 px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span>#</span>
            <span>{t.colName}</span>
            <span>{t.colType}</span>
            <span>{t.colStack}</span>
            <span>{t.colState}</span>
            <span className="text-right">URL</span>
          </div>

          {/* Rândurile */}
          <ul className="divide-y divide-white/10 border-t border-white/10 lg:border-t-0">
            {live.map((p, i) => {
              return (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] lg:grid-cols-[3rem_minmax(0,1.5fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_10rem_4.5rem] items-start gap-x-4 gap-y-1 px-4 sm:px-6 py-4 transition-colors hover:bg-white/5 focus-visible:bg-white/5"
                  >
                    <span className="text-xs text-neutral-500 pt-1">{pad(i)}</span>

                    <span className="min-w-0">
                      <span className="block truncate font-sans text-base font-medium text-white">{p.name}</span>
                      <span className="block truncate text-[11px] text-neutral-500">{domainOf(p.href)}</span>
                      {/* pe ecrane înguste, tipul și tehnologia stau sub nume */}
                      <span className="mt-2 block text-[11px] leading-relaxed text-neutral-400 lg:hidden">
                        <span className={`mr-1.5 inline-block h-1.5 w-1.5 -translate-y-px rounded-full ${/demo/i.test(p.status) ? "bg-amber-400" : "bg-emerald-400"}`} />
                        {p.status} · {p.category}
                      </span>
                    </span>

                    <span className="hidden lg:block pt-1 text-xs leading-relaxed text-neutral-300">{p.category}</span>
                    <span className="hidden lg:block pt-1 text-xs leading-relaxed text-neutral-400">{p.tech}</span>

                    <span className="hidden lg:flex items-center gap-2 pt-1.5 text-[10px] uppercase tracking-[0.15em] text-neutral-300">
                      <span className={`h-1.5 w-1.5 rounded-full ${/demo/i.test(p.status) ? "bg-amber-400" : "bg-emerald-400"}`} />
                      {p.status}
                    </span>

                    <span className="flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-[0.15em] text-neutral-400 transition-colors group-hover:text-white pt-1">
                      <span className="hidden sm:inline">{t.open}</span>
                      <span aria-hidden="true" className="mech-arrow text-sm">↗</span>
                    </span>

                    <span className="col-start-2 col-span-2 lg:col-start-2 lg:col-span-4 mt-3 grid gap-x-8 gap-y-3 font-sans text-xs leading-relaxed text-neutral-400 lg:grid-cols-3">
                      <span className="block">{p.desc}</span>
                      {p.journey && (
                        <span className="block">
                          <span className="mb-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{t.journey}</span>
                          {p.journey}
                        </span>
                      )}
                      {p.result && (
                        <span className="block">
                          <span className="mb-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{t.result}</span>
                          {p.result}
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Încheierea comenzii */}
          <div className="border-t border-white/10 px-4 sm:px-6 py-4 text-[12px] text-neutral-500">
            <div>{t.done(live.length)}</div>
            <div className="mt-2 text-neutral-300">
              <span className="text-emerald-400">$</span>{" "}
              <span aria-hidden="true" className="inline-block h-3.5 w-2 translate-y-0.5 bg-neutral-300 animate-pulse motion-reduce:animate-none" />
            </div>
          </div>
        </div>

        {/* Conceptele stau separat */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">{t.conceptsLabel}</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight text-white">{t.conceptsTitle}</h2>
            <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">{t.conceptsText}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={t.contactHref}
              className="mech-btn rounded-full bg-white px-7 py-3.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
            >
              {t.contactCta} <span className="mech-arrow">→</span>
            </Link>
            <Link
              href={t.conceptsHref}
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
            >
              {t.conceptsCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
