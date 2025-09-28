// src/mdx-components.tsx
import * as React from "react";
import Link from "next/link";
import SeoBlogJsonLd from "@/components/SeoBlogJsonLd";
import MDXContent from "@/components/MDXContent";
import { Callout } from "@/components/Callout";

// --- Affiliate-safe link usable directly in MDX ---
function ALink({
  href,
  children,
  className,
}: React.PropsWithChildren<{ href: string; className?: string }>) {
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}


// --- Typographic rhythm & table helpers ---
function TableWrapper(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="my-6 w-full overflow-x-auto rounded-xl border border-neutral-800" {...props} />;
}
function Table(props: React.TableHTMLAttributes<HTMLTableElement>) {
  return <table className="w-full text-left text-sm" {...props} />;
}
function Th(props: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className="border-b border-neutral-800 px-3 py-2 font-semibold" {...props} />;
}
function Td(props: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className="border-b border-neutral-900 px-3 py-2 align-top text-neutral-300" {...props} />;
}
function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="mt-10 text-2xl font-semibold" {...props} />;
}
function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="mt-8 text-xl font-semibold" {...props} />;
}
function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className="mt-6 text-lg font-semibold" {...props} />;
}
function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="my-4 leading-relaxed text-neutral-300" {...props} />;
}
function Ul(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className="my-4 ml-5 list-disc space-y-2 text-neutral-300" {...props} />;
}
function Ol(props: React.HTMLAttributes<HTMLOListElement>) {
  return <ol className="my-4 ml-5 list-decimal space-y-2 text-neutral-300" {...props} />;
}
function Li(props: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className="[&>p]:my-0" {...props} />;
}
function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return <pre className="my-6 overflow-x-auto rounded-xl border border-neutral-800 p-4" {...props} />;
}
function Code(props: React.HTMLAttributes<HTMLElement>) {
  return <code className="rounded bg-neutral-900 px-1.5 py-0.5 text-neutral-200" {...props} />;
}
function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="my-6 rounded-xl border border-neutral-800" {...props} />;
}

// Provide components to MDX (wired via providerImportSource: '@mdx-components')
export function useMDXComponents(components: Record<string, React.ComponentType<any>>) {
  return {
    // HTML element overrides
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    pre: Pre,
    code: Code,
    img: Img,
    table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
      <TableWrapper>
        <Table {...props} />
      </TableWrapper>
    ),
    th: Th,
    td: Td,

    // Wrapper for all MDX content
    wrapper: MDXContent,

    // Custom tags available in any MDX without importing
    ALink,
    Callout,
    SeoBlogJsonLd,

    ...components,
  };
}