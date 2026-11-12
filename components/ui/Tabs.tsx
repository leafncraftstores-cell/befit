"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TabItem = { id: string; label: string; content: ReactNode };

/**
 * Accessible tabs (WAI-ARIA pattern: arrow keys, Home/End). Panels are rendered on the server
 * and passed in as props, so switching tabs costs almost no JavaScript.
 * `pickInitial` lets the client choose the starting tab after hydration (e.g. "today").
 */
export function Tabs({
  items,
  label,
  defaultId,
  pickInitial,
  variant = "pill",
  className,
  listClassName,
}: {
  items: TabItem[];
  label: string;
  defaultId?: string;
  pickInitial?: "today";
  variant?: "pill" | "underline";
  className?: string;
  listClassName?: string;
}) {
  const uid = useId();
  const [active, setActive] = useState(defaultId ?? items[0]?.id ?? "");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (pickInitial === "today") {
      const day = new Date().toLocaleDateString("en-GB", { weekday: "short" }).slice(0, 3);
      if (items.some((i) => i.id === day)) setActive(day);
    }
    // only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const idx = items.findIndex((i) => i.id === active);
    let next = idx;
    if (e.key === "ArrowRight") next = (idx + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    const item = items[next];
    if (item) {
      setActive(item.id);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className={cn(
          "no-scrollbar max-w-full gap-1 overflow-x-auto",
          variant === "pill" && "bg-white/5 p-1",
          // listClassName fully controls the layout when given (no class-merging library here)
          listClassName ?? cn("flex", variant === "pill" && "w-fit"),
        )}
      >
        {items.map((item, i) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${uid}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              className={cn(
                "shrink-0 px-3 py-2.5 text-center text-xs font-bold tracking-wider uppercase transition-colors sm:px-5 sm:text-sm",
                variant === "pill" &&
                  (selected
                    ? "-skew-x-12 bg-brand-red text-white"
                    : "-skew-x-12 text-white/70 hover:text-white"),
                variant === "underline" &&
                  (selected
                    ? "border-b-2 border-brand-red text-white"
                    : "border-b-2 border-transparent text-white/60 hover:text-white"),
              )}
            >
              <span className={cn("inline-block", variant === "pill" && "skew-x-12")}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Only the active panel is in the DOM (smaller page, cheaper hydration); the other
          panels are already in the server payload, so switching is instant. */}
      <div
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${active}`}
        tabIndex={0}
        className="focus-visible:outline-offset-8"
      >
        {items.find((i) => i.id === active)?.content}
      </div>
    </div>
  );
}
