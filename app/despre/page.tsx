import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Reverb există pentru antreprenorii care vor o afacere digitală construită cu claritate, stabilitate și adevăr. Cine suntem, ce credem și cum lucrăm.",
};

const values = [
  {
    title: "Afacere pe sufletul tău",
    text: "Nu împingem șabloane universale peste business-ul tău. Construim un sistem care să se potrivească felului tău de a munci, de a vinde și de a crește. Fiecare client are o realitate distinctă. O tratăm ca atare.",
  },
  {
    title: "Parteneriat pe termen lung",
    text: "Nu dispărem după lansare. Optimizăm, ajustăm și luăm decizii împreună, pe baza realității, nu a entuziasmului de prezentare. Un proiect bun se construiește în timp, nu se livrează și se uită.",
  },
  {
    title: "Claritate digitală",
    text: "Punem ordine în ofertă, pagini, trafic, mesaje și funnel-uri. Când totul devine clar, conversia nu mai este un accident fericit. Claritatea este o formă de respect față de client.",
  },
  {
    title: "AI ca amplificator",
    text: "Folosim AI ca să scurtăm haosul, nu gândirea. Direcția strategică rămâne umană, iar tehnologia o execută mai bine. AI-ul la Reverb e un instrument, nu o scuză pentru mediocritate rapidă.",
  },
  {
    title: "Execuție fără artificii",
    text: "Preferăm să livrăm ceva ce funcționează decât ceva care impresionează în prezentare. Soliditatea bate spectacolul. Coerența bate viralitatea. Pe termen lung, calitatea reală câștigă.",
  },
  {
    title: "Transparență reală",
    text: "Comunicăm deschis despre ce funcționează, ce nu, și de ce. Nu umflăm rezultatele, nu ascundem problemele și nu facem promisiuni pe care nu le putem ține. Încrederea se construiește cu adevăr, nu cu marketing.",
  },
];

const approach = [
  {
    step: "01",
    title: "Înțelegem",
    text: "Înainte de orice, înțelegem business-ul tău. Modelul de venituri, publicul, oferta, concurența și direcția în care vrei să crești. Nu construim nimic fără context clar.",
  },
  {
    step: "02",
    title: "Structurăm",
    text: "Punem ordine în haos. Arhitectura site-ului, mesajele de brand, funnel-urile de conversie și logica comercială — toate trebuie să formeze un sistem coerent înainte de lansare.",
  },
  {
    step: "03",
    title: "Construim",
    text: "Executăm cu disciplină. Design premium, cod curat, copy comercial clar și integrări funcționale. Fiecare decizie de implementare are un motiv.",
  },
  {
    step: "04",
    title: "Optimizăm",
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
                Suntem împăcați cu AI-ul. Tocmai de aceea îl folosim bine.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                Reverb nu este o agenție obișnuită de marketing digital. Suntem un partener pe termen lung pentru antreprenorii care vor claritate, structură și creștere autentică în mediul digital.
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
                    Construim sisteme, nu campanii. Parteneriate, nu proiecte.
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-base leading-8 text-white/80">
                  <p>
                    Reverb există pentru antreprenorii care vor o afacere digitală construită cu claritate, stabilitate și adevăr. Nu pentru cei care caută soluții rapide, campanii ieftine sau promisiuni umflate.
                  </p>
                  <p>
                    Credem într-o relație sănătoasă între om și AI: omul dă direcția, sensul și discernământul, iar AI-ul amplifică viteza, claritatea și execuția. Nu construim cu AI pentru că e la modă. Construim cu AI pentru că funcționează, când e folosit corect.
                  </p>
                  <p>
                    Nu construim doar site-uri sau campanii. Construim sisteme de vânzare pe termen lung, branduri care respiră autentic și parteneriate care nu se termină la lansare.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Ce credem</div>
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
                  Un proces clar, de la idee la sistem funcțional.
                </h2>
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
            <div className="rounded-[36px] border border-[#1d2731]/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(237,239,242,0.75))] p-8 shadow-[0_20px_80px_rgba(29,39,49,0.08)] md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                  Vrei să construim ceva real împreună?
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#1d2731]/68">
                  Vorbim despre business-ul tău, direcția în care vrei să mergi și cum putem construi împreună un sistem digital care să dureze.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d2731] px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Hai să ne sincronizăm
                </Link>
                <Link
                  href="/servicii"
                  className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/12 bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5"
                >
                  Vezi serviciile noastre
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
}
