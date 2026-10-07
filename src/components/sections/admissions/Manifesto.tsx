import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Eyebrow } from "@/components/ui/Typography";

type Stat = { value: number; suffix: string; label: string };

/** Opening statement + three key figures set as a quiet row with gold rules — no filled tiles. */
export function Manifesto({
  eyebrow,
  title,
  text,
  stats,
}: {
  eyebrow: string;
  title: string;
  text: string;
  stats: readonly Stat[];
}) {
  return (
    <section className="section-y bg-sand-50">
      <div className="container-page">
        {/* Same three-column grid as the figures below, so the text starts on the third rule */}
        <Reveal className="grid gap-6 lg:grid-cols-3 lg:items-end lg:gap-10">
          <div className="lg:col-span-2">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-3 text-h1 text-balance text-ink-800">{title}</h2>
          </div>
          <p className="max-w-[520px] text-lead text-pretty text-muted lg:pb-1.5">{text}</p>
        </Reveal>

        <Stagger as="dl" className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:gap-10">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="flex flex-col gap-3 border-t border-gold-500 pt-6">
              <dt className="max-w-[260px] text-body-sm font-medium text-muted">{s.label}</dt>
              <dd className="order-first text-[44px] font-bold leading-none tracking-[-0.03em] text-ink-800 md:text-[56px]">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
