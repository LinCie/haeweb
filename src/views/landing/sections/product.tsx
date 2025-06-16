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

import logo from "@/assets/images/logo.png";

interface ProductCardProps {
  index: number;
  name: string;
  link: string;
  image: StaticImageData;
  consideration?: string;
}

function ProductCard({
  name,
  image,
  index,
  link,
  consideration,
}: ProductCardProps) {
  const detectMobile = useMobileDetect();

  const isInInitialView = detectMobile.isMobile() ? index < 1 : index < 4;
  const text = encodeURI(`Halo min! Mau tanya tentang ${name}`);

  function ProductContent() {
    return (
      <Card className="group/card flex h-full flex-col overflow-hidden rounded-xl py-0">
        <div className="relative h-[300px] overflow-hidden select-none">
          <Image
            src={logo}
            alt="Logo Haebot"
            width={90}
            height={90}
            className="absolute top-2 left-2 z-10 p-1"
          />

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
              className="text-background outline-background hover:bg-background hover:text-foreground bg-transparent opacity-0 outline-1 transition-opacity group-hover/card:opacity-100"
              asChild
            >
              <Link href={link} target="_blank">
                Lihat di Katalog
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-grow flex-col from-neutral-100 to-transparent p-2 transition-colors group-hover/card:bg-linear-to-br">
          <div className="mb-2 font-semibold transition-all group-hover/card:translate-x-2">
            {name}
          </div>

          {consideration && (
            <p className="text-muted-foreground mb-3 h-20 px-2 text-xs">
              <span className="font-semibold">Perhatian: </span>
              {consideration}
            </p>
          )}

          <div className="mt-auto space-y-2 select-none">
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
      <CarouselItem className="h-full pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
        <BlurFade
          inView
          inViewMargin="-100px"
          delay={detectMobile.isMobile() ? 0 : 0.2 * index}
          className="h-full"
        >
          <ProductContent />
        </BlurFade>
      </CarouselItem>
    );
  }

  return (
    <CarouselItem className="h-full pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
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
      const loadedProducts = [];
      for (const category of categories) {
        const { default: image } = await category.image();
        loadedProducts.push({
          name: category.name,
          link: category.link,
          image: image,
          consideration: category.consideration,
        });
      }
      setProducts(loadedProducts);
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
            <CarouselContent className="-ml-8 flex">
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.name}-${index}-carousel`}
                  index={index}
                  {...product}
                />
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
