export type SectionKey = 
  | 'hero'
  | 'eventInfo'
  | 'about'
  | 'stats'
  | 'highlights'
  | 'rounds'
  | 'timeline'
  | 'rules'
  | 'conduct'
  | 'prizes'
  | 'sponsors'
  | 'inZeros'
  | 'faq'
  | 'registration';

export interface EventStat {
  value: string;
  label: string;
  subtext?: string;
  icon?: string;
}

export interface EventHighlight {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
}

export interface EventRound {
  number: string;
  title: string;
  description: string;
  duration?: string;
  mode?: string;
  rules?: string[];
  scoringCriteria?: string[];
}

export interface EventTimelineItem {
  time: string;
  date?: string;
  title: string;
  description: string;
  tag?: string;
}

export interface EventRuleCategory {
  category?: string;
  items: string[];
}

export type EventRules = string[] | EventRuleCategory[];

export interface EventPrize {
  position: string;
  title: string;
  reward: string;
  description: string;
  icon?: string;
  highlighted?: boolean;
}

export interface EventSponsor {
  name: string;
  category?: string;
  logo?: string;
  website?: string;
}

export interface EventFAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface EventCoordinator {
  role: 'Faculty Coordinator' | 'Student Coordinator' | string;
  name: string;
  phone: string;
  email?: string;
}

export interface EventConductItem {
  title: string;
  description: string;
  icon?: string;
}

export interface InZerosMember {
  name: string;
  location: string;
}

export interface EventConfig {
  id: string;
  name: string;
  subtitle?: string;
  tagline: string;
  description: string;
  category: string;
  festName: string;
  festYear: string;
  organizer?: string;

  date: string;
  time: string;
  venue: string;
  mode: string;
  teamSize: string;
  registrationDeadline: string;
  fee?: string;

  sections: Record<SectionKey, boolean>;

  stats?: EventStat[];
  about?: {
    title: string;
    subtitle?: string;
    description: string[];
    image?: string;
    keyPoints?: string[];
    quote?: string;
    quoteAuthor?: string;
  };

  highlights?: EventHighlight[];
  rounds?: EventRound[];
  timeline?: EventTimelineItem[];
  rules?: EventRules;
  conduct?: EventConductItem[];
  prizes?: EventPrize[];
  sponsors?: EventSponsor[];
  faq?: EventFAQItem[];

  inZerosInfo?: {
    title: string;
    name: string;
    description: string;
    website: string;
    members: InZerosMember[];
  };

  registration?: {
    label: string;
    url: string;
    secondaryLabel?: string;
    secondaryUrl?: string;
    note?: string;
  };

  coordinators?: EventCoordinator[];

  socials?: {
    platform: string;
    url: string;
    icon: string;
  }[];

  footer?: {
    copyright: string;
    disclaimer?: string;
  };

  theme?: {
    accentColor: string;
    gradient: string;
    badgeStyle: string;
    visualStyle: 'gambit' | 'cyberpunk' | 'modern' | 'minimal';
  };
}
