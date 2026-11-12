"""Generează contururile literelor pentru titlurile din PROBA „liniei care merge” (components/RunningLine.tsx, OutlineWords).

Față de scripts/linia_litere.py (titlul primei pagini, lăsat neatins), acesta știe:
  - diacritice: browserul ia „ă”, „ș”, „ț” din altă față a fontului (subsetul latin-ext) decât restul literelor. Fața se
    alege ca în browser, după `unicode-range` din CSS-ul construit (la suprapunere câștigă ultima regulă declarată), iar
    cuvântul se împarte în bucăți pe față: între două fețe browserul nu aplică kerning;
  - grosime și spațiere pe fiecare text (titlurile au 300 sau 500, cu sau fără tracking);
  - limba „ro” la așezare, ca în pagină (<html lang="ro">);
  - lățimea totală a fiecărui cuvânt (`adv`): componenta o compară cu lățimea cuvântului din pagină și desenează linia
    doar dacă se potrivesc. Asta ține loc de „fontul s-a încărcat” și prinde orice nepotrivire (alt font, altă grosime,
    majuscule din CSS, o versiune nouă de Geist).

Rulare (din rădăcina proiectului, după `npx next build`):
    py -3 -X utf8 scripts/linia_texte.py .next/static
Are nevoie de: fonttools, uharfbuzz, skia-pathops, brotli.
"""
import io
import os
import re
import sys
import tempfile

import pathops
import uharfbuzz as hb
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from linia_litere import CONTUR_MIN, PERIOADA, contururi, lungime  # noqa: E402  (aceleași praguri ca la titlul primei pagini)

RADACINA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAMILIE = "Geist"
LIMBA = "ro"

# (fișier generat, numele exportului, [(text exact din pagină, grosime, spațiere în em)])
SETURI = [
    ("lib/outlineRun/probaRo.ts", "probaRo", [
        ("În 2026, clienții nu mai caută doar pe Google.", 300, -0.025),   # h2: font-light, tracking-tight
        ("Ei întreabă agenții AI.", 300, -0.025),
        ("AI-Readable Answer Stack", 500, 0.0),                            # h3: font-medium
        ("Indexare Prețuri & Servicii", 500, 0.0),
        ("Generative Engine Optimization GEO", 500, 0.0),
        ("Capabilități AI", 500, 0.0),
        ("Creștere Măsurabilă", 500, 0.0),
    ]),
]


def fete_din_css(static):
    """Fețele familiei, în ordinea din CSS-ul construit: [(fișier .woff2, [(de la, până la)])]."""
    fete = []
    for radacina, _, fisiere in os.walk(static):
        for nume in sorted(fisiere):
            if not nume.endswith(".css"):
                continue
            css = io.open(os.path.join(radacina, nume), encoding="utf-8").read()
            for bloc in re.findall(r"@font-face\s*\{([^}]*)\}", css):
                fam = re.search(r"font-family:\s*['\"]?([^;'\"]+)", bloc)
                src = re.search(r"url\(([^)]+\.woff2)[^)]*\)", bloc)
                rng = re.search(r"unicode-range:\s*([^;]+)", bloc)
                if not (fam and src and rng) or fam.group(1).strip() != FAMILIE:
                    continue
                intervale = []
                for bucata in rng.group(1).split(","):
                    b = bucata.strip().upper().replace("U+", "")
                    if "?" in b:
                        intervale.append((int(b.replace("?", "0"), 16), int(b.replace("?", "F"), 16)))
                    elif "-" in b:
                        a, z = b.split("-")
                        intervale.append((int(a, 16), int(z, 16)))
                    else:
                        intervale.append((int(b, 16), int(b, 16)))
                fisier = os.path.basename(src.group(1).strip("'\""))
                if fisier not in [f for f, _ in fete]:
                    fete.append((fisier, intervale))
            if fete:
                return fete
    return fete


class Fete:
    def __init__(self, static):
        self.media = os.path.join(static, "media")
        self.lista = fete_din_css(static)
        if not self.lista:
            print(f"OPRIT: nicio regulă @font-face pentru {FAMILIE} în CSS-ul din {static}")
            sys.exit(1)
        self.tt, self.hb, self.folosite = {}, {}, []
        self.tmp = tempfile.mkdtemp(prefix="linia_texte_")

    def fata(self, ch):
        cp = ord(ch)
        for fisier, intervale in reversed(self.lista):      # ultima regulă declarată câștigă
            if any(a <= cp <= z for a, z in intervale):
                if fisier not in self.tt:
                    self.tt[fisier] = TTFont(os.path.join(self.media, fisier))
                if cp not in self.tt[fisier].getBestCmap():
                    print(f"OPRIT: „{ch}” e în unicode-range pentru {fisier}, dar fișierul nu are glifa")
                    sys.exit(1)
                if fisier not in self.folosite:
                    self.folosite.append(fisier)
                return fisier
        print(f"OPRIT: nicio față {FAMILIE} nu acoperă „{ch}” (U+{cp:04X})")
        sys.exit(1)

    def font(self, fisier, grosime):
        cheie = (fisier, grosime)
        if cheie not in self.hb:
            ttf = os.path.join(self.tmp, fisier + ".ttf")
            if not os.path.exists(ttf):
                tt = TTFont(os.path.join(self.media, fisier))
                tt.flavor = None                              # HarfBuzz nu citește .woff2
                tt.save(ttf)
            f = hb.Font(hb.Face(hb.Blob.from_file_path(ttf)))
            f.set_variations({"wght": grosime})
            self.hb[cheie] = f
        return self.hb[cheie]


