import { PageHero } from "@/components/sections/PageHero";
import { BlogCard } from "@/components/sections/BlogCard";
import { getAllBlogPosts } from "@/content/blog";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Bilgi Rehberi | Jutenyam Tattoo & Piercing",
  description: "Dövme, piercing ve kalıcı makyaj hakkında Tokat odaklı bilgilendirme yazıları.",
  path: "/bilgi-rehberi",
});

export default function Page() {
  const posts = getAllBlogPosts();
  return (
    <>
      <PageHero
        title="Bilgi Rehberi"
        description="Planlama öncesi okuyabileceğiniz özgün ve kısa bilgilendirme yazıları."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Bilgi Rehberi", path: "/bilgi-rehberi" }]}
      />
      <section className="py-14">
        <div className="container-page grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
