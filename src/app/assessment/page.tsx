import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Take an Assessment" };

export default function AssessmentPage() {
  return (
    <PlaceholderPage
      title="Take an Assessment"
      text="Our BN assessment will help identify your child’s interests, strengths and individual potential. This page is being prepared."
    />
  );
}
