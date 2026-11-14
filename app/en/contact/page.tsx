import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import PageBackdrop from "@/components/PageBackdrop";
import { packages } from "@/lib/packages";
import { packagesEn, enPrice, VAT_NOTE_EN } from "@/lib/packagesEn";
import { company } from "@/lib/company";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/en/contact", languages: { ro: "/contact", en: "/en/contact", "x-default": "/contact" } },
  title: "Contact",
  description:
    "Contact Reverb Digital: phone, WhatsApp, e-mail and a form. An answer within 24 working hours.",
};

export default function ContactPageEN() {
  return (
    <div className="text-white">
      <PageBackdrop />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">Contact</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              <Linie>Let's talk.</Linie>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
              An answer within 24 working hours.
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
              <div className="card-hover rounded-3xl border border-white/10 bg-neutral-900/40 p-8">
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">Direct contact</h2>
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="text-neutral-400">Contact</span>
                    <span className="font-medium text-white">{company.contactName}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="text-neutral-400">Phone</span>
                    <a href={company.tel} className="whitespace-nowrap font-medium text-white hover:underline">{company.phoneIntl}</a>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="text-neutral-400">WhatsApp</span>
                    <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-400 hover:underline">
                      Message on WhatsApp ↗
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span className="text-neutral-400">E-mail</span>
                    <a href={`mailto:${company.email}`} className="font-medium text-white hover:underline">{company.email}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 text-white">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">Prices</div>
                <div className="mt-5 space-y-4">
                  {packages.map((p) => (
                    <div key={p.id} className="flex items-start justify-between gap-4 text-sm">
                      <span className="min-w-0 text-neutral-300">{packagesEn[p.id].shortName}</span>
                      <span className="shrink-0 whitespace-nowrap font-medium text-neutral-300">{enPrice(p.id)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-xs text-neutral-500">{VAT_NOTE_EN}</div>
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
