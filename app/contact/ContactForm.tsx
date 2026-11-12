"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { serviceOptions as buildServiceOptions, resolveService } from "@/lib/packages";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
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
  if (!form.message.trim()) errors.message = "Scrie-ne câteva cuvinte.";
  else if (form.message.trim().length < 10) errors.message = "Mesajul trebuie să aibă minim 10 caractere.";
  return errors;
}

// Opțiunile vin din registru (valoarea = id-ul pachetului), ca linkurile ?pachet=<id> să preselecteze corect.
const serviceOptions = buildServiceOptions();

function ContactFormInner() {
  const searchParams = useSearchParams();
  // Valorile vechi se traduc; o valoare necunoscută lasă selectul gol, iar validarea cere alegerea.
  const initialPachet = resolveService(searchParams.get("pachet") ?? searchParams.get("package"));

  const [state, setState] = useState<FormState>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);
  
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

    if (Object.keys(newErrors).length > 0) return;

    setState("submitting");
    // Cererea pleacă pe e-mail prin /api/contact; „succes” apare doar dacă serverul a confirmat trimiterea.
    try {
      const label = serviceOptions.find((o) => o.value === form.service)?.label ?? form.service;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: label, serviceId: form.service, lang: "ro", hp: hpRef.current?.value ?? "" }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-12 text-center backdrop-blur-md">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-black text-2xl font-bold">
          ✓
        </div>
        <h3 className="mt-6 text-2xl font-medium text-white">Mesaj recepționat cu succes.</h3>
        <p className="mt-3 max-w-sm text-sm font-light text-neutral-300 leading-relaxed">
          Îți mulțumim! Un arhitect tehnic Reverb Digital te va contacta în maximum 24 de ore lucrătoare cu analiza inițială a proiectului.
        </p>
        <button
          type="button"
          onClick={() => {
            setState("idle");
            setForm({ name: "", email: "", business: "", service: "", message: "" });
            setTouched({});
            setErrors({});
          }}
          className="mt-8 rounded-full border border-white/20 px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white hover:text-black transition-all"
        >
          Trimite alt mesaj →
        </button>
      </div>
    );
  }

  const inputBase =
    "mt-2 w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 outline-none transition focus:border-white/40 focus:bg-white/[0.07]";
  const inputOk = "border-white/10";
  const inputErr = "border-red-400/80 focus:border-red-400";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12 backdrop-blur-md"
    >
      {/* Câmp-capcană pentru roboți: ascuns oamenilor și cititoarelor de ecran. Ruta nu trimite nimic dacă e completat. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <input ref={hpRef} type="text" name="rv_hp" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <h2 className="text-2xl font-medium text-white">Inițiază Discuția</h2>
          <p className="text-xs text-neutral-400 font-mono mt-1">Completează datele pentru auditul tehnic preliminar.</p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-mono text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Răspuns garantat &le; 24h</span>
        </div>
      </div>

      <div className="space-y-6 font-mono text-xs">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-neutral-300">
              Nume complet <span className="text-neutral-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ex: Radu Ionescu"
              className={`${inputBase} ${errors.name && touched.name ? inputErr : inputOk}`}
            />
            {errors.name && touched.name && (
              <p className="mt-1.5 text-[11px] text-red-400">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-neutral-300">
              Email de contact <span className="text-neutral-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="contact@companie.ro"
              className={`${inputBase} ${errors.email && touched.email ? inputErr : inputOk}`}
            />
            {errors.email && touched.email && (
              <p className="mt-1.5 text-[11px] text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-neutral-300">Nume Companie / Website Actual (Opțional)</label>
          <input
            type="text"
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Ex: Compania Mea SRL / companie.ro"
            className={`${inputBase} ${inputOk}`}
          />
        </div>

        <div>
          <label className="block text-neutral-300">
            Pachet sau Serviciu Vizat <span className="text-neutral-500">*</span>
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} appearance-none bg-neutral-900 ${errors.service && touched.service ? inputErr : inputOk}`}
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
          {errors.service && touched.service && (
            <p className="mt-1.5 text-[11px] text-red-400">{errors.service}</p>
          )}
        </div>

        <div>
          <label className="block text-neutral-300">
            Descrierea Proiectului & Obiective <span className="text-neutral-500">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Descrie pe scurt activitatea actuală, produsele, provocările sau ce dorești să construim împreună."
            className={`${inputBase} resize-none ${errors.message && touched.message ? inputErr : inputOk}`}
          />
          {errors.message && touched.message && (
            <p className="mt-1.5 text-[11px] text-red-400">{errors.message}</p>
          )}
          <div className="mt-1 text-right text-[10px] text-neutral-500">
            {form.message.length > 0 && `${form.message.length} caractere`}
          </div>
        </div>
      </div>

      {state === "error" && (
        <p role="alert" className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs leading-relaxed text-rose-300">
          Mesajul nu a putut fi trimis. Încearcă din nou sau scrie-ne direct la{" "}
          <a href="mailto:contact@reverb.ro" className="underline">contact@reverb.ro</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-8 w-full rounded-full bg-white px-4 py-4 text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-black font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-60"
      >
        {state === "submitting" ? "Se procesează..." : "Trimite solicitarea →"}
      </button>

      <p className="mt-4 text-center text-[10px] font-mono text-neutral-500">
        Securitate garantată. Nu facem spam și nu partajăm datele de contact cu nimeni.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs font-mono text-neutral-500">Se încarcă formularul...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
