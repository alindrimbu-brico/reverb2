"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Flame, Shield, Flag } from "lucide-react";

export default function VirtusShowcase() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#F5F5F5] font-sans selection:bg-[#8A1C14] selection:text-white overflow-x-hidden">
      
      {/* ── RAW NAVBAR ── */}
      <nav className="fixed w-full z-50 mix-blend-difference top-0 left-0">
        <div className="max-w-[1600px] mx-auto px-6 py-8 flex justify-between items-center text-white">
           <Link href="/showcase" className="uppercase font-mono text-[10px] tracking-[0.4em] font-bold opacity-60 hover:opacity-100 hover:text-[#8A1C14] transition-all">
              [← REVERB MATRIX]
           </Link>
           <div className="text-[14px] font-black tracking-[0.2em] uppercase">VIRTUS PROTOCOL</div>
           <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center opacity-60 hover:opacity-100 cursor-pointer">
             <div className="w-2 h-2 bg-white rounded-full"></div>
           </div>
        </div>
      </nav>

      {/* ── HERO BRUTALISM ── */}
      <section className="relative w-full h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-black">
        {/* Background Grime & Video representation */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply" />
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-[#050505] z-10 opacity-90" />
           <img 
             src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80" 
             alt="Primal Weight" 
             className="w-full h-full object-cover grayscale contrast-150 brightness-75 scale-105"
             style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.05)` }}
           />
        </div>

        {/* Core Statement */}
        <div className="relative z-20 text-center w-full px-4 flex flex-col items-center">
           <span className="font-mono text-[#8A1C14] uppercase tracking-[0.5em] text-[12px] md:text-[14px] font-bold mb-8 block">
              NU EXIȘTI SĂ FII CONFORTABIL.
           </span>
           <h1 className="font-sans font-black text-[12vw] md:text-[140px] uppercase leading-[0.8] tracking-tighter mix-blend-overlay text-white opacity-90 select-none">
              EXIȘTI SĂ
           </h1>
           <h1 className="font-sans font-black text-[12vw] md:text-[140px] uppercase leading-[0.8] tracking-tighter text-[#F5F5F5] select-none shadow-black drop-shadow-2xl">
              CONSTRUIEȘTI.
           </h1>
           <button className="mt-16 bg-white text-black font-black uppercase tracking-widest text-[11px] md:text-[14px] px-10 py-5 hover:bg-[#8A1C14] hover:text-white transition-all duration-300 transform hover:scale-105">
              Inițiază Protocolul
           </button>
        </div>
      </section>

      {/* ── THE PILARS TAB ── */}
      <section className="relative z-30 w-full bg-[#111111] border-y border-[#333]">
         <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#333]">
            <div className="p-12 md:p-16 hover:bg-[#1A1A1A] transition-colors group cursor-crosshair">
               <Flame size={32} className="text-[#333] group-hover:text-[#8A1C14] transition-colors mb-6"/>
               <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Forța Bruta</h3>
               <p className="text-[#777] font-medium leading-relaxed">Corpul tău este singura proprietate reală. Instrumentul cu care modifici lumea materială. Antrenează-l cu disperare.</p>
            </div>
            <div className="p-12 md:p-16 hover:bg-[#1A1A1A] transition-colors group cursor-crosshair">
               <Shield size={32} className="text-[#333] group-hover:text-white transition-colors mb-6"/>
               <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Frăția</h3>
               <p className="text-[#777] font-medium leading-relaxed">Lupul singur moare. Găsește bărbați capabili, puternici, loiali. Ridicați-vă standardele împreună. Nu accepta mediocritatea.</p>
            </div>
            <div className="p-12 md:p-16 hover:bg-[#1A1A1A] transition-colors group cursor-crosshair">
               <Flag size={32} className="text-[#333] group-hover:text-[#8A1C14] transition-colors mb-6"/>
               <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Misiunea</h3>
               <p className="text-[#777] font-medium leading-relaxed">Nu ești aici doar să supraviețuiești. Găsește războiul tău, scopul mai mare decât propria ta viață, și cucerește-l.</p>
            </div>
         </div>
      </section>

      {/* ── MANIFESTO OVERLAIN ── */}
      <section className="w-full py-32 lg:py-48 px-6 bg-[#050505] overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
            <h1 className="font-black text-[40vw] leading-none tracking-tighter whitespace-nowrap text-white">VITALITATE</h1>
         </div>

         <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
               Viata nu îți datorează <span className="text-[#8A1C14]">nimic.</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-[#777] leading-relaxed tracking-tight max-w-[600px] mx-auto">
               Tot ce vei obține va fi smuls din haos prin disciplină și voință absolută. Este timpul să trezești natura bărbătească reală.
            </p>
         </div>
      </section>

      {/* ── IMAGE MATRIX ── */}
      <section className="w-full bg-[#111] p-6 lg:p-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-auto lg:h-[70vh]">
            <div className="relative group overflow-hidden bg-black lg:col-span-2">
               <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80" alt="Iron" className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"/>
               <div className="absolute bottom-8 left-8 text-white font-black uppercase text-2xl tracking-tighter">FIERUL NU MINTE.</div>
            </div>
            <div className="relative group overflow-hidden bg-black">
               <img src="https://images.unsplash.com/photo-1470434151738-dc5f4474c239?auto=format&fit=crop&q=80" alt="Nature" className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"/>
            </div>
            <div className="relative group overflow-hidden bg-black">
               <img src="https://images.unsplash.com/photo-1549570652-97324981a6fb?auto=format&fit=crop&q=80" alt="Brotherhood" className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"/>
               <div className="absolute inset-0 bg-[#8A1C14] mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
            </div>
         </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#050505] pt-32 pb-16 px-6 border-t-[8px] border-[#8A1C14]">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center">
            <h1 className="font-black text-[20vw] md:text-[180px] uppercase tracking-tighter leading-none mb-10 text-white/5 pointer-events-none select-none">
              VIAȚĂ
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10 md:mt-[-100px] z-10 pt-10 border-t border-[#333]">
               <div className="text-[10px] font-mono tracking-[0.3em] font-bold uppercase text-[#777] mb-6 md:mb-0">
                  EST. 2026 / Sistem Arhitectural Reverb
               </div>
               <div className="flex gap-8">
                  <a href="#" className="text-[12px] font-black uppercase tracking-widest hover:text-[#8A1C14] transition-colors">Join Protocol</a>
                  <a href="#" className="text-[12px] font-black uppercase tracking-widest hover:text-[#8A1C14] transition-colors">Manifesto</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
