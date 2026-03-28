import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reverb — Design Care Trăiește",
  description:
    "Execuție digitală pentru IMM-uri. Construim prezență online care inspiră încredere și generează cereri. Website + structură + AI. Fără jargon. Fără haos.",
};

/* ── Services preview ── */
const services = [
  {
    title: "Prezență Online",
    desc: "Un site corect, care respiră încredere.",
    text: "Website modern, structură orientată pe conversie și integrare organică a instrumentelor.",
    href: "/servicii",
    anim: "float-a",
  },
  {
    title: "Clienți Locali",
    desc: "Telefonul să sune. Cereri constante.",
    text: "Focusăm atenția pe rezultate reale clare: SEO local + Ads + tracking apeluri.",
    href: "/servicii",
    anim: "float-b",
  },
  {
    title: "Magazin Digital",
    desc: "Vânzări online, empatice.",
    text: "Magazin care nu frustrează clientul, categorii clare și integrare plăți fluentă.",
    href: "/magazine-online",
    anim: "float-c",
  },
  {
    title: "Promovare Continuă",
    desc: "Evoluție stabilă, nu haos.",
    text: "Ads, optimizare și raportare lunară umană. Păstrăm structura și continuăm creșterea.",
    href: "/servicii",
    anim: "float-a",
  },
];

/* ── Pricing ── */
const packages = [
  {
    name: "Prezență Online",
    label: "Fundația digitală",
    price: "€990",
    delivery: "Livrare: 7–14 zile",
    features: [
      "Website 3–7 pagini care trăiește digital",
      "Formular contact + WhatsApp interactiv",
      "SEO de bază + setare Google Business",
    ],
    cta: "Solicită ofertă",
    href: "/contact",
    recommended: false,
    anim: "float-b",
    delay: "0s"
  },
  {
    name: "Clienți Locali",
    label: "Focusul nostru",
    price: "€1.790",
    delivery: "Setup clar (30 zile)",
    features: [
      "Landing pagină vie + SEO local focalizat",
      "Ads umane pe Google + Meta local",
      "Tracking formulare fără erori tehnice",
    ],
    extra: "Parteneriat lunar: €490 / lună (+ buget)",
    cta: "Hai să discutăm",
    href: "/contact",
    recommended: true,
    anim: "float-c",
    delay: "0.5s"
  },
  {
    name: "AI Sprint",
    label: "7 zile rapide",
    price: "€790",
    delivery: "Livrare: directă",
    features: [
      "Creier uman + putere AI brută",
      "Concepte vizuale, organice, cu puls",
      "10 scheme campanii umane",
    ],
    cta: "Lansez un Sprint",
    href: "/contact",
    recommended: false,
    anim: "float-a",
    delay: "1s"
  },
];

