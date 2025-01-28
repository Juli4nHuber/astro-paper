import type socialIcons from "@assets/socialIcons";

export type Site = {
  author: string;
  desc: string;
  title: string;
  lightAndDarkMode: boolean;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  linkTitle: string;
}[];
