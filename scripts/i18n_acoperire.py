"""Ce a rămas netradus pe paginile traduse de selectorul de limbă (docs/designs/selector_limba_2026-11-13).

Deschide paginile agenției cu o limbă aleasă și citește lista motorului (window.__rvI18nMisses): textele românești
pentru care dicționarul nu are intrare. Cu prima limbă din listă apasă și fiecare buton și trece formularul de contact prin
stările lui (cu /api/contact simulat), ca scripts/i18n_extrage.py. Pentru celelalte limbi doar încarcă paginile și numără
și titlurile cu liniuțe. Ținta: 0 texte netraduse. Ce apare aici se rezolvă rulând din nou extragerea și traducerea.

  py -3 -X utf8 scripts/i18n_acoperire.py http://localhost:3417 de,fr,el
"""
import sys

from playwright.sync_api import sync_playwright

BAZA = sys.argv[1].rstrip("/")
LIMBI = sys.argv[2].split(",")
PAGINI = ["/", "/servicii", "/pachete", "/portofoliu", "/despre", "/contact", "/magazine-online", "/showcase"]
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
CITESTE = """() => ({ lipsa: window.__rvI18nMisses ? [...window.__rvI18nMisses] : [], lang: document.documentElement.lang,
  randuri: document.querySelectorAll('[data-rl]').length,
  cuLinie: [...document.querySelectorAll('[data-rl]')].filter(e => e.querySelector('.rl-glyphs path')).length })"""


def apasa_tot(pg, adresa):
    n = pg.locator("button, [role=tab], summary").count()
    for i in range(n):
        el = pg.locator("button, [role=tab], summary").nth(i)
        try:
            if not el.is_visible() or (el.get_attribute("type") or "") == "submit" or el.is_disabled():
                continue
            if el.evaluate("e => !!e.closest('[data-no-translate]') || e.hasAttribute('data-locale-button')"):
                continue
            el.click(timeout=1200)
            pg.wait_for_timeout(250)
            pg.keyboard.press("Escape")
            pg.wait_for_timeout(100)
        except Exception:
            pass
        if pg.url.split("#")[0].split("?")[0].rstrip("/") != adresa.rstrip("/"):
            pg.goto(adresa, wait_until="load", timeout=90000)
            pg.wait_for_timeout(1500)


def formular(pg):
    stare = {"cod": 500}
    pg.route("**/api/contact", lambda r: r.fulfill(status=stare["cod"], content_type="application/json", body='{"ok":true}'))
    trimite = pg.locator("form button[type=submit]")
    trimite.click()
    pg.wait_for_timeout(300)
    pg.fill("input[name=name]", "Test")
    pg.fill("input[name=email]", "nu-e-adresa")
    pg.fill("textarea[name=message]", "scurt")
    pg.locator("textarea[name=message]").blur()
    trimite.click()
    pg.wait_for_timeout(300)
    pg.fill("input[name=email]", "test@example.com")
    pg.fill("textarea[name=message]", "Un mesaj de probă, destul de lung.")
    pg.select_option("select[name=service]", index=1)
    trimite.click()
    pg.wait_for_timeout(600)
    stare["cod"] = 200
    trimite.click()
    pg.wait_for_timeout(600)


total = 0
with sync_playwright() as p:
    b = p.chromium.launch()
    for k, limba in enumerate(LIMBI):
        lipsa, randuri, cu_linie, alt_lang = {}, 0, 0, []
        for latime, inaltime in ((1366, 900), (390, 844)) if k == 0 else ((1366, 900),):
            for pagina in PAGINI:
                ctx = b.new_context(viewport={"width": latime, "height": inaltime}, user_agent=UA)
                ctx.add_init_script(f"try{{localStorage.setItem('reverb_locale','{limba}')}}catch(e){{}}")
                pg = ctx.new_page()
                adresa = BAZA + pagina
                pg.goto(adresa, wait_until="load", timeout=90000)
                pg.wait_for_timeout(2500)
                r = pg.evaluate(CITESTE)
                if latime == 1366:
                    randuri += r["randuri"]
                    cu_linie += r["cuLinie"]
                if r["lang"] != limba:
                    alt_lang.append(pagina)
                if k == 0:
                    apasa_tot(pg, adresa)
                    if pagina == "/contact":
                        pg.goto(adresa, wait_until="load", timeout=90000)
                        pg.wait_for_timeout(1500)
                        formular(pg)
                    r = pg.evaluate(CITESTE)
                for t in r["lipsa"]:
                    lipsa.setdefault(t, pagina)
                ctx.close()
        total += len(lipsa) + len(alt_lang)
        print(f"{limba}: netraduse {len(lipsa)}; titluri {randuri}, cu liniuțe {cu_linie}; pagini care nu au trecut pe limbă: {alt_lang}", flush=True)
        for t, pagina in list(lipsa.items())[:40]:
            print(f"     {pagina:18} {t[:110]}")
    b.close()
print("TOTAL probleme:", total)
sys.exit(1 if total else 0)
