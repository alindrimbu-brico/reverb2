import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import { GITHUB_SHOWCASE_PATHS } from "@/lib/githubShowcases";

export type Concept = {
  id: string;
  name: string;
  vibe: string;
  color: string;
  description: string;
  href: string;
};

type Lang = "ro" | "en";

const copy = {
  ro: {
    badge: "Concepte · Studii de stil",
    h1a: "Concepte și direcții",
    h1b: "de design.",
    lead: (n: number) =>
      `${n} machete și studii de stil, fiecare gândită pentru altă nișă — de la rigoarea medicală la industrialul B2B. Sunt mostre de direcție vizuală. Sistemele aflate în producție sunt în Portofoliu.`,
    toPortfolio: "Portofoliu — sisteme live",
    portfolioHref: "/portofoliu",
    open: "Deschide macheta",
  },
  en: {
    badge: "Concepts · Style studies",
    h1a: "Design concepts",
    h1b: "and directions.",
    lead: (n: number) =>
      `${n} mock-ups and style studies, each built for a different niche — from medical rigour to industrial B2B. They are samples of visual direction. Systems running in production are in the Portfolio.`,
    toPortfolio: "Portfolio — live systems",
    portfolioHref: "/en/portfolio",
    open: "Open the mock-up",
  },
} as const;

export default function ConceptGallery({ lang, items }: { lang: Lang; items: Concept[] }) {
  const t = copy[lang];

  return (
    <div className="text-neutral-100 min-h-screen font-sans antialiased">
      <PageBackdrop />

      {/* Hero — același tipar ca pe pagina de pornire */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-20 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
            {t.h1a}
            <br />
            <span className="text-neutral-400 font-light">{t.h1b}</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
            {t.lead(items.length)}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={t.portfolioHref}
              className="mech-btn rounded-full bg-white px-7 py-3.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all"
            >
              {t.toPortfolio} <span className="mech-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Grila: toate cardurile în același stil; culoarea machetei rămâne doar ca punct */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => {
          const isExternal =
            /^https?:\/\//.test(s.href) || GITHUB_SHOWCASE_PATHS.some((p) => s.href.startsWith(`/${p}/`));
          const linkProps = isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
          return (
            <Link
              href={s.href}
              key={s.id}
              {...linkProps}
              className="mech-card group rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col h-full transition-colors hover:border-white/30"
            >
              <div className="flex items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6">
                <span className="flex items-center gap-2 min-w-0">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full ring-1 ring-white/25 light:ring-black/25"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="truncate">{s.vibe}</span>
                </span>
                <span className="shrink-0">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <h2 className="text-xl font-medium tracking-tight text-white mb-3">{s.name}</h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">{s.description}</p>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                <span>{t.open}</span>
                <span aria-hidden="true" className="mech-arrow text-sm text-neutral-300 transition-colors group-hover:text-white">
                  {isExternal ? "↗" : "→"}
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
