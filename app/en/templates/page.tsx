import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Templates — Choose Your Visual Direction",
  description: "35+ design variations for your site. Each with a different personality — choose the direction that represents you.",
};

const templates = [
  { id: "noir",       label: "01 Noir" },
  { id: "arctic",     label: "02 Arctic" },
  { id: "padure",     label: "03 Forest" },
  { id: "teracota",   label: "04 Terracotta" },
  { id: "ocean",      label: "05 Ocean" },
  { id: "violet",     label: "06 Violet" },
  { id: "sunset",     label: "07 Sunset" },
  { id: "sage",       label: "08 Sage" },
  { id: "slate",      label: "09 Slate" },
  { id: "neon",       label: "10 Neon" },
  { id: "kinetic",    label: "11 Kinetic ◈" },
  { id: "glitch",     label: "12 Glitch ▓" },
  { id: "orbital",    label: "13 Orbital ⊙" },
  { id: "morph",      label: "14 Morph ◉" },
  { id: "drift",      label: "15 Drift ⋯" },
  { id: "boutique",   label: "16 Boutique 👗" },
  { id: "fresh",      label: "17 Fresh 🌿" },
  { id: "techstore",  label: "18 Tech Store ⚡" },
  { id: "artisan",    label: "19 Artisan 🏺" },
  { id: "flash",      label: "20 Flash Sale 🔥" },
  { id: "minishop",   label: "21 Minimal Shop" },
  { id: "nightmkt",   label: "22 Night Market" },
  { id: "kidstore",   label: "23 Kids Store 🌈" },
  { id: "luxe",       label: "24 Luxe ✦" },
  { id: "sport",      label: "25 Sport ⚡" },
  { id: "typewriter", label: "26 Typewriter |" },
  { id: "wipe",       label: "27 Wipe →" },
  { id: "stagger",    label: "28 Stagger ↑" },
  { id: "gradwalk",   label: "29 Grad Walk ∿" },
  { id: "elastic",    label: "30 Elastic ⌇" },
  { id: "shimmer",    label: "31 Shimmer ✦" },
  { id: "split",      label: "32 Split ◫" },
  { id: "spotlight",  label: "33 Spotlight ◎" },
  { id: "ticker2",    label: "34 Ticker ≡" },
  { id: "pulse",      label: "35 Pulse ♡" },
];

export default function TemplatesPage() {
  return (
    <div>
      {/* ── Navigation ─────────────────────────────────────────────── */}
      <div className="sticky top-[65px] z-40 border-b border-[#1d2731]/10 bg-[#f5f1ea]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-3 lg:px-10">
          {templates.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="shrink-0 rounded-full border border-[#1d2731]/10 px-4 py-1.5 text-xs font-medium text-[#1d2731]/65 transition hover:border-[#1d2731]/30 hover:text-[#1d2731]"
            >
              {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Intro ──────────────────────────────────────────────────── */}
      <div className="bg-[#f5f1ea] px-6 py-16 text-center lg:px-10 lg:py-20">
        <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/40">Reverb — Showcase</div>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-[#1d2731] md:text-6xl">
          35+ Design Directions
        </h1>
        <p className="mt-5 mx-auto max-w-xl text-base leading-7 text-[#1d2731]/60">
          Each variant is a different visual universe. Same content, different personality. Tell us which represents you — or what combination of elements feels right.
        </p>
      </div>

      {/* Templates Grid - Simplified */}
      <div className="bg-[#f5f1ea] px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <a
                key={t.id}
                href={`/showcase/${t.id}`}
                className="group relative overflow-hidden rounded-2xl border border-[#1d2731]/10 bg-white p-12 text-center transition hover:border-[#1d2731]/30 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1d2731]/5 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="text-2xl font-black text-[#1d2731] group-hover:-translate-y-1 transition">{t.label}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Section ────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#1d2731]/10 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <h2 className="text-3xl font-medium tracking-tight text-[#1d2731] md:text-4xl">Which direction speaks to you?</h2>
          <p className="mt-4 text-base leading-7 text-[#1d2731]/60">
            Explore each template. Combine elements. Tell us your vision — we'll build it.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1d2731] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#f5f1ea] transition hover:-translate-y-1 hover:shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
