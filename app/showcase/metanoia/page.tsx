"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FlashCard {
  id: string;
  theme: string;
  concept: string;
  explanation: string;
  exercise: string;
}

const studyData: FlashCard[] = [
  {
    id: "f1",
    theme: "FILOSOFIE",
    concept: "Metanoia (Μετάνοια)",
    explanation: "O transformare fundamentală a modului de gândire și a percepției asupra realității. Nu este doar o corecție de traiectorie, ci o deconstrucție completă a arhitecturii mentale anterioare, permițând accesul la un nivel superior de claritate.",
    exercise: "Identifică o convingere absolută pe care o ai. Dacă s-ar dovedi falsă chiar acum, cum s-ar restructura viața ta?"
  },
  {
    id: "p1",
    theme: "PSIHOLOGIE",
    concept: "Zgomotul Cognitiv",
    explanation: "Supraîncărcarea minții cu stimuli irelevanți care diluează capacitatea de procesare profundă. Eliminarea zgomotului vizual și informațional nu este o estetică, ci o necesitate pentru a permite conținutului de substanță să „respire”.",
    exercise: "Redu consumul de informație pasivă cu 50% pentru următoarele 24 de ore și observă claritatea reziduală a deciziilor tale."
  },
  {
    id: "t1",
    theme: "TEME MAJORE",
    concept: "Claritatea ca Verb",
    explanation: "Claritatea nu este o stare pasivă în care te afli, ci o acțiune continuă, o forță care destramă complexitatea prin *Audit de Distilare*. Implică decizii binare stricte pentru esențializarea vieții și a structurilor de lucru.",
    exercise: "Aplică strategia de O Singură Pagină. Refă o strategie la care lucrezi păstrând doar 90% substanță și 10% execuție pe o foaie fizică."
  }
];

