import { images, type Img } from "./images";

/**
 * Trainer profiles. Everything in [brackets] is a placeholder for BE-FIT to supply.
 * Replace the photos in data/images.ts (trainer1–trainer6) with real portraits.
 */
export type Trainer = {
  id: string;
  name: string;
  role: string;
  specialisation: string;
  certification: string;
  experience: string;
  image: Img;
  socials: { instagram?: string; facebook?: string; youtube?: string };
};

const placeholderSocials = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export const trainers: Trainer[] = [
  {
    id: "t1",
    name: "[Trainer Name]",
    role: "Head Coach",
    specialisation: "[Specialisation: Strength & Conditioning]",
    certification: "[Certification]",
    experience: "[X] yrs experience",
    image: images.trainer1,
    socials: placeholderSocials,
  },
  {
    id: "t2",
    name: "[Trainer Name]",
    role: "Fat-Loss & Nutrition Coach",
    specialisation: "[Specialisation: Weight Loss & Nutrition]",
    certification: "[Certification]",
    experience: "[X] yrs experience",
    image: images.trainer2,
    socials: placeholderSocials,
  },
  {
    id: "t3",
    name: "[Trainer Name]",
    role: "Personal Trainer",
    specialisation: "[Specialisation: Functional Training]",
    certification: "[Certification]",
    experience: "[X] yrs experience",
    image: images.trainer3,
    socials: placeholderSocials,
  },
  {
    id: "t4",
    name: "[Trainer Name]",
    role: "Group Class Instructor",
    specialisation: "[Specialisation: Zumba & HIIT]",
    certification: "[Certification]",
    experience: "[X] yrs experience",
    image: images.trainer4,
    socials: placeholderSocials,
  },
  {
    id: "t5",
    name: "[Trainer Name]",
    role: "Hypertrophy Coach",
    specialisation: "[Specialisation: Muscle Building]",
    certification: "[Certification]",
    experience: "[X] yrs experience",
    image: images.trainer5,
    socials: placeholderSocials,
  },
  {
    id: "t6",
    name: "[Trainer Name]",
    role: "Yoga & Mobility Coach",
    specialisation: "[Specialisation: Yoga & Mobility]",
    certification: "[Certification]",
    experience: "[X] yrs experience",
    image: images.trainer6,
    socials: placeholderSocials,
  },
];

export function getTrainers(ids: string[]): Trainer[] {
  return trainers.filter((t) => ids.includes(t.id));
}
