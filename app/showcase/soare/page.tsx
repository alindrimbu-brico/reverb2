"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function SoareShowcase() {
  const izvoare = [
    { title: "Sursa Primară", desc: "Acolo de unde pornește claritatea. O interfață nealterată de artificii, radiind strict vibrația conceptului brut." },
    { title: "Ascensiune", desc: "Design-ul ca un vector îndreptat mereu în sus spre extinderea luminii și a intenției." },
    { title: "Claritate Solară", desc: "Eradicarea umbrelor inutile din arhitectura de brand. Totul la vedere." },
  ];

  return (
    <div className="bg-[#FFFCF5] font-sans selection:bg-[#EAB308] selection:text-white min-h-screen overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        .sun-shaft {
          background: linear-gradient(180deg, rgba(253, 224, 71, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
          transform-origin: top center;
        }
        .golden-glow {
          box-shadow: 0 0 80px 20px rgba(234, 179, 8, 0.1);
        }
      `}} />

      {/* ── Navbar Eteric ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#D97706]/10 bg-[#FFFCF5]/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/showcase" className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]/50 hover:text-[#D97706]">
            ← Înapoi
          </Link>
          <div className="text-sm font-light tracking-[0.4em] uppercase text-[#D97706]">
            SOARE<span className="font-bold opacity-40">.LUMINĂ</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#D97706] border border-[#D97706]/30 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
            Ascensiune
          </div>
        </div>
      </nav>

      {/* ── Hero Solar ── */}
      <section className="relative px-6 py-40 lg:py-56 lg:px-10 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Sun effects */}
        <div className="absolute top-0 w-full h-[600px] sun-shaft animate-pulse opacity-70"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FEF08A]/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#FDE047]/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D97706]/20 bg-white/60 px-5 py-2 backdrop-blur-md mb-10 shadow-sm">
              <span className="text-xl">☀️</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D97706]">Radiație Pură</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.04em] leading-[0.95] text-[#713F12]">
              Până sus în <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#F59E0B] font-serif italic">soare,</span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-[70px] font-light tracking-[-0.02em] leading-[1.1] text-[#A16207]/70 mt-4">
              la marile izvoare.
            </h2>
            
            <p className="mt-14 max-w-2xl mx-auto text-lg md:text-xl font-extralight leading-relaxed text-[#713F12]/60">
              O interfață țesută din raze de lumină. Eliminăm tot ce este opac din arhitectura brandului, lăsând să respire doar energia brută a esenței.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Izvoarele de lumină ── */}
      <section className="py-32 bg-gradient-to-b from-white to-[#FFFCF5] relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
             <div className="mb-20 text-center">
               <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#713F12] mb-4">
                 Cele trei Izvoare.
               </h2>
               <p className="text-sm font-light text-[#A16207]/60 tracking-widest uppercase">Pilonii energiei digitale</p>
             </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3">
            {izvoare.map((iz, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative bg-white border border-[#FDE047]/30 p-12 h-full rounded-tr-[80px] rounded-bl-[80px] hover:rounded-[40px] shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(253,224,71,0.4)] transition-all duration-700">
                  <div className="absolute top-0 right-0 p-8 text-[#D97706]/10 text-8xl font-serif leading-none group-hover:text-[#FDE047]/30 transition-colors">
                    {i + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full border border-[#D97706] bg-[#FFFCF5] mb-8 flex items-center justify-center text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white transition-colors duration-500">
                      ✦
                    </div>
                    <h3 className="text-2xl font-light tracking-wide text-[#713F12] mb-4 group-hover:text-[#D97706] transition-colors">{iz.title}</h3>
                    <p className="text-[#713F12]/60 font-extralight leading-relaxed">{iz.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto Ascensiunii ── */}
      <section className="relative py-32 lg:py-48 bg-[#FEF08A]/10 border-y border-[#FDE047]/40 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-[#D97706] text-6xl mb-8">⚱️</div>
            <p className="text-3xl md:text-5xl font-light leading-snug text-[#713F12]">
              „O direcție simplă determină <br/> zborul. Sus, tot mai sus, <br/>
              <span className="italic text-[#D97706] font-serif border-b border-[#D97706]/30">spre claritate.</span>”
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer Radiant ── */}
      <footer className="relative py-32 text-center bg-white overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-to-t from-[#FEF08A]/40 to-transparent blur-3xl pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-[#713F12] mb-10">
              Găsește-ți Sursa.
            </h2>
            
            <button className="golden-glow group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#D97706] border border-[#F59E0B] px-12 py-5 text-[11px] font-bold uppercase tracking-widest text-[#FFFCF5] hover:bg-[#B45309] transition-all duration-500 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-3">
                Incepe ascensiunea
                <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">↗</span>
              </span>
            </button>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
