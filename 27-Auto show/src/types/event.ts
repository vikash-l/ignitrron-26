export interface EventCoordinator {
  name: string;
  role: 'Faculty Coordinator' | 'Student Coordinator' | string;
  phone?: string;
  email?: string;
}

export interface ExperienceModule {
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
  icon?: string;
}

export interface MachineCategory {
  title: string;
  subtitle: string;
  description: string;
  category: 'FEATURED MACHINE' | 'CUSTOM BUILD' | 'PERFORMANCE' | 'CLASSIC' | string;
  image?: string;
  specs?: string[];
}

export interface EventFAQItem {
  question: string;
  answer: string;
}

export interface SectionVisibility {
  hero: boolean;
  eventInfo: boolean;
  about: boolean;
  experience: boolean;
  machines: boolean;
  venue: boolean;
  faq: boolean;
  contact: boolean;
  finalCta: boolean;
  // Disabled competition sections as per specification
  rounds?: boolean;
  timeline?: boolean;
  prizes?: boolean;
  rules?: boolean;
  sponsors?: boolean;
  registration?: boolean;
}

export interface EventConfig {
  name: string;
  subTitle: string;
  edition: string;
  tagline: string;
  description: string;
  eventType: 'FUN EVENT' | string;

  // Logistics
  date: string;
  day: string;
  time: string;
  venue: string;
  entry: 'WALK-IN' | string;

  // Sections
  about: {
    title: string;
    description: string;
    subNote?: string;
  };
  experience: ExperienceModule[];
  machines: MachineCategory[];
  venueDetails: {
    title: string;
    name: string;
    description: string;
    timing: string;
    entryNote: string;
  };
  faq: EventFAQItem[];
  coordinators: {
    faculty: EventCoordinator[];
    students: EventCoordinator[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
  sections: SectionVisibility;
}
