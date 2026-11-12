import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { WhyBefit } from "@/components/sections/WhyBefit";

export const metadata = pageMetadata({
  title: "Programs: Strength, Weight Loss, PT, HIIT, Zumba & Yoga",
  description:
    "Explore BE-FIT Fitness programs in Mahadevapura: strength training, weight loss, muscle building, personal training, functional training, HIIT, Zumba, yoga and nutrition coaching.",
  path: "/programs/",
  keywords: ["weight loss program Mahadevapura", "Zumba Mahadevapura", "yoga classes Mahadevapura"],
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Find your program"
        highlight="program"
        subtitle="Nine ways to train, one goal: a stronger you. Every program starts with a free assessment."
        image={images.strength}
        crumbs={[{ name: "Programs", path: "/programs/" }]}
      />
      <ProgramsGrid heading={false} />
      <WhyBefit />
      <FinalCta />
    </>
  );
}
