"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import banner1 from "@/assets/images/banner-1.webp";
import banner2 from "@/assets/images/banner-2.webp";
import { cn } from "@/lib/utils";

export default function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className="my-6 min-h-screen w-full flex-col overflow-hidden"
      id="carousel-section"
      aria-label="banner kami"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src={banner1}
              alt=""
              className="size-full object-contain object-center"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={banner2}
              alt=""
              className="size-full object-contain object-center"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="mt-4 flex items-end justify-center gap-4">
        <div
          className={cn(
            "size-6 rounded-full",
            current === 1 ? "bg-primary" : "bg-foreground",
          )}
        />
        <div
          className={cn(
            "size-6 rounded-full",
            current === 2 ? "bg-primary" : "bg-foreground",
          )}
        />
      </div>
    </section>
  );
}
