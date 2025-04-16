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
    icon: <MapPin className="size-4" aria-label="Lokasi" />,
  },
  {
    text: "(+62) 852-4642-8746",
    icon: <Phone className="size-4" aria-label="Nomor" />,
  },
];

export const contactIcons: IContactIcon[] = [
  {
    link: "https://www.facebook.com/people/Haebot-Teknologi/61561255135421/",
    icon: <SiFacebook className="size-4" aria-label="Facebook" />,
  },
  {
    link: "https://www.tiktok.com/@haebotstore",
    icon: <SiTiktok className="size-4" aria-label="TikTok" />,
  },
  {
    link: "https://www.instagram.com/haebot_tech/",
    icon: <SiInstagram className="size-4" aria-label="Instagram" />,
  },
  {
    link: "https://www.youtube.com/@haebot",
    icon: <SiYoutube className="size-4" aria-label="Youtube" />,
  },
];
