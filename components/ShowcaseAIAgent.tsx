"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ShowcaseAIAgent({ industryContext }: { industryContext: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const pathname = usePathname();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getSystemContext = (context: string) => {
      switch (context) {
          case 'medical':
            return "Ești Nevronix, modulul Triage AI al clinicii. Scopul tău este să evaluezi simptomele descrise de pacienți, să aloci o prioritate (Critic, Moderat, Scăzut) și să sugerezi un medic sau departament. Fii concis, empatic dar steril / profesional. Fix 2 fraze.";
          case 'legal':
            return "Ești Nevronix, modulul Contract Scanner AI. Scopul tău este să răspunzi la întrebări despre auditul contractelor și să subliniezi potențiale riscuri legale. Ton brutalist, ferm, precis.";
          case 'real-estate':
            return "Ești Nevronix, asistentul automatizat pentru Real Estate Luxury. Prezintă oferte și cere detalii despre ce caută clientul (zonă, preț, facilități).";
          case 'architecture':
            return "Ești Nevronix, asistent de generare conceptuală. Consiliezi utilizatorul spre stiluri arhitecturale.";
          default:
            return "Ești Nevronix, asistentul AI integrat. Răspunde extrem de scurt și profesionist în limba română (maxim 2 propoziții).";
      }
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      
      const greetingMap: any = {
        'medical': "Modul Triage Inițiat. Corelez istoricul. Cu ce simptome vă prezentați?",
        'legal': "Diagnosticare contracte activă. Analizez breșe legale. Introduceți un sumar.",
        'real-estate': "Broker Digital Lansat. Ce criterii primează pentru viitoarea proprietate?",
        'architecture': "Asistent Spațial activat. Vă rog descrieți viziunea."
      };
      
      const greeting = greetingMap[industryContext] || "Salut! Sunt Nevronix. Cum te pot ajuta?";

      setTimeout(() => {
        setMessages([{ sender: 'ai', text: greeting }]);
        setIsTyping(false);
      }, 800);
    }
  }, [isOpen, industryContext]);

  useEffect(() => {
     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const [input, setInput] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput("");
    setIsTyping(true);

    try {
        const res = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: userText,
                systemContext: getSystemContext(industryContext)
            })
        });
        
        if (!res.ok) throw new Error("API Route Failed");
        const data = await res.json();
        
        setMessages(prev => [...prev, { sender: 'ai', text: data.reply || "Eroare internă Nevronix." }]);
    } catch (err) {
        setMessages(prev => [...prev, { sender: 'ai', text: "Nu am putut interoga serverul Nevronix." }]);
    } finally {
        setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#121212] border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center transition-transform hover:scale-110"
      >
        <span className="text-white font-mono text-xs font-bold tracking-widest uppercase">AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] md:w-[360px] h-[450px] bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.2s_ease-out]">
          <div className="px-4 py-3 border-b border-white/10 bg-black/40 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold font-mono">Nevronix Core Server</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">✕</button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 font-mono text-xs">
            {messages.map((m, i) => (
              <div key={i} className={`flex w-full ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 max-w-[85%] rounded-lg ${m.sender === 'user' ? 'bg-white/10 text-white' : 'bg-transparent border border-white/20 text-[#cccccc]'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="p-3 max-w-[85%] rounded-lg border border-white/20 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/60 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Așteaptă input..."
              disabled={isTyping}
              className="flex-1 bg-transparent border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-white/50 font-mono disabled:opacity-50"
            />
            <button type="submit" disabled={isTyping} className="bg-white text-black px-3 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-gray-200 transition-colors disabled:opacity-50">
              Go
            </button>
          </form>
        </div>
      )}
    </>
  );
}
