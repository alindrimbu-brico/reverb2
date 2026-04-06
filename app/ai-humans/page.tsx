import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Digital Human | Angajat Virtual pentru Afacerea Ta | Reverb",
  description: "Avatar AI care vorbește cu clienții tăi 24/7. Setup în 5 zile lucrătoare. Integrare pe orice site.",
};

const useCases = [
  {
    icon: "💼",
    title: "Agent Vânzări",
    desc: "Prezintă produsele, răspunde la obiecții și ghidează clientul spre finalizarea comenzii."
  },
  {
    icon: "🛎️",
    title: "Recepționist Virtual",
    desc: "Preia programările, oferă informații despre servicii și eliberează timpul echipei tale."
  },
  {
    icon: "👨‍💻",
    title: "Asistent Suport",
    desc: "Rezolvă FAQ-uri, clarifică retururile sau statusul comenzii, la orice oră din zi și noapte."
  }
];

const packages = [
  {
    name: "Starter",
    price: "€290",
    period: "/ lună",
    features: [
      "1 Avatar AI integrat",
      "Modelare cunoștințe de bază",
      "Până la 1000 conversații / lună",
      "Suport email"
    ],
    cta: "Vreau o demonstrație",
  },
  {
    name: "Growth",
    price: "€590",
    period: "/ lună",
    features: [
      "Avatar AI personalizat vizual",
      "Bază de cunoștințe avansată (URL/PDF)",
      "Conectare la platforme terțe (CRM)",
      "Până la 5000 conversații / lună"
    ],
    cta: "Vreau o demonstrație",
    recommended: true
  },
  {
    name: "Enterprise",
    price: "La cerere",
    period: "",
    features: [
      "Integrare backend completă",
      "Mai multe avatare pentru roluri diferite",
      "Conversații nelimitate",
      "Project Manager dedicat"
    ],
    cta: "Vreau o demonstrație",
  }
];

const faqs = [
  {
    q: "Cât durează implementarea?",
    a: "În medie, un setup complet durează 5 zile lucrătoare, incluzând antrenarea AI-ului pe datele afacerii tale."
  },
  {
    q: "Vorbește în română?",
    a: "Da, avatarele noastre procesează inteligent limba română (atât text, cât și voce/sinteză unde este aplicabil), respectând nuanțele limbajului local."
  },
  {
    q: "Pot personaliza aspectul?",
    a: "Absolut. De la un stil mai corporatist la unul casual, găsim un avatar care să se potrivească vizual cu brandul și valorile firmei tale."
  },
  {
    q: "Ce se întâmplă dacă clientul pune întrebări la care nu știe răspunsul?",
    a: "AI-ul este instruit să recunoască limita bazei de cunoștințe. Va prelua politicos datele clientului și va escalada conversația către un operator uman."
  }
];

