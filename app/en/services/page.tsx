import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/en/services", languages: { ro: "/servicii", en: "/en/services", "x-default": "/servicii" } },
  title: "Services — Reverb Digital",
  description:
    "Complete digital architecture: high-speed web platforms, daily AI video content, Generative Engine Optimization GEO, and enterprise infrastructure.",
};

const mainServices = [
  {
    id: "01",
    tag: "TECHNICAL FOUNDATION",
    price: "from €1,275",
    title: "Web Platforms & Digital Stores",
    tagline: "High-speed architecture built directly for conversion.",
    text: "We develop presentation websites and robust online stores from scratch on Next.js and WooCommerce. Guaranteed loading under 1.2 seconds, cognitive checkout flow, secure card integrations, automated invoicing, and instant courier dispatch.",
    deliverables: [
      "Next.js and Edge Runtime architecture under 1.2s",
      "Enterprise Control Panel with Payload CMS option",
      "Frictionless 1-step checkout sales process",
      "Automated invoicing plus instant courier AWB",
      "Complete optimization for all mobile devices",
    ],
    href: "/en/contact?package=web-store",
  },
  {
    id: "02",
    tag: "SOCIAL MEDIA SCALING",
    price: "from €330 / month",
    title: "AI Social Media Video Engine",
    tagline: "Daily volume of product video content generated with AI.",
    text: "We eliminate the barrier of traditional video production costs. We generate 1 to 3 high-fidelity video assets daily for TikTok, Instagram Reels, YouTube Shorts, and Facebook using Google Imagen and Veo technologies. Product demonstrations, sales hooks, and dynamic subtitles.",
    deliverables: [
      "30 to 90 short-form video assets monthly",
      "Graphic posts and product carousels for each network",
      "Ultra-realistic synthetic voiceover and dynamic editing",
      "Direct traffic routing to store or contact flow",
      "Zero hours wasted with manual filming by client",
    ],
    href: "/en/contact?package=daily-impact",
    featured: true,
  },
  {
    id: "03",
    tag: "NEW SEARCH PARADIGM",
    price: "from €588 / month",
    title: "Generative Engine Optimization GEO",
    tagline: "Become the primary recommendation in ChatGPT, Perplexity, Claude, and Gemini.",
    text: "In 2026, buyers ask direct questions to AI models instead of simple keyword queries. We structure your digital assets using advanced JSON-LD data, transparent pricing indices, and entity authority so LLMs recommend your business as the verified source.",
    deliverables: [
      "AI-Readable Answer Stack with structured semantic data",
      "Transparent and unambiguous pricing package index",
      "Generative Engine Optimization GEO for Perplexity and ChatGPT",
      "Brand entity validation and digital authority",
      "Live citation tracking across AI model responses",
    ],
    href: "/en/contact?package=geo-search",
  },
];

export default function ServicesPageEN() {
  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] light:opacity-[0.075]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.1em] sm:tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>[ CLARITY IN ARCHITECTURE • SERVICES ]</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-extralight tracking-tight sm:text-6xl md:text-7xl uppercase text-white font-mono">
              Systems & Execution
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              From the high-speed technical foundation of your digital store to automated daily AI video engines and verified positioning in AI search assistants.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main 3 Pillars Grid */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((srv, idx) => (
              <Reveal key={srv.id} delay={0.1 * idx}>
                <div 
                  className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border transition-all duration-300 h-full ${
                    srv.featured 
                      ? "bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.05)]" 
                      : "bg-[#0c0d0e]/80 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-6 pb-4 border-b border-white/10">
                      <span className="tracking-[0.2em]">{srv.id} / 03</span>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        {srv.tag}
                      </span>
                    </div>

                    <div className="text-2xl font-mono text-white mb-2 font-light">
                      {srv.price}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-medium text-white mb-3">
                      {srv.title}
                    </h2>

                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-6">
                      {srv.tagline}
                    </p>

                    <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                      {srv.text}
                    </p>

                    <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400 mb-8">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                        Included Deliverables:
                      </div>
                      {srv.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="text-white text-xs mt-0.5">▪</span>
                          <span className="text-neutral-300 font-sans text-xs leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={srv.href}
                    className={`inline-flex items-center justify-center rounded-full py-3.5 px-6 text-xs font-mono uppercase tracking-widest transition-all text-center ${
                      srv.featured 
                        ? "bg-white text-black hover:bg-neutral-200 shadow-md font-bold" 
                        : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Select Service →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 py-20 border-t border-white/10 bg-[#050607]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 mb-4">
              [ TECHNICAL AUDIT & ARCHITECTURE ]
            </div>
            <h2 className="text-3xl font-extralight uppercase text-white font-mono mb-6">
              Need a Tailored System?
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light">
              We analyze your current digital presence, traffic flows, and operational systems. Delivery plan and fixed quote within 24 hours.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-colors font-bold shadow-lg"
            >
              Request Technical Discussion →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
