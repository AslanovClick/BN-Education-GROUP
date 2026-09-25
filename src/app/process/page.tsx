import type { Metadata } from "next";
import heroImage from "@/assets/images/process/hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Approach } from "@/components/sections/Approach";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { Process } from "@/components/sections/Process";
import { Resources } from "@/components/sections/process/Resources";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Process",
  description: "A clear five-step process — from the first conversation to ongoing support throughout your child’s educational journey.",
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Process" }]}
          title={
            <>
              A clear <em>five-step process</em>
            </>
          }
          description="From the first conversation to ongoing support throughout your child’s educational journey."
          image={heroImage}
        />
        <PartnersStrip />
        <Process title="Our Process" />
        <Approach />
        <Resources />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
