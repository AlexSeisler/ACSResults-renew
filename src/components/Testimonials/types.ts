export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role?: string;
  company?: string;
}

export interface TestimonialCardProps extends Testimonial {
  isActive: boolean;
  onClick: () => void;
}