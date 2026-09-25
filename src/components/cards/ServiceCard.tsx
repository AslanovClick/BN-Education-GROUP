import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import type { Service } from "@/content/home";
import { cn } from "@/lib/cn";
import { Card, CardImage } from "./Card";

type Props = {
  service: Service;
  /**
   * `compact` — carousel card: clamped copy + "Learn more".
   * `static`  — carousel card without the link (used on the Services page itself).
   * `row`     — Services timeline: small, image beside the text from lg up.
   */
  variant?: "compact" | "static" | "row";
};

export function ServiceCard({ service, variant = "compact" }: Props) {
  if (variant === "row") {
    return (
      <Card className="lg:flex-row">
        <CardImage
          src={service.image}
          className="aspect-[16/9] lg:aspect-auto lg:w-[38%] lg:shrink-0"
          sizes="(min-width: 1024px) 200px, 45vw"
        />
        <div className="flex flex-1 flex-col p-5 lg:p-6">
          <div className="flex items-center gap-2.5">
            <Icon icon={service.icon} size={24} className="shrink-0 text-gold-500" />
            <h3 className="text-lg font-bold leading-snug text-ink-800">{service.title}</h3>
          </div>
          <p className="mt-3 text-body-sm text-muted">{service.text}</p>
        </div>
      </Card>
    );
  }

  const withLink = variant === "compact";
  return (
    <Card>
      <CardImage src={service.image} className={withLink ? "aspect-[3/2]" : "aspect-[16/9]"} />
      <div className={cn("flex flex-1 flex-col", withLink ? "p-6" : "p-5")}>
        <div className="flex items-center gap-3">
          <Icon icon={service.icon} size={28} className="shrink-0 text-gold-500" />
          <h3 className="text-h3 text-ink-800">{service.title}</h3>
        </div>
        <p className={cn("text-muted", withLink ? "mt-4 line-clamp-5 text-body" : "mt-3 text-body-sm")}>{service.text}</p>
        {withLink && (
          <TextLink href={service.href} className="mt-auto self-start pt-5">
            Learn more
          </TextLink>
        )}
      </div>
    </Card>
  );
}
