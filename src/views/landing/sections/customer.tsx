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
import machineImage from "@/assets/images/machine.jpg";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BlurFade from "@/components/ui/blur-fade";

function CustomerImage({ name, grid, image, index = 0 }: CustomerImageProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn(
        grid,
        "group/image relative overflow-hidden rounded opacity-0 transition",
        inView && `animate-delay-[${index * 250}ms]`,
        inView && "animate-fade animate-duration-1000 animate-ease-in-out",
      )}
    >
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
    </div>
  );
}

interface CustomerImageProps {
  index?: number;
  name: string;
  grid: string;
  image: StaticImageData;
}

export default function CustomerSection() {
  const customers: CustomerImageProps[] = [
    {
      name: "Customer 1",
      grid: "md:col-span-3 md:row-span-3",
      image: machineImage,
    },
    {
      name: "Customer 2",
      grid: "md:col-span-1 md:row-span-3 lg:row-span-2",
      image: machineImage,
    },
    {
      name: "Customer 3",
      grid: "md:col-span-1 lg:col-span-2 md:row-span-2",
      image: machineImage,
    },
    {
      name: "Customer 4",
      grid: "hidden md:block md:col-span-3 md:row-span-3",
      image: machineImage,
    },
    {
      name: "Customer 5",
      grid: "hidden md:block md:col-span-1 md:row-span-3 lg:row-span-2",
      image: machineImage,
    },
    {
      name: "Customer 6",
      grid: "hidden md:block md:col-span-1 md:row-span-2",
      image: machineImage,
    },
    {
      name: "Customer 7",
      grid: "hidden md:block lg:col-span-1 md:col-span-2 md:row-span-2",
      image: machineImage,
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
        <SectionContent className="grid h-[700px] grid-cols-1 gap-4 md:grid-cols-4 lg:h-[550px] lg:grid-cols-6">
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
