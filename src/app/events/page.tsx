import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Upcoming Events" };

export default function EventsPage() {
  return <PlaceholderPage title="Upcoming Events" text="Workshops, fairs and masterclasses with admissions experts and school representatives — this page is being prepared." />;
}
