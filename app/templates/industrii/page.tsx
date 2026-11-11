import type { Metadata } from "next";
import Link from "next/link";
import { categories, sectorOrder, type Sector } from "@/lib/templateCategories";
import PageBackdrop from "@/components/PageBackdrop";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/templates/industrii" },
  title: "Template-uri pe Industrii — 200+ Modele",
  description: "Template-uri de site personalizate pentru fiecare tip de business: florării, cabinete medicale, primării, SaaS, e-commerce și altele.",
};

const sectorColors: Record<Sector, string> = {
  "Servicii Locale":        "border border-white/10 bg-white/5 text-neutral-300",
  "Sănătate & Medical":     "border border-white/10 bg-white/5 text-neutral-300",
  "Educație & Instituții":  "border border-white/10 bg-white/5 text-neutral-300",
  "Turism & Ospitalitate":  "border border-white/10 bg-white/5 text-neutral-300",
  "Tech & Software":        "border border-white/10 bg-white/5 text-neutral-300",
  "E-Commerce":             "border border-white/10 bg-white/5 text-neutral-300",
  "Creativ & Media":        "border border-white/10 bg-white/5 text-neutral-300",
  "Industrie & Producție":  "border border-white/10 bg-white/5 text-neutral-300",
};

export default function IndustriiPage() {
  const grouped = sectorOrder.map((sector) => ({
    sector,
    items: categories.filter((c) => c.sector === sector),
  }));

  const total = categories.length * 4;

  return (
    <div className="text-white">
      <PageBackdrop />
      {/* Header */}
      <section className="border-b border-white/10 px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Reverb — Showcase</div>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Template-uri pe industrii
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400">
            <strong>{total}+ template-uri</strong> organizate în{" "}
            <strong>{categories.length} categorii</strong> de business. Fiecare categorie vine cu 4 variante vizuale distincte — light, dark, bold și minimal. Alege industria, alege stilul.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {sectorOrder.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition hover:opacity-80 ${sectorColors[s]}`}
              >
                {s}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Link href="/templates" className="text-sm text-neutral-400 transition hover:text-white">
              ← Stiluri generale (35 template-uri)
            </Link>
            <Link href="/" className="text-sm text-neutral-400 transition hover:text-white">
              ← Înapoi la site
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      {grouped.map(({ sector, items }) => (
        <section
          key={sector}
          id={sector.toLowerCase().replace(/[^a-z]/g, "-")}
          className="border-b border-white/10 px-6 py-14 lg:px-10 lg:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-baseline gap-4">
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">{sector}</h2>
              <span className="text-sm text-neutral-500">{items.length} categorii · {items.length * 4} template-uri</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {items.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/templates/industrii/${cat.slug}`}
                  className="group flex flex-col rounded-[20px] border border-white/10 bg-neutral-900/40 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40"
                >
                  {/* Color swatch */}
                  <div
                    className="mb-4 flex h-16 w-full items-center justify-center rounded-xl text-3xl"
                    style={{ background: cat.bgLight }}
                  >
                    {cat.emoji}
                  </div>
                  <div className="flex-1">
                    <div className={`mb-1 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${sectorColors[sector]}`}>
                      {cat.sector}
                    </div>
                    <h3 className="mt-1.5 text-sm font-semibold text-white">{cat.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-neutral-400 line-clamp-2">{cat.tagline}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {["L","D","B","M"].map((v, i) => (
                        <div
                          key={v}
                          className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white"
                          style={{ background: i === 0 ? cat.accent : i === 1 ? cat.bgDark : i === 2 ? cat.accent + "cc" : "#e5e7eb", color: i === 3 ? "#374151" : "white" }}
                          title={["Light","Dark","Bold","Minimal"][i]}
                        >
                          {v}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500 transition group-hover:text-white">
                      4 variante →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <div className="px-6 py-16 text-center lg:px-10">
        <p className="text-sm text-neutral-400">Nu găsești industria ta?</p>
        <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em]">Facem un template personalizat.</h3>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-lg">
            Discutăm proiectul tău
          </Link>
          <Link href="/templates" className="text-sm text-neutral-400 transition hover:text-white">
            ← Stiluri generale
          </Link>
        </div>
      </div>
    </div>
  );
}
