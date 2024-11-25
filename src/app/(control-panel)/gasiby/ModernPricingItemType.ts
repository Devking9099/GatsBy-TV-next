import { ReactNode } from "react";

/**
 * The type of the ModernPricingItemType.
 */
export type ModernPricingItemType = {
  description: any;
  period?: "month" | "year";
  title?: string;
  subtitle?: string;
  negotiable?: string;
  Feauture?: ReactNode;
  Limitation?: ReactNode;
  yearlyPrice?: string;
  monthlyPrice?: string;
  buttonTitle?: string;
  isPopular?: boolean;
  details?: ReactNode;
  icon?: string;
};

export default ModernPricingItemType;
