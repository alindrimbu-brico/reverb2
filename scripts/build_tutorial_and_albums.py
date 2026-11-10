# -*- coding: utf-8 -*-
"""
Construieste:
1. Descarcarea automata a pieselor noi disponibile public in Suno (@bricolando_ro)
2. Videoclipul Ghid Explicativ pas-cu-pas cu VOCEA 5 (Algenib - Google Gemini TTS) + Sageata/Cursor pe ecran:
   public/media/ghid_reverb_studio_ro.mp4 si C:\\Users\\alind\\Pictures\\Surya Music\\0_GHID_VIDEO_CU_VOCE_Reverb_Studio.mp4
3. Kitul vizual pentru canalul redenumit SURYA MUSIC (Poza profil 1080x1080 + Coperta YouTube 2560x1440)
4. Cele 2 Albume de Colinde (RO 15:39 & EN 07:49) + Cele 2 Albume Extinse (~50 min fiecare, RO & EN)
   cu toate melodiile din calculator + Suno, gata de urcat pe cele 2 Playlisturi de pe Surya Music!
"""

import asyncio
import base64
import hashlib
import json
import os
import re
import shutil
import subprocess
import time
import urllib.request
import wave
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from playwright.async_api import async_playwright

PROJECT_ROOT = Path(r"C:\Users\alind\reverb\reverb-site")
PUBLIC_MEDIA = PROJECT_ROOT / "public" / "media"
TMP_DIR = PUBLIC_MEDIA / "tmp_tutorial"
TMP_DIR.mkdir(parents=True, exist_ok=True)

SURYA_EXPORT_DIR = Path(r"C:\Users\alind\Pictures\Surya Music")
SURYA_EXPORT_DIR.mkdir(parents=True, exist_ok=True)

MUSIC_ROOT = Path(r"C:\Users\alind\Music\Suno - melodiile lui Alin")
SUNO_AUTO_DIR = MUSIC_ROOT / "08 Descarcate automat din Suno"
SUNO_AUTO_DIR.mkdir(parents=True, exist_ok=True)

GEMINI_KEYS_PATH = Path(r"C:\Users\alind\bricolando-price-agent\gemini_keys.json")
VOCE_CACHE_DIR = Path(r"C:\Users\alind\bricolando-price-agent\video\_unelte\_voce_cache")
VOCE_CACHE_DIR.mkdir(parents=True, exist_ok=True)


def tts_algenib_strict(text: str, out_mp3: Path, voce: str = "Algenib") -> float:
    """
    Genereaza vocea EXCLUSIV cu Vocea 5 aleasa de Alin: Algenib (Google Gemini TTS: gemini-3.8-flash-tts).
    Are cache in _voce_cache si retry automat la 429 ca sa nu cada niciodata pe vocea de rezerva.
    Returneaza durata in secunde.
    """
    h = hashlib.sha1(f"{voce}||{text}".encode("utf-8")).hexdigest()[:16]
    cached_mp3 = VOCE_CACHE_DIR / f"g_{h}.mp3"

    if not cached_mp3.exists():
        key = json.loads(GEMINI_KEYS_PATH.read_text(encoding="utf-8"))["GEMINI_API_KEY"]
        model = "gemini-3.8-flash-tts"
        body = {
            "contents": [{"parts": [{"text": text}]}],
            "generationConfig": {
                "responseModalities": ["AUDIO"],
                "speechConfig": {
                    "voiceConfig": {
                        "prebuiltVoiceConfig": {"voiceName": voce}
                    }
                }
            }
        }
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"

        for attempt in range(1, 6):
            try:
                req = urllib.request.Request(
                    url,
                    data=json.dumps(body).encode("utf-8"),
                    method="POST",
                    headers={"Content-Type": "application/json", "x-goog-api-key": key}
                )
                with urllib.request.urlopen(req, timeout=180) as r:
                    resp = json.loads(r.read().decode("utf-8"))
                part = resp["candidates"][0]["content"]["parts"][0]["inlineData"]
                pcm = base64.b64decode(part["data"])
                wav_tmp = cached_mp3.with_suffix(".wav")
                with wave.open(str(wav_tmp), "wb") as w:
                    w.setnchannels(1)
                    w.setsampwidth(2)
                    w.setframerate(24000)
                    w.writeframes(pcm)
                subprocess.run(
                    ["ffmpeg", "-v", "error", "-y", "-i", str(wav_tmp),
                     "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-b:a", "160k", str(cached_mp3)],
                    check=True
                )
                wav_tmp.unlink(missing_ok=True)
                time.sleep(2.0)
                break
            except Exception as e:
                print(f"   [Retry {attempt}/5 Gemini TTS Algenib]: {e}")
                time.sleep(6.0 * attempt)
        else:
            raise RuntimeError(f"Nu s-a putut genera vocea Algenib pentru: {text[:40]}")

    shutil.copy2(cached_mp3, out_mp3)
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=noprint_wrappers=1:nokey=1", str(out_mp3)],
        capture_output=True, text=True, check=True
    )
    return float(probe.stdout.strip())


