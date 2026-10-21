// IndexNow: anunță Bing (și motoarele partenere) că paginile s-au publicat sau schimbat.
//
//   node scripts/indexnow.mjs                 -> toate adresele din https://reverb.ro/sitemap.xml
//   node scripts/indexnow.mjs /despre /blog   -> doar căile date
//
// Cheia este fișierul public/<cheie>.txt (conținutul = numele fișierului, fără .txt).
// Fișierul trebuie să fie LIVE pe reverb.ro înainte de primul apel, altfel IndexNow răspunde 403/422.
// Răspunsuri: 200 = primit, 202 = primit, cheia se verifică mai târziu, 400 = cerere greșită,
// 403 = cheia nu e găsită pe site, 422 = adrese care nu aparțin gazdei, 429 = prea multe cereri.
import fs from "node:fs";
import path from "node:path";

const HOST = "reverb.ro";
const SITE_URL = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const keyFile = fs
  .readdirSync(path.join(process.cwd(), "public"))
  .find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("Lipsește public/<cheie>.txt (32 de caractere hex).");
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");
const keyLocation = `${SITE_URL}/${keyFile}`;

async function urlsFromSitemap() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`, { headers: { "user-agent": "reverb-indexnow/1.0" } });
  if (!res.ok) throw new Error(`sitemap.xml a răspuns ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`))
  : await urlsFromSitemap();

if (!urlList.length) {
  console.error("Nicio adresă de trimis.");
  process.exit(1);
}
if (urlList.length > 10000) {
  console.error(`IndexNow acceptă cel mult 10.000 de adrese pe apel (ai ${urlList.length}).`);
  process.exit(1);
}

const body = { host: HOST, key, keyLocation, urlList };
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
const text = await res.text();
console.log(`IndexNow: ${urlList.length} adrese -> HTTP ${res.status}${text ? ` ${text.slice(0, 200)}` : ""}`);
console.log(`Cheia: ${keyLocation}`);
process.exit(res.status === 200 || res.status === 202 ? 0 : 2);
