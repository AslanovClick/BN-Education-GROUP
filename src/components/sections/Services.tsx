import { ServiceMiniTile, ServiceTile } from "@/components/cards/ServiceTile";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { Eyebrow } from "@/components/ui/Typography";
import { services } from "@/content/home";
import { routes } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  className?: string;
  /** Tiles pointing at this href (the current page) render without a link. */
  hideLinkTo?: string;
};

/** Our Services: six compact tiles in two rows (homepage and the Services hub). */
export function Services({ id = "services", className, hideLinkTo }: Props) {
  return (
    <section id={id} className={cn("section-y bg-sand-50", className)}>
      <div className="container-page">
        {/* Same three columns and gap as the tiles: the lead starts over the second tile */}
        <Reveal className="grid gap-4 lg:grid-cols-3 lg:items-end lg:gap-5">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 text-h2 text-balance text-fg">Our Services</h2>
          </div>
          <p className="max-w-[640px] text-lead text-pretty text-fg-muted lg:col-span-2 lg:pb-1">
            Comprehensive education consulting services designed to help your child succeed at every stage of their
            academic journey.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceTile service={service} linked={service.href !== hideLinkTo} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Quick links to the other service pages, placed before the closing CTA of each service page. */
export function OtherServices({ current, className }: { current: string; className?: string }) {
  // Services with their own page (Family Support lives on the hub)
  const others = services.filter((s) => s.href !== current && s.href !== routes.services);
  return (
    <section className={cn("section-y bg-white", className)}>
      <div className="container-page">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow text-gold-500">More from BN</p>
            <h2 className="mt-3 text-h2 text-ink-800">Explore Other Services</h2>
          </div>
          <TextLink href={routes.services} className="mb-2 hidden shrink-0 sm:inline-flex">
            All services
          </TextLink>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {others.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceMiniTile service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
