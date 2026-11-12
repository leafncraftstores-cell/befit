/**
 * FAQs. Answers marked [confirm] need checking with BE-FIT before launch.
 */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you offer a free trial?",
    a: "Yes. Book a free trial session on WhatsApp or by phone, then walk in, meet a trainer, tour the gym and try a workout before you decide.",
  },
  {
    q: "What are your timings?",
    a: "Monday to Saturday, 5:00 AM – 10:00 PM, and Sunday, 6:00 AM – 12:00 PM. Timings may change on public holidays. [confirm]",
  },
  {
    q: "Do you have female trainers or ladies' batches?",
    a: "We run a dedicated ladies' batch on weekdays (see the timetable) and aim to make every member feel safe and comfortable. Please ask us about female trainer availability. [confirm]",
  },
  {
    q: "Is personal training available?",
    a: "Yes. Certified trainers offer one-on-one personal training with a custom plan, form coaching and progress reviews. It's available as an add-on to any membership.",
  },
  {
    q: "Do you provide diet plans?",
    a: "Yes. Pro members get basic diet guidance and Elite members get a custom nutrition plan with weekly check-ins, built around vegetarian, eggetarian or non-vegetarian Indian meals.",
  },
  {
    q: "Is parking available?",
    a: "Parking details are being confirmed. Please call or WhatsApp us before your first visit. [confirm with client]",
  },
  {
    q: "How do I join?",
    a: "Book a free trial, choose the plan that suits you and complete registration at the front desk with a valid photo ID. You can start training the same day.",
  },
];

export const membershipFaqs: Faq[] = [
  {
    q: "Can I pause or freeze my membership?",
    a: "Freeze options are available on quarterly, half-yearly and yearly plans, subject to front-desk approval. [confirm]",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade at any time and pay only the difference for the remaining period. [confirm]",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, cards and cash at the front desk. [confirm]",
  },
  {
    q: "Is there a joining or registration fee?",
    a: "Please check with the front desk for current offers. [confirm]",
  },
];
