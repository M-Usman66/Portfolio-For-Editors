"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSound } from "@/hooks/useSound";
import AnimatedButton from "@/components/ui/AnimatedButton";

const PROJECT_TYPES = [
  "Long-form",
  "Short-form / e-commerce",
  "Short-form / social",
  "Documentary",
  "Other",
];
const BUDGETS = ["Under PKR 1500", "PKR 1500 to PKR 2500", "PKR 3000 to PKR 5000", "PKR 10000+"];

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { play } = useSound();

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("submitting");
  play("click");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send message");
    }

    setStatus("success");
    play("success");
    form.reset();
  } catch (error) {
    console.error("Contact form error:", error);

    setStatus("idle");
    alert("Something went wrong. Please try again.");
  }
}

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {status !== "success" ? (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jordan Lee"
                  className="input"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="jordan@studio.com"
                  className="input"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Project type">
                <select required name="projectType" className="input" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Budget">
                <select required name="budget" className="input" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message">
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the project, timeline and any references you have in mind."
                className="input resize-none"
              />
            </Field>

            <AnimatedButton
              type="submit"
              cursorLabel="SEND"
              className="mt-2 w-full sm:w-fit"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </AnimatedButton>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-gold/10 text-gold shadow-glow-gold"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
            <h3 className="font-display text-2xl text-bone">Message sent</h3>
            <p className="max-w-sm text-sm text-ash">
              Thanks for reaching out — expect a reply within one business day.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="timecode mt-2 text-xs uppercase tracking-widest2 text-gold hover:text-gold-bright"
            >
              Send another
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #ededee;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .input::placeholder {
          color: #6b6d73;
        }
        .input:focus {
          outline: none;
          border-color: rgba(212, 168, 87, 0.6);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="timecode text-xs uppercase tracking-widest2 text-ash">
        {label}
      </span>
      {children}
    </label>
  );
}
