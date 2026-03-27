import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Programează un call sau trimite-ne un mesaj. Vorbim despre business-ul tău și vedem cum putem construi împreună ceva real.",
};

export default function ContactPage() {
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
                Hai să vorbim despre afacerea ta.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                Reverb nu este despre volum de promisiuni. Este despre direcție corectă, execuție bună și creștere sănătoasă. Restul este zgomot.
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
                  <h2 className="text-2xl font-medium tracking-[-0.03em]">Programează un call</h2>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">
                    30 de minute sunt suficiente ca să înțelegem situația ta și să-ți propunem un plan concret. Fără pitch. Fără presiune. Dacă nu avem o potrivire bună, ți-o spunem direct.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-[#1d2731]/65">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white text-xs">1</span>
                      Completezi formularul de mai jos
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white text-xs">2</span>
                      Îți confirmăm un slot în 24h
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white text-xs">3</span>
                      Vorbim, clarificăm, propunem
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-[28px] bg-[#1d2731] p-8 text-white">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">Manifest scurt</div>
                  <p className="mt-4 text-base leading-7 text-white/80">
                    Nu construim pentru toți. Construim pentru antreprenorii care știu că o afacere digitală sănătoasă nu se naște dintr-o campanie, ci dintr-un sistem bine gândit.
                  </p>
                  <p className="mt-4 text-base leading-7 text-white/80">
                    Dacă asta rezonează cu tine, suntem la locul potrivit.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-8">
                  <div className="text-sm font-semibold text-[#1d2731]">Ce poți discuta cu noi</div>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Lansarea sau relansarea unui magazin online",
                      "Crearea sau reproiectarea unui site",
                      "Strategie de marketing digital",
                      "Branding și poziționare",
                      "Consultanță digitală continuă",
                      "Orice combinație din cele de mai sus",
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
