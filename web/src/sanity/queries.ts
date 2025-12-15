import { defineQuery } from "groq";

export const allSchoolsQuery = defineQuery(`
  *[_type=="school"] | order(title asc) {
    title,
    "slug": slug.current,
    theme
  }
`);

export const schoolBySlugQuery = defineQuery(`
  *[_type=="school" && slug.current == $school][0] {
    title,
    "slug": slug.current,
    theme
  }
`);

export const pageBySchoolAndTypeQuery = defineQuery(`
  *[
    _type == "page" &&
    pageType == $pageType &&
    school->slug.current == $school
  ][0] {
    title,
    pageType,
    hero {
      headline,
      subheadline,
      ctaLabel,
      ctaUrl,
      image
    },
    body,
    faqItems[] {
      question,
      answer
    },
    "school": school->{
      title,
      "slug": slug.current,
      theme
    }
  }
`);
