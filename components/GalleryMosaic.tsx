"use client";

import React from "react";

export default function GalleryMosaic() {
  return (
    <section id="GALLERY_WRAP" className="w-full bg-[#FFFFFF] py-[96px] relative overflow-hidden">
      
      {/* Faint overlays (absolute, opacity 8%, z-index 1) */}
      <div className="absolute left-[-5%] bottom-[-10%] w-[400px] h-[400px] bg-[#111111] opacity-[0.03] rounded-full blur-[80px] z-[1] mix-blend-multiply pointer-events-none" />
      <div className="absolute right-[-5%] top-[-5%] w-[500px] h-[500px] bg-[#1A1A2E] opacity-[0.03] rounded-full blur-[100px] z-[1] mix-blend-multiply pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-[60px] relative z-[10]">
        
        {/* Title */}
        <div className="text-center mb-[80px]">
          <h2 className="text-[44px] font-bold text-[#111111] tracking-[0.14em] uppercase">
            Portofoliu
          </h2>
        </div>

        {/* Mosaic grid (4 coloane, gap 20px, total height approx ~500px) */}
        <div className="flex flex-col lg:flex-row gap-[20px] mb-16 h-auto lg:h-[460px]">
          
          {/* Col 1 (460px wide equivalent) */}
          <div className="flex flex-col gap-[20px] lg:w-[460px] flex-shrink-0">
             <div className="bg-[#E9ECF3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group h-[180px]">
                <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80" alt="Work" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <span className="text-white font-medium tracking-widest uppercase text-xs">Healthcare B2B</span>
                </div>
             </div>
             <div className="bg-[#E9ECF3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group flex-grow">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" alt="Work 2" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <span className="text-white font-medium tracking-widest uppercase text-xs">E-Commerce</span>
                </div>
             </div>
          </div>

          {/* Col 2 (240px wide equivalent) */}
          <div className="flex flex-col gap-[20px] lg:w-[240px] flex-shrink-0">
             <div className="bg-[#E9ECF3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group h-[220px]">
                <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80" alt="Work 3" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="bg-[#E9ECF3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group flex-grow">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="Work 4" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
             </div>
          </div>

          {/* Col 3 (240px wide equivalent) */}
          <div className="flex flex-col gap-[20px] lg:w-[240px] flex-shrink-0">
             <div className="bg-[#E9ECF3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group flex-grow">
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80" alt="Work 5" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="bg-[#E9ECF3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group h-[220px]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Work 6" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
             </div>
          </div>

          {/* Col 4 (320px wide equivalent) */}
          <div className="flex flex-col lg:w-[320px] flex-shrink-0">
             <div className="bg-[#E9ECF3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group h-full">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Work 7" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                   <span className="text-white font-bold tracking-widest uppercase text-xl mb-2">Corporate AI</span>
                   <span className="text-white/80 font-medium text-xs">Arhitectură Completă</span>
                </div>
             </div>
          </div>

        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-[#111111] text-[#ffffff] rounded-[6px] px-10 py-5 font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-[#333] transition-colors shadow-lg">
            Vezi tot portofoliul
          </button>
        </div>

      </div>
    </section>
  );
}
