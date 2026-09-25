import type { StaticImageData } from "next/image";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Crown, Lightbulb } from "@phosphor-icons/react/ssr";

import uniOxford from "@/assets/images/services/uni-oxford.jpg";
import uniCambridge from "@/assets/images/services/uni-cambridge.jpg";
import uniYale from "@/assets/images/services/uni-yale.jpg";
import uniHarvard from "@/assets/images/services/uni-harvard.jpg";
import campAlpine from "@/assets/images/services/camp-alpine.jpg";
import campBusiness from "@/assets/images/services/camp-business.jpg";
import campFlorence from "@/assets/images/services/camp-florence.jpg";
import campScience from "@/assets/images/services/camp-science.jpg";
import campOxford from "@/assets/images/services/camp-oxford.jpg";

export type Package = {
  name: string;
  text: string;
  icon: PhosphorIcon;
};

export const packages: Package[] = [
  { name: "Smart", text: "School selection and complete admission management.", icon: Lightbulb },
  { name: "Royal", text: "Admission + support throughout the first academic year.", icon: Crown },
];

export type Institution = {
  name: string;
  location: string;
  /** Annual tuition, shown as "from …". Random placeholder figures until real data is connected. */
  price: string;
  text: string;
  image: StaticImageData;
  href: string;
};

export const institutions: Institution[] = [
  {
    name: "University of Oxford",
    location: "Oxford, UK",
    price: "$27,480",
    text: "Founded in the 12th century, the University of Oxford is one of the world’s oldest and most renowned universities. Its historic colleges, libraries and academic buildings form an iconic part of the city’s architectural and cultural heritage.",
    image: uniOxford,
    href: "/schools/university-of-oxford",
  },
  {
    name: "University of Cambridge",
    location: "Cambridge, UK",
    price: "$31,250",
    text: "Founded in 1209, the University of Cambridge is one of the world’s oldest universities, renowned for academic excellence, discovery and intellectual achievement. Its historic colleges, libraries and iconic architecture form the heart of the city.",
    image: uniCambridge,
    href: "/schools/university-of-cambridge",
  },
  {
    name: "Yale University",
    location: "New Haven, USA",
    price: "$24,900",
    text: "Founded in 1701, Yale University is one of the oldest and most distinguished universities in the United States, known for research and rich academic tradition. Its historic campus combines Gothic architecture, renowned libraries and vibrant student spaces.",
    image: uniYale,
    href: "/schools/yale-university",
  },
  {
    name: "Harvard University",
    location: "Cambridge, USA",
    price: "$35,760",
    text: "Founded in 1636, Harvard University is the oldest institution of higher education in the United States, renowned for academic excellence. Its historic campus, libraries and iconic buildings reflect centuries of American academic tradition.",
    image: uniHarvard,
    href: "/schools/harvard-university",
  },
];

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