export default function AIHumansPage() {
  return (
    <div className="bg-[#1a0533] min-h-screen text-white font-sans selection:bg-[#ec4899] selection:text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[#8b5cf6]/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ec4899]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-1.5 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6] animate-pulse"></span>
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-white/80">
              Powered by Nevronix AI
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-tight mb-8">
            Angajează <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] font-medium">primul tău angajat AI</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light tracking-wide leading-relaxed">
            Avatare inteligente care vorbesc, vând și răspund non-stop clienților tăi.<br className="hidden md:block"/> 
            Setat o dată. Funcțional 24/7.
          </p>
        </Reveal>

        <Reveal delay={240}>
           <div className="mt-12">
             <Link
               href="/contact?service=ai-digital-human"
               className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] px-10 py-5 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
             >
               Solicită o demonstrație
             </Link>
           </div>
        </Reveal>
      </section>

      {/* Video Demo Section */}
      <section className="relative px-6 lg:px-10 max-w-6xl mx-auto mb-32 z-10">
        <Reveal>
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(139,92,246,0.15)] flex justify-center items-center group">
              <div className="absolute inset-0 bg-[#1a0533]/80 group-hover:bg-[#1a0533]/60 transition-colors z-10 flex flex-col justify-center items-center">
                 <div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                 </div>
                 <p className="mt-6 text-sm uppercase tracking-[0.2em] font-medium text-white/50">Apasă pentru Demo</p>
              </div>
              {/* Placeholder Content inside Video Box */}
              <img 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                src="/video_demo.webp"
                alt="AI Digital Human Demo Video"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-[#ec4899]/20 pointer-events-none mix-blend-overlay"></div>
           </div>
        </Reveal>
      </section>

      {/* Ce poate face - Use Cases */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto py-24 border-t border-white/10 relative">
        <Reveal>
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Ce poate face pentru tine?</h2>
           </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
             <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:-translate-y-2">
                   <div className="text-4xl mb-6">{useCase.icon}</div>
                   <h3 className="text-2xl font-medium tracking-wide text-white mb-4">{useCase.title}</h3>
                   <p className="text-white/60 font-light leading-relaxed">{useCase.desc}</p>
                </div>
             </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="px-6 lg:px-10 max-w-5xl mx-auto py-24 text-center">
         <Reveal>
            <div className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-12 lg:p-24 backdrop-blur-sm">
               <div className="text-[#ec4899] text-6xl opacity-50 absolute top-8 left-12">"</div>
               <p className="text-2xl md:text-4xl font-light text-white leading-snug relative z-10 italic">
                  Prima săptămână am economisit 12 ore de suport client. Este pur și simplu neobosit.
               </p>
               <div className="mt-10 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20"></div>
                  <div className="text-left">
                     <div className="text-sm font-medium text-white">Antreprenor E-commerce</div>
                     <div className="text-xs text-white/50">Partener Reverb</div>
                  </div>
               </div>
            </div>
         </Reveal>
      </section>

      {/* Pachete si Pricing */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto py-24">
        <Reveal>
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">Investiția în Viitor</h2>
              <p className="text-white/50 font-light max-w-lg mx-auto">Structuri de cost previzibile pentru forța ta de muncă digitală.</p>
           </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
           {packages.map((pkg, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                 <div className={`relative flex flex-col h-full bg-white/5 rounded-3xl backdrop-blur-md p-10 transition-all ${pkg.recommended ? 'border-2 border-[#8b5cf6] shadow-[0_0_30px_rgba(139,92,246,0.2)]' : 'border border-white/10 hover:border-white/20'}`}>
                    {pkg.recommended && (
                       <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b5cf6] text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full text-white">
                          Cel mai ales
                       </div>
                    )}
                    <h3 className="text-xl font-light tracking-wide text-white mb-2">{pkg.name}</h3>
                    <div className="mb-8 flex items-baseline gap-2">
                       <span className="text-4xl font-medium text-white">{pkg.price}</span>
                       <span className="text-white/40 text-sm">{pkg.period}</span>
                    </div>

                    <ul className="space-y-4 mb-12 flex-1">
                       {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-[15px] font-light text-white/70">
                             <span className="text-[#8b5cf6] mt-0.5">✦</span>
                             {feature}
                          </li>
                       ))}
                    </ul>

                    <Link
                       href="/contact?service=ai-digital-human"
                       className={`w-full block text-center py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${pkg.recommended ? 'bg-[#8b5cf6] text-white hover:bg-[#7c3aed]' : 'bg-transparent border border-white/20 text-white hover:bg-white/10'}`}
                    >
                       {pkg.cta}
                    </Link>
                 </div>
              </Reveal>
           ))}
        </div>
      </section>

      {/* FAQ Secțiune */}
      <section className="px-6 lg:px-10 max-w-4xl mx-auto py-24 mb-20 border-t border-white/10">
         <Reveal>
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">Întrebări frecvente</h2>
            </div>
         </Reveal>

         <div className="space-y-6">
            {faqs.map((faq, idx) => (
               <Reveal key={idx} delay={idx * 50}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                     <h4 className="text-lg font-medium text-white mb-3">{faq.q}</h4>
                     <p className="text-white/60 font-light leading-relaxed">{faq.a}</p>
                  </div>
               </Reveal>
            ))}
         </div>
      </section>

    </div>
  );
}
