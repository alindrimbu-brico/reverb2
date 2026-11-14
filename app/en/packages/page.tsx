import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhoWeAre from "@/components/WhoWeAre";
import { costLead, costRows, costSummary, costVatNote } from "@/lib/thirdPartyCosts";
import WorkShots from "@/components/WorkShots";
import { Linie } from "@/components/RunningLine";
import { HOSTING_AFTER_FIRST_YEAR, packages, pkg, priceEn, priceLei } from "@/lib/packages";
import { packagesEn, enPrice, enDelivery, VAT_LABEL_EN } from "@/lib/packagesEn";
import { liveProjectsEn } from "@/lib/liveProjects";

// Three real projects shown next to the prices; names and addresses come from the single list of live projects.
const WORK = ["Bricolando.ro", "RaftPlin.ro", "Kalki.nexus"];
const work = WORK.map((n) => liveProjectsEn.find((p) => p.name === n)).filter((p) => !!p);

// Starting prices, from the registry: the sentence at the top, the page description and the "What you pay in total" box.
const siteName = packagesEn["site-start"].name;
const storeName = packagesEn["magazin-start"].name;
const hostingLater = priceEn(HOSTING_AFTER_FIRST_YEAR);

export const metadata: Metadata = {
  alternates: { canonical: "/en/packages", languages: { ro: "/pachete", en: "/en/packages", "x-default": "/pachete" } },
  title: "Packages & Pricing — Reverb Digital",
  description: `Fixed prices for presentation websites, online stores and short videos for social media. Website from ${enPrice("site-start")}, online store from ${enPrice("magazin-start")}, plus VAT.`,
};

// The "What you pay in total" box: what the registry and the FAQ say; below it, example prices of other companies,
// from lib/thirdPartyCosts.ts.
const youPay = (id: "site-start" | "magazin-start") =>
  `You pay us once: ${enPrice(id)} ${VAT_LABEL_EN} (${priceLei(pkg(id).price, "en")}), half at the start and half on delivery.`;
const costSite = [
  youPay("site-start"),
  "The domain (the name of the site, for example your-business.com): a small yearly fee, paid by you to the company you buy it from.",
  `Hosting (where the site lives on the internet): included for the first year. From the second year, ${hostingLater} ${VAT_LABEL_EN}, or you move the site to another hosting company.`,
  `In short: ${enPrice("site-start")} and the domain in the first year; then ${hostingLater} and the domain.`,
];
const costStore = [
  youPay("magazin-start"),
  "For the store you pay us nothing monthly.",
  "You pay even if you sell nothing: hosting, the domain and the invoicing program. You pay these yourself, directly to those companies.",
  "You pay only when you sell: a fee on each card payment and the courier for each parcel.",
  "We tell you in advance what to choose and what each one costs, then we connect them to the store.",
];

