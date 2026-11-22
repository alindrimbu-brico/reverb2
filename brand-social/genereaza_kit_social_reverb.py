#!/usr/bin/env python3
"""Generator vizual HTML + Playwright pentru Kitul Social Oficial Reverb Digital (reverb.ro).

Estetică: Editorial cald & arhitectural (ivoar nisipiu #FAF8F5 + obsidian cald #0D0E11 + alamă șampanie #C8A96A),
fără clișee publicitare și cu ZERO apariții ale denumirii juridice a societății.

Generează în același dosar:
  - avatar_1080x1080.png         (1080 x 1080)
  - linkedin_cover_1584x396.png  (1584 x 396)
  - youtube_banner_2560x1440.png (2560 x 1440, safe area 1546 x 423 centrată)
  - facebook_cover_1640x624.png  (1640 x 624)
"""
import os
import sys
from playwright.sync_api import sync_playwright

for s in (sys.stdout, sys.stderr):
    try:
        s.reconfigure(encoding="utf-8")
    except Exception:
        pass

DIR = os.path.dirname(os.path.abspath(__file__))

LOGO_SVG = """
<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
  <circle cx="60" cy="60" r="57" stroke="#C8A96A" stroke-width="1.6" stroke-opacity="0.38"/>
  <circle cx="60" cy="60" r="49" stroke="#FAF8F5" stroke-width="1" stroke-opacity="0.12"/>
  <path d="M24 60 C24 60 36 30 60 30 C84 30 96 60 96 60" stroke="#FAF8F5" stroke-width="3.6" stroke-linecap="round" stroke-opacity="0.28"/>
  <path d="M34.5 60 C34.5 60 43.5 39 60 39 C76.5 39 85.5 60 85.5 60" stroke="#C8A96A" stroke-width="3.8" stroke-linecap="round" stroke-opacity="0.62"/>
  <path d="M45 60 C45 60 50.4 49.5 60 49.5 C69.6 49.5 75 60 75 60" stroke="#FAF8F5" stroke-width="4.2" stroke-linecap="round" stroke-opacity="0.95"/>
  <circle cx="60" cy="60" r="5.8" fill="#C8A96A"/>
</svg>
"""

COMMON_CSS = """
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0D0E11;
    color: #FAF8F5;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
  .canvas {
    position: relative;
    width: 100vw;
    height: 100vh;
    background:
      radial-gradient(circle at 18% 22%, rgba(200, 169, 106, 0.16) 0%, rgba(200, 169, 106, 0) 52%),
      radial-gradient(circle at 86% 78%, rgba(250, 248, 245, 0.08) 0%, rgba(250, 248, 245, 0) 48%),
      linear-gradient(135deg, #0B0C0F 0%, #13151A 52%, #0E0F13 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(250, 248, 245, 0.032) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(250, 248, 245, 0.032) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }
  .frame-border {
    position: absolute;
    inset: 22px;
    border: 1px solid rgba(200, 169, 106, 0.24);
    border-radius: 20px;
    pointer-events: none;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px 18px;
    border-radius: 999px;
    border: 1px solid rgba(200, 169, 106, 0.38);
    background: rgba(200, 169, 106, 0.09);
    color: #E5CFA0;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }
  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #C8A96A;
  }
"""


def html_avatar():
    return f"""<!doctype html><html lang="ro"><head><meta charset="utf-8"><style>
    {COMMON_CSS}
    .wrap {{
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 34px;
    }}
    .medallion {{
      width: 470px;
      height: 470px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, #1B1E26 0%, #0B0C0F 75%);
      border: 2px solid rgba(200, 169, 106, 0.42);
      box-shadow: 0 32px 90px rgba(0, 0, 0, 0.65), inset 0 1px 24px rgba(250, 248, 245, 0.06);
      display: flex;
      align-items: center;
      justify-content: center;
    }}
    .medallion .logo-svg {{ width: 340px; height: 340px; }}
    .brand {{
      font-size: 74px;
      font-weight: 600;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #FAF8F5;
      margin-left: 0.28em;
    }}
    .sub {{
      font-size: 23px;
      letter-spacing: 0.34em;
      text-transform: uppercase;
      color: #C8A96A;
      font-weight: 500;
      margin-top: -16px;
      margin-left: 0.34em;
    }}
    </style></head><body>
      <div class="canvas">
        <div class="grid-overlay"></div>
        <div class="frame-border" style="inset:38px;border-radius:48px;"></div>
        <div class="wrap">
          <div class="medallion">{LOGO_SVG}</div>
          <div class="brand">REVERB</div>
          <div class="sub">DIGITAL</div>
        </div>
      </div>
    </body></html>"""


