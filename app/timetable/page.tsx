import { images } from "@/data/images";
import { timetable } from "@/data/timetable";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimetableBoard } from "@/components/ui/TimetableBoard";
import { HoursCard } from "@/components/ui/HoursCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Class Timetable: HIIT, Zumba, Yoga & Strength Classes",
  description:
    "Weekly class timetable at BE-FIT Fitness, Mahadevapura: morning HIIT, strength club, Zumba, yoga, functional WODs and a ladies' batch. Filter by class type.",
  path: "/timetable/",
  keywords: ["Zumba timings Mahadevapura", "gym class timetable Bengaluru"],
});

export default function TimetablePage() {
  return (
    <>
      <PageHero
        eyebrow="Timetable"
        title="Your week, planned"
        highlight="planned"
        subtitle="Group classes from sunrise to late evening, seven days a week."
        image={images.timetable}
        crumbs={[{ name: "Timetable", path: "/timetable/" }]}
      />
      <section aria-labelledby="schedule-title" className="section-y bg-brand-black">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="schedule-title"
              eyebrow="Weekly Schedule"
              title="Class timetable"
              highlight="timetable"
              subtitle="[Sample timetable: class times and coaches to be confirmed by BE-FIT]"
            />
            <HoursCard className="w-full lg:max-w-sm" />
          </div>
          <div className="mt-12">
            <TimetableBoard data={timetable} />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
