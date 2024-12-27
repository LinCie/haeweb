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
            <CardSectionTitle id="about-section-title" className="mb-1 md:mb-2">
              Tentang Kami
            </CardSectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionSubtitle className="mb-1 pb-0 font-bold md:mb-2">
              Solusi Lengkap untuk Kebutuhan CNC Anda
            </CardSectionSubtitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <div>
              <CardSectionSubtitle className="pb-1 text-left md:pb-2 lg:pb-3">
                Haebot Teknologi adalah mitra terpercaya untuk kebutuhan CNC
                Anda, menyediakan solusi lengkap mulai dari sparepart
                berkualitas hingga layanan konsultasi profesional. Kami fokus
                pada kualitas dan keandalan untuk mendukung produktivitas serta
                efisiensi Anda.
              </CardSectionSubtitle>
              <CardSectionSubtitle>
                Kami juga menawarkan layanan perbaikan mesin CNC yang cepat dan
                pengadaan mesin sesuai kebutuhan spesifik Anda. Dengan
                pengalaman dan dedikasi tinggi, Haebot Teknologi siap menjadi
                mitra terbaik dalam memenuhi berbagai kebutuhan CNC Anda.
              </CardSectionSubtitle>
            </div>
          </BlurFade>
        </div>
      </CardSectionContainer>
    </CardSection>
  );
}
