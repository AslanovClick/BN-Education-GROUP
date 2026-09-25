import type { Metadata } from "next";
import heroImage from "@/assets/images/process/hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { Founder } from "@/components/sections/about/Founder";
import { StatsBand } from "@/components/sections/about/StatsBand";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A premium education consulting firm based in Switzerland, helping families navigate the path to world-class education for more than 15 years.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "About" }]}
          title={
            <>
              About <em>BN Education</em>
            </>
          }
          description="We are a premium education consulting firm based in Switzerland, dedicated to helping families navigate the path to world-class education."
          image={heroImage}
        />
        <PartnersStrip />
        <AboutIntro />
        <StatsBand />
        <Founder />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
