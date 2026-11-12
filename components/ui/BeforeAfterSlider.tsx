"use client";

import { useState, type ReactNode } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Before/after comparison. Drag, click or use arrow keys (it's a native range input).
 * `before` / `after` can be any node: next/image for real photos, or a placeholder.
 */
export function BeforeAfterSlider({
  before,
  after,
  label = "Before and after comparison",
  className,
}: {
  before: ReactNode;
  after: ReactNode;
  label?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden select-none sm:aspect-[4/3]",
        className,
      )}
    >
      <div className="absolute inset-0">{after}</div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {before}
      </div>

      <span className="pointer-events-none absolute top-4 left-4 -skew-x-12 bg-brand-black px-3 py-1 text-xs font-bold tracking-widest uppercase">
        <span className="inline-block skew-x-12">Before</span>
      </span>
      <span className="pointer-events-none absolute top-4 right-4 -skew-x-12 bg-brand-red px-3 py-1 text-xs font-bold tracking-widest uppercase">
        <span className="inline-block skew-x-12">After</span>
      </span>

      {/* Handle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 -skew-x-12 place-items-center bg-brand-red shadow-lg">
          <MoveHorizontal className="size-6 skew-x-12" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={label}
        aria-valuetext={`${pos}% before`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
