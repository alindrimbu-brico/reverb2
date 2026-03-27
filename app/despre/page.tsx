import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Reverb este vocea locală a unui ecosistem global. Construim infrastructură digitală cu claritate, structură și parteneriat real. De la haos la scală.",
};

const values = [
  {
    title: "Infrastructură, nu prezență",
    text: "Orice livrabil Reverb face parte dintr-un ecosistem digital mai mare. Nu livrăm pagini — livrăm sisteme. Fiecare componentă se conectează într-un tot coerent.",
  },
  {
    title: "Structură înainte de execuție",
    text: "Niciun proiect nu pornește fără obiectiv clar, parametri definiți și un plan cu 4 pași: Discuție → Confirmare → Implementare → Livrare.",
  },
  {
    title: "Omul dă direcția. AI-ul amplifică.",
    text: "Nu renunțăm la gândire în favoarea automatizării. AI-ul scurtează haosul — nu înlocuiește discernământul uman. Direcția strategică rămâne umană.",
  },
  {
    title: "De la haos la scală",
    text: "Traiectoria fiecărui client: Haos → Structură → Sisteme → Scală. Reverb intervine la oricare etapă, dar gândește întotdeauna din perspectiva scalei.",
  },
  {
    title: "Transparență și predictibilitate",
    text: "Prețuri fixe. Proces clar. Raportare lunară. Clientul știe în orice moment ce se întâmplă, ce a fost livrat și ce urmează.",
  },
  {
    title: "Selecție, nu volum",
    text: "Lucrăm cu antreprenori care vor creștere reală. Nu concurăm pe preț — concurăm pe structură și rezultate. Calitatea bate cantitatea.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discuție & Obiectiv",
    text: "Clarificăm ce vrei să obții. Modelul de venituri, publicul, oferta, concurența și direcția în care vrei să crești. Nu construim nimic fără context clar.",
  },
  {
    step: "02",
    title: "Structură & Plan",
    text: "Proiectăm infrastructura potrivită. Arhitectura, mesajele, funnel-urile, logica comercială — toate trebuie să formeze un sistem coerent înainte de implementare.",
  },
  {
    step: "03",
    title: "Implementare & Lansare",
    text: "Construim, configurăm, testăm. Design premium, cod curat, copy comercial clar și integrări funcționale. Fiecare decizie are un motiv.",
  },
  {
    step: "04",
    title: "Optimizare & Creștere",
    text: "Lansarea nu este finalul. Monitorizăm, măsurăm și ajustăm continuu. Un sistem digital sănătos se îmbunătățește cu fiecare lună, nu se degradează.",
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
                Vocea locală a unui ecosistem global.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                Reverb este divizia de execuție locală a unui ecosistem digital mai amplu. Construim infrastructură digitală pentru antreprenorii care vor claritate, structură și creștere autentică — nu promisiuni umflate.
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
                    Construim infrastructură, nu campanii. Parteneriate, nu proiecte.
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-base leading-8 text-white/80">
                  <p>
                    Reverb nu construiește site-uri. Reverb construiește infrastructură digitală — sisteme funcționale în care omul și AI-ul lucrează împreună pentru a genera claritate, cereri și creștere stabilă.
                  </p>
                  <p>
                    Credem într-o relație sănătoasă între om și AI: omul dă direcția, sensul și discernământul, iar AI-ul amplifică viteza, claritatea și execuția. Nu construim cu AI pentru că e la modă. Construim cu AI pentru că funcționează, când e folosit corect.
                  </p>
                  <p>
                    Nu livrăm pagini — livrăm sisteme de vânzare pe termen lung, branduri care respiră autentic și parteneriate care nu se termină la lansare. Fiecare client urmează o traiectorie clară: de la haos digital la infrastructură care scalează.
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
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Traiectoria clientului</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  De la haos digital la infrastructură care funcționează.
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Haos", desc: "Lipsa de structură, decizii reactive, canale deconectate, mesaje confuze." },
                { label: "Structură", desc: "Obiective clare, plan definit, arhitectură coerentă, parametri măsurabili." },
                { label: "Sisteme", desc: "Procese funcționale, automatizări inteligente, flux de vânzare integrat." },
                { label: "Scală", desc: "Creștere stabilă, predictibilă și sustenabilă pe termen lung." },
              ].map((step, i) => (
                <Reveal key={step.label} delay={i * 80}>
                  <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="text-4xl font-medium tracking-[-0.04em] text-[#1d2731]/20">0{i + 1}</div>
                      {i < 3 && <div className="hidden h-px flex-1 bg-[#1d2731]/15 xl:block" />}
                    </div>
                    <h3 className="text-xl font-medium text-[#1d2731]">{step.label}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/70">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pilonii filosofici</div>
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
                  Proces clar. Predictibil. Transparent.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                  Știi de la început ce plătești și ce primești. Fiecare etapă are un scop precis.
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
                  Gata să construim infrastructură digitală împreună?
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/70">
                  Stabilim obiectivul, structura și termenul de implementare din prima discuție. Fără improvizații.
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
                  Vezi infrastructura completă
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
}
