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
