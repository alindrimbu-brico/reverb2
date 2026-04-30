"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Wind, Battery, MapPin, PlayCircle } from "lucide-react";

export default function VespaUrbanShowcase() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#1D1E18] font-sans selection:bg-[#E32636] selection:text-white overflow-x-hidden">
      
      {/* ── HEADER BREEZY ── */}
      <nav className="fixed w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-[#1D1E18]/5">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center">
           <div className="flex items-center gap-6">
              <Link href="/showcase" className="uppercase font-mono text-[10px] tracking-[0.2em] font-bold opacity-40 hover:opacity-100 hover:text-[#E32636] transition-all">
                 [← Matrix]
              </Link>
              <div className="font-serif italic text-2xl tracking-tighter">Veloce.</div>
           </div>
           <div className="hidden md:flex gap-10 text-[12px] font-bold uppercase tracking-widest text-[#1D1E18]/60">
              <span className="hover:text-[#E32636] cursor-pointer transition-colors">Modele</span>
              <span className="hover:text-[#E32636] cursor-pointer transition-colors">La Dolce Vita</span>
              <span className="hover:text-[#E32636] cursor-pointer transition-colors">Accesorii</span>
           </div>
           <button className="bg-[#E32636] text-white px-6 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:scale-105 transition-transform shadow-lg shadow-red-500/20">
              Testează
           </button>
        </div>
      </nav>

      {/* ── HERO AERODINAMIC ── */}
      <section className="relative w-full pt-32 pb-20 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto bg-[#E0F2EC] rounded-[60px] min-h-[70vh] md:min-h-[85vh] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            
            {/* Decorațiuni Fundal (Aer) */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay opacity-40 blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="w-full md:w-1/2 relative z-10 pt-10 md:pt-0">
               <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest text-[#1D1E18]/60 mb-8 border border-white/40 shadow-sm">
                  <Wind size={14} /> Emisii Zero. Pasiune 100%.
               </div>
               <h1 className="font-serif italic text-[12vw] md:text-[90px] leading-[0.85] tracking-tight mb-8 text-[#1A4231]">
                  Respiră <br/> Orașul.
               </h1>
               <p className="text-[#1A4231]/70 font-medium text-lg md:text-xl max-w-md leading-relaxed mb-10">
                  Navighează străzile cu eleganța anilor '60 și tehnologia zilei de mâine. Veloce E-Scooter rescrie mobilitatea urbană.
               </p>
               <div className="flex items-center gap-6">
                  <button className="bg-[#1D1E18] text-white px-8 py-4 rounded-full font-bold uppercase text-[12px] tracking-widest hover:bg-[#E32636] transition-colors shadow-xl">
                     Configurator
                  </button>
                  <button className="flex items-center gap-2 font-bold uppercase text-[12px] tracking-widest text-[#1A4231] hover:opacity-70 transition-opacity">
                     <PlayCircle size={24} strokeWidth={1.5} /> Vezi Video
                  </button>
               </div>
            </div>

            {/* Imputing a breezy scooter image */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] mt-12 md:mt-0 z-10 flex justify-center items-center">
               <img 
                 src="https://images.unsplash.com/photo-1620021600862-5f69de796a57?auto=format&fit=crop&q=80" 
                 alt="Retro Scooter" 
                 className="w-full h-full object-cover rounded-[40px] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
                 style={{ transform: `translateY(${scrollY * -0.1}px)` }}
               />
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[30px] shadow-2xl flex items-center gap-4 animate-bounce">
                  <div className="bg-[#E0F2EC] w-12 h-12 rounded-full flex items-center justify-center text-[#1A4231]">
                     <Battery size={20} />
                  </div>
                  <div>
                     <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Autonomie</div>
                     <div className="font-black text-xl text-[#1D1E18]">120 KM</div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* ── GRID LA DOLCE VITA ── */}
      <section className="py-20 md:py-32 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <h2 className="font-serif italic text-5xl md:text-7xl tracking-tight text-[#1D1E18]">
                  Eficiența <br/> are stil.
               </h2>
               <p className="max-w-sm text-[#1D1E18]/60 font-medium">Nu am construit doar un vehicul electric. Am reproiectat conceptul de libertate asimetrică pentru mediul urban.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               
               {/* Card 1 */}
               <div className="bg-[#FFF4E6] rounded-[40px] p-10 flex flex-col justify-between min-h-[400px] group cursor-pointer hover:-translate-y-2 transition-transform duration-500">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-8">
                     <MapPin size={24} className="text-[#E32636]" />
                  </div>
                  <div>
                     <h3 className="font-bold text-2xl mb-4 text-[#1D1E18]">Agilitate Pură</h3>
                     <p className="text-[#1D1E18]/60 font-medium leading-relaxed">Treci prin trafic ca o briză de vară. Amprentă subțire, manevrabilitate absolută în spații înguste.</p>
                  </div>
               </div>

               {/* Card 2 (Image Focus) */}
               <div className="bg-[#1D1E18] rounded-[40px] p-2 min-h-[400px] relative overflow-hidden group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1511993226957-c1c4ee67bd86?auto=format&fit=crop&q=80" alt="Dolce Vita" className="w-full h-full object-cover rounded-[32px] opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                     <h3 className="font-serif italic text-3xl mb-2">Pasiune Italiană</h3>
                     <div className="flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:text-[#E0F2EC] transition-colors">
                        Descoperă Designul <ArrowRight size={14} />
                     </div>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="bg-[#F0F4F8] rounded-[40px] p-10 flex flex-col justify-between min-h-[400px] group cursor-pointer hover:-translate-y-2 transition-transform duration-500">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-8">
                     <Wind size={24} className="text-[#1A4231]" />
                  </div>
                  <div>
                     <h3 className="font-bold text-2xl mb-4 text-[#1D1E18]">Zgomot Zero</h3>
                     <p className="text-[#1D1E18]/60 font-medium leading-relaxed">Motor electric silențios. Auzi doar orașul, muzica ta și bătăile inimii tale. Zero vibrații.</p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* ── BANNER STATEMENT ── */}
      <section className="py-20 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto bg-[#E32636] rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay opacity-10 blur-[100px] pointer-events-none" />
            <h2 className="font-serif italic text-5xl md:text-8xl tracking-tight mb-8 relative z-10">
               Nu ești niciodată <br/> prea târziu.
            </h2>
            <button className="relative z-10 bg-white text-[#E32636] px-10 py-5 rounded-full font-bold uppercase text-[12px] tracking-widest hover:bg-[#1D1E18] hover:text-white transition-colors shadow-2xl">
               Precomandă Veloce '26
            </button>
         </div>
      </section>

      {/* ── FOOTER AERISIT ── */}
      <footer className="w-full bg-[#FDFBF7] pt-20 pb-10 px-6 border-t border-[#1D1E18]/10">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <h1 className="font-serif italic text-5xl tracking-tighter text-[#1D1E18]">Veloce.</h1>
            <div className="flex gap-8 font-bold uppercase text-[10px] tracking-widest text-[#1D1E18]/50">
               <span className="hover:text-[#E32636] cursor-pointer transition-colors">Design</span>
               <span className="hover:text-[#E32636] cursor-pointer transition-colors">Tehnologie</span>
               <span className="hover:text-[#E32636] cursor-pointer transition-colors">Boutique</span>
            </div>
         </div>
         <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-[#1D1E18]/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#1D1E18]/30">
            <span>© 2026 Veloce Mobility</span>
            <span>Vespa Vibe Concept by Reverb.ro</span>
         </div>
      </footer>

    </div>
  );
}
