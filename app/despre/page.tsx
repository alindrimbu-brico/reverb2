import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Reverb vine din reverberation — întoarcerea sunetului la sursa sa. Aducem afacerile digitale înapoi la esență: claritate, puritate, frumusețe funcțională.",
};

const values = [
  {
    title: "Revenirea la esență",
    text: "Înainte de orice execuție, curățăm. Scoatem tot ce este în plus: jargon, zgomot vizual, promisiuni vagi, haos de proces. Ce rămâne după curățare este fundația reală a afacerii digitale.",
  },
  {
    title: "Puritate în structură",
    text: "Un sistem bine construit nu are nevoie de manual. Structura lui vorbește singură. Fiecare pagină, fiecare pas în funnel, fiecare email are un rol clar și o formă curată.",
  },
  {
    title: "Frumusețe funcțională",
    text: "Frumosul la Reverb nu este decorativ — este funcțional. Un site frumos este unul în care vizitatorul știe imediat unde se află și ce are de făcut. Frumusețea și claritatea sunt același lucru.",
  },
  {
    title: "Focus ca disciplină",
    text: "Nu lucrăm pe toate fronturile în același timp. Fiecare proiect are un obiectiv principal, un mesaj principal, un client principal. Focusul este forma cea mai curată a respectului față de client.",
  },
  {
    title: "Omul în centru, AI ca amplificator",
    text: "Direcția, sensul și discernământul rămân umane. AI-ul comprimă timpul și crește precizia execuției — nu înlocuiește gândirea. Reverb știe să folosească AI fără să îi cedeze sufletul.",
  },
  {
    title: "Parteneriat, nu tranzacție",
    text: "Nu dispărem după lansare. Construim relații în care clientul crește, iar noi creștem cu el. Relația sănătoasă este ea însăși o formă de puritate.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discuție & Esență",
    text: "Înțelegem ce contează cu adevărat pentru afacerea ta. Modelul de venituri, publicul, oferta, concurența și direcția în care vrei să crești. Nu construim nimic fără context clar.",
  },
  {
    step: "02",
    title: "Structură & Curățare",
    text: "Eliminăm zgomotul. Arhitectura site-ului, mesajele de brand, funnel-urile de conversie și logica comercială — toate trebuie să formeze un sistem coerent, curat, înainte de implementare.",
  },
  {
    step: "03",
    title: "Implementare & Lansare",
    text: "Construim, configurăm, testăm. Design premium, cod curat, copy comercial clar și integrări funcționale. Fiecare decizie are un motiv.",
  },
  {
    step: "04",
    title: "Optimizare continuă",
    text: "Claritatea nu este un punct de sosire, este o practică. Monitorizăm, măsurăm și ajustăm continuu. Un sistem digital sănătos se îmbunătățește cu fiecare lună.",
  },
];

export default function DesprePage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#1d2731]/8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Despre noi</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
                Reîntoarcerea la esența digitală.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                Reverb vine din reverberation — întoarcerea sunetului la sursa sa. Noi aducem afacerile digitale înapoi la esență: la ce contează cu adevărat, la ce funcționează cu adevărat.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Manifest */}
        <section className="bg-[#1d2731] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">Manifest</div>
                  <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                    Nu amplifică zgomotul. Reverberează claritatea.
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-base leading-8 text-white/80">
                  <p>
                    Reverb este agenția care aduce afacerile digitale înapoi la esență. La ceea ce contează cu adevărat. La frumusețea unui sistem care funcționează simplu, la puritatea unui mesaj care nu are nevoie de explicații, la focusarea care face ca fiecare decizie să aibă sens.
                  </p>
                  <p>
                    Construim afaceri digitale în care fiecare element — site, magazin, marketing, branding — vibrează la aceeași frecvență: claritate, puritate, frumusețe funcțională. Nu adăugăm straturi inutile. Nu complicăm ce poate fi simplu.
                  </p>
                  <p>
                    Căutăm întotdeauna esența: ce anume, spus sau construit exact cum trebuie, face ca totul să se liniștească.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Trajectory */}
        <section className="border-b border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Traiectoria</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  De la zgomot la liniște.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                  Liniștea nu este absența activității — este starea unui antreprenor care știe exact unde este, unde merge și ce urmează.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {[
                { label: "Zgomot", desc: "Haos, jargon, canale deconectate, mesaje confuze" },
                { label: "Curățare", desc: "Scoatem tot ce e în plus. Rămâne fundația reală" },
                { label: "Structură", desc: "Fiecare element are un rol clar și o formă curată" },
                { label: "Claritate", desc: "Conversia nu mai e un accident. Totul are sens" },
                { label: "Liniște", desc: "Un sistem care vibrează la frecvența potrivită" },
              ].map((step, i) => (
                <Reveal key={step.label} delay={i * 70}>
                  <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-6">
                    <div className="mb-3 text-3xl font-medium tracking-[-0.04em] text-[#1d2731]/20">0{i + 1}</div>
                    <h3 className="text-lg font-medium text-[#1d2731]">{step.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#1d2731]/70">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values / Piloni */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pilonii</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Principiile care ghidează fiecare decizie.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8 shadow-[0_10px_40px_rgba(29,39,49,0.05)]">
                  <h3 className="text-xl font-medium text-[#1d2731]">{v.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="border-y border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Cum lucrăm</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  Cum aducem claritatea.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                  Știi de la început ce plătești și ce primești. Fără improvizații. Fără ambiguitate.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {approach.map((a, i) => (
                <Reveal key={a.step} delay={i * 80}>
                  <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-7">
                    <div className="mb-6 text-4xl font-medium tracking-[-0.04em] text-[#1d2731]/20">{a.step}</div>
                    <h3 className="text-xl font-medium text-[#1d2731]">{a.title}</h3>
                    <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                  Gata să aducem claritate în afacerea ta digitală?
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/70">
                  Din prima discuție, totul este clar. Fără improvizații. Fără ambiguitate.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Programează un call gratuit
                </Link>
                <Link
                  href="/servicii"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Vezi toate serviciile
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
}
