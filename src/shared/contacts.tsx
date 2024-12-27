import { MapPin, Phone } from "lucide-react";
import { SiFacebook, SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
export interface IContactIcon {
  link: string;
  icon: React.ReactElement;
}

export interface ContactProps {
  icon: React.ReactElement;
  text: string;
}

export const contacts: ContactProps[] = [
  {
    text: "Jl. Kolonel Sugiono No.22, Gedog, Kec. Sananwetan, Kota Blitar, Jawa Timur 66137",
    icon: <MapPin className="size-5" aria-label="Lokasi" />,
  },
  {
    text: "(+62) 852-4642-8746",
    icon: <Phone className="size-5" aria-label="Nomor" />,
  },
];

export const contactIcons: IContactIcon[] = [
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
    icon: <SiYoutube className="size-5" aria-label="Youtube" />,
  },
];
