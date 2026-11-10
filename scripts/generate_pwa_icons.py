#!/usr/bin/env python3
"""
Genereaza iconitele PWA 100% distincte pentru:
1. Reverb.ro (Aplicatia site-ului agentiei):
   - Fundal Obsidian Black (#06080C) cu grila arhitecturala subtila
   - Inele concentrice de rezonanta in Electric Cyan (#00E5FF) & Cobalt (#2563EB)
   - Monograma geometrica 'R' alba cristalina in centru + eticheta 'REVERB.RO'
   -> Salveaza in public/icon-192.png, public/icon-512.png, public/apple-touch-icon.png

2. Panoul Reverb Studio AI (/studio):
   - Fundal Royal Purple-Violet (#24073B) cu rama aurie-violet
   - Disc de productie central cu unde audio (egalizator) in Gold (#FBBF24) & Rose (#F43F5E)
   - Triunghi Play luminos in centru + eticheta 'STUDIO AI' jos
   -> Salveaza in public/icon-studio-192.png, public/icon-studio-512.png, public/apple-touch-icon-studio.png
"""
import math
import os
from PIL import Image, ImageDraw, ImageFont

PUBLIC = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public"))


def incarca_font(marime: int):
    for f in [
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf",
        r"C:\Windows\Fonts\calibrib.ttf",
    ]:
        if os.path.exists(f):
            return ImageFont.truetype(f, marime)
    return ImageFont.load_default()


