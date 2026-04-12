"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function OriginiShowcase() {
  return (
    <div className="bg-[#FBF9F6] text-[#2C2A26] font-sans selection:bg-[#A0402C] selection:text-[#FBF9F6] min-h-screen">
      
      {/* Dynamic CSS styles replacing styled-jsx to avoid hydration issues */}
      <style dangerouslySetInnerHTML={{__html: `
        .terracotta-text {
          color: #A0402C;
        }
        .bg-terracotta {
          background-color: #A0402C;
        }
        .wood-border {
          border-color: rgba(220, 174, 116, 0.4);
        }
        .infinity-line {
          width: 2px;
          background: linear-gradient(180deg, rgba(160, 64, 44, 0) 0%, rgba(160, 64, 44, 0.4) 50%, rgba(160, 64, 44, 0) 100%);
        }
        
        .masura-grid {
          background-image: 
            linear-gradient(rgba(44, 42, 38, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(44, 42, 38, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}} />

      {/* ── Navbar Artizan ── */}
      <nav className="sticky top-0 z-50 w-full border-b wood-border bg-[#FBF9F6]/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/showcase" className="text-[10px] font-bold uppercase tracking-widest text-[#2C2A26]/50 hover:text-[#A0402C]">
            ← Înapoi spre Origini
          </Link>
          <div className="text-sm font-light tracking-[0.4em] uppercase text-[#2C2A26]">
            MĂSURĂ<span className="font-bold terracotta-text opacity-90">.PORT</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest terracotta-text border border-[#A0402C]/30 rounded-none px-4 py-1.5">
            Artă Populară
          </div>
        </div>
      </nav>

      {/* ── Hero Rădăcini ── */}
      <section className="relative px-6 py-32 lg:py-48 lg:px-10 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden masura-grid">
        
        {/* Abstract motif geometry (Brancusian echoes) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[150px] infinity-line"></div>
        <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-[#A0402C] rounded-full"></div>
        <div className="absolute top-[190px] left-1/2 -translate-x-1/2 w-8 h-8 border border-[#A0402C]/40 rounded-full"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center mt-20">
          <Reveal>
            <div className="mb-8 font-serif italic text-xl terracotta-text">
              Manifestul Pământului
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-light tracking-[-0.03em] leading-[0.95] text-[#2C2A26] uppercase">
               Simțul <br className="hidden md:block"/>
              <span className="font-serif italic capitalize terracotta-text relative">
                 Măsurii.
                 <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#A0402C]/30"></span>
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-[#2C2A26]/70 mt-10 max-w-3xl leading-snug">
               Tradițiile și echilibrul nealterat le-am păstrat <br className="hidden md:block"/>
               <i className="font-serif text-[#2C2A26]">din buna înțelegere.</i>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── Esența Recunoasterii (Core Idea) ── */}
      <section className="py-32 bg-[#2C2A26] text-[#FBF9F6] relative z-10 border-y-8 border-[#A0402C]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="order-2 lg:order-1 relative">
                {/* Geometrical structure evoking loom (Război de țesut) or wood carvings */}
                <div className="aspect-[4/5] bg-[#33312D] border border-white/10 p-8 flex flex-col justify-between">
                   <div className="flex justify-between w-full border-b border-white/10 pb-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Folclor Nealterat</span>
                      <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Cap 01.</span>
                   </div>
                   <div className="my-auto text-center px-8">
                      <div className="w-16 h-16 border border-[#A0402C] mx-auto rotate-45 mb-10 flex items-center justify-center">
                         <div className="w-8 h-8 bg-[#A0402C]"></div>
                      </div>
                      <h3 className="text-3xl font-serif font-light leading-snug">
                         "Ceea ce stă pe pământ drept, nu se clatină."
                      </h3>
                   </div>
                   <div className="w-full border-t border-white/10 pt-4 text-center">
                      <span className="text-[9px] uppercase tracking-[0.4em] text-[#A0402C]">Punctul de Sprjin</span>
                   </div>
                </div>
             </div>
             
             <div className="order-1 lg:order-2">
                <Reveal>
                  <div className="inline-flex items-center gap-3 mb-8">
                     <span className="w-8 h-[1px] bg-[#A0402C]"></span>
                     <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#A0402C]">Momentul Prezent</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10 leading-tight">
                    Recunoașterea fără precedent a <span className="font-serif italic text-white">artelor populare</span> este vitală.
                  </h2>
                  <p className="text-[#FBF9F6]/60 font-extralight leading-relaxed mb-6 text-lg">
                    Într-o epocă a aberațiilor tehnologice și a excesului vizual, am ales o viziune diametral opusă. Simțul măsurii nu este o limitare – este o disciplină a frumosului care transcede timpul.
                  </p>
                  <p className="text-[#FBF9F6]/60 font-extralight leading-relaxed text-lg">
                    Am păstrat tradițiile intacte nu dintr-o inerție arheologică, ci dintr-o <i className="font-serif text-[#A0402C] not-italic">bună înțelegere</i> a structurii umane fundamentale. Arta populară ne oferă singura simetrie valabilă: echilibrul nealterat, materialele lăsate să respire, tăieturile sigure în lemn brut.
                  </p>
                </Reveal>
             </div>
          </div>
        </div>
      </section>

      {/* ── Pilonii de Bază (Grid Textual/Filozofic) ── */}
      <section className="py-32 masura-grid relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
             <div className="mb-20 text-center">
               <h2 className="text-4xl font-serif tracking-tight text-[#2C2A26]">
                 Pilonii „Bunei Înțelegeri”
               </h2>
               <div className="w-16 h-[1px] bg-[#A0402C] mx-auto mt-8"></div>
             </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3">
            {[
               { title: "Simetria Formei", desc: "Arta țesutului și crestăturilor în lemn ne-au învățat că proporția corectă este însăși estetica. Acolo unde e măsură, e calm." },
               { title: "Materia Pură", desc: "Fibră de in. Lutul aspre pe margini. Piatra nepulverizată. Folosim aceste texturi în designul digital pentru a recâștiga contactul vizual." },
               { title: "Timpul Lung", desc: "Tradiția nu se grăbește. Această arhitectură a fost structurată solid, fără animații isterice, lăsând conceptul doar să emane prezență." }
            ].map((adv, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative border border-[#2C2A26]/10 p-10 h-full hover:border-[#A0402C]/40 transition-colors duration-500 bg-white/50 backdrop-blur-sm">
                  <div className="text-[10px] font-bold text-[#A0402C] tracking-widest uppercase mb-6 border-b border-[#A0402C]/20 w-max pb-2">
                     0{i + 1} // Origine
                  </div>
                  <h3 className="text-2xl font-serif text-[#2C2A26] mb-4">{adv.title}</h3>
                  <p className="text-[#2C2A26]/70 font-extralight leading-relaxed">{adv.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer / CTA Chemare ── */}
      <footer className="relative py-40 text-center bg-[#F5F2EB] border-t border-[#A0402C]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[#A0402C]/[0.02]"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="w-12 h-12 border-2 border-[#A0402C] mx-auto rotate-45 mb-10 flex items-center justify-center">
               <div className="w-4 h-4 bg-[#A0402C]"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#2C2A26] mb-10 leading-[1.1] uppercase">
              Întoarcerea la <br/>
              <span className="font-serif italic text-[#A0402C] capitalize">Echilibru.</span>
            </h2>
            
            <p className="text-[#2C2A26]/80 font-extralight text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
               Redescoperă greutatea tradiției în forma ei modernă. Fără compromisuri pe fond, fără încărcături pe formă.
            </p>
            
            <button className="group relative inline-flex items-center justify-center border-2 border-[#2C2A26] bg-[#2C2A26] px-14 py-5 text-[11px] font-bold uppercase tracking-widest text-[#FBF9F6] hover:bg-transparent hover:text-[#2C2A26] transition-all duration-300">
               Contemplă Portofoliul
            </button>
            <div className="mt-16 text-[9px] uppercase tracking-widest text-[#2C2A26]/40 font-bold">
               Un concept purist formulat de Reverb.ro
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
