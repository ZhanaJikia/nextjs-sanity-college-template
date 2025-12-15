import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { pageBySchoolAndTypeQuery } from "@/sanity/queries";
import type { Page } from "@/types/content";
import { RichText } from "@/components/RichText";
import { SCHOOL_THEME } from "@/theme/schoolTheme";

export default async function About({ params }: { params: { school?: string } }) {
  const page = await client.fetch<Page | null>(pageBySchoolAndTypeQuery, {
    school: params.school ?? "",
    pageType: "about",
  });

  if (!page) return notFound();

  const t = SCHOOL_THEME[page.school.theme];

  return (
    <section className={`rounded-2xl border p-6 md:p-10 ${t.card}`}>
      <h1 className="text-3xl font-semibold tracking-tight">{page.title ?? "About"}</h1>
      <div className="mt-6">
        <RichText value={page.body} />
      </div>
    </section>
  );
}


