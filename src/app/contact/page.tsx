import type { Metadata } from "next";
import heroImage from "@/assets/images/contact/hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { ContactDetails } from "@/components/sections/contact/ContactDetails";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your educational goals. Our Zürich team is here to help you navigate the path to academic excellence.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Contact" }]}
          title={
            <>
              Contact <em>Us</em>
            </>
          }
          description="Get in touch to discuss your educational goals. We’re here to help you navigate the path to academic excellence."
          image={heroImage}
        />
        <PartnersStrip />

        <section className="section-y bg-sand-50">
          <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-stretch lg:gap-16">
            <Reveal>
              <ContactDetails />
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
