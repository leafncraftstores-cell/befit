"use client";

import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import {
  classTypes,
  dayNames,
  days,
  type ClassType,
  type timetable as Timetable,
} from "@/data/timetable";
import { cn } from "@/lib/utils";

const typeColors: Record<ClassType, string> = {
  Strength: "border-l-brand-red",
  HIIT: "border-l-orange-500",
  Zumba: "border-l-pink-500",
  Yoga: "border-l-emerald-500",
  Functional: "border-l-sky-500",
  Ladies: "border-l-violet-500",
};

/**
 * Weekly schedule: a Mon–Sun grid on desktop, stacked day accordions on mobile,
 * with filter chips by class type.
 */
export function TimetableBoard({ data }: { data: typeof Timetable }) {
  const [filter, setFilter] = useState<ClassType | "All">("All");
  const show = (t: ClassType) => filter === "All" || filter === t;

  return (
    <div>
      <div role="group" aria-label="Filter classes by type" className="flex flex-wrap gap-2">
        {(["All", ...classTypes] as const).map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={filter === t}
            onClick={() => setFilter(t)}
            className={cn(
              "-skew-x-12 px-4 py-2 text-sm font-bold tracking-wider uppercase transition-colors",
              filter === t
                ? "bg-brand-red text-white"
                : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
            )}
          >
            <span className="inline-block skew-x-12">{t}</span>
          </button>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="mt-10 hidden gap-2 lg:grid lg:grid-cols-7">
        {days.map((d) => {
          const sessions = data[d].filter((s) => show(s.type));
          return (
            <div key={d} className="min-w-0">
              <h3 className="-skew-x-6 bg-brand-red py-3 text-center text-2xl tracking-wider text-white">
                <span className="inline-block skew-x-6">{d}</span>
              </h3>
              <ul className="mt-2 space-y-2">
                {sessions.length ? (
                  sessions.map((s) => (
                    <li
                      key={`${s.time}-${s.name}`}
                      className={cn(
                        "border-l-4 bg-brand-charcoal p-3 transition-colors hover:bg-white/10",
                        typeColors[s.type],
                      )}
                    >
                      <p className="font-display text-lg text-white">{s.time}</p>
                      <p className="text-sm leading-tight font-bold text-white">{s.name}</p>
                      <p className="mt-1 text-xs text-white/60">{s.duration}</p>
                    </li>
                  ))
                ) : (
                  <li className="border border-dashed border-white/15 p-3 text-center text-xs text-white/50">
                    No classes
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Mobile accordions */}
      <div className="mt-8 space-y-2 lg:hidden">
        {days.map((d, i) => {
          const sessions = data[d].filter((s) => show(s.type));
          return (
            <details key={d} className="group bg-brand-charcoal" open={i === 0 || undefined}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-4">
                <span className="flex items-baseline gap-3">
                  <span className="font-display text-2xl tracking-wide text-white uppercase">
                    {dayNames[d]}
                  </span>
                  <span className="text-sm text-white/60">
                    {sessions.length} class{sessions.length === 1 ? "" : "es"}
                  </span>
                </span>
                <ChevronDown
                  className="size-5 text-brand-red-light transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <ul className="space-y-2 px-4 pb-4">
                {sessions.length ? (
                  sessions.map((s) => (
                    <li
                      key={`${s.time}-${s.name}`}
                      className={cn(
                        "flex items-center gap-4 border-l-4 bg-brand-black/60 p-3",
                        typeColors[s.type],
                      )}
                    >
                      <span className="w-20 shrink-0 font-display text-lg text-white">
                        {s.time}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-white">{s.name}</span>
                        <span className="flex items-center gap-1 text-xs text-white/60">
                          <Clock className="size-3" aria-hidden /> {s.duration} · {s.type}
                        </span>
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="p-3 text-sm text-white/50">
                    No {filter} classes on {dayNames[d]}.
                  </li>
                )}
              </ul>
            </details>
          );
        })}
      </div>

      {/* Legend */}
      <ul
        className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70"
        aria-label="Class type colours"
      >
        {classTypes.map((t) => (
          <li key={t} className={cn("border-l-4 pl-2", typeColors[t])}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
