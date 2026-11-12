import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { site } from "@/data/site";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BmiSection } from "@/components/sections/BmiSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Hero } from "@/components/sections/Hero";
import { MembershipPreview } from "@/components/sections/MembershipPlans";
import { PillarsStrip } from "@/components/sections/PillarsStrip";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { TimetablePreview } from "@/components/sections/TimetablePreview";
import { TrainersRow } from "@/components/sections/TrainersRow";
import { Transformation } from "@/components/sections/Transformation";
import { WhyBefit } from "@/components/sections/WhyBefit";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";

export const metadata: Metadata = {
  title: { absolute: "BE-FIT Fitness | Gym in Mahadevapura, Bengaluru (Now Open)" },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsStrip />
      <Stats />
      <AboutPreview />
      <DiagonalDivider from="white" to="black" />
      <ProgramsGrid />
      <WhyBefit />
      <Transformation />
      <MembershipPreview />
      <TrainersRow />
      <BmiSection />
      <TimetablePreview />
      <GalleryPreview />
      <Testimonials />
      <DiagonalDivider from="black" to="white" flip />
      <FaqSection faqs={faqs} />
      <FinalCta />
      <ContactSection />
    </>
  );
}
