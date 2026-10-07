import type { CompareRow, Tier, TierFlow } from "./tiers";

/**
 * Academic Support — copy from the "Annual academic support packages" (Smart / Royal) and
 * "BN Global Academic Route" brochures. The Global Academic Route is presented as the third tier.
 */

export const academicTiers: Tier[] = [
  {
    id: "smart",
    name: "Smart Academic Support",
    price: "€6,000",
    priceNote: "/ year",
    headline: "A curator on weekdays and a clear view of your child’s progress.",
    meta: ["Mon – Fri, 9:00 – 18:00 EET", "Monthly school report"],
    highlights: ["A curator Mon–Fri, 9:00–18:00 EET", "Grades monitored by an Academic Advisor", "Tutors appointed and supervised", "A school report every month"],
    includes: [
      "An academic curator and support with everyday matters throughout the academic year (Mon–Fri, 9:00–18:00 EET)",
      "An Academic Advisor throughout the year, monitoring progress and grades",
      "Help with flights and transfers, permits, school paperwork and other organisational matters",
      "The curator appoints extra tutors to prevent grades slipping, supervises their work and arranges a replacement if needed",
      "Registration for online parent meetings (parents attend themselves)",
      "A school report for parents once a month",
      "A progress report on tutoring after each learning block",
      "A visa specialist (student visa)",
      "Visitor visa for parents (additional fee)",
    ],
    suits:
      "Families who feel their child is independent enough to take responsibility for their studies, but want to be sure of their academic progress.",
  },
  {
    id: "royal",
    name: "Royal Academic Support",
    price: "€10,000",
    priceNote: "/ year",
    headline: "Daily oversight — attendance, progress and behaviour — with a curator available 24/7.",
    meta: ["Curator available 24/7", "Weekly school check-in"],
    highlights: ["A curator available 24/7", "A weekly check of the school situation", "Parent meetings attended for you", "Summer programmes arranged"],
    includes: [
      "An academic curator and support with everyday matters throughout the academic year — 24/7",
      "An Academic Advisor throughout the year, monitoring progress and grades",
      "Help with flights and transfers, permits, school paperwork and other organisational matters",
      "Selection and arrangement of summer programmes in line with the individual education strategy",
      "The curator appoints extra tutors to prevent grades slipping, supervises their work and arranges a replacement if needed",
      "Online participation in parent meetings — instead of you or together with you",
      "A full school report once a month, plus a weekly check of the situation at school",
      "A progress report on tutoring after each learning block",
      "A visa specialist (student visa)",
      "Visitor visa for parents (additional fee)",
    ],
    suits:
      "Families who want the assurance that we check everything happening with their child every day: attendance, progress and behaviour.",
    featured: true,
  },
  {
    id: "global-route",
    name: "BN Global Academic Route",
    price: "€15,000",
    priceNote: "/ academic year",
    headline: "Individual guidance that takes charge of your child’s whole educational path.",
    meta: ["Weekly call with your child", "Full monthly report"],
    highlights: ["A personal curator and weekly calls", "Career orientation test with Oksana", "Strengths and a future direction", "A full monthly report with next month’s plan"],
    includes: [
      "A personal academic curator",
      "Control of academic results, with certified tutors when needed",
      "Building responsibility and independence",
      "Career orientation test with Oksana Chmykhalo",
      "Finding strengths and a future direction",
      "A strategy for summer and extracurricular activities",
      "A global education route — from subjects to university",
      "A full report for parents once a month",
    ],
    suits:
      "Families who want to take charge of the entire educational path — from current results and motivation to understanding strengths, choosing a direction and international education.",
    footnotes: ["Tutoring is paid separately, in lesson packages agreed with parents."],
  },
];

/** "How it works" — the rhythm of each tier through the academic year. */
export const academicFlows: TierFlow[] = [
  {
    tierId: "smart",
    summary:
      "Your child keeps their independence, and you keep a clear view of their progress. The curator steps in as soon as grades start to slip.",
    phases: [
      {
        when: "Every weekday",
        title: "A curator on hand",
        text: "Monday to Friday, 9:00–18:00 EET, your child can turn to the curator with academic and everyday questions.",
      },
      {
        when: "Throughout the year",
        title: "Grades under watch",
        text: "The Academic Advisor tracks progress and grades. If they start to slip, the curator brings in a tutor, supervises the work and replaces the tutor if needed.",
      },
      {
        when: "Every month",
        title: "School report",
        text: "You receive a school report for the month. We register you for online parent meetings, which you attend yourself.",
      },
      {
        when: "As needed",
        title: "Logistics and visa",
        text: "Flights, transfers, permits, school paperwork and the student visa are taken care of.",
      },
    ],
    parents: ["A monthly school report", "A tutoring report after each block", "Registration for parent meetings"],
  },
  {
    tierId: "royal",
    summary:
      "We follow everything happening with your child at school, every day — and act on your behalf when it matters.",
    phases: [
      {
        when: "24/7",
        title: "A curator at any hour",
        text: "Academic and everyday support around the clock, for your child and for you.",
      },
      {
        when: "Every week",
        title: "School check-in",
        text: "A weekly check of the situation at school: attendance, progress and behaviour. Tutors are brought in early when needed.",
      },
      {
        when: "Every month",
        title: "Full school report",
        text: "A complete monthly report, and we attend parent meetings online — instead of you or together with you.",
      },
      {
        when: "Summer",
        title: "Summer programmes",
        text: "Programmes are selected and arranged in line with your child’s individual education strategy.",
      },
    ],
    parents: ["A full monthly report", "Weekly control of the school situation", "Parent meetings attended for you"],
  },
  {
    tierId: "global-route",
    summary:
      "More than oversight: a year-long route from today’s grades and motivation to a conscious choice of direction and international education.",
    phases: [
      {
        when: "Every week",
        title: "A call with your child",
        text: "A Zoom or phone call every week, or more often if the situation needs it. The curator stays in contact with the school and teachers.",
      },
      {
        when: "Every month",
        title: "The full picture",
        text: "A report on progress, strengths and risks, school and tutor feedback, motivation, independence, interests, BN recommendations and the plan for next month.",
      },
      {
        when: "Throughout the year",
        title: "Interests become directions",
        text: "We notice an interest, offer to try it, gain real experience, analyse and go deeper — through courses, projects, competitions and summer programmes.",
      },
      {
        when: "By year end",
        title: "An individual route",
        text: "Subjects → profile → exams → country → university → field of study, built on results, strengths and interests.",
      },
    ],
    parents: ["A full monthly report with next month’s plan", "A weekly call with your child", "A career orientation test with Oksana"],
  },
];

