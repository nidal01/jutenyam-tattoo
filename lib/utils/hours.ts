import { businessConfig } from "@/config/business.config";

const dayLabels: Record<keyof typeof businessConfig.openingHours, string> = {
  monday: "Pazartesi",
  tuesday: "Salı",
  wednesday: "Çarşamba",
  thursday: "Perşembe",
  friday: "Cuma",
  saturday: "Cumartesi",
  sunday: "Pazar",
};

export function formatOpeningHoursSummary(
  display: string = businessConfig.openingHoursDisplay,
): string {
  return display;
}

export function formatOpeningHoursList(
  hours: typeof businessConfig.openingHours = businessConfig.openingHours,
): Array<{ day: string; hours: string }> {
  return (Object.keys(hours) as Array<keyof typeof hours>).map((key) => ({
    day: dayLabels[key],
    hours: hours[key],
  }));
}

export function toSchemaOpeningHours(
  hours: typeof businessConfig.openingHours = businessConfig.openingHours,
): string[] {
  const dayMap: Record<keyof typeof hours, string> = {
    monday: "Mo",
    tuesday: "Tu",
    wednesday: "We",
    thursday: "Th",
    friday: "Fr",
    saturday: "Sa",
    sunday: "Su",
  };

  return (Object.keys(hours) as Array<keyof typeof hours>).map((key) => {
    const range = hours[key].replace("–", "-");
    return `${dayMap[key]} ${range}`;
  });
}
