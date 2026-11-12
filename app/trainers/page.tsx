import { images } from "@/data/images";
import { trainers } from "@/data/trainers";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrainerCard } from "@/components/ui/TrainerCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Trainers: Certified Personal Trainers in Mahadevapura",
  description:
    "Meet the certified coaches at BE-FIT Fitness, Mahadevapura: strength, fat loss, functional training, Zumba, yoga and nutrition specialists. Book personal training.",
  path: "/trainers/",
  keywords: ["personal trainer Mahadevapura", "fitness trainer Whitefield"],
});

export default function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Coaches who push you further"
        highlight="further"
        subtitle="Certified, experienced and invested in your progress, from your first session to your next milestone."
        image={images.personal}
        crumbs={[{ name: "Trainers", path: "/trainers/" }]}
      />
      <section aria-labelledby="team-title" className="section-y bg-brand-black">
        <div className="container-x">
          <SectionHeading
            id="team-title"
            eyebrow="The Team"
            title="Meet the coaches"
            highlight="coaches"
            subtitle="[Trainer names, photos, specialisations and certifications to be supplied by BE-FIT]"
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((t, i) => (
              <li
                key={t.id}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
              >
                <TrainerCard trainer={t} className="h-full" />
              </li>
            ))}
          </ul>
          <div className="clip-card mt-16 flex flex-col items-start justify-between gap-6 border border-white/10 bg-brand-charcoal p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-4xl text-white">
                <span className="skew-title">
                  Want one-on-one <span className="text-brand-red">coaching?</span>
                </span>
              </h2>
              <p className="mt-2 text-white/70">
                Personal training is available as an add-on to any membership.
              </p>
            </div>
            <ButtonLink href="/membership/" size="lg">
              See Personal Training
            </ButtonLink>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
