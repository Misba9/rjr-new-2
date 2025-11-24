export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  location: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
