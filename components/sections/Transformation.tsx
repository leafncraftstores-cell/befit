import { Target, TrendingUp, CalendarCheck } from "lucide-react";
import { LazyBeforeAfter } from "@/components/ui/LazyIslands";
import { TransformationPlaceholder } from "@/components/ui/TransformationPlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { icon: Target, title: "Assess", text: "Body measurements, goals and a fitness baseline." },
  { icon: CalendarCheck, title: "Commit", text: "A structured plan with training and nutrition." },
  { icon: TrendingUp, title: "Transform", text: "Monthly check-ins so you can see the change." },
];

export function Transformation() {
  return (
    <section
      aria-labelledby="transform-title"
      className="section-y grain relative overflow-hidden bg-brand-charcoal"
    >
      <div
        aria-hidden
        className="absolute top-1/3 -left-40 h-40 w-[70%] -rotate-12 bg-brand-red/10"
      />
      <div className="container-x relative z-[2] grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            id="transform-title"
            eyebrow="Transformations"
            title="Real people. Real change."
            highlight="Real change."
            subtitle="Our members' journeys will be showcased here. Drag the slider to compare before and after."
          />
          <ol className="mt-10 space-y-5">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                className="flex gap-4"
              >
                <span className="grid size-12 shrink-0 -skew-x-12 place-items-center bg-brand-red">
                  <Icon className="size-6 skew-x-12" aria-hidden />
                </span>
                <div>
                  <h3 className="text-2xl tracking-wide text-white">
                    <span className="mr-2 text-brand-red-light">0{i + 1}</span>
                    {title}
                  </h3>
                  <p className="text-white/70">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink href="/contact/#enquiry" className="mt-10">
            Start Your Transformation
          </ButtonLink>
        </div>
        <div data-reveal="right">
          <LazyBeforeAfter
            label="Member transformation before and after (placeholder)"
            before={<TransformationPlaceholder variant="before" />}
            after={<TransformationPlaceholder variant="after" />}
            className="clip-card border border-white/10"
          />
          <p className="mt-3 text-center text-sm text-amber-300">
            [Member transformation: to be supplied by BE-FIT]
          </p>
        </div>
      </div>
    </section>
  );
}
