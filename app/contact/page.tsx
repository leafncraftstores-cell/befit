import { Phone } from "lucide-react";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { telLink, whatsappLink } from "@/lib/contact";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Contact & Free Trial: Gym in Mahadevapura",
  description: `Contact BE-FIT Fitness, Mahadevapura, Bengaluru. Call or WhatsApp ${site.phone.display}, check opening hours, get directions and book your free trial.`,
  path: "/contact/",
  keywords: ["gym near me Mahadevapura", "gym contact Mahadevapura"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get you started"
        highlight="started"
        subtitle="Call, WhatsApp or drop in. Your first session at BE-FIT is a free trial."
        image={images.contact}
        crumbs={[{ name: "Contact", path: "/contact/" }]}
      />
      <section aria-label="Quick contact" className="bg-brand-black pt-4">
        <div className="container-x grid gap-4 sm:grid-cols-2">
          <ButtonLink
            href={telLink}
            size="lg"
            variant="outline"
            className="h-20 text-xl sm:text-2xl"
          >
            <Phone className="size-6" aria-hidden /> {site.phone.display}
          </ButtonLink>
          <ButtonLink href={whatsappLink()} size="lg" className="h-20 text-xl sm:text-2xl">
            <WhatsappIcon className="size-6" /> WhatsApp Us
          </ButtonLink>
        </div>
      </section>
      <ContactSection heading={false} />
    </>
  );
}
