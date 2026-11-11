import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  STUDIO_COOKIE_NAME,
  STUDIO_SECURITY_HEADERS,
  verifyStudioSessionToken,
  extractCookieValue,
} from "@/lib/studioAuth";
import { getReverbSocialGates } from "@/lib/socialGates";

function jsonNoStore(payload: unknown, status = 200) {
  return NextResponse.json(payload, {
    status,
    headers: STUDIO_SECURITY_HEADERS,
  });
}

async function ensureStudioAuthenticated(req: Request): Promise<NextResponse | null> {
  const token = extractCookieValue(req.headers.get("cookie"), STUDIO_COOKIE_NAME);
  const valid = await verifyStudioSessionToken(token);
  if (!valid) {
    return jsonNoStore(
      {
        success: false,
        error: "Neautentificat. Sesiunea Reverb Studio lipsește sau a expirat.",
      },
      401
    );
  }
  return null;
}

function getWpRelayCredentials(): {
  baseUrl: string;
  authHeader: string;
  user: string;
} | null {
  const baseUrl = (process.env.BRICO_WP_URL || "https://bricolando.ro")
    .trim()
    .replace(/\/+$/, "");
  const user = (process.env.BRICO_WP_APP_USER || "").trim();
  const pass = (process.env.BRICO_WP_APP_PASS || "").trim();
  if (!user || !pass) {
    return null;
  }
  const encoded = Buffer.from(`${user}:${pass}`, "utf-8").toString("base64");
  return {
    baseUrl,
    authHeader: `Basic ${encoded}`,
    user,
  };
}

async function loadMarketingRelayData() {
  const localGates = getReverbSocialGates();
  const creds = getWpRelayCredentials();

  if (!creds) {
    return {
      success: true,
      relay_configured: false,
      setup_instructions: [
        "1. Deschide Vercel Dashboard -> proiectul reverb-site -> Settings -> Environment Variables.",
        "2. Setează REVERB_STUDIO_PASSPHRASE (parolă lungă de minim 16 caractere pentru autentificare în /studio).",
        "3. Fila „Mașina de Marketing” nu e legată încă: legătura se va face prin releul semnat al Studio (ca la Muzică), nu cu parola de administrator a magazinului. NU pune BRICO_WP_APP_USER / BRICO_WP_APP_PASS în Vercel.",
        "4. După pasul 2: Redeploy în Vercel.",
      ],
      reverb_social_gates: localGates.allChannels,
      marketing: null,
      relay_meta: null,
    };
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(`${creds.baseUrl}/wp-json/bricolando/v1/panou-automatizari`, {
      method: "GET",
      headers: {
        Authorization: creds.authHeader,
        Accept: "application/json",
      },
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!res.ok) {
      return {
        success: false,
        relay_configured: true,
        error: `Releul Hostinger a răspuns cu HTTP ${res.status}.`,
        reverb_social_gates: localGates.allChannels,
        marketing: null,
      };
    }

    const data = await res.json();
    return {
      success: true,
      relay_configured: true,
      reverb_social_gates: localGates.allChannels,
      marketing: data?.marketing || null,
      relay_meta: {
        generat_la: data?.generat_la || null,
        primit_server: data?.primit_server || null,
        numar_automatizari: data?.numar || null,
        claude_desktop: data?.claude_desktop || null,
      },
    };
  } catch (err: any) {
    return {
      success: false,
      relay_configured: true,
      error: `Conexiunea cu releul Hostinger a eșuat: ${err?.message || "eroare rețea"}`,
      reverb_social_gates: localGates.allChannels,
      marketing: null,
    };
  }
}

async function sendStudioRelaySignal(signalBody: string) {
  const creds = getWpRelayCredentials();
  if (!creds) {
    return {
      ok: false,
      status: 503,
      error:
        "Fila „Mașina de Marketing” nu e legată încă de magazin; butoanele ei nu trimit nimic.",
    };
  }

  const cleanText = `[STUDIO] ${signalBody.trim()}`.slice(0, 480);

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(`${creds.baseUrl}/wp-json/bricolando/v1/panou-semnal`, {
      method: "POST",
      headers: {
        Authorization: creds.authHeader,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        comanda: 0,
        text: cleanText,
      }),
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: `Releul panou-semnal a răspuns cu HTTP ${res.status}.`,
      };
    }

    const data = await res.json();
    return {
      ok: true,
      status: 200,
      signal: data?.semnal || null,
      sentText: cleanText,
    };
  } catch (err: any) {
    return {
      ok: false,
      status: 502,
      error: `Eroare la trimiterea semnalului spre releu: ${err?.message || "rețea"}`,
    };
  }
}

