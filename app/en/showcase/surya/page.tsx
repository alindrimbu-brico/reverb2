"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function SuryaShowcaseEN() {
  const advantages = [
    {
      id: "01",
      title: "PRACTICAL",
      desc: "Systems must solve real needs, not just benchmarks. Every implementation should serve people, products, and progress, not vanity metrics."
    },
    {
      id: "02",
      title: "STRUCTURE",
      desc: "Good ideas fall apart without structure. Clear process, clean pipelines, and scalable frameworks turn creativity into something that actually works."
    },
    {
      id: "03",
      title: "ADAPTIVE",
      desc: "Technology changes fast, so solutions must bend, not break. Adaptability means staying useful tomorrow, not just impressive today."
    },
    {
      id: "04",
      title: "IMPACTFUL",
      desc: "Systems are only as good as the difference they make. Every build should improve speed, or experience, because results are what truly matter."
    }
  ];

  const works = [
    { title: "Autonomous Control", category: "AI Engineering for motion. Advancing safety, control, and performance on every road ahead." },
    { title: "Predictive Models", category: "Forecasting the future with data-driven precision. Enabling businesses to act before trends even arrive." },
    { title: "Smart Chat System", category: "Redefining operations with intelligent conversations that resolve, adapt seamlessly." },
    { title: "Vision Analytics", category: "Turning raw visuals into real-time insights. Empowering industries to see and adapt faster than ever." }
  ];

  const testimonials = [
    { name: "OLIVE", quote: "Collaborating with Surya Group brought clarity and vision to our project. They transformed complex ideas into practical solutions that everyone could understand." },
    { name: "MARK", quote: "Working with Surya gave us not just an engineer, but a strategic thinker. They made complex tech both understandable and incredibly useful." }
  ];

  return (
    <div className="bg-[#f0f0f0] text-[#111] font-sans selection:bg-[#111] selection:text-white min-h-screen lowercase tracking-wide overflow-x-hidden">
      
      {/* ── Navbar Brutalist ── */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference text-[#f0f0f0] mix-blend-exclusion px-6 lg:px-12 py-6 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/en/showcase" className="text-[10px] uppercase tracking-widest block mb-1">
            ← PREVIOUS
          </Link>
          <div className="text-xl lg:text-3xl font-bold uppercase tracking-tighter leading-none">
            Surya<br/>Group
          </div>
        </div>
        <div className="pointer-events-auto flex flex-col items-end text-[10px] uppercase font-bold tracking-widest gap-2">
           <a href="#about" className="hover:line-through">About</a>
           <a href="#expertise" className="hover:line-through">Expertise</a>
           <a href="#works" className="hover:line-through">Works</a>
           <a href="#contact" className="hover:line-through">Contact</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-12 min-h-screen flex flex-col justify-end pb-24 border-b border-[#111]/20">
         <Reveal>
           <div className="text-[12px] uppercase font-bold tracking-[0.2em] mb-8">
             System Engineering Studio
           </div>
           
           <h1 className="text-[15vw] lg:text-[180px] leading-[0.8] uppercase font-bold tracking-[-0.04em] text-[#111]">
             EMPOWER<br/>SURYA.
           </h1>
         </Reveal>
         
         <div className="mt-16 lg:mt-32 max-w-xl ml-auto border-l border-[#111]/20 pl-6">
           <Reveal delay={100}>
             <p className="text-xl lg:text-3xl leading-snug font-medium mb-4">
               We design and deploy systems that solve real problems.
             </p>
             <p className="text-[#111]/60 text-lg">
               We believe development isn’t just about code, it’s about creating tools that empower your operational reality.
             </p>
           </Reveal>
         </div>
      </section>

      {/* ── Advantages (Expertise) ── */}
      <section id="expertise" className="px-6 lg:px-12 py-32 border-b border-[#111]/20">
        <Reveal>
          <div className="text-xs uppercase font-bold tracking-widest mb-16">
            / ADVANTAGES
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:border-t border-[#111]/20">
          {advantages.map((adv, i) => (
            <Reveal key={adv.id} delay={i * 50}>
              <div className="border-b lg:border-b-0 lg:border-r border-[#111]/20 py-12 lg:p-12 h-full flex flex-col last:border-r-0">
                <div className="text-xs font-bold opacity-30 mb-16">/{adv.id}</div>
                <h3 className="text-2xl font-bold uppercase mb-4">{adv.title}</h3>
                <p className="text-[#111]/70 leading-relaxed font-medium text-sm lg:text-base">
                  {adv.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Works ── */}
      <section id="works" className="py-32">
        <div className="px-6 lg:px-12 mb-16">
          <Reveal>
            <div className="text-xs uppercase font-bold tracking-widest mb-4">
              / SELECTED WORKS
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight max-w-4xl">
              Systems built to operate consistently.
            </h2>
          </Reveal>
        </div>

        <div className="w-full">
          {works.map((work, i) => (
            <Reveal key={i} delay={i * 30}>
              <div className="group border-t border-[#111]/20 hover:bg-[#111] hover:text-[#f0f0f0] transition-colors duration-500 cursor-pointer">
                <div className="px-6 lg:px-12 py-10 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-1 text-xs font-bold opacity-30">/0{i+1}</div>
                  <div className="md:col-span-5">
                    <h3 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">{work.title}</h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="opacity-70 text-sm lg:text-base pr-4 leading-relaxed font-medium">
                      {work.category}
                    </p>
                  </div>
                  <div className="md:col-span-1 text-right flex items-center justify-end">
                    <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest hidden md:block">
                      View
                    </span>
                    <span className="md:hidden opacity-40">→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[#111]/20 w-full"></div>
        </div>
      </section>

      {/* ── Stats / Impact ── */}
      <section className="bg-[#111] text-[#f0f0f0] px-6 lg:px-12 py-32 flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="text-[15vw] lg:text-[200px] leading-none font-bold tracking-tighter">
            99<span className="opacity-50">%</span>
          </div>
          <p className="text-xl lg:text-2xl uppercase tracking-widest font-bold mt-8">
            Improved Model Integration
          </p>
        </Reveal>
      </section>

      {/* ── Systems & Expertise Marquee ── */}
      <section className="py-32 overflow-hidden border-b border-[#111]/20 bg-[#f0f0f0]">
        <div className="px-6 lg:px-12 mb-16 grid lg:grid-cols-2 gap-16">
           <Reveal>
             <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight max-w-lg">
               Tools & Integrations
             </h2>
           </Reveal>
           <Reveal delay={100}>
             <div className="grid grid-cols-2 gap-8 text-sm uppercase font-bold tracking-widest opacity-60">
               <div>Data Pipelines</div>
               <div>MLOps Services</div>
               <div>LLM Integration</div>
               <div>Cloud Architectures</div>
             </div>
           </Reveal>
        </div>

        {/* Marquee effect using CSS class or standard repeated translate */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap mt-24 py-8 border-y border-[#111]/10 bg-white">
          <div className="animate-surya-marquee inline-flex items-center text-3xl font-bold uppercase tracking-widest opacity-30">
            <span className="mx-8">• SURYA GROUP</span>
            <span className="mx-8">• SYSTEMS ENGINEERING</span>
            <span className="mx-8">• SCALABLE CLOUD</span>
            <span className="mx-8">• ADVANCED ARCHITECTURE</span>
            <span className="mx-8">• SURYA GROUP</span>
            <span className="mx-8">• SYSTEMS ENGINEERING</span>
            <span className="mx-8">• SCALABLE CLOUD</span>
            <span className="mx-8">• ADVANCED ARCHITECTURE</span>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-6 lg:px-12 py-32 border-b border-[#111]/20">
         <div className="grid lg:grid-cols-2 gap-16">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col h-full justify-between">
                  <div className="text-3xl lg:text-4xl leading-tight font-medium mb-12">
                     "{t.quote}"
                  </div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-50 border-t border-[#111]/20 pt-6">
                     — {t.name}
                  </div>
                </div>
              </Reveal>
            ))}
         </div>
      </section>

      {/* ── Footer Contact ── */}
      <footer id="contact" className="px-6 lg:px-12 py-32 flex flex-col items-center text-center bg-[#111] text-[#f0f0f0]">
        <Reveal>
          <div className="text-xs uppercase font-bold tracking-widest opacity-60 mb-8 border border-white/20 rounded-full px-5 py-2">
            Your next step starts with us
          </div>
          
          <h2 className="text-4xl lg:text-8xl font-bold uppercase tracking-tighter mb-12">
            HAVE A CHALLENGE?<br/>
            LET'S ARCHITECT IT.
          </h2>
          
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#f0f0f0] text-[#111] uppercase tracking-widest font-bold text-sm px-12 py-5 hover:bg-white hover:scale-105 transition-all">
            Contact Surya
          </Link>

          <div className="mt-16 mx-auto flex items-center justify-center">
            <div className="group relative inline-flex items-center gap-3 rounded-full border border-[#f0f0f0]/10 bg-[#f0f0f0]/5 backdrop-blur-md px-5 py-2 shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:bg-[#f0f0f0]/10 transition-colors duration-500 float-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0f0f0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f0f0f0]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f0f0f0]/50 transition-colors group-hover:text-[#f0f0f0]/80">
                Powered by <span className="text-[#f0f0f0] opacity-90 inline-block ml-1" style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}>Google Ultra AI</span>
              </span>
            </div>
          </div>
        </Reveal>
        
        <div className="w-full mt-32 border-t border-white/10 pt-8 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest opacity-40">
           <div>SURYA.RO © 2026</div>
           <div className="flex gap-6">
             <a href="#" className="hover:opacity-100 transition">Style Guide</a>
             <a href="#" className="hover:opacity-100 transition">License</a>
           </div>
        </div>
      </footer>
      
    </div>
  );
}
