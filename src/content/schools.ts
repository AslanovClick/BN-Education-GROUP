import type { StaticImageData } from "next/image";

import uniOxford from "@/assets/images/services/uni-oxford.jpg";
import uniCambridge from "@/assets/images/services/uni-cambridge.jpg";
import uniYale from "@/assets/images/services/uni-yale.jpg";
import uniHarvard from "@/assets/images/services/uni-harvard.jpg";
import campAlpine from "@/assets/images/services/camp-alpine.jpg";
import campBusiness from "@/assets/images/services/camp-business.jpg";
import campFlorence from "@/assets/images/services/camp-florence.jpg";
import campScience from "@/assets/images/services/camp-science.jpg";
import campOxford from "@/assets/images/services/camp-oxford.jpg";
import schoolHistoric from "@/assets/images/schools/historic.jpg";
import schoolAlpine from "@/assets/images/schools/alpine.jpg";
import schoolNewEngland from "@/assets/images/schools/new-england.jpg";
import schoolLondon from "@/assets/images/schools/london.jpg";
import schoolLake from "@/assets/images/schools/lake-geneva.jpg";
import schoolStem from "@/assets/images/schools/stem.jpg";
import schoolInternational from "@/assets/images/schools/international.jpg";
import schoolPrep from "@/assets/images/schools/prep.jpg";

export type Institution = {
  slug: string;
  name: string;
  location: string;
  country: string;
  /** Annual tuition, shown as "from …". Placeholder figures until real data is connected. */
  price: string;
  text: string;
  image: StaticImageData;
  /** Key facts shown under the photo on the detail page. */
  facts: { label: string; value: string }[];
};

export const schoolHref = (slug: string) => `/schools/${slug}`;

/**
 * Boarding schools — PLACEHOLDERS. Names describe the type of school until the real partner
 * list, photos and figures arrive.
 */
export const schools: Institution[] = [
  {
    slug: "historic-british-boarding-school",
    name: "Historic British Boarding School",
    location: "Berkshire, UK",
    country: "UK",
    price: "£52,800",
    text: "A traditional full-boarding school with centuries of history, small classes and a strong record of Oxbridge and Russell Group admissions.",
    image: schoolHistoric,
    facts: [
      { label: "Ages", value: "13–18" },
      { label: "Curriculum", value: "GCSE, A-Level" },
      { label: "Boarding", value: "Full" },
      { label: "Tuition from", value: "£52,800 / year" },
    ],
  },
  {
    slug: "swiss-alpine-international-school",
    name: "Swiss Alpine International School",
    location: "Valais, Switzerland",
    country: "Switzerland",
    price: "CHF 118,000",
    text: "An international boarding school in the Alps combining the IB Diploma with outdoor education, winter sports and a truly global student body.",
    image: schoolAlpine,
    facts: [
      { label: "Ages", value: "11–18" },
      { label: "Curriculum", value: "IB" },
      { label: "Boarding", value: "Full" },
      { label: "Tuition from", value: "CHF 118,000 / year" },
    ],
  },
  {
    slug: "new-england-preparatory-school",
    name: "New England Preparatory School",
    location: "Massachusetts, USA",
    country: "USA",
    price: "$71,500",
    text: "A leading American prep school with an AP curriculum, a broad choice of electives and close college counselling from the first year.",
    image: schoolNewEngland,
    facts: [
      { label: "Ages", value: "14–18" },
      { label: "Curriculum", value: "AP" },
      { label: "Boarding", value: "Full" },
      { label: "Tuition from", value: "$71,500 / year" },
    ],
  },
  {
    slug: "london-independent-college",
    name: "London Independent College",
    location: "London, UK",
    country: "UK",
    price: "£46,200",
    text: "A central London college with weekly and full boarding, an intensive A-Level programme and strong university guidance.",
    image: schoolLondon,
    facts: [
      { label: "Ages", value: "15–18" },
      { label: "Curriculum", value: "A-Level" },
      { label: "Boarding", value: "Weekly, full" },
      { label: "Tuition from", value: "£46,200 / year" },
    ],
  },
  {
    slug: "lake-geneva-international-school",
    name: "Lake Geneva International School",
    location: "Vaud, Switzerland",
    country: "Switzerland",
    price: "CHF 104,500",
    text: "A bilingual boarding school on Lake Geneva offering the IB and a French–English programme in a calm, academic setting.",
    image: schoolLake,
    facts: [
      { label: "Ages", value: "12–18" },
      { label: "Curriculum", value: "IB, bilingual" },
      { label: "Boarding", value: "Full" },
      { label: "Tuition from", value: "CHF 104,500 / year" },
    ],
  },
  {
    slug: "american-stem-academy",
    name: "American STEM Academy",
    location: "Connecticut, USA",
    country: "USA",
    price: "$68,900",
    text: "A boarding academy built around science, technology and engineering, with research labs, robotics and a project-based approach.",
    image: schoolStem,
    facts: [
      { label: "Ages", value: "14–18" },
      { label: "Curriculum", value: "AP, STEM" },
      { label: "Boarding", value: "Full" },
      { label: "Tuition from", value: "$68,900 / year" },
    ],
  },
  {
    slug: "international-day-and-boarding-school",
    name: "International Day & Boarding School",
    location: "Hertfordshire, UK",
    country: "UK",
    price: "£49,300",
    text: "A modern campus near London with a truly international community, strong languages and a supportive house system.",
    image: schoolInternational,
    facts: [
      { label: "Ages", value: "11–18" },
      { label: "Curriculum", value: "GCSE, A-Level" },
      { label: "Boarding", value: "Full, flexi" },
      { label: "Tuition from", value: "£49,300 / year" },
    ],
  },
  {
    slug: "country-house-prep-school",
    name: "Country House Prep School",
    location: "Surrey, UK",
    country: "UK",
    price: "£38,700",
    text: "A small preparatory school for younger children, preparing them for entry to leading senior boarding schools at 13.",
    image: schoolPrep,
    facts: [
      { label: "Ages", value: "8–13" },
      { label: "Curriculum", value: "Common Entrance" },
      { label: "Boarding", value: "Weekly, flexi" },
      { label: "Tuition from", value: "£38,700 / year" },
    ],
  },
];

