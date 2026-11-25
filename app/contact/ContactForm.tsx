"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { serviceOptions as buildServiceOptions, resolveService, VERIFICARE_SITE } from "@/lib/packages";
import { useI18n } from "@/lib/i18n/useT";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

// Ordinea câmpurilor obligatorii: la trimitere, focalizarea merge pe primul greșit.
const REQUIRED: (keyof FieldErrors)[] = ["name", "email", "service", "message"];
const fieldId = (name: string) => `rv-cf-${name}`;
const errorId = (name: string) => `rv-cf-${name}-err`;

// Umami lipsește local, pe previzualizare și fără acordul pentru cookie-uri: apelul nu are voie să strice trimiterea.
function trackFormSent() {
  try {
    (window as Window & { umami?: { track?: (event: string, data?: Record<string, string>) => void } }).umami?.track?.(
      "form-sent",
      { loc: "contact" },
    );
  } catch {
    /* fără măsurare */
  }
}

function validate(form: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Te rugăm să completezi numele.";
  if (!form.email.trim()) {
    errors.email = "Te rugăm să completezi emailul.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Adresa de email nu pare validă.";
  }
  if (!form.service) errors.service = "Alege un serviciu sau pachet.";
  // La verificarea gratuită mesajul e adresa site-ului: „firma.ro” are 8 caractere, deci pragul e 4, nu 10.
  const verificare = form.service === VERIFICARE_SITE;
  if (!form.message.trim()) errors.message = verificare ? "Scrie adresa site-ului." : "Scrie-ne câteva cuvinte.";
  else if (verificare && (form.message.trim().length < 4 || !form.message.includes(".")))
    errors.message = "Scrie adresa site-ului, de exemplu firma-ta.ro.";
  else if (!verificare && form.message.trim().length < 10) errors.message = "Mesajul trebuie să aibă minim 10 caractere.";
  return errors;
}

// Opțiunile vin din registru (valoarea = id-ul pachetului), ca linkurile ?pachet=<id> să preselecteze corect.
const serviceOptions = buildServiceOptions();

