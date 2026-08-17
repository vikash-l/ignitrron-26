import { EventConfig } from '../types/event';

export const eventData: EventConfig = {
  id: 'game-genesis-x-2026',
  name: 'GAME GENESIS X',
  subtitle: 'IN.ZEROS',
  tagline: 'PITCH THE GAME. BUILD THE VISION.',
  description: 'A game idea pitch and presentation experience where original concepts, gameplay systems, stories, and technical visions take the stage before an expert panel.',
  category: 'Game Pitch & Presentation',
  festName: 'IN.ZEROS',
  festYear: '2026',
  organizer: 'Game Development Club in collaboration with InZeros',

  date: '18/09/2026',
  time: '10:00 AM – 1:00 PM',
  venue: 'CS GALAXY',
  mode: 'On-Stage Pitch & Presentation',
  teamSize: '1–3 MEMBERS',
  registrationDeadline: 'Report 20 Mins Before Scheduled Slot',
  fee: 'Free Registration',

  sections: {
    hero: true,
    eventInfo: false,
    about: true,
    stats: false,
    highlights: true,
    rounds: true,
    timeline: false,
    rules: true,
    conduct: true,
    prizes: true,
    sponsors: false,
    inZeros: true,
    faq: true,
    registration: true,
  },

  stats: [
    {
      value: '18.09.26',
      label: 'EVENT DATE',
      subtext: 'CS GALAXY Arena',
      icon: 'Calendar',
    },
    {
      value: '10:00 → 13:00',
      label: 'EVENT WINDOW',
      subtext: '3 Hours High-Stakes Arena',
      icon: 'Clock',
    },
    {
      value: '1–3',
      label: 'MEMBERS / TEAM',
      subtext: 'Cross-Dept Encouraged',
      icon: 'Users',
    },
    {
      value: '10 + 5 MIN',
      label: 'PITCH + Q&A',
      subtext: '10m Presentation + 5m Q&A',
      icon: 'Sparkles',
    },
  ],

  about: {
    title: 'THE GENESIS',
    subtitle: 'Where original game concepts and player visions come to life.',
    description: [
      'Game Genesis X is a platform for students to transform original game ideas into compelling pitches, combining gameplay mechanics, narrative vision, target audience understanding, and technical feasibility.',
      'Hosted by the Game Development Club in collaboration with InZeros, this high-stakes presentation arena brings together creative storytellers, mechanics architects, and technical visionaries.',
      'Present your vision before the expert InZeros panel and get direct feedback, mentorship, and awards.'
    ],
    keyPoints: [
      'Present Core Gameplay Systems & Player Actions',
      'Showcase Story Worldbuilding & Narrative Concept',
      'Define Target Audience & Platform Strategy',
      'Demonstrate Technical Feasibility & Prototype Art'
    ],
    quote: 'Put your idea on the table. The future of gaming starts at Genesis.',
    quoteAuthor: 'InZeros Jury Chair'
  },

  highlights: [
    {
      title: '01 // CORE GAMEPLAY MECHANICS',
      description: 'Explain how the game works and what the player actually does.',
      icon: 'Gamepad2',
      badge: 'MECHANICS'
    },
    {
      title: '02 // STORY / THEME',
      description: 'Present the narrative, world, concept, or thematic direction.',
      icon: 'Scroll',
      badge: 'LORE & ART'
    },
    {
      title: '03 // TARGET AUDIENCE',
      description: 'Explain who the game is designed for and why players will love it.',
      icon: 'Target',
      badge: 'AUDIENCE'
    },
    {
      title: '04 // TECHNICAL FEASIBILITY',
      description: 'Give a brief overview of how realistically the proposed game can be developed.',
      icon: 'Cpu',
      badge: 'FEASIBILITY'
    }
  ],

  rounds: [
    {
      number: '01',
      title: 'PRESENTATION SLOT',
      description: 'Each team receives a maximum of 10 minutes to pitch their game concept deck, story bible, and mechanics to the InZeros panel.',
      duration: '10 MINUTES',
      mode: 'On-Stage Presentation',
      rules: [
        '10-Minute Slide Pitch Presentation',
        'Must cover Mechanics, Story, Audience & Feasibility',
        'Prototypes & concept art are highly recommended'
      ],
      scoringCriteria: ['Gameplay Mechanics (30%)', 'Story & Worldbuilding (25%)', 'Feasibility & Art (25%)', 'Presentation Mastery (20%)']
    },
    {
      number: '02',
      title: 'JURY Q&A SESSION',
      description: 'A 5-minute interactive Q&A session with the InZeros panel of judges immediately following your pitch presentation.',
      duration: '5 MINUTES',
      mode: 'Interactive Q&A',
      rules: [
        'Direct questioning on mechanics balance & technical design',
        'Evaluation of team vision and game loop logic',
        'Constructive feedback provided directly by judges'
      ],
      scoringCriteria: ['Domain Knowledge (40%)', 'Response Clarity (30%)', 'Vision & Adaptability (30%)']
    }
  ],

  timeline: [
    {
      time: '09:40 AM',
      date: '18/09/2026',
      title: 'QUEUE REPORTING & VENUE CHECK-IN',
      description: 'Teams report to CS GALAXY 20 minutes before the event window starts for queue alignment and AV checks.',
      tag: 'REPORT 20m PRIOR'
    },
    {
      time: '10:00 AM',
      date: '18/09/2026',
      title: 'OPENING KEYNOTE & STAGE COMMENCEMENT',
      description: 'Welcome address by Game Development Club and InZeros Representatives.',
      tag: 'COMMENCEMENT'
    },
    {
      time: '10:15 AM',
      date: '18/09/2026',
      title: 'THE PITCH TABLE: PITCHES & Q&A SLOTS',
      description: 'Sequential team pitches (10 Mins Presentation + 5 Mins Q&A per team).',
      tag: 'LIVE PITCHES'
    },
    {
      time: '12:45 PM',
      date: '18/09/2026',
      title: 'JURY DELIBERATION & AWARDS CEREMONY',
      description: 'Final scoring by InZeros panel, announcement of 1st, 2nd, and 3rd place winners.',
      tag: 'THE WINNERS'
    }
  ],

  rules: [
    {
      category: '01 — TEAM COMPOSITION',
      items: [
        'Teams may consist of 1 to 3 members.',
        'Cross-departmental teams are encouraged.'
      ]
    },
    {
      category: '02 — PITCH DURATION',
      items: [
        'Maximum: 10 MINUTES presentation.',
        'Followed by: 5 MINUTES Q&A with the judges panel.'
      ]
    },
    {
      category: '03 — CONTENT REQUIREMENTS',
      items: [
        'Presentations must cover: Core gameplay mechanics, Story / theme, Target audience, and Technical feasibility.',
        'Prototypes or concept art are highly recommended.'
      ]
    },
    {
      category: '04 — ORIGINALITY',
      items: [
        'All ideas must be original.',
        'Plagiarism of existing commercial games will lead to immediate disqualification.'
      ]
    },
    {
      category: '05 — QUEUE MANAGEMENT',
      items: [
        'Teams must report to the venue (CS GALAXY) 20 minutes before their scheduled slot.',
        'Skipping the designated order without prior approval is not permitted.'
      ]
    }
  ],

  conduct: [
    {
      title: 'PROFESSIONALISM',
      description: 'Maintain a respectful environment. Harassment, shouting, or aggressive behavior toward staff, judges, or participants will result in immediate removal.',
      icon: 'ShieldAlert'
    },
    {
      title: 'INTEGRITY',
      description: 'Participants must handle provided equipment such as projectors and audio systems with care. Any damage caused by negligence is the responsibility of the participant.',
      icon: 'Sparkles'
    },
    {
      title: 'FAIR PLAY',
      description: 'Respect the decisions of the InZeros panel. The spirit of the competition is based on learning and constructive feedback.',
      icon: 'Scale'
    }
  ],

  prizes: [
    {
      position: '01 // FIRST PLACE',
      title: 'GRAND CHAMPION',
      reward: '₹3,000',
      description: 'First place cash award, trophy, winner certificate, and priority InZeros mentorship opportunity.',
      icon: 'Crown',
      highlighted: true
    },
    {
      position: '02 // SECOND PLACE',
      title: 'RUNNER-UP',
      reward: '₹2,000',
      description: 'Second place cash award, runner-up certificate, and InZeros mentorship access.',
      icon: 'Award',
      highlighted: false
    },
    {
      position: '03 // THIRD PLACE',
      title: 'SECOND RUNNER-UP',
      reward: '₹1,000',
      description: 'Third place cash award, certificate of achievement, and jury feedback session.',
      icon: 'Medal',
      highlighted: false
    }
  ],

  inZerosInfo: {
    title: 'IN.COLLABORATION WITH',
    name: 'INZEROS',
    description: 'Game Genesis X is organized by the Game Development Club in collaboration with InZeros.',
    website: 'www.inzeros.in',
    members: [
      { name: 'J. Ezashkan', location: 'Coimbatore' },
      { name: 'M. Mubhash', location: 'Trichy' }
    ]
  },

  faq: [
    {
      question: 'What is Game Genesis X?',
      answer: 'A game idea pitch and presentation event where students showcase original game concepts to an expert panel.',
      category: 'General'
    },
    {
      question: 'How many members can be in a team?',
      answer: 'Teams can have 1 to 3 members. Cross-departmental teams are encouraged.',
      category: 'Teams'
    },
    {
      question: 'How long is each presentation?',
      answer: 'Each presentation is strictly maximum 10 minutes long.',
      category: 'Pitch'
    },
    {
      question: 'Is there a Q&A?',
      answer: 'Yes. A 5-minute Q&A session with the InZeros panel immediately follows the 10-minute presentation.',
      category: 'Pitch'
    },
    {
      question: 'What must the presentation contain?',
      answer: 'Presentations must cover 4 core components: Core gameplay mechanics, Story / theme, Target audience, and Technical feasibility.',
      category: 'Content'
    },
    {
      question: 'Are prototypes required?',
      answer: 'They are not stated as mandatory, but prototypes or concept art are highly recommended.',
      category: 'Content'
    },
    {
      question: 'When should teams report?',
      answer: 'Teams must report to CS GALAXY 20 minutes before their scheduled slot.',
      category: 'Venue'
    }
  ],

  registration: {
    label: 'REGISTER NOW',
    url: '#register',
    secondaryLabel: 'VIEW RULES',
    secondaryUrl: '#rules',
    note: 'Queue Management: Report to CS GALAXY 20 minutes before your allocated slot.'
  },

  coordinators: [
    {
      role: 'Faculty Coordinator',
      name: 'Mr. Munirathnam T',
      phone: '+91 88705 29593'
    },
    {
      role: 'Student Coordinator',
      name: 'Reshekumar V',
      phone: '+91 63828 33994'
    },
    {
      role: 'Student Coordinator',
      name: 'Hemanisha',
      phone: '+91 93618 79997'
    },
    {
      role: 'Student Coordinator',
      name: 'Prajith Sabaris D',
      phone: '+91 93423 98554'
    }
  ],

  socials: [
    { platform: 'Discord', url: 'https://discord.gg', icon: 'MessageSquare' },
    { platform: 'Twitter / X', url: 'https://twitter.com', icon: 'Twitter' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' }
  ],

  footer: {
    copyright: '© 2026 GAME GENESIS X • IN.ZEROS • GAME DEVELOPMENT CLUB',
    disclaimer: 'Official event under Game Development Club in collaboration with InZeros.'
  },

  theme: {
    accentColor: '#7B2CFF',
    gradient: 'from-[#7B2CFF] via-[#D12CFF] to-[#FF4FD8]',
    badgeStyle: 'bg-purple-950/80 text-purple-300 border-purple-500/30',
    visualStyle: 'gambit'
  }
};