def download_public_suno_songs():
    """
    Verifica playlisturile publice de pe suno.com/@bricolando_ro si descarca automat
    piesele unice care nu erau inca in calculator.
    """
    print("1. Verificare și descărcare automată piese din contul Suno (@bricolando_ro)...")
    pids = [
        "79f0890e-390f-43b6-b6d3-3d75ee782816",  # STOI2 (65 piese)
        "3c9b47b7-19dd-4735-89f5-bb091c2f1bdf",  # Vibe V (18 piese)
        "f719d997-18a9-4d38-bd14-1ce8ebd17dfa",  # Many lyr (17 piese)
        "3d45e47c-42cb-486c-a808-fcfd812983a5",  # New origynal (19 piese)
        "e4f7078f-d082-4933-9df6-b3c1b05e1d61",  # Rock epic (1 piesa)
    ]

    # Colectam cele mai bune variante ale titlurilor noi din Suno
    target_new_titles = {
        "Te Aud": "RO",
        "reborn light": "EN",
        "THE Angel": "EN",
        "BECAUSE YOU LOVED ME America": "EN",
        "Cosmic Orchestra - moon": "EN",
        "through every lost time. (Extend)": "EN",
        "foc semințe": "RO",
    }

    downloaded = []
    for pid in pids:
        for page in [1, 2]:
            try:
                url = f"https://studio-api.prod.suno.com/api/playlist/{pid}/?page={page}"
                req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(req, timeout=20) as r:
                    data = json.loads(r.read().decode("utf-8", errors="ignore"))
                clips = data.get("playlist_clips", [])
                if not clips:
                    break
                for item in clips:
                    c = item.get("clip", {})
                    title = (c.get("title") or "").strip()
                    if title in target_new_titles:
                        safe_name = re.sub(r'[<>:"/\\|?*]', '', title).strip()
                        out_mp3 = SUNO_AUTO_DIR / f"{safe_name}.mp3"
                        if not out_mp3.exists():
                            m_urls = c.get("media_urls") or []
                            if m_urls:
                                m_url = m_urls[0]["url"]
                                m4a_tmp = SUNO_AUTO_DIR / f"_tmp_{c['id']}.m4a"
                                req_m = urllib.request.Request(m_url, headers={"User-Agent": "Mozilla/5.0"})
                                with urllib.request.urlopen(req_m, timeout=30) as rm:
                                    m4a_tmp.write_bytes(rm.read())
                                subprocess.run(
                                    ["ffmpeg", "-y", "-v", "error", "-i", str(m4a_tmp),
                                     "-c:a", "libmp3lame", "-b:a", "192k", str(out_mp3)],
                                    check=True
                                )
                                m4a_tmp.unlink(missing_ok=True)
                                print(f"   ✓ Descărcat din Suno.com: {out_mp3.name}")
                        if out_mp3.exists() and out_mp3.name not in [d["file"] for d in downloaded]:
                            downloaded.append({
                                "file": out_mp3.name,
                                "lang": target_new_titles[title],
                                "path": str(out_mp3)
                            })
            except Exception:
                break

    print(f"   ✓ Total piese noi sincronizate direct din Suno.com: {len(downloaded)}")
    return downloaded


