import { CalendarBlank, Clock, MapPin } from "@phosphor-icons/react/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { registrationHref, type EventItem } from "@/content/events";
import { cn } from "@/lib/cn";
import { Card, CardImage } from "./Card";

/** Event card. `action={false}` hides the CTA (e.g. as the summary on the registration page). */
export function EventCard({ event, action = true }: { event: EventItem; action?: boolean }) {
  return (
    <Card>
      <CardImage src={event.image} className="aspect-[2/1]">
        <Badge tone="gold" className="absolute left-4 top-4">
          {event.format}
        </Badge>
      </CardImage>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 min-h-[2lh] text-h3 text-ink-800">{event.title}</h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
          <Meta icon={CalendarBlank}>{event.date}</Meta>
          <Meta icon={Clock}>{event.time}</Meta>
          <Meta icon={MapPin} className="basis-full">
            {event.location}
          </Meta>
        </ul>
        {action && (
          <div className="mt-auto pt-6">
            <Button href={registrationHref(event)} variant="outline-gold" size="md" arrow>
              Register Now
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

function Meta({ icon, className, children }: { icon: PhosphorIcon; className?: string; children: React.ReactNode }) {
  return (
    <li className={cn("flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-subtle", className)}>
      <Icon icon={icon} size={16} className="shrink-0 text-gold-600" />
      <span>{children}</span>
    </li>
  );
}
