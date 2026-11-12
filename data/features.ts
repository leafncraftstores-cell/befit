import {
  BadgeIndianRupee,
  BicepsFlexed,
  Car,
  ClipboardList,
  Clock,
  Dumbbell,
  Leaf,
  Lock,
  Salad,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; text: string; note?: string };

/** "Why BE-FIT" grid */
export const features: Feature[] = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    text: "Commercial-grade strength, free-weight and cardio equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Trainers",
    text: "Qualified coaches on the floor at all times.",
  },
  {
    icon: ClipboardList,
    title: "Personalised Plans",
    text: "Workouts built for your goals and level.",
  },
  {
    icon: Salad,
    title: "Diet Guidance",
    text: "Practical nutrition support that fits Indian meals.",
  },
  {
    icon: Sparkles,
    title: "Clean & Hygienic",
    text: "Sanitised equipment and a spotless space, every day.",
  },
  { icon: Lock, title: "Lockers & Changing", text: "Secure lockers and clean changing rooms." },
  {
    icon: Clock,
    title: "Flexible Timings",
    text: "Open early to late, so train before or after work.",
  },
  { icon: Car, title: "Parking", text: "Parking for members.", note: "Confirm with client" },
  { icon: Users, title: "Friendly Community", text: "A motivating crowd that pushes you forward." },
  { icon: BadgeIndianRupee, title: "Affordable Plans", text: "Premium training at honest prices." },
];

export type Pillar = { icon: LucideIcon; title: string; text: string; long: string };

/** The five brand pillars from the poster */
export const pillars: Pillar[] = [
  {
    icon: Dumbbell,
    title: "Focus",
    text: "Set clear goals with expert guidance",
    long: "Every journey starts with a plan. We assess where you are, set clear and realistic goals, and give you a roadmap so every session has a purpose.",
  },
  {
    icon: BicepsFlexed,
    title: "Train",
    text: "Modern equipment and structured workouts",
    long: "Structured programmes on modern equipment, coached by certified trainers. Strength, conditioning, classes or one-on-one: you train with intent.",
  },
  {
    icon: Leaf,
    title: "Nourish",
    text: "Diet and nutrition support",
    long: "You can't out-train a poor diet. Get simple, flexible nutrition guidance built around the food you already enjoy, so results show faster.",
  },
  {
    icon: Star,
    title: "Believe",
    text: "A motivating community",
    long: "Surround yourself with people who show up. Our community and coaches keep you motivated on the days you need it most.",
  },
  {
    icon: Trophy,
    title: "Achieve",
    text: "Track progress and hit milestones",
    long: "Regular assessments, measurements and strength benchmarks let you see your progress and celebrate every milestone along the way.",
  },
];
