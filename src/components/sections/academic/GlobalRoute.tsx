import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Typography";
import { globalRoute } from "@/content/academic-support";
import { routes } from "@/content/site";
import { RouteAccordion } from "./RouteAccordion";

/** BN Global Academic Route in detail: intro on the left, the eight parts as an accordion, then the result. */
export function GlobalRoute() {
  return (
    <section id="global-academic-route" className="section-y bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>BN Global Academic Route</Eyebrow>
            <h2 className="mt-3 text-h2 text-balance text-ink-800">What the Route Includes</h2>
            <p className="mt-4 max-w-[460px] text-lead text-pretty text-muted">{globalRoute.goal}</p>
            <p className="mt-6 flex items-baseline gap-2 text-ink-800">
              <span className="text-[32px] font-bold tracking-[-0.02em]">€15,000</span>
              <span className="text-body-sm text-muted">/ academic year</span>
            </p>
            <Button href={routes.consultation} variant="outline-gold" size="md" className="mt-6">
              Discuss the Route
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <RouteAccordion />
          </Reveal>
        </div>

        {/* The result: six steps on a thin gold rail */}
        <div className="mt-16 lg:mt-20">
          <Reveal className="max-w-[640px]">
            <Eyebrow>The result</Eyebrow>
            <p className="mt-3 text-lead text-pretty text-ink-800">{globalRoute.result.text}</p>
          </Reveal>
          <Stagger as="ol" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {globalRoute.result.chain.map((step, i) => (
              <StaggerItem as="li" key={step} className="relative border-t border-gold-500 pt-4">
                <span className="flex items-center justify-between text-sm font-bold tabular-nums text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                  {i < globalRoute.result.chain.length - 1 && (
                    <Icon icon={ArrowRight} size={16} className="hidden text-gold-500 lg:block" />
                  )}
                </span>
                <p className="mt-2 text-body-sm font-semibold text-ink-800">{step}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
