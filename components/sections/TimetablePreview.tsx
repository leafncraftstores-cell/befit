import { ArrowRight, Clock } from "lucide-react";
import { dayNames, days, timetable } from "@/data/timetable";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";

/** Day tabs; the client picks today's tab after hydration. */
export function TimetablePreview() {
  return (
    <section aria-labelledby="tt-title" className="section-y relative bg-brand-black">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            id="tt-title"
            eyebrow="Class Timetable"
            title="Today at BE-FIT"
            highlight="BE-FIT"
            subtitle="From sunrise HIIT to evening Zumba, there's a class for every schedule. Sample timetable: times to be confirmed."
          />
          <ButtonLink href="/timetable/" variant="outline" className="mt-8">
            Full Weekly Timetable <ArrowRight className="size-5" aria-hidden />
          </ButtonLink>
        </div>
        <div data-reveal>
          <Tabs
            label="Day of the week"
            pickInitial="today"
            items={days.map((d) => ({
              id: d,
              label: d,
              content: (
                <div className="mt-6">
                  <h3 className="sr-only">{dayNames[d]} classes</h3>
                  <ul className="min-h-[29rem] divide-y divide-white/10 border-y border-white/10">
                    {timetable[d].map((c) => (
                      <li
                        key={`${c.time}-${c.name}`}
                        className="group flex items-center gap-4 py-4 transition-colors hover:bg-white/[0.03] sm:gap-6"
                      >
                        <span className="w-20 shrink-0 font-display text-xl text-brand-red-light sm:w-24 sm:text-2xl">
                          {c.time}
                        </span>
                        <span className="flex-1">
                          <span className="block text-lg font-bold text-white">{c.name}</span>
                          <span className="flex items-center gap-1.5 text-sm text-white/60">
                            <Clock className="size-3.5" aria-hidden /> {c.duration} · {c.coach}
                          </span>
                        </span>
                        <span className="hidden -skew-x-12 bg-white/10 px-2.5 py-1 text-xs font-bold tracking-wider text-white uppercase sm:inline-block">
                          <span className="inline-block skew-x-12">{c.type}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
