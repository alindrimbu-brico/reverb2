"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, ArrowLeft } from "lucide-react";

export default function KalkiShowcase() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      data-showcase="kalki"
      className="showcase-root bg-[#F8F8F8] min-h-screen text-[#111111] font-sans selection:bg-[#111111] selection:text-white overflow-x-hidden antialiased"
    >
      
      {/* ── HIGH-CONTRAST VOGUE EDITORIAL HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-[#F8F8F8]/95 backdrop-blur-md border-b border-black/10 transition-all">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center text-[#111111]">
            <Link 
              href="/showcase" 
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-800 hover:text-black transition-colors"
            >
               <ArrowLeft size={14} />
               <span>Portofoliu Showcase</span>
            </Link>

            <div className="font-serif text-3xl md:text-5xl italic tracking-tight font-extralight text-black absolute left-1/2 -translate-x-1/2 select-none">
               Kalki.
            </div>

            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
               <span className="hidden sm:inline">Colecție Editorială</span>
               <span className="px-2.5 py-1 rounded-full border border-black/20 font-bold text-black bg-white shadow-sm">
                  FW 2026
               </span>
            </div>
         </div>
      </header>

      {/* ── ASYMMETRIC LOOKBOOK HERO ── */}
      <section className="relative min-h-[92vh] w-full flex items-center justify-center pt-28 pb-16 px-6 lg:px-16 overflow-hidden">
         {/* Background Typography Watermark */}
         <div 
           className="absolute z-0 pointer-events-none select-none"
           style={{ transform: `translateY(${offsetY * 0.3}px)` }}
         >
           <h1 className="font-serif font-extralight italic text-[18vw] text-neutral-300 tracking-tighter opacity-60 leading-none">
             Elegance
           </h1>
         </div>

         {/* Images Matrix */}
         <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-[1600px] items-center">
            
            {/* Left Look */}
            <div className="hidden md:block col-span-4 h-[55vh] mt-24 relative group cursor-crosshair">
               <div className="absolute inset-x-0 -bottom-8 z-10 font-mono text-[10px] uppercase tracking-[0.2em] flex flex-col gap-1 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-neutral-800 font-bold">
                  <span className="flex items-center gap-1"><Plus size={12}/> View details</span>
               </div>
               <div className="w-full h-full overflow-hidden rounded-sm shadow-xl bg-neutral-200">
                  <img 
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80" 
                    alt="Kalki Look 1 - Minimal Wool" 
                    className="w-full h-full object-cover grayscale brightness-105 contrast-110 transition-transform duration-[2s] group-hover:scale-105"
                    style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                  />
               </div>
            </div>

            {/* Center Featured Look */}
            <div className="col-span-1 md:col-span-4 min-h-[65vh] md:h-[75vh] relative group cursor-crosshair z-20">
               <div className="w-full h-full overflow-hidden rounded-sm shadow-2xl bg-neutral-200">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" 
                    alt="Kalki Look 2 - Haute Couture" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                    style={{ transform: `translateY(${offsetY * -0.06}px)` }}
                  />
               </div>
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-3.5 border border-black/20 font-mono text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-neutral-800 transition-colors shadow-2xl cursor-pointer">
                  Shop Collection
               </div>
            </div>

            {/* Right Look - REPAIRED WORKING IMAGE */}
            <div className="hidden md:block col-span-4 h-[50vh] mb-20 relative group cursor-crosshair">
               <div className="absolute inset-x-0 -top-8 z-10 font-mono text-[10px] uppercase tracking-[0.2em] flex flex-col gap-1 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-neutral-800 font-bold">
                  <span className="flex items-center gap-1">View Silk <Plus size={12}/></span>
               </div>
               <div className="w-full h-full overflow-hidden rounded-sm shadow-xl bg-neutral-200">
                  <img 
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000" 
                    alt="Kalki Look 3 - Fluid Silk" 
                    className="w-full h-full object-cover grayscale brightness-105 contrast-110 transition-transform duration-[2s] group-hover:scale-105"
                    style={{ transform: `translateY(${offsetY * 0.15}px)` }}
                  />
               </div>
            </div>

         </div>
      </section>

      {/* ── PURE TYPOGRAPHIC STATEMENT (HIGH CONTRAST) ── */}
      <section className="py-28 md:py-40 px-6 max-w-[1100px] mx-auto text-center">
         <h2 className="font-serif font-extralight text-3xl md:text-5xl lg:text-7xl leading-[1.15] text-[#111111] mb-10">
            Minimalism isn't the lack of something.<br/>
            <span className="italic text-neutral-500 font-light">It's simply the perfect amount.</span>
         </h2>
         <p className="font-sans font-normal text-[15px] md:text-[19px] text-neutral-700 max-w-[620px] mx-auto leading-relaxed">
            Kalki definește intersecția dintre fluiditatea materialelor naturale și rigiditatea matematică a designului structural. O declarație estetică împotriva modei rapide.
         </p>
      </section>

      {/* ── BOLD HORIZONTAL SCROLL RUNWAY ── */}
      <section className="w-full bg-[#111111] text-white py-32 md:py-40 overflow-hidden relative border-y border-neutral-800">
         <div className="max-w-[1600px] mx-auto px-6 mb-12 flex justify-between items-end text-white">
            <div>
               <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">Runway Perspective</span>
               <h3 className="font-serif text-3xl md:text-5xl italic font-light mt-2 text-white">Lumina & Materie</h3>
            </div>
            <span className="font-mono text-[11px] text-neutral-400">03 / 03</span>
         </div>
         <div className="whitespace-nowrap flex items-center pr-[10vw]">
            {[1, 2, 3].map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[75vw] md:w-[38vw] pl-[5vw] lg:pl-[6vw]">
                 <div className="relative aspect-[2/3] md:aspect-[3/4] overflow-hidden group rounded-sm shadow-2xl bg-neutral-900 border border-neutral-800">
                    <img 
                       src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?auto=format&fit=crop&q=80" 
                       alt={`Editorial Runway ${item}`} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                       <span className="font-serif italic text-3xl md:text-4xl text-white tracking-wide">Look {item < 10 ? `0${item}` : item}</span>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── ELEGANT RUNWAY FOOTER ── */}
      <footer className="bg-[#111111] text-white pb-14 pt-24 px-6 md:px-12 border-t border-neutral-800">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-800 pb-12 mb-12">
               <div>
                  <h1 className="font-serif text-6xl md:text-9xl italic font-extralight mb-4 text-white">
                     Kalki.
                  </h1>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                     Atelier de creație & Arhitectură Vestimentară
                  </p>
               </div>
               <div className="flex gap-16 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-300 mt-10 md:mt-0">
                  <ul className="flex flex-col gap-3">
                     <li className="hover:text-white cursor-pointer transition-colors">Archive</li>
                     <li className="hover:text-white cursor-pointer transition-colors">Atelier</li>
                     <li className="hover:text-white cursor-pointer transition-colors">Journal</li>
                  </ul>
                  <ul className="flex flex-col gap-3">
                     <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
                     <li className="hover:text-white cursor-pointer transition-colors">Editorial</li>
                     <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] uppercase tracking-widest text-neutral-500 gap-4">
               <span>© 2026 Kalki Studios. Toate drepturile rezervate.</span>
               <span>Concept Arhitectural de Reverb.ro</span>
            </div>
         </div>
      </footer>
    </div>
  );
}
