#!/usr/bin/env node
// Trimite o scrisoare Reverb scrisă ca text simplu (de ex. e-mailul „verificare gratuită” făcut de motorul SEO local),
// din reverb@reverb.ro, în tema site-ului (lib/email/layout.ts). Partea de text a e-mailului e EXACT fișierul aprobat
// de Alin (fără rândul „Subiect:”); partea HTML e același text, așezat în tema Reverb.
//
//   node scripts/trimite_scrisoare.cjs <email.txt> --catre <adresa> [--html <iesire.html>]   → doar previzualizare
//   ... --test   → trimite la reverb@reverb.ro (noi), cu „[TEST]” în subiect
//   ... --da     → trimite la <adresa>, cu o copie ascunsă la reverb@reverb.ro; doar după „da”-ul lui Alin pe textul exact
//
// Din 14 nov 2026 scrisoarea pleacă de pe serverul site-ului (POST https://reverb.ro/api/scrisoare, cu cheia
// REVERB_SCRISOARE_CHEIE): trimisă de pe laptop ajungea în Spam (obs. 888). `--laptop` = calea veche, direct prin SMTP.
// Cheile se citesc din .env.local și nu se afișează niciodată.

const fs = require("fs");
const path = require("path");
const Module = require("module");

const RADACINA = path.resolve(__dirname, "..");
const ts = require(path.join(RADACINA, "node_modules", "typescript"));
const nodemailer = require(path.join(RADACINA, "node_modules", "nodemailer"));

// lib/email/*.ts se încarcă direct: transpilat în CommonJS la cerere (fără pas de build).
require.extensions[".ts"] = function (mod, fisier) {
  const sursa = fs.readFileSync(fisier, "utf8");
  const js = ts.transpileModule(sursa, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: fisier,
  }).outputText;
  mod._compile(js, fisier);
};
const { renderEmail } = require(path.join(RADACINA, "lib", "email", "layout.ts"));

function argumente(argv) {
  const a = { fisier: null, catre: null, html: null, test: false, da: false, eyebrow: "Verificare gratuită a site-ului" };
  for (let i = 0; i < argv.length; i++) {
    const x = argv[i];
    if (x === "--catre") a.catre = argv[++i];
    else if (x === "--html") a.html = argv[++i];
    else if (x === "--eyebrow") a.eyebrow = argv[++i];
    else if (x === "--test") a.test = true;
    else if (x === "--eticheta") a.eticheta = argv[++i];
    else if (x === "--de") a.de = argv[++i];
    else if (x === "--doar-text") a.doarText = true;
    else if (x === "--laptop") a.laptop = true;
    else if (x === "--server") a.server = argv[++i];
    else if (x === "--da") a.da = true;
    else if (!a.fisier) a.fisier = x;
    else throw new Error(`argument necunoscut: ${x}`);
  }
  if (!a.fisier || !a.catre) throw new Error("folosire: trimite_scrisoare.cjs <email.txt> --catre <adresa> [--html f] [--test | --da]");
  if (a.test && a.da) throw new Error("--test și --da nu merg împreună");
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(a.catre)) throw new Error(`adresă nevalidă: ${a.catre}`);
  return a;
}

/** Textul aprobat → { subiect, text, blocuri } pentru schelet. Forma e cea scrisă de motor/prospect.py: mesaj(). */
function citeste(text) {
  const linii = text.replace(/\r\n/g, "\n").split("\n");
  const m = /^Subiect:\s*(.+)$/.exec(linii[0] || "");
  if (!m) throw new Error("prima linie trebuie să fie „Subiect: …”");
  const corp = linii.slice(1).join("\n").replace(/^\n+/, "").replace(/\s+$/, "") + "\n";
  if (corp.includes("[DE COMPLETAT")) throw new Error("rândul de mână („[DE COMPLETAT …]”) e încă în text: completează-l întâi");
  const bucati = corp.trim().split(/\n\s*\n/);
  const blocuri = [];
  bucati.forEach((b, i) => {
    const r = b.split("\n");
    const numerotat = /^\d+\.\s+\S/.test(r[0]) && r.slice(1).every((l) => /^\s+\S/.test(l));
    if (numerotat) {
      blocuri.push({ kind: "list", label: r[0].trim(), items: r.slice(1).map((l) => l.trim().replace(/^- /, "")) });
    } else if (i === bucati.length - 1 && r.length <= 3 && r[0].trim().length <= 40) {
      // semnătura: „Alin” + „Reverb Digital · reverb.ro”
      blocuri.push({ kind: "divider" }, { kind: "signature", name: r[0].trim(), role: (r[1] || "").split("·")[0].trim() || undefined });
    } else {
      blocuri.push({ kind: "paragraph", text: r.map((l) => l.trim()).join("\n") });
    }
  });
  return { subiect: m[1].trim(), text: corp, blocuri };
}

