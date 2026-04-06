"use client";

import React, { useState } from "react";
import Link from "next/link";

const ideas = [
    {
        id: 1,
        title: "Arhitectura Scalării",
        desc: "Hint-ul suprem despre cum să structurezi operațiunile logistice ale unui eCommerce fără a distruge marginile de profit.",
        price: 190
    },
    {
        id: 2,
        title: "Lumina Conversiei",
        desc: "O perspectivă rară asupra psihologiei clientului care renunță la coșul de cumpărături. Crește rata de conversie cu 40%.",
        price: 250
    },
    {
        id: 3,
        title: "Algoritmul Viralității",
        desc: "Cum să gândești o reclamă asumată pentru publicul de nișă (Hint monetizat, testat pe zeci de mii de views).",
        price: 150
    },
    {
        id: 4,
        title: "Retenția Guru",
        desc: "Nu vinde o dată. Vinde de 10 ori. O strategie în 5 pași de email marketing implementată de experți.",
        price: 320
    }
];

export default function GuruStore() {
    const [cart, setCart] = useState<typeof ideas>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [addedId, setAddedId] = useState<number | null>(null);

    const addToCart = (idea: typeof ideas[0]) => {
        setCart([...cart, idea]);
        setAddedId(idea.id);
        setTimeout(() => setAddedId(null), 1500);
    };

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="relative min-h-screen bg-[#050505] text-[#f5f1ea] font-sans selection:bg-[#f5a623]/30 overflow-hidden">
            {/* Glow effect */}
            <div className="pointer-events-none absolute -top-[20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.15)_0%,transparent_60%)] blur-2xl block" />

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between p-8 md:px-16">
                <Link href="/" className="text-2xl font-bold tracking-widest text-[#f5a623] hover:opacity-80 transition">
                    GURU.
                </Link>
                <button 
                    onClick={() => setIsCartOpen(true)}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_4px_15px_rgba(245,166,35,0.2)]"
                >
                    <span className="text-xl">🛒</span> Coș ({cart.length})
                </button>
            </header>

            {/* Hero */}
            <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 pb-20 text-center md:pt-24">
                <h1 className="mb-6 max-w-4xl text-5xl font-medium leading-[1.1] tracking-tight md:text-7xl">
                    Aducem <span className="text-[#f5a623] drop-shadow-[0_0_20px_rgba(245,166,35,0.4)]">Lumină.</span>
                </h1>
                <p className="max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl">
                    Descoperă idei premium și hint-uri educaționale care îți vor schimba perspectiva. Plătești pentru claritate, primești revelație.
                </p>

                {/* Grid */}
                <div className="mt-20 grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-2 text-left">
                    {ideas.map((idea) => (
                        <div 
                            key={idea.id}
                            className="group flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#f5a623]/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(245,166,35,0.15)]"
                        >
                            <div>
                                <h3 className="mb-3 text-2xl font-semibold">{idea.title}</h3>
                                <p className="mb-8 leading-relaxed text-white/60">{idea.desc}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold">{idea.price} RON</span>
                                <button
                                    onClick={() => addToCart(idea)}
                                    className={`rounded-full border px-6 py-2.5 font-medium transition ${
                                        addedId === idea.id 
                                            ? "bg-[#f5a623] border-[#f5a623] text-[#050505]" 
                                            : "border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-[#050505]"
                                    }`}
                                >
                                    {addedId === idea.id ? "Adăugat! ✔️" : "Prinde Ideea"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Cart Modal */}
            <div 
                className={`fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-white/10 bg-[#0a0a0a]/95 p-8 backdrop-blur-2xl transition-transform duration-500 ease-in-out ${
                    isCartOpen ? "translate-x-0 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-semibold text-[#f5a623]">Coșul tău de idei</h2>
                    <button 
                        onClick={() => setIsCartOpen(false)}
                        className="text-white/50 hover:text-white transition text-3xl leading-none"
                    >
                        &times;
                    </button>
                </div>

                <div className="flex flex-col h-[calc(100vh-250px)] overflow-y-auto pr-2">
                    {cart.length === 0 ? (
                        <p className="text-white/50 italic">Coșul este gol. Alege niște idei!</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="flex items-center justify-between border-b border-white/10 py-5">
                                <span className="font-medium">{item.title}</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-white/80">{item.price} RON</span>
                                    <button 
                                        onClick={() => removeFromCart(index)}
                                        className="font-bold text-red-500/80 hover:text-red-500 transition"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#0a0a0a] p-8">
                    <div className="flex justify-between text-2xl font-bold mb-6">
                        <span>Total:</span>
                        <span>{total} RON</span>
                    </div>
                    <button 
                        className="w-full rounded-2xl bg-[#f5a623] py-4 text-center text-lg font-bold text-[#050505] transition hover:bg-[#e0981e] hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={cart.length === 0}
                        onClick={handleCheckout}
                    >
                        Plătește & Revendică
                    </button>
                </div>
            </div>
            
            {/* Checkout Modal */}
            <div 
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
                    isCheckoutOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsCheckoutOpen(false)} />
                <div className="relative z-10 w-full max-w-lg rounded-[32px] border border-white/10 bg-[#0a0a0a] p-10 shadow-2xl">
                    <button 
                        onClick={() => setIsCheckoutOpen(false)}
                        className="absolute right-6 top-6 text-2xl text-white/50 hover:text-white"
                    >
                        &times;
                    </button>
                    <h2 className="mb-2 text-3xl font-semibold text-[#f5a623]">Finalizare Plată</h2>
                    <p className="mb-8 text-white/50">Ai ales {cart.length} idei esențiale.</p>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Plată simulată cu succes! Vei primi ideile pe email."); setIsCheckoutOpen(false); setCart([]); }}>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-white/70">Nume Complet</label>
                            <input type="text" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-[#f5a623] focus:outline-none focus:ring-1 focus:ring-[#f5a623]" placeholder="Ex: Alin Dragoș" />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-white/70">Adresa de Email (unde primești accesul)</label>
                            <input type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-[#f5a623] focus:outline-none focus:ring-1 focus:ring-[#f5a623]" placeholder="alin@reverb.ro" />
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="mb-4 flex items-center justify-between text-white/70">
                                <span>Detalii Card (Prototip)</span>
                                <span>🔒 Securizat</span>
                            </div>
                            <input type="text" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 focus:border-[#f5a623] focus:outline-none" placeholder="0000 0000 0000 0000" />
                            <div className="mt-3 flex gap-3">
                                <input type="text" className="w-1/2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 focus:border-[#f5a623] focus:outline-none" placeholder="LL/AA" />
                                <input type="text" className="w-1/2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 focus:border-[#f5a623] focus:outline-none" placeholder="CVC" />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="mt-4 w-full rounded-full bg-[#f5a623] py-4 text-lg font-bold text-[#050505] transition hover:bg-[#e0981e] hover:shadow-[0_0_15px_rgba(245,166,35,0.4)]"
                        >
                            Achită {total} RON
                        </button>
                    </form>
                </div>
            </div>

            {/* Overlay */}
            {isCartOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity" 
                    onClick={() => setIsCartOpen(false)} 
                />
            )}
        </div>
    );
}
