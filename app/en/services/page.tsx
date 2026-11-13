import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { enPrice, VAT_NOTE_EN } from "@/lib/packagesEn";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/en/services", languages: { ro: "/servicii", en: "/en/services", "x-default": "/servicii" } },
  title: "Services — Reverb Digital",
  description:
    "Websites and online stores at fixed prices, daily AI-made videos for social media, and help to be found and recommended by AI assistants such as ChatGPT.",
};

const mainServices = [
  {
    id: "01",
    tag: "WEBSITES & STORES",
    price: `from ${enPrice("site-start")}`,
    title: "Websites & Online Stores",
    tagline: "Built to load fast and to sell.",
    text: "We build presentation websites and online stores from scratch. Pages load in under 1.2 seconds, the customer pays by card in a few steps, the invoice is issued automatically and the courier label is created as soon as the order comes in.",
    deliverables: [
      "Pages that load in under 1.2 seconds",
      "An admin panel where you add products and change prices yourself",
      "Checkout in one step, so buyers do not give up halfway",
      "Automatic invoices and courier labels (AWB)",
      "Works well on every phone and tablet",
    ],
    href: "/en/contact?package=web-store",
  },
  {
    id: "02",
    tag: "SOCIAL MEDIA",
    price: `from ${enPrice("social-growth")}`,
    title: "Daily Videos for Social Media",
    tagline: "New product videos every day, made with AI.",
    text: "A classic production company is expensive and slow. We make 1 to 3 short videos a day for TikTok, Instagram Reels, YouTube Shorts and Facebook, with AI: product demos, sales scripts and on-screen subtitles.",
    deliverables: [
      "30 to 90 short videos a month",
      "Image posts and product carousels for each network",
      "Natural-sounding AI voice-over and editing",
      "Every video sends viewers to your store or contact page",
      "You do not film anything",
    ],
    href: "/en/contact?package=daily-impact",
    featured: true,
  },
  {
    id: "03",
    tag: "AI SEARCH",
    // The GEO service is not a package in the registry: its price is written here.
    price: "from €588 / month",
    title: "Found by AI Assistants",
    tagline: "So ChatGPT, Perplexity, Claude and Gemini can recommend you.",
    text: "More and more buyers ask an AI assistant instead of typing keywords into Google. We write your company data, products and prices in a form these assistants read correctly, so they understand your offer and can recommend it.",
    deliverables: [
      "Your company, products and prices written so AI assistants read them correctly",
      "A clear, public price list for your packages",
      "Pages that answer the questions buyers ask ChatGPT and Perplexity",
      "Your brand described the same way everywhere online",
      "We track how AI assistants mention your business",
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
              <span>[ SERVICES • FIXED PRICES ]</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>What we do for you.</Linie>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              We build your website or online store, make daily videos for your social media and help AI assistants find and recommend your business. {VAT_NOTE_EN}
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
                      <Linie>{srv.title}</Linie>
                    </h2>

                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-6">
                      {srv.tagline}
                    </p>

                    <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                      {srv.text}
                    </p>

                    <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400 mb-8">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                        What you get:
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
                    Ask about this service →
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
              [ NOT SURE WHAT YOU NEED? ]
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
              <Linie>Need something made for you?</Linie>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light">
              Tell us what you sell and where you are now. We look at your website and social pages and come back within 24 working hours with a plan and a fixed price.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-colors font-bold shadow-lg"
            >
              Talk to us →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
