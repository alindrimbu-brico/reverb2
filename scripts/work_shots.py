"""Capturile lucrărilor din portofoliu (public/work/<slug>.jpg, 800 × 500).

Lista lucrărilor și adresele lor se citesc din lib/liveProjects.ts (lista românească), ca registrul să rămână singurul loc.
Pentru fiecare adresă: Chromium la 1440 × 900, se așteaptă fonturile și imaginile, se închid benzile de cookie-uri
(clic pe „Accept” / „Refuz” doar în banda recunoscută, altfel elementele fixe de consimțământ se ascund prin CSS),
se face captura primului ecran și se micșorează la 800 × 500, JPEG ~80, sub ~90 KB.

La final se tipăresc: tabelul cu site-urile care nu răspund sau răspund cu altceva (alt domeniu, parcare, eroare) și
rândurile pentru harta SHOTS din lib/liveProjects.ts (numele, fișierul, data capturii).

Folosire (din dosarul proiectului):
    py -3 -X utf8 scripts/work_shots.py                      # toate lucrările cu adresă publică
    py -3 -X utf8 scripts/work_shots.py --doar bricolando-ro,raftplin-ro
    py -3 -X utf8 scripts/work_shots.py --asteapta 6         # secunde în plus după încărcare (animații de intrare)

Cere: pip install playwright pillow ; playwright install chromium
"""

from __future__ import annotations

import argparse
import datetime as dt
import io
import re
import sys
import unicodedata
from pathlib import Path
from urllib.parse import urlparse

from PIL import Image
from playwright.sync_api import Error as PwError
from playwright.sync_api import TimeoutError as PwTimeout
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
REGISTRU = ROOT / "lib" / "liveProjects.ts"
IESIRE = ROOT / "public" / "work"
LATIME, INALTIME = 1440, 900
FINAL = (800, 500)
PLAFON_KB = 90

# Așteptări în plus pentru site-urile cu intrare animată (secunde). Cheia = slug.
ASTEPTARI = {
    "don-barbershop": 6,
    "the-digital-greenhouse": 4,
    "kalki-nexus": 4,
    "flooare-ro": 5,
}

# Butoane de consimțământ cunoscute (CookieYes, Complianz, OneTrust, Cookiebot, CookieNotice, Borlabs, Iubenda...).
SELECTORI_ACCEPT = [
    ".cky-btn-accept",
    "#onetrust-accept-btn-handler",
    "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
    "#CybotCookiebotDialogBodyButtonAccept",
    ".cmplz-btn.cmplz-accept",
    "#cn-accept-cookie",
    ".iubenda-cs-accept-btn",
    "#BorlabsCookieBox a[data-cookie-accept]",
    "[data-cookie-accept]",
    "[data-consent='accept']",
    "#cookie-accept",
    ".cookie-accept",
]

# Textele unui buton pe care e sigur să dai clic, doar dacă butonul e într-un container de cookie-uri.
TEXTE_ACCEPT = re.compile(
    r"^\s*(accept(ă|a)?( tot| toate| all| cookies?)?|sunt de acord|de acord|am înțeles|am inteles|ok|agree|"
    r"allow all|got it|i understand|refuz(ă|a)?( tot| toate)?|reject( all)?|decline|respinge( tot| toate)?)\s*[.!]?\s*$",
    re.I,
)

CUVINTE_COOKIE = r"cookie|consent|gdpr|cky-|cmplz|onetrust|cookiebot|iubenda|borlabs|privacy-banner|cc-window|cc-banner"

PARCARE = re.compile(
    r"domain (is )?for sale|this domain (may be|is) (for sale|parked)|parked (free|domain)|buy this domain|"
    r"domeniu(l)? (este )?de vânzare|site-ul (va fi|este) în construcție|coming soon|"
    r"there isn't a github pages site here|404: not found|deployment_not_found|this page could not be found",
    re.I,
)

JS_INCHIDE_COOKIE = r"""
(args) => {
  const [cuvinte, texte] = args;
  const reC = new RegExp(cuvinte, 'i');
  const reT = new RegExp(texte, 'i');
  const vizibil = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
  const eCookie = (el) => { for (let n = el; n && n !== document.body; n = n.parentElement) {
      const sem = (n.id || '') + ' ' + (typeof n.className === 'string' ? n.className : '') + ' ' + (n.getAttribute('aria-label') || '');
      if (reC.test(sem)) return true;
      if (/cookie/i.test(n.innerText || '') && (getComputedStyle(n).position === 'fixed' || getComputedStyle(n).position === 'sticky')) return true;
    } return false; };
  const butoane = [...document.querySelectorAll('button, a[role=button], a.button, [role=button], input[type=button], input[type=submit]')];
  for (const b of butoane) {
    const t = (b.innerText || b.value || '').trim();
    if (t && reT.test(t) && vizibil(b) && eCookie(b)) { b.click(); return 'clic: ' + t.slice(0, 30); }
  }
  return '';
}
"""

