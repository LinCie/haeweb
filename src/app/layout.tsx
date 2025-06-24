import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TopHeader from "@/components/layout/top-header";
import Chatbot from "@/components/chatbot";

const siteConfig = {
  name: "HaeBot | PT HaeBot Teknologi Indonesia",
  url: "https://haebot.com",
  shortDescription:
    "Solusi lengkap untuk komponen dan suku cadang CNC. Kami menyediakan produk berkualitas tinggi dan konsultasi ahli untuk industri dan manufaktur di Indonesia.",
  longDescription:
    "Tingkatkan operasional CNC Anda dengan HaeBot, sumber terpercaya Anda untuk komponen CNC berkualitas tinggi dan layanan konsultasi ahli. Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda. Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda. HaeBot - mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
  ogImage: "/images/cnc-machine.jpg",
  ogImageAlt: "Mesin dan komponen CNC dari HaeBot",
  companyName: "PT HaeBot Teknologi Indonesia",
  contact: {
    phone: "+6285246428746",
    address:
      "Jl. Kolonel Sugiono No.22, Gedog, Kec. Sananwetan, Kota Blitar, Jawa Timur 66137",
  },
};

export const metadata: Metadata = {
  // === BASE METADATA ===
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | HaeBot`,
  },
  description: siteConfig.shortDescription,

  // === EXPANDED KEYWORDS ARRAY ===
  keywords: [
    // Core & Brand
    "HaeBot",
    "PT HaeBot Teknologi Indonesia",
    "CNC",
    "Komponen CNC",
    "Suku Cadang CNC",
    "Sparepart CNC",
    "Onderdil CNC",
    "Part CNC",

    // Services
    "Konsultasi CNC",
    "Layanan CNC",
    "Jasa Perbaikan Mesin CNC",
    "Custom Build CNC",
    "Pengadaan Mesin CNC",
    "Membangun CNC",

    // Action & Commercial Intent
    "Jual Komponen CNC",
    "Harga Sparepart CNC",
    "Distributor CNC Indonesia",
    "Supplier CNC Terpercaya",
    "Toko Komponen CNC Online",
    "Agen Suku Cadang CNC",

    // Specific Product Keywords
    "Linear Rail",
    "Rail SBR12",
    "Timing Belt GT2",
    "PU Steel Core Belt",
    "Ballscrew",
    "Nut Ballscrew SFU1605",
    "Motor Stepper",
    "Nema 23",
    "Stepper Driver",
    "Power Supply Switching",
    "Water Chiller CW-3000",
    "Linear Shaft",
    "Hard Chrome Shaft",

    // Technical & Application Keywords
    "Otomatisasi Industri",
    "Gerak Linear",
    "Sistem Mekanik",
    "Transmisi Daya CNC",
    "Mesin Presisi",
    "Manufaktur",
    "Teknologi Pabrikasi",
    "Perakitan Mesin",
    "Upgrade CNC",
    "Perawatan Mesin CNC",
    "CNC Router",
    "3D Printer Parts",
    "Mesin Laser CO2",
    "Mesin Plasma",
    "Mesin Milling",

    // Location-Based Keywords
    "Supplier CNC Blitar",
    "Toko CNC Kediri",
    "Jual Komponen CNC Malang",
    "Distributor CNC Surabaya",
    "Sparepart CNC Jawa Timur",
    "Konsultasi CNC Jakarta",
    "Pengiriman Seluruh Indonesia",

    // Audience & Industry Keywords
    "Hobiis CNC",
    "Bengkel Custom",
    "Industri Furnitur",
    "Industri Akrilik",
    "Pengerjaan Logam",
    "Pendidikan Vokasi",
    "Laboratorium Teknik",
  ],

  // === CRAWLER INSTRUCTIONS ===
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },

  // === AUTHORSHIP & BRANDING ===
  creator: "PT HaeBot Teknologi Indonesia",
  publisher: "PT HaeBot Teknologi Indonesia",
  authors: [{ name: "LinCie", url: siteConfig.url }],

  // === OPEN GRAPH (for Social Media) ===
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.longDescription,
    url: siteConfig.url,
    siteName: "HaeBot",
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.ogImageAlt,
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // === TWITTER CARD ===
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.longDescription,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },

  // === FAVICONS & ICONS ===
  icons: {
    icon: "/favicon.ico",
  },
};

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(openSans.className)}>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <div className="flex w-full flex-col">
            <TopHeader />
            <Header />
            <div className="w-full">
              <main className="bg-background w-full">{children}</main>
            </div>
            <Chatbot />
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
