/* eslint-disable @next/next/no-img-element */
// Lucrările reale arătate pe pagina de pachete, cu poză (Alin, 13 nov 2026; cerut de trei cititori fără context la rând:
// „nu scriu cuiva înainte să văd lucrări”). Pozele sunt capturi ale primei pagini, 800 × 500, în public/work/.
// Pozele și data lor sunt într-un singur loc, harta SHOTS din lib/liveProjects.ts (le face scripts/work_shots.py);
// numele vine tot de acolo. O lucrare fără poză nu apare aici.

import { shotOf } from "@/lib/liveProjects";

type Lucrare = { name: string; href: string; kind?: string };

export default function WorkShots({ items, lang = "ro" }: { items: Lucrare[]; lang?: "ro" | "en" }) {
  const cuPoza = items.flatMap((p) => {
    const s = shotOf(p.name);
    return s ? [{ ...p, src: s.src }] : [];
  });
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
            src={p.src}
            alt={lang === "en" ? `Home page of ${p.name}` : `Prima pagină a site-ului ${p.name}`}
            width={800}
            height={500}
            loading="lazy"
            decoding="async"
            className="block aspect-[16/10] w-full object-cover object-top"
          />
          {/* Numele se rupe pe două rânduri dacă nu încape (identifică lucrarea), săgeata nu iese din card. */}
          <span className="flex items-start justify-between gap-3 px-4 py-3 text-[13px] leading-snug font-mono text-neutral-200">
            <span className="min-w-0 [overflow-wrap:anywhere]">
              <span data-no-translate>{p.name}</span>
              {p.kind ? (
                <>
                  {" "}
                  <span className="text-neutral-500">·</span> {p.kind}
                </>
              ) : null}
            </span>
            <span aria-hidden="true" className="shrink-0 transition group-hover:translate-x-0.5">↗</span>
          </span>
        </a>
      ))}
    </div>
  );
}
