/**
 * Membership plans. Set prices as numbers in rupees (e.g. 1999). Leave as `null` to show "₹—".
 * Every "Join Now" button opens WhatsApp with the plan name and billing period prefilled.
 */

export type BillingPeriod = "monthly" | "quarterly" | "halfYearly" | "yearly";

export const billingPeriods: { id: BillingPeriod; label: string; months: number }[] = [
  { id: "monthly", label: "Monthly", months: 1 },
  { id: "quarterly", label: "Quarterly", months: 3 },
  { id: "halfYearly", label: "Half-yearly", months: 6 },
  { id: "yearly", label: "Yearly", months: 12 },
];

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  prices: Record<BillingPeriod, number | null>;
  features: string[];
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Gym floor access",
    prices: { monthly: null, quarterly: null, halfYearly: null, yearly: null },
    features: [
      "Full gym floor and cardio access",
      "Locker and changing rooms",
      "Free fitness assessment",
      "Trainer floor support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Gym + group classes",
    popular: true,
    prices: { monthly: null, quarterly: null, halfYearly: null, yearly: null },
    features: [
      "Everything in Basic",
      "Unlimited group classes (Zumba, HIIT, Yoga)",
      "Personalised workout plan",
      "Monthly progress check",
      "Basic diet guidance",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "The complete transformation",
    prices: { monthly: null, quarterly: null, halfYearly: null, yearly: null },
    features: [
      "Everything in Pro",
      "Personal training sessions each month",
      "Custom nutrition plan with weekly check-ins",
      "Body composition tracking",
      "Priority slot booking",
    ],
  },
];

export type AddOn = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  unit: string;
  features: string[];
};

export const addOns: AddOn[] = [
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-on-one coaching with a certified trainer.",
    price: null,
    unit: "per month",
    features: ["Custom programme", "Hands-on form coaching", "Progress reviews", "Flexible slots"],
  },
  {
    id: "couple",
    name: "Couple Plan",
    description: "Train together, save together. Two memberships, one plan.",
    price: null,
    unit: "per couple",
    features: [
      "Two full memberships",
      "Partner workouts",
      "Shared goal tracking",
      "Special pricing",
    ],
  },
];

/** Rows for the comparison table on /membership. `true` = included, string = detail. */
export const comparison: { feature: string; values: Record<string, boolean | string> }[] = [
  { feature: "Gym floor and cardio", values: { basic: true, pro: true, elite: true } },
  { feature: "Locker and changing rooms", values: { basic: true, pro: true, elite: true } },
  { feature: "Fitness assessment", values: { basic: "Once", pro: "Monthly", elite: "Monthly" } },
  { feature: "Group classes", values: { basic: false, pro: "Unlimited", elite: "Unlimited" } },
  { feature: "Personalised workout plan", values: { basic: false, pro: true, elite: true } },
  { feature: "Diet guidance", values: { basic: false, pro: "Basic", elite: "Custom plan" } },
  { feature: "Personal training sessions", values: { basic: false, pro: false, elite: true } },
  { feature: "Body composition tracking", values: { basic: false, pro: false, elite: true } },
  { feature: "Priority slot booking", values: { basic: false, pro: false, elite: true } },
];

export const membershipTerms: string[] = [
  "Prices shown are placeholders. Final pricing will be confirmed by BE-FIT Fitness.",
  "All memberships are personal and non-transferable unless stated otherwise.",
  "Membership starts from the date of joining. A valid photo ID is required at registration.",
  "Freeze and pause options are available on longer plans, subject to front-desk approval.",
  "Fees once paid are non-refundable. Please try a free trial first.",
  "Members must follow gym rules, wear proper training shoes and re-rack weights after use.",
];

export function formatPrice(price: number | null): string {
  return price === null ? "₹—" : `₹${price.toLocaleString("en-IN")}`;
}
