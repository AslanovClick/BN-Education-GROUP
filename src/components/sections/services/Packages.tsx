import Image from "next/image";
import packagesImage from "@/assets/images/services/packages.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/Typography";
import { routes } from "@/content/site";
import { packages } from "@/content/services";

export function Packages() {
  return (
    <section id="packages" data-surface="dark" className="theme-dark section-y relative isolate overflow-hidden bg-ink-800">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={packagesImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover" />
        <div className="overlay-ink absolute inset-0" />
      </div>

      <div className="container-page flex flex-col items-center">
        <Reveal>
          <SectionHeading align="center" eyebrow="Our packages" title="Choose the Right Level of Support" />
        </Reveal>

        <Stagger className="mt-10 grid w-full max-w-[928px] gap-4 md:mt-12 md:grid-cols-2 md:gap-8">
          {packages.map((pkg) => (
            <StaggerItem
              key={pkg.name}
              className="group flex items-center gap-6 rounded-md border border-transparent bg-sand-50/20 p-6 transition-colors duration-500 hover:border-gold-500/60 hover:bg-sand-50/25 md:gap-8 md:p-8"
            >
              <Icon
                icon={pkg.icon}
                size={64}
                className="shrink-0 text-gold-500 transition-transform duration-500 ease-out-soft group-hover:scale-110"
              />
              <div>
                <h3 className="text-[28px] font-bold leading-tight text-white">{pkg.name}</h3>
                <p className="mt-1.5 text-body text-white/85">{pkg.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10 md:mt-12">
          <Button href={routes.consultation} arrow>
            Learn more
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
