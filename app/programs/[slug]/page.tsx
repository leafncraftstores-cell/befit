import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Gauge, UserRound } from "lucide-react";
import { getProgram, programs } from "@/data/programs";
import { getTrainers } from "@/data/trainers";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/contact";
import { BrandImage } from "@/components/ui/BrandImage";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProgramCard } from "@/components/sections/ProgramsGrid";
import { TrainersRow } from "@/components/sections/TrainersRow";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return pageMetadata({
    title: `${program.name} in Mahadevapura`,
    description: `${program.short} ${program.name} at BE-FIT Fitness, Mahadevapura, Bengaluru. Book a free trial.`,
    path: `/programs/${program.slug}/`,
    keywords: [`${program.name.toLowerCase()} Mahadevapura`],
  });
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);
  const coaches = getTrainers(program.trainerIds);
  const Icon = program.icon;

  return (
    <>
      <PageHero
        eyebrow="Program"
        title={program.name}
        subtitle={program.short}
        image={program.image}
        crumbs={[
          { name: "Programs", path: "/programs/" },
          { name: program.name, path: `/programs/${program.slug}/` },
        ]}
      />

      {/* Overview + quick facts */}
      <section aria-labelledby="overview-title" className="section-y bg-brand-black">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div data-reveal>
            <SectionHeading
              id="overview-title"
              eyebrow="Overview"
              title="What to expect"
              highlight="expect"
            />
            <p className="mt-6 text-lg leading-relaxed text-white/80">{program.description}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {program.whatToExpect.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-l-2 border-brand-red bg-white/[0.03] p-4 text-white/85"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-brand-red-light"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside
            data-reveal="right"
            className="clip-card h-fit border border-white/10 bg-brand-charcoal p-7"
          >
            <span className="grid size-14 -skew-x-12 place-items-center bg-brand-red">
              <Icon className="size-7 skew-x-12" aria-hidden />
            </span>
            <dl className="mt-6 divide-y divide-white/10">
              {[
                { icon: Gauge, label: "Level", value: program.level },
                { icon: Clock, label: "Session", value: program.sessionLength },
                {
                  icon: UserRound,
                  label: "Coaches",
                  value: `${coaches.length} specialist${coaches.length === 1 ? "" : "s"}`,
                },
              ].map(({ icon: I, label, value }) => (
                <div key={label} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="flex items-center gap-2 text-sm font-semibold tracking-wider text-white/60 uppercase">
                    <I className="size-4" aria-hidden /> {label}
                  </dt>
                  <dd className="text-right font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink
              href={whatsappLink(
                `Hi BE-FIT, I'd like a free trial of the ${program.name} program.`,
              )}
              className="mt-6 w-full"
            >
              <WhatsappIcon className="size-5" /> Book a Free Trial
            </ButtonLink>
          </aside>
        </div>
      </section>

      {/* Who it's for + benefits */}
      <section
        aria-label="Who it's for and benefits"
        className="section-y bg-white text-brand-black"
      >
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <SectionHeading
              tone="light"
              eyebrow="Who it's for"
              title="Made for you if…"
              highlight="you"
            />
            <ul className="mt-8 space-y-4">
              {program.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-4 text-lg">
                  <span className="mt-1 grid size-7 shrink-0 -skew-x-12 place-items-center bg-brand-red text-sm font-bold text-white">
                    <span className="skew-x-12">✓</span>
                  </span>
                  {w}
                </li>
              ))}
            </ul>
            <BrandImage
              src={program.image.src}
              alt={program.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              wrapperClassName="mt-10 aspect-[16/10]"
            />
          </div>
          <div data-reveal="right">
            <SectionHeading
              tone="light"
              eyebrow="Benefits"
              title="What you'll gain"
              highlight="gain"
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {program.benefits.map((b, i) => (
                <li key={b.title} className="card-lift clip-card bg-brand-grey p-6">
                  <span className="font-display text-5xl text-brand-red">0{i + 1}</span>
                  <h3 className="mt-2 text-2xl">{b.title}</h3>
                  <p className="mt-1 text-brand-muted-dark">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sample weekly plan */}
      <section aria-labelledby="plan-title" className="section-y bg-brand-black">
        <div className="container-x">
          <SectionHeading
            id="plan-title"
            eyebrow="Sample Week"
            title="Your weekly plan"
            highlight="weekly plan"
            subtitle="An example structure. Your coach will personalise it to your level, goals and schedule."
          />
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {program.weeklyPlan.map((d, i) => (
              <li
                key={d.day}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
                className={
                  d.focus === "Rest"
                    ? "clip-card border border-dashed border-white/20 p-5"
                    : "card-lift clip-card border border-white/10 bg-brand-charcoal p-5 hover:border-brand-red"
                }
              >
                <p className="font-display text-3xl text-brand-red">{d.day}</p>
                <p className="mt-2 font-semibold text-white/90">{d.focus}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {coaches.length ? (
        <TrainersRow list={coaches} title="Your coaches" eyebrow="Related Trainers" />
      ) : null}

      {/* Related programs */}
      <section aria-labelledby="related-title" className="section-y bg-brand-charcoal">
        <div className="container-x">
          <SectionHeading
            id="related-title"
            eyebrow="Keep exploring"
            title="Other programs"
            highlight="programs"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProgramCard key={p.slug} program={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