function ContactFormInner() {
  const searchParams = useSearchParams();
  // Valorile vechi se traduc; o valoare necunoscută lasă selectul gol, iar validarea cere alegerea.
  const initialPachet = resolveService(searchParams.get("pachet") ?? searchParams.get("package"));

  // true = pagina e afișată într-o limbă din dicționar (nu română, nu engleză)
  const i18n = useI18n();
  const otherLang = i18n.status === "ready" && i18n.scope === "full" && i18n.locale !== "ro" && i18n.locale !== "en";

  const [state, setState] = useState<FormState>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  // Ce citește cititorul de ecran (regiunea aria-live): erorile la trimitere, apoi confirmarea. Fiecare frază e un șir separat.
  const [announce, setAnnounce] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: initialPachet || "",
    message: "",
  });

  useEffect(() => {
    if (initialPachet && !form.service) {
      setForm((prev) => ({ ...prev, service: initialPachet }));
    }
  }, [initialPachet]);

  // Formularul dispare la reușită: focalizarea trece pe titlul confirmării, nu se pierde în pagină,
  // iar caseta confirmării vine în mijlocul ecranului (altfel bifa rămâne sub bara fixă de sus).
  useEffect(() => {
    if (state !== "success") return;
    successRef.current?.focus({ preventScroll: true });
    successRef.current?.parentElement?.scrollIntoView({ block: "center" });
  }, [state]);

  function say(lines: string[]) {
    setAnnounce([]);
    requestAnimationFrame(() => setAnnounce(lines));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FieldErrors] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FieldErrors] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ name: true, email: true, service: true, message: true });

    const wrong = REQUIRED.filter((k) => newErrors[k]);
    if (wrong.length > 0) {
      say(wrong.map((k) => newErrors[k] as string));
      requestAnimationFrame(() => document.getElementById(fieldId(wrong[0]))?.focus());
      return;
    }

    setState("submitting");
    // Câmpul-capcană se citește înainte de trimitere: la reușită formularul dispare.
    const hp = hpRef.current?.value ?? "";
    // Cererea pleacă pe e-mail prin /api/contact; „succes” apare doar dacă serverul a confirmat trimiterea.
    try {
      const label = serviceOptions.find((o) => o.value === form.service)?.label ?? form.service;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Selectorul de limbă: cine a citit pagina în altă limbă primește confirmarea în engleză, iar noi vedem limba lui.
        body: JSON.stringify({
          ...form,
          service: label,
          serviceId: form.service,
          lang: otherLang ? "en" : "ro",
          siteLang: otherLang ? i18n.locale : undefined,
          hp,
        }),
      });
      if (res.ok) {
        // Un robot care a completat capcana primește tot „ok” de la rută, dar nu se numără.
        if (!hp) trackFormSent();
        say(["Mesaj recepționat cu succes."]);
      }
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  const liveRegion = (
    <div aria-live="polite" role="status" className="sr-only">
      {announce.map((t) => (
        <span key={t}>{t} </span>
      ))}
    </div>
  );

  if (state === "success") {
    return (
      <>
        {liveRegion}
        <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-500/30 bg-emerald-950/20 px-6 py-12 sm:p-12 text-center backdrop-blur-md">
          <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-black text-2xl font-bold">
            ✓
          </div>
          <h3 ref={successRef} tabIndex={-1} className="mt-6 text-2xl font-medium text-white outline-none">
            Mesaj recepționat cu succes.
          </h3>
          <p className="mt-3 max-w-sm text-sm font-light text-neutral-300 leading-relaxed">
            {form.service === VERIFICARE_SITE
              ? "Îți trimitem verificarea pe e-mail în cel mult 2 zile lucrătoare."
              : "Răspuns în cel mult 24 de ore lucrătoare."}
          </p>
          <button
            type="button"
            onClick={() => {
              setState("idle");
              setForm({ name: "", email: "", business: "", service: "", message: "" });
              setTouched({});
              setErrors({});
              setAnnounce([]);
            }}
            className="mt-8 rounded-full border border-white/20 px-6 py-2.5 text-[13px] font-mono uppercase tracking-widest text-neutral-300 hover:bg-white hover:text-black transition-all"
          >
            Trimite alt mesaj →
          </button>
        </div>
      </>
    );
  }

  // maxLength-urile de mai jos sunt cele ale rutei /api/contact (care altfel taie în tăcere).
  // Pe telefon textul din câmpuri are 16 px: sub această mărime iPhone mărește pagina când câmpul primește focalizarea.
  const fieldBase =
    "w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-base md:text-sm text-white placeholder:text-neutral-400 light:placeholder:text-neutral-600 outline-none transition focus:border-white/40 focus:bg-white/[0.07]";
  const inputBase = `mt-2 ${fieldBase}`;
  const inputOk = "border-white/10";
  const inputErr = "border-red-400/80 focus:border-red-400";
  // Roșul de eroare: red-400 pe tema închisă, red-700 pe cea deschisă (red-400 pe fondul deschis avea 2,53 : 1).
  const errText = "mt-1.5 text-[13px] text-red-400 light:text-red-700";

  const showErr = (k: keyof FieldErrors) => Boolean(errors[k] && touched[k]);
  // Atributele comune ale unui câmp obligatoriu: id pentru etichetă, starea de eroare și legătura cu mesajul ei.
  const a11y = (k: keyof FieldErrors) => ({
    id: fieldId(k),
    "aria-required": true as const,
    "aria-invalid": showErr(k) || undefined,
    "aria-describedby": showErr(k) ? errorId(k) : undefined,
  });

  return (
    <>
      {liveRegion}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8 md:p-12 backdrop-blur-md"
      >
        {/* Câmp-capcană pentru roboți: ascuns oamenilor și cititoarelor de ecran. Ruta nu trimite nimic dacă e completat. */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
          <input ref={hpRef} type="text" name="rv_hp" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
        <div className="space-y-6 font-mono text-[13px]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor={fieldId("name")} className="block text-neutral-300">
                Nume complet <span aria-hidden="true" className="text-neutral-500">*</span>
              </label>
              <input
                {...a11y("name")}
                type="text"
                name="name"
                autoComplete="name"
                maxLength={120}
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ex: Radu Ionescu"
                className={`${inputBase} ${showErr("name") ? inputErr : inputOk}`}
              />
              {showErr("name") && (
                <p id={errorId("name")} className={errText}>{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor={fieldId("email")} className="block text-neutral-300">
                Email de contact <span aria-hidden="true" className="text-neutral-500">*</span>
              </label>
              <input
                {...a11y("email")}
                type="email"
                inputMode="email"
                name="email"
                autoComplete="email"
                spellCheck={false}
                maxLength={200}
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="contact@companie.ro"
                className={`${inputBase} ${showErr("email") ? inputErr : inputOk}`}
              />
              {showErr("email") && (
                <p id={errorId("email")} className={errText}>{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor={fieldId("business")} className="block text-neutral-300">Nume companie / site-ul actual (opțional)</label>
            <input
              id={fieldId("business")}
              type="text"
              name="business"
              autoComplete="organization"
              maxLength={160}
              value={form.business}
              onChange={handleChange}
              placeholder="Ex: Compania Mea SRL / companie.ro"
              className={`${inputBase} ${inputOk}`}
            />
          </div>

          <div>
            <label htmlFor={fieldId("service")} className="block text-neutral-300">
              Pachet sau serviciu vizat <span aria-hidden="true" className="text-neutral-500">*</span>
            </label>
            {/* Săgeata e desenată de noi: cea a sistemului arată diferit pe fiecare browser și dispare cu appearance-none. */}
            <div className="relative mt-2">
              <select
                {...a11y("service")}
                name="service"
                value={form.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${fieldBase} appearance-none truncate bg-neutral-900 pr-11 ${showErr("service") ? inputErr : inputOk}`}
              >
                <option value="" disabled className="text-neutral-500">
                  Selectează pachetul sau serviciul dorit
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-neutral-900 text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </div>
            {showErr("service") && (
              <p id={errorId("service")} className={errText}>{errors.service}</p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("message")} className="block text-neutral-300">
              {form.service === VERIFICARE_SITE
                ? "Adresa site-ului și, dacă vrei, un telefon"
                : "Descrierea proiectului și obiective"}{" "}
              <span aria-hidden="true" className="text-neutral-500">*</span>
            </label>
            <textarea
              {...a11y("message")}
              name="message"
              rows={form.service === VERIFICARE_SITE ? 2 : 5}
              maxLength={5000}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={
                form.service === VERIFICARE_SITE
                  ? "Ex: firma-ta.ro, 0722 000 000"
                  : "Descrie pe scurt activitatea actuală, produsele, provocările sau ce dorești să construim împreună."
              }
              className={`${inputBase} resize-none ${showErr("message") ? inputErr : inputOk}`}
            />
            {showErr("message") && (
              <p id={errorId("message")} className={errText}>{errors.message}</p>
            )}
            <div className="mt-1 text-right text-[13px] text-neutral-500">
              {form.message.length > 0 && `${form.message.length} caractere`}
            </div>
          </div>
        </div>

        {state === "error" && (
          <p role="alert" className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm leading-relaxed text-rose-300 light:text-rose-800">
            Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne direct la{" "}
            <a href="mailto:contact@reverb.ro" className="underline">contact@reverb.ro</a>.
          </p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="mt-8 w-full rounded-full bg-white px-4 py-4 text-center text-[13px] leading-snug text-balance font-mono uppercase tracking-normal sm:tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-60"
        >
          {state === "submitting" ? "Se trimite…" : "Trimite solicitarea →"}
        </button>

        <p className="mt-4 text-center text-[13px] font-mono text-neutral-500">
          Nu facem spam și nu partajăm datele de contact cu nimeni.{" "}
          <a href="/confidentialitate" className="underline hover:text-neutral-300">Cum folosim datele</a>
        </p>
        {/* Doar în limbile din dicționar (motorul traduce rândul): omul află în ce limbă îi răspundem. */}
        {otherLang && (
          <p className="mt-2 text-center text-[13px] font-mono text-neutral-300">Îți răspundem în română sau engleză.</p>
        )}
      </form>
    </>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[13px] font-mono text-neutral-500">Se încarcă formularul...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
