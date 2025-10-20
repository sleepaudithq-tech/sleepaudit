// src/components/MDXContent.tsx
import PostAutoFooter from "@/components/posts/PostAutoFooter";

export default function MDXContent({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-24">
      {children}
      {/* Auto-injected footer for blog posts */}
      <PostAutoFooter />
    </article>
  );
}
