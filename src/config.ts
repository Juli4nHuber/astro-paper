import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  author: "Julián Huber",
  desc: "Un curriculum vitae vritual simple, responsivo y optimizado para SEO",
  title: "AstroPaper",
  lightAndDarkMode: true,
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Sigueme en Github`,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Seguime en Instagram`,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `Seguime en LinkedIn`,
  },
  {
    name: "Mail",
    href: "mailto:juliangabrielhr@gmail.com",
    linkTitle: `Mandame un email`,
  }
];