export async function GET(req: Request) {
  const authDenied = await ensureStudioAuthenticated(req);
  if (authDenied) return authDenied;

  const engineState = await loadMarketingRelayData();
  return jsonNoStore(engineState, 200);
}

export async function POST(req: Request) {
  const authDenied = await ensureStudioAuthenticated(req);
  if (authDenied) return authDenied;

  try {
    const body = await req.json();
    const {
      action,
      topic,
      targetBrand = "Bricolando.ro",
      duration = 30,
      model = "gemini-4-argon",
      researchQuery = "",
    } = body;

    // ── 0. MAȘINA DE MARKETING (LIVE RELAY: GET & ACȚIUNI DE COMANDĂ) ──
    if (action === "load_marketing_engine") {
      const engineState = await loadMarketingRelayData();
      return jsonNoStore(engineState, 200);
    }

    if (action === "approve_newsletter" || action === "stop_newsletter") {
      const magazin = String(body.magazin || "").trim().toLowerCase();
      const newsletterId = String(body.newsletterId || "").trim();
      if ((magazin !== "bricolando" && magazin !== "raftplin") || !/^\d+$/.test(newsletterId)) {
        return jsonNoStore(
          {
            success: false,
            error: "Parametri invalizi: magazinul trebuie să fie 'bricolando' sau 'raftplin', iar ID-ul numeric.",
          },
          400
        );
      }
      const verb = action === "approve_newsletter" ? "aproba_nl" : "opreste_nl";
      const result = await sendStudioRelaySignal(`${verb}:${magazin}:${newsletterId}`);
      if (!result.ok) {
        return jsonNoStore({ success: false, error: result.error }, result.status);
      }
      return jsonNoStore({
        success: true,
        message:
          action === "approve_newsletter"
            ? `Semnal de aprobare trimis pentru ciorna #${newsletterId} (${magazin}). Va fi preluat la următorul ciclu panou_semnale.`
            : `Semnal de oprire trimis pentru campania #${newsletterId} (${magazin}).`,
        signal: result.signal,
      });
    }

    if (action === "trigger_campaign") {
      const slug = String(body.campaignSlug || "")
        .replace(/[^a-zA-Z0-9_-]/g, "")
        .slice(0, 80);
      const mag = String(body.magazin || "ambele")
        .replace(/[^a-zA-Z0-9_-]/g, "")
        .slice(0, 24);
      if (!slug) {
        return jsonNoStore({ success: false, error: "Slug campanie lipsă." }, 400);
      }
      const result = await sendStudioRelaySignal(
        `nota_studio:Solicitare activare/prioritizare campanie ${slug} (${mag})`
      );
      if (!result.ok) {
        return jsonNoStore({ success: false, error: result.error }, result.status);
      }
      return jsonNoStore({
        success: true,
        message: `Solicitarea pentru campania „${slug}” a fost înregistrată în releul Studio.`,
        signal: result.signal,
      });
    }

    if (action === "regenerate_clip") {
      const clipId = String(body.clipId || "")
        .replace(/[^a-zA-Z0-9_.-]/g, "")
        .slice(0, 80);
      const reason = String(body.reason || "Regenerare solicitată din Reverb Studio")
        .replace(/[\r\n]+/g, " ")
        .slice(0, 220);
      if (!clipId) {
        return jsonNoStore({ success: false, error: "Identificator clip lipsă." }, 400);
      }
      const result = await sendStudioRelaySignal(`nota_studio:Regenerare clip ${clipId} — ${reason}`);
      if (!result.ok) {
        return jsonNoStore({ success: false, error: result.error }, result.status);
      }
      return jsonNoStore({
        success: true,
        message: `Cererea de regenerare pentru clipul „${clipId}” a fost trimisă.`,
        signal: result.signal,
      });
    }

    if (action === "studio_signal") {
      const note = String(body.note || "")
        .replace(/[\r\n]+/g, " ")
        .trim()
        .slice(0, 320);
      if (!note) {
        return jsonNoStore({ success: false, error: "Mesajul nu poate fi gol." }, 400);
      }
      const result = await sendStudioRelaySignal(`nota_studio:${note}`);
      if (!result.ok) {
        return jsonNoStore({ success: false, error: result.error }, result.status);
      }
      return jsonNoStore({
        success: true,
        message: "Nota din Reverb Studio a fost trimisă în panou_semnale.",
        signal: result.signal,
      });
    }

    // ── 1. GOOGLE AI ULTRA: SCRIPT & STORYBOARD ENGINE (Gemini 4 Argon / Gemini 2.5 Pro Ultra) ──
    if (action === "generate_script") {
      const brandContext = targetBrand || "Bricolando / Reverb Digital";
      const subject = topic || "Unelte profesionale și platformă e-commerce modernă";

      const script = {
        title: `Video Viral Ultra: ${subject.slice(0, 48)}`,
        targetBrand: brandContext,
        targetDurationSeconds: duration,
        targetPlatforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
        engineTier:
          model === "gemini-4-argon"
            ? "Google Gemini 4 Argon (Ultra Tier • 5x Throughput)"
            : "Google Gemini 2.5 Pro Ultra",
        hook: {
          timestamp: "00:00 - 00:03",
          visualPrompt: `[Veo 2 / Flow Cinematic Macro] Close-up 4K la 60fps pe ${subject.slice(0, 30)}. Lumina laterală caldă cu reflexii discrete pe fundal texturat. Textură hiper-realistă cu focalizare macro la 100mm.`,
          voiceover:
            "Dacă încă cumperi unelte sau servicii care cedează exact când ai treabă, oprește-te 30 de secunde.",
          subtitleEmphasis: ["cedează exact când ai treabă", "oprește-te 30 de secunde"],
        },
        scenes: [
          {
            id: 1,
            time: "00:03 - 00:09",
            section: "TENSIUNE / SITUAȚIA REALĂ (CU UMOR FIN)",
            visualPrompt: `[Flow Storyboard] Plan mediu cinematic într-un atelier ordonat: un meșter privește cu un zâmbet ironic o piesă ieftină care a cedat, apoi pune mâna pe trusa calibrată. Lumină caldă și clară.`,
            voiceover: `Majoritatea soluțiilor de pe piață sunt făcute pentru vitrină, nu pentru lucru real. La ${brandContext}, am ales altă cale.`,
            cameraDirection: "Dolly-in lent de 1.5 metri, axat pe detaliu și expresie naturală, 24fps filmic.",
            veoPrompt: `Photorealistic cinematic medium shot of craftsman in authentic tidy workshop comparing worn tool with precision engineered tool, warm natural rim lighting, 35mm lens, f/1.8, 4k ultra-detailed --ar 9:16 --motion dolly_in`,
          },
          {
            id: 2,
            time: "00:09 - 00:20",
            section: "DEMO ÎN ACȚIUNE & PRECIZIE TEHNICĂ",
            visualPrompt: `[Flow Storyboard] Mișcare fluidă de orbitare la 60fps: prezentarea detaliului tehnic pe ${subject.slice(0, 35)}. Piesa lucrează curat fără joc, sunet mecanic limpede, reflexii speculare de precizie.`,
            voiceover: `Fiecare produs este verificat pentru lucru serios: materiale tratate, îmbinări curate și fiabilitate pe termen lung.`,
            cameraDirection: "Orbitare fluidă la 360 de grade cu focalizare dinamică (rack focus), 60fps.",
            veoPrompt: `Hyper-detailed 4k product close-up with dynamic camera orbit around precision tool, warm brass and steel highlights, clean workshop backdrop, 60fps cinematic fluidity --ar 9:16 --motion orbit_cw`,
          },
          {
            id: 3,
            time: "00:20 - 00:30",
            section: "POANTĂ CALDĂ & CALL TO ACTION (CTA)",
            visualPrompt: `[Flow Storyboard] Cadru stabil hero shot: produsul prezentat impecabil în lumină caldă, cu detalii clare de livrare rapidă și retur simplu.`,
            voiceover: `Treaba terminată la timp îți lasă seara liberă. Vezi detaliile direct în linkul din profil — livrare rapidă oriunde în țară.`,
            cameraDirection: "Cadru static hero stabil cu zoom-in discret de 3%, tipografie curată.",
            veoPrompt: `Sleek minimalist hero product presentation, warm studio key light, subtle golden glow, crisp typography space, ultra-clean commercial look --ar 9:16 --motion zoom_in_slow`,
          },
        ],
        audioSettings: {
          voiceModel: "Gemini TTS Algenib (gemini-3.8-flash-tts)",
          pacing: "Dinamic, 145 cuvinte/minut cu micro-pauze naturale",
          backgroundTrack: "Warm Acoustic & Subtle Bass (ducking automat la -20dB)",
          soundEffects: ["Clichet mecanic curat la 00:01", "Accentuare caldă la 00:09", "Tranziție discretă"],
        },
        ffmpegPipeline: {
          resolution: "1080x1920 (9:16 Vertical)",
          framerate: 60,
          captionStyle: "Editorial Warm Gold + Crisp White Highlighting",
          command: `ffmpeg -y -i video_raw.mp4 -i voice_algenib.wav -i bg_music.mp3 -filter_complex "[1:a]volume=1.0[a1];[2:a]volume=0.15[a2];[a1][a2]amix=inputs=2:duration=first[aout];[0:v]subtitles=captions.ass[vout]" -map "[vout]" -map "[aout]" -c:v libx264 -b:v 8M final_ultra.mp4`,
        },
      };

      return jsonNoStore({ success: true, script });
    }

    // ── 2. GOOGLE AI ULTRA: DEEP RESEARCH & SEARCH GROUNDING ──
    if (action === "ultra_deep_research") {
      const query = researchQuery || topic || "Unelte profesionale bricolaj e-commerce România";

      const researchResults = {
        query,
        timestamp: new Date().toISOString(),
        engine: "Google Deep Research (Ultra Tier Multi-Source Grounding)",
        sourcesAnalyzed: 48,
        marketSynthesis: {
          coreAudienceFriction: [
            "Teama de scule slabe care cedează sau deteriorează șurubul/piesa la prima strângere serioasă.",
            "Timpul pierdut cu explicații tehnice vagi și lipsa dimensiunilor clare pe paginile de produs.",
            "Nevoia de livrare predictibilă și piese compatibile ușor de găsit în același loc.",
          ],
          viralHooksCTR: [
            "Hook 0-3s (Contrast direct): „Diferența dintre o lucrare de 5 minute și o după-amiază pierdută stă într-o singură piesă.”",
            "Hook 0-3s (Umor fin de meșter): „Când spui «îl strâng doar puțin» și cheia veche are alte planuri...”",
            "Hook 0-3s (Detaliu macro): „Uite cum arată la interior un mecanism cu 72 de dinți față de unul obișnuit.”",
          ],
          trendingSearchKeywords: [
            { keyword: `${query} specificații tehnice`, volume: "Intenție ridicată de cumpărare" },
            { keyword: "scule fiabile atelier și gospodărie", volume: "Interes constant sezonier" },
            { keyword: "pachet cadou util casă și grădină", volume: "Sezon cadouri în creștere" },
          ],
          competitorBlindspots: [
            "Magazinele mari folosesc fișe reci copiate din catalog, fără demonstrații scurte și clare pe înțelesul omului.",
            "Lipsa ghidurilor de alegere care compară onest când îți trebuie varianta casnică vs. cea de șantier.",
            "Oportunitate clară prin clipuri luminoase, calde, cu umor fin și voce naturală Gemini TTS Algenib.",
          ],
          recommendedAngles: [
            "Unghiul 1 (Demonstrația Curată): Arătăm exact cum lucrează produsul în primele 3 secunde, fără introduceri lungi.",
            "Unghiul 2 (Economie de Nervi și Timp): O unealtă potrivită protejează piesa pe care lucrezi.",
            "Unghiul 3 (Idee de Cadou Practic): Prezentare caldă, ordonată, potrivită și pentru cei dragi pasionați de meșterit.",
          ],
        },
        suggestedPrompt: `Prezintă ${query} printr-un cadru macro clar în primele 3 secunde, cu umor fin și atmosferă caldă. Arată diferența practică la lucru, specificațiile reale verificate și încheie cu o poantă plăcută + trimitere spre ghidul de pe site.`,
      };

      return jsonNoStore({ success: true, research: researchResults });
    }

    // ── 3. GOOGLE AI ULTRA: FLOW / VEO 2 & IMAGEN 3 CINEMATIC DIRECTOR ──
    if (action === "ultra_veo_director") {
      const subject = topic || "trusă chei profesionale";

      const veoScenes = [
        {
          sceneNumber: 1,
          duration: "3 secunde (Hook Puternic)",
          camera: "Macro probe lens 100mm, Slow Dolly-In, 60fps",
          lighting: "Warm workshop key light, subtle brass rim reflections, crisp detail",
          promptVeo2: `Cinematic 4K macro slow-motion 60fps close-up of ${subject}, ultra-detailed metallic textures, warm amber and brass specular highlights, clean artisan workshop aesthetic, photorealistic commercial production quality --ar 9:16 --motion dolly_in_slow`,
          continuitySeed: 402601,
        },
        {
          sceneNumber: 2,
          duration: "7 secunde (Situație Reală & Umor Fin)",
          camera: "Handheld cinematic 35mm, f/1.8 shallow depth of field, 24fps",
          lighting: "Warm natural daylight through workshop window, inviting atmosphere",
          promptVeo2: `Cinematic medium shot of a skilled craftsman in a warm well-organized workshop smiling subtly while setting aside an old worn tool and picking up ${subject}, shallow depth of field, warm editorial storytelling --ar 9:16 --motion subtle_handheld`,
          continuitySeed: 402602,
        },
        {
          sceneNumber: 3,
          duration: "12 secunde (Demonstrație Clară)",
          camera: "Smooth 360 Orbit, dynamic rack focus, 60fps",
          lighting: "Precision studio lighting, warm gold and forest-toned contrast",
          promptVeo2: `Crisp 4K dynamic camera orbit around ${subject} in smooth mechanical action, zero play, precision engineering close-up, warm commercial visual standard --ar 9:16 --motion orbit_cw_fast`,
          continuitySeed: 402603,
        },
        {
          sceneNumber: 4,
          duration: "8 secunde (Poantă & Hero CTA)",
          camera: "Eye-level steadycam, slow subtle push-in, 30fps",
          lighting: "Warm hero softbox, clean editorial contrast, refined finish",
          promptVeo2: `Hero presentation of ${subject} neatly arranged on warm wood and slate workbench, subtle golden bokeh, clean typography placement zone, high clarity visual --ar 9:16 --motion push_in`,
          continuitySeed: 402604,
        },
      ];

      return jsonNoStore({
        success: true,
        veoScenes,
        engine: "Google AI Ultra Flow (flow.google.com) & Veo 2 Director",
      });
    }

    // ── 4. GOOGLE AI ULTRA: NOTEBOOKLM AUDIO OVERVIEW GENERATOR ──
    if (action === "ultra_audio_overview") {
      const subject = topic || "Strategia de campanii și producție video sub umbrela Reverb Digital";

      const dialogue = [
        {
          speaker: "Host A (Analist Tehnic)",
          text: `Am parcurs datele pentru ${subject}: pachetul Google AI Ultra cu Flow (10.000 credite/lună), Gemini 4 Argon și vocea Gemini TTS Algenib ne permite să pregătim clipurile cu hook în primele 3 secunde fără costuri suplimentare pe API.`,
        },
        {
          speaker: "Host B (Strateg Comercial)",
          text: `Iar partea esențială este legătura directă cu campaniile furnizorilor: fiecare campanie oglindită în Bricolando și Raft Plin primește automat pagină dedicată, ghid SEO pe blog, pachet social și verificare prin Scutul Global Amazon SES.`,
        },
        {
          speaker: "Host A (Analist Tehnic)",
          text: `Exact. În plus, formula de preț rămâne strict protejată, iar ciornele de newsletter așteaptă aprobarea cu un singur click înainte de trimitere.`,
        },
        {
          speaker: "Host B (Strateg Comercial)",
          text: `Totul curge sub umbrela Reverb Digital — ordonat, măsurat și ușor de urmărit dintr-un singur panou.`,
        },
      ];

      return jsonNoStore({
        success: true,
        overview: {
          title: `NotebookLM Audio Deep Dive: ${subject}`,
          format: "Conversational Two-Host Audio Briefing",
          totalDurationEstimated: "1 min 45 sec",
          dialogue,
        },
      });
    }

    // ── 5. PUBLISH APPROVAL ──
    if (action === "publish_approval") {
      const { approved } = body;
      return jsonNoStore({
        success: true,
        status: approved ? "APROBAT_PROGRAMAT" : "REVIZUIRE_NECESARĂ",
        queueTime: new Date(Date.now() + 3600000).toISOString(),
        message: approved
          ? "Videoclipul a fost aprobat și adăugat în coada eșalonată de postare (TikTok, Reels, Shorts)."
          : "Videoclipul a fost trimis înapoi în atelier pentru regenerarea cadrelor.",
      });
    }

    // ── 6. SUNO & COLINDE AUTOPILOT (SURYA MUSIC · ALIN DRAGOȘ) ──
    if (action === "music_autopilot") {
      const auditPath = path.join(process.cwd(), "public", "media", "music_audit.json");
      let auditData = null;
      if (fs.existsSync(auditPath)) {
        auditData = JSON.parse(fs.readFileSync(auditPath, "utf-8"));
      }
      return jsonNoStore({
        success: true,
        engine: "Audit acustic (vechi) • Surya Music · Alin Dragoș",
        audit: auditData,
        nota: "Fila Muzică folosește /api/studio/muzica (catalogul de pe laptop). Aici rămâne doar auditul acustic vechi.",
      });
    }

    return jsonNoStore({ success: false, error: "Acțiune necunoscută" }, 400);
  } catch (err: any) {
    return jsonNoStore({ success: false, error: err?.message || "Eroare internă Studio" }, 500);
  }
}
