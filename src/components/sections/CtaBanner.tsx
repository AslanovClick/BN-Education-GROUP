import Image from "next/image";
import ctaImage from "@/assets/images/cta.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { routes } from "@/content/site";

export function CtaBanner() {
  return (
    <section data-surface="dark" className="theme-dark section-y relative isolate overflow-hidden bg-ink-900">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={ctaImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover object-bottom" />
        <div className="overlay-ink absolute inset-0" />
      </div>

      <Reveal className="container-page flex flex-col items-center text-center">
        <h2 className="text-h2 text-balance text-white">Let’s Start With Your Child</h2>
        <p className="mt-5 max-w-[520px] text-lead text-pretty text-fg-muted">
          The first conversation helps us understand your child’s potential, your family’s goals and the right next
          step.
        </p>
        <Button href={routes.consultation} arrow className="mt-8">
          Discuss Your Education Strategy
        </Button>
      </Reveal>
    </section>
  );
}
