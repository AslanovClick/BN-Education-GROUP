import type { Metadata } from "next";
import heroImage from "@/assets/images/services/hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { Packages } from "@/components/sections/services/Packages";
import { PartnerInstitutions } from "@/components/sections/services/PartnerInstitutions";
import { Programmes } from "@/components/sections/services/Programmes";
import { ServicesTimeline } from "@/components/sections/services/ServicesTimeline";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "School and university selection, admissions, academic and summer programmes, and support long after enrolment — one dedicated team for your family.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Services" }]}
          title={
            <>
              Comprehensive <em>education services</em>
            </>
          }
          description="We select schools and universities worldwide, arrange academic and summer programmes, and support students long after enrolment. One dedicated team for your family."
          image={heroImage}
        />
        <PartnersStrip />
        <ServicesTimeline />
        <Packages />
        <PartnerInstitutions />
        <Programmes />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
