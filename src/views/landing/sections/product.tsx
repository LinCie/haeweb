"use client";

import Image, { StaticImageData } from "next/image";

import { FaWhatsapp } from "react-icons/fa6";
import { LuStore, LuExternalLink } from "react-icons/lu";
import machineImage from "@/assets/images/machine.jpg";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Section,
  SectionContent,
  SectionContainer,
  SectionHeader,
  SectionTitle,
} from "@/components/ui/section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { useMobileDetect } from "@/lib/utils";

interface ProductCardProps {
  index: number;
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
}

function ProductCard({
  name,
  link,
  description,
  image,
  index,
}: ProductCardProps) {
  const detectMobile = useMobileDetect();

  return (
    <CarouselItem className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <BlurFade
        inView={detectMobile.isMobile() ? index < 1 : index < 4}
        inViewMargin="-100px"
        delay={detectMobile.isMobile() ? 0 : 0.2 * index}
      >
        <Card className="group/card flex h-fit flex-col overflow-hidden rounded-xl">
          <div className="relative h-[300px] select-none overflow-hidden">
            <Image
              loading="lazy"
              decoding="async"
              height={300}
              width={400}
              src={image}
              alt={name}
              className="h-full w-full object-cover object-center transition group-hover/card:scale-105 group-hover/card:blur-[2px]"
            />
            <div className="absolute inset-0 flex items-center justify-center transition group-hover/card:bg-black/50">
              <Button
                variant="expandIcon"
                iconPlacement="right"
                Icon={LuExternalLink}
                size="sm"
                className="bg-transparent text-background opacity-0 outline outline-1 outline-background transition-opacity hover:bg-background hover:text-foreground group-hover/card:opacity-100"
              >
                Lihat di Katalog
              </Button>
            </div>
          </div>
          <div className="from-neutral-100 to-transparent p-2 transition-colors group-hover/card:bg-gradient-to-br">
            <div className="font-semibold transition-all group-hover/card:translate-x-2">
              {name}
            </div>
            <div className="mb-4 truncate">{description}</div>
            <div className="select-none space-y-2">
              <Button
                variant="ringHover"
                size="sm"
                className="group/button w-full"
                asChild
              >
                <Link target="_blank" href={link}>
                  Lihat di Katalog{" "}
                  <LuStore
                    aria-hidden
                    className="ml-2 size-4 transition-all group-hover/button:translate-x-1 group-hover/button:rotate-6"
                  />
                </Link>
              </Button>
              <Button
                variant="ringHover"
                size="sm"
                className="group/button w-full bg-green-500 hover:bg-green-500/90 hover:ring-green-500/90"
                asChild
              >
                <Link target="_blank" href={link}>
                  Chat Kami{" "}
                  <FaWhatsapp
                    aria-hidden
                    className="ml-2 size-4 transition-all group-hover/button:translate-x-1 group-hover/button:rotate-6"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </BlurFade>
    </CarouselItem>
  );
}

export default function ProductSection() {
  const products: Omit<ProductCardProps, "index">[] = [
    {
      name: "Product 1",
      description: "Description of product 1",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 2",
      description: "Description of product 2",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 3",
      description: "Description of product 3",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 4",
      description: "Description of product 4",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 5",
      description: "Description of product 5",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 6",
      description: "Description of product 6",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 7",
      description: "Description of product 7",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 8",
      description: "Description of product 8",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 9",
      description: "Description of product 9",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 10",
      description: "Description of product 10",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 11",
      description: "Description of product 11",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 12",
      description: "Description of product 12",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 13",
      description: "Description of product 13",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 14",
      description: "Description of product 14",
      link: "https://example.com",
      image: machineImage,
    },
    {
      name: "Product 15",
      description: "Description of product 15",
      link: "https://example.com",
      image: machineImage,
    },
  ];

  return (
    <Section id="product-section" aria-labelledby="product-section-title">
      <SectionContainer>
        <SectionHeader className="mb-4 items-center text-center md:mb-5">
          <SectionTitle id="product-section-title">
            Galeri Produk Kami
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="pb-12"
          >
            <CarouselContent className="-ml-8">
              {products.map((product, index) => (
                <ProductCard key={product.name} index={index} {...product} />
              ))}
            </CarouselContent>
          </Carousel>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
