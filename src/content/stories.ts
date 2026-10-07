import type { StaticImageData } from "next/image";
import backRowImage from "@/assets/images/stories/back-row.jpg";
import newCountryImage from "@/assets/images/stories/new-country.jpg";
import rightSchoolImage from "@/assets/images/stories/right-school.jpg";
import medicineImage from "@/assets/images/stories/medicine.jpg";
import readingImage from "@/assets/images/stories/reading.jpg";
import portfolioImage from "@/assets/images/stories/portfolio.jpg";
import relocationImage from "@/assets/images/stories/relocation.jpg";
import { routes } from "./site";

/** "Our Stories" — client cases. Names, photos and identifying details are never published. */

export const situations = [
  "Moving to another country",
  "Choosing a boarding school",
  "Lost interest in learning",
  "Preparing for university",
] as const;

export type Situation = (typeof situations)[number];

export type StorySection = { label: string; paragraphs: string[] };

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  /** Tags: age, route, service. PLACEHOLDER values until the client confirms them. */
  age: string;
  route: string;
  service: { label: string; href: string };
  situations: Situation[];
  image: StaticImageData;
  quote: { text: string; source: string };
  readingTime: string;
  sections: StorySection[];
  closing: string[];
  /** Placeholder card — links to the published story until its own text exists. */
  placeholder?: boolean;
};

const backRow: Story = {
  slug: "the-boy-from-the-back-row",
  title: "The Boy from the Back Row",
  excerpt:
    "He barely studied and showed no interest in anything at school. In our diagnostics we saw strong potential in IT. A year and a half later, at an American STEM school, came the best report of his entire education.",
  age: "Age 14",
  route: "Germany → USA",
  service: { label: "Boarding Schools", href: routes.boardingSchools },
  situations: ["Lost interest in learning", "Choosing a boarding school"],
  image: backRowImage,
  quote: { text: "He has a rare, truly unusual way of thinking.", source: "From the school report" },
  readingTime: "2 min read",
  sections: [
    {
      label: "Where the family started",
      paragraphs: [
        "The parents came to us with a worry many families know. Their son sat in the back row, barely studied and showed no interest in anything at school. Teachers didn’t know what to do, and at home every conversation about grades ended in an argument.",
      ],
    },
    {
      label: "What we saw",
      paragraphs: [
        "The diagnostics showed that he did care. He simply wasn’t interested in what he was being offered. When the conversation turned to technology, a different person sat in front of us: focused, quick, full of his own ideas.",
        "We saw strong potential in IT and suggested an American school with a STEM programme.",
      ],
    },
    {
      label: "Where he is now",
      paragraphs: [
        "A year and a half later the school sent a report — the best of his entire education. The same boy, only now he is in the right place.",
      ],
    },
  ],
  closing: ["Every child is talented.", "This talent could easily have gone unnoticed."],
};

/** PLACEHOLDER cards — they open the published story until their own texts arrive. */
const placeholders: Omit<Story, "quote" | "readingTime" | "sections" | "closing" | "slug">[] = [
  {
    title: "A New Country at Fifteen",
    excerpt:
      "The family relocated mid-year, and their daughter had to change school, language and friends at once. We found a school that met her where she was — and a curator who stayed close through the first term.",
    age: "Age 15",
    route: "UAE → Switzerland",
    service: { label: "Academic Support", href: routes.academicSupport },
    situations: ["Moving to another country"],
    image: newCountryImage,
    placeholder: true,
  },
  {
    title: "The Right School, Not the Famous One",
    excerpt:
      "The parents had a list of the best-known names. After the diagnostics we suggested a smaller boarding school with a strong science programme. Two years on, he leads the school’s research club.",
    age: "Age 13",
    route: "Germany → UK",
    service: { label: "Boarding Schools", href: routes.boardingSchools },
    situations: ["Choosing a boarding school"],
    image: rightSchoolImage,
    placeholder: true,
  },
  {
    title: "From Doubts to a Medical School Offer",
    excerpt:
      "She wanted medicine but didn’t believe she could get in. A two-year plan, the right tutors and an admissions officer audit turned the doubt into an offer.",
    age: "Age 17",
    route: "Italy → UK",
    service: { label: "University Admissions", href: routes.universityAdmissions },
    situations: ["Preparing for university"],
    image: medicineImage,
    placeholder: true,
  },
  {
    title: "When Reading Became a Choice Again",
    excerpt:
      "Good grades, no motivation. Over a year of guidance he discovered a real interest in history and politics — and chose his university direction himself.",
    age: "Age 16",
    route: "France → USA",
    service: { label: "Academic Support", href: routes.academicSupport },
    situations: ["Lost interest in learning", "Preparing for university"],
    image: readingImage,
    placeholder: true,
  },
  {
    title: "A Portfolio Built Step by Step",
    excerpt:
      "Drawing was “just a hobby”. A summer programme in Florence and a portfolio built with a tutor became the start of an application to a leading art school.",
    age: "Age 17",
    route: "Spain → Italy",
    service: { label: "University Admissions", href: routes.universityAdmissions },
    situations: ["Preparing for university"],
    image: portfolioImage,
    placeholder: true,
  },
  {
    title: "Two Countries, One Plan",
    excerpt:
      "A new job abroad meant a move within months. We matched both children with schools in the new country and kept their curricula aligned, so neither lost a step.",
    age: "Ages 12 and 14",
    route: "Switzerland → UK",
    service: { label: "Boarding Schools", href: routes.boardingSchools },
    situations: ["Moving to another country", "Choosing a boarding school"],
    image: relocationImage,
    placeholder: true,
  },
];

export const featuredStory = backRow;

export const stories: Story[] = [
  backRow,
  ...placeholders.map((p) => ({ ...backRow, ...p, slug: backRow.slug })),
];

export const storyHref = (slug: string) => `${routes.stories}/${slug}`;
export const publishedStories = [backRow];
export const findStory = (slug: string) => publishedStories.find((s) => s.slug === slug);