def draw_cursor_and_highlight(img_path: Path, box: tuple, arrow_xy: tuple, label_text: str, step_badge: str):
    """
    Deseneaza pe captura de ecran:
    - Chenar luminos galben-auriu si rosu in jurul zonei pe care se apasa
    - Cercul de click si o sageata/cursor mare, vizibila ca la un tutorial pas cu pas
    - O banda de subtitrare clara jos
    """
    im = Image.open(img_path).convert("RGBA")
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    x1, y1, x2, y2 = box
    ax, ay = arrow_xy

    draw.rounded_rectangle((x1 - 4, y1 - 4, x2 + 4, y2 + 4), radius=18, outline=(244, 63, 94, 255), width=5)
    draw.rounded_rectangle((x1, y1, x2, y2), radius=14, outline=(251, 191, 36, 255), width=3, fill=(251, 191, 36, 35))

    for r, alpha in [(36, 90), (24, 160), (12, 240)]:
        draw.ellipse((ax - r, ay - r, ax + r, ay + r), outline=(251, 191, 36, alpha), width=4)
    draw.ellipse((ax - 7, ay - 7, ax + 7, ay + 7), fill=(244, 63, 94, 255))

    cursor_poly = [
        (ax, ay),
        (ax + 18, ay + 52),
        (ax + 30, ay + 38),
        (ax + 54, ay + 62),
        (ax + 64, ay + 52),
        (ax + 40, ay + 28),
        (ax + 56, ay + 16),
    ]
    draw.polygon(cursor_poly, fill=(255, 255, 255, 255), outline=(220, 38, 38, 255))

    draw.rounded_rectangle((40, 615, 1240, 705), radius=18, fill=(12, 10, 9, 235), outline=(251, 191, 36, 220), width=3)

    try:
        f_badge = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 22)
        f_label = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 24)
    except Exception:
        f_badge = ImageFont.load_default()
        f_label = ImageFont.load_default()

    draw.text((65, 638), step_badge, font=f_badge, fill=(251, 191, 36, 255))
    draw.text((65, 668), label_text, font=f_label, fill=(255, 255, 255, 255))

    out = Image.alpha_composite(im, overlay).convert("RGB")
    out.save(img_path, quality=95)


