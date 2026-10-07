import type { Metadata } from "next";
import heroImage from "@/assets/images/registration/hero.jpg";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StoriesListing } from "@/components/sections/stories/StoriesListing";
import { routes } from "@/content/site";
import { LockSimple } from "@phosphor-icons/react/ssr";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Our Stories",
  description:
    "Stories of the students we have guided. They show better than words how we work — and why we are so proud of our students.",
};

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Home", href: routes.home }, { label: "Stories" }]}
          title={
            <>
              Our Students’ <em>Stories</em>
            </>
          }
          description="Some stories we want to share. They show better than words how we work — and why we are so proud of our students."
          image={heroImage}
          aside={
            <div className="flex max-w-[420px] items-start gap-3.5 rounded-md border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <Icon icon={LockSimple} size={20} className="mt-0.5 shrink-0 text-gold-500" />
              <p className="text-body-sm text-white/85">
                We never publish children’s names or photos. Details in the stories are changed; the essence stays the
                same.
              </p>
            </div>
          }
        />
        <StoriesListing />
        <CtaBanner
          title="Recognise Your Child?"
          text="Every story here began with a diagnostic. Tell us about your child, and we’ll start the same way."
          action={{ label: "Book a Diagnostic", href: routes.consultation }}
        />
      </main>
      <Footer />
    </>
  );
}
