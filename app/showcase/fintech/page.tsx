import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.FINANCE | FinTech Showcase",
};

export default function FinTechShowcase() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white font-sans overflow-hidden selection:bg-[#8B5CF6] selection:text-white">
      
      {/* Background glowing orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#8B5CF6]/10 blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#3B82F6]/10 blur-[100px] pointer-events-none mix-blend-screen"></div>
      
      {/* Matrix data grid */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')]"></div>

      {/* Header */}
      <header className="relative z-10 w-full flex justify-between items-center p-6 lg:p-10 border-b border-white/5 bg-[#06060A]/50 backdrop-blur-md">
         <div className="font-bold tracking-tighter text-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]"></div>
            DEFI.CORE
         </div>
         <nav className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-mono text-white/50">
            <a href="#" className="hover:text-white transition">Tokenomics</a>
            <a href="#" className="hover:text-white transition">Institutional</a>
            <a href="/showcase" className="text-[#8B5CF6] hover:text-white transition">← Showcase</a>
         </nav>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
         
         <div className="flex flex-col justify-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8B5CF6] mb-6 flex items-center gap-3">
               <span className="w-8 h-px bg-[#8B5CF6]"></span> Institutional Grade Web3
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">
               Lichiditate<br/>Fără Frecare.
            </h1>
            
            <p className="text-white/50 leading-relaxed text-base max-w-md font-light mb-12">
               Motor de matching ultra-rapid bazat pe smart contracts auditate. Acces direct la piețele de capital descentralizate prin interfețe de grad bancar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-white text-[#06060A] hover:bg-[#8B5CF6] hover:text-white transition px-8 py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2">
                  Conectează Portofel
               </button>
               <button className="border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition px-8 py-3.5 rounded-full font-medium text-sm">
                  Citește Documentația
               </button>
            </div>
         </div>

         {/* Right side Data Card / Glassmorphism */}
         <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] rounded-3xl opacity-20 blur-2xl"></div>
            
            <div className="w-full max-w-md bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
               {/* Decorative shine */}
               <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-45deg] animate-[scanline_3s_ease-in-out_infinite]"></div>
               
               <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <div className="font-mono text-xs text-white/50">Market.Live</div>
                  <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
               </div>

               <div className="space-y-6">
                  {/* Pair 1 */}
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F7931A] to-[#F7931A]/20 flex items-center justify-center font-bold text-xs">B</div>
                        <div>
                           <div className="font-bold text-sm">BTC / USD</div>
                           <div className="text-xs text-white/40">Bitcoin</div>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="font-mono font-medium">$64,231.50</div>
                        <div className="text-xs text-green-400">+2.45%</div>
                     </div>
                  </div>
                  
                  {/* Pair 2 */}
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#627EEA] to-[#627EEA]/20 flex items-center justify-center font-bold text-xs">E</div>
                        <div>
                           <div className="font-bold text-sm">ETH / USD</div>
                           <div className="text-xs text-white/40">Ethereum</div>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="font-mono font-medium">$3,420.80</div>
                        <div className="text-xs text-green-400">+1.20%</div>
                     </div>
                  </div>

                  {/* Vault APY */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                     <div className="text-xs text-white/40 mb-2 uppercase tracking-widest font-mono">Current Yield</div>
                     <div className="text-4xl font-light text-[#8B5CF6]">12.4% <span className="text-sm text-white/40 ml-1">APY</span></div>
                  </div>
               </div>
            </div>
         </div>

      </main>
    </div>
  );
}
