"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import WhoWeAre from "@/components/WhoWeAre";
import WorkShots from "@/components/WorkShots";
import { OutlineRun, Linie } from "@/components/RunningLine";
import { heroEn } from "@/lib/outlineRun/heroEn";
import ProjectPreviewModal, { PreviewProject } from "@/components/ProjectPreviewModal";
import { liveProjectsEn } from "@/lib/liveProjects";
import { OWN_PRODUCTS, HOME_PORTFOLIO, MODULES_TITLE_EN } from "@/lib/ownProducts";
import { pkg, priceEn, priceLei, splitPrice, noBreak } from "@/lib/packages";
import { packagesEn, enPrice, enDelivery, VAT_LABEL_EN, VAT_NOTE_EN } from "@/lib/packagesEn";

// The price cards read from the registry (lib/packages.ts); English texts come from lib/packagesEn.ts.
// The video columns take their description and bullet points from the registry texts too (first 4), so the home page promises what the package does.
const priceSocial = splitPrice(priceEn(pkg("social-growth").price));
const priceDaily = splitPrice(priceEn(pkg("daily-impact").price));
const social = packagesEn["social-growth"];
const daily = packagesEn["daily-impact"];

// ── Web Audio API Procedural Sound Engine ──
class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  public playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = "sine";
    osc.frequency.setValueAtTime(130, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.04);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  public playHover() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = "sine";
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.03);

    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.03);
  }
}

const sounds = new SoundEngine();

// ── Our work (the single list in lib/liveProjects.ts) ──
const realProjects = liveProjectsEn;

// Three projects shown with a picture right under the first screen (the same as on /en/packages; pictures live in components/WorkShots.tsx).
const work = ["Bricolando.ro", "RaftPlin.ro", "Kalki.nexus"].map((n) => realProjects.find((p) => p.name === n)).filter((p) => !!p);

// "approx. 1,730 lei incl. VAT" → "approx. 1,730 lei" (the row under the prices says once that VAT is included).
const lei = (id: "site-start" | "magazin-start") => priceLei(pkg(id).price, "en").replace(" incl. VAT", "");

// The home page portfolio: 6 selected projects (lib/ownProducts.ts, HOME_PORTFOLIO), like "selected work" at the big agencies
// (Alin, 15 Nov 2026). The filters stay on /en/portfolio; here they only give the card label.
const selectedWork = HOME_PORTFOLIO.map((n) => realProjects.find((p) => p.name === n)).filter((p) => !!p);
const FILTERS: { label: string; badges?: string[] }[] = [
  { label: "STORES", badges: ["eCommerce"] },
  { label: "SOFTWARE", badges: ["AI Software"] },
  { label: "APPS", badges: ["Application"] },
  { label: "TOOLS", badges: ["Utility"] },
  { label: "WEBSITES", badges: ["Publishing", "Portal"] },
];
/** The label shown on a card for a project's badge (same words as the filters). */
const badgeLabel = (badge: string) => FILTERS.find((f) => f.badges?.includes(badge))?.label ?? badge;

