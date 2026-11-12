// Scheletul comun al e-mailurilor Reverb. Un șablon descrie conținutul (EmailSpec); scheletul desenează
// fundalul cu grilă, antetul cu semnul, cardul și subsolul, și întoarce HTML-ul plus varianta text.
//
// Reguli de e-mail respectate aici (nu se scot):
// - tabele și stiluri scrise pe fiecare element: Gmail taie o parte din <style>, Outlook pe Windows desenează cu Word;
// - lățime fluidă (100 %, cel mult 600 px) cu tabel-fantomă pentru Outlook;
// - toate culorile sunt hex plin; nimic esențial nu stă într-o imagine (fără semn și fără grilă e-mailul rămâne întreg);
// - tot textul venit din afară trece prin esc() AICI, nu în șabloane; adresele de link trec prin safeHref().
//
// Fișier fără importuri Next și fără „@/”: se poate folosi și dintr-un script.

import { company } from "../company";
import { theme } from "./theme";

export type Block =
  | { kind: "rows"; rows: { label: string; value: string; href?: string }[] }
  | { kind: "quote"; label?: string; text: string }
  | { kind: "steps"; items: { title: string; text?: string }[] }
  | { kind: "list"; label?: string; items: string[] }
  | { kind: "paragraph"; text: string }
  | { kind: "button"; label: string; href: string; variant?: "primary" | "outline" }
  | { kind: "signature"; name: string; role?: string }
  | { kind: "divider" };

export type EmailSpec = {
  lang: "ro" | "en";
  /** Rândul care apare în lista de mesaje, lângă subiect. */
  preheader: string;
  eyebrow: string;
  title: string;
  intro?: string;
  blocks: Block[];
  /** „intern” = mesaj către noi (subsol scurt); „client” = subsol cu datele firmei. */
  footer: "intern" | "client";
  /** De ce a primit omul mesajul. */
  reason?: string;
  /** De unde se iau imaginile; implicit site-ul public. */
  assetBase?: string;
};

export function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Text pe mai multe rânduri: escapat, apoi rândurile noi devin <br> (white-space: pre-wrap nu ține în Outlook). */
function multiline(s: string): string {
  return esc(s).replace(/\r\n|\r|\n/g, "<br>");
}

