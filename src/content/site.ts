/** Site-wide routes and navigation. Pages that aren't designed yet render the 404 page. */

import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { BookOpenText, ChalkboardTeacher, GraduationCap, Student } from "@phosphor-icons/react/ssr";

export const routes = {
  home: "/",
  services: "/services",
  universityAdmissions: "/services/university-admissions",
  academicSupport: "/services/academic-support",
  boardingSchools: "/services/boarding-schools",
  academicCentre: "/services/academic-centre",
  schools: "/schools",
  process: "/process",
  stories: "/stories",
  events: "/events",
  about: "/about",
  contact: "/contact",
  assessment: "/assessment",
  consultation: "/consultation",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type NavChild = { label: string; href: string; text: string; icon: PhosphorIcon };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Service pages listed in the header's Services dropdown. */
export const serviceNav: NavChild[] = [
  {
    label: "University Admissions",
    href: routes.universityAdmissions,
    text: "Bachelor’s and Master’s — from audit to enrolment",
    icon: GraduationCap,
  },
  { label: "Academic Support", href: routes.academicSupport, text: "A dedicated curator throughout the school year", icon: BookOpenText },
  { label: "Boarding Schools", href: routes.boardingSchools, text: "Choosing the school and managing admission", icon: Student },
  { label: "Academic Centre & Tutors", href: routes.academicCentre, text: "500+ tutors from the US and UK", icon: ChalkboardTeacher },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services, children: serviceNav },
  { label: "Schools", href: routes.schools },
  { label: "Process", href: routes.process },
  { label: "Stories", href: routes.stories },
  { label: "Events", href: routes.events },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];

export const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Español" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const contact = {
  email: "ceo@bnglobal.net",
  phone: "+38 (095) 381-88-88",
  phoneHref: "tel:+380953818888",
  hours: "Mon – Fri: 9:00 – 18:00 EET",
  instagram: "https://www.instagram.com/bn_educationgroup/",
  facebook: "https://www.facebook.com/bneducationgroup?ref=br_rs",
  youtube: "https://www.youtube.com/channel/UCib0U_UeIchJHn0hAJMjY_g",
} as const;

export const footerNav = {
  quickLinks: [
    { label: "About Us", href: routes.about },
    { label: "Services", href: routes.services },
    { label: "Schools", href: routes.schools },
    { label: "Stories", href: routes.stories },
    { label: "Events", href: routes.events },
  ],
  resources: [
    { label: "Take Assessment", href: routes.assessment },
    { label: "Application Process", href: routes.process },
    { label: "Tutors", href: routes.academicCentre },
    { label: "Contact", href: routes.contact },
  ],
} as const;