export default function EnglishHomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedPreview, setSelectedPreview] = useState<PreviewProject | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div className="relative bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white overflow-x-hidden antialiased">
      
      {/* ── Background grid and the light under the cursor ── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
        }}
      />


      {/* Ambient Radial Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* ── First screen ── */}
      <section className="relative z-10 pt-32 pb-12 md:pt-40 md:pb-32 border-b border-white/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.025] blur-[140px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
          
          {/* No "WEBSITES • ONLINE STORES • VIDEO CLIPS" tag above (it repeated the title; 15 Nov 2026). */}
          {/* The grey row (Alin, 15 Nov 2026: for new and for established businesses; echoes the Launch / Scale pillars).
              Its text is also in lib/outlineRun/heroEn.ts (scripts/linia_litere.py): they change together. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium tracking-[-0.04em] leading-[1.04] text-white break-words">
            Websites and online stores.<br />
            <span className="text-neutral-400 font-light">
              <OutlineRun text="From launch to scale." data={heroEn} />
            </span>
          </h1>

          {/* Where each one starts (from the registry). */}
          <p className="mt-7 max-w-2xl text-sm md:text-base text-white leading-relaxed">
            {`Website from ${enPrice("site-start")} · online store from ${enPrice("magazin-start")} · videos from ${enPrice("social-growth")}`}
            <span className="block mt-1 text-xs text-neutral-400 font-light">{`Prices exclude VAT. In lei, VAT included: website from ${lei("site-start")}, online store from ${lei("magazin-start")}.`}</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/en/contact"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] font-bold"
            >
              Discuss Your Project →
            </Link>
            <a
              href="#packages"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
            >
              See packages and prices ↓
            </a>
          </div>

          {/* Quick contact: one number, written once (WhatsApp → message, the number → call). */}
          <div className="mt-6 flex items-center justify-center gap-3 text-[11px] font-mono text-neutral-400">
            <a
              href="https://wa.me/40767235693?text=Hello,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Reverb%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              WhatsApp
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href="tel:+40767235693"
              aria-label="Call +40 767 235 693"
              className="hover:text-white transition-colors"
            >
              +40&nbsp;767&nbsp;235&nbsp;693
            </a>
          </div>

          {/* Four pillars (Alin, 15 Nov 2026: no "N projects", no "Fixed price"); the same four as app/HomeClient.tsx.
              Delivery terms come from the registry; the 30 days and the SLA are in the package texts. */}
          <div className="mt-20 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 text-center">
            <div>
              <div className="font-mono text-xl md:text-2xl font-light text-white mb-2">Strategy</div>
              <p className="mx-auto max-w-[15rem] text-balance text-xs leading-relaxed text-neutral-400 font-light">Consulting for starting your business: from idea to launch plan.</p>
            </div>
            <div>
              <div className="font-mono text-xl md:text-2xl font-light text-white mb-2">Launch</div>
              <p className="mx-auto max-w-[15rem] text-balance text-xs leading-relaxed text-neutral-400 font-light">{`Website in ${enDelivery("site-start")}, online store in ${enDelivery("magazin-start")}.`}</p>
            </div>
            <div>
              <div className="font-mono text-xl md:text-2xl font-light text-white mb-2">Scale</div>
              <p className="mx-auto max-w-[15rem] text-balance text-xs leading-relaxed text-neutral-400 font-light">Large projects: dedicated architecture, contract-backed SLA.</p>
            </div>
            <div>
              <div className="font-mono text-xl md:text-2xl font-light text-white mb-2">Support</div>
              <p className="mx-auto max-w-[15rem] text-balance text-xs leading-relaxed text-neutral-400 font-light">30 days included, then ongoing maintenance and advice.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Three projects with a picture, right under the first screen, and the agency's business card (data only). ── */}
      <section className="relative z-10 py-16 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">Managed</div>
        <WorkShots items={work} lang="en" />
        <div className="mt-4 flex flex-wrap gap-2.5">
          <Link href="/en/portfolio" className="rounded-full bg-white px-4 py-2 text-xs font-mono font-bold text-black transition hover:bg-neutral-200">Full portfolio →</Link>
          <Link href="/showcase" className="rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black">Concept gallery →</Link>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">Who we are</div>
          <WhoWeAre lang="en" />
        </div>
      </section>

      {/* ── How we work: four steps ── */}
      <section className="relative z-10 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <h2 className="mb-14 text-3xl md:text-5xl font-light text-white tracking-tight">
          <Linie>How we work.</Linie>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">01</div>
            <h3 className="text-base font-medium text-white mb-2">We talk</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              From you: texts and photos. From us: the deadline and the price, both set before work begins.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">02</div>
            <h3 className="text-base font-medium text-white mb-2">We build</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              {`Website: ${enDelivery("site-start")}. Store: ${enDelivery("magazin-start")}. Payment: half at the start, half on delivery.`}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">03</div>
            <h3 className="text-base font-medium text-white mb-2">We promote, if you want</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Videos for social media. Separate packages, paid monthly.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">04</div>
            <h3 className="text-base font-medium text-white mb-2">We stay for 30 days</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Support on WhatsApp, by phone or face to face.
            </p>
          </div>
        </div>
      </section>

      {/* ── Packages and prices: websites first, then videos (as on /en/packages) ── */}
      <section id="packages" className="scroll-mt-16 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        {/* The automatic jump from the Romanian page keeps the #… part of the address; its anchor there is #pachete. */}
        <span id="pachete" className="block scroll-mt-16" aria-hidden="true" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              <Linie>Clear pricing.</Linie>
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
            Packages adapt to your project. The price agreed at the start doesn't change: anything extra is approved by you first, with its price. No mandatory 12-month contract. {VAT_NOTE_EN}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#070809] grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden">

          {/* Column 1: Website or online store (prices come from lib/packages.ts) */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">
                01 / Websites and stores
              </div>
              <h3 className="text-2xl font-light text-white mb-2"><Linie>Website or Online Store</Linie></h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                <span className="text-xs font-mono text-neutral-500">from</span> {enPrice("site-start")} <span className="text-xs font-mono text-neutral-500">{VAT_LABEL_EN}</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-neutral-300 border-t border-white/5 pt-6 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>{packagesEn["site-start"].name}: {enPrice("site-start")}, {noBreak(`in ${enDelivery("site-start")}`)}</span>
                </div>
                {/* What the price includes, from the registry (rows 1, 6 and 7 of the package: pages, hosting, domain). */}
                {[0, 5, 6].map((i) => (
                  <div key={i} className="flex items-start gap-2 pl-5 text-neutral-400">
                    <span className="text-neutral-600">·</span>
                    <span>{packagesEn["site-start"].includes[i]}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Custom-design website + 15 videos: {enPrice("start-digital")}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>{packagesEn["magazin-start"].name}, with card payment, courier and invoices: {enPrice("magazin-start")}</span>
                </div>
                {[0, 5].map((i) => (
                  <div key={i} className="flex items-start gap-2 pl-5 text-neutral-400">
                    <span className="text-neutral-600">·</span>
                    <span>{packagesEn["magazin-start"].includes[i]}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Complete store + 30 videos: {enPrice("magazin-digital-activ")}</span>
                </div>
              </div>
            </div>

            <Link
              href="/en/packages#web"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full px-4 border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              See all packages →
            </Link>
          </div>

          {/* Column 2: Social Growth (description and bullet points from lib/packagesEn.ts) */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">
                02 / Videos, 3 times a week
              </div>
              <h3 className="text-2xl font-light text-white mb-2"><Linie>Social Growth</Linie></h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                {priceSocial.amount} <span className="text-xs font-mono text-neutral-500">{priceSocial.period} {VAT_LABEL_EN}</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-neutral-300 border-t border-white/5 pt-6 mb-8">
                {social.includes.slice(0, 4).map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="text-neutral-500">—</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/en/contact?pachet=social-growth"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full px-4 border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Ask for this package →
            </Link>
          </div>

          {/* Column 3: Daily Impact • RECOMMENDED (description and bullet points from lib/packagesEn.ts) */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-neutral-900/40 relative">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
                  03 / A video every day
                </span>
                <span className="mech-badge shrink-0 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-black">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-light text-white mb-2"><Linie>Daily Impact</Linie></h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                {priceDaily.amount} <span className="text-xs font-mono text-neutral-400">{priceDaily.period} {VAT_LABEL_EN}</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-neutral-200 border-t border-white/10 pt-6 mb-8">
                {daily.includes.slice(0, 4).map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="text-emerald-400">★</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/en/contact?pachet=daily-impact"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full px-4 bg-white py-3 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-neutral-200 transition-all shadow-md"
            >
              Ask for this package →
            </Link>
          </div>

        </div>

      </section>

      {/* ── Our own software (Alin, 15 Nov 2026; like Labs / Deptify at the big agencies). Data and the source of every claim:
          lib/ownProducts.ts. The same section is in app/HomeClient.tsx; `#software` works on both. ── */}
      <section id="software" className="scroll-mt-24 relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            <Linie>Our own software.</Linie>
          </h2>
          <a
            href="https://kalki.work"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 self-start md:self-auto rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black"
          >
            <span data-no-translate>Kalki Work</span> ↗
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {OWN_PRODUCTS.map((p) => (
            <div key={p.name} className="mech-card rounded-2xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-neutral-500 mb-6">{p.label.en}</div>
                <h3 className="text-xl font-medium text-white mb-3" {...(p.isName ? { "data-no-translate": "" } : {})}>
                  {p.isName ? p.name : <Linie>{MODULES_TITLE_EN}</Linie>}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{p.desc.en}</p>
                {p.where && <p className="mt-3 text-xs text-neutral-400 font-light">{p.where.en}</p>}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on kalki.work`}
                  className="mt-6 self-start text-[11px] font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  kalki.work ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── How people search now: AI assistants ── */}
      <section id="ai-search-geo" className="scroll-mt-16 relative z-20 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/40 via-neutral-950/70 to-neutral-900/30 p-8 md:p-14 backdrop-blur-md">

          <h2 className="max-w-3xl text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            <Linie>In 2026, people no longer just search Google.</Linie><br />
            <span className="text-neutral-400"><Linie>They also ask AI assistants.</Linie></span>
          </h2>

          {/* Which packages include it (names from the registry texts) and where to ask for it separately. */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <div>{`Included in the ${packagesEn["start-digital"].name} and ${packagesEn["magazin-digital-activ"].name} packages. Also available separately, for any site.`}</div>
            <Link
              href="/en/services"
              className="shrink-0 font-mono font-bold text-white hover:underline"
            >
              See all services →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Our work ── */}
      <section id="projects" className="scroll-mt-16 relative z-10 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">

        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            <Linie>Portfolio.</Linie>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selectedWork.map((p) => (
            <div
              key={p.name}
              onMouseEnter={() => sounds.playHover()}
              className="mech-card mech-float-card group relative rounded-2xl border border-white/10 bg-neutral-900/30 p-7 transition-all duration-300 hover:border-white/30 hover:bg-neutral-900/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-[11px] mb-4">
                  <span className={`flex items-center gap-1.5 uppercase tracking-wider ${p.state === "managed" ? "text-emerald-400" : "text-amber-400"}`}>
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${p.state === "managed" ? "bg-emerald-400" : "bg-amber-400"}`} />
                    {p.status}
                  </span>
                  <span className="text-neutral-500 uppercase tracking-wider">{badgeLabel(p.badge)}</span>
                </div>

                <h3 className="text-xl font-medium text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {p.name}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mb-4">{p.category}</div>

                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4">
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 mb-4">
                  <span>Built with: <strong className="text-neutral-400">{p.tech}</strong></span>
                  <span>Hosted on: <strong className="text-neutral-400">{p.host}</strong></span>
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="mech-magnetic mech-btn inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-mono uppercase tracking-widest text-neutral-300 transition-all group-hover:bg-white group-hover:text-black group-hover:font-semibold"
                >
                  Open the site ↗
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/en/portfolio" className="inline-flex rounded-full bg-white px-5 py-2.5 text-xs font-mono font-bold text-black transition hover:bg-neutral-200">
            Full portfolio →
          </Link>
        </div>

      </section>

      {/* ── Final call to action: "Let's talk." (15 Nov 2026, like the big agencies; the same title as on /en/contact). ── */}
      <section className="relative z-10 py-28 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
          <Linie>Let&apos;s talk.</Linie>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-light">
          An answer within 24 working hours.
        </p>
        <Link
          href="/en/contact"
          onMouseEnter={() => sounds.playHover()}
          onClick={() => sounds.playClick()}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-4 text-center text-xs font-mono uppercase tracking-wider sm:tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Write to us →
        </Link>
      </section>

      {/* Live System Inspection Pop-up Modal */}
      <ProjectPreviewModal project={selectedPreview} onClose={() => setSelectedPreview(null)} lang="en" />
    </div>
  );
}
