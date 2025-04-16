"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Phone } from "lucide-react";

import { headerLinks } from "@/shared/links";
import haebotLogo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { contactIcons } from "@/shared/contacts";
import { ScrollArea } from "../ui/scroll-area";

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a">) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          href={href || "/"}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });
  return (
    <header
      className={cn(
        "bg-background/95 sticky top-0 z-50 w-full shadow-sm backdrop-blur-sm transition-all",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-(--breakpoint-2xl) items-center justify-center gap-1 px-3 py-4 transition-all md:gap-5",
          isScrolled && "md:px-4 md:py-5",
        )}
      >
        <SidebarTrigger className="size-8 md:hidden" />
        <Image
          src={haebotLogo}
          alt="HaeBot"
          loading="eager"
          decoding="async"
          className="h-8 w-auto select-none"
        />
        <div className="flex-1">
          <NavigationMenu>
            <NavigationMenuList className="hidden items-center justify-start md:flex">
              {headerLinks.map((headerLink) => {
                const isCurrent = pathname === headerLink.url;

                if (headerLink.content !== undefined) {
                  return (
                    <NavigationMenuItem key={headerLink.display + "-header"}>
                      <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground/70 focus:text-foreground/70 bg-inherit">
                        {headerLink.display}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ScrollArea className="flex max-h-96 w-[250px] flex-col gap-3 p-4">
                          <ListItem
                            title="All Categories"
                            href="https://katalog.haebot.com/"
                          >
                            {/* {content.description} */}
                          </ListItem>
                          {headerLink.content.map((content) => (
                            <ListItem
                              key={content.display}
                              title={content.display}
                              href={content.url}
                            >
                              {/* {content.description} */}
                            </ListItem>
                          ))}
                        </ScrollArea>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={headerLink.display + "-header"}>
                    <NavigationMenuLink
                      aria-current={isCurrent ? "page" : "false"}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-foreground/80 hover:text-foreground/70 focus:text-foreground/70 bg-inherit",
                        isCurrent &&
                          "text-primary hover:text-primary/70 focus:text-primary/70",
                      )}
                      asChild
                    >
                      <Link href={headerLink.url}>{headerLink.display}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden gap-4 md:flex">
          {contactIcons.map((contact, idx) => {
            return (
              <Button
                key={contact.link + idx + "-header"}
                className="h-auto border-none bg-transparent px-4 py-4 outline-hidden"
                variant="outline"
                asChild
              >
                <Link href={contact.link}>{contact.icon}</Link>
              </Button>
            );
          })}
        </div>
        <div>
          <Button
            variant="expandIcon"
            Icon={Phone}
            iconPlacement="right"
            className="from-primary bg-linear-to-r to-[#126BC1] [&_svg]:size-4"
            asChild
          >
            <Link href="#cta-section" target="_self">
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
