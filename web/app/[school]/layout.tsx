import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { allSchoolsQuery, schoolBySlugQuery } from "@/sanity/queries";
import type { School } from "@/types/content";
import { SCHOOL_THEME } from "@/theme/schoolTheme";

export async function generateStaticParams() {
  const schools = await client.fetch<School[]>(allSchoolsQuery);
  return schools.map((s) => ({ school: s.slug }));
}

export default async function SchoolLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { school?: string };
}) {
  const schoolSlug = params.school ?? "";
  const school = await client.fetch<School | null>(schoolBySlugQuery, { school: schoolSlug });
  if (!school) return notFound();

  const t = SCHOOL_THEME[school.theme];

  return (
    <div className={`min-h-screen ${t.pageBg}`}>
      <header className="border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href={`/${school.slug}`} className="font-semibold tracking-tight">
            {school.title}
          </Link>

          <nav className="flex gap-4 text-sm">
            <Link className={t.link} href={`/${school.slug}`}>Home</Link>
            <Link className={t.link} href={`/${school.slug}/about`}>About</Link>
            <Link className={t.link} href={`/${school.slug}/faq`}>FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
    </div>
  );
}


