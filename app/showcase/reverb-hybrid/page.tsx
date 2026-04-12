"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import HeroScroll from "@/components/HeroScroll";
import ServiceCards from "@/components/ServiceCards";
import FeatureAccordion from "@/components/FeatureAccordion";
import GalleryMosaic from "@/components/GalleryMosaic";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FFFFFF] text-[#111111] font-sans overflow-x-hidden">
      <Head>
        <title>Reverb | Human Digital Marketing AI</title>
      </Head>

      {/* ── 1. HEADER ── */}
      <header 
        id="HEADER_WRAP" 
        className={`fixed top-0 w-full h-[88px] z-[50] transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-[20px] shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto h-full px-[60px] flex items-center justify-between">
          <Link href="/showcase" className="font-extrabold tracking-[-0.05em] text-[28px] uppercase hover:opacity-80 transition-opacity">
             ← REVERB<span className="text-indigo-600">.</span>
          </Link>
          <nav className="hidden lg:flex gap-[24px]">
             {["Acasă", "Servicii", "Magazine", "Portofoliu", "Blog", "Contact"].map((item) => (
                <Link key={item} href="#" className="text-[12px] font-medium uppercase tracking-[0.08em] hover:text-[#777777] transition-colors">
                  {item}
                </Link>
             ))}
          </nav>
          <div>
            <button className="bg-[#111111] text-[#ffffff] px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-[0.08em] hover:bg-[#333] transition-colors">
              Hai să vorbim
            </button>
          </div>
        </div>
      </header>

      {/* ── 2. HERO SECTION ── */}
      <HeroScroll />

      {/* ── 3. SERVICES SECTION ── */}
      <ServiceCards />

      {/* ── 4. ABOUT / PHILOSOPHY SECTION ── */}
      <section id="ABOUT_WRAP" className="w-full bg-[#111111] h-auto md:h-[420px] relative overflow-hidden flex items-center justify-center py-20">
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04] overflow-hidden select-none">
            <span className="font-black text-[30vw] md:text-[400px] text-white tracking-tighter leading-none">
              HUMAN
            </span>
         </div>
         <div className="relative z-10 text-center max-w-[900px] px-[60px]">
            <h2 className="text-white text-4xl md:text-[48px] font-bold tracking-tight mb-8">
              Nu suntem o agenție. <br className="hidden md:block"/> Suntem un sistem.
            </h2>
            <p className="text-white/70 text-[18px] font-normal leading-relaxed max-w-[700px] mx-auto">
              Reverb funcționează ca un organism viu: oameni cu experiență, agenți AI care execută, și o filozofie clară — afacerea ta trebuie să funcționeze și fără tine în fiecare zi.
            </p>
         </div>
      </section>

      {/* ── Breathing Gap ── */}
      <div className="h-[120px] bg-[#FFFFFF]"></div>

      {/* ── 5. MAGAZINE SECTION ── */}
      <section id="STORES_WRAP" className="w-full bg-[#FFFFFF]">
         <div className="max-w-[1320px] mx-auto px-[60px] grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            {/* Store 1 */}
            <div className="bg-[#E9ECF3] rounded-[24px] p-[48px] border border-[#DADADA]/50 flex flex-col hover:-translate-y-2 transition-transform duration-500">
               <div className="mb-8">
                 <span className="text-[12px] font-bold uppercase tracking-widest text-[#777777]">DIY · Bricolaj · Focșani</span>
               </div>
               <h3 className="text-[32px] font-bold text-[#111111] tracking-tight mb-4">Bricolando.ro</h3>
               <p className="text-[#777777] text-[16px] leading-relaxed mb-10 max-w-[80%]">
                 Magazin online cu produse de bricolaj și DIY, cu accent pe comunitate locală. Susținut de tehnologia Reverb.
               </p>
               <div className="mt-auto">
                 <button className="border-2 border-[#111111] rounded-full px-6 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors flex items-center gap-2">
                   Vizitează magazinul <ArrowRight size={14} />
                 </button>
               </div>
            </div>

            {/* Store 2 */}
            <div className="bg-[#E9ECF3] rounded-[24px] p-[48px] border border-[#DADADA]/50 flex flex-col hover:-translate-y-2 transition-transform duration-500">
               <div className="mb-8">
                 <span className="text-[12px] font-bold uppercase tracking-widest text-[#777777]">Fashion · Lifestyle</span>
               </div>
               <h3 className="text-[32px] font-bold text-[#111111] tracking-tight mb-4">Kalki.ro</h3>
               <p className="text-[#777777] text-[16px] leading-relaxed mb-10 max-w-[80%]">
                 Magazin online de fashion axat pe piese statement. Sistem backend optimizat direct pentru volume și profitabilitate.
               </p>
               <div className="mt-auto">
                 <button className="border-2 border-[#111111] rounded-full px-6 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-colors flex items-center gap-2">
                   Vizitează magazinul <ArrowRight size={14} />
                 </button>
               </div>
            </div>
         </div>
      </section>

      {/* ── Breathing Gap ── */}
      <div className="h-[120px] bg-[#FFFFFF]"></div>

      {/* ── 6. HOW WE WORK ── */}
      <FeatureAccordion />

      {/* ── Breathing Gap ── */}
      <div className="h-[120px] bg-[#FFFFFF]"></div>

      {/* ── 7. PORTFOLIO GALLERY ── */}
      <GalleryMosaic />

      {/* ── Breathing Gap ── */}
      <div className="h-[120px] bg-[#FFFFFF]"></div>

      {/* ── 8. CTA SECTION ── */}
      <section id="CTA_WRAP" className="w-full h-auto py-[100px] bg-[#FFFFFF] relative overflow-hidden flex flex-col items-center justify-center">
         {/* Diagonal beams background (CSS visual) */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: "repeating-linear-gradient(45deg, #111 0, #111 1px, transparent 0, transparent 50%)", backgroundSize: "30px 30px" }}>
         </div>

         <div className="relative z-10 flex flex-col items-center text-center px-[60px]">
            <div className="w-16 h-16 bg-[#111111] text-white rounded-2xl flex items-center justify-center mb-8 rotate-3">
               <Sparkles size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-[48px] font-bold text-[#111111] uppercase tracking-[0.18em] leading-tight mb-6 max-w-[800px]">
               Gata să construim împreună?
            </h2>
            <p className="text-[14px] text-[#777777] max-w-[520px] font-normal tracking-wide mb-10">
               Un audit gratuit de 30 de minute. Fără angajamente. Ne uităm la afacerea ta și decidem dacă AI-ul o poate scala acum.
            </p>
            <button className="bg-[#111111] text-white rounded-full px-12 py-5 font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-[#1A1A2E] hover:scale-105 transition-all shadow-xl">
               Vreau auditul gratuit
            </button>
         </div>
      </section>

      {/* ── 9. FOOTER ── */}
      <footer id="FOOTER_WRAP" className="w-full bg-[#FFFFFF] py-[80px] relative overflow-hidden border-t border-[#DADADA]">
         <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-[1] select-none">
            <span className="text-[#111111] opacity-5 font-black text-[150px] md:text-[220px] leading-none tracking-tight">
               REVERB
            </span>
         </div>
         
         <div className="max-w-[1320px] mx-auto px-[60px] relative z-[10] grid grid-cols-1 md:grid-cols-12 gap-[40px] md:gap-[20px]">
            
            {/* Col 1 */}
            <div className="md:col-span-6 lg:col-span-5 md:w-[360px]">
               <div className="font-extrabold tracking-[-0.05em] text-[32px] uppercase mb-8">
                 REVERB.
               </div>
               <div className="flex gap-4 mb-10">
                 {/* Social dots */}
                 <div className="w-10 h-10 rounded-full border border-[#DADADA] flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors cursor-pointer text-[#777]">IN</div>
                 <div className="w-10 h-10 rounded-full border border-[#DADADA] flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors cursor-pointer text-[#777]">FB</div>
                 <div className="w-10 h-10 rounded-full border border-[#DADADA] flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors cursor-pointer text-[#777]">IG</div>
               </div>
               <p className="text-[12px] font-medium text-[#9A9A9A]">
                 © 2026 Reverb · Human Digital Marketing AI
               </p>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-3 lg:col-span-3 md:w-[320px]">
               <h4 className="text-[14px] font-bold text-[#111111] mb-6 uppercase tracking-[0.1em]">Servicii</h4>
               <ul className="flex flex-col gap-4 text-[#777777] text-[14px]">
                 <li><Link href="#" className="hover:text-[#111111]">Magazine Online</Link></li>
                 <li><Link href="#" className="hover:text-[#111111]">Marketing Digital</Link></li>
                 <li><Link href="#" className="hover:text-[#111111]">Automatizări AI</Link></li>
                 <li><Link href="#" className="hover:text-[#111111]">Portofoliu</Link></li>
                 <li><Link href="#" className="hover:text-[#111111]">Blog & Arhitectură</Link></li>
               </ul>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-3 lg:col-span-4 md:w-[320px]">
               <h4 className="text-[14px] font-bold text-[#111111] mb-6 uppercase tracking-[0.1em]">Contact</h4>
               <ul className="flex flex-col gap-4 text-[#777777] text-[14px]">
                 <li>hello@reverb.ro</li>
                 <li>+40 700 000 000</li>
                 <li>Focșani, județul Vrancea.</li>
               </ul>
            </div>

         </div>
      </footer>

    </div>
  );
}
