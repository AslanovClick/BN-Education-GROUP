import { ServiceCard } from "@/components/cards/ServiceCard";
import { CarouselSection } from "@/components/ui/CarouselSection";
import { services } from "@/content/home";

export function Services() {
  return (
    <CarouselSection
      id="services"
      eyebrow="What we do"
      title="Our Services"
      description="Comprehensive education consulting services designed to help your child succeed at every stage of their academic journey."
      label="Services"
      className="bg-sand-50"
    >
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </CarouselSection>
  );
}
