import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Structure, execution, results. Digital execution for SMBs. No jargon, no chaos.",
};

const values = [
  {
    title: "Fixed & transparent pricing",
    text: "You know from the start how much you pay and what you get. No vague estimates, no hidden costs.",
  },
  {
    title: "Clear 4-step process",
    text: "No improvisation. No chaotic changes. Every stage has a defined purpose and a concrete outcome.",
  },
  {
    title: "Results-focused",
    text: "Not traffic. Not views. But inquiries, conversions and sales. We measure what truly matters.",
  },
  {
    title: "Implementation, not just strategy",
    text: "We build and configure. We don't just deliver presentations and recommendations. Every project is handed over ready to use.",
  },
  {
    title: "Human + AI",
    text: "Humans set the strategic direction. AI compresses execution time. Reverb integrates both into a system that delivers.",
  },
  {
    title: "We select our projects",
    text: "We work with companies that want real growth. We don't accept projects without a concrete objective or defined budget.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discussion & Objective",
    text: "We clarify what you want to achieve: calls, leads or sales. Revenue model, audience, offer, competition.",
  },
  {
    step: "02",
    title: "Structure & Implementation",
    text: "We build the system based on the established objective. Architecture, messaging, design, configurations.",
  },
  {
    step: "03",
    title: "Launch & Setup",
    text: "We activate, test and verify conversions. Everything functional at handover.",
  },
  {
    step: "04",
    title: "Optimisation & Adjustment",
    text: "We monitor and adjust for stable performance. A healthy digital system improves with every month.",
  },
];

const certifications = [
  { name: "Google Partner", category: "Digital Advertising" },
  { name: "HubSpot Partner", category: "CRM & Marketing" },
  { name: "Shopify Expert", category: "E-commerce" },
  { name: "Meta Partners", category: "Social Commerce" },
  { name: "SEO Specialist", category: "Search & Content" },
  { name: "Google Analytics Certified", category: "Data & Analytics" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">About us</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Structure, execution, results.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Reverb comes from reverberation — the signal returns cleaner than it left. Websites, online stores, digital marketing. Digital execution that delivers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#1d2731] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">Manifesto</div>
                <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                  Don&apos;t amplify the noise. Eliminate it.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6 text-base leading-8 text-white/80">
                <p>
                  Reverb is the agency that brings digital businesses back to their essence. We don&apos;t add unnecessary layers. We don&apos;t complicate what can be simple. We build systems that work — with structure, discipline and measurable results.
                </p>
                <p>
                  We use AI to compress execution time, not to replace thinking. Humans set the direction. AI accelerates. The system delivers. That&apos;s Reverb.
                </p>
                <p>
                  We work with SMBs that want real online presence — not decorative. Websites that generate inquiries, stores that sell, campaigns that bring clients. No jargon. No chaos.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Reverb — Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Why Reverb</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              We&apos;re not the cheapest option. We&apos;re the structured option.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 tab-blur-group">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="relative group rounded-[28px] h-full">
                <div
                  className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-white/70 shadow-[0_10px_40px_rgba(29,39,49,0.05)]"
                  style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                />
                <div
                  className="relative z-10 p-8 transition-all duration-500 h-full flex flex-col"
                  style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                >
                  <h3 className="text-xl font-medium text-[#1d2731]">{v.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{v.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who it&apos;s for */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Who we work with</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                We work with companies that want structure and results.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
                <div className="text-sm font-semibold text-[#1d2731] mb-5">✔ A good fit if you are:</div>
                <ul className="space-y-3">
                  {[
                    "Local SMBs wanting more inquiries and calls",
                    "Traditional businesses entering the digital space",
                    "Businesses with a real budget and results-driven mindset",
                    "Entrepreneurs seeking structure, not experiments",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#1d2731]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31584f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-8">
                <div className="text-sm font-semibold text-[#1d2731] mb-5">✖ Not a good fit if you are:</div>
                <ul className="space-y-3">
                  {[
                    "A startup without a defined budget",
                    "Entrepreneurs who constantly change direction",
                    'Clients looking for "the cheapest price"',
                    "Projects without a concrete objective",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#1d2731]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/25" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">How we work</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Clear process. No improvisation.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              Every project follows the same simple structure, so you always know exactly what comes next.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 tab-blur-group">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 80}>
              <div className="relative group rounded-[28px] h-full">
                <div
                  className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2]"
                  style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                />
                <div
                  className="relative z-10 p-7 transition-all duration-500 h-full flex flex-col"
                  style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                >
                  <div className="mb-6 text-4xl font-medium tracking-[-0.04em] text-[#1d2731]/20">{a.step}</div>
                  <h3 className="text-xl font-medium text-[#1d2731]">{a.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-8 text-center text-sm text-[#1d2731]/50">
            Average implementation time: 7–30 days, depending on package and complexity.
          </p>
        </Reveal>
      </section>

      {/* Certifications */}
      <section className="bg-white/50 border-y border-[#1d2731]/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Certifications & Partnerships</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Recognized by industry leaders.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                We are certified and partnered with the platforms and services we use to build and scale digital businesses.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 60}>
                <div className="group relative rounded-[24px] border border-[#1d2731]/8 bg-[#faf7f2] p-6 transition hover:border-[#1d2731]/15 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest font-semibold text-[#1d2731]/40 mb-2">
                        {cert.category}
                      </div>
                      <h3 className="text-lg font-medium text-[#1d2731]">
                        {cert.name}
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#31584f]/10 flex items-center justify-center text-[#31584f] group-hover:bg-[#31584f]/15 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="mt-12 text-center text-sm text-[#1d2731]/50">
              Continuous education and certifications kept up-to-date to stay at the forefront of the industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Ready to build something solid for your business?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Initial discussion of 20–30 minutes. No obligations. We establish the objective and see if we&apos;re a good fit.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:shrink-0">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Schedule a discussion
              </Link>
              <Link
                href="/en/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                See services & pricing
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
