import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ChartLineUp, Exam, Flask, MathOperations, PenNib, Scales } from "@phosphor-icons/react/ssr";

/** BN Academic Centre & tutors. Tutor profiles are PLACEHOLDERS until real profiles arrive. */

/** Short lead for the intro block. */
export const centreLead =
  "Admission may require tutors. Ours come from the US and UK — or your child can keep their own teachers. Lessons are one-to-one and online.";

export const centreStats = [
  { value: 500, suffix: "+", label: "Tutors from the US and UK" },
  { value: 1, suffix: ":1", label: "Individual online lessons" },
  { value: 15, suffix: "", label: "Years in international education" },
] as const;

export const subjects = {
  curricula: [
    { name: "IB", text: "International Baccalaureate" },
    { name: "A-Levels", text: "UK sixth form" },
    { name: "IGCSE", text: "International GCSE" },
    { name: "AP", text: "US Advanced Placement" },
  ],
  exams: [
    { name: "IELTS and TOEFL", text: "English for study abroad" },
    { name: "SAT and ACT", text: "US university admission" },
    { name: "UCAT, LNAT, TMUA", text: "UK entrance tests for medicine, law and maths" },
    { name: "GMAT and GRE", text: "Master’s programmes" },
    { name: "Research project", text: "For competitive applications" },
  ],
};

/** How tutoring works together with the academic curator (from the Academic Support brochures). */
export const tutoringSteps = [
  { title: "Find the cause", text: "If a subject becomes a problem, the curator finds the specific reason and builds an action plan." },
  { title: "Match a tutor", text: "A certified international tutor is selected for the subject and for your child." },
  { title: "Set goals, check results", text: "The curator sets the tutor’s goals, supervises the lessons and arranges a replacement if needed." },
  { title: "Report to parents", text: "You receive a progress report after each learning block." },
];

export type TutorProfile = {
  subject: string;
  text: string;
  focus: string[];
  background: string;
  icon: PhosphorIcon;
};

export const tutorProfiles: TutorProfile[] = [
  {
    subject: "Mathematics",
    text: "From IB Analysis to TMUA — rigorous problem-solving, built step by step.",
    focus: ["IB", "A-Level", "TMUA"],
    background: "UK-certified",
    icon: MathOperations,
  },
  {
    subject: "English & Academic Writing",
    text: "IELTS, TOEFL and the essays that make an application stand out.",
    focus: ["IELTS", "TOEFL", "Essays"],
    background: "US & UK",
    icon: PenNib,
  },
  {
    subject: "Biology & Chemistry",
    text: "Sciences for IB and A-Level, and UCAT for future doctors.",
    focus: ["IB", "A-Level", "UCAT"],
    background: "UK-certified",
    icon: Flask,
  },
  {
    subject: "SAT & ACT",
    text: "Structured preparation for the US admission tests.",
    focus: ["Maths", "Reading", "Writing"],
    background: "US-certified",
    icon: Exam,
  },
  {
    subject: "Economics & Business",
    text: "Economics and business studies for IB, A-Level and AP.",
    focus: ["IB", "A-Level", "AP"],
    background: "US & UK",
    icon: ChartLineUp,
  },
  {
    subject: "Law & Humanities",
    text: "LNAT, history and politics for future lawyers and policy-makers.",
    focus: ["LNAT", "History", "Politics"],
    background: "UK-certified",
    icon: Scales,
  },
];

export const tutorNote = "Individual tutor profiles are coming soon.";
