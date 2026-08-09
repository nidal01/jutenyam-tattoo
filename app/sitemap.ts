import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site.config";
import { getAllBlogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticPaths = [
    "/",
    "/dovme",
    "/piercing",
    "/kalici-makyaj",
    "/kalici-makyaj/kas-mikropigmentasyonu",
    "/kalici-makyaj/dudak-renklendirme",
    "/kalici-makyaj/dipliner-eyeliner",
    "/portfoy",
    "/hakkimizda",
    "/hijyen-ve-uygulama-yaklasimi",
    "/sevgi-izi",
    "/bilgi-rehberi",
    "/sss",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk-aydinlatma-metni",
    "/acik-riza-metni",
    "/cerez-politikasi",
    "/fotograf-ve-video-kullanim-politikasi",
    "/kullanim-kosullari",
  ];

  const blog = getAllBlogPosts().map((post) => ({
    url: `${base}/bilgi-rehberi/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  return [
    ...staticPaths.map((path) => ({
      url: path === "/" ? base : `${base}${path}`,
      lastModified: new Date(),
    })),
    ...blog,
  ];
}