export const academicCompare: CompareRow[] = [
  { label: "Price per year", values: ["€6,000", "€10,000", "€15,000"] },
  { label: "Curator availability", values: ["Mon–Fri, 9:00–18:00 EET", "24/7", "Personal curator, weekly calls"] },
  { label: "Academic Advisor, grade monitoring", values: [true, true, true] },
  { label: "Contact with the school", values: ["Monthly report", "Weekly check-in", "Ongoing, with teacher feedback"] },
  { label: "Parent meetings", values: ["Registration", "Attended for or with you", "Attended, with a report"] },
  { label: "Report to parents", values: ["Monthly school report", "Monthly full report", "Monthly full report + plan"] },
  { label: "Tutors appointed and supervised", values: [true, true, true] },
  { label: "Summer programmes", values: [false, "Selection and arrangement", "Summer and extracurricular strategy"] },
  { label: "Career orientation with Oksana", values: [false, false, true] },
  { label: "Individual global education route", values: [false, false, true] },
  { label: "Flights, transfers, paperwork, student visa", values: [true, true, "On request"] },
  { label: "Visitor visa for parents", values: ["Additional fee", "Additional fee", "On request"] },
];

export const globalRoute = {
  goal: "To take charge of your child’s entire educational path: from current performance and motivation to understanding their strengths, choosing a direction and further international education.",
  components: [
    {
      title: "Personal Academic Curator",
      summary: "A BN specialist follows your child all year and talks with them every week.",
      lead: "A BN specialist accompanies your child throughout the year:",
      items: [
        "takes part in communication with the school",
        "tracks grades, assignments, deadlines and test results",
        "gathers feedback from teachers",
        "identifies the reasons behind falling performance",
        "makes sure academic gaps are closed",
        "talks with your child regularly",
        "attends parent meetings online and key school meetings, then reports back",
        "a Zoom or phone call with your child every week, or more often",
      ],
    },
    {
      title: "Control of Academic Results",
      summary: "Problems are traced to their cause, with certified tutors brought in when needed.",
      items: [
        "If a subject becomes a problem, the curator finds the specific cause and builds an action plan.",
        "If needed, a certified international tutor is brought in: English, maths, biology, academic writing and more.",
        "The curator sets the tutor’s goals and monitors the results.",
        "Tutoring is paid separately, in lesson packages agreed with parents.",
      ],
    },
    {
      title: "Responsibility and Independence",
      summary: "Your child learns to plan, keep deadlines and own their results.",
      lead: "We gradually teach your child to:",
      items: ["plan their studies", "keep deadlines", "manage their assignments", "ask for help", "own their results"],
      note: "The aim is not more external control, but inner responsibility for their own education.",
    },
    {
      title: "Career Orientation Test with Oksana Chmykhalo",
      summary: "What do I want, and why does education matter to me?",
      text: "The aim is to broaden your child’s horizons and gradually shape their own understanding: what do I want, and why does education matter to me.",
    },
    {
      title: "Strengths and a Future Direction",
      summary: "Interests are tested in real life — courses, projects, competitions, internships.",
      text: "Over the year the curator observes your child’s interests and abilities and outlines several potential directions. We don’t choose a profession from a single test.",
      note: "Notice an interest → offer to try it → gain real experience → analyse → go deeper.",
    },
    {
      title: "Summer and Extracurricular Strategy",
      summary: "Programmes chosen for your child’s real interests, not for the CV.",
      text: "We choose additional and summer programmes not “for the CV”, but for your child’s actual interests. An interest in entrepreneurship, for example, becomes a business programme that tests it through real experience.",
    },
    {
      title: "Global Education Route",
      summary: "An individual route from school subjects to university and field of study.",
      text: "We gradually introduce your child to education in the UK, the US, Europe, Switzerland and Asia, and explain the differences between systems, universities and prospects.",
      note: "Subjects → profile → exams → country → university → field of study.",
    },
    {
      title: "Full Monthly Report for Parents",
      summary: "Progress, risks, motivation, interests and the plan for next month.",
      lead: "You receive the complete picture:",
      items: [
        "progress and its dynamics",
        "strengths and weaknesses",
        "academic risks",
        "school and tutor feedback",
        "motivation",
        "independence",
        "interests",
        "BN recommendations",
        "the plan for next month",
      ],
    },
  ] as { title: string; summary: string; lead?: string; text?: string; items?: string[]; note?: string }[],
  result: {
    text: "Parents understand what is really happening with their child’s education and where it is heading. Step by step, the child:",
    chain: [
      "Improves academic results",
      "Becomes more independent",
      "Understands their strengths",
      "Tries different directions",
      "Forms their own goals",
      "Makes a conscious choice of further education",
    ],
  },
};
