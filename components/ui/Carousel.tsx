"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Native CSS scroll-snap carousel with prev/next buttons. Slides are server-rendered
 * children; this component only adds the button behaviour (tiny JS, no slider library).
 */
export function Carousel({
  children,
  label,
  className,
  trackClassName,
}: {
  children: ReactNode;
  label: string;
  className?: string;
  trackClassName?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 20 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="mb-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous slide"
          className="grid size-12 -skew-x-12 place-items-center bg-white/10 text-white transition-colors hover:bg-brand-red"
        >
          <ChevronLeft className="size-6 skew-x-12" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next slide"
          className="grid size-12 -skew-x-12 place-items-center bg-brand-red text-white transition-colors hover:bg-brand-red-dark"
        >
          <ChevronRight className="size-6 skew-x-12" />
        </button>
      </div>
      <div
        ref={track}
        tabIndex={0}
        aria-label={`${label}: scroll horizontally`}
        className={cn(
          "no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:px-0",
          trackClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
