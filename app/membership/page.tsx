import { Check, Minus } from "lucide-react";
import { membershipFaqs } from "@/data/faqs";
import { images } from "@/data/images";
import { comparison, membershipTerms, plans } from "@/data/plans";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { AddOns, PlanTabs } from "@/components/sections/MembershipPlans";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = pageMetadata({
  title: "Membership Plans & Gym Fees in Mahadevapura",
  description:
    "BE-FIT Fitness membership plans: monthly, quarterly, half-yearly and yearly. Compare Basic, Pro and Elite, plus personal training and couple plans. Free trial available.",
  path: "/membership/",
  keywords: ["gym fees Mahadevapura", "gym membership Mahadevapura"],
});

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Invest in a stronger you"
        highlight="stronger you"
        subtitle="Flexible plans for every goal and budget. Start with a free trial, no commitment."
        image={images.muscle}
        crumbs={[{ name: "Membership", path: "/membership/" }]}
      />

      <section
        aria-labelledby="plans-title"
        className="section-y relative overflow-hidden bg-brand-black"
      >
        <div
          aria-hidden
          className="absolute top-1/4 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-red/10 blur-3xl"
        />
        <div className="container-x relative">
          <SectionHeading
            id="plans-title"
            align="center"
            eyebrow="Plans"
            title="Choose your plan"
            highlight="plan"
            subtitle="[All prices are placeholders, to be confirmed by BE-FIT]"
          />
          <PlanTabs />
          <h2 className="mt-20 text-4xl text-white sm:text-5xl">
            <span className="skew-title">
              Add-ons & <span className="text-brand-red">special plans</span>
            </span>
          </h2>
          <AddOns className="mt-8" />
        </div>
      </section>

      {/* Comparison table */}
      <section aria-labelledby="compare-title" className="section-y bg-white text-brand-black">
        <div className="container-x">
          <SectionHeading
            id="compare-title"
            tone="light"
            eyebrow="Compare"
            title="Plan comparison"
            highlight="comparison"
          />
          <div
            className="mt-10 overflow-x-auto border border-black/10"
            tabIndex={0}
            role="region"
            aria-label="Plan comparison table (scrolls horizontally)"
          >
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Features included in each membership plan</caption>
              <thead>
                <tr className="bg-brand-black text-white">
                  <th scope="col" className="p-4 font-display text-lg tracking-wider uppercase">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      scope="col"
                      className={`p-4 text-center font-display text-lg tracking-wider uppercase ${p.popular ? "bg-brand-red" : ""}`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-black/10 even:bg-brand-grey">
                    <th scope="row" className="p-4 font-semibold">
                      {row.feature}
                    </th>
                    {plans.map((p) => {
                      const v = row.values[p.id];
                      return (
                        <td key={p.id} className="p-4 text-center">
                          {v === true ? (
                            <Check
                              className="mx-auto size-5 text-brand-red"
                              aria-label="Included"
                            />
                          ) : v === false || v === undefined ? (
                            <Minus
                              className="mx-auto size-5 text-black/30"
                              aria-label="Not included"
                            />
                          ) : (
                            <span className="font-semibold">{v}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-4xl sm:text-5xl">
              <span className="skew-title">
                Membership <span className="text-brand-red">terms</span>
              </span>
            </h2>
            <ol className="list-decimal space-y-3 pl-5 text-brand-muted-dark marker:font-bold marker:text-brand-red">
              {membershipTerms.map((t) => (
                <li key={t}>{t}</li>
              ))}
              <li className="list-none text-sm text-amber-800">
                [Final terms to be confirmed by BE-FIT]
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className="h-px bg-black/10" />
      <FaqSection faqs={membershipFaqs} title="Membership FAQs" highlight="FAQs" />
      <FinalCta />
    </>
  );
}
