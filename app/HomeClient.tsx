"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import WhoWeAre from "@/components/WhoWeAre";
import WorkShots from "@/components/WorkShots";
import { OutlineRun, Linie } from "@/components/RunningLine";
import { heroRo } from "@/lib/outlineRun/heroRo";
import ProjectPreviewModal, { PreviewProject } from "@/components/ProjectPreviewModal";
import { inProduction, liveProjectsRo } from "@/lib/liveProjects";
import { pkg, priceLei, splitPrice, noBreak, VAT_LABEL, VAT_NOTE } from "@/lib/packages";

// Cardurile de preț de pe prima pagină citesc din registru (lib/packages.ts), ca /pachete.
// Coloanele video își iau și descrierea, și punctele tot din registru (primele 4), ca prima pagină să nu promită altceva decât pachetul.
const social = pkg("social-growth");
const daily = pkg("daily-impact");
const pretSocial = splitPrice(social.price);
const pretDaily = splitPrice(daily.price);
const siteStart = pkg("site-start");
const siteVideo = pkg("start-digital");
const magazinStart = pkg("magazin-start");
const magazinVideo = pkg("magazin-digital-activ");

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

// ── Lucrările Reverb (lista unică din lib/liveProjects.ts) ──
const realProjects = liveProjectsRo;

// Trei lucrări arătate cu poză imediat sub primul ecran (aceleași ca pe /pachete; pozele sunt în components/WorkShots.tsx).
const lucrari = ["Bricolando.ro", "RaftPlin.ro", "Kalki.nexus"].map((n) => realProjects.find((p) => p.name === n)).filter((p) => !!p);

// „aproximativ 1.730 lei cu TVA” → „aproximativ 1.730 lei” (rândul de sub prețuri spune o singură dată că e cu TVA).
const lei = (price: string) => priceLei(price).replace(" cu TVA", "");

