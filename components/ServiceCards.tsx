"use client";

import React from "react";
import { Store, MonitorSmartphone, Bot, Compass } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Magazine Online",
    description: "Sisteme complete pentru vânzări stabile.",
    icon: Store,
  },
  {
    id: 2,
    title: "Marketing Digital",
    description: "Ads, content, email, SEO.",
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    title: "Automatizări AI",
    description: "Procese automate, timp câștigat.",
    icon: Bot,
  },
  {
    id: 4,
    title: "Consultanță",
    description: "Strategie personalizată, parteneriat real.",
    icon: Compass,
  },
];

export default function ServiceCards() {
  return (
    <section id="SERVICES_WRAP" className="w-full bg-[#FFFFFF] py-[96px]">
      <div className="max-w-[1320px] mx-auto px-[60px] flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:w-[360px] flex-shrink-0 flex flex-col justify-center">
          <h2 className="text-[44px] font-bold text-[#111111] tracking-[0.14em] uppercase leading-[1.1] mb-6">
            Ce facem
          </h2>
          <p className="text-[18px] text-[#777777] font-normal leading-relaxed mb-10">
            De la strategie la execuție — magazine online, marketing digital, automatizări AI.
          </p>
          <div>
            <button className="border border-[#DADADA] text-[#111111] rounded-[6px] px-8 py-4 font-medium uppercase text-[12px] tracking-[0.08em] hover:bg-[#111111] hover:text-white transition-colors duration-300">
              Toate serviciile
            </button>
          </div>
        </div>

        {/* Right Column - Grid 2x2 */}
        <div className="lg:w-[900px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-[#E9ECF3] rounded-[16px] p-[32px] hover:-translate-y-2 transition-transform duration-500 ease-out flex flex-col"
              style={{ boxShadow: "0 18px 40px rgba(0,0,0,0.06)" }}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <service.icon size={24} strokeWidth={1.5} className="text-[#1A1A2E]" />
              </div>
              <h3 className="text-[28px] md:text-[32px] font-bold text-[#111111] tracking-tight mb-4 leading-[1.2]">
                {service.title}
              </h3>
              <p className="text-[#777777] text-[16px] leading-relaxed font-normal mt-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
