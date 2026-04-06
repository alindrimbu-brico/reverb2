import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SYS.TERMINAL | Cyber Sec Showcase",
};

export default function CyberSecShowcase() {
  return (
    <div className="min-h-screen bg-[#000500] text-[#00FF41] font-mono selection:bg-[#00FF41] selection:text-[#000500]">
      <style>{`
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
      
      {/* Old CRT Monitor Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-screen opacity-10">
        <div className="w-full h-8 bg-gradient-to-b from-transparent via-[#00FF41] to-transparent animate-[scanline_3s_linear_infinite]"></div>
      </div>
      
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
         backgroundImage: 'linear-gradient(rgba(0,255,65,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.05) 1px, transparent 1px)',
         backgroundSize: '30px 30px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col min-h-screen border-l border-r border-[#00FF41]/20">
        
        <header className="flex justify-between items-end border-b border-[#00FF41]/30 pb-4 mb-16">
           <div>
              <h1 className="text-2xl font-bold tracking-tight">NULL_SEC_SOLUTIONS</h1>
              <div className="text-[10px] mt-1 opacity-70">Establishing secure connection... <span className="animate-pulse">DONE</span></div>
           </div>
           <nav className="hidden md:flex gap-8 text-xs uppercase">
              <span className="hover:text-white cursor-pointer transition">[ SERVICES ]</span>
              <span className="hover:text-white cursor-pointer transition">[ THREAT MAP ]</span>
              <span className="hover:text-white cursor-pointer transition">[ CONTACT ]</span>
           </nav>
        </header>

        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 item-center items-center">
           <div>
              <div className="text-[10px] uppercase tracking-widest opacity-60 mb-4">{`> INITIALIZING DEFENSE PROTOCOL`}</div>
              <h2 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
                 Zero<br/>Trust<br/>Architecture<span className="animate-[blink_1s_infinite]">_</span>
              </h2>
              <p className="text-[#00FF41]/70 leading-relaxed max-w-md mb-10 h-24">
                 {`Defend against the evolving threat landscape. Advanced behavioral analytics, real-time threat intelligence, and automated remediation at wire-speed.`}
              </p>
              
              <div className="flex gap-4">
                 <button className="border border-[#00FF41] bg-[#00FF41]/10 px-8 py-4 text-xs font-bold uppercase hover:bg-[#00FF41] hover:text-[#000500] transition">
                    Run Diagonstics
                 </button>
                 <Link href="/showcase" className="border border-[#00FF41]/30 px-8 py-4 text-xs uppercase hover:bg-white/5 transition flex items-center justify-center">
                    Return to Matrix
                 </Link>
              </div>
           </div>

           {/* Data Terminal Visual */}
           <div className="border border-[#00FF41]/30 bg-[#000A00] p-6 relative">
              <div className="absolute top-0 right-0 bg-[#00FF41]/20 p-2 text-[8px]">LIVE FEED</div>
              <div className="space-y-2 text-xs opacity-80 mt-4 mb-12">
                 <div>{`> user@sys:~$ nmap -sS 192.168.1.0/24`}</div>
                 <div>{`Starting Nmap 7.92 ( https://nmap.org )`}</div>
                 <div className="text-[#00FF41]/40">{`Nmap scan report for host1 (192.168.1.101)`}</div>
                 <div className="text-[#00FF41]/40">{`Host is up (0.0012s latency).`}</div>
                 <div>{`Not shown: 998 closed tcp ports`}</div>
                 <div>{`PORT     STATE SERVICE`}</div>
                 <div className="text-red-500 font-bold">{`22/tcp   open  ssh`}</div>
                 <div>{`80/tcp   open  http`}</div>
                 <div className="mt-4">{`> FIREWALL INTERVENTION REQ... `}<span className="text-red-500 animate-[blink_1s_infinite]">BLOCK_IP</span></div>
              </div>
              <div className="w-full bg-[#00FF41]/10 h-1">
                 <div className="bg-[#00FF41] h-1 w-3/4 animate-pulse"></div>
              </div>
           </div>
        </main>
        
        <footer className="mt-auto border-t border-[#00FF41]/30 pt-4 flex justify-between text-[10px] opacity-50">
           <div>SYS.V.2.0.4.1</div>
           <div>ENCRYPTED CONNECTION</div>
        </footer>
      </div>
    </div>
  );
}
