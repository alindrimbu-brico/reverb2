"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FlorarteShowcaseEN() {
  const categories = [
    { id: "weddings", label: "Weddings", desc: "Bouquets, arrangements, and bridal decor" },
    { id: "christenings", label: "Christenings", desc: "Delicate arrangements in pastel tones" },
    { id: "corporate", label: "Corporate", desc: "Premium office decor and workspaces" },
    { id: "home-decor", label: "Home Decor", desc: "Garlands, bouquets, and interior ornaments" },
    { id: "gifts", label: "Gifts", desc: "Boxes and arrangements for special occasions" },
  ];

  const advantages = [
    { title: "Visual Eternity", desc: "Beauty remains intact for years. No water, no maintenance, absolutely no worries." },
    { title: "Handcrafted Intention", desc: "Every petal is structured in a Romanian atelier, keeping an absolute human essence." },
    { title: "Complete Adaptation", desc: "From volumetrics to the floral angle, everything is calibrated strictly for your space's aesthetic." },
    { title: "Fine Materials", desc: "Premium textile that absorbs natural light, specifically created for the photographer's lens." }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#2C3831] font-sans selection:bg-[#4E6E59] selection:text-white min-h-screen">
      
      {/* ── Navbar Premium ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#2C3831]/5 bg-[#FAF9F5]/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/en/showcase" className="text-[10px] font-bold uppercase tracking-widest text-[#2C3831]/40 hover:text-[#4E6E59]">
            ← Return to Index
          </Link>
          <div className="text-sm font-light tracking-[0.3em] uppercase text-[#2C3831]">
            FLORARTE<span className="font-bold opacity-30">.RO</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#4E6E59]/80 border border-[#4E6E59]/20 rounded-full px-3 py-1">
            Handmade Studio
          </div>
        </div>
      </nav>

      {/* ── Architectural Hero ── */}
      <section className="relative px-6 py-32 lg:py-48 lg:px-10 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply" />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2C3831]/10 bg-white/40 px-5 py-2 backdrop-blur-md mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4E6E59] animate-pulse"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2C3831]/80">Focșani, Romania</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-light tracking-[-0.04em] leading-[0.9] text-[#2C3831]">
              Beauty <br className="hidden md:block"/>
              <span className="italic text-[#4E6E59] font-serif">that remains.</span>
            </h1>
            <p className="mt-10 max-w-2xl mx-auto text-lg md:text-xl font-extralight leading-relaxed text-[#2C3831]/70">
              Textile floral arrangements, meticulously structured by hand with an obsession for detail. 
              For weddings, christenings, corporate events, and spaces that dictate fine taste.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The Collections (Zylaris Blur Group) ── */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
             <div className="mb-16 max-w-2xl">
               <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#4E6E59]/50 mb-3">Decorative Extensions</div>
               <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#2C3831]">
                 An asymmetric flower <br/> for every space.
               </h2>
             </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 tab-blur-group">
            {categories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 80}>
                <div className="group relative block h-full rounded-2xl">
                  {/* Zylaris float-a/b/c background */}
                  <div 
                    className="absolute inset-0 tab-blur-item border border-[#2C3831]/5 bg-[#FAF9F5] rounded-2xl"
                  ></div>
                  
                  {/* Visual Text Content - grid fixed */}
                  <div className="relative z-10 p-8 lg:p-10 transition-all duration-500 flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-6 text-[10px] font-medium uppercase tracking-widest text-[#2C3831]/30 border-b border-[#2C3831]/5 pb-4">
                         Collection / 0{i+1}
                      </div>
                      <h3 className="text-2xl font-light tracking-wide text-[#2C3831] mb-3">{cat.label}</h3>
                      <p className="text-sm font-extralight text-[#2C3831]/70 leading-relaxed mb-6">{cat.desc}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#4E6E59] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto Advantages ── */}
      <section className="py-24 md:py-32 bg-[#2C3831] text-[#FAF9F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="sticky top-32">
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FAF9F5]/40 mb-4">The Effort Paradox</div>
                 <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1] mb-8">
                   Beauty <br/>without compromise.
                 </h2>
                 <p className="text-[#FAF9F5]/60 leading-relaxed font-extralight text-lg">
                   A natural flower fades in a week. Our creation becomes eternal furniture. We eliminated maintenance so we could solely enjoy the impact.
                 </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 100}>
                <div className="border border-[#FAF9F5]/10 bg-white/5 p-8 rounded-2xl h-full backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h4 className="font-light tracking-wide text-xl mb-4 text-[#FAF9F5]">{adv.title}</h4>
                  <p className="text-sm font-extralight text-[#FAF9F5]/60 leading-relaxed">{adv.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Animatic & Warm Footer ── */}
      <footer className="relative bg-white py-32 text-center border-t border-[#2C3831]/5 overflow-hidden">
        {/* Floating background lights (Zylaris soft effect) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4E6E59]/[0.03] rounded-full blur-[80px] float-item"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d9ab55]/[0.03] rounded-full blur-[80px] float-item delay-3"></div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#4E6E59]/20 bg-[#FAF9F5]/80 backdrop-blur-md px-5 py-2 mb-10 shadow-sm float-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4E6E59] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4E6E59]"></span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2C3831]/70">
                Atelier currently accepting custom requests
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-light tracking-tight text-[#2C3831] mb-8 leading-[0.9]">
              Ready for <br className="hidden md:block"/>
              <span className="italic text-[#4E6E59] font-serif">eternal impact?</span>
            </h2>
            
            <p className="text-lg md:text-xl font-extralight text-[#2C3831]/60 mb-12 max-w-xl mx-auto leading-relaxed">
              Speak with our textile floral design experts and let us manually shape the visual architecture of your event.
            </p>
            
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#4E6E59] px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-[#FAF9F5] shadow-[0_15px_30px_rgba(78,110,89,0.3)] hover:shadow-[0_20px_40px_rgba(78,110,89,0.4)] transition-all duration-500 hover:-translate-y-1">
              <span className="absolute inset-0 bg-[#2C3831] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-500">
                Contact the Studio
                <span className="group-hover:translate-x-1.5 transition-transform duration-300 ease-out">→</span>
              </span>
            </button>
          </Reveal>
        </div>
        
        {/* Linear floral graphic decoration rotating slowly */}
        <div className="absolute -bottom-24 -left-20 opacity-5 pointer-events-none float-item delay-5">
          <svg width="400" height="400" viewBox="0 0 200 200" className="animate-[spin_90s_linear_infinite]">
            <path d="M100,10 C130,50 190,70 150,100 C190,130 130,150 100,190 C70,150 10,130 50,100 C10,70 70,50 100,10 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#2C3831]"/>
            <circle cx="100" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#2C3831]"/>
          </svg>
        </div>
      </footer>
    </div>
  );
}
