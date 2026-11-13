"""Culege textele românești pe care selectorul de limbă le traduce (docs/designs/selector_limba_2026-11-13).

Deschide paginile agenției pe o construcție pornită local, pe laptop și pe telefon, apasă fiecare buton (meniu, filtre,
preferințe de cookie-uri, ferestre) și simulează /api/contact (nu se trimite nimic). Regulile de culegere sunt cele ale
motorului din lib/i18n/translator.ts: aceeași normalizare, aceleași zone sărite. Se schimbă împreună.

Scrie lib/i18n/sursa.json: listă în ordinea din pagină, fiecare intrare cu
  i = număr, k = fel (text / linie / attr / title), p = pagina, t = textul, c = textul blocului (dacă e mai lung), key = cheia.
Cheia = textul normalizat, cu „#” în locul fiecărui număr (un preț schimbat nu scoate traducerea).

  py -3 -X utf8 scripts/i18n_extrage.py http://localhost:3417 [--bucati <dosar> [--doar-noi]]

--bucati scrie și fișierele pentru traducători (sursa_1.txt …, câte 280 de texte); cu --doar-noi, doar textele care nu au
încă traducere în toate limbile. Traducerile lor ({"număr": "traducere"}, fișiere <cod>_<n>.json) intră în dicționare cu
scripts/i18n_construieste.py <dosar>. Pașii întregi: AI_SYNC.md, „Selectorul de limbă”.
"""
import io
import json
import os
import re
import sys

from playwright.sync_api import sync_playwright

BAZA = sys.argv[1].rstrip("/")
BUCATI = sys.argv[sys.argv.index("--bucati") + 1] if "--bucati" in sys.argv else None
RADACINA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IESIRE = os.path.join(RADACINA, "lib", "i18n", "sursa.json")

# Paginile traduse în întregime (lib/i18n/scope.ts, FULL). Bara, subsolul și banda de cookie-uri sunt aceleași peste tot.
PAGINI = ["/", "/servicii", "/pachete", "/portofoliu", "/despre", "/contact", "/magazine-online", "/showcase"]

# Texte care nu se pot atinge prin apăsări (stări trecătoare, elemente care apar doar în altă limbă).
IN_PLUS = [
    ("linie", "/", "Pentru afaceri la început."),  # rândul gri al titlului (OutlineRun): același text ca în app/HomeClient.tsx
    ("text", "/contact", "Se procesează..."),
    ("text", "/contact", "Se încarcă formularul..."),
    ("text", "/contact", "Îți răspundem în română sau engleză."),
    ("text", "*", "Această pagină există doar în română și engleză."),
    ("text", "*", "Vezi în engleză"),
    ("attr", "*", "Închide"),
    ("attr", "*", "Alege limba"),
    ("text", "*", "Limbă"),
    ("text", "*", "Țara detectată:"),
]

# Aceeași funcție ca `norm` din lib/i18n/translator.ts.
JS = r"""() => {
  const norm = (s) => s.replace(/[⁠​‌‍﻿]/g, '').replace(/[\s  ]+/g, ' ').trim();
  const SARI = 'script,style,noscript,code,pre,textarea,svg,canvas,[data-no-translate],[contenteditable],[data-rl]';
  const BLOC = 'p,li,h1,h2,h3,h4,h5,h6,td,th,label,button,a,figcaption,blockquote,dd,dt,summary,option';
  const out = [];
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) {
    const e = n.parentElement;
    if (!e || e.closest(SARI)) continue;
    if (e.closest('.rl-word')) continue; // rândul gri al primei pagini: se culege ca rând întreg (IN_PLUS)
    const t = norm(n.nodeValue);
    if (!t) continue;
    const b = e.closest(BLOC);
    const c = b ? norm(b.textContent) : '';
    out.push(['text', t, c.length > t.length + 2 ? c.slice(0, 260) : '']);
  }
  for (const e of document.querySelectorAll('[placeholder],[aria-label],[title],img[alt]')) {
    if (e.closest('[data-no-translate]')) continue;
    for (const a of ['placeholder', 'aria-label', 'title', 'alt']) {
      const v = e.getAttribute(a);
      if (v && norm(v)) out.push(['attr', norm(v), '']);
    }
  }
  for (const e of document.querySelectorAll('[data-rl]')) {
    if (e.closest('[data-no-translate]')) continue;
    const t = norm(e.textContent);
    if (t) out.push(['linie', t, '']);
  }
  if (norm(document.title)) out.push(['title', norm(document.title), '']);
  return out;
}"""

