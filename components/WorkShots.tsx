/* eslint-disable @next/next/no-img-element */
// Lucrările reale arătate pe pagina de pachete, cu poză (Alin, 13 nov 2026; cerut de trei cititori fără context la rând:
// „nu scriu cuiva înainte să văd lucrări”). Pozele sunt capturi ale primei pagini, 800 × 500, în public/work/.
// O lucrare nouă: poza se face la aceeași mărime și se adaugă în POZE; numele vine din lib/liveProjects.ts.

const POZE: Record<string, string> = {
  "Bricolando.ro": "/work/bricolando.jpg",
  "RaftPlin.ro": "/work/raftplin.jpg",
  "Kalki.nexus": "/work/kalki-nexus.jpg",
};

type Lucrare = { name: string; href: string; kind?: string };

export default function WorkShots({ items, lang = "ro" }: { items: Lucrare[]; lang?: "ro" | "en" }) {
  const cuPoza = items.filter((p) => POZE[p.name]);
  if (!cuPoza.length) return null;
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-3">
      {cuPoza.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={lang === "en" ? `${p.name}: open the live site` : `${p.name}: deschide site-ul`}
          className="group block overflow-hidden rounded-2xl border border-white/15 bg-neutral-900/40 transition hover:border-white/40"
        >
          <img
            src={POZE[p.name]}
            alt={lang === "en" ? `Home page of ${p.name}` : `Prima pagină a site-ului ${p.name}`}
            width={800}
            height={500}
            loading="lazy"
            decoding="async"
            className="block aspect-[16/10] w-full object-cover object-top"
          />
          <span className="flex items-center justify-between gap-3 px-4 py-3 text-xs font-mono text-neutral-200">
            <span>
              {p.name}
              {p.kind ? (
                <>
                  {" "}
                  <span className="text-neutral-500">·</span> {p.kind}
                </>
              ) : null}
            </span>
            <span aria-hidden="true" className="transition group-hover:translate-x-0.5">↗</span>
          </span>
        </a>
      ))}
    </div>
  );
}
