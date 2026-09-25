import { TextLink } from "@/components/ui/TextLink";
import type { Programme } from "@/content/services";
import { Card, CardImage } from "./Card";

/** Compact card for short & summer programmes. */
export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Card>
      <CardImage src={programme.image} className="aspect-[3/2]" sizes="(min-width: 1280px) 264px, 280px" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug text-ink-800">{programme.title}</h3>
        <p className="mt-2 text-body-sm text-muted">{programme.text}</p>
        <TextLink href={programme.href} className="mt-auto self-start pt-4">
          Learn more
        </TextLink>
      </div>
    </Card>
  );
}