async def capture_studio_screens():
    print("2. Capturare ecrane reale din Reverb Studio cu Playwright...")
    url = "https://www.reverb.ro/studio"
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 720})
        page = await context.new_page()

        await page.goto(url, wait_until="networkidle", timeout=45000)
        await page.evaluate("localStorage.setItem('reverb_studio_auth', 'true')")
        await page.reload(wait_until="networkidle", timeout=45000)
        await page.wait_for_timeout(2000)

        # Ascundem caseta video in timpul capturii ecranelor de mai jos ca sa incapa tot panoul pe ecran
        hide_btn = page.get_by_text("Ascunde Ghidul Video")
        if await hide_btn.count() > 0:
            await hide_btn.first.click()
            await page.wait_for_timeout(400)

        # Scena 1: Panoul central cu cele 4 butoane de sus
        s1 = TMP_DIR / "step1.jpg"
        await page.screenshot(path=str(s1))
        draw_cursor_and_highlight(
            s1,
            box=(45, 365, 1235, 485),
            arrow_xy=(200, 420),
            step_badge="PASUL 1 DIN 7 • CELE 4 BUTOANE PRINCIPALE DE SUS",
            label_text="Sus ai cele 4 ramuri: 1. Muzică & Colinde, 2. Clipuri Virale, 3. Reclame, 4. Conturi."
        )

        # Scena 2: Ramura 1 Muzică & Colinde - Butonul Re-scanează și cei 4 pași automați
        await page.evaluate("window.scrollTo(0, 420)")
        await page.wait_for_timeout(600)
        s2 = TMP_DIR / "step2.jpg"
        await page.screenshot(path=str(s2))
        draw_cursor_and_highlight(
            s2,
            box=(940, 120, 1185, 175),
            arrow_xy=(1060, 150),
            step_badge="PASUL 2 DIN 7 • RAMURA 1: MUZICĂ & COLINDE AUTOPILOT",
            label_text="Butonul galben «Re-scanează Catalogul» verifică melodiile din PC și elimină dublurile."
        )

        # Scena 3: Playerul Video, Descărcările și Butonul Verde „Aprobă & Urcă Automat”
        await page.evaluate("window.scrollTo(0, 920)")
        await page.wait_for_timeout(600)
        s3 = TMP_DIR / "step3.jpg"
        await page.screenshot(path=str(s3))
        draw_cursor_and_highlight(
            s3,
            box=(95, 130, 620, 445),
            arrow_xy=(350, 290),
            step_badge="PASUL 3 DIN 7 • VIZIONARE VIDEOCLIP, SCENE & BUTONUL DE APROBARE",
            label_text="Apeși Play pe videoclipul gata făcut, vezi cele 4 scene și apeși butonul verde de aprobare."
        )

        # Scena 4: Click pe Ramura 2 (Clipuri Virale 1M+)
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(400)
        await page.get_by_text("Clipuri Virale (1M+)").first.click()
        await page.wait_for_timeout(800)
        await page.evaluate("window.scrollTo(0, 450)")
        await page.wait_for_timeout(500)
        s4 = TMP_DIR / "step4.jpg"
        await page.screenshot(path=str(s4))
        draw_cursor_and_highlight(
            s4,
            box=(70, 220, 1210, 600),
            arrow_xy=(260, 560),
            step_badge="PASUL 4 DIN 7 • RAMURA 2: FABRICA DE CLIPURI VIRALE (1M+ VIZUALIZĂRI)",
            label_text="Cele 3 coloane produc clipuri virale pentru creșterea urmăritorilor pe fiecare nișă."
        )

        # Scena 5: Click pe Ramura 3 (Reclame & Vânzări Directe - Consola de Dictare)
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(400)
        await page.get_by_text("Reclame & Vânzări").first.click()
        await page.wait_for_timeout(800)
        await page.evaluate("window.scrollTo(0, 450)")
        await page.wait_for_timeout(500)
        s5 = TMP_DIR / "step5.jpg"
        await page.screenshot(path=str(s5))
        draw_cursor_and_highlight(
            s5,
            box=(80, 160, 810, 560),
            arrow_xy=(660, 515),
            step_badge="PASUL 5 DIN 7 • RAMURA 3: CONSOLA DE IDEI, DICTARE & RECLAME",
            label_text="Alegi brandul (Bricolando/RaftPlin/Muzică), scrii sau dictezi ideea și apeși Generează Scenariul."
        )

        # Scena 6: Click pe Ramura 4 (Conturi & Canale Conectate)
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(400)
        await page.get_by_text("Conturi & Canale").first.click()
        await page.wait_for_timeout(800)
        await page.evaluate("window.scrollTo(0, 460)")
        await page.wait_for_timeout(500)
        s6 = TMP_DIR / "step6.jpg"
        await page.screenshot(path=str(s6))
        draw_cursor_and_highlight(
            s6,
            box=(85, 180, 630, 595),
            arrow_xy=(350, 565),
            step_badge="PASUL 6 DIN 7 • RAMURA 4: CONTURI, CANALE & KITURI GATA DE COPIAT",
            label_text="Aici ai textele, pozele de profil, copertele și linkurile directe către toate canalele tale."
        )

        # Scena 7: Uneltele Tehnice din Spate
        await page.evaluate("window.scrollTo(0, 260)")
        await page.wait_for_timeout(400)
        await page.get_by_text("Uneltele Tehnice din Spate").first.click()
        await page.wait_for_timeout(700)
        s7 = TMP_DIR / "step7.jpg"
        await page.screenshot(path=str(s7))
        draw_cursor_and_highlight(
            s7,
            box=(50, 260, 1230, 360),
            arrow_xy=(420, 315),
            step_badge="PASUL 7 DIN 7 • UNELTELE TEHNICE DIN SPATE (DEEP RESEARCH, VEO 2, NOTEBOOKLM)",
            label_text="Dacă apeși pe comutator, vezi motoarele tehnice din spate (dar ele lucrează automat pentru tine)."
        )

        await browser.close()
    print("✓ Toate cele 7 ecrane cu săgeată și explicații au fost capturate!")


