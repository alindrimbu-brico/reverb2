"""Generează atlasul de litere pentru „linia care merge” (components/RunningLine.tsx, componenta Linie).

Pentru fiecare grosime folosită de titluri scrie `lib/outlineRun/w<grosime>.ts`: pentru fiecare caracter fața fontului,
avansul și conturul la origine; perechile de kerning; perechile de litere care își schimbă forma (ligaturi). Componenta
adună singură avans + kerning + spațiere, deci ORICE titlu merge fără să fie trecut într-o listă. Scriptul se rulează
doar când se schimbă fontul site-ului (alt fișier Geist): `node scripts/check-seo.mjs` spune când.

Ce știe (moștenit de la scripts/linia_texte.py, pe care îl înlocuiește):
  - diacritice: browserul ia „ă”, „ș”, „ț” din altă față a fontului (subsetul latin-ext). Fața se alege ca în browser,
    după `unicode-range` din CSS-ul construit (la suprapunere câștigă ultima regulă declarată); între două fețe nu există kerning;
  - contururile suprapuse ale unei litere se unesc (skia-pathops); cele sub 700 de unități (puncte, accente) rămân fără bandă;
  - limba „ro” la așezare, ca în pagină (<html lang="ro"> pe tot site-ul).

La sfârșit se verifică singur: compară aritmetica pe care o face componenta cu așezarea completă HarfBuzz, pe cuvinte
reale și pe șiruri la întâmplare. O abatere peste 0,5 unități de font oprește scriptul.

Rulare (din rădăcina proiectului, după `npx next build`):
    py -3 -X utf8 scripts/linia_atlas.py .next/static
Are nevoie de: fonttools, uharfbuzz, skia-pathops, brotli.
"""
import io
import json
import os
import random
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
GROSIMI = (300, 400, 500, 600)
CARACTERE = (
    "".join(chr(c) for c in range(0x21, 0x7F))
    + "ăâîșțĂÂÎȘȚşţŞŢ"
    + "áàäãåçéèêëíìïñóòôöõúùûüýÁÀÄÃÅÇÉÈÊËÍÌÏÑÓÒÔÖÕÚÙÛÜÝßø"
    + " –—‘’“”„…·•€£™®©°×«»"
)
# Cuvinte din titlurile site-ului, pentru verificarea de la sfârșit (pe lângă șirurile la întâmplare).
CORPUS = ("Infrastructură digitală. Sisteme care produc valoare. În 2026, clienții nu mai caută doar pe Google. Ei întreabă agenții AI. "
          "AI-Readable Answer Stack Indexare Prețuri & Servicii Generative Engine Optimization GEO Capabilități AI Creștere Măsurabilă "
          "Prețuri fixe. Fără costuri ascunse. Site-uri, Magazine Online și Proiecte Mari Întrebări frecvente despre colaborare. "
          "Structură, execuție, rezultate. Nu amplificăm zgomotul. Îl eliminăm. Hai să vorbim despre afacerea ta. Proiecte live. Făcute de noi. "
          "Packages & Pricing Let's talk about your business. Want to apply this for your business? Clear 4-step process. "
          "Fluxuri de Vânzare Fundație Inginerească Website or Online Store fi fl ff ffi Waffle Type AV To. Yes, \"quoted\" (text) 100% AI").split(" ")


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
        self.tt, self.hb = {}, {}
        self.tmp = tempfile.mkdtemp(prefix="linia_atlas_")

    def fata(self, ch):
        """Fișierul din care browserul ia caracterul, sau None dacă nicio față Geist nu îl are."""
        cp = ord(ch)
        for fisier, intervale in reversed(self.lista):      # ultima regulă declarată câștigă
            if any(a <= cp <= z for a, z in intervale):
                if fisier not in self.tt:
                    self.tt[fisier] = TTFont(os.path.join(self.media, fisier))
                return fisier if cp in self.tt[fisier].getBestCmap() else None
        return None

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


def aseaza(font, text, cu_spatiere):
    """Așezarea HarfBuzz a unui șir dintr-o singură față: [(glifă, avans, x_offset, y_offset)].
    Ca în browser: cu spațiere între litere ligaturile opționale nu se aplică."""
    buf = hb.Buffer()
    buf.add_str(text)
    buf.direction, buf.script, buf.language = "LTR", "Latn", LIMBA
    hb.shape(font, buf, {"liga": False, "clig": False} if cu_spatiere else {})
    return [(i.codepoint, p.x_advance, p.x_offset, p.y_offset) for i, p in zip(buf.glyph_infos, buf.glyph_positions)]


