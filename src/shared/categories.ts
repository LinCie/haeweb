import { StaticImageData } from "next/image";

export interface ICategories {
  name: string;
  link: string;
  image: () => Promise<{ default: StaticImageData }>;
}

export const categories: ICategories[] = [
  // Main Products
  {
    name: "Motor Stepper",
    link: "https://katalog.haebot.com/product-category/motor-stepper/",
    image: () =>
      import("@/assets/icons/motor-stepper.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Rail",
    link: "https://katalog.haebot.com/product-category/rail/",
    image: () =>
      import("@/assets/icons/rail.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Drag Chain",
    link: "https://katalog.haebot.com/product-category/drag-chain/",
    image: () =>
      import("@/assets/icons/drag-chain.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Shaft Holder",
    link: "https://katalog.haebot.com/product-category/shaft-holder/",
    image: () =>
      import("@/assets/icons/shaft-holder.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Bearing Block",
    link: "https://katalog.haebot.com/product-category/bearing-block/",
    image: () =>
      import("@/assets/icons/bearing-block.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Pulley",
    link: "https://katalog.haebot.com/product-category/pulley/",
    image: () =>
      import("@/assets/icons/pulley.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Belt",
    link: "https://katalog.haebot.com/product-category/pulley/",
    image: () =>
      import("@/assets/icons/belt.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "PSU",
    link: "https://katalog.haebot.com/product-category/psu/",
    image: () =>
      import("@/assets/icons/psu.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Laser CO2",
    link: "https://katalog.haebot.com/product-category/laser-co2/",
    image: () =>
      import("@/assets/icons/laser-co2.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Ballscrew",
    link: "https://katalog.haebot.com/product-category/ballscrew/",
    image: () =>
      import("@/assets/icons/ballscrew.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Leadscrew",
    link: "https://katalog.haebot.com/product-category/leadscrew/",
    image: () =>
      import("@/assets/icons/leadscrew.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Perkabelan",
    link: "https://katalog.haebot.com/product-category/perkabelan/",
    image: () => import("@/assets/icons/12.webp"),
  },
  {
    name: "Pertukangan",
    link: "https://katalog.haebot.com/product-category/pertukangan/",
    image: () =>
      import("@/assets/icons/pertukangan.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Spindle",
    link: "https://katalog.haebot.com/product-category/spindle/",
    image: () =>
      import("@/assets/icons/spindle.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Inverter",
    link: "https://katalog.haebot.com/product-category/inverter/",
    image: () =>
      import("@/assets/icons/inverter.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Aluminium Profile",
    link: "https://katalog.haebot.com/product-category/leadscrew/",
    image: () =>
      import("@/assets/icons/aluminium-profile.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Gantry",
    link: "https://katalog.haebot.com/product-category/gantry/",
    image: () =>
      import("@/assets/icons/gantry.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Baut",
    link: "https://katalog.haebot.com/product-category/baut/",
    image: () =>
      import("@/assets/icons/baut.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Mur",
    link: "https://katalog.haebot.com/product-category/mur/",
    image: () =>
      import("@/assets/icons/mur.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Dinamo",
    link: "https://katalog.haebot.com/product-category/dinamo/",
    image: () =>
      import("@/assets/icons/dinamo.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Driver",
    link: "https://katalog.haebot.com/product-category/driver/",
    image: () =>
      import("@/assets/icons/driver.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "GearBox",
    link: "https://katalog.haebot.com/product-category/gearbox/",
    image: () =>
      import("@/assets/icons/gearbox.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Module & Sensor",
    link: "https://katalog.haebot.com/product-category/module-&-sensor/",
    image: () =>
      import("@/assets/icons/module.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Coupler",
    link: "https://katalog.haebot.com/product-category/coupler/",
    image: () =>
      import("@/assets/icons/coupler.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
];
