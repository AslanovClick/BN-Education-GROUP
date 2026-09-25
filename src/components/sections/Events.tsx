import { EventCard } from "@/components/cards/EventCard";
import { CarouselSection } from "@/components/ui/CarouselSection";
import { featuredEvents } from "@/content/events";

export function Events() {
  return (
    <CarouselSection
      id="events"
      eyebrow="Upcoming events"
      title="Join our exclusive workshops"
      description="Meet admissions experts, school representatives and successful families at our carefully curated events."
      label="Upcoming events"
      className="bg-sand-50"
    >
      {featuredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </CarouselSection>
  );
}
