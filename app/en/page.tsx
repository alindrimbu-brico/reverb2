"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TechAuthorityGrid from "@/components/TechAuthorityGrid";
import ProjectPreviewModal, { PreviewProject } from "@/components/ProjectPreviewModal";

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

// ── Real Live Technical Ecosystem • 15 Active Production Systems ──
const realProjects = [
  {
    name: "Bricolando.ro",
    category: "E-Commerce & Retail",
    tech: "WooCommerce / High Performance",
    host: "Hostinger Enterprise",
    desc: "Complete online store with thousands of tools and equipment, automated competitor price monitoring, payment gateways, automated invoicing, and fulfillment management.",
    href: "https://bricolando.ro",
    status: "LIVE PRODUCTION",
    badge: "eCommerce"
  },
  {
    name: "RaftPlin.ro",
    category: "Digital Commerce & Lifestyle",
    tech: "Modern eCommerce Architecture",
    host: "Hostinger Cloud",
    desc: "Second digital store developed within the ecosystem: streamlined platform optimized for velocity and simplified purchasing experience.",
    href: "https://raftplin.ro",
    status: "LIVE PRODUCTION",
    badge: "eCommerce"
  },
  {
    name: "Kalki.work",
    category: "Software Systems & AI",
    tech: "Next.js / Edge Runtime",
    host: "Cloudflare Pages",
    desc: "Enterprise platform for AI voice technologies Kalki Voice and advanced workflow automations.",
    href: "https://kalki.work",
    status: "LIVE PRODUCTION",
    badge: "AI Software"
  },
  {
    name: "Kalki.nexus",
    category: "Digital Publishing & Culture",
    tech: "Editorial Architecture & Stripe",
    host: "Cloudflare Network",
    desc: "Cultural digital publication with pure minimalist design, secure global payments, and protected content management.",
    href: "https://kalki.nexus",
    status: "LIVE PRODUCTION",
    badge: "Publishing"
  },
  {
    name: "Numerarium.app",
    category: "Interactive Web Application",
    tech: "React / Real-time Algorithms",
    host: "Cloudflare Network",
    desc: "Analytical and dynamic computational web application with thousands of active monthly users and sub-second execution.",
    href: "https://numerarium.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Bythefire.app",
    category: "Digital Reading & Reflection",
    tech: "React / State Architecture",
    host: "Cloudflare Network",
    desc: "Experiential reading and contemplation app engineered on a warm, tactile, and highly stable interface.",
    href: "https://bythefire.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Elumia.app",
    category: "Web App & Mindfulness",
    tech: "React / Minimal Canvas",
    host: "Cloudflare Network",
    desc: "Interactive digital space dedicated to mental clarity and presence, engineered seamlessly for mobile devices.",
    href: "https://elumia.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Immortallight.app",
    category: "Wisdom & Parables Web App",
    tech: "React / Audio & Text Engine",
    host: "Cloudflare Network",
    desc: "Interactive digital platform dedicated to 55 philosophical parables and universal wisdom teachings.",
    href: "https://immortallight.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Pentora.app",
    category: "Interactive Application",
    tech: "Vite / Modern JavaScript",
    host: "Cloudflare Network",
    desc: "Experimental digital instrument centered on tactile interactions and mathematical symmetry.",
    href: "https://pentora.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Hartainimii.ro",
    category: "Interactive Visual Architecture",
    tech: "Next.js / SVG Canvas Engine",
    host: "Cloudflare Pages",
    desc: "Interactive emotional cartography and visual exploration interface, optimized for rapid fluid rendering.",
    href: "https://hartainimii.ro",
    status: "LIVE PRODUCTION",
    badge: "Platform"
  },
  {
    name: "Arhitecturazilei.ro",
    category: "Structural Analysis & Insights",
    tech: "Next.js / Daily Engine",
    host: "Cloudflare Pages",
    desc: "Editorial and analytical portal generating structured daily insights on business rhythms and architecture.",
    href: "https://arhitecturazilei.ro",
    status: "LIVE PRODUCTION",
    badge: "Portal"
  },
  {
    name: "Candcinevabea.life",
    category: "Support & Community Platform",
    tech: "Modern Web / Educational Hub",
    host: "Hostinger Cloud",
    desc: "Community responsibility and confidential guidance initiative, built with an empathetic, secure, and warm tone.",
    href: "https://candcinevabea.life",
    status: "LIVE PRODUCTION",
    badge: "Community"
  },
  {
    name: "Millo.asia",
    category: "Multilingual Global Hub in 9 Languages",
    tech: "Next.js / Dynamic Localization",
    host: "Hostinger Cloud",
    desc: "International digital ecosystem with interactive games and educational experiences distributed across subdomains in 9 languages.",
    href: "https://millo.asia",
    status: "LIVE PRODUCTION",
    badge: "Global Hub"
  },
  {
    name: "DON Barbershop",
    category: "Cinematic Video Showcase",
    tech: "10k Scroll Engine / HTML5 Canvas",
    host: "Cloudflare Pages",
    desc: "Luxury web experience based on frame-by-frame video scroll scrubbing and atmospheric craft aesthetic.",
    href: "https://don-barbershop.pages.dev",
    status: "LIVE DEMO",
    badge: "Showcase"
  },
];

