# -*- coding: utf-8 -*-
"""
Construieste:
1. Videoclipul Ghid Explicativ pas-cu-pas (cu Voce in Romana + Sageata/Cursor pe ecran + Chenare luminoase)
   pentru aplicatia Reverb Studio: public/media/ghid_reverb_studio_ro.mp4
2. Kitul vizual pentru canalul redenumit SURYA MUSIC (Poza profil 1080x1080 + Coperta YouTube 2560x1440)
3. Cele 2 Albume / Colaje de Colinde (Romana si Engleza) din colindele existente pe disc,
   ca sa vedem exact durata fiecarui album.
"""

import asyncio
import json
import subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import edge_tts
from playwright.async_api import async_playwright

PROJECT_ROOT = Path(r"C:\Users\alind\reverb\reverb-site")
PUBLIC_MEDIA = PROJECT_ROOT / "public" / "media"
TMP_DIR = PUBLIC_MEDIA / "tmp_tutorial"
TMP_DIR.mkdir(parents=True, exist_ok=True)

SUNO_DIR = Path(r"C:\Users\alind\Music\Suno - melodiile lui Alin\01 Colinde si Craciun")


def draw_cursor_and_highlight(img_path: Path, box: tuple, arrow_xy: tuple, label_text: str, step_badge: str):
    """
    Deseneaza pe captura de ecran:
    - Chenar luminos galben-auriu si rosu in jurul zonei pe care se apasa (box = x1, y1, x2, y2)
    - Cercul de click si o sageata/cursor mare, vizibila ca la un tutorial pentru incepatori
    - O eticheta explicativa mare si clara langa sageata + banda de titlu sus
    """
    im = Image.open(img_path).convert("RGBA")
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    x1, y1, x2, y2 = box
    ax, ay = arrow_xy

    # 1. Evidentiere zona (chenar dublu luminos + umbra)
    draw.rounded_rectangle((x1 - 4, y1 - 4, x2 + 4, y2 + 4), radius=18, outline=(244, 63, 94, 255), width=5)
    draw.rounded_rectangle((x1, y1, x2, y2), radius=14, outline=(251, 191, 36, 255), width=3, fill=(251, 191, 36, 35))

    # 2. Cercul de click pe locul unde apasa mouse-ul
    for r, alpha in [(36, 90), (24, 160), (12, 240)]:
        draw.ellipse((ax - r, ay - r, ax + r, ay + r), outline=(251, 191, 36, alpha), width=4)
    draw.ellipse((ax - 7, ay - 7, ax + 7, ay + 7), fill=(244, 63, 94, 255))

    # 3. Sageata mare de cursor (alba cu contur rosu/negru, orientata spre ax, ay)
    # Varful sagetii este in (ax, ay)
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

    # 4. Banda explicativa jos cu pasul curent (ca subtitrare mare, lizibila pe tableta/telefon)
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
    print("1. Capturare ecrane reale din Reverb Studio cu Playwright...")
    url = "https://www.reverb.ro/studio"
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 720})
        page = await context.new_page()

        await page.goto(url, wait_until="networkidle", timeout=45000)
        await page.evaluate("localStorage.setItem('reverb_studio_auth', 'true')")
        await page.reload(wait_until="networkidle", timeout=45000)
        await page.wait_for_timeout(2000)

        # Scena 1: Panoul central cu cele 4 butoane de sus
        s1 = TMP_DIR / "step1.jpg"
        await page.screenshot(path=str(s1))
        draw_cursor_and_highlight(
            s1,
            box=(45, 285, 1235, 395),
            arrow_xy=(200, 340),
            step_badge="PASUL 1 DIN 7 • CELE 4 BUTOANE PRINCIPALE DE SUS",
            label_text="Sus ai cele 4 ramuri: 1. Muzică & Colinde, 2. Clipuri Virale, 3. Reclame, 4. Conturi."
        )

        # Scena 2: Ramura 1 Muzică & Colinde - Butonul Re-scanează și cei 4 pași automați
        await page.evaluate("window.scrollTo(0, 320)")
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
        await page.evaluate("window.scrollTo(0, 820)")
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
        buttons = page.locator("button")
        await page.get_by_text("Clipuri Virale (1M+)").first.click()
        await page.wait_for_timeout(800)
        await page.evaluate("window.scrollTo(0, 350)")
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
        await page.evaluate("window.scrollTo(0, 360)")
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
        await page.evaluate("window.scrollTo(0, 380)")
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
        await page.evaluate("window.scrollTo(0, 180)")
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
        "Salut, Alin! Acesta este ghidul tău video pas cu pas pentru aplicația Reverb Studio. "
        "Când deschizi aplicația pe tabletă, pe telefon sau pe laptop, sus de tot găsești aceste patru butoane mari, colorate diferit. "
        "Nu trebuie să umbli la setări complicate: fiecare dintre cele patru butoane este o ramură automată a fabricii tale."
    ),
    (
        "step2.jpg",
        "Când apeși pe primul buton, cel galben numit Muzică și Colinde, intri în fabrica ta muzicală. "
        "Aici, unde arată săgeata în dreapta sus, ai butonul Re-scanează Catalogul. "
        "De fiecare dată când pui melodii noi din Suno în calculator, acest buton le verifică automat, șterge dublurile și alege varianta fără greșeli."
    ),
    (
        "step3.jpg",
        "Dacă dai puțin mai jos pe aceeași pagină, vezi melodiile câștigătoare și videoclipul deja creat. "
        "Apeși pe săgeata Play din mijlocul videoclipului ca să îl vezi și să îl asculți. "
        "Chiar sub videoclip ai trei linkuri colorate: primul descarcă videoclipul lung pentru YouTube, al doilea descarcă formatul vertical pentru TikTok și Shorts, iar al treilea descarcă coperta pătrată pentru Spotify. "
        "Dedesubt vezi cele patru poze din scenariu, iar jos ai butonul verde: Aprobă și Urcă Automat."
    ),
    (
        "step4.jpg",
        "Dacă apeși sus pe al doilea buton mare, cel roșu numit Clipuri Virale, intri în fabrica de creștere a urmăritorilor. "
        "Aici ai trei coloane separate: prima face clipuri spectaculoase cu teste de unelte pentru Bricolando și Raft Plin, a doua face pilde și aforisme pentru cărțile tale de pe Kalki Nexus, iar a treia face clipuri emoționante de sărbători pe muzica ta. "
        "Jos, pe fiecare coloană, apeși pe butonul roșu Pornește Producția Automată."
    ),
    (
        "step5.jpg",
        "Când îți vine o idee nouă pe moment și vrei să comanzi un clip anume, apeși sus pe al treilea buton, cel verde numit Reclame și Vânzări. "
        "Aici alegi întâi brandul pe care îl promovezi, apoi în căsuța mare neagră scrii sau dictezi cu vocea ce vrei să arate clipul. "
        "La final, apeși pe butonul alb din dreapta jos, unde arată săgeata: Generează Scenariul Viral."
    ),
    (
        "step6.jpg",
        "Al patrulea buton de sus, cel albastru numit Conturi și Canale, îți arată exact unde se urcă tot ce producem. "
        "Aici ai canalul tău muzical Surya Music cu cele două playlisturi, în română și în engleză, plus toate canalele active pentru Bricolando, Raft Plin, Numerarium și Kalki Nexus, cu texte și poze gata pregătite."
    ),
    (
        "step7.jpg",
        "În sfârșit, dacă vrei vreodată să vezi uneltele Google Ultra care lucrează în spate, poți apăsa pe rândul discret Arată Uneltele Tehnice. "
        "Acolo se deschid Google Deep Research, regizorul Veo 2 și podcastul NotebookLM. "
        "Dar ține minte: nu trebuie să le operezi tu manual, pentru că aplicația le leagă singură pentru tine!"
    ),
]


