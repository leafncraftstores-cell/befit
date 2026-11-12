/**
 * Member reviews. These are CLEARLY MARKED PLACEHOLDERS. Replace them with genuine
 * reviews (with the member's permission). Never publish invented reviews.
 */
export type Testimonial = { quote: string; name: string; detail: string };

export const testimonials: Testimonial[] = [1, 2, 3, 4].map((n) => ({
  quote: "[Member review: to be supplied by BE-FIT]",
  name: `[Member Name ${n}]`,
  detail: "[Programme · Member since]",
}));
