import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "About BN Education" };

export default function AboutPage() {
  return <PlaceholderPage title="About BN Education" text="Fifteen years in international education, from Dubai and Monaco to Silicon Valley — this page is being prepared." />;
}
