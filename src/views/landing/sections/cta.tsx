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
import Link from "next/link";

export default function CTASection() {
  return (
    <CardSection id="cta-section" aria-labelledby="cta-section-title">
      <CardSectionContainer>
        <CardSectionHeader className="items-center">
          <BlurFade inView inViewMargin="-100px">
            <CardSectionTitle
              id="cta-section-title"
              className="max-w-(--breakpoint-lg) text-center"
            >
              Optimalkan Kinerja CNC Anda Bersama HaeBot!
            </CardSectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionSubtitle className="max-w-(--breakpoint-md) text-center">
              Bergabunglah dengan kami di HaeBot untuk mendapatkan komponen CNC
              berkualitas tinggi dan layanan konsultasi ahli
            </CardSectionSubtitle>
          </BlurFade>
        </CardSectionHeader>
        <CardSectionContent className="flex justify-center">
          <BlurFade inView inViewMargin="-100px">
            <Button asChild>
              <Link href="https://wa.me/6285246428746" target="_blank" >
                Hubungi Kami <FaPhone aria-hidden className="ml-2 size-4" />
              </Link>
            </Button>
          </BlurFade>
        </CardSectionContent>
      </CardSectionContainer>
    </CardSection>
  );
}
