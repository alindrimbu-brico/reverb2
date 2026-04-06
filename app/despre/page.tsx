import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Structură, execuție, rezultate. Execuție digitală pentru IMM-uri. Fără jargon, fără haos.",
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

const certifications = [
  { name: "Google Partner", category: "Digital Advertising" },
  { name: "HubSpot Partner", category: "CRM & Marketing" },
  { name: "Shopify Expert", category: "E-commerce" },
  { name: "Meta Partners", category: "Social Commerce" },
  { name: "SEO Specialist", category: "Search & Content" },
  { name: "Google Analytics Certified", category: "Data & Analytics" },
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
              Structură, execuție, rezultate.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Reverb vine din reverberation — semnalul se întoarce mai curat decât a plecat. Website, magazine online, marketing digital. Execuție digitală care livrează.
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 tab-blur-group">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="relative group rounded-[28px] h-full">
                <div
                  className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-white/70 shadow-[0_10px_40px_rgba(29,39,49,0.05)]"
                  style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                />
                <div 
                  className="relative z-10 p-8 transition-all duration-500 h-full flex flex-col"
                  style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                >
                  <h3 className="text-xl font-medium text-[#1d2731]">{v.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{v.text}</p>
                </div>
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 tab-blur-group">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 80}>
              <div className="relative group rounded-[28px] h-full">
                <div
                  className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2]"
                  style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                />
                <div 
                  className="relative z-10 p-7 transition-all duration-500 h-full flex flex-col"
                  style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                >
                  <div className="mb-6 text-4xl font-medium tracking-[-0.04em] text-[#1d2731]/20">{a.step}</div>
                  <h3 className="text-xl font-medium text-[#1d2731]">{a.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{a.text}</p>
                </div>
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

      {/* Certifications */}
      <section className="bg-white/50 border-y border-[#1d2731]/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Certificări & Parteneriate</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Recunoscut de liderii industriei.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Suntem certificați și parteneri cu platformele și serviciile pe care le folosim pentru a construi și scala afacerile digitale.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 60}>
                <div className="group relative rounded-[24px] border border-[#1d2731]/8 bg-[#faf7f2] p-6 transition hover:border-[#1d2731]/15 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest font-semibold text-[#1d2731]/40 mb-2">
                        {cert.category}
                      </div>
                      <h3 className="text-lg font-medium text-[#1d2731]">
                        {cert.name}
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#31584f]/10 flex items-center justify-center text-[#31584f] group-hover:bg-[#31584f]/15 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="mt-12 text-center text-sm text-[#1d2731]/50">
              Educație continuă și certificări actualizate pentru a rămâne în fruntea industriei.
            </p>
          </Reveal>
        </div>
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
