import { unsplash as u } from "./images";

/**
 * Gallery photos. Replace `src` with BE-FIT's real photos (see data/images.ts for how).
 * Transformations are clearly marked placeholders until real member photos (with consent)
 * are supplied.
 */
export const galleryCategories = ["Gym Floor", "Classes", "Events", "Transformations"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  /** null = clearly marked placeholder tile */
  src: string | null;
  alt: string;
  category: GalleryCategory;
  /** Controls the masonry tile shape */
  shape: "portrait" | "landscape" | "square";
};

const g = (
  id: string,
  alt: string,
  category: GalleryCategory,
  shape: GalleryItem["shape"],
): GalleryItem => ({ src: u(id), alt, category, shape });

const placeholder = (shape: GalleryItem["shape"]): GalleryItem => ({
  src: null,
  alt: "[Member transformation photo: to be supplied by BE-FIT]",
  category: "Transformations",
  shape,
});

export const gallery: GalleryItem[] = [
  g(
    "1540497077202-7c8a3999166f",
    "Spacious gym floor with cardio and strength machines",
    "Gym Floor",
    "landscape",
  ),
  g(
    "1574680096145-d05b474e2155",
    "Woman preparing for a barbell back squat",
    "Gym Floor",
    "portrait",
  ),
  g("1518310383802-640c2de311b2", "Group dumbbell class in a bright studio", "Classes", "square"),
  g(
    "1558611848-73f7eb4001a1",
    "Plate-loaded machines and dumbbells on the gym floor",
    "Gym Floor",
    "portrait",
  ),
  g("1599058917212-d750089bc07e", "Battle rope conditioning workout", "Events", "landscape"),
  g("1588286840104-8957b019727f", "Group yoga and mobility session", "Classes", "landscape"),
  g("1571902943202-507ec2618e8f", "Treadmills and benches in a modern gym", "Gym Floor", "square"),
  g(
    "1541534741688-6078c6bfb5c5",
    "Woman doing an overhead barbell press in a rack",
    "Gym Floor",
    "portrait",
  ),
  g("1607962837359-5e7e89f86776", "Outdoor group workout with lunges", "Events", "landscape"),
  g(
    "1554284126-aa88f22d8b74",
    "Black and white shot of a woman lifting a barbell",
    "Gym Floor",
    "square",
  ),
  g(
    "1616279969856-759f316a5ac1",
    "Partner workout with a suspension trainer",
    "Classes",
    "portrait",
  ),
  g(
    "1593079831268-3381b0db4a77",
    "Dimly lit gym with rows of treadmills",
    "Gym Floor",
    "landscape",
  ),
  g("1524594152303-9fd13543fe6e", "Energetic dance fitness class", "Classes", "square"),
  g("1598971639058-fab3c3109a00", "Athlete doing push-ups on the gym floor", "Events", "portrait"),
  placeholder("portrait"),
  placeholder("square"),
  placeholder("portrait"),
];
