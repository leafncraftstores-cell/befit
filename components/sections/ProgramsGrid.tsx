import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { programs, type Program } from "@/data/programs";
import { BLUR_DATA_URL } from "@/components/ui/BrandImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const Icon = program.icon;
  return (
    <Link
      href={`/programs/${program.slug}/`}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index % 3) * 80}ms` }}
      className="group card-lift clip-card relative block aspect-[4/5] overflow-hidden bg-brand-charcoal sm:aspect-[3/4]"
    >
      <Image
        src={program.image.src}
        alt={program.image.alt}
        fill
        sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 92vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="photo-treat object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"
      />
      {/* Red hover overlay sweeping up */}
      <div
        aria-hidden
        className="absolute inset-0 translate-y-full bg-gradient-to-t from-brand-red/95 via-brand-red/70 to-brand-red/10 transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0"
      />
      <span className="absolute top-5 left-5 grid size-12 -skew-x-12 place-items-center bg-brand-red text-white transition-colors group-hover:bg-white group-hover:text-brand-red">
        <Icon className="size-6 skew-x-12" aria-hidden />
      </span>
      <span className="absolute top-5 right-5 grid size-11 place-items-center border border-white/40 text-white transition-all group-hover:rotate-45 group-hover:border-white">
        <ArrowUpRight className="size-5" aria-hidden />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-3xl text-white sm:text-[2.1rem]">
          <span className="skew-title">{program.name}</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/85">{program.short}</p>
        <p className="mt-4 text-xs font-bold tracking-[0.25em] text-white uppercase">
          {program.level} · {program.sessionLength}
        </p>
      </div>
    </Link>
  );
}

export function ProgramsGrid({
  limit,
  heading = true,
  className,
}: {
  limit?: number;
  heading?: boolean;
  className?: string;
}) {
  const list = limit ? programs.slice(0, limit) : programs;
  return (
    <section
      aria-labelledby="programs-title"
      className={cn("section-y relative bg-brand-black", className)}
    >
      <div className="container-x">
        {heading ? (
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              id="programs-title"
              eyebrow="Programs"
              title="Train your way"
              highlight="your way"
              subtitle="Nine programs, one goal: a stronger you. Pick your path or mix and match. Our coaches will build the plan."
            />
          </div>
        ) : (
          <h2 id="programs-title" className="sr-only">
            All programs
          </h2>
        )}
        <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", heading && "mt-14")}>
          {list.map((p, i) => (
            <ProgramCard key={p.slug} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
