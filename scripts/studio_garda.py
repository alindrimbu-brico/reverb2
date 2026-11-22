#!/usr/bin/env python3
"""Garda publicării din Reverb Studio — înlocuiește rutina Claude „studio-publica” (la 30 min, 07–22), care pornea ~32 de sesiuni pe zi ca să
afle că nu e nimic de publicat (184 de porniri în 8 zile, 2–4 cu ceva de făcut; ~9 $/zi din abonament). Alin, 20 nov 2026: „tot ce este
recurent să poată fi făcut prin script”.

  1. `studio_postari.py scadente` (deterministic; scrie și bătaia de inimă rutina_viu.txt pe care o arată Studio).
  2. Doar dacă `de_publicat` / `de_confirmat` nu sunt goale: o sesiune Claude Code pe creditul API (`claude_credit.py --chrome -p`), care
     urmează rutina veche de la pasul 2 (SKILL.md-ul ei rămâne sursa regulilor: excluderile, poarta „fără preț”, procedura de browser).

  py -3 -X utf8 scripts\\studio_garda.py      # sarcina Windows bricolando-studio-garda, la 30 min (lucrează doar 07–22)
Jurnal: C:\\Users\\alind\\reverb\\studio-postari\\garda_jurnal.log. Oprire: „oprit” din Studio (același comutator ca înainte).
"""
import datetime
import json
import os
import subprocess
import sys
import time

AICI = os.path.dirname(os.path.abspath(__file__))
RAD = os.path.dirname(AICI)
JURNAL = os.path.join(os.path.dirname(RAD), "studio-postari", "garda_jurnal.log")
ZAVOR = os.path.join(os.path.dirname(RAD), "studio-postari", ".garda.zavor")
CREDIT = os.path.join(os.path.expanduser("~"), ".claude", "unelte", "credit", "claude_credit.py")
RUTINA = os.path.join(os.path.expanduser("~"), ".claude", "scheduled-tasks", "studio-publica", "SKILL.md")
ENV = dict(os.environ, PYTHONUTF8="1", PYTHONIOENCODING="utf-8")


def log(t):
    with open(JURNAL, "a", encoding="utf-8", newline="\n") as f:
        f.write(f"{datetime.datetime.now():%Y-%m-%d %H:%M} {t}\n")


def main():
    acum = datetime.datetime.now()
    if not (7 <= acum.hour < 22) and "--oricand" not in sys.argv:
        return
    r = subprocess.run([sys.executable, "-X", "utf8", os.path.join(AICI, "studio_postari.py"), "scadente"], cwd=RAD, env=ENV,
                       capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=300)
    try:
        s = json.loads(r.stdout)
    except ValueError:
        log("scadente n-a întors JSON: " + (r.stdout + r.stderr)[-300:])
        return
    if s.get("oprit") or (not s.get("de_publicat") and not s.get("de_confirmat")):
        return
    if os.path.exists(ZAVOR) and time.time() - os.path.getmtime(ZAVOR) < 3600:
        log("o sesiune de publicare lucrează deja (zăvor sub o oră)")
        return
    open(ZAVOR, "w").write(str(os.getpid()))
    try:
        log(f"de publicat {len(s.get('de_publicat') or [])}, de confirmat {len(s.get('de_confirmat') or [])} — pornesc sesiunea pe credit")
        prompt = ("Rulezi rutina studio-publica, nesupravegheat, pornită de garda Windows. Pasul 1 l-a făcut garda: există ceva de publicat sau de "
                  "confirmat. Citește regulile din " + RUTINA + " și urmează-le de la „Pasul 2”, în C:\\Users\\alind\\reverb\\reverb-site. "
                  "Rezultatul pasului 1 (scadente):\n" + json.dumps(s, ensure_ascii=False)[:6000])
        p = subprocess.run([sys.executable, "-X", "utf8", CREDIT, "--chrome", "-p", prompt, "--output-format", "json"], cwd=RAD, env=ENV,
                           capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=3000)
        try:
            j = json.loads(p.stdout[p.stdout.index("{"):])
            log(f"gata ({float(j.get('total_cost_usd') or 0):.2f} $ din credit): " + (j.get("result") or "")[:800].replace("\n", " "))
        except Exception:
            log("sesiunea n-a întors rezultat: " + (p.stdout or p.stderr or "")[-400:].replace("\n", " "))
    finally:
        try:
            os.remove(ZAVOR)
        except OSError:
            pass


if __name__ == "__main__":
    main()
