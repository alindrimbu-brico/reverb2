"use client";

// Reverb Studio — mașina de lucru a lui Alin (plan: docs/designs/studio_instrument_2026-11-12/design_v2_decizii.md).
// Pagina ține doar ce funcționează cap-coadă: Postări (creare + publicare prin rutină) și Muzică.
// Machetele vechi (Clipuri Virale, Deep Research, Regizor Veo, NotebookLM, Poarta de Aprobare, Tablou) au fost scoase pe 12 nov 2026:
// afișau texte fixe ca rezultate. O filă nouă intră aici doar când face cu adevărat ce scrie pe ea.
import { useEffect, useState } from "react";
import InstallPWA from "@/components/InstallPWA";
import MuzicaTab from "./MuzicaTab";
import PostariTab from "./PostariTab";

type Fila = "postari" | "muzica";
const FILE: { id: Fila; nume: string; descriere: string }[] = [
  { id: "postari", nume: "Postări", descriere: "Text și grafică pentru rețelele mărcilor, de la idee la publicare." },
  { id: "muzica", nume: "Muzică", descriere: "Cerere → prompt și versuri Suno → bibliotecă → clip cu versuri → kit YouTube." },
];

export default function StudioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [authConfigured, setAuthConfigured] = useState<boolean | null>(null);
  const [passphrase, setPassphrase] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);
  const [fila, setFila] = useState<Fila>("postari");

  // Un singur player cântă: când pornește o piesă (audio sau clip), celelalte se opresc.
  // „play” nu urcă prin DOM, de aceea ascultăm în faza de captură pe document.
  useEffect(() => {
    const doarUnul = (e: Event) => {
      const pornit = e.target;
      if (!(pornit instanceof HTMLMediaElement) || pornit.muted) return;
      document.querySelectorAll<HTMLMediaElement>("audio, video").forEach((m) => {
        if (m !== pornit && !m.paused && !m.muted) m.pause();
      });
    };
    document.addEventListener("play", doarUnul, true);
    return () => document.removeEventListener("play", doarUnul, true);
  }, []);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/studio/auth", { method: "GET", cache: "no-store" });
        const data = await res.json();
        if (!active) return;
        setAuthConfigured(Boolean(data?.configured));
        setIsAuthenticated(Boolean(data?.authenticated));
      } catch {
        if (!active) return;
        setIsAuthenticated(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    try {
      const f = window.localStorage.getItem("reverb-studio-fila");
      if (f === "postari" || f === "muzica") setFila(f);
    } catch {}
  }, []);

  const alegeFila = (f: Fila) => {
    setFila(f);
    try {
      window.localStorage.setItem("reverb-studio-fila", f);
    } catch {}
  };

  const handlePassphraseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passphrase.trim()) return;
    setIsSubmittingAuth(true);
    setAuthError(null);
    try {
      const res = await fetch("/api/studio/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passphrase: passphrase.trim() }),
        cache: "no-store",
      });
      const data = await res.json();
      if (res.ok && data?.authenticated) {
        setPassphrase("");
        setAuthError(null);
        setIsAuthenticated(true);
      } else {
        setAuthError(data?.error || "Autentificare eșuată.");
        setPassphrase("");
      }
    } catch {
      setAuthError("Eroare de conexiune la verificarea parolei.");
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const handleLogout = async () => {
    try {
      const r = await fetch("/api/studio/auth", { method: "DELETE", cache: "no-store" });
      if (!r.ok) {
        window.alert("Ieșirea nu a reușit (serverul nu a răspuns). Sesiunea e încă deschisă pe acest dispozitiv; încearcă din nou.");
        return;
      }
    } catch {
      window.alert("Ieșirea nu a reușit (fără conexiune). Sesiunea e încă deschisă pe acest dispozitiv; încearcă din nou.");
      return;
    }
    setIsAuthenticated(false);
  };

  if (isAuthenticated === false) {
    return (
      <div className="studio-light-root bg-[#070809] min-h-screen text-white flex flex-col items-center justify-center p-6 antialiased font-mono">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-md shadow-2xl text-center">
          <h2 className="text-xl font-medium text-white mb-1">Reverb Studio</h2>
          <p className="text-xs text-neutral-400 mb-6 font-sans">Aplicația de lucru a lui Alin. Intrarea se face cu fraza de acces.</p>

          {authConfigured === false && (
            <div className="mb-5 rounded-2xl border border-white/20 bg-white/[0.03] p-4 text-left text-xs font-sans text-neutral-200 leading-relaxed">
              <strong className="block font-mono uppercase tracking-wider text-neutral-300 mb-1">Configurare necesară în Vercel</strong>
              Setează variabila <code className="text-white font-mono">REVERB_STUDIO_PASSPHRASE</code> (minim 16 caractere) în{" "}
              <strong>Vercel Settings → Environment Variables</strong> pentru a activa accesul.
            </div>
          )}

          <form onSubmit={handlePassphraseSubmit} className="space-y-4">
            <input
              type="password"
              autoComplete="current-password"
              value={passphrase}
              onChange={(e) => {
                setPassphrase(e.target.value);
                setAuthError(null);
              }}
              placeholder="Fraza de acces"
              autoFocus
              className="w-full text-center text-sm font-medium rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-white outline-none focus:border-white"
            />
            {authError && <p className="text-xs text-rose-300 font-sans leading-relaxed">{authError}</p>}
            <button
              type="submit"
              disabled={isSubmittingAuth}
              className="w-full rounded-full bg-white py-3 text-xs uppercase tracking-widest text-black font-bold hover:bg-neutral-200 transition-all disabled:opacity-50"
            >
              {isSubmittingAuth ? "Se verifică…" : "Intră în Studio →"}
            </button>
          </form>
          <div className="mt-6 pt-4 border-t border-white/5">
            <a href="https://reverb.ro/" className="text-[10px] text-neutral-500 hover:text-white uppercase tracking-wider">
              ← Înapoi la site
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (isAuthenticated === null) {
    return <div className="bg-[#070809] min-h-screen" />;
  }

  return (
    <div className="studio-light-root bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-20 border-b border-white/10 pt-28 pb-6 px-6 lg:px-10 bg-[#090a0c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Reverb Studio</h1>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">Spui ce vrei să apară, pe ce marcă și unde. Studio creează, tu aprobi, rutina publică.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <InstallPWA mode="studio" />
            <a
              href="https://reverb.ro/"
              className="[@media(display-mode:standalone)]:hidden rounded-full border border-white/15 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/10 transition-all"
            >
              ← Site
            </a>
            <button
              onClick={handleLogout}
              className="rounded-full border border-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/10 hover:text-white transition-all"
              title="Închide sesiunea pe acest dispozitiv"
            >
              Ieșire
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 grid gap-3 sm:grid-cols-2" role="tablist" aria-label="Secțiunile Studio">
          {FILE.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={fila === f.id}
              onClick={() => alegeFila(f.id)}
              className={`p-4 rounded-2xl text-left transition-all border ${
                fila === f.id ? "bg-white text-black border-white light:border-black/40" : "bg-neutral-900/40 text-neutral-300 border-white/10 hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="font-bold text-sm font-mono">{f.nume}</div>
              <div className={`text-[11px] mt-1 ${fila === f.id ? "opacity-70" : "text-neutral-400"}`}>{f.descriere}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {fila === "postari" && <PostariTab onNeautentificat={() => setIsAuthenticated(false)} />}
        {fila === "muzica" && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
            <MuzicaTab onNeautentificat={() => setIsAuthenticated(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
