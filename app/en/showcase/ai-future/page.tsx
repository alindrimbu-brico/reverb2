import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.ORBITAL | AI Tech Showcase",
};

export default function AIFutureShowcaseEN() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans overflow-hidden selection:bg-[#06B6D4] selection:text-[#030712]">
      
      {/* 3D Orb Effect via CSS */}
      <style>{`
        @keyframes rotateOrb { 0% { transform: rotateX(70deg) rotateZ(0deg); } 100% { transform: rotateX(70deg) rotateZ(360deg); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#06b6d4]/10 via-[#030712] to-[#030712]"></div>

      <header className="relative z-20 flex justify-between items-center p-8 backdrop-blur-sm">
         <div className="font-mono text-sm tracking-[-0.05em] font-bold flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border border-[#06B6D4] flex items-center justify-center">
               <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
            </span>
            NEURAL.CORE
         </div>
         <nav className="font-mono text-[10px] uppercase font-bold tracking-widest flex gap-8">
            <a href="#" className="hover:text-[#06B6D4] transition">Platform</a>
            <a href="#" className="hover:text-[#06B6D4] transition">Research</a>
            <a href="/en/showcase" className="text-white/40 hover:text-white transition">Matrix</a>
         </nav>
      </header>

      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">
         
         <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="inline-flex items-center gap-2 border border-[#06B6D4]/30 rounded-full px-4 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[#06B6D4] mb-8 bg-[#06B6D4]/5">
               <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span> 
               v3.0 Quantum Architecture Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-[float_6s_ease-in-out_infinite]">
               Vectorial<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#06B6D4]/40">Thinking.</span>
            </h1>
            
            <p className="font-mono text-xs leading-[1.8] text-white/50 max-w-md mb-12">
               We have moved past passive processing. Our models generate real-time spatial resolutions for data analytics at a previously unknown scale.
            </p>

            <div className="flex gap-4">
               <button className="bg-white text-[#030712] hover:bg-[#06B6D4] hover:text-white transition rounded-lg px-8 py-3.5 font-sans font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                  Start Engine
               </button>
               <button className="border border-white/20 bg-white/5 hover:bg-white/10 transition rounded-lg px-8 py-3.5 font-sans font-semibold text-sm">
                  Whitepaper API
               </button>
            </div>
         </div>

         {/* 3D Holographic CSS visual */}
         <div className="relative flex justify-center items-center h-[50vh] lg:h-auto overflow-hidden">
            <div className="relative w-full max-w-md aspect-square" style={{ perspective: '1000px' }}>
               
               {/* Glowing Center */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#06B6D4] rounded-full blur-[30px]"></div>

               {/* Rotating Rings */}
               <div className="absolute inset-x-10 inset-y-10 rounded-full border border-[#06B6D4]/40 animate-[rotateOrb_10s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#06B6D4] z-10" style={{ transform: 'rotateX(-70deg)' }}></div>
                  <div className="absolute -bottom-1.5 left-1/2 w-2 h-2 bg-[#06B6D4] rounded-full z-10" style={{ transform: 'rotateX(-70deg)' }}></div>
               </div>

               <div className="absolute inset-x-16 inset-y-16 rounded-full border border-white/20 animate-[rotateOrb_15s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }}></div>
               
               <div className="absolute inset-x-24 inset-y-24 rounded-full border border-[#06B6D4]/20 animate-[rotateOrb_8s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}></div>

               <div className="absolute w-full top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent"></div>
            </div>
         </div>

      </main>
    </div>
  );
}
