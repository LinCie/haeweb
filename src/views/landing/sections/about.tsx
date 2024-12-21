import {
  CardSection,
  CardSectionContainer,
  CardSectionSubtitle,
  CardSectionTitle,
} from "@/components/ui/card-section";
import Image from "next/image";
import machineImage from "@/assets/images/machine.jpg";
import BlurFade from "@/components/ui/blur-fade";

export default function AboutSection() {
  return (
    <CardSection id="about-section" aria-labelledby="about-section-title">
      <CardSectionContainer className="flex flex-col overflow-hidden px-0 pl-0 md:px-0 md:pl-0 lg:flex-row lg:px-0 lg:pl-0">
        <Image
          src={machineImage}
          alt="haebot store"
          className="h-[300px] w-full object-cover lg:h-[500px] lg:max-w-lg"
          decoding="async"
          loading="lazy"
        />
        <div className="flex flex-1 flex-col justify-center px-6 py-6 md:px-6 md:py-10 lg:px-8 lg:py-10 xl:px-10 xl:py-12">
          <BlurFade inView inViewMargin="-100px">
            <div className="mb-1 font-bold md:mb-2">About Us</div>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionTitle id="about-section-title" className="mb-2 md:mb-4">
              Sejarah
            </CardSectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <div>
              <CardSectionSubtitle className="pb-1 text-left md:pb-2 lg:pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus facilisis euismod tellus, dictum consequat elit
                laoreet pretium. Aenean dictum augue laoreet, varius ex ac,
                lobortis turpis. Nunc nec convallis sapien.
              </CardSectionSubtitle>
              <CardSectionSubtitle className="pb-0 text-left">
                Nullam eu massa luctus, mollis nisl sagittis, tincidunt nulla.
                Ut felis est, porta quis sollicitudin at, hendrerit ut ante.
                Quisque semper enim at turpis mollis, ut suscipit est elementum.
                Aenean fermentum nibh eros, ac ultricies augue dignissim vel.
              </CardSectionSubtitle>
            </div>
          </BlurFade>
        </div>
      </CardSectionContainer>
    </CardSection>
  );
}
