// Common types for the Astro project

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  alt?: string;
}

export interface SectionContent {
  title: string;
  description: string;
}

export interface AboutUsSectionContent extends SectionContent {
  buttonText: string;
  buttonHref: string;
}

export interface StatItemData {
  id: string;
  value: string;
  label: string;
  iconSvg: string;
}

export interface AboutUsImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  stars: string[];
  alt?: string;
}

export interface TestimonialsSectionContent extends SectionContent {
  title: string;
  description: string;
}

export interface CTASectionContent {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface CTAImageData {
  src: string;
  alt: string;
  class: string;
}

export interface CTAData {
  content: CTASectionContent;
  images: {
    mint: CTAImageData;
    pizza: CTAImageData;
  };
}

export interface ContactSectionContent extends SectionContent {
  title: string;
  description: string;
}

export interface ContactFormData {
  title: string;
  buttonText: string;
  fields: {
    name: {
      label: string;
      placeholder: string;
      id: string;
    };
    phone: {
      label: string;
      placeholder: string;
      id: string;
    };
    date: {
      label: string;
      placeholder: string;
      id: string;
    };
    time: {
      label: string;
      placeholder: string;
      id: string;
    };
    message: {
      label: string;
      placeholder: string;
      id: string;
    };
  };
}

export interface ContactInfoData {
  email: {
    title: string;
    email: string;
    phone: string;
  };
  location: {
    title: string;
    address: string[];
  };
  hours: {
    text: string;
    hours: string;
    schedule: string;
  };
}

export interface ContactData {
  section: ContactSectionContent;
  form: ContactFormData;
  info: ContactInfoData;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  learnMoreLink?: string;
  learnMoreText?: string;
}

export interface FAQSectionContent extends SectionContent {
  title: string;
  description: string;
}

export interface FAQData {
  section: FAQSectionContent;
  items: FAQItem[];
}

export interface SiteConfig {
  container: string;
}
