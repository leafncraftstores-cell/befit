import { stats } from "@/data/site";
import { Counter } from "@/components/ui/Counter";

export function Stats() {
  return (
    <section aria-label="BE-FIT in numbers" className="relative py-6">
      <div className="clip-both grain relative bg-brand-red py-[calc(4vw+2.5rem)]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent_0_40px,rgb(0_0_0/0.06)_40px_80px)]"
        />
        <dl className="container-x relative z-[2] grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="flex flex-col items-center text-center lg:border-r lg:border-black/20 lg:last:border-r-0"
            >
              <dt className="order-2 mt-2 text-xs font-bold tracking-[0.3em] text-white/90 uppercase sm:text-sm">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-[clamp(3rem,11vw,6.5rem)] leading-none whitespace-nowrap text-white">
                <span className="skew-title">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="container-x relative z-[2] mt-8 text-center text-xs text-white/80">
          [Figures are placeholders, to be confirmed by BE-FIT]
        </p>
      </div>
    </section>
  );
}
