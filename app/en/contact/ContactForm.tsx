"use client";

import { useState, useRef, Suspense } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: initialService,
    message: "",
  });

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
    // The request goes out by e-mail through /api/contact; "sent" shows only if the server confirmed it.
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: `[EN] ${serviceOptions.find((o) => o.value === form.service)?.label ?? form.service}`,
        }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-neutral-900/40 p-12 text-center shadow-[0_20px_60px_rgba(29,39,49,0.06)]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black text-2xl">
          ✓
        </div>
        <h3 className="mt-6 text-2xl font-medium text-white">Message sent.</h3>
        <p className="mt-3 max-w-sm text-[15px] leading-7 text-neutral-400">
          We&apos;ll confirm a call slot within 24 hours. Check your spam folder if you don&apos;t hear from us.
        </p>
        <button
          type="button"
          onClick={() => {
            setState("idle");
            setForm({ name: "", email: "", business: "", service: "", message: "" });
            setTouched({});
            setErrors({});
          }}
          className="mt-8 text-sm font-medium text-neutral-400 transition hover:text-white"
        >
          Send another message →
        </button>
      </div>
    );
  }

  const inputBase =
    "mt-2 w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/10";
  const inputOk = "border-white/10";
  const inputErr = "border-red-400/60 focus:border-red-400 focus:ring-red-100";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 shadow-[0_20px_60px_rgba(29,39,49,0.06)] md:p-10"
    >
      <h2 className="text-xl font-medium text-white">Send us a message</h2>
      <p className="mt-2 text-sm text-neutral-400">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-white">
              Name <span className="text-neutral-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your name"
              className={`${inputBase} ${errors.name && touched.name ? inputErr : inputOk}`}
            />
            {errors.name && touched.name && (
              <p className="mt-1.5 text-xs text-red-500/80">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Email <span className="text-neutral-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="email@company.com"
              className={`${inputBase} ${errors.email && touched.email ? inputErr : inputOk}`}
            />
            {errors.email && touched.email && (
              <p className="mt-1.5 text-xs text-red-500/80">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Business / Company</label>
          <input
            type="text"
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Your business name (optional)"
            className={`${inputBase} ${inputOk}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            What are you interested in? <span className="text-neutral-500">*</span>
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} appearance-none ${errors.service && touched.service ? inputErr : inputOk}`}
          >
            <option value="" disabled>Choose a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && touched.service && (
            <p className="mt-1.5 text-xs text-red-500/80">{errors.service}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Your message <span className="text-neutral-500">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us a few words about your business, your current situation and what you want to achieve."
            className={`${inputBase} resize-none ${errors.message && touched.message ? inputErr : inputOk}`}
          />
          {errors.message && touched.message && (
            <p className="mt-1.5 text-xs text-red-500/80">{errors.message}</p>
          )}
          <div className="mt-1 text-right text-xs text-neutral-500">
            {form.message.length > 0 && `${form.message.length} characters`}
          </div>
        </div>
      </div>

      {state === "error" && (
        <p role="alert" className="mt-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
          The message could not be sent. Please try again or write to us at{" "}
          <a href="mailto:contact@reverb.ro" className="underline">contact@reverb.ro</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-6 w-full rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:translate-y-0 disabled:shadow-none"
      >
        {state === "submitting" ? "Sending..." : "Send message"}
      </button>

      <p className="mt-4 text-center text-xs text-neutral-500">
        We don&apos;t spam. Your data is safe and not shared with third parties.
      </p>
    </form>
  );
}

export default function ContactFormEN() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-neutral-500">Loading the form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
