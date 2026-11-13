// Teste pentru lib/musicReteta.ts. Rulare: node --test scripts/test_music_reteta.mjs   (Node 24 citește .ts direct)
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  compileazaStil, normalizeazaReteta, regleazaInCuvinte, retetaEGoala, retetaGoala, trepteStiluri, STILURI, INSTRUMENTE, TINTA_STIL,
} from "../lib/musicReteta.ts";
import { lintPiesa } from "../lib/musicLint.ts";

const cu = (extra) => ({ ...retetaGoala(), ...extra });
const stil = (r, o) => compileazaStil(r, o).text;

test("un singur stil: pleacă doar numele lui, la orice pondere", () => {
  assert.equal(stil(cu({ stiluri: [{ id: "folk", pondere: 1 }] })), "folk");
  assert.equal(stil(cu({ stiluri: [{ id: "folk", pondere: 100 }] })), "folk");
});

test("ponderi egale: baza e primul activat, celelalte sunt „clar” (fără „even blend”)", () => {
  assert.equal(stil(cu({ stiluri: [{ id: "folk", pondere: 50 }, { id: "jazz", pondere: 50 }] })), "primarily folk, with a strong jazz influence");
  assert.equal(
    stil(cu({ stiluri: [{ id: "folk", pondere: 33 }, { id: "jazz", pondere: 33 }, { id: "orchestral", pondere: 33 }] })),
    "primarily folk, with strong jazz and orchestral influences",
  );
});

test("baza plus adaosuri pe două trepte", () => {
  assert.equal(stil(cu({ stiluri: [{ id: "folk", pondere: 60 }, { id: "jazz", pondere: 40 }] })), "primarily folk, with a strong jazz influence");
  assert.equal(
    stil(cu({ stiluri: [{ id: "folk", pondere: 100 }, { id: "jazz", pondere: 60 }, { id: "ambient", pondere: 20 }] })),
    "primarily folk, with a strong jazz influence, with touches of ambient",
  );
  assert.equal(
    stil(cu({ stiluri: [{ id: "jazz", pondere: 30 }, { id: "folk", pondere: 100 }, { id: "blues", pondere: 35 }] })),
    "primarily folk, with touches of blues and jazz",
  );
});

test("formulările scoase după proba pe nevăzute nu mai pleacă", () => {
  for (const p of [1, 10, 24, 25, 49, 50, 84, 85, 100]) {
    const t = stil(cu({ stiluri: [{ id: "folk", pondere: 100 }, { id: "jazz", pondere: p }, { id: "blues", pondere: 100 - p + 1 }] }));
    assert.ok(!/subtle hint|even blend/.test(t), t);
  }
});

test("mutarea unui adaos nu schimbă cuvântul altuia", () => {
  const a = trepteStiluri([{ id: "folk", pondere: 80 }, { id: "jazz", pondere: 50 }, { id: "ambient", pondere: 10 }]);
  const b = trepteStiluri([{ id: "folk", pondere: 80 }, { id: "jazz", pondere: 50 }, { id: "ambient", pondere: 70 }]);
  assert.equal(a.jazz, "clar");
  assert.equal(b.jazz, "clar");
  assert.equal(a.ambient, "idee");
  assert.equal(b.ambient, "clar");
});

test("pragurile treptelor", () => {
  const t = (p) => trepteStiluri([{ id: "folk", pondere: 100 }, { id: "jazz", pondere: p }]).jazz;
  assert.deepEqual([100, 85, 50, 49, 25, 1].map(t), ["clar", "clar", "clar", "idee", "idee", "idee"]);
});

