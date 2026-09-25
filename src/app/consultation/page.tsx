import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Book a Consultation" };

export default function ConsultationPage() {
  return (
    <PlaceholderPage
      title="Book a Consultation"
      text="The first conversation helps us understand your child’s potential, your family’s goals and the right next step. This page is being prepared."
    />
  );
}
