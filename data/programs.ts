import {
  Activity,
  BicepsFlexed,
  Dumbbell,
  Flame,
  HeartPulse,
  Music,
  Salad,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { images, type Img } from "./images";

export type Program = {
  slug: string;
  name: string;
  /** One line for cards */
  short: string;
  /** Intro paragraph on the detail page */
  description: string;
  image: Img;
  icon: LucideIcon;
  level: string;
  sessionLength: string;
  whatToExpect: string[];
  whoFor: string[];
  benefits: { title: string; text: string }[];
  weeklyPlan: { day: string; focus: string }[];
  /** ids from data/trainers.ts */
  trainerIds: string[];
};

export const programs: Program[] = [
  {
    slug: "strength-training",
    name: "Strength Training",
    short: "Build raw strength with structured barbell, dumbbell and machine work.",
    description:
      "Learn the big lifts properly (squat, deadlift, bench and overhead press) with progressive programming that keeps you getting stronger week after week. Our coaches focus on technique first, so you build strength that lasts.",
    image: images.strength,
    icon: Dumbbell,
    level: "All levels",
    sessionLength: "60 min",
    whatToExpect: [
      "A movement screen and baseline strength assessment",
      "Coached technique on the main compound lifts",
      "Progressive overload plans logged week to week",
      "Accessory work for joints, posture and balance",
    ],
    whoFor: [
      "Beginners who want to lift safely and confidently",
      "Intermediate lifters stuck on a plateau",
      "Anyone who wants to feel stronger day to day",
    ],
    benefits: [
      { title: "Stronger body", text: "Measurable gains in your main lifts." },
      { title: "Better posture", text: "A stronger back and core for desk-heavy days." },
      { title: "Bone health", text: "Loaded training supports bone density." },
      { title: "Confidence", text: "Own the gym floor with proper technique." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Lower body: squat focus" },
      { day: "Tue", focus: "Upper body: bench and rows" },
      { day: "Wed", focus: "Active recovery and mobility" },
      { day: "Thu", focus: "Lower body: deadlift focus" },
      { day: "Fri", focus: "Upper body: overhead press and pull-ups" },
      { day: "Sat", focus: "Full-body conditioning" },
      { day: "Sun", focus: "Rest" },
    ],
    trainerIds: ["t1", "t3"],
  },
  {
    slug: "weight-loss",
    name: "Weight Loss / Fat Burn",
    short: "Burn fat and keep it off with smart training and nutrition habits.",
    description:
      "A complete fat-loss system that combines strength training, metabolic conditioning and simple, sustainable nutrition habits. No crash diets: just steady, visible progress you can maintain.",
    image: images.weightLoss,
    icon: Flame,
    level: "All levels",
    sessionLength: "45–60 min",
    whatToExpect: [
      "Body measurements and goal setting on day one",
      "A mix of strength circuits and conditioning",
      "Weekly check-ins to adjust your plan",
      "Practical diet guidance that fits Indian meals",
    ],
    whoFor: [
      "Anyone looking to lose weight sustainably",
      "People restarting fitness after a long break",
      "Busy professionals who need efficient workouts",
    ],
    benefits: [
      { title: "Fat loss", text: "A calorie-smart plan with real accountability." },
      { title: "More energy", text: "Better fitness and sleep, less fatigue." },
      { title: "Keep muscle", text: "Strength work protects lean mass." },
      { title: "Habits that stick", text: "Small changes that compound." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Full-body strength circuit" },
      { day: "Tue", focus: "HIIT conditioning" },
      { day: "Wed", focus: "Steady-state cardio and core" },
      { day: "Thu", focus: "Full-body strength circuit" },
      { day: "Fri", focus: "Zumba or group class" },
      { day: "Sat", focus: "Metabolic finisher and stretch" },
      { day: "Sun", focus: "Rest and a 10k-step walk" },
    ],
    trainerIds: ["t2", "t4"],
  },
  {
    slug: "muscle-building",
    name: "Muscle Building",
    short: "Hypertrophy-focused splits to add size, shape and definition.",
    description:
      "Structured hypertrophy training with the right volume, intensity and recovery to build lean muscle. Paired with protein-first nutrition guidance so your effort in the gym actually shows.",
    image: images.muscle,
    icon: BicepsFlexed,
    level: "Beginner to advanced",
    sessionLength: "60–75 min",
    whatToExpect: [
      "A body-part or push/pull/legs split built around you",
      "Tempo, rep ranges and progressive volume",
      "Nutrition targets for a lean bulk",
      "Progress photos and measurements every 4 weeks",
    ],
    whoFor: [
      "Lean builds who want to add size",
      "Lifters who want better shape and symmetry",
      "Anyone preparing for a physique goal",
    ],
    benefits: [
      { title: "Lean mass", text: "Visible muscle gain over time." },
      { title: "Better metabolism", text: "More muscle burns more at rest." },
      { title: "Symmetry", text: "Balanced development, no weak links." },
      { title: "Clear plan", text: "Know exactly what to do every session." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Push: chest, shoulders, triceps" },
      { day: "Tue", focus: "Pull: back, biceps" },
      { day: "Wed", focus: "Legs and core" },
      { day: "Thu", focus: "Push: volume" },
      { day: "Fri", focus: "Pull: volume" },
      { day: "Sat", focus: "Legs and arms" },
      { day: "Sun", focus: "Rest" },
    ],
    trainerIds: ["t1", "t5"],
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    short: "One-on-one coaching built entirely around your body and goals.",
    description:
      "Your own coach, your own plan. Personal training gives you individual attention on every rep, a programme designed for your goals and schedule, and the accountability to stay consistent.",
    image: images.personal,
    icon: UserCheck,
    level: "All levels",
    sessionLength: "60 min",
    whatToExpect: [
      "A detailed consultation and fitness assessment",
      "A fully custom programme, updated as you progress",
      "Hands-on technique coaching every session",
      "Diet guidance and regular progress reviews",
    ],
    whoFor: [
      "Anyone who wants the fastest, safest results",
      "Members with injuries or specific needs (with medical clearance)",
      "Beginners who want confidence from day one",
    ],
    benefits: [
      { title: "Faster results", text: "Every session is planned for you." },
      { title: "Safety", text: "Expert form correction on every rep." },
      { title: "Accountability", text: "Booked sessions keep you consistent." },
      { title: "Flexibility", text: "Training that fits your schedule." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "PT session: strength" },
      { day: "Tue", focus: "Self-guided cardio from your plan" },
      { day: "Wed", focus: "PT session: conditioning" },
      { day: "Thu", focus: "Mobility and recovery" },
      { day: "Fri", focus: "PT session: full body" },
      { day: "Sat", focus: "Optional group class" },
      { day: "Sun", focus: "Rest" },
    ],
    trainerIds: ["t1", "t2", "t3"],
  },
  {
    slug: "functional-training",
    name: "Functional & CrossFit-style Training",
    short: "Kettlebells, sleds, ropes and bodyweight: train for real life.",
    description:
      "High-energy functional training that builds strength, power, mobility and endurance together. Expect varied workouts with kettlebells, battle ropes, boxes and bodyweight drills, coached in small groups.",
    image: images.functional,
    icon: Zap,
    level: "Intermediate (beginner scaling available)",
    sessionLength: "45 min",
    whatToExpect: [
      "A coached warm-up and skill block",
      "A workout of the day with scalable options",
      "Kettlebells, ropes, boxes, sleds and bodyweight",
      "A team atmosphere and leaderboards",
    ],
    whoFor: [
      "People who get bored of routine workouts",
      "Athletes and sports players",
      "Anyone who wants all-round fitness",
    ],
    benefits: [
      { title: "Athleticism", text: "Power, speed and agility." },
      { title: "Endurance", text: "A stronger heart and lungs." },
      { title: "Mobility", text: "Move better through full ranges." },
      { title: "Community", text: "Train hard together." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Strength and a short WOD" },
      { day: "Tue", focus: "Engine: rowing, ropes, intervals" },
      { day: "Wed", focus: "Gymnastics and core skills" },
      { day: "Thu", focus: "Kettlebell complex" },
      { day: "Fri", focus: "Partner WOD" },
      { day: "Sat", focus: "Long chipper" },
      { day: "Sun", focus: "Rest" },
    ],
    trainerIds: ["t3", "t5"],
  },
  {
    slug: "cardio-hiit",
    name: "Cardio & HIIT",
    short: "Short, intense intervals that torch calories and boost stamina.",
    description:
      "Heart-pumping interval sessions using bikes, treadmills, ropes and bodyweight moves. HIIT gets maximum results in minimum time, which is perfect for busy weekday schedules.",
    image: images.hiit,
    icon: HeartPulse,
    level: "All levels",
    sessionLength: "30–45 min",
    whatToExpect: [
      "A dynamic warm-up and a timed interval workout",
      "Heart-rate zones explained simply",
      "Scalable intensity for every fitness level",
      "A cool-down and stretch every session",
    ],
    whoFor: [
      "Busy professionals short on time",
      "Anyone who wants better stamina",
      "Members pairing cardio with strength work",
    ],
    benefits: [
      { title: "Calorie burn", text: "A high burn, during and after." },
      { title: "Heart health", text: "Improved cardiovascular fitness." },
      { title: "Time-efficient", text: "Big results in 30–45 minutes." },
      { title: "Mood boost", text: "Endorphins on demand." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Bike intervals" },
      { day: "Tue", focus: "Strength day" },
      { day: "Wed", focus: "Bodyweight HIIT" },
      { day: "Thu", focus: "Strength day" },
      { day: "Fri", focus: "Treadmill sprints and ropes" },
      { day: "Sat", focus: "Long, easy cardio" },
      { day: "Sun", focus: "Rest" },
    ],
    trainerIds: ["t2", "t4"],
  },
  {
    slug: "zumba-group-classes",
    name: "Zumba / Group Classes",
    short: "Dance, sweat and smile: high-energy classes with great music.",
    description:
      "Group workouts that feel like a party. Zumba, dance fitness and bootcamp-style classes led by energetic instructors. Great for burning calories, making friends and staying consistent.",
    image: images.zumba,
    icon: Music,
    level: "All levels",
    sessionLength: "45–60 min",
    whatToExpect: [
      "Easy-to-follow choreography, no dance experience needed",
      "Upbeat Bollywood, Latin and pop playlists",
      "Low-impact options for every move",
      "A friendly, judgement-free crowd",
    ],
    whoFor: [
      "Anyone who loves music and movement",
      "People who prefer training in a group",
      "Beginners easing into fitness",
    ],
    benefits: [
      { title: "Fun cardio", text: "Burn calories without noticing." },
      { title: "Coordination", text: "Better rhythm and balance." },
      { title: "Stress relief", text: "Leave lighter than you came." },
      { title: "Community", text: "Make friends who keep you going." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Zumba" },
      { day: "Tue", focus: "Bootcamp" },
      { day: "Wed", focus: "Dance fitness" },
      { day: "Thu", focus: "Zumba" },
      { day: "Fri", focus: "Bootcamp" },
      { day: "Sat", focus: "Weekend Zumba party" },
      { day: "Sun", focus: "Rest" },
    ],
    trainerIds: ["t4", "t6"],
  },
  {
    slug: "yoga-mobility",
    name: "Yoga & Mobility",
    short: "Improve flexibility, recover faster and find your balance.",
    description:
      "Classes that blend traditional yoga with modern mobility work. Improve flexibility, ease stiffness from long work hours, recover better between hard sessions and calm the mind.",
    image: images.yoga,
    icon: Activity,
    level: "All levels",
    sessionLength: "60 min",
    whatToExpect: [
      "Guided breathing and flow sequences",
      "Targeted mobility for hips, spine and shoulders",
      "Props and modifications for every body",
      "A calm, focused environment",
    ],
    whoFor: [
      "Desk workers with tight hips and backs",
      "Lifters and runners who need recovery",
      "Anyone wanting stress relief",
    ],
    benefits: [
      { title: "Flexibility", text: "Move freely through your day." },
      { title: "Recovery", text: "Less soreness, better performance." },
      { title: "Posture", text: "Undo the effects of long sitting." },
      { title: "Calm", text: "Better focus and sleep." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Hatha flow" },
      { day: "Tue", focus: "Mobility for lifters" },
      { day: "Wed", focus: "Vinyasa flow" },
      { day: "Thu", focus: "Hips and spine" },
      { day: "Fri", focus: "Power yoga" },
      { day: "Sat", focus: "Restorative stretch" },
      { day: "Sun", focus: "Rest" },
    ],
    trainerIds: ["t6"],
  },
  {
    slug: "nutrition-coaching",
    name: "Nutrition Coaching",
    short: "Simple, practical diet plans that fit your lifestyle and food habits.",
    description:
      "Training is half the story. Our nutrition coaching gives you practical, flexible guidance (vegetarian, eggetarian or non-vegetarian) built around the food you already eat at home and at work.",
    image: images.nutrition,
    icon: Salad,
    level: "All members",
    sessionLength: "Consult + weekly check-ins",
    whatToExpect: [
      "A lifestyle, food-preference and goal consultation",
      "Calorie and protein targets explained simply",
      "Sample meal plans with Indian food options",
      "Weekly check-ins and adjustments",
    ],
    whoFor: [
      "Anyone serious about fat loss or muscle gain",
      "Vegetarians unsure how to hit protein targets",
      "People who want to eat better without strict diets",
    ],
    benefits: [
      { title: "Clarity", text: "Know what, and how much, to eat." },
      { title: "Better results", text: "Training plus nutrition works." },
      { title: "Flexible", text: "No foods are banned." },
      { title: "Energy", text: "Fuel for training and work." },
    ],
    weeklyPlan: [
      { day: "Mon", focus: "Weekly check-in and targets" },
      { day: "Tue", focus: "Meal prep tips" },
      { day: "Wed", focus: "Mid-week review on WhatsApp" },
      { day: "Thu", focus: "Recipe ideas" },
      { day: "Fri", focus: "Eating-out strategy" },
      { day: "Sat", focus: "Progress photos and measurements" },
      { day: "Sun", focus: "Plan the week ahead" },
    ],
    trainerIds: ["t2"],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
