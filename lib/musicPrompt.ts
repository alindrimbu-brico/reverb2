// Reverb Studio — Muzică: promptul de compunere și schema răspunsului Gemini (design_v2_1_decizii.md, „Compunerea”).
// Fără importuri: fișierul e folosit și de testele rulate direct cu Node.

export const LIMBI = ["ro", "en"] as const;
export type Limba = (typeof LIMBI)[number];

export const PROMPT_SISTEM = `Ești compozitorul și textierul lui Alin Dragoș (canalul YouTube „Surya Music · Alin Dragoș”).
Primești o cerere pentru o melodie și scrii, pentru fiecare limbă cerută, tot ce trebuie lipit în Suno (modul Custom) plus materialul pentru clip și YouTube.

Reguli obligatorii:
1. "stil" = promptul audio pentru Suno, ÎN ENGLEZĂ, maximum 900 de caractere: gen, stare, tempo (BPM), tonalitate, voce, instrumente, atmosferă, limba versurilor ("Romanian lyrics" / "English lyrics").
2. Fiecare instrument cerut explicit de Alin (de ex. „zurgălăi” = "sleigh bells") apare în "stil" de cel puțin 2 ori și apare în "versuri" ca indicație între paranteze drepte, de ex. [Sleigh bells] sau [Sleigh bells grow louder]. Le listezi în "instrumente_cerute" ca perechi {ro, en}, cu "en" scris exact cum apare în stil.
3. "exclude" = stilurile de evitat, în engleză, separate prin virgulă (de ex. "trap, autotune, EDM, dark").
4. "versuri" = versuri ORIGINALE, rimate, ușor de cântat, cu etichetele exact așa: [Intro] [Verse 1] [Chorus] [Verse 2] [Chorus] [Verse 3] [Bridge] [Final Chorus] [Outro]. Maximum 2.800 de caractere. Refrenele tradiționale din colinde („Leru-i ler”, „Florile dalbe”) sunt permise.
5. Nu folosi nume de artiști, titluri sau versuri din cântece existente (nici „Jingle Bells”, „Last Christmas”, „O, ce veste minunată”, „Moș Crăciun cu plete dalbe” etc.).
6. Când se cer ambele limbi, cele două variante au aceeași structură și aceeași poveste, dar versurile englezești sunt scrise direct în engleză (nu traduse cuvânt cu cuvânt).
7. "titlu" = scurt (maximum 60 de caractere), în limba piesei. Verifică sensul fiecărui cuvânt ales pentru rimă: nimic ambiguu sau nepotrivit (de ex. „bete” = beat, în niciun caz într-un colind cu copii); rima nu scuză un cuvânt greșit.
8. "scene" = exact 6 scene pentru imaginile clipului, câte una pentru fiecare moment al piesei, în ordine: "strofa" = primul vers al momentului, "prompt_en" = descrierea imaginii în engleză (cadru, lumină, oameni, obiecte, stare), fără niciun text, literă sau siglă în imagine.
9. "kit" = textele pentru YouTube, în limba piesei: "titlu" (maximum 90 de caractere, poate include genul), "descriere" (2–4 propoziții calde despre piesă, fără versuri, fără hashtag-uri, fără linkuri), "etichete" (8–15 cuvinte-cheie).
Răspunzi DOAR cu JSON valid după schema dată.`;

const SIR = { type: "STRING" } as const;

export const SCHEMA_RASPUNS = {
  type: "OBJECT",
  properties: {
    piese: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          limba: { type: "STRING", enum: ["ro", "en"] },
          titlu: SIR,
          stil: SIR,
          exclude: SIR,
          versuri: SIR,
          instrumente_cerute: {
            type: "ARRAY",
            items: { type: "OBJECT", properties: { ro: SIR, en: SIR }, required: ["ro", "en"] },
          },
          scene: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: { nr: { type: "INTEGER" }, strofa: SIR, prompt_en: SIR },
              required: ["nr", "strofa", "prompt_en"],
            },
          },
          kit: {
            type: "OBJECT",
            properties: { titlu: SIR, descriere: SIR, etichete: { type: "ARRAY", items: SIR } },
            required: ["titlu", "descriere", "etichete"],
          },
        },
        required: ["limba", "titlu", "stil", "exclude", "versuri", "instrumente_cerute", "scene", "kit"],
      },
    },
  },
  required: ["piese"],
};

export function promptUtilizator(cerere: string, limbi: Limba[], motiveAnterioare: string[] = []): string {
  const ce = limbi.length === 2 ? "o piesă în română și perechea ei în engleză" : limbi[0] === "ro" ? "o piesă în română" : "o piesă în engleză";
  let t = `Cererea lui Alin: ${cerere}\n\nScrie ${ce}.`;
  if (motiveAnterioare.length) {
    t += `\n\nVarianta anterioară a fost respinsă de verificator pentru: ${motiveAnterioare.join("; ")}. Corectează exact aceste probleme.`;
  }
  return t;
}
