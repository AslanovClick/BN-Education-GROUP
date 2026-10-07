import Image from "next/image";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { BookOpenText, GraduationCap, Student } from "@phosphor-icons/react/ssr";
import packagesImage from "@/assets/images/services/packages.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { SectionHeading } from "@/components/ui/Typography";
import { academicTiers } from "@/content/academic-support";
import { admissionTiers, selectUni } from "@/content/admissions";
import { boardingTiers } from "@/content/boarding";
import { routes } from "@/content/site";

type Line = {
  title: string;
  icon: PhosphorIcon;
  price: string;
  text: string;
  tiers: string[];
  href: string;
};

const lines: Line[] = [
  {
    title: "University Admissions",
    icon: GraduationCap,
    price: "from €5,000",
    text: "Bachelor’s and Master’s in the UK, the US and Europe — from the admissions officer audit to enrolment.",
    tiers: [selectUni.name, ...admissionTiers.map((t) => t.name)],
    href: routes.universityAdmissions,
  },
  {
    title: "Academic Support",
    icon: BookOpenText,
    price: "from €6,000 / year",
    text: "A dedicated curator through the school year, control of grades and a full report for you every month.",
    tiers: academicTiers.map((t) => t.name.replace(" Academic Support", "")),
    href: routes.academicSupport,
  },
  {
    title: "Boarding School Placement",
    icon: Student,
    price: "On request",
    text: "A shortlist of 5–8 schools chosen around your child, and complete management of the admission.",
    tiers: boardingTiers.map((t) => t.name),
    href: routes.boardingSchools,
  },
];

/** Services hub: the three package lines at a glance, each leading to its own page. */
export function Packages() {
  return (
    <section id="packages" data-surface="dark" className="theme-dark section-y relative isolate overflow-hidden bg-ink-800">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={packagesImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover" />
        <div className="overlay-ink absolute inset-0" />
      </div>

      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our packages"
            title="Choose the Right Level of Support"
            description="Every line follows the same principle: Smart for a focused result, Royal for closer support, and our most personal options for families who want us at every step."
            className="mx-auto"
          />
        </Reveal>

        <Stagger className="mx-auto mt-10 grid max-w-[640px] gap-4 md:mt-12 lg:max-w-none lg:grid-cols-3 lg:gap-6">
          {lines.map((line) => (
            <StaggerItem
              key={line.title}
              className="group flex flex-col rounded-md border border-transparent bg-sand-50/15 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-gold-500/60 hover:bg-sand-50/20 md:p-8"
            >
              <Icon
                icon={line.icon}
                size={48}
                className="text-gold-500 transition-transform duration-500 ease-out-soft group-hover:scale-110"
              />
              <h3 className="mt-6 text-2xl font-bold leading-tight text-white">{line.title}</h3>
              <p className="mt-2 text-lg font-semibold text-gold-500">{line.price}</p>
              <p className="mt-3 text-body text-white/80">{line.text}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {line.tiers.map((t) => (
                  <li key={t} className="rounded-full border border-white/20 px-3 py-1 text-caption font-medium text-white/85">
                    {t}
                  </li>
                ))}
              </ul>
              <TextLink href={line.href} className="mt-auto self-start pt-7">
                View packages
              </TextLink>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
