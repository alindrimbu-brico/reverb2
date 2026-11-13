import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/en/about", languages: { ro: "/despre", en: "/en/about", "x-default": "/despre" } },
  title: "About Us — Reverb Digital",
  description:
    "Who we are and how we work: fixed prices, clear steps and support after launch. Technology partner of Zylaris Group London.",
};

const values = [
  {
    title: "Fixed & Transparent Pricing",
    text: "Every project starts with a fixed price and a clear list of what you get. No vague estimates, no hidden costs.",
  },
  {
    title: "Four Clear Steps",
    text: "We plan, build, launch and improve. You always know which step we are on, and nothing is improvised.",
  },
  {
    title: "Results You Can Count",
    text: "We measure what matters to you: orders, requests and calls from real customers.",
  },
  {
    title: "We Build It, Not Just Advise",
    text: "We do not hand you a strategy and leave. We write the code, connect payments and couriers, and hand over a site that works.",
  },
  {
    title: "Human Taste, AI Speed",
    text: "People decide the direction and the look. AI shortens the time it takes to make videos and to analyse data.",
  },
  {
    title: "Found by AI Assistants",
    text: "We write your business data so ChatGPT, Perplexity, Claude and Gemini understand it and can recommend you.",
  },
];

const approach = [
  {
    step: "01",
    title: "We Listen and Plan",
    text: "We look at what you have today, who your customers are and what you sell, and agree how we will measure success.",
  },
  {
    step: "02",
    title: "We Build",
    text: "We build the website or the online store and connect card payments, invoices and couriers.",
  },
  {
    step: "03",
    title: "Videos and AI Search",
    text: "We start the daily videos for social media and prepare your data so AI assistants can read it.",
  },
  {
    step: "04",
    title: "We Stay With You",
    text: "We watch that the site stays online and safe, and keep improving what brings you orders.",
  },
];

export default function AboutPageEN() {
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
              <span>[ ABOUT US ]</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Clarity & Structure</Linie>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              We build websites and online stores, make daily videos for social media and help AI assistants find your business. We take you from zero to your first sale and keep advising you after launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 border-b border-white/10 pb-6 text-center">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
                OUR PRINCIPLES
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                <Linie>How we work</Linie>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0d0e]/60 h-full flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-xs text-neutral-500 mb-4 pb-2 border-b border-white/10">
                      0{i + 1} / PRINCIPLE
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      <Linie>{v.title}</Linie>
                    </h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative z-10 py-20 md:py-28 bg-[#050607] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 border-b border-white/10 pb-6 text-center">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
                FOUR STEPS
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                <Linie>How a project goes</Linie>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, idx) => (
              <Reveal key={step.step} delay={0.1 * idx}>
                <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0d0e]/80 h-full flex flex-col">
                  <div className="text-3xl font-mono text-white/30 font-light mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
              <Linie>Start Your Project</Linie>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light">
              A clear list of what you get, a fixed delivery date and a fixed price.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-colors font-bold shadow-lg"
            >
              Contact Us →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
