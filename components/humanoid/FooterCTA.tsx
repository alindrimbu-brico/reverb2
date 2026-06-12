"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, ArrowRight, CheckCircle } from "lucide-react";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-[#080810] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

      {/* Large glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#00E5FF]/4 blur-[120px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 border border-[#00E5FF]/20 rounded-full px-5 py-2 bg-[#00E5FF]/5"
        >
          <Download size={12} className="text-[#00E5FF]" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#00E5FF]/80 font-semibold">
            Raport Exclusiv 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight"
        >
          Rămâi în fața{" "}
          <span className="text-[#00E5FF]">revoluției</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/45 font-light text-base md:text-lg leading-relaxed mb-12"
        >
          Descarcă Raportul „Realitatea Umanoidă 2026" — 48 de pagini cu date exclusive,
          harta completă a actorilor, predicții pentru 2027–2030 și playbook-ul de adaptare
          pentru companii din Europa.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div
                className="flex-1 relative rounded-full overflow-hidden transition-all duration-300"
                style={{
                  border: focused ? "1px solid rgba(0,229,255,0.4)" : "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  boxShadow: focused ? "0 0 20px rgba(0,229,255,0.1)" : "none",
                }}
              >
                <Mail
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="adresa@ta.com"
                  required
                  className="w-full bg-transparent text-white placeholder:text-white/25 pl-10 pr-5 py-4 text-sm font-light outline-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(0,229,255,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 rounded-full bg-[#00E5FF] text-[#080810] px-8 py-4 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap cursor-pointer transition-colors hover:bg-white"
              >
                <Download size={14} />
                Descarcă Raportul
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex flex-col items-center gap-4 py-6"
            >
              <CheckCircle size={40} className="text-[#00E5FF]" strokeWidth={1.5} />
              <div>
                <div className="text-white font-bold text-xl mb-2">Raportul e al tău!</div>
                <div className="text-white/50 text-sm font-light">
                  Verifică inbox-ul — ai primit link-ul de descărcare la{" "}
                  <span className="text-[#00E5FF]">{email}</span>.
                </div>
              </div>
            </motion.div>
          )}

          {!submitted && (
            <p className="mt-4 text-[11px] text-white/25 font-light">
              Zero spam. Dezabonare cu un click. Date securizate GDPR.
            </p>
          )}
        </motion.div>

        {/* Divider */}
        <div className="mt-24 pt-12 border-t border-white/6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo/brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center">
                <span className="text-[#00E5FF] font-bold text-xs">RU</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-wide">Realitatea Umanoidă</div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase font-light">2026 Report</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-[11px] text-white/30 font-light">
              <span>© 2026 Reverb.ro</span>
              <span className="w-px h-3 bg-white/10" />
              <span>Toate drepturile rezervate</span>
              <span className="w-px h-3 bg-white/10" />
              <a
                href="/legal"
                className="hover:text-white/60 transition-colors duration-200 flex items-center gap-1"
              >
                Legal <ArrowRight size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