function dinEnv(nume) {
  const t = fs.readFileSync(path.join(RADACINA, ".env.local"), "utf8");
  const r = new RegExp(`^${nume}\\s*=\\s*(.*)$`, "m").exec(t);
  return r ? r[1].trim().replace(/^["']|["']$/g, "") : "";
}

function cheiSmtp() {
  const user = dinEnv("REVERB_EMAIL_USER");
  const pass = dinEnv("REVERB_EMAIL_PASS");
  if (!user || !pass) throw new Error("REVERB_EMAIL_USER / REVERB_EMAIL_PASS lipsesc din .env.local");
  return { user, pass };
}

async function prinServer(a, subiect, text, html) {
  const cheie = dinEnv("REVERB_SCRISOARE_CHEIE");
  if (!cheie) throw new Error("REVERB_SCRISOARE_CHEIE lipsește din .env.local");
  const adresa = a.server || "https://reverb.ro/api/scrisoare";
  const r = await fetch(adresa, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${cheie}` },
    body: JSON.stringify({
      catre: a.catre,
      test: a.test,
      subiect: a.test ? `${a.eticheta ?? "[TEST]"} ${subiect}`.trim() : subiect,
      text,
      html: a.doarText ? undefined : html,
      de: a.de,
    }),
    redirect: "error",
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.ok) throw new Error(`serverul a răspuns ${r.status}: ${JSON.stringify(j).slice(0, 200)}`);
  console.log(`TRIMIS de pe server ${j.test ? "(test, la noi)" : ""}: acceptat pentru ${(j.acceptat || []).join(", ")}; respins: ${(j.respins || []).join(", ") || "nimic"}; id ${j.id}`);
}

async function main() {
  const a = argumente(process.argv.slice(2));
  const { subiect, text, blocuri } = citeste(fs.readFileSync(a.fisier, "utf8"));
  const primul = blocuri.find((b, i) => i > 0 && b.kind === "paragraph");
  const { html } = renderEmail({
    lang: "ro",
    preheader: primul ? primul.text.slice(0, 140) : subiect,
    eyebrow: a.eyebrow,
    title: subiect,
    blocks: blocuri,
    footer: "client",
  });
  if (a.html) fs.writeFileSync(a.html, html, "utf8");
  console.log(`subiect: ${subiect}`);
  console.log(`către: ${a.catre}; blocuri: ${blocuri.map((b) => b.kind).join(", ")}; text: ${text.length} caractere`);
  if (!a.test && !a.da) {
    console.log("PREVIZUALIZARE: nimic trimis (--test = la noi, --da = la destinatar)");
    return;
  }
  if (!a.laptop) return prinServer(a, subiect, text, html);
  const { user, pass } = cheiSmtp();
  const t = nodemailer.createTransport({ host: "smtp.hostinger.com", port: 465, secure: true, auth: { user, pass } });
  const info = await t.sendMail({
    from: `"${a.de ?? "Alin · Reverb Digital"}" <${user}>`,
    to: a.test ? user : a.catre,
    bcc: a.test ? undefined : user,
    replyTo: user,
    subject: a.test ? `${a.eticheta ?? "[TEST]"} ${subiect}`.trim() : subiect,
    text,
    html: a.doarText ? undefined : html,
  });
  console.log(`TRIMIS ${a.test ? "(test, la noi)" : ""}: acceptat de server pentru ${info.accepted.join(", ")}; respins: ${info.rejected.join(", ") || "nimic"}; id ${info.messageId}`);
}

main().catch((e) => {
  console.error(`EROARE: ${e.message}`);
  process.exit(1);
});
