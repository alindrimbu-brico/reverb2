import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/en/about", languages: { ro: "/despre", en: "/en/about", "x-default": "/despre" } },
  title: "About Us — Reverb Digital",
  description:
    "Digital architecture, disciplined execution, and strategic partnership. AI technology partners with Zylaris Group London.",
};

const values = [
  {
    title: "Fixed & Transparent Pricing",
    text: "Every engagement starts with fixed quotes and unambiguous deliverables. Zero vague estimates, zero hidden costs.",
  },
  {
    title: "4-Stage Operational Model",
    text: "Design, Connect, Automate, and Scale. Structured execution without chaotic pivots or improvisation.",
  },
  {
    title: "Value-Oriented Systems",
    text: "We measure commercial impact: orders, verified conversions, and genuine customer inquiries. We construct durable digital assets.",
  },
  {
    title: "Engineering Discipline",
    text: "We write clean code, configure production API integrations, and deliver 100% operational systems ready for scale.",
  },
  {
    title: "Human Taste & AI Velocity",
    text: "Human vision defines the direction and aesthetics. AI models accelerate video asset generation and semantic optimization.",
  },
  {
    title: "Generative Engine Optimization",
    text: "We ensure semantic readability of your business for ChatGPT, Perplexity, Claude, and Gemini across all answer engines.",
  },
];

const approach = [
  {
    step: "01",
    title: "Audit & Architecture",
    text: "We audit existing infrastructure, target audience, and customer journeys to establish exact key performance metrics.",
  },
  {
    step: "02",
    title: "Design & Build",
    text: "We develop high-speed Next.js web platforms, integrate payment gateways, and configure automated fulfillment pipelines.",
  },
  {
    step: "03",
    title: "Video Engine & GEO",
    text: "We activate daily short-form AI video pipelines and inject semantic JSON-LD structures for AI search assistant citations.",
  },
  {
    step: "04",
    title: "Scale & Reliability",
    text: "We monitor uptime, manage cloud security protocols, and continuously optimize checkout conversion rates.",
  },
];

export default function AboutPageEN() {
  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>[ CLARITY & STRUCTURE • ABOUT US ]</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-extralight tracking-tight sm:text-6xl md:text-7xl uppercase text-white font-mono">
              Clarity & Structure
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              We design and operate resilient digital systems: high-velocity online stores, automated daily AI video engines, and full semantic integration for the AI search era.
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
                OPERATIONAL PRINCIPLES
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-white font-mono uppercase">
                How We Build
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
                    <h3 className="text-lg font-medium text-white mb-3 font-mono">
                      {v.title}
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
                4-STAGE FRAMEWORK
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-white font-mono uppercase">
                Execution Architecture
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
            <h2 className="text-3xl font-extralight uppercase text-white font-mono mb-6">
              Start Your Project
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light">
              Clear scope, fixed delivery timelines, and transparent pricing.
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
