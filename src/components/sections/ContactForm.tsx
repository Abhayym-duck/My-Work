"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * Placeholder contact form. Not wired to a backend/email provider yet —
 * submission just simulates a network call so the interaction pattern
 * (loading/success/error states) is in place for later integration.
 */
export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setState("success");
  }

  if (state === "success") {
    return (
      <p className="text-base text-foreground" role="status">
        Thanks for reaching out — this is a placeholder confirmation until
        the form is connected to a real backend.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="h-11 rounded-(--radius-md) border border-border bg-background px-4 text-sm outline-none focus-visible:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 rounded-(--radius-md) border border-border bg-background px-4 text-sm outline-none focus-visible:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-(--radius-md) border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-accent"
        />
      </div>

      <Button type="submit" disabled={state === "submitting"} className="self-start">
        {state === "submitting" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
