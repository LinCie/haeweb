import React from "react";
import Link from "next/link";
import Haebot from "@/assets/haebot";
import { headerLinks } from "@/shared/links";
import { contacts, contactIcons } from "@/shared/contacts";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerNavLinks = headerLinks.filter(
    (link) => link.display !== "Products" && link.display !== "Contacts",
  );

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[--breakpoint-xl] px-6 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Haebot className="fill-background size-10" />
              <span className="text-xl font-semibold">
                PT Haebot Teknologi Indonesia
              </span>
            </div>
            <p className="text-primary-foreground/80 mt-4 max-w-xs text-sm">
              Mitra terpercaya Anda di bidang elektronik, robotika, dan solusi
              teknologi inovatif.
            </p>
            <div className="mt-6 flex gap-2">
              {contactIcons.map(({ link, icon }, index) => (
                <Link
                  key={`social-${index}`}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kunjungi halaman ${link.split(".com/")[1].split("/")[0]} kami`}
                  className="bg-secondary text-primary rounded-full p-2 transition-transform hover:scale-110"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Grid Link Navigasi */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <p className="font-semibold">Peta Situs</p>
              <ul className="mt-4 space-y-2 text-sm">
                {footerNavLinks.map((link) => (
                  <li key={link.display}>
                    <Link
                      href={link.url}
                      className="hover:text-primary-foreground/80 transition"
                    >
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold">Kategori</p>
              <ul className="mt-4 space-y-2 text-sm">
                {headerLinks
                  .find((l) => l.display === "Products")
                  ?.content?.slice(0, 5)
                  .map((category) => (
                    <li key={category.display}>
                      <Link
                        href={category.url}
                        className="hover:text-primary-foreground/80 transition"
                      >
                        {category.display}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold">Hubungi Kami</p>
              <ul className="mt-4 space-y-3 text-sm">
                {contacts.map((contact, index) => (
                  <li
                    key={`footer-contact-${index}`}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 flex-shrink-0">{contact.icon}</span>
                    <span>{contact.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Baris Copyright */}
        <div className="border-primary-foreground/20 mt-12 border-t pt-6">
          <p className="text-primary-foreground/60 text-center text-xs">
            Copyright © {year} PT HaeBot Teknologi Indonesia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
