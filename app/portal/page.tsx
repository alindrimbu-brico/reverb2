import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reverb Portal | Access Clienți",
  description: "Autentificare securizată pentru clienții Reverb.ro",
};

export default function ClientPortal() {
  return (
    <div 
      className="min-h-screen bg-[#1a0533] text-white font-sans overflow-hidden selection:bg-[#ec4899] selection:text-white flex items-center justify-center relative"
      style={{ background: "linear-gradient(135deg, #1a0533 0%, #2d0a4e 50%, #0f1a3d 100%)" }}
    >
      <style>{`
        @keyframes morph-blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(45deg); }
        }
        @keyframes slide-in-top {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -left-[10%] -top-[10%] h-[800px] w-[800px] opacity-[0.2]"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, #6d28d9 40%, transparent 70%)",
            animation: "morph-blob 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-[10%] -bottom-[10%] h-[600px] w-[600px] opacity-[0.2]"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, #be185d 40%, transparent 70%)",
            animation: "morph-blob 15s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Navbar Minimală Orizontală pt Portal */}
      <header className="absolute top-0 w-full p-8 z-20 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-[-0.04em] flex items-center gap-2 hover:opacity-70 transition">
           <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-pulse"></div>
           Reverb<span className="text-[#8b5cf6]">Hub</span>
        </Link>
        <Link href="/" className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 hover:text-white transition border-b border-transparent hover:border-white pb-1">
           Înapoi la Site
        </Link>
      </header>

      {/* Login Box */}
      <main className="relative z-10 w-full max-w-md p-6 h-full flex flex-col justify-center animate-[slide-in-top_1s_ease-out]">
        
        <div className="text-center mb-10">
           <h1 className="text-3xl lg:text-4xl font-medium tracking-tight mb-3">Conectare Spațiu Client</h1>
           <p className="text-sm text-white/60 font-light">Monitorizează progresul proiectului, campaniile sau facturile lunare active.</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           
           {/* Formular Tradițional */}
           <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                 <label className="block text-[10px] uppercase font-bold tracking-widest text-[#c4b5fd] mb-2 pl-2">Email Address</label>
                 <input 
                    type="email" 
                    placeholder="nume@companie.ro" 
                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] transition-all"
                 />
              </div>
              
              <div>
                 <div className="flex justify-between items-end mb-2 pl-2 pr-2">
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-[#c4b5fd]">Password</label>
                    <a href="#" className="text-[10px] text-white/40 hover:text-[#ec4899] transition cursor-pointer">Reinițializare Parolă</a>
                 </div>
                 <input 
                    type="password" 
                    placeholder="••••••••••••" 
                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] transition-all"
                 />
              </div>

              <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] hover:opacity-90 transition-opacity text-white rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(236,72,153,0.3)] mt-4">
                 Sign In
              </button>
           </form>

           {/* Divider */}
           <div className="flex items-center my-8">
              <div className="flex-1 border-t border-white/10"></div>
              <div className="px-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">Sau Autentificare Securizată</div>
              <div className="flex-1 border-t border-white/10"></div>
           </div>

           {/* Social Oauth Buttons */}
           <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-3 w-full bg-white text-black hover:bg-white/90 transition-all rounded-2xl px-6 py-3 text-sm font-semibold">
                 {/* Google SVG simplu */}
                 <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                 </svg>
                 Continue cu Google workspace
              </button>
              
              <button className="flex items-center justify-center gap-3 w-full bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2]/30 transition-all rounded-2xl px-6 py-3 text-sm font-semibold">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                 Continue cu Facebook
              </button>
              
              <button className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all rounded-2xl px-6 py-3 text-sm font-semibold">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                 Continue cu GitHub
              </button>
           </div>
           
           <div className="mt-8 text-center text-xs text-white/40">
              Securizat de platforma internă Reverb/Zylaris. Accesele nemotivate sunt logate.
           </div>

        </div>
      </main>

    </div>
  );
}
