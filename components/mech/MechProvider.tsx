"use client";

// „Arborele motor” al paginilor cu piese mecanice. O singură viteză unghiulară (omega, grade pe secundă) mișcă tot:
// mers în gol + viteza derulării (cu inerție). Fiecare tren de roți își integrează unghiul din omega, deci dinții
// rămân angrenați, iar derularea în sus întoarce roțile invers.
//
// Tot aici: întrerupătorul „Mecanică” (ținut minte), mișcarea redusă cerută în sistem, poziția cursorului și
// diafragma (deschidere la intrare, clipire între pagini, închidere la plecare).
//
// window.__mech e jurnalul de verificare (viteza, starea diafragmei); nu îl folosește nimic altceva.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { useStored } from "@/lib/useStored";
import {
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useVelocity,
  type MotionValue,
} from "framer-motion";

/** Mers în gol, în grade pe secundă. */
const IDLE = 14;
/** Câte grade pe secundă adaugă un pixel pe secundă de derulare. */
const SCROLL_GAIN = 0.11;
const MAX_OMEGA = 420;
const STORE_KEY = "mech-running";

export type ShutterPhase = "intro" | "idle" | "blink" | "closing" | "opening";

type Mech = {
  omega: MotionValue<number>;
  running: boolean;
  setRunning: (v: boolean) => void;
  reduced: boolean;
  /** Mecanica merge: pornită din întrerupător și fără mișcare redusă cerută în sistem. */
  active: boolean;
  /** Ultima poziție a cursorului (coordonate de fereastră); pe ecrane fără cursor fin e mijlocul ecranului. */
  pointer: MutableRefObject<{ x: number; y: number } | null>;
  shutter: ShutterPhase;
  /** Închide diafragma; promisiunea se rezolvă când e închisă. Fără efect la mișcare redusă sau cu mecanica oprită. */
  closeShutter: () => Promise<void>;
};

const Ctx = createContext<Mech | null>(null);

export function useMech(): Mech {
  const m = useContext(Ctx);
  if (!m) throw new Error("useMech trebuie folosit în interiorul <MechProvider>");
  return m;
}

declare global {
  interface Window {
    __mech?: { omega: number; running: boolean; reduced: boolean; shutter: ShutterPhase; trains: Record<string, number> };
  }
}

export function MechProvider({ children }: { children: ReactNode }) {
  const reduced = !!useReducedMotion();
  // Întrerupătorul, ținut minte între vizite.
  const [storedRunning, setStoredRunning] = useStored(STORE_KEY, "1");
  const running = storedRunning !== "0";
  const [shutter, setShutter] = useState<ShutterPhase>("intro");
  const omega = useMotionValue(0);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const pathname = usePathname();
  const lastPath = useRef(pathname);
  const timers = useRef<number[]>([]);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 55, damping: 16, mass: 1.3 });

  const setRunning = useCallback((v: boolean) => setStoredRunning(v ? "1" : "0"), [setStoredRunning]);

  // Cursorul: mouse sau stilou. Pe ecrane tactile, „cursorul” e mijlocul ecranului.
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const center = () => {
      pointer.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    };
    if (!fine) {
      center();
      window.addEventListener("resize", center);
      return () => window.removeEventListener("resize", center);
    }
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      pointer.current = { x: e.clientX, y: e.clientY };
    };
    const leave = () => {
      pointer.current = null;
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  const active = running && !reduced;

  useAnimationFrame(() => {
    const target = active ? Math.max(-MAX_OMEGA, Math.min(MAX_OMEGA, IDLE + smoothVelocity.get() * SCROLL_GAIN)) : 0;
    omega.set(target);
    if (typeof window !== "undefined") {
      const log = (window.__mech ??= { omega: 0, running: true, reduced: false, shutter: "intro", trains: {} });
      log.omega = target;
      log.running = running;
      log.reduced = reduced;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.__mech) window.__mech.shutter = shutter;
  }, [shutter]);

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);
  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  // Prima intrare: animația de deschidere e în CSS; aici doar trecem în „idle” când s-a terminat.
  useEffect(() => {
    later(() => setShutter((s) => (s === "intro" ? "idle" : s)), 1200);
  }, [later]);

  // Schimbarea adresei între paginile cu mecanică: după o închidere, se deschide; altfel clipește.
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    if (!active) {
      setShutter("idle");
      return;
    }
    setShutter((s) => (s === "closing" ? "opening" : "blink"));
    later(() => setShutter("idle"), 750);
  }, [pathname, active, later]);

  // Pagina readusă din memoria browserului („înapoi”): diafragma nu rămâne închisă.
  useEffect(() => {
    const show = () => setShutter("idle");
    window.addEventListener("pageshow", show);
    return () => window.removeEventListener("pageshow", show);
  }, []);

  const closeShutter = useCallback(() => {
    if (!active) return Promise.resolve();
    setShutter("closing");
    // Plasă: dacă navigarea nu se întâmplă, pagina nu rămâne acoperită.
    later(() => setShutter((s) => (s === "closing" ? "idle" : s)), 4000);
    return new Promise<void>((resolve) => later(resolve, 320));
  }, [active, later]);

  const value = useMemo<Mech>(
    () => ({ omega, running, setRunning, reduced, active, pointer, shutter, closeShutter }),
    [omega, running, setRunning, reduced, active, shutter, closeShutter],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
