import { Button } from "@/components/ui/button";
import { FaPhone } from "react-icons/fa6";
import {
  CardSection,
  CardSectionContainer,
  CardSectionContent,
  CardSectionHeader,
  CardSectionSubtitle,
  CardSectionTitle,
} from "@/components/ui/card-section";
import BlurFade from "@/components/ui/blur-fade";

export default function CTASection() {
  return (
    <CardSection>
      <CardSectionContainer>
        <CardSectionHeader className="items-center">
          <BlurFade inView inViewMargin="-100px">
            <CardSectionTitle className="text-center">
              Hubungi kami sekarang!
            </CardSectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionSubtitle className="text-center">
              Dapatkan kejutan menarik bila anda menghubungi dari web HaeBot!
            </CardSectionSubtitle>
          </BlurFade>
        </CardSectionHeader>
        <CardSectionContent className="flex justify-center">
          <BlurFade inView inViewMargin="-100px">
            <Button>
              Hubungi Kami <FaPhone aria-hidden className="ml-2 size-4" />
            </Button>
          </BlurFade>
        </CardSectionContent>
      </CardSectionContainer>
    </CardSection>
  );
}
