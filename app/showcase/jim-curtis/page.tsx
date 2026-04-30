"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Brain, Activity, Target, ShieldCheck, ChevronRight, Zap } from "lucide-react";

export default function JimCurtisShowcase() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0B10] min-h-screen text-[#F8FAFC] font-sans selection:bg-[#06B6D4] selection:text-white overflow-x-hidden">
      
      {/* ── HEADER NEURO-MINIMALIST ── */}
      <nav className="fixed w-full z-50 mix-blend-difference top-0 left-0 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center text-white">
           <Link href="/showcase" className="uppercase font-mono text-[10px] tracking-[0.4em] font-bold opacity-50 hover:opacity-100 hover:text-[#06B6D4] transition-all">
              [← REVERB MATRIX]
           </Link>
           <div className="text-[12px] font-black tracking-[0.3em] uppercase">JIM CURTIS</div>
           <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest opacity-70">
              <span className="hover:text-[#06B6D4] cursor-pointer transition-colors">Prezent</span>
              <span className="hover:text-[#06B6D4] cursor-pointer transition-colors">Neuroștiință</span>
              <span className="hover:text-[#06B6D4] cursor-pointer transition-colors">Hypno-Coaching</span>
           </div>
        </div>
      </nav>

      {/* ── HERO COGNITIVE ── */}
      <section className="relative w-full h-[100svh] flex flex-col justify-center items-center overflow-hidden">
        {/* Abstract Brain/Mind Background Simulation */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[#0A0B10]/80 z-10" />
           {/* Glow orb */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E1B4B] rounded-full blur-[150px] opacity-60 mix-blend-screen" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#06B6D4] rounded-full blur-[150px] opacity-30 mix-blend-screen" />
           <img 
             src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80" 
             alt="Cognitive Flow" 
             className="w-full h-full object-cover grayscale contrast-125 opacity-20"
             style={{ transform: `translateY(${offsetY * 0.2}px)` }}
           />
        </div>

        <div className="relative z-20 text-center w-full px-4 max-w-[1000px] mx-auto mt-20">
           <div className="inline-flex items-center gap-3 border border-[#06B6D4]/30 bg-[#06B6D4]/10 text-[#06B6D4] px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest mb-10 backdrop-blur-md">
              <Brain size={14} /> Neural Reprogramming Architect
           </div>
           
           <h1 className="font-sans font-light text-[10vw] md:text-[90px] leading-[0.9] tracking-tighter mb-8">
              Reprogramming the <br/>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#06B6D4] to-[#1E1B4B]">
                Subconscious Mind.
              </span>
           </h1>
           <p className="text-white/60 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-tight mb-12">
              Transformational coach, antreprenor în wellness și expert în neuroștiința comportamentală. De la traume fizice la claritate absolută.
           </p>
           
           <button className="bg-white text-[#0A0B10] px-10 py-5 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-[#06B6D4] hover:text-white transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105">
              Explorează Arhitectura Mentală
           </button>
        </div>
      </section>

      {/* ── CE FACE EL ÎN PREZENT ── */}
      <section className="py-32 px-6 bg-[#0A0B10] relative z-30 border-y border-white/5">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
               <div className="flex-1 w-full">
                  <h2 className="text-[#06B6D4] font-mono text-[12px] uppercase tracking-[0.3em] font-bold mb-6">01. Prezentul</h2>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
                     Arhitectul Metodelor <br/> <span className="text-white/40">Hypno-Coaching℠</span>
                  </h3>
                  <div className="space-y-6 text-white/70 font-medium text-lg leading-relaxed">
                     <p>În prezent, Jim Curtis este un transformational coach de elită care a renunțat la discursurile motivaționale clasice („mindset work”) în favoarea <strong className="text-white">reprogramării profunde a subconștientului</strong>.</p>
                     <p>El operează pe principiul neuroștiințific conform căruia 95% din comportamentul, deciziile și sănătatea noastră emoțională sunt guvernate de mintea subconștientă. Prin practica sa, combină:</p>
                  </div>
                  
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <Zap className="text-[#06B6D4] mb-4" size={24} />
                        <h4 className="font-bold text-lg mb-2">Hipnoterapie Clinică</h4>
                        <p className="text-sm text-white/60">Scurtcircuitarea "minții critice" pentru a rescrie convingerile limitative implantate din copilărie.</p>
                     </div>
                     <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <Activity className="text-[#06B6D4] mb-4" size={24} />
                        <h4 className="font-bold text-lg mb-2">Vindecare Somatică</h4>
                        <p className="text-sm text-white/60">Reglarea sistemului nervos pentru a elibera trauma emoțională stocată fizic în țesuturile corpului.</p>
                     </div>
                  </div>
               </div>
               
               <div className="flex-1 w-full relative">
                  <div className="absolute inset-0 bg-[#06B6D4] blur-[100px] opacity-20 rounded-full" />
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Executive Coaching" className="relative z-10 w-full h-[600px] object-cover rounded-3xl grayscale contrast-125 border border-white/10" />
               </div>
            </div>
         </div>
      </section>

      {/* ── REALIZĂRI ÎN NEUROȘTIINȚĂ (MAXIM) ── */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0A0B10] to-[#1E1B4B] relative overflow-hidden">
         {/* Grid liniar de fundal pt vibe științific */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-[#06B6D4] font-mono text-[12px] uppercase tracking-[0.3em] font-bold mb-4">02. Backlog Tehnic & Medical</h2>
               <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Realizări în Neuroștiință<br/> și Health-Tech</h3>
               <p className="text-white/60 max-w-2xl mx-auto text-lg">Un background masiv la intersecția dintre inovația medicală corporate și decodarea creierului uman, alimentat de propriul său miracol de vindecare.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="bg-[#0A0B10]/80 backdrop-blur-xl border border-[#06B6D4]/20 p-10 rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#1E1B4B] flex items-center justify-center border border-[#06B6D4]/50 mb-8 group-hover:scale-110 transition-transform">
                     <ShieldCheck className="text-[#06B6D4]" size={28} />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight mb-4">Leadership la Giganții Medicali</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                     Fost executiv la cel mai înalt nivel în industria de health & wellness. A condus inovația și impactul public la giganți globali precum <strong className="text-white">WebMD</strong> și <strong className="text-white">Everyday Health</strong>.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                     A fost președinte și Chief Revenue Officer la <strong className="text-white">Institute for Integrative Nutrition (IIN)</strong>, scalând educația globală în nutriție și sănătate mentală.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-[#0A0B10]/80 backdrop-blur-xl border border-[#06B6D4]/20 p-10 rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#1E1B4B] flex items-center justify-center border border-[#06B6D4]/50 mb-8 group-hover:scale-110 transition-transform">
                     <Brain className="text-[#06B6D4]" size={28} />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight mb-4">NLP & Neuro-Linguistic Programming</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                     A pionierat metode care integrează direct NLP cu practicile de meditație. Prin modelarea limbajului creierului, el ajută pacienții și executivii să-și restructureze tiparele cognitive rigide.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                     Colaborări cu figuri emblematice din domeniul psihiatriei, precum Dr. Daniel Amen, pentru a explora felul în care sănătatea neuro-fizică se intersectează direct cu trauma din trecut.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="bg-[#0A0B10]/80 backdrop-blur-xl border border-[#06B6D4]/20 p-10 rounded-3xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#1E1B4B] flex items-center justify-center border border-[#06B6D4]/50 mb-8 group-hover:scale-110 transition-transform">
                     <Target className="text-[#06B6D4]" size={28} />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight mb-4">Vindecarea Bolii Cronice (Cazul Zero)</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                     Cea mai mare realizare neuroștiințifică a sa a fost pe propriul corp. A trăit peste două decenii cu o boală cronică devastatoare, nediagnosticată. 
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                     A folosit neuroplasticitatea creierului și reglarea sistemului nervos pentru a-și induce corpul într-o stare de vindecare completă, un caz demonstrativ pentru legătura psihosomatică absolută.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── BANNERE FINALE & MEDIA ── */}
      <section className="w-full bg-[#06B6D4] text-[#0A0B10] py-20 px-6">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">The Mind Is Hardware.<br/>Re-write the Software.</h2>
               <p className="font-bold text-[#0A0B10]/70 max-w-lg">De la CEO stresat la un sistem nervos calibrat. Găsește resursele lui pe marile podcast-uri (The School of Greatness, Habits and Hustle).</p>
            </div>
            <button className="bg-[#0A0B10] text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-[#0A0B10] transition-colors flex items-center gap-4 group">
               Vezi Masterclass-ul <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
         </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#0A0B10] pt-32 pb-16 px-6 relative overflow-hidden border-t border-white/5">
         <div className="max-w-[1400px] mx-auto flex flex-col items-center">
            <h1 className="font-black text-[15vw] md:text-[140px] uppercase tracking-tighter leading-none mb-10 text-white/5 pointer-events-none select-none">
              JIM CURTIS
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10 md:mt-[-80px] z-10 pt-10 border-t border-white/10">
               <div className="text-[10px] font-mono tracking-[0.3em] font-bold uppercase text-white/40 mb-6 md:mb-0">
                  PROFIL CERCETAT & IMPLEMENTAT DE REVERB
               </div>
               <div className="flex gap-8">
                  <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-[#06B6D4] transition-colors">Neuroscience</a>
                  <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-[#06B6D4] transition-colors">Hypno-Coaching</a>
                  <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-[#06B6D4] transition-colors">IIN</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
