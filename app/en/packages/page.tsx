import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { packages } from "@/lib/packages";
import { packagesEn, enPrice, enDelivery, VAT_LABEL_EN } from "@/lib/packagesEn";
import { liveProjectsEn } from "@/lib/liveProjects";

// Three real projects shown next to the prices; names and addresses come from the single list of live projects.
const WORK = ["Bricolando.ro", "RaftPlin.ro", "Kalki.nexus"];
const work = WORK.map((n) => liveProjectsEn.find((p) => p.name === n)).filter((p) => !!p);

export const metadata: Metadata = {
  alternates: { canonical: "/en/packages", languages: { ro: "/pachete", en: "/en/packages", "x-default": "/pachete" } },
  title: "Packages & Pricing — Reverb Digital",
  description:
    "Fixed prices, zero surprises. Daily AI video content packages, turnkey digital stores, and enterprise infrastructure.",
};

const faqsEN = [
  {
    q: "How fast is delivery?",
    a: "For AI video production, first deliverables launch within 48 hours of contract execution. Presentation websites deliver in 7 to 14 days. Complete digital stores deliver within 14 to 30 days.",
  },
  {
    q: "How does billing work?",
    a: "For monthly video packages, payment is processed monthly in advance. For web and digital store builds: 50% upfront upon kickoff, 50% upon final delivery and deployment verification.",
  },
  {
    q: "What else do I pay besides the package price?",
    a: "VAT, which is added to the prices shown. For a website: the domain (the site's name, a small yearly fee), which you buy in your company's name; in Website Start hosting is included for the first year, then you pay it yearly (the amount is written in the package) or you move the site wherever you want. For a store: hosting, the domain and the fees of the payment processor and the courier, on your own contracts. We tell you beforehand what to choose and what each one costs, then we connect them to the store.",
  },
  {
    q: "What does “prepared for AI assistants” mean?",
    a: "More and more people ask ChatGPT, Gemini or Perplexity instead of searching on Google. We write your company data, products and prices in a form these assistants can read correctly, so they understand your offer and can recommend it.",
  },
  {
    q: "Can I manage content without coding?",
    a: "Yes. You get an admin panel where you add products, change prices and see orders. It is usually WooCommerce; for stores that need high speed we build a custom panel with editing directly on the page.",
  },
  {
    q: "Is advertising ad budget included?",
    a: "Our package fees cover all AI video creation, copywriting, dynamic editing, and publishing operations. Paid ad spend for Meta, TikTok, or Google Ads is paid separately directly to the platforms.",
  },
];

