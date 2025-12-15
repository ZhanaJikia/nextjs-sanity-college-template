import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { pageBySchoolAndTypeQuery } from "@/sanity/queries";
import type { Page } from "@/types/content";
import { RichText } from "@/components/RichText";
import { SCHOOL_THEME } from "@/theme/schoolTheme";

export default async function FAQ({ params }: { params: { school?: string } }) {
  const page = await client.fetch<Page | null>(pageBySchoolAndTypeQuery, {
    school: params.school ?? "",
    pageType: "faq",
  });

  if (!page) return notFound();

  const t = SCHOOL_THEME[page.school.theme];

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{page.title ?? "FAQ"}</h1>
        <p className="mt-2 text-black/70">Common questions (Sanity-driven).</p>
      </div>

      <div className="space-y-4">
        {(page.faqItems ?? []).map((item, idx) => (
          <details key={idx} className={`rounded-2xl border p-5 ${t.card}`}>
            <summary className="cursor-pointer text-base font-medium">
              {item.question}
            </summary>
            <div className="mt-3">
              <RichText value={item.answer} />
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}


