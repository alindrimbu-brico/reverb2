# -*- coding: utf-8 -*-
"""Testele lucrătorului de postări. Rulare: py -3 -X utf8 scripts\\test_studio_postari.py
Lucrează într-un dosar temporar (STUDIO_POSTARI_RAD); nu atinge catalogul real, nu cheamă rețeaua, nu trimite pe Telegram."""
import json
import os
import shutil
import sys
import tempfile
import time
import unittest
from pathlib import Path

TMP = Path(tempfile.mkdtemp(prefix="postari_test_"))
os.environ["STUDIO_POSTARI_RAD"] = str(TMP)
sys.path.insert(0, str(Path(__file__).resolve().parent))
import studio_postari as sp  # noqa: E402

REAL = Path(r"C:\Users\alind\reverb\studio-postari\marci.json")
shutil.copy(REAL, sp.MARCI)
sp.telegram = lambda text: TELEGRAME.append(text)          # fără mesaje reale
sp.HERMES = ""
TELEGRAME = []


def postare(pid="s-0123456789ab", stare="previzualizare", retele=("facebook", "instagram")):
    d = sp.dir_postare(pid)
    f = d / "g_1080x1350.jpg"
    f.write_bytes(b"jpg-de-proba")
    p = {"id": pid, "marca": "bricolando", "tip": "grafic", "retele": list(retele), "ideea": "o idee de probă pentru atelier", "cand": "cat_mai_repede",
         "stare": stare, "eroare": None, "lucru": None, "dovezi": {}, "creat_la": sp.acum(),
         "texte": {r: {"text": f"Text pentru {r}. https://bricolando.ro", "hashtaguri": ["#atelier"], "titlu": ""} for r in retele},
         "grafica": {"titlu": "Titlu", "subtitlu": "Sub"}, "fisiere": {"1080x1350": str(f)}, "format_retea": {r: "1080x1350" for r in retele},
         "previzualizari": {}, "eticheta_ai": False}
    p["hash"] = sp.amprenta(p)
    with sp.catalog_rw() as cat:
        cat["postari"][pid] = p
    return p


def cmd(actiune, pid, date=None, varsta=0):
    return {"id": "c-" + os.urandom(6).hex(), "ts": int(time.time()) - varsta, "actiune": actiune, "piesa": pid, "date": date or {}}