def contur(font, glifa):
    """Conturul glifei la origine, cu y întors (SVG), fără bucățile scurte. Întoarce (d, cel mai lung contur)."""
    brut = pathops.Path()
    font.draw_glyph_with_pen(glifa, brut.getPen())
    brut.simplify(fix_winding=True, keep_starting_points=False)   # unește bucățile suprapuse ale literei
    rec = RecordingPen()
    brut.draw(rec)
    svg = SVGPathPen(None, ntos=lambda v: str(int(round(v))))
    intors = TransformPen(svg, (1, 0, 0, -1, 0, 0))
    maxim = 0.0
    for c in contururi(rec.value):
        lung = lungime(c)
        if lung < CONTUR_MIN:          # puncte și accente: rămân fără bandă
            continue
        maxim = max(maxim, lung)
        for op, args in c:
            getattr(intors, op)(*args)
    return svg.getCommands() or "", maxim


def atlas(fete, grosime, upem):
    fisiere = []                       # fețele folosite, în ordinea apariției → indicele din `faces`
    chars, fata_idx, adv, paths, gid = [], [], [], [], {}
    sarite, maxim_total = [], 0.0
    for ch in CARACTERE:
        fisier = fete.fata(ch)
        if fisier is None:
            sarite.append(ch)
            continue
        font = fete.font(fisier, grosime)
        a = aseaza(font, ch, False)
        if len(a) != 1 or a[0][2] or a[0][3]:
            sarite.append(ch)
            continue
        if fisier not in fisiere:
            fisiere.append(fisier)
        d, maxim = contur(font, a[0][0])
        maxim_total = max(maxim_total, maxim)
        gid[ch] = a[0][0]
        chars.append(ch)
        fata_idx.append(fisiere.index(fisier))
        adv.append(a[0][1])
        paths.append(d)
    if maxim_total >= PERIOADA * upem / 1000:
        print(f"OPRIT: un contur are {maxim_total:.0f} unități, mai mult decât perioada benzii ({PERIOADA})")
        sys.exit(1)
    if len(fisiere) > 10:
        print("OPRIT: mai mult de 10 fețe; `faces` ține o cifră pe caracter")
        sys.exit(1)
    # perechi: kerning și schimbări de formă, în fiecare față, cu și fără spațiere
    kern, lig0, ligT = {}, [], []
    pe_fata = {}
    for ch, f in zip(chars, fata_idx):
        pe_fata.setdefault(f, []).append(ch)
    avans = dict(zip(chars, adv))
    for f, lista in pe_fata.items():
        font = fete.font(fisiere[f], grosime)
        for a_ in lista:
            for b_ in lista:
                for cu_spatiere, lig in ((False, lig0), (True, ligT)):
                    r = aseaza(font, a_ + b_, cu_spatiere)
                    simplu = (len(r) == 2 and r[0][0] == gid[a_] and r[1][0] == gid[b_]
                              and not r[0][2] and not r[0][3] and not r[1][3] and r[1][1] == avans[b_])
                    if not simplu:
                        lig.append(a_ + b_)
                        continue
                    k = r[0][1] + r[1][2] - avans[a_]
                    if k:
                        if kern.get(a_ + b_, k) != k:
                            print(f"OPRIT: kerning diferit cu și fără spațiere la „{a_ + b_}”")
                            sys.exit(1)
                        kern[a_ + b_] = k
    # Ligaturile adevărate (două litere → o singură glifă, doar fără spațiere): intră în atlas ca „litere” proprii, în zona
    # de uz privat (U+E000…), cu avans, contur și kerning față de toate celelalte. Ce nu e ligatură simplă rămâne în `skip0`.
    lig, skip0 = {}, []
    for pereche in lig0:
        f = fata_idx[chars.index(pereche[0])]
        font = fete.font(fisiere[f], grosime)
        r = aseaza(font, pereche, False)
        if len(r) != 1 or r[0][2] or r[0][3]:
            skip0.append(pereche)
            continue
        pseudo = chr(0xE000 + len(lig))
        d, maxim = contur(font, r[0][0])
        lig[pereche] = pseudo
        gid[pseudo] = r[0][0]
        avans[pseudo] = r[0][1]
        chars.append(pseudo)
        fata_idx.append(f)
        adv.append(r[0][1])
        paths.append(d)
    sursa = {p: pereche for pereche, p in lig.items()}          # pseudo → cele două litere
    for pseudo, pereche in sursa.items():
        f = fata_idx[chars.index(pseudo)]
        font = fete.font(fisiere[f], grosime)
        for c in [x for x, fx in zip(chars, fata_idx) if fx == f]:
            text_c = sursa.get(c, c)
            # c înaintea ligaturii, apoi ligatura înaintea lui c; doar când HarfBuzz dă exact cele două glife așteptate
            for stanga, dreapta, text in ((c, pseudo, text_c + pereche), (pseudo, c, pereche + text_c)):
                r = aseaza(font, text, False)
                if len(r) == 2 and r[0][0] == gid[stanga] and r[1][0] == gid[dreapta] and not r[0][2] and not r[0][3] and not r[1][3] and r[1][1] == avans[dreapta]:
                    k = r[0][1] + r[1][2] - avans[stanga]
                    if k:
                        kern[stanga + dreapta] = k
    return {"upem": upem, "weight": grosime, "chars": "".join(chars), "faces": "".join(str(i) for i in fata_idx),
            "adv": adv, "paths": paths, "kern": kern, "lig": lig, "skip0": skip0, "skipT": ligT}, fisiere, sarite


