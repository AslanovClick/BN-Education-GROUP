import advisorImage from "@/assets/images/consultation/advisor.jpg";

export const interests = [
  "Boarding school placement",
  "University admissions",
  "Short & summer programmes",
  "Academic support",
  "BN Academic Centre",
  "Family support",
  "Not sure yet — I’d like advice",
] as const;

export const advisor = {
  name: "Dr. Elena Rostova",
  role: "Senior Admissions Director",
  image: advisorImage,
};

export const meeting = {
  durationMin: 45,
  format: "Video call",
  /** Placeholder until a real booking backend issues links. */
  link: "https://meet.bneducation.ch/e-rostova",
  /** Office timezone the slots are defined in. */
  officeTz: "Europe/Zurich",
  /** Bookable start times, office time (HH:MM). */
  slots: ["09:00", "09:45", "10:30", "11:15", "13:00", "13:45", "14:30", "15:15", "16:00"],
  /** How far ahead families can book. */
  horizonDays: 60,
};

/** Timezones offered in the picker (the visitor's own zone is added automatically if missing). */
export const timezones = [
  { id: "Europe/Zurich", label: "Zürich" },
  { id: "Europe/London", label: "London" },
  { id: "Europe/Moscow", label: "Moscow" },
  { id: "Asia/Dubai", label: "Dubai" },
  { id: "Asia/Singapore", label: "Singapore" },
  { id: "Asia/Hong_Kong", label: "Hong Kong" },
  { id: "America/New_York", label: "New York" },
  { id: "America/Los_Angeles", label: "Los Angeles" },
  { id: "Australia/Sydney", label: "Sydney" },
];
