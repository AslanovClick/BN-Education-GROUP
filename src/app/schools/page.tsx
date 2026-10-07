import type { Metadata } from "next";
import heroImage from "@/assets/images/about/campus.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { SchoolsListing } from "@/components/sections/schools/SchoolsListing";
import { PartnerInstitutions } from "@/components/sections/services/PartnerInstitutions";
import { Programmes } from "@/components/sections/services/Programmes";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Schools & Programmes",
  description:
    "Boarding schools, summer programmes and partner universities in the UK, Switzerland, the US and beyond — chosen around your child.",
};

export default function SchoolsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Schools" }]}
          title={
            <>
              Schools & <em>Programmes</em>
            </>
          }
          description="Boarding schools, summer programmes and leading universities in the UK, Switzerland, the US and beyond — always chosen around your child, never from a list."
          image={heroImage}
        />
        <PartnersStrip />
        <SchoolsListing />
        <Programmes className="bg-white" />
        <PartnerInstitutions />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
