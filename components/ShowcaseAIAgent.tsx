"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ShowcaseAIAgent({ industryContext }: { industryContext: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset state on open if no messages
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        let greeting = "Salut! Cum te pot ajuta astăzi cu platforma digitală?";
        
        switch (industryContext) {
          case 'medical':
            greeting = "Modul Triage Inițiat. Analizez simptomele și corelez istoricul pacientului. Cu ce vă ajut?";
            break;
          case 'legal':
            greeting = "Diagnosticare contracte activă. Analizez posibile breșe legale și clauze abuzive. Introduceți un sumar.";
            break;
          case 'real-estate':
            greeting = "Broker Digital Lansat. Match-uiesc criteriile de preț și suprafață cu cele mai bune proprietăți din portofoliu.";
            break;
          case 'architecture':
            greeting = "Asistent Spațial activat. Desenați conceptual cerințele și voi genera schițele imediat.";
            break;
        }

        setMessages([{ sender: 'ai', text: greeting }]);
        setIsTyping(false);
      }, 1200);
    }
  }, [isOpen, industryContext]);

  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
       setMessages(prev => [...prev, { sender: 'ai', text: "Simulator Nevronix rulat. Acest demo dovedește capacitatea capabilităților noastre AI din infrastructura Reverb. Contactează-ne pentru implementare reală!" }]);
       setIsTyping(false);
    }, 2000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center transition-transform hover:scale-110"
      >
        <span className="text-white font-mono text-xs font-bold tracking-widest uppercase">AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] md:w-[360px] h-[450px] bg-[#1a0533]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse"></div>
              <span className="text-xs uppercase tracking-widest text-white/80 font-bold font-mono">Nevronix Core</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">✕</button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 font-mono text-xs">
            {messages.map((m, i) => (
              <div key={i} className={`flex w-full ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 max-w-[85%] rounded-lg ${m.sender === 'user' ? 'bg-white/10 text-white border border-white/5' : 'bg-[#8b5cf6]/20 text-[#e9d5ff] border border-[#8b5cf6]/30'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="p-3 max-w-[85%] rounded-lg bg-[#8b5cf6]/10 text-[#e9d5ff] border border-[#8b5cf6]/20 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Introduceți interfața simulată..."
              className="flex-1 bg-transparent border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#8b5cf6]/50 font-mono"
            />
            <button type="submit" className="bg-[#8b5cf6] text-white px-3 py-2 rounded-lg text-xs font-bold uppercase hover:bg-[#7c3aed] transition-colors">
              Go
            </button>
          </form>
        </div>
      )}
    </>
  );
}
