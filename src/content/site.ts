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
  privacy: "#",
  terms: "#",
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
    { label: "Potential Quiz", href: "#" },
    { label: "Contact", href: routes.contact },
  ],
} as const;
