import Image from "next/image";
import { images } from "@/data/images";
import { BLUR_DATA_URL } from "@/components/ui/BrandImage";
import { LazyBMICalculator } from "@/components/ui/LazyIslands";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BmiSection() {
  return (
    <section
      aria-labelledby="bmi-title"
      className="clip-both relative overflow-hidden bg-brand-charcoal py-[calc(4vw+5rem)]"
    >
      <Image
        src={images.bmi.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="photo-treat object-cover opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/50"
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          id="bmi-title"
          eyebrow="Know your numbers"
          title="Check your BMI in seconds"
          highlight="BMI"
          subtitle="Body Mass Index is a quick starting point. Enter your height and weight, then let our trainers build a plan around your goals."
        />
        <div data-reveal="right" className="min-w-0">
          <LazyBMICalculator />
        </div>
      </div>
    </section>
  );
}
