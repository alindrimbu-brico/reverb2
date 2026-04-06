import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Clarity",
  description:
    "Ecosisteme digitale executate cu inginerie robustă, comunicate cu claritate umană pură. Construim instrumente care funcționează perfect, din prima.",
};

/* ── Tab Layout Services ── */
const services = [
  {
    title: "Prezență Controlată",
    desc: "Nu presupunem nimic.",
    text: "Paginile noastre sunt arhitecturi de conversie. Aplicăm strategii bazate pe date, logate tehnic dintr-o singură privire, dar livrate vizual într-un mediu profund empatic, care îți întâmpină clientul exact cum așteaptă.",
    href: "/servicii",
    anim: "float-a"
  },
  {
    title: "Claritate în Date",
    desc: "Clienții nu apar din neant.",
    text: "Ads și SEO local executate pe o structură testată în mii de iterații de corporație, dar comunicată ție într-o discuție umană, transparentă. Îți arătăm linia dintre vizitator și profit cu zero jargon tehnic.",
    href: "/servicii",
    anim: "float-b"
  },
  {
    title: "Reticul de Vânzări",
    desc: "E-Commerce Implacabil.",
    text: "Magazine online unde fluxul de checkout este studiat cognitiv. Sistemele stau pe o fundație inginerească robustă, servere optimizate și securitate completă, garantând un proces fluent pentru cumpărător.",
    href: "/magazine-online",
    anim: "float-c"
  },
  {
    title: "Management Operațional",
    desc: "Tu scalezi, noi menținem.",
    text: "Asigurăm o mentenanță permanentă a ecosistemului tău. Fără întreruperi. Ai pacea mintală pe care o oferă certitudinea că un întreg aparat tehnic solid veghează asupra platformelor tale zi și noapte.",
    href: "/servicii",
    anim: "float-a"
  },
  {
    title: "AI Digital Human",
    desc: "Angajatul tău virtual, activ 24/7.",
    text: "Integram avatare AI inteligente capabile să interacționeze, să vândă și să ofere suport clienților tăi în timp real. O structură bazată pe Nevronix, concepută să degreveze echipa ta.",
    href: "/ai-humans",
    anim: "float-b",
    badge: "NOU"
  },
];

