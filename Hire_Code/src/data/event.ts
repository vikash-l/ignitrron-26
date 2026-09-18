import characterImg from '../assets/JwwBb.jpg';
import speakerImg from '../assets/Pradeep.jpg';

export interface NavSection {
  id: string;
  index: string;
  label: string;
  title: string;
  badge: string;
}

export const navSections: NavSection[] = [
  { id: 'overview', index: '01', label: 'OVERVIEW', title: 'THE HIRE CODE', badge: 'EVENT BRIEF' },
  { id: 'workshop', index: '02', label: 'WORKSHOP', title: 'THE EMPLOYABILITY EDGE', badge: 'CORE MODULES' },
  { id: 'resource-person', index: '03', label: 'RESOURCE PERSON', title: 'EXPERT PROFILE', badge: 'FACILITATOR' },
  { id: 'guidelines', index: '04', label: 'GUIDELINES', title: 'ATTENDEE GUIDELINES', badge: 'SESSION PROTOCOLS' },
  { id: 'faq', index: '05', label: 'FAQ', title: 'FREQUENTLY ASKED QUESTIONS', badge: 'INQUIRY & SUPPORT' },
];

export interface EventConfig {
  name: string;
  workshopTitle: string;
  festName: string;
  organizer: string;
  institution: string;
  tagline: string;
  description: string;
  eventType: string;
  category: string;
  date: string;
  dateShort: string;
  day: string;
  time: string;
  duration: string;
  venue: string;
  mode: string;
  participation: string;
  characterImage: string;
  logoText: string;

  resourcePerson: {
    name: string;
    designation: string;
    title: string;
    organization: string;
    image: string;
    bio: string;
    relevance: string;
    date: string;
    time: string;
    venue: string;
  };

  modules: {
    index: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    points: string[];
  }[];

  stages: {
    index: string;
    title: string;
    tagline: string;
    description: string;
    icon: string;
  }[];

  videoResume: {
    title: string;
    eyebrow: string;
    heading: string;
    statement: string;
    description: string;
    aspects: { label: string; desc: string }[];
  };

  specifications: {
    label: string;
    value: string;
    subValue: string;
    highlight?: boolean;
    icon: string;
  }[];

  guidelines: {
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
    institution: string;
    instagram: string;
    instagramUrl: string;
    email: string;
  };
}

