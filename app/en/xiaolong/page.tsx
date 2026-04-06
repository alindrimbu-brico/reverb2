"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function XiaolongShowcaseEN() {
  const [markup] = useState(1.30); // +30% markup required

  const products = [
    {
      id: "grey-board",
      title: "Grey Board (Grey Cardboard)",
      category: "Industrial Substrate",
      desc: "Premium quality grey cardboard produced from 100% recycled waste paper. Eco-friendly alternative with superior rigidity.",
      specs: {
        gsm: "200-500 GSM",
        width: "Up to 1600mm",
        thickness: "0.5-2.5mm",
        finish: "Smooth & Coated"
      },
      features: [
        "100% recycled material - environmentally compliant",
        "High stiffness and excellent printability",
        "Suitable for packaging boxes, partitions, and dividers",
        "Available in custom sizes and thickness",
        "ISO 9001 & FSC certified quality control"
      ],
      applications: "Shoe boxes, electronic packaging, beverage cartons, protective padding",
      basePrice: 624,
      unit: "per metric ton"
    },
    {
      id: "duplex-board",
      title: "Duplex Board (White Back Grey)",
      category: "Premium Packaging",
      desc: "Double-layer board with white coated front and grey back. Ideal for high-end consumer packaging with superior print quality.",
      specs: {
        gsm: "250-400 GSM",
        width: "Up to 1800mm",
        layers: "2-ply (white + grey)",
        coating: "PE & aqueous options"
      },
      features: [
        "Bright white front for premium printing",
        "Grey back for structural integrity",
        "Superior barrier properties",
        "Excellent folding and creasing characteristics",
        "Food-grade coating available on request"
      ],
      applications: "Cosmetic packaging, food boxes, pharmaceutical boxes, luxury goods",
      basePrice: 767,
      unit: "per metric ton"
    },
    {
      id: "white-cardboard",
      title: "White Cardboard (Coated White)",
      category: "Premium Substrate",
      desc: "Single or multi-ply white coated cardboard optimized for high-quality printing and branding applications.",
      specs: {
        gsm: "180-400 GSM",
        brightness: ">85% ISO",
        coating: "Gloss or matte",
        smoothness: "<50 μl"
      },
      features: [
        "Ultra-bright white for vivid color reproduction",
        "Superior gloss and matte finish options",
        "Excellent ink adhesion and color vibrancy",
        "Perfect for label printing and packaging design",
        "Water-resistant and durable"
      ],
      applications: "Folding cartons, business cards, product labels, brand packaging",
      basePrice: 845,
      unit: "per metric ton"
    },
    {
      id: "kraft-paper",
      title: "Kraft Paper (Brown Kraft)",
      category: "Natural Fiber",
      desc: "Strong natural kraft paper made from virgin wood pulp. Renowned for exceptional tensile strength and eco-friendliness.",
      specs: {
        gsm: "70-150 GSM",
        color: "Natural brown",
        strength: "High tensile strength",
        width: "Up to 1700mm"
      },
      features: [
        "Virgin wood pulp - superior strength-to-weight ratio",
        "Biodegradable and eco-friendly material",
        "Excellent puncture and tear resistance",
        "Natural aging process preserves fiber integrity",
        "Recyclable and compostable"
      ],
      applications: "Heavy-duty shipping bags, kraft envelopes, wrapping paper, food packaging",
      basePrice: 936,
      unit: "per metric ton"
    },
    {
      id: "food-grade-white",
      title: "Food Grade White Cardboard",
      category: "Food Safety",
      desc: "Certified food-contact white board with PE or aqueous coating. Meet EU/FDA food safety standards for direct food contact.",
      specs: {
        gsm: "170-320 GSM",
        certification: "FDA & EU compliant",
        coating: "PE or aqueous",
        odor: "Odorless (passed tests)"
      },
      features: [
        "FDA compliant for direct food contact",
        "EU Regulation 10/2011 approved materials",
        "PE coating provides water barrier",
        "Aqueous coating option for eco-conscious brands",
        "Microbiologically tested and certified"
      ],
      applications: "Bakery boxes, beverage cartons, frozen food packaging, ice cream boxes",
      basePrice: 1105,
      unit: "per metric ton"
    },
    {
      id: "black-cardboard",
      title: "Black Cardboard (Pure Black)",
      category: "Specialty",
      desc: "Jet-black cardboard for luxury packaging and premium brand applications. Produced with specialized pigments.",
      specs: {
        gsm: "200-350 GSM",
        color: "Pure jet black (L≈2)",
        finish: "Matte or gloss",
        opacity: ">99%"
      },
      features: [
        "Deep jet-black color for premium aesthetics",
        "100% opacity for structural integrity",
        "Excellent contrast for metallic or foil stamping",
        "Suitable for hot foiling and embossing",
        "Premium look and feel guaranteed"
      ],
      applications: "Luxury brand boxes, wine packaging, jewelry boxes, premium electronics",
      basePrice: 1014,
      unit: "per metric ton"
    },
    {
      id: "paper-shaft",
      title: "Paper Shaft (Paper Tube Core)",
      category: "Industrial Component",
      desc: "High-precision paper tube cores for winding and spooling applications. Lightweight, cost-effective alternative to plastic.",
      specs: {
        diameter: "Ø4mm to Ø100mm",
        length: "Custom cut available",
        wall_thickness: "1-6mm",
        crush_strength: ">250 psi"
      },
      features: [
        "Spiral wound for uniform density",
        "Lightweight yet rigid construction",
        "Cost-effective vs. plastic or metal alternatives",
        "Chemical resistant inner surface",
        "Easily recyclable and eco-friendly"
      ],
      applications: "Textile winding, ribbon spools, tape cores, wire winding, industrial packaging",
      basePrice: 390,
      unit: "per metric ton"
    },
    {
      id: "corrugated-box",
      title: "Corrugated Cardboard Box (Custom)",
      category: "Complete Solution",
      desc: "Custom-designed corrugated boxes manufactured in-house. Single, double, or triple wall with professional printing.",
      specs: {
        ply: "1, 2, or 3-ply",
        flute: "A, B, C, E, or custom",
        print: "Full color CMYK",
        customization: "Unlimited variations"
      },
      features: [
        "One-step manufacturing (design to delivery)",
        "Large-scale production capacity",
        "Professional offset printing or flexo printing",
        "Custom die-cutting and assembly",
        "Full logistics and warehousing support"
      ],
      applications: "E-commerce shipping, electronics, appliances, fragile goods, logistics",
      basePrice: 936,
      unit: "per metric ton"
    },
    {
      id: "specialty-coating",
      title: "Specialty Coated Board (Custom Coating)",
      category: "Advanced Materials",
      desc: "Custom-coated cardboard with specialized surfaces: waterproof, anti-static, UV-resistance, or specialty finishes.",
      specs: {
        base: "Any grey or white board",
        coating: "Custom formulation",
        properties: "Water/oil/grease resistant",
        thickness: "Tailored to application"
      },
      features: [
        "Water and oil resistance (FDA approved)",
        "Anti-static properties for electronics",
        "UV-resistant for outdoor applications",
        "Thermal conductivity options",
        "Customizable texture and finish"
      ],
      applications: "Technical packaging, pharmaceutical, electronics, industrial components",
      basePrice: 1235,
      unit: "per metric ton"
    }
  ];

  return (
    <div className="bg-[#fcfdfc] text-[#1c2a21] font-sans selection:bg-[#208b53] selection:text-white min-h-screen">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#208b53]/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#208b53] font-bold text-white shadow-md">XL</div>
            <div>
              <div className="text-sm font-bold tracking-widest uppercase text-[#208b53]">DONGGUAN XIAOLONG</div>
              <div className="text-[9px] uppercase tracking-widest font-semibold text-[#1c2a21]/50">Packaging Industry</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-[#1c2a21]/60">
            <a href="#about" className="hover:text-[#208b53] transition-colors">Intro</a>
            <a href="#history" className="hover:text-[#208b53] transition-colors">History</a>
            <a href="#products" className="hover:text-[#208b53] transition-colors">Products</a>
            <a href="#certificates" className="hover:text-[#208b53] transition-colors">Quality</a>
          </div>
          <Link href="/en" className="text-[10px] font-bold uppercase tracking-widest border-b border-[#1c2a21] pb-1 hover:text-[#208b53] hover:border-[#208b53]">
            Back to Clarity
          </Link>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative px-6 py-32 lg:px-10 bg-[#208b53] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1587293852726-694b5e7d589d?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#208b53] to-[#125833]/80" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Est. 2012 | Houjie Town, Dongguan</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] max-w-4xl">
              XIAOLONG
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl font-light leading-relaxed text-white/80">
              A professional manufacturer engaged in the production and sales of Gray Cardboard, Duplex board, White Cardboard, Black cardboard, kraft paper and Paper Box.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="bg-white py-24 md:py-32 border-b border-[#208b53]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1c2a21]">Scale & Capacity.</h2>
              <p className="mt-6 text-[#1c2a21]/70 leading-relaxed font-light">
                Our company is located in Houjie Town, Dongguan City, with a plant area of <strong className="font-bold text-[#208b53]">10000 square meters</strong>. We have a standard stock of 1000 tons and our annual sales is more than <strong className="font-bold text-[#208b53]">20000 tons</strong> of paperboard.
              </p>
              <p className="mt-4 text-[#1c2a21]/70 leading-relaxed font-light">
                There are five paper machine production lines for grey boards and four machines of Black paper. We also operate automatic flat cutting machines and V-slot machines. In order to improve our core competitiveness, we can produce customized products and provide one-step services for our customers.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f0f9f4] p-8 rounded-xl border border-[#208b53]/10">
                  <div className="text-4xl font-black text-[#208b53]">10K<span className="text-xl">m²</span></div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1c2a21]/50 mt-2">Plant Area</div>
                </div>
                <div className="bg-[#f0f9f4] p-8 rounded-xl border border-[#208b53]/10">
                  <div className="text-4xl font-black text-[#208b53]">20K<span className="text-xl">T</span></div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1c2a21]/50 mt-2">Annual Sales</div>
                </div>
                <div className="bg-[#f0f9f4] p-8 rounded-xl border border-[#208b53]/10">
                  <div className="text-4xl font-black text-[#208b53]">9</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1c2a21]/50 mt-2">Production Lines</div>
                </div>
                <div className="bg-[#f0f9f4] p-8 rounded-xl border border-[#208b53]/10">
                  <div className="text-4xl font-black text-[#208b53]">1K<span className="text-xl">T</span></div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#1c2a21]/50 mt-2">Standard Stock</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── History Section ── */}
      <section id="history" className="py-24 md:py-32 bg-[#fafdfa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
             <div className="text-center mb-20 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#1c2a21]">Company History</h2>
               <div className="w-16 h-1 bg-[#208b53] mx-auto mt-6 rounded-full"></div>
             </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2013", title: "Foundation", text: "Xiaolong Packaging Industry Co., LTD was founded." },
              { year: "2014", title: "Certification", text: "FTS Test Report certified. Gained FSC & SGS Certificates." },
              { year: "2018", title: "Expansion", text: "Keimei Paper was founded, specializing in Paper Wire Spool." },
              { year: "2023", title: "Scale Up", text: "200+ employees. 300 Million Sales volume. Huge workshop." },
            ].map((ev, i) => (
              <Reveal key={ev.year} delay={i * 100}>
                <div className="border border-[#208b53]/10 bg-white p-8 rounded-2xl h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#208b53]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#208b53]/10 transition-colors"></div>
                  <div className="text-4xl font-black text-[#208b53]/20 mb-4">{ev.year}</div>
                  <h3 className="text-lg font-bold text-[#1c2a21] mb-2">{ev.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-[#1c2a21]/70">{ev.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products & B2B Pricing (+30% Markup) ── */}
      <section id="products" className="py-24 md:py-32 bg-white border-y border-[#208b53]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
             <div className="mb-20 grid lg:grid-cols-2 gap-10 items-end">
               <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#1c2a21] mb-4">Product Catalog</h2>
                  <p className="text-[#1c2a21]/60 font-light max-w-md">Premium paperboard solutions certified to international standards. Production capacity exceeds 20,000 tons annually.</p>
               </div>
               <div className="bg-[#1c2a21] text-white p-6 rounded-xl flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#208b53] mb-1">Pricing Model</div>
                    <div className="text-sm font-light text-white/80">Industry Standard Markup</div>
                  </div>
                  <div className="text-3xl font-black text-[#208b53] border border-[#208b53]/30 px-4 py-2 rounded-lg">+30%</div>
               </div>
             </div>
          </Reveal>

          <div className="grid gap-8">
            {products.map((p, i) => {
              const finalPrice = Math.round(p.basePrice * markup);
              return (
                <Reveal key={p.id} delay={i * 60}>
                  <div className="border border-[#208b53]/10 hover:border-[#208b53]/40 bg-gradient-to-br from-[#fafcfb] to-white p-10 rounded-2xl transition-all hover:shadow-2xl group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#208b53]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#208b53]/10 transition-colors"></div>
                    
                    <div className="relative z-10">
                      {/* Header with Category Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#208b53] bg-[#208b53]/10 px-3 py-1.5 rounded-full mb-3">{p.category}</span>
                          <h3 className="text-2xl md:text-3xl font-black text-[#1c2a21] leading-tight">{p.title}</h3>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#208b53]/10 flex items-center justify-center text-[#208b53] group-hover:scale-125 transition-transform">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-base font-light text-[#1c2a21]/70 leading-relaxed mb-8 max-w-3xl">{p.desc}</p>
                      
                      {/* Specs Grid */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {Object.entries(p.specs).map(([key, value]) => (
                          <div key={key} className="bg-white/60 backdrop-blur-sm border border-[#208b53]/5 p-4 rounded-lg">
                            <div className="text-[9px] font-bold uppercase tracking-widest text-[#1c2a21]/60 mb-1.5">{key}</div>
                            <div className="text-[15px] font-bold text-[#1c2a21]">{value}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-black uppercase tracking-widest text-[#1c2a21]/60 mb-3">Key Features</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {p.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[14px] font-light text-[#1c2a21]/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#208b53] mt-1.5 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Applications */}
                      <div className="mb-8 p-5 bg-[#208b53]/5 border-l-4 border-[#208b53] rounded">
                        <div className="text-[9px] font-black uppercase tracking-widest text-[#208b53] mb-2">Applications</div>
                        <p className="text-[15px] font-light text-[#1c2a21]/80">{p.applications}</p>
                      </div>
                      
                      {/* Pricing */}
                      <div className="border-t border-[#208b53]/10 pt-6">
                        {(() => {
                          const finalPrice = Math.round(p.basePrice * markup);
                          const displayedBasePrice = Math.round(finalPrice * 1.20);
                          return (
                            <>
                              <div className="text-[10px] uppercase tracking-widest font-semibold text-[#1c2a21]/40 mb-2 line-through">Base Price: ${displayedBasePrice} {p.unit}</div>
                              <div className="flex items-end gap-3">
                                <div className="flex items-end gap-1">
                                  <span className="text-4xl font-black text-[#208b53]">${finalPrice}</span>
                                  <span className="text-xs font-bold uppercase tracking-widest text-[#208b53]/70 mb-1.5">/ {p.unit.split(' ').pop()}</span>
                                </div>
                                <span className="ml-auto text-[9px] font-bold text-[#208b53] bg-[#208b53]/10 px-3 py-2 rounded">+30% Markup</span>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Certificates & Partners ── */}
      <section id="certificates" className="py-24 bg-[#fafdfa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal>
              <h3 className="text-2xl font-bold text-[#1c2a21] mb-8">Global Compliance</h3>
              <div className="flex flex-wrap gap-4">
                {['SGS', 'FSC', 'RoHS', 'CE', 'ISO 9001'].map((cert) => (
                  <div key={cert} className="px-6 py-4 bg-white border border-[#208b53]/15 rounded-lg text-[#1c2a21] font-black text-xl shadow-sm">
                    {cert}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-[#1c2a21]/60 font-light leading-relaxed max-w-md">
                All paper products gain SGS, RoHS, MSDS and FSC certifications. In order to improve our company's core competitiveness, we provide one-step global services.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="text-2xl font-bold text-[#1c2a21] mb-8">Global Partners</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {['Toyota', 'Walmart', 'Starbucks', 'UNIQLO', 'Kids Want', 'Soundasia'].map(brand => (
                   <div key={brand} className="bg-white border border-[#208b53]/10 h-24 rounded-lg flex items-center justify-center p-4 shadow-sm hover:border-[#208b53]/30 transition-colors">
                     <span className="font-bold text-[#1c2a21]/80">{brand}</span>
                   </div>
                 ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1c2a21] py-12 text-center border-t-4 border-[#208b53]">
        <div className="text-white/40 text-xs font-medium uppercase tracking-widest mb-4">Contact Manufacturing</div>
        <div className="text-white font-light mb-1">Building 1, 40 Baotang Baota Road. Houjie Town, Dongguan City</div>
        <div className="text-[#208b53] font-bold">MB/Whatsapp: +0086-15322891631</div>
      </footer>
    </div>
  );
}
