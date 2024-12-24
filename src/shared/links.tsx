import React from "react";
import { Home, ShoppingBag, Info, Phone } from "lucide-react";
import { categories } from "@/shared/categories";

export interface IHeaderLink {
  display: string;
  url: string;
  icon: React.ReactElement;
  content?: {
    display: string;
    url: string;
  }[];
}

export const headerLinks: IHeaderLink[] = [
  {
    display: "Home",
    url: "#hero-section",
    icon: <Home />,
  },
  {
    display: "Products",
    url: "#product-section",
    icon: <ShoppingBag />,
    content: categories.map((category) => {
      return {
        display: category.name,
        url: category.link,
      };
    }),
  },
  {
    display: "About",
    url: "#about-section",
    icon: <Info />,
  },
  {
    display: "Contacts",
    url: "#contact-section",
    icon: <Phone />,
  },
];
