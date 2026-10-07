import type { Tier, TierFlow } from "./tiers";

/**
 * Boarding School Placement — PLACEHOLDER packages. The client hasn’t sent materials yet:
 * names and descriptions follow the existing Smart / Royal cards, prices are "on request".
 */
export const boardingTiers: Tier[] = [
  {
    id: "smart-school",
    name: "Smart School",
    price: "On request",
    headline: "School selection and complete admission management.",
    meta: ["Start 6–12 months before entry", "Monthly report to parents"],
    highlights: ["BN assessment of your child", "A shortlist of 5–8 schools", "Applications, tests and interviews", "Visa and relocation advice"],
    includes: [
      "Family meeting and BN assessment of your child’s potential",
      "A shortlist of 5–8 schools, with the strengths of each explained",
      "School visits and meetings arranged",
      "Applications, deadlines and entrance test preparation",
      "Interview preparation",
      "Communication with schools on your behalf",
      "Visa and relocation advice",
    ],
  },
  {
    id: "royal-school",
    name: "Royal School",
    price: "On request",
    headline: "Admission plus support throughout the first academic year.",
    meta: ["Start 12+ months before entry", "Monthly report to parents"],
    highlights: ["Everything in Smart School", "A curator through the first year", "Grades monitored, tutors when needed", "Help with adaptation and travel"],
    intro: "Everything in Smart School, plus:",
    includes: [
      "A dedicated curator through the first academic year",
      "Grade monitoring and tutors brought in when needed",
      "Help with adaptation: guardianship, travel and everyday matters",
      "Parent meetings attended with or for you",
      "Summer programme selection in line with the strategy",
    ],
    featured: true,
  },
];

export const boardingFlows: TierFlow[] = [
  {
    tierId: "smart-school",
    summary: "We find the school that fits your child — not the other way round — and manage admission from start to finish.",
    phases: [
      { when: "Weeks 1–2", title: "Getting to know your child", text: "A family meeting and the BN assessment of interests, strengths and potential." },
      { when: "Month 1", title: "A shortlist of 5–8 schools", text: "Carefully selected options, with the strengths and specifics of each explained." },
      { when: "Months 2–6", title: "Visits and applications", text: "School visits, applications, entrance tests and interviews — prepared and managed by BN." },
      { when: "Offer", title: "Ready to move", text: "Acceptance, visa and relocation advice before the first term." },
    ],
    parents: ["A report every month", "One point of contact", "Every deadline managed"],
  },
  {
    tierId: "royal-school",
    summary: "Admission is only the beginning. We stay with your child through the first year, when support matters most.",
    phases: [
      { when: "Before entry", title: "Everything in Smart School", text: "Assessment, shortlist, applications, interviews and visa." },
      { when: "First term", title: "Settling in", text: "Adaptation support, guardianship and travel, with a curator your child can reach." },
      { when: "Every month", title: "Progress in view", text: "Grades monitored, tutors brought in early and a monthly report for you." },
      { when: "Summer", title: "The next step", text: "A summer programme chosen to fit your child’s education strategy." },
    ],
    parents: ["A report every month", "Parent meetings attended", "A curator for the first year"],
  },
];
