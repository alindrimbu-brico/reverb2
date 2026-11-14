// Prețuri de listă ale altor firme, pentru caseta „Cât plătești în total” de pe /pachete și /en/packages.
// Sunt exemple citite din paginile publice ale firmelor, la data din READ_ON. Nu sunt prețurile noastre.
// La o recitire: schimbi cifrele și READ_ON aici, într-un singur loc. O cifră care nu mai poate fi confirmată se scoate.
// scripts/check-seo.mjs avertizează când READ_ON e mai veche de 90 de zile.
// Fiecare propoziție e un singur șir, cu numerele în aceeași ordine în ambele limbi (selectorul de limbă le ține ca șabloane).

import { EUR_RON, VAT_RATE } from "@/lib/packages";

/** Data citirii, ISO. Textul afișat se compune din ea. */
export const READ_ON = "2026-11-13";

const hosting = {
  /** hostinger.com/ro/gazduire-woocommerce: cel mai ieftin plan, plătit pe 48 de luni; apoi prețul de reînnoire. */
  months: 48,
  promoMonthlyEur: 2.99,
  renewalMonthlyEur: 16.99,
  url: "https://www.hostinger.com/ro/gazduire-woocommerce",
  host: "hostinger.com",
};
const invoicing = {
  /** fgo.ro/abonamente: GO Premium (cel cu legătura WooCommerce), fără TVA. */
  monthlyLei: 57,
  yearlyLei: 570,
  url: "https://www.fgo.ro/abonamente/",
  host: "fgo.ro",
};
const card = {
  /** netopia-payments.com: tarif standard de la 1 august 2026, carduri de debit / credit. */
  percent: 1.19,
  fixedLei: 0.3,
  exampleOrderLei: 200,
  url: "https://netopia-payments.com/servicii/plati-online-cu-cardul/",
  host: "netopia-payments.com",
};
const courier = {
  /** Oferta comercială Cargus 2026 (clienți cu contract), „Standard”, coloana „National”. */
  firstKgLei: 27.83,
  extraKgLei: 2.3,
  codLei: 8.47,
  url: "https://www.cargus.ro/cargus-oferta-comerciala",
  host: "cargus.ro",
};

type Lang = "ro" | "en";

const dec = (n: number, lang: Lang) => n.toFixed(2).replace(".", lang === "ro" ? "," : ".");
const round10 = (n: number) => Math.round(n / 10) * 10;
const round5 = (n: number) => Math.round(n / 5) * 5;

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** „13.11.2026” / „13 November 2026”. În română data e scrisă cu cifre, ca să rămână un singur număr-șablon în
 *  dicționarele celor 22 de limbi: la o recitire se schimbă data, nu și cheia de traducere. */
