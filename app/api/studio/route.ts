// Ruta veche a Reverb Studio a fost retrasă pe 12 nov 2026 (audit: docs/designs/studio_instrument_2026-11-12/audit_functional_report.md).
// Acțiunile ei (generate_script, ultra_deep_research, ultra_veo_director, ultra_audio_overview, publish_approval, music_autopilot)
// întorceau texte scrise în cod ca și cum ar fi fost rezultate reale. Tot ce face Studio acum trece prin /api/studio/muzica
// (comenzi semnate către laptop, pentru muzică și postări) și /api/studio/auth.
import { NextResponse } from "next/server";
import { STUDIO_COOKIE_NAME, STUDIO_SECURITY_HEADERS, verifyStudioSessionToken, extractCookieValue } from "@/lib/studioAuth";

export const dynamic = "force-dynamic";

async function raspuns(req: Request) {
  const ok = await verifyStudioSessionToken(extractCookieValue(req.headers.get("cookie"), STUDIO_COOKIE_NAME));
  if (!ok) return NextResponse.json({ success: false, error: "Neautentificat." }, { status: 401, headers: STUDIO_SECURITY_HEADERS });
  return NextResponse.json(
    { success: false, error: "Această rută a fost retrasă. Reverb Studio folosește /api/studio/muzica." },
    { status: 410, headers: STUDIO_SECURITY_HEADERS },
  );
}

export const GET = raspuns;
export const POST = raspuns;
