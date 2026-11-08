import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  alternates: { canonical: "/en/packages", languages: { ro: "/pachete", en: "/en/packages", "x-default": "/pachete" } },
  title: "Packages & Pricing — Reverb Digital",
  description:
    "Fixed prices, zero surprises. Daily AI video content packages, turnkey digital stores, and enterprise infrastructure.",
};

const enPackageDetails: Record<string, {
  name: string;
  tagline: string;
  price: string;
  delivery: string;
  description: string;
  includes: string[];
  ideal: string;
  badge?: string;
}> = {
  "social-growth": {
    name: "Social Growth AI Video",
    tagline: "Constant video presence and visual credibility across channels.",
    price: "€330 / month",
    delivery: "Weekly delivery",
    description: "12 short-form videos and 12 product carousels generated with modern AI models, optimized for TikTok, Reels, and YouTube Shorts algorithms.",
    includes: [
      "12 short-form videos monthly, 3 weekly cadence",
      "12 graphic posts and product carousels",
      "Synchronized publishing across TikTok, Instagram, Facebook, Shorts",
      "Direct conversion scripts and dynamic subtitles",
      "Clear monthly visibility and reach reporting",
    ],
    ideal: "Local businesses, clinics, and service firms seeking regular video presence without conventional shooting overhead.",
  },
  "daily-impact": {
    name: "Daily Impact 1 Video Daily",
    tagline: "Visual dominance through daily product video content.",
    price: "€588 / month",
    delivery: "Daily delivery",
    description: "30 short-form video assets monthly, 1 published every day, plus 30 graphic posts. Real equipment and product demonstrations with synthetic voiceover.",
    includes: [
      "30 short-form videos monthly, 1 video every single day",
      "30 graphic assets tailored for each platform",
      "Product and hardware demonstrations in action",
      "High-fidelity neural synthetic voiceover",
      "Conversion-focused sales hooks and direct call to action",
      "Weekly content consulting and algorithm optimization",
    ],
    ideal: "Online stores, distributors, and brands seeking accelerated organic growth through sustained volume.",
    badge: "Most Requested",
  },
  "dominance-3x": {
    name: "Dominance 3X 3 Videos Daily",
    tagline: "Aggressive scaling for maximum algorithm coverage.",
    price: "€1,275 / month",
    delivery: "3 daily deliveries",
    description: "90 short-form video assets monthly, 3 per day, for brands and retail companies wanting full saturation across feed algorithms.",
    includes: [
      "90 short-form videos monthly, 3 videos daily",
      "Multi-account distribution across targeted campaigns",
      "Systematic A/B angle testing for performance",
      "Multilingual synthetic voiceover on request",
      "24/7 dedicated priority support channel",
    ],
    ideal: "Large retailers, national brands, and enterprises with deep product catalogs.",
  },
  "start-digital": {
    name: "Start Digital Web & Video",
    tagline: "High-speed modern website powered by video from day one.",
    price: "€1,275",
    delivery: "7–14 days",
    description: "High-speed 3–5 page presentation platform built on Next.js, integrated with contact forms, Google Maps, WhatsApp, and 15 launch videos.",
    includes: [
      "Next.js high-speed web platform under 1.2s loading",
      "Bespoke architectural layout, zero generic templates",
      "Contact forms, WhatsApp direct, and Google Maps integrated",
      "Full mobile responsiveness and adaptive typography",
      "Semantic data structures ready for Google and AI Agents GEO",
      "Launch package: 15 short-form videos included",
    ],
    ideal: "Service companies, medical practices, consultancies entering the digital space with authority.",
  },
  "magazin-digital-activ": {
    name: "Active Digital Store eCommerce & AI",
    tagline: "Complete eCommerce platform engineered for conversion and AI search.",
    price: "€2,499",
    delivery: "14–30 days",
    description: "Full eCommerce infrastructure on WooCommerce or Next.js with Payload CMS, cognitive checkout, card payments, automated billing, and 30 launch videos.",
    includes: [
      "Turnkey online store setup with card payments and courier APIs",
      "Enterprise Control Panel option via Payload CMS or WooCommerce",
      "Automated invoicing plus instant courier AWB dispatch",
      "Conversion-engineered product catalog architecture",
      "Generative Engine Optimization GEO and Schema JSON-LD",
      "Launch package: 30 product demonstration videos",
    ],
    ideal: "Retailers, distributors, and growing brands scaling direct-to-consumer sales.",
    badge: "Complete System",
  },
  "infrastructura-enterprise": {
    name: "Enterprise Infrastructure & B2B",
    tagline: "Dedicated digital systems and operational transformation.",
    price: "from €3,315",
    delivery: "Dedicated scope",
    description: "Enterprise systems executed in strategic partnership with Zylaris Group London: B2B client portals, workflow automation, autonomous AI agents, and secure cloud hosting.",
    includes: [
      "Dedicated scalable cloud architecture",
      "Secure client and partner B2B portals",
      "Operational workflow audit and autonomous AI agent deployment",
      "International corporate governance and security standards",
      "Proactive 24/7 system monitoring and guaranteed SLA",
    ],
    ideal: "Enterprises, corporate networks, and organizations requiring zero-compromise digital reliability.",
  },
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
    q: "What does Generative Engine Optimization GEO mean?",
    a: "We structure your business data, product specs, and pricing matrices in advanced semantic JSON-LD format so AI search models such as ChatGPT, Perplexity, and Gemini identify and cite your company as the authoritative answer.",
  },
  {
    q: "Can I manage content without coding?",
    a: "Yes. For clients requiring instant visual independence, we build control dashboards using Payload CMS or WooCommerce with visual editing and secure access control.",
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialPackages.map((pkg, idx) => {
              const details = enPackageDetails[pkg.id] || pkg;
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
                        {details.price}
                      </div>

                      <div className="text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-white/10">
                        {details.delivery}
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
      <section className="relative z-10 py-20 md:py-28 bg-[#050607] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-white/10 pb-6 max-w-5xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
                02 / TECHNICAL FOUNDATION
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white font-mono uppercase">
                Web & eCommerce Packages • Built From Scratch
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webPackages.map((pkg, idx) => {
              const details = enPackageDetails[pkg.id] || pkg;
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
                        {details.price}
                      </div>

                      <div className="text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-white/10">
                        {details.delivery}
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
