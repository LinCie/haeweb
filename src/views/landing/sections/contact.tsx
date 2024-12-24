import React from "react";
import Link from "next/link";
import {
  CardSection,
  CardSectionContainer,
  CardSectionContent,
  CardSectionTitle,
} from "@/components/ui/card-section";

import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { contactIcons, ContactProps, contacts } from "@/shared/contacts";
function Contact({ icon, text }: ContactProps) {
  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
}

export default function ContactSection() {

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