class Teste(unittest.TestCase):
    def setUp(self):
        for f in (sp.CATALOG, sp.OPRIT, sp.JURNAL_PUB):
            f.unlink(missing_ok=True)
        shutil.rmtree(sp.PUBLICARE, ignore_errors=True)
        TELEGRAME.clear()

    def test_verificatorul_de_text(self):
        reg = sp.registru()
        m = reg["marci"]["bricolando"]
        self.assertEqual(sp.probleme_text(reg, m, "facebook", "Un sfat bun pentru atelier.", ["#atelier"]), [])
        self.assertTrue(any("interzis" in p for p in sp.probleme_text(reg, m, "facebook", "De la Kalki Drim, cu drag.", [])))
        self.assertTrue(any("exclusă" in p for p in sp.probleme_text(reg, m, "facebook", "Generatorul ITC Power e aici.", [])))
        self.assertTrue(any("limita" in p for p in sp.probleme_text(reg, m, "x", "a" * 300, [])))
        self.assertTrue(any("hashtaguri" in p for p in sp.probleme_text(reg, m, "x", "scurt", ["#a", "#b", "#c"])))
        self.assertTrue(any("stoc" in p for p in sp.probleme_text(reg, m, "facebook", "Mai avem 3 bucăți în stoc, grăbește-te.", [])))
        self.assertTrue(any("plătită" in p for p in sp.probleme_text(reg, m, "facebook", "Dă boost la postare.", [])))

    def test_validarea_comenzii_de_creare(self):
        bun = {"marca": "bricolando", "tip": "grafic", "retele": ["facebook"], "ideea": "un sfat pentru atelier", "cand": "cat_mai_repede"}
        sp.valideaza(cmd("post_creeaza", "s-0123456789ab", bun))
        for schimb, text in ((dict(marca="raftplin"), "pregătire"), (dict(tip="video"), "nu e pornit"), (dict(retele=["tiktok"]), "nepotrivite"),
                             (dict(ideea="scurt"), "ideea"), (dict(cand="mâine"), "ora")):
            with self.assertRaises(sp.Refuz) as e:
                sp.valideaza(cmd("post_creeaza", "s-0123456789ab", bun | schimb))
            self.assertIn(text, str(e.exception))
        with self.assertRaises(sp.Refuz):
            sp.valideaza(cmd("post_creeaza", "p-0123456789ab", bun))
        with self.assertRaises(sp.Refuz):
            sp.valideaza(cmd("post_sterge_tot", "s-0123456789ab"))

    def test_comanda_de_publicare_expira_in_doua_ore(self):
        p = postare()
        with self.assertRaises(sp.Refuz) as e:
            sp.valideaza(cmd("post_publica", p["id"], {"hash": p["hash"]}, varsta=2 * 3600 + 5))
        self.assertIn("expirat", str(e.exception))
        sp.valideaza(cmd("post_creeaza", "s-0123456789ac", {"marca": "bricolando", "tip": "text", "retele": ["facebook"], "ideea": "idee păstrată până pornește laptopul"},
                         varsta=3 * 24 * 3600))

    def test_publica_cere_amprenta_vazuta(self):
        p = postare()
        with self.assertRaises(sp.Refuz) as e:
            sp.executa_scurta(cmd("post_publica", p["id"], {"hash": "0" * 64}))
        self.assertIn("s-a schimbat", str(e.exception))
        self.assertFalse(list(sp.PUBLICARE.glob("*.json")) if sp.PUBLICARE.exists() else [])
        sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        self.assertEqual(sp.citeste_catalog()["postari"][p["id"]]["stare"], "aprobata")
        self.assertEqual(sorted(f.name for f in sp.PUBLICARE.glob("*.json")), [f"{p['id']}_facebook.json", f"{p['id']}_instagram.json"])

    def test_oprirea_generala_blocheaza_publicarea(self):
        p = postare()
        sp.executa_scurta(cmd("post_oprire", sp.ID_GENERAL))
        with self.assertRaises(sp.Refuz) as e:
            sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        self.assertIn("oprită", str(e.exception))
        self.assertTrue(sp.scadente()["oprit"])
        sp.executa_scurta(cmd("post_pornire", sp.ID_GENERAL))
        sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))

    def test_plafonul_zilnic(self):
        for i in range(6):
            p = postare(pid=f"s-00000000000{i}")
            sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        p = postare(pid="s-00000000000a")
        with self.assertRaises(sp.Refuz) as e:
            sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        self.assertIn("plafonul", str(e.exception))

    def test_textul_schimbat_de_alin_trece_prin_verificator_si_schimba_amprenta(self):
        p = postare()
        with self.assertRaises(sp.Refuz):
            sp.executa_scurta(cmd("post_text", p["id"], {"retea": "facebook", "text": "De la Kalki Drim SRL."}))
        sp.executa_scurta(cmd("post_text", p["id"], {"retea": "facebook", "text": "Text nou, mai scurt.\n\n#atelier #scule"}))
        q = sp.citeste_catalog()["postari"][p["id"]]
        self.assertEqual(q["texte"]["facebook"], {"text": "Text nou, mai scurt.", "hashtaguri": ["#atelier", "#scule"], "titlu": ""})
        self.assertNotEqual(q["hash"], p["hash"])
        with self.assertRaises(sp.Refuz):                       # amprenta veche nu mai publică
            sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))

    def test_rutina_scadente_incep_dovada_fara_publicare_dubla(self):
        p = postare()
        sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        s = sp.scadente()
        self.assertEqual([(r["retea"], r["deja_inceput"]) for r in s["de_publicat"]], [("facebook", False), ("instagram", False)])
        self.assertTrue(s["de_publicat"][0]["text_final"].endswith("#atelier"))
        self.assertRegex(s["de_publicat"][0]["ora_de_programat"], r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$")
        self.assertTrue(sp.RUTINA_VIU.exists())
        self.assertFalse(sp.incep(p["id"], "facebook")["deja_inceput"])
        a_doua = sp.incep(p["id"], "facebook")                  # rutina a murit și a repornit
        self.assertTrue(a_doua["deja_inceput"])
        self.assertIn("caută întâi", a_doua["atentie"])
        self.assertTrue(next(r for r in sp.scadente()["de_publicat"] if r["retea"] == "facebook")["deja_inceput"])
        with self.assertRaises(sp.Refuz):                       # link de pe alt domeniu
            sp.dovada(p["id"], "facebook", url="https://exemplu.ro/postare")
        with self.assertRaises(sp.Refuz):                       # nici link, nici oră
            sp.dovada(p["id"], "facebook")
        self.assertEqual(sp.dovada(p["id"], "facebook", programata="2026-11-12 19:00")["stare"], "aprobata")       # instagram încă lipsește
        self.assertEqual(sp.dovada(p["id"], "instagram", programata="2026-11-12 19:05")["stare"], "programata")
        self.assertEqual(sp.scadente()["de_publicat"], [])      # nimic de republicat
        self.assertEqual(sp.dovada(p["id"], "facebook", url="https://www.facebook.com/bricolando.ro/posts/123")["stare"], "programata")
        self.assertEqual(sp.dovada(p["id"], "instagram", url="https://www.instagram.com/p/abc/")["stare"], "publicata")
        self.assertEqual(len(TELEGRAME), 4)
        self.assertEqual(len(sp.JURNAL_PUB.read_text(encoding="utf-8").strip().splitlines()), 4)

    def test_esec_pe_o_retea_si_reincercare_doar_pe_ea(self):
        p = postare()
        sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        sp.dovada(p["id"], "facebook", programata="2026-11-12 19:00")
        self.assertEqual(sp.dovada(p["id"], "instagram", esec="Chrome nu e conectat")["stare"], "publicata_partial")
        self.assertEqual(sp.scadente()["de_publicat"], [])
        sp.executa_scurta(cmd("post_reincearca", p["id"]))
        s = sp.scadente()["de_publicat"]
        self.assertEqual([(r["retea"], r["incercare"]) for r in s], [("instagram", 2)])
        q = sp.citeste_catalog()["postari"][p["id"]]
        self.assertEqual(q["stare"], "aprobata")
        self.assertIn("facebook", q["dovezi"])

    def test_rutina_absenta_trei_ore(self):
        p = postare()
        sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        with sp.catalog_rw() as cat:
            import datetime as dt
            cat["postari"][p["id"]]["aprobata_la"] = (dt.datetime.now().astimezone() - dt.timedelta(hours=3, minutes=5)).isoformat(timespec="seconds")
        sp.ciclu()
        q = sp.citeste_catalog()["postari"][p["id"]]
        self.assertEqual(q["stare"], "esuata")
        self.assertIn("rutina", q["eroare"])

    def test_tranzitii_si_respingere(self):
        p = postare(stare="publicata")
        with self.assertRaises(sp.Refuz):
            sp.executa_scurta(cmd("post_respinge", p["id"]))
        with self.assertRaises(sp.Refuz):
            sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        p = postare(pid="s-0123456789ad")
        sp.executa_scurta(cmd("post_publica", p["id"], {"hash": p["hash"]}))
        sp._muzica = lambda: type("M", (), {"sterge_media": staticmethod(lambda n: None)})
        sp.executa_scurta(cmd("post_respinge", p["id"]))
        self.assertEqual(sp.citeste_catalog()["postari"][p["id"]]["stare"], "respinsa")
        self.assertEqual(list(sp.PUBLICARE.glob(f"{p['id']}_*.json")), [])

    def test_grafica_sablonul_se_completeaza_fara_campuri_ramase(self):
        m = sp.registru()["marci"]["bricolando"]
        g = {"sus": "Atelier", "titlu": "Titlu <cu> & semne", "subtitlu": "Sub", "indemn": "Vezi pe site"}
        t = sp.pagina_grafica(m, g, 1080, 1350, None, "", False)
        import re
        self.assertEqual(re.findall(r"\{\{[A-Z_0-9]+\}\}", t), [])
        self.assertIn("Titlu &lt;cu&gt; &amp; semne", t)
        self.assertIn('class="poza fara"', t)
        self.assertIn("lat", sp.pagina_grafica(m, g, 1200, 675, None, "", True).split('<body class="')[1].split('"')[0])

    def test_json_din_raspunsul_modelului(self):
        self.assertEqual(sp._json_din('```json\n{"a": 1}\n```'), {"a": 1})
        self.assertEqual(sp._json_din('Iată: {"a": {"b": 2}} gata'), {"a": {"b": 2}})
        with self.assertRaises(ValueError):
            sp._json_din("fără nimic")


if __name__ == "__main__":
    try:
        unittest.main(verbosity=1)
    finally:
        shutil.rmtree(TMP, ignore_errors=True)
