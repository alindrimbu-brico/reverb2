// Teste pentru lib/musicLint.ts. Rulare: node --test scripts/test_music_lint.mjs   (Node 24 citește .ts direct)
import { test } from "node:test";
import assert from "node:assert/strict";
import { lintPiesa } from "../lib/musicLint.ts";

const buna = () => ({
  limba: "ro",
  titlu: "Zurgălăi pe uliță",
  stil: "Romanian Christmas carol, bright sleigh bells throughout, sleigh bells in chorus, accordion, 108 BPM, Romanian lyrics",
  exclude: "trap, autotune",
  versuri: "[Intro]\n[Sleigh bells]\n[Verse 1]\nNinge peste sat\n[Chorus]\nZurgălăi, zurgălăi\nLeru-i ler, și iar leru-i ler!",
  instrumente_cerute: [{ ro: "zurgălăi", en: "sleigh bells" }],
  scene: [1, 2, 3, 4, 5, 6].map((nr) => ({ nr, strofa: "x", prompt_en: "snowy village" })),
  kit: { titlu: "Zurgălăi pe uliță — colind", descriere: "Un colind vesel.", etichete: ["colind"] },
});

test("piesa bună trece", () => assert.deepEqual(lintPiesa(buna()), []));

test("instrumentul lipsă din stil", () => {
  const p = buna();
  p.stil = "Romanian Christmas carol, accordion, sleigh bells";
  assert.ok(lintPiesa(p).some((m) => m.includes("apare de 1 ori")));
});

test("instrumentul lipsă din indicații", () => {
  const p = buna();
  p.versuri = p.versuri.replace("[Sleigh bells]\n", "");
  assert.ok(lintPiesa(p).some((m) => m.includes("nu apare ca indicație")));
});

test("fără [Chorus]", () => {
  const p = buna();
  p.versuri = p.versuri.replace("[Chorus]", "[Refren]");
  assert.ok(lintPiesa(p).some((m) => m.includes("[Chorus]")));
});

test("stil de 1.001 caractere", () => {
  const p = buna();
  p.stil = "sleigh bells, sleigh bells, " + "a".repeat(1001);
  assert.ok(lintPiesa(p).some((m) => m.includes("maximum 1.000")));
});

test("nume de artist interzis", () => {
  const p = buna();
  p.stil += ", in the style of Mariah Carey";
  assert.ok(lintPiesa(p).some((m) => m.includes("artist")));
});

test("titlu de cântec existent în versuri", () => {
  const p = buna();
  p.versuri += "\nLast Christmas I gave you";
  assert.ok(lintPiesa(p).some((m) => m.includes("cântec existent")));
});

test("refrenul tradițional e permis; „inna” nu prinde „cinna”", () => {
  const p = buna();
  p.versuri += "\nFlorile dalbe, cinnamon";
  assert.deepEqual(lintPiesa(p), []);
});

test("prea puține scene", () => {
  const p = buna();
  p.scene = p.scene.slice(0, 2);
  assert.ok(lintPiesa(p).some((m) => m.includes("scene")));
});
