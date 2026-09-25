import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import type { Service } from "@/content/home";
import { Card, CardImage } from "./Card";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card>
      <CardImage src={service.image} className="aspect-[3/2]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <Icon icon={service.icon} size={28} className="shrink-0 text-gold-500" />
          <h3 className="text-h3 text-ink-800">{service.title}</h3>
        </div>
        <p className="mt-4 line-clamp-5 text-body text-muted">{service.text}</p>
        <TextLink href={service.href} className="mt-auto self-start pt-5">
          Learn more
        </TextLink>
      </div>
    </Card>
  );
}