JS_ASCUNDE_FIXE = r"""
(cuvinte) => {
  const reC = new RegExp(cuvinte, 'i');
  const vh = innerHeight, vw = innerWidth; let n = 0;
  for (const el of document.querySelectorAll('body *')) {
    const s = getComputedStyle(el);
    if (s.position !== 'fixed' && s.position !== 'sticky') continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const sem = (el.id || '') + ' ' + (typeof el.className === 'string' ? el.className : '') + ' ' + (el.getAttribute('aria-label') || '');
    const text = (el.innerText || '').slice(0, 600);
    const consimtamant = reC.test(sem) || /cookie|consimț|consimt|gdpr|confidențialitate|privacy/i.test(text);
    // fereastră modală: acoperă mare parte din ecran și e deasupra paginii (newsletter, reducere, vârstă)
    const modal = (el.getAttribute('aria-modal') === 'true' || el.getAttribute('role') === 'dialog' ||
                   /popup|modal|newsletter|overlay|lightbox/i.test(sem)) && r.width * r.height > vw * vh * 0.25;
    const jos = r.top > vh * 0.45 && r.height < vh * 0.6;
    // cursorul desenat de site (cerc care inversează culorile): în captură ar rămâne o pată la poziția inițială
    const cursor = (/cursor/i.test(sem) || s.mixBlendMode === 'difference') && r.width < 160 && r.height < 160;
    if ((consimtamant && (jos || r.height < vh * 0.7)) || modal || cursor) {
      el.style.setProperty('display', 'none', 'important'); n++;
    }
  }
  document.documentElement.style.setProperty('overflow', 'auto', 'important');
  document.body.style.setProperty('overflow', 'auto', 'important');
  return n;
}
"""

JS_IMAGINI_GATA = r"""
async () => {
  try { await document.fonts.ready; } catch (e) {}
  const vh = innerHeight;
  const imgs = [...document.images].filter((i) => { const r = i.getBoundingClientRect(); return r.top < vh && r.bottom > 0; });
  await Promise.race([
    Promise.all(imgs.map((i) => i.complete ? null : new Promise((ok) => { i.addEventListener('load', ok, { once: true }); i.addEventListener('error', ok, { once: true }); }))),
    new Promise((ok) => setTimeout(ok, 8000)),
  ]);
  return imgs.length;
}
"""


def slug(nume: str) -> str:
    s = unicodedata.normalize("NFKD", nume.lower()).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def lucrari() -> list[tuple[str, str]]:
    text = REGISTRU.read_text(encoding="utf-8")
    m = re.search(r"liveProjectsRo[^\[]*\[(.*?)\n\]\);", text, re.S)
    if not m:
        sys.exit("Nu găsesc lista liveProjectsRo în lib/liveProjects.ts")
    rez = []
    for bloc in re.findall(r"\{(.*?)\n  \}", m.group(1), re.S):
        n = re.search(r'name:\s*"([^"]+)"', bloc)
        h = re.search(r'href:\s*"([^"]+)"', bloc)
        if n and h and h.group(1).startswith("http"):
            rez.append((n.group(1), h.group(1)))
    return rez


def domeniu(url: str) -> str:
    h = (urlparse(url).hostname or "").lower()
    return h[4:] if h.startswith("www.") else h


def salveaza(png: bytes, tinta: Path) -> int:
    img = Image.open(io.BytesIO(png)).convert("RGB").resize(FINAL, Image.LANCZOS)
    for q in (80, 76, 72, 68, 64, 60):
        buf = io.BytesIO()
        img.save(buf, "JPEG", quality=q, optimize=True, progressive=True)
        if buf.tell() <= PLAFON_KB * 1024 or q == 60:
            tinta.write_bytes(buf.getvalue())
            return buf.tell()
    return 0


