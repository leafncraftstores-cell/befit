import { features } from "@/data/features";
import { FeatureCard } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyBefit() {
  return (
    <section
      aria-labelledby="why-title"
      className="section-y relative overflow-hidden bg-white text-brand-black"
    >
      {/* Decorative word drawn with CSS content so it is not treated as page text */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 font-display text-[22vw] leading-none text-brand-grey uppercase select-none before:content-['Why'] lg:text-[16rem]"
      />
      <div className="container-x relative">
        <SectionHeading
          id="why-title"
          tone="light"
          eyebrow="Why BE-FIT"
          title="Everything you need. Nothing you don't."
          highlight="Nothing you don't."
          subtitle="A premium training experience in Mahadevapura without the premium attitude."
        />
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f, i) => (
            <li
              key={f.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 5) * 60}ms` }}
            >
              <FeatureCard {...f} tone="light" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
