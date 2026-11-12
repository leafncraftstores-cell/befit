import { pillars } from "@/data/features";
import { cn } from "@/lib/utils";

/** Five brand pillars, poster-style: red icons on black split by thin red dividers. */
export function PillarsStrip({ className }: { className?: string }) {
  return (
    <section
      id="pillars"
      aria-label="Our five pillars"
      className={cn("relative bg-brand-black", className)}
    >
      <div className="container-x">
        <h2 className="sr-only">Our five pillars</h2>
        {/* gap-px over a red background = thin red dividers at every breakpoint */}
        <ul className="grid grid-cols-2 gap-px border-y border-brand-red/40 bg-brand-red/40 sm:grid-cols-6 lg:grid-cols-5">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              className={cn(
                "group relative flex flex-col items-center bg-brand-black px-4 py-9 text-center sm:py-11 lg:col-span-1",
                i < 3 ? "sm:col-span-2" : "sm:col-span-3",
                i === pillars.length - 1 && "col-span-2",
              )}
            >
              <Icon
                className="size-11 text-brand-red transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:size-12"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="mt-4 text-2xl tracking-[0.12em] text-white sm:text-3xl">{title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-snug text-white/70">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
