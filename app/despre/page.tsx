import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/despre", languages: { ro: "/despre", en: "/en/about", "x-default": "/despre" } },
  title: "Despre Noi — Reverb Digital",
  description:
    "Cine suntem și cum lucrăm: prețuri fixe, pași clari și sprijin după lansare. Partener de tehnologie al Zylaris Group London.",
};

const values = [
  {
    title: "Prețuri Fixe & Transparente",
    text: "Fiecare proiect are de la bun început un preț ferm și o listă clară cu ce primești. Fără estimări vagi, fără costuri ascunse.",
  },
  {
    title: "Patru Pași Clari",
    text: "Plănuim, construim, lansăm și îmbunătățim. Știi mereu la ce pas suntem și nimic nu se face pe ghicite.",
  },
  {
    title: "Rezultate pe Care le Poți Număra",
    text: "Măsurăm ce contează pentru tine: comenzi, cereri și telefoane de la clienți adevărați.",
  },
  {
    title: "Construim, nu Doar Sfătuim",
    text: "Nu îți lăsăm o strategie pe hârtie. Scriem codul, legăm plățile și curierii și îți predăm un site care merge.",
  },
  {
    title: "Gust de Om, Viteză de AI",
    text: "Omul hotărăște direcția și felul în care arată. AI-ul scurtează timpul în care se fac clipurile și se analizează datele.",
  },
  {
    title: "Găsit de Asistenții AI",
    text: "Scriem datele afacerii tale astfel încât ChatGPT, Perplexity, Claude și Gemini să le înțeleagă și să te poată recomanda.",
  },
];

const approach = [
  {
    step: "01",
    title: "Ascultăm și Plănuim",
    text: "Ne uităm la ce ai acum, cine îți sunt clienții și ce vinzi și stabilim împreună cum măsurăm reușita.",
  },
  {
    step: "02",
    title: "Construim",
    text: "Facem site-ul sau magazinul online și legăm plata cu cardul, facturile și curierii.",
  },
  {
    step: "03",
    title: "Clipuri și Căutarea cu AI",
    text: "Pornim clipurile zilnice pentru rețelele sociale și pregătim datele tale ca asistenții AI să le poată citi.",
  },
  {
    step: "04",
    title: "Rămânem lângă Tine",
    text: "Avem grijă ca site-ul să fie mereu pornit și în siguranță și îmbunătățim mereu ce aduce comenzi.",
  },
];

export default function DesprePage() {
  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] light:opacity-[0.075]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.1em] sm:tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>Despre noi</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Structură, execuție, rezultate.</Linie>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Reverb vine de la <em>reverberation</em>: semnalul se întoarce mai puternic și mai curat decât a plecat. Facem site-uri, magazine online și clipuri pentru rețelele sociale, te ducem de la zero până la prima vânzare și te sfătuim și după.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manifest */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-4">Manifestul Reverb</div>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
                <Linie>Nu amplificăm zgomotul.</Linie><br />
                <span className="text-neutral-400"><Linie>Îl eliminăm.</Linie></span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-neutral-300 font-light">
              <p>
                Reverb Digital face lucrurile simplu. Nu adăugăm nimic de umplutură și nu vorbim în termeni pe care nu îi înțelegi. Construim site-uri și magazine clare, care merg fără bătăi de cap.
              </p>
              <p>
                Folosim inteligența artificială ca să scurtăm timpul de lucru, nu ca să înlocuim judecata omului. Omul hotărăște direcția și felul în care arată marca, AI-ul grăbește execuția, iar rezultatul se vede în comenzi.
              </p>
              <p>
                Site-urile noastre se încarcă imediat, produsele sunt așezate ușor de găsit, iar datele firmei tale sunt scrise astfel încât să poată fi recomandate și de asistenții AI, nu doar găsite pe Google.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principii & Valori */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Principiile Noastre</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              <Linie>Cum lucrăm.</Linie>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-medium text-white mb-3"><Linie>{v.title}</Linie></h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Procesul de lucru */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Cum decurge un proiect</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4">
              <Linie>Proces ferm. Fără improvizații.</Linie>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((a) => (
            <div key={a.step} className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
              <div className="font-mono text-2xl font-light text-neutral-600 mb-4">{a.step}</div>
              <h3 className="text-lg font-medium text-white mb-2">{a.title}</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative z-10 py-24 px-6 text-center max-w-4xl mx-auto">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-4">Pregătit pentru Următorul Pas?</div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            <Linie>Hai să construim site-ul afacerii tale.</Linie>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Vorbim concret despre ce vinzi și unde vrei să ajungi. Primești un plan clar, un preț fix și un termen precis de livrare.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-4 text-center text-xs font-mono uppercase tracking-wider sm:tracking-widest text-black hover:bg-neutral-200 transition-all font-bold shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Programează o Discuție Directă →
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
