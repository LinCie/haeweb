"use client";

import Image, { StaticImageData } from "next/image";

import { FaWhatsapp } from "react-icons/fa6";
import { LuStore, LuExternalLink } from "react-icons/lu";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
import { useEffect, useState } from "react";
import { categories } from "@/shared/categories";

interface ProductCardProps {
  index: number;
  name: string;
  link: string;
  image: StaticImageData;
}

function ProductCard({ name, image, index, link }: ProductCardProps) {
  const detectMobile = useMobileDetect();

  const isInInitialView = detectMobile.isMobile() ? index < 1 : index < 4;
  const text = encodeURI(`Halo min! Mau tanya tentang ${name}`);

  function ProductContent() {
    return (
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
              asChild
            >
              <Link href={link} target="_blank">
                Lihat di Katalog
              </Link>
            </Button>
          </div>
        </div>
        <div className="from-neutral-100 to-transparent p-2 transition-colors group-hover/card:bg-gradient-to-br">
          <div className="mb-2 font-semibold transition-all group-hover/card:translate-x-2">
            {name}
          </div>
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
              <Link
                target="_blank"
                href={`https://wa.me/6285246428746?text=${text}`}
              >
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
    );
  }

  if (isInInitialView) {
    return (
      <CarouselItem className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
        <BlurFade
          inView
          inViewMargin="-100px"
          delay={detectMobile.isMobile() ? 0 : 0.2 * index}
        >
          <ProductContent />
        </BlurFade>
      </CarouselItem>
    );
  }

  return (
    <CarouselItem className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <ProductContent />
    </CarouselItem>
  );
}

export default function ProductSection() {
  const [products, setProducts] = useState<Omit<ProductCardProps, "index">[]>(
    [],
  );

  useEffect(() => {
    async function loadCategories() {
      for (const category of categories) {
        const { default: image } = await category.image();
        setProducts((previous) => {
          return previous.concat({
            name: category.name,
            link: category.link,
            image: image,
          });
        });
      }
    }
    loadCategories();
  }, []);

  return (
    <Section id="product-section" aria-labelledby="product-section-title">
      <SectionContainer>
        <SectionHeader className="mb-4 items-center text-center md:mb-5">
          <BlurFade inView inViewMargin="-100px">
            <SectionTitle id="product-section-title">
              Galeri Produk Kami
            </SectionTitle>
          </BlurFade>
        </SectionHeader>
        <SectionContent>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-8">
              {products.map((product, index) => (
                <ProductCard key={product.name} index={index} {...product} />
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-3 md:ml-0" />
            <CarouselNext className="mr-3 md:mr-0" />
          </Carousel>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
