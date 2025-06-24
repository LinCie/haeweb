import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { ArrowRightIcon } from "lucide-react";

import beltImage from "@/assets/images/product-belt.jpg";
import nutImage from "@/assets/images/product-nut.jpeg";
import railImage from "@/assets/images/product-rail.jpg";

interface LatestProduct {
  name: string;
  description: string;
  image: StaticImageData;
  link: string;
  badge?: string;
}

const latestProducts: LatestProduct[] = [
  {
    name: "GT2 Timing Belt PU Steel Core 15mm",
    description:
      "Timing belt GT2 dengan inti baja yang kuat untuk presisi maksimal. Lebar 15mm ideal untuk transmisi daya pada mesin CNC yang menuntut akurasi tinggi.",
    image: beltImage,
    link: "https://www.tokopedia.com/electronicsbot/ebs-gt2-timing-belt-w15-15mm-pu-steel-core-100mm-10cm-pitch-2mm-cnc-steelcore-hitam",
    badge: "Paling Laris",
  },
  {
    name: "Nut Ballscrew SFU1605",
    description:
      "Tingkatkan presisi mesin CNC Anda. Dirancang untuk gerakan yang mulus dan backlash minimal, pilihan tepat untuk aplikasi milling dan otomasi industri.",
    image: nutImage,
    link: "https://www.tokopedia.com/electronicsbot/haebot-nut-ballscrew-sfu1605-ball-screw-sfu1605-3-1605-router-milling-cnc-mesin-presisi-16mm-pitch-5mm-industri-otomasi-1731455590602999188",
    badge: "Produk Terbaru",
  },
  {
    name: "Linear Rail SBR12 (3 Meter)",
    description:
      "Rel linear SBR12 sepanjang 3 meter memberikan fondasi yang kokoh dan stabil. Terbuat dari stainless steel untuk menopang mesin Anda.",
    image: railImage,
    link: "https://www.tokopedia.com/electronicsbot/haebot-rail-sbr12-sbr-12-300cm-3-meter-rel-linear-shaft-as-12mm-cnc-slider-stainless-steel-part-batang-industri-plasma-router-mesin-mekanik",
    badge: "Diskon Besar",
  },
];

interface LatestProductCardProps extends LatestProduct {
  index: number;
}

function LatestProductCard({
  name,
  description,
  image,
  link,
  badge,
  index,
}: LatestProductCardProps) {
  return (
    <BlurFade
      inView
      inViewMargin="-100px"
      delay={index * 0.1}
      className="flex h-full"
    >
      <Card className="group border-border/50 flex h-full w-full transform-gpu flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={500}
            loading="lazy"
            decoding="async"
          />
          {badge && (
            <span className="bg-primary text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg">
              {badge}
            </span>
          )}
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-label={`View details for ${name}`}
          >
            <Button
              variant="expandIcon"
              Icon={ArrowRightIcon}
              iconPlacement="right"
              className="text-background bg-transparent hover:bg-transparent"
            >
              Lihat di Tokopedia
            </Button>
          </Link>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-primary text-xl tracking-tight">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-4 pt-0">
          <p className="text-muted-foreground flex-grow">{description}</p>
          <Button className="mt-6 w-full" asChild>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              Lihat Detail <ArrowRightIcon className="ml-2 size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </BlurFade>
  );
}

export default function LatestProductSection() {
  const productsToShow = latestProducts.slice(0, 3);

  return (
    <Section id="latest-product-section" aria-labelledby="latest-product-title">
      <SectionContainer>
        <BlurFade inView inViewMargin="-100px">
          <SectionHeader className="items-center text-center">
            <SectionTitle id="latest-product-title">
              Jelajahi Produk Terbaru Kami
            </SectionTitle>
            <SectionSubtitle>
              Inovasi terkini dan penawaran eksklusif yang baru saja kami
              hadirkan untuk mendukung kesuksesan bisnis Anda.
            </SectionSubtitle>
          </SectionHeader>
        </BlurFade>
        <SectionContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productsToShow.map((product, index) => (
              <LatestProductCard
                key={product.name}
                index={index}
                {...product}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
