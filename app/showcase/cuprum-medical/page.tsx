"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CuprumMedicalShowcase() {
  const advantages = [
    { title: "Proprietăți Antimicrobiene", desc: "Asemeni cuprului, procedurile noastre stârpesc agenții patogeni prin natura însăși a arhitecturii clinice pe care o operăm." },
    { title: "Conductivitate Umană", desc: "Medicamentul circulă cel mai rapid acolo unde căldura empatiei este lăsată să curgă liber." },
    { title: "Integritate Ereditară", desc: "Folosim principii străvechi ale alchimiei medicale translatate în instrumentar tehnologic pur, dincolo de eroziune." },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#2A2B2A] font-sans selection:bg-[#B87333] selection:text-white min-h-screen overflow-hidden">
      
      {/* Dynamic CSS for Copper effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .copper-gradient-text {
          background: linear-gradient(135deg, #FFB471 0%, #B87333 50%, #7D4311 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .copper-glow {
          box-shadow: 0 0 80px 10px rgba(184, 115, 51, 0.15);
        }
        .copper-patina-border {
          border-color: rgba(67, 179, 174, 0.4);
        }
      `}} />

      {/* ── Navbar Clinical Copper ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#B87333]/20 bg-[#FAF9F6]/80 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/showcase" className="text-[10px] font-bold uppercase tracking-widest text-[#B87333]/60 hover:text-[#B87333]">
            ← Arhiva Showcase
          </Link>
          <div className="text-sm font-light tracking-[0.4em] uppercase text-[#2A2B2A]">
            CUPRUM<span className="font-bold text-[#B87333] opacity-80">.MEDIC</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#43B3AE] border border-[#43B3AE]/40 rounded-full px-4 py-1.5 shadow-[0_0_10px_rgba(67,179,174,0.1)]">
            Spital Modular
          </div>
        </div>
      </nav>

      {/* ── Hero Antimicrobian ── */}
      <section className="relative px-6 py-32 lg:py-48 lg:px-10 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Abstract Copper Spheres / Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#B87333]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C47022]/15 rounded-full blur-[140px] pointer-events-none"></div>
        {/* Patina Accent Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#43B3AE]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#B87333]/30 bg-white/70 px-6 py-2.5 backdrop-blur-md mb-10 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B87333] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B87333]">Puritate Moleculară: Cu (29)</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.04em] leading-[0.9] text-[#2A2B2A]">
              Vindecarea din
              <br className="hidden md:block"/>
              <span className="copper-gradient-text font-serif italic"> structura metalului.</span>
            </h1>
            
            <p className="mt-12 max-w-2xl mx-auto text-lg md:text-xl font-extralight leading-relaxed text-[#2A2B2A]/70">
              Un spital privat care depășește standardele de sterilitate clasică inspirându-se din robustețea milenară a cuprului. Căldură, precizie, și siguranță arhitecturală absolută împotriva patogenilor.
            </p>

            <div className="mt-14 flex items-center justify-center gap-6">
               <button className="rounded-full bg-[#B87333] px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-[0_15px_30px_rgba(184,115,51,0.3)] hover:bg-[#A36128] hover:-translate-y-1 transition-all duration-300">
                  Rezervă Consult
               </button>
               <button className="rounded-full border border-[#B87333]/40 px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-[#B87333] hover:bg-[#B87333]/5 transition-all">
                  Rapoarte Sanitare
               </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Conductivitate si Ingrijire ── */}
      <section className="py-32 bg-white relative z-10 border-t border-[#B87333]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
             <div>
                <Reveal>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-[#43B3AE]">Sistem Circulator Patinat</p>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#2A2B2A] mb-8 leading-tight">
                    Dincolo de recele oțelului. <br/> <i className="font-serif text-[#B87333]">Căldura Cuprului.</i>
                  </h2>
                  <p className="text-[#2A2B2A]/70 font-extralight leading-relaxed mb-6">
                    Marea majoritate a instituțiilor medicale contemporane izolează pacientul într-un mediu steril dominat de albul translucid și oțel chirurgical. 
                  </p>
                  <p className="text-[#2A2B2A]/70 font-extralight leading-relaxed">
                    Noi am reimaginat spațiul de consultații. Reflexia fină a alamei și a cuprului lustruit creează rezistență vizuală la rănire. Patina verde care intervine la intersecții reprezintă respirația procesului organic de vindecare.
                  </p>
                </Reveal>
             </div>
             
             {/* Element vizual simulat abstract */}
             <Reveal delay={150}>
                <div className="relative aspect-square bg-[#FAF9F6] border border-[#B87333]/20 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#B87333]/5 to-transparent"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[0.5px] border-[#B87333] rounded-full opacity-30 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#B87333] rounded-full opacity-60"></div>
                   
                   <div className="text-center relative z-10">
                      <div className="text-6xl font-serif text-[#B87333] mb-2 group-hover:scale-110 transition-transform duration-500">29</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#B87333]/70 font-bold border-b border-[#B87333]/30 pb-1">Cuprum</div>
                      <div className="text-[9px] uppercase tracking-wider text-[#43B3AE] mt-2 group-hover:opacity-100 opacity-60 transition-opacity">Ionizare Continuă</div>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pilonii de Baza Antimicrobieni ── */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
             <div className="mb-24 md:flex items-end justify-between border-b border-white/10 pb-8">
               <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#FAF9F6]">
                 Pilonii Structurii Medicale.
               </h2>
               <p className="mt-4 md:mt-0 text-[10px] font-bold text-[#B87333] tracking-widest uppercase md:text-right">
                  Testat ISO 9001<br/>Conductivitate Maxima
               </p>
             </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {advantages.map((adv, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative bg-white/5 border border-white/5 p-12 h-full rounded-2xl hover:border-[#B87333]/50 transition-all duration-500 overflow-hidden">
                  {/* Hover Copper Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#B87333]/0 to-[#B87333]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-10 h-0.5 bg-[#43B3AE] mb-8 group-hover:bg-[#B87333] transition-colors duration-500"></div>
                    <h3 className="text-2xl font-light tracking-wide text-white mb-4">{adv.title}</h3>
                    <p className="text-white/50 font-extralight leading-relaxed text-sm">{adv.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fotbal Masiv / Oxidat (Patina) CTA ── */}
      <footer className="relative py-40 text-center bg-[#B87333] border-t border-[#B87333] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C47022] to-[#7D4311]"></div>
        {/* Patina overlay / Verdigris vibe */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#43B3AE]/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-black/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-10 leading-[1.1]">
              Clinica este pregătită <br/>
              <span className="font-serif italic text-[#FFE0B2]">să te preia.</span>
            </h2>
            
            <p className="text-white/80 font-extralight text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
               Pășește într-un mediu a cărui arhitectură acționează la nivel microscopic pentru siguranța ta imunitară. Lăsați căldura metalului să vă însoțească pașii spre restabilire.
            </p>
            
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-14 py-6 text-[11px] font-bold uppercase tracking-widest text-[#B87333] shadow-2xl hover:bg-[#FAF9F6] transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                Intră în Contact cu Noi
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </span>
            </button>
            <div className="mt-16 text-[9px] uppercase tracking-widest text-white/50 font-bold mix-blend-overlay">
               O divizie Reverb.ro aplicată în zona Medicalității
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
