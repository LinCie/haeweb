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
  SectionSubtitle,
} from "@/components/ui/section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { useMobileDetect } from "@/lib/utils";
import { useEffect, useState } from "react";
import { categories } from "@/shared/categories";
import logo from "@/assets/images/logo.png";

interface IProduct {
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
}: {
  index: number;
} & IProduct) {
  const detectMobile = useMobileDetect();
  const text = encodeURI(`Halo min! Mau tanya tentang ${name}`);

  return (
    <BlurFade
      inView
      inViewMargin="-100px"
      delay={detectMobile.isMobile() ? 0 : 0.05 * index}
      className="h-full"
    >
      <Card className="group/card flex h-full flex-col overflow-hidden rounded-xl border py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative h-[250px] overflow-hidden select-none">
          <Image
            src={logo}
            alt="Logo Haebot"
            width={80}
            height={80}
            className="absolute top-2 left-2 z-10 p-1"
          />
          <Image
            loading="lazy"
            decoding="async"
            height={300}
            width={400}
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover/card:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-300 group-hover/card:opacity-100">
            <Button
              variant="outline"
              size="sm"
              className="transition-opacity"
              asChild
            >
              <Link href={link} target="_blank">
                Lihat di Katalog <LuExternalLink className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-grow flex-col p-5">
          <h3 className="mb-2 text-xl font-bold">{name}</h3>
          {consideration && (
            <p className="text-muted-foreground mb-4 text-sm">
              <span className="font-semibold">Perhatian: </span>
              {consideration}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-auto space-y-3 pt-4">
            <Button
              variant="default"
              size="sm"
              className="group/button w-full"
              asChild
            >
              <Link target="_blank" href={link}>
                Lihat di Katalog{" "}
                <LuStore
                  aria-hidden
                  className="ml-2 size-4 transition-transform group-hover/button:translate-x-1"
                />
              </Link>
            </Button>
            <Button
              size="sm"
              className="group/button w-full bg-green-500 text-white hover:bg-green-600"
              asChild
            >
              <Link
                target="_blank"
                href={`https://wa.me/6285246428746?text=${text}`}
              >
                Chat Kami{" "}
                <FaWhatsapp
                  aria-hidden
                  className="ml-2 size-4 transition-transform group-hover/button:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </BlurFade>
  );
}

export default function ProductSection() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const loadedProducts = await Promise.all(
        categories.map(async (category) => {
          const { default: image } = await category.image();
          return {
            name: category.name,
            link: category.link,
            image: image,
            consideration: category.consideration,
          };
        }),
      );
      setProducts(loadedProducts);
    }
    loadCategories();
  }, []);

  return (
    <Section id="product-section" aria-labelledby="product-section-title">
      <SectionContainer>
        <SectionHeader className="items-center text-center">
          <BlurFade inView inViewMargin="-100px">
            <SectionTitle id="product-section-title">
              Galeri Produk Kami
            </SectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <SectionSubtitle>
              Jelajahi berbagai kategori produk kami untuk menemukan solusi yang
              tepat untuk kebutuhan CNC Anda.
            </SectionSubtitle>
          </BlurFade>
        </SectionHeader>
        <SectionContent>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full p-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <ProductCard index={index} {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
