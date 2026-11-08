import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";
import { TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/en/portfolio", languages: { ro: "/portofoliu", en: "/en/portfolio", "x-default": "/portofoliu" } },
  title: "Portfolio & Case Studies — Reverb Digital",
  description:
    "Real case studies: relaunched online stores, conversion rate optimization, and generative engine optimization (GEO).",
};

const caseStudies = [
  {
    slug: "ecommerce-relaunched",
    title: "E-Commerce Architecture Relaunched for Pure Conversion",
    client: "Home & Décor Retailer",
    category: "Online Stores",
    summary:
      "Full digital commerce overhaul replacing legacy sluggish interfaces with an ultra-fast Next.js architecture, sub-second checkout, and structured GEO data.",
    challenge:
      "A store with traffic but 0.4% conversion and 68% cart abandonment due to friction and multi-step checkouts.",
    results: [
      { metric: "1.8%", label: "Conversion Rate (from 0.4%)" },
      { metric: "-41%", label: "Cart Abandonment Drop" },
      { metric: "+23%", label: "Average Order Value" },
      { metric: "<1.0s", label: "Page Load Speed" },
    ],
  },
  {
    slug: "b2b-digital-systems",
    title: "Industrial B2B Portal & Catalog Digitization",
    client: "European Equipment Distributor",
    category: "B2B & Systems",
    summary:
      "Turnkey multi-vendor portal with automated proforma invoicing, real-time stock sync, and courier API dispatch integration.",
    challenge:
      "Manual phone orders, slow paper invoices, and zero indexation in generative search engines.",
    results: [
      { metric: "100%", label: "Automated Invoicing" },
      { metric: "3,400+", label: "Products Indexed in GEO" },
      { metric: "48h", label: "Deployment Turnaround" },
      { metric: "99.99%", label: "Verified System Uptime" },
    ],
  },
];

export default function PortfolioPageEn() {
  return (
    <PageEnter>
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
        <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
                <TrendingUp size={12} className="text-emerald-400" />
                <span>Operational Validation & Outcomes</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
                Measurable impact. <br />
                <span className="text-neutral-400 font-light">Infrastructure over empty promises.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                Every project in our ecosystem is benchmarked against real criteria: sub-second load times, friction-free checkout, and daily organic video saturation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
          <div className="space-y-10">
            {caseStudies.map((cs, idx) => (
              <Reveal key={cs.slug} delay={idx * 80}>
                <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12 hover:border-white/25 transition-all">
                  <div className="grid gap-10 lg:grid-cols-12 items-center">
                    
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                          {cs.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">• {cs.client}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                        {cs.title}
                      </h2>

                      <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                        {cs.summary}
                      </p>

                      <div className="space-y-2 text-xs font-mono text-neutral-300 mb-6">
                        <div className="text-neutral-500 uppercase text-[9px]">Technical Intervention:</div>
                        <p className="font-sans text-neutral-300 text-xs leading-relaxed">{cs.challenge}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 font-mono">
                      <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 border-b border-white/10 pb-2">
                        Measured Key Metrics
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {cs.results.map((res, rIdx) => (
                          <div key={rIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                            <div className="text-xl md:text-2xl font-bold text-white mb-1">
                              {res.metric}
                            </div>
                            <div className="text-[10px] text-neutral-400 leading-tight">
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
            Ready for similar outcomes on your digital platforms?
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-md mx-auto font-light leading-relaxed">
            We provide a complimentary technical audit of your current conversion funnel and AI search readiness.
          </p>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
          >
            <span>Request Free Technical Audit</span>
            <ArrowRight size={14} />
          </Link>
        </section>

      </div>
    </PageEnter>
  );
}
