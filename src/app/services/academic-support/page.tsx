import type { Metadata } from "next";
import heroImage from "@/assets/images/service-academic.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { CompareSection, HowItWorksSection } from "@/components/packages/TierSections";
import { TiersSection } from "@/components/packages/TiersSection";
import { GlobalRoute } from "@/components/sections/academic/GlobalRoute";
import { FirstMeetingCta } from "@/components/sections/CtaBanner";
import { academicCompare, academicFlows, academicTiers } from "@/content/academic-support";
import { routes } from "@/content/site";
import { OtherServices } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Academic Support",
  description:
    "Annual academic support at school: a dedicated curator, control of grades, tutors when needed and regular reports to parents. Smart, Royal and the BN Global Academic Route.",
};

export default function AcademicSupportPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: "Home", href: routes.home },
            { label: "Services", href: routes.services },
            { label: "Academic Support" },
          ]}
          title={
            <>
              Academic <em>Support</em>
            </>
          }
          description="Year-round guidance while your child is at school: a dedicated curator, control of grades, tutors when they’re needed and a clear report for you every month."
          image={heroImage}
        />
        <TiersSection
          eyebrow="Annual packages"
          title="Three Levels of Support"
          description="From a curator on weekdays to a year-long route that shapes your child’s direction — choose how closely we stay involved."
          tiers={academicTiers}
        />
        <HowItWorksSection
          tiers={academicTiers}
          flows={academicFlows}
          description="The rhythm of each package through the academic year — what happens every week, every month and by the end of the year."
        />
        <CompareSection tiers={academicTiers} rows={academicCompare} />
        <GlobalRoute />
        <OtherServices current={routes.academicSupport} className="bg-sand-50" />
        <FirstMeetingCta />
      </main>
      <Footer />
    </>
  );
}
