import type { Metadata } from "next";
import heroImage from "@/assets/images/service-university.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { CompareSection, HowItWorksSection } from "@/components/packages/TierSections";
import { AdmissionPackages } from "@/components/sections/admissions/AdmissionPackages";
import { Conditions } from "@/components/sections/admissions/Conditions";
import { Extras } from "@/components/sections/admissions/Extras";
import { HowWeWork } from "@/components/sections/admissions/HowWeWork";
import { Manifesto } from "@/components/sections/admissions/Manifesto";
import { FirstMeetingCta } from "@/components/sections/CtaBanner";
import {
  admissionCompare,
  admissionFlows,
  admissionStats,
  admissionTiers,
  compareNotes,
  manifesto,
} from "@/content/admissions";
import { routes } from "@/content/site";
import { OtherServices } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "University Admissions",
  description:
    "University admission packages for Bachelor’s and Master’s: an admissions officer audit, strategy, essays, documents, interviews and visa — with a team of three curators.",
};

export default function UniversityAdmissionsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: "Home", href: routes.home },
            { label: "Services", href: routes.services },
            { label: "University Admissions" },
          ]}
          title={
            <>
              University <em>Admissions</em>
            </>
          }
          description="Bachelor’s and Master’s programmes in the UK, the US and Europe. A strategy built on your child’s strengths, an audit by a current admissions officer and a team of three curators until enrolment."
          image={heroImage}
        />
        <Manifesto eyebrow="Bachelor’s · Master’s" title={manifesto.title} text={manifesto.text} stats={admissionStats} />
        <HowWeWork />
        <AdmissionPackages />
        <HowItWorksSection
          tiers={admissionTiers}
          flows={admissionFlows}
          description="What happens, and when, from the first meeting to the day your child moves."
        />
        <CompareSection tiers={admissionTiers} rows={admissionCompare} notes={compareNotes} />
        <Extras />
        <Conditions />
        <OtherServices current={routes.universityAdmissions} />
        <FirstMeetingCta />
      </main>
      <Footer />
    </>
  );
}
