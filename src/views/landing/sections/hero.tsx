import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRightIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroCover from "@/assets/images/hero_cover.webp";
import heroMachine from "@/assets/images/machines.webp";

export default function HeroSection() {
  const words: string[] = ["Terpercaya", "Termurah", "Terbaik"];

  return (
    <section
      id="hero-section"
      aria-labelledby="hero-section-title"
      className="relative w-full py-16 md:py-24"
    >
      <div className="absolute inset-0 top-[-100] z-0">
        <Image
          src={heroCover}
          alt=""
          aria-hidden
          height={720}
          width={1280}
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 top-[-100] z-0 bg-white/80" />

      <div className="z-10 mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-12 px-6 md:flex-row md:gap-8 md:px-8">
        {/* Text Section */}
        <div className="flex max-w-2xl flex-col justify-center md:pt-0">
          {/* Upper Button */}
          <div className="mb-8 flex justify-center md:mb-12 md:justify-start lg:mb-14">
            <BoxReveal boxColor="#126BC1">
              <Button
                variant="expandIcon"
                asChild
                size="sm"
                className="group rounded-full bg-secondary from-primary to-[#126BC1] hover:bg-gradient-to-r [&_svg]:size-4"
                Icon={ArrowRightIcon}
                iconPlacement="right"
              >
                <Link href="#feature-section">
                  <AnimatedShinyText className="inline-flex items-center justify-center text-xs transition ease-out group-hover:text-background group-hover:duration-300">
                    ✨ Lihat layanan yang kami tawarkan
                  </AnimatedShinyText>
                  <BorderBeam size={35} duration={12} delay={9} />
                </Link>
              </Button>
            </BoxReveal>
          </div>

          {/* Heading */}
          <header className="mx-auto flex max-w-2xl flex-col items-center justify-center md:items-start">
            <h2 id="hero-section-title" className="sr-only">
              Solusi{" "}
              {words.map((word, index) => {
                if (index === words.length - 1) {
                  return "dan " + word;
                } else {
                  return word + ", ";
                }
              })}{" "}
              untuk Kebutuhan CNC Anda
            </h2>
            <BoxReveal boxColor="#126BC1">
              <div
                aria-hidden
                className="mb-2 max-w-xl scroll-m-20 text-center text-4xl font-extrabold tracking-tight md:mb-3 md:text-left md:text-5xl lg:mb-4 lg:text-6xl"
              >
                Solusi <FlipWords className="text-[#126BC1]" words={words} />{" "}
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
                asChild
              >
                <Link href="#contact-section" target="_self">
                  Hubungi Kami
                </Link>
              </Button>
            </BoxReveal>
          </div>
        </div>

        {/* Image Section */}
        <div className="z-20 flex h-full flex-1 items-center justify-center">
          <Image
            id="weird-image"
            src={heroMachine}
            width={500}
            height={500}
            alt="cnc machines"
            decoding="async"
            loading="lazy"
            className="size-96 object-cover md:size-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