def captura(browser, nume: str, url: str, extra: float) -> dict:
    s = slug(nume)
    rez = {"nume": nume, "slug": s, "url": url, "final": "", "cod": "", "problema": "", "kb": 0, "cookie": ""}
    ctx = browser.new_context(
        viewport={"width": LATIME, "height": INALTIME},
        device_scale_factor=1,
        locale="ro-RO",
        color_scheme="light",
        user_agent=(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/131.0.0.0 Safari/537.36"
        ),
    )
    page = ctx.new_page()
    try:
        try:
            resp = page.goto(url, wait_until="load", timeout=45000)
        except PwTimeout:
            resp = None
            rez["problema"] = "încărcare peste 45 s (captura e făcută cu ce s-a încărcat)"
        rez["cod"] = str(resp.status) if resp else "?"
        rez["final"] = page.url
        if resp and resp.status >= 400:
            rez["problema"] = f"răspuns {resp.status}"
        if domeniu(page.url) != domeniu(url):
            rez["problema"] = (rez["problema"] + "; " if rez["problema"] else "") + f"redirecționat la {domeniu(page.url)}"
        try:
            page.wait_for_load_state("networkidle", timeout=12000)
        except PwTimeout:
            pass
        page.evaluate(JS_IMAGINI_GATA)
        page.wait_for_timeout(1500)

        # 1) butoanele cunoscute, 2) un buton „Accept/Refuz” dintr-o bandă de cookie-uri, 3) ascundere prin CSS.
        for sel in SELECTORI_ACCEPT:
            try:
                loc = page.locator(sel).first
                if loc.count() and loc.is_visible():
                    loc.click(timeout=3000)
                    rez["cookie"] = f"clic {sel}"
                    break
            except PwError:
                continue
        if not rez["cookie"]:
            rez["cookie"] = page.evaluate(JS_INCHIDE_COOKIE, [CUVINTE_COOKIE, TEXTE_ACCEPT.pattern])
        page.wait_for_timeout(800)
        ascunse = page.evaluate(JS_ASCUNDE_FIXE, CUVINTE_COOKIE)
        if ascunse:
            rez["cookie"] = (rez["cookie"] + "; " if rez["cookie"] else "") + f"ascunse {ascunse}"

        page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_timeout(int((ASTEPTARI.get(s, 0) + extra) * 1000) + 1200)
        page.evaluate(JS_IMAGINI_GATA)

        text = page.evaluate("document.body ? document.body.innerText.slice(0, 4000) : ''")
        if PARCARE.search(text or ""):
            rez["problema"] = (rez["problema"] + "; " if rez["problema"] else "") + "pare pagină de parcare / eroare"
        if len((text or "").strip()) < 20:
            rez["problema"] = (rez["problema"] + "; " if rez["problema"] else "") + "pagină aproape goală"

        png = page.screenshot(type="png")
        rez["kb"] = round(salveaza(png, IESIRE / f"{s}.jpg") / 1024, 1)
    except PwError as e:
        rez["problema"] = f"eroare: {str(e).splitlines()[0][:120]}"
    finally:
        ctx.close()
    return rez


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--doar", default="", help="slug-uri despărțite prin virgulă")
    ap.add_argument("--asteapta", type=float, default=0, help="secunde în plus după încărcare, pentru toate")
    a = ap.parse_args()
    doar = {x.strip() for x in a.doar.split(",") if x.strip()}
    lista = [(n, u) for n, u in lucrari() if not doar or slug(n) in doar]
    IESIRE.mkdir(parents=True, exist_ok=True)
    rezultate = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for n, u in lista:
            r = captura(browser, n, u, a.asteapta)
            rezultate.append(r)
            print(f"{r['slug']:<30} {r['cod']:<4} {r['kb']:>6} KB  {r['cookie'] or '-'}  {r['problema']}", flush=True)
        browser.close()

    probleme = [r for r in rezultate if r["problema"]]
    print("\nSite-uri care nu răspund sau răspund cu altceva:")
    if not probleme:
        print("  niciunul")
    for r in probleme:
        print(f"  {r['nume']:<30} {r['cod']:<4} {r['final'][:60]:<60} {r['problema']}")

    azi = dt.date.today().isoformat()
    print("\nRânduri pentru SHOTS în lib/liveProjects.ts (doar capturile fără probleme; privește-le înainte):")
    for r in rezultate:
        if r["kb"] and not r["problema"]:
            print(f'  "{r["nume"]}": {{ src: "/work/{r["slug"]}.jpg", shot: "{azi}" }},')
    total = sum(r["kb"] for r in rezultate)
    print(f"\nTotal: {len(rezultate)} capturi, {total:.0f} KB")


if __name__ == "__main__":
    main()
