import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a 20–30 minute call. We'll define the goal, structure, and implementation timeline. No obligations.",
};

export default function ContactPageEN() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,170,0.15),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Contact</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Let's talk about your business.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              We'll define the goal, structure, and implementation timeline in our first call. No obligations. No pressure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: info */}
          <div className="space-y-8">
            <Reveal>
              <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Schedule a Call</h2>
                <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">
                  20–30 minutes is enough for us to understand your situation and propose a concrete plan. If there's no good fit, we'll tell you directly.
                </p>
                <div className="mt-6 space-y-3 text-sm text-[#1d2731]/65">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white text-xs">1</span>
                    Fill out the form below
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white text-xs">2</span>
                    We'll confirm a slot within 24h
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white text-xs">3</span>
                    We talk, clarify, and propose
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[28px] bg-[#1d2731] p-8 text-white">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">Available Packages</div>
                <div className="mt-5 space-y-4">
                  {[
                    { name: "Online Presence", price: "€990" },
                    { name: "Local Clients", price: "€1.790 + €490/mo" },
                    { name: "Digital Store", price: "from €2.490" },
                    { name: "Continuous Promotion", price: "from €390/mo" },
                    { name: "AI Creative Sprint", price: "€790" },
                  ].map((pkg) => (
                    <div key={pkg.name} className="flex items-center justify-between text-sm">
                      <span className="text-white/75">{pkg.name}</span>
                      <span className="font-medium text-white/90">{pkg.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-xs text-white/40">Terms: 50% advance / 50% on delivery.</div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-8">
                <div className="text-sm font-semibold text-[#1d2731]">What We Can Discuss</div>
                <ul className="mt-5 space-y-3">
                  {[
                    "New or redesigned website",
                    "Complete online store",
                    "Local clients — SEO + Ads",
                    "Monthly continuous promotion",
                    "Positioning and visual direction (AI Creative Sprint)",
                    "Any combination of the above",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-6 text-[#1d2731]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/35" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
