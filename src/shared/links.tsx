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
    url: "/",
    icon: <Home />,
  },
  {
    display: "Products",
    url: "/products",
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
    url: "/about",
    icon: <Info />,
  },
  {
    display: "Contacts",
    url: "/contacts",
    icon: <Phone />,
  },
];
