import Haebot from "@/assets/haebot";

export default function TopHeader() {
  return (
    <div className="z-20 flex h-20 items-center justify-center bg-background px-6 md:px-12">
      <div className="flex items-center justify-center">
        <Haebot className="size-20 fill-primary" />
        <h1 className="max-w-40 text-base font-medium leading-3 tracking-tight md:max-w-xs md:text-lg lg:text-xl">
          PT Haebot Teknologi Indonesia
        </h1>
      </div>
      <div className="flex flex-1 flex-col items-end justify-center text-sm md:text-base">
        <div className="font-medium text-primary">Konsultasi Gratis</div>
        <div>(+62) 852-4642-8746</div>
      </div>
    </div>
  );
}
