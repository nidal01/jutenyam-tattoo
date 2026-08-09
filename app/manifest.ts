import type { MetadataRoute } from "next";
import { businessConfig } from "@/config/business.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessConfig.brandName,
    short_name: businessConfig.shortName,
    description: businessConfig.slogan,
    start_url: "/",
    display: "standalone",
    background_color: "#101114",
    theme_color: "#101114",
    lang: "tr",
    icons: [
      {
        src: "/logo/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