LITERE = re.compile(r"[^\W\d_]{2,}", re.UNICODE)
EMAIL = re.compile(r"^[\w.+-]+@[\w.-]+$")
ADRESA = re.compile(r"^(https?://)?[\w-]+(\.[\w-]+)+(/\S*)?$", re.I)
NUMAR = re.compile(r"\d+(?:[.,]\d+)*")


def de_tradus(t):
    """Aceeași regulă ca `translatable` din lib/i18n/translator.ts."""
    return bool(LITERE.search(t)) and not EMAIL.match(t) and not ADRESA.match(t)


def cheie(t):
    """Aceeași regulă ca `keyOf` din lib/i18n/translator.ts."""
    return t if "#" in t else NUMAR.sub("#", t)


intrari, vazut = [], {}


FARA = {"RO", "EN"}  # codurile vechiului comutator de limbă


def adauga(fel, pagina, t, c=""):
    if not de_tradus(t) or t in FARA:
        return
    k = cheie(t)
    if k in vazut:
        return
    vazut[k] = len(intrari)
    intrari.append({"i": len(intrari) + 1, "k": fel, "p": pagina, "t": t, "c": c, "key": k})


def culege(pg, pagina):
    for fel, t, c in pg.evaluate(JS):
        adauga(fel, pagina, t, c)


def apasa_tot(pg, pagina, adresa):
    """Apasă pe rând fiecare buton vizibil; după fiecare apăsare culege și închide ce s-a deschis."""
    n = pg.locator("button, [role=tab], summary").count()
    for i in range(n):
        el = pg.locator("button, [role=tab], summary").nth(i)
        try:
            if not el.is_visible() or (el.get_attribute("type") or "") == "submit" or el.is_disabled():
                continue
            # butoanele de limbă schimbă pagina (ar culege engleza): nu se apasă
            if el.evaluate("e => !!e.closest('[data-no-translate]') || /^(Limba Română|English Language)$/.test(e.getAttribute('aria-label') || '')"):
                continue
            el.click(timeout=1200)
            pg.wait_for_timeout(300)
            if pg.url.split("#")[0].split("?")[0].rstrip("/") == adresa.rstrip("/"):
                culege(pg, pagina)
            pg.keyboard.press("Escape")
            pg.wait_for_timeout(120)
        except Exception:
            pass
        if pg.url.split("#")[0].rstrip("/") != adresa.rstrip("/"):
            pg.goto(adresa, wait_until="load", timeout=90000)
            pg.wait_for_timeout(1500)


def formular(pg, pagina):
    """Stările formularului de contact, cu /api/contact simulat (nu pleacă niciun e-mail)."""
    stare = {"cod": 500}
    pg.route("**/api/contact", lambda r: r.fulfill(status=stare["cod"], content_type="application/json", body='{"ok":true}'))
    trimite = pg.locator("form button[type=submit]")
    trimite.click()
    pg.wait_for_timeout(300)
    culege(pg, pagina)  # câmpuri goale
    pg.fill("input[name=name]", "Test")
    pg.fill("input[name=email]", "nu-e-adresa")
    pg.fill("textarea[name=message]", "scurt")
    pg.locator("textarea[name=message]").blur()
    trimite.click()
    pg.wait_for_timeout(300)
    culege(pg, pagina)  # adresă greșită, mesaj scurt, contorul de caractere
    pg.fill("input[name=email]", "test@example.com")
    pg.fill("textarea[name=message]", "Un mesaj de probă, destul de lung.")
    pg.select_option("select[name=service]", index=1)
    trimite.click()
    pg.wait_for_timeout(600)
    culege(pg, pagina)  # eroarea de trimitere
    stare["cod"] = 200
    trimite.click()
    pg.wait_for_timeout(600)
    culege(pg, pagina)  # mesajul de reușită
    pg.unroute("**/api/contact")


