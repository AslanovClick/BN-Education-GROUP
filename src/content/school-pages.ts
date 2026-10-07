import type { Block } from "./articles";
import type { Institution } from "./schools";
import { universities } from "./schools";
import enrolmentImage from "@/assets/images/step-4.jpg";

/**
 * PLACEHOLDER body for school and university pages, shared until each institution's own
 * description, photos and prospectus arrive.
 */
export function institutionBody(inst: Institution): Block[] {
  const isUniversity = universities.some((u) => u.slug === inst.slug);
  const kind = isUniversity ? "university" : "school";

  return [
    { type: "h2", id: "overview", text: "Overview" },
    { type: "p", text: inst.text },
    {
      type: "p",
      text: `We recommend a ${kind} only when it genuinely fits the child — their strengths, character and long-term goals. This page gives a first impression; the full picture comes from a conversation with our team.`,
    },
    { type: "h2", id: "academic-life", text: "Academic life" },
    {
      type: "p",
      text: isUniversity
        ? "Teaching combines lectures with small-group tutorials or seminars, independent research and close contact with academic staff."
        : "Small classes, experienced teachers and a broad choice of subjects, with clear guidance on the next step after school.",
    },
    {
      type: "ul",
      items: isUniversity
        ? ["Bachelor’s and Master’s programmes", "Research-led teaching", "International student community"]
        : ["Small classes and individual attention", "A wide choice of subjects and activities", "University guidance from the early years"],
    },
    { type: "h2", id: "life-and-care", text: isUniversity ? "Student life" : "Boarding and pastoral care" },
    {
      type: "p",
      text: isUniversity
        ? "Colleges, societies, sport and a lively city around the campus make the first year abroad easier to settle into."
        : "Boarding houses are led by experienced house parents. Every student has a tutor who follows their progress and wellbeing.",
    },
    {
      type: "image",
      src: enrolmentImage,
      alt: "Students walking to class together",
      caption: "We stay in touch with the family through the first months after enrolment.",
    },
    { type: "h2", id: "admission", text: "Admission" },
    {
      type: "ol",
      items: isUniversity
        ? ["Admissions officer audit and strategy", "Essays, documents and references", "Entrance tests and interview preparation", "Offer, visa and accommodation"]
        : ["Getting to know your child and family", "School visit and registration", "Entrance tests and interview", "Offer, visa and preparation for the first term"],
    },
    {
      type: "quote",
      text: "We don’t look for the most famous name. We look for the place where your child will flourish.",
      cite: "Oksana Chmykhalo, Founder of BN Education",
    },
  ];
}