export default function EnglishHomePage() {
  const [soundActive, setSoundActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedPreview, setSelectedPreview] = useState<PreviewProject | null>(null);

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
    activeFilter === "ALL"
      ? realProjects
      : realProjects.filter((p) => p.badge.toUpperCase() === activeFilter.toUpperCase());

  return (
    <div className="relative bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white overflow-x-hidden antialiased">
      
      {/* ── Interactive Architectural Grid & Cursor Spotlight ── */}
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
            <span className="uppercase text-neutral-300">Reverb Digital — Web Architecture & AI Systems</span>
          </div>
          <div className="hidden sm:block text-neutral-500">
            FOUNDED BY SURYA GROUP • HIGH-VELOCITY DIGITAL PLATFORMS
          </div>
          <button
            onClick={toggleSound}
            onMouseEnter={() => sounds.playHover()}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            {soundActive ? "● AUDIO ON" : "○ AUDIO"}
          </button>
        </div>
      </div>

      {/* ── Hero Architectural ── */}
      <section className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-32 border-b border-white/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.025] blur-[140px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-300 mb-8 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">ONLINE STORES</span>
            <span className="text-neutral-500">•</span>
            <span>AI VIDEO PRODUCTION</span>
            <span className="text-neutral-500">•</span>
            <span>GENERATIVE AI SEARCH GEO</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-medium tracking-[-0.04em] leading-[1.02] text-white">
            Digital infrastructure.<br />
            <span className="text-neutral-400 font-light">
              Systems that produce value.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-neutral-300 font-light leading-relaxed">
            We engineer high-velocity web platforms and online stores, natively connected with daily AI video engines and optimized for recommendation across ChatGPT, Perplexity, and Gemini.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/en/contact"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] font-bold"
            >
              Discuss Your Project →
            </Link>
            <a
              href="#ai-search-geo"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
            >
              The AI Search Vision GEO ↓
            </a>
          </div>

          {/* Quick Contact Line for Mobile & Direct Communication */}
          <div className="mt-6 flex items-center justify-center gap-6 text-[11px] font-mono text-neutral-400">
            <a
              href="https://wa.me/40767235693?text=Hello%20Alin,%20I%20would%20like%20to%20discuss%20a%20project%20with%20Reverb%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Direct WhatsApp: +40 767 235 693
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="tel:0767235693"
              className="hover:text-white transition-colors"
            >
              Direct Call
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="mt-20 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-neutral-400 font-mono text-xs">
            <div>
              <div className="text-2xl font-light text-white mb-1">&lt; 1.2s</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Page Load Time</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">100% AI Ready</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Generative Search Structure</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">15 Active</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">Live Production Systems</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">Fixed Price</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">No Hidden Costs</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Strategic AI Search & GEO Section • Profound Research ── */}
      <section id="ai-search-geo" className="relative z-20 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/40 via-neutral-950/70 to-neutral-900/30 p-8 md:p-14 backdrop-blur-md">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-300 mb-4">
              <span>● The New Search Paradigm</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
              In 2026, clients no longer just search Google.<br />
              <span className="text-neutral-400">They query AI agents.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-neutral-300 leading-relaxed font-light">
              Traditional SEO was designed for search algorithms that index keywords. Large Language Models (ChatGPT, Perplexity, Claude, Gemini) operate differently: they synthesize answers, compare pricing matrices, and evaluate brand authority. If your digital infrastructure is not structured semantically, AI agents will cite your competitors instead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="mech-card rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs font-mono uppercase text-emerald-400 mb-3 tracking-wider">01 / Answer Stack Architecture</div>
              <h3 className="text-lg font-medium text-white mb-2">Machine-Readable Semantic Data</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                We engineer rich JSON-LD schema layers and structured knowledge graphs, ensuring LLMs understand your exact services, catalog items, and technical capabilities instantly.
              </p>
            </div>

            <div className="mech-card rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs font-mono uppercase text-emerald-400 mb-3 tracking-wider">02 / Pricing Transparency for LLMs</div>
              <h3 className="text-lg font-medium text-white mb-2">Eliminating Price Hallucinations</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Recent studies show AI agents hallucinate prices when websites hide numbers behind &apos;Request a Quote&apos; forms. We publish clear, structured pricing tiers that AI cites with 100% confidence.
              </p>
            </div>

            <div className="mech-card rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="text-xs font-mono uppercase text-emerald-400 mb-3 tracking-wider">03 / Generative Engine Optimization</div>
              <h3 className="text-lg font-medium text-white mb-2">Becoming the Recommended Source</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                When a user asks: &quot;What is the best platform for my business?&quot;, our semantic authority architecture positions your company as the verified, high-trust recommendation.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div>
              Payload CMS Enterprise Integration: <span className="text-white">Next.js Native Headless Control</span>
            </div>
            <Link
              href="/en/services"
              className="text-white hover:underline flex items-center gap-1 font-bold"
            >
              Explore Full Capabilities →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Live Technical Ecosystem Showcase • 15 Live Systems ── */}
      <section className="relative z-10 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Portfolio & Ecosystem
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              Live Production Systems
            </h2>
            <p className="mt-4 text-sm text-neutral-400 font-light max-w-xl">
              15 active platforms engineered, hosted, and monitored in real time across Cloudflare, Vercel, and Hostinger. Real operations, real revenue.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {["ALL", "ECOMMERCE", "AI SOFTWARE", "PUBLISHING", "APPLICATION", "PORTAL"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  sounds.playClick();
                  setActiveFilter(filter);
                }}
                className={`rounded-full px-4 py-1.5 transition-all ${
                  activeFilter === filter
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <div
              key={p.name}
              onMouseEnter={() => sounds.playHover()}
              className="mech-card mech-float-card group relative rounded-2xl border border-white/10 bg-neutral-900/30 p-7 transition-all duration-300 hover:border-white/30 hover:bg-neutral-900/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] mb-4">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {p.status}
                  </span>
                  <span className="text-neutral-500 uppercase tracking-wider">{p.badge}</span>
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
                  <span>Stack: <strong className="text-neutral-400">{p.tech}</strong></span>
                  <span>Host: <strong className="text-neutral-400">{p.host}</strong></span>
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="mech-magnetic mech-btn inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-mono uppercase tracking-widest text-neutral-300 transition-all group-hover:bg-white group-hover:text-black group-hover:font-semibold"
                >
                  Visit Live System ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── Operational Framework • How We Operate ── */}
      <section className="relative z-10 py-28 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3">
            Operating Model
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Engineering discipline. Zero chaos.
          </h2>
          <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">
            Every engagement follows a 4-stage operational blueprint designed to deliver measurable commercial returns.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">01</div>
            <h3 className="text-base font-medium text-white mb-2">Audit & Model</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              We analyze bottlenecks, commercial conversion paths, and AI search indexing readiness.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">02</div>
            <h3 className="text-base font-medium text-white mb-2">Deploy Architecture</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              We build your platform on Next.js Edge & Payload CMS with sub-1.2s loading guaranteed.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">03</div>
            <h3 className="text-base font-medium text-white mb-2">Activate Video & GEO</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              We deploy automated daily AI short-form video production and embed semantic answer stacks.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/30">
            <div className="text-2xl font-light text-neutral-600 mb-4">04</div>
            <h3 className="text-base font-medium text-white mb-2">Scale & Maintain</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Continuous 24/7 uptime monitoring, conversion optimization, and enterprise SLA stability.
            </p>
          </div>
        </div>
      </section>
      {/* ── Enterprise Technology Stack & Authority (Payload CMS Style) ── */}
      <TechAuthorityGrid lang="en" />

      {/* ── Fixed Pricing Architecture • Zylaris Framework ── */}
      <section id="packages" className="py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Predictable Investment
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              Fixed Pricing. Full Transparency.
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
            Every engagement delivers a defined set of milestones. No hidden fees, no mandatory 12-month lock-in.
          </p>
        </div>

        {/* Integrated Brutalist Grid • Zylaris Group */}
        <div className="rounded-3xl border border-white/10 bg-[#070809] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden">
          
          {/* Column 1: Social Growth */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">
                01 / Visual Traction
              </div>
              <h3 className="text-2xl font-light text-white mb-2">Social Growth</h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                €330 <span className="text-xs font-mono text-neutral-500">/ month</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                Designed for businesses requiring continuous social credibility and brand authority without physical studio overhead.
              </p>
              
              <div className="space-y-3 font-mono text-xs text-neutral-300 border-t border-white/5 pt-6 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>12 short-form videos monthly, 3 weekly</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Conversion retention hooks & dynamic kinetic captions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Native 9:16 vertical delivery for Reels, TikTok, Shorts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Zero filming hours required from your team</span>
                </div>
              </div>
            </div>

            <Link
              href="/en/contact?pachet=social-growth"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Select Package →
            </Link>
          </div>

          {/* Column 2: Daily Impact • RECOMMENDED */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-neutral-900/40 relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
                  02 / Daily Domination
                </span>
                <span className="mech-badge text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-black">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-light text-white mb-2">Daily Impact</h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                €588 <span className="text-xs font-mono text-neutral-400">/ month</span>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-8">
                Continuous daily high-fidelity video saturation for organic channel dominance and compounding awareness.
              </p>
              
              <div className="space-y-3 font-mono text-xs text-neutral-200 border-t border-white/10 pt-6 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">★</span>
                  <span>30 monthly assets, 1 video published daily</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">★</span>
                  <span>Hyper-realistic custom brand voice cloning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">★</span>
                  <span>AI visual generation with Google Veo & Imagen</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">★</span>
                  <span>Weekly retention metrics and iterative improvements</span>
                </div>
              </div>
            </div>

            <Link
              href="/en/contact?pachet=daily-impact"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full bg-white py-3 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-neutral-200 transition-all shadow-md"
            >
              Activate Daily Impact →
            </Link>
          </div>

          {/* Column 3: Turnkey E-Commerce Store */}
          <div className="mech-card mech-scanline p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">
                03 / Commerce Architecture
              </div>
              <h3 className="text-2xl font-light text-white mb-2">Complete Digital Store</h3>
              <div className="text-4xl font-light text-white tracking-tight mb-4">
                €1,275 <span className="text-xs font-mono text-neutral-500">fixed price</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                Turnkey e-commerce infrastructure built on Next.js and WooCommerce, optimized for speed, conversion, and AI search.
              </p>
              
              <div className="space-y-3 font-mono text-xs text-neutral-300 border-t border-white/5 pt-6 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Verified sub-1.2s load time across mobile & desktop</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>1-step checkout, card processing & automated AWB</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Native Generative Engine Optimization JSON-LD</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neutral-500">—</span>
                  <span>Instant fiscal invoice automation</span>
                </div>
              </div>
            </div>

            <Link
              href="/en/contact?pachet=magazin-complet"
              onClick={() => sounds.playClick()}
              className="mech-magnetic mech-btn block w-full text-center rounded-full border border-white/20 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Build Your Store →
            </Link>
          </div>

        </div>

      </section>

      {/* ── Final Call to Action ── */}
      <section className="relative z-10 py-28 px-6 text-center max-w-4xl mx-auto">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-4">Start Your Engagement</div>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
          Ready to engineer digital infrastructure that converts?
        </h2>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-light">
          We begin with a technical audit of your current stack and AI search indexation. Clear timelines, fixed costs, guaranteed delivery.
        </p>
        <Link
          href="/en/contact"
          onMouseEnter={() => sounds.playHover()}
          onClick={() => sounds.playClick()}
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Schedule a Technical Discussion →
        </Link>
      </section>

      {/* Live System Inspection Pop-up Modal */}
      <ProjectPreviewModal project={selectedPreview} onClose={() => setSelectedPreview(null)} lang="en" />
    </div>
  );
}
