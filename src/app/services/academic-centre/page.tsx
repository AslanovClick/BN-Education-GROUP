import type { Metadata } from "next";
import heroImage from "@/assets/images/service-online.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Manifesto } from "@/components/sections/admissions/Manifesto";
import { Subjects, TutorProfiles, TutoringSteps } from "@/components/sections/centre/Tutors";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { routes } from "@/content/site";
import { OtherServices } from "@/components/sections/Services";
import { centreLead, centreStats } from "@/content/tutors";

export const metadata: Metadata = {
  title: "Academic Centre & Tutors",
  description:
    "BN Academic Centre: 500+ tutors from the US and UK. IB, A-Levels, IGCSE, AP, SAT, ACT, IELTS, TOEFL and entrance exams — one-to-one and online.",
};

export default function AcademicCentrePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: "Home", href: routes.home },
            { label: "Services", href: routes.services },
            { label: "Academic Centre & Tutors" },
          ]}
          title={
            <>
              BN Academic <em>Centre</em>
            </>
          }
          description="Over 500 professional tutors from the US and UK. School curricula, entrance exams and research projects — one-to-one, online, around each student’s goals."
          image={heroImage}
        />
        <Manifesto
          eyebrow="Tutors from the US and UK"
          title="Our Own Tutors, Matched to Your Child"
          text={centreLead}
          stats={centreStats}
        />
        <Subjects />
        <TutoringSteps />
        <TutorProfiles />
        <OtherServices current={routes.academicCentre} className="bg-sand-50" />
        <CtaBanner
          title="Find the Right Tutor"
          text="Tell us about your child’s goals — we’ll match a tutor and agree clear targets for every learning block."
          action={{ label: "Book a Consultation", href: routes.consultation }}
        />
      </main>
      <Footer />
    </>
  );
}
