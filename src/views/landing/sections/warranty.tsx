import BlurFade from "@/components/ui/blur-fade";
import {
  CardSection,
  CardSectionContainer,
  CardSectionHeader,
  CardSectionSubtitle,
  CardSectionTitle,
  CardSectionContent,
} from "@/components/ui/card-section";
import { useMobileDetect, cn } from "@/lib/utils";
import { ShieldCheck, UserCheck, HardHat, Handshake } from "lucide-react";
import { ReactElement } from "react";

interface ISupportPoint {
  title: string;
  description: string;
  icon: ReactElement;
}

const supportPoints: ISupportPoint[] = [
  {
    title: "Garansi Produk Fleksibel",
    description:
      "Nikmati ketenangan dengan garansi produk kami yang berlaku selama 2-3 bulan, memastikan komponen Anda beroperasi sesuai standar tertinggi.",
    icon: <ShieldCheck />,
  },
  {
    title: "Dukungan Konsultasi Ahli",
    description:
      "Pembelian Anda sudah termasuk akses prioritas ke tim ahli kami untuk konsultasi pasca-pembelian, membantu Anda mengatasi tantangan teknis.",
    icon: <UserCheck />,
  },
  {
    title: "Penanganan Teknis Profesional",
    description:
      "Jika terjadi kendala, tim teknisi kami siap memberikan penanganan cepat dan efektif untuk meminimalkan waktu henti (downtime) mesin Anda.",
    icon: <HardHat />,
  },
  {
    title: "Kemitraan Jangka Panjang",
    description:
      "Bagi pelanggan setia, kami menawarkan kunjungan berkala untuk pemeliharaan preventif dan membina hubungan jangka panjang yang saling menguntungkan.",
    icon: <Handshake />,
  },
];

const SupportPoint = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const detectMobile = useMobileDetect();

  return (
    <BlurFade
      inView
      inViewMargin="-100px"
      delay={detectMobile.isMobile() ? 0 : 0.25 * index}
      className={cn(
        "group/feature relative flex flex-col py-6 md:py-10 lg:border-r",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
      )}
    >
      <div
        aria-hidden
        className="text-primary relative z-10 mb-4 px-6 [&_svg]:size-6 md:[&_svg]:size-8"
      >
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-6 text-lg font-bold md:px-10">
        <div className="group-hover/feature:bg-primary absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-6 text-sm text-neutral-600 md:px-10">
        {description}
      </p>
    </BlurFade>
  );
};

export default function WarrantySection() {
  return (
    <CardSection
      id="warranty-section"
      aria-labelledby="warranty-section-title"
      className="scroll-m-32"
    >
      <CardSectionContainer>
        <CardSectionHeader>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionTitle id="warranty-section-title">
              Jaminan & Dukungan Purna Jual
            </CardSectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionSubtitle className="pb-0">
              Komitmen kami tidak berhenti setelah penjualan. Kami di sini untuk
              memastikan keberhasilan jangka panjang Anda.
            </CardSectionSubtitle>
          </BlurFade>
        </CardSectionHeader>

        <CardSectionContent className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-3 md:grid-cols-2 md:py-10 lg:grid-cols-4">
          {supportPoints.map((point, index) => (
            <SupportPoint key={index} {...point} index={index} />
          ))}
        </CardSectionContent>
      </CardSectionContainer>
    </CardSection>
  );
}
