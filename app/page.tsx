"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

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

// ── Ecosistemul Tehnic Reverb (15 Proiecte Reale Active) ──
const realProjects = [
  {
    name: "Bricolando.ro",
    category: "Comerț Electronic & Retail",
    tech: "WooCommerce / High Performance",
    host: "Hostinger Enterprise",
    desc: "Magazin online complet cu mii de unelte și echipamente, monitorizare automată a concurenței, integrări de plăți, facturare automată și gestiune comenzi.",
    href: "https://bricolando.ro",
    status: "PRODUCȚIE LIVE",
    badge: "eCommerce"
  },
  {
    name: "RaftPlin.ro",
    category: "Comerț Digital & Lifestyle",
    tech: "Arhitectură eCommerce Modernă",
    host: "Hostinger Cloud",
    desc: "Al doilea magazin digital dezvoltat în ecosistem: platformă optimizată pe viteză și experiență de cumpărare simplificată.",
    href: "https://raftplin.ro",
    status: "PRODUCȚIE LIVE",
    badge: "eCommerce"
  },
  {
    name: "Kalki.work",
    category: "Sisteme Software & AI",
    tech: "Next.js / Edge Runtime",
    host: "Cloudflare Pages",
    desc: "Platformă enterprise pentru tehnologii vocale AI (Kalki Voice) și automatizări avansate de fluxuri de lucru.",
    href: "https://kalki.work",
    status: "PRODUCȚIE LIVE",
    badge: "Software AI"
  },
  {
    name: "Kalki.nexus",
    category: "Publishing Digital & Cultură",
    tech: "Arhitectură Editorială & Stripe",
    host: "Cloudflare Network",
    desc: "Platformă culturală cu design minimalist pur, plăți internaționale securizate și gestiune de conținut protejat.",
    href: "https://kalki.nexus",
    status: "PRODUCȚIE LIVE",
    badge: "Publishing"
  },
  {
    name: "Numerarium.app",
    category: "Aplicație Web Interactivă",
    tech: "React / Algoritmi în Timp Real",
    host: "Cloudflare Network",
    desc: "Aplicație web de analiză și calcul dinamic cu mii de vizitatori activi unici lunar și încărcare la milisecundă.",
    href: "https://numerarium.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Bythefire.app",
    category: "Aplicație Digitală & Conexiune",
    tech: "React / State Architecture",
    host: "Cloudflare Network",
    desc: "Aplicație experiențială de lectură și reflecție, construită pe o interfață tactilă caldă și stabilă.",
    href: "https://bythefire.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Elumia.app",
    category: "Aplicație Web & Mindfulness",
    tech: "React / Minimal Canvas",
    host: "Cloudflare Network",
    desc: "Spațiu digital interactiv dedicat clarității mintale și stării de prezență, optimizat pentru dispozitive mobile.",
    href: "https://elumia.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Immortallight.app",
    category: "Aplicație Web & Înțelepciune",
    tech: "React / Audio & Text Engine",
    host: "Cloudflare Network",
    desc: "Platformă digitală interactivă dedicată celor 55 de parabole și învățături filozofice universale.",
    href: "https://immortallight.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Pentora.app",
    category: "Aplicație Interactivă",
    tech: "Vite / Modern JavaScript",
    host: "Cloudflare Network",
    desc: "Instrument digital experimental centrat pe interacțiuni tactile și arhitectură matematică.",
    href: "https://pentora.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "YourFinestForm.com",
    category: "Platformă Filosofie Stoică & Sănătate",
    tech: "React / Multi-Language",
    host: "Cloudflare Network",
    desc: "Prezentare digitală a cărții Armonia (21 de scrisori stoice), cu design editorial fluid și elegant.",
    href: "https://yourfinestform.com",
    status: "PRODUCȚIE LIVE",
    badge: "Platformă"
  },
  {
    name: "Salariuldupataxe.ro",
    category: "Utilitar Web de Calcul Instant",
    tech: "Next.js / Serverless API",
    host: "Vercel Edge",
    desc: "Calculator fiscal de mare acuratețe pentru piața din România, optimizat pentru indexare Google și răspuns instant.",
    href: "https://salariuldupataxe.ro",
    status: "PRODUCȚIE LIVE",
    badge: "Utilitar"
  },
  {
    name: "Arhitecturazilei.ro",
    category: "Portal de Design & Arhitectură",
    tech: "Next.js / SEO Architecture",
    host: "Cloudflare / Vercel",
    desc: "Platformă de conținut și studii de caz despre design structural, compoziție și estetică digitală.",
    href: "https://arhitecturazilei.ro",
    status: "PRODUCȚIE LIVE",
    badge: "Portal"
  },
  {
    name: "Candcinevabea.life",
    category: "Platformă de Conștientizare & Suport",
    tech: "Modern Web / Resurse Educative",
    host: "Hostinger Cloud",
    desc: "Inițiativă de responsabilitate și suport comunitar, construită cu un ton cald, empatic și confidențial.",
    href: "https://candcinevabea.life",
    status: "PRODUCȚIE LIVE",
    badge: "Comunitate"
  },
  {
    name: "Millo.asia",
    category: "Hub Digital Multilingv (9 Limbi)",
    tech: "Next.js / Localizare Dinamică",
    host: "Hostinger Cloud",
    desc: "Ecosistem digital internațional cu jocuri și experiențe interactive distribuite pe subdomenii în 9 limbi.",
    href: "https://millo.asia",
    status: "PRODUCȚIE LIVE",
    badge: "Hub Global"
  },
  {
    name: "DON Barbershop",
    category: "Prezentare Video Cinematică",
    tech: "10k Scroll Engine / HTML5 Canvas",
    host: "Cloudflare Pages",
    desc: "Experiență web bazată pe derulare video cadru cu cadru (scroll scrubbing) și design atmosferic de lux.",
    href: "https://don-barbershop.pages.dev",
    status: "DEMO LIVE",
    badge: "Showcase"
  },
];

