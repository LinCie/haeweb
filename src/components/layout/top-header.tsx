import Link from "next/link";
import Haebot from "@/assets/haebot";
import { Phone } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="z-20 h-18 w-full border-b">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Haebot className="fill-primary size-10" />
          <h1 className="text-secondary-foreground hidden text-lg font-semibold tracking-tight sm:block">
            PT Haebot Teknologi Indonesia
          </h1>
        </Link>

        {/* Right Side: Clickable Contact Info */}
        <a
          href="tel:+6285246428746" // Use the international format for the tel link
          className="group hover:bg-muted flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors"
        >
          <Phone className="text-primary size-4 transition-transform group-hover:scale-110" />
          <div className="flex flex-col items-start text-sm">
            <span className="text-primary font-medium">Konsultasi Gratis</span>
            <span className="text-muted-foreground">(+62) 852-4642-8746</span>
          </div>
        </a>
      </div>
    </div>
  );
}
