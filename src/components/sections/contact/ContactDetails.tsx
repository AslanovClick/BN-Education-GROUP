import { Clock, EnvelopeSimple, Phone } from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { contact } from "@/content/site";

type Item = { icon: PhosphorIcon; title: string; value: string; href?: string };

const items: Item[] = [
  { icon: Phone, title: "Phone", value: contact.phone, href: contact.phoneHref },
  { icon: EnvelopeSimple, title: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Clock, title: "Office hours", value: contact.hours },
];

export function ContactDetails() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="text-h2 text-ink-800">Get in Touch</h2>
      <p className="mt-4 max-w-[440px] text-body text-muted">
        Call or write to us — a member of the BN team will get back to you personally.
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

      <div>
        <p className="text-caption font-semibold uppercase tracking-[0.1em] text-subtle">Follow us</p>
        <SocialLinks tone="light" className="mt-3" />
      </div>
    </div>
  );
}
