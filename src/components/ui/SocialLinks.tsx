import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/ssr";
import { contact } from "@/content/site";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

const links = [
  { label: "Instagram", href: contact.instagram, icon: InstagramLogo },
  { label: "Facebook", href: contact.facebook, icon: FacebookLogo },
  { label: "YouTube", href: contact.youtube, icon: YoutubeLogo },
];

/** Round social icon links. `dark` sits on ink (footer), `light` on sand/white. */
export function SocialLinks({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <ul className={cn("flex gap-2.5", className)}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            aria-label={l.label}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border transition-colors duration-300",
              tone === "dark"
                ? "border-white/15 text-white/75 hover:border-gold-500 hover:text-gold-500"
                : "border-gold-500/50 text-gold-600 hover:border-gold-500 hover:bg-gold-500 hover:text-ink-800",
            )}
          >
            <Icon icon={l.icon} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
