import React from "react";
import Link from "next/link";
import {
  CardSectionContent,
  CardSectionTitle,
} from "@/components/ui/card-section";

import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { contactIcons, ContactProps, contacts } from "@/shared/contacts";
import Image from "next/image";
import tokopedia from "@/assets/toko/tokopedia.webp";
import shopee from "@/assets/toko/shopee.webp";
import Haebot from "@/assets/haebot";

function ContactInfo({ icon, text }: ContactProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">{icon}</div>
      <p className="text-base">{text}</p>
    </div>
  );
}

export default function ContactSection() {
  const marketplaces = [
    {
      href: "https://www.tokopedia.com/electronicsbot",
      src: tokopedia,
      alt: "Tokopedia",
    },
    { href: "https://shopee.co.id/farhan.id", src: shopee, alt: "Shopee" },
  ];

  return (
    <section
      className="bg-primary text-primary-foreground"
      id="contact-section"
      aria-labelledby="contact-section-title"
    >
      <div className="mx-auto max-w-[--breakpoint-xl] px-6 py-16 sm:px-8 lg:py-24">
        <CardSectionContent>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <BlurFade inView inViewMargin="-100px">
                <div className="flex items-center gap-4">
                  <Haebot className="fill-background size-16 flex-shrink-0 md:size-20" />
                  <div>
                    <CardSectionTitle
                      id="contact-section-title"
                      className="text-primary-foreground mb-0"
                    >
                      Hubungi Kami
                    </CardSectionTitle>
                    <p className="mt-1 hidden text-base md:block">
                      Terhubung dengan kami untuk informasi dan dukungan.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <div className="space-y-3">
                <BlurFade inView inViewMargin="-100px" delay={0.15}>
                  <div className="space-y-4">
                    {contacts.map((contact, idx) => (
                      <ContactInfo key={"contact-" + idx} {...contact} />
                    ))}
                  </div>
                </BlurFade>

                <div className="space-y-4">
                  <BlurFade inView inViewMargin="-100px" delay={0.25}>
                    <h3 className="text-lg font-semibold">
                      Ikuti Perjalanan Kami
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {contactIcons.map((contact, idx) => (
                        <Button
                          key={"contact-icon-" + idx}
                          className="h-auto p-3 [&_svg]:size-5"
                          variant="secondary"
                          asChild
                        >
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href={contact.link}
                            aria-label={contact.link}
                          >
                            {contact.icon}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </BlurFade>
                </div>

                <div className="space-y-4">
                  <BlurFade inView inViewMargin="-100px" delay={0.35}>
                    <h3 className="text-lg font-semibold">Tersedia di</h3>
                    <div className="flex flex-wrap gap-2">
                      {marketplaces.map((market) => (
                        <Button
                          key={market.alt}
                          className="bg-secondary h-auto overflow-hidden rounded-md p-3"
                          variant="secondary"
                          asChild
                        >
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href={market.href}
                          >
                            <Image
                              src={market.src}
                              alt={market.alt}
                              loading="lazy"
                              decoding="async"
                              className="size-6 object-contain"
                            />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </BlurFade>
                </div>
              </div>
            </div>
            <BlurFade
              inView
              inViewMargin="-100px"
              className="h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.132331257756!2d112.18985307480989!3d-8.087984680871955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ecf5483b209f%3A0x1ef5e4930f3a05bc!2sHAEBOT%20-%20Electronics%20Bot%20Store%20Arduino%20Blitar!5e0!3m2!1sid!2sid!4v1734974241291!5m2!1sid!2sid"
                className="h-full w-full rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Google Maps untuk PT Haebot Teknologi Indonesia"
              ></iframe>
            </BlurFade>
          </div>
        </CardSectionContent>
      </div>
    </section>
  );
}
