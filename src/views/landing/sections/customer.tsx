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
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BlurFade from "@/components/ui/blur-fade";
import customer1 from "@/assets/images/customer-1.webp";
import customer2 from "@/assets/images/customer-2.webp";
import customer3 from "@/assets/images/customer-3.webp";
import customer4 from "@/assets/images/customer-4.webp";
import customer5 from "@/assets/images/customer-5.webp";
import customer6 from "@/assets/images/customer-6.webp";

function CustomerImage({
  name,
  grid,
  image,
  index = 0,
  videoId,
}: CustomerImageProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn(
        grid,
        "relative overflow-hidden rounded opacity-0 transition",
        !videoId && "group/image", // Only apply hover effects to images
        inView && `animate-delay-[${index * 250}ms]`,
        inView && "animate-fade animate-duration-1000 animate-ease-in-out",
      )}
    >
      {videoId ? (
        // YouTube Video Container
        <div className="aspect-video h-full w-full">
          <iframe
            className="h-full w-full rounded"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=${videoId}&background=1&color=white&playsinline=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        // Image Container
        <>
          <Image
            className="h-full object-cover transition group-hover/image:scale-105"
            src={image}
            alt={name}
            decoding="async"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition group-hover/image:opacity-75"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-center opacity-0 transition group-hover/image:opacity-100">
            <span className="block text-sm font-bold text-white">{name}</span>
          </div>
        </>
      )}
    </div>
  );
}

interface CustomerImageProps {
  index?: number;
  name: string;
  grid: string;
  image: StaticImageData;
  videoId?: string; // Add optional videoId prop
}

export default function CustomerSection() {
  const customers: CustomerImageProps[] = [
    {
      name: "Customer 1",
      grid: "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
      image: customer1,
      videoId: "-hzMMlBJePw",
    },
    {
      name: "Customer 2",
      grid: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
      image: customer2,
    },
    {
      name: "Customer 3",
      grid: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
      image: customer3,
    },
    {
      name: "Customer 4",
      grid: "md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1",
      image: customer4,
    },
    {
      name: "Customer 5",
      grid: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
      image: customer5,
    },
    {
      name: "Customer 6",
      grid: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      image: customer6,
    },
  ];

  return (
    <Section id="customer-section" aria-labelledby="customer-section-title">
      <SectionContainer>
        <BlurFade inView inViewMargin="-100px">
          <SectionHeader className="items-center text-center">
            <SectionTitle id="customer-section-title">
              Pelanggan Kami
            </SectionTitle>
            <SectionSubtitle>
              Belanja di HaeBot memberikan kepuasan kepuasan terhadap pelanggan
              kami
            </SectionSubtitle>
          </SectionHeader>
        </BlurFade>
        <SectionContent className="grid h-[1500px] grid-cols-1 gap-4 md:h-[700px] md:grid-cols-3 lg:h-[550px] lg:grid-cols-4">
          {customers.map((customer, index) => {
            return (
              <CustomerImage key={customer.name} index={index} {...customer} />
            );
          })}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
