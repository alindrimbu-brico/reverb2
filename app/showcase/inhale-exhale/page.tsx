"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Wind, Activity, Heart, ArrowRight, MousePointer2 } from "lucide-react";

export default function InhaleExhaleShowcase() {
  const [phase, setPhase] = useState<"inhale" | "exhale">("inhale");
  const [breathCount, setBreathCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev === "inhale" ? "exhale" : "inhale"));
      setBreathCount((prev) => prev + 1);
    }, 4000); // 4 seconds per phase
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-[4000ms] ease-in-out font-sans selection:bg-[#0E8388] selection:text-white overflow-x-hidden ${
      phase === "inhale" ? "bg-[#FDFDFB] text-[#2C3333]" : "bg-[#2C3333] text-[#FDFDFB]"
    }`}>
      
      {/* Dynamic CSS for Breathing Effects */}
      <style>{`
        @keyframes breathe-circle {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        .animate-breathe {
          animation: breathe-circle 8s ease-in-out infinite;
        }
        .perspective-text {
          perspective: 1000px;
        }
        .letter-spacing-animate {
          transition: letter-spacing 4s ease-in-out;
        }
        .phase-inhale .letter-spacing-animate { letter-spacing: 0.05em; }
        .phase-exhale .letter-spacing-animate { letter-spacing: 0.15em; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .floating-element { animation: float 6s ease-in-out infinite; }
        .floating-element-d1 { animation: float 6s ease-in-out 1s infinite; }
        .floating-element-d2 { animation: float 6s ease-in-out 2s infinite; }
      `}</style>

      {/* ── Minimalist Header ── */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex justify-between items-center text-white">
          <Link href="/showcase" className="font-mono text-[10px] tracking-[0.4em] opacity-60 hover:opacity-100 transition-opacity">
            [← MATRIX_REVERB]
          </Link>
          <div className="flex items-center gap-4">
             <div className={`w-2 h-2 rounded-full ${phase === "inhale" ? "bg-white" : "bg-[#0E8388]"} animate-pulse`}></div>
             <span className="text-[10px] font-bold tracking-widest uppercase">{phase}</span>
          </div>
        </div>
      </header>

      <main className={`transition-all duration-[4000ms] ${phase === "inhale" ? "phase-inhale" : "phase-exhale"}`}>
        
        {/* ── Section 1: The Pulse (Hero) ── */}
        <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
           {/* Abstract Breathing Background */}
           <div className={`absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-1000 ${phase === "inhale" ? "opacity-40" : "opacity-10"}`}>
              <div className="w-[80vw] h-[80vw] rounded-full border-[1px] border-current animate-breathe"></div>
              <div className="absolute w-[60vw] h-[60vw] rounded-full border-[1px] border-current animate-breathe" style={{ animationDelay: '1s' }}></div>
              <div className="absolute w-[40vw] h-[40vw] rounded-full border-[1px] border-current animate-breathe" style={{ animationDelay: '2s' }}></div>
           </div>

           <div className="relative z-10 text-center floating-element">
              <span className="text-[12px] font-mono uppercase tracking-[0.6em] mb-6 block opacity-50">Sincronizarea Digitală</span>
              <h1 className="font-serif text-[12vw] md:text-[8rem] font-light leading-none mb-4 letter-spacing-animate">
                {phase === "inhale" ? "INHALE" : "EXHALE"}
              </h1>
              <div className="w-24 h-[1px] bg-current mx-auto mb-8 opacity-30"></div>
              <p className="max-w-md mx-auto text-sm md:text-base font-light leading-relaxed opacity-70">
                {phase === "inhale" 
                  ? "Colectăm esența. Analizăm datele. Infiltrăm silențios structurile de piață pentru a înțelege substratul."
                  : "Eliberăm forța. Manifestăm viziunea. Designul devine acțiune pură, transformând observația în rezultat."
                }
              </p>
           </div>

           <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-30">
              <span className="text-[10px] font-mono tracking-widest uppercase">Derulează pentru a ritma</span>
              <div className="w-[1px] h-12 bg-current"></div>
           </div>
        </section>

        {/* ── Section 2: Inhale - The Intake ── */}
        <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 floating-element-d1">
                 <div className="flex items-center gap-3 mb-8">
                    <Wind size={20} className="text-[#0E8388]" />
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">Faza I: Absorbția</span>
                 </div>
                 <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                    Inspirăm <span className="italic">Profunzime</span>.
                 </h2>
                 <p className="text-lg font-light leading-relaxed mb-12 opacity-80">
                    O strategie digitală începe cu liniște. Nu cu zgomot. <br/><br/>
                    În etapa de Inhale, Reverb devine un burete informațional. Nu doar citim grafice, ci „respirăm” contextul afacerii tale. Identificăm tiparele care se repetă și zgomotul care trebuie eliminat prin <strong>Audit de Distilare</strong>.
                 </p>
                 <div className="grid grid-cols-2 gap-8 border-t pt-12" style={{ borderColor: 'currentColor', opacity: 0.2 }}></div>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <span className="text-[10px] font-mono uppercase tracking-widest block mb-2">Internalizare</span>
                       <p className="text-sm opacity-60">Mapping-ul valorilor fundamentale ale brandului.</p>
                    </div>
                    <div>
                       <span className="text-[10px] font-mono uppercase tracking-widest block mb-2">Claritate</span>
                       <p className="text-sm opacity-60">Eliminarea complexității inutile de la prima vedere.</p>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2 aspect-square relative bg-current/5 flex items-center justify-center p-12 overflow-hidden border border-current/10 floating-element-d2">
                 <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80" 
                      alt="Plant" 
                      className={`w-full h-full object-cover grayscale transition-transform duration-[8000ms] ${phase === "inhale" ? "scale-110" : "scale-100"}`}
                    />
                 </div>
                 <div className={`relative z-10 w-full h-full border border-current/20 flex items-center justify-center transition-transform duration-[4000ms] ${phase === "inhale" ? "scale-105" : "scale-95"}`}>
                    <span className="font-serif text-8xl opacity-10">01</span>
                 </div>
              </div>
           </div>
        </section>

        {/* ── Section 3: Exhale - The Output ── */}
        <section className={`py-32 px-6 lg:px-12 transition-colors duration-[4000ms] ${phase === "exhale" ? "bg-[#0E8388] text-white" : "bg-transparent"}`}>
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                 <div className="max-w-2xl floating-element">
                    <div className="flex items-center gap-3 mb-8">
                       <Activity size={20} className={phase === "exhale" ? "text-white" : "text-[#0E8388]"} />
                       <span className="text-xs font-bold uppercase tracking-[0.3em]">Faza II: Expresia</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                       Expirăm <span className="italic">Impact</span>.
                    </h2>
                    <p className="text-lg font-light leading-relaxed opacity-90">
                       Viziunea fără execuție este doar zgomot mental. În faza de Exhale, transformăm tot ce am internalizat într-o prezență digitală tăioasă. <br/><br/>
                       Arhitectura devine vizibilă. Codul se transformă în interfață. Brandul tău își ocupă spațiul în piață cu autoritate și ritm.
                    </p>
                 </div>
                 <div className="md:text-right floating-element-d1">
                    <div className="text-6xl font-serif mb-4 leading-none">{breathCount}</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-60">Iterații de Succes</div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-current/10">
                 {[
                   { title: "Design Pulsatil", desc: "Interfețe care reacționează organic la prezența utilizatorului." },
                   { title: "Conversie Ritmica", desc: "Flow-uri de vânzare construite pe psihologia deciziei naturale." },
                   { title: "Manifestare Tech", desc: "Stack-uri de ultimă generație (Next.js/TS) livrate cu precizie." }
                 ].map((item, i) => (
                   <div key={i} className={`p-12 bg-[#FDFDFB] hover:bg-[#F0F4F4] transition-colors group floating-element-d${(i%2)+1}`}>
                      <h4 className="text-[#2C3333] font-bold uppercase tracking-widest text-xs mb-4">{item.title}</h4>
                      <p className="text-[#2C3333] text-sm font-light opacity-70 mb-8">{item.desc}</p>
                      <ArrowRight size={16} className="text-[#0E8388] transform group-hover:translate-x-2 transition-transform" />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ── Section 4: The Loop ── */}
        <section className="py-48 px-6 text-center">
           <div className="max-w-4xl mx-auto floating-element">
              <Heart className="mx-auto mb-12 text-[#0E8388] animate-pulse" size={48} />
              <h2 className="font-serif text-4xl md:text-7xl mb-12 font-light">Echilbrul este <br/> <span className="italic">Infrastructură</span>.</h2>
              <div className="flex flex-wrap justify-center gap-12">
                 <div className="flex flex-col items-center">
                    <div className="text-[10px] font-mono uppercase tracking-[0.5em] mb-4 opacity-40">Status</div>
                    <div className={`text-sm font-bold tracking-widest uppercase px-6 py-2 border rounded-full ${phase === "inhale" ? "border-current" : "bg-[#0E8388] text-white border-transparent"}`}>
                       Sincronizat
                    </div>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="text-[10px] font-mono uppercase tracking-[0.5em] mb-4 opacity-40">Metodă</div>
                    <div className="text-sm font-bold tracking-widest uppercase">Flux Circadian Digital</div>
                 </div>
              </div>
              
              <button className="mt-24 group relative px-12 py-6 overflow-hidden border border-current font-bold uppercase tracking-[0.3em] text-[10px]">
                 <span className="relative z-10">Începe Ritmul Tău</span>
                 <div className={`absolute inset-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 ${phase === "inhale" ? "bg-[#2C3333]" : "bg-[#0E8388]"}`}></div>
                 <div className="absolute inset-0 z-0 bg-current opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
           </div>
        </section>

      </main>

      {/* ── Sacred Footer ── */}
      <footer className="py-16 px-6 border-t border-current/10">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
               <MousePointer2 size={14} className="opacity-40" />
               <span className="text-[9px] uppercase tracking-[0.4em] font-medium opacity-50">REVERB_SHOWCASE // INHALE_EXHALE_V1</span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.3em] font-medium opacity-50">
              © 2026 Arhitectura Clarității. Toate drepturile rezervate.
            </p>
         </div>
      </footer>
    </div>
  );
}