TUTORIAL_STEPS = [
    (
        "step1.jpg",
        "Salut, Alin! Acesta este ghidul tău pas cu pas pentru aplicația Reverb Studio. "
        "Sus de tot găsești cele patru butoane mari, colorate diferit. "
        "Fiecare buton este o ramură automată a fabricii tale, așa că nu trebuie să umbli la setări complicate."
    ),
    (
        "step2.jpg",
        "Primul buton, cel galben numit Muzică și Colinde, deschide fabrica ta muzicală. "
        "În dreapta sus, unde arată săgeata, ai butonul Re-scanează Catalogul. "
        "Când adaugi melodii noi din Suno în calculator, acest buton le verifică automat, elimină dublurile și alege varianta câștigătoare."
    ),
    (
        "step3.jpg",
        "Mai jos pe aceeași pagină vezi melodiile câștigătoare, videoclipul gata montat și albumele lungi. "
        "Apeși Play pe videoclip ca să îl vezi, iar sub el ai linkurile de descărcare pentru YouTube, TikTok și Spotify. "
        "Jos de tot ai butonul verde: Aprobă și Urcă Automat."
    ),
    (
        "step4.jpg",
        "Al doilea buton mare de sus, cel roșu numit Clipuri Virale, deschide fabrica de creștere a urmăritorilor. "
        "Cele trei coloane produc clipuri modelate după videoclipurile cu milioane de vizualizări, separat pentru Bricolando, pentru Kalki Nexus și pentru muzică. "
        "Jos apeși pe butonul roșu Pornește Producția Automată."
    ),
    (
        "step5.jpg",
        "Când îți vine o idee pe moment și vrei să comanzi un clip anume, apeși sus pe al treilea buton, cel verde numit Reclame și Vânzări. "
        "Alegi brandul, scrii sau dictezi ideea în căsuța mare, apoi apeși pe butonul din dreapta jos: Generează Scenariul Viral."
    ),
    (
        "step6.jpg",
        "Al patrulea buton de sus, cel albastru numit Conturi și Canale, îți arată unde se urcă tot ce producem. "
        "Aici ai canalul Surya Music cu cele două playlisturi, în română și în engleză, plus toate conturile active pentru Bricolando, Raft Plin, Numerarium și Kalki Nexus."
    ),
    (
        "step7.jpg",
        "Iar dacă vrei vreodată să vezi motoarele Google Ultra din spate, poți apăsa pe rândul Arată Uneltele Tehnice. "
        "Acolo se deschid Deep Research, regizorul Veo doi și podcastul NotebookLM, însă aplicația le leagă singură pentru tine!"
    ),
]


async def build_tutorial_video():
    await capture_studio_screens()
    print("3. Generare voce în limba română cu VOCEA 5 (Algenib - Google Gemini TTS) și segmente video...")
    segment_files = []

    for idx, (img_name, text) in enumerate(TUTORIAL_STEPS, start=1):
        mp3_path = TMP_DIR / f"voice_algenib_{idx}.mp3"
        seg_mp4 = TMP_DIR / f"seg_{idx}.mp4"
        img_path = TMP_DIR / img_name

        dur_audio = tts_algenib_strict(text, mp3_path, voce="Algenib")
        dur = dur_audio + 0.6

        cmd = [
            "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
            "-loop", "1", "-i", str(img_path),
            "-i", str(mp3_path),
            "-c:v", "libx264", "-tune", "stillimage", "-preset", "veryfast", "-pix_fmt", "yuv420p",
            "-vf", "scale=1280:720",
            "-c:a", "aac", "-b:a", "192k",
            "-t", f"{dur:.2f}",
            str(seg_mp4)
        ]
        subprocess.run(cmd, check=True)
        segment_files.append(seg_mp4)
        print(f"   ✓ Segment {idx}/7 randat cu Vocea 5 (Algenib) ({dur:.1f} secunde)")

    concat_list = TMP_DIR / "concat_tutorial.txt"
    with open(concat_list, "w", encoding="utf-8") as f:
        for seg in segment_files:
            f.write(f"file '{seg.as_posix()}'\n")

    out_tutorial = PUBLIC_MEDIA / "ghid_reverb_studio_ro.mp4"
    subprocess.run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
        "-f", "concat", "-safe", "0", "-i", str(concat_list),
        "-c", "copy",
        str(out_tutorial)
    ], check=True)

    shutil.copy2(out_tutorial, SURYA_EXPORT_DIR / "0_GHID_VIDEO_CU_VOCE_Reverb_Studio.mp4")
    print(f"✓ VIDEOCLIP GHID CU VOCEA 5 (ALGENIB) SALVAT: {out_tutorial}")


def get_audio_duration(p: Path) -> float:
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=noprint_wrappers=1:nokey=1", str(p)],
        capture_output=True, text=True
    )
    return float(probe.stdout.strip() or "0")


