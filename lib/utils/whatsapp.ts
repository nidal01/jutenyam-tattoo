import { businessConfig } from "@/config/business.config";

export function buildWhatsAppUrl(
  message: string = businessConfig.whatsappMessage,
  phoneNumber: string = businessConfig.whatsappNumber,
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}
