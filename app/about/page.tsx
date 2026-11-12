import { Eye, Flag, Rocket } from "lucide-react";
import { features, pillars } from "@/data/features";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { BrandImage } from "@/components/ui/BrandImage";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { SkewedTitle } from "@/components/ui/SkewedTitle";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";

export const metadata = pageMetadata({
  title: "About Us: New Gym in Mahadevapura",
  description:
    "Meet BE-FIT Fitness, Mahadevapura's new gym for strength, fitness and transformation. Our story, mission, vision, the five pillars and our facilities. Now open.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BE-FIT"
        title="A new beginning in Mahadevapura"
        highlight="Mahadevapura"
        subtitle="Stronger today. Fitter tomorrow. The story behind your new neighbourhood gym."
        image={images.aboutMain}
        crumbs={[{ name: "About", path: "/about/" }]}
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="section-y bg-brand-black">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left">
            <SectionHeading
              id="story-title"
              eyebrow="Our Story"
              title="Built for the grind"
              highlight="grind"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/75">
              <p>
                BE-FIT Fitness was created with one belief: everyone in Mahadevapura deserves a gym
                that takes their goals as seriously as they do. No intimidation, no guesswork, just
                expert coaching, quality equipment and a crowd that shows up.
              </p>
              <p>
                Whether you&apos;re a first-timer, a working professional squeezing in an early
                session before the commute, or a seasoned lifter chasing a new PR, BE-FIT gives you
                the space, the structure and the support to get there.
              </p>
              <p className="text-sm text-white/60">
                [Founder story and photos to be supplied by BE-FIT]
              </p>
            </div>
          </div>
          <div
            data-reveal="right"
            className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal"
          >
            <BrandImage
              src={images.aboutSecondary.src}
              alt={images.aboutSecondary.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              wrapperClassName="h-full w-full"
            />
            <div className="absolute bottom-0 left-0 bg-brand-red px-6 py-4">
              <p className="font-display text-3xl uppercase">
                <span className="skew-title">Now Open</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section aria-label="Mission and vision" className="section-y bg-white text-brand-black">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Flag,
              title: "Our Mission",
              text: "To help every member get measurably stronger and healthier through expert coaching, honest guidance and a motivating environment.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be East Bengaluru's most trusted fitness community, where transformations happen every day and everyone feels they belong.",
            },
            {
              icon: Rocket,
              title: "Our Promise",
              text: "Clean spaces, well-maintained equipment, certified trainers and plans built around you, from your first visit onwards.",
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="card-lift clip-card border-t-4 border-brand-red bg-brand-grey p-8"
            >
              <Icon className="size-10 text-brand-red" aria-hidden />
              <h2 className="mt-5 text-4xl">
                <span className="skew-title">{title}</span>
              </h2>
              <p className="mt-3 leading-relaxed text-brand-muted-dark">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Five pillars in depth */}
      <section aria-labelledby="pillars-title" className="section-y grain relative bg-brand-black">
        <div className="container-x relative z-[2]">
          <SectionHeading
            id="pillars-title"
            align="center"
            eyebrow="The BE-FIT Way"
            title="Five pillars. One stronger you."
            highlight="One stronger you."
          />
          <ol className="mt-16 space-y-4">
            {pillars.map(({ icon: Icon, title, long }, i) => (
              <li
                key={title}
                data-reveal={i % 2 ? "right" : "left"}
                className="card-lift clip-card group grid items-center gap-6 border border-white/10 bg-brand-charcoal p-6 sm:grid-cols-[auto_auto_1fr] sm:gap-10 sm:p-8"
              >
                <span className="text-outline font-display text-7xl leading-none transition-colors group-hover:text-brand-red sm:text-8xl">
                  0{i + 1}
                </span>
                <span className="grid size-16 -skew-x-12 place-items-center bg-brand-red">
                  <Icon className="size-8 skew-x-12" aria-hidden />
                </span>
                <div>
                  <h3 className="text-4xl tracking-wider text-white">{title}</h3>
                  <p className="mt-2 max-w-3xl text-white/75">{long}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Stats />

      {/* Facilities */}
      <section aria-labelledby="facilities-title" className="section-y bg-white text-brand-black">
        <div className="container-x">
          <SectionHeading
            id="facilities-title"
            tone="light"
            eyebrow="Facilities"
            title="Everything under one roof"
            highlight="one roof"
            subtitle="[Final facility list to be confirmed by BE-FIT]"
          />
          <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((f) => (
              <li key={f.title} data-reveal>
                <FeatureCard {...f} tone="light" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Now open story */}
      <section
        aria-labelledby="open-title"
        className="section-y relative overflow-hidden bg-brand-charcoal"
      >
        <div
          aria-hidden
          className="absolute top-10 -right-20 h-32 w-[70%] -rotate-6 bg-brand-red/15"
        />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div data-reveal>
            <Eyebrow>Now Open</Eyebrow>
            <SkewedTitle
              id="open-title"
              highlight="is open."
              className="mt-4 text-[2.6rem] text-white sm:text-6xl lg:text-7xl"
            >
              The wait is over. BE-FIT is open.
            </SkewedTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              What started as a &ldquo;Coming Soon&rdquo; poster is now a fully running gym in
              Mahadevapura. The floor is set, the coaches are ready and the first members are
              already putting in the work. Come and see it for yourself: your first session is on
              us.
            </p>
          </div>
          <div data-reveal="right" className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/contact/#enquiry" size="lg">
              Book a Free Trial
            </ButtonLink>
            <ButtonLink href="/membership/" variant="outline" size="lg">
              View Membership
            </ButtonLink>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
