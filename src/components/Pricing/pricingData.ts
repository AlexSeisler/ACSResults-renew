import { PricingTier } from './types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    title: "1 Page Portfolio",
    price: 45,
    description: "Perfect for highlighting your core projects and achievements in a simple, professional format",
    features: [
      { text: "Single page website", included: true },
      { text: "Project showcase section", included: true },
      { text: "Skills display", included: true },
      { text: "Timeline", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Custom domain", included: false },
      { text: "Multiple pages", included: false }
    ],
    exampleUrl: "https://alexseisler.github.io/ACS-Results/Main-Template/index.html",
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLScstG6bYqMw8TE0fpqSUz1z8nOmHC1gFtrhCKr5vHtLdwEc0g/viewform"
  },
  {
    id: 'pro',
    title: "Multi Page Portfolio",
    price: 200,
    description: "Ideal for showcasing diverse projects and achievements in an organized, polished format",
    features: [
      { text: "Multiple page website", included: true },
      { text: "Projects gallery", included: true },
      { text: "Skills showcase", included: true },
      { text: "Contact form", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Custom domain", included: true },
      { text: "Content updates", included: true }
    ],
    exampleUrl: "https://alex-seisler.netlify.app/",
    actionUrl: "payment/index.html",
    isPopular: true
  },
  {
    id: 'business',
    title: "Company Website",
    price: 1000,
    description: "Built to establish your brand’s digital presence with advanced features and professional design",
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
    actionUrl: "payment/index.html"
  }
];