async def build_tutorial_video():
    await capture_studio_screens()
    print("2. Generare voce în limba română (ro-RO-EmilNeural) și segmente video...")
    segment_files = []

    for idx, (img_name, text) in enumerate(TUTORIAL_STEPS, start=1):
        mp3_path = TMP_DIR / f"voice_{idx}.mp3"
        seg_mp4 = TMP_DIR / f"seg_{idx}.mp4"
        img_path = TMP_DIR / img_name

        communicate = edge_tts.Communicate(text, voice="ro-RO-EmilNeural", rate="-4%")
        await communicate.save(str(mp3_path))

        # Aflam durata exacta a vocii
        probe = subprocess.run(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(mp3_path)],
            capture_output=True, text=True
        )
        dur = float(probe.stdout.strip() or "12.0") + 0.6

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
        print(f"   ✓ Segment {idx}/7 randat ({dur:.1f} secunde)")

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
    print(f"✓ VIDEOCLIP GHID COMPLET SALVAT: {out_tutorial}")


def generate_surya_music_kit():
    print("3. Generare Kit Vizual pentru canalul redenumit SURYA MUSIC...")
    surya_dir = Path(r"C:\Users\alind\Pictures\Surya Music")
    surya_dir.mkdir(parents=True, exist_ok=True)

    # 1. Poza de Profil 1080x1080 (Surya Music - Negru Obsidian + Soare/Flacara Aurie)
    prof = Image.new("RGB", (1080, 1080), (12, 9, 7))
    draw = ImageDraw.Draw(prof)
    for r, col, w in [(465, (245, 158, 11), 5), (425, (180, 110, 20), 2), (350, (95, 60, 15), 2)]:
        draw.ellipse((540 - r, 540 - r, 540 + r, 540 + r), outline=col, width=w)

    try:
        f_big = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 112)
        f_mid = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 64)
        f_sub = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 34)
        f_sun = ImageFont.truetype("C:/Windows/Fonts/seguisym.ttf", 140)
    except Exception:
        f_big = f_mid = f_sub = f_sun = ImageFont.load_default()

    draw.text((540, 310), "☀", font=f_sun, fill=(251, 191, 36), anchor="mm")
    draw.text((540, 505), "SURYA", font=f_big, fill=(250, 247, 239), anchor="mm")
    draw.text((540, 620), "MUSIC", font=f_mid, fill=(245, 158, 11), anchor="mm")
    draw.text((540, 745), "ALIN DRAGOȘ · RO & EN", font=f_sub, fill=(210, 190, 150), anchor="mm")

    prof_path = PUBLIC_MEDIA / "surya_music_profil_1080.png"
    prof.save(prof_path)
    prof.save(surya_dir / "1_Poza_Profil_Surya_Music_1080x1080.png")

    # 2. Coperta YouTube 2560x1440 (Zona sigura 1546x423 -> x:507..2053, y:508..931)
    bg_src = Image.open(PUBLIC_MEDIA / "scena_colind_4.jpg").convert("RGB").resize((2560, 1440))
    overlay = Image.new("RGBA", (2560, 1440), (10, 7, 5, 195))
    bg = Image.alpha_composite(bg_src.convert("RGBA"), overlay).convert("RGB")
    db = ImageDraw.Draw(bg)
    db.rectangle((507, 508, 2053, 931), outline=(245, 158, 11), width=2)
    db.rectangle((507, 862, 2053, 931), fill=(20, 14, 9))

    try:
        f_yt_title = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 86)
        f_yt_sub = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 36)
        f_yt_band = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 28)
    except Exception:
        f_yt_title = f_yt_sub = f_yt_band = ImageFont.load_default()

    db.text((1280, 620), "SURYA MUSIC", font=f_yt_title, fill=(251, 191, 36), anchor="mm")
    db.text((1280, 730), "Original Music, Poetry & Christmas Carols · Alin Dragoș", font=f_yt_sub, fill=(250, 247, 239), anchor="mm")
    db.text((1280, 896), "Romanian & English Playlists · Soulful Songs & Sacred Light · kalki.nexus", font=f_yt_band, fill=(245, 158, 11), anchor="mm")

    banner_path = PUBLIC_MEDIA / "surya_music_coperta_yt_2560x1440.jpg"
    bg.save(banner_path, quality=94)
    bg.save(surya_dir / "2_Coperta_YouTube_Surya_Music_2560x1440.jpg", quality=94)
    print("✓ Kit vizual Surya Music salvat!")


