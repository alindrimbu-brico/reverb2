# -*- coding: utf-8 -*-
"""
Descarca automat piese si playlisturi de pe Suno.com (https://cdn1.suno.ai/<id>.mp4 -> WAV/MP3)
fara sa fie nevoie de click manual pe fiecare melodie!
Poate primi ca argument si orice link de playlist din Suno (ex: https://suno.com/playlist/...).
"""
import json
import re
import subprocess
import sys
import urllib.request
from pathlib import Path

OUT_DIR = Path(r"C:\Users\alind\Music\Suno - melodiile lui Alin\08 Descarcate automat din Suno")
OUT_DIR.mkdir(parents=True, exist_ok=True)

DEFAULT_PLAYLISTS = [
    "79f0890e-390f-43b6-b6d3-3d75ee782816",  # STOI2 (65 piese)
    "3c9b47b7-19dd-4735-89f5-bb091c2f1bdf",  # Vibe V (18 piese)
    "f719d997-18a9-4d38-bd14-1ce8ebd17dfa",  # Many lyr (17 piese)
    "3d45e47c-42cb-486c-a808-fcfd812983a5",  # New origynal (19 piese)
    "e4f7078f-d082-4933-9df6-b3c1b05e1d61",  # Rock epic (1 piesa)
]


def download_clip(cid: str, title: str, out_folder: Path) -> bool:
    safe_title = re.sub(r'[<>:"/\\|?*]', "", title).strip() or f"Suno_{cid[:8]}"
    out_wav = out_folder / f"{safe_title} [{cid[:6]}].wav"
    if out_wav.exists() and out_wav.stat().st_size > 100_000:
        return True

    mp4_url = f"https://cdn1.suno.ai/{cid}.mp4"
    tmp_mp4 = out_folder / f"_tmp_{cid}.mp4"
    try:
        req = urllib.request.Request(mp4_url, headers={"User-Agent": "Mozilla/5.0", "Referer": "https://suno.com/"})
        with urllib.request.urlopen(req, timeout=30) as r:
            tmp_mp4.write_bytes(r.read())
        subprocess.run(
            ["ffmpeg", "-y", "-v", "error", "-i", str(tmp_mp4), "-ar", "48000", "-ac", "2", str(out_wav)],
            check=True
        )
        tmp_mp4.unlink(missing_ok=True)
        print(f" ✓ Descărcat din Suno: {out_wav.name}")
        return True
    except Exception as e:
        tmp_mp4.unlink(missing_ok=True)
        return False


def main():
    pids = sys.argv[1:] if len(sys.argv) > 1 else DEFAULT_PLAYLISTS
    clean_pids = []
    for p in pids:
        m = re.search(r"([a-f0-9-]{36})", p)
        if m:
            clean_pids.append(m.group(1))

    # Piese de pe profilul public @bricolando_ro (inclusiv Te Aud & Geamul Sters)
    profile_clips = [
        ("857c06ac-1b37-4b08-bcbb-73718a2d57d1", "Te Aud (RO)"),
        ("09a79a9e-ec61-4f96-96ef-e4581decfd86", "Reborn Light (EN)"),
        ("2afc3666-8a1f-4ebb-a66d-c519393a13da", "Because You Loved Me America (EN)"),
        ("df2a0b51-e4fe-43cb-8194-d6310c995c18", "Through the Sands of Time (EN)"),
        ("556f7eff-f0e0-47e6-96a0-2170290463cb", "What If You Forget Me - Extend (EN)"),
        ("32aa0d4a-6323-40e7-a834-3eb493415e47", "For the Sake of You - Extended (EN)"),
        ("aefe9284-1c6c-4bcb-9eb5-342e5c92800b", "Rock Epic Ominous Strings (EN)"),
    ]

    ok_count = 0
    for cid, title in profile_clips:
        if download_clip(cid, title, OUT_DIR):
            ok_count += 1

    # Daca utilizatorul paseaza un playlist nou (ex. playlistul de Colinde din Suno), descarcam TOT playlistul
    if len(sys.argv) > 1:
        for pid in clean_pids:
            for page in range(1, 6):
                try:
                    url = f"https://studio-api.prod.suno.com/api/playlist/{pid}/?page={page}"
                    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
                    with urllib.request.urlopen(req, timeout=20) as r:
                        data = json.loads(r.read().decode("utf-8", errors="ignore"))
                    pname = re.sub(r'[<>:"/\\|?*]', "", data.get("name") or pid).strip()
                    p_folder = OUT_DIR / pname
                    p_folder.mkdir(parents=True, exist_ok=True)
                    clips = data.get("playlist_clips", [])
                    if not clips:
                        break
                    for item in clips:
                        c = item.get("clip", {})
                        if c.get("id"):
                            if download_clip(c["id"], c.get("title") or "Melodie Suno", p_folder):
                                ok_count += 1
                except Exception:
                    break

    print(f"Total fișiere sincronizate din Suno în '{OUT_DIR}': {ok_count}")


if __name__ == "__main__":
    main()
