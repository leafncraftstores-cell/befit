/**
 * Weekly class schedule. Placeholder times: confirm with BE-FIT.
 * `type` drives the filter chips on /timetable.
 */

export const classTypes = ["Strength", "HIIT", "Zumba", "Yoga", "Functional", "Ladies"] as const;
export type ClassType = (typeof classTypes)[number];

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
export type Day = (typeof days)[number];

export const dayNames: Record<Day, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

export type ClassSession = {
  time: string;
  name: string;
  type: ClassType;
  duration: string;
  coach: string;
};

const s = (
  time: string,
  name: string,
  type: ClassType,
  duration: string,
  coach = "[Coach]",
): ClassSession => ({ time, name, type, duration, coach });

const weekdayA: ClassSession[] = [
  s("6:00 AM", "Morning HIIT", "HIIT", "45 min"),
  s("7:00 AM", "Strength Club", "Strength", "60 min"),
  s("8:00 AM", "Yoga Flow", "Yoga", "60 min"),
  s("11:00 AM", "Ladies' Batch", "Ladies", "60 min"),
  s("6:00 PM", "Zumba", "Zumba", "45 min"),
  s("7:00 PM", "Functional WOD", "Functional", "45 min"),
  s("8:00 PM", "Evening HIIT", "HIIT", "30 min"),
];

const weekdayB: ClassSession[] = [
  s("6:00 AM", "Functional WOD", "Functional", "45 min"),
  s("7:00 AM", "Mobility for Lifters", "Yoga", "45 min"),
  s("8:00 AM", "Strength Club", "Strength", "60 min"),
  s("11:00 AM", "Ladies' Batch", "Ladies", "60 min"),
  s("6:00 PM", "Bootcamp", "HIIT", "45 min"),
  s("7:00 PM", "Zumba", "Zumba", "45 min"),
  s("8:00 PM", "Power Yoga", "Yoga", "45 min"),
];

export const timetable: Record<Day, ClassSession[]> = {
  Mon: weekdayA,
  Tue: weekdayB,
  Wed: weekdayA,
  Thu: weekdayB,
  Fri: weekdayA,
  Sat: [
    s("7:00 AM", "Weekend Bootcamp", "HIIT", "60 min"),
    s("8:30 AM", "Zumba Party", "Zumba", "60 min"),
    s("10:00 AM", "Strength Clinic", "Strength", "60 min"),
    s("6:00 PM", "Partner WOD", "Functional", "45 min"),
  ],
  Sun: [
    s("7:00 AM", "Restorative Yoga", "Yoga", "60 min"),
    s("9:00 AM", "Open Gym", "Strength", "Till 12 PM", "Floor team"),
  ],
};
