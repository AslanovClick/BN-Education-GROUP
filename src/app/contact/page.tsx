import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return <PlaceholderPage title="Contact Us" text="Reach our Zürich office at info@bneducation.ch or +41 12 345 67 89 — this page is being prepared." />;
}
