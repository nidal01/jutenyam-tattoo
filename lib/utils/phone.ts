import { businessConfig } from "@/config/business.config";

export function buildPhoneUrl(
  phoneInternational: string = businessConfig.phoneInternational,
): string {
  return `tel:${phoneInternational}`;
}
