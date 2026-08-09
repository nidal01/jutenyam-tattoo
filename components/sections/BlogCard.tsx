import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { getBlogReadingTime } from "@/content/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const minutes = getBlogReadingTime(post);

  return (
    <article className="flex h-full flex-col border border-border bg-surface/40 p-6">
      <p className="text-xs tracking-[0.16em] text-accent uppercase">
        {minutes} dk okuma
      </p>
      <h3 className="mt-3 font-serif text-2xl text-text">
        <Link href={`/bilgi-rehberi/${post.slug}`} className="hover:text-accent">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm text-muted">{post.description}</p>
      <Link
        href={`/bilgi-rehberi/${post.slug}`}
        className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent"
      >
        Yazıyı oku →
      </Link>
    </article>
  );
}
