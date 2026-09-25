import Image from "next/image";
import { ArrowUpRight, Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import mapImage from "@/assets/images/contact/map.jpg";
import { Icon } from "@/components/ui/Icon";
import { contact } from "@/content/site";

type Item = { icon: PhosphorIcon; title: string; value: string; href?: string };

const items: Item[] = [
  { icon: MapPin, title: "Office", value: contact.address, href: contact.mapHref },
  { icon: Phone, title: "Phone", value: contact.phone, href: contact.phoneHref },
  { icon: EnvelopeSimple, title: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Clock, title: "Office hours", value: contact.hours },
];

export function ContactDetails() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="text-h2 text-ink-800">Get in Touch</h2>
      <p className="mt-4 max-w-[440px] text-body text-muted">
        Call, write or visit our Zürich office — a member of the BN team will get back to you personally.
      </p>

      <ul className="mb-8 mt-8 divide-y divide-line border-y border-line">
        {items.map((item) => {
          const external = item.href?.startsWith("http");
          const value = item.href ? (
            <a
              href={item.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="transition-colors duration-300 hover:text-accent-text"
            >
              {item.value}
            </a>
          ) : (
            item.value
          );
          return (
            <li key={item.title} className="flex items-center gap-4 py-5">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-600">
                <Icon icon={item.icon} size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">{item.title}</p>
                <p className="mt-0.5 text-base font-medium text-ink-800">{value}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <a
        href={contact.mapHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open our office location in Google Maps"
        className="group relative block aspect-[16/9] overflow-hidden rounded-md bg-sand-100 lg:mt-auto"
      >
        <Image
          src={mapImage}
          alt="Map of central Zürich showing the BN Education office on Bahnhofstrasse"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-sm bg-white/95 px-3 py-2 text-sm font-semibold text-ink-800 shadow-sm transition-colors group-hover:bg-gold-500">
          Open in Maps
          <Icon icon={ArrowUpRight} size={16} />
        </span>
      </a>
    </div>
  );
}
