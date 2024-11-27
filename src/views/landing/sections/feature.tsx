import BlurFade from "@/components/ui/blur-fade";
import {
  CardSection,
  CardSectionContainer,
  CardSectionHeader,
  CardSectionSubtitle,
  CardSectionTitle,
  CardSectionContent,
} from "@/components/ui/card-section";
import { cn, useMobileDetect } from "@/lib/utils";
import { Package, Settings, User } from "lucide-react";
import { ReactElement } from "react";

interface IFeature {
  title: string;
  description: string;
  icon: ReactElement;
}

const features: IFeature[] = [
  {
    title: "Komponen CNC Berkualitas",
    description:
      "Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda.",
    icon: <Package />,
  },
  {
    title: "Konsultasi Ahli",
    description:
      "Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda.",
    icon: <User />,
  },
  {
    title: "Solusi Otomatisasi",
    description:
      "HaeBot adalah mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
    icon: <Settings />,
  },
];

const Feature = ({
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
        "group/feature relative flex flex-col py-10 dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
        index < 4 && "dark:border-neutral-800 lg:border-b",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div
        aria-hidden
        className="relative z-10 mb-4 px-6 text-neutral-600 dark:text-neutral-400 md:px-10 [&_svg]:size-6 md:[&_svg]:size-8"
      >
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-6 text-lg font-bold md:px-10">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-6 text-sm text-neutral-600 dark:text-neutral-300 md:px-10">
        {description}
      </p>
    </BlurFade>
  );
};

export default function FeatureSection() {
  return (
    <CardSection id="feature-section" aria-labelledby="feature-section-title">
      <CardSectionContainer>
        <CardSectionHeader>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionTitle id="feature-section-title">
              Kenapa pilih HaeBot?
            </CardSectionTitle>
          </BlurFade>
          <BlurFade inView inViewMargin="-100px">
            <CardSectionSubtitle className="pb-0">
              HaeBot menyediakan komponen CNC berkualitas tinggi dan layanan
              konsultasi ahli untuk meningkatkan efisiensi operasional mesin
              Anda.
            </CardSectionSubtitle>
          </BlurFade>
        </CardSectionHeader>

        <CardSectionContent className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </CardSectionContent>
      </CardSectionContainer>
    </CardSection>
  );
}
