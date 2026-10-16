"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

export const contactIntents = [
  { value: "demo", label: "Book a demo" },
  { value: "portfolio", label: "Portfolio pricing" },
  { value: "website", label: "Association website quote" },
  { value: "project", label: "Project or special-assessment site quote" },
  { value: "general", label: "General question" },
] as const;

export type ContactIntent = (typeof contactIntents)[number]["value"];

const submitLabels: Record<ContactIntent, string> = {
  demo: "Book a demo",
  portfolio: "Contact us for portfolio pricing",
  website: "Request a quote",
  project: "Request a quote",
  general: "Send your question",
};

function isContactIntent(value: string | null): value is ContactIntent {
  return contactIntents.some((intent) => intent.value === value);
}

const intentListeners = new Set<() => void>();
let selectedForPath: { path: string; intent: ContactIntent } | null = null;

function emitIntent() {
  intentListeners.forEach((listener) => listener());
}

function setSelectedIntent(intent: ContactIntent) {
  selectedForPath = { path: window.location.pathname, intent };
  emitIntent();
}

function subscribeToIntent(listener: () => void) {
  intentListeners.add(listener);
  return () => {
    intentListeners.delete(listener);
  };
}

function readIntent(): ContactIntent | null {
  if (
    selectedForPath &&
    selectedForPath.path === window.location.pathname
  ) {
    return selectedForPath.intent;
  }
  const fromQuery = new URLSearchParams(window.location.search).get("intent");
  return isContactIntent(fromQuery) ? fromQuery : null;
}

export function QuoteLink({
  intent,
  className,
  children,
}: {
  intent: ContactIntent;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#quote"
      className={className}
      onClick={() => {
        setSelectedIntent(intent);
      }}
    >
      {children}
    </a>
  );
}

export function ContactForm({
  id = "quote",
  heading,
  intro,
  defaultIntent,
}: {
  id?: string;
  heading: string;
  intro: string;
  defaultIntent: ContactIntent;
}) {
  const selected = useSyncExternalStore(
    subscribeToIntent,
    readIntent,
    () => null,
  );
  const intent = selected ?? defaultIntent;
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const intentLabel =
      contactIntents.find((item) => item.value === intent)?.label ?? intent;

    const lines = [
      `Request: ${intentLabel}`,
      `Name: ${String(data.get("name") ?? "").trim()}`,
      `Email: ${String(data.get("email") ?? "").trim()}`,
      `Organization: ${String(data.get("organization") ?? "").trim()}`,
      `Phone: ${String(data.get("phone") ?? "").trim() || "(not provided)"}`,
      `Communities: ${String(data.get("communities") ?? "").trim() || "(not provided)"}`,
      "",
      String(data.get("message") ?? "").trim(),
    ];

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `${intentLabel} — HOAbot`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setStatus(
      `Your email app should open a message to ${CONTACT_EMAIL}. If it does not, send the same note there directly.`,
    );
    window.location.href = mailto;
  }

  return (
    <section id={id} className="scroll-mt-56">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-cyan-100 p-8 md:p-10">
        <h2 className="text-3xl font-bold text-[#0B3558]">{heading}</h2>
        <p className="text-stone-600 mt-3 leading-relaxed">{intro}</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="block text-sm font-semibold text-[#0B3558] mb-2">
              What do you need?
            </span>
            <select
              name="intent"
              value={intent}
              onChange={(event) => {
                const next = event.target.value;
                if (isContactIntent(next)) setSelectedIntent(next);
              }}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800 bg-white"
            >
              {contactIntents.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="block text-sm font-semibold text-[#0B3558] mb-2">
                Name
              </span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-semibold text-[#0B3558] mb-2">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800"
              />
            </label>
          </div>

          <label className="block">
            <span className="block text-sm font-semibold text-[#0B3558] mb-2">
              HOA or management company
            </span>
            <input
              name="organization"
              type="text"
              required
              autoComplete="organization"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800"
            />
          </label>

          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="block text-sm font-semibold text-[#0B3558] mb-2">
                Phone <span className="font-normal text-stone-500">(optional)</span>
              </span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-semibold text-[#0B3558] mb-2">
                Communities{" "}
                <span className="font-normal text-stone-500">(optional)</span>
              </span>
              <input
                name="communities"
                type="text"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800"
              />
            </label>
          </div>

          <label className="block">
            <span className="block text-sm font-semibold text-[#0B3558] mb-2">
              How can we help?
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#17B8B8] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0E9898] transition shadow-lg text-lg"
          >
            {submitLabels[intent]}
          </button>
        </form>

        {status ? (
          <p className="text-stone-600 text-sm mt-4" role="status">
            {status}
          </p>
        ) : null}

        <p className="text-stone-500 text-sm mt-4">
          This opens an email to{" "}
          <a
            className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          . Nothing is stored on this website.
        </p>
      </div>
    </section>
  );
}
