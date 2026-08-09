import { businessConfig } from "@/config/business.config";

export type FeatureFlag = keyof typeof businessConfig.featureFlags;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return businessConfig.featureFlags[flag];
}
