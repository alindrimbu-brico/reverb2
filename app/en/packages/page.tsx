import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Fixed prices, no surprises. Choose the right package for your business — from online presence to digital store or ongoing promotion.",
};

const packages = [
  {
    id: "online-presence",
    name: "Online Presence",
    tagline: "A website that supports sales, not just image.",
    price: "€990",
    delivery: "7–14 days",
    description:
      "Fast implementation, conversion-oriented structure and Google integration for businesses that want a solid digital foundation.",
    includes: [
      "Website 3–7 pages, mobile-first",
      "Contact form + WhatsApp + Maps",
      "Basic SEO + Google Business setup",
      "Conversion-oriented structure",
      "Fixed price, no hidden costs",
      "Complete implementation, not just design",
    ],
    ideal: "Service SMBs, construction, clinics, consulting firms that want a correct and fast digital presence.",
    href: "/en/contact",
    highlight: false,
  },
  {
    id: "local-clients",
    name: "Local Clients",
    tagline: "A system that brings local inquiries, consistently.",
    price: "€1,790",
    priceExtra: "Monthly management: €490/month (+ separate ads budget)",
    delivery: "Initial setup: 30 days",
    description:
      "Local SEO + Google Ads + Meta Ads + call tracking. No useless traffic. Only relevant clients, from your area.",
    includes: [
      "Conversion-optimised landing page",
      "Local SEO (structure + optimisation)",
      "Google Ads + local Meta Ads setup",
      "Call & form tracking",
      "Google Business optimisation",
      "Clear monthly report",
    ],
    ideal: "Local service companies: construction, clinics, auto service, installers — anyone needing constant calls and inquiries.",
    href: "/en/contact",
    highlight: true,
    badge: "Recommended",
  },
  {
    id: "digital-store",
    name: "Digital Store",
    tagline: "An online store built to sell, not just look good.",
    price: "from €2,490",
    delivery: "14–30 days",
    description:
      "Right eCommerce platform setup, category structure, optimised checkout and complete payment & delivery integration.",
    includes: [
      "eCommerce platform setup suited to the project",
      "Category structure + demo products",
      "Conversion-optimised checkout",
      "Payments & delivery configured",
      "Essential tracking (sales, add-to-cart, checkout)",
      "Complete implementation, not just design",
    ],
    ideal: "Retail, manufacturers, growing brands and B2B businesses that want to sell online seriously.",
    href: "/en/online-store",
    highlight: false,
  },
  {
    id: "ai-creative-sprint",
    name: "AI Creative Sprint",
    tagline: "Positioning and visual direction, delivered in 7 days.",
    price: "€790",
    delivery: "7 days",
    description:
      "Powered by AI, guided by humans. Visual concepts, moodboard, campaign ideas and content direction — fast and actionable.",
    includes: [
      "Fast positioning + visual direction",
      "Visual concepts + brand moodboard",
      "10 campaign ideas (ads) + message angles",
      "Social content direction (simple, actionable)",
    ],
    ideal: "Brands needing direction before a launch or relaunch.",
    href: "/en/contact",
    highlight: false,
  },
];

