import type { CompareRow, Tier, TierFlow } from "./tiers";

/** University Admissions — copy from the "University admission packages" brochure (Bachelor’s · Master’s). */

export const manifesto = {
  title: "Every child is talented. Not every talent is discovered.",
  text: "We work with every child, not only straight-A students — finding their strength and building the path to university from it.",
};

export const admissionStats = [
  { value: 15, suffix: "", label: "Years in international education" },
  { value: 500, suffix: "+", label: "Tutors from the US and UK" },
  { value: 100, suffix: "%", label: "Of students admitted to one of their chosen universities" },
] as const;

export const workSteps = [
  {
    title: "Admissions Officer Audit",
    text: "Conducted by a current admissions officer from a UK or US university, depending on the strategy. We agree the best option with you.",
  },
  {
    title: "Strategy",
    text: "A list of universities, deadlines, requirements and a plan for every month.",
  },
  {
    title: "Admission",
    text: "Documents, essays, interviews and visa. Each area is handled by its own specialist.",
  },
];

export const curators = [
  { title: "Academic Curator", text: "Responsible for every decision and leads the admission." },
  { title: "Visa Curator", text: "Documents, visa and relocation." },
  { title: "Tutor Curator", text: "Selects tutors and monitors their lessons." },
];

const IVY_NOTE = "We apply to the Ivy League if the profile is confirmed by the audit, or at the parents’ request.";

export const admissionTiers: Tier[] = [
  {
    id: "smart-uni",
    name: "Smart Uni",
    price: "€10,000",
    headline: "5 universities via UCAS + 2 in Europe",
    meta: ["Start 3–6 months before applying", "Monthly report to parents"],
    highlights: ["Audit by a current admissions officer", "Strategy, essays and documents", "Visa and relocation advice", "1 partner university as insurance"],
    includes: [
      "Audit by a current admissions officer",
      "Strategy and deadline calendar",
      "Essay development",
      "Preparing and submitting documents",
      "Summer programme selection and booking*",
      "Visa and relocation advice",
      "A team of three curators",
      "A partner university as an insurance option, included",
    ],
    footnotes: ["* Selection and booking are included. The summer programme itself is paid by the parents."],
  },
  {
    id: "royal-uni",
    name: "Royal Uni",
    price: "€20,000",
    headline: "Up to 8 universities in the US, UK and Europe, including the Ivy League*",
    meta: ["Start 2 years before university", "Monthly report to parents"],
    highlights: ["Everything in Smart Uni", "Interview preparation and scholarships", "Help with accommodation", "1 year of academic support at school"],
    intro: "Everything in Smart Uni, plus:",
    includes: [
      "Interview preparation",
      "Applications to university scholarship programmes",
      "Accommodation: university residence registration or a private housing search",
      "2 partner universities as insurance options, included",
      {
        text: "Academic support at school, 1 academic year",
        sub: ["Programme and subject choice", "Strategy consultations", "Grade monitoring"],
      },
    ],
    footnotes: [`* ${IVY_NOTE}`],
    featured: true,
  },
  {
    id: "royal-signature-uni",
    name: "Royal Signature Uni",
    price: "€30,000",
    headline: "Up to 12 universities, including the Ivy League* and other top universities",
    meta: ["Start 2 years before university", "Monthly report to parents", "5 families a year"],
    highlights: ["Everything in Royal Uni", "Monthly meetings with Oksana Chmykhalo", "Applicant profile: research, olympiads, portfolio", "2 years of academic support at school"],
    intro: "Everything in Royal Uni, plus:",
    includes: [
      "Personal work with Oksana Chmykhalo: a meeting with the child and parents once a month",
      {
        text: "Building the applicant profile",
        sub: ["Research projects**", "Olympiads", "Summer programmes", "Portfolio**"],
      },
      "Academic support at school: 2 academic years",
      "Tutor selection and supervision",
      "We keep the pace so the plan never slips",
    ],
    footnotes: [`* ${IVY_NOTE}`, "** Led by subject tutors; lessons are paid separately."],
  },
];