/** Doar https://, mailto: și tel:. Orice altceva (javascript:, data:, adrese relative) e refuzat. */
export function safeHref(href: string): string | null {
  const h = href.trim();
  if (/[\s<>"'`\\]/.test(h)) return null;
  if (!/^(https:\/\/|mailto:|tel:)/i.test(h)) return null;
  return esc(h);
}

const SANS = `font-family:${theme.sans};`;
const MONO = `font-family:${theme.mono};`;
const WRAP = "word-break:break-word;overflow-wrap:anywhere;";
const TABLE = 'role="presentation" cellpadding="0" cellspacing="0" border="0"';
const LABEL = `${MONO}font-size:11px;line-height:18px;letter-spacing:0.16em;text-transform:uppercase;color:${theme.muted};`;

// Outlook pe web și noul Outlook pentru Windows (același motor), în modul întunecat, rescriu culorile de FUNDAL:
// negrul nostru #070809 și cardul ajungeau gri #565657, cu textul și chenarele neschimbate (măsurat pe captura
// lui Alin, 12 nov 2026). Regulile de mai jos se potrivesc doar acolo: [data-ogsb] / [data-ogab] sunt atributele
// pe care Outlook le pune când rescrie un fundal, iar x_ e prefixul pe care îl pune claselor. Ele repun culoarea
// și o dublează cu o imagine de fundal plină, pe care Outlook nu o rescrie.
// - Fiecare selector are regula lui: dacă filtrul Outlook aruncă una, celelalte rămân.
// - Nu se pun necondiționat și nu se mută pe element (style=""): Gmail pe iPhone inversează textul, iar un fundal
//   ținut negru cu forța l-ar face de necitit.
// - Butonul alb devine acolo buton cu contur alb (fond de card, text alb): Outlook îi rescrie și fondul (alb → gri)
//   și textul (închis → alb), iar un fond ținut alb sub un text rămas alb ar da un buton gol. Conturul iese la fel
//   oricum ar rescrie Outlook, fără gri.
function owa(target: string, decl: string): string {
  const cut = target.indexOf(" ");
  const cls = cut === -1 ? target : target.slice(0, cut);
  const rest = cut === -1 ? "" : target.slice(cut + 1);
  return [
    `[data-ogsb] .${cls}`,
    `.${cls}[data-ogsb]`,
    `[data-ogab] .${cls}`,
    `.${cls}[data-ogab]`,
    `[class~="x_${cls}"]`,
  ]
    .map((s) => `${s}${rest ? ` ${rest}` : ""}{${decl}}`)
    .join("");
}

function solid(color: string): string {
  return `background-color:${color}!important;background-image:linear-gradient(${color},${color})!important;`;
}

/** `gridUrl` e adresa neescapată: într-un <style> entitățile HTML nu se decodează. O adresă cu alte caractere e sărită. */
function owaStyles(gridUrl: string): string {
  const gridOk = /^https?:\/\/[A-Za-z0-9.:/_-]+$/.test(gridUrl);
  return (
    owa("rv-body", solid(theme.bg)) +
    owa("rv-bg", solid(theme.bg)) +
    // A doua regulă readuce grila peste negrul plin; dacă Outlook o aruncă, rămâne prima (negru, fără grilă).
    (gridOk
      ? owa("rv-bg", `background-image:url('${gridUrl}'),linear-gradient(${theme.bg},${theme.bg})!important;`)
      : "") +
    owa("rv-cardbox", solid(theme.card)) +
    owa("rv-panel", solid(theme.panel)) +
    owa("rv-btn", solid(theme.card) + `border-color:${theme.buttonBg}!important;`) +
    owa("rv-btn a", `color:${theme.title}!important;`) +
    owa("rv-btn span", `color:${theme.title}!important;`)
  );
}

function label(text: string): string {
  return `<div style="${LABEL}padding-bottom:10px;">${esc(text)}</div>`;
}

function link(href: string, text: string, color: string): string {
  const h = safeHref(href);
  return h
    ? `<a href="${h}" target="_blank" style="color:${color};text-decoration:none;">${esc(text)}</a>`
    : esc(text);
}

function renderBlock(b: Block): string {
  switch (b.kind) {
    case "rows": {
      const rows = b.rows
        .map((r, i) => {
          const line = i < b.rows.length - 1 ? `border-bottom:1px solid ${theme.hairline};` : "";
          const value = r.href ? link(r.href, r.value, theme.strong) : esc(r.value);
          return (
            `<tr>` +
            `<td width="34%" valign="top" style="${LABEL}padding:13px 12px 13px 0;${line}">${esc(r.label)}</td>` +
            `<td valign="top" style="${SANS}font-size:15px;line-height:22px;color:${theme.strong};padding:11px 0 13px 0;${line}${WRAP}">${value}</td>` +
            `</tr>`
          );
        })
        .join("");
      return `<table ${TABLE} width="100%" style="table-layout:fixed;border-top:1px solid ${theme.hairline};border-bottom:1px solid ${theme.hairline};">${rows}</table>`;
    }
    case "quote":
      return (
        (b.label ? label(b.label) : "") +
        `<table ${TABLE} width="100%" class="rv-panel" bgcolor="${theme.panel}" style="table-layout:fixed;background-color:${theme.panel};border:1px solid ${theme.border};border-radius:16px;border-collapse:separate;">` +
        `<tr><td style="${SANS}font-size:15px;line-height:25px;color:${theme.strong};padding:18px 20px;${WRAP}">${multiline(b.text)}</td></tr></table>`
      );
    case "steps": {
      const items = b.items
        .map((s, i) => {
          const gap = i < b.items.length - 1 ? "padding-bottom:18px;" : "";
          const nr = String(i + 1).padStart(2, "0");
          return (
            `<tr>` +
            `<td width="44" valign="top" style="${MONO}font-size:12px;line-height:22px;letter-spacing:0.1em;color:${theme.muted};${gap}">${nr}</td>` +
            `<td valign="top" style="${SANS}${gap}${WRAP}">` +
            `<div style="font-size:15px;line-height:22px;font-weight:600;color:${theme.strong};">${esc(s.title)}</div>` +
            (s.text ? `<div style="font-size:14px;line-height:22px;color:${theme.text};padding-top:3px;">${esc(s.text)}</div>` : "") +
            `</td></tr>`
          );
        })
        .join("");
      return `<table ${TABLE} width="100%" style="table-layout:fixed;">${items}</table>`;
    }
    case "list": {
      const items = b.items
        .map(
          (t, i) =>
            `<tr>` +
            `<td width="24" valign="top" style="${SANS}font-size:15px;line-height:23px;color:${theme.faint};${i < b.items.length - 1 ? "padding-bottom:9px;" : ""}">&mdash;</td>` +
            `<td valign="top" style="${SANS}font-size:15px;line-height:23px;color:${theme.text};${i < b.items.length - 1 ? "padding-bottom:9px;" : ""}${WRAP}">${esc(t)}</td>` +
            `</tr>`,
        )
        .join("");
      return (b.label ? label(b.label) : "") + `<table ${TABLE} width="100%" style="table-layout:fixed;">${items}</table>`;
    }
    case "paragraph":
      return `<div style="${SANS}font-size:16px;line-height:26px;color:${theme.text};${WRAP}">${multiline(b.text)}</div>`;
    case "button": {
      const h = safeHref(b.href);
      if (!h) return "";
      const primary = b.variant !== "outline";
      const cell = primary
        ? `class="rv-btn" bgcolor="${theme.buttonBg}" style="background-color:${theme.buttonBg};border:1px solid ${theme.buttonBg};border-radius:999px;"`
        : `style="border:1px solid ${theme.outline};border-radius:999px;"`;
      const color = primary ? theme.buttonText : theme.strong;
      // Spațiile <i> dau butonului înălțime și lățime în Outlook pe Windows, care ignoră padding-ul de pe <a>.
      return (
        `<table ${TABLE} style="border-collapse:separate;"><tr><td align="center" ${cell}>` +
        `<a href="${h}" target="_blank" style="display:inline-block;${MONO}font-size:12px;line-height:16px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${color};text-decoration:none;padding:15px 30px;border-radius:999px;mso-padding-alt:0;">` +
        `<!--[if mso]><i style="mso-font-width:300%;mso-text-raise:22pt" hidden>&nbsp;</i><![endif]-->` +
        `<span style="mso-text-raise:11pt;">${esc(b.label)}&nbsp;&rarr;</span>` +
        `<!--[if mso]><i style="mso-font-width:300%" hidden>&nbsp;&#8203;</i><![endif]-->` +
        `</a></td></tr></table>`
      );
    }
    case "signature":
      return (
        `<div style="${SANS}font-size:15px;line-height:22px;font-weight:600;color:${theme.strong};">${esc(b.name)}</div>` +
        (b.role ? `<div style="${SANS}font-size:13px;line-height:20px;color:${theme.muted};">${esc(b.role)}</div>` : "")
      );
    case "divider":
      return `<div style="border-top:1px solid ${theme.hairline};font-size:0;line-height:0;height:1px;">&nbsp;</div>`;
  }
}

function footerHtml(spec: EmailSpec): string {
  const en = spec.lang === "en";
  const small = `${SANS}font-size:12px;line-height:20px;color:${theme.muted};`;
  const reason = spec.reason
    ? `<div style="${SANS}font-size:12px;line-height:19px;color:${theme.faint};padding-top:14px;${WRAP}">${esc(spec.reason)}</div>`
    : "";
  if (spec.footer === "intern") {
    return `<div style="${small}">${link(company.site, company.siteLabel, theme.text)} &middot; ${esc(company.brand)}</div>${reason}`;
  }
  const who = en
    ? `${company.brand} is the brand of ${company.legalName} &middot; ${company.city}, Romania &middot; VAT ID ${company.cui} &middot; Reg. ${company.regCom}`
    : `${company.brand} este marca firmei ${company.legalName} &middot; ${company.city}, ${company.county} &middot; CUI ${company.cui} &middot; ${company.regCom}`;
  const sep = ` <span style="color:${theme.faint};">&middot;</span> `;
  const links = [
    link(company.tel, en ? company.phoneIntl : company.phoneDisplay, theme.text),
    link(company.whatsapp, "WhatsApp", theme.text),
    link(`mailto:${company.email}`, company.email, theme.text),
    link(company.site, company.siteLabel, theme.text),
  ].join(sep);
  return (
    `<div style="${SANS}font-size:13px;line-height:22px;color:${theme.text};">${links}</div>` +
    `<div style="${small}padding-top:12px;">${who}</div>` +
    reason
  );
}

function blockText(b: Block): string {
  switch (b.kind) {
    case "rows":
      return b.rows.map((r) => `${r.label}: ${r.value}`).join("\n");
    case "quote":
      return (b.label ? `${b.label}:\n` : "") + b.text;
    case "steps":
      return b.items.map((s, i) => `${i + 1}. ${s.title}${s.text ? ` — ${s.text}` : ""}`).join("\n");
    case "list":
      return (b.label ? `${b.label}:\n` : "") + b.items.map((t) => `- ${t}`).join("\n");
    case "paragraph":
      return b.text;
    case "button":
      return safeHref(b.href) ? `${b.label}: ${b.href.trim()}` : "";
    case "signature":
      return b.role ? `${b.name}\n${b.role}` : b.name;
    case "divider":
      return "----";
  }
}

function renderText(spec: EmailSpec): string {
  const en = spec.lang === "en";
  const parts = [
    spec.eyebrow.toUpperCase(),
    spec.title,
    spec.intro ?? "",
    ...spec.blocks.map(blockText),
    "--",
    spec.footer === "client"
      ? [
          en
            ? `${company.brand} is the brand of ${company.legalName}, ${company.city}, Romania. VAT ID ${company.cui}, Reg. ${company.regCom}.`
            : `${company.brand} este marca firmei ${company.legalName}, ${company.city}, ${company.county}. CUI ${company.cui}, ${company.regCom}.`,
          `${en ? company.phoneIntl : company.phoneDisplay} · ${company.email} · ${company.site}`,
        ].join("\n")
      : `${company.siteLabel} · ${company.brand}`,
    spec.reason ?? "",
  ];
  return parts
    .filter((p) => p.trim() !== "")
    .join("\n\n")
    .replace(/ /g, " ");
}

export function renderEmail(spec: EmailSpec): { html: string; text: string } {
  const base = (spec.assetBase ?? theme.assetBase).replace(/\/$/, "");
  const grid = esc(base + theme.grid);
  const logo = esc(base + theme.logo);
  const home = esc(company.site);

  const blocks = spec.blocks
    .map(renderBlock)
    .filter((h) => h !== "")
    .map((h) => `<tr><td style="padding-top:26px;">${h}</td></tr>`)
    .join("");

  // Caracterele invizibile de după preheader opresc aplicația să completeze rândul din listă cu începutul mesajului.
  const preheader =
    `<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:${theme.bg};">` +
    esc(spec.preheader) +
    "&#847;&zwnj;&nbsp;".repeat(60) +
    `</div>`;

  const header =
    `<table ${TABLE}><tr>` +
    `<td width="40" valign="middle"><a href="${home}" target="_blank" style="text-decoration:none;"><img src="${logo}" width="40" height="40" alt="" style="display:block;border:0;outline:none;width:40px;height:40px;"></a></td>` +
    `<td valign="middle" style="${SANS}font-size:12px;line-height:16px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;padding-left:12px;"><a href="${home}" target="_blank" style="color:${theme.strong};text-decoration:none;">REVERB.RO</a></td>` +
    `</tr></table>`;

  const card =
    `<table ${TABLE} width="100%" class="rv-cardbox" bgcolor="${theme.card}" style="background-color:${theme.card};border:1px solid ${theme.border};border-radius:24px;border-collapse:separate;">` +
    `<tr><td class="rv-card" style="padding:38px 34px 36px 34px;">` +
    `<table ${TABLE} width="100%" style="table-layout:fixed;">` +
    `<tr><td style="${LABEL}"><span style="font-size:8px;line-height:18px;color:${theme.title};vertical-align:middle;">&#9679;</span>&nbsp;&nbsp;${esc(spec.eyebrow)}</td></tr>` +
    `<tr><td class="rv-title" style="${SANS}font-size:28px;line-height:36px;font-weight:500;letter-spacing:-0.02em;color:${theme.title};padding-top:14px;${WRAP}">${esc(spec.title)}</td></tr>` +
    (spec.intro
      ? `<tr><td style="${SANS}font-size:16px;line-height:26px;color:${theme.text};padding-top:14px;${WRAP}">${multiline(spec.intro)}</td></tr>`
      : "") +
    blocks +
    `</table></td></tr></table>`;

  const html =
    `<!DOCTYPE html>` +
    `<html lang="${spec.lang}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">` +
    `<head>` +
    `<meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width, initial-scale=1">` +
    `<meta http-equiv="X-UA-Compatible" content="IE=edge">` +
    `<meta name="x-apple-disable-message-reformatting">` +
    `<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">` +
    `<meta name="color-scheme" content="dark">` +
    `<meta name="supported-color-schemes" content="dark">` +
    `<title>${esc(spec.title)}</title>` +
    `<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->` +
    `<style>` +
    `:root{color-scheme:dark;supported-color-schemes:dark;}` +
    `body{margin:0;padding:0;width:100%!important;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}` +
    `table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}` +
    `img{-ms-interpolation-mode:bicubic;}` +
    `a{text-decoration:none;}` +
    `@media only screen and (max-width:620px){` +
    `.rv-wrap{padding-left:14px!important;padding-right:14px!important;}` +
    `.rv-card{padding:30px 22px 28px 22px!important;}` +
    `.rv-title{font-size:24px!important;line-height:31px!important;}` +
    `}` +
    owaStyles(base + theme.grid) +
    `</style>` +
    `</head>` +
    `<body class="rv-body" style="margin:0;padding:0;background-color:${theme.bg};">` +
    `<!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" src="${grid}" color="${theme.bg}"/></v:background><![endif]-->` +
    preheader +
    `<table ${TABLE} width="100%" class="rv-bg" bgcolor="${theme.bg}" background="${grid}" style="background-color:${theme.bg};background-image:url('${grid}');background-repeat:repeat;background-position:center top;">` +
    `<tr><td align="center" class="rv-wrap" style="padding:0 20px 48px 20px;">` +
    `<!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->` +
    `<table ${TABLE} width="100%" style="max-width:600px;margin:0 auto;">` +
    `<tr><td style="padding:34px 6px 22px 6px;">${header}</td></tr>` +
    `<tr><td>${card}</td></tr>` +
    `<tr><td style="padding:26px 6px 0 6px;">${footerHtml(spec)}</td></tr>` +
    `</table>` +
    `<!--[if mso]></td></tr></table><![endif]-->` +
    `</td></tr></table>` +
    `</body></html>`;

  return { html, text: renderText(spec) };
}
