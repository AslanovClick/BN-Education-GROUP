import type { Metadata } from "next";
import heroImage from "@/assets/images/service-boarding.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { HowItWorksSection } from "@/components/packages/TierSections";
import { TiersSection } from "@/components/packages/TiersSection";
import { FirstMeetingCta } from "@/components/sections/CtaBanner";
import { SchoolsTeaser } from "@/components/sections/schools/SchoolsTeaser";
import { Eyebrow } from "@/components/ui/Typography";
import { boardingFlows, boardingTiers } from "@/content/boarding";
import { routes } from "@/content/site";
import { OtherServices } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Boarding Schools",
  description:
    "Boarding school placement built around your child: assessment, a shortlist of 5–8 schools and complete admission management.",
};

const facts = [
  { value: "5–8", label: "Carefully selected schools on your shortlist" },
  { value: "1", label: "Team and one point of contact for your family" },
  { value: "24/7", label: "Support for your family when you need it" },
];

export default function BoardingSchoolsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: "Home", href: routes.home },
            { label: "Services", href: routes.services },
            { label: "Boarding Schools" },
          ]}
          title={
            <>
              Boarding School <em>Placement</em>
            </>
          }
          description="We find the school that fits your child — their talents, personality and goals — and manage the whole admission, from the first visit to the first term."
          image={heroImage}
        />

        <section className="section-y bg-white">
          <div className="container-page">
            {/* Three-column grid matching the figures: the text starts on the second rule */}
            <Reveal className="grid gap-5 lg:grid-cols-3 lg:gap-10">
              <div>
                <Eyebrow>Our approach</Eyebrow>
                <h2 className="mt-3 text-h2 text-balance text-ink-800">Built Around Your Child</h2>
              </div>
              <p className="max-w-[640px] text-lead text-pretty text-muted lg:col-span-2 lg:self-end lg:pb-1">
                We start not with a list of schools, but with your child — their talents, personality, interests and
                long-term goals. After the assessment we present 5–8 carefully selected schools, explain the strengths
                and specifics of each, and manage the full admission process.
              </p>
            </Reveal>
            <Stagger as="dl" className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:gap-10">
              {facts.map((f) => (
                <StaggerItem key={f.label} className="flex flex-col gap-3 border-t border-gold-500 pt-6">
                  <dt className="max-w-[260px] text-body-sm font-medium text-muted">{f.label}</dt>
                  <dd className="order-first text-[44px] font-bold leading-none tracking-[-0.03em] text-ink-800 md:text-[56px]">{f.value}</dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <TiersSection
          title="Two Levels of Support"
          description="Choose whether we manage the admission, or stay with your child through the first academic year as well."
          tiers={boardingTiers}
        />
        <HowItWorksSection
          tiers={boardingTiers}
          flows={boardingFlows}
          description="From getting to know your child to their first term at the new school."
        />
        <SchoolsTeaser />
        <OtherServices current={routes.boardingSchools} />
        <FirstMeetingCta />
      </main>
      <Footer />
    </>
  );
}
