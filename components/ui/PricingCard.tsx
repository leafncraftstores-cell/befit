import { Check, Flame } from "lucide-react";
import { formatPrice, type BillingPeriod, type Plan, billingPeriods } from "@/data/plans";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { WhatsappIcon } from "./SocialIcons";
import { ButtonLink } from "./Button";

export function PricingCard({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const periodLabel = billingPeriods.find((p) => p.id === period)?.label ?? "";
  const price = plan.prices[period];
  const message = `Hi BE-FIT, I'd like to join the ${plan.name} plan (${periodLabel}). Please share the details.`;

  return (
    <article
      className={cn(
        "card-lift clip-card relative flex h-full flex-col border p-7 sm:p-8",
        plan.popular
          ? "glow-red border-brand-red bg-gradient-to-b from-brand-red/20 via-brand-charcoal to-brand-charcoal"
          : "border-white/10 bg-brand-charcoal",
      )}
    >
      {plan.popular ? (
        <span className="absolute -top-px right-6 inline-flex -skew-x-12 items-center gap-1 bg-brand-red px-3 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
          <Flame className="size-3.5 skew-x-12" aria-hidden />
          <span className="skew-x-12">Most Popular</span>
        </span>
      ) : null}
      <p className="text-sm font-bold tracking-[0.25em] text-brand-red-light uppercase">
        {plan.tagline}
      </p>
      <h3 className="mt-2 text-4xl text-white">
        <span className="skew-title">{plan.name}</span>
      </h3>
      <p className="mt-6 flex items-end gap-2">
        <span className="font-display text-6xl leading-none text-white">{formatPrice(price)}</span>
        <span className="pb-1 text-sm text-white/60">/ {periodLabel.toLowerCase()}</span>
      </p>
      {price === null ? (
        <p className="mt-2 text-xs text-white/60">[Price to be confirmed by BE-FIT]</p>
      ) : null}
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3 text-white/85">
            <Check className="mt-0.5 size-5 shrink-0 text-brand-red-light" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href={whatsappLink(message)}
        variant={plan.popular ? "primary" : "outline"}
        className="mt-8 w-full"
        aria-label={`Join Now: ${plan.name} plan (${periodLabel}) on WhatsApp`}
      >
        <WhatsappIcon className="size-5" />
        Join Now
      </ButtonLink>
    </article>
  );
}
