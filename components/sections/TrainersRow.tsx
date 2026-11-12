import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainers, type Trainer } from "@/data/trainers";
import { Carousel } from "@/components/ui/Carousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrainerCard } from "@/components/ui/TrainerCard";

export function TrainersRow({
  list = trainers,
  title = "Meet your coaches",
  eyebrow = "Our Trainers",
}: {
  list?: Trainer[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section aria-labelledby="trainers-title" className="section-y relative bg-brand-black">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            id="trainers-title"
            eyebrow={eyebrow}
            title={title}
            highlight="coaches"
            subtitle="Certified, experienced and invested in your progress. [Trainer profiles to be supplied by BE-FIT]"
          />
        </div>
        <Carousel label="Trainers" className="mt-10">
          {list.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[calc(25%-15px)]"
            >
              <TrainerCard trainer={t} className="h-full" />
            </div>
          ))}
        </Carousel>
        <Link
          href="/trainers/"
          className="group mt-8 inline-flex items-center gap-2 font-display text-lg tracking-wider text-white uppercase hover:text-brand-red-light"
        >
          View the full team
          <ArrowRight
            className="size-5 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