export default function HomePage() {
  const [soundActive, setSoundActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("TOATE");

  const toggleSound = () => {
    sounds.enabled = !soundActive;
    setSoundActive(!soundActive);
    if (!soundActive) sounds.playClick();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredProjects =
    activeFilter === "TOATE"
      ? realProjects
      : realProjects.filter((p) => p.badge.toUpperCase() === activeFilter.toUpperCase());

  return (
    <div className="relative bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white overflow-x-hidden antialiased">
      
      {/* ── Interactive Architectural Grid & Cursor Spotlight (Stil Payload / Linear) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
        }}
      />

      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Ambient Radial Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* ── Top Status Banner ── */}
      <div className="relative z-40 border-b border-white/5 bg-[#090a0c] px-6 py-2 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase text-neutral-300">Reverb Digital — Arhitectură Web & Sisteme AI</span>
          </div>
          <div className="hidden sm:block text-neutral-500">
            FONDAT DE GRUPUL SURYA • PARTENER STRATEGIC ZYLARIS GROUP LONDON
          </div>
          <button
            onClick={toggleSound}
            onMouseEnter={() => sounds.playHover()}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            {soundActive ? "● AUDIO ACTIV" : "○ AUDIO"}
          </button>
        </div>
      </div>

      {/* ── Hero Architectural ── */}
      <section className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-32 border-b border-white/10">
        
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.025] blur-[140px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-300 mb-8 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">MAGAZINE ONLINE</span>
            <span className="text-neutral-500">•</span>
            <span>PRODUCȚIE VIDEO AI</span>
            <span className="text-neutral-500">•</span>
            <span>CĂUTARE GENERATIVĂ (GEO)</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-medium tracking-[-0.04em] leading-[1.02] text-white">
            Infrastructură digitală.<br />
            <span className="text-neutral-400 font-light">
              Sisteme care produc valoare.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-neutral-300 font-light leading-relaxed">
            Construim platforme web și magazine online de mare viteză, conectate cu motoare de producție video zilnică AI și optimizate nativ pentru recomandare în ChatGPT, Perplexity și Gemini.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/contact"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] font-bold"
            >
              Discută Proiectul Tău →
            </Link>
            <a
              href="#ai-search-geo"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
            >
              Viziunea Căutării AI (GEO) ↓
            </a>
          </div>

          {/* Quick Contact Line for Mobile & Fast Actions */}
          <div className="mt-6 flex items-center justify-center gap-6 text-[11px] font-mono text-neutral-400">
            <a
              href="https://wa.me/40767235693?text=Salut%20Alin,%20vreau%20o%20discuție%20pentru%20un%20proiect%20cu%20Reverb%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              WhatsApp Rapid: 0767 235 693
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="tel:0767235693"
              className="hover:text-white transition-colors"
            >
              Apel Direct: 0767 235 693
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="mt-20 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-neutral-400 font-mono text-xs">
            <div>
              <div className="text-2xl font-light text-white mb-1">&lt; 1.2s</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Timp Încărcare Site-uri</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">100% AI Ready</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Structură Căutare Generativă</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">15 Active</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Sisteme Reale în Producție</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">Preț Fix</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Fără Costuri Ascunse</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Secțiunea Strategică AI Search & GEO (Inspirată din studiul Profound) ── */}
      <section id="ai-search-geo" className="relative z-20 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/40 via-neutral-950/70 to-neutral-900/30 p-8 md:p-14 backdrop-blur-md">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-4">
              <span>● Noua Paradigmă a Căutării Online</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              În 2026, clienții nu mai caută doar pe Google.<br />
              <span className="text-neutral-400">Ei întreabă agenții AI.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Când un cumpărător întreabă ChatGPT, Perplexity, Claude sau Gemini: <em>„Care este cel mai bun furnizor de servicii sau magazin pentru nevoia mea și cât costă?”</em>, răspunsul este generat instant. Conform celor mai recente cercetări din industrie (Profound 2026), peste 57% dintre site-urile tradiționale sunt invizibile sau citate greșit de către AI, deoarece datele și prețurile lor nu sunt structurate semantic.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-500 mb-4">01 / LIZIBILITATE PENTRU AGENȚI AI</div>
                <h3 className="text-xl font-medium text-white mb-3">AI-Readable Answer Stack</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Implementăm arhitectură semantică JSON-LD avansată și entități corelate direct în cod. Sistemele tale devin direct accesibile și citabile de către modelele de limbaj mari.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                LLM PARSING • SCHEMA ENRICHMENT
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-500 mb-4">02 / STRUCTURĂ TRANSPARENTĂ</div>
                <h3 className="text-xl font-medium text-white mb-3">Indexare Prețuri & Servicii</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  AI-ul compară și recomandă soluții înainte ca un client să discute cu vânzările. Ne asigurăm că pachetele și valoarea afacerii tale sunt reprezentate corect și favorabil în sintezele AI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                ACCURATE PRICING • CITATION CONTROL
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-500 mb-4">03 / GENERATIVE ENGINE OPTIMIZATION</div>
                <h3 className="text-xl font-medium text-white mb-3">Generative Engine Optimization (GEO)</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Trecem dincolo de SEO-ul clasic bazat pe cuvinte cheie statice. Optimizăm întreaga prezență a afacerii pentru a deveni sursa autoritară recomandată de noile motoare de căutare generative.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                PERPLEXITY • CHATGPT • GEMINI
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── How We Operate / Cum Operăm (Structura Zylaris) ── */}
      <section id="how-we-operate" className="relative z-20 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Modelul Operațional</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Cum operăm: <br />
              <span className="text-neutral-400">Arhitectură, nu doar design.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 text-neutral-400 text-sm md:text-base leading-relaxed">
            Nu privim un website sau un canal de marketing ca pe o componentă izolată. Aplicăm un cadru sistematic în patru etape pentru a asigura că fiecare linie de cod și fiecare activ creat servește un obiectiv operațional precis: achiziție, retenție sau eficiență de cost.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-neutral-500 mb-6">/ 01 — PROIECTĂM</div>
              <h3 className="text-xl font-medium text-white mb-3">Fundație Inginerească</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Structuri web de mare viteză cu timpi de răspuns sub 1.2s. Bază tehnică gândită pentru scalabilitate pe termen lung, fără cod duplicat sau dependențe fragile.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
              NEXT.JS • CLOUDFLARE • EDGE
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-neutral-500 mb-6">/ 02 — CONECTĂM</div>
              <h3 className="text-xl font-medium text-white mb-3">Fluxuri de Vânzare</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Integrăm canalele de achiziție, cataloagele de produse, sistemele de plăți cu cardul, facturarea automată și livrarea prin curieri într-un mecanism continuu.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
              ECOMMERCE • AWB • FACTURARE
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-neutral-500 mb-6">/ 03 — AUTOMATIZĂM</div>
              <h3 className="text-xl font-medium text-white mb-3">Capabilități AI</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Generare de conținut video și imagini pentru rețele sociale prin modele AI generative, plus optimizare nativă pentru motoarele de răspuns AI.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
              GOOGLE AI • GEO • AUTOMATIZARE
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-neutral-500 mb-6">/ 04 — SCALĂM</div>
              <h3 className="text-xl font-medium text-white mb-3">Creștere Măsurabilă</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Date transparente, monitorizarea directă a cererilor și optimizare continuă. Afacerea ta deține controlul complet asupra propriilor date și active.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500">
              ANALYTICS • CONTROL TOTAL
            </div>
          </div>

        </div>
      </section>

      {/* ── Ecosistemul Tehnic Reverb (Toate cele 15 Proiecte Reale Active) ── */}
      <section id="proiecte" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Ecosistemul Tehnic Reverb</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              Sisteme active în producție.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 max-w-xs text-left md:text-right">
            Active digitale reale dezvoltate pe Cloudflare, Vercel, Hostinger și GitHub.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-white/5">
          {["TOATE", "ECOMMERCE", "SOFTWARE AI", "APLICAȚIE", "UTILITAR", "PLATFORMĂ"].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveFilter(tab); sounds.playClick(); }}
              className={`rounded-full px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${
                activeFilter === tab
                  ? "bg-white text-black font-bold shadow-sm"
                  : "bg-white/5 text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="group rounded-2xl border border-white/10 bg-neutral-900/20 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/40 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-6">
                  <span>{p.category}</span>
                  <span className="border border-white/10 rounded-full px-2 py-0.5 text-neutral-400 group-hover:text-white transition-colors">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="text-sm text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all">↗</span>
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-500">
                <span>{p.tech}</span>
                <span className="text-neutral-400">{p.host}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Pachete & Prețuri Structurate (Transparență Totală) ── */}
      <section id="pachete" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Investiție Clară</div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4">
            Structură de prețuri fixe. Fără surprize.
          </h2>
          <p className="text-neutral-400 text-sm">
            Fiecare pachet include un set ferm de livrabile, fără costuri ascunse sau estimări vagi.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          
          {/* Pachet 1: Social Growth */}
          <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">Prezență Constantă</div>
              <h3 className="text-2xl font-medium text-white mb-2">Social Growth</h3>
              <div className="text-4xl font-light text-white mb-4">€390 <span className="text-xs font-mono text-neutral-400">/ lună</span></div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                Pentru companii și servicii locale care vor vizibilitate continuă și credibilitate vizuală pe rețele.
              </p>
              <ul className="space-y-3 text-xs text-neutral-300 font-mono mb-8 border-t border-white/5 pt-6">
                <li>• 12 clipuri video scurte / lună (3/săpt.)</li>
                <li>• 12 postări grafice adaptate</li>
                <li>• Publicare TikTok, Reels, Shorts, Facebook</li>
                <li>• Scenarii de vânzare și subtitrări dinamice</li>
              </ul>
            </div>
            <Link
              href="/contact"
              onClick={() => sounds.playClick()}
              className="block text-center rounded-full border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Alege Pachetul →
            </Link>
          </div>

          {/* Pachet 2: Daily Impact */}
          <div className="relative rounded-3xl border border-white/30 bg-gradient-to-b from-neutral-900 to-[#121315] p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-100 lg:scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-black">
              CEL MAI SOLICITAT
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 mt-2">1 Clip În Fiecare Zi</div>
              <h3 className="text-2xl font-medium text-white mb-2">Daily Impact</h3>
              <div className="text-4xl font-light text-white mb-4">€690 <span className="text-xs font-mono text-neutral-400">/ lună</span></div>
              <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                Pentru magazine online și companii care vor creștere susținută prin volum zilnic de demonstrații video de produse.
              </p>
              <ul className="space-y-3 text-xs text-neutral-200 font-mono mb-8 border-t border-white/10 pt-6">
                <li>★ 30 de clipuri video scurte / lună (1/zi)</li>
                <li>★ 30 de postări grafice adaptate fiecărei platforme</li>
                <li>★ Demonstrații de produse și utilaje în acțiune</li>
                <li>★ Voiceover sintetic de înaltă fidelitate</li>
                <li>★ Monitorizare săptămânală a impactului</li>
              </ul>
            </div>
            <Link
              href="/contact"
              onClick={() => sounds.playClick()}
              className="block text-center rounded-full bg-white py-3 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-neutral-200 transition-all shadow-md"
            >
              Activează Daily Impact →
            </Link>
          </div>

          {/* Pachet 3: Magazin Digital Activ */}
          <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">Construcție + Conținut + GEO</div>
              <h3 className="text-2xl font-medium text-white mb-2">Magazin Digital Activ</h3>
              <div className="text-4xl font-light text-white mb-4">€2.940 <span className="text-xs font-mono text-neutral-400">setup complet</span></div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                Magazin online construit de la zero, integrat complet cu procese de vânzare, optimizare pentru căutare AI și 30 de clipuri video de lansare.
              </p>
              <ul className="space-y-3 text-xs text-neutral-300 font-mono mb-8 border-t border-white/5 pt-6">
                <li>• Arhitectură eCommerce de mare viteză</li>
                <li>• Opțiune Panou Control Enterprise (Payload CMS / Woo)</li>
                <li>• Plăți securizate cu cardul, facturare, AWB curier</li>
                <li>• Optimizare Answer Engine (GEO) & 30 clipuri video</li>
              </ul>
            </div>
            <Link
              href="/contact"
              onClick={() => sounds.playClick()}
              className="block text-center rounded-full border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Construiește Magazinul →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Footer Structurat cu Link Direct către Zylaris Group ── */}
      <footer className="border-t border-white/10 bg-[#050607] py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-sm font-bold tracking-[0.25em] uppercase text-white mb-2">REVERB DIGITAL</div>
            <p className="text-xs text-neutral-500 font-mono">
              Infrastructură digitală, sisteme web și căutare generativă. Ecosistem al Grupului Surya.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-mono text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">Site Principal</Link>
            <Link href="/showcase" className="hover:text-white transition-colors">Showcase</Link>
            <Link href="/despre" className="hover:text-white transition-colors">Despre Noi</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <div className="text-neutral-500">
              Partener strategic:{" "}
              <a
                href="https://zylarisgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors underline underline-offset-4"
              >
                Zylaris Group London
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
