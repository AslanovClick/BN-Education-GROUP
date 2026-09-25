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
