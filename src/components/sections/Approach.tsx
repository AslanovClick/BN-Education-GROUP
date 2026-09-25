import Image from "next/image";
import approachImage from "@/assets/images/approach.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { founderQuote, principles } from "@/content/home";
import { routes } from "@/content/site";

export function Approach() {
  return (
    <section id="approach" data-surface="dark" className="theme-dark section-y relative isolate overflow-hidden bg-ink-800">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={approachImage} alt="" fill sizes="100vw" placeholder="blur" className="object-cover" />
        <div className="overlay-ink absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-ink-900/30 to-transparent" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <Reveal>
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-3 text-h2 text-white">
            Child First.
            <br />
            School Second.
          </h2>
          <div className="mt-6 max-w-[584px] space-y-5 text-body text-fg-muted">
            <p>
              Sometimes the right choice is a world-famous boarding school. Sometimes it is a smaller institution that
              perfectly matches a particular child.
            </p>
            <p>
              We never build a strategy around a catalogue of partner schools. Our goal is not to find the most famous
              school. Our goal is to find the right school for your child.
            </p>
          </div>
          <Button href={routes.consultation} className="mt-8">
            Book a Consultation
          </Button>

          <figure className="mt-10 max-w-[584px] border-t border-line pt-8">
            <blockquote className="text-quote text-white">“{founderQuote}”</blockquote>
            <figcaption className="mt-3 text-sm font-medium text-gold-500">— Oksana, Founder of BN Education</figcaption>
          </figure>
        </Reveal>

        <Stagger as="ol" gap={0.09} className="flex flex-col gap-3">
          {principles.map((item, i) => (
            <StaggerItem
              as="li"
              key={item.title}
              className="group relative flex gap-5 overflow-hidden rounded-md bg-white/[0.08] px-6 py-5 transition-colors duration-500 hover:bg-white/[0.13]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-gold-500 transition-transform duration-500 ease-out-soft group-hover:scale-y-100"
              />
              <span className="pt-0.5 text-sm font-bold tabular-nums text-white/55 transition-colors duration-500 group-hover:text-gold-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-bold text-gold-500">{item.title}</h3>
                <p className="mt-1 text-body-sm text-white/70">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
