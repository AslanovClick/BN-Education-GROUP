import { ServiceCard } from "@/components/cards/ServiceCard";
import { CarouselSection } from "@/components/ui/CarouselSection";
import { services } from "@/content/home";

type Props = {
  id?: string;
  className?: string;
  /** Hide the "Learn more" links (when already on the Services page). */
  links?: boolean;
};

export function Services({ id = "services", className, links = true }: Props) {
  return (
    <CarouselSection
      id={id}
      eyebrow="What we do"
      title="Our Services"
      description="Comprehensive education consulting services designed to help your child succeed at every stage of their academic journey."
      label="Services"
      className={className ?? "bg-sand-50"}
    >
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} variant={links ? "compact" : "static"} />
      ))}
    </CarouselSection>
  );
}
