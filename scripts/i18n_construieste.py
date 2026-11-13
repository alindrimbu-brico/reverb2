"""Face dicționarele selectorului de limbă (docs/designs/selector_limba_2026-11-13).

Intrare:
  - lib/i18n/sursa.json: textele românești, numerotate (scris de scripts/i18n_extrage.py);
  - dicționarele existente din public/i18n/<cod>.json (traducerile făcute până acum se păstrează);
  - opțional, un dosar cu traduceri noi: fișiere <cod>_<orice>.json, fiecare un obiect {"număr": "traducere"}, cu numerele
    din sursa.json de ACUM (bucățile date traducătorilor de i18n_extrage.py --bucati);
  - lib/i18n/corectii.json: {"<cod>": {"<text românesc>": "<traducere>"}}, corecturi de mână; câștigă mereu.
Ieșire: public/i18n/<cod>.json ({cheie: traducere}) și lib/i18n/generated.ts (hash-ul fiecărui dicționar + limbile fără liniuțe).

- Cheia = textul românesc normalizat, cu „#” în locul fiecărui număr; traducerea ține „#” în aceleași locuri. Dacă traducerea
  are alte numere sau altă ordine, intrarea rămâne literală (se potrivește doar cu exact acel text).
- Textele din sursă fără traducere rămân în română pe pagină; scriptul le numără pe fiecare limbă („lipsă”).
- Intrările care nu mai sunt în sursă se scot din dicționar.
- Liniuțele: dacă un singur titlu tradus are o literă în afara atlasului (lib/outlineRun/w*.ts), limba întreagă rămâne fără
  liniuțe, ca să nu apară pagini cu rânduri amestecate.

  py -3 -X utf8 scripts/i18n_construieste.py [<dosarul cu traduceri noi>]
"""
import glob
import hashlib
import io
import json
import os
import re
import sys

RADACINA = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSAR = sys.argv[1] if len(sys.argv) > 1 else None
PUBLIC = os.path.join(RADACINA, "public", "i18n")
NUMAR = re.compile(r"\d+(?:[.,]\d+)*")
SEMNE = "→↗↓←€%≤"


def citeste(cale, implicit):
    try:
        return json.load(io.open(cale, encoding="utf-8-sig"))
    except FileNotFoundError:
        return implicit


sursa = json.load(io.open(os.path.join(RADACINA, "lib", "i18n", "sursa.json"), encoding="utf-8"))
corectii = citeste(os.path.join(RADACINA, "lib", "i18n", "corectii.json"), {})

# literele pe care „linia care merge” le poate desena, la toate grosimile
atlas = None
for cale in glob.glob(os.path.join(RADACINA, "lib", "outlineRun", "w*.ts")):
    m = re.search(r'chars:\s*("(?:[^"\\]|\\.)*")', io.open(cale, encoding="utf-8").read())
    litere = set(json.loads(m.group(1)))
    atlas = litere if atlas is None else atlas & litere
atlas |= {" ", " "}

os.makedirs(PUBLIC, exist_ok=True)
coduri = {os.path.basename(c)[:-5] for c in glob.glob(os.path.join(PUBLIC, "*.json"))}
if DOSAR:
    coduri |= {os.path.basename(c).split("_")[0] for c in glob.glob(os.path.join(DOSAR, "*_*.json"))}


def sablon(text, traducere):
    """(cheie, valoare) pentru dicționar: cu „#” dacă numerele sunt aceleași și în aceeași ordine, altfel literal."""
    cheie = text if "#" in text else NUMAR.sub("#", text)
    if cheie != text and NUMAR.findall(text) == NUMAR.findall(traducere) and "#" not in traducere:
        return cheie, NUMAR.sub("#", traducere)
    return text, traducere


def din_dictionar(vechi, text):
    """Traducerea ținută minte pentru un text românesc (cu numerele lui puse la loc) sau None."""
    if text in vechi:
        return vechi[text]
    if "#" in text:
        return None
    cheie = NUMAR.sub("#", text)
    if cheie == text or cheie not in vechi:
        return None
    numere = iter(NUMAR.findall(text))
    return re.sub("#", lambda _: next(numere, "#"), vechi[cheie])


versiuni, fara_linii, raport = {}, [], []
for cod in sorted(coduri):
    vechi = citeste(os.path.join(PUBLIC, f"{cod}.json"), {})
    noi, stricat = {}, []
    if DOSAR:
        for cale in sorted(glob.glob(os.path.join(DOSAR, f"{cod}_*.json"))):
            try:
                d = json.load(io.open(cale, encoding="utf-8-sig"))
                assert isinstance(d, dict)
                noi.update(d)
            except Exception as e:
                stricat.append(f"{os.path.basename(cale)}: {e}")
    de_mana = corectii.get(cod, {})

    dictionar, lipsa, numere, semne, linii_rele, litere_rele = {}, [], [], [], 0, set()
    for e in sursa:
        s = e["t"]
        t = de_mana.get(s) or noi.get(str(e["i"])) or din_dictionar(vechi, s)
        if not isinstance(t, str) or not t.strip():
            lipsa.append(e["i"])
            continue
        t = t.strip()
        if sorted(NUMAR.findall(s)) != sorted(NUMAR.findall(t)):
            numere.append(e["i"])
        if any(s.count(x) != t.count(x) for x in SEMNE):
            semne.append(e["i"])
        cheie, valoare = sablon(s, t)
        dictionar[cheie] = valoare
        if e["k"] == "linie":
            afara = set(t) - atlas
            if afara:
                linii_rele += 1
                litere_rele |= afara
    if not dictionar:
        raport.append(f"{cod}: NESCRIS — nicio traducere {'; '.join(stricat)}")
        continue
    continut = json.dumps(dictionar, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
    with io.open(os.path.join(PUBLIC, f"{cod}.json"), "w", encoding="utf-8", newline="\n") as f:
        f.write(continut)
    versiuni[cod] = hashlib.sha1(continut.encode("utf-8")).hexdigest()[:8]
    if linii_rele:
        fara_linii.append(cod)
    raport.append(
        f"{cod}: {len(dictionar)} chei, {len(continut.encode('utf-8')) // 1024} KB; lipsă {len(lipsa)} {lipsa[:10]}; "
        f"numere diferite {numere[:8]}; semne diferite {semne[:8]}; titluri în afara atlasului {linii_rele}"
        + (f" ({''.join(sorted(litere_rele))})" if litere_rele else "")
        + (f"; FIȘIERE STRICATE: {'; '.join(stricat)}" if stricat else "")
    )

with io.open(os.path.join(RADACINA, "lib", "i18n", "generated.ts"), "w", encoding="utf-8", newline="\n") as f:
    f.write(
        "// GENERAT de scripts/i18n_construieste.py. Nu se editează de mână.\n"
        "// DICT_VERSION: limbile care au dicționar în public/i18n/ și hash-ul fișierului (intră în adresă, pentru cache).\n"
        "// LINES_OFF: limbile în care cel puțin un titlu are litere în afara atlasului „liniei care merge”; acolo titlurile sunt text simplu.\n\n"
        f"export const DICT_VERSION: Record<string, string> = {json.dumps(versiuni, sort_keys=True)};\n\n"
        f"export const LINES_OFF: string[] = {json.dumps(sorted(fara_linii))};\n"
    )

print("\n".join(raport))
print(f"scrise: {len(versiuni)} dicționare; fără liniuțe: {sorted(fara_linii)}")
