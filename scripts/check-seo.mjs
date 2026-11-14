// Verificare SEO după build: node scripts/check-seo.mjs http://localhost:3000
//
// 1. Fiecare page.tsx din app/ trebuie să fie în sitemap, în NOINDEX sau o redirecționare.
// 2. Fiecare adresă din sitemap răspunde 200, are canonical = adresa ei și un titlu propriu.
// 3. Paginile noindex au <meta name="robots" content="noindex...">.
// 4. Machetele (/showcase/<x> și dosarele statice din public/) lipsesc din sitemap și
//    răspund cu antetul X-Robots-Tag: noindex (middleware.ts + isMockupPath din lib/routes.ts).
//    Listele de mai jos sunt copia celor din lib/routes.ts: se schimbă împreună.
import fs from "node:fs";
import path from "node:path";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE_URL = "https://reverb.ro";
const NOINDEX = ["/portal", "/en/portal", "/guru", "/instaleaza", "/studio"];
const REDIRECTS = ["/showcase/xiaolong", "/en/showcase/xiaolong"];
const SHOWCASE_INDEXABLE = ["florarte", "surya"];
const MOCKUP_SAMPLES = [
  "/acasa-showcase/index.html",
  "/aura/index.html",
  "/noapte/index.html",
  "/spiritual-site/index.html",
  "/guru-store/index.html",
];
const isMockup = (route) => {
  const m = route.replace(/^\/(en|es|pt|ru|zh)(?=\/)/, "").match(/^\/showcase\/([^/]+)/);
  return !!m && !SHOWCASE_INDEXABLE.includes(m[1]);
};
const GENERIC_TITLES =new Set(["Reverb — Structură, execuție, rezultate", "Clarity | Reverb", "Clarity"]);

function walkPages(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkPages(p, out);
    else if (e.name === "page.tsx") out.push(p);
  }
  return out;
}
function routeOf(file) {
  const rel = path.relative(path.join(process.cwd(), "app"), path.dirname(file)).split(path.sep).join("/");
  return rel === "" ? "/" : `/${rel}`;
}
const attr = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

