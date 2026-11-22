"""Albumele extinse Surya Music fara unda audio desenata (care nu urma piesa).
Aceleasi 4 scene (Ken Burns, fade) intr-o bucla de 160 s, repetata peste sunetul neschimbat al albumului.
Iesire: Pictures/Surya Music/7_..._CURAT.mp4 si 8_..._CURAT.mp4. Rulare: py -3 -X utf8 album_fara_unda.py
"""
import subprocess
from pathlib import Path

MEDIA = Path(r"C:\Users\alind\reverb\reverb-site\public\media")
OUT = Path(r"C:\Users\alind\Pictures\Surya Music")
TMP = OUT / "_tmp_curat"
TMP.mkdir(exist_ok=True)

SCENE_SEC = 40
FPS = 30


def bucla():
    out = TMP / "bucla_160s.mp4"
    if out.exists():
        return out
    fr = SCENE_SEC * FPS
    parts = []
    for i in range(4):
        parts.append(
            f"[{i}:v]scale=1600:900,zoompan=z='min(zoom+0.00015,1.15)':d={fr}:"
            f"x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps={FPS},"
            f"fade=t=in:st=0:d=1,fade=t=out:st={SCENE_SEC-1}:d=1[v{i}];"
        )
    fc = "".join(parts) + "[v0][v1][v2][v3]concat=n=4:v=1:a=0," \
        "drawbox=x=24:y=24:w=1232:h=672:color=0xf59e0b@0.30:t=2[vout]"
    cmd = ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error"]
    for i in range(1, 5):
        # o singura imagine pe intrare: zoompan d=fr scoate exact fr cadre (cu -loop 1 multiplica si ramane negru)
        cmd += ["-i", str(MEDIA / f"scena_colind_{i}.jpg")]
    cmd += ["-filter_complex", fc, "-map", "[vout]", "-t", str(4 * SCENE_SEC),
            "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p",
            "-g", str(FPS * 2), str(out)]
    subprocess.run(cmd, check=True)
    return out


def album(src_name, dst_name, loop):
    src = OUT / src_name
    dst = OUT / dst_name
    subprocess.run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
        "-stream_loop", "-1", "-i", str(loop), "-i", str(src),
        "-map", "0:v:0", "-map", "1:a:0", "-c:v", "copy", "-c:a", "copy",
        "-shortest", "-movflags", "+faststart", str(dst)], check=True)
    print("OK", dst.name)


if __name__ == "__main__":
    b = bucla()
    album("5_ALBUM_EXTINS_Engleza_Surya_Music_54m51s.mp4", "7_ALBUM_EXTINS_Engleza_CURAT_54m51s.mp4", b)
    album("6_ALBUM_EXTINS_Romana_Surya_Music_52m40s.mp4", "8_ALBUM_EXTINS_Romana_CURAT_52m40s.mp4", b)