const monthlyTiers = [
  {
    name: "Start",
    price: "€390 / month",
    desc: "For simple local businesses.",
    features: [
      "1 main channel (Google or Meta)",
      "Weekly optimisation",
      "Monthly report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "€590 / month",
    desc: "Recommended for consistent inquiries.",
    features: [
      "Google + Meta (or SEO + Ads)",
      "Message & landing testing",
      "Conversion tracking",
      "Monthly report + plan",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    price: "€790 / month",
    desc: "For eCommerce / B2B with volume.",
    features: [
      "2–3 channels + conversion optimisation",
      "Advanced weekly iteration",
      "Extended reporting",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Depends on the package: 7–14 days for Online Presence, 30 days for Local Clients, 14–30 days for Digital Store and 7 days for AI Creative Sprint.",
  },
  {
    q: "How does payment work?",
    a: "50% upfront at the start of the project, 50% at delivery. No hidden costs beyond the agreed quote.",
  },
  {
    q: "Do packages include hosting / domain?",
    a: "Hosting and domain costs are separate and you pay them directly to the provider. We help with selection and configuration.",
  },
  {
    q: "Can I change the package after starting?",
    a: "Yes, but upgrading happens at the beginning of a new cycle. Downgrading is not possible once work has started.",
  },
  {
    q: "Is the ads budget included?",
    a: "No. The ads budget (Google, Meta) is paid separately, directly to the platforms. We manage the campaigns, you control the budget.",
  },
  {
    q: "Do you work with any type of business?",
    a: "We select our projects. We work with SMBs that have a concrete objective, a real budget and want measurable results — not experiments.",
  },
];

const notFor = [
  "Startups without a defined budget",
  "Entrepreneurs who constantly change direction",
  'Clients looking for "the cheapest price"',
  "Projects without a concrete objective",
];

const forWhom = [
  "Local SMBs wanting more inquiries and calls",
  "Traditional businesses entering the digital space",
  "Businesses with a real budget and results-driven mindset",
  "Entrepreneurs seeking structure, not experiments",
];

export default function PackagesPage() {
  return (
    <div className="bg-[#030303] text-neutral-200 min-h-screen font-sans selection:bg-purple-900/50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,180,0.15),transparent_50%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">Pricing / Structure</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.1] tracking-tight md:text-7xl lg:text-[80px] text-white">
              Fixed prices.<br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500">No surprises.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 font-light md:text-xl">
              Every package has a clear price, a fixed set of deliverables and a defined timeline. You know from the start what you get and how much you pay.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One-time Packages */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">One-time packages</div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
              Projects with defined delivery
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 font-light">
              Pay once, receive a functional system. No mandatory subscription.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80}>
              <div className={`relative flex flex-col h-full rounded-[2rem] p-10 border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-neutral-900 to-[#030303] border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.1)] hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]"
                    : "bg-neutral-900/30 border-neutral-800/50 hover:border-neutral-700/80 hover:bg-neutral-900/50"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-10 inline-flex items-center rounded-full bg-purple-500/20 border border-purple-500/30 px-4 py-1 text-xs font-mono tracking-widest text-purple-300 backdrop-blur-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    {pkg.delivery}
                  </div>
                  <h3 className="text-3xl font-medium text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="mb-8 pb-8 border-b border-neutral-800">
                  <span className="text-5xl font-light tracking-tight text-white">
                    {pkg.price}
                  </span>
                  {pkg.priceExtra && (
                    <p className="mt-3 text-sm text-neutral-500">
                      {pkg.priceExtra}
                    </p>
                  )}
                </div>

                <p className="mb-8 text-sm leading-relaxed text-neutral-300 font-light">
                  {pkg.description}
                </p>

                <ul className="mb-10 flex-1 space-y-4">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-sm font-light text-neutral-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-10 rounded-2xl bg-neutral-900/50 border border-neutral-800 p-5 text-sm font-light">
                  <span className="font-medium text-neutral-500 uppercase tracking-wider text-xs block mb-1">Ideal for: </span>
                  <span className="text-neutral-300">{pkg.ideal}</span>
                </div>

                <Link
                  href={pkg.href}
                  className={`inline-flex items-center justify-center w-full rounded-full px-6 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/20"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Discuss this package
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Monthly Tiers */}
      <section className="border-y border-neutral-800/50 bg-neutral-900/20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="mb-16">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">Ongoing Promotion</div>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
                Monthly management
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 font-light">
                We manage your campaigns monthly — optimisation, reporting, adjustments. Ads budget paid separately.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {monthlyTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div className={`relative flex flex-col h-full rounded-[2rem] p-10 border transition-all duration-500 hover:-translate-y-1 ${
                    tier.recommended
                      ? "bg-gradient-to-b from-neutral-900 to-[#030303] border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:border-emerald-500/60"
                      : "bg-neutral-900/30 border-neutral-800/50 hover:border-neutral-700/80"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-10 inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-1 text-xs font-mono tracking-widest text-emerald-300 backdrop-blur-md">
                      Recommended
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light mb-8">
                    {tier.desc}
                  </p>
                  
                  <div className="text-4xl font-light tracking-tight text-white mb-10 pb-8 border-b border-neutral-800">
                    {tier.price}
                  </div>
                  
                  <ul className="mb-10 flex-1 space-y-4">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-4 text-sm font-light text-neutral-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/en/contact"
                    className={`inline-flex items-center justify-center w-full rounded-full px-6 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                      tier.recommended 
                        ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20" 
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    Choose {tier.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <p className="mt-12 text-center text-sm text-neutral-500 font-mono tracking-wide">
              + separate ads budget (Google / Meta). Minimum contract: 3 months.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">Fit</div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
              Who are these packages for?
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-neutral-800/50 bg-neutral-900/30 p-10 h-full hover:border-emerald-500/30 transition-colors duration-500">
              <div className="text-sm font-mono tracking-widest uppercase text-emerald-400 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400">✓</span> 
                A good fit if:
              </div>
              <ul className="space-y-5">
                {forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base font-light text-neutral-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-neutral-800/50 bg-neutral-900/10 p-10 h-full hover:border-rose-500/30 transition-colors duration-500">
              <div className="text-sm font-mono tracking-widest uppercase text-rose-400 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/20 text-rose-400">✕</span> 
                Not a good fit if:
              </div>
              <ul className="space-y-5">
                {notFor.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base font-light text-neutral-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How payment works */}
      <section className="border-y border-neutral-800/50 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="mb-16 text-center">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Transparency</div>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
                How payment works
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "50% upfront",
                text: "At contract signing and before work begins. Covers strategy, structure and initial implementation.",
              },
              {
                step: "02",
                title: "Implementation",
                text: "We work according to the agreed plan. Regular progress updates. No surprises at the end.",
              },
              {
                step: "03",
                title: "50% on delivery",
                text: "You pay the rest only when the project is ready and functional. Full handover with complete access.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="relative p-10 h-full border-l border-neutral-800 hover:border-purple-500/50 transition-colors duration-500">
                  <div className="mb-6 text-5xl font-light text-neutral-800">{item.step}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-neutral-400">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">Frequently asked questions</div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
              Before you send a message
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="border-b border-neutral-800/50 pb-8 h-full">
                <h3 className="text-lg font-medium text-white mb-4">{faq.q}</h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-neutral-900/20 border border-purple-500/20 p-10 md:p-16 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl text-white">
                Choose the right package.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-neutral-400">
                Initial discussion of 20–30 minutes. No obligations. We establish the objective and see if we're a good fit.
              </p>
            </div>
            <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:shrink-0">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-black transition-all hover:bg-neutral-200 hover:scale-105"
              >
                Schedule a discussion
              </Link>
              <Link
                href="/en/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-white/10"
              >
                See all services
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
