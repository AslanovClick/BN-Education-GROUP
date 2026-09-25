import type { Metadata } from "next";
import heroImage from "@/assets/images/events/hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { EventsListing } from "@/components/sections/events/EventsListing";
import { HelpBlock } from "@/components/sections/events/HelpBlock";
import { allEvents } from "@/content/events";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description:
    "Join our exclusive events to gain insights into the world of international education and connect with admissions experts.",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Events" }]}
          title={
            <>
              Events <em>&amp; Workshops</em>
            </>
          }
          description="Join our exclusive events to gain insights into the world of international education and connect with admissions experts."
          image={heroImage}
        />
        <PartnersStrip />
        <EventsListing events={allEvents} />
        <HelpBlock />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
