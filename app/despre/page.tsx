import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Despre Noi — Reverb Digital",
  description:
    "Arhitectură digitală, execuție disciplinată și parteneriat strategic. Parteneri de tehnologie AI ai Zylaris Group London.",
};

const values = [
  {
    title: "Prețuri Fixe & Transparente",
    text: "Fiecare proiect are de la bun început un preț ferm și livrabile clare. Fără estimări vagi, fără costuri ascunse.",
  },
  {
    title: "Model Operațional în 4 Pași",
    text: "Proiectăm, Conectăm, Automatizăm și Scalăm. Fără improvizații sau schimbări haotice de direcție.",
  },
  {
    title: "Sisteme Orientate pe Valoare",
    text: "Măsurăm ce contează: comenzi, conversii și cereri concrete. Construim active care produc rezultate continue.",
  },
  {
    title: "Execuție Inginerească",
    text: "Nu livrăm doar strategii teoretice. Construim codul, configurăm integrările și predăm sisteme 100% funcționale.",
  },
  {
    title: "Viziune Umană + Viteză AI",
    text: "Omul stabilește direcția și gustul. Modelele AI comprimă timpul de producție video și analiză de date.",
  },
  {
    title: "Optimizare pentru Noile Motoare AI",
    text: "Asigurăm lizibilitatea semantică a afacerii tale pentru ChatGPT, Perplexity și Gemini Generative Engine Optimization GEO.",
  },
];

const approach = [
  {
    step: "01",
    title: "Audit & Obiectiv",
    text: "Analizăm arhitectura actuală, publicul țintă, oferta și stabilim indicatorii concreți de succes.",
  },
  {
    step: "02",
    title: "Proiectare & Implementare",
    text: "Construim platforma web sau magazinul online, integrăm plățile și configurăm fluxurile de date.",
  },
  {
    step: "03",
    title: "Activare Conținut & GEO",
    text: "Lansăm motorul de conținut video zilnic și structurăm datele pentru indexarea optimă de către agenții AI.",
  },
  {
    step: "04",
    title: "Scalare & Mentenanță",
    text: "Monitorizăm stabilitatea, protecția serverelor și optimizăm continuu rata de conversie.",
  },
];

export default function DesprePage() {
  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>Filozofie Operațională & Identitate</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              Structură, execuție, rezultate.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Reverb provine din <em>reverberation</em> — semnalul se întoarce mai puternic și mai curat decât a plecat. Proiectăm infrastructură digitală și sisteme de conținut care produc valoare reală.
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
                Nu amplificăm zgomotul.<br />
                <span className="text-neutral-400">Îl eliminăm.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-neutral-300 font-light">
              <p>
                Reverb Digital aduce afacerile online înapoi la esență. Nu adăugăm straturi inutile sau jargon pompos. Construim sisteme clare, inginerești, care funcționează fără fricțiune.
              </p>
              <p>
                Folosim inteligența artificială pentru a comprima timpii de producție și de analiză a datelor, nu pentru a înlocui judecata strategică. Omul trasează direcția de brand, AI-ul accelerează execuția, iar sistemul livrează conversii.
              </p>
              <p>
                Platformele noastre web încarcă instant, cataloagele de produse sunt structurate cognitiv, iar datele afacerii tale sunt formate nativ pentru a fi recomandate de noile motoare de căutare generative.
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
              Cum asigurăm predictibilitatea.
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
                <h3 className="text-xl font-medium text-white mb-3">{v.title}</h3>
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
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Metodologie</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-4">
              Proces ferm. Fără improvizații.
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
            Hai să construim arhitectura afacerii tale.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Discutăm concret pe cifrele și obiectivele afacerii tale. Primești un plan tehnic ferm și un termen precis de livrare.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-all font-bold shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Programează o Discuție Directă →
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
