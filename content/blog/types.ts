export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  serviceHref: string;
  serviceLabel: string;
  tags: string[];
  featured: boolean;
  body: string[];
};
