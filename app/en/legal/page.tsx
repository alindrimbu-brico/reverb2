import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Legal & Company Information",
  description: "Company registration, legal details, and payment information.",
};

export default function LegalPageEN() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Company Information</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Legal & Details.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Complete company registration, legal information and payment details.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Information */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Company Registration</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              KALKI DRIM MAGAZIN S.R.L.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Registration Details */}
          <Reveal>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
              <h3 className="text-lg font-semibold text-[#1d2731] mb-6">Registration Details</h3>
              <div className="space-y-5">
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">CUI</div>
                  <div className="text-base font-medium text-[#1d2731]">RO42565965</div>
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">Commerce Registry</div>
                  <div className="text-base font-medium text-[#1d2731]">J39/335/2020</div>
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">Share Capital</div>
                  <div className="text-base font-medium text-[#1d2731]">45,000 RON</div>
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">Country</div>
                  <div className="text-base font-medium text-[#1d2731]">Romania</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Address & Contact */}
          <Reveal delay={100}>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-8">
              <h3 className="text-lg font-semibold text-[#1d2731] mb-6">Address & Contact</h3>
              <div className="space-y-5">
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">City / County</div>
                  <div className="text-base font-medium text-[#1d2731]">Focșani, Vrancea</div>
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">Full Address</div>
                  <div className="text-base font-medium text-[#1d2731]">Str. Măgura 57 F, Focșani, Vrancea, 620157</div>
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">Phone</div>
                  <a href="tel:0737478238" className="text-base font-medium text-[#31584f] hover:text-[#1d2731] transition">
                    +40 737 478 238
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Payment Information */}
      <section className="bg-white/50 border-y border-[#1d2731]/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Payment Methods</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Bank Accounts for B2B Transactions
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Use the appropriate bank account information for your payment method and currency.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                bank: "BANCA ROMANA DE DEZVOLTARE",
                iban: "RO26BRDE400SV39132184000",
                currency: "RON - EUR",
              },
              {
                bank: "UNICREDIT BANK SA",
                iban: "RO82BACX0000002458934000",
                currency: "RON - EUR",
              },
              {
                bank: "Trezoreria Statului",
                iban: "RO43TREZ6915069XXX011686",
                currency: "RON",
              },
            ].map((account, i) => (
              <Reveal key={account.bank} delay={i * 80}>
                <div className="rounded-[24px] border border-[#1d2731]/8 bg-white/70 p-6 hover:border-[#1d2731]/15 hover:shadow-md transition">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-3">Bank</div>
                  <h3 className="text-base font-semibold text-[#1d2731] mb-4">{account.bank}</h3>
                  
                  <div className="mb-4">
                    <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-2">IBAN</div>
                    <div className="font-mono text-sm font-medium text-[#1d2731] break-all bg-[#faf7f2] p-3 rounded-lg">
                      {account.iban}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase font-bold tracking-widest text-[#1d2731]/50 mb-1">Currency</div>
                    <div className="text-sm text-[#1d2731]/70">{account.currency}</div> 
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="rounded-[36px] bg-[#1d2731] p-8 md:p-12 text-white">
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl mb-6">
              Important Information
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3 text-lg">For Invoices & Orders</h3>
                <p className="text-white/80 leading-7">
                  Please include the CUI (RO42565965) and commerce registry number (J39/335/2020) on all official documentation and invoices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Payment Terms</h3>
                <p className="text-white/80 leading-7">
                  For specific payment terms and conditions, please contact us directly at the phone number or address listed above.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="rounded-[36px] bg-white/50 p-8 text-center md:p-12 border border-[#1d2731]/8">
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl text-[#1d2731] mb-4">
              Need to contact us?
            </h2>
            <p className="text-[#1d2731]/70 mb-8">
              Call us or visit our address in Focșani, Vrancea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0737478238"
                className="inline-flex items-center justify-center rounded-full bg-[#1d2731] text-white px-8 py-4 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Call: +40 737 478 238
              </a>
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1d2731] text-[#1d2731] px-8 py-4 text-sm font-medium transition hover:bg-[#1d2731]/5"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