// Filtrele: eticheta e pe înțeles, filtrarea se face după câmpul `badge` din lib/liveProjects.ts (fără `badges` = toate).
const FILTRE: { label: string; badges?: string[] }[] = [
  { label: "TOATE" },
  { label: "MAGAZINE", badges: ["eCommerce"] },
  { label: "SOFTWARE", badges: ["Software AI"] },
  { label: "APLICAȚII", badges: ["Aplicație"] },
  { label: "UNELTE", badges: ["Utilitar"] },
  { label: "SITE-URI", badges: ["Platformă"] },
  { label: "CONCEPTE", badges: ["Showcase"] },
];

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("TOATE");
  const [selectedPreview, setSelectedPreview] = useState<PreviewProject | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filtru = FILTRE.find((f) => f.label === activeFilter);
  const filteredProjects = filtru?.badges ? realProjects.filter((p) => filtru.badges!.includes(p.badge)) : realProjects;

  return (
    <div className="relative bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white overflow-x-hidden antialiased">
      
      {/* ── Grila de fundal și lumina de sub cursor ── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
        }}
      />

      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] light:opacity-[0.075]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Ambient Radial Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* ── Primul ecran ── */}
      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/10">
        
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.025] blur-[140px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-300 mb-8 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">SITE-URI</span>
            <span className="text-neutral-500">•</span>
            <span>MAGAZINE ONLINE</span>
            <span className="text-neutral-500">•</span>
            <span>CLIPURI VIDEO</span>
          </div>

          {/* Textul rândului gri e și în lib/outlineRun/heroRo.ts (scripts/linia_litere.py) și în IN_PLUS din scripts/i18n_extrage.py: se schimbă împreună. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium tracking-[-0.04em] leading-[1.04] text-white break-words">
            Site-uri și magazine online.<br />
            <span className="text-neutral-400 font-light">
              <OutlineRun text="Pentru afaceri la început." data={heroRo} />
            </span>
          </h1>

          {/* De la cât pornește fiecare (din registru). Un singur șir, ca traducerea să nu se facă pe bucăți. */}
          <p className="mt-7 max-w-2xl text-sm md:text-base text-white leading-relaxed">
            {`Site de la ${siteStart.price} · magazin online de la ${magazinStart.price} · clipuri de la ${social.price}`}
            <span className="block mt-1 text-xs text-neutral-400 font-light">{`Prețuri fără TVA. În lei, cu TVA inclus: site de la ${lei(siteStart.price)}, magazin de la ${lei(magazinStart.price)}.`}</span>
          </p>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-neutral-300 font-light leading-relaxed">
            Îți facem un site de prezentare (câteva pagini despre firma ta) sau un magazin online, la preț fix. Dacă vrei, îți facem și clipuri video pentru rețelele sociale și pregătim site-ul ca să fie găsit de oamenii care întreabă ChatGPT.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/contact"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] font-bold"
            >
              Discută Proiectul Tău →
            </Link>
            <a
              href="#pachete"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
            >
              Vezi pachetele și prețurile ↓
            </a>
          </div>

          {/* Quick Contact Line for Mobile & Fast Actions */}
          <div className="mt-6 flex items-center justify-center gap-6 text-[11px] font-mono text-neutral-400">
            <a
              href="https://wa.me/40767235693?text=Salut,%20vreau%20o%20discuție%20pentru%20un%20proiect%20cu%20Reverb%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              WhatsApp Rapid: 0767&nbsp;235&nbsp;693
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="tel:0767235693"
              className="hover:text-white transition-colors"
            >
              Apel Direct: 0767&nbsp;235&nbsp;693
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="mt-20 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-neutral-400 font-mono text-xs">
            {/* Cifrele vin din registru și din lista de proiecte; nu se scriu de mână (în afară de cele 30 de zile de sprijin, care sunt în textul pachetelor). */}
            <div>
              <div className="text-2xl font-light text-white mb-1">{noBreak(siteStart.delivery)}</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Atât durează un site simplu</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">30 de zile</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Sprijin după lansare</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">{`${inProduction(realProjects)} proiecte`}</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Făcute de noi, online acum</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">Preț Fix</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Fără Costuri Ascunse</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Trei lucrări cu poză, imediat sub primul ecran (cititorii fără context: „nu scriu nimănui înainte să văd lucrări”) ── */}
      <section className="relative z-10 py-16 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <p className="text-sm text-neutral-300 font-light leading-relaxed">
          Înainte să alegi, vezi ce am construit. Câteva lucrări care sunt online acum:
        </p>
        <WorkShots items={lucrari} />
        <div className="mt-4 flex flex-wrap gap-2.5">
          <Link href="/portofoliu" className="rounded-full bg-white px-4 py-2 text-xs font-mono font-bold text-black transition hover:bg-neutral-200">Vezi toate lucrările →</Link>
          <Link href="/showcase" className="rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black">Galeria de concepte →</Link>
        </div>
        {/* Cine a făcut lucrările de mai sus (Alin, 13 nov 2026: „Pune cine suntem și pe prima pagină”). */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">Cine suntem</div>
          <WhoWeAre full />
        </div>
      </section>

      {/* ── Cum lucrăm: patru pași ── */}
      <section id="how-we-operate" className="scroll-mt-16 relative z-20 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Pas cu pas</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              <Linie>Cum lucrăm.</Linie><br />
              <span className="text-neutral-400"><Linie>Patru pași, de la idee la lansare.</Linie></span>
            </h2>
          </div>
          <div className="lg:col-span-7 text-neutral-400 text-sm md:text-base leading-relaxed">
            Nu trebuie să te pricepi la site-uri. Ne spui ce vinzi și ne dai textele și pozele; de restul ne ocupăm noi, în patru pași.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="mech-card rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
            <div className="font-mono text-xs text-neutral-500 mb-6">/ 01 — DISCUTĂM</div>
            <h3 className="text-xl font-medium text-white mb-3"><Linie>Ce ai nevoie</Linie></h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Ne spui ce vinzi și cui. Primești de la noi un termen clar și un preț fix înainte să înceapă lucrul.
            </p>
          </div>

          <div className="mech-card rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
            <div className="font-mono text-xs text-neutral-500 mb-6">/ 02 — CONSTRUIM</div>
            <h3 className="text-xl font-medium text-white mb-3"><Linie>Site-ul sau magazinul</Linie></h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              {`Un site simplu e gata în ${siteStart.delivery}, un magazin în ${magazinStart.delivery}. La magazine legăm plata cu cardul, facturile și curierul. Plătești jumătate la început și jumătate la predare.`}
            </p>
          </div>

          <div className="mech-card rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
            <div className="font-mono text-xs text-neutral-500 mb-6">/ 03 — PROMOVĂM</div>
            <h3 className="text-xl font-medium text-white mb-3"><Linie>Clipuri, dacă le vrei</Linie></h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Îți facem clipuri video scurte pentru rețelele sociale, cu ajutorul AI, ca oamenii să afle de tine. Sunt pachete separate, cu plată lunară.
            </p>
          </div>

          <div className="mech-card rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
            <div className="font-mono text-xs text-neutral-500 mb-6">/ 04 — RĂMÂNEM</div>
            <h3 className="text-xl font-medium text-white mb-3"><Linie>30 de zile lângă tine</Linie></h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              După lansare ai 30 de zile de sprijin pe WhatsApp, la telefon sau față în față. Îți arătăm cum adaugi produse și texte și ce ai de făcut ca să ajungi la primele comenzi.
            </p>
          </div>

        </div>
      </section>

      {/* ── Pachete și prețuri: site-urile întâi, apoi clipurile (ca pe /pachete) ── */}
      <section id="pachete" className="scroll-mt-16 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Știi dinainte cât plătești
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              <Linie>Prețuri fixe. Fără surprize.</Linie>
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
            Fiecare pachet are o listă fixă cu ce primești, fără costuri ascunse și fără contract obligatoriu pe 12 luni. {VAT_NOTE}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#070809] grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden">

          {/* Coloana 1: Site sau magazin online (prețurile vin din lib/packages.ts) */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">
                01 / Site-uri și magazine
              </div>
              <h3 className="text-2xl font-light text-white mb-2"><Linie>Site sau Magazin Online</Linie></h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                <span className="text-xs font-mono text-neutral-500">de la</span> {siteStart.price} <span className="text-xs font-mono text-neutral-500">{VAT_LABEL}</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                Site de prezentare sau magazin online, la preț fix. Pachetele mari adaugă design exclusiv și clipuri video de lansare.
              </p>

              <div className="space-y-3 font-mono text-xs text-neutral-300 border-t border-white/5 pt-6 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>{siteStart.name}: {siteStart.price}, {noBreak(`în ${siteStart.delivery}`)}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Site cu design exclusiv + 15 clipuri: {siteVideo.price}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>{magazinStart.name}, cu plată cu cardul, curier și facturi: {magazinStart.price}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Magazin complet + 30 de clipuri: {magazinVideo.price}</span>
                </div>
              </div>
            </div>

            <Link
              href="/pachete#web"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full px-4 border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Vezi toate pachetele →
            </Link>
          </div>

          {/* Coloana 2: Social Growth (descrierea și punctele din registru) */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">
                02 / Clipuri, de 3 ori pe săptămână
              </div>
              <h3 className="text-2xl font-light text-white mb-2"><Linie>Social Growth</Linie></h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                {pretSocial.amount} <span className="text-xs font-mono text-neutral-500">{pretSocial.period} {VAT_LABEL}</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                {social.tagline}
              </p>

              <div className="space-y-3 font-mono text-xs text-neutral-300 border-t border-white/5 pt-6 mb-8">
                {social.includes.slice(0, 4).map((punct) => (
                  <div key={punct} className="flex items-start gap-2">
                    <span className="text-neutral-500">—</span>
                    <span>{punct}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contact?pachet=social-growth"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full px-4 border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Cere acest pachet →
            </Link>
          </div>

          {/* Coloana 3: Daily Impact • RECOMANDAT (descrierea și punctele din registru) */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-neutral-900/40 relative">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
                  03 / Un clip în fiecare zi
                </span>
                <span className="mech-badge shrink-0 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-black">
                  Recomandat
                </span>
              </div>
              <h3 className="text-2xl font-light text-white mb-2"><Linie>Daily Impact</Linie></h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                {pretDaily.amount} <span className="text-xs font-mono text-neutral-400">{pretDaily.period} {VAT_LABEL}</span>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-8">
                {daily.tagline}
              </p>

              <div className="space-y-3 font-mono text-xs text-neutral-200 border-t border-white/10 pt-6 mb-8">
                {daily.includes.slice(0, 4).map((punct) => (
                  <div key={punct} className="flex items-start gap-2">
                    <span className="text-emerald-400">★</span>
                    <span>{punct}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contact?pachet=daily-impact"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full px-4 bg-white py-3 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-neutral-200 transition-all shadow-md"
            >
              Cere acest pachet →
            </Link>
          </div>

        </div>

      </section>

      {/* ── Cum caută oamenii acum: asistenții AI ── */}
      <section id="ai-search-geo" className="scroll-mt-16 relative z-20 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">

        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/40 via-neutral-950/70 to-neutral-900/30 p-8 md:p-14 backdrop-blur-md">

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-wide sm:tracking-widest text-neutral-300 mb-4">
              <span>● Cum caută oamenii acum</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              <Linie>În 2026, clienții nu mai caută doar pe Google.</Linie><br />
              <span className="text-neutral-400"><Linie>Întreabă și asistenții AI.</Linie></span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Tot mai mulți oameni întreabă ChatGPT, Perplexity, Claude sau Gemini lucruri ca „De unde cumpăr miere de salcâm și cât costă?” și primesc pe loc un răspuns cu câteva nume. Dacă pe site-ul tău nu scrie limpede ce vinzi și la ce preț, s-ar putea ca asistentul să nu te pomenească.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="mech-card rounded-2xl border border-white/10 bg-neutral-900/40 p-8">
              <div className="text-xs font-mono text-neutral-500 mb-4">01 / PE ÎNȚELESUL ASISTENȚILOR AI</div>
              <h3 className="text-xl font-medium text-white mb-3"><Linie>Un site pe care AI-ul îl poate citi</Linie></h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Scriem limpede în site cine ești, ce vinzi și unde te găsesc clienții, într-un fel pe care îl pot citi și asistenții AI.
              </p>
            </div>

            <div className="mech-card rounded-2xl border border-white/10 bg-neutral-900/40 p-8">
              <div className="text-xs font-mono text-neutral-500 mb-4">02 / PREȚURI LA VEDERE</div>
              <h3 className="text-xl font-medium text-white mb-3"><Linie>Prețuri și servicii scrise clar</Linie></h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Asistenții AI compară ofertele înainte ca omul să sune pe cineva. Scriem pachetele și prețurile tale clar, ca ei să le poată prelua corect.
              </p>
            </div>

            <div className="mech-card rounded-2xl border border-white/10 bg-neutral-900/40 p-8">
              <div className="text-xs font-mono text-neutral-500 mb-4">03 / DINCOLO DE GOOGLE</div>
              <h3 className="text-xl font-medium text-white mb-3"><Linie>Un motiv ca AI-ul să te recomande</Linie></h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Pe lângă ce facem ca să apari pe Google, punem pe site răspunsurile la întrebările pe care oamenii le pun asistenților AI, ca ei să aibă de ce să te recomande.
              </p>
            </div>

          </div>

          {/* În ce pachete intră (numele din registru) și unde se cere separat. Un singur șir. */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <div>{`Intră în pachetele ${siteVideo.name} și ${magazinVideo.name}. Se poate face și separat, pentru orice site.`}</div>
            <Link href="/servicii" className="shrink-0 font-mono font-bold text-white hover:underline">
              Vezi serviciile →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Lucrările noastre ── */}
      <section id="proiecte" className="scroll-mt-16 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Lucrările noastre</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              <Linie>Ce am făcut până acum.</Linie>
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 max-w-xs text-left md:text-right">
            Magazine, aplicații și site-uri pe care le poți deschide chiar acum.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-white/5">
          {FILTRE.map(({ label }) => (
            <button
              key={label}
              onClick={() => { setActiveFilter(label); sounds.playClick(); }}
              className={`mech-magnetic rounded-full px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${
                activeFilter === label
                  ? "bg-white text-black font-bold shadow-sm"
                  : "bg-white/5 text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* grid-cols-1 explicit: fără el, coloana implicită se lățește după textul netăiat și cardul iese din ecran pe telefon */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <div
              key={p.name}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => { setSelectedPreview(p); sounds.playClick(); }}
              className="mech-card mech-float-card group cursor-pointer rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-6">
                  <span>{p.category}</span>
                  <span className="mech-badge shrink-0 whitespace-nowrap border border-white/10 rounded-full px-2 py-0.5 text-neutral-400 group-hover:text-white transition-colors">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono gap-2">
                <span className="min-w-0 text-neutral-500 truncate">{p.tech}</span>
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="mech-telemetry inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-neutral-400 group-hover:text-emerald-400 transition-colors">
                    <span>PREVIZUALIZARE</span>
                    <span className="text-xs">👁️</span>
                  </span>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="Deschide direct în tab nou"
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-0.5"
                  >
                    <span>{p.host}</span>
                    <span className="text-[9px]">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ── Chemarea de la capăt: aceleași texte ca la capătul paginii /despre (deja traduse în toate limbile). ── */}
      <section className="relative z-10 py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-4">Pregătit pentru Următorul Pas?</div>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
          <Linie>Hai să construim site-ul afacerii tale.</Linie>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Vorbim concret despre ce vinzi și unde vrei să ajungi. Primești un plan clar, un preț fix și un termen precis de livrare.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-4 text-center text-xs font-mono uppercase tracking-wider sm:tracking-widest text-black hover:bg-neutral-200 transition-colors"
        >
          Programează o Discuție Directă →
        </Link>
      </section>

      {/* Live System Inspection Pop-up Modal */}
      <ProjectPreviewModal project={selectedPreview} onClose={() => setSelectedPreview(null)} lang="ro" />
    </div>
  );
}
