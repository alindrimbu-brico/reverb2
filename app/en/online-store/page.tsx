import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ShoppingCart, Zap, CheckCircle2, ShieldCheck, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/en/online-store", languages: { ro: "/magazine-online", en: "/en/online-store", "x-default": "/magazine-online" } },
  title: "Online Store Architecture — Reverb Digital",
  description:
    "We build high-velocity e-commerce platforms engineered for conversion, generative AI search (GEO), and turnkey courier/payment gateway automation.",
};

const modules = [
  {
    category: "Structure & Buying Experience",
    items: [
      "Dynamic category architecture and sub-100ms instant filtering",
      "Product detail pages designed for high cognitive retention",
      "Semantic internal search with instant predictive results",
      "Mobile-first design engineering with zero layout shifts",
    ],
  },
  {
    category: "Checkout & Conversion Friction",
    items: [
      "1-step streamlined checkout without redundant form fields",
      "Visible trust indicators (delivery speed, returns, guarantees)",
      "Automated abandoned cart recovery workflows via email/SMS",
      "Verified load time under 1.2 seconds across all devices",
    ],
  },
  {
    category: "Payments & Operational Automation",
    items: [
      "Native card processing integration (Stripe, Netopia, PayPal)",
      "Instant automated invoice dispatch (FGO / SmartBill)",
      "Courier API label generation (DPD, DHL, Fan Courier)",
      "Real-time inventory synchronization with low-stock alerts",
    ],
  },
  {
    category: "Generative Engine Optimization (GEO)",
    items: [
      "Full JSON-LD semantic structured data on every product",
      "Optimized for ChatGPT, Perplexity, and Gemini shopping agents",
      "Integrated vertical product video demos directly on pages",
      "Modern control panel (Next.js / Payload CMS / WooCommerce)",
    ],
  },
];

export default function OnlineStorePageEn() {
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
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <ShoppingCart size={12} className="text-white" />
              <span>Native E-Commerce Infrastructure</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              Stores built for <br />
              <span className="text-neutral-400 font-light">velocity, sales, and conversion.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              High-velocity e-commerce architectures on Next.js and WooCommerce. Frictionless checkout, secure payment rails, automated invoicing, and generative search indexation.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/en/contact?pachet=magazin-complet"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>Launch Your Store (€1,500)</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/en/packages"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white hover:border-white/40 transition-all"
              >
                View All Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
        <Reveal>
          <div className="mb-12">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">Technical Deliverables</div>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              What we engineer into every digital store
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {modules.map((mod, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 hover:border-white/25 transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-mono uppercase tracking-wider text-white mb-6 border-b border-white/10 pb-3">
                    {mod.category}
                  </h3>
                  <div className="space-y-4">
                    {mod.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-300 font-light">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
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
          Ready for an online store that actually converts?
        </h2>
        <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-md mx-auto font-light leading-relaxed">
          Fixed investment of €1,500, delivery within 14–30 business days, and end-to-end checkout validation before live launch.
        </p>
        <Link
          href="/en/contact?pachet=magazin-complet"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
        >
          <span>Select Complete Store Package</span>
          <ArrowRight size={14} />
        </Link>
      </section>

    </div>
  );
}
