import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, topic, targetBrand, duration = 30 } = body;

    if (action === "generate_script") {
      // Algoritmul ReStructure AI pentru scenarii video de retenție maximă (15-60s)
      const brandContext = targetBrand || "Bricolando / Reverb Digital";
      const subject = topic || "Unelte profesionale și platformă e-commerce modernă";

      const script = {
        title: `Video Viral: ${subject.slice(0, 40)}`,
        targetBrand: brandContext,
        targetDurationSeconds: duration,
        targetPlatforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
        hook: {
          timestamp: "00:00 - 00:03",
          visualPrompt: "Close-up macro dinamic 4K, lumină cinematică caldă, mișcare rapidă spre produs, contrast ridicat.",
          voiceover: "Dacă încă pierzi ore întregi cu asta, oprește-te 30 de secunde.",
          subtitleEmphasis: ["pierzi ore", "oprește-te"]
        },
        scenes: [
          {
            id: 1,
            time: "00:03 - 00:10",
            section: "TENSIUNE / PROBLEMA",
            visualPrompt: "Plan mediu cinematic: antreprenor sau meșter privind frustrat un sistem lent sau o unealtă care cedează. Google Veo slow dolly-in.",
            voiceover: "Majoritatea afacerilor și atelierelor folosesc soluții vechi din 2018. Site-uri care se încarcă în 5 secunde sau unelte care te lasă la jumătatea lucrării.",
            cameraDirection: "Dolly-in lent, focalizare pe expresie și detaliu tehnic."
          },
          {
            id: 2,
            time: "00:10 - 00:22",
            section: "SOLUȚIA & DEMO ÎN ACȚIUNE",
            visualPrompt: "Macro exploziv: trusă profesională din oțel crom-vanadiu deschisă la milisecundă sau platformă web Next.js încărcându-se instantaneu pe telefon.",
            voiceover: "Aici intervine sistemul nostru. Viteză pură, rezistență industrială și execuție fără niciun compromis.",
            cameraDirection: "Panoramare dinamică la 60fps, iluminare de studio obsidian cu reflexii aurii."
          },
          {
            id: 3,
            time: "00:22 - 00:30",
            section: "OFERTA & CALL TO ACTION (CTA)",
            visualPrompt: "Cadru curat cu pachetul complet, grafică minimalistă cu livrare rapidă sau link direct în bio.",
            voiceover: "Linkul este direct în descriere sau pe profil. Intră acum și vezi diferența cu ochii tăi.",
            cameraDirection: "Static stabil, zoom-in subtil de 3%, text clar pe ecran."
          }
        ],
        audioSettings: {
          voiceModel: "ElevenLabs - Reverb Signature Clone (sau Studio Romanian Pro)",
          pacing: "Rapid, autoritar, cald, 145 cuvinte/minut",
          backgroundTrack: "Subtle Lo-Fi Electronic Bass (ducking automat la -18dB în timpul vorbirii)"
        },
        ffmpegPipeline: {
          resolution: "1080x1920 (9:16 Vertical)",
          framerate: 60,
          captionStyle: "TikTok Bold Yellow, font Montserrat 800, cuvinte evidențiate dinamic în timp real",
          status: "Pregătit pentru procesare"
        }
      };

      return NextResponse.json({ success: true, script });
    }

    if (action === "publish_approval") {
      const { scriptId, approved } = body;
      return NextResponse.json({
        success: true,
        status: approved ? "APROBAT_PROGRAMAT" : "REVIZUIRE_NECESARĂ",
        queueTime: new Date(Date.now() + 3600000).toISOString(),
        message: approved 
          ? "Videoclipul a fost aprobat și adăugat în coada de postare automată (TikTok, Reels, Shorts)."
          : "Videoclipul a fost trimis înapoi în atelier pentru regenerarea cadrelor."
      });
    }

    return NextResponse.json({ success: false, error: "Acțiune necunoscută" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