def aritmetic(at, cuvant, spatiere_unitati):
    """Exact ce face componenta: pozițiile de pornire ale literelor și lățimea totală; None = fără linie."""
    idx = {c: i for i, c in enumerate(at["chars"])}
    if any("" <= ch <= "" for ch in cuvant):
        return None
    sar = at["skipT"] if spatiere_unitati else at["skip0"]
    if not spatiere_unitati:            # ligaturile se aplică de la stânga la dreapta, doar fără spațiere
        nou, i = "", 0
        while i < len(cuvant):
            if cuvant[i:i + 2] in at["lig"]:
                nou += at["lig"][cuvant[i:i + 2]]
                i += 2
            else:
                nou += cuvant[i]
                i += 1
        cuvant = nou
    sursa = {p: pereche for pereche, p in at["lig"].items()}
    x, poz, prev = 0.0, [], None
    for ch in cuvant:
        if ch not in idx:
            return None
        if prev is not None:
            # perechea în litere obișnuite (o ligatură se judecă după ultima / prima ei literă)
            if sursa.get(prev, prev)[-1] + sursa.get(ch, ch)[0] in sar:
                return None
            if at["faces"][idx[prev]] == at["faces"][idx[ch]]:
                x += at["kern"].get(prev + ch, 0)
        poz.append(x)
        x += at["adv"][idx[ch]] + spatiere_unitati
        prev = ch
    return poz, x


def complet(fete, at, fisiere, cuvant, spatiere_unitati):
    """Așezarea completă HarfBuzz, pe bucăți de aceeași față (ca în browser)."""
    idx = {c: i for i, c in enumerate(at["chars"])}
    bucati, cur = [], None
    for ch in cuvant:
        f = at["faces"][idx[ch]]
        if cur and cur[0] == f:
            cur[1] += ch
        else:
            cur = [f, ch]
            bucati.append(cur)
    x, poz = 0.0, []
    for f, bucata in bucati:
        r = aseaza(fete.font(fisiere[int(f)], at["weight"]), bucata, bool(spatiere_unitati))
        for _, av, xo, _yo in r:
            poz.append(x + xo)
            x += av + spatiere_unitati
    return poz, x


def verifica(fete, at, fisiere):
    rnd = random.Random(at["weight"])
    litere = [c for c in at["chars"] if c.isalnum()]
    probe = [w for w in CORPUS if w]
    de_baza = [c for c in at["chars"] if not "" <= c <= ""]
    for _ in range(4000):
        n = rnd.randint(1, 14)
        sursa = litere if rnd.random() < 0.7 else de_baza
        probe.append("".join(rnd.choice(sursa) for _ in range(n)))
    for _ in range(600):                 # șiruri dense în literele care fac ligaturi
        probe.append("".join(rnd.choice("fiiltaeo") for _ in range(rnd.randint(2, 9))))
    rau, testate, fara_linie, maxim = [], 0, 0, 0.0
    for spatiere in (0, -25, -40):
        for w in probe:
            a = aritmetic(at, w, spatiere)
            if a is None:
                fara_linie += 1
                continue
            c = complet(fete, at, fisiere, w, spatiere)
            testate += 1
            if len(c[0]) != len(a[0]):
                rau.append((w, spatiere, f"HarfBuzz dă {len(c[0])} glife, aritmetica {len(a[0])}"))
                continue
            d = max([abs(p - q) for p, q in zip(a[0], c[0])] + [abs(a[1] - c[1])])
            maxim = max(maxim, d)
            if d > 0.5:
                rau.append((w, spatiere, f"abatere {d:.1f}"))
    return testate, fara_linie, maxim, rau


