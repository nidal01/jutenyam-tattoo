import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllBlogPosts, getBlogPostBySlug, getBlogReadingTime } from "@/content/blog";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { articleJsonLd } from "@/lib/seo/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: `${post.title} | Jutenyam`,
    description: post.description,
    path: `/bilgi-rehberi/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const minutes = getBlogReadingTime(post);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path: `/bilgi-rehberi/${post.slug}`,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          authorName: post.author,
        })}
      />
      <PageHero
        title={post.title}
        description={post.description}
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Bilgi Rehberi", path: "/bilgi-rehberi" },
          { name: post.title, path: `/bilgi-rehberi/${post.slug}` },
        ]}
      />
      <article className="py-12">
        <div className="container-page max-w-3xl">
          <p className="text-sm text-muted">
            {post.author} · {minutes} dk okuma · Güncelleme: {post.updatedAt}
          </p>
          <div className="mt-8 space-y-5 text-muted">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8">
            <Link href={post.serviceHref} className="font-semibold text-accent">
              {post.serviceLabel} sayfasına git →
            </Link>
          </p>
          <div className="mt-10 flex flex-wrap gap-3 border border-border bg-surface/40 p-5">
            <WhatsAppButton
              ctaLocation="blog_cta"
              sourcePage={`/bilgi-rehberi/${post.slug}`}
            />
            <PhoneButton
              ctaLocation="blog_cta"
              sourcePage={`/bilgi-rehberi/${post.slug}`}
            />
          </div>
        </div>
      </article>
    </>
  );
}
