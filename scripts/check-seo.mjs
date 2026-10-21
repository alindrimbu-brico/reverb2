// Verificare SEO după build: node scripts/check-seo.mjs http://localhost:3000
//
// 1. Fiecare page.tsx din app/ trebuie să fie în sitemap, în NOINDEX sau o redirecționare.
// 2. Fiecare adresă din sitemap răspunde 200, are canonical = adresa ei și un titlu propriu.
// 3. Paginile noindex au <meta name="robots" content="noindex...">.
import fs from "node:fs";
import path from "node:path";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const SITE_URL = "https://reverb.ro";
const NOINDEX = ["/portal", "/en/portal", "/checkout", "/en/checkout", "/guru"];
const REDIRECTS = ["/showcase/xiaolong", "/en/showcase/xiaolong"];
const GENERIC_TITLES = new Set(["Reverb — Structură, execuție, rezultate", "Clarity | Reverb", "Clarity"]);

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

  // 1. acoperirea paginilor statice (rutele dinamice se verifică prin adresele din sitemap)
  for (const file of walkPages(path.join(process.cwd(), "app"))) {
    const route = routeOf(file);
    if (/\[/.test(route)) continue;
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

  console.log(`sitemap: ${urls.length} adrese, ${ok} verificate cu 200`);
  if (problems.length) {
    console.log(`PROBLEME (${problems.length}):`);
    for (const x of problems) console.log("  - " + x);
    process.exit(1);
  }
  console.log("OK: toate paginile au canonicalul lor, titlu propriu și og:image; noindex-urile sunt la locul lor.");
}

main().catch((e) => { console.error(e); process.exit(1); });
