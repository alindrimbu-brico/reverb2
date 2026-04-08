import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reverb — Structure, Clarity, Efficiency",
  description:
    "Digital ecosystems executed with robust engineering, communicated with pure human clarity. We build tools that work perfectly from day one.",
};

/* ── Tab Layout Services ── */
const services = [
  {
    title: "Controlled Presence",
    desc: "We assume nothing.",
    text: "Our pages are conversion architectures. We apply data-driven strategies, technically logged at a glance, yet delivered visually in a deeply empathetic environment that welcomes your client exactly as they expect.",
    href: "/en/services",
    anim: "float-a"
  },
  {
    title: "Data Clarity",
    desc: "Clients don't appear out of nowhere.",
    text: "Local SEO and Ads executed on a structure tested in thousands of corporate iterations, but communicated to you in a human, transparent discussion. We show you the line between visitor and profit with zero technical jargon.",
    href: "/en/services",
    anim: "float-b"
  },
  {
    title: "Sales Grid",
    desc: "Relentless E-Commerce.",
    text: "Online stores where the checkout flow is cognitively studied. The systems rest on a robust engineering foundation, optimized servers, and complete security, ensuring a seamless buyer process.",
    href: "/en/online-store",
    anim: "float-c"
  },
  {
    title: "Operational Management",
    desc: "You scale, we maintain.",
    text: "We ensure permanent maintenance of your ecosystem. Zero downtime. You have the peace of mind knowing that a solid technical apparatus watches over your platforms day and night.",
    href: "/en/services",
    anim: "float-a"
  },
  {
    title: "AI Digital Human",
    desc: "Your virtual employee, active 24/7.",
    text: "We integrate intelligent AI avatars capable of interacting, selling, and offering support to your clients in real time. A structure based on Nevronix, designed to relieve your team.",
    href: "/en/ai-humans",
    anim: "float-b",
    badge: "NEW"
  },
];

/* ── Structured Pricing ── */
const packages = [
  {
    name: "Digital Foundation",
    label: "Starting Structure",
    price: "€990",
    delivery: "Architecture in: 7–14 days",
    features: [
      "Mature interface, 100% technically correct execution",
      "Impeccable contact experience (logical WhatsApp flow)",
      "Fundamental Google technical settings",
    ],
    cta: "Discuss Structure",
    href: "/checkout",
    recommended: false,
    anim: "float-b",
    delay: "0s"
  },
  {
    name: "Optimized Local Clients",
    label: "Efficiency Ecosystem",
    price: "€1.790",
    delivery: "Operational system: 30 days",
    features: [
      "Pure conversion page + local focused SEO",
      "Google & Meta Ads engines securely configured",
      "Internal database for interaction management",
    ],
    extra: "Maintenance & Operation: €490 / month",
    cta: "Choose Peace of Mind",
    href: "/checkout",
    recommended: true,
    anim: "float-c",
    delay: "0.5s"
  },
  {
    name: "AI Concept Sprint",
    label: "Rapid Validation",
    price: "€790",
    delivery: "Logical mapping: 7 days",
    features: [
      "Integration of AI intelligence into your processes",
      "Empathetic visual prototype, created with structure",
      "10 schematic sets for attracting new clients",
    ],
    cta: "Initiate Sprint",
    href: "/checkout",
    recommended: false,
    anim: "float-a",
    delay: "1s"
  },
];

