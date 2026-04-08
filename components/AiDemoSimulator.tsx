"use client";

import { useState, useEffect } from "react";

export default function AiDemoSimulator() {
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const sequence = [
      { sender: 'user', text: "Salut. M-ar interesa detalii despre pachetul Growth.", delay: 1000 },
      { sender: 'ai', text: "Salutare! Pachetul Growth include implementarea unui Avatar AI personalizat la nivel vizual și pe baza textelor și ofertelor tale. La ce afacere intenționezi să integrezi?", delay: 3500 },
      { sender: 'user', text: "Am un magazin pe Shopify cu accesorii auto.", delay: 8000 },
      { sender: 'ai', text: "Excelent! Avatarul nostru se conectează perfect cu Shopify. Practic, bot-ul va cunoaște stocul în timp real și va vinde produsele vizitatorilor tăi, exact ca un agent real. Vrei să programăm un mic apel demonstrativ (Zoom)?", delay: 11000 },
      { sender: 'user', text: "Sigur. Ce zici de joi pe la 14:00?", delay: 17000 },
      { sender: 'ai', text: "Inregistrat în sistem! Programarea este confirmată pentru Joi, ora 14:00. Invitația a fost trimisă automat pe mailul de contact. Abia aștept să aducem viitorul în magazinul tău! 🚀", delay: 20000 }
    ];

    const timeouts = sequence.map((msgAction) => {
      return setTimeout(() => {
        if(msgAction.sender === 'ai') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, msgAction]);
          }, 1800); // simulate typing time
        } else {
          setMessages(prev => [...prev, msgAction]);
        }
      }, msgAction.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative aspect-auto md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 bg-[#120322] shadow-[0_0_50px_rgba(139,92,246,0.15)] flex flex-col md:flex-row group w-full">
      
      {/* Avatar Core Visualizer */}
      <div className="md:w-[40%] border-b md:border-b-0 md:border-r border-white/10 p-8 flex flex-col items-center justify-center relative bg-gradient-to-br from-[#1a0533] to-[#120322] min-h-[300px]">
         <div className="absolute top-4 left-6 text-[10px] md:text-xs uppercase tracking-widest text-[#ec4899] font-bold opacity-80">Nevronix Core Module</div>
         
         <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 mt-8 md:mt-0">
            {/* Glowing Orbs */}
            <div className={`absolute inset-0 bg-[#8b5cf6]/30 blur-2xl rounded-full transition-all duration-700 ${isTyping ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`}></div>
            <div className={`absolute inset-4 bg-[#ec4899]/20 blur-xl rounded-full transition-all duration-300 ${isTyping ? 'scale-110 animate-pulse' : 'scale-100'}`}></div>
            
            {/* Inner Ring */}
            <div className="absolute inset-2 border-[1px] border-[#8b5cf6]/40 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Center Core */}
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#ec4899] shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-transform duration-300 ${isTyping ? 'scale-110' : 'scale-100'}`}></div>
         </div>

         <div className="flex flex-col items-center gap-2">
            <div className="text-white/80 font-mono text-[10px] md:text-xs tracking-widest uppercase">
               {isTyping ? 'ANALIZĂ ȘI RĂSPUNS...' : 'AȘTEAPTĂ INPUT...'}
            </div>
            <div className="flex gap-1 h-3 items-end">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1 bg-[#8b5cf6] rounded-t-sm transition-all duration-75 ${isTyping ? 'animate-bounce' : 'h-1'}`} style={{animationDelay: `${i * 0.1}s`}}></div>
               ))}
            </div>
         </div>
      </div>

      {/* Chat Transcription */}
      <div className="md:w-[60%] flex flex-col h-[400px] md:h-full bg-[#0a0114]/80 relative overflow-hidden">
         {/* Top bar */}
         <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
               <span className="text-sm font-medium text-white/80">Digital Human Logs</span>
            </div>
            <span className="text-xs text-white/40 font-mono">ID: 9482-NEV-01</span>
         </div>

         {/* Chat Area */}
         <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 scroll-smooth">
            {messages.map((msg, i) => (
               <div key={i} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.4s_ease-out_forwards] opacity-0`} style={{ animationFillMode: 'forwards' }}>
                  <div className={`max-w-[85%] md:max-w-[80%] rounded-2xl px-5 py-3 ${
                     msg.sender === 'user' 
                     ? 'bg-white/10 text-white rounded-tr-sm border border-white/5' 
                     : 'bg-gradient-to-br from-[#8b5cf6]/20 to-[#ec4899]/20 text-white border border-[#8b5cf6]/30 rounded-tl-sm'
                  }`}>
                     <p className="text-sm leading-relaxed">{msg.text}</p>
                     <p className="text-[10px] text-right mt-2 text-white/40 uppercase tracking-widest">{msg.sender === 'user' ? 'Client' : 'Agent AI'}</p>
                  </div>
               </div>
            ))}
            {isTyping && (
               <div className="flex w-full justify-start animate-[fadeIn_0.3s_ease-out_forwards]">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm px-5 py-4 flex gap-1">
                     <div className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                     <div className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                     <div className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-bounce"></div>
                  </div>
               </div>
            )}
         </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
           from { opacity: 0; transform: translateY(10px); }
           to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
