import characterImg from '../assets/JwwBb.jpg';

export interface NavSection {
  id: string;
  index: string;
  label: string;
  title: string;
  badge: string;
}

export const navSections: NavSection[] = [
  { id: 'about', index: '01', label: 'ABOUT', title: 'SCIENTIFIC INNOVATION & PRESENTATION', badge: 'EVENT OVERVIEW' },
  { id: 'categories', index: '02', label: 'DOMAINS', title: '05 DOMAINS. ONE ARENA.', badge: 'DOMAIN SPECIFICATION' },
  { id: 'rounds', index: '03', label: 'FORMAT', title: 'PRESENTATION FORMAT', badge: 'TIMED FORMAT' },
  { id: 'rules', index: '04', label: 'RULES', title: 'RULES & REGULATIONS', badge: 'OFFICIAL PROTOCOLS' },
  { id: 'faq', index: '05', label: 'FAQ', title: 'FREQUENTLY ASKED QUESTIONS', badge: 'INQUIRY & SUPPORT' },
];

export interface EventConfig {
  name: string;
  festName: string;
  organizer: string;
  tagline: string;
  description: string;
  category: string;
  date: string;
  dateShort: string;
  time: string;
  venue: string;
  mode: string;
  teamSize: string;
  presentationFormat: string;
  presentationTime: string;
  qaTime: string;
  totalTime: string;
  characterImage: string;
  logoText: string;

  about: {
    title: string;
    eyebrow: string;
    description: string;
    paragraphs: string[];
    focusPoints: { title: string; desc: string }[];
  };

  highlights: {
    id: string;
    number: string;
    title: string;
    description: string;
    meta: string;
    icon: string;
  }[];

  rounds: {
    number: string;
    title: string;
    duration: string;
    role: string;
    description: string;
  }[];

  timeline: {
    time: string;
    title: string;
    description: string;
  }[];

  rules: {
    index: string;
    title: string;
    description: string;
  }[];

  contacts: {
    name: string;
    phone: string;
    role: string;
  }[];

  categories: {
    id: string;
    number: string;
    name: string;
    tagline: string;
    departments: string;
  }[];

  prizes: {
    position: string;
    title: string;
    description: string;
    scope: string;
    icon: string;
  }[];

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
  name: "PROJECT PRESENTATION",
  festName: "IGNITRRON 26",
  organizer: "IGNITRRON KPRIET",
  tagline: "STRETCH YOUR IDEAS BEYOND LIMITS.",
  description: "Present your project, explain the problem you are solving, showcase your approach and communicate the technology behind your solution before the evaluation panel.",
  category: "IGNITRRON 26",
  date: "September 18, 2026",
  dateShort: "18 / 09 / 2026",
  time: "10:00 AM - 5:00 PM",
  venue: "KPRIET ECE Classroom",
  mode: "OFFLINE",
  teamSize: "3-4 Members",
  presentationFormat: "8 Minutes Total (5 Min Presentation + 3 Min Q&A)",
  presentationTime: "05 MINUTES",
  qaTime: "03 MINUTES",
  totalTime: "08 MINUTES",
  characterImage: characterImg,
  logoText: "4",

  about: {
    title: "SCIENTIFIC INNOVATION & PRESENTATION",
    eyebrow: "01  ABOUT THE EVENT",
    description: "Project Presentation at IGNITRRON 26 is a premier technical competition hosted under IGNITRRON KPRIET, designed to spotlight engineering excellence, innovative problem solving, and rigorous project defence.",
    paragraphs: [
      "Creators, developers, and researchers from all disciplines converge to present their authentic solutions before an expert evaluation panel.",
      "Each team takes the stage to articulate the problem statement, explain their technical architecture, and defend their implementation decisions during the judges' interrogation.",
      "With 5 dedicated domain categories spanning software, electronics, physical hardware, biological engineering, and commercial innovation, every discipline has a direct arena to compete."
    ],
    focusPoints: [
      {
        title: "PROBLEM SOLVING",
        desc: "Clearly demonstrate the real-world challenge identified and the validity of your approach."
      },
      {
        title: "TECHNICAL DEPTH",
        desc: "Articulate the architecture, core algorithms, hardware choices, and implementation details."
      },
      {
        title: "PROJECT SHOWCASE",
        desc: "Display your working project and validate the practical viability of the build."
      },
      {
        title: "PANEL EVALUATION",
        desc: "Defend your engineering choices with confidence during the dedicated 3-minute Q&A."
      }
    ]
  },

  highlights: [
    {
      id: "showcase",
      number: "01",
      title: "PROJECT SHOWCASE",
      description: "Present your work and communicate what makes the project meaningful, innovative, and practically viable.",
      meta: "PROJECT CORE",
      icon: "Layers",
    },
    {
      id: "depth",
      number: "02",
      title: "TECHNICAL DEPTH",
      description: "Explain the technologies, methods, and architectural decisions behind your engineering solution.",
      meta: "TECH ARCHITECTURE",
      icon: "Cpu",
    },
    {
      id: "problem",
      number: "03",
      title: "PROBLEM SOLVING",
      description: "Show the real-world problem you identified and the structured approach used to address it.",
      meta: "SOLUTION LOGIC",
      icon: "Compass",
    },
    {
      id: "presentation",
      number: "04",
      title: "PRESENTATION",
      description: "Communicate your project clearly, concisely, and confidently within the allocated time window.",
      meta: "STAGE DELIVERY",
      icon: "Presentation",
    },
    {
      id: "evaluation",
      number: "05",
      title: "EVALUATION",
      description: "Present your work directly before the expert judging panel and respond to in-depth technical questions.",
      meta: "PANEL DEFENCE",
      icon: "CheckCircle2",
    },
  ],

