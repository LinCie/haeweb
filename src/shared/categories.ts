import { StaticImageData } from "next/image";

export interface ICategories {
  name: string;
  link: string;
  image: () => Promise<{ default: StaticImageData }>;
  consideration?: string;
}

export const categories: ICategories[] = [
  {
    name: "Motor Stepper",
    link: "https://katalog.haebot.com/product-category/motor-stepper/",
    image: () => import("@/assets/icons/motor-stepper.webp"),
    consideration:
      "Pastikan driver stepper sesuai dengan spesifikasi arus (Ampere) motor untuk menghindari panas berlebih atau performa kurang.",
  },
  {
    name: "Rail",
    link: "https://katalog.haebot.com/product-category/rail/",
    image: () => import("@/assets/icons/rail.webp"),
    consideration:
      "Presisi pemasangan dan lubrikasi rutin sangat penting untuk mencegah macet dan menjaga kelancaran gerak.",
  },
  {
    name: "Drag Chain",
    link: "https://katalog.haebot.com/product-category/drag-chain/",
    image: () => import("@/assets/icons/drag-chain.webp"),
    consideration:
      "Pilih ukuran yang tepat dan jangan isi lebih dari 60% kapasitas untuk pergerakan kabel yang aman dan awet.",
  },
  {
    name: "Shaft Holder",
    link: "https://katalog.haebot.com/product-category/shaft-holder/",
    image: () => import("@/assets/icons/shaft-holder.webp"),
    consideration:
      "Gunakan pada permukaan yang rata dan kencangkan baut secara merata untuk menghindari getaran dan misalignment.",
  },
  {
    name: "Bearing Block",
    link: "https://katalog.haebot.com/product-category/bearing-block/",
    image: () => import("@/assets/icons/bearing-block.webp"),
    consideration:
      "Membutuhkan pelumasan berkala. Debu dan kotoran dapat memperpendek umur bearing secara signifikan.",
  },
  {
    name: "Pulley",
    link: "https://katalog.haebot.com/product-category/pulley/",
    image: () => import("@/assets/icons/pulley.webp"),
    consideration:
      "Pastikan ukuran (jumlah gigi dan bore) sesuai dengan belt dan shaft motor untuk transmisi daya yang efisien.",
  },
  {
    name: "Belt",
    link: "https://katalog.haebot.com/product-category/pulley/",
    image: () => import("@/assets/icons/belt.webp"),
    consideration:
      "Tegangan belt harus pas; terlalu kencang dapat merusak bearing motor, terlalu kendor menyebabkan slip.",
  },
  {
    name: "PSU",
    link: "https://katalog.haebot.com/product-category/psu/",
    image: () => import("@/assets/icons/psu.webp"),
    consideration:
      "Pilih PSU dengan daya (Watt) setidaknya 20-30% lebih tinggi dari total kebutuhan sistem untuk stabilitas.",
  },
  {
    name: "Laser CO2",
    link: "https://katalog.haebot.com/product-category/laser-co2/",
    image: () => import("@/assets/icons/laser-co2.webp"),
    consideration:
      "Risiko tinggi! Membutuhkan pendingin air (water cooling) yang aktif dan kacamata pelindung khusus saat operasional.",
  },
  {
    name: "Ballscrew",
    link: "https://katalog.haebot.com/product-category/ballscrew/",
    image: () => import("@/assets/icons/ballscrew.webp"),
    consideration:
      "Sangat presisi namun rentan terhadap debu. Gunakan penutup atau bellow untuk melindunginya.",
  },
  {
    name: "Leadscrew",
    link: "https://katalog.haebot.com/product-category/leadscrew/",
    image: () => import("@/assets/icons/leadscrew.webp"),
    consideration:
      "Ekonomis namun memiliki backlash. Pertimbangkan penggunaan mur anti-backlash untuk akurasi lebih tinggi.",
  },
  {
    name: "Perkabelan",
    link: "https://katalog.haebot.com/product-category/perkabelan/",
    image: () => import("@/assets/icons/12.webp"),
    consideration:
      "Gunakan kabel shielded (terutama untuk motor) untuk mengurangi interferensi elektromagnetik (noise) pada sistem.",
  },
  {
    name: "Pertukangan",
    link: "https://katalog.haebot.com/product-category/pertukangan/",
    image: () => import("@/assets/icons/pertukangan.webp"),
    consideration:
      "Selalu gunakan alat pelindung diri (APD) yang sesuai, seperti kacamata pengaman dan sarung tangan.",
  },
  {
    name: "Spindle",
    link: "https://katalog.haebot.com/product-category/spindle/",
    image: () => import("@/assets/icons/spindle.webp"),
    consideration:
      "Spindle berpendingin udara (air-cooled) lebih berisik, sementara water-cooled butuh sistem pompa air eksternal.",
  },
  {
    name: "Inverter",
    link: "https://katalog.haebot.com/product-category/inverter/",
    image: () => import("@/assets/icons/inverter.webp"),
    consideration:
      "Pengaturan parameter (frekuensi, voltase) harus sesuai dengan spesifikasi spindle untuk mencegah kerusakan.",
  },
  {
    name: "Aluminium Profile",
    link: "https://katalog.haebot.com/product-category/aluminium-profile/",
    image: () => import("@/assets/icons/aluminium-profile.webp"),
    consideration:
      "Tingkat kekakuan frame sangat bergantung pada jenis profil (e.g., 2020 vs 4040) dan metode penyambungan.",
  },
  {
    name: "Gantry",
    link: "https://katalog.haebot.com/product-category/gantry/",
    image: () => import("@/assets/icons/gantry.webp"),
    consideration:
      "Kekakuan gantry adalah kunci utama untuk akurasi mesin CNC. Pastikan semua sambungan kokoh dan siku.",
  },
  {
    name: "Baut",
    link: "https://katalog.haebot.com/product-category/baut/",
    image: () => import("@/assets/icons/baut.webp"),
    consideration:
      "Gunakan grade dan panjang baut yang tepat. Baut yang terlalu panjang atau pendek dapat membahayakan struktur.",
  },
  {
    name: "Mur",
    link: "https://katalog.haebot.com/product-category/mur/",
    image: () => import("@/assets/icons/mur.webp"),
    consideration:
      "T-nut untuk aluminium profile, mur pengunci (nyloc nut) untuk bagian bergetar, pilih sesuai kebutuhan.",
  },
  {
    name: "Dinamo",
    link: "https://katalog.haebot.com/product-category/dinamo/",
    image: () => import("@/assets/icons/dinamo.webp"),
    consideration:
      "Perhatikan Voltase dan RPM. Dinamo DC umumnya membutuhkan driver atau modul kontrol kecepatan.",
  },
  {
    name: "Driver",
    link: "https://katalog.haebot.com/product-category/driver/",
    image: () => import("@/assets/icons/driver.webp"),
    consideration:
      "Sediakan ventilasi yang baik karena driver motor bisa menjadi sangat panas saat beroperasi pada beban puncak.",
  },
  {
    name: "GearBox",
    link: "https://katalog.haebot.com/product-category/gearbox/",
    image: () => import("@/assets/icons/gearbox.webp"),
    consideration:
      "Gearbox meningkatkan torsi namun mengurangi kecepatan. Pilih rasio yang paling sesuai dengan aplikasi Anda.",
  },
  {
    name: "Module & Sensor",
    link: "https://katalog.haebot.com/product-category/module-&-sensor/",
    image: () => import("@/assets/icons/module.webp"),
    consideration:
      "Sangat sensitif terhadap polaritas tegangan. Pastikan koneksi VCC dan GND tidak terbalik untuk menghindari kerusakan.",
  },
  {
    name: "Coupler",
    link: "https://katalog.haebot.com/product-category/coupler/",
    image: () => import("@/assets/icons/coupler.webp"),
    consideration:
      "Coupler fleksibel dapat mentolerir sedikit misalignment, sementara coupler rigid menuntut presisi pemasangan yang tinggi.",
  },
];
