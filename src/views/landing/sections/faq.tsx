"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurFade from "@/components/ui/blur-fade";
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/section";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa yang membedakan PT HaeBot dari pemasok CNC lainnya?",
    answer:
      "PT HaeBot tidak hanya menjual produk, kami menawarkan solusi lengkap. Kami berfokus pada konsultasi ahli, layanan perakitan mesin custom, dan dukungan purna jual yang andal. Dengan model bisnis yang melayani B2C dan B2B, kami memiliki pemahaman pasar yang luas, dari penghobi hingga kebutuhan industri skala besar.",
  },
  {
    question: "Bagaimana PT HaeBot menjamin kualitas produknya?",
    answer:
      "Kualitas adalah prioritas kami. Kami memastikan semua produk, terutama suku cadang, bersumber langsung dari manufaktur terkemuka dan terpercaya di China. Setiap produk yang tiba di gudang kami melewati proses inspeksi kualitas yang ketat sebelum ditawarkan kepada pelanggan.",
  },
  {
    question: "Apakah PT HaeBot melayani perakitan mesin custom?",
    answer:
      "Ya, salah satu layanan utama kami adalah perakitan dan kustomisasi mesin CNC. Tim kami dapat merancang dan membangun mesin yang spesifikasinya disesuaikan dengan kebutuhan unik proses produksi Anda, baik itu untuk skala kecil maupun industri.",
  },
  {
    question:
      "Apa saja cakupan layanan purna jual (after-sales) yang ditawarkan?",
    answer:
      "Kami berkomitmen pada kemitraan jangka panjang. Layanan purna jual kami mencakup garansi produk yang fleksibel, dukungan teknis profesional untuk perbaikan dan perawatan, serta akses berkelanjutan ke konsultasi ahli untuk memastikan mesin Anda beroperasi secara optimal.",
  },
  {
    question: "Di wilayah mana saja PT HaeBot beroperasi?",
    answer:
      "Fokus utama geografis kami adalah Blitar dan pusat industri di sekitarnya seperti Malang, Kediri, dan Surabaya untuk memungkinkan layanan di tempat yang responsif. Namun, kami juga melayani klien di seluruh Indonesia melalui penjualan online dan kemitraan logistik yang andal.",
  },
  {
    question: "Bagaimana proses untuk memulai konsultasi atau pemesanan B2B?",
    answer:
      "Anda dapat menghubungi kami langsung melalui tombol 'Hubungi Kami' di situs ini, atau melalui informasi kontak yang tersedia. Tim kami akan segera merespons untuk menjadwalkan sesi konsultasi gratis atau memandu Anda melalui proses pemesanan untuk kebutuhan bisnis Anda.",
  },
];

export default function FaqSection() {
  return (
    <Section id="faq" aria-labelledby="faq-title">
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Column: Title and Subtitle */}
          <div className="lg:col-span-1">
            <BlurFade inView inViewMargin="-100px">
              <SectionHeader className="items-start text-left">
                <SectionTitle id="faq-title" className="text-3xl md:text-4xl">
                  Pertanyaan Umum
                </SectionTitle>
                <SectionSubtitle className="mt-4 text-lg">
                  Menemukan jawaban cepat untuk pertanyaan paling umum mengenai
                  layanan dan produk kami. Jika Anda tidak menemukan yang Anda
                  cari, jangan ragu untuk menghubungi kami.
                </SectionSubtitle>
              </SectionHeader>
            </BlurFade>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-2">
            <BlurFade inView inViewMargin="-100px" delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-4">
                        <HelpCircle className="text-primary h-6 w-6 flex-shrink-0" />
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-10 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </BlurFade>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
