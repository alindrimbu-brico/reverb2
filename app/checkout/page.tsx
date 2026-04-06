"use client";

import Link from "next/link";


export default function CheckoutPage() {
  return (
    <div 
      className="min-h-screen bg-[#07070a] text-white font-sans overflow-x-hidden selection:bg-[#ec4899]"
      style={{ backgroundImage: "radial-gradient(ellipse at top, #1a0533 0%, #07070a 60%)" }}
    >
      <style>{`
        .glass-box {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
      `}</style>
      
      {/* Stripe-like top bar */}
      <div className="w-full bg-[#ec4899] h-1.5"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
         
         {/* Partea stângă: Sumarul Comenzii */}
         <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
               <Link href="/" className="inline-block mb-12">
                  <div className="text-2xl font-bold tracking-tight">Reverb.ro</div>
                  <div className="text-[9px] uppercase tracking-widest text-[#ec4899] font-bold">Liniște Digitală</div>
               </Link>
               
               <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-mono">Invoice_Ref: RVB-5509-X</div>
               <h1 className="text-4xl font-semibold mb-6">Clienți Locali</h1>
               <div className="text-5xl font-light mb-12 border-b border-white/10 pb-8 tracking-tight">
                  €1.790<span className="text-lg text-white/40 ml-2">/ avans setare</span>
               </div>

               <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                     <span className="text-[#8b5cf6] mt-1">✔</span>
                     <div>
                        <div className="font-semibold text-[15px]">Setup Landing Pagă Vies & SEO Local</div>
                        <div className="text-xs text-white/50 mt-1">Implementarea completă a deciziilor, oferindu-ți claritate.</div>
                     </div>
                  </li>
                  <li className="flex gap-4 items-start">
                     <span className="text-[#8b5cf6] mt-1">✔</span>
                     <div>
                        <div className="font-semibold text-[15px]">Configurare Ads & Tracking Conversii</div>
                        <div className="text-xs text-white/50 mt-1">Conectarea API pe Meta și Google Ads fără erori.</div>
                     </div>
                  </li>
                  <li className="flex gap-4 items-start">
                     <span className="text-[#8b5cf6] mt-1">✔</span>
                     <div>
                        <div className="font-semibold text-[15px]">Parteneriat Stabil & Predictibil</div>
                        <div className="text-xs text-white/50 mt-1">Pace mintală totală. Tu te ocupi de business, noi de cod.</div>
                     </div>
                  </li>
               </ul>
            </div>

            <div className="mt-16 text-xs text-white/30 border-l border-[#8b5cf6]/30 pl-4">
               Plata este securizată end-to-[end]. Prin procesarea acestei comenzi accepți <a href="#" className="underline hover:text-white">Termenii & Condițiile</a>. Detaliile abonamentului sau setării vor fi transmise automat către ReverbHub.
            </div>
         </div>

         {/* Partea dreaptă: Interfața de Plată (Checkout propriu-zis) */}
         <div className="lg:col-span-7">
            <div className="glass-box p-8 lg:p-12 h-full shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
               
               <div className="flex gap-4 mb-10 overflow-hidden">
                  <button className="flex-1 bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition hover:bg-white/90">
                     <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4.5-4.5 1.41-1.41L11 13.67l7.59-7.59 1.41 1.41L11 16.5z" fill="currentColor"/></svg>
                     G Pay
                  </button>
                  <button className="flex-1 bg-black border border-white/20 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition hover:bg-white/10">
                     Pay cu <span className="font-extrabold font-serif">Apple</span>
                  </button>
               </div>

               <div className="flex items-center my-8">
                  <div className="flex-1 border-t border-white/10"></div>
                  <div className="px-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">Card Bancar</div>
                  <div className="flex-1 border-t border-white/10"></div>
               </div>

               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Email */}
                  <div>
                     <label className="text-xs text-white/70 mb-2 block">Informații contact</label>
                     <input 
                        type="email" 
                        placeholder="Adresă email" 
                        className="w-full bg-[#07070a]/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-[#ec4899] outline-none transition" 
                     />
                  </div>

                  {/* Card Info */}
                  <div className="space-y-0">
                     <label className="text-xs text-white/70 mb-2 block mt-6">Date de plată (Stripe Checkout Demo)</label>
                     <div className="w-full bg-[#07070a]/50 border border-white/10 rounded-t-xl px-4 py-4 focus-within:border-[#ec4899] focus-within:z-10 relative flex justify-between items-center transition">
                        <input 
                           type="text" 
                           placeholder="Număr Card" 
                           className="bg-transparent w-full text-sm outline-none placeholder-white/20"
                        />
                        <div className="flex gap-1">
                           <div className="w-8 h-5 bg-white/10 rounded px-1 flex items-center justify-center text-[7px] font-bold text-white/50">VISA</div>
                           <div className="w-8 h-5 bg-white/10 rounded px-1 flex items-center justify-center text-[7px] font-bold text-white/50">MC</div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2">
                        <input 
                           type="text" 
                           placeholder="MM / YY" 
                           className="bg-[#07070a]/50 border-x border-b border-white/10 rounded-bl-xl px-4 py-4 text-sm focus:border-[#ec4899] outline-none focus:relative z-10 placeholder-white/20 transition" 
                        />
                        <input 
                           type="text" 
                           placeholder="CVC" 
                           className="bg-[#07070a]/50 border-r border-b border-white/10 rounded-br-xl px-4 py-4 text-sm focus:border-[#ec4899] outline-none focus:relative z-10 placeholder-white/20 transition" 
                        />
                     </div>
                  </div>

                  {/* Nume Card */}
                  <div>
                     <input 
                        type="text" 
                        placeholder="Numele de pe card" 
                        className="w-full bg-[#07070a]/50 border border-white/10 rounded-xl px-4 py-4 text-sm focus:border-[#ec4899] outline-none transition mt-2 placeholder-white/20" 
                     />
                  </div>

                  {/* Detalii facturare */}
                  <div>
                     <label className="text-xs text-white/70 mb-2 block mt-6">Adresă de facturare (CUI Firma)</label>
                     <select className="w-full bg-[#07070a]/50 border border-white/10 border-b-0 rounded-t-xl px-4 py-4 text-sm focus:border-[#ec4899] outline-none transition text-white">
                        <option>România</option>
                        <option>European Union</option>
                     </select>
                     <input 
                        type="text" 
                        placeholder="CUI / Detalii firmă" 
                        className="w-full bg-[#07070a]/50 border border-white/10 rounded-b-xl px-4 py-4 text-sm focus:border-[#ec4899] outline-none transition placeholder-white/20" 
                     />
                  </div>

                  {/* Pay button */}
                  <button className="w-full bg-[#ec4899] hover:bg-[#d9468c] transition text-white py-5 rounded-xl text-lg font-bold shadow-[0_15px_30px_rgba(236,72,153,0.3)] mt-8">
                     Plătesc €1.790
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-white/40 mt-4">
                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
                     Procesat de sistemul de plăți securizat
                  </div>
               </form>
            </div>
         </div>
         
      </div>
    </div>
  );
}
