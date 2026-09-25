import { ProgrammeCard } from "@/components/cards/ProgrammeCard";
import { CarouselSection } from "@/components/ui/CarouselSection";
import { programmes } from "@/content/services";

const ITEM = "w-[72vw] max-w-[300px] sm:w-[280px] xl:w-[264px]";

export function Programmes() {
  return (
    <CarouselSection
      id="programmes"
      eyebrow="Summer opportunities"
      title="Short & Summer Programmes"
      description={
        <>
          <p>
            We do not choose programmes simply to fill the holidays. Every experience is selected as part of your
            child’s long-term education strategy.
          </p>
          <p className="mt-2">
            Options include programmes at leading universities, boarding school preparation, academic holiday
            programmes, language immersion and career exploration in medicine, engineering, business and the arts.
          </p>
        </>
      }
      label="Short and summer programmes"
      className="bg-sand-50"
      itemClassName={ITEM}
    >
      {programmes.map((item) => (
        <ProgrammeCard key={item.title} programme={item} />
      ))}
    </CarouselSection>
  );
}
