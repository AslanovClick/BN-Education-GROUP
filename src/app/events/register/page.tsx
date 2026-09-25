import type { Metadata } from "next";
import heroImage from "@/assets/images/registration/hero.jpg";
import { EventCard } from "@/components/cards/EventCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { RegistrationForm } from "@/components/sections/events/RegistrationForm";
import { allEvents, findEvent } from "@/content/events";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Event Registration",
  description: "Provide your details to secure your spot at a BN Education event.",
};

export default async function RegisterPage({ searchParams }: PageProps<"/events/register">) {
  const { event: id } = await searchParams;
  // Unknown / missing id falls back to the event shown in the design.
  const event = findEvent(Array.isArray(id) ? id[0] : id) ?? allEvents[2];

  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: "Home", href: routes.home },
            { label: "Events", href: routes.events },
            { label: "Registration" },
          ]}
          title={
            <>
              Attendee <em>Information</em>
            </>
          }
          description="Please provide your details to secure your spot for the event."
          image={heroImage}
        />
        <PartnersStrip />

        <section className="section-y bg-sand-50">
          <div className="container-page grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,452px)]">
            {/* Event summary first on mobile, sticky sidebar on desktop */}
            <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28 lg:order-2">
              <EventCard event={event} action={false} />
              <div className="rounded-md bg-white p-6">
                <h2 className="text-base font-bold text-ink-800">About this event</h2>
                <p className="mt-2 text-body-sm text-muted">{event.description}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:order-1">
              <RegistrationForm event={event} />
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
