import { PricingTier } from './types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    title: "1 Page Portfolio",
    price: 45,
    features: [
      { text: "Single page website", included: true },
      { text: "Project showcase section", included: true },
      { text: "Skills display", included: true },
      { text: "Contact form", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Custom domain", included: false },
      { text: "Multiple pages", included: false }
    ],
    exampleUrl: "https://alexseisler.github.io/ACS-Results/Main-Template/index.html",
    actionUrl: "/onboarding"
  },
  {
    id: 'pro',
    title: "Multi Page Portfolio",
    price: 200,
    subtitle: "Most Popular",
    features: [
      { text: "Multiple page website", included: true },
      { text: "Projects gallery", included: true },
      { text: "Skills showcase", included: true },
      { text: "Contact form", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Custom domain", included: true },
      { text: "Content updates", included: true }
    ],
    exampleUrl: "https://profound-dango-9910c5.netlify.app/",
    actionUrl: "/onboarding",
    isPopular: true
  },
  {
    id: 'business',
    title: "Company Website",
    price: 1000,
    features: [
      { text: "Multi-page business site", included: true },
      { text: "Custom design", included: true },
      { text: "Content management", included: true },
      { text: "SEO optimization", included: true },
      { text: "Analytics integration", included: true },
      { text: "Custom domain", included: true },
      { text: "Priority support", included: true }
    ],
    exampleUrl: "https://acsresultsai.net/",
    actionUrl: "/onboarding"
  }
];