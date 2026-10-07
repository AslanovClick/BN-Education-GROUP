export type Resource = {
  title: string;
  text: string;
  /** File URL — placeholders until the documents are uploaded. */
  href: string;
};

export const resources: Resource[] = [
  { title: "University Application Checklist", text: "Complete checklist for university applications", href: "#" },
  { title: "Financial Aid Guide", text: "Understanding scholarships and financial aid", href: "#" },
  { title: "Timeline Planner", text: "Application timeline planning template", href: "#" },
  {
    title: "Boarding School Requirements Guide",
    text: "Overview of typical boarding school requirements",
    href: "#",
  },
];

/** Package brochures — placeholders until English PDFs are uploaded. */
export const brochures: Resource[] = [
  { title: "University Admission Packages", text: "Select, Smart, Royal and Royal Signature Uni", href: "#" },
  { title: "Academic Support Packages", text: "Smart and Royal Academic Support", href: "#" },
  { title: "BN Global Academic Route", text: "Individual guidance through the academic year", href: "#" },
];
