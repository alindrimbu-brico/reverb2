"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { resolveService } from "@/lib/packages";
import { serviceOptionsEn } from "@/lib/packagesEn";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

// Order of the required fields: on submit, focus goes to the first wrong one.
const REQUIRED: (keyof FieldErrors)[] = ["name", "email", "service", "message"];
const fieldId = (name: string) => `rv-cf-${name}`;
const errorId = (name: string) => `rv-cf-${name}-err`;

// Umami is missing locally, on previews and without cookie consent: the call must never break the submission.
function trackFormSent() {
  try {
    (window as Window & { umami?: { track?: (event: string, data?: Record<string, string>) => void } }).umami?.track?.(
      "form-sent",
      { loc: "contact" },
    );
  } catch {
    /* no measurement */
  }
}

function validate(form: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "The email address doesn't look valid.";
  }
  if (!form.service) errors.service = "Please choose a service.";
  if (!form.message.trim()) errors.message = "Please write a few words.";
  else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

// Same values as the Romanian form (package ids), so /en/contact?package=<id> preselects the package.
const serviceOptions = serviceOptionsEn();

function ContactFormInner() {
  const searchParams = useSearchParams();
  // Old values are translated; an unknown value leaves the select empty and validation asks for a choice.
  const initialService = resolveService(searchParams.get("package") ?? searchParams.get("pachet"));
  const [state, setState] = useState<FormState>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  // What a screen reader announces (aria-live region): the errors on submit, then the confirmation.
  const [announce, setAnnounce] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: initialService,
    message: "",
  });

  // The form disappears on success: focus moves to the confirmation title instead of getting lost.
  // The confirmation box is brought to the middle of the screen (otherwise the tick sits under the fixed top bar).
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
    // The honeypot is read before sending: on success the form disappears.
    const hp = hpRef.current?.value ?? "";
    // The request goes out by e-mail through /api/contact; "sent" shows only if the server confirmed it.
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          serviceId: form.service,
          lang: "en",
          hp,
          service: `[EN] ${serviceOptions.find((o) => o.value === form.service)?.label ?? form.service}`,
        }),
      });
      if (res.ok) {
        // A bot that filled the honeypot still gets "ok" from the route, but is not counted.
        if (!hp) trackFormSent();
        say(["Message sent."]);
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
        <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-neutral-900/40 p-12 text-center shadow-[0_20px_60px_rgba(29,39,49,0.06)]">
          <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black text-2xl">
            ✓
          </div>
          <h3 ref={successRef} tabIndex={-1} className="mt-6 text-2xl font-medium text-white outline-none">
            Message sent.
          </h3>
          <p className="mt-3 max-w-sm text-[15px] leading-7 text-neutral-400">
            We&apos;ll reply by e-mail within 24 working hours. Check your spam folder if you don&apos;t hear from us.
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
            className="mt-8 text-sm font-medium text-neutral-400 transition hover:text-white"
          >
            Send another message →
          </button>
        </div>
      </>
    );
  }

  // The maxLength values below are those of the /api/contact route (which otherwise cuts silently).
  // On phones the text in the fields is 16 px: below that, iPhone zooms the page when a field gets focus.
  const fieldBase =
    "w-full rounded-2xl border bg-white/5 px-4 py-3 text-base md:text-sm text-white placeholder:text-neutral-400 light:placeholder:text-neutral-600 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/10";
  const inputBase = `mt-2 ${fieldBase}`;
  const inputOk = "border-white/10";
  const inputErr = "border-red-400/60 focus:border-red-400 focus:ring-red-100";
  // Error red: red-400 on the dark theme, red-700 on the light one (the old red on the light background was below 4.5 : 1).
  const errText = "mt-1.5 text-[13px] text-red-400 light:text-red-700";

  const showErr = (k: keyof FieldErrors) => Boolean(errors[k] && touched[k]);
  // Shared attributes of a required field: id for the label, error state and the link to its message.
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
        className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 shadow-[0_20px_60px_rgba(29,39,49,0.06)] md:p-10"
      >
        {/* Honeypot for bots: hidden from people and screen readers. The route sends nothing when it is filled. */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
          <input ref={hpRef} type="text" name="rv_hp" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={fieldId("name")} className="block text-sm font-medium text-white">
                Name <span aria-hidden="true" className="text-neutral-500">*</span>
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
                placeholder="Your name"
                className={`${inputBase} ${showErr("name") ? inputErr : inputOk}`}
              />
              {showErr("name") && (
                <p id={errorId("name")} className={errText}>{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor={fieldId("email")} className="block text-sm font-medium text-white">
                Email <span aria-hidden="true" className="text-neutral-500">*</span>
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
                placeholder="email@company.com"
                className={`${inputBase} ${showErr("email") ? inputErr : inputOk}`}
              />
              {showErr("email") && (
                <p id={errorId("email")} className={errText}>{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor={fieldId("business")} className="block text-sm font-medium text-white">Business / Company</label>
            <input
              id={fieldId("business")}
              type="text"
              name="business"
              autoComplete="organization"
              maxLength={160}
              value={form.business}
              onChange={handleChange}
              placeholder="Your business name (optional)"
              className={`${inputBase} ${inputOk}`}
            />
          </div>

          <div>
            <label htmlFor={fieldId("service")} className="block text-sm font-medium text-white">
              What are you interested in? <span aria-hidden="true" className="text-neutral-500">*</span>
            </label>
            {/* Our own arrow: the system one looks different in every browser and disappears with appearance-none. */}
            <div className="relative mt-2">
              <select
                {...a11y("service")}
                name="service"
                value={form.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${fieldBase} appearance-none truncate pr-11 ${showErr("service") ? inputErr : inputOk}`}
              >
                <option value="" disabled className="bg-neutral-900 text-neutral-500">Choose a service</option>
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
            <label htmlFor={fieldId("message")} className="block text-sm font-medium text-white">
              Your message <span aria-hidden="true" className="text-neutral-500">*</span>
            </label>
            <textarea
              {...a11y("message")}
              name="message"
              rows={5}
              maxLength={5000}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell us a few words about your business, your current situation and what you want to achieve."
              className={`${inputBase} resize-none ${showErr("message") ? inputErr : inputOk}`}
            />
            {showErr("message") && (
              <p id={errorId("message")} className={errText}>{errors.message}</p>
            )}
            <div className="mt-1 text-right text-[13px] text-neutral-500">
              {form.message.length > 0 && `${form.message.length} characters`}
            </div>
          </div>
        </div>

        {state === "error" && (
          <p role="alert" className="mt-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300 light:text-rose-800">
            The message could not be sent. Please try again or write to us at{" "}
            <a href="mailto:contact@reverb.ro" className="underline">contact@reverb.ro</a>.
          </p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="mt-6 w-full rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:opacity-60"
        >
          {state === "submitting" ? "Sending..." : "Send message"}
        </button>

        <p className="mt-4 text-center text-sm text-neutral-500">
          We don&apos;t spam. Your data is safe and not shared with third parties.{" "}
          <a href="/en/privacy" className="underline hover:text-neutral-300">How we use your data</a>
        </p>
      </form>
    </>
  );
}

export default function ContactFormEN() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[13px] text-neutral-500">Loading the form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
