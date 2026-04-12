"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

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
    <div className="bg-[#F8F8F8] min-h-screen text-[#111111] font-sans selection:bg-[#111111] selection:text-white">
      
      {/* ── VOGUE HEADER ── */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference pointer-events-none text-white">
         <div className="px-6 md:px-12 py-8 flex justify-between items-center pointer-events-auto">
            <Link href="/showcase" className="font-mono text-[10px] uppercase tracking-[0.3em] font-medium opacity-50 hover:opacity-100 transition-opacity">
               [← Showcase]
            </Link>
            <div className="font-serif text-3xl md:text-5xl italic tracking-tight font-extralight absolute left-1/2 -translate-x-1/2">
               Kalki.
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">
               FW / 2026
            </div>
         </div>
      </header>

      {/* ── ASYMMETRIC LOOKBOOK HERO ── */}
      <section className="relative h-screen w-full flex items-center justify-center p-6 lg:p-16 overflow-hidden">
         {/* Background Typography */}
         <div 
           className="absolute z-0 pointer-events-none"
           style={{ transform: `translateY(${offsetY * 0.4}px)` }}
         >
           <h1 className="font-serif font-extralight italic text-[20vw] text-[#F0F0F0] tracking-tighter mix-blend-multiply opacity-50 select-none">
             Elegance
           </h1>
         </div>

         {/* Images Matrix */}
         <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-[1600px] h-[80vh] items-center">
            
            <div className="hidden md:block col-span-4 h-[60vh] mt-32 relative group cursor-crosshair">
               <div className="absolute inset-x-0 -bottom-10 z-10 font-mono text-[9px] uppercase tracking-[0.2em] flex flex-col gap-1 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Plus size={12}/> View details
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80" 
                 alt="Kalki Look 1" 
                 className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-transform duration-[2s] group-hover:scale-105"
                 style={{ transform: `translateY(${offsetY * 0.15}px)` }}
               />
            </div>

            <div className="col-span-1 md:col-span-4 h-[75vh] relative group cursor-crosshair z-20">
               <img 
                 src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" 
                 alt="Kalki Look 2" 
                 className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.02]"
                 style={{ transform: `translateY(${offsetY * -0.1}px)` }}
               />
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-2 border border-[#111]/10 font-mono text-[9px] uppercase tracking-[0.3em] hover:bg-[#111] hover:text-white transition-colors cursor-pointer">
                  Shop Collection
               </div>
            </div>

            <div className="hidden md:block col-span-4 h-[50vh] mb-32 relative group cursor-crosshair">
               <div className="absolute inset-x-0 -top-10 z-10 font-mono text-[9px] uppercase tracking-[0.2em] flex flex-col gap-1 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  View Silk <Plus size={12}/>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1509631179647-0c1158f1ce31?auto=format&fit=crop&q=80" 
                 alt="Kalki Look 3" 
                 className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-transform duration-[2s] group-hover:scale-105"
                 style={{ transform: `translateY(${offsetY * 0.25}px)` }}
               />
            </div>

         </div>
      </section>

      {/* ── PURE TYPOGRAPHIC STATEMENT ── */}
      <section className="py-32 md:py-48 px-6 max-w-[1000px] mx-auto text-center">
         <h2 className="font-serif font-extralight text-3xl md:text-5xl lg:text-7xl leading-[1.1] text-[#111111] mb-12">
            Minimalism isn't the lack of something.<br/>
            <span className="italic opacity-50">It's simply the perfect amount.</span>
         </h2>
         <p className="font-sans font-light text-[14px] md:text-[18px] text-[#111]/70 max-w-[500px] mx-auto leading-relaxed">
            Kalki definește intersecția dintre fluiditatea materialelor și rigiditatea matematică a designului structural. O declarație împotriva modei rapide.
         </p>
      </section>

      {/* ── BOLD HORIZONTAL SCROLL SIMULATION ── */}
      <section className="w-full bg-[#111111] text-white py-40 overflow-hidden relative">
         <div className="whitespace-nowrap flex items-center pr-[10vw]">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex-shrink-0 w-[70vw] md:w-[40vw] pl-[5vw] lg:pl-[10vw]">
                 <div className="relative aspect-[2/3] md:aspect-[3/4] overflow-hidden group">
                    <img 
                       src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?auto=format&fit=crop&q=80" 
                       alt="Editorial" 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center">
                       <span className="font-serif italic text-3xl">Lumina</span>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* ── ELEGANT FOOTER ── */}
      <footer className="bg-[#111111] text-white pb-12 pt-24 px-6 md:px-12 border-t border-white/10">
         <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-12 mb-12">
            <h1 className="font-serif text-5xl md:text-8xl italic font-extralight mb-10 md:mb-0">
               Kalki.
            </h1>
            <div className="flex gap-16 font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
               <ul className="flex flex-col gap-4">
                  <li className="hover:opacity-50 cursor-pointer transition-opacity">Archive</li>
                  <li className="hover:opacity-50 cursor-pointer transition-opacity">Atelier</li>
                  <li className="hover:opacity-50 cursor-pointer transition-opacity">Journal</li>
               </ul>
               <ul className="flex flex-col gap-4">
                  <li className="hover:opacity-50 cursor-pointer transition-opacity">Instagram</li>
                  <li className="hover:opacity-50 cursor-pointer transition-opacity">Pinterest</li>
                  <li className="hover:opacity-50 cursor-pointer transition-opacity">Contact</li>
               </ul>
            </div>
         </div>
         <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-white/40">
            <span>© 2026 Kalki Studios</span>
            <span>Estetica Digitală by Reverb.ro</span>
         </div>
      </footer>
    </div>
  );
}