def cuvant(fete, text, grosime, spatiere, upem):
    """Întoarce (lățimea totală în unități de font, contururile literelor, cel mai lung contur)."""
    bucati, curenta = [], None
    for ch in text:
        f = fete.fata(ch)
        if curenta and curenta[0] == f:
            curenta[1] += ch
        else:
            curenta = [f, ch]
            bucati.append(curenta)
    x, glife, maxim = 0.0, [], 0.0
    # ca în browser: cu spațiere între litere ligaturile opționale nu se aplică; fără spațiere, toate funcțiile implicite
    functii = {"liga": False, "clig": False} if spatiere else {}
    for fisier, bucata in bucati:
        font = fete.font(fisier, grosime)
        buf = hb.Buffer()
        buf.add_str(bucata)
        buf.direction, buf.script, buf.language = "LTR", "Latn", LIMBA
        hb.shape(font, buf, functii)
        for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
            brut = pathops.Path()
            font.draw_glyph_with_pen(info.codepoint, brut.getPen())
            brut.simplify(fix_winding=True, keep_starting_points=False)   # unește bucățile suprapuse ale literei
            rec = RecordingPen()
            brut.draw(rec)
            svg = SVGPathPen(None, ntos=lambda v: str(int(round(v))))
            mutat = TransformPen(svg, (1, 0, 0, -1, x + pos.x_offset, -pos.y_offset))
            pastrate = 0
            for c in contururi(rec.value):
                lung = lungime(c)
                if lung < CONTUR_MIN:          # puncte și accente: rămân fără bandă
                    continue
                maxim = max(maxim, lung)
                for op, args in c:
                    getattr(mutat, op)(*args)
                pastrate += 1
            if pastrate:
                glife.append(svg.getCommands())
            x += pos.x_advance + spatiere * upem
    return x, glife, maxim


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(2)
    fete = Fete(sys.argv[1])
    for cale_ts, export, texte in SETURI:
        linii_texte, total_litere, maxim_total, upem = [], 0, 0.0, None
        for text, grosime, spatiere in texte:
            if "  " in text or text != text.strip():
                print(f"OPRIT: spații duble sau la capete în „{text}”")
                sys.exit(1)
            cuvinte = []
            for w in text.split(" "):
                if upem is None:
                    upem = TTFont(os.path.join(fete.media, fete.fata(w[0])))["head"].unitsPerEm
                adv, glife, maxim = cuvant(fete, w, grosime, spatiere, upem)
                maxim_total = max(maxim_total, maxim)
                total_litere += len(glife)
                cuvinte.append((w, adv, glife))
            linii_texte.append(f'    "{text}": {{ weight: {grosime}, tracking: {spatiere}, words: [')
            for w, adv, glife in cuvinte:
                linii_texte.append(f'      {{ text: "{w}", adv: {adv:.2f}, glyphs: [')
                linii_texte += [f'        "{d}",' for d in glife]
                linii_texte.append("      ] },")
            linii_texte.append("    ] },")
        if maxim_total >= PERIOADA * upem / 1000:
            print(f"OPRIT: un contur are {maxim_total:.0f} unități, mai mult decât perioada benzii ({PERIOADA})")
            sys.exit(1)
        antet = [
            "// GENERAT de scripts/linia_texte.py. Nu se editează de mână: se schimbă lista din script și se rulează din nou.",
            "// Contururile cad peste textul din pagină doar cu fontul, grosimea și spațierea de mai jos; componenta verifică lățimea fiecărui cuvânt.",
            'import type { OutlineSet } from "@/components/RunningLine";',
            "",
            f"export const {export}: OutlineSet = {{",
            f"  upem: {upem},",
            "  fonts: [" + ", ".join(f'"{f}"' for f in fete.folosite) + "],",
            "  texts: {",
        ]
        cale = os.path.join(RADACINA, cale_ts)
        os.makedirs(os.path.dirname(cale), exist_ok=True)
        with io.open(cale, "w", encoding="utf-8", newline="\n") as f:
            f.write("\n".join(antet + linii_texte + ["  },", "};", ""]))
        print(f"OK {cale_ts}: {len(texte)} texte, {total_litere} litere cu contur, cel mai lung contur {maxim_total:.0f}, "
              f"{os.path.getsize(cale) / 1024:.1f} KB, fețe: {', '.join(f[:16] for f in fete.folosite)}")


if __name__ == "__main__":
    main()