export default function HomePage() {
  return (
    <div 
      className="bg-[#1a0533] text-white font-sans overflow-x-hidden selection:bg-[#ec4899] selection:text-white"
      style={{ background: "linear-gradient(135deg, #1a0533 0%, #2d0a4e 50%, #0f1a3d 100%)" }}
    >
      
      <style>{`
        @keyframes morph-blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(45deg); }
        }
        @keyframes grad-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-a {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-b {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(-1deg); }
        }
        @keyframes float-c {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(15px) rotate(0.5deg); }
        }
        @keyframes flow-down {
          0% { height: 0; opacity: 1; border-color: #8b5cf6; }
          80% { height: 100%; opacity: 1; border-color: #ec4899; }
          100% { height: 100%; opacity: 0; }
        }
        
        /* Glassmorphism custom focus group */
        .glass-focus-group:hover > div:not(:hover) {
          filter: blur(5px) saturate(50%);
          opacity: 0.4;
          transform: scale(0.97);
        }
        .glass-focus-item {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-focus-item:hover {
          transform: translateY(-10px) scale(1.02);
          z-index: 10;
          box-shadow: 0 40px 80px rgba(236, 72, 153, 0.2);
          border-color: rgba(236,72,153, 0.5);
          background: rgba(255,255,255, 0.12);
        }
      `}</style>

      {/* Morphing ambient layer (Global fixed) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -right-[20%] -top-[20%] h-[1000px] w-[1000px] opacity-[0.15]"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, #6d28d9 40%, transparent 70%)",
            animation: "morph-blob 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[20%] -left-[10%] h-[800px] w-[800px] opacity-[0.15]"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, #be185d 40%, transparent 70%)",
            animation: "morph-blob 22s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Hero Section — Design Care Trăiește (Morph Style) */}
      <section className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="mx-auto max-w-7xl px-8 py-20 lg:px-16 flex flex-col items-center text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2 bg-white/5 backdrop-blur-md">
               <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse"></span>
               <span className="text-[10px] uppercase tracking-[0.3em] text-[#c4b5fd] font-bold">
                  Reverb.ro | Powered by Zylaris Group
               </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-6xl text-6xl font-medium leading-[1.0] tracking-[-0.04em] md:text-[100px] lg:text-[120px]">
              Design care<br/>
              <span className="bg-gradient-to-r from-[#c4b5fd] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%", animation: "grad-shift 4s ease infinite" }}>
                trăiește.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/50 font-light mix-blend-screen">
              Construim prezențe online care inspiră încredere și generează cereri, eliminând frustrarea tehnică. Ecosisteme autonome purtate de empatie (Reverb) și expertiză inginerească (Zylaris). Fără jargon. Fără haos.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row items-center justify-center">
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-[#8b5cf6] px-10 py-5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">Discută uman cu noi <span className="group-hover:translate-x-1 transition-transform">→</span></span>
              </Link>
              <Link
                href="/servicii"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-10 py-5 text-sm font-semibold text-white/70 transition-all hover:border-white/30 hover:text-white"
              >
                Portofoliu Organic
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-20 flex justify-center w-full">
               <div className="h-24 w-px bg-white/10 relative overflow-hidden blur-[1px]">
                  <div className="absolute top-0 left-0 w-full animate-[flow-down_3s_ease-in-out_infinite] border-l-2"></div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Manifest - Oamenii din spate */}
      <section className="relative z-10 border-y border-white/5 bg-[#0f1a3d]/40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 relative">
                 <div className="absolute -left-20 top-20 w-64 h-64 bg-[#ec4899] opacity-20 blur-[100px] pointer-events-none"></div>
                 <Reveal>
                    <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#c4b5fd]/60 mb-6">Manifestul Nostru</div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1] text-white mb-8">
                       Sistemul<br/>Viului Digital.
                    </h2>
                    <p className="text-white/50 leading-relaxed font-light mb-8 max-w-sm">
                       Tehnologia este doar un vehicul. Fără un creier uman care să traducă nevoia în ecosisteme, orice linie de cod devine irelevantă pentru afacerea ta.
                    </p>
                 </Reveal>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 glass-focus-group">
                 {[
                    { nr: "01", t: "Suntem umani", d: "Tehnologia este unealtă. Relația, strategia și decizia sunt complet organice." },
                    { nr: "02", t: "Suntem oameni", d: "Comunicăm fără aere tehnologice. Îți răspunde un partener de afaceri, nu un portal." },
                    { nr: "03", t: "Suntem clari", d: "Când privim grafice, le reducem la o singură linie de direcție. Profitul rapid e simplu." },
                    { nr: "04", t: "Suntem focusați", d: "Livrăm prezență care vinde, cu zero pierderi de energie (noise vizual)." },
                    { nr: "05", t: "Continuăm", d: "Un design viu nu este terminat la 'lansare'. Se ajustează și pulsează odată cu tine." },
                    { nr: "06", t: "Fundamentul Zylaris", d: "Spiritul și agilitatea Reverb lucrează non-stop, susținute tehnic de infrastructura și expertiza unui grup corporatist robust: Zylaris." },
                 ].map((box, i) => (
                    <Reveal key={box.nr} delay={i * 50}>
                       <div className="glass-focus-item p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col justify-between cursor-default min-h-[200px]">
                          <div className="text-[10px] font-mono font-bold tracking-widest text-[#ec4899]/60">{box.nr}</div>
                          <div className="mt-8">
                             <h4 className="font-semibold text-lg text-white mb-3">{box.t}</h4>
                             <p className="text-sm text-white/50 leading-relaxed">{box.d}</p>
                          </div>
                       </div>
                    </Reveal>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Services cu Focus Floating (Morph Edition) */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
        <Reveal>
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c4b5fd]/60">Vectori de Creștere</div>
              <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl text-white max-w-2xl">
                Claritate absolută<br/>în execuție.
              </h2>
            </div>
            <p className="mt-6 md:mt-0 max-w-sm text-sm leading-relaxed text-white/50 border-l border-[#8b5cf6]/30 pl-4">
               Îți captăm atenția spre exact nevoile tale organice. Elemente de design care plutesc spre obiectiv.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <Link
                href={service.href}
                className="block rounded-3xl border border-white/10 bg-white/5 p-10 hover:bg-white/10 backdrop-blur-md transition-all duration-700"
                style={{ animation: `${service.anim} ${6 + i}s ease-in-out infinite` }}
              >
                <div className="mb-8 text-[10px] uppercase font-bold tracking-widest text-[#ec4899]/80 flex justify-between">
                   <span>/0{i+1}</span>
                   <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse"></span>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-white mb-3">{service.title}</h3>
                <p className="text-sm font-semibold text-[#c4b5fd] mb-6">{service.desc}</p>
                <p className="text-[15px] leading-relaxed text-white/50 border-t border-white/10 pt-6">{service.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pachete de pret (Floating Cards / Morph) */}
      <section className="relative z-10 bg-[#0c051a]/60 border-y border-white/5 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-16 lg:py-32">
           <Reveal>
             <div className="text-center mb-20">
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ec4899]/60 mb-4">Investiția Tastă / Continuăm</div>
               <h2 className="text-4xl font-medium tracking-tight md:text-6xl text-white">
                 Pachete Umane.<br/>
                 <span className="italic text-white/50">Livrări Concrete.</span>
               </h2>
             </div>
           </Reveal>

           <div className="grid gap-8 md:grid-cols-3">
             {packages.map((pkg, i) => (
               <Reveal key={pkg.name} delay={i * 80}>
                 <div
                   className={`relative h-full flex flex-col justify-between rounded-3xl border p-10 transition-all duration-500 backdrop-blur-md ${
                     pkg.recommended
                       ? "border-[#ec4899]/50 bg-[#ec4899]/10 shadow-[0_0_40px_rgba(236,72,153,0.15)]"
                       : "border-white/10 bg-white/5"
                   }`}
                   style={{ animation: `${pkg.anim} ${5 + i}s ease-in-out infinite`, animationDelay: pkg.delay }}
                 >
                   {pkg.recommended && (
                     <div className="absolute -top-4 left-10 rounded-full bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                       Focusul Nostru
                     </div>
                   )}
                   
                   <div>
                      <div className={`text-[11px] font-bold uppercase tracking-widest ${pkg.recommended ? "text-[#f0abfc]" : "text-white/40"}`}>
                        {pkg.label}
                      </div>
                      <h3 className="mt-4 text-3xl font-medium text-white">{pkg.name}</h3>
                      <div className="mt-6 mb-4 border-b border-white/10" />
                      
                      <div className="text-5xl font-light tracking-[-0.04em] mb-2 text-white">
                        {pkg.price}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-white/50">
                        {pkg.delivery}
                      </div>

                      <ul className="mt-10 space-y-4">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-[14px] leading-snug text-white/70">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${pkg.recommended ? "bg-[#ec4899]" : "bg-[#8b5cf6]"}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                   </div>

                   <div className="mt-12">
                      <Link
                        href={pkg.href}
                        className={`block w-full text-center rounded-full px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 ${
                          pkg.recommended
                            ? "bg-[#ec4899] text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                            : "bg-white/10 text-white hover:bg-white/30"
                        }`}
                      >
                        {pkg.cta}
                      </Link>
                   </div>
                 </div>
               </Reveal>
             ))}
           </div>
        </div>
      </section>

      {/* Completare - CTA / Footing minimal morph */}
      <section className="relative z-10 mx-auto max-w-7xl px-8 py-32 lg:px-16 text-center">
         <Reveal>
            <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-[#8b5cf6] to-[#ec4899] rounded-full blur-[20px] mb-8 animate-[morph-blob_5s_infinite]"></div>
            <h2 className="text-5xl font-light tracking-[-0.04em] md:text-7xl mb-8">
               Design ce nu doarme.
            </h2>
            <Link
               href="/contact"
               className="inline-flex items-center justify-center rounded-full border border-[#ec4899] px-10 py-5 text-[12px] uppercase tracking-widest font-bold text-[#ec4899] transition hover:bg-[#ec4899] hover:text-white"
            >
               Sincronizează Reverb
            </Link>
         </Reveal>
      </section>
      
    </div>
  );
}
