/** Site-wide routes and navigation. Pages that aren't designed yet render a placeholder. */

export const routes = {
  home: "/",
  services: "/services",
  process: "/process",
  events: "/events",
  about: "/about",
  contact: "/contact",
  assessment: "/assessment",
  consultation: "/consultation",
  privacy: "/privacy",
  terms: "/terms",
  quiz: "/potential-quiz",
} as const;

export const mainNav = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "Process", href: routes.process },
  { label: "Events", href: routes.events },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
] as const;

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
  email: "info@bneducation.ch",
  phone: "+41 12 345 67 89",
  phoneHref: "tel:+41123456789",
  city: "Zürich, Switzerland",
  // The design's text says "Bahnhofstrasse 100" but its map pin reads "Bahnhofstrasse 10" — using the map's value
  // so the page doesn't contradict itself. Confirm the real address.
  address: "Bahnhofstrasse 10, 8001 Zürich, Switzerland",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse+10,+8001+Z%C3%BCrich",
  hours: "Mon – Fri: 9:00 – 18:00 CET · Sat – Sun: closed",
  linkedin: "#",
  instagram: "#",
} as const;

export const footerNav = {
  quickLinks: [
    { label: "About Us", href: routes.about },
    { label: "Services", href: routes.services },
    { label: "Process", href: routes.process },
    { label: "Events", href: routes.events },
  ],
  resources: [
    { label: "Take Assessment", href: routes.assessment },
    { label: "Application Process", href: routes.process },
    { label: "Potential Quiz", href: routes.quiz },
    { label: "Contact", href: routes.contact },
  ],
} as const;
