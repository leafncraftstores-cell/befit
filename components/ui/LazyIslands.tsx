"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

/*
 * Below-the-fold widgets whose JavaScript is fetched only as they approach the viewport.
 * Each fallback reserves the same space (no layout shift) and looks like the finished widget.
 */

const BMICalculator = dynamic(() => import("./BMICalculator").then((m) => m.BMICalculator), {
  ssr: false,
  loading: () => <BmiSkeleton />,
});

const BeforeAfterSlider = dynamic(
  () => import("./BeforeAfterSlider").then((m) => m.BeforeAfterSlider),
  { ssr: false },
);

const BMI_HEIGHT = "min-h-[46rem] sm:min-h-[40rem]";

function BmiSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading BMI calculator"
      className={cn("clip-card border border-white/10 bg-brand-charcoal p-6 sm:p-8", BMI_HEIGHT)}
    >
      <p className="font-display text-3xl text-white uppercase">
        <span className="skew-title">BMI Calculator</span>
      </p>
    </div>
  );
}

export function LazyBMICalculator() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={BMI_HEIGHT}>
      {inView ? <BMICalculator className={BMI_HEIGHT} /> : <BmiSkeleton />}
    </div>
  );
}

const frame = "relative aspect-[4/5] w-full overflow-hidden select-none sm:aspect-[4/3]";

export function LazyBeforeAfter({
  before,
  after,
  label,
  className,
}: {
  before: ReactNode;
  after: ReactNode;
  label: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref}>
      {inView ? (
        <BeforeAfterSlider before={before} after={after} label={label} className={className} />
      ) : (
        // Static preview identical to the slider at 50%
        <div className={cn(frame, className)}>
          <div className="absolute inset-0">{after}</div>
          <div className="absolute inset-0 [clip-path:inset(0_50%_0_0)]">{before}</div>
          <div aria-hidden className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white" />
        </div>
      )}
    </div>
  );
}