/* ── Structured Pricing ── */
const packages = [
  {
    name: "Fundația Digitală",
    label: "Structura de Pornire",
    price: "€990",
    delivery: "Arhitectură în: 7–14 zile",
    features: [
      "Interfață matură, executată 100% corect tehnic",
      "Experiență de contact impecabilă (WhatsApp logic)",
      "Setările tehnice Google fundamentale",
    ],
    cta: "Discută Structura",
    href: "/checkout",
    recommended: false,
    anim: "float-b",
    delay: "0s"
  },
  {
    name: "Clienți Locali Optimizat",
    label: "Ecosistemul Eficientizării",
    price: "€1.790",
    delivery: "Sistem operațional: 30 zile",
    features: [
      "Pagină pur de conversie + SEO focusat local",
      "Motoarele Google & Meta Ads configurate sigur",
      "Bază de date internă pentru gestiunea interacțiunilor",
    ],
    extra: "Mentenanță & Operare: €490 / lună",
    cta: "Alege Pace Mintală",
    href: "/checkout",
    recommended: true,
    anim: "float-c",
    delay: "0.5s"
  },
  {
    name: "Concept Sprint AI",
    label: "Validare rapidă",
    price: "€790",
    delivery: "Mapare logică: 7 zile",
    features: [
      "Integrarea inteligenței AI în procesele tale",
      "Prototip vizual empatic, creat cu structură",
      "10 seturi schematice de atragere clienți noi",
    ],
    cta: "Inițiază Sprint",
    href: "/checkout",
    recommended: false,
    anim: "float-a",
    delay: "1s"
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731] font-sans selection:bg-[#1d2731] selection:text-[#f5f1ea] overflow-x-hidden">
      

      {/* Hero Section — Structură și Claritate */}
      <section className="relative min-h-[90vh] flex flex-col justify-center py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
           
           <div className="lg:col-span-12 w-full text-center flex flex-col items-center">
             <Reveal>
               <div className="mb-6 inline-flex items-center gap-3 border border-[#1d2731]/10 rounded-full px-5 py-1.5 bg-white/50 backdrop-blur-sm float-badge" style={{ animation: "float-d 5s ease-in-out infinite" }}>
                 <span className="w-1.5 h-1.5 rounded-full bg-[#1d2731] animate-pulse"></span>
                 <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#1d2731]/70">
                   Infrastructură corporativă. Interfață umană.
                 </span>
               </div>
             </Reveal>

             <Reveal delay={80}>
               <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[0.98] text-[#1d2731]" style={{ animation: "float-a 8s ease-in-out infinite" }}>
                 Clarity
               </h1>
             </Reveal>

             <Reveal delay={160}>
               <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[#1d2731]/60 font-extralight tracking-wide leading-relaxed" style={{ animation: "float-b 7s ease-in-out infinite" }}>
                 Construim prezențe online și ecosisteme de conversie complet transparente. Folosim procese inginerești scalate la mii de teste, adaptate la esența ta umană. <strong className="font-normal opacity-70">Fără jargon. Cu totală claritate operațională.</strong> 
               </p>
             </Reveal>

             <Reveal delay={240}>
               <div className="mt-12 flex flex-col gap-4 sm:flex-row w-full justify-center">
                 <Link
                   href="/contact"
                   className="inline-flex items-center justify-center rounded-full bg-[#1d2731] px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-[#f5f1ea] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(29,39,49,0.2)] float-button delay-1"
                 >
                   OBȚINE CLARITATEA AFACERII TALE →
                 </Link>
                 <Link
                   href="/showcase"
                   className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#1d2731]/20 bg-white/30 backdrop-blur-sm px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-[#1d2731]/80 hover:bg-white/80 hover:border-[#1d2731]/40 transition-all duration-300 hover:-translate-y-1 float-button delay-2"
                 >
                   PORTOFOLIU STRUCTURAT (18 MODELE)
                 </Link>
               </div>
             </Reveal>
           </div>
           
           {/* Decorative elegant background pattern */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] opacity-[0.03] pointer-events-none mix-blend-multiply flex justify-center items-center">
              <div className="w-[1px] h-full bg-[#1d2731] absolute left-1/4"></div>
              <div className="w-[1px] h-full bg-[#1d2731] absolute left-2/4"></div>
              <div className="w-[1px] h-full bg-[#1d2731] absolute left-3/4"></div>
              <div className="h-[1px] w-full bg-[#1d2731] absolute top-1/4"></div>
              <div className="h-[1px] w-full bg-[#1d2731] absolute top-2/4"></div>
              <div className="h-[1px] w-full bg-[#1d2731] absolute top-3/4"></div>
           </div>

        </div>
      </section>

      {/* Manifestul Filosofic: Mașinărie x Suflet */}
      <section className="bg-white/40 border-y border-[#1d2731]/5 py-24 md:py-32 relative overflow-hidden backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
           <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
             
             <div className="lg:col-span-5 sticky top-32">
               <Reveal>
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1d2731]/40 mb-5">
                    Modul de Operare
                 </div>
                 <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1] text-[#1d2731] mb-8">
                   Mașinăria complexă.<br/>
                   <span className="text-[#1d2731]/40">Interfața clară.</span>
                 </h2>
                 <p className="text-[#1d2731]/60 leading-relaxed font-extralight tracking-wide text-lg">
                   Îți ascultăm idealurile la fel de atent ca pe o conversație cu un prieten, dar din culise lansăm strategii validate matematic. Liniștea ta este garanția structurii noastre corporative, aplicată uman.
                 </p>
               </Reveal>
             </div>

             <div className="lg:col-span-7 grid gap-6 tab-blur-group">
               {[
                 { 
                   nr: "01", t: "Logica de Fond (Rigurozitatea)", 
                   d: "Aplicăm sisteme testate de procesare. Design-ul website-ului tău nu e făcut 'vizual frumos' la întâmplare, ci construit pe un schelet ingineresc masiv de achiziție de clienți. Operăm cu o procedură fermă unde nimic nu este lăsat la ghici.",
                   anim: "float-a"
                 },
                 { 
                   nr: "02", t: "Pacea Mintală (Claritatea)", 
                   d: "Tu primești mereu traducerea umană a acestei puteri software. Oferim o comunicare transparentă, grafice ce indică direct profitul. Ești un antreprenor care știe mereu controlat care e următorul pas. Liniștea e produsul final.",
                   anim: "float-b"
                 },
                 { 
                   nr: "03", t: "Fluiditate în Execuție", 
                   d: "O interfață care trăiește necesită o dezvoltare susținută. Noi nu dăm un produs și dispărem. Departamentele noastre monitorizează continuu securitatea serverelor și fluxurile de vizitatori. Prevenția tehnică înseamnă operare liniștită.",
                   anim: "float-c"
                 },
               ].map((box, i) => (
                 <Reveal key={box.nr} delay={i * 80}>
                   <div className="relative group rounded-2xl h-full">                     
                     <div 
                       className="absolute inset-0 tab-blur-item border border-[#1d2731]/10 bg-white rounded-2xl"
                       style={{ animation: `${box.anim} ${6 + i}s ease-in-out infinite` }}
                     >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1d2731]/[0.02] rounded-full blur-[20px] -translate-y-1/2 translate-x-1/2"></div>
                     </div>
                     <div 
                       className="relative z-10 p-8 md:p-10 transition-all duration-500"
                       style={{ animation: `${box.anim.replace('float-', 'float-text-')} ${6 + i}s ease-in-out infinite` }}
                     >
                       <div className="text-[11px] font-mono font-medium tracking-widest text-[#1d2731]/40 mb-6">{box.nr} / Filozofie</div>
                       <h4 className="font-light tracking-wide text-xl text-[#1d2731] mb-4">{box.t}</h4>
                       <p className="text-[#1d2731]/60 leading-relaxed font-extralight">{box.d}</p>
                     </div>
                   </div>
                 </Reveal>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Vectori de Crestere - Taburi Fluide */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16 md:flex justify-between items-end border-b border-[#1d2731]/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#1d2731] max-w-xl">
              Structurile ce mențin afacerile sănătoase.
            </h2>
            <p className="mt-6 md:mt-0 max-w-sm text-sm text-[#1d2731]/60 font-light tracking-wide">
               Apasă și observă o platformă de servicii unde interacțiunea fluidă ascunde protocoale de conversie stricte.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 tab-blur-group">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <Link
                href={service.href}
                className="group relative block h-full"
              >
                {/* Background-ul care plutește separat de text */}
                <div 
                  className="absolute inset-0 bg-white border border-[#1d2731]/8 rounded-3xl shadow-sm group-hover:border-[#1d2731]/20 tab-blur-item"
                  style={{ animation: `${service.anim} ${7 + i}s ease-in-out infinite` }}
                ></div>
                
                {/* Textul ancorat cu paralaxă (70% din deplasare) */}
                <div 
                  className="relative z-10 p-8 lg:p-12 transition-all duration-500"
                  style={{ animation: `${service.anim.replace('float-', 'float-text-')} ${7 + i}s ease-in-out infinite` }}
                >
                  <div className="mb-8 flex justify-between items-center text-[10px] font-medium uppercase tracking-widest text-[#1d2731]/30">
                    <span>/0{i+1}</span>
                    {/* @ts-ignore */}
                    {service.badge && (
                      <span className="bg-[#8b5cf6] text-white px-2.5 py-0.5 rounded shadow-[0_0_8px_rgba(139,92,246,0.3)] tracking-widest">{service.badge}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-light tracking-wide text-[#1d2731] mb-3">{service.title}</h3>
                  <p className="text-sm font-light text-[#1d2731]/70 mb-6">{service.desc}</p>
                  <p className="text-[15px] font-extralight leading-relaxed text-[#1d2731]/50 border-t border-[#1d2731]/5 pt-6">{service.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pachete si Pricing (Design Premium Fluid) */}
      <section className="bg-white border-y border-[#1d2731]/5 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#1d2731]/40 mb-4">Investiția de Fundament</div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#1d2731] mb-6">
                 Decizii transparente.<br/>Procese securizate.
              </h2>
              <p className="text-[#1d2731]/50 font-extralight">Orice etapă financiară are la bază un calcul complet integrat în procedurile noastre.</p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto tab-blur-group">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 80}>
                <div className="relative h-full">
                  {/* Background-ul plutitor pentru cardul de preț */}
                  <div 
                    className={`absolute inset-0 rounded-3xl border transition-all duration-500 tab-blur-item ${
                      pkg.recommended
                        ? "border-[#1d2731]/20 shadow-[0_20px_40px_rgba(29,39,49,0.06)] bg-white scale-100 lg:scale-[1.03]"
                        : "border-[#1d2731]/5 bg-[#f5f1ea]/30"
                    }`}
                    style={{ animation: `${pkg.anim} ${6 + i}s ease-in-out infinite`, animationDelay: pkg.delay }}
                  ></div>

                  {/* Conținutul vizual cu paralaxă (70%) */}
                  <div 
                    className="relative z-10 flex flex-col justify-between h-full p-10 transition-all duration-500"
                    style={{ animation: `${pkg.anim.replace('float-', 'float-text-')} ${6 + i}s ease-in-out infinite`, animationDelay: pkg.delay }}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1d2731] px-5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-md w-max">
                        Ecosistem Recomandat
                      </div>
                    )}
                    
                    <div>
                      <div className="text-[10px] font-medium uppercase tracking-widest text-[#1d2731]/40 mb-2">
                         {pkg.label}
                      </div>
                      <h3 className="text-2xl font-light tracking-wide text-[#1d2731] mb-6 border-b border-[#1d2731]/5 pb-6">
                         {pkg.name}
                      </h3>
                      
                      <div className="text-5xl font-extralight tracking-tight mb-2 text-[#1d2731]">
                        {pkg.price}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider font-light text-[#1d2731]/50 mb-8">
                        {pkg.delivery}
                      </div>

                      <ul className="space-y-4">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-4 text-[14px] font-extralight leading-snug text-[#1d2731]/70">
                            <span className="mt-1 h-3 w-3 shrink-0 rounded-[3px] border border-[#1d2731]/20 bg-[#f5f1ea]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-12">
                      <Link
                        href={pkg.href}
                        className={`block w-full text-center rounded-full px-8 py-4 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 ${
                          pkg.recommended
                            ? "bg-[#1d2731] text-white hover:-translate-y-1 hover:shadow-lg"
                            : "bg-white border border-[#1d2731]/10 text-[#1d2731] hover:border-[#1d2731]/30 hover:bg-[#f5f1ea]"
                        }`}
                      >
                        {pkg.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalism final */}
      <section className="relative overflow-hidden py-32 text-center bg-[#f5f1ea]">
         <Reveal>
            <div className="w-px h-24 bg-gradient-to-b from-[#1d2731]/0 via-[#1d2731]/20 to-[#1d2731]/0 mx-auto mb-10" style={{ animation: "float-d 6s ease-in-out infinite" }}></div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-8" style={{ animation: "float-b 7s ease-in-out infinite" }}>
               Afacerea ta, ancorată <br className="hidden md:block"/> în structură.
            </h2>
            <Link
               href="/portal"
               className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/20 bg-white/50 px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-[#1d2731] transition-all duration-300 hover:bg-[#1d2731] hover:text-white float-button"
            >
               Sincronizează ReverbHub
            </Link>
         </Reveal>
      </section>

    </div>
  );
}