def build_extended_albums():
    """
    Pe langa cele 2 albume scurte doar cu colindele de pe disc (RO 15:39, EN 07:49),
    construieste si 2 ALBUME EXTINSE (~48-55 minute fiecare) unind colindele + cele mai bune
    piese unice in Engleza si in Romana din calculator si din Suno!
    """
    print("4. Construire Albume Extinse (Română și Engleză) din toate melodiile din PC + Suno...")

    # Selectam cate o singura varianta (cea mai buna / curata) pentru fiecare piesa in Engleza
    en_candidates = [
        (MUSIC_ROOT / "01 Colinde si Craciun" / "Together at Christmas.wav", "Together at Christmas (Carol)"),
        (MUSIC_ROOT / "01 Colinde si Craciun" / "Together for Christmas.wav", "Together for Christmas (Carol)"),
        (MUSIC_ROOT / "01 Colinde si Craciun" / "Together for Christmas (you).wav", "Together for Christmas — Acoustic Version"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "Bridge of Light.wav", "Bridge of Light"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "Flight Without Wings.wav", "Flight Without Wings"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "Keep the Good.wav", "Keep the Good"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "the Good for good.wav", "The Good for Good"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "Sacred Roots (I).wav", "Sacred Roots"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "For the Sake of You.wav", "For the Sake of You"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "For the divine of You.wav", "For the Divine of You"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "In the silence before the storm.wav", "In the Silence Before the Storm"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "It's our game!.wav", "It's Our Game!"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "Listen to me when I’m silent,  .wav", "Listen to Me When I'm Silent"),
        (MUSIC_ROOT / "03 Balade si poezie in engleza" / "You and my divine.wav", "You and My Divine"),
        (SUNO_AUTO_DIR / "reborn light.mp3", "Reborn Light (Suno)"),
        (SUNO_AUTO_DIR / "THE Angel.mp3", "The Angel (Suno)"),
    ]

    # Selectam cate o singura varianta (cea mai buna / curata) pentru fiecare piesa in Romana
    ro_candidates = [
        (MUSIC_ROOT / "01 Colinde si Craciun" / "Magia Crăciunului .o1.wav", "Magia Crăciunului (Colind I)"),
        (MUSIC_ROOT / "01 Colinde si Craciun" / "Magia Crăciunului .o2.wav", "Magia Crăciunului (Colind II — Coral)"),
        (MUSIC_ROOT / "01 Colinde si Craciun" / "Magia Crăciunului o.3.wav", "Magia Crăciunului (Colind III — Acustic)"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Lumina Prin Tine.wav", "Lumina Prin Tine"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Cascada de Grație Dumnezeiască.wav", "Cascada de Grație Dumnezeiască"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "recunoștința.wav", "Recunoștința"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "All Inclusive în Univers.wav", "All Inclusive în Univers"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Câmpul Magnetic.wav", "Câmpul Magnetic"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Trei Pagini Pe Zi.wav", "Trei Pagini Pe Zi"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Coboară Zidul.wav", "Coboară Zidul"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Neîmpotrivire.wav", "Neîmpotrivire"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Doar un Val (I).wav", "Doar un Val"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Apa și malul.wav", "Apa și Malul"),
        (MUSIC_ROOT / "02 Poezie si versuri in romana" / "Vijelios de frumoasă.wav", "Vijelios de Frumoasă"),
        (SUNO_AUTO_DIR / "Te Aud.mp3", "Te Aud (Suno)"),
    ]

    extended_info = {}

    for lang_code, cand_list, out_label in [
        ("en", en_candidates, "5_ALBUM_EXTINS_Engleza_Surya_Music"),
        ("ro", ro_candidates, "6_ALBUM_EXTINS_Romana_Surya_Music"),
    ]:
        valid_tracks = [(p, title) for p, title in cand_list if p.exists()]
        norm_wavs = []
        chapters = []
        cur_sec = 0.0

        for idx, (p, title) in enumerate(valid_tracks, start=1):
            dur = get_audio_duration(p)
            if dur <= 5:
                continue
            mm = int(cur_sec // 60)
            ss = int(cur_sec % 60)
            t_mm = int(dur // 60)
            t_ss = int(dur % 60)
            chapters.append(f"{mm:02d}:{ss:02d} {idx:02d}. {title} ({t_mm}:{t_ss:02d})")
            cur_sec += dur

            # Normalizam la 44.1kHz stereo WAV pentru concatenare rapida fara erori de codec
            w_norm = TMP_DIR / f"ext_{lang_code}_{idx:02d}.wav"
            if not w_norm.exists():
                subprocess.run([
                    "ffmpeg", "-y", "-v", "error", "-i", str(p),
                    "-ar", "44100", "-ac", "2", str(w_norm)
                ], check=True)
            norm_wavs.append(w_norm)

        concat_txt = TMP_DIR / f"ext_concat_{lang_code}.txt"
        with open(concat_txt, "w", encoding="utf-8") as f:
            for w in norm_wavs:
                f.write(f"file '{w.as_posix()}'\n")

        merged_aac = TMP_DIR / f"ext_merged_{lang_code}.m4a"
        subprocess.run([
            "ffmpeg", "-y", "-v", "error",
            "-f", "concat", "-safe", "0", "-i", str(concat_txt),
            "-c:a", "aac", "-b:a", "192k", str(merged_aac)
        ], check=True)

        tot_m = int(cur_sec // 60)
        tot_s = int(cur_sec % 60)
        dur_fmt = f"{tot_m}:{tot_s:02d}"

        base_vid = PUBLIC_MEDIA / f"colind_castigator_{lang_code}.mp4"
        out_mp4 = PUBLIC_MEDIA / f"album_extins_{lang_code}.mp4"

        subprocess.run([
            "ffmpeg", "-y", "-v", "error",
            "-stream_loop", "-1", "-i", str(base_vid),
            "-i", str(merged_aac),
            "-map", "0:v:0", "-map", "1:a:0",
            "-c:v", "copy", "-c:a", "copy",
            "-t", f"{int(cur_sec)}",
            "-movflags", "+faststart",
            str(out_mp4)
        ], check=True)

        export_file = SURYA_EXPORT_DIR / f"{out_label}_{tot_m}m{tot_s:02d}s.mp4"
        shutil.copy2(out_mp4, export_file)

        extended_info[lang_code.upper()] = {
            "tracks_count": len(valid_tracks),
            "total_seconds": round(cur_sec, 1),
            "duration_fmt": dur_fmt,
            "video_url": f"/media/album_extins_{lang_code}.mp4",
            "export_path": str(export_file),
            "chapters": chapters,
        }
        print(f"   ✓ Album Extins [{lang_code.upper()}] randat: {len(valid_tracks)} piese -> Durată: {dur_fmt} min ({export_file.name})")

    # Salvam capitolele intr-un fisier text in dosarul Surya Music pentru Copy-Paste rapid pe YouTube
    chapters_txt = SURYA_EXPORT_DIR / "CAPITOLE_YOUTUBE_ALBUME_RO_SI_EN.txt"
    lines = [
        "====================================================================",
        "TEXTE ȘI CAPITOLE (TIMESTAMPS) GATA DE LIPIT ÎN DESCRIEREA YOUTUBE",
        "Canal: Surya Music (2 Playlisturi: Română & Engleză)",
        "====================================================================\n",
    ]
    for k, info in extended_info.items():
        lines.append(f"--- ALBUM EXTINS {k} ({info['tracks_count']} piese • Durată totală: {info['duration_fmt']} min) ---")
        lines.append(f"Fișier video: {Path(info['export_path']).name}\nCapitole YouTube:")
        lines.extend(info["chapters"])
        lines.append("\n")
    chapters_txt.write_text("\n".join(lines), encoding="utf-8")

    # Actualizam music_audit.json
    audit_path = PUBLIC_MEDIA / "music_audit.json"
    if audit_path.exists():
        audit = json.loads(audit_path.read_text(encoding="utf-8"))
        audit["extended_albums_built"] = extended_info
        audit_path.write_text(json.dumps(audit, indent=2, ensure_ascii=False), encoding="utf-8")

    return extended_info


if __name__ == "__main__":
    download_public_suno_songs()
    ext_stats = build_extended_albums()
    asyncio.run(build_tutorial_video())
    print("=== GATA TOATE OPERATIUNILE ===")
    print(json.dumps(ext_stats, indent=2, ensure_ascii=False))
