import { PortableText } from "@portabletext/react";

export type PortableValue = Parameters<typeof PortableText>[0]["value"];

export type BrandColors = {
  primary: string;
  secondary: string;
  background: string;
};

export type School = {
  title: string;
  slug: string;
  colors: BrandColors;
};

export type PageType = "home" | "about" | "faq";

// Minimal shape that Sanity image builder can work with
export type SanityImage = {
  asset: { _ref: string; _type: "reference" };
};

export type Hero = {
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  image?: SanityImage;
};

export type FaqItem = {
  question: string;
  answer: PortableValue;
};

export type Page = {
  title?: string;
  pageType: PageType;
  hero?: Hero;
  body?: PortableValue;
  faqItems?: FaqItem[];
  school: School;
};
