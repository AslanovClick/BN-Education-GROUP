import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Events } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnersStrip />
        <Services />
        <Approach />
        <Process />
        <About />
        <Events />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
