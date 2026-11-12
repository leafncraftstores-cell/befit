import Link from "next/link";
import { Check, Heart, UserCheck } from "lucide-react";
import { addOns, billingPeriods, formatPrice, plans } from "@/data/plans";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { Tabs } from "@/components/ui/Tabs";

/** Billing toggle + plan cards. All four period grids are pre-rendered; the toggle just swaps them. */
export function PlanTabs() {
  return (
    <Tabs
      label="Billing period"
      defaultId="monthly"
      className="mt-12"
      listClassName="mx-auto grid w-full max-w-xs grid-cols-2 sm:flex sm:w-fit sm:max-w-none"
      items={billingPeriods.map((period) => ({
        id: period.id,
        label: period.label,
        content: (
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} period={period.id} />
            ))}
          </div>
        ),
      }))}
    />
  );
}

export function AddOns({ className }: { className?: string }) {
  const icons = { "personal-training": UserCheck, couple: Heart } as const;
  return (
    <div className={cn("grid gap-6 lg:grid-cols-2", className)}>
      {addOns.map((a) => {
        const Icon = icons[a.id as keyof typeof icons] ?? UserCheck;
        return (
          <article
            key={a.id}
            data-reveal
            className="card-lift clip-card flex flex-col gap-6 border border-white/10 bg-gradient-to-br from-brand-charcoal to-brand-black p-7 sm:flex-row sm:items-center sm:p-8"
          >
            <span className="grid size-16 shrink-0 -skew-x-12 place-items-center bg-brand-red">
              <Icon className="size-8 skew-x-12" aria-hidden />
            </span>
            <div className="flex-1">
              <p className="text-xs font-bold tracking-[0.25em] text-brand-red-light uppercase">
                {a.id === "couple" ? "Special plan" : "Add-on"}
              </p>
              <h3 className="mt-1 text-3xl text-white">
                <span className="skew-title">{a.name}</span>
              </h3>
              <p className="mt-1 text-white/70">{a.description}</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/80">
                {a.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <Check className="size-4 text-brand-red-light" aria-hidden /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="font-display text-4xl text-white">{formatPrice(a.price)}</p>
              <p className="text-xs text-white/60">{a.unit}</p>
              <ButtonLink
                href={whatsappLink(
                  `Hi BE-FIT, I'm interested in the ${a.name}. Please share the details.`,
                )}
                size="sm"
                className="mt-3"
                aria-label={`Join Now: ${a.name} on WhatsApp`}
              >
                <WhatsappIcon className="size-4" /> Join Now
              </ButtonLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function MembershipPreview() {
  return (
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
          eyebrow="Membership"
          title="Pick your plan. Start today."
          highlight="Start today."
          subtitle="Simple, transparent plans. Every membership starts with a free trial and fitness assessment."
        />
        <PlanTabs />
        <AddOns className="mt-8" />
        <p className="mt-8 text-center text-sm text-white/60">
          [Prices are placeholders, to be confirmed by BE-FIT] ·{" "}
          <Link
            href="/membership/"
            className="font-semibold text-white underline decoration-brand-red underline-offset-4 hover:text-brand-red-light"
          >
            Compare all plans
          </Link>
        </p>
      </div>
    </section>
  );
}
