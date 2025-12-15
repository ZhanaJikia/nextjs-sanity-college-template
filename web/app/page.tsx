import Link from "next/link";
import { client } from "@/sanity/client";
import { allSchoolsQuery } from "@/sanity/queries";
import type { School } from "@/types/content";

export default async function Home() {
  const schools = await client.fetch<School[]>(allSchoolsQuery);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">College templates</h1>
      <p className="mt-2 text-black/70">Pick a school to view its branded site.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {schools.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-sm"
          >
            <div className="text-lg font-medium">{s.title}</div>
            <div className="mt-1 text-sm text-black/60">/{s.slug}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
