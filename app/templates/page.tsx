import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Templates — Alege direcția vizuală",
  description: "10 variațiuni de design pentru site-ul tău. Fiecare cu o personalitate diferită — alege direcția care te reprezintă.",
};

const templates = [
  { id: "noir",       label: "01 Noir" },
  { id: "arctic",     label: "02 Arctic" },
  { id: "padure",     label: "03 Pădure" },
  { id: "teracota",   label: "04 Teracotă" },
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
          10 direcții de design
        </h1>
        <p className="mt-5 mx-auto max-w-xl text-base leading-7 text-[#1d2731]/60">
          Fiecare variantă e un univers vizual diferit. Același conținut, altă personalitate. Spune-ne care te reprezintă — sau ce combinație de elemente ți se pare potrivită.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          01 — NOIR  (negru / auriu / colțuri ascuțite / luxury)
      ══════════════════════════════════════════════════════════════ */}
      <section id="noir" className="bg-[#080808] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a444]/70">01 — Noir</div>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.04em] md:text-7xl">
                Prezență digitală<br />
                <span className="text-[#c9a444]">care impune.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-8 text-white/50">
                Website, campanii și strategie digitală pentru afaceri care refuză să treacă neobservate. Execuție precisă. Zero compromisuri.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center border border-[#c9a444] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#c9a444] transition hover:bg-[#c9a444] hover:text-black">
                  Hai să vorbim
                </Link>
                <Link href="/servicii" className="text-sm text-white/40 transition hover:text-white">
                  Vezi servicii →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { t: "Website & Branding", d: "Identitate vizuală și prezență online care comunică autoritate." },
                { t: "Campanii Plătite", d: "Google Ads și Meta administrate cu focus pe ROI, nu pe reach." },
                { t: "Magazine Online", d: "Platforme de e-commerce optimizate pentru conversie maximă." },
              ].map((s) => (
                <div key={s.t} className="border border-white/8 p-6">
                  <div className="mb-2 text-sm font-semibold text-[#c9a444]">{s.t}</div>
                  <div className="text-sm leading-6 text-white/45">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-white/8 pt-10 flex items-center justify-between">
            <div className="text-xs tracking-[0.25em] text-white/20 uppercase">Prețuri fixe · 50% avans · Livrare garantată</div>
            <div className="text-2xl font-bold text-[#c9a444]">de la €790</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 — ARCTIC  (alb pur / albastru cobalt / ultra-minimal)
      ══════════════════════════════════════════════════════════════ */}
      <section id="arctic" className="bg-white text-[#0a0f1e]">
        <div className="mx-auto max-w-6xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-16 text-xs uppercase tracking-[0.4em] text-[#2563eb]/50">02 — Arctic</div>
          <h2 className="max-w-3xl text-6xl font-light leading-[1.0] tracking-[-0.04em] md:text-8xl">
            Mai puțin.<br />
            <span className="font-semibold text-[#2563eb]">Mai mult efect.</span>
          </h2>
          <div className="mt-16 grid gap-px bg-[#e8edf5] md:grid-cols-3">
            {[
              { t: "Prezență Online", p: "€990", d: "Site + structură + SEO de bază. Gata în 7–14 zile." },
              { t: "Clienți Locali", p: "€1.790", d: "SEO local + Ads + tracking complet. Telefonul sună." },
              { t: "AI Creative Sprint", p: "€790", d: "Conținut, copy și vizuale generate și livrate în 7 zile." },
            ].map((s) => (
              <div key={s.t} className="bg-white p-8">
                <div className="mb-6 text-3xl font-semibold text-[#2563eb]">{s.p}</div>
                <div className="mb-3 text-base font-semibold text-[#0a0f1e]">{s.t}</div>
                <div className="text-sm leading-6 text-[#0a0f1e]/50">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-6">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#2563eb] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#1d4ed8]">
              Programează o discuție
            </Link>
            <div className="text-sm text-[#0a0f1e]/35">Răspundem în max. 24h · Fără obligații</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 — PĂDURE  (verde închis / cremă / forme organice)
      ══════════════════════════════════════════════════════════════ */}
      <section id="padure" className="bg-[#0d2b1d] text-[#f0e9d6]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#4ade80]/50">03 — Pădure</div>
          <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl text-5xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Creștem business-uri<br />cu rădăcini adânci.
            </h2>
            <p className="max-w-sm text-sm leading-7 text-[#f0e9d6]/55 lg:text-right">
              Strategie organică, campanii gândite pe termen lung. Rezultate care nu dispar când oprești bugetul.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Prezență Online", d: "Website construit ca să dureze. Structură clară, conversie naturală.", tag: "7–14 zile" },
              { t: "SEO & Conținut", d: "Trafic organic care crește lunar. Conținut relevant, nu keyword-stuffing.", tag: "Ongoing" },
              { t: "Magazine Online", d: "E-commerce cu experiență de cumpărare curată și checkout optimizat.", tag: "14–30 zile" },
            ].map((s) => (
              <div key={s.t} className="rounded-[32px] border border-[#4ade80]/12 bg-[#163826] p-8">
                <div className="mb-4 inline-block rounded-full border border-[#4ade80]/25 px-3 py-1 text-xs text-[#4ade80]/70">{s.tag}</div>
                <div className="mb-3 text-lg font-semibold text-[#f0e9d6]">{s.t}</div>
                <div className="text-sm leading-7 text-[#f0e9d6]/50">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#4ade80] px-8 py-4 text-sm font-semibold text-[#0d2b1d] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4ade80]/20">
              Să creștem împreună
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          04 — TERACOTĂ  (cald / bold / tipografie dominantă)
      ══════════════════════════════════════════════════════════════ */}
      <section id="teracota" className="bg-[#fdf4ec] text-[#1a0800]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c44b2b]/50">04 — Teracotă</div>
          <h2 className="max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl lg:text-[96px]">
            DIGITAL<br />
            <span className="text-[#c44b2b]">FĂRĂ</span><br />
            SCUZE.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Website", p: "€990", d: "Prezență online completă, livrată în 2 săptămâni." },
              { t: "Ads Local", p: "€1.790", d: "Campanii care aduc clienți locali în mod constant." },
              { t: "E-commerce", p: "de la €2.490", d: "Magazin online optimizat pentru vânzări." },
              { t: "AI Sprint", p: "€790", d: "Conținut complet generat și livrat în 7 zile." },
            ].map((s) => (
              <div key={s.t} className="border-t-2 border-[#c44b2b] pt-5">
                <div className="mb-1 text-2xl font-black text-[#c44b2b]">{s.p}</div>
                <div className="mb-3 text-base font-bold uppercase tracking-wider text-[#1a0800]">{s.t}</div>
                <div className="text-sm leading-6 text-[#1a0800]/55">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex items-center gap-5">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#c44b2b] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#a83b22]">
              Vorbim acum
            </Link>
            <div className="text-sm font-medium text-[#1a0800]/35 uppercase tracking-wider">Prețuri fixe. Fără surprize.</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05 — OCEAN  (navy adânc / aqua / linii moderne)
      ══════════════════════════════════════════════════════════════ */}
      <section id="ocean" className="bg-[#071525] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#06b6d4]/50">05 — Ocean</div>
          <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <h2 className="text-5xl font-semibold leading-[1.0] tracking-[-0.04em] md:text-7xl">
                Execuție digitală<br />
                <span className="bg-gradient-to-r from-[#06b6d4] to-[#38bdf8] bg-clip-text text-transparent">
                  la adâncime.
                </span>
              </h2>
              <p className="mt-8 max-w-lg text-base leading-8 text-white/50">
                Website, marketing și magazine online pentru afaceri care vor să domine piața locală și să crească online cu strategie, nu cu noroc.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-[#06b6d4] px-7 py-3.5 text-sm font-semibold text-[#071525] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)]">
                  Programează un call
                </Link>
                <Link href="/pachete" className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-7 py-3.5 text-sm text-white/60 transition hover:border-white/25 hover:text-white">
                  Vezi pachete →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid gap-3">
              {[
                { t: "Prezență Online", p: "€990" },
                { t: "Clienți Locali", p: "€1.790" },
                { t: "AI Creative Sprint", p: "€790" },
              ].map((s) => (
                <div key={s.t} className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/4 px-6 py-4 backdrop-blur">
                  <span className="text-sm font-medium text-white/80">{s.t}</span>
                  <span className="text-base font-bold text-[#06b6d4]">{s.p}</span>
                </div>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-[#06b6d4]/20 to-[#0284c7]/10 border border-[#06b6d4]/20 px-6 py-4">
                <div className="text-xs text-[#06b6d4]/70 mb-1">Contract minim promovare</div>
                <div className="text-sm font-semibold text-white">3 luni · de la €390/lună</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          06 — VIOLET  (mov adânc / lavandă / glassmorphism)
      ══════════════════════════════════════════════════════════════ */}
      <section id="violet" className="bg-[#130a2a] text-white" style={{ backgroundImage: "radial-gradient(circle at 70% 20%, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(99,102,241,0.10) 0%, transparent 40%)" }}>
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#a78bfa]/50">06 — Violet</div>
          <h2 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Strategia digitală<br />
            <span className="text-[#a78bfa]">din viitor,</span><br />
            azi.
          </h2>
          <p className="mt-8 max-w-lg text-base leading-8 text-white/50">
            Combinăm AI, design și marketing pentru a construi sisteme digitale care lucrează pentru tine 24/7.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { t: "Website Inteligent", d: "Design modern + AI integrat pentru experiență personalizată.", icon: "◈" },
              { t: "Promovare Automată", d: "Campanii optimizate cu AI, raportare transparentă lunar.", icon: "◎" },
              { t: "Conținut AI", d: "Texte, vizuale și strategie generate cu AI și rafinate de oameni.", icon: "◐" },
            ].map((s) => (
              <div key={s.t} className="rounded-3xl border border-white/8 bg-white/5 p-7 backdrop-blur-sm">
                <div className="mb-5 text-3xl text-[#a78bfa]">{s.icon}</div>
                <div className="mb-3 text-base font-semibold text-white">{s.t}</div>
                <div className="text-sm leading-7 text-white/45">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#8b5cf6] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(139,92,246,0.35)]">
              Vorbește cu echipa
            </Link>
            <div className="text-sm text-white/30">de la €790 · prețuri fixe · 50% avans</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          07 — SUNSET  (gradient portocaliu-roșu / energic / bold)
      ══════════════════════════════════════════════════════════════ */}
      <section id="sunset" className="text-white" style={{ background: "linear-gradient(135deg, #c84b11 0%, #e8672a 35%, #f5a623 100%)" }}>
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">07 — Sunset</div>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-6xl font-extrabold leading-[0.9] tracking-[-0.04em] md:text-8xl">
                Aprinde-ți<br />afacerea<br />online.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-8 text-white/70">
                Website, ads și conținut — totul la pachet, cu prețuri clare și livrare garantată. Pornești azi, rezultatele vin în 30 de zile.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#c84b11] transition hover:shadow-xl">
                  Start acum
                </Link>
                <Link href="/pachete" className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                  Vezi prețuri
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Website", p: "€990", sub: "7–14 zile" },
                { t: "Ads Local", p: "€1.790", sub: "30 zile setup" },
                { t: "E-commerce", p: "€2.490+", sub: "14–30 zile" },
                { t: "AI Sprint", p: "€790", sub: "7 zile" },
              ].map((s) => (
                <div key={s.t} className="rounded-3xl bg-white/15 p-6 backdrop-blur-sm">
                  <div className="mb-1 text-xl font-bold text-white">{s.p}</div>
                  <div className="mb-1 text-sm font-semibold text-white/80">{s.t}</div>
                  <div className="text-xs text-white/50">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          08 — SAGE  (verde salvie / natural / calm)
      ══════════════════════════════════════════════════════════════ */}
      <section id="sage" className="bg-[#eef3ed] text-[#1a2b1a]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#4a7c59]/50">08 — Sage</div>
          <div className="mb-14">
            <h2 className="max-w-2xl text-5xl font-medium leading-[1.1] tracking-[-0.03em] md:text-6xl">
              Digital cu<br />bun-simț.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#1a2b1a]/55">
              Construim prezențe online oneste, care comunică valoarea reală a afacerii tale. Fără hiperbole. Fără trucuri. Rezultate autentice.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { t: "Prezență Online", d: "Un site care reflectă cu acuratețe ce face afacerea ta și de ce contează.", p: "€990" },
              { t: "Promovare Continuă", d: "Campanii lunare care se optimizează constant, cu raport transparent.", p: "de la €390/lună" },
              { t: "Magazin Digital", d: "E-commerce curat, navigare intuitivă și checkout fără fricțiune.", p: "de la €2.490" },
            ].map((s) => (
              <div key={s.t} className="rounded-[32px] bg-white p-8 shadow-sm">
                <div className="mb-5 inline-block rounded-full bg-[#eef3ed] px-4 py-1.5 text-sm font-semibold text-[#4a7c59]">{s.p}</div>
                <div className="mb-3 text-lg font-semibold text-[#1a2b1a]">{s.t}</div>
                <div className="text-sm leading-7 text-[#1a2b1a]/55">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#4a7c59] px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4a7c59]/20">
              Hai să vorbim
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          09 — SLATE  (gri corporate / albastru / curat)
      ══════════════════════════════════════════════════════════════ */}
      <section id="slate" className="bg-[#f1f5f9] text-[#0f172a]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#3b82f6]/50">09 — Slate</div>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Execuție digitală<br />
                măsurabilă.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#0f172a]/55">
                Livrăm website-uri, campanii și magazine online cu KPI-uri clare, raportare transparentă și prețuri fixe agreate dinainte.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#3b82f6] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2563eb]">
                  Solicită o ofertă
                </Link>
                <Link href="/portofoliu" className="inline-flex items-center justify-center rounded-xl border border-[#0f172a]/15 bg-white px-7 py-3.5 text-sm font-medium text-[#0f172a]/70 transition hover:border-[#0f172a]/30">
                  Portofoliu
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-5">
                {[
                  { v: "3.2×", l: "conversie medie" },
                  { v: "44%", l: "reducere cost/lead" },
                  { v: "90 zile", l: "până la rezultate" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-[#3b82f6]">{s.v}</div>
                    <div className="mt-1 text-xs text-[#0f172a]/45">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { t: "Prezență Online", p: "€990", d: "Website complet · 7–14 zile", highlight: false },
                { t: "Clienți Locali", p: "€1.790 + €490/lună", d: "SEO + Ads + tracking · 30 zile setup", highlight: true },
                { t: "Magazin Digital", p: "de la €2.490", d: "E-commerce complet · 14–30 zile", highlight: false },
                { t: "AI Creative Sprint", p: "€790", d: "Conținut AI · 7 zile", highlight: false },
              ].map((s) => (
                <div
                  key={s.t}
                  className={`flex items-center justify-between rounded-2xl border p-5 ${
                    s.highlight
                      ? "border-[#3b82f6] bg-[#3b82f6] text-white"
                      : "border-[#0f172a]/8 bg-white"
                  }`}
                >
                  <div>
                    <div className={`text-sm font-semibold ${s.highlight ? "text-white" : "text-[#0f172a]"}`}>{s.t}</div>
                    <div className={`text-xs mt-0.5 ${s.highlight ? "text-white/60" : "text-[#0f172a]/45"}`}>{s.d}</div>
                  </div>
                  <div className={`text-sm font-bold shrink-0 ml-4 ${s.highlight ? "text-white" : "text-[#3b82f6]"}`}>{s.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          10 — NEON  (negru profund / verde neon / tech/startup)
      ══════════════════════════════════════════════════════════════ */}
      <section id="neon" className="bg-[#040810] text-white" style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.07) 0%, transparent 60%)" }}>
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#00ff88]/40">10 — Neon</div>
          <h2 className="max-w-4xl font-mono text-5xl font-bold leading-[0.95] tracking-[-0.02em] md:text-7xl">
            DIGITAL<br />
            <span className="text-[#00ff88]">PERFORMANCE</span><br />
            SYSTEM
          </h2>
          <p className="mt-8 max-w-lg font-mono text-sm leading-8 text-white/40">
            {">"} Website · SEO · Ads · E-commerce · AI<br />
            {">"} Prețuri fixe · Livrare garantată · ROI măsurabil
          </p>
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "WEBSITE", p: "€990", sub: "7–14 ZILE" },
              { t: "ADS LOCAL", p: "€1.790", sub: "30 ZILE" },
              { t: "E-COMM", p: "€2.490+", sub: "14–30 ZILE" },
              { t: "AI SPRINT", p: "€790", sub: "7 ZILE" },
            ].map((s) => (
              <div key={s.t} className="border border-[#00ff88]/15 p-6 font-mono">
                <div className="mb-3 text-xs text-[#00ff88]/50">{s.sub}</div>
                <div className="mb-2 text-2xl font-bold text-[#00ff88]">{s.p}</div>
                <div className="text-sm text-white/60">{s.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex items-center justify-center border border-[#00ff88] bg-[#00ff88] px-8 py-4 font-mono text-sm font-bold text-[#040810] transition hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]">
              {">"} INIT CONTACT
            </Link>
            <div className="font-mono text-xs text-white/25">50% AVANS · 50% LIVRARE · FĂRĂ SURPRIZE</div>
          </div>
        </div>
      </section>

      {/* ── Motion keyframes ───────────────────────────────────────── */}
      <style>{`
        @keyframes marquee      { from { transform: translateX(0) }       to { transform: translateX(-50%) } }
        @keyframes marquee-rev  { from { transform: translateX(-50%) }    to { transform: translateX(0) } }
        @keyframes spin-slow    { from { transform: rotate(0deg) }        to { transform: rotate(360deg) } }
        @keyframes spin-rev     { from { transform: rotate(0deg) }        to { transform: rotate(-360deg) } }
        @keyframes spin-badge   { from { transform: rotate(0deg) }        to { transform: rotate(360deg) } }
        @keyframes morph-blob {
          0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25%     { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50%     { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
          75%     { border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%; }
        }
        @keyframes float-a { 0%,100% { transform: translateY(0px) }    50% { transform: translateY(-18px) } }
        @keyframes float-b { 0%,100% { transform: translateY(0px) }    50% { transform: translateY(-12px) } }
        @keyframes float-c { 0%,100% { transform: translateY(0px) }    50% { transform: translateY(-24px) } }
        @keyframes glitch-1 {
          0%,100% { clip-path: inset(0 0 95% 0);   transform: translate(-4px, 0) skew(-1deg); }
          20%     { clip-path: inset(30% 0 50% 0);  transform: translate( 4px, 0) skew(1deg); }
          40%     { clip-path: inset(60% 0 20% 0);  transform: translate(-4px, 0) skew(-1deg); }
          60%     { clip-path: inset(10% 0 80% 0);  transform: translate( 4px, 0) skew(1deg); }
          80%     { clip-path: inset(75% 0 5% 0);   transform: translate(-4px, 0) skew(-1deg); }
        }
        @keyframes glitch-2 {
          0%,100% { clip-path: inset(80% 0 5% 0);  transform: translate( 4px, 0) skew(1deg); }
          20%     { clip-path: inset(10% 0 75% 0);  transform: translate(-4px, 0) skew(-1deg); }
          40%     { clip-path: inset(50% 0 30% 0);  transform: translate( 4px, 0) skew(1deg); }
          60%     { clip-path: inset(20% 0 60% 0);  transform: translate(-4px, 0) skew(-1deg); }
          80%     { clip-path: inset(5% 0 90% 0);   transform: translate( 4px, 0) skew(1deg); }
        }
        @keyframes blink        { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes pulse-ring   { 0% { transform:scale(1); opacity:.8 } 100% { transform:scale(2); opacity:0 } }
        @keyframes scanlines {
          0%   { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }
        @keyframes grad-shift {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        @keyframes typewriter    { from { width: 0 } to { width: 100% } }
        @keyframes caret         { 0%,100% { border-color: currentColor } 50% { border-color: transparent } }
        @keyframes wipe-in       { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0% 0 0) } }
        @keyframes slide-up      { from { transform: translateY(50px); opacity:0 } to { transform: translateY(0); opacity:1 } }
        @keyframes slide-left    { from { transform: translateX(-80px); opacity:0 } to { transform: translateX(0); opacity:1 } }
        @keyframes slide-right   { from { transform: translateX(80px); opacity:0 } to { transform: translateX(0); opacity:1 } }
        @keyframes elastic-pop {
          0%   { transform: scale(0);   opacity:0 }
          55%  { transform: scale(1.15) }
          75%  { transform: scale(0.94) }
          90%  { transform: scale(1.04) }
          100% { transform: scale(1);   opacity:1 }
        }
        @keyframes shimmer-scan  { from { background-position: -300% center } to { background-position: 300% center } }
        @keyframes grad-walk     { 0% { background-position:0% 50% } 50% { background-position:100% 50% } 100% { background-position:0% 50% } }
        @keyframes spotlight-move {
          0%,100% { background-position: 20% 50% }
          50%     { background-position: 80% 50% }
        }
        @keyframes pulse-beat    { 0%,100% { transform: scale(1); opacity:1 } 50% { transform: scale(1.08); opacity:.85 } }
        @keyframes pulse-beat2   { 0%,100% { transform: scale(1); opacity:.7 } 50% { transform: scale(1.12); opacity:.4 } }
        @keyframes ticker2       { from { transform: translateY(0) } to { transform: translateY(-50%) } }
        @keyframes flash-badge   { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:.7; transform:scale(1.05) } }
        @keyframes diag-in       { from { clip-path: polygon(0 0,0 0,0 100%,0 100%) } to { clip-path: polygon(0 0,100% 0,100% 100%,0 100%) } }
        @keyframes bounce-in     { 0% { transform:translateY(-30px);opacity:0 } 60% { transform:translateY(6px) } 80% { transform:translateY(-3px) } 100% { transform:translateY(0);opacity:1 } }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          11 — KINETIC  (marquee benzi + badge rotativ + mecanism)
      ══════════════════════════════════════════════════════════════ */}
      <section id="kinetic" className="overflow-hidden bg-[#0c0c0c] text-white">
        {/* Marquee band 1 */}
        <div className="border-y border-white/8 py-3 overflow-hidden">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: "marquee 18s linear infinite" }}>
            {Array(4).fill(null).map((_, i) => (
              <span key={i} className="flex shrink-0 items-center gap-8 px-8 text-xs uppercase tracking-[0.3em] text-white/25">
                <span>Website</span><span className="text-[#f5e642]">✦</span>
                <span>SEO Local</span><span className="text-[#f5e642]">✦</span>
                <span>Google Ads</span><span className="text-[#f5e642]">✦</span>
                <span>E-commerce</span><span className="text-[#f5e642]">✦</span>
                <span>AI Content</span><span className="text-[#f5e642]">✦</span>
                <span>Branding</span><span className="text-[#f5e642]">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-8 py-20 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl">
                EXECUȚIE<br />
                <span className="text-[#f5e642]">DIGITALĂ</span><br />
                ACUM.
              </h2>
              <p className="mt-8 max-w-md text-sm leading-8 text-white/45">
                Website, campanii și magazine online livrate la termen, cu prețuri fixe și rezultate măsurabile.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-[#f5e642] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[#f5e642] transition hover:bg-[#f5e642] hover:text-black">
                  Start →
                </Link>
                <span className="text-xs text-white/25 uppercase tracking-widest">de la €790</span>
              </div>
            </div>

            {/* Rotating badge */}
            <div className="relative flex items-center justify-center" style={{ height: "320px" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="h-64 w-64 rounded-full border border-dashed border-white/10"
                  style={{ animation: "spin-slow 30s linear infinite" }}
                />
                <div
                  className="absolute h-48 w-48 rounded-full border border-dashed border-[#f5e642]/20"
                  style={{ animation: "spin-rev 20s linear infinite" }}
                />
              </div>
              <div
                className="relative h-44 w-44 rounded-full border-2 border-[#f5e642]"
                style={{ animation: "spin-badge 12s linear infinite" }}
              >
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <path id="circle-text" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
                  <text className="text-[10px]" fill="#f5e642" fontSize="11" letterSpacing="5.5">
                    <textPath href="#circle-text">REVERB.RO · DIGITAL MARKETING · WEBSITE · ADS ·</textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute text-center">
                <div className="text-3xl font-black text-white">€790</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">de la</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee band 2 — reversed */}
        <div className="border-t border-white/8 py-3 overflow-hidden">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: "marquee-rev 22s linear infinite" }}>
            {Array(4).fill(null).map((_, i) => (
              <span key={i} className="flex shrink-0 items-center gap-8 px-8 text-xs uppercase tracking-[0.3em] text-white/20">
                <span className="text-[#f5e642]">€990</span><span>·</span>
                <span className="text-[#f5e642]">€1.790</span><span>·</span>
                <span className="text-[#f5e642]">€2.490+</span><span>·</span>
                <span className="text-[#f5e642]">€790</span><span>·</span>
                <span className="text-[#f5e642]">€390/lună</span><span>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-2 border-t border-white/8 md:grid-cols-4">
          {[
            { t: "Website", p: "€990", d: "7–14 zile" },
            { t: "Ads Local", p: "€1.790", d: "30 zile" },
            { t: "E-commerce", p: "€2.490+", d: "14–30 zile" },
            { t: "AI Sprint", p: "€790", d: "7 zile" },
          ].map((s, i) => (
            <div key={s.t} className={`border-r border-white/8 p-8 last:border-r-0 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-white/25">{s.d}</div>
              <div className="text-xl font-bold text-[#f5e642]">{s.p}</div>
              <div className="mt-1 text-sm text-white/60">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          12 — GLITCH  (distorsiune digitală / scanlines / pâlpâire)
      ══════════════════════════════════════════════════════════════ */}
      <section id="glitch" className="relative overflow-hidden bg-[#050505] text-white">
        {/* Scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
            animation: "scanlines 8s linear infinite",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[#00ffff]/40">
            12 — Glitch
            <span className="ml-2 inline-block" style={{ animation: "blink 1.1s step-end infinite" }}>█</span>
          </div>

          {/* Glitch headline */}
          <div className="relative mb-12 inline-block">
            <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-[96px]">
              SISTEM<br />DIGITAL<br />
              <span className="text-[#00ffff]">ACTIV.</span>
            </h2>
            {/* Glitch layer 1 */}
            <div
              className="pointer-events-none absolute inset-0 text-6xl font-black leading-[0.9] tracking-[-0.04em] text-[#ff00ff] md:text-8xl lg:text-[96px]"
              style={{ animation: "glitch-1 4s steps(1) infinite", opacity: 0.7 }}
              aria-hidden
            >
              SISTEM<br />DIGITAL<br />
              <span className="text-[#ff00ff]">ACTIV.</span>
            </div>
            {/* Glitch layer 2 */}
            <div
              className="pointer-events-none absolute inset-0 text-6xl font-black leading-[0.9] tracking-[-0.04em] text-[#00ffff] md:text-8xl lg:text-[96px]"
              style={{ animation: "glitch-2 4s steps(1) infinite", opacity: 0.5 }}
              aria-hidden
            >
              SISTEM<br />DIGITAL<br />
              <span className="text-[#00ffff]">ACTIV.</span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "> WEBSITE_INIT", p: "€990", d: "Construiește și lansează o prezență digitală funcțională." },
              { t: "> ADS_LOCAL.EXE", p: "€1.790", d: "Activează campanii de conversie pentru clienți locali." },
              { t: "> AI_SPRINT.RUN", p: "€790", d: "Generează conținut complet în 7 zile cu AI supervizat." },
            ].map((s) => (
              <div key={s.t} className="border border-[#00ffff]/15 p-6 font-mono">
                <div className="mb-3 text-xs text-[#00ffff]/60">{s.t}</div>
                <div className="mb-2 text-2xl font-bold text-white">{s.p}</div>
                <div className="text-xs leading-6 text-white/40">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Link href="/contact" className="inline-flex items-center gap-2 border border-[#00ffff] px-8 py-4 font-mono text-sm text-[#00ffff] transition hover:bg-[#00ffff] hover:text-black">
              CONNECT()
              <span style={{ animation: "blink 0.8s step-end infinite" }}>_</span>
            </Link>
            <div className="font-mono text-xs text-white/20">STATUS: ONLINE · LATENCY: &lt;24H</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          13 — ORBITAL  (inele concentrice rotative / sci-fi)
      ══════════════════════════════════════════════════════════════ */}
      <section id="orbital" className="relative overflow-hidden bg-[#03080f] text-white">
        {/* Orbital rings — decorative */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-0 opacity-30 lg:pr-8">
          <div className="relative" style={{ width: "500px", height: "500px" }}>
            {[500, 400, 300, 200].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border border-[#00c8b8]/30"
                style={{
                  width: size,
                  height: size,
                  top: (500 - size) / 2,
                  left: (500 - size) / 2,
                  borderStyle: i % 2 === 0 ? "dashed" : "solid",
                  animation: `${i % 2 === 0 ? "spin-slow" : "spin-rev"} ${20 + i * 8}s linear infinite`,
                }}
              />
            ))}
            {/* Orbit dots */}
            {["€990", "€1.790", "€790", "€2.490+"].map((label, i) => (
              <div
                key={label}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-[#00c8b8]/50 bg-[#03080f] text-[9px] font-bold text-[#00c8b8]"
                style={{
                  top: 250 - 6 * (i + 1) - 24 + Math.sin((i * Math.PI) / 2) * (80 + i * 50),
                  left: 250 - 6 * (i + 1) - 24 + Math.cos((i * Math.PI) / 2) * (80 + i * 50),
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="max-w-xl">
            <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[#00c8b8]/45">13 — Orbital</div>
            <h2 className="text-5xl font-semibold leading-[1.0] tracking-[-0.04em] md:text-7xl">
              Totul în orbita<br />
              <span className="text-[#00c8b8]">afacerii tale.</span>
            </h2>
            <p className="mt-8 text-base leading-8 text-white/45">
              Un ecosistem digital complet — website, campanii, conținut și magazine online, toate în mișcare și coordonate pentru același obiectiv.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#00c8b8] bg-[#00c8b8]/10 px-8 py-4 text-sm font-semibold text-[#00c8b8] transition hover:bg-[#00c8b8] hover:text-[#03080f]">
                Intră în sistem
              </Link>
              <Link href="/pachete" className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-4 text-sm text-white/50 transition hover:border-white/25 hover:text-white">
                Pachete & prețuri →
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { v: "4", l: "servicii" },
                { v: "30", l: "zile livrare" },
                { v: "50%", l: "avans" },
                { v: "∞", l: "suport" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/6 bg-white/3 p-4 text-center">
                  <div className="text-2xl font-bold text-[#00c8b8]">{s.v}</div>
                  <div className="mt-1 text-xs text-white/35">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pulse ring */}
        <div className="pointer-events-none absolute bottom-8 left-8 h-3 w-3">
          <div className="absolute inset-0 rounded-full bg-[#00c8b8]" />
          <div className="absolute inset-0 rounded-full bg-[#00c8b8]" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          14 — MORPH  (blob lichid + card-uri floating + gradient)
      ══════════════════════════════════════════════════════════════ */}
      <section id="morph" className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #1a0533 0%, #2d0a4e 50%, #0f1a3d 100%)" }}>
        {/* Morphing blob */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] opacity-30"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, #6d28d9 40%, transparent 70%)",
            animation: "morph-blob 10s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] opacity-20"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, #be185d 40%, transparent 70%)",
            animation: "morph-blob 14s ease-in-out infinite reverse",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c4b5fd]/45">14 — Morph</div>
          <h2 className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Design care<br />
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#f0abfc] to-[#a78bfa] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%", animation: "grad-shift 4s ease infinite" }}>
              trăiește.
            </span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/50">
            Prezențe digitale care evoluează — nu un site static, ci un sistem viu care crește odată cu afacerea ta.
          </p>

          {/* Floating cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { t: "Prezență Online", p: "€990", d: "Site modern livrat în 7–14 zile.", delay: "0s", anim: "float-a" },
              { t: "Clienți Locali", p: "€1.790", d: "SEO + Ads + tracking complet.", delay: "0.5s", anim: "float-b" },
              { t: "AI Creative", p: "€790", d: "Conținut AI complet în 7 zile.", delay: "1s", anim: "float-c" },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-3xl border border-white/10 bg-white/8 p-7 backdrop-blur-md"
                style={{ animation: `${s.anim} 5s ease-in-out infinite`, animationDelay: s.delay }}
              >
                <div className="mb-4 text-3xl font-semibold text-[#c4b5fd]">{s.p}</div>
                <div className="mb-2 text-base font-semibold text-white">{s.t}</div>
                <div className="text-sm leading-6 text-white/45">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#8b5cf6] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)]">
              Hai să construim
            </Link>
            <Link href="/portofoliu" className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm text-white/60 transition hover:border-white/30 hover:text-white">
              Portofoliu →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          15 — DRIFT  (elemente care plutesc / layere de adâncime)
      ══════════════════════════════════════════════════════════════ */}
      <section id="drift" className="relative overflow-hidden bg-[#faf6f0] text-[#1a1208]">
        {/* Drifting background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { size: 320, top: "-5%",  left: "60%",  dur: "18s", del: "0s",   op: 0.06, col: "#c9a444" },
            { size: 200, top: "55%",  left: "-5%",  dur: "22s", del: "3s",   op: 0.05, col: "#31584f" },
            { size: 140, top: "15%",  left: "80%",  dur: "15s", del: "1.5s", op: 0.07, col: "#c44b2b" },
            { size: 260, top: "70%",  left: "50%",  dur: "25s", del: "2s",   op: 0.04, col: "#1d2731" },
          ].map((el, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: el.size,
                height: el.size,
                top: el.top,
                left: el.left,
                background: el.col,
                opacity: el.op,
                animation: `float-${["a","b","c","a"][i]} ${el.dur} ease-in-out infinite`,
                animationDelay: el.del,
                filter: "blur(40px)",
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#1a1208]/35">15 — Drift</div>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl">
                Prezență care<br />
                rămâne în<br />
                <span className="italic text-[#c9a444]">minte.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-8 text-[#1a1208]/55">
                Design cu personalitate, execuție cu precizie. Construim prezențe digitale memorabile pentru afaceri cu caracter.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#1a1208] px-8 py-4 text-sm font-medium text-[#faf6f0] transition hover:-translate-y-0.5 hover:shadow-xl">
                  Vorbim
                </Link>
                <Link href="/portofoliu" className="inline-flex items-center justify-center rounded-full border border-[#1a1208]/15 px-8 py-4 text-sm font-medium text-[#1a1208]/60 transition hover:border-[#1a1208]/30 hover:text-[#1a1208]">
                  Portofoliu
                </Link>
              </div>
            </div>

            {/* Floating service cards at different depths */}
            <div className="relative" style={{ height: "380px" }}>
              {[
                { t: "Website", p: "€990",    top: "0%",   left: "0%",   scale: 1.0, del: "0s",   anim: "float-a", z: 3 },
                { t: "Ads",     p: "€1.790",  top: "35%",  left: "38%",  scale: 0.9, del: "0.7s", anim: "float-b", z: 2 },
                { t: "AI",      p: "€790",    top: "55%",  left: "5%",   scale: 0.85,del: "1.4s", anim: "float-c", z: 1 },
                { t: "Shop",    p: "€2.490+", top: "10%",  left: "52%",  scale: 0.8, del: "2s",   anim: "float-a", z: 1 },
              ].map((card) => (
                <div
                  key={card.t}
                  className="absolute rounded-3xl border border-[#1a1208]/8 bg-white/80 px-6 py-5 shadow-lg backdrop-blur-sm"
                  style={{
                    top: card.top,
                    left: card.left,
                    transform: `scale(${card.scale})`,
                    transformOrigin: "top left",
                    zIndex: card.z,
                    animation: `${card.anim} ${4 + card.z}s ease-in-out infinite`,
                    animationDelay: card.del,
                  }}
                >
                  <div className="text-xl font-bold text-[#1a1208]">{card.p}</div>
                  <div className="mt-0.5 text-xs text-[#1a1208]/50">{card.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEPARATOR — E-COMMERCE
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-[#f5f1ea] px-8 py-10 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-[#1d2731]/40">Secțiunea 2</div>
        <h2 className="mt-2 text-3xl font-medium tracking-[-0.03em] text-[#1d2731]">Magazine Online — 10 teme</h2>
        <p className="mt-3 text-sm text-[#1d2731]/50">Fiecare temă e gândită pentru un tip specific de business e-commerce.</p>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          16 — BOUTIQUE  (fashion editorial / negru-cremă / asimetric)
      ══════════════════════════════════════════════════════════════ */}
      <section id="boutique" className="bg-[#0c0c0a] text-[#f0ebe0]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.45em] text-[#f0ebe0]/30">16 — Boutique</div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-5 inline-block border border-[#c9a444]/40 px-4 py-1 text-xs tracking-[0.3em] text-[#c9a444]">COLECȚIE NOUĂ — 2026</div>
              <h2 className="text-6xl font-light leading-[0.92] tracking-[-0.03em] md:text-8xl">
                Stilul tău.<br /><em className="not-italic font-semibold">Livrăm</em><br />perfectul.
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-7 text-[#f0ebe0]/45">Modă, accesorii și lifestyle — selectate cu gust, livrate rapid. Experiență de cumpărare la nivel de boutique parizian.</p>
              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="inline-flex items-center border-b border-[#c9a444] pb-0.5 text-sm tracking-wider text-[#c9a444] transition hover:gap-3">
                  Shop Now →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Rochie Midi", price: "349 lei", tag: "NOU", bg: "#1a1a14" },
                { name: "Geantă Piele", price: "890 lei", tag: "−20%", bg: "#141410" },
                { name: "Pantofi Toc", price: "459 lei", tag: "LAST", bg: "#1a1a14" },
              ].map((p) => (
                <div key={p.name} className="group overflow-hidden" style={{ background: p.bg }}>
                  <div className="relative flex aspect-[3/4] items-end p-4">
                    <div className="absolute right-2 top-2 border border-[#c9a444]/60 px-2 py-0.5 text-[9px] text-[#c9a444]">{p.tag}</div>
                    <div>
                      <div className="text-xs font-medium text-[#f0ebe0]/80">{p.name}</div>
                      <div className="text-sm font-bold text-[#c9a444]">{p.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          17 — FRESH  (alimentar / bio / verde deschis)
      ══════════════════════════════════════════════════════════════ */}
      <section id="fresh" className="bg-[#f4faf2] text-[#1a3a1a]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#4ade80]/60">17 — Fresh Market</div>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-5xl font-semibold leading-[1.0] tracking-[-0.04em] md:text-6xl">
              Proaspăt<br />la ușa ta.
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Legume🥦","Fructe🍊","Bio🌿","Lactate🥛","Carne🥩"].map(c => (
                <span key={c} className="rounded-full border border-[#1a3a1a]/12 bg-white px-4 py-1.5 text-xs font-medium">{c}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Roșii Cherry Bio", weight: "500g", price: "12 lei", badge: "BIO", badgeCol: "#4ade80" },
              { name: "Mozzarella Buffalo", weight: "250g", price: "28 lei", badge: "IMPORT", badgeCol: "#60a5fa" },
              { name: "Somon Proaspăt",   weight: "400g", price: "89 lei", badge: "FRESH", badgeCol: "#f97316" },
              { name: "Căpșuni de Țară",  weight: "1kg",  price: "25 lei", badge: "LOCAL", badgeCol: "#f43f5e" },
            ].map((p) => (
              <div key={p.name} className="group rounded-3xl border border-[#1a3a1a]/8 bg-white p-5 transition hover:shadow-md">
                <div className="mb-3 flex aspect-square items-center justify-center rounded-2xl bg-[#f4faf2] text-4xl">🌿</div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: p.badgeCol }}>{p.badge}</span>
                  <span className="text-xs text-[#1a3a1a]/40">{p.weight}</span>
                </div>
                <div className="mt-2 text-sm font-semibold">{p.name}</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-base font-bold text-[#22c55e]">{p.price}</span>
                  <button className="rounded-full bg-[#1a3a1a] px-3 py-1 text-xs text-white">+ Coș</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          18 — TECH STORE  (electronice / dark / spec-focused)
      ══════════════════════════════════════════════════════════════ */}
      <section id="techstore" className="bg-[#0a0d14] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#3b82f6]/50">18 — Tech Store</div>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/6 pb-8">
            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              Tehnologie.<br /><span className="text-[#3b82f6]">Fără compromis.</span>
            </h2>
            <div className="flex gap-3">
              {["Laptopuri","Telefoane","Audio","Gaming"].map(c => (
                <span key={c} className="rounded-lg border border-white/10 px-4 py-2 text-xs text-white/50 hover:border-[#3b82f6]/50 hover:text-white cursor-pointer transition">{c}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "MacBook Pro M4", price: "12.499 lei", old: "13.999 lei", specs: ["M4 Pro · 24GB · 512GB", "Ecran 16\" Liquid Retina"], badge: "−11%", hot: true },
              { name: "iPhone 16 Pro",  price: "6.299 lei",  old: "",           specs: ["A18 Pro · 256GB", "ProRAW · 4K120fps"],        badge: "NOU",  hot: false },
              { name: "Sony WH-1000XM6",price: "1.799 lei", old: "2.199 lei",   specs: ["ANC Premium", "30h autonomie · LDAC"],         badge: "−18%", hot: true },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl border p-6 ${p.hot ? "border-[#3b82f6]/40 bg-[#0d1526]" : "border-white/6 bg-white/3"}`}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-xl">💻</div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${p.hot ? "bg-[#3b82f6] text-white" : "border border-white/15 text-white/50"}`}>{p.badge}</span>
                </div>
                <div className="mb-3 text-base font-semibold">{p.name}</div>
                {p.specs.map(s => <div key={s} className="text-xs text-white/40 leading-6">· {s}</div>)}
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-xl font-bold text-[#3b82f6]">{p.price}</div>
                    {p.old && <div className="text-xs text-white/25 line-through">{p.old}</div>}
                  </div>
                  <button className="rounded-xl bg-[#3b82f6] px-4 py-2 text-xs font-semibold text-white hover:bg-[#2563eb] transition">Cumpără</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          19 — ARTISAN  (handmade / craft / cald / poveste)
      ══════════════════════════════════════════════════════════════ */}
      <section id="artisan" className="bg-[#f5ede0] text-[#3d2412]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#a0522d]/50">19 — Artisan</div>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-block rounded-full border border-[#a0522d]/25 bg-[#a0522d]/8 px-4 py-1.5 text-xs text-[#a0522d]">✦ Handmade cu suflet</div>
              <h2 className="text-5xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Fiecare piesă<br />spune o poveste.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-8 text-[#3d2412]/55">
                Ceramică, textile și obiecte de decor create manual de meșteri locali. Fiecare produs e unic — ca și tine.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#a0522d] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#8b4513]">
                  Descoperă colecția
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Bol Ceramică", material: "Argilă smălțuită", price: "180 lei", emoji: "🏺" },
                { name: "Coș Răchită", material: "Împletit manual",   price: "240 lei", emoji: "🧺" },
                { name: "Lumânare Soia",material: "Parfumată natural", price: "65 lei",  emoji: "🕯️" },
                { name: "Macramé",      material: "Bumbac natural",    price: "320 lei", emoji: "🧶" },
              ].map((p) => (
                <div key={p.name} className="rounded-3xl bg-white/60 p-5 shadow-sm">
                  <div className="mb-3 text-3xl">{p.emoji}</div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-[#3d2412]/45">{p.material}</div>
                  <div className="mt-2 text-base font-bold text-[#a0522d]">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          20 — FLASH SALE  (urgență / roșu / energie maximă)
      ══════════════════════════════════════════════════════════════ */}
      <section id="flash" className="bg-[#0a0202] text-white overflow-hidden">
        {/* Flashing badge */}
        <div className="border-b border-red-900/50 bg-red-950/60 py-2 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400" style={{ animation: "flash-badge 1.5s ease-in-out infinite" }}>
            ⚡ FLASH SALE — Expiră în: 02:47:13 ⚡
          </span>
        </div>
        <div className="mx-auto max-w-7xl px-8 py-20 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-red-500/50">20 — Flash Sale</div>
          <h2 className="mb-10 text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl">
            PÂNĂ LA<br /><span className="text-red-500">−70%</span><br />AZI DOAR.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Jachetă Piele", old: "899 lei", price: "449 lei", pct: "−50%", stock: 3 },
              { name: "Smart Watch",   old: "1299 lei",price: "649 lei", pct: "−50%", stock: 7 },
              { name: "Rucsac Urban",  old: "350 lei", price: "105 lei", pct: "−70%", stock: 1 },
              { name: "Ochelari Ray",  old: "750 lei", price: "337 lei", pct: "−55%", stock: 5 },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-red-900/30 bg-red-950/20 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-black text-white">{p.pct}</span>
                  <span className="text-xs text-red-400/60">Stoc: {p.stock}</span>
                </div>
                {/* Stock bar */}
                <div className="mb-3 h-1 w-full rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-red-500" style={{ width: `${p.stock * 10}%` }} />
                </div>
                <div className="mb-2 text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-white/30 line-through">{p.old}</div>
                <div className="text-xl font-black text-red-400">{p.price}</div>
                <button className="mt-3 w-full rounded-xl bg-red-600 py-2 text-xs font-bold uppercase tracking-wide hover:bg-red-500 transition">Cumpără</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          21 — MINIMAL SHOP  (scandinav / alb pur / liniște)
      ══════════════════════════════════════════════════════════════ */}
      <section id="minishop" className="bg-white text-[#111]">
        <div className="mx-auto max-w-6xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-[10px] uppercase tracking-[0.5em] text-black/20">21 — Minimal Shop</div>
          <div className="mb-16 flex items-end justify-between border-b border-black/6 pb-8">
            <h2 className="text-4xl font-light tracking-[-0.03em] md:text-6xl">Obiecte alese.</h2>
            <Link href="/contact" className="text-xs uppercase tracking-[0.3em] text-black/35 transition hover:text-black">Toate →</Link>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Lampă Podea",   price: "1.240 lei", label: "Design NL" },
              { name: "Vază Sticlă",   price: "380 lei",   label: "Handblown" },
              { name: "Cuvertură Lână",price: "890 lei",   label: "Merino" },
              { name: "Tavă Marmură",  price: "650 lei",   label: "Carara IT" },
            ].map((p) => (
              <div key={p.name} className="group">
                <div className="mb-4 aspect-[4/5] bg-[#f8f8f6] transition group-hover:bg-[#f0f0ec]" />
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-black/30">{p.label}</div>
                  </div>
                  <div className="text-sm font-semibold">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          22 — NIGHT MARKET  (streetwear / dark neon / urban bold)
      ══════════════════════════════════════════════════════════════ */}
      <section id="nightmkt" className="bg-[#050505] text-white">
        <div className="border-b border-white/5 py-2 overflow-hidden">
          <div className="flex whitespace-nowrap" style={{ animation: "marquee 12s linear infinite" }}>
            {Array(6).fill(null).map((_, i) => (
              <span key={i} className="shrink-0 px-6 text-xs font-black uppercase tracking-[0.2em] text-white/15">
                NEW DROP &nbsp;·&nbsp; LIMITED EDITION &nbsp;·&nbsp; STREETWEAR &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-8 py-20 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#ff4444]/45">22 — Night Market</div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-block border-l-4 border-[#ff4444] pl-4 text-xs font-bold uppercase tracking-widest text-[#ff4444]">DROP #23 — LIVE NOW</div>
              <h2 className="text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-7xl">
                WEAR<br />THE<br /><span className="text-[#ff4444]">NIGHT.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">Streetwear exclusivist în ediție limitată. Odată sold-out, gata. Fii primul.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#ff4444] px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-[#ff2222] transition">
                SHOP DROP →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "SHADOW HOODIE", price: "590 lei", size: "XS–XL", left: "12 buc" },
                { name: "VOID TEE",      price: "220 lei", size: "S–XXL", left: "34 buc" },
                { name: "NITE CARGO",    price: "780 lei", size: "S–XL",  left: "8 buc" },
                { name: "REAPER CAP",    price: "180 lei", size: "Unisize",left: "25 buc" },
              ].map((p) => (
                <div key={p.name} className="border border-white/6 p-5">
                  <div className="mb-3 aspect-square bg-white/3" />
                  <div className="text-xs font-black tracking-wider">{p.name}</div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#ff4444]">{p.price}</span>
                    <span className="text-[10px] text-white/25">{p.left}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          23 — KIDS STORE  (culori pastel / rotund / jucăuș)
      ══════════════════════════════════════════════════════════════ */}
      <section id="kidstore" className="bg-[#fff8fb] text-[#2d1b2d]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#ff9ecd]/60">23 — Kids Store</div>
          <div className="mb-10 text-center">
            <h2 className="text-5xl font-extrabold tracking-[-0.03em] md:text-7xl">
              <span className="text-[#ff9ecd]">Joacă</span> &amp; <span className="text-[#ffdb70]">Bucurie</span> 🎉
            </h2>
            <p className="mt-4 text-sm text-[#2d1b2d]/45">Jucării, haine și cărți pentru copiii care explorează lumea.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Set LEGO City 🏙️",  age: "6–12 ani", price: "299 lei", col: "#ffdb70" },
              { name: "Rochie Flori 🌸",    age: "3–7 ani",  price: "129 lei", col: "#ff9ecd" },
              { name: "Carte Povești 📚",   age: "4–8 ani",  price: "49 lei",  col: "#a8e6cf" },
              { name: "Tricicletă 🚲",      age: "2–4 ani",  price: "389 lei", col: "#b4c8ff" },
            ].map((p) => (
              <div key={p.name} className="rounded-[32px] border-2 p-5 text-center transition hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: p.col + "66", background: p.col + "18" }}>
                <div className="mb-3 text-4xl">{p.name.match(/\p{Emoji}/u)?.[0]}</div>
                <div className="mb-1 text-sm font-bold">{p.name.replace(/\p{Emoji}/u, "").trim()}</div>
                <div className="mb-2 rounded-full px-3 py-0.5 text-[10px] font-semibold" style={{ background: p.col + "55" }}>{p.age}</div>
                <div className="text-base font-extrabold" style={{ color: "#2d1b2d" }}>{p.price}</div>
                <button className="mt-3 w-full rounded-full py-2 text-xs font-bold text-white transition hover:opacity-90" style={{ background: p.col === "#ffdb70" ? "#e6b800" : p.col }}>
                  + Coș 🛒
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          24 — LUXE  (bijuterii / negru-auriu / ultra-premium)
      ══════════════════════════════════════════════════════════════ */}
      <section id="luxe" className="bg-[#08060a] text-white">
        <div className="mx-auto max-w-6xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[#d4af6a]/35">24 — Luxe</div>
          <div className="mb-16 border-b border-[#d4af6a]/12 pb-12 text-center">
            <div className="mb-3 text-[10px] uppercase tracking-[0.6em] text-[#d4af6a]/45">Colecție Exclusivă 2026</div>
            <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.02em] md:text-7xl">
              Rafinament<br />fără cuvinte.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { name: "Inel Aur 18K", stone: "Diamant 0.5ct", price: "8.900 lei", limited: true },
              { name: "Colier Platină", stone: "Safir Ceylon", price: "15.400 lei", limited: false },
              { name: "Brățară Aur", stone: "Perle Akoya", price: "6.200 lei", limited: true },
            ].map((p) => (
              <div key={p.name} className="group text-center">
                <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border border-[#d4af6a]/15 bg-[#0f0d12] text-4xl">
                  💍
                </div>
                {p.limited && <div className="mb-2 text-[9px] uppercase tracking-[0.4em] text-[#d4af6a]/55">Ediție Limitată</div>}
                <div className="text-base font-light tracking-wider text-white/80">{p.name}</div>
                <div className="mt-1 text-xs text-[#d4af6a]/50">{p.stone}</div>
                <div className="mt-3 text-xl font-light text-[#d4af6a]">{p.price}</div>
                <Link href="/contact" className="mt-4 inline-block border-b border-[#d4af6a]/30 text-xs tracking-[0.3em] text-[#d4af6a]/50 transition hover:border-[#d4af6a] hover:text-[#d4af6a]">
                  COMANDĂ
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          25 — SPORT  (dinamic / diagonal / italic bold)
      ══════════════════════════════════════════════════════════════ */}
      <section id="sport" className="overflow-hidden bg-[#f0f0f0] text-[#111]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#ff5500]/55">25 — Sport</div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-block skew-x-[-6deg] bg-[#ff5500] px-4 py-1 text-xs font-black uppercase tracking-widest text-white">NEW SEASON DROP</div>
              <h2 className="text-6xl font-black italic leading-[0.88] tracking-[-0.04em] md:text-8xl">
                MOVE<br />FAST.<br /><span className="text-[#ff5500]">WIN.</span>
              </h2>
              <p className="mt-7 max-w-sm text-sm leading-7 text-[#111]/50">Echipament sportiv performant — de la antrenament la competiție. Materiale tehnice, design aerodinamic.</p>
              <div className="mt-8 flex gap-3">
                <Link href="/contact" className="inline-flex items-center bg-[#111] px-8 py-4 text-sm font-black uppercase tracking-wider text-white hover:bg-[#ff5500] transition">
                  SHOP NOW
                </Link>
                <Link href="/servicii" className="inline-flex items-center border-2 border-[#111] px-8 py-4 text-sm font-black uppercase tracking-wider text-[#111] hover:bg-[#111] hover:text-white transition">
                  CATALOG
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Running Pro X", price: "689 lei", cat: "Alergare", col: "#ff5500" },
                { name: "Air Mesh Tee", price: "189 lei", cat: "Training", col: "#3b82f6" },
                { name: "Trail Shorts", price: "259 lei", cat: "Outdoor",  col: "#22c55e" },
                { name: "Grip Gloves", price: "149 lei", cat: "Sala",     col: "#a855f7" },
              ].map((p) => (
                <div key={p.name} className="group bg-white p-5 transition hover:shadow-lg">
                  <div className="mb-3 aspect-square bg-[#f0f0f0] transition group-hover:bg-[#e8e8e8]" />
                  <div className="mb-1 rounded px-2 py-0.5 text-[10px] font-bold text-white inline-block" style={{ background: p.col }}>{p.cat}</div>
                  <div className="text-sm font-bold">{p.name}</div>
                  <div className="text-base font-black text-[#ff5500]">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEPARATOR — ANIMATION
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0a] px-8 py-10 text-center text-white">
        <div className="text-xs uppercase tracking-[0.35em] text-white/30">Secțiunea 3</div>
        <h2 className="mt-2 text-3xl font-medium tracking-[-0.03em]">Animații Dribbble — 10 mecanici</h2>
        <p className="mt-3 text-sm text-white/35">Fiecare template demonstrează o tehnică de animație pură CSS.</p>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          26 — TYPEWRITER  (text care se scrie singur / CSS steps)
      ══════════════════════════════════════════════════════════════ */}
      <section id="typewriter" className="bg-[#0d1117] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#58a6ff]/40">26 — Typewriter</div>
          <div className="font-mono">
            <div className="text-sm text-[#58a6ff]/50 mb-4">// Construim pentru tine un sistem digital complet.</div>
            <div className="overflow-hidden whitespace-nowrap border-r-2 border-[#58a6ff] text-5xl font-bold leading-tight md:text-7xl"
              style={{ animation: "typewriter 3s steps(28) 0.5s both, caret 0.75s step-end infinite" }}>
              Execuție digitală.
            </div>
            <div className="overflow-hidden whitespace-nowrap text-5xl font-bold leading-tight text-[#58a6ff] md:text-7xl"
              style={{ animation: "typewriter 3s steps(28) 3.8s both" }}>
              Rezultate reale.
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { t: "> website_build()",   d: "Lansăm site-ul în 7–14 zile.", p: "€990" },
              { t: "> ads_local.start()", d: "Campanii locale care convertesc.", p: "€1.790" },
              { t: "> ai_sprint.run()",   d: "Conținut AI livrat în 7 zile.", p: "€790" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-white/6 bg-white/3 p-5 font-mono">
                <div className="mb-2 text-xs text-[#58a6ff]">{s.t}</div>
                <div className="mb-3 text-xs text-white/40 leading-6">{s.d}</div>
                <div className="text-base font-bold">{s.p}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="font-mono inline-flex items-center gap-2 border border-[#58a6ff]/40 px-7 py-3.5 text-sm text-[#58a6ff] hover:bg-[#58a6ff]/10 transition">
              contact.send() →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          27 — WIPE  (clip-path slide reveal la intrare)
      ══════════════════════════════════════════════════════════════ */}
      <section id="wipe" className="bg-[#f5f0e8] text-[#1a1208] overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#1a1208]/30">27 — Wipe Reveal</div>
          <div style={{ animation: "wipe-in 1.2s cubic-bezier(0.77,0,0.175,1) 0.2s both" }}>
            <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-9xl">
              DIGITAL<br />MARKETING<br /><span className="text-[#c9a444]">DONE.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3" style={{ animation: "wipe-in 1s cubic-bezier(0.77,0,0.175,1) 1.5s both" }}>
            {["Website €990","Ads €1.790","AI Sprint €790"].map((s, i) => (
              <div key={s} className="border-l-2 border-[#c9a444] pl-5">
                <div className="text-xs text-[#1a1208]/40 mb-1">{String(i+1).padStart(2,"0")}</div>
                <div className="text-base font-semibold">{s}</div>
              </div>
            ))}
          </div>
          <div className="mt-10" style={{ animation: "wipe-in 0.8s cubic-bezier(0.77,0,0.175,1) 2.2s both" }}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a1208] px-8 py-4 text-sm font-semibold text-white hover:bg-[#c9a444] transition">
              Hai să vorbim →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          28 — STAGGER  (card-uri care apar în cascadă cu delay)
      ══════════════════════════════════════════════════════════════ */}
      <section id="stagger" className="bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-white/30">28 — Stagger</div>
          <h2 className="mb-12 text-5xl font-semibold leading-[1.0] tracking-[-0.04em] md:text-6xl"
            style={{ animation: "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            Un serviciu.<br />O echipă. Rezultate.
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Prezență Online", p: "€990",    d: "Site complet în 7–14 zile.", emoji: "🌐", delay: "0.1s" },
              { t: "Clienți Locali",  p: "€1.790",  d: "SEO + Ads + tracking.",       emoji: "📍", delay: "0.25s" },
              { t: "Magazin Digital", p: "€2.490+", d: "E-commerce optimizat.",        emoji: "🛒", delay: "0.4s" },
              { t: "AI Sprint",       p: "€790",    d: "Conținut AI în 7 zile.",       emoji: "⚡", delay: "0.55s" },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/8 bg-white/4 p-6"
                style={{ animation: `slide-up 0.7s cubic-bezier(0.16,1,0.3,1) ${s.delay} both` }}>
                <div className="mb-4 text-3xl">{s.emoji}</div>
                <div className="mb-1 text-base font-semibold">{s.t}</div>
                <div className="mb-4 text-xs text-white/40 leading-6">{s.d}</div>
                <div className="text-lg font-bold text-white">{s.p}</div>
              </div>
            ))}
          </div>
          <div className="mt-10" style={{ animation: "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s both" }}>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#111827] hover:shadow-xl transition">
              Programează un call
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          29 — GRAD WALK  (fundal cu gradient care se plimbă lent)
      ══════════════════════════════════════════════════════════════ */}
      <section id="gradwalk" className="text-white" style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)",
        backgroundSize: "300% 300%",
        animation: "grad-walk 8s ease infinite",
      }}>
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">29 — Gradient Walk</div>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-6xl font-medium leading-[1.0] tracking-[-0.04em] md:text-7xl">
                Digital în<br />culori vii.
              </h2>
              <p className="mt-7 max-w-md text-base leading-8 text-white/70">
                Website, campanii și conținut create pentru afaceri care vor să fie remarcate. Cu personalitate și cu strategie.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#764ba2] hover:shadow-xl transition">
                  Discutăm
                </Link>
                <Link href="/pachete" className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition">
                  Prețuri →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Website", p: "€990" }, { t: "Ads Local", p: "€1.790" },
                { t: "E-commerce", p: "€2.490+" }, { t: "AI Sprint", p: "€790" },
              ].map((s) => (
                <div key={s.t} className="rounded-3xl bg-white/15 p-6 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{s.p}</div>
                  <div className="mt-1 text-sm text-white/70">{s.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          30 — ELASTIC  (intrare cu spring / bounce cubic-bezier)
      ══════════════════════════════════════════════════════════════ */}
      <section id="elastic" className="bg-[#fefce8] text-[#1a1a00]">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#1a1a00]/30">30 — Elastic</div>
          <h2 className="mb-12 text-5xl font-black leading-[0.92] tracking-[-0.04em] md:text-7xl"
            style={{ animation: "elastic-pop 1s cubic-bezier(0.36,0.07,0.19,0.97) 0.1s both" }}>
            Digital care<br /><span className="text-[#eab308]">săltă.</span>
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { t: "Website", p: "€990", d: "7–14 zile · Site complet", delay: "0.2s" },
              { t: "Ads Local", p: "€1.790", d: "30 zile setup · SEO + Ads", delay: "0.35s" },
              { t: "AI Sprint", p: "€790", d: "7 zile · Conținut complet", delay: "0.5s" },
            ].map((s) => (
              <div key={s.t} className="rounded-3xl bg-white p-7 shadow-sm"
                style={{ animation: `elastic-pop 0.9s cubic-bezier(0.36,0.07,0.19,0.97) ${s.delay} both` }}>
                <div className="mb-3 text-3xl font-black text-[#eab308]">{s.p}</div>
                <div className="mb-1 text-base font-bold">{s.t}</div>
                <div className="text-xs text-[#1a1a00]/45">{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{ animation: "bounce-in 0.9s cubic-bezier(0.36,0.07,0.19,0.97) 0.7s both" }} className="mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eab308] px-8 py-4 text-sm font-black text-[#1a1a00] transition hover:-translate-y-1 hover:shadow-lg">
              Hai! →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          31 — SHIMMER  (text cu scanare metalică)
      ══════════════════════════════════════════════════════════════ */}
      <section id="shimmer" className="bg-[#0a0806] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af6a]/35">31 — Shimmer</div>
          <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-9xl"
            style={{
              background: "linear-gradient(90deg, #c9a444 0%, #fff8e1 20%, #c9a444 40%, #8b6914 60%, #fff3b0 80%, #c9a444 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer-scan 3s linear infinite",
            }}>
            REVERB<br />DIGITAL
          </h2>
          <p className="mt-8 max-w-lg text-base leading-8 text-white/45">
            Execuție digitală premium pentru afaceri care vor să strălucească. Website, marketing și conținut la cel mai înalt nivel.
          </p>
          <div className="mt-12 grid gap-4 border-t border-[#d4af6a]/10 pt-10 md:grid-cols-4">
            {[
              { t: "Website", p: "€990" }, { t: "Clienți Locali", p: "€1.790" },
              { t: "E-commerce", p: "€2.490+" }, { t: "AI Sprint", p: "€790" },
            ].map((s) => (
              <div key={s.t}>
                <div className="text-lg font-bold text-[#d4af6a]">{s.p}</div>
                <div className="text-xs text-white/35">{s.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center border border-[#d4af6a]/40 px-8 py-4 text-sm text-[#d4af6a] hover:bg-[#d4af6a]/10 transition">
              Vorbim →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          32 — SPLIT  (hero se desparte în două jumătăți)
      ══════════════════════════════════════════════════════════════ */}
      <section id="split" className="overflow-hidden">
        <div className="grid lg:grid-cols-2" style={{ minHeight: "500px" }}>
          {/* Left half */}
          <div className="flex flex-col justify-center bg-[#1d2731] px-8 py-20 lg:px-14"
            style={{ animation: "slide-left 1s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-white/30">32 — Split</div>
            <h2 className="text-5xl font-semibold leading-[1.0] tracking-[-0.04em] text-white md:text-6xl">
              Strategie.<br /><span className="text-[#f5f1ea]/60">Execuție.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-8 text-white/50">
              Două jumătăți, un singur obiectiv: să crești online cu rezultate măsurabile și costuri clare.
            </p>
            <Link href="/contact" className="mt-10 inline-flex w-fit items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1d2731] hover:shadow-lg transition">
              Programează un call
            </Link>
          </div>
          {/* Right half */}
          <div className="flex flex-col justify-center bg-[#f5f1ea] px-8 py-20 lg:px-14"
            style={{ animation: "slide-right 1s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
            <div className="space-y-5">
              {[
                { t: "Prezență Online", p: "€990", d: "Website + structură · 7–14 zile" },
                { t: "Clienți Locali",  p: "€1.790", d: "SEO + Ads · 30 zile setup" },
                { t: "AI Sprint",       p: "€790", d: "Conținut AI complet · 7 zile" },
              ].map((s, i) => (
                <div key={s.t} className="flex items-center gap-5 rounded-2xl border border-[#1d2731]/8 bg-white/60 p-5"
                  style={{ animation: `slide-right 0.7s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.15}s both` }}>
                  <div className="text-xl font-bold text-[#1d2731] shrink-0">{s.p}</div>
                  <div>
                    <div className="text-sm font-semibold text-[#1d2731]">{s.t}</div>
                    <div className="text-xs text-[#1d2731]/45">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          33 — SPOTLIGHT  (lumina care se mișcă pe fundal negru)
      ══════════════════════════════════════════════════════════════ */}
      <section id="spotlight" className="relative overflow-hidden bg-[#030303] text-white">
        {/* Moving spotlight */}
        <div className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 600px 400px at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)",
            animation: "spotlight-move 6s ease-in-out infinite",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-white/20">33 — Spotlight</div>
          <div className="max-w-2xl">
            <h2 className="text-6xl font-medium leading-[1.0] tracking-[-0.04em] md:text-8xl">
              Ieși<br />în evidență.
            </h2>
            <p className="mt-8 text-base leading-8 text-white/40">
              Într-o mare de site-uri identice, construim prezențe digitale care captează atenția și o convertesc în clienți.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {[
              { t: "Website", p: "€990" }, { t: "Ads", p: "€1.790" },
              { t: "Shop", p: "€2.490+" }, { t: "AI", p: "€790" },
            ].map((s) => (
              <div key={s.t} className="border border-white/5 bg-white/2 p-6 text-center backdrop-blur-sm">
                <div className="text-xl font-bold text-white">{s.p}</div>
                <div className="mt-1 text-xs text-white/30">{s.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center border border-white/15 px-8 py-4 text-sm text-white/60 hover:border-white/40 hover:text-white transition">
              Intru în lumina reflectoarelor →
            </Link>
          </div>
        </div>
        {/* Pulse dot indicator */}
        <div className="absolute bottom-6 right-8 flex items-center gap-2">
          <div className="relative h-2 w-2">
            <div className="absolute inset-0 rounded-full bg-white" />
            <div className="absolute inset-0 rounded-full bg-white" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
          </div>
          <span className="text-[10px] text-white/20 uppercase tracking-widest">Live</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          34 — TICKER 2  (randuri de date care se rotesc vertical)
      ══════════════════════════════════════════════════════════════ */}
      <section id="ticker2" className="bg-[#0a0f0a] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-[#22c55e]/40">34 — Ticker</div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-mono text-5xl font-bold leading-[1.0] tracking-[-0.02em] md:text-6xl">
                Cifrele<br /><span className="text-[#22c55e]">vorbesc.</span>
              </h2>
              <p className="mt-7 max-w-md font-mono text-sm leading-8 text-white/40">
                KPI-uri clare, rapoarte reale. Gestionăm campanii cu focus pe ce contează: conversii, lead-uri, vânzări.
              </p>
              <Link href="/contact" className="mt-10 inline-flex items-center gap-2 border border-[#22c55e]/30 px-7 py-3.5 font-mono text-sm text-[#22c55e] hover:bg-[#22c55e]/10 transition">
                &gt; contact.init()
              </Link>
            </div>
            {/* Vertical ticker */}
            <div className="overflow-hidden rounded-2xl border border-[#22c55e]/10 bg-[#000a00]" style={{ height: "280px" }}>
              <div style={{ animation: "ticker2 12s linear infinite" }}>
                {[
                  { label: "Website Prezență Online", value: "€990",    trend: "↑" },
                  { label: "SEO + Ads Clienți Locali",value: "€1.790",  trend: "↑" },
                  { label: "Magazin Digital",         value: "€2.490+", trend: "↑" },
                  { label: "AI Creative Sprint",      value: "€790",    trend: "↑" },
                  { label: "Promovare Start",         value: "€390/mo", trend: "→" },
                  { label: "Promovare Growth",        value: "€590/mo", trend: "↑" },
                  { label: "Promovare Scale",         value: "€790/mo", trend: "↑" },
                  { label: "Website Prezență Online", value: "€990",    trend: "↑" },
                  { label: "SEO + Ads Clienți Locali",value: "€1.790",  trend: "↑" },
                  { label: "Magazin Digital",         value: "€2.490+", trend: "↑" },
                  { label: "AI Creative Sprint",      value: "€790",    trend: "↑" },
                  { label: "Promovare Start",         value: "€390/mo", trend: "→" },
                  { label: "Promovare Growth",        value: "€590/mo", trend: "↑" },
                  { label: "Promovare Scale",         value: "€790/mo", trend: "↑" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-[#22c55e]/6 px-5 py-3 font-mono">
                    <span className="text-xs text-white/40">{row.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#22c55e]">{row.value}</span>
                      <span className="text-xs text-[#22c55e]/60">{row.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          35 — PULSE  (elemente care pulsează în ritm)
      ══════════════════════════════════════════════════════════════ */}
      <section id="pulse" className="bg-[#0f0a1a] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
          <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#e879f9]/35">35 — Pulse</div>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl">
                Un business<br />
                <span className="text-[#e879f9]" style={{ animation: "pulse-beat 2.4s ease-in-out infinite", display: "inline-block" }}>
                  viu.
                </span>
              </h2>
              <p className="mt-7 max-w-md text-base leading-8 text-white/45">
                Construim sisteme digitale care cresc constant — nu site-uri statice, ci organisme vii care atrag, convertesc și fidelizează.
              </p>
              <Link href="/contact" className="mt-10 inline-flex items-center justify-center rounded-full bg-[#e879f9] px-8 py-4 text-sm font-semibold text-[#0f0a1a] transition hover:shadow-[0_15px_40px_rgba(232,121,249,0.35)]"
                style={{ animation: "pulse-beat 2.4s ease-in-out infinite" }}>
                Pornește sistemul
              </Link>
            </div>
            <div className="relative flex items-center justify-center" style={{ height: "340px" }}>
              {/* Pulsing concentric circles */}
              {[280, 220, 160, 100].map((size, i) => (
                <div
                  key={size}
                  className="absolute rounded-full border border-[#e879f9]"
                  style={{
                    width: size, height: size,
                    opacity: 0.08 + i * 0.08,
                    animation: `pulse-beat2 ${2 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              ))}
              {/* Center */}
              <div className="relative z-10 rounded-full border border-[#e879f9]/40 bg-[#e879f9]/10 p-8 text-center backdrop-blur-sm"
                style={{ animation: "pulse-beat 2.4s ease-in-out infinite" }}>
                <div className="text-2xl font-bold text-[#e879f9]">de la</div>
                <div className="text-4xl font-bold text-white">€790</div>
                <div className="mt-1 text-xs text-white/35">per proiect</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ─────────────────────────────────────────────── */}
      <div className="bg-[#f5f1ea] px-8 py-16 text-center lg:px-10 lg:py-20">
        <p className="text-sm text-[#1d2731]/50">
          Ai văzut o direcție care ți-a plăcut? Sau vrei o combinație?
        </p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#1d2731] md:text-3xl">
          Spune-ne ce te-a atras.
        </h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#1d2731] px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg">
            Discutăm designul
          </Link>
          <Link href="/" className="text-sm text-[#1d2731]/45 transition hover:text-[#1d2731]">
            ← Înapoi la site
          </Link>
        </div>
      </div>
    </div>
  );
}