def deseneaza_reverb_site(dim: int, maskable: bool = False) -> Image.Image:
    S = 4
    W = dim * S
    k = W / 512.0

    def p(v):
        return int(round(v * k))

    def b(x0, y0, x1, y1):
        return [p(x0), p(y0), p(x1), p(y1)]

    # Culori Reverb.ro: Obsidian Black + Electric Cyan + Pure White
    OBSIDIAN = (6, 9, 15, 255)
    NAVY_CARD = (12, 19, 33, 255)
    CYAN = (0, 229, 255, 255)
    CYAN_DIM = (0, 150, 199, 255)
    CYAN_GLOW = (14, 65, 94, 255)
    WHITE = (248, 250, 252, 255)

    im = Image.new("RGBA", (W, W), OBSIDIAN)
    d = ImageDraw.Draw(im)

    pad = 40 if maskable else 18

    # 1. Chenar exterior octogonal / rotunjit arhitectural
    d.rounded_rectangle(
        b(pad, pad, 512 - pad, 512 - pad),
        radius=p(96),
        fill=NAVY_CARD,
        outline=CYAN_DIM,
        width=max(2, p(6)),
    )

    cx, cy = 256, 232

    # 2. Inele concentrice de rezonanta (unde Reverb)
    for r, col, w_line in [
        (172, CYAN_GLOW, 5),
        (142, CYAN_DIM, 6),
        (112, CYAN, 7),
    ]:
        d.ellipse(
            b(cx - r, cy - r, cx + r, cy + r),
            outline=col,
            width=max(2, p(w_line)),
        )

    # Puncte cardinale arhitecturale pe inelul exterior
    for angle_deg in [0, 90, 180, 270]:
        rad = math.radians(angle_deg)
        px = cx + 142 * math.cos(rad)
        py = cy + 142 * math.sin(rad)
        d.ellipse(b(px - 7, py - 7, px + 7, py + 7), fill=CYAN)

    # 3. Cercul interior plin Obsidian pentru contrast maxim
    r_in = 86
    d.ellipse(
        b(cx - r_in, cy - r_in, cx + r_in, cy + r_in),
        fill=OBSIDIAN,
        outline=CYAN,
        width=max(2, p(6)),
    )

    # 4. Monograma 'R' arhitecturala mare in centru
    if dim >= 120:
        font_r = incarca_font(p(116))
        bbox = d.textbbox((0, 0), "R", font=font_r)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        d.text(
            (p(cx) - tw // 2 - bbox[0], p(cy) - th // 2 - bbox[1] - p(4)),
            "R",
            font=font_r,
            fill=WHITE,
        )

        # 5. Panglica jos 'REVERB.RO' in Electric Cyan
        d.rounded_rectangle(
            b(118, 392, 394, 452),
            radius=p(30),
            fill=CYAN,
            outline=OBSIDIAN,
            width=max(2, p(5)),
        )
        font_lbl = incarca_font(p(35))
        lbl = "REVERB.RO"
        bb2 = d.textbbox((0, 0), lbl, font=font_lbl)
        lw = bb2[2] - bb2[0]
        lh = bb2[3] - bb2[1]
        d.text(
            (p(256) - lw // 2 - bb2[0], p(422) - lh // 2 - bb2[1]),
            lbl,
            font=font_lbl,
            fill=OBSIDIAN,
        )

    return im.resize((dim, dim), Image.Resampling.LANCZOS)


def deseneaza_reverb_studio(dim: int, maskable: bool = False) -> Image.Image:
    S = 4
    W = dim * S
    k = W / 512.0

    def p(v):
        return int(round(v * k))

    def b(x0, y0, x1, y1):
        return [p(x0), p(y0), p(x1), p(y1)]

    # Culori Reverb Studio AI: Royal Purple-Violet + Neon Rose + Warm Gold
    PURPLE_BG = (38, 8, 64, 255)
    PURPLE_DEEP = (22, 4, 38, 255)
    MAGENTA_RING = (244, 63, 94, 255)
    GOLD = (251, 191, 36, 255)
    GOLD_LIGHT = (254, 243, 199, 255)
    WHITE = (255, 255, 255, 255)

    im = Image.new("RGBA", (W, W), PURPLE_BG)
    d = ImageDraw.Draw(im)

    pad = 40 if maskable else 18

    # 1. Rama exterioara rotunjita cu contur auriu
    d.rounded_rectangle(
        b(pad, pad, 512 - pad, 512 - pad),
        radius=p(96),
        fill=PURPLE_DEEP,
        outline=GOLD,
        width=max(2, p(7)),
    )

    cx, cy = 256, 224

    # 2. Disc vinil / studio cu inel dublu Neon Rose & Gold
    r_outer = 160
    d.ellipse(
        b(cx - r_outer, cy - r_outer, cx + r_outer, cy + r_outer),
        fill=(48, 12, 82, 255),
        outline=MAGENTA_RING,
        width=max(2, p(10)),
    )
    r_mid = 136
    d.ellipse(
        b(cx - r_mid, cy - r_mid, cx + r_mid, cy + r_mid),
        fill=PURPLE_DEEP,
        outline=GOLD,
        width=max(2, p(4)),
    )

    # 3. Bare de unde audio (egalizator simetric stanga-dreapta)
    bars = [
        (-96, 36, MAGENTA_RING),
        (-74, 64, GOLD),
        (74, 64, GOLD),
        (96, 36, MAGENTA_RING),
    ]
    for dx, half_h, col in bars:
        bx = cx + dx
        d.rounded_rectangle(
            b(bx - 6, cy - half_h, bx + 6, cy + half_h),
            radius=p(6),
            fill=col,
        )

    # 4. Triunghi PLAY mare si luminos in centru (Gold + contur alb)
    play_pts = [
        (p(cx - 34), p(cy - 56)),
        (p(cx - 34), p(cy + 56)),
        (p(cx + 58), p(cy)),
    ]
    d.polygon(play_pts, fill=GOLD, outline=GOLD_LIGHT)

    # Stea AI (sparkle) in dreapta-sus a discului
    sx, sy = 368, 108
    sp_r = 22
    star_pts = [
        (p(sx), p(sy - sp_r)),
        (p(sx + 6), p(sy - 6)),
        (p(sx + sp_r), p(sy)),
        (p(sx + 6), p(sy + 6)),
        (p(sx), p(sy + sp_r)),
        (p(sx - 6), p(sy + 6)),
        (p(sx - sp_r), p(sy)),
        (p(sx - 6), p(sy - 6)),
    ]
    d.polygon(star_pts, fill=WHITE)

    # 5. Panglica jos 'STUDIO AI' in Neon Rose cu text alb
    if dim >= 120:
        d.rounded_rectangle(
            b(114, 390, 398, 452),
            radius=p(30),
            fill=MAGENTA_RING,
            outline=GOLD,
            width=max(2, p(5)),
        )
        font_lbl = incarca_font(p(35))
        lbl = "STUDIO AI"
        bb2 = d.textbbox((0, 0), lbl, font=font_lbl)
        lw = bb2[2] - bb2[0]
        lh = bb2[3] - bb2[1]
        d.text(
            (p(256) - lw // 2 - bb2[0], p(421) - lh // 2 - bb2[1]),
            lbl,
            font=font_lbl,
            fill=WHITE,
        )

    return im.resize((dim, dim), Image.Resampling.LANCZOS)


def main():
    os.makedirs(PUBLIC, exist_ok=True)
    # 1. Reverb.ro (site principal)
    for nume, dim, m in [
        ("icon-192.png", 192, False),
        ("icon-512.png", 512, False),
        ("icon-maskable-512.png", 512, True),
        ("apple-touch-icon.png", 180, False),
    ]:
        cale = os.path.join(PUBLIC, nume)
        deseneaza_reverb_site(dim, maskable=m).save(cale, "PNG", optimize=True)
        print("scris Reverb.ro:", nume)

    # 2. Reverb Studio AI (/studio)
    for nume, dim, m in [
        ("icon-studio-192.png", 192, False),
        ("icon-studio-512.png", 512, False),
        ("icon-studio-maskable-512.png", 512, True),
        ("apple-touch-icon-studio.png", 180, False),
    ]:
        cale = os.path.join(PUBLIC, nume)
        deseneaza_reverb_studio(dim, maskable=m).save(cale, "PNG", optimize=True)
        print("scris Reverb Studio:", nume)


if __name__ == "__main__":
    main()
