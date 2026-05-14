"use client";

import React, { useState, useMemo } from "react";
import { conversionData, convertValue, UnitCategory, Unit } from "@/lib/conversions";
import Reveal from "@/components/Reveal";
import { ArrowRight, Settings2 } from "lucide-react";

export default function ConvertorPage() {
  const [category, setCategory] = useState<UnitCategory>("lungime");
  const [inputValue, setInputValue] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<string>("m");
  
  const [results, setResults] = useState<{ unit: Unit, value: number }[] | null>(null);

  // When category changes, reset the fromUnit to the base unit of that category
  const handleCategoryChange = (newCat: UnitCategory) => {
    setCategory(newCat);
    setFromUnit(conversionData[newCat].baseUnit);
    setResults(null);
  };

  const handleConvert = () => {
    const numericValue = parseFloat(inputValue);
    if (isNaN(numericValue)) return;
    
    const newResults = convertValue(numericValue, category, fromUnit);
    setResults(newResults);
  };

  const currentCategoryData = conversionData[category];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#1d2731] selection:bg-[#1d2731] selection:text-[#f5f1ea] flex flex-col font-sans">
      
      {/* HEADER / HERO SECTION */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 px-6 lg:px-10 border-b border-[#1d2731]/10 bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 border border-[#1d2731]/20 bg-white px-4 py-1.5 float-badge rounded-none shadow-[4px_4px_0_rgba(29,39,49,0.1)]">
              <Settings2 className="w-3.5 h-3.5 text-[#1d2731]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1d2731]">
                Instrument Tehnic
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none text-[#1d2731] uppercase" style={{ animation: "float-a 6s ease-in-out infinite" }}>
              Convertor <br className="md:hidden"/> de Unități
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl mx-auto text-[#1d2731]/60 font-extralight tracking-wide leading-relaxed text-sm md:text-base">
              Introduceți valoarea, selectați unitatea și obțineți instantaneu conversia în toate celelalte formate din aceeași categorie. Sistem precis, fără fricțiuni.
            </p>
          </Reveal>
        </div>
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply flex justify-center items-center overflow-hidden">
           <div className="w-[1px] h-full bg-[#1d2731] absolute left-1/4"></div>
           <div className="w-[1px] h-full bg-[#1d2731] absolute left-2/4"></div>
           <div className="w-[1px] h-full bg-[#1d2731] absolute left-3/4"></div>
           <div className="h-[1px] w-full bg-[#1d2731] absolute top-1/2"></div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-6xl mx-auto w-full px-6 lg:px-10 py-12 gap-12">
        
        {/* LEFT COLUMN: Controls */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <Reveal delay={300}>
            <div className="bg-white border border-[#1d2731]/10 p-6 rounded-none shadow-[8px_8px_0_rgba(29,39,49,0.05)] relative" style={{ animation: "float-b 8s ease-in-out infinite" }}>
              
              <div className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#1d2731]/40 mb-6 border-b border-[#1d2731]/10 pb-2">
                Parametrii de intrare
              </div>
              
              {/* Category Selector */}
              <div className="mb-6">
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[#1d2731]/70 mb-2">
                  Categorie
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(conversionData) as UnitCategory[]).map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`py-2 px-3 text-[11px] uppercase tracking-wider font-medium border transition-all duration-200 rounded-none ${
                        category === cat 
                          ? "bg-[#1d2731] text-white border-[#1d2731]" 
                          : "bg-[#f5f1ea] text-[#1d2731]/70 border-[#1d2731]/10 hover:border-[#1d2731]/40"
                      }`}
                    >
                      {conversionData[cat].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Value Input */}
              <div className="mb-6">
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[#1d2731]/70 mb-2">
                  Valoare
                </label>
                <input 
                  type="number" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-[#f5f1ea] border border-[#1d2731]/20 px-4 py-3 text-lg font-light text-[#1d2731] rounded-none focus:outline-none focus:border-[#1d2731] transition-colors"
                  placeholder="Ex: 100"
                />
              </div>

              {/* Unit Selector */}
              <div className="mb-8">
                <label className="block text-[11px] font-medium uppercase tracking-widest text-[#1d2731]/70 mb-2">
                  Unitate Sursă
                </label>
                <div className="relative">
                  <select 
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                    className="w-full bg-[#f5f1ea] border border-[#1d2731]/20 px-4 py-3 text-sm font-medium text-[#1d2731] rounded-none focus:outline-none focus:border-[#1d2731] appearance-none cursor-pointer"
                  >
                    {currentCategoryData.units.map(u => (
                      <option key={u.id} value={u.id}>
                        {u.name} ({u.symbol})
                      </option>
                    ))}
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-b border-[#1d2731] w-2.5 h-2.5 rotate-[-45deg]"></div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={handleConvert}
                className="w-full bg-[#1d2731] text-white py-4 px-6 text-[12px] font-bold uppercase tracking-[0.2em] flex items-center justify-between hover:bg-[#1d2731]/90 transition-all hover:-translate-y-0.5 active:translate-y-0 rounded-none shadow-[4px_4px_0_rgba(29,39,49,0.2)]"
              >
                <span>Convertește</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </Reveal>

          {/* GOOGLE ADS PLACEHOLDER - SIDEBAR */}
          <Reveal delay={400}>
             <div className="w-full aspect-square border border-dashed border-[#1d2731]/20 bg-[#1d2731]/[0.02] flex flex-col items-center justify-center p-6 text-center rounded-none relative">
               <div className="absolute top-2 left-2 text-[9px] uppercase tracking-widest text-[#1d2731]/30 font-bold">
                 Anunț Google
               </div>
               <span className="text-xs text-[#1d2731]/40 font-mono">
                 [Google Ads Placeholder 300x250]
               </span>
               <div className="mt-2 w-full h-full border border-[#1d2731]/5 bg-white/50"></div>
             </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN: Results */}
        <div className="w-full lg:w-2/3">
          {results ? (
            <Reveal>
              <div className="bg-white border border-[#1d2731]/10 rounded-none p-8 md:p-10 shadow-[12px_12px_0_rgba(29,39,49,0.03)] relative h-full">
                <div className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#1d2731]/40 mb-8 border-b border-[#1d2731]/10 pb-4 flex justify-between items-end">
                  <span>Rezultate Conversie</span>
                  <span className="text-[#1d2731]/80 bg-[#f5f1ea] px-3 py-1 border border-[#1d2731]/10">
                    {parseFloat(inputValue)} {currentCategoryData.units.find(u=>u.id === fromUnit)?.symbol}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map((res, i) => (
                    <div 
                      key={res.unit.id} 
                      className={`p-4 border transition-all duration-300 rounded-none group hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(29,39,49,0.05)] ${res.unit.id === fromUnit ? 'border-[#1d2731] bg-[#1d2731]/5' : 'border-[#1d2731]/10 hover:border-[#1d2731]/30'}`}
                      style={{ animation: `float-text-a ${5 + (i%3)}s ease-in-out infinite` }}
                    >
                      <div className="text-[10px] uppercase tracking-wider text-[#1d2731]/50 mb-1">
                        {res.unit.name}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl font-light text-[#1d2731] tracking-tight">
                          {Number.isInteger(res.value) ? res.value : parseFloat(res.value.toFixed(6))}
                        </div>
                        <div className="text-sm font-medium text-[#1d2731]/60">
                          {res.unit.symbol}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* GOOGLE ADS PLACEHOLDER - BOTTOM HORIZONTAL */}
                <div className="mt-12 w-full h-24 border border-dashed border-[#1d2731]/20 bg-[#1d2731]/[0.02] flex flex-col items-center justify-center p-4 text-center rounded-none relative">
                   <div className="absolute top-1 left-2 text-[9px] uppercase tracking-widest text-[#1d2731]/30 font-bold">
                     Anunț Google
                   </div>
                   <span className="text-xs text-[#1d2731]/40 font-mono mt-2">
                     [Google Ads Leaderboard 728x90]
                   </span>
                </div>

              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="h-full min-h-[400px] border border-dashed border-[#1d2731]/20 flex flex-col items-center justify-center p-10 text-center rounded-none bg-white/20">
                 <Settings2 className="w-12 h-12 text-[#1d2731]/10 mb-4" />
                 <h3 className="text-xl font-light text-[#1d2731]/60 mb-2">Așteptare Parametri</h3>
                 <p className="text-sm text-[#1d2731]/40 max-w-sm">
                   Selectați categoria, introduceți valoarea și apăsați "Convertește" pentru a afișa matricea de rezultate.
                 </p>
              </div>
            </Reveal>
          )}
        </div>

      </main>

    </div>
  );
}
