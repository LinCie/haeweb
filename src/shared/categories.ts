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
    link: "motor-stepper",
    image: () =>
      import("@/assets/icons/motor-stepper.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Rail",
    link: "rail",
    image: () =>
      import("@/assets/icons/rail.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Drag Chain",
    link: "drag-chain",
    image: () =>
      import("@/assets/icons/drag-chain.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Shaft Holder",
    link: "shaft-holder",
    image: () =>
      import("@/assets/icons/shaft-holder.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Bearing Block",
    link: "bearing-block",
    image: () =>
      import("@/assets/icons/bearing-block.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Pulley",
    link: "pulley",
    image: () =>
      import("@/assets/icons/pulley.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Belt",
    link: "belt",
    image: () =>
      import("@/assets/icons/belt.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "PSU",
    link: "psu",
    image: () =>
      import("@/assets/icons/psu.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Laser CO2",
    link: "laser-co2",
    image: () =>
      import("@/assets/icons/laser-co2.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Ballscrew",
    link: "ballscrew",
    image: () =>
      import("@/assets/icons/ballscrew.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Leadscrew",
    link: "leadscrew",
    image: () =>
      import("@/assets/icons/leadscrew.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Perkabelan",
    link: "perkabelan",
    image: () => import("@/assets/icons/12.webp"),
  },
  {
    name: "Pertukangan",
    link: "pertukangan",
    image: () =>
      import("@/assets/icons/pertukangan.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Spindle",
    link: "spindle",
    image: () =>
      import("@/assets/icons/spindle.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Inverter",
    link: "inverter",
    image: () =>
      import("@/assets/icons/inverter.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Aluminium Profile",
    link: "aluminium-profile",
    image: () =>
      import("@/assets/icons/aluminium-profile.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Gantry",
    link: "gantry",
    image: () =>
      import("@/assets/icons/gantry.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Baut",
    link: "baut",
    image: () =>
      import("@/assets/icons/baut.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Mur",
    link: "mur",
    image: () =>
      import("@/assets/icons/mur.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Dinamo",
    link: "dinamo",
    image: () =>
      import("@/assets/icons/dinamo.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Driver",
    link: "driver",
    image: () =>
      import("@/assets/icons/driver.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "GearBox",
    link: "gearbox",
    image: () =>
      import("@/assets/icons/gearbox.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Module & Sensor",
    link: "module-sensor",
    image: () =>
      import("@/assets/icons/module.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
  {
    name: "Coupler",
    link: "coupler",
    image: () =>
      import("@/assets/icons/coupler.webp").catch(
        () => import("@/assets/icons/12.webp"),
      ),
  },
];
