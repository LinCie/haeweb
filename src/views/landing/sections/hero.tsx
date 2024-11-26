import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import CycleText from "@/components/ui/cycle-text";
import Meteors from "@/components/ui/meteors";
import { ArrowRightIcon, Phone } from "lucide-react";

export default function HeroSection() {
  const words: string[] = ["Terpercaya", "Termurah", "Terbaik"];

  return (
    <section
      id="hero-section"
      aria-labelledby="hero-section-title"
      className="mt-32 w-full"
    >
      <div
        aria-live="polite"
        aria-hidden
        className="absolute inset-0 top-[-8rem] overflow-hidden"
      >
        <Meteors number={25} />
      </div>

      <div className="mx-auto flex max-w-screen-xl flex-col px-6 md:flex-row md:px-8">
        {/* Text Section */}
        <div className="max-w-2xl">
          {/* Upper Button */}
          <div className="mb-8 flex justify-center md:mb-12 md:justify-start lg:mb-14">
            <BoxReveal boxColor="#126BC1">
              <Button
                variant="expandIcon"
                size="sm"
                className="group rounded-full bg-secondary from-primary to-[#126BC1] hover:bg-gradient-to-r [&_svg]:size-4"
                Icon={ArrowRightIcon}
                iconPlacement="right"
              >
                <AnimatedShinyText className="inline-flex items-center justify-center text-xs transition ease-out group-hover:text-background group-hover:duration-300">
                  ✨ Lihat layanan yang kami tawarkan
                </AnimatedShinyText>
                <BorderBeam size={35} duration={12} delay={9} />
              </Button>
            </BoxReveal>
          </div>

          {/* Heading */}
          <header className="mx-auto flex max-w-2xl flex-col items-center justify-center md:items-start">
            <h2 id="hero-section-title" className="sr-only">
              Solusi Terpercaya, Termurah, dan Terbaik untuk Kebutuhan CNC Anda
            </h2>
            <BoxReveal boxColor="#126BC1">
              <div
                aria-hidden
                aria-live="polite"
                className="mb-2 max-w-xl scroll-m-20 text-center text-4xl font-extrabold tracking-tight md:mb-3 md:text-left md:text-5xl lg:mb-4 lg:text-6xl"
              >
                Solusi{" "}
                <CycleText
                  className="bg-gradient-to-r from-primary to-[#126BC1] bg-clip-text text-transparent"
                  words={words}
                />{" "}
                untuk Kebutuhan CNC Anda
              </div>
            </BoxReveal>
            <BoxReveal boxColor="#126BC1">
              <div className="mb-4 text-center text-base md:mb-6 md:text-left md:text-lg lg:mb-8 lg:text-xl">
                Dapatkan komponen berkualitas tinggi dan layanan konsultasi ahli
                untuk meningkatkan produktivitas Anda
              </div>
            </BoxReveal>
          </header>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <BoxReveal boxColor="#126BC1">
              <Button
                variant="expandIcon"
                Icon={Phone}
                iconPlacement="right"
                className="bg-gradient-to-r from-primary to-[#126BC1] [&_svg]:size-4"
              >
                Hubungi Kami
              </Button>
            </BoxReveal>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