async function main() {
  const sitemapXml = await (await fetch(`${base}/sitemap.xml`)).text();
  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const sitemapPaths = new Set(urls.map((u) => u.replace(SITE_URL, "") || "/"));
  const problems = [];
  const mockups = [];

  // 1. acoperirea paginilor statice (rutele dinamice se verifică prin adresele din sitemap)
  for (const file of walkPages(path.join(process.cwd(), "app"))) {
    const route = routeOf(file);
    if (/\[/.test(route)) continue;
    if (isMockup(route)) {
      if (sitemapPaths.has(route)) problems.push(`machetă în sitemap: ${route}`);
      if (!REDIRECTS.includes(route)) mockups.push(route);
      continue;
    }
    if (!sitemapPaths.has(route) && !NOINDEX.includes(route) && !REDIRECTS.includes(route)) {
      problems.push(`pagină lipsă din sitemap și din NOINDEX: ${route}`);
    }
  }

  // 2. fiecare adresă din sitemap
  let ok = 0;
  for (const url of urls) {
    const p = url.replace(SITE_URL, "") || "/";
    const res = await fetch(`${base}${p}`, { headers: { "user-agent": "bingbot" } });
    if (res.status !== 200) { problems.push(`${p}: HTTP ${res.status}`); continue; }
    const html = await res.text();
    const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
    const title = attr(html, /<title>([^<]*)<\/title>/);
    const robots = attr(html, /<meta name="robots" content="([^"]+)"/);
    if (canonical !== url) problems.push(`${p}: canonical „${canonical}” (așteptat ${url})`);
    if (!title || GENERIC_TITLES.has(title)) problems.push(`${p}: titlu generic sau lipsă „${title}”`);
    // Prima pagină are titlu absolut; restul trebuie să poarte sufixul din șablon
    // (un layout intermediar cu titlul ca text simplu îl anulează pentru paginile de sub el).
    if (p !== "/" && title && !/\| Reverb$/.test(title)) problems.push(`${p}: titlul nu are sufixul „| Reverb”: „${title}”`);
    if (robots && /noindex/.test(robots)) problems.push(`${p}: noindex deși e în sitemap`);
    if (!/property="og:image" content="[^"]+og\.jpg"/.test(html)) problems.push(`${p}: fără og:image`);
    ok++;
  }

  // 3. noindex
  for (const p of NOINDEX) {
    const res = await fetch(`${base}${p}`, { headers: { "user-agent": "bingbot" } });
    const html = await res.text();
    const robots = attr(html, /<meta name="robots" content="([^"]+)"/);
    if (!robots || !/noindex/.test(robots)) problems.push(`${p}: lipsește noindex (robots=${robots})`);
  }

  // 4. machetele: antet noindex, iar cele indexabile fără el
  let mk = 0;
  for (const p of [...mockups, ...MOCKUP_SAMPLES]) {
    const res = await fetch(`${base}${p}`, { headers: { "user-agent": "bingbot" } });
    const tag = res.headers.get("x-robots-tag") || "";
    if (res.status !== 200) problems.push(`machetă ${p}: HTTP ${res.status}`);
    else if (!/noindex/.test(tag)) problems.push(`machetă ${p}: lipsește X-Robots-Tag noindex (acum „${tag}”)`);
    else mk++;
  }
  for (const s of SHOWCASE_INDEXABLE) {
    const res = await fetch(`${base}/showcase/${s}`, { headers: { "user-agent": "bingbot" } });
    const tag = res.headers.get("x-robots-tag") || "";
    if (/noindex/.test(tag)) problems.push(`/showcase/${s}: are noindex, dar e destinația unui domeniu propriu`);
  }

  // 5. „Linia care merge”: contururile literelor (lib/outlineRun/w*.ts) sunt făcute din fișierele de font Geist numite în
  //    lib/outlineRun/fonts.json. Dacă site-ul servește alte fișiere (font actualizat), liniile dispar de pe titluri fără eroare.
  try {
    const want = JSON.parse(fs.readFileSync(path.join(process.cwd(), "lib", "outlineRun", "fonts.json"), "utf8")).files;
    const home = await (await fetch(`${base}/`)).text();
    const sheets = [...home.matchAll(/href="([^"]+\.css[^"]*)"/g)].map((m) => new URL(m[1].replace(/&amp;/g, "&"), base).href);
    let css = "";
    for (const s of new Set(sheets)) css += await (await fetch(s)).text();
    const served = new Set();
    for (const block of css.match(/@font-face\s*\{[^}]*\}/g) ?? []) {
      if (!/font-family:\s*['"]?Geist['"]?\s*[;}]/.test(block)) continue;
      const file = block.match(/url\(([^)]+\.woff2)[^)]*\)/);
      if (file) served.add(file[1].split("/").pop().split("-")[0]);
    }
    const missing = want.filter((f) => !served.has(f));
    if (!served.size) problems.push("linia care merge: nu am găsit fontul Geist în CSS-ul paginii de pornire");
    else if (missing.length) problems.push(`linia care merge: fontul Geist s-a schimbat (lipsesc ${missing.join(", ")}); rulați „py -3 -X utf8 scripts/linia_atlas.py .next/static” după build și comiteți lib/outlineRun/`);
  } catch (e) {
    problems.push(`linia care merge: nu am putut compara fontul (${e.message})`);
  }

  // 6. Selectorul de limbă: fiecare limbă din lib/i18n/generated.ts are dicționarul ei servit (un fișier lipsă ar lăsa
  //    limba în panou, dar pagina în română), iar un robot nu primește țara (altfel ar vedea pagina tradusă).
  try {
    const gen = fs.readFileSync(path.join(process.cwd(), "lib", "i18n", "generated.ts"), "utf8");
    const versions = JSON.parse(gen.match(/DICT_VERSION[^=]*=\s*(\{[^}]*\})/)[1]);
    for (const [code, v] of Object.entries(versions)) {
      const res = await fetch(`${base}/i18n/${code}.json?v=${v}`);
      let keys = 0;
      try {
        keys = Object.keys(await res.json()).length;
      } catch {
        /* nu e JSON */
      }
      if (res.status !== 200 || keys < 100) problems.push(`selectorul de limbă: dicționarul ${code} nu se servește (stare ${res.status}, ${keys} chei)`);
    }
    const bot = await fetch(`${base}/`, { headers: { "user-agent": "Googlebot/2.1", "x-vercel-ip-country": "DE" } });
    if (/rvcc/.test(bot.headers.get("server-timing") || "")) problems.push("selectorul de limbă: un robot primește țara (antetul Server-Timing)");
  } catch (e) {
    problems.push(`selectorul de limbă: nu am putut verifica dicționarele (${e.message})`);
  }

  // 6. Nota despre cookie-uri (components/CookieConsent.tsx) spune „nu măsurăm ce faci pe site”. Un pachet de măsurare
  //    o face falsă: întâi se reface banda ca cerere de acord (cu altă cheie), abia apoi intră pachetul.
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"));
    const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
    const masurare = deps.filter((d) => /^@vercel\/(analytics|speed-insights)$|^@next\/third-parties$|gtag|google-analytics|posthog|plausible|hotjar|facebook-pixel/.test(d));
    if (masurare.length) problems.push(`pachet de măsurare în package.json (${masurare.join(", ")}), dar nota de cookie-uri spune că nu măsurăm nimic`);
  } catch (e) {
    problems.push(`nu am putut citi package.json (${e.message})`);
  }

  // 7. Prețurile altor firme din caseta de cost (lib/thirdPartyCosts.ts) au o dată a citirii: avertisment după 90 de zile.
  try {
    const src = fs.readFileSync(path.join(process.cwd(), "lib", "thirdPartyCosts.ts"), "utf8");
    const m = src.match(/READ_ON = "(\d{4}-\d{2}-\d{2})"/);
    const zile = m ? Math.floor((Date.now() - new Date(m[1]).getTime()) / 86400000) : null;
    if (zile === null) problems.push("lib/thirdPartyCosts.ts: nu găsesc READ_ON");
    else if (zile > 90) console.log(`ATENȚIE: prețurile altor firme din caseta de cost au fost citite acum ${zile} zile (${m[1]}). Recitește-le din surse și actualizează lib/thirdPartyCosts.ts.`);
  } catch (e) {
    problems.push(`nu am putut citi lib/thirdPartyCosts.ts (${e.message})`);
  }

  console.log(`sitemap: ${urls.length} adrese, ${ok} verificate cu 200; machete cu noindex: ${mk}`);
  if (problems.length) {
    console.log(`PROBLEME (${problems.length}):`);
    for (const x of problems) console.log("  - " + x);
    process.exit(1);
  }
  console.log("OK: toate paginile au canonicalul lor, titlu propriu și og:image; noindex-urile sunt la locul lor.");
}

main().catch((e) => { console.error(e); process.exit(1); });
