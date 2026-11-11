import fs from "fs";
import path from "path";

export interface ReverbSocialChannel {
  id: "linkedin" | "youtube" | "instagram" | "facebook";
  label: string;
  handle: string;
  status: "in_pregatire" | "activ" | string;
  url: string;
}

const GATE_FILES: { id: ReverbSocialChannel["id"]; file: string; defaultLabel: string }[] = [
  { id: "linkedin", file: "LINKEDIN.md", defaultLabel: "LinkedIn" },
  { id: "youtube", file: "YOUTUBE.md", defaultLabel: "YouTube" },
  { id: "instagram", file: "INSTAGRAM.md", defaultLabel: "Instagram" },
  { id: "facebook", file: "FACEBOOK.md", defaultLabel: "Facebook" },
];

function parseGateMarkdown(raw: string, id: ReverbSocialChannel["id"], defaultLabel: string): ReverbSocialChannel {
  const statusMatch = raw.match(/^\s*status\s*:\s*([a-zA-Z0-9_-]+)/m);
  const urlMatch = raw.match(/^\s*url\s*:\s*"?([^"\r\n]*)"?/m);
  const handleMatch = raw.match(/^\s*handle\s*:\s*"?([^"\r\n]*)"?/m);

  const status = (statusMatch?.[1] || "in_pregatire").trim();
  const url = (urlMatch?.[1] || "").trim();
  const handle = (handleMatch?.[1] || "").trim();

  return {
    id,
    label: defaultLabel,
    handle,
    status,
    url,
  };
}

/**
 * Citește fișierele-poartă din `brand-social/*.md` pe server.
 * Imediat ce o poartă trece pe `status: activ` și are un URL `https://` valid,
 * canalul intră automat în `sameAs` (JSON-LD din `app/layout.tsx`) și în `components/Footer.tsx`.
 */
export function getReverbSocialGates(): {
  allChannels: ReverbSocialChannel[];
  activeChannels: ReverbSocialChannel[];
  sameAsUrls: string[];
} {
  const baseDir = path.join(process.cwd(), "brand-social");
  const allChannels: ReverbSocialChannel[] = [];

  for (const gate of GATE_FILES) {
    const fullPath = path.join(baseDir, gate.file);
    try {
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, "utf-8");
        allChannels.push(parseGateMarkdown(content, gate.id, gate.defaultLabel));
      } else {
        allChannels.push({
          id: gate.id,
          label: gate.defaultLabel,
          handle: "",
          status: "in_pregatire",
          url: "",
        });
      }
    } catch {
      allChannels.push({
        id: gate.id,
        label: gate.defaultLabel,
        handle: "",
        status: "in_pregatire",
        url: "",
      });
    }
  }

  const activeChannels = allChannels.filter(
    (ch) => ch.status === "activ" && /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(ch.url)
  );

  return {
    allChannels,
    activeChannels,
    sameAsUrls: activeChannels.map((ch) => ch.url),
  };
}
