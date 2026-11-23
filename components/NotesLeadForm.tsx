"use client";

import { useState } from "react";

// Web3Forms access keys are public by design (they only allow sending to the owner's inbox).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "a0fb11b2-f5a7-4efc-9e1b-b22882543c23";

export default function NotesLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: ACCESS_KEY, subject: "New Duroos-ul-Lughah notes lead", from_name: "Duroos-ul-Lughah Notes website" }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-sand bg-white px-4 py-3 focus:border-emerald-700 focus:outline-none";

  if (status === "done") {
    return <p role="status" className="rounded-2xl bg-emerald-100 p-6 text-center font-semibold text-emerald-900">JazakAllah khair! We have received your request and will contact you shortly.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="block"><span className="mb-1 block text-sm font-medium">Full name</span><input name="name" required className={field} autoComplete="name" /></label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block"><span className="mb-1 block text-sm font-medium">Email</span><input name="email" type="email" required className={field} autoComplete="email" /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium">WhatsApp number</span><input name="whatsapp" type="tel" required className={field} autoComplete="tel" /></label>
      </div>
      <label className="block"><span className="mb-1 block text-sm font-medium">Which level / lessons do you need? (optional)</span><textarea name="message" rows={3} className={field} /></label>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">{status === "sending" ? "Sending..." : "Request the Notes"}</button>
      {status === "error" && <p role="alert" className="text-sm text-red-700">Something went wrong. Please try again.</p>}
    </form>
  );
}
