import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.CULTURE_LAB | Urban Culture Showcase",
};

export default function UrbanCultureShowcase() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#E2FF00] selection:text-[#0A0A0A]" 
         style={{
           backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
           backgroundSize: '24px 24px',
         }}>
         
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes slide-right { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
      
      <div className="relative min-h-screen border-x border-white/10 max-w-[1400px] mx-auto overflow-hidden">
        
        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#E2FF00] animate-[blink_1s_infinite]"></div>
            <span className="font-mono text-sm tracking-widest uppercase font-bold text-white">DRIP.OS_v1</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-white/60">
             <a href="#" className="hover:text-[#E2FF00] hover:line-through transition">SS_24_Drop</a>
             <a href="#" className="hover:text-[#E2FF00] hover:line-through transition">Archive</a>
             <a href="#" className="hover:text-[#E2FF00] hover:line-through transition">Manifesto</a>
          </div>
          <button className="border border-[#E2FF00] text-[#E2FF00] px-4 py-1.5 font-mono text-xs uppercase hover:bg-[#E2FF00] hover:text-black transition">
            Access_Vault
          </button>
        </nav>

        {/* Main Section */}
        <main className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-70px)]">
            
            {/* Left Content */}
            <div className="lg:col-span-8 p-8 lg:p-20 flex flex-col justify-center relative">
                <div className="absolute top-10 left-10 font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] hidden sm:block">
                    [ Sector: Streetwear & Function ]
                </div>
                
                <h1 className="text-6xl md:text-[90px] lg:text-[110px] font-black leading-[0.85] tracking-tighter uppercase mb-8">
                    Cultură.<br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '2px #E2FF00' }}>Fără</span><br />
                    Filtru.
                </h1>
                
                <p className="max-w-md font-sans text-base text-white/60 leading-relaxed mb-12 border-l-2 border-[#E2FF00] pl-6 animate-[slide-right_0.5s_ease-out_forwards]">
                    Pentru generația care nu cere permisiune. Linii ascuțite, utilitarism urban și estetică brută. Nu vindem doar haine, distribuim identitate și curaj.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative z-20">
                    <button className="bg-[#E2FF00] text-black font-bold font-mono text-sm uppercase px-8 py-4 hover:bg-white transition tracking-wider shadow-[0_0_15px_rgba(226,255,0,0.3)]">
                        Explorează_Drop
                    </button>
                    <button className="border-2 border-white/20 text-white font-bold font-mono text-sm uppercase px-8 py-4 hover:border-white transition tracking-wider bg-black/50">
                        Join_Discord
                    </button>
                </div>
            </div>

            {/* Right Data / Visual Panel */}
            <div className="lg:col-span-4 border-l border-white/10 bg-[#050505] flex flex-col justify-between relative p-8 group">
                <div className="font-mono text-xs text-white/40 uppercase tracking-widest border-b border-white/10 pb-4 mb-8">
                    // Live_Metrics
                </div>
                
                <div className="space-y-6 flex-1">
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Status_Stoc</div>
                        <div className="text-2xl font-mono text-[#E2FF00]">CRITIC [14%]</div>
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Hype_Index</div>
                        <div className="text-2xl font-mono text-white">MAXIM_9.8</div>
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300 delay-150">
                        <div className="text-[10px] font-mono text-white/40 uppercase mb-1">User_Online</div>
                        <div className="text-2xl font-mono text-white line-through decoration-[#E2FF00]">1,402</div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                   <div className="w-full aspect-square border border-white/10 bg-black relative flex items-center justify-center overflow-hidden hover:border-[#E2FF00] transition-colors cursor-pointer">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"></div>
                       <div className="relative z-20 font-bold text-4xl text-white mix-blend-overlay group-hover:scale-110 transition-transform duration-500">
                           01
                       </div>
                   </div>
                   <div className="text-center font-mono text-[10px] text-white/50 uppercase mt-4 tracking-widest">
                       Preview_Item.01
                   </div>
                </div>
            </div>
        </main>
        
        {/* Footer Marquee */}
        <div className="border-t border-white/10 overflow-hidden whitespace-nowrap py-1.5 bg-[#E2FF00] text-black">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] inline-block pr-10">
                 WARNING: HIGH VOLTAGE STREETWEAR /// DO NOT TOUCH /// WARNING: HIGH VOLTAGE STREETWEAR /// DO NOT TOUCH /// WARNING: HIGH VOLTAGE STREETWEAR /// DO NOT TOUCH
            </div>
        </div>

      </div>
    </div>
  );
}
