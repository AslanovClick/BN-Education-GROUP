import { EventCard } from "@/components/cards/EventCard";
import { CarouselSection } from "@/components/ui/CarouselSection";
import { events } from "@/content/home";

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
      {events.map((event, i) => (
        <EventCard key={`${event.title}-${i}`} event={event} />
      ))}
    </CarouselSection>
  );
}
