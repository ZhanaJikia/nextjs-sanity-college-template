import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { pageBySchoolAndTypeQuery } from "@/sanity/queries";
import type { Page } from "@/types/content";
import { SCHOOL_THEME } from "@/theme/schoolTheme";

export default async function SchoolHome({ params }: { params: { school?: string } }) {
  const page = await client.fetch<Page | null>(pageBySchoolAndTypeQuery, {
    school: params.school ?? "",
    pageType: "home",
  });

  if (!page) return notFound();

  const t = SCHOOL_THEME[page.school.theme];

  return (
    <section className={`rounded-2xl border p-6 ${t.card}`}>
      <h1 className="text-2xl font-semibold tracking-tight">
        {page.hero?.headline ?? `${page.school.title} Home`}
      </h1>

      {page.hero?.subheadline ? (
        <p className="mt-2 text-black/70">{page.hero.subheadline}</p>
      ) : null}

      {page.hero?.ctaLabel && page.hero?.ctaUrl ? (
        <a
          href={page.hero.ctaUrl}
          className={`mt-6 inline-flex rounded-xl px-4 py-2 text-sm font-medium ${t.button}`}
        >
          {page.hero.ctaLabel}
        </a>
      ) : null}
    </section>
  );
}


