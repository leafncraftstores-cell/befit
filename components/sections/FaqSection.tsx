import { MessageCircleQuestion } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { faqJsonLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/contact";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection({
  faqs,
  title = "Got questions?",
  highlight = "questions?",
}: {
  faqs: Faq[];
  title?: string;
  highlight?: string;
}) {
  return (
    <section aria-labelledby="faq-title" className="section-y relative bg-white text-brand-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            id="faq-title"
            tone="light"
            eyebrow="FAQ"
            title={title}
            highlight={highlight}
            subtitle="Everything you need to know before your first session. Can't find your answer? Message us."
          />
          <div className="mt-8 flex items-start gap-4 bg-brand-grey p-6">
            <MessageCircleQuestion className="size-8 shrink-0 text-brand-red" aria-hidden />
            <div>
              <p className="font-bold">Still unsure?</p>
              <p className="text-sm text-brand-muted-dark">
                Our team usually replies within minutes.
              </p>
              <ButtonLink
                href={whatsappLink("Hi BE-FIT, I have a question.")}
                variant="dark"
                size="sm"
                className="mt-4"
              >
                Ask on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
        <div data-reveal>
          <Accordion
            tone="light"
            name="faq"
            defaultOpen="faq-0"
            items={faqs.map((f, i) => ({ id: `faq-${i}`, title: f.q, content: f.a }))}
          />
        </div>
      </div>
    </section>
  );
}
