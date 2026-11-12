import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Badge } from "@/components/ui/Badge";
import { Carousel } from "@/components/ui/Carousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      aria-labelledby="reviews-title"
      className="section-y grain relative overflow-hidden bg-brand-black"
    >
      <div className="container-x relative z-[2]">
        <SectionHeading
          id="reviews-title"
          eyebrow="Member Stories"
          title="What our members say"
          highlight="members"
          subtitle="Genuine reviews from BE-FIT members will appear here."
        />
        <Carousel label="Member reviews" className="mt-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="clip-card relative flex w-[86%] shrink-0 snap-start flex-col border border-dashed border-amber-400/40 bg-brand-charcoal p-7 sm:w-[48%] sm:p-8 lg:w-[calc(33.333%-14px)]"
            >
              <Quote className="size-10 text-brand-red" aria-hidden />
              <div className="mt-4 flex gap-1 text-white/25" aria-hidden>
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="size-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-xl leading-relaxed font-medium text-amber-300">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <span className="block font-bold text-white">{t.name}</span>
                <span className="text-sm text-white/60">{t.detail}</span>
              </figcaption>
              <Badge variant="placeholder" className="absolute top-5 right-5 text-[0.6rem]">
                Placeholder
              </Badge>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