export default function PackagesPageEN() {
  const socialPackages = packages.filter((p) => p.category === "social");
  const webPackages = packages.filter((p) => p.category === "web" || p.category === "b2b");

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
              <span>[ FINANCIAL CLARITY • FIXED PRICING ]</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-extralight tracking-tight sm:text-6xl md:text-7xl uppercase text-white font-mono">
              Packages & Pricing
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              Transparent investments. Predictable outcomes. High-velocity AI video engines, turnkey eCommerce stores, and enterprise architecture.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Social Media AI Packages */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-white/10 pb-6 max-w-5xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
                01 / CONTINUOUS VISIBILITY
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white font-mono uppercase">
                Social Media Packages • Short-Form Video & Visuals
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {socialPackages.map((pkg, idx) => {
              const details = packagesEn[pkg.id];
              return (
                <Reveal key={pkg.id} delay={0.1 * idx}>
                  <div
                    className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border transition-all duration-300 h-full ${
                      pkg.highlight
                        ? "bg-gradient-to-b from-neutral-900 to-[#121316] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        : "bg-[#0c0d0e]/80 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      {details.badge && (
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-[9px] font-mono uppercase tracking-widest bg-white text-black font-bold rounded-full">
                            {details.badge}
                          </span>
                        </div>
                      )}

                      <div className="text-2xl sm:text-3xl font-mono text-white mb-2 font-light">
                        {enPrice(pkg.id)} <span className="text-sm text-neutral-300">{VAT_LABEL_EN}</span>
                      </div>

                      <div className="text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-white/10">
                        {enDelivery(pkg.id)}
                      </div>

                      <h3 className="text-xl font-medium text-white mb-2">
                        {details.name}
                      </h3>

                      <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                        {details.tagline}
                      </p>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                        {details.description}
                      </p>

                      <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400 mb-8">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                          Deliverables Included:
                        </div>
                        {details.includes.map((inc, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="text-white text-xs mt-0.5">▪</span>
                            <span className="text-neutral-300 font-sans text-xs leading-relaxed">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/en/contact?package=${pkg.id}`}
                      className={`inline-flex items-center justify-center rounded-full py-3.5 px-6 text-xs font-mono uppercase tracking-widest transition-all text-center ${
                        pkg.highlight
                          ? "bg-white text-black hover:bg-neutral-200 font-bold shadow-md"
                          : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      Select Package →
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Web & eCommerce Packages */}
      <section id="web" className="scroll-mt-16 relative z-10 py-20 md:py-28 bg-[#050607] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-white/10 pb-6 max-w-5xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
                02 / TECHNICAL FOUNDATION
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white font-mono uppercase">
                Web & eCommerce Packages • Fixed Prices
              </h2>
              <p className="mt-6 text-sm text-neutral-300 font-light leading-relaxed normal-case">
                Before you choose, see what we have built. A few projects that are online now:
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {work.map((p) => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black">
                    {p.name} · {p.kind} ↗
                  </a>
                ))}
                <Link href="/en/portfolio" className="rounded-full bg-white px-4 py-2 text-xs font-mono font-bold text-black transition hover:bg-neutral-200">See all our work →</Link>
                <Link href="/showcase" className="rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black">Concept gallery →</Link>
              </div>
              <p className="mt-6 text-sm text-neutral-400 font-light leading-relaxed">
                “Select Package” opens a short form. We answer within 24 working hours, with no obligation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webPackages.map((pkg, idx) => {
              const details = packagesEn[pkg.id];
              return (
                <Reveal key={pkg.id} delay={0.1 * idx}>
                  <div
                    className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border transition-all duration-300 h-full ${
                      pkg.highlight
                        ? "bg-gradient-to-b from-neutral-900 to-[#121316] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        : "bg-[#0c0d0e]/80 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      {details.badge && (
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-[9px] font-mono uppercase tracking-widest bg-white text-black font-bold rounded-full">
                            {details.badge}
                          </span>
                        </div>
                      )}

                      <div className="text-2xl sm:text-3xl font-mono text-white mb-2 font-light">
                        {enPrice(pkg.id)} <span className="text-sm text-neutral-300">{VAT_LABEL_EN}</span>
                      </div>

                      <div className="text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-white/10">
                        {enDelivery(pkg.id)}
                      </div>

                      <h3 className="text-xl font-medium text-white mb-2">
                        {details.name}
                      </h3>

                      <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                        {details.tagline}
                      </p>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                        {details.description}
                      </p>

                      <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400 mb-8">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                          Specifications Included:
                        </div>
                        {details.includes.map((inc, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="text-white text-xs mt-0.5">▪</span>
                            <span className="text-neutral-300 font-sans text-xs leading-relaxed">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/en/contact?package=${pkg.id}`}
                      className={`inline-flex items-center justify-center rounded-full py-3.5 px-6 text-xs font-mono uppercase tracking-widest transition-all text-center ${
                        pkg.highlight
                          ? "bg-white text-black hover:bg-neutral-200 font-bold shadow-md"
                          : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      Select Package →
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative z-10 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">
                03 / SYSTEM CLARITY
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white font-mono uppercase">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqsEN.map((faq, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0c0d0e]/60">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-3 flex items-start gap-3">
                    <span className="font-mono text-neutral-500 text-sm mt-0.5">0{i + 1}</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