/** "How it works" — the order in which each package unfolds, built from the package contents. */
export const admissionFlows: TierFlow[] = [
  {
    tierId: "smart-uni",
    summary:
      "A focused package for families who already know the direction. We start 3–6 months before the application deadline and take the whole process off your shoulders.",
    phases: [
      {
        when: "Month 1",
        title: "Audit and strategy",
        text: "A current admissions officer reviews your child’s profile. Together we agree five UCAS universities and two in Europe, the deadlines and a plan for every month.",
      },
      {
        when: "Months 2–4",
        title: "Essays and documents",
        text: "Your child writes the essays — we help find the topic, build the structure and bring the text to its strongest version. We prepare and submit every document.",
      },
      {
        when: "Submission",
        title: "Applications on time",
        text: "Applications go out on schedule. A partner university is held as an insurance option, and the summer programme is booked if it strengthens the application.",
      },
      {
        when: "After offers",
        title: "Visa and relocation",
        text: "The visa curator handles documents, the visa and relocation advice until your child is ready to move.",
      },
    ],
    parents: ["A report every month", "One team of three curators", "A clear calendar of every deadline"],
  },
  {
    tierId: "royal-uni",
    summary:
      "Two years of preparation for the US, UK and Europe. The first year strengthens your child at school, the second turns that profile into strong applications.",
    phases: [
      {
        when: "Year 1",
        title: "Support at school",
        text: "One academic year of academic support: programme and subject choice, strategy consultations and grade monitoring.",
      },
      {
        when: "Year 1–2",
        title: "Audit and strategy",
        text: "An admissions officer audit, then a list of up to eight universities — the Ivy League included if the profile is confirmed.",
      },
      {
        when: "Year 2",
        title: "Applications and interviews",
        text: "Essays, documents, university scholarship applications and interview preparation.",
      },
      {
        when: "After offers",
        title: "Visa and accommodation",
        text: "Two partner universities as insurance options, the visa, and a place to live — a university residence or private housing.",
      },
    ],
    parents: ["A report every month", "Strategy consultations at school", "Scholarship opportunities explored"],
  },
  {
    tierId: "royal-signature-uni",
    summary:
      "Our most personal package — limited to five families a year. Oksana Chmykhalo works with your family directly, and two years of school support build a profile top universities notice.",
    phases: [
      {
        when: "Every month",
        title: "Meetings with Oksana",
        text: "Oksana Chmykhalo meets your child and you once a month and keeps the plan on pace.",
      },
      {
        when: "Years 1–2",
        title: "Building the applicant profile",
        text: "Research projects, olympiads, summer programmes and a portfolio — led by subject tutors we select and supervise.",
      },
      {
        when: "Years 1–2",
        title: "Support at school",
        text: "Two academic years of academic support, with grades and subjects under constant review.",
      },
      {
        when: "Year 2",
        title: "Up to 12 applications",
        text: "Everything in Royal Uni, for up to twelve universities — the Ivy League and other top universities included.",
      },
    ],
    parents: ["A report every month", "A monthly meeting with Oksana", "Tutors chosen and supervised for you"],
  },
];

export const selectUni = {
  name: "Select Uni",
  price: "from €5,000",
  title: "If you need one or two universities",
  text: "The full cycle — diagnostics, strategy, essays, documents, visa and a curator until enrolment. Just for fewer universities.",
  prices: [
    { label: "1 university", value: "€5,000" },
    { label: "2 universities", value: "€7,000" },
    { label: "Each additional", value: "€2,000" },
    { label: "1 university from the top list", value: "€8,000", highlight: true },
  ],
  note: "Oxford, Cambridge, the Ivy League. Entrance tests, interviews and several essay drafts are added.",
};

export const admissionCompare: CompareRow[] = [
  { label: "Price", values: ["€10,000", "€20,000", "€30,000"] },
  { label: "Start", values: ["3–6 months before applying", "2 years before university", "2 years before university"] },
  { label: "Universities", values: ["5 UCAS + 2 in Europe", "Up to 8", "Up to 12"] },
  { label: "Countries", values: ["UK and Europe", "US, UK, Europe", "Any, as you wish"] },
  { label: "Ivy League and top universities**", values: [false, true, true] },
  { label: "Admissions officer audit", values: [true, true, true] },
  { label: "Strategy, essays, documents, visa", values: [true, true, true] },
  { label: "Summer programme selection*", values: [true, true, true] },
  { label: "Report to parents", values: ["Monthly", "Monthly", "Monthly"] },
  { label: "Team of three curators", values: [true, true, true] },
  { label: "Partner universities as insurance", values: ["1", "2", "2"] },
  { label: "Interview preparation", values: [false, true, true] },
  { label: "University scholarship programmes", values: [false, true, true] },
  { label: "Help with accommodation", values: [false, true, true] },
  { label: "Academic support at school", values: [false, "1 academic year", "2 academic years"] },
  { label: "Tutor selection and supervision", values: [false, false, true] },
  { label: "Personal work with Oksana, applicant profile", values: [false, false, true] },
];

export const compareNotes = [
  "* The summer programme itself is paid by the parents.",
  "** If the profile is confirmed by the audit, or at the parents’ request.",
];

export const extras = {
  tutors: [
    "Admission may require tutors.",
    "BN Academic Centre has its own tutors from the US and the UK.",
    "Your child can study with their own teachers or with ours.",
  ],
  exams: [
    "IELTS and TOEFL",
    "SAT and ACT",
    "UCAT, LNAT, TMUA and other entrance tests",
    "GMAT and GRE for Master’s programmes",
    "Research project",
  ],
  summer: "Selection and booking are included in the package. The summer programme itself is paid by the parents.",
};

export const conditions = [
  "The essay is written by the student. We help find the topic, build the structure and bring the text to its strongest version.",
  "The admission decision is made by the university. We are responsible for your child presenting the best version of themselves.",
  "With early-decision admission, the package price is not recalculated.",
  "Summer programmes, tutoring and university application fees are paid separately.",
];

export const afterEnrolment = {
  text: "We can stay close. First-year students have separate university support packages — we’ll send the terms on request.",
  note: "Contract with BN Education Group GmbH.",
};
