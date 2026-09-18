import characterImg from '../assets/JwwBb.jpg';
import pradeepImg from '../assets/Pradeep.jpg';

export interface NavSection {
  id: string;
  index: string;
  label: string;
  title: string;
  badge: string;
}

export const navSections: NavSection[] = [
  { id: 'session', index: '01', label: 'SESSION', title: 'BREAKING THE BUILD', badge: 'SESSION BRIEF' },
  { id: 'guest', index: '02', label: 'GUEST', title: 'MEET THE GUEST', badge: 'INDUSTRY PERSPECTIVE' },
  { id: 'experience', index: '03', label: 'EXPERIENCE', title: 'WHAT TO EXPECT', badge: 'SESSION PILLARS' },
  { id: 'coordinators', index: '04', label: 'TEAM', title: 'EVENT COORDINATORS', badge: 'LEADERSHIP & CONTACTS' },
  { id: 'guidelines', index: '05', label: 'GUIDELINES', title: 'CODE OF CONDUCT', badge: 'SESSION PROTOCOLS' },
  { id: 'faq', index: '06', label: 'FAQ', title: 'FREQUENTLY ASKED QUESTIONS', badge: 'INQUIRY & SUPPORT' },
];

export interface CoordinatorStudent {
  name: string;
  phone: string;
  role: string;
}

export interface CoordinatorFaculty {
  name: string;
  role: string;
  designation: string;
}

export interface CoordinatorsConfig {
  faculty: CoordinatorFaculty;
  students: CoordinatorStudent[];
}

export interface EventConfig {
  name: string;
  festName: string;
  organizer: string;
  tagline: string;
  description: string;
  eventType: string;
  category: string;
  date: string;
  dateShort: string;
  time: string;
  venue: string;
  mode: string;
  participation: string;
  characterImage: string;
  logoText: string;

  coordinators: CoordinatorsConfig;

  guest: {
    name: string;
    title: string;
    secondaryTitle: string;
    image: string;
    bio: string;
    vision: string;
    debutGame: {
      title: string;
      description: string;
      url: string;
    };
    socials: {
      instagram: string;
      youtube: string;
    };
    date: string;
    time: string;
    venue: string;
  };

  session: {
    title: string;
    eyebrow: string;
    heading: string;
    description: string;
    paragraphs: string[];
    focusPoints: { title: string; desc: string }[];
  };

  experience: {
    id: string;
    number: string;
    title: string;
    description: string;
    meta: string;
    icon: string;
  }[];

  specifications: {
    label: string;
    value: string;
    subValue: string;
    highlight?: boolean;
    icon: string;
  }[];

  conduct: {
    index: string;
    title: string;
    description: string;
  }[];

  certificates: {
    title: string;
    description: string;
    notice: string;
  };

  faq: {
    question: string;
    answer: string;
  }[];

  registration: {
    label: string;
    url: string;
    status: string;
  };

  footer: {
    description: string;
    organizer: string;
    instagram: string;
    instagramUrl: string;
    email: string;
  };

  host: {
    organizer: string;
    institution: string;
    campus: string;
    city: string;
  };
}

