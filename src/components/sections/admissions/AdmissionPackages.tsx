import { Reveal } from "@/components/motion/Reveal";
import { TierGrid } from "@/components/packages/TierGrid";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Typography";
import { admissionTiers, selectUni } from "@/content/admissions";
import { routes } from "@/content/site";
import { cn } from "@/lib/cn";

/** The three admission packages, then Select Uni for families who need one or two universities. */
export function AdmissionPackages() {
  return (
    <section id="packages" className="section-y bg-sand-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Packages"
            title="Choose the Right Package"
            description="Each package includes a team of three curators and a report to parents every month. The difference is the scope: how many universities, which countries and how early we start."
            className="mx-auto"
          />
        </Reveal>

        <TierGrid tiers={admissionTiers} className="mt-10 lg:mt-14" />

        <Reveal className="mt-5 grid gap-8 rounded-md border border-gold-300/70 bg-white p-6 md:p-8 lg:mt-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14 lg:p-10">
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gold-700">
              {selectUni.name} · {selectUni.price}
            </p>
            <h3 className="mt-3 text-h2 text-balance text-ink-800">{selectUni.title}</h3>
            <p className="mt-4 max-w-[460px] text-body text-muted">{selectUni.text}</p>
            <div className="mt-6 lg:mt-auto lg:pt-8">
              <Button href={routes.consultation} variant="outline-gold" size="md">
                Discuss Select Uni
              </Button>
            </div>
          </div>
          <div>
            <dl className="divide-y divide-ink-800/8">
              {selectUni.prices.map((p) => (
                <div key={p.label} className="flex items-baseline justify-between gap-6 py-4 first:pt-0 last:pb-0">
                  <dt className="text-body text-ink-800">
                    {p.label}
                    {p.highlight && <span className="mt-0.5 block text-body-sm text-muted">{selectUni.note}</span>}
                  </dt>
                  <dd className={cn("shrink-0 text-xl font-bold tabular-nums", p.highlight ? "text-gold-700" : "text-ink-800")}>{p.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
