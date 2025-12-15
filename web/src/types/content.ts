import { PortableText } from "@portabletext/react";

export type PortableValue = Parameters<typeof PortableText>[0]["value"];

export type Theme = "navy" | "emerald" | "crimson" | "violet";

export type School = {
  title: string;
  slug: string;
  theme: Theme;
};

export type PageType = "home" | "about" | "faq";

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