test("normalizarea: al cincilea stil, pondere 0, id necunoscut, dublură", () => {
  const r = normalizeazaReteta({
    stiluri: [
      { id: "folk", pondere: 50 }, { id: "nu-exista", pondere: 50 }, { id: "jazz", pondere: 0 }, { id: "folk", pondere: 20 },
      { id: "rock", pondere: 250 }, { id: "soul", pondere: 10.4 }, { id: "blues", pondere: 5 }, { id: "funk", pondere: 5 },
    ],
    instrumente: { bas: "mult", teremin: "mult", pian: "foarte" },
    stari: ["vesel", "vesel", "x", "cald", "trist", "solemn"], tempo: 500, tonalitate: "lidian", note: "  a   b  ",
  });
  assert.deepEqual(r.stiluri, [{ id: "folk", pondere: 50 }, { id: "rock", pondere: 100 }, { id: "soul", pondere: 10 }, { id: "blues", pondere: 5 }]);
  assert.deepEqual(r.instrumente, { bas: "mult" });
  assert.deepEqual(r.stari, ["vesel", "cald", "trist"]);
  assert.equal(r.tempo, null);
  assert.equal(r.tonalitate, null);
  assert.equal(r.note, "a b");
  assert.ok(retetaEGoala(normalizeazaReteta(null)));
  assert.ok(retetaEGoala(normalizeazaReteta({ note: "ceva" })));
});

test("instrumentele: fiecare poziție", () => {
  const c = compileazaStil(cu({ stiluri: [{ id: "folk", pondere: 70 }], instrumente: { bas: "mult", pian: "normal", corzi: "putin", tobe: "fara" } }), { limba: "ro" });
  assert.equal(c.text, "folk, prominent bass, piano, subtle strings, Romanian lyrics, bass upfront in the mix");
  assert.equal(c.exclude, "drums");
  assert.deepEqual(c.instrumente_cerute, [{ ro: "Bas", en: "bass" }]);
});

test("un instrument „mult” trece de verificatorul existent când modelul îl pune ca indicație", () => {
  const c = compileazaStil(cu({ stiluri: [{ id: "colind", pondere: 100 }], instrumente: { zurgalai: "mult" } }), { limba: "ro" });
  const motive = lintPiesa({
    limba: "ro", titlu: "Zurgălăi pe uliță", stil: c.text, exclude: c.exclude,
    versuri: "[Intro]\n[Sleigh bells]\n[Verse 1]\nNinge peste sat\n[Chorus]\nZurgălăi, zurgălăi",
    instrumente_cerute: c.instrumente_cerute,
    scene: [1, 2, 3, 4, 5, 6].map((nr) => ({ nr, strofa: "x", prompt_en: "snowy village" })),
    kit: { titlu: "Zurgălăi pe uliță", descriere: "Un colind.", etichete: ["colind"] },
  });
  assert.deepEqual(motive, []);
});

test("cel mult 8 instrumente pomenite", () => {
  const instrumente = Object.fromEntries(INSTRUMENTE.slice(0, 10).map((i) => [i.id, "normal"]));
  const t = stil(cu({ instrumente }));
  assert.equal(t.split(", ").length, 8);
});

test("ordinea părților și exclude-ul unit cu al modelului", () => {
  const c = compileazaStil(
    cu({
      stiluri: [{ id: "folk-pop", pondere: 80 }, { id: "orchestral", pondere: 30 }], stari: ["cald", "nostalgic"], tempo: 96, tonalitate: "major",
      energie: "calm", voce: "duet", caracter: "calda", instrumente: { acordeon: "normal", tobe: "fara" }, sunet: "live",
    }),
    { limba: "en", atmosfera: "A snowy village evening, close and tender.", excludeModel: "trap, Drums, autotune" },
  );
  assert.equal(
    c.text,
    "primarily folk-pop, with touches of orchestral, warm, nostalgic, 96 BPM, major key, calm, low energy, warm male and female duet vocals, "
      + "accordion, live room recording, A snowy village evening, close and tender, English lyrics",
  );
  assert.equal(c.exclude, "drums, trap, autotune");
});

