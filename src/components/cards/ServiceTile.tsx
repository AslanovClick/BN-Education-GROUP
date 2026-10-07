import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/content/home";
import { cn } from "@/lib/cn";

const shell =
  "group/tile relative flex h-full overflow-hidden rounded-md border border-gold-300/70 bg-white transition-[border-color,box-shadow,transform] duration-500 ease-out-soft";
const interactive = "hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-[0_18px_40px_-24px_rgb(29_15_51/0.3)]";

/**
 * Compact service tile: photo on the left, icon + title + a two-line summary on the right.
 * The whole tile is the link. `linked={false}` renders it static (e.g. a service without its own page).
 */
export function ServiceTile({ service, linked = true }: { service: Service; linked?: boolean }) {
  return (
    <article className={cn(shell, linked && interactive)}>
      <div className="relative w-28 shrink-0 overflow-hidden bg-sand-100 sm:w-36 lg:w-[32%] lg:max-w-[150px]">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 150px, 144px"
          placeholder="blur"
          className="object-cover transition-transform duration-[1200ms] ease-out-soft group-hover/tile:scale-[1.06]"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2.5">
          <Icon icon={service.icon} size={20} className="shrink-0 text-gold-600" />
          <h3 className="text-base font-bold leading-snug text-ink-800 sm:text-lg">
            {linked ? (
              <Link href={service.href} className="after:absolute after:inset-0">
                {service.title}
              </Link>
            ) : (
              service.title
            )}
          </h3>
        </div>
        <p className="mt-2 line-clamp-2 text-body-sm text-muted">{service.short}</p>
        {linked && (
          <span aria-hidden className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-gold-700">
            Learn more
            <Icon icon={ArrowRight} size={16} className="transition-transform duration-300 ease-out-soft group-hover/tile:translate-x-1" />
          </span>
        )}
      </div>
    </article>
  );
}

/** Text-only tile for "Explore other services": icon, title, summary, arrow. */
export function ServiceMiniTile({ service }: { service: Service }) {
  return (
    <article className={cn(shell, interactive, "flex-col p-6")}>
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-11 items-center justify-center rounded-full border border-gold-500/50 text-gold-600 transition-colors duration-500 group-hover/tile:border-gold-500 group-hover/tile:bg-gold-500 group-hover/tile:text-ink-800">
          <Icon icon={service.icon} size={20} />
        </span>
        <Icon
          icon={ArrowRight}
          size={18}
          className="mt-3 text-gold-600 transition-transform duration-300 ease-out-soft group-hover/tile:translate-x-1"
        />
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-ink-800">
        <Link href={service.href} className="after:absolute after:inset-0">
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-body-sm text-muted">{service.short}</p>
    </article>
  );
}