export const eventData: EventConfig = {
  name: "THE HIRE CODE",
  workshopTitle: "THE EMPLOYABILITY EDGE: COMMUNICATE, CONNECT, CONVINCE & GET HIRED",
  festName: "IGNITRRON 26",
  organizer: "IGNITRRON KPRIET",
  institution: "KPR Institute of Engineering and Technology",
  tagline: "COMMUNICATE. CONNECT. CONVINCE. GET HIRED.",
  description: "An interactive workshop designed to strengthen the communication, confidence and professional skills needed to perform effectively in interviews, group discussions and modern hiring environments.",
  eventType: "INTERACTIVE WORKSHOP",
  category: "IGNITRRON 26",
  date: "19 SEPTEMBER 2026",
  dateShort: "19 / 09 / 2026",
  day: "DAY 2",
  time: "10:00 AM – 1:00 PM",
  duration: "3 HOURS",
  venue: "NEW 360 HALL",
  mode: "OFFLINE",
  participation: "INDIVIDUAL",
  characterImage: characterImg,
  logoText: "HC",

  resourcePerson: {
    name: "SATHISH KUMAR RAMASUBBU",
    designation: "HEAD – SOFT SKILLS, RAISE SMART",
    title: "HEAD – SOFT SKILLS",
    organization: "RAISE SMART",
    image: speakerImg,
    bio: "Sathish Kumar Ramasubbu serves as Head – Soft Skills at RAISE SMART, empowering students and aspiring professionals with essential communication dynamics, leadership presence, and career readiness frameworks.",
    relevance: "Facilitating an experiential session focused on practical interview techniques, group dynamics, verbal and non-verbal communication, and modern video resume development.",
    date: "19 SEPTEMBER 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "NEW 360 HALL",
  },

  modules: [
    {
      index: "01",
      title: "INTERVIEW TECHNIQUES",
      subtitle: "STRUCTURED ARTICULATION",
      description: "Learn how to structure compelling answers, handle behavioral questions, and project confidence during professional recruitment interviews.",
      icon: "UserCheck",
      points: [
        "Structured behavioral answering methods",
        "Handling technical and situational questions",
        "Projecting genuine professional confidence"
      ]
    },
    {
      index: "02",
      title: "GROUP DISCUSSION",
      subtitle: "COLLABORATIVE LEADERSHIP",
      description: "Develop the ability to initiate discussions, contribute insightful points, build consensus, and lead without dominating in group evaluations.",
      icon: "Users",
      points: [
        "Strategic topic entry and idea initiation",
        "Active listening and constructive consensus",
        "Balanced perspective and team leadership"
      ]
    },
    {
      index: "03",
      title: "COMMUNICATION SKILLS",
      subtitle: "VERBAL & NON-VERBAL DYNAMICS",
      description: "Refine both verbal clarity and non-verbal cues including body language, posture, tonal modulation, and active listening habits.",
      icon: "MessageSquareText",
      points: [
        "Verbal clarity and concise messaging",
        "Body language, eye contact and posture",
        "Tonal modulation and persuasive presence"
      ]
    },
    {
      index: "04",
      title: "VIDEO RESUME",
      subtitle: "MODERN HIRING ASSETS",
      description: "Explore the emerging paradigm of video resumes through demonstrations and practical insights to stand out in contemporary hiring pipelines.",
      icon: "Video",
      points: [
        "Video resume structure and script flow",
        "Camera presence and visual articulation",
        "Demonstrations and practical learning"
      ]
    }
  ],

  stages: [
    {
      index: "01",
      title: "ACTIVITIES",
      tagline: "HANDS-ON LEARNING",
      description: "Engage in experiential exercises designed to test spontaneous thinking, articulate thoughts quickly, and break communication barriers.",
      icon: "Zap"
    },
    {
      index: "02",
      title: "GAMES",
      tagline: "SIMULATION DYNAMICS",
      description: "Participate in collaborative communication games and interactive simulation challenges that reinforce essential soft skills naturally.",
      icon: "Gamepad2"
    },
    {
      index: "03",
      title: "DISCUSSIONS",
      tagline: "ANALYTICAL EXCHANGES",
      description: "Take part in moderated group dialogues, case discussions, and scenario evaluations that sharpen articulate thinking.",
      icon: "MessageCircle"
    },
    {
      index: "04",
      title: "INTERACTION",
      tagline: "REAL-TIME ENGAGEMENT",
      description: "Interact directly with the resource person and peers to receive real-time feedback, clarity, and personalized employability insights.",
      icon: "Sparkles"
    }
  ],

  videoResume: {
    title: "VIDEO RESUME",
    eyebrow: "PRACTICAL INSIGHTS",
    heading: "VIDEO RESUME PRACTICAL CONCEPTS",
    statement: "The session includes practical insights into Video Resume concepts, supported by a video demonstration and interactive learning.",
    description: "In modern hiring pipelines, video resumes offer candidate differentiation through personal articulation, digital presence, and concise professional storytelling.",
    aspects: [
      {
        label: "CONCEPTUAL FOUNDATIONS",
        desc: "Understanding the objective, length, structure, and professional tone required for impactful video resumes."
      },
      {
        label: "VIDEO DEMONSTRATION",
        desc: "Reviewing illustrative demonstrations that showcase effective presentation, pacing, and visual delivery."
      },
      {
        label: "INTERACTIVE LEARNING",
        desc: "Engaging in hands-on guidance to conceptualize your own professional pitch and self-introduction."
      }
    ]
  },

  specifications: [
    {
      label: "DATE",
      value: "19 SEPTEMBER 2026",
      subValue: "Day 2 of IGNITRRON 26",
      highlight: true,
      icon: "Calendar",
    },
    {
      label: "DAY",
      value: "DAY 2",
      subValue: "Flagship Fest Schedule",
      highlight: false,
      icon: "CalendarDays",
    },
    {
      label: "TIME",
      value: "10:00 AM – 1:00 PM",
      subValue: "Morning Interactive Session",
      highlight: false,
      icon: "Clock",
    },
    {
      label: "DURATION",
      value: "3 HOURS",
      subValue: "Experiential & Activity-Based",
      highlight: true,
      icon: "Timer",
    },
    {
      label: "VENUE",
      value: "NEW 360 HALL",
      subValue: "KPRIET Campus, Coimbatore",
      highlight: false,
      icon: "MapPin",
    },
    {
      label: "FORMAT",
      value: "INTERACTIVE WORKSHOP",
      subValue: "Activities, Games & Interactions",
      highlight: true,
      icon: "Award",
    },
  ],

  guidelines: [
    {
      index: "01",
      title: "ACTIVE PARTICIPATION",
      description: "Be prepared to participate actively in all exercises, simulations, and discussions throughout the 3-hour session."
    },
    {
      index: "02",
      title: "READY FOR ACTIVITIES & GAMES",
      description: "Come with an open mindset ready to engage in hands-on activities, interactive games, and group dynamic tasks."
    },
    {
      index: "03",
      title: "ENGAGE RESPECTFULLY",
      description: "Maintain a supportive and respectful atmosphere during discussions, group exercises, and peer interactions."
    },
    {
      index: "04",
      title: "INTERACTIVE EXERCISES",
      description: "Take initiative during collaborative modules, mock discussions, and video resume learning segments."
    },
    {
      index: "05",
      title: "FOLLOW SESSION INSTRUCTIONS",
      description: "Follow the guidance and timeframes set by the resource person and coordinators to ensure maximum learning value."
    }
  ],

  certificates: {
    title: "PARTICIPATION CERTIFICATES",
    description: "Participants will receive official certificates recognizing their active engagement in The Hire Code workshop.",
    notice: "Official IGNITRRON 26 credential recognizing individual skill development in employability, communication, and modern interview readiness."
  },

  faq: [
    {
      question: "What is The Hire Code?",
      answer: "The Hire Code is an interactive employability workshop at IGNITRRON 26, hosted by IGNITRRON KPRIET, focused on communication, interviews, group discussions, and video resumes."
    },
    {
      question: "When is the workshop scheduled?",
      answer: "The workshop is scheduled for 19 September 2026 (Day 2), from 10:00 AM to 1:00 PM (Duration: 3 Hours)."
    },
    {
      question: "Where is the venue?",
      answer: "The workshop will take place at New 360 Hall, KPR Institute of Engineering and Technology."
    },
    {
      question: "Who is the resource person?",
      answer: "The session is conducted by Sathish Kumar Ramasubbu, Head – Soft Skills at RAISE SMART."
    },
    {
      question: "What will the session cover?",
      answer: "The session will cover interview techniques, group discussion techniques, verbal and non-verbal communication skills, and practical insights into Video Resumes."
    },
    {
      question: "What is the format of the session?",
      answer: "The workshop is activity-based and experiential, featuring activities, games, discussions, student interactions, and video resume practical demonstrations."
    },
    {
      question: "How do I register for the workshop?",
      answer: "You can register directly through the official registration link available via the 'REGISTER NOW ↗' buttons on this website."
    },
    {
      question: "Will participants receive certificates?",
      answer: "Yes, all registered attendees who participate in the workshop will receive official participation certificates from IGNITRRON 26."
    }
  ],

  registration: {
    label: "REGISTER NOW ↗",
    url: "https://www.theticket9.com/event/ignitrron-26",
    status: "ACTIVE"
  },

  footer: {
    description: "An interactive workshop designed to strengthen the communication, confidence and professional skills needed to perform effectively in interviews, group discussions and modern hiring environments.",
    organizer: "IGNITRRON KPRIET",
    institution: "KPR Institute of Engineering and Technology",
    instagram: "@kpriet_ignitrron",
    instagramUrl: "https://www.instagram.com/kpriet_ignitrron/",
    email: "ignitrron@kpriet.ac.in"
  }
};

