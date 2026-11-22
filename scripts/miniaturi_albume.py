"""Miniaturi YouTube 1280x720 pentru albumele Surya Music (EN + RO), randate din HTML cu Playwright.
Iesire: Pictures/Surya Music/9_Miniatura_EN.jpg, 10_Miniatura_RO.jpg (+ planse la marimi reale).
"""
import base64
from pathlib import Path
from playwright.sync_api import sync_playwright

MEDIA = Path(r"C:\Users\alind\reverb\reverb-site\public\media")
OUT = Path(r"C:\Users\alind\Pictures\Surya Music")

ALBUME = [
    {"fis": "9_Miniatura_EN.jpg", "scena": "scena_colind_4.jpg", "lang": "en",
     "mare": "Christmas<br>Carols", "sub": "&amp; Soulful Songs", "insigna": "FULL ALBUM · 55 MIN"},
    {"fis": "10_Miniatura_RO.jpg", "scena": "scena_colind_3.jpg", "lang": "ro",
     "mare": "Colinde", "sub": "și muzică de suflet", "insigna": "ALBUM COMPLET · 53 MIN"},
]

HTML = """<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@600;700&display=swap" rel="stylesheet">
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:1280px;height:720px;overflow:hidden;background:#0b0907}}
.bg{{position:absolute;inset:0;background:url(data:image/jpeg;base64,{img}) center/cover no-repeat}}
.shade{{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,6,4,.92) 0%,rgba(8,6,4,.78) 38%,rgba(8,6,4,.15) 66%,rgba(8,6,4,0) 100%)}}
.txt{{position:absolute;left:72px;top:0;bottom:0;width:640px;display:flex;flex-direction:column;justify-content:center}}
.ins{{align-self:flex-start;font:700 26px/1 Inter,sans-serif;letter-spacing:.08em;color:#1a1206;background:#F5B82E;padding:12px 18px;border-radius:6px;margin-bottom:26px}}
.mare{{font:800 118px/0.98 'Playfair Display',serif;color:#F7C548;text-shadow:0 4px 24px rgba(0,0,0,.6)}}
.sub{{font:700 52px/1.15 'Playfair Display',serif;color:#FFF8EC;margin-top:16px;text-shadow:0 3px 16px rgba(0,0,0,.7)}}
.art{{font:600 28px/1 Inter,sans-serif;color:#E9DCC6;margin-top:34px;letter-spacing:.02em}}
.art b{{color:#F5B82E}}
</style></head><body><div class="bg"></div><div class="shade"></div>
<div class="txt"><div class="ins">{insigna}</div><div class="mare">{mare}</div><div class="sub">{sub}</div>
<div class="art"><b>Surya Music</b> · Alin Dragoș</div></div></body></html>"""


def main():
    with sync_playwright() as p:
        br = p.chromium.launch()
        pg = br.new_page(viewport={"width": 1280, "height": 720})
        for a in ALBUME:
            img = base64.b64encode((MEDIA / a["scena"]).read_bytes()).decode()
            pg.set_content(HTML.format(img=img, **a), wait_until="networkidle")
            pg.evaluate("document.fonts.ready")
            pg.screenshot(path=str(OUT / a["fis"]), type="jpeg", quality=92)
            print("OK", a["fis"])
        br.close()


if __name__ == "__main__":
    main()
