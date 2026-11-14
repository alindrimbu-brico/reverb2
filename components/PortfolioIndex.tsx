import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import WhoWeAre from "@/components/WhoWeAre";
import { STATUS_LABEL, type LiveProject } from "@/lib/liveProjects";
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

// Pagina ține doar date (Alin, 14 nov 2026: „portofoliu scurt… pure data”): două grupuri, după stare.
const copy = {
  ro: {
    h1: "Portofoliu.",
    site: "Site de prezentare, până la 5 pagini: de la",
    store: "Magazin online cu plăți și curieri: de la",
    contactCta: "Discută proiectul tău",
    contactHref: "/contact",
    pricesCta: "Pachete și prețuri",
    pricesHref: "/pachete",
    wipTitle: "Proiecte în desfășurare",
    opens: "se deschide într-o filă nouă",
    conceptsCta: "Galeria de concepte",
    conceptsHref: "/showcase",
  },
  en: {
    h1: "Portfolio.",
    site: "Presentation website, up to 5 pages: from",
    store: "Online store with payments and couriers: from",
    contactCta: "Discuss your project",
    contactHref: "/en/contact",
    pricesCta: "Packages and prices",
    pricesHref: "/en/packages",
    wipTitle: "Projects in progress",
    opens: "opens in a new tab",
    conceptsCta: "Concept gallery",
    conceptsHref: "/en/showcase",
  },
} as const;

export default function PortfolioIndex({ lang, projects }: { lang: Lang; projects: LiveProject[] }) {
  const t = copy[lang];
  const pad = (i: number) => String(i + 1).padStart(2, "0");
  const site = offer("site-start", lang);
  const store = offer("magazin-start", lang);
  const groups = [
    { title: STATUS_LABEL[lang].managed, dot: "bg-emerald-400", items: projects.filter((p) => p.state === "managed") },
    { title: t.wipTitle, dot: "bg-amber-400", items: projects.filter((p) => p.state === "in_progress") },
  ];

  return (
    <div className="text-neutral-100 min-h-screen font-sans antialiased">
      <PageBackdrop />

      {/* Titlul */}
      <section className="relative z-10 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
            <Linie>{t.h1}</Linie>
          </h1>
          <div className="mt-8">
            <WhoWeAre lang={lang} center />
          </div>

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

      {/* Două liste, după stare: un rând pe proiect */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 md:pb-28">
        {groups.map((g) => (
          <div key={g.title} className="mb-14 last:mb-0">
            <div className="flex items-center gap-2.5 pb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${g.dot}`} />
              <span>{g.title}</span>
              <span data-no-translate className="text-neutral-600">{g.items.length}</span>
            </div>

            <ul className="border-t border-white/10">
              {g.items.map((p, i) => (
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
                      <span className="mt-1 block text-xs text-neutral-500">{p.kind ?? p.category}</span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="mech-arrow order-none justify-self-end pt-1 text-base text-neutral-500 transition-colors group-hover:text-white md:order-last"
                    >
                      ↗
                    </span>

                    <span className="col-start-2 col-span-2 min-w-0 md:col-start-3 md:col-span-1 md:row-start-1">
                      <span className="block text-sm leading-relaxed text-neutral-300">{p.desc}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-10">
          <Link
            href={t.conceptsHref}
            className="inline-block rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
          >
            {t.conceptsCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
