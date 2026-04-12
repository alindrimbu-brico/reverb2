"use client";

import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  { id: 1, title: "Analizăm afacerea ta real" },
  { id: 2, title: "Construim sistemul digital" },
  { id: 3, title: "Lansăm și monitorizăm" },
  { id: 4, title: "Optimizăm cu AI" },
  { id: 5, title: "Parteneri pe termen lung" },
];

export default function FeatureAccordion() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section id="FEATURES_WRAP" className="w-full bg-[#FFFFFF] py-[96px]">
      <div className="max-w-[1320px] mx-auto px-[60px] flex flex-col lg:flex-row gap-16 h-auto lg:h-[520px]">
        
        {/* Left visually rich area */}
        <div className="lg:w-1/2 rounded-[24px] overflow-hidden bg-[#E9ECF3] relative group">
           {/* Decorative image/abstract placeholder */}
           <div className="absolute inset-0 bg-[#1A1A2E]/5 mix-blend-multiply transition-colors duration-700 group-hover:bg-[#1A1A2E]/10" />
           <img 
             src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
             alt="Data analysis" 
             className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-[12px] shadow-sm">
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#111111]">Metodologie Testată ✓</span>
           </div>
        </div>

        {/* Right Accordion area */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="mb-10 text-[14px] font-bold text-[#777777] uppercase tracking-[0.14em]">Cum lucrăm</div>
          
          <div className="flex flex-col border-t border-[#DADADA]">
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              
              return (
                <div key={feature.id} className="border-b border-[#DADADA] overflow-hidden">
                   <button 
                     onClick={() => setActiveId(feature.id)}
                     className="w-full flex items-center justify-between h-[56px] text-left transition-colors"
                   >
                     <span className={`text-[18px] md:text-[22px] transition-colors duration-300 ${isActive ? "font-bold text-[#111111]" : "font-normal text-[#777777]"}`}>
                        {feature.id}. {feature.title}
                     </span>
                     <span className="text-[#111111] transition-transform duration-300">
                        {isActive ? (
                          <MinusCircle size={24} strokeWidth={1.5} className="rotate-90 opacity-100" />
                        ) : (
                          <PlusCircle size={24} strokeWidth={1.5} className="opacity-40" />
                        )}
                     </span>
                   </button>
                   
                   <AnimatePresence>
                     {isActive && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="overflow-hidden"
                       >
                         <p className="pb-6 text-[#777777] text-[16px] leading-relaxed max-w-[90%]">
                           Abordăm ficare faza cu rigurozitate, adunând date și aplicând automatizări logice care să susțină promisiunea. Transformăm efortul brut în procese sistemice fluide, optimizând constant intersecția dintre echipe umane și unelte AI.
                         </p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
