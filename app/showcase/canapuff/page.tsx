"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Globe, ChevronDown, CheckCircle2, Play, Star, ArrowRight } from "lucide-react";

export default function CanapuffClone() {
  const [cartCount] = useState(0);

  const bestsellers = [
    { id: 1, title: "T9HC Vape Extreemly", status: "Stróng", image: "https://images.unsplash.com/photo-1572081172828-5690b2069b2d?auto=format&fit=crop&q=80", price: "129,00 L", rating: "4.9", bg: "bg-fuchsia-900" },
    { id: 2, title: "CBD Premium Flowers", status: "Dreamy", image: "https://images.unsplash.com/photo-1596727362302-b8d8000494bb?auto=format&fit=crop&q=80", price: "45,00 L", rating: "4.8", bg: "bg-emerald-900" },
    { id: 3, title: "CBG High Extract 99%", status: "Pure", image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80", price: "210,00 L", rating: "5.0", bg: "bg-amber-900" },
    { id: 4, title: "HHC Gummies Mix", status: "Sweet", image: "https://images.unsplash.com/photo-1628608849740-1284d7a17cf1?auto=format&fit=crop&q=80", price: "69,00 L", rating: "4.7", bg: "bg-blue-900" },
  ];

  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#E2FF00] selection:text-black">
      
      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
         <div className="w-full bg-[#E2FF00] text-black text-center py-2 text-xs font-bold uppercase tracking-wider">
           Livrare gratuită la comenzi peste 300 RON
         </div>
         <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
               <Link href="/showcase" className="text-[10px] font-mono opacity-50 hover:opacity-100 uppercase tracking-widest mr-4 hidden md:block">
                  [← REVERB MATRIX]
               </Link>
               <div className="font-black text-2xl tracking-tighter cursor-pointer">
                 canapuff<span className="text-[#E2FF00]">.</span>
               </div>
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 font-bold uppercase text-[13px] tracking-wide">
               <span className="hover:text-[#E2FF00] cursor-pointer transition-colors flex items-center gap-1">Vapes <ChevronDown size={14}/></span>
               <span className="hover:text-[#E2FF00] cursor-pointer transition-colors flex items-center gap-1">Flori <ChevronDown size={14}/></span>
               <span className="hover:text-[#E2FF00] cursor-pointer transition-colors">Drops</span>
               <span className="hover:text-[#E2FF00] cursor-pointer transition-colors">Jeleuri</span>
               <span className="text-white/50 hover:text-white cursor-pointer transition-colors">B2B</span>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-5">
               <Search size={22} className="cursor-pointer hover:text-[#E2FF00] transition-colors" />
               <User size={22} className="cursor-pointer hover:text-[#E2FF00] transition-colors hidden md:block" />
               <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                 <Globe size={22} className="hidden md:block"/>
                 <span className="text-xs uppercase font-bold hidden md:block">RO</span>
               </div>
               <div className="relative cursor-pointer">
                  <ShoppingBag size={22} className="hover:text-[#E2FF00] transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-[#E2FF00] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
               </div>
            </div>
         </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="pt-32 pb-16 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto rounded-[32px] overflow-hidden relative min-h-[500px] md:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-[#E2FF00] via-[#52FF00] to-[#00FFF0]">
            
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            
            {/* Background Texture/Image Mockup */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542455855-081c7414bc69?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center px-4 w-full">
               <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-black text-xs font-bold uppercase tracking-widest mb-6 inline-flex items-center gap-2">
                 <CheckCircle2 size={14} /> PREMIUM CBD SHOP
               </div>
               <h1 className="text-[12vw] md:text-[10vw] lg:text-[130px] font-black text-black leading-[0.8] tracking-tighter uppercase font-sans mb-8">
                 FEEL GOOD <br/> <span className="text-white drop-shadow-2xl opacity-90">FEEL CANAPUFF</span>
               </h1>
               <p className="text-black/80 font-bold text-lg max-w-lg mb-10">Cumpără Premium vapes, flori, Liquids & jeleuri direct de la cel mai avansat laborator CBD.</p>
               
               <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                 <button className="bg-black text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                   Explorează Produsele
                 </button>
                 <button className="bg-white/20 backdrop-blur-md border border-black/20 text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
                   <Play size={16} fill="black" /> Vezi Povestea
                 </button>
               </div>
            </div>
         </div>
      </section>

      {/* ── CARDURI CATEGORII ── */}
      <section className="py-10 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-gradient-to-br from-fuchsia-500 to-purple-800 rounded-[32px] p-10 md:p-14 relative overflow-hidden group min-h-[350px] md:min-h-[450px]">
               <div className="relative z-10 w-2/3">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-lg">Vapes Premium</h2>
                 <p className="text-white/80 font-medium mb-8">Aromă intensă, 0 compromisuri. Cea mai vândută categorie.</p>
                 <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl group-hover:scale-105 duration-300">
                    Mai mult
                 </button>
               </div>
               <img src="https://images.unsplash.com/photo-1599304918228-dd6afbb30b80?auto=format&fit=crop&q=80" alt="Vape" className="absolute -bottom-10 -right-10 w-1/2 object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
            </div>

            <div className="bg-gradient-to-br from-emerald-400 to-teal-700 rounded-[32px] p-10 md:p-14 relative overflow-hidden group min-h-[350px] md:min-h-[450px]">
               <div className="relative z-10 w-2/3">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-lg">Flori CBD</h2>
                 <p className="text-white/80 font-medium mb-8">Crescute organic. Experiența pură a naturii.</p>
                 <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl group-hover:scale-105 duration-300">
                    Mai mult
                 </button>
               </div>
               <img src="https://images.unsplash.com/photo-1596727362302-b8d8000494bb?auto=format&fit=crop&q=80" alt="Flowers" className="absolute -bottom-10 -right-10 w-[60%] object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
            </div>

         </div>
      </section>

      {/* ── BESTSELLERS (PREFERATELE CLIENȚILOR) ── */}
      <section className="py-20 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-12">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Preferatele<br/>Clienților</h2>
               <div className="hidden md:flex gap-2">
                 <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">←</button>
                 <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">→</button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {bestsellers.map((product) => (
                  <div key={product.id} className="bg-[#1A1A1A] rounded-[24px] overflow-hidden group shadow-2xl pb-6 cursor-pointer">
                     <div className={`relative h-[250px] w-full ${product.bg} flex items-center justify-center p-6`}>
                        <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase text-white tracking-widest">
                          {product.status}
                        </div>
                        <img src={product.image} alt={product.title} className="w-[80%] opacity-80 mix-blend-plus-lighter group-hover:scale-110 transition-transform duration-500 filter sepia-0 drop-shadow-2xl" />
                     </div>
                     
                     <div className="px-6 pt-6 flex flex-col gap-2">
                        <div className="flex items-center gap-1 text-[#E2FF00]">
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                           <Star size={12} fill="currentColor" />
                           <span className="text-white/50 text-[10px] font-mono ml-2">({product.rating})</span>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight leading-tight">{product.title}</h3>
                        <div className="flex justify-between items-center mt-4">
                           <span className="text-2xl font-black text-white">{product.price}</span>
                           <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E2FF00] hover:scale-110 transition-all font-black text-lg">
                             +
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── VIDEO / MARQUEE ── */}
      <section className="py-10 bg-black overflow-hidden border-t border-white/10">
         <div className="w-full flex whitespace-nowrap animate-[marquee_20s_linear_infinite] gap-10 opacity-40">
            {Array(10).fill(0).map((_, i) => (
               <span key={i} className="font-black text-[6vw] uppercase text-transparent stroke-text" style={{ WebkitTextStroke: "1px white" }}>
                  THP420 ✦ CBD ✦ HHC-P ✦
               </span>
            ))}
         </div>
      </section>

      {/* ── LOYALTY SUMMARY ── */}
      <section className="py-20 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-blue-900 to-[#1A1A1A] rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E2FF00] mix-blend-overlay opacity-5 blur-[100px]" />
            <div className="flex-1 relative z-10">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Fii răsplătit pentru loialitate!</h2>
               <p className="text-white/70 font-medium mb-10 max-w-lg">Programul Canapuff Club îți returnează automat 5% din valoarea comenzilor, cadouri secrete la fiecare cutie și acces VIP drops.</p>
               <button className="bg-[#E2FF00] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-white hover:scale-105 transition-all">
                  Alătură-te Clubului
               </button>
            </div>
            <div className="flex-1 flex justify-center z-10">
               <div className="w-[300px] h-[300px] rounded-full bg-black/50 border-8 border-white/10 flex items-center justify-center p-10 backdrop-blur-sm shadow-2xl">
                  <Star size={100} className="text-[#E2FF00] drop-shadow-[0_0_30px_rgba(226,255,0,0.5)]" />
               </div>
            </div>
         </div>
      </section>

      {/* ── FOOTER DARK GLOW ── */}
      <footer className="w-full bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-1 bg-[#E2FF00] blur-[100px]" />
         
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-sans relative z-10">
            <div>
               <h3 className="font-black text-2xl tracking-tighter mb-8 uppercase">canapuff<span className="text-[#E2FF00]">.</span></h3>
               <p className="text-white/40 text-sm font-medium pr-10">Cel mai mare producător European de cannabinoizi alternativi asamblați în facilități ISO 9001. HQ: Barcelona, ES.</p>
            </div>

            <div>
               <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Support Clienti</h4>
               <ul className="flex flex-col gap-4 text-white/50 text-sm font-medium">
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Livrare & Plăți</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Returnări / Reclamații</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Program Loialitate</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">FAQ</li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">B2B / Legal</h4>
               <ul className="flex flex-col gap-4 text-white/50 text-sm font-medium">
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Contact Wholesale</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Certificate Analiză (COA)</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Politici Confidențialitate</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Termeni de utilizare</li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Categorii</h4>
               <ul className="flex flex-col gap-4 text-white/50 text-sm font-medium">
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Vapes (Unică Folosință)</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Cartușe 510</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Flori Premium</li>
                  <li className="hover:text-[#E2FF00] cursor-pointer transition-colors">Gummies & Edibles</li>
               </ul>
            </div>
         </div>

         <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest relative z-10">
            <div>© 2026 Canapuff Europe. Toate drepturile rezervate.</div>
            <div className="flex items-center gap-4">
              Dedicat Ecosistemului Reverb <ArrowRight size={12}/> 
              <span className="text-white/10">18+ WARNING</span>
            </div>
         </div>
      </footer>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