export function readOnText(lang: Lang = "ro"): string {
  const [y, m, d] = READ_ON.split("-");
  return lang === "ro" ? `${d}.${m}.${y}` : `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
}

export type CostRow = { text: string; url: string; host: string };

/** Cele patru rânduri cu cifre, în ordinea: găzduire, facturare, card, curier. */
export function costRows(lang: Lang = "ro"): CostRow[] {
  const upfrontEur = hosting.promoMonthlyEur * hosting.months;
  const upfrontLei = round10(upfrontEur * EUR_RON);
  const renewalLei = round10(hosting.renewalMonthlyEur * EUR_RON);
  const invoicingVat = Math.round(invoicing.monthlyLei * (1 + VAT_RATE));
  const cardExample = (card.exampleOrderLei * card.percent) / 100 + card.fixedLei;

  const ro: string[] = [
    `Găzduirea: la Hostinger, cel mai ieftin plan pentru magazine se plătește pe ${hosting.months} de luni dinainte: ${dec(upfrontEur, "ro")} € o dată (aproximativ ${upfrontLei} de lei), adică ${dec(hosting.promoMonthlyEur, "ro")} € pe lună, preț de promoție. După aceea costă ${dec(hosting.renewalMonthlyEur, "ro")} € pe lună (aproximativ ${renewalLei} de lei).`,
    `Programul de facturare: la FGO, abonamentul care se leagă de magazin (GO Premium) costă ${invoicing.monthlyLei} de lei pe lună plus TVA, adică aproximativ ${invoicingVat} de lei, sau ${invoicing.yearlyLei} de lei pe an plus TVA.`,
    `Plata cu cardul: la NETOPIA, ${dec(card.percent, "ro")}% din sumă plus ${dec(card.fixedLei, "ro")} lei la fiecare plată. La o comandă de ${card.exampleOrderLei} de lei, asta înseamnă ${dec(cardExample, "ro")} lei.`,
    `Curierul: în lista de prețuri Cargus pentru firme cu contract, un colet de până la 1 kg trimis în altă localitate costă ${dec(courier.firstKgLei, "ro")} lei, iar fiecare kilogram în plus ${dec(courier.extraKgLei, "ro")} lei. Dacă clientul plătește la livrare, se adaugă ${dec(courier.codLei, "ro")} lei. Costul curierului îl poți trece la client, ca taxă de livrare.`,
  ];
  const en: string[] = [
    `Hosting: at Hostinger, the cheapest plan for stores is paid ${hosting.months} months in advance: €${dec(upfrontEur, "en")} at once (about ${upfrontLei} lei), that is €${dec(hosting.promoMonthlyEur, "en")} a month, a promotional price. After that it costs €${dec(hosting.renewalMonthlyEur, "en")} a month (about ${renewalLei} lei).`,
    `Invoicing software: at FGO, the subscription that connects to the store (GO Premium) costs ${invoicing.monthlyLei} lei a month plus VAT, about ${invoicingVat} lei, or ${invoicing.yearlyLei} lei a year plus VAT.`,
    `Card payments: at NETOPIA, ${dec(card.percent, "en")}% of the amount plus ${dec(card.fixedLei, "en")} lei for each payment. On an order of ${card.exampleOrderLei} lei, that is ${dec(cardExample, "en")} lei.`,
    `Courier: in the Cargus price list for companies with a contract, a parcel of up to 1 kg sent to another town costs ${dec(courier.firstKgLei, "en")} lei, and each extra kilogram ${dec(courier.extraKgLei, "en")} lei. If the customer pays on delivery, ${dec(courier.codLei, "en")} lei is added. You can pass the courier cost on to the customer as a delivery fee.`,
  ];
  const sources = [hosting, invoicing, card, courier];
  return (lang === "ro" ? ro : en).map((text, i) => ({ text, url: sources[i].url, host: sources[i].host }));
}

/** Rândul de sub titlu: ale cui sunt prețurile și când au fost citite. */
export function costLead(lang: Lang = "ro"): string {
  return lang === "ro"
    ? `Sunt prețurile de listă ale acestor firme, nu ale noastre, citite pe ${readOnText("ro")}. Se pot schimba, iar contractul tău poate avea alt preț. Îți spunem dinainte cu ce firme putem lega magazinul.`
    : `These are the list prices of these companies, not ours, read on ${readOnText("en")}. They can change, and your contract may have a different price. We tell you beforehand which companies we can connect the store to.`;
}

export function costVatNote(lang: Lang = "ro"): string {
  return lang === "ro"
    ? "Doar FGO scrie clar că prețul este fără TVA; la celelalte trei nu e clar dacă se mai adaugă TVA."
    : "Only FGO states clearly that its price excludes VAT; for the other three it is not clear whether VAT is added.";
}

/** „Pe scurt”: costul lunar fără nicio vânzare (găzduire + program de facturare, cu TVA), rotunjit la 5 lei.
 *  Marginea de jos: prețul găzduirii are deja TVA și FGO se plătește anual; cea de sus: TVA se adaugă la găzduire și FGO se plătește lunar. */
export function costSummary(lang: Lang = "ro"): string {
  const vat = 1 + VAT_RATE;
  const invLow = (invoicing.yearlyLei * vat) / 12;
  const invHigh = invoicing.monthlyLei * vat;
  const promo = hosting.promoMonthlyEur * EUR_RON;
  const renewal = hosting.renewalMonthlyEur * EUR_RON;
  const a = round5(promo + invLow);
  const b = round5(promo * vat + invHigh);
  const c = round5(renewal + invLow);
  const d = round5(renewal * vat + invHigh);
  return lang === "ro"
    ? `Pe scurt, dacă nu vinzi nimic: între ${a} și ${b} de lei pe lună în primii patru ani (găzduirea și programul de facturare, cu TVA), apoi între ${c} și ${d} de lei pe lună, plus domeniul. Sumele sunt aproximative.`
    : `In short, if you sell nothing: between ${a} and ${b} lei a month for the first four years (hosting and invoicing software, with VAT), then between ${c} and ${d} lei a month, plus the domain. The amounts are approximate.`;
}
