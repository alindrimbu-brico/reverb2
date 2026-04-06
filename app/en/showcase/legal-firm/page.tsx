import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SYS.LEGAL_LOGIC | Legal Firm Showcase",
};

export default function LegalFirmShowcaseEN() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#121212] font-sans selection:bg-[#8B2520] selection:text-[#E5E5E5]">
         
      <style>{`
        @keyframes line-cut { 0% { width: 0; } 100% { width: 100%; } }
        @keyframes text-reveal-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Heavy Brutalist Header */}
      <header className="fixed top-0 w-full z-40 bg-[#E5E5E5] border-b-2 border-[#121212] flex justify-between items-center px-6 lg:px-12 py-5">
         <div className="font-mono text-sm lg:text-base font-bold tracking-tight text-[#121212]">
            [JURIDIC.SYS]
         </div>
         <nav className="hidden md:flex gap-10 font-bold uppercase text-xs tracking-[0.1em]">
            <a href="#" className="hover:text-[#8B2520] transition">Practice Areas</a>
            <a href="#" className="hover:text-[#8B2520] transition">Partner Lawyers</a>
            <a href="#" className="hover:text-[#8B2520] transition">Publications</a>
         </nav>
         <button className="bg-[#121212] text-[#E5E5E5] px-6 py-2.5 font-bold uppercase text-[10px] tracking-widest hover:bg-[#8B2520] transition">
            Consulting
         </button>
      </header>

      {/* Main Layout */}
      <main className="pt-24 lg:pt-32 min-h-screen flex flex-col px-6 lg:px-12 pb-12">
         
         <div className="flex-1 flex flex-col justify-center relative">
            {/* Infinite Horizontal Cut Line */}
            <div className="absolute top-[52%] left-[-10vw] w-[120vw] h-[3px] bg-[#8B2520] origin-left animate-[line-cut_1.2s_cubic-bezier(0.77,0,0.175,1)_forwards] z-0"></div>

            <div className="relative z-10 text-center mix-blend-difference pointer-events-none">
               <h1 className="text-[14vw] font-black leading-[0.8] tracking-tighter uppercase text-[#E5E5E5] opacity-0 animate-[text-reveal-up_0.8s_ease-out_0.6s_forwards]">
                  Truth by<br/>Structure.
               </h1>
            </div>
         </div>

         {/* Bottom Data Modules */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t-2 border-[#121212] pt-10 opacity-0 animate-[text-reveal-up_0.8s_ease-out_1s_forwards]">
            
            <div className="flex flex-col">
               <div className="font-mono text-[10px] text-[#121212]/50 uppercase tracking-[0.2em] mb-2 font-bold">Litigation Success Rate</div>
               <div className="text-6xl font-black tracking-tighter text-[#8B2520]">98.7%</div>
               <p className="mt-5 text-[15px] font-medium leading-relaxed max-w-sm text-[#121212]/80">
                  We don't take cases to test the waters. We execute legal logic with brute force to ensure justice.
               </p>
            </div>

            <div className="flex flex-col md:border-l-2 border-[#121212]/20 md:pl-8">
               <div className="font-mono text-[10px] text-[#121212]/50 uppercase tracking-[0.2em] mb-2 font-bold">Resolved Cases [2024]</div>
               <div className="text-6xl font-black tracking-tighter text-[#121212]">1024</div>
               <p className="mt-5 text-[15px] font-medium leading-relaxed max-w-sm text-[#121212]/80">
                  Commercial Arbitration. Corporate Law. Mergers & Acquisitions. Data processed and won flawlessly.
               </p>
            </div>

            <div className="flex flex-col items-start md:items-end justify-end md:text-right md:border-l-2 border-[#121212]/20 md:pl-8 mt-10 md:mt-0">
               <Link href="/en/showcase" className="border-b-2 border-[#121212] pb-1 font-bold text-sm uppercase tracking-widest hover:text-[#8B2520] hover:border-[#8B2520] transition">
                 ← Showcase Matrix
               </Link>
               <div className="mt-8 font-mono text-[10px] font-bold text-[#121212]/30 tracking-widest uppercase">
                  LEGAL.SYS // SECURE CONNECTION
               </div>
            </div>

         </div>

      </main>
    </div>
  );
}
