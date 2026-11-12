"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/mini";
import { CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { WhatsappIcon } from "./SocialIcons";

export const goals = [
  "Weight loss / fat burn",
  "Muscle building",
  "Strength training",
  "General fitness",
  "Personal training",
  "Functional / CrossFit-style",
  "Zumba / group classes",
  "Yoga & mobility",
  "Nutrition coaching",
] as const;

export const preferredTimes = [
  "Early morning (5–8 AM)",
  "Morning (8–11 AM)",
  "Afternoon (11 AM–4 PM)",
  "Evening (4–8 PM)",
  "Night (8–10 PM)",
] as const;

const schema = z.object({
  name: z
    .string()
    .check(z.trim(), z.minLength(2, "Please enter your name"), z.maxLength(60, "Name is too long")),
  phone: z
    .string()
    .check(
      z.trim(),
      z.regex(
        /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/,
        "Enter a valid 10-digit Indian mobile number",
      ),
    ),
  goal: z.string().check(z.minLength(1, "Please choose a goal")),
  time: z.string().check(z.minLength(1, "Please choose a preferred time")),
});

type FormValues = z.infer<typeof schema>;

/**
 * Front-end-only enquiry form: validates with zod, then opens WhatsApp with the details
 * prefilled. No data is sent anywhere else.
 */
export function ContactForm({ className }: { className?: string }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", goal: "", time: "" },
    mode: "onTouched",
  });

  const onSubmit = (data: FormValues) => {
    const message = [
      "Hi BE-FIT, I'd like to book a free trial.",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Goal: ${data.goal}`,
      `Preferred time: ${data.time}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field =
    "mt-2 w-full border-0 border-b-2 border-white/20 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-red focus:bg-white/[0.07]";

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("grid gap-5 sm:grid-cols-2", className)}
      aria-describedby="form-note"
    >
      <div className="sm:col-span-2">
        <label
          htmlFor="cf-name"
          className="text-sm font-semibold tracking-wider text-white/85 uppercase"
        >
          Full name
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "cf-name-err" : undefined}
          className={field}
          {...register("name")}
        />
        <FieldError id="cf-name-err" message={errors.name?.message} />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="cf-phone"
          className="text-sm font-semibold tracking-wider text-white/85 uppercase"
        >
          Phone number
        </label>
        <input
          id="cf-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="98765 43210"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "cf-phone-err" : undefined}
          className={field}
          {...register("phone")}
        />
        <FieldError id="cf-phone-err" message={errors.phone?.message} />
      </div>

      <div>
        <label
          htmlFor="cf-goal"
          className="text-sm font-semibold tracking-wider text-white/85 uppercase"
        >
          Your goal
        </label>
        <select
          id="cf-goal"
          aria-invalid={errors.goal ? true : undefined}
          aria-describedby={errors.goal ? "cf-goal-err" : undefined}
          className={cn(field, "appearance-none [&>option]:bg-brand-charcoal")}
          {...register("goal")}
        >
          <option value="">Select a goal</option>
          {goals.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <FieldError id="cf-goal-err" message={errors.goal?.message} />
      </div>

      <div>
        <label
          htmlFor="cf-time"
          className="text-sm font-semibold tracking-wider text-white/85 uppercase"
        >
          Preferred time
        </label>
        <select
          id="cf-time"
          aria-invalid={errors.time ? true : undefined}
          aria-describedby={errors.time ? "cf-time-err" : undefined}
          className={cn(field, "appearance-none [&>option]:bg-brand-charcoal")}
          {...register("time")}
        >
          <option value="">Select a time</option>
          {preferredTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <FieldError id="cf-time-err" message={errors.time?.message} />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          <WhatsappIcon className="size-5" />
          Book My Free Trial on WhatsApp
        </Button>
        <p id="form-note" className="mt-3 text-center text-xs text-white/60">
          Submitting opens WhatsApp with your details prefilled. Nothing is stored on this website.
        </p>
        <div aria-live="polite">
          {sent ? (
            <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-400">
              <CheckCircle2 className="size-5" aria-hidden /> WhatsApp opened. Just hit send and
              we&apos;ll confirm your slot.
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-brand-red-light">
      {message}
    </p>
  );
}
