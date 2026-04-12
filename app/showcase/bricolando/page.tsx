"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Wrench, Package, Truck, Hammer, ChevronRight } from "lucide-react";

export default function BricolandoShowcase() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    { id: 1, title: "Unelte & Scule Ergonomice", items: "12,400+ SKU", img: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Materiale Echipamente Grele", items: "8,900+ SKU", img: "https://images.unsplash.com/photo-1504917595217-d414ba202450?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Finisaje Casă & Grădină", items: "15,200+ SKU", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#E34A27] selection:text-white pb-20">
      
      {/* ── TECHNICAL NAVBAR ── */}
      <nav className="border-b-4 border-[#1A1A1A] bg-white sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-[80px] flex justify-between items-center bg-[#E34A27] text-white">
           <div className="flex items-center gap-6 h-full px-6">
              <Link href="/showcase" className="uppercase tracking-[0.15em] text-[10px] font-bold hover:text-[#1A1A1A] transition-colors border-r border-white/20 pr-6">
                 ← Matrix
              </Link>
              <div className="text-[28px] font-black tracking-tighter uppercase leading-none">
                 Bricolando<span className="text-[#1A1A1A]">.ro</span>
              </div>
           </div>
           
           <div className="hidden lg:flex px-6 h-full items-center bg-[#1A1A1A]">
              <div className="flex gap-10 font-bold uppercase tracking-widest text-[11px] px-8">
                 <span className="hover:text-[#E34A27] cursor-pointer transition-colors">Catalog</span>
                 <span className="hover:text-[#E34A27] cursor-pointer transition-colors">Meseriași</span>
                 <span className="hover:text-[#E34A27] cursor-pointer transition-colors">Depozite</span>
              </div>
              <button className="bg-[#E34A27] h-full px-8 text-white font-black uppercase text-[12px] hover:bg-white hover:text-[#1A1A1A] transition-colors">
                Cont B2B
              </button>
           </div>
        </div>
        {/* Warning Tape Aesthetic */}
        <div className="h-2 w-full" style={{ backgroundImage: "repeating-linear-gradient(45deg, #1A1A1A, #1A1A1A 10px, transparent 10px, transparent 20px)" }} />
      </nav>

      {/* ── HERO MEGA-GRID ── */}
      <section className="max-w-[1440px] mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           
           <div className="lg:col-span-8 bg-[#1A1A1A] text-white rounded-[4px] p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105">
                 <img src="https://images.unsplash.com/photo-1534398079543-de46985cb992?auto=format&fit=crop&q=80" alt="Constructii" className="w-full h-full object-cover" />
              </div>
              
              <div className="relative z-10 mb-20">
                <div className="inline-flex items-center gap-3 bg-[#E34A27] px-4 py-2 text-[10px] uppercase font-black tracking-[0.2em] mb-8">
                   <Hammer size={12} /> Stoc actualizat zilnic
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black uppercase leading-[0.85] tracking-tighter">
                   Construim <br/> <span className="text-transparent" style={{ WebkitTextStroke: "2px #E34A27" }}>Realitatea.</span>
                </h1>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 mt-auto">
                 <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-[#E34A27]/20 transition-colors cursor-pointer group/btn">
                    <div className="text-[10px] text-[#E34A27] font-bold uppercase tracking-widest mb-2">Inovație 2026</div>
                    <div className="text-xl font-bold flex justify-between items-center">
                       Platforma Meșterilor <ChevronRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-[#E34A27] text-white p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-[#1A1A1A] transition-colors duration-500 cursor-pointer">
                 <Package size={48} className="mb-6 opacity-30 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500" strokeWidth={1} />
                 <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">Comenzi En-Gros</h3>
                 <p className="text-sm font-medium tracking-wide">Flux logistic B2B cu discount automat.</p>
              </div>
              <div className="flex-1 border-4 border-[#1A1A1A] p-8 flex flex-col justify-center relative group hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500 cursor-pointer">
                 <Truck size={48} className="mb-6 opacity-30 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500" strokeWidth={1} />
                 <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">Livrări Agabaritice</h3>
                 <p className="text-sm font-bold tracking-wide text-[#E34A27]">Flota proprie națională.</p>
              </div>
           </div>

        </div>
      </section>

      {/* ── INTERACTIVE MASONRY CATEGORII ── */}
      <section className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex justify-between items-end border-b-4 border-[#1A1A1A] pb-6 mb-12">
           <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Catalog Brut</h2>
           <span className="hidden md:block font-bold text-[#E34A27] tracking-widest text-[12px] uppercase">Selecție Premium +36,000</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
           {categories.map((cat, i) => (
              <div 
                key={cat.id} 
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                 <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A] mb-6 border-b-[8px] border-transparent group-hover:border-[#E34A27] transition-all duration-300">
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className={`w-full h-full object-cover transition-all duration-700 ${hoveredCategory === cat.id ? 'scale-110 opacity-60 grayscale-0' : 'scale-100 opacity-90 grayscale'}`} 
                    />
                    {hoveredCategory === cat.id && (
                       <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-white text-[#1A1A1A] font-black uppercase px-6 py-3 tracking-widest text-[11px] shadow-2xl">
                             Explorează SKU
                          </button>
                       </div>
                    )}
                 </div>
                 <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-tight w-2/3 group-hover:text-[#E34A27] transition-colors">{cat.title}</h3>
                    <span className="font-bold text-[10px] text-[#1A1A1A]/50 uppercase tracking-widest border border-[#1A1A1A]/20 px-2 py-1">{cat.items}</span>
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* ── DATA TICKER ── */}
      <div className="bg-[#1A1A1A] border-y-4 border-[#E34A27] py-4 mt-20 overflow-hidden relative">
         <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] gap-16 font-mono text-[11px] text-[#E34A27] uppercase tracking-[0.3em] opacity-80 font-bold">
            <span>[STOC.UPDATE] Ciment Lafarge: +3400 TONE</span>
            <span>[LOGISTICĂ] Flota 4 activă pe jud. Vrancea</span>
            <span>[MARKET] Creștere preț cherestea +0.3%</span>
            <span>[SYS] Integrare API activă pentru 240 depozite</span>
            <span>[STOC.UPDATE] Ciment Lafarge: +3400 TONE</span>
         </div>
      </div>
      
      {/* ── FOOTER INDUSTRIAL ── */}
      <footer className="max-w-[1440px] mx-auto px-6 pt-24 text-center">
         <h1 className="text-[12vw] font-black uppercase tracking-tighter text-[#1A1A1A]/5 select-none pointer-events-none -mb-[6%]">BRICOLANDO</h1>
         <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-8">
            Powered by Reverb ✦ Robust Digital Infrastructure
         </div>
      </footer>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
