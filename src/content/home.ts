import type { StaticImageData } from "next/image";
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
import serviceFamily from "@/assets/images/step-3.jpg";
import step1 from "@/assets/images/step-1.jpg";
import step2 from "@/assets/images/step-2.jpg";
import step3 from "@/assets/images/step-3.jpg";
import step4 from "@/assets/images/step-4.jpg";
import step5 from "@/assets/images/step-5.jpg";
import eventOxbridge from "@/assets/images/event-oxbridge.jpg";
import eventOxbridge2 from "@/assets/images/event-oxbridge-2.jpg";
import eventSwissFair from "@/assets/images/event-swiss-fair.jpg";
import eventMasterclass from "@/assets/images/event-masterclass.jpg";
import eventMasterclass2 from "@/assets/images/event-masterclass-2.jpg";
import eventSwissFairOnline from "@/assets/images/event-swiss-fair-online.jpg";

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
    href: "#",
  },
  {
    title: "University Admissions",
    text: "Expert guidance through applications to top global universities. Strategy, essays, interviews and complete process management for the best possible outcomes.",
    icon: GraduationCap,
    image: serviceUniversity,
    href: "#",
  },
  {
    title: "Short & Summer Programmes",
    text: "Every experience is selected as part of your child’s long-term strategy: university programmes, boarding school preparation, language immersion and career exploration.",
    icon: SunHorizon,
    image: serviceSummer,
    href: "#",
  },
  {
    title: "Academic Support",
    text: "A dedicated academic curator monitors grades, oversees subjects and exams, communicates with the school and brings in tutors when necessary — with regular reports to parents.",
    icon: BookOpenText,
    image: serviceAcademic,
    href: "#",
  },
  {
    title: "BN Academic Centre",
    text: "Over 500 professional tutors from the US and UK. IB, A-Levels, IGCSE, AP, SAT, ACT, IELTS, TOEFL and entrance exams — delivered one-to-one online around each student’s goals.",
    icon: ChalkboardTeacher,
    image: serviceAcademicCentre,
    href: "#",
  },
  {
    title: "Family Support",
    text: "Visas, accommodation, insurance, legal matters, flights, relocation and adaptation. One team. One point of contact. Support whenever you need it — 24/7 premium service.",
    icon: Handshake,
    image: serviceFamily,
    href: "#",
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

export type EventItem = {
  title: string;
  format: string;
  date: string;
  time: string;
  location: string;
  image: StaticImageData;
  href: string;
};

export const events: EventItem[] = [
  {
    title: "Oxford & Cambridge Application Workshop",
    format: "In-person",
    date: "July 20, 2026",
    time: "14:00 – 16:00 CET",
    location: "Zürich Office",
    image: eventOxbridge,
    href: "#",
  },
  {
    title: "Oxford & Cambridge Application Workshop",
    format: "In-person",
    date: "July 20, 2026",
    time: "14:00 – 16:00 CET",
    location: "Zürich Office",
    image: eventOxbridge2,
    href: "#",
  },
  {
    title: "Swiss Boarding Schools Fair",
    format: "In-person",
    date: "May 8, 2026",
    time: "14:00 – 18:00 CET",
    location: "Hotel Baur au Lac, Zürich",
    image: eventSwissFair,
    href: "#",
  },
  {
    title: "University Admissions Masterclass",
    format: "Hybrid",
    date: "April 15, 2026",
    time: "18:00 – 20:00 CET",
    location: "Zürich Office & Online",
    image: eventMasterclass,
    href: "#",
  },
  {
    title: "Swiss Boarding Schools Fair",
    format: "Online",
    date: "May 8, 2026",
    time: "14:00 – 18:00 CET",
    location: "Hotel Baur au Lac, Zürich",
    image: eventSwissFairOnline,
    href: "#",
  },
  {
    title: "University Admissions Masterclass",
    format: "Hybrid",
    date: "April 15, 2026",
    time: "18:00 – 20:00 CET",
    location: "Zürich Office & Online",
    image: eventMasterclass2,
    href: "#",
  },
];