with sync_playwright() as p:
    b = p.chromium.launch()
    for latime, inaltime in ((1366, 900), (390, 844)):
        for pagina in PAGINI:
            ctx = b.new_context(viewport={"width": latime, "height": inaltime})
            pg = ctx.new_page()
            adresa = BAZA + pagina
            pg.goto(adresa, wait_until="load", timeout=90000)
            pg.wait_for_timeout(2500)  # banda de cookie-uri apare la 700 ms
            culege(pg, pagina)
            apasa_tot(pg, pagina, adresa)
            if pagina == "/contact":
                pg.goto(adresa, wait_until="load", timeout=90000)
                pg.wait_for_timeout(1500)
                formular(pg, pagina)
            ctx.close()
            print(f"{latime:5} {pagina:18} total {len(intrari)}", flush=True)
    b.close()

for fel, pagina, t in IN_PLUS:
    adauga(fel, pagina, t)

os.makedirs(os.path.dirname(IESIRE), exist_ok=True)
with io.open(IESIRE, "w", encoding="utf-8", newline="\n") as f:
    json.dump(intrari, f, ensure_ascii=False, indent=0)
    f.write("\n")
car = sum(len(e["t"]) for e in intrari)
print(f"scris {IESIRE}: {len(intrari)} intrări, {car} caractere; "
      f"fragmente cu context: {sum(1 for e in intrari if e['c'])}; "
      f"pe fel: { {k: sum(1 for e in intrari if e['k'] == k) for k in ('text', 'linie', 'attr', 'title')} }")

if BUCATI:
    # Bucățile pentru traducători: [număr] text, iar pe rândul următor contextul, unde textul e doar o parte dintr-o propoziție.
    # Cu --doar-noi intră doar textele care lipsesc din cel puțin un dicționar existent (public/i18n/*.json).
    import glob

    de_dat = intrari
    if "--doar-noi" in sys.argv:
        dictionare = [json.load(io.open(c, encoding="utf-8")) for c in glob.glob(os.path.join(RADACINA, "public", "i18n", "*.json"))]
        de_dat = [e for e in intrari if any(e["key"] not in d and e["t"] not in d for d in dictionare)]
        print(f"texte noi (fără traducere în cel puțin o limbă): {len(de_dat)}")
    os.makedirs(BUCATI, exist_ok=True)
    pe_parte = 280
    parti = -(-len(de_dat) // pe_parte)
    for k in range(parti):
        bucata = de_dat[k * pe_parte:(k + 1) * pe_parte]
        linii, pagina = [], None
        for e in bucata:
            if e["p"] != pagina:
                pagina = e["p"]
                linii.append(f"\n=== pagina {pagina} ===")
            eticheta = {"linie": " (titlu mare)", "attr": " (etichetă de buton sau de câmp)", "title": " (titlul filei din browser)"}.get(e["k"], "")
            linii.append(f"[{e['i']}]{eticheta} {e['t']}")
            if e["c"]:
                linii.append(f"      context: {e['c']}")
        with io.open(os.path.join(BUCATI, f"sursa_{k + 1}.txt"), "w", encoding="utf-8", newline="\n") as f:
            f.write("\n".join(linii).strip() + "\n")
        print(f"bucata {k + 1}: intrările {bucata[0]['i']}–{bucata[-1]['i']}")
