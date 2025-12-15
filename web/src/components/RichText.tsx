import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableValue } from "@/types/content";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-8 text-xl font-semibold tracking-tight">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-7 text-black/80">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-black/80">{children}</li>,
    number: ({ children }) => <li className="text-black/80">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      return (
        <a href={href} className="underline underline-offset-4 hover:opacity-80">
          {children}
        </a>
      );
    },
  },
};

export function RichText({ value }: { value: PortableValue | undefined }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
