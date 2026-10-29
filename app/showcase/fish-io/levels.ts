// Nivelurile jocului: fiecare are o sarcină principală (obligatorie) și două bonus. Stele: 1 pentru principală + 1 pe bonus.
// Logica de aici nu desenează nimic, ca să poată fi testată separat de joc.

import { Kind, KIND_LABEL, KIND_RADIUS, photosOfKind } from "./animals";

export type Task =
  | { type: "eat"; kind: Kind | "orice"; count: number } // mănâncă N animale (de un fel sau oricare)
  | { type: "avoid"; kind: Kind } // nu atinge niciun animal de felul ăsta (nici nu-l mânca)
  | { type: "time"; seconds: number } // termină sarcina principală în cel mult N secunde
  | { type: "nohit" }; // nu te atinge niciun animal mai mare

export type EatTask = Extract<Task, { type: "eat" }>;

export interface LevelDef {
  id: number;
  title: string;
  main: EatTask;
  bonus: [Task, Task];
  // Ce animale apar în arenă: câte din fiecare fel.
  spawn: { kind: Kind; n: number }[];
}

export const LEVELS: LevelDef[] = [
  {
    id: 1,
    title: "Primii pași",
    main: { type: "eat", kind: "orice", count: 8 },
    bonus: [{ type: "time", seconds: 60 }, { type: "nohit" }],
    spawn: [
      { kind: "pasare", n: 10 },
      { kind: "veverita", n: 4 },
      { kind: "mamifer", n: 3 },
      { kind: "capra", n: 2 },
    ],
  },
  {
    id: 2,
    title: "Vânătoare de păsări",
    main: { type: "eat", kind: "pasare", count: 6 },
    bonus: [{ type: "avoid", kind: "sarpe" }, { type: "time", seconds: 45 }],
    spawn: [
      { kind: "pasare", n: 16 },
      { kind: "sarpe", n: 3 },
      { kind: "veverita", n: 3 },
      { kind: "capra", n: 3 },
      { kind: "pisica", n: 2 },
    ],
  },
  {
    id: 3,
    title: "Veverițe și pisici",
    main: { type: "eat", kind: "veverita", count: 5 },
    bonus: [{ type: "avoid", kind: "pisica" }, { type: "time", seconds: 40 }],
    spawn: [
      { kind: "veverita", n: 14 },
      { kind: "pisica", n: 5 },
      { kind: "pasare", n: 6 },
      { kind: "capra", n: 3 },
      { kind: "sarpe", n: 1 },
    ],
  },
];

// Felul animalului interzis în nivel (cel din sarcina „nu atinge”), dacă există.
export function forbiddenKind(level: LevelDef): Kind | null {
  const t = level.bonus.find((b): b is Extract<Task, { type: "avoid" }> => b.type === "avoid");
  return t ? t.kind : null;
}

export function taskText(task: Task): string {
  switch (task.type) {
    case "eat":
      return task.kind === "orice" ? `Mănâncă ${task.count} animale` : `Mănâncă ${task.count} ${KIND_LABEL[task.kind].plural}`;
    case "avoid":
      return `Nu atinge ${KIND_LABEL[task.kind].none}`;
    case "time":
      return `Termină în ${task.seconds} de secunde`;
    case "nohit":
      return "Fără nicio atingere";
  }
}

// Cât a făcut jucătorul în nivelul curent.
export interface LevelRun {
  eaten: number;
  avoidBroken: boolean;
  hit: boolean;
  startedAt: number; // ms, ca la performance.now()
}

export interface TaskResult {
  text: string;
  ok: boolean;
  main: boolean;
}

// Rezultatul final al nivelului, când sarcina principală e gata: câte stele și ce sarcini au reușit.
export function evaluateLevel(level: LevelDef, run: LevelRun, elapsedSeconds: number): { stars: number; tasks: TaskResult[] } {
  const tasks: TaskResult[] = [{ text: taskText(level.main), ok: true, main: true }];
  level.bonus.forEach(b => {
    let ok = false;
    if (b.type === "time") ok = elapsedSeconds <= b.seconds;
    else if (b.type === "avoid") ok = !run.avoidBroken;
    else if (b.type === "nohit") ok = !run.hit;
    tasks.push({ text: taskText(b), ok, main: false });
  });
  return { stars: tasks.filter(t => t.ok).length, tasks };
}

export interface PlacedEnemy {
  kind: Kind;
  photo: number; // index 0-149 al pozei
  r: number;
  x: number;
  y: number;
  role: "target" | "forbidden" | null;
}

// Așază animalele nivelului în lume, la cel puțin `safeDistance` de jucător.
export function placeEnemies(
  level: LevelDef,
  player: { x: number; y: number },
  worldSize: number,
  safeDistance: number,
  rand: () => number = Math.random
): PlacedEnemy[] {
  const forbidden = forbiddenKind(level);
  const out: PlacedEnemy[] = [];
  level.spawn.forEach(({ kind, n }) => {
    const photos = photosOfKind(kind);
    const [rMin, rMax] = KIND_RADIUS[kind];
    for (let i = 0; i < n; i++) {
      let x = 0, y = 0;
      do {
        x = rand() * worldSize;
        y = rand() * worldSize;
      } while (Math.hypot(x - player.x, y - player.y) < safeDistance);
      out.push({
        kind,
        photo: photos[Math.floor(rand() * photos.length)],
        r: rMin + rand() * (rMax - rMin),
        x,
        y,
        role: kind === forbidden ? "forbidden" : level.main.kind === kind ? "target" : null,
      });
    }
  });
  return out;
}
