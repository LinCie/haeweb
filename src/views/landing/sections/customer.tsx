"use client";

import {
  Section,
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";
import Image, { StaticImageData } from "next/image";
import BlurFade from "@/components/ui/blur-fade";

import customer1 from "@/assets/images/customer-1.webp";
import customer2 from "@/assets/images/customer-2.webp";
import customer3 from "@/assets/images/customer-3.webp";
import customer4 from "@/assets/images/customer-4.webp";
import review1 from "@/assets/images/review-1.webp";
import review2 from "@/assets/images/review-2.webp";

const customerAssets = [
  {
    type: "video",
    src: "/videos/customer-video.mp4",
    alt: "Video kunjungan tim HaeBot ke workshop klien",
  },
  {
    type: "image",
    src: review1,
    alt: "Ulasan pelanggan bintang 5 dari marketplace",
  },
  {
    type: "image",
    src: customer1,
    alt: "Kunjungan ke workshop klien",
  },
  {
    type: "image",
    src: review2,
    alt: "Screenshot testimoni positif dari pelanggan",
  },
  {
    type: "image",
    src: customer2,
    alt: "Tim HaeBot bersama salah satu klien",
  },
  {
    type: "image",
    src: customer3,
    alt: "Grup foto bersama pelanggan setia lainnya",
  },
  {
    type: "image",
    src: customer4,
    alt: "Foto bersama pelanggan yang puas",
  },
];

interface AssetCardProps {
  item: (typeof customerAssets)[0];
  index: number;
}

function AssetCard({ item, index }: AssetCardProps) {
  return (
    <BlurFade
      inView
      delay={index * 0.1}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md"
    >
      {item.type === "video" ? (
        <video
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
          src={item.src.toString()}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={item.src as StaticImageData}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          decoding="async"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-all duration-300 group-hover:bottom-2 group-hover:opacity-100">
        <p className="text-sm font-semibold text-white">{item.alt}</p>
      </div>
    </BlurFade>
  );
}

export default function CustomerSection() {
  return (
    <Section id="customer-section" aria-labelledby="customer-section-title">
      <SectionContainer>
        <BlurFade inView inViewMargin="-100px">
          <SectionHeader className="items-center text-center">
            <SectionTitle id="customer-section-title">
              Dipercaya oleh Pelaku Industri
            </SectionTitle>
            <SectionSubtitle>
              Dari bengkel lokal hingga pabrik, kami adalah mitra terpercaya
              dalam solusi CNC.
            </SectionSubtitle>
          </SectionHeader>
        </BlurFade>
        <SectionContent>
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {customerAssets.map((item, index) => (
              <AssetCard key={index} item={item} index={index} />
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
