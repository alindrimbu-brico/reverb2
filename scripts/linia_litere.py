"""Generează contururile literelor pentru „linia care merge” din titlul primei pagini (components/RunningLine.tsx, OutlineRun).

De ce contururi și nu text SVG: un <text> peste titlu ar pune fiecare cuvânt de două ori în <h1> (Google și asistenții AI
citesc și textul din SVG). Aici titlul rămâne text obișnuit, iar linia aleargă pe contururi desenate din fontul site-ului.

Contururile trebuie să cadă exact peste literele din pagină, deci se generează din ACELAȘI font pe care îl servește
next/font (Geist, de la Google), la aceeași grosime și aceeași spațiere ca în clasa titlului. Fișierele .woff2 apar în
.next/static/media după `npx next build`.

Rulare (din rădăcina proiectului, după un build):
    py -3 -X utf8 scripts/linia_litere.py .next/static/media
Are nevoie de: fonttools, uharfbuzz, skia-pathops, brotli (py -3 -m pip install fonttools uharfbuzz skia-pathops brotli).

În font, unele litere sunt făcute din bucăți suprapuse („t” = tijă + bară). Bucățile se unesc într-un singur contur,
altfel banda ar merge și prin interiorul literei.

Când se schimbă textul titlului, grosimea (font-light = 300) sau spațierea (tracking-[-0.04em]): se schimbă lista TITLURI
de mai jos, se rulează din nou și se verifică suprapunerea (docs/designs/linia_care_merge_2026-11-12/verificari/).
Dacă textul din pagină nu mai e cel din fișierul generat, componenta arată doar textul, fără linie.
"""
import io
import os
import sys
import tempfile

import pathops
import uharfbuzz as hb
from fontTools.pens.perimeterPen import PerimeterPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

RADACINA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAMILIE = "Geist"
GROSIME = 300          # font-light
SPATIERE = -0.04       # tracking-[-0.04em], în em
PERIOADA = 7000        # unități de font între două treceri ale benzii; fiecare contur trebuie să fie mai scurt
CONTUR_MIN = 700       # contururile mai scurte (punctul, punctul de pe i) rămân fără bandă

# (fișier generat, numele exportului, textul exact din pagină)
TITLURI = [
    ("lib/outlineRun/heroRo.ts", "heroRo", "Sisteme care produc valoare."),
    ("lib/outlineRun/heroEn.ts", "heroEn", "Systems that produce value."),
]


def gaseste_font(dosar, text):
    """Fișierul .woff2 al familiei, cu axa de grosime și cu toate literele textului."""
    for nume in sorted(os.listdir(dosar)):
        if not nume.endswith(".woff2"):
            continue
        cale = os.path.join(dosar, nume)
        f = TTFont(cale)
        familie = f["name"].getDebugName(1) or ""
        are_axa = "fvar" in f and any(a.axisTag == "wght" for a in f["fvar"].axes)
        cmap = f.getBestCmap()
        if familie.startswith(FAMILIE) and are_axa and all(ord(c) in cmap for c in text if c != " "):
            return cale, f
    return None, None


def contururi(inregistrare):
    """Împarte desenul unui glif în contururi închise."""
    curent, toate = [], []
    for op, args in inregistrare:
        curent.append((op, args))
        if op in ("closePath", "endPath"):
            toate.append(curent)
            curent = []
    return toate


def lungime(contur):
    pen = PerimeterPen(None)
    for op, args in contur:
        getattr(pen, op)(*args)
    return pen.value


def cuvant(font, upem, text):
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    # ca în browser: cu spațiere între litere, ligaturile opționale nu se aplică; kerningul rămâne
    hb.shape(font, buf, {"liga": False, "clig": False})
    x, glife, cea_mai_lunga = 0.0, [], 0.0
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        brut = pathops.Path()
        font.draw_glyph_with_pen(info.codepoint, brut.getPen())
        brut.simplify(fix_winding=True, keep_starting_points=False)   # unește bucățile suprapuse
        rec = RecordingPen()
        brut.draw(rec)
        svg = SVGPathPen(None, ntos=lambda v: str(int(round(v))))
        # axa y a fontului urcă, a SVG-ului coboară
        mutat = TransformPen(svg, (1, 0, 0, -1, x + pos.x_offset, -pos.y_offset))
        pastrate = 0
        for c in contururi(rec.value):
            lung = lungime(c)
            if lung < CONTUR_MIN:
                continue
            cea_mai_lunga = max(cea_mai_lunga, lung)
            for op, args in c:
                getattr(mutat, op)(*args)
            pastrate += 1
        if pastrate:
            glife.append(svg.getCommands())
        x += pos.x_advance + SPATIERE * upem
    return glife, cea_mai_lunga


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(2)
    dosar = sys.argv[1]
    for cale_ts, export, text in TITLURI:
        cale_font, tt = gaseste_font(dosar, text)
        if not cale_font:
            print(f"OPRIT: niciun .woff2 {FAMILIE} cu axa de grosime și literele din „{text}” în {dosar}")
            sys.exit(1)
        upem = tt["head"].unitsPerEm
        # HarfBuzz nu citește .woff2: fontul se despachetează într-un fișier temporar
        tmp = os.path.join(tempfile.mkdtemp(prefix="linia_litere_"), "font.ttf")
        tt.flavor = None
        tt.save(tmp)
        font = hb.Font(hb.Face(hb.Blob.from_file_path(tmp)))
        font.set_variations({"wght": GROSIME})
        cuvinte, maxim = [], 0.0
        for w in text.split(" "):
            glife, lung = cuvant(font, upem, w)
            maxim = max(maxim, lung)
            cuvinte.append((w, glife))
        if maxim >= PERIOADA * upem / 1000:
            print(f"OPRIT: un contur are {maxim:.0f} unități, mai mult decât perioada benzii ({PERIOADA}); banda ar apărea de două ori pe el")
            sys.exit(1)
        linii = [
            "// GENERAT de scripts/linia_litere.py. Nu se editează de mână: se schimbă lista din script și se rulează din nou.",
            f"// Font: {FAMILIE} (next/font), grosime {GROSIME}, spațiere {SPATIERE}em. Contururile cad peste textul din pagină doar cu aceste valori.",
            'import type { OutlineData } from "@/components/RunningLine";',
            "",
            f"export const {export}: OutlineData = {{",
            f'  text: "{text}",',
            f"  upem: {upem},",
            "  words: [",
        ]
        for w, glife in cuvinte:
            linii.append(f'    {{ text: "{w}", glyphs: [')
            for d in glife:
                linii.append(f'      "{d}",')
            linii.append("    ] },")
        linii += ["  ],", "};", ""]
        cale = os.path.join(RADACINA, cale_ts)
        os.makedirs(os.path.dirname(cale), exist_ok=True)
        with io.open(cale, "w", encoding="utf-8", newline="\n") as f:
            f.write("\n".join(linii))
        n = sum(len(g) for _, g in cuvinte)
        print(f"OK {cale_ts}: {len(cuvinte)} cuvinte, {n} litere, cel mai lung contur {maxim:.0f} unități, font {os.path.basename(cale_font)}")


if __name__ == "__main__":
    main()