def build_colinde_albums():
    print("4. Asamblare Albume / Colaje Colinde (Română și Engleză) din piesele unice existente...")
    audit_path = PUBLIC_MEDIA / "music_audit.json"
    if not audit_path.exists():
        print("Lipseste music_audit.json!")
        return {}

    audit = json.loads(audit_path.read_text(encoding="utf-8"))
    album_stats = {}

    for fam in audit.get("song_families", []):
        lang = fam["language"].lower()  # 'ro' sau 'en'
        all_tracks = [fam["winner"]] + fam.get("alternatives", [])
        # Toate variantele unice din familie (6 in RO, 3 in EN) puse intr-un colaj continuu cu capitole
        concat_audio_list = TMP_DIR / f"album_audio_{lang}.txt"
        chapters = []
        cur_sec = 0.0

        with open(concat_audio_list, "w", encoding="utf-8") as f:
            for idx, tr in enumerate(all_tracks, start=1):
                p = Path(tr["abs_path"]).as_posix()
                f.write(f"file '{p}'\n")
                mm = int(cur_sec // 60)
                ss = int(cur_sec % 60)
                chapters.append(f"{mm:02d}:{ss:02d} Varianta {idx} — {tr['file']} ({tr['duration_fmt']})")
                cur_sec += float(tr["duration_sec"])

        total_min = int(cur_sec // 60)
        total_sec = int(cur_sec % 60)
        duration_str = f"{total_min}:{total_sec:02d}"

        # Unim audio-ul si randam videoclipul colajului folosind bucla peste videoclipul cinematic
        merged_wav = TMP_DIR / f"merged_{lang}.wav"
        subprocess.run([
            "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
            "-f", "concat", "-safe", "0", "-i", str(concat_audio_list),
            "-c", "copy",
            str(merged_wav)
        ], check=True)

        base_vid = PUBLIC_MEDIA / f"colind_castigator_{lang}.mp4"
        album_mp4 = PUBLIC_MEDIA / f"album_colinde_{lang}.mp4"

        subprocess.run([
            "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
            "-stream_loop", "-1", "-i", str(base_vid),
            "-i", str(merged_wav),
            "-map", "0:v:0", "-map", "1:a:0",
            "-c:v", "copy",
            "-c:a", "aac", "-b:a", "192k",
            "-t", f"{int(cur_sec)}",
            str(album_mp4)
        ], check=True)

        album_stats[lang.upper()] = {
            "tracks_count": len(all_tracks),
            "total_seconds": round(cur_sec, 1),
            "duration_fmt": duration_str,
            "video_url": f"/media/album_colinde_{lang}.mp4",
            "chapters": chapters,
            "needed_for_60min": max(0, round((3600 - cur_sec) / 170))
        }
        print(f"   ✓ Album [{lang.upper()}] randat: {len(all_tracks)} variante unice -> Durată totală: {duration_str} ({album_mp4.name})")

    audit["albums_built"] = album_stats
    audit_path.write_text(json.dumps(audit, indent=2, ensure_ascii=False), encoding="utf-8")
    return album_stats


if __name__ == "__main__":
    generate_surya_music_kit()
    stats = build_colinde_albums()
    asyncio.run(build_tutorial_video())
    print("=== GATA TOATE OPERATIUNILE ===")
    print(json.dumps(stats, indent=2, ensure_ascii=False))