export const universities: Institution[] = [
  {
    slug: "university-of-oxford",
    name: "University of Oxford",
    location: "Oxford, UK",
    country: "UK",
    price: "$27,480",
    text: "Founded in the 12th century, the University of Oxford is one of the world’s oldest and most renowned universities. Its historic colleges, libraries and academic buildings form an iconic part of the city’s architectural and cultural heritage.",
    image: uniOxford,
    facts: [
      { label: "Founded", value: "12th century" },
      { label: "Study", value: "Bachelor’s, Master’s" },
      { label: "Applications", value: "UCAS" },
      { label: "Tuition from", value: "$27,480 / year" },
    ],
  },
  {
    slug: "university-of-cambridge",
    name: "University of Cambridge",
    location: "Cambridge, UK",
    country: "UK",
    price: "$31,250",
    text: "Founded in 1209, the University of Cambridge is one of the world’s oldest universities, renowned for academic excellence, discovery and intellectual achievement. Its historic colleges, libraries and iconic architecture form the heart of the city.",
    image: uniCambridge,
    facts: [
      { label: "Founded", value: "1209" },
      { label: "Study", value: "Bachelor’s, Master’s" },
      { label: "Applications", value: "UCAS" },
      { label: "Tuition from", value: "$31,250 / year" },
    ],
  },
  {
    slug: "yale-university",
    name: "Yale University",
    location: "New Haven, USA",
    country: "USA",
    price: "$24,900",
    text: "Founded in 1701, Yale University is one of the oldest and most distinguished universities in the United States, known for research and rich academic tradition. Its historic campus combines Gothic architecture, renowned libraries and vibrant student spaces.",
    image: uniYale,
    facts: [
      { label: "Founded", value: "1701" },
      { label: "Study", value: "Bachelor’s, Master’s" },
      { label: "Applications", value: "Common App" },
      { label: "Tuition from", value: "$24,900 / year" },
    ],
  },
  {
    slug: "harvard-university",
    name: "Harvard University",
    location: "Cambridge, USA",
    country: "USA",
    price: "$35,760",
    text: "Founded in 1636, Harvard University is the oldest institution of higher education in the United States, renowned for academic excellence. Its historic campus, libraries and iconic buildings reflect centuries of American academic tradition.",
    image: uniHarvard,
    facts: [
      { label: "Founded", value: "1636" },
      { label: "Study", value: "Bachelor’s, Master’s" },
      { label: "Applications", value: "Common App" },
      { label: "Tuition from", value: "$35,760 / year" },
    ],
  },
];

export const allInstitutions = [...schools, ...universities];
export const findInstitution = (slug: string) => allInstitutions.find((i) => i.slug === slug);

export type Programme = {
  title: string;
  text: string;
  image: StaticImageData;
  href: string;
};

export const programmes: Programme[] = [
  { title: "Swiss Alpine Leadership Camp", text: "Leadership development in the Swiss mountains.", image: campAlpine, href: "/programmes/swiss-alpine-leadership-camp" },
  {
    title: "Global Business Challenge",
    text: "Develop confidence, communication and leadership skills.",
    image: campBusiness,
    href: "/programmes/global-business-challenge",
  },
  { title: "Art & Design in Florence", text: "Creative arts immersion in Renaissance Italy.", image: campFlorence, href: "/programmes/art-design-in-florence" },
  {
    title: "Cambridge Science Camp",
    text: "STEM-focused summer programme for young scientists.",
    image: campScience,
    href: "/programmes/cambridge-science-camp",
  },
  {
    title: "Oxford Summer Programme",
    text: "Intensive academic summer programme at Oxford University.",
    image: campOxford,
    href: "/programmes/oxford-summer-programme",
  },
];
