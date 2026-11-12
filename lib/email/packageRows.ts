// Rândurile cu „ce ai ales” din confirmarea către client: numele pachetului, prețul și termenul, toate din registru.
// Nimic din ce a scris omul în formular nu ajunge aici: se pornește doar de la id-ul pachetului.

import { getPackage, priceLei, serviceOptions, VAT_LABEL } from "../packages";
import { enDelivery, enPrice, packagesEn, serviceOptionsEn, VAT_LABEL_EN } from "../packagesEn";

export function packageRows(serviceId: string, lang: "ro" | "en"): { label: string; value: string }[] {
  const en = lang === "en";
  const p = getPackage(serviceId);
  if (!p) {
    // Opțiunile care nu sunt pachete (consultanță, căutare AI) au doar un nume.
    const other = (en ? serviceOptionsEn() : serviceOptions()).find((o) => o.value === serviceId)?.label;
    return other ? [{ label: en ? "You chose" : "Ai ales", value: other }] : [];
  }
  return en
    ? [
        { label: "You chose", value: packagesEn[p.id].shortName },
        { label: "In short", value: packagesEn[p.id].tagline },
        { label: "Price", value: `${enPrice(p.id)} ${VAT_LABEL_EN} · ${priceLei(p.price, "en")}` },
        { label: "Delivery", value: enDelivery(p.id) },
      ]
    : [
        { label: "Ai ales", value: p.shortName },
        { label: "Pe scurt", value: p.tagline },
        { label: "Preț", value: `${p.price} ${VAT_LABEL} · ${priceLei(p.price)}` },
        { label: "Termen", value: p.delivery },
      ];
}
