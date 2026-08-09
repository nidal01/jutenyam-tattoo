import { businessConfig } from "@/config/business.config";

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: businessConfig.social.instagram,
    handle: businessConfig.social.instagramHandle,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: businessConfig.social.facebook,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: businessConfig.social.youtube,
  },
] as const;
