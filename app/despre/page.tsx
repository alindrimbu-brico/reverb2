import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Reverb — Human Digital Marketing AI. Execuție digitală pentru IMM-uri. Omul dă direcția, AI-ul accelerează, sistemul livrează.",
};

const values = [
  {
    title: "Prețuri fixe & transparente",
    text: "Știi de la început cât plătești și ce primești. Fără estimări vagi, fără costuri ascunse.",
  },
  {
    title: "Proces clar în 4 pași",
    text: "Fără improvizații. Fără schimbări haotice. Fiecare etapă are un scop definit și un rezultat concret.",
  },
  {
    title: "Focus pe rezultate",
    text: "Nu trafic. Nu vizualizări. Ci cereri, conversii și vânzări. Măsurăm ce contează cu adevărat.",
  },
  {
    title: "Implementare, nu doar strategie",
    text: "Construim și configurăm. Nu livrăm doar prezentări și recomandări. Fiecare proiect se predă gata de utilizare.",
  },
  {
    title: "Human + AI",
    text: "Omul dă direcția strategică. AI-ul comprimă timpul de execuție. Reverb integrează ambele într-un sistem care livrează.",
  },
  {
    title: "Selectăm proiectele",
    text: "Lucrăm cu firme care vor creștere reală. Nu acceptăm proiecte fără obiectiv concret sau buget definit.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discuție & Obiectiv",
    text: "Clarificăm ce vrei să obții: apeluri, leaduri sau vânzări. Modelul de venituri, publicul, oferta, concurența.",
  },
  {
    step: "02",
    title: "Structură & Implementare",
    text: "Construim sistemul pe baza obiectivului stabilit. Arhitectură, mesaje, design, configurări.",
  },
  {
    step: "03",
    title: "Lansare & Configurare",
    text: "Activăm, testăm și verificăm conversiile. Totul funcțional la predare.",
  },
  {
    step: "04",
    title: "Optimizare & Ajustare",
    text: "Monitorizăm și ajustăm pentru performanță stabilă. Un sistem digital sănătos se îmbunătățește cu fiecare lună.",
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
              Human Digital Marketing AI.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Reverb vine din reverberation — semnalul se întoarce mai curat decât a plecat. La fel lucrăm și noi: omul dă direcția, AI-ul accelerează, sistemul livrează.
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
                  Nu amplifică zgomotul. Îl elimină.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6 text-base leading-8 text-white/80">
                <p>
                  Reverb este agenția care aduce afacerile digitale înapoi la esență. Nu adăugăm straturi inutile. Nu complicăm ce poate fi simplu. Construim sisteme care funcționează — cu structură, disciplină și rezultate măsurabile.
                </p>
                <p>
                  Folosim AI pentru a comprima timpul de execuție, nu pentru a înlocui gândirea. Omul dă direcția. AI-ul accelerează. Sistemul livrează. Asta e Reverb.
                </p>
                <p>
                  Lucrăm cu IMM-uri care vor prezență online reală — nu decorativă. Site-uri care generează cereri, magazine care vând, campanii care aduc clienți. Fără jargon. Fără haos.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* De ce Reverb — Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">De ce Reverb</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Nu suntem cea mai ieftină opțiune. Suntem opțiunea structurată.
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

      {/* Pentru cine */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pentru cine lucrăm</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Lucrăm cu firme care vor structură și rezultate.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
                <div className="text-sm font-semibold text-[#1d2731] mb-5">✔ Este potrivit pentru:</div>
                <ul className="space-y-3">
                  {[
                    "IMM-uri locale care vor mai multe cereri și apeluri",
                    "Firme tradiționale care intră în digital",
                    "Businessuri care au buget real și vor rezultate",
                    "Antreprenori care caută structură, nu experimente",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#1d2731]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31584f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-8">
                <div className="text-sm font-semibold text-[#1d2731] mb-5">✖ Nu este potrivit pentru:</div>
                <ul className="space-y-3">
                  {[
                    "Start-up fără buget definit",
                    "Antreprenori care schimbă direcția constant",
                    'Clienți care caută „cel mai ieftin preț"',
                    "Proiecte fără obiectiv concret",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#1d2731]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/25" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Cum lucrăm</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Proces clar. Fără improvizații.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              Fiecare proiect urmează aceeași structură simplă, astfel încât știi exact ce urmează.
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

        <Reveal delay={400}>
          <p className="mt-8 text-center text-sm text-[#1d2731]/50">
            Durată medie implementare: 7–30 zile, în funcție de pachet și complexitate.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Gata să construim ceva solid pentru afacerea ta?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Discuție inițială de 20–30 minute. Fără obligații. Stabilim obiectivul și vedem dacă suntem potriviți.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Programează o discuție
              </Link>
              <Link
                href="/servicii"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Vezi serviciile și prețurile
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
