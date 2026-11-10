import type { Metadata } from "next";
import Link from "next/link";
import InstallPWA from "@/components/InstallPWA";

export const metadata: Metadata = {
  title: "Instalare Privată Aplicație — Reverb.ro",
  robots: {
    index: false,
    follow: false,
  },
  manifest: "/site-manifest.json",
  icons: {
    icon: [
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function InstaleazaPage() {
  return (
    <div className="min-h-screen bg-[#06090F] text-white flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg rounded-3xl border border-cyan-500/25 bg-[#0C1321] p-8 text-center shadow-2xl">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] uppercase tracking-widest mb-4">
          🔒 Pagină Privată de Administrare (Ascunsă de pe site-ul public)
        </span>
        <img
          src="/icon-512.png?v=3"
          alt="Reverb.ro App Icon"
          className="w-24 h-24 mx-auto mb-4 rounded-3xl shadow-[0_0_30px_rgba(0,229,255,0.25)] border border-cyan-400/30"
        />
        <h1 className="text-2xl font-bold mb-2">Aplicația Reverb.ro</h1>
        <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
          Această pagină este privată (nu apare în niciun meniu public și nu este indexată pe Google). Apasă pe butonul de mai jos ca să-ți instalezi aplicația <strong>Reverb.ro</strong> pe telefon sau pe tabletă:
        </p>

        <div className="flex flex-col items-center gap-4 mb-6">
          <InstallPWA mode="site" className="w-full max-w-xs py-3 text-sm" />
        </div>

        <div className="border-t border-white/10 pt-5 mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <Link
            href="/studio"
            className="rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 px-4 py-2 hover:bg-rose-500/30 transition-all"
          >
            🎬 Mergi la Panoul Reverb Studio (/studio)
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 text-neutral-300 px-4 py-2 hover:bg-white/10 transition-all"
          >
            ← Deschide Reverb.ro
          </Link>
        </div>
      </div>
    </div>
  );
}
