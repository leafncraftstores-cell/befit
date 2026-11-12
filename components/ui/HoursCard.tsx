import { Clock } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function HoursCard({ className }: { className?: string }) {
  return (
    <div className={cn("clip-card border border-white/10 bg-brand-charcoal p-6 sm:p-7", className)}>
      <h3 className="flex items-center gap-3 text-2xl tracking-wide text-white">
        <Clock className="size-6 text-brand-red-light" aria-hidden /> Opening Hours
      </h3>
      <dl className="mt-5 divide-y divide-white/10">
        {site.hours.map((h) => (
          <div
            key={h.label}
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3"
          >
            <dt className="font-semibold text-white/80">{h.label}</dt>
            <dd className="font-display text-xl text-white">{h.display}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-white/60">
        [Hours are placeholders, to be confirmed by BE-FIT]
      </p>
    </div>
  );
}
