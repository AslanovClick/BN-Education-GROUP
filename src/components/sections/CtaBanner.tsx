import Image from "next/image";
import type { ReactNode } from "react";
import ctaImage from "@/assets/images/cta.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { routes } from "@/content/site";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  text?: ReactNode;
  action?: { label: string; href: string };
};

/**
 * Closing call to action. Two ways forward, as in the brief: a conversation with BN or an event.
 * Service pages pass their own "first meeting is free" copy.
 */
export function CtaBanner({
  eyebrow,
  title = "Let’s Start With Your Child",
  text = "The first conversation helps us understand your child’s potential, your family’s goals and the right next step.",
  action = { label: "Discuss Your Education Strategy", href: routes.consultation },
}: Props) {
  return (
    <section data-surface="dark" className="theme-dark section-y relative isolate overflow-hidden bg-ink-900">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={ctaImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover object-bottom" />
        <div className="overlay-ink absolute inset-0" />
      </div>

      <Reveal className="container-page flex flex-col items-center text-center">
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <h2 className="text-h2 text-balance text-white">{title}</h2>
        <p className="mt-5 max-w-[560px] text-lead text-pretty text-fg-muted">{text}</p>
        <div className="mt-8 flex w-full flex-col justify-center gap-3 xs:w-auto xs:flex-row xs:gap-4">
          <Button href={action.href} arrow>
            {action.label}
          </Button>
          <Button href={routes.events} variant="outline-white">
            Upcoming Events
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

/** Shared "first meeting is free" CTA used on service pages (from the admission packages brochure). */
export function FirstMeetingCta() {
  return (
    <CtaBanner
      eyebrow="Next step"
      title="The First Meeting Is Free"
      text={
        <>
          <span className="text-gold-500">A meeting with Oksana Chmykhalo.</span> We get to know your child, discuss your
          family’s goals and recommend the right package.
        </>
      }
      action={{ label: "Book a Free Consultation", href: routes.consultation }}
    />
  );
}
