"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import banner1 from "@/assets/images/banner-1.webp";
import banner2 from "@/assets/images/banner-2.webp";
import banner3 from "@/assets/images/banner-3.jpg";
import banner4 from "@/assets/images/banner-4.jpg";

import { cn } from "@/lib/utils";
import {
  CardSection,
  CardSectionContainer,
} from "@/components/ui/card-section";

const banners = [
  { src: banner1, alt: "Promotional banner for CNC services" },
  { src: banner2, alt: "Banner showcasing specific CNC parts" },
  { src: banner3, alt: "Latest promotion banner from Tokopedia campaign" },
  { src: banner4, alt: "Special offer announcement banner" },
];

export default function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <CardSection id="carousel-section" aria-label="banner kami">
      <CardSectionContainer className="relative overflow-hidden px-0 md:px-0 lg:px-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          setApi={setApi}
          className="group"
        >
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index}>
                <Image
                  priority={index === 0}
                  src={banner.src}
                  alt={banner.alt}
                  className="size-full object-contain object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-3 md:bottom-4 md:gap-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "size-2 cursor-pointer rounded-full transition-colors md:size-3",
                current === index ? "bg-primary" : "bg-foreground/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </CardSectionContainer>
    </CardSection>
  );
}
