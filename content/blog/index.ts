import { calculateReadingTimeMinutes } from "@/lib/utils/reading-time";
import { ilkDovme } from "./ilk-dovme-oncesinde-bilinmesi-gerekenler";
import { piercingDikkat } from "./piercing-yaptirmadan-once-nelere-dikkat-edilir";
import { kasMikro } from "./kas-mikropigmentasyonu-hakkinda-merak-edilenler";
import { dudakRenk } from "./dudak-renklendirme-islemi-hakkinda-genel-bilgiler";
import { diplinerFark } from "./dipliner-ve-eyeliner-arasindaki-farklar";
import type { BlogPost } from "./types";

export type { BlogPost } from "./types";

const rawPosts: BlogPost[] = [
  ilkDovme,
  piercingDikkat,
  kasMikro,
  dudakRenk,
  diplinerFark,
];

export function getAllBlogPosts(): BlogPost[] {
  return [...rawPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return rawPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getBlogReadingTime(post: BlogPost): number {
  return calculateReadingTimeMinutes(post.body.join(" "));
}