export const eventData: EventConfig = {
  name: "BREAKING THE BUILD",
  festName: "IGNITRRON 26",
  organizer: "IGNITRRON KPRIET",
  tagline: "BUILD. BREAK. REIMAGINE.",
  description: "An interactive game development session where students can showcase their creativity and technical vision, engage with a game developer, and receive constructive feedback.",
  eventType: "GAME DEVELOPMENT INTERACTION SESSION",
  category: "IGNITRRON 26",
  date: "September 19, 2026",
  dateShort: "19 / 09 / 2026",
  time: "9:00 AM – 1:00 PM",
  venue: "CSE GALAXY HALL",
  mode: "OFFLINE",
  participation: "INDIVIDUAL",
  characterImage: characterImg,
  logoText: "BB",

  coordinators: {
    faculty: {
      name: "Mr. Munirathnam T.",
      role: "Staff Coordinator",
      designation: "Faculty / Staff Coordinator"
    },
    students: [
      { name: "Srisanth S", phone: "7826993366", role: "Student Coordinator" },
      { name: "Sredivit K T", phone: "9363717009", role: "Student Coordinator" },
      { name: "Dhyan", phone: "9042212896", role: "Student Coordinator" }
    ]
  },

  guest: {
    name: "PRADEEP BASKARAN",
    title: "GAME DIRECTOR",
    secondaryTitle: "GAME DEVELOPER",
    image: pradeepImg,
    bio: "Pradeep Baskaran is a Game Director of Target Forces and a game studio in India.",
    vision: "His vision focuses on creating immersive games through original IP, with deep lore, esports potential, content creation tools, and transmedia expansion across movies, animated series, and comics.",
    debutGame: {
      title: "TARGET FORCES",
      description: "Mobile-first multiplayer shooter / extraction game",
      url: "https://www.targetforces.com/",
    },
    socials: {
      instagram: "https://www.instagram.com/gamedev.withpradeep",
      youtube: "https://www.youtube.com/@GamedirectionwithPradeep",
    },
    date: "19 SEPTEMBER 2026",
    time: "09:00 AM — 01:00 PM",
    venue: "CSE GALAXY HALL",
  },

  session: {
    title: "BREAKING THE BUILD",
    eyebrow: "01  SESSION OVERVIEW",
    heading: "EXPLORE GAME DEVELOPMENT THROUGH REAL INTERACTION",
    description: "This session gives students a platform to showcase their creativity and technical vision while receiving constructive feedback and engaging in professional interaction.",
    paragraphs: [
      "Breaking the Build is a dedicated game development interaction session hosted under IGNITRRON 26 by IGNITRRON KPRIET.",
      "The session provides students with a collaborative platform to articulate their creative concepts, communicate their technical thinking, and receive direct, constructive insights from an industry game developer.",
      "Engage in an authentic learning environment designed to elevate technical perspective, encourage creative exploration, and bridge the gap between student vision and professional game craft."
    ],
    focusPoints: [
      {
        title: "CREATIVITY",
        desc: "Explore and communicate your creative ideas in game design and worldbuilding."
      },
      {
        title: "TECHNICAL VISION",
        desc: "Showcase the technical thinking and architectural logic behind your builds."
      },
      {
        title: "INTERACTION",
        desc: "Engage in open, professional dialogue during a focused interaction session."
      },
      {
        title: "CONSTRUCTIVE FEEDBACK",
        desc: "Gain valuable feedback and actionable industry perspective from a practicing game developer."
      }
    ]
  },

  experience: [
    {
      id: "creativity",
      number: "01",
      title: "CREATIVITY",
      description: "Explore and communicate creative ideas.",
      meta: "CREATIVE CORE",
      icon: "Sparkles",
    },
    {
      id: "technical-vision",
      number: "02",
      title: "TECHNICAL VISION",
      description: "Showcase the technical thinking behind your work.",
      meta: "TECH ARCHITECTURE",
      icon: "Cpu",
    },
    {
      id: "interaction",
      number: "03",
      title: "INTERACTION",
      description: "Engage directly in a game-development-focused session.",
      meta: "LIVE EXCHANGE",
      icon: "MessageSquare",
    },
    {
      id: "feedback",
      number: "04",
      title: "FEEDBACK",
      description: "Receive constructive feedback.",
      meta: "ACTIONABLE INSIGHTS",
      icon: "Layers",
    },
    {
      id: "growth",
      number: "05",
      title: "PROFESSIONAL GROWTH",
      description: "Learn through interaction and discussion.",
      meta: "INDUSTRY PERSPECTIVE",
      icon: "Compass",
    },
  ],

  specifications: [
    {
      label: "DATE",
      value: "19 SEPTEMBER 2026",
      subValue: "19 / 09 / 2026",
      highlight: true,
      icon: "Calendar",
    },
    {
      label: "TIME",
      value: "09:00 AM – 01:00 PM",
      subValue: "Morning interactive session",
      highlight: false,
      icon: "Clock",
    },
    {
      label: "VENUE",
      value: "CSE GALAXY HALL",
      subValue: "KPRIET Campus, Coimbatore",
      highlight: false,
      icon: "MapPin",
    },
    {
      label: "PARTICIPATION",
      value: "INDIVIDUAL",
      subValue: "Direct single-attendee registration",
      highlight: true,
      icon: "User",
    },
    {
      label: "HOST",
      value: "IGNITRRON KPRIET",
      subValue: "IGNITRRON 26 flagship fest",
      highlight: false,
      icon: "Building2",
    },
    {
      label: "GUEST",
      value: "PRADEEP BASKARAN",
      subValue: "Game Director",
      highlight: true,
      icon: "Gamepad2",
    },
  ],

  conduct: [
    {
      index: "01",
      title: "PROFESSIONALISM",
      description: "Maintain a respectful environment at all times. Harassment, shouting or aggressive behaviour toward staff or fellow participants will result in immediate removal from the session."
    },
    {
      index: "02",
      title: "INTEGRITY",
      description: "Handle provided equipment such as projectors and audio systems with care. Any damage caused by negligence will be the responsibility of the participant."
    },
    {
      index: "03",
      title: "FAIR PLAY",
      description: "Respect the final decisions made by the organizers. The primary goal of the session is learning and professional growth."
    }
  ],

  certificates: {
    title: "PARTICIPATION CERTIFICATES",
    description: "Participants will receive certificates for their participation in the session.",
    notice: "Official certification recognizing your participation and engagement in the game development interaction session at IGNITRRON 26."
  },

  faq: [
    {
      question: "What is Breaking the Build?",
      answer: "Breaking the Build is an interactive game development session at IGNITRRON 26, hosted by IGNITRRON KPRIET, where students can showcase their creativity and technical vision, engage with a game developer, and receive constructive feedback."
    },
    {
      question: "Who is the session for?",
      answer: "The session is designed for students interested in game development, creative design, technical architecture, and interactive media who want to learn and receive constructive feedback."
    },
    {
      question: "Is this a competition?",
      answer: "No, Breaking the Build is an interactive learning and exchange session focused on creativity, technical vision, and constructive professional feedback rather than a competition."
    },
    {
      question: "How can I participate?",
      answer: "You can participate by registering through the official registration portal via the 'REGISTER NOW ↗' buttons on this website."
    },
    {
      question: "Is participation individual or team-based?",
      answer: "Participation in Breaking the Build is strictly individual."
    },
    {
      question: "When is the session?",
      answer: "The session is scheduled for September 19, 2026, from 9:00 AM to 1:00 PM."
    },
    {
      question: "Where is the session?",
      answer: "The session will be held at CSE Galaxy Hall, KPRIET Campus."
    },
    {
      question: "Who is the guest?",
      answer: "The guest for this interaction session is Pradeep Baskaran, Game Director of Target Forces and a game studio in India."
    },
    {
      question: "Will participants receive certificates?",
      answer: "Yes, participants will receive certificates for their participation in the session."
    },
    {
      question: "What should I expect from the session?",
      answer: "Expect an engaging professional environment where you can explore creative concepts, share technical thinking, interact with a game developer, and gain valuable constructive feedback."
    }
  ],

  registration: {
    label: "REGISTER NOW ↗",
    url: "https://www.theticket9.com/event/ignitrron-26",
    status: "ACTIVE"
  },

  footer: {
    description: "An interactive game development session where students showcase creativity and technical vision, engage with a game developer, and receive constructive feedback.",
    organizer: "IGNITRRON KPRIET",
    instagram: "@kpriet_ignitrron",
    instagramUrl: "https://www.instagram.com/kpriet_ignitrron/",
    email: "ignitrron@kpriet.ac.in"
  },

  host: {
    organizer: "IGNITRRON KPRIET",
    institution: "KPR Institute of Engineering and Technology",
    campus: "KPRIET Campus",
    city: "Coimbatore, Tamil Nadu"
  }
};