  rounds: [
    {
      number: "PHASE 01",
      title: "PROJECT PRESENTATION",
      duration: "05 MINUTES",
      role: "TEAM PRESENTATION",
      description: "Teams present their project, articulating the problem statement, system design, technical execution, and project outcomes before the judging panel."
    },
    {
      number: "PHASE 02",
      title: "JUDGES Q&A",
      duration: "03 MINUTES",
      role: "TECHNICAL DEFENCE",
      description: "The evaluation panel questions the team on architecture, methodology, feasibility, and technical implementation decisions."
    }
  ],

  timeline: [
    {
      time: "10:00 AM - 2:00 PM",
      title: "Project Presentations",
      description: "Teams present their projects to the evaluation panel across all five domain categories."
    },
    {
      time: "2:00 PM - 4:00 PM",
      title: "Evaluation & Break",
      description: "Panel evaluates shortlisted entries. Teams take a well-deserved break."
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Winners & Prize Distribution",
      description: "Category winners announced and official recognition awarded on stage."
    },
  ],

  rules: [
    {
      index: "01",
      title: "TEAM COMPOSITION",
      description: "Team size is strictly 3 to 4 members per team. All registered team members must be present during their scheduled presentation slot."
    },
    {
      index: "02",
      title: "PRESENTATION FORMAT",
      description: "Each team receives exactly 8 minutes total: 5 minutes for the project presentation followed immediately by 3 minutes for judges' Q&A."
    },
    {
      index: "03",
      title: "PROJECT PRESENTATION & DEMO",
      description: "Teams must present their project and demonstrate their work before the panel. Concept-only or slides-only projects will not be considered."
    },
    {
      index: "04",
      title: "DOMAIN CATEGORIES",
      description: "Participants must register under one of the 5 official domains: Software, Circuits, Hardware & 3D, Bio, or Business & Arts."
    },
    {
      index: "05",
      title: "EVALUATION & WINNERS",
      description: "2 winners will be selected per category, creating 10 winning positions across the 5 domains. All judges' decisions are final."
    }
  ],

  contacts: [
    { name: "Sri Nagaarjunan D", phone: "8838375754", role: "Student Coordinator" },
    { name: "Sanjutha", phone: "9894435108", role: "Student Coordinator" },
    { name: "Preethika Shree", phone: "7418510077", role: "Student Coordinator" },
  ],

  categories: [
    {
      id: "software",
      number: "01",
      name: "SOFTWARE",
      tagline: "Code the future - intelligent algorithms, apps, and platforms",
      departments: "IT / CSE / CSBS / CSDS / AIML / AIDS",
    },
    {
      id: "circuits",
      number: "02",
      name: "CIRCUITS",
      tagline: "Power the signal - microcontrollers, VLSI, and signal architectures",
      departments: "EEE / ECE / Instrumentation",
    },
    {
      id: "hardware",
      number: "03",
      name: "HARDWARE & 3D",
      tagline: "Build the physical - robotics, CAD/CAM, and mechanical prototypes",
      departments: "Mech / Civil / Mechatronics",
    },
    {
      id: "bio",
      number: "04",
      name: "BIO",
      tagline: "Engineer life - biomedical devices, biotechnology, and health-tech",
      departments: "Chemical / BME / BioTech",
    },
    {
      id: "business",
      number: "05",
      name: "BUSINESS & ARTS",
      tagline: "Lead the vision - fintech, creative design, and enterprise innovation",
      departments: "Management / Design / Commerce",
    },
  ],

  prizes: [
    {
      position: "WINNER 01",
      title: "1ST POSITION PER CATEGORY",
      description: "Top-ranked project presentation awarded in each of the 5 official domains.",
      scope: "5 Positions Across Domains",
      icon: "Trophy"
    },
    {
      position: "WINNER 02",
      title: "2ND POSITION PER CATEGORY",
      description: "Distinguished project presentation awarded in each of the 5 official domains.",
      scope: "5 Positions Across Domains",
      icon: "Award"
    }
  ],

  faq: [
    {
      question: "What is Project Presentation?",
      answer: "Project Presentation is a competitive technical presentation event at IGNITRRON 26, hosted by IGNITRRON KPRIET, where student teams present their engineering solutions, explain their problem-solving approaches, and defend their work before an expert evaluation panel."
    },
    {
      question: "What is the team size for this event?",
      answer: "Each team must consist of 3 to 4 members. All team members must be present during the scheduled presentation."
    },
    {
      question: "What are the 5 official domains?",
      answer: "The 5 official domains are: 1. Software, 2. Circuits, 3. Hardware & 3D, 4. Bio, and 5. Business & Arts."
    },
    {
      question: "What is the presentation time format?",
      answer: "Each team gets exactly 8 minutes total: 5 minutes for the project presentation and 3 minutes for the judges' Q&A session."
    },
    {
      question: "How are winners recognized?",
      answer: "There are 2 winners per category (WINNER 01 and WINNER 02), totaling 10 winning positions recognized across the 5 domains."
    },
    {
      question: "When and where is the event scheduled?",
      answer: "The event is scheduled for September 18, 2026, from 10:00 AM to 5:00 PM at KPRIET ECE Classroom."
    },
    {
      question: "How do we register for the event?",
      answer: "You can register by clicking the 'REGISTER NOW ↗' buttons on this website to access the official registration portal at https://www.theticket9.com/event/ignitrron-26."
    }
  ],

  registration: {
    label: "REGISTER NOW ↗",
    url: "https://www.theticket9.com/event/ignitrron-26",
    status: "ACTIVE"
  },

  footer: {
    description: "An official IGNITRRON 26 project showcase where participants present, demonstrate, and communicate their ideas before an evaluation panel.",
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