def grupat(kern):
    """Kerningul, scris scurt: litera din stânga → { valoare: literele din dreapta care au acea valoare }."""
    g = {}
    for pereche, k in kern.items():
        g.setdefault(pereche[0], {}).setdefault(str(int(k)) if float(k).is_integer() else str(k), []).append(pereche[1])
    return {a: {k: "".join(v) for k, v in vals.items()} for a, vals in g.items()}


def scrie(at, grosime):
    cale = os.path.join(RADACINA, "lib", "outlineRun", f"w{grosime}.ts")
    j = lambda v: json.dumps(v, ensure_ascii=False, separators=(",", ":"))  # noqa: E731
    linii = [
        "// GENERAT de scripts/linia_atlas.py. Nu se editează de mână; se rulează din nou scriptul când se schimbă fontul site-ului.",
        f"// Geist la grosimea {grosime}: pentru fiecare caracter fața fontului, avansul și conturul la origine (unități de font, y în jos);",
        "// `kern` = kerningul (litera din stânga → valoare → literele din dreapta); `lig` = ligaturile (două litere → o „literă” din zona",
        "// de uz privat, aflată la sfârșitul lui `chars`), aplicate doar fără spațiere între litere; `skip0` / `skipT` = perechile care își",
        "// schimbă forma altfel (fără / cu spațiere): pe un rând care le conține nu se desenează.",
        'import type { GlyphAtlas } from "@/components/RunningLine";',
        "",
        "export const atlas: GlyphAtlas = {",
        f"  upem: {at['upem']},",
        f"  weight: {grosime},",
        f"  chars: {j(at['chars'])},",
        f"  faces: {j(at['faces'])},",
        f"  adv: {j(at['adv'])},",
        "  paths: [",
    ]
    linii += [f"    {j(d)}," for d in at["paths"]]
    linii += [
        "  ],",
        f"  kern: {j(grupat(at['kern']))},",
        f"  lig: {j(at['lig'])},",
        f"  skip0: {j(at['skip0'])},",
        f"  skipT: {j(at['skipT'])},",
        "};",
        "",
    ]
    with io.open(cale, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(linii))
    return cale


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(2)
    fete = Fete(sys.argv[1])
    upem = TTFont(os.path.join(fete.media, fete.fata("a")))["head"].unitsPerEm
    toate_fisierele, gata = [], []
    for grosime in GROSIMI:
        at, fisiere, sarite = atlas(fete, grosime, upem)
        testate, fara_linie, maxim, rau = verifica(fete, at, fisiere)
        if rau:
            print(f"OPRIT la grosimea {grosime}: {len(rau)} cuvinte de probă nu se potrivesc cu HarfBuzz. Primele:")
            for r in rau[:12]:
                print("   ", r)
            sys.exit(1)
        gata.append((at, grosime))
        for f in fisiere:
            if f not in toate_fisierele:
                toate_fisierele.append(f)
        print(f"grosimea {grosime}: {len(at['chars'])} caractere ({sum(1 for d in at['paths'] if d)} cu contur), {len(at['kern'])} perechi de kerning, "
              f"ligaturi: {' '.join(at['lig']) or '-'}, perechi fără linie: {' '.join(at['skip0'] + at['skipT']) or '-'}, fără față: {''.join(sarite) or '-'} "
              f"| verificat pe {testate} șiruri (abatere maximă {maxim:.2f} unități; {fara_linie} rămân fără linie)")
    for at, grosime in gata:
        cale = scrie(at, grosime)
        print(f"OK lib/outlineRun/w{grosime}.ts: {os.path.getsize(cale) / 1024:.1f} KB")
    # Paza: din ce fișiere de font s-a generat (primele 16 caractere ale numelui = amprenta conținutului).
    with io.open(os.path.join(RADACINA, "lib", "outlineRun", "fonts.json"), "w", encoding="utf-8", newline="\n") as f:
        json.dump({"family": FAMILIE, "files": sorted(x.split("-")[0] for x in toate_fisierele)}, f, indent=2)
        f.write("\n")
    print("OK lib/outlineRun/fonts.json:", ", ".join(sorted(x.split("-")[0] for x in toate_fisierele)))


if __name__ == "__main__":
    main()