export default function HomePageEN() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731] font-sans selection:bg-[#1d2731] selection:text-[#f5f1ea] overflow-x-hidden">
      

      {/* Hero Section — Structură și Claritate */}
      <section className="relative min-h-[90vh] flex flex-col justify-center py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
           
           <div className="lg:col-span-12 w-full text-center flex flex-col items-center">
             <Reveal>
               <div className="mb-6 inline-flex items-center gap-3 border border-[#1d2731]/10 rounded-full px-5 py-1.5 bg-white/50 backdrop-blur-sm">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#1d2731] animate-pulse"></span>
                 <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#1d2731]/70">
                   Corporate infrastructure. Human interface.
                 </span>
               </div>
             </Reveal>

             <Reveal delay={80}>
               <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[0.98] text-[#1d2731]">
                 CLARITY
               </h1>
             </Reveal>

             <Reveal delay={160}>
               <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[#1d2731]/60 font-extralight tracking-wide leading-relaxed">
                 We build online presences and entirely transparent conversion ecosystems. We use engineering processes scaled to thousands of tests, adapted to your human essence. <strong className="font-normal opacity-70">No jargon. With total operational clarity.</strong> 
               </p>
             </Reveal>

             <Reveal delay={240}>
               <div className="mt-12 flex flex-col gap-4 sm:flex-row w-full justify-center">
                 <Link
                   href="/contact"
                   className="inline-flex items-center justify-center rounded-full bg-[#1d2731] px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-[#f5f1ea] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(29,39,49,0.2)] float-button delay-1"
                 >
                   GET CLARITY FOR YOUR BUSINESS →
                 </Link>
                 <Link
                   href="/en/showcase"
                   className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#1d2731]/20 bg-white/30 backdrop-blur-sm px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-[#1d2731]/80 hover:bg-white/80 hover:border-[#1d2731]/40 transition-all duration-300 hover:-translate-y-1 float-button delay-2"
                 >
                   STRUCTURED PORTFOLIO (18 MODELS)
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
                    Operating Mode
                 </div>
                 <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1] text-[#1d2731] mb-8">
                   Complex machinery.<br/>
                   <span className="text-[#1d2731]/40">Clear interface.</span>
                 </h2>
                 <p className="text-[#1d2731]/60 leading-relaxed font-extralight tracking-wide text-lg">
                   We listen to your ideals as closely as to a conversation with a friend, but behind the scenes, we launch mathematically validated strategies. Your peace of mind is the guarantee of our corporate structure, applied humanely.
                 </p>
               </Reveal>
             </div>

             <div className="lg:col-span-7 grid gap-6 tab-blur-group">
               {[
                 { 
                   nr: "01", t: "Core Logic (Rigor)", 
                   d: "We apply tested processing systems. The design of your website isn't randomly 'visually pleasing', but built on a massive engineering skeleton for client acquisition. We operate precisely where nothing is left to chance.",
                   anim: "float-a"
                 },
                 { 
                   nr: "02", t: "Peace of Mind (Clarity)", 
                   d: "You always receive the human translation of this software power. We offer transparent communication, charts that point directly to profit. You are an entrepreneur who always stays in control of the next step. Peace is the final product.",
                   anim: "float-b"
                 },
                 { 
                   nr: "03", t: "Execution Fluidity", 
                   d: "A living interface requires sustained development. We never just deliver a product and vanish. Our departments continuously monitor server security and visitor flows. Technical prevention means peaceful operation.",
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
                       <div className="text-[11px] font-mono font-medium tracking-widest text-[#1d2731]/40 mb-6">{box.nr} / Philosophy</div>
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
              The structures that keep businesses healthy.
            </h2>
            <p className="mt-6 md:mt-0 max-w-sm text-sm text-[#1d2731]/60 font-light tracking-wide">
               Click and observe a service platform where fluid interaction conceals strict conversion protocols.
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
                  <div className="mb-8 text-[10px] font-medium uppercase tracking-widest text-[#1d2731]/30">/0{i+1}</div>
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
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#1d2731]/40 mb-4">Foundation Investment</div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#1d2731] mb-6">
                 Transparent decisions.<br/>Secure processes.
              </h2>
              <p className="text-[#1d2731]/50 font-extralight">Every financial stage is based on a comprehensively calculated integration into our procedures.</p>
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
                        Recommended Ecosystem
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
            <div className="w-px h-24 bg-gradient-to-b from-[#1d2731]/0 via-[#1d2731]/20 to-[#1d2731]/0 mx-auto mb-10"></div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-8">
               Your business, anchored <br className="hidden md:block"/> in structure.
            </h2>
            <Link
               href="/portal"
               className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/20 bg-white/50 px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-[#1d2731] transition-all duration-300 hover:bg-[#1d2731] hover:text-white"
            >
               Synchronize ReverbHub
            </Link>
         </Reveal>
      </section>

    </div>
  );
}
