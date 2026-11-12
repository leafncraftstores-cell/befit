"use client";

import { useId, useState } from "react";
import { Calculator } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/contact";
import { ButtonLink } from "./Button";

const categories = [
  {
    max: 18.5,
    label: "Underweight",
    color: "#3b82f6",
    tip: "Focus on strength training and a calorie surplus with quality protein.",
  },
  {
    max: 25,
    label: "Healthy",
    color: "#22c55e",
    tip: "Great base. Build strength and fitness to look and feel your best.",
  },
  {
    max: 30,
    label: "Overweight",
    color: "#f59e0b",
    tip: "A structured fat-loss plan with strength and cardio will move the needle.",
  },
  {
    max: Infinity,
    label: "Obese",
    color: "#E31E24",
    tip: "Start with guided, joint-friendly training and simple nutrition changes.",
  },
] as const;

// Gauge spans BMI 15 → 40
const MIN = 15;
const MAX = 40;

export function BMICalculator({ className }: { className?: string }) {
  const id = useId();
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");

  const h = Number(height) / 100;
  const w = Number(weight);
  const valid = h >= 1 && h <= 2.5 && w >= 25 && w <= 300;
  const bmi = valid ? w / (h * h) : null;
  const cat = bmi !== null ? categories.find((c) => bmi < c.max) : undefined;
  const pos = bmi !== null ? Math.min(100, Math.max(0, ((bmi - MIN) / (MAX - MIN)) * 100)) : 0;

  return (
    <div className={cn("clip-card border border-white/10 bg-brand-charcoal p-6 sm:p-8", className)}>
      <div className="flex items-center gap-3">
        <span className="grid size-11 -skew-x-12 place-items-center bg-brand-red">
          <Calculator className="size-5 skew-x-12" aria-hidden />
        </span>
        <h3 className="text-3xl text-white">
          <span className="skew-title">BMI Calculator</span>
        </h3>
      </div>

      <form
        className="mt-7 grid gap-5 sm:grid-cols-2"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <Field
          id={`${id}-h`}
          label="Height"
          unit="cm"
          value={height}
          onChange={setHeight}
          min={100}
          max={250}
        />
        <Field
          id={`${id}-w`}
          label="Weight"
          unit="kg"
          value={weight}
          onChange={setWeight}
          min={25}
          max={300}
        />
      </form>

      <div className="mt-8" aria-live="polite">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-white/60 uppercase">Your BMI</p>
            <p className="font-display text-7xl leading-none text-white tabular-nums">
              {bmi !== null ? bmi.toFixed(1) : "--"}
            </p>
          </div>
          {cat ? (
            <p
              className="-skew-x-12 px-3 py-1.5 text-sm font-bold tracking-widest text-brand-black uppercase"
              style={{ background: cat.color }}
            >
              <span className="inline-block skew-x-12">{cat.label}</span>
            </p>
          ) : (
            <p className="text-sm text-white/60">Enter height 100–250 cm and weight 25–300 kg</p>
          )}
        </div>

        {/* Gauge */}
        <div className="relative mt-6" aria-hidden>
          <div className="flex h-3 overflow-hidden">
            <span
              className="h-full bg-[#3b82f6]"
              style={{ width: `${((18.5 - MIN) / (MAX - MIN)) * 100}%` }}
            />
            <span
              className="h-full bg-[#22c55e]"
              style={{ width: `${((25 - 18.5) / (MAX - MIN)) * 100}%` }}
            />
            <span
              className="h-full bg-[#f59e0b]"
              style={{ width: `${((30 - 25) / (MAX - MIN)) * 100}%` }}
            />
            <span className="h-full flex-1 bg-brand-red" />
          </div>
          {bmi !== null ? (
            <span
              className="gauge-pointer absolute -top-2 h-7 w-1.5 -translate-x-1/2 bg-white shadow-[0_0_0_3px_var(--brand-black)]"
              style={{ left: `${pos}%` }}
            />
          ) : null}
          <div className="mt-2 flex justify-between text-[0.7rem] text-white/60 tabular-nums">
            <span>15</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40</span>
          </div>
        </div>

        {cat ? <p className="mt-5 text-white/80">{cat.tip}</p> : null}
        <p className="mt-2 text-xs text-white/60">
          BMI is a general screening guide, not a diagnosis. Our trainers assess body composition
          for a full picture.
        </p>
      </div>

      <ButtonLink
        href={whatsappLink(
          bmi !== null
            ? `Hi BE-FIT, my BMI is ${bmi.toFixed(1)} (${cat?.label}). I'd like a personalised plan and a free trial.`
            : undefined,
        )}
        className="mt-7 w-full sm:w-auto"
      >
        Get a personalised plan: Book a free trial
      </ButtonLink>
    </div>
  );
}

function Field({
  id,
  label,
  unit,
  value,
  onChange,
  min,
  max,
}: {
  id: string;
  label: string;
  unit: string;
  value: string;
  onChange: (v: string) => void;
  min: number;
  max: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold tracking-wider text-white/80 uppercase">
        {label} <span className="text-white/60">({unit})</span>
      </label>
      <div className="mt-2 flex items-center border-b-2 border-white/20 focus-within:border-brand-red">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 [appearance:textfield] bg-transparent py-2 font-display text-4xl text-white outline-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="font-display text-xl text-white/60">{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={Number(value) || min}
        onChange={(e) => onChange(e.target.value)}
        aria-label={`${label} slider`}
        className="mt-3 w-full accent-[var(--brand-red)]"
      />
    </div>
  );
}
