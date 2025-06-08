import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurFade from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";

interface Question {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const questions: Question[] = [
    {
      question:
        "Apa saja layanan utama yang disediakan oleh PT Haebot Teknologi Indonesia?",
      answer:
        "PT Haebot menyediakan solusi CNC komprehensif untuk kebutuhan bisnis Anda. Layanan kami mencakup: (1) Konsultasi Teknis untuk menemukan solusi paling efisien, (2) Penyediaan Suku Cadang CNC berkualitas tinggi, (3) Perakitan Mesin & Custom Build sesuai spesifikasi, serta (4) Jasa Perbaikan & Perawatan profesional untuk memastikan mesin Anda beroperasi secara optimal dan andal.",
    },
    {
      question:
        "Bagaimana cara saya melakukan pemesanan atau memulai konsultasi?",
      answer:
        "Anda dapat dengan mudah menghubungi kami melalui tombol 'Hubungi Kami' yang tersedia di halaman ini untuk terhubung langsung via WhatsApp. Tim ahli kami berkomitmen untuk memberikan respons cepat, biasanya dalam waktu kurang dari 2 jam pada hari kerja, untuk mendiskusikan kebutuhan Anda secara detail.",
    },
    {
      question:
        "Dari mana produk-produk CNC Haebot berasal dan bagaimana jaminan kualitasnya?",
      answer:
        "Kami menjamin kualitas tertinggi dengan bekerja sama secara langsung dengan manufaktur terkemuka dan terpercaya. Setiap produk yang kami tawarkan telah melewati proses seleksi dan quality control (QC) yang ketat untuk memastikan performa, durabilitas, dan presisi sesuai standar industri. Kepercayaan Anda adalah prioritas kami.",
    },
    {
      question: "Apakah Haebot melayani klien di luar wilayah Blitar?",
      answer:
        "Tentu saja. Meskipun toko utama kami berlokasi di Blitar, kami melayani dan mengirimkan produk ke seluruh wilayah Indonesia. Kami didukung oleh kemitraan logistik yang andal untuk memastikan pesanan Anda tiba dengan aman dan tepat waktu, di mana pun lokasi bisnis Anda.",
    },
    {
      question:
        "Mengapa saya harus memilih Haebot sebagai partner solusi CNC saya?",
      answer:
        "Kami lebih dari sekadar pemasok; kami adalah partner strategis Anda. Haebot menawarkan kombinasi keunggulan berupa keahlian tim yang profesional, kualitas produk terjamin, solusi layanan yang lengkap dan terintegrasi, serta komitmen pada layanan pelanggan yang responsif untuk mendukung kelancaran bisnis Anda.",
    },
  ];

  return (
    <Section>
      <SectionContainer>
        <BlurFade inView inViewMargin="-100px">
          <SectionHeader className="items-center text-center">
            <SectionTitle id="customer-section-title">
              Pertanyaan Umum
            </SectionTitle>
            <SectionSubtitle>
              Temukan jawaban atas pertanyaan paling sering ditanyakan oleh
              calon mitra dan klien kami.
            </SectionSubtitle>
          </SectionHeader>
        </BlurFade>
        <BlurFade inView inViewMargin="-100px">
          <SectionContent>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {questions.map((q, idx) => {
                return (
                  <AccordionItem
                    key={`faq-${idx}`}
                    value={`faq-${idx}`}
                    asChild
                  >
                    <Card className="p-0">
                      <CardContent className="px-0">
                        <AccordionTrigger className="text-md p-5 text-left font-medium hover:cursor-pointer hover:no-underline">
                          {q.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden px-5 text-base">
                          {q.answer}
                        </AccordionContent>
                      </CardContent>
                    </Card>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </SectionContent>
        </BlurFade>
      </SectionContainer>
    </Section>
  );
}
