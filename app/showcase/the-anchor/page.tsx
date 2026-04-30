"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Flame, Shield, HeartHandshake } from "lucide-react";

export default function TheAnchorShowcase() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#E5E5E5] font-sans overflow-x-hidden selection:bg-[#8A1C14] selection:text-white">
      
      {/* ── HEADER MINIMAL ── */}
      <nav className="fixed w-full z-50 top-0 left-0 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center text-white">
           <Link href="/showcase" className="uppercase font-mono text-[10px] tracking-[0.4em] font-bold opacity-40 hover:opacity-100 transition-all">
              [← Reverb Matrix]
           </Link>
           <div className="font-serif italic text-sm tracking-widest text-white/40">THE ANCHOR</div>
        </div>
      </nav>

      {/* ── ACT I: THE ILLUSION OF THE HERO ── */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-center items-center px-4">
        {/* Background Dark Cinematic */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80" 
             alt="Dark Figure" 
             className="w-full h-full object-cover opacity-20 grayscale contrast-150"
             style={{ transform: `translateY(${scrollY * 0.3}px)` }}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
           <div className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/40 mb-12 flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-white/20"></span>
              Prolog
              <span className="w-12 h-[1px] bg-white/20"></span>
           </div>
           
           <h1 className="font-serif text-5xl md:text-7xl lg:text-[110px] leading-[1.1] tracking-tighter mb-12">
              Bărbatul adevărat <br/> nu fuge de <span className="italic text-white/50">umbrele</span> tale.
           </h1>
           
           <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed font-serif">
              Bărbatul nu e cel care își umflă pieptul și se aruncă în luptă cu toți balaurii care îți apar în cale. 
              <span className="block mt-4 italic text-white/40">Nu e eroul de poveste care te salvează de fiecare dată, doar pentru a-și confirma puterea.</span>
           </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
           <ArrowDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* ── ACT II: THE DESCENT / CÂND DEVII BALAURUL ── */}
      <section className="relative py-40 px-6 bg-[#050505] overflow-hidden">
         {/* Chaos Ambient Light */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-[#8A1C14] rounded-full blur-[200px] opacity-10 mix-blend-screen pointer-events-none" />

         <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 relative group">
               <div className="absolute inset-0 bg-[#8A1C14] blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
               <img src="https://images.unsplash.com/photo-1544032128-444c1ee202f5?auto=format&fit=crop&q=80" alt="Chaos" className="relative z-10 w-full aspect-[4/5] object-cover grayscale contrast-125 rounded-[2px]" />
               <div className="absolute top-10 -right-10 w-full aspect-[4/5] border border-white/10 rounded-[2px] -z-10" />
            </div>

            <div className="order-1 lg:order-2">
               <div className="flex items-center gap-4 mb-8">
                  <Flame className="text-[#8A1C14]" size={24} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8A1C14] font-bold">Haosul Interior</span>
               </div>
               
               <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                  Nu, bărbatul adevărat e acela care rămâne lângă tine atunci când chiar tu devii balaurul.
               </h2>
               
               <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed">
                  <p>Când demonii tăi urlă în vorbele tale și sufletul tău arde tot ce întâlnește.</p>
                  <p className="pl-6 border-l border-[#8A1C14]/50 italic">Când slăbiciunile ies la suprafață și masca perfectă a fost aruncată... bărbatul adevărat nu te abandonează în acel haos.</p>
               </div>
            </div>

         </div>
      </section>

      {/* ── ACT III: THE ANCHOR ── */}
      <section className="relative py-40 px-6 bg-[#111111] border-y border-white/5">
         <div className="max-w-[1000px] mx-auto text-center relative z-10">
            <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-12">
               <Shield size={24} strokeWidth={1} className="text-white/60" />
            </div>
            
            <h2 className="font-serif text-3xl md:text-6xl leading-[1.2] mb-12 text-[#E5E5E5] tracking-tight">
               El nu îți răspunde cu răni, ci îți oferă liniștea de care ai nevoie pentru a-ți regăsi echilibrul.
            </h2>
            
            <p className="text-xl md:text-2xl text-white/40 font-light max-w-3xl mx-auto leading-relaxed">
               El nu pleacă atunci când devii dificilă, când fricile îți transformă iubirea în foc. <span className="text-white">El rămâne, te privește în ochi, te ține de mână</span> și îți amintește că nu ești singură în lupta cu balaurul din tine.
            </p>
         </div>
      </section>

      {/* ── ACT IV: THE 3 PILLARS OF LOVE ── */}
      <section className="py-40 px-6 bg-[#050505]">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-24">
               <h2 className="font-mono text-[12px] uppercase tracking-[0.4em] text-white/40 mb-6">Pilonii Ancorei</h2>
               <h3 className="font-serif text-5xl md:text-7xl italic">Pentru că iubirea nu înseamnă <br/> doar să te bucuri de lumină.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
               {/* Line conectoare */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
               
               {/* Pilon 1 */}
               <div className="bg-[#050505] p-10 border border-white/10 relative z-10 hover:border-white/30 transition-colors duration-500 flex flex-col items-center text-center">
                  <div className="font-mono text-[#8A1C14] text-[10px] tracking-widest mb-6 border border-[#8A1C14]/30 px-3 py-1 rounded-full">LEGEA I</div>
                  <h4 className="font-serif text-2xl mb-4">Să fii acolo în întuneric</h4>
                  <p className="text-white/40 font-light text-sm leading-relaxed">Să nu ceri lumina când partenerul tău a uitat cum să o aprindă, ci să te așezi lângă el până când ochii vi se adaptează la beznă.</p>
               </div>

               {/* Pilon 2 */}
               <div className="bg-[#050505] p-10 border border-white/10 relative z-10 hover:border-white/30 transition-colors duration-500 flex flex-col items-center text-center mt-0 md:mt-12">
                  <div className="font-mono text-[#8A1C14] text-[10px] tracking-widest mb-6 border border-[#8A1C14]/30 px-3 py-1 rounded-full">LEGEA II</div>
                  <h4 className="font-serif text-2xl mb-4">Să accepți imperfecțiunea celuilalt</h4>
                  <p className="text-white/40 font-light text-sm leading-relaxed">Măștile cad. Balaurii apar. A iubi imperfecțiunea este actul de rebeliune suprem împotriva unei lumi care vinde povești cu eroi perfecți.</p>
               </div>

               {/* Pilon 3 */}
               <div className="bg-[#050505] p-10 border border-white/10 relative z-10 hover:border-white/30 transition-colors duration-500 flex flex-col items-center text-center mt-0 md:mt-24">
                  <div className="font-mono text-[#8A1C14] text-[10px] tracking-widest mb-6 border border-[#8A1C14]/30 px-3 py-1 rounded-full">LEGEA III</div>
                  <h4 className="font-serif text-2xl mb-4">Să luptați împreună</h4>
                  <p className="text-white/40 font-light text-sm leading-relaxed">Nu unul împotriva celuilalt. Când haosul lovește, energia nu se îndreaptă către atac, ci către consolidarea structurii de susținere a amândurora.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ── EPILOGUE ── */}
      <section className="relative py-40 px-6 flex justify-center items-center overflow-hidden">
         <div className="absolute inset-0 bg-[#E5E5E5]" />
         
         <div className="relative z-10 max-w-4xl mx-auto text-center text-[#050505]">
            <HeartHandshake size={48} strokeWidth={1} className="mx-auto mb-10 opacity-40" />
            
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tighter mb-8">
               Așa că, dacă ai lângă tine un bărbat care te susține în cele mai grele momente, <span className="italic font-bold">ai găsit ceva rar.</span>
            </h2>
            
            <p className="text-xl md:text-3xl font-light text-[#050505]/60 max-w-2xl mx-auto leading-relaxed">
               Nu un erou de poveste, ci un partener adevărat. <br/>
               <span className="block mt-6 text-sm font-mono tracking-widest uppercase font-bold text-[#050505]">Iar asta valorează mai mult decât orice luptă câștigată împotriva unui balaur imaginar.</span>
            </p>
         </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#050505] py-12 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="font-serif italic text-white/30">The Anchor Concept.</div>
         <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">Manifest filosofic executat arhitectural de Reverb.ro</div>
      </footer>
    </div>
  );
}