const faqsEN = [
  {
    q: "How long does a project take?",
    a: "For video packages, the first clips arrive within 48 hours of signing. A presentation website takes 7 to 14 days, a complete online store 14 to 30 days.",
  },
  {
    q: "How do I pay?",
    a: "For monthly video packages you pay each month, in advance. For a website or a store: 50% when we start and 50% at handover, after you have checked that everything works.",
  },
  {
    q: "What help do I get after launch?",
    a: "Every website or store we build comes with 30 days of support after launch: you write to us on WhatsApp, call us, or we meet, online or at our office in Focșani. We show you how to add products and texts, what to watch in the first weeks and what to do to reach your first orders.",
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
    q: "Can I run my store myself?",
    a: "Yes. You get an admin panel where you add products, change prices and see orders. It is usually WooCommerce; for stores that need high speed we build a custom panel with editing directly on the page.",
  },
  {
    q: "Is the budget for paid ads included?",
    a: "The package price covers making the videos, writing the texts, editing and publishing on the networks. The budget for paid ads on Meta, TikTok or Google is paid separately, straight to the platforms, from your own ad account.",
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
              <span>[ WEBSITES • ONLINE STORES • VIDEO CLIPS ]</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Fixed prices.</Linie><br />
              <span className="text-neutral-400 font-light"><Linie>No hidden costs.</Linie></span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            {/* What we do and where prices start (from the registry), then the link to the total-cost example. */}
            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-white font-light leading-relaxed">
              {`We build presentation websites and online stores. Website from ${enPrice("site-start")} ${VAT_LABEL_EN} (${priceLei(pkg("site-start").price, "en")}), online store from ${enPrice("magazin-start")} ${VAT_LABEL_EN} (${priceLei(pkg("magazin-start").price, "en")}).`}
            </p>
            <p className="mt-3 text-sm text-neutral-300 font-light">
              <a href="#cost" className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white">See an example of the total cost ↓</a>
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              Every package has a fixed list of what you get and a firm delivery date. What we build can be found on Google and by people who ask ChatGPT.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-neutral-300 font-light leading-relaxed">
              Looking for videos for social media?{" "}
              <a href="#video" className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white">See the video packages ↓</a>
            </p>
            <div className="mt-6">
              <WhoWeAre lang="en" center />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Web & eCommerce Packages */}
      <section id="web" className="scroll-mt-16 relative z-10 py-20 md:py-28 bg-[#050607] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-white/10 pb-6 max-w-5xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
                01 / WEBSITES AND ONLINE STORES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                <Linie>Websites, Online Stores and Large Projects</Linie>
              </h2>
              <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">
                Presentation websites and online stores at a fixed price: from a simple start to complete systems with video clips, and projects for large companies.
              </p>
              <div className="mt-6">
                <WhoWeAre lang="en" />
              </div>
              <p className="mt-6 text-sm text-neutral-300 font-light leading-relaxed normal-case">
                Before you choose, see what we have built. A few projects that are online now:
              </p>
              <WorkShots items={work} lang="en" />
              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link href="/en/portfolio" className="rounded-full bg-white px-4 py-2 text-xs font-mono font-bold text-black transition hover:bg-neutral-200">See all our work →</Link>
                <Link href="/showcase" className="rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black">Concept gallery →</Link>
              </div>
              <p className="mt-6 text-sm text-neutral-400 font-light leading-relaxed">
                “Ask for this package” opens a short form. We answer within 24 working hours, with no obligation.
              </p>

              {/* What you pay in total: two examples */}
              <div id="cost" className="scroll-mt-20 mt-8 rounded-2xl border border-white/10 bg-neutral-900/30 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-medium text-white"><Linie>What you pay in total</Linie></h3>
                <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
                  Two examples, with everything that adds to the package price.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                  {[
                    { name: siteName, rows: costSite },
                    { name: storeName, rows: costStore },
                  ].map((ex) => (
                    <div key={ex.name} className="min-w-0">
                      <h4 className="text-base font-medium text-white">{ex.name}</h4>
                      <ul className="mt-3 space-y-2.5 text-sm text-neutral-300 font-light leading-relaxed">
                        {ex.rows.map((row) => (
                          <li key={row} className="flex items-start gap-2.5">
                            <span className="text-neutral-500 mt-0.5">•</span>
                            <span className="min-w-0">{row}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <h4 className="text-base font-medium text-white">Example prices for a small store</h4>
                  <p className="mt-2 text-sm text-white font-normal leading-relaxed">{costSummary("en")}</p>
                  <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">{costLead("en")}</p>
                  <ul className="mt-4 space-y-3 text-sm text-neutral-300 font-light leading-relaxed">
                    {costRows("en").map((row) => (
                      <li key={row.host} className="flex items-start gap-2.5">
                        <span className="text-neutral-500 mt-0.5">•</span>
                        <span className="min-w-0">
                          <span>{row.text}</span>{" "}
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="whitespace-nowrap font-mono text-xs text-neutral-400 underline underline-offset-4 transition hover:text-white"
                          >
                            {row.host} ↗
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">{costVatNote("en")}</p>
                </div>
              </div>
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
                      <div className="mb-3 text-xs text-neutral-400">{priceLei(pkg.price, "en")}</div>

                      <div className="text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-white/10">
                        {enDelivery(pkg.id)}
                      </div>

                      <h3 className="text-xl font-medium text-white mb-2">
                        <Linie>{details.name}</Linie>
                      </h3>

                      <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                        {details.tagline}
                      </p>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                        {details.description}
                      </p>

                      <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400 mb-8">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                          What you get:
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
                      Ask for this package →
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media AI Packages */}
      <section id="video" className="scroll-mt-16 relative z-10 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-white/10 pb-6 max-w-5xl">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">
                02 / VIDEO FOR SOCIAL MEDIA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                <Linie>Social Media Packages • Short Videos and Images</Linie>
              </h2>
              <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">
                Short videos and images for TikTok, Reels, Shorts and Facebook, made with AI: product demos, sales scripts and on-screen subtitles. You do not film anything.
              </p>
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
                      <div className="mb-3 text-xs text-neutral-400">{priceLei(pkg.price, "en")}</div>

                      <div className="text-xs font-mono text-neutral-400 mb-4 pb-4 border-b border-white/10">
                        {enDelivery(pkg.id)}
                      </div>

                      <h3 className="text-xl font-medium text-white mb-2">
                        <Linie>{details.name}</Linie>
                      </h3>

                      <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                        {details.tagline}
                      </p>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                        {details.description}
                      </p>

                      <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-xs text-neutral-400 mb-8">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3">
                          What you get:
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
                      Choose this package →
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
                03 / QUESTIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                <Linie>Frequently Asked Questions</Linie>
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
