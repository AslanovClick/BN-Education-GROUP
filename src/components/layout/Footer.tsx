import Image from "next/image";
import { EnvelopeSimple, InstagramLogo, LinkedinLogo, MapPin, Phone } from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Icon } from "@/components/ui/Icon";
import { contact, footerNav, routes } from "@/content/site";
import { SiteLink } from "./SiteLink";

const linkClass = "text-sm text-white/65 transition-colors duration-300 hover:text-gold-500";

export function Footer() {
  return (
    <footer data-surface="dark" className="theme-dark bg-ink-950 pt-16 lg:pt-18">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-line pb-12 md:grid-cols-3 lg:grid-cols-[minmax(0,292px)_1fr_1fr_1fr] lg:gap-x-12 lg:pb-14">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <SiteLink href={routes.home} aria-label="BN Education Group — home" className="inline-block">
              <Image src="/brand/logo-horizontal.svg" alt="BN Education Group" width={130} height={54} />
            </SiteLink>
            <p className="mt-5 max-w-[292px] text-sm leading-relaxed text-white/65">
              Premium education consulting for families seeking excellence in international education. Based in
              Switzerland.
            </p>
          </div>

          <FooterColumn title="Quick Links">
            {footerNav.quickLinks.map((l) => (
              <li key={l.label}>
                <SiteLink href={l.href} className={linkClass}>
                  {l.label}
                </SiteLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {footerNav.resources.map((l) => (
              <li key={l.label}>
                <SiteLink href={l.href} className={linkClass}>
                  {l.label}
                </SiteLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="col-span-2 md:col-span-1">
            <ContactItem icon={EnvelopeSimple} href={`mailto:${contact.email}`}>
              {contact.email}
            </ContactItem>
            <ContactItem icon={Phone} href={contact.phoneHref}>
              {contact.phone}
            </ContactItem>
            <ContactItem icon={MapPin}>{contact.city}</ContactItem>
            <li className="flex gap-2.5 pt-2">
              <SocialLink href={contact.linkedin} label="LinkedIn" icon={LinkedinLogo} />
              <SocialLink href={contact.instagram} label="Instagram" icon={InstagramLogo} />
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 py-6 text-caption text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BN Education GmbH. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <SiteLink href={routes.privacy} className="transition-colors hover:text-gold-500">
                Privacy Policy
              </SiteLink>
            </li>
            <li>
              <SiteLink href={routes.terms} className="transition-colors hover:text-gold-500">
                Terms of Service
              </SiteLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="text-caption font-semibold uppercase tracking-[0.12em] text-white">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function ContactItem({ icon, href, children }: { icon: PhosphorIcon; href?: string; children: React.ReactNode }) {
  const content = (
    <>
      <Icon icon={icon} size={16} className="shrink-0 text-gold-500" />
      <span>{children}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className={`inline-flex items-center gap-3 ${linkClass}`}>
          {content}
        </a>
      ) : (
        <span className="inline-flex items-center gap-3 text-sm text-white/65">{content}</span>
      )}
    </li>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: PhosphorIcon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors duration-300 hover:border-gold-500 hover:text-gold-500"
    >
      <Icon icon={icon} size={18} />
    </a>
  );
}
