"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, CheckCircle, AlertCircle, ExternalLink, Share2, Users, Play } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";
import SectionPlayButton from "./SectionPlayButton";

type Status = "idle" | "sending" | "success" | "error";

export default function FooterCTA() {
  const { lang, toggle } = useLanguage();
  const tx = translations[lang].footer;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/humanoid-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || tx.errorGeneric);
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg(tx.errorGeneric);
      setStatus("error");
    }
  };

  return (
    <footer id="footer-cta" className="relative bg-[#080810] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#00E5FF]/3 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* === CTA Section === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 border border-[#00E5FF]/20 rounded-full px-5 py-2 bg-[#00E5FF]/5">
                <Download size={12} className="text-[#00E5FF]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#00E5FF]/80 font-semibold">{tx.badge}</span>
              </div>
              <SectionPlayButton sectionId="footer-cta" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              {tx.title}{" "}
              <span className="text-[#00E5FF]">{tx.titleAccent}</span>
            </h2>

            <p className="text-white/45 font-light text-base md:text-lg leading-relaxed mb-8">{tx.subtitle}</p>

            {/* What's inside bullets */}
            <div className="space-y-3">
              {[
                lang === "ro" ? "48 de pagini de date exclusive" : "48 pages of exclusive data",
                lang === "ro" ? "Harta completă a actorilor globali" : "Complete map of global players",
                lang === "ro" ? "Predicții validate 2027–2030" : "Validated predictions 2027–2030",
                lang === "ro" ? "Playbook de adaptare pentru Europa" : "European adaptation playbook",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                  <span className="text-white/55 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pt-4"
          >
            <div className="rounded-2xl border border-white/8 bg-[#0e0e1a] p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="flex flex-col items-center text-center gap-5 py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center">
                      <CheckCircle size={32} className="text-[#00E5FF]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-2xl mb-2">{tx.successTitle}</div>
                      <div className="text-white/50 text-sm font-light leading-relaxed">
                        {tx.successSub}{" "}
                        <span className="text-[#00E5FF] font-medium">{email}</span>.
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-6">
                      {lang === "ro" ? "Acces gratuit · Fără card" : "Free access · No card"}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div
                        className="relative rounded-xl overflow-hidden transition-all duration-300"
                        style={{
                          border: focused
                            ? "1px solid rgba(0,229,255,0.4)"
                            : status === "error"
                            ? "1px solid rgba(255,100,100,0.4)"
                            : "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.03)",
                          boxShadow: focused ? "0 0 20px rgba(0,229,255,0.08)" : "none",
                        }}
                      >
                        <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                          onFocus={() => setFocused(true)}
                          onBlur={() => setFocused(false)}
                          placeholder={tx.placeholder}
                          required
                          className="w-full bg-transparent text-white placeholder:text-white/20 pl-10 pr-5 py-4 text-sm font-light outline-none"
                        />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-400/80 text-xs font-light">
                          <AlertCircle size={12} />
                          {errorMsg}
                        </div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={status !== "sending" ? {
                          scale: 1.02,
                          boxShadow: "0 0 30px rgba(0,229,255,0.3)",
                        } : {}}
                        whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                        className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-[#00E5FF] text-[#080810] px-8 py-4 font-bold uppercase tracking-[0.15em] text-[11px] cursor-pointer transition-colors hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#080810]/30 border-t-[#080810] rounded-full animate-spin" />
                            {tx.sending}
                          </>
                        ) : (
                          <>
                            <Download size={14} />
                            {tx.cta}
                          </>
                        )}
                      </motion.button>
                    </form>

                    <p className="mt-4 text-[11px] text-white/20 font-light text-center">{tx.gdpr}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* === Footer proper === */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Brand column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center">
                  <span className="text-[#00E5FF] font-black text-sm">RU</span>
                </div>
                <div>
                  <div className="text-white font-bold text-base tracking-wide">{tx.brand}</div>
                  <div className="text-white/25 text-[10px] tracking-widest uppercase font-light">{tx.brandSub}</div>
                </div>
              </div>
              <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs">
                {lang === "ro"
                  ? "Analiză premium despre revoluția robotică globală. Date, predicții și strategii pentru liderii de mâine."
                  : "Premium analysis of the global robotics revolution. Data, predictions and strategies for tomorrow's leaders."}
              </p>

              {/* Language switcher in footer */}
              <div className="mt-5 flex items-center gap-2">
                <span className="text-white/25 text-[10px] uppercase tracking-widest">
                  {lang === "ro" ? "Limbă:" : "Language:"}
                </span>
                <button
                  onClick={() => { if (lang !== "ro") toggle(); }}
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    lang === "ro"
                      ? "bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30"
                      : "text-white/30 hover:text-white/60"
                  }`}
                >
                  RO
                </button>
                <button
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    lang === "en"
                      ? "bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30"
                      : "text-white/30 hover:text-white/60"
                  }`}
                  onClick={() => { if (lang !== "en") toggle(); }}
                >
                  EN
                </button>
              </div>

              {/* Social links */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://x.com/reverbro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5 transition-all duration-300"
                >
                  <Share2 size={14} strokeWidth={1.5} />
                </a>
                <a
                  href="https://linkedin.com/company/reverbro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/5 transition-all duration-300"
                >
                  <Users size={14} strokeWidth={1.5} />
                </a>
                <a
                  href="https://youtube.com/@reverbro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-[#FFE600] hover:border-[#FFE600]/30 hover:bg-[#FFE600]/5 transition-all duration-300"
                >
                  <Play size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-4">{tx.links.title}</div>
              <ul className="space-y-3">
                {[
                  { label: tx.links.about, href: "/despre" },
                  { label: tx.links.showcase, href: "/showcase" },
                  { label: tx.links.contact, href: "/contact" },
                  { label: tx.links.legal, href: "/legal" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/35 text-sm font-light hover:text-[#00E5FF] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Report info */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-4">
                {lang === "ro" ? "Raport" : "Report"}
              </div>
              <ul className="space-y-3">
                {[
                  lang === "ro" ? "48 de pagini" : "48 pages",
                  lang === "ro" ? "Actualizat Iunie 2026" : "Updated June 2026",
                  lang === "ro" ? "Date verificate" : "Verified data",
                  lang === "ro" ? "PDF + Web" : "PDF + Web",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/30 text-sm font-light">
                    <div className="w-1 h-1 rounded-full bg-[#00E5FF]/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 text-[11px] text-white/20 font-light">
              <span>{tx.copyright}</span>
              <span className="w-px h-3 bg-white/10" />
              <span>{tx.rights}</span>
            </div>
            <div className="flex items-center gap-5 text-[11px]">
              <Link href="/legal" className="text-white/20 hover:text-[#00E5FF]/60 transition-colors font-light">
                {lang === "ro" ? "Confidențialitate" : "Privacy"}
              </Link>
              <Link href="/legal" className="text-white/20 hover:text-[#00E5FF]/60 transition-colors font-light">
                {lang === "ro" ? "Termeni" : "Terms"}
              </Link>
              <a
                href="https://reverb.ro"
                className="text-[#00E5FF]/40 hover:text-[#00E5FF] transition-colors font-medium flex items-center gap-1"
              >
                reverb.ro <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
