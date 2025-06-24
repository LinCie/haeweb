"use client";

import {
  Section,
  SectionContent,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/section";
import Image from "next/image";
import aboutImage from "@/assets/images/customer-1.webp";
import BlurFade from "@/components/ui/blur-fade";
import { PackageCheck, Users, Wrench } from "lucide-react";

const timelineData = [
  {
    year: "2018",
    title: "Awal Mula sebagai Electronics Bot",
    description:
      "Berawal dari sebuah toko kecil yang fokus pada penyediaan komponen untuk para penghobi robotika dan proyek elektronik.",
  },
  {
    year: "2019",
    title: "Transisi ke HaeBot & Fokus pada CNC",
    description:
      "Merespons permintaan pasar, bisnis bergeser ke spesialisasi suku cadang mesin CNC dan melakukan rebranding menjadi HaeBot.",
  },
  {
    year: "2021",
    title: "Pertumbuhan Pesat",
    description:
      "Mengalami pertumbuhan signifikan seiring meningkatnya popularitas hobi permesinan CNC selama pandemi.",
  },
  {
    year: "2024",
    title: "Ekspansi Layanan Profesional",
    description:
      "Memperluas penawaran dengan layanan perakitan mesin, konsultasi CNC, dan pelatihan untuk memenuhi kebutuhan B2B.",
  },
];

function TimelineItem({ item, isLast }: { item: any; isLast: boolean }) {
  return (
    <div className="flex items-start">
      <div className="mr-6 flex flex-col items-center">
        <div className="bg-primary text-primary-foreground flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold">
          {item.year.substring(2)}
        </div>
        {!isLast && <div className="bg-border mt-2 h-24 w-px"></div>}
      </div>
      <div>
        <h4 className="text-primary text-lg font-bold">{item.title}</h4>
        <p className="text-muted-foreground mt-1">{item.description}</p>
      </div>
    </div>
  );
}

const valueProps = [
  {
    icon: <PackageCheck className="text-primary h-8 w-8" />,
    title: "Kualitas & Keandalan",
    description:
      "Kami hanya menyediakan komponen berkualitas tinggi dari manufaktur terpercaya untuk memastikan efisiensi dan produktivitas Anda.",
  },
  {
    icon: <Users className="text-primary h-8 w-8" />,
    title: "Mitra Konsultasi Ahli",
    description:
      "Kami bukan hanya penjual, tapi juga mitra strategis yang siap memberikan solusi dan konsultasi profesional untuk setiap tantangan CNC Anda.",
  },
  {
    icon: <Wrench className="text-primary h-8 w-8" />,
    title: "Dukungan Purna Jual",
    description:
      "Komitmen kami berlanjut setelah penjualan dengan layanan perbaikan, perawatan, dan dukungan teknis untuk kesuksesan jangka panjang Anda.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about-us" aria-labelledby="about-us-title">
      <SectionContainer className="py-6 md:py-8">
        {/* Header */}
        <SectionHeader className="mb-12 items-center text-center">
          <BlurFade inView inViewMargin="-100px">
            <SectionTitle id="about-us-title">
              Perjalanan Kami dalam Inovasi Permesinan
            </SectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px" delay={0.1}>
            <SectionSubtitle>
              Mengenal lebih dekat PT HaeBot Teknologi Indonesia.
            </SectionSubtitle>
          </BlurFade>
        </SectionHeader>

        {/* Main Content: Story & Image */}
        <SectionContent>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <BlurFade inView inViewMargin="-100px" delay={0.2}>
              <Image
                src={aboutImage}
                alt="Tim Haebot berdiskusi mengenai proyek CNC"
                className="h-96 w-full rounded-xl object-cover shadow-lg"
              />
            </BlurFade>
            <div className="space-y-4">
              <BlurFade inView inViewMargin="-100px" delay={0.3}>
                <h3 className="text-primary text-2xl font-bold">
                  Dari Hobi Menjadi Solusi Industri
                </h3>
                <p className="text-muted-foreground mt-2 text-lg">
                  Perjalanan PT HaeBot Teknologi Indonesia dimulai pada tahun
                  2018 sebagai <strong>Electronics Bot</strong>, sebuah toko
                  kecil yang melayani para pegiat robotika. Seiring waktu, kami
                  melihat adanya pergeseran kebutuhan menuju permesinan CNC,
                  yang mendorong kami untuk berevolusi menjadi{" "}
                  <strong>HaeBot</strong>.
                </p>
                <p className="text-muted-foreground mt-4 text-lg">
                  Kini, kami adalah mitra terpercaya dalam penyediaan suku
                  cadang, perakitan mesin, hingga konsultasi profesional, yang
                  berdedikasi untuk mendukung produktivitas dan inovasi di
                  industri CNC Indonesia.
                </p>
              </BlurFade>
            </div>
          </div>
        </SectionContent>

        {/* Timeline Section */}
        <SectionContent className="mt-20">
          <BlurFade inView inViewMargin="-100px" delay={0.4}>
            <h3 className="text-primary mb-10 text-center text-3xl font-bold">
              Jejak Langkah Kami
            </h3>
            <div className="mx-auto max-w-2xl">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  item={item}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </BlurFade>
        </SectionContent>

        {/* Value Proposition Section */}
        <SectionContent className="mt-20">
          <BlurFade inView inViewMargin="-100px" delay={0.5}>
            <h3 className="text-primary mb-10 text-center text-3xl font-bold">
              Komitmen Kami Untuk Anda
            </h3>
          </BlurFade>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {valueProps.map((value, index) => (
              <BlurFade
                key={value.title}
                inView
                inViewMargin="-100px"
                delay={0.6 + index * 0.1}
              >
                <div className="bg-background rounded-lg p-6 text-center shadow">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h4 className="mb-2 text-xl font-bold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}
