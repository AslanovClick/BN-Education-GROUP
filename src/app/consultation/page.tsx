import type { Metadata } from "next";
import heroImage from "@/assets/images/services/packages.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { BookingFlow } from "@/components/sections/consultation/BookingFlow";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Choose a convenient time for a confidential conversation with our senior education advisor.",
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Book a Consultation" }]}
          title={
            <>
              Book a <em>Consultation</em>
            </>
          }
          description="Choose a convenient time for a confidential conversation with our senior education advisor."
          image={heroImage}
        />
        <PartnersStrip />

        <section className="section-y bg-sand-50">
          <Reveal className="container-page">
            <BookingFlow />
          </Reveal>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