def html_linkedin():
    return f"""<!doctype html><html lang="ro"><head><meta charset="utf-8"><style>
    {COMMON_CSS}
    .row {{
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding: 44px 78px 44px 310px; /* spațiu liber stânga-jos pentru avatarul LinkedIn */
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 48px;
    }}
    .left {{ max-width: 820px; }}
    .title {{
      margin-top: 16px;
      font-size: 46px;
      line-height: 1.14;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #FAF8F5;
    }}
    .title span {{ color: #C8A96A; font-weight: 400; }}
    .desc {{
      margin-top: 14px;
      font-size: 18px;
      color: rgba(250, 248, 245, 0.74);
      letter-spacing: 0.01em;
    }}
    .right {{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 16px;
      border-left: 1px solid rgba(200, 169, 106, 0.25);
      padding-left: 38px;
    }}
    .right .logo-svg {{ width: 92px; height: 92px; }}
    .meta {{
      text-align: right;
      font-size: 13px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #D9C498;
      line-height: 1.8;
    }}
    </style></head><body>
      <div class="canvas">
        <div class="grid-overlay"></div>
        <div class="frame-border" style="inset:16px;border-radius:14px;"></div>
        <div class="row">
          <div class="left">
            <div class="pill"><span class="dot"></span> REVERB.RO · ARHITECTURĂ DIGITALĂ & AI</div>
            <div class="title">Structură, execuție, <span>rezultate măsurabile.</span></div>
            <div class="desc">Ecosisteme web, magazine online de înaltă viteză & automatizări autonome · Strategic Partner: Zylaris Group London</div>
          </div>
          <div class="right">
            {LOGO_SVG}
            <div class="meta">reverb.ro<br>contact@reverb.ro</div>
          </div>
        </div>
      </div>
    </body></html>"""


def html_youtube():
    return f"""<!doctype html><html lang="ro"><head><meta charset="utf-8"><style>
    {COMMON_CSS}
    /* Safe area YouTube pentru telefon + desktop + TV: 1546 x 423 centrat în 2560 x 1440 */
    .safe-zone {{
      position: relative;
      z-index: 2;
      width: 1480px;
      height: 390px;
      padding: 28px 54px;
      border-radius: 28px;
      border: 1px solid rgba(200, 169, 106, 0.32);
      background: rgba(13, 14, 17, 0.78);
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.55);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 44px;
    }}
    .brand-col {{
      display: flex;
      align-items: center;
      gap: 32px;
    }}
    .brand-col .logo-svg {{ width: 154px; height: 154px; flex-shrink: 0; }}
    .h1 {{
      font-size: 56px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #FAF8F5;
    }}
    .tagline {{
      margin-top: 10px;
      font-size: 24px;
      color: #DFC99B;
      font-weight: 400;
    }}
    .subline {{
      margin-top: 12px;
      font-size: 16px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(250, 248, 245, 0.66);
    }}
    .badge-col {{
      text-align: right;
      border-left: 1px solid rgba(200, 169, 106, 0.28);
      padding-left: 36px;
      font-size: 16px;
      line-height: 2.0;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #FAF8F5;
    }}
    .badge-col span {{ color: #C8A96A; }}
    </style></head><body>
      <div class="canvas">
        <div class="grid-overlay"></div>
        <div class="frame-border" style="inset:56px;border-radius:36px;"></div>
        <div class="safe-zone">
          <div class="brand-col">
            {LOGO_SVG}
            <div>
              <div class="h1">REVERB DIGITAL</div>
              <div class="tagline">Structură, execuție, rezultate.</div>
              <div class="subline">E-Commerce · Optimizare AI (GEO) · Automatizări</div>
            </div>
          </div>
          <div class="badge-col">
            <div><span>●</span> reverb.ro</div>
            <div>Zylaris Group London</div>
            <div style="color:rgba(250,248,245,0.65);font-size:14px;">@reverbdigital</div>
          </div>
        </div>
      </div>
    </body></html>"""


