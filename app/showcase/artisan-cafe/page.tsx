import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.EXTRACTION_LAB | Full Coffee Platform",
};

export default function ArtisanCafeShowcase() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D64933] selection:text-[#050505] overflow-x-hidden" 
         style={{
           backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
           backgroundSize: '4rem 4rem',
         }}>
         
      <style>{`
        @keyframes pulse-ping { 0% { opacity: 1; box-shadow: 0 0 0 0 #D64933; } 50% { opacity: 0.2; } 100% { opacity: 1; box-shadow: 0 0 0 6px transparent; } }
        @keyframes scan-vertical { 0% { transform: translateY(-10px); opacity: 0; } 5% { opacity: 1; } 90% { transform: translateY(100vh); opacity: 0.8; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes text-reveal { to { opacity: 1; transform: translateY(0); } }
        
        /* Omit default scrollbar for tech look */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #D64933; }
      `}</style>
      
      <div className="relative before:absolute before:inset-0 block before:h-[2px] before:w-full before:bg-[#D64933] before:shadow-[0_0_12px_#D64933] before:animate-[scan-vertical_2s_cubic-bezier(0.86,0,0.07,1)_infinite] before:z-50 before:pointer-events-none fixed-scanner">
        
        {/* ======== HEADER ======== */}
        <header className="sticky top-0 z-40 w-full border-b border-white/15 bg-[#050505]/90 backdrop-blur-md flex flex-wrap lg:grid lg:grid-cols-12 h-auto lg:h-16">
          <div className="col-span-12 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/15 px-6 flex items-center py-4 lg:py-0">
            <span className="w-1.5 h-1.5 bg-[#D64933] mr-3 animate-[pulse-ping_2s_infinite]"></span>
            <span className="font-mono text-xs font-bold text-white tracking-[0.1em]">SYS.EXTRACTION_LAB</span>
          </div>
          <div className="hidden lg:flex lg:col-span-5 border-r border-white/15 px-6 items-center gap-8">
            <a href="#hero" className="font-mono text-[10px] text-white/50 hover:text-white transition uppercase tracking-widest">01. Bază</a>
            <a href="#meniu" className="font-mono text-[10px] text-white/50 hover:text-[#D64933] transition uppercase tracking-widest">02. Protocol_Produse</a>
            <a href="#date" className="font-mono text-[10px] text-white/50 hover:text-white transition uppercase tracking-widest">03. Metrici</a>
          </div>
          <div className="hidden lg:flex lg:col-span-4 px-6 items-center justify-between w-full">
            <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">SISTEM ONLINE [100%]</span>
            <button className="border border-[#D64933] text-[#D64933] px-4 py-1.5 font-mono text-[10px] uppercase hover:bg-[#D64933] hover:text-[#050505] transition font-bold tracking-widest">
              Conectare_User
            </button>
          </div>
        </header>

        <div className="max-w-[1400px] mx-auto border-x border-white/10 relative">

          {/* ======== 01. HERO SECTION ======== */}
          <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/15 min-h-[80vh]">
            <div className="hidden lg:flex lg:col-span-1 border-r border-white/15 relative bg-white/[0.01]">
               <div className="absolute left-6 bottom-24 -rotate-90 origin-bottom-left whitespace-nowrap">
                 <span className="font-mono text-[10px] tracking-[0.3em] text-[#D64933] opacity-60">PHASE_01 // INIȚIALIZARE</span>
               </div>
            </div>

            <div className="col-span-1 lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
              <div className="mb-4 inline-block bg-[#D64933]/10 border border-[#D64933]/30 text-[#D64933] font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.2s_forwards]">
                {">"} CONECTAT LA LABORATOR
              </div>
              
              <h1 className="text-6xl lg:text-[100px] font-bold leading-[0.85] tracking-tight uppercase opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.4s_forwards] mt-4">
                Cofeină.<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #D64933' }}>Calculată</span><br />
                Exact.
              </h1>
              
              <p className="mt-8 max-w-md text-base text-white/50 leading-relaxed font-sans opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.5s_forwards]">
                Pentru mințile care refuză zgomotul de fond. Extragem combustibil lichid la o precizie microscopică. Un meniu scurt, fără compromisuri, creat pentru eficiență maximă.
              </p>
              
              <div className="mt-12 flex items-center gap-4 opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.6s_forwards]">
                <a href="#meniu" className="bg-[#D64933] text-[#050505] px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Afișare_Meniu
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4 border-l border-white/15 bg-white/[0.02] relative hidden lg:flex flex-col items-center justify-center overflow-hidden p-6 lg:p-12">
               {/* Hero Product Image */}
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src="/hero-coffee.png"
                  alt="Minimalist Espresso"
                  className="w-full max-w-[400px] object-contain mix-blend-lighten opacity-90 drop-shadow-[0_0_15px_rgba(214,73,51,0.15)] hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute bottom-8 font-mono text-[9px] uppercase text-[#D64933]/60 tracking-[0.2em] text-center">
                 Visual_Render // EST. 2026
               </div>
            </div>
          </section>

          {/* ======== 02. FULL PRODUCT MENU ======== */}
          <section id="meniu" className="border-b border-white/15">
             <div className="px-8 lg:px-16 py-12 flex justify-between items-end border-b border-white/15 bg-white/[0.01]">
                <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight">Index<br/><span className="text-[#D64933]">Extracții.</span></h2>
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest hidden sm:block">Total_Bază_Date: 12_Items</span>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Categoria 1: Cafea Neagră */}
                <div className="border-r border-b lg:border-b-0 border-white/15 p-8 lg:p-12">
                   <div className="font-mono text-xs text-[#D64933] font-bold uppercase tracking-[0.2em] mb-10 pb-2 border-b border-white/10">
                     // Protocol_Black [Fără_Lapte]
                   </div>
                   
                   <div className="space-y-8">
                     {[
                       { name: "Espresso Single", pr: "11 RON", desc: "18g in / 36g out. Esență pură. Timp execuție: 25s." },
                       { name: "Double Ristretto", pr: "14 RON", desc: "Extracție scurtă. Corp dens. Aciditate precisă." },
                       { name: "Long Black", pr: "13 RON", desc: "Apă la 92°C peste Double Ristretto. Claritate aromatică." },
                       { name: "V60 / Filtrate", pr: "18 RON", desc: "Metodă gravitațională. Boabe single-origin la alegere." }
                     ].map((item, i) => (
                       <div key={i} className="group relative pr-4">
                          <div className="flex justify-between items-end mb-1 relative z-10">
                             <h3 className="text-xl font-bold font-sans uppercase tracking-tight group-hover:text-[#D64933] transition-colors">{item.name}</h3>
                             <span className="font-mono text-xs text-white/60">{item.pr}</span>
                          </div>
                          <div className="w-full h-px bg-white/10 mb-2 relative z-10 overflow-hidden">
                             <div className="h-full w-full bg-[#D64933] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                          </div>
                          <p className="font-mono text-[10px] text-white/40 uppercase leading-relaxed group-hover:text-white/60 transition-colors">
                             {item.desc}
                          </p>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Categoria 2: Cu Lapte / Alternative */}
                <div className="p-8 lg:p-12 bg-white/[0.01]">
                   <div className="font-mono text-xs text-[#D64933] font-bold uppercase tracking-[0.2em] mb-10 pb-2 border-b border-white/10">
                     // Emulsie_Lactată [Lapte / Ovăz]
                   </div>
                   
                   <div className="space-y-8">
                     {[
                       { name: "Piccolo", pr: "14 RON", desc: "Ristretto tăiat cu lapte microspumat. Intens." },
                       { name: "Flat White", pr: "16 RON", desc: "Double shot, lapte texturat fin. Raport perfect." },
                       { name: "Cappuccino", pr: "15 RON", desc: "Shot single, textură aerată, strat gros de cremă." },
                       { name: "Iced Latte", pr: "18 RON", desc: "Extracție peste gheață clară + lapte rece. Șoc termic." }
                     ].map((item, i) => (
                       <div key={i} className="group relative pr-4">
                          <div className="flex justify-between items-end mb-1 relative z-10">
                             <h3 className="text-xl font-bold font-sans uppercase tracking-tight group-hover:text-[#D64933] transition-colors">{item.name}</h3>
                             <span className="font-mono text-xs text-white/60">{item.pr}</span>
                          </div>
                          <div className="w-full h-px bg-white/10 mb-2 relative z-10 overflow-hidden">
                             <div className="h-full w-full bg-[#D64933] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                          </div>
                          <p className="font-mono text-[10px] text-white/40 uppercase leading-relaxed group-hover:text-white/60 transition-colors">
                             {item.desc}
                          </p>
                       </div>
                     ))}
                   </div>
                </div>

             </div>
             
             {/* Secțiunea 3: Hibrid & Refresh */}
             <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-white/15">
                <div className="hidden lg:block lg:col-span-4 border-r border-[#D64933] bg-[#D64933] p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black mix-blend-overlay opacity-10"></div>
                    <div className="font-mono text-8xl font-black text-[#050505] tracking-tighter mix-blend-multiply opacity-40 translate-y-[-20%]">OPS.</div>
                    <div className="absolute bottom-12 left-12">
                       <span className="font-mono text-[10px] text-[#050505] font-bold uppercase tracking-[0.2em] bg-white/50 px-2 py-1">NON-COFFEE / HYBRID</span>
                    </div>
                </div>
                
                <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 p-8 lg:p-12 gap-8">
                     {[
                       { name: "Espresso Tonic", pr: "19 RON", desc: "Apă tonică artizanală, double shot, gheață. Efervescent." },
                       { name: "Matcha Latte", pr: "21 RON", desc: "Ceremonial grade. Antioxidanți pur. Preparare tradițională." },
                       { name: "Cold Brew", pr: "17 RON", desc: "Infuzie la rece 18h. Claritate extremă. Zero astringență." },
                       { name: "Cascara Fizz", pr: "18 RON", desc: "Infuzie din pulpa cireșei de cafea. Carbonatată local." }
                     ].map((item, i) => (
                       <div key={i} className="group pb-4 border-b border-white/5">
                          <div className="flex justify-between items-end mb-2">
                             <h3 className="text-base font-bold font-sans uppercase tracking-tight">{item.name}</h3>
                             <span className="font-mono text-[#D64933] text-xs">{item.pr}</span>
                          </div>
                          <p className="font-mono text-[9px] text-white/30 uppercase leading-relaxed">
                             {item.desc}
                          </p>
                       </div>
                     ))}
                </div>
             </div>
          </section>

          {/* ======== 03. FOOTER / META INFO ======== */}
          <footer id="date" className="bg-[#050505] px-8 lg:px-16 py-12 flex flex-col items-center justify-center border-t-4 border-[#D64933] relative overflow-hidden">
             
             {/* Data Lines */}
             <div className="flex items-center gap-4 mb-8">
               <div className="w-16 h-px bg-white/20"></div>
               <span className="font-mono text-[10px] text-[#D64933] font-bold uppercase tracking-[0.3em]">Hardware & Adresă</span>
               <div className="w-16 h-px bg-white/20"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl text-center">
                <div>
                   <div className="font-mono text-[9px] uppercase text-white/40 mb-2">// Setup_Espressor</div>
                   <div className="text-white font-mono text-xs tracking-wider">La Marzocco Linea PB</div>
                </div>
                <div>
                   <div className="font-mono text-[9px] uppercase text-white/40 mb-2">// Vector_Coordonate</div>
                   <div className="text-white font-mono text-xs tracking-wider">Calea Victoriei 101, București</div>
                </div>
                <div>
                   <div className="font-mono text-[9px] uppercase text-white/40 mb-2">// Orar_Funcționare</div>
                   <div className="text-white font-mono text-xs tracking-wider">08:00 - 18:00 / LUN-DUM</div>
                </div>
             </div>

             <div className="mt-16 w-full flex justify-between font-mono text-[8px] text-white/20 uppercase tracking-widest border-t border-white/10 pt-4">
                <span>© {new Date().getFullYear()} EXTRACTION_LAB</span>
                <span>SYSTEM VERSION 4.0 // ONLINE</span>
             </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
