import type { StaticImageData } from "next/image";
import { routes } from "./site";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  BookOpenText,
  ChalkboardTeacher,
  GraduationCap,
  Handshake,
  Student,
  SunHorizon,
} from "@phosphor-icons/react/ssr";

import serviceBoarding from "@/assets/images/service-boarding.jpg";
import serviceUniversity from "@/assets/images/service-university.jpg";
import serviceSummer from "@/assets/images/service-summer.jpg";
import serviceAcademic from "@/assets/images/service-academic.jpg";
import serviceAcademicCentre from "@/assets/images/service-online.jpg";
import serviceFamily from "@/assets/images/service-family.jpg";
import step1 from "@/assets/images/step-1.jpg";
import step2 from "@/assets/images/step-2.jpg";
import step3 from "@/assets/images/step-3.jpg";
import step4 from "@/assets/images/step-4.jpg";
import step5 from "@/assets/images/step-5.jpg";

export const heroStats = [
  { value: 15, suffix: "+", label: "Years Expertise" },
  { value: 98, suffix: "%", label: "First-Choice Placement" },
  { value: 50, suffix: "+", label: "Partner Institutions" },
  { value: 500, suffix: "+", label: "Successful Students" },
] as const;

export type Service = {
  title: string;
  text: string;
  icon: PhosphorIcon;
  image: StaticImageData;
  href: string;
};

export const services: Service[] = [
  {
    title: "Boarding School Placement",
    text: "We start not with a list of schools, but with your child — their talents, personality, interests and long-term goals. After assessment we present 5–8 carefully selected schools and manage the full admission process.",
    icon: Student,
    image: serviceBoarding,
    href: routes.services,
  },
  {
    title: "University Admissions",
    text: "Expert guidance through applications to top global universities. Strategy, essays, interviews and complete process management for the best possible outcomes.",
    icon: GraduationCap,
    image: serviceUniversity,
    href: routes.services,
  },
  {
    title: "Short & Summer Programmes",
    text: "Every experience is selected as part of your child’s long-term strategy: university programmes, boarding school preparation, language immersion and career exploration.",
    icon: SunHorizon,
    image: serviceSummer,
    href: routes.services,
  },
  {
    title: "Academic Support",
    text: "A dedicated academic curator monitors grades, oversees subjects and exams, communicates with the school and brings in tutors when necessary — with regular reports to parents.",
    icon: BookOpenText,
    image: serviceAcademic,
    href: routes.services,
  },
  {
    title: "BN Academic Centre",
    text: "Over 500 professional tutors from the US and UK. IB, A-Levels, IGCSE, AP, SAT, ACT, IELTS, TOEFL and entrance exams — delivered one-to-one online around each student’s goals.",
    icon: ChalkboardTeacher,
    image: serviceAcademicCentre,
    href: routes.services,
  },
  {
    title: "Family Support",
    text: "Visas, accommodation, insurance, legal matters, flights, relocation and adaptation. One team. One point of contact. Support whenever you need it — 24/7 premium service.",
    icon: Handshake,
    image: serviceFamily,
    href: routes.services,
  },
];

export const principles = [
  { title: "Confidentiality", text: "Your family’s information always remains private." },
  { title: "Child First", text: "The strategy is built around the child — not around a list of schools." },
  { title: "On Your Family’s Side", text: "We recommend what we genuinely believe is right for your child." },
  { title: "Beyond Admission", text: "Our relationship does not end when an offer arrives." },
  { title: "High EQ", text: "Specialists selected for expertise and ability to understand children and families." },
] as const;

export const founderQuote = "In the age of AI, knowing who you are matters more than knowing what you know.";

export type Step = {
  title: string;
  text: string[];
  image: StaticImageData;
};

export const steps: Step[] = [
  {
    title: "Understanding the Family",
    text: [
      "We discuss your family’s goals, expectations, current situation and vision for your child’s future.",
      "Parents, the child and the BN team participate in the first meeting.",
    ],
    image: step1,
  },
  {
    title: "Discovering Your Child’s Potential",
    text: [
      "Our proprietary BN assessment helps identify your child’s deeper interests, natural strengths and individual potential.",
    ],
    image: step2,
  },
  {
    title: "Building the Education Strategy",
    text: [
      "We combine your child’s potential, your family’s goals and global education opportunities into one clear roadmap.",
      "The strategy is agreed together with both the parents and the child.",
    ],
    image: step3,
  },
  {
    title: "Managing the Admission",
    text: [
      "Applications, deadlines, preparation, interviews, communication with schools and visa matters are managed by BN.",
      "Your family stays informed without having to manage the process.",
    ],
    image: step4,
  },
  {
    title: "Staying With You After Enrolment",
    text: [
      "We monitor academic progress, communicate with the school, involve tutors when necessary and keep parents regularly informed.",
      "Our support can continue throughout your child’s entire educational journey.",
    ],
    image: step5,
  },
];
