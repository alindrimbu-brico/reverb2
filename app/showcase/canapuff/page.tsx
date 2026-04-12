"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Globe, ChevronDown, CheckCircle2, Play, Star, ArrowRight, Zap, Code, Shield } from "lucide-react";

// Mock Database for dynamic rendering
const allProducts = [
  { id: 1, category: "Vapes", title: "T9HC Vape Extreemly", status: "Stróng", image: "https://images.unsplash.com/photo-1572081172828-5690b2069b2d?auto=format&fit=crop&q=80", price: "129,00 L", rating: "4.9", bg: "bg-fuchsia-900" },
  { id: 2, category: "Flori", title: "CBD Premium Flowers", status: "Dreamy", image: "https://images.unsplash.com/photo-1596727362302-b8d8000494bb?auto=format&fit=crop&q=80", price: "45,00 L", rating: "4.8", bg: "bg-emerald-900" },
  { id: 3, category: "Drops", title: "CBG High Extract 99%", status: "Pure", image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80", price: "210,00 L", rating: "5.0", bg: "bg-amber-900" },
  { id: 4, category: "Jeleuri", title: "HHC Gummies Mix", status: "Sweet", image: "https://images.unsplash.com/photo-1628608849740-1284d7a17cf1?auto=format&fit=crop&q=80", price: "69,00 L", rating: "4.7", bg: "bg-blue-900" },
  { id: 5, category: "Vapes", title: "CBD Vape Pen Smooth", status: "Relax", image: "https://images.unsplash.com/photo-1533036495819-bf9dffeb3a6a?auto=format&fit=crop&q=80", price: "99,00 L", rating: "4.5", bg: "bg-purple-900" },
  { id: 6, category: "Flori", title: "White Widow Bud", status: "Classic", image: "https://images.unsplash.com/photo-1629815523908-1cc6b6c16709?auto=format&fit=crop&q=80", price: "55,00 L", rating: "4.9", bg: "bg-green-800" },
  { id: 7, category: "Drops", title: "Broad Spectrum CBD Oil", status: "Heal", image: "https://images.unsplash.com/photo-1606132470659-4dffcbf12ca8?auto=format&fit=crop&q=80", price: "180,00 L", rating: "4.6", bg: "bg-orange-800" },
  { id: 8, category: "Jeleuri", title: "CBD Sour Bears", status: "Tasty", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80", price: "89,00 L", rating: "4.8", bg: "bg-cyan-900" },
];

export default function CanapuffClone() {
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState("Toate");
  const [isAlertVisible, setAlertVisible] = useState(false);

  // Funcție logică pentru butonul +
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000); // dispare mesajul după 2s
  };

  // Logică de filtrare live a produselor
  const filteredProducts = activeTab === "Toate" 
    ? allProducts.slice(0, 4) 
    : allProducts.filter(p => p.category === activeTab);

  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#E2FF00] selection:text-black">
      
      {/* ── NOTIFICARE COȘ ── */}
      <div className={`fixed top-24 right-6 bg-[#E2FF00] text-black px-6 py-4 rounded-xl z-[100] font-black uppercase tracking-widest text-xs shadow-2xl transition-all duration-300 transform ${isAlertVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
        Produs adăugat în coș! (+1)
      </div>

      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
         <div className="w-full bg-[#E2FF00] text-black text-center py-2 text-xs font-bold uppercase tracking-wider">
           Livrare gratuită la comenzi peste 300 RON
         </div>
         <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
               <Link href="/showcase" className="text-[10px] font-mono opacity-50 hover:opacity-100 uppercase tracking-widest mr-4 hidden md:block transition-all">
                  [← REVERB MATRIX]
               </Link>
               <div className="font-black text-2xl tracking-tighter cursor-pointer">
                 canapuff<span className="text-[#E2FF00]">.</span>
               </div>
            </div>

            {/* Nav Links ACTIVE dinamic */}
            <nav className="hidden lg:flex items-center gap-8 font-bold uppercase text-[13px] tracking-wide">
               <button onClick={() => setActiveTab("Vapes")} className={`transition-colors flex items-center gap-1 ${activeTab === "Vapes" ? "text-[#E2FF00]" : "hover:text-[#E2FF00]"}`}>Vapes</button>
               <button onClick={() => setActiveTab("Flori")} className={`transition-colors flex items-center gap-1 ${activeTab === "Flori" ? "text-[#E2FF00]" : "hover:text-[#E2FF00]"}`}>Flori</button>
               <button onClick={() => setActiveTab("Drops")} className={`transition-colors ${activeTab === "Drops" ? "text-[#E2FF00]" : "hover:text-[#E2FF00]"}`}>Drops</button>
               <button onClick={() => setActiveTab("Jeleuri")} className={`transition-colors ${activeTab === "Jeleuri" ? "text-[#E2FF00]" : "hover:text-[#E2FF00]"}`}>Jeleuri</button>
               <span className="text-white/50 hover:text-white cursor-pointer transition-colors border-l border-white/20 pl-8">B2B</span>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-5">
               <Search size={22} className="cursor-pointer hover:text-[#E2FF00] transition-colors" />
               <User size={22} className="cursor-pointer hover:text-[#E2FF00] transition-colors hidden md:block" />
               <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                 <Globe size={22} className="hidden md:block"/>
                 <span className="text-xs uppercase font-bold hidden md:block">RO</span>
               </div>
               <div className="relative cursor-pointer transition-transform duration-300 hover:scale-110">
                  <ShoppingBag size={22} className="text-white" />
                  <span className={`${cartCount > 0 ? "scale-100" : "scale-0"} transition-transform duration-300 absolute -top-2 -right-2 bg-[#E2FF00] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center`}>
                    {cartCount}
                  </span>
               </div>
            </div>
         </div>
      </header>

      {/* ── REVERB TECHNICAL CASE STUDY ── */}
      <section className="pt-40 px-4 md:px-6 mb-8">
         <div className="max-w-[1400px] mx-auto bg-black border border-[#E2FF00]/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-full bg-[#E2FF00] mix-blend-overlay opacity-10 blur-[120px] pointer-events-none" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
               <div className="max-w-3xl">
                  <div className="text-[#E2FF00] font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4">Reverb Architecture Studio</div>
                  <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4">Ce am produs aici? (Clone Demo)</h2>
                  <p className="text-white/70 font-medium text-sm leading-relaxed mb-6">
                     Nu doar am „desenat” site-ul Canapuff, ci am transformat un design greoi de e-commerce într-o aplicație <span className="text-white">Single Page (Next.js & React)</span> de înaltă performanță. 
                     Elementele au acum dinamică internă: poți folosi tab-urile de mai sus (sau butoanele "Mai mult" de mai jos) ca să filtrezi instant produsele, fără să se reîncarce vizual pagina (0 lag). Sistemul ține starea coșului (apasă butonul + la produse) folosind Virtual DOM.
                  </p>
               </div>
               <div className="grid grid-cols-1 gap-4 min-w-[250px]">
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/5 border border-white/10 px-4 py-3 rounded-lg"><Zap size={16} className="text-[#E2FF00]"/> 0.3s Timp Interacțiune</div>
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/5 border border-white/10 px-4 py-3 rounded-lg"><Code size={16} className="text-[#E2FF00]"/> Tailwind JIT Compiled</div>
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/5 border border-white/10 px-4 py-3 rounded-lg"><Shield size={16} className="text-[#E2FF00]"/> Server Side Rendering</div>
               </div>
            </div>
         </div>
      </section>

      {/* ── HERO BANNER ── */}
      <section className="px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto rounded-[32px] overflow-hidden relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#E2FF00] via-[#52FF00] to-[#00FFF0]">
            
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542455855-081c7414bc69?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />

            <div className="relative z-10 text-center flex flex-col items-center px-4 w-full">
               <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-black text-xs font-bold uppercase tracking-widest mb-6 inline-flex items-center gap-2">
                 <CheckCircle2 size={14} /> PREMIUM CBD SHOP
               </div>
               <h1 className="text-[12vw] md:text-[8vw] lg:text-[110px] font-black text-black leading-[0.8] tracking-tighter uppercase font-sans mb-8">
                 FEEL GOOD <br/> <span className="text-white drop-shadow-2xl opacity-90">FEEL CANAPUFF</span>
               </h1>
               <p className="text-black/80 font-bold text-lg max-w-lg mb-10">Cumpără Premium vapes, flori, Liquids & jeleuri direct de la cel mai avansat laborator CBD.</p>
               
               <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                 <button onClick={() => { setActiveTab("Toate"); document.getElementById('bestsellers')?.scrollIntoView({behavior: 'smooth'}) }} className="bg-black text-white px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                   Explorează Catalogul
                 </button>
               </div>
            </div>
         </div>
      </section>

      {/* ── CARDURI CATEGORII INTERACTIVE ── */}
      <section className="py-10 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-gradient-to-br from-fuchsia-500 to-purple-800 rounded-[32px] p-10 relative overflow-hidden group min-h-[350px]">
               <div className="relative z-10 w-2/3">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-lg">Vapes Premium</h2>
                 <p className="text-white/80 font-medium mb-8">Aromă intensă, 0 compromisuri. Cea mai vândută categorie.</p>
                 {/* Buton cu logică de filtrare live */}
                 <button onClick={() => { setActiveTab("Vapes"); document.getElementById('bestsellers')?.scrollIntoView({behavior: 'smooth'}) }} className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl group-hover:scale-105 duration-300">
                    Filtrează Vapes
                 </button>
               </div>
               <img src="https://images.unsplash.com/photo-1599304918228-dd6afbb30b80?auto=format&fit=crop&q=80" alt="Vape" className="absolute -bottom-10 -right-10 w-1/2 object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
            </div>

            <div className="bg-gradient-to-br from-emerald-400 to-teal-700 rounded-[32px] p-10 relative overflow-hidden group min-h-[350px]">
               <div className="relative z-10 w-2/3">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-white drop-shadow-lg">Flori CBD</h2>
                 <p className="text-white/80 font-medium mb-8">Crescute organic. Experiența pură a naturii.</p>
                 {/* Buton cu logică de filtrare live */}
                 <button onClick={() => { setActiveTab("Flori"); document.getElementById('bestsellers')?.scrollIntoView({behavior: 'smooth'}) }} className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-[11px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl group-hover:scale-105 duration-300">
                    Filtrează Flori
                 </button>
               </div>
               <img src="https://images.unsplash.com/photo-1596727362302-b8d8000494bb?auto=format&fit=crop&q=80" alt="Flowers" className="absolute -bottom-10 -right-10 w-[60%] object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" />
            </div>

         </div>
      </section>

      {/* ── BESTSELLERS (Reactiv la Navigație) ── */}
      <section id="bestsellers" className="py-20 px-4 md:px-6">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
               <div>
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Bestsellers</h2>
                 <p className="text-white/50 text-sm font-bold uppercase tracking-widest mt-2">Afișez: {activeTab}</p>
               </div>
               <div className="flex gap-2">
                 <button onClick={() => setActiveTab("Toate")} className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-colors ${activeTab === "Toate" ? "bg-[#E2FF00] text-black" : "bg-white/10 text-white hover:bg-white hover:text-black"}`}>
                    Toate
                 </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
               {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-[#1A1A1A] rounded-[24px] overflow-hidden group shadow-2xl pb-6 cursor-pointer">
                     <div className={`relative h-[250px] w-full ${product.bg} flex items-center justify-center p-6 transition-colors duration-500`}>
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
                           <button onClick={handleAddToCart} className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E2FF00] hover:scale-110 transition-all font-black text-lg">
                             +
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
               
               {filteredProducts.length === 0 && (
                 <div className="col-span-full py-10 text-center text-white/50 text-xl font-bold uppercase tracking-widest">
                    Niciun produs gasit in baza de date mock.
                 </div>
               )}
            </div>
         </div>
      </section>

      {/* ── VIDEO / MARQUEE ── */}
      <section className="py-10 bg-black overflow-hidden border-y border-white/10">
         <div className="w-full flex whitespace-nowrap animate-[marquee_20s_linear_infinite] gap-10 opacity-40">
            {Array(10).fill(0).map((_, i) => (
               <span key={i} className="font-black text-[6vw] uppercase text-transparent stroke-text" style={{ WebkitTextStroke: "1px white" }}>
                  THP420 ✦ CBD ✦ HHC-P ✦ REACT
               </span>
            ))}
         </div>
      </section>

      {/* ── FOOTER DARK GLOW ── */}
      <footer className="w-full bg-[#050505] pt-24 pb-12 px-6 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-1 bg-[#E2FF00] blur-[100px]" />
         
         <div className="max-w-[1400px] mx-auto mt-10 pt-8 border-t border-white/10 flex flex-col justify-center items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest relative z-10">
            <div className="text-center">© 2026 Ecosistem Demonstrativ Reverb.ro <br/> Toate drepturile de design aparțin Canapuff Europe. Copie pur demonstrativă de capabilități frontend.</div>
         </div>
      </footer>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
