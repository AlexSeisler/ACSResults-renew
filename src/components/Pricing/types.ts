export interface Feature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  title: string;
  price: number;
  description: string;
  subtitle?: string;
  features: Feature[];
  exampleUrl: string;
  actionUrl: string;
  isPopular?: boolean;
}

export interface PricingCardProps extends PricingTier {}