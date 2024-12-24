import React from "react";
import {
  CardSection,
  CardSectionContainer,
  CardSectionContent,
  CardSectionTitle,
} from "@/components/ui/card-section";

import { MapPin, Mail, Phone } from "lucide-react";
import {
  SiWhatsapp,
  SiFacebook,
  SiTiktok,
  SiInstagram,
  SiBukalapak,
  SiShopee,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";

function Tokopedia({ ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill="#000000"
        fillRule="evenodd"
        d="M96 28c-9.504 0-17.78 5.307-22.008 13.127C82.736 42.123 88.89 44 96 47.332c7.11-3.332 13.264-5.209 22.008-6.205C113.781 33.31 105.506 28 96 28Zm0-12c-15.973 0-29.568 10.117-34.754 24.28C52.932 40 42.462 40 28.53 40H28a6 6 0 0 0-6 6v124a6 6 0 0 0 6 6h92c27.614 0 50-22.386 50-50V46a6 6 0 0 0-6-6h-.531c-13.931 0-24.401 0-32.715.28C125.566 26.113 111.97 16 96 16ZM34 52.001V164h86c20.987 0 38-17.013 38-38V52.001c-18.502.009-29.622.098-37.872.966-8.692.915-13.999 2.677-21.445 6.4a6 6 0 0 1-5.366 0c-7.446-3.723-12.753-5.485-21.445-6.4-8.25-.868-19.37-.957-37.872-.966ZM50 96c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Zm18-30c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 1.126 0 2.238-.062 3.332-.183l20.425 20.426a6 6 0 0 0 8.486 0l20.425-20.426c1.094.121 2.206.183 3.332.183 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-12.764 0-23.666 7.971-28 19.207C91.666 73.971 80.764 66 68 66Zm40.082 55.433A30.1 30.1 0 0 1 96 106.793a30.101 30.101 0 0 1-12.082 14.64L96 133.515l12.082-12.082ZM124 78c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18ZM76 96a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm48 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
interface IContactIcon {
  link: string;
  icon: React.ReactElement;
}

interface ContactProps {
  icon: React.ReactElement;
  text: string;
}

function Contact({ icon, text }: ContactProps) {
  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
}

export default function ContactSection() {
  const contacts: ContactProps[] = [
    {
      text: "Jl. Kolonel Sugiono No.21, Gedog, Kec. Sananwetan, Kota Blitar, Jawa Timur 66137",
      icon: <MapPin className="size-5" aria-label="Lokasi" />,
    },
    {
      text: "+62xxxxxxxxxxx",
      icon: <Phone className="size-5" aria-label="Nomor" />,
    },
    {
      text: "example@email.com",
      icon: <Mail className="size-5" aria-label="Email" />,
    },
  ];

  const contactIcons: IContactIcon[] = [
    {
      link: "https://maps.app.goo.gl/G9UGFVwkpnwE6FJF6",
      icon: <MapPin className="size-5" aria-label="Lokasi" />,
    },
    {
      link: "tel:+62xxxxxxxxxxx",
      icon: <Phone className="size-5" aria-label="Nomor" />,
    },
    {
      link: "mailto:example@email.com",
      icon: <Mail className="size-5" aria-label="Email" />,
    },
    {
      link: "https://wa.me/62xxxxxxxxxxx",
      icon: <SiWhatsapp className="size-5" aria-label="WhatsApp" />,
    },
    {
      link: "https://example.com",
      icon: <SiFacebook className="size-5" aria-label="Facebook" />,
    },
    {
      link: "https://example.com",
      icon: <SiTiktok className="size-5" aria-label="TikTok" />,
    },
    {
      link: "https://example.com",
      icon: <SiInstagram className="size-5" aria-label="Instagram" />,
    },
    {
      link: "https://example.com",
      icon: <Tokopedia className="size-5" aria-label="Tokopedia" />,
    },
    {
      link: "https://example.com",
      icon: <SiShopee className="size-5" aria-label="Shopee" />,
    },
    {
      link: "https://example.com",
      icon: <SiBukalapak className="size-5" aria-label="Bukalapak" />,
    },
  ];

  return (
    <CardSection id="contact-section" aria-labelledby="contact-section-title">
      <CardSectionContainer>
        <CardSectionContent>
          <div className="flex flex-col gap-4 pt-12 lg:flex-row">
            <div className="flex-1">
              <BlurFade inView inViewMargin="-100px">
                <CardSectionTitle className="mb-2 md:mb-3 lg:mb-4">
                  Hubungi Kami
                </CardSectionTitle>
              </BlurFade>
              <BlurFade inView inViewMargin="-100px">
                <div className="mb-2 space-y-3 md:mb-3 lg:mb-4">
                  {contacts.map((contact, idx) => {
                    return <Contact key={"contact-" + idx} {...contact} />;
                  })}
                </div>
              </BlurFade>
              <BlurFade inView inViewMargin="-100px">
                <div className="flex flex-wrap gap-2">
                  {contactIcons.map((contact, idx) => {
                    return (
                      <Button
                        key={"contact-icon-" + idx}
                        className="h-auto px-4 py-4"
                        variant="secondary"
                        asChild
                      >
                        <Link target="_blank" href={contact.link}>
                          {contact.icon}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </BlurFade>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.132331257756!2d112.18985307480989!3d-8.087984680871955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ecf5483b209f%3A0x1ef5e4930f3a05bc!2sHAEBOT%20-%20Electronics%20Bot%20Store%20Arduino%20Blitar!5e0!3m2!1sen!2sid!4v1734974241291!5m2!1sen!2sid"
                className="h-[400px] w-full border-none lg:w-[500px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </CardSectionContent>
      </CardSectionContainer>
    </CardSection>
  );
}