export default function MetanoiaShowcase() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white" style={{ backgroundColor: "#FDFDF9", color: "#0F0F0F" }}>
      
      {/* Dynamic CSS for 3D Flip effect & sacred animations */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .card-transition { transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>

      {/* ── Sacred Header ── */}
      <header className="fixed top-0 w-full z-50 transition-all bg-[#FDFDF9]/90 backdrop-blur-md border-b" style={{ borderColor: "rgba(212, 175, 55, 0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link href="/showcase" className="font-serif tracking-[0.2em] font-light" style={{ color: "#0F0F0F" }}>
            ← REVERB<span style={{ color: "#D4AF37", fontSize: '0.8em', marginLeft: '2px' }}>✦</span>
          </Link>
          <nav className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "#4A4A4A" }}>
            Metanoia | Arhitectura Clarității
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* ── Section 1: Hero & Filosofia Reverb ── */}
        <section className="mb-32 lg:mb-48 relative animate-float-slow">
           <div className="text-center max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6" style={{ color: "#D4AF37" }}>
                 Filosofia Reverb.ro
              </p>
              <h1 className="font-serif text-5xl lg:text-7xl mb-8 font-light" style={{ color: "#0F0F0F", lineHeight: 1.1 }}>
                 Claritatea este <br/> un <span className="italic" style={{ color: "#4A4A4A" }}>verb</span>.
              </h1>
              <div className="w-16 h-[1px] mx-auto mb-8" style={{ backgroundColor: "#D4AF37" }}></div>
              <p className="text-sm lg:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: "#4A4A4A" }}>
                 Nu este o stare pasivă, ci o forță care „măcină” complexitatea prin Auditul de Distilare 
                 până rămâne doar esența oportunității. Optimizăm pentru o realitate nediluată.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                <div className="border p-8 h-full" style={{ borderColor: "rgba(212, 175, 55, 0.2)", backgroundColor: "#FFFFFF" }}>
                   <div style={{ color: "#D4AF37", fontSize: "1.5rem", marginBottom: "1rem" }}>⚗️</div>
                   <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0F0F0F" }}>Audit de Distilare</h3>
                   <p className="text-xs font-light leading-relaxed" style={{ color: "#4A4A4A" }}>Decizii binare (YES/NO). Strategia de o singură pagină: 90% Substanță, 10% Execuție.</p>
                </div>
                <div className="border p-8 h-full" style={{ borderColor: "rgba(212, 175, 55, 0.2)", backgroundColor: "#FFFFFF" }}>
                   <div style={{ color: "#D4AF37", fontSize: "1.5rem", marginBottom: "1rem" }}>🏛️</div>
                   <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0F0F0F" }}>Distilarea Adevărului</h3>
                   <p className="text-xs font-light leading-relaxed" style={{ color: "#4A4A4A" }}>Pilonul ontologic. A căuta substratul absolut dincolo de formele efemere de marketing.</p>
                </div>
                <div className="border p-8 h-full" style={{ borderColor: "rgba(212, 175, 55, 0.2)", backgroundColor: "#FFFFFF" }}>
                   <div style={{ color: "#D4AF37", fontSize: "1.5rem", marginBottom: "1rem" }}>⛟</div>
                   <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0F0F0F" }}>Pacea Lăuntrică</h3>
                   <p className="text-xs font-light leading-relaxed" style={{ color: "#4A4A4A" }}>Pilonul estetic. O ordine și focalizare a spațiului vizual care permite minții să se elibereze.</p>
                </div>
              </div>
           </div>
        </section>

        {/* ── Section 2: Spațiul Sacru în Design ── */}
        <section className="mb-32 lg:mb-48 border-y py-24" style={{ borderColor: "rgba(15, 15, 15, 0.05)" }}>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                 <h2 className="font-serif text-3xl lg:text-4xl mb-6" style={{ color: "#0F0F0F" }}>
                    Conceptul de „Spațiu Sacru”
                 </h2>
                 <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "#4A4A4A" }}>
                    <strong>Eliminarea zgomotului vizual.</strong><br/> Utilizarea masivă a spațiului alb și a liniilor fine pentru a permite conținutului să „respire” și să favorizeze introspecția.
                 </p>
                 <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "#4A4A4A" }}>
                    <strong>Navigare lentă vs Interacțiune stridentă.</strong><br/> 
                    Înlocuirea butoanelor agresive cu texte cu spațiere largă. O estetică ce refuză „atenționarea forțată”, transformând simpla lectură într-un act meditativ, o experiență eterică.
                 </p>
                 <div className="text-[10px] uppercase tracking-widest" style={{ color: "#D4AF37" }}>
                    Simbolistică discredă ✦ Design Minimal
                 </div>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] bg-white border shadow-sm flex items-center justify-center overflow-hidden" style={{ borderColor: "#F0F0F0" }}>
                 <div className="text-center">
                    <div className="text-[10px] font-mono tracking-widest mb-4 opacity-50">Wireframe Distilat</div>
                    <div className="w-48 h-[1px] mx-auto mb-2 bg-[#F0F0F0]"></div>
                    <div className="w-32 h-[1px] mx-auto bg-[#F0F0F0]"></div>
                 </div>
                 {/* Decorative simple shapes */}
                 <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    <div className="w-[120%] h-[120%] border rounded-full blur-xl" style={{ borderColor: "#D4AF37" }}></div>
                 </div>
              </div>
           </div>
        </section>

        {/* ── Section 3: Metoda de Studiu Metanoia (Interactive Flip Cards) ── */}
        <section>
           <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-4xl mb-4" style={{ color: "#0F0F0F" }}>
                 Metoda de Studiu <span className="italic">„Metanoia”</span>
              </h2>
              <p className="text-sm font-light text-[#4A4A4A] max-w-2xl mx-auto">
                 Interactivitate Digitală: Pachete de studiu organizate pe capitole majore. Atingeți o fișă pentru a asimila esența.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
              {studyData.map((card) => {
                 const isFlipped = flippedCards[card.id] || false;
                 
                 return (
                    <div 
                      key={card.id} 
                      className="relative h-96 w-full cursor-pointer group"
                      onClick={() => toggleCard(card.id)}
                    >
                       <div className={`absolute inset-0 w-full h-full transform-style-preserve-3d card-transition ${isFlipped ? 'rotate-y-180' : ''}`}>
                          
                          {/* ── CARD FRONT ── */}
                          <div className="absolute inset-0 backface-hidden w-full h-full bg-white border flex flex-col p-8 transition-shadow hover:shadow-lg" style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}>
                             <div className="flex justify-between items-center mb-auto border-b" style={{ borderColor: "#FDFDF9", paddingBottom: "1rem" }}>
                                <div className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "#4A4A4A" }}>{card.theme}</div>
                                <div style={{ color: "#D4AF37" }}>✧</div>
                             </div>
                             
                             <div className="text-center my-auto">
                                <h3 className="font-serif text-2xl" style={{ color: "#0F0F0F" }}>{card.concept}</h3>
                             </div>

                             <div className="mt-auto text-center">
                                <span className="text-[9px] font-medium tracking-widest uppercase opacity-50" style={{ color: "#4A4A4A" }}>
                                   Atinge pentru a deconstrui
                                </span>
                             </div>
                          </div>

                          {/* ── CARD BACK ── */}
                          <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full bg-[#0F0F0F] border flex flex-col p-8" style={{ borderColor: "#0F0F0F" }}>
                             <div className="mb-4">
                                <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "#D4AF37" }}>
                                   Explicație Dense
                                </div>
                             </div>
                             <p className="text-xs font-light leading-relaxed mb-auto" style={{ color: "#FDFDF9" }}>
                                {card.explanation}
                             </p>
                             
                             <div className="border-t pt-4 mt-4" style={{ borderColor: "rgba(253, 253, 249, 0.1)" }}>
                                <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#D4AF37" }}>
                                   Exercițiu Practic
                                </div>
                                <p className="text-[11px] font-light leading-relaxed" style={{ color: "rgba(253, 253, 249, 0.7)" }}>
                                   {card.exercise}
                                </p>
                             </div>
                          </div>

                       </div>
                    </div>
                 );
              })}
           </div>
        </section>

      </main>

      {/* ── Sacred Footer ── */}
      <footer className="text-center py-12 border-t" style={{ borderColor: "rgba(15, 15, 15, 0.05)" }}>
        <p className="text-[9px] uppercase tracking-[0.3em] font-medium" style={{ color: "#4A4A4A" }}>
          Reverb.ro ✦ Philosophie de Sine
        </p>
      </footer>
    </div>
  );
}
