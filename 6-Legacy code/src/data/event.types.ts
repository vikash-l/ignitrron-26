export interface SectionConfig {
  hero: boolean;
  eventInfo: boolean;
  stats: boolean;
  about: boolean;
  highlights: boolean;
  rounds: boolean;
  timeline: boolean;
  rules: boolean;
  prizes: boolean;
  sponsors: boolean;
  faq: boolean;
  registration: boolean;
}

export interface EventInfoData {
  date?: string;
  time?: string;
  venue?: string;
  mode?: string;
  teamSize?: string;
  registrationDeadline?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
}

export interface HighlightItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface RoundItem {
  number: string;
  title: string;
  description: string;
  duration?: string;
  rules?: string[];
  scoring?: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  date?: string;
}

export interface PrizeItem {
  position: string;
  title: string;
  description: string;
  reward?: string;
  highlight?: boolean;
}

export interface SponsorItem {
  name: string;
  logo?: string;
  website?: string;
  tier?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RegistrationData {
  title?: string;
  subtitle?: string;
  label: string;
  url: string;
  deadlineText?: string;
}

export interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  badgeText?: string;
  visualImage?: string;
}

export interface OrganizerItem {
  name: string;
  phone: string;
  role?: string;
}

export interface EventConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category?: string;
  logo?: string;

  eventInfo?: EventInfoData;
  hero?: HeroData;
  stats?: StatItem[];
  about?: AboutData;
  highlights?: HighlightItem[];
  rounds?: RoundItem[];
  timeline?: TimelineItem[];
  rules?: string[];
  prizes?: PrizeItem[];
  sponsors?: SponsorItem[];
  faq?: FAQItem[];
  registration?: RegistrationData;
  facultyCoordinators?: OrganizerItem[];
  organizers?: OrganizerItem[];

  sections?: Partial<SectionConfig>;

  contactEmail?: string;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}
