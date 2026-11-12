import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import type { LiveProject } from "@/lib/liveProjects";
import { deliveryEn, getPackage, priceEn, VAT_LABEL } from "@/lib/packages";
import { VAT_LABEL_EN } from "@/lib/packagesEn";
import { Linie } from "@/components/RunningLine";

type Lang = "ro" | "en";

// Prețul și termenul vin din lista de pachete, ca să nu existe două cifre diferite pe site.
function offer(id: string, lang: Lang) {
  const p = getPackage(id);
  if (!p) return null;
  const ro = p.price.replace(/^de la\s+/i, "");
  const price = lang === "en" ? priceEn(ro) : ro;
  const days = lang === "en" ? deliveryEn(p.delivery) : p.delivery;
  return { price: `${price} ${lang === "en" ? VAT_LABEL_EN : VAT_LABEL}`, days };
}

const copy = {
  ro: {
    label: "Portofoliu",
    h1a: "Proiecte live.",
    h1b: "Făcute de noi.",
    lead: "Site-uri, magazine online și aplicații web construite de Reverb. Fiecare e pe adresa lui: deschide-l și verifică singur.",
    site: "Site de prezentare, până la 5 pagini: de la",
    store: "Magazin online cu plăți și curieri: de la",
    contactCta: "Discută proiectul tău",
    contactHref: "/contact",
    pricesCta: "Pachete și prețuri",
    pricesHref: "/pachete",
    count: (n: number) => `${n} proiecte`,
    legend: "de unde a pornit → ce e azi",
    demo: "demo",
    wip: "în lucru",
    opens: "se deschide într-o filă nouă",
    conceptsText: "Machetele și studiile de stil stau separat, în galeria de concepte.",
    conceptsCta: "Vezi conceptele",
    conceptsHref: "/showcase",
  },
  en: {
    label: "Portfolio",
    h1a: "Live projects.",
    h1b: "Built by us.",
    lead: "Websites, online stores and web applications built by Reverb. Each one is on its own address: open it and check for yourself.",
    site: "Presentation website, up to 5 pages: from",
    store: "Online store with payments and couriers: from",
    contactCta: "Discuss your project",
    contactHref: "/en/contact",
    pricesCta: "Packages and prices",
    pricesHref: "/en/packages",
    count: (n: number) => `${n} projects`,
    legend: "where it started → what it is today",
    demo: "demo",
    wip: "in progress",
    opens: "opens in a new tab",
    conceptsText: "Mock-ups and style studies are kept apart, in the concepts gallery.",
    conceptsCta: "See the concepts",
    conceptsHref: "/en/showcase",
  },
} as const;

export default function PortfolioIndex({ lang, projects }: { lang: Lang; projects: LiveProject[] }) {
  const t = copy[lang];
  const pad = (i: number) => String(i + 1).padStart(2, "0");
  const site = offer("site-start", lang);
  const store = offer("magazin-start", lang);

  return (
    <div className="text-neutral-100 min-h-screen font-sans antialiased">
      <PageBackdrop />

      {/* Titlul */}
      <section className="relative z-10 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-6">{t.label}</div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
            <Linie>{t.h1a}</Linie>
            <br />
            <span className="text-neutral-400 font-light"><Linie>{t.h1b}</Linie></span>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
            {t.lead}
          </p>

          {/* Preț „de la” și termen */}
          {site && store && (
            <p className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-sm text-neutral-400 lg:flex-row">
              <span>
                {t.site} <span className="text-white">{site.price}</span> · {site.days}
              </span>
              <span>
                {t.store} <span className="text-white">{store.price}</span> · {store.days}
              </span>
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

      {/* Lista: un rând pe proiect, fără etichete repetate */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 md:pb-28">
        <div className="flex items-baseline justify-between gap-4 pb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
          <span>{t.count(projects.length)}</span>
          <span className="text-right">{t.legend}</span>
        </div>

        <ul className="border-t border-white/10">
          {projects.map((p, i) => {
            // Pe rând apare doar ce diferă de „e live”: demo sau în lucru.
            const mark = /lucru|progress/i.test(p.status) ? t.wip : /demo/i.test(p.status) ? t.demo : null;
            return (
              <li key={p.name} className="border-b border-white/10">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — ${t.opens}`}
                  className="group grid grid-cols-[2rem_minmax(0,1fr)_1.25rem] gap-x-4 gap-y-3 py-6 transition-colors hover:bg-white/[0.03] focus-visible:bg-white/[0.03] md:grid-cols-[2.5rem_minmax(0,0.8fr)_minmax(0,1.7fr)_1.25rem] md:gap-x-8 md:py-7"
                >
                  <span className="pt-1.5 font-mono text-[11px] text-neutral-500">{pad(i)}</span>

                  <span className="min-w-0">
                    <span className="block truncate text-lg font-medium tracking-tight text-white md:text-xl">{p.name}</span>
                    <span className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                      {p.kind ?? p.category}
                      {mark && (
                        <span className="inline-flex items-center gap-1.5 text-neutral-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          {mark}
                        </span>
                      )}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="mech-arrow order-none justify-self-end pt-1 text-base text-neutral-500 transition-colors group-hover:text-white md:order-last"
                  >
                    ↗
                  </span>

                  <span className="col-start-2 col-span-2 min-w-0 md:col-start-3 md:col-span-1 md:row-start-1">
                    <span className="block text-sm leading-relaxed text-neutral-300">{p.desc}</span>
                    {(p.journey || p.result) && (
                      <span className="mt-2 block text-[13px] leading-relaxed text-neutral-400">
                        {p.journey}
                        {p.journey && p.result && <span aria-hidden="true"> → </span>}
                        {p.result}
                      </span>
                    )}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Conceptele stau separat */}
        <p className="mt-10 flex flex-col gap-3 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <span>{t.conceptsText}</span>
          <Link
            href={t.conceptsHref}
            className="shrink-0 self-start rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all sm:self-auto"
          >
            {t.conceptsCta} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>
    </div>
  );
}
