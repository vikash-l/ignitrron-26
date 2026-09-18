import type { EventConfig } from './event.types';

export const legacyCodeRescueEvent: EventConfig = {
  id: 'legacy-code-rescue-2026',
  name: 'LEGACY CODE RESCUE CHALLENGE',
  tagline: 'INHERIT. DEBUG. REFACTOR. EVOLVE.',
  description: 'A high-pressure software engineering competition where teams inherit an unfamiliar legacy application, identify critical issues, improve its internal structure, and implement new functionality without breaking existing systems.',
  category: 'Software Engineering Competition',

  eventInfo: {
    date: '18 SEPTEMBER 2026',
    time: '5-HOUR CHALLENGE',
    venue: 'HPC LAB',
    mode: 'ON-SITE LAB',
    teamSize: '3–4 MEMBERS / TEAM',
    registrationDeadline: '40 TEAMS MAXIMUM',
  },

  hero: {
    title: 'LEGACY CODE RESCUE CHALLENGE',
    subtitle: 'INHERIT. DEBUG. REFACTOR. EVOLVE.',
    description: 'A high-pressure software engineering competition where teams inherit an unfamiliar legacy application, identify critical issues, improve its internal structure, and implement new functionality without breaking existing systems.',
    primaryButtonText: 'REGISTER NOW',
    primaryButtonUrl: 'https://www.theticket9.com/event/ignitrron-26',
    secondaryButtonText: 'VIEW CHALLENGE',
    secondaryButtonUrl: '#about',
    badgeText: 'SYSTEM STATUS // ONLINE • AI PROTOCOL // ACTIVE',
    visualImage: 'legacy-code/ultron-core.jpg',
  },

  stats: [
    { value: '40', label: 'TEAMS' },
    { value: '3–4', label: 'MEMBERS / TEAM' },
    { value: '160', label: 'MAX PARTICIPANTS' },
    { value: '05:00', label: 'HOURS' },
  ],

  about: {
    title: 'THE MISSION',
    description: 'This is not a traditional greenfield coding competition. Teams inherit a pre-built application containing bugs, technical debt, and suboptimal architecture. Their mission is to understand the unfamiliar system, restore its stability, improve its structure, and extend it with new functionality while preserving existing behavior.',
    bullets: [
      'Navigate and analyze an unfamiliar, complex codebase',
      'Identify and squash hidden system bugs and edge cases',
      'Refactor technical debt into clean, maintainable architecture',
      'Implement assigned features without breaking existing system behavior',
    ],
  },

  highlights: [
    {
      title: '01 CODE FORENSICS',
      description: 'Navigate and understand an unfamiliar codebase under time constraints.',
      iconName: 'FileSearch',
    },
    {
      title: '02 DEBUGGING',
      description: 'Identify and eliminate critical bugs, memory leaks, and edge cases.',
      iconName: 'Bug',
    },
    {
      title: '03 REFACTORING',
      description: 'Improve structure, readability, performance, and maintainability.',
      iconName: 'GitFork',
    },
    {
      title: '04 VERSION CONTROL',
      description: 'Demonstrate disciplined Git collaboration and version-control practices.',
      iconName: 'GitBranch',
    },
  ],

  rounds: [
    {
      number: 'PHASE I',
      title: 'CODE DISCOVERY & BUG SQUASHING',
      description: 'Teams analyze the inherited codebase, identify existing bugs, document technical debt, and restore the application\'s core functionality.',
      duration: '00:30 – 01:30',
      scoring: 'Evaluation Focus: Bug Identification, Core Functionality Restoration, Error Logging.',
    },
    {
      number: 'PHASE II',
      title: 'REFACTORING & OPTIMIZATION',
      description: 'Teams restructure inefficient logic, improve naming conventions, reduce code duplication, and increase maintainability without changing application behavior.',
      duration: '01:30 – 02:45',
      scoring: 'Evaluation Focus: Code Quality, Modular Structure, Technical Debt Elimination.',
    },
    {
      number: 'PHASE III',
      title: 'FEATURE IMPLEMENTATION',
      description: 'Teams implement the assigned feature while ensuring previously existing functionality continues to work correctly.',
      duration: '02:45 – 04:15',
      scoring: 'Evaluation Focus: Feature Completeness, Integration Testing, Regression Prevention.',
    },
    {
      number: 'FINAL PHASE',
      title: 'CODE REVIEW & EVALUATION',
      description: 'Final submission, code review, evaluation of code quality, refactoring decisions, and feature completion.',
      duration: '04:15 – 05:00',
      scoring: 'Evaluation Focus: Comprehensive Review, Git History, Final Demonstration.',
    },
  ],

  timeline: [
    {
      time: '00:00 – 00:30',
      title: 'ONBOARDING & ENVIRONMENT SETUP',
      description: 'Check-in, workstation assignment, repository cloning, technical briefing, submission rules, and stability requirements.',
      date: 'STARTUP',
    },
    {
      time: '00:30 – 01:30',
      title: 'PHASE I — CODE DISCOVERY & BUG SQUASHING',
      description: 'Analyze the codebase, identify bugs, document technical debt, and restore core functionality.',
      date: 'PHASE 1',
    },
    {
      time: '01:30 – 02:45',
      title: 'PHASE II — REFACTORING & OPTIMIZATION',
      description: 'Improve structure, naming, efficiency, and maintainability without breaking behavior.',
      date: 'PHASE 2',
    },
    {
      time: '02:45 – 04:15',
      title: 'PHASE III — FEATURE IMPLEMENTATION',
      description: 'Implement the assigned functionality while preserving all existing system features.',
      date: 'PHASE 3',
    },
    {
      time: '04:15 – 05:00',
      title: 'FINAL PHASE — CODE REVIEW & EVALUATION',
      description: 'Final submission, judging, leaderboard, trophy presentation, and closing ceremony.',
      date: 'FINAL',
    },
  ],

  rules: [
    'Teams must consist of 3 to 4 members.',
    'The event consists of 4 phases: Phase I — Code Discovery & Bug Squashing, Phase II — Refactoring & Optimization, Phase III — Feature Implementation, Final Phase — Code Review & Evaluation.',
    'Phase I — Code Discovery & Bug Squashing: Teams must analyze the inherited codebase, identify existing bugs, document technical debt, and restore the application\'s core functionality.',
    'Phase II — Refactoring & Optimization: Participants must improve code quality by restructuring inefficient logic, improving naming conventions, reducing code duplication, and increasing maintainability without changing the application\'s behavior.',
    'Phase III — Feature Implementation: Teams must implement the assigned feature while ensuring all previously existing functionalities continue to work correctly.',
    'Allowed Resources: Official documentation, programming language references, package documentation, AI tools, subject to the organizers\' decision.',
    'Copying source code, sharing solutions, or replacing the entire codebase is not allowed. All work must be completed during the competition.',
    'Final submission before the time limit ends must include: Updated source code, Git commit history, Implemented feature, Final repository submission.',
    'Teams must collaborate within the allotted 5-hour time limit. No additional time will be provided.',
    'Any form of plagiarism, malpractice, or rule violation will result in disqualification.',
    'The decision of the judges and organizers is final. No arguments or appeals will be entertained.',
  ],

  prizes: [
    {
      position: '01 / CHAMPIONS',
      title: 'FIRST PLACE',
      description: 'Grand prize awarded for top overall score in debugging, refactoring, and feature execution.',
      reward: '₹5,000',
      highlight: true,
    },
    {
      position: '02 / RUNNERS UP',
      title: 'SECOND PLACE',
      description: 'Awarded for runner-up technical excellence and code quality.',
      reward: '₹3,000',
    },
    {
      position: '03 / THIRD PLACE',
      title: 'THIRD PLACE',
      description: 'Awarded for third-place completion and code refactoring.',
      reward: '₹2,000',
    },
  ],

  sponsors: [
    { name: 'HPC LAB INFRASTRUCTURE', tier: 'COMPETITION VENUE' },
    { name: 'LEGACY CODE REPOSITORY', tier: 'CHALLENGE PROVIDER' },
  ],

  faq: [
    {
      question: 'What is the Legacy Code Rescue Challenge?',
      answer: 'A software engineering competition focused on debugging, refactoring, technical debt management, version control, and feature implementation.',
    },
    {
      question: 'How many teams can participate?',
      answer: '40 teams.',
    },
    {
      question: 'How many members can be in a team?',
      answer: '3 to 4 members.',
    },
    {
      question: 'What is the maximum number of participants?',
      answer: 'Up to 160 participants.',
    },
    {
      question: 'How long is the competition?',
      answer: '5 hours.',
    },
    {
      question: 'Where is the event conducted?',
      answer: 'HPC LAB.',
    },
    {
      question: 'When is the event?',
      answer: '18 September 2026.',
    },
    {
      question: 'What resources are allowed?',
      answer: 'Official documentation, programming language references, package documentation, and AI tools subject to the organizers\' decision.',
    },
  ],

  facultyCoordinators: [
    { name: 'Dr. Primya T', phone: '+91 99408 07433', role: 'FACULTY COORDINATOR' },
  ],

  organizers: [
    { name: 'Sanjai M.S', phone: '+91 93426 72711', role: 'EVENT ORGANIZER' },
    { name: 'Monika M', phone: '+91 75388 14484', role: 'EVENT ORGANIZER' },
    { name: 'Santhosh M', phone: '+91 93637 47699', role: 'EVENT ORGANIZER' },
  ],

  registration: {
    title: 'READY TO RESCUE THE CODE?',
    subtitle: '40 teams. One legacy system. Five hours.',
    label: 'REGISTER NOW',
    url: 'https://www.theticket9.com/event/ignitrron-26',
    deadlineText: 'LIMITED SLOTS: 40 TEAMS • HPC LAB • 18 SEPTEMBER 2026',
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
    sponsors: false,
    faq: true,
    registration: true,
  },

  contactEmail: 'sanjai.ms@nmslab.edu',
  socialLinks: [
    { platform: 'HPC LAB', url: '#' },
    { platform: 'GitHub Repository', url: '#' },
  ],
};
