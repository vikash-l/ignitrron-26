import type { EventConfig } from './event.types';

export const placeholderEvent: EventConfig = {
  id: 'master-template-placeholder',
  name: 'EVENT NAME',
  tagline: 'EVENT TAGLINE',
  description: 'Event description placeholder detailing the main theme, objective, and purpose of the event.',
  category: 'EVENT CATEGORY',

  eventInfo: {
    date: 'DD / MM / YYYY',
    time: '00:00',
    venue: 'VENUE',
    mode: 'HYBRID / ONLINE / OFFLINE',
    teamSize: '1 - 4 MEMBERS',
    registrationDeadline: 'DD / MM / YYYY',
  },

  hero: {
    title: 'EVENT NAME',
    subtitle: 'EVENT TAGLINE',
    description: 'A comprehensive master template structure engineered for 27 distinct event websites. Completely data-driven, responsive, and accessible.',
    primaryButtonText: 'REGISTER NOW',
    primaryButtonUrl: '#registration',
    secondaryButtonText: 'VIEW DETAILS',
    secondaryButtonUrl: '#about',
    badgeText: 'OFFICIAL EVENT 2026',
  },

  stats: [
    { value: '00', label: 'TEAMS' },
    { value: '00', label: 'HOURS' },
    { value: '00+', label: 'PARTICIPANTS' },
    { value: '00', label: 'PRIZES' },
  ],

  about: {
    title: 'ABOUT THE EVENT',
    description: 'This is a placeholder description for the about section. When customizing this master template for a specific event, detailed overview text, background context, rules summary, and core objectives will replace this section text.',
    bullets: [
      'Data-driven design system with zero hardcoded section strings',
      'Configurable section visibility toggles',
      'Fully responsive dynamic timeline and round indicators',
      'Standardized component hierarchy and theme-ready CSS variables',
    ],
  },

  highlights: [
    {
      title: 'HIGHLIGHT TITLE 01',
      description: 'Placeholder description explaining the first key highlight or core pillar of this event.',
      iconName: 'Zap',
    },
    {
      title: 'HIGHLIGHT TITLE 02',
      description: 'Placeholder description explaining the second key highlight or technical aspect.',
      iconName: 'Target',
    },
    {
      title: 'HIGHLIGHT TITLE 03',
      description: 'Placeholder description explaining the third key highlight or competitive edge.',
      iconName: 'Award',
    },
    {
      title: 'HIGHLIGHT TITLE 04',
      description: 'Placeholder description explaining the fourth key highlight or learning opportunity.',
      iconName: 'Users',
    },
  ],

  rounds: [
    {
      number: 'ROUND 01',
      title: 'PHASE TITLE 1',
      description: 'Initial phase description placeholder. Objective overview and participant qualification requirements.',
      duration: '00 HOURS',
      scoring: 'Evaluation criteria placeholder: Innovation (40%), Execution (40%), Presentation (20%).',
    },
    {
      number: 'ROUND 02',
      title: 'PHASE TITLE 2',
      description: 'Intermediate phase description placeholder. Deep dive implementation and technical challenge submission.',
      duration: '00 HOURS',
      scoring: 'Evaluation criteria placeholder: Code Quality (50%), Functionality (50%).',
    },
    {
      number: 'ROUND 03',
      title: 'FINALS / PRESENTATION',
      description: 'Final evaluation phase description placeholder. Jury presentation, Q&A session, and winner announcements.',
      duration: '00 HOURS',
      scoring: 'Evaluation criteria placeholder: Overall Impact (100%).',
    },
  ],

  timeline: [
    {
      time: '09:00 AM',
      title: 'EVENT REGISTRATION & CHECK-IN',
      description: 'Participant verification, badge distribution, and welcome kit collection.',
      date: 'DAY 1',
    },
    {
      time: '10:00 AM',
      title: 'OPENING CEREMONY & KEYNOTE',
      description: 'Introduction to guidelines, safety rules, timeline overview, and problem statement release.',
      date: 'DAY 1',
    },
    {
      time: '11:00 AM',
      title: 'ROUND 1 COMMENCEMENT',
      description: 'Teams commence work on the initial round deliverables and tasks.',
      date: 'DAY 1',
    },
    {
      time: '02:00 PM',
      title: 'MID-WAY REVIEWS & MENTORSHIP',
      description: 'Mentors evaluate current progress and offer technical guidance.',
      date: 'DAY 1',
    },
    {
      time: '05:00 PM',
      title: 'FINAL SUBMISSION & JUDGING',
      description: 'Project code submission deadline followed by live project demonstrations.',
      date: 'DAY 2',
    },
  ],

  rules: [
    'Rule 01 placeholder: All participants must adhere to the official code of conduct.',
    'Rule 02 placeholder: Plagiarism or pre-existing submission work is strictly prohibited.',
    'Rule 03 placeholder: Submissions must be delivered within the designated time frame.',
    'Rule 04 placeholder: Decisions made by the panel of judges are final and binding.',
    'Rule 05 placeholder: Team sizes must strictly comply with the specified event criteria.',
  ],

  prizes: [
    {
      position: '1ST PLACE',
      title: 'CHAMPION AWARD',
      description: 'Grand prize package awarded to the top overall team.',
      reward: '$0,000 / GRAND TROPHY',
      highlight: true,
    },
    {
      position: '2ND PLACE',
      title: 'RUNNER UP',
      description: 'Prize package awarded for second place excellence.',
      reward: '$0,000 / RUNNER TROPHY',
    },
    {
      position: '3RD PLACE',
      title: 'SECOND RUNNER UP',
      description: 'Prize package awarded for third place performance.',
      reward: '$0,000 / CERTIFICATE',
    },
    {
      position: 'SPECIAL AWARD',
      title: 'MOST INNOVATIVE SOLUTION',
      description: 'Recognizing exceptional technical innovation and creativity.',
      reward: 'SPECIAL TROPHY',
    },
  ],

  sponsors: [
    { name: 'SPONSOR ORGANISATION 01', tier: 'TITLE SPONSOR' },
    { name: 'SPONSOR ORGANISATION 02', tier: 'PLATINUM SPONSOR' },
    { name: 'SPONSOR ORGANISATION 03', tier: 'GOLD SPONSOR' },
    { name: 'SPONSOR ORGANISATION 04', tier: 'COMMUNITY PARTNER' },
  ],

  faq: [
    {
      question: 'What is the eligibility criteria for participating in this event?',
      answer: 'This is a placeholder answer explaining eligibility requirements, student or professional criteria, and registration prerequisites.',
    },
    {
      question: 'Is there any registration fee involved?',
      answer: 'This is a placeholder answer clarifying registration costs, free entry options, or ticket pricing structures.',
    },
    {
      question: 'What happens if a team member cannot attend in person?',
      answer: 'This is a placeholder answer detailing hybrid participation rules, substitutions, and virtual presentation support.',
    },
    {
      question: 'What hardware or software resources do I need to bring?',
      answer: 'This is a placeholder answer specifying laptops, ID cards, software tools, and power supply availability.',
    },
  ],

  registration: {
    title: 'READY TO PARTICIPATE?',
    subtitle: 'Register your team before the registration deadline to secure your slot.',
    label: 'REGISTER NOW',
    url: 'https://example.com/register',
    deadlineText: 'REGISTRATION CLOSES ON DD / MM / YYYY AT 00:00',
  },

  sections: {
    hero: true,
    eventInfo: true,
    stats: true,
    about: true,
    highlights: true,
    rounds: true,
    timeline: true,
    rules: true,
    prizes: true,
    sponsors: true,
    faq: true,
    registration: true,
  },

  contactEmail: 'organizer@eventdomain.com',
  socialLinks: [
    { platform: 'Twitter', url: '#' },
    { platform: 'LinkedIn', url: '#' },
    { platform: 'Instagram', url: '#' },
    { platform: 'GitHub', url: '#' },
  ],
};