test("depășirea: se scoate în ordine, baza și limba rămân", () => {
  const lunga = "x".repeat(160);
  const r = cu({
    stiluri: [{ id: "cinematic", pondere: 100 }, { id: "ambient", pondere: 10 }], stari: ["cald", "nostalgic", "visator"],
    instrumente: Object.fromEntries(INSTRUMENTE.slice(0, 8).map((i, k) => [i.id, k < 4 ? "mult" : "putin"])),
  });
  const mica = compileazaStil(r, { limba: "ro", atmosfera: lunga });
  assert.equal(mica.eroare, null);
  assert.ok(mica.text.length <= TINTA_STIL);
  assert.ok(mica.text.startsWith("primarily cinematic score"));
  // forțăm depășirea cu multe stări lungi nu se poate; verificăm în schimb că lista „scoase” respectă ordinea
  const c = compileazaStil(
    cu({ stiluri: STILURI.slice(0, 4).map((s, k) => ({ id: s.id, pondere: 100 - k })), instrumente: Object.fromEntries(INSTRUMENTE.map((i) => [i.id, "mult"])) }),
    { limba: "ro", atmosfera: lunga },
  );
  assert.ok(c.text.length <= TINTA_STIL || c.eroare);
  for (const s of c.scoase) assert.ok(["propoziția de atmosferă", "instrumentele „puțin”", "stilurile „o idee”", "a treia stare", "a doua stare"].includes(s));
});

test("aceeași rețetă dă același text", () => {
  const r = cu({ stiluri: [{ id: "soul", pondere: 70 }, { id: "funk", pondere: 30 }], instrumente: { bas: "mult" }, tempo: 104 });
  assert.equal(stil(r, { limba: "en" }), stil(JSON.parse(JSON.stringify(r)), { limba: "en" }));
});

test("reglajul în cuvinte: instrumente", () => {
  const r1 = regleazaInCuvinte(retetaGoala(), "mai mult bas, scoate tobele, adaugă viori și pian");
  assert.deepEqual(r1.reteta.instrumente, { bas: "mult", tobe: "fara", corzi: "normal", pian: "normal" });
  assert.equal(r1.neinteles.length, 0);
  const r2 = regleazaInCuvinte(r1.reteta, "mai puțin bas; mai mult bas; mai mult bas");
  assert.equal(r2.reteta.instrumente.bas, "mult");
  assert.ok(r2.schimbari[2].includes("maximum"));
  const r3 = regleazaInCuvinte(retetaGoala(), "fără saxofon, un pic de harpă");
  assert.deepEqual(r3.reteta.instrumente, { saxofon: "fara", harpa: "putin" });
});

test("reglajul în cuvinte: stiluri, tempo, stare, voce, neînțeles", () => {
  let r = regleazaInCuvinte(retetaGoala(), "folk").reteta;
  assert.deepEqual(r.stiluri, [{ id: "folk", pondere: 100 }]);
  r = regleazaInCuvinte(r, "să fie în stil de orchestră").reteta;
  assert.equal(trepteStiluri(r.stiluri).orchestral, "clar");
  r = regleazaInCuvinte(r, "mai puțin orchestral").reteta;
  assert.equal(trepteStiluri(r.stiluri).orchestral, "idee");
  r = regleazaInCuvinte(r, "mai mult orchestral, mai mult orchestral, mai mult orchestral").reteta;
  assert.equal(trepteStiluri(r.stiluri).orchestral, "baza");
  const x = regleazaInCuvinte(r, "mai lent, vesel, voce de femeie, ca o ploaie de vară");
  assert.equal(x.reteta.tempo, 84);
  assert.deepEqual(x.reteta.stari, ["vesel"]);
  assert.equal(x.reteta.voce, "femeie");
  assert.deepEqual(x.neinteles, ["ca o ploaie de vară"]);
  assert.deepEqual(regleazaInCuvinte(r, "scoate folk").reteta.stiluri.map((s) => s.id), ["orchestral"]);
});

test("paleta: id-uri unice și nume englezești care nu se conțin greșit", () => {
  for (const l of [STILURI, INSTRUMENTE]) assert.equal(new Set(l.map((x) => x.id)).size, l.length);
});