def html_facebook():
    return f"""<!doctype html><html lang="ro"><head><meta charset="utf-8"><style>
    {COMMON_CSS}
    .wrap {{
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding: 64px 96px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 52px;
    }}
    .left {{ max-width: 960px; }}
    .h1 {{
      margin-top: 22px;
      font-size: 62px;
      line-height: 1.12;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #FAF8F5;
    }}
    .h1 span {{ color: #C8A96A; font-weight: 400; }}
    .p {{
      margin-top: 20px;
      font-size: 23px;
      line-height: 1.5;
      color: rgba(250, 248, 245, 0.78);
    }}
    .footer-bar {{
      margin-top: 32px;
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 15px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #DFC99B;
    }}
    .card {{
      width: 340px;
      padding: 38px 32px;
      border-radius: 28px;
      background: rgba(250, 248, 245, 0.03);
      border: 1px solid rgba(200, 169, 106, 0.3);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 18px;
    }}
    .card .logo-svg {{ width: 148px; height: 148px; }}
    .card-t {{
      font-size: 20px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: #FAF8F5;
      font-weight: 600;
    }}
    .card-s {{
      font-size: 13px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(250, 248, 245, 0.62);
      line-height: 1.7;
    }}
    </style></head><body>
      <div class="canvas">
        <div class="grid-overlay"></div>
        <div class="frame-border" style="inset:24px;border-radius:22px;"></div>
        <div class="wrap">
          <div class="left">
            <div class="pill"><span class="dot"></span> REVERB DIGITAL · ECOSISTEME DIGITALE</div>
            <div class="h1">Structură, execuție,<br><span>rezultate fără haos.</span></div>
            <div class="p">Website-uri rapide, magazine online scalabile și mașini autonome de marketing. În parteneriat strategic cu Zylaris Group London.</div>
            <div class="footer-bar">
              <span>reverb.ro</span>
              <span>•</span>
              <span>contact@reverb.ro</span>
              <span>•</span>
              <span>0767 235 693</span>
            </div>
          </div>
          <div class="card">
            {LOGO_SVG}
            <div class="card-t">REVERB.RO</div>
            <div class="card-s">Viteză Maximă<br>Claritate Nativă<br>Creștere Măsurabilă</div>
          </div>
        </div>
      </div>
    </body></html>"""


TARGETS = [
    ("avatar_1080x1080.png", 1080, 1080, html_avatar),
    ("linkedin_cover_1584x396.png", 1584, 396, html_linkedin),
    ("youtube_banner_2560x1440.png", 2560, 1440, html_youtube),
    ("facebook_cover_1640x624.png", 1640, 624, html_facebook),
]


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        for fname, w, h, fn_html in TARGETS:
            markup = fn_html()
            if "kalki" in markup.lower():
                raise RuntimeError(f"Garda Clean-Room: termen interzis detectat în {fname}!")
            page = browser.new_page(viewport={"width": w, "height": h}, device_scale_factor=1)
            page.set_content(markup, wait_until="load")
            page.wait_for_timeout(120)
            out_path = os.path.join(DIR, fname)
            page.screenshot(path=out_path, type="png", clip={"x": 0, "y": 0, "width": w, "height": h})
            page.close()
            print(f"RANDAT: {fname} ({w}x{h}) -> {os.path.getsize(out_path)} octeți")
        browser.close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
