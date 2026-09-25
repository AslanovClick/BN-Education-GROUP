import type { StaticImageData } from "next/image";

import eventOxbridge from "@/assets/images/event-oxbridge.jpg";
import eventOxbridge2 from "@/assets/images/event-oxbridge-2.jpg";
import eventOxbridge3 from "@/assets/images/event-oxbridge-3.jpg";
import eventSwissFair from "@/assets/images/event-swiss-fair.jpg";
import eventSwissFair2 from "@/assets/images/event-swiss-fair-2.jpg";
import eventSwissFairOnline from "@/assets/images/event-swiss-fair-online.jpg";
import eventMasterclass from "@/assets/images/event-masterclass.jpg";
import eventMasterclass2 from "@/assets/images/event-masterclass-2.jpg";
import eventMasterclass3 from "@/assets/images/event-masterclass-3.jpg";

export const eventFormats = ["Hybrid", "In-person", "Online"] as const;
export type EventFormat = (typeof eventFormats)[number];

export type EventItem = {
  id: string;
  title: string;
  format: EventFormat;
  date: string;
  time: string;
  location: string;
  /** Short summary shown on the registration page. */
  description: string;
  image: StaticImageData;
};

export const registrationHref = (event: EventItem) => `/events/register?event=${event.id}`;

const masterclass = {
  title: "University Admissions Masterclass",
  date: "April 15, 2026",
  time: "18:00 – 20:00 CET",
  location: "Zürich Office & Online",
  description:
    "An evening with our admissions specialists on how leading universities select students — building a strong profile, writing a personal statement that stands out and preparing for interviews. Includes a live Q&A.",
};
const fair = {
  title: "Swiss Boarding Schools Fair",
  date: "May 8, 2026",
  time: "14:00 – 18:00 CET",
  location: "Hotel Baur au Lac, Zürich",
  description:
    "Meet admissions representatives from leading Swiss boarding schools in one afternoon. Explore academic programmes, boarding life and entry requirements, and get personal guidance from the BN team.",
};
const oxbridge = {
  title: "Oxford & Cambridge Application Workshop",
  date: "July 20, 2026",
  time: "14:00 – 16:00 CET",
  location: "Zürich Office",
  description:
    "A focused workshop on the Oxbridge application: choosing a course and college, admissions tests, the personal statement and what to expect from the interview — with examples from successful applicants.",
};

/** Full list for the Events page (order as in the design). */
export const allEvents: EventItem[] = [
  { id: "admissions-masterclass-1", ...masterclass, format: "Hybrid", image: eventMasterclass },
  { id: "swiss-boarding-fair-1", ...fair, format: "In-person", image: eventSwissFair },
  { id: "oxbridge-workshop-1", ...oxbridge, format: "In-person", image: eventOxbridge },
  { id: "swiss-boarding-fair-online", ...fair, format: "Online", image: eventSwissFairOnline },
  { id: "admissions-masterclass-2", ...masterclass, format: "Hybrid", image: eventMasterclass2 },
  { id: "oxbridge-workshop-2", ...oxbridge, format: "In-person", image: eventOxbridge2 },
  { id: "admissions-masterclass-3", ...masterclass, format: "Hybrid", image: eventMasterclass3 },
  { id: "swiss-boarding-fair-2", ...fair, format: "In-person", image: eventSwissFair2 },
  { id: "oxbridge-workshop-3", ...oxbridge, format: "In-person", image: eventOxbridge3 },
];

const byId = (id: string) => allEvents.find((e) => e.id === id)!;

/** Homepage carousel selection. */
export const featuredEvents: EventItem[] = [
  "oxbridge-workshop-1",
  "oxbridge-workshop-2",
  "swiss-boarding-fair-1",
  "admissions-masterclass-1",
  "swiss-boarding-fair-online",
  "admissions-masterclass-2",
].map(byId);

export const findEvent = (id: string | undefined) => (id ? allEvents.find((e) => e.id === id) : undefined);
