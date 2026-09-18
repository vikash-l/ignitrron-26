import { heroImage } from '../utils/assetLoader';

export interface NavSection {
  id: string;
  index: string;
  label: string;
  title: string;
  badge: string;
}

export const navSections: NavSection[] = [
  { id: 'overview', index: '01', label: 'OVERVIEW', title: 'AUTONOMOUS LINE FOLLOWER COMPETITION', badge: 'EVENT OVERVIEW' },
  { id: 'track', index: '02', label: 'THE TRACK', title: 'CIRCUIT TRAJECTORY & ARENA SPECIFICATIONS', badge: 'COURSE MATRIX' },
  { id: 'rounds', index: '03', label: 'ROUNDS', title: 'QUALIFICATION & FINAL TIMELINE', badge: 'COMPETITION STAGES' },
  { id: 'rules', index: '04', label: 'RULES', title: 'TECHNICAL COMPLIANCE & PROTOCOLS', badge: 'OFFICIAL RULEBOOK' },
  { id: 'faq', index: '05', label: 'FAQ', title: 'FREQUENTLY ASKED QUESTIONS', badge: 'INQUIRY & SUPPORT' },
];

export interface TrackFeature {
  id: string;
  number: string;
  name: string;
  description: string;
  tag: string;
}

export interface RuleCategory {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

export interface EventConfig {
  name: string;
  titleLine1: string;
  titleLine2: string;
  festName: string;
  categoryLabel: string;
  organizer: string;
  faculty: string;
  tagline: string;
  description: string;
  date: string;
  dateShort: string;
  time: string;
  venue: string;
  mode: string;
  teamSize: string;
  maxTeams: string;
  maxRobotSize: string;
  powerLimit: string;
  operationMode: string;
  remoteControlRule: string;
  trackLineWidth: string;
  characterImage: string;
  logoText: string;

  overview: {
    title: string;
    eyebrow: string;
    description: string;
    paragraphs: string[];
    pillars: { title: string; desc: string }[];
  };

  trackFeatures: TrackFeature[];

  rounds: {
    day: string;
    roundNumber: string;
    title: string;
    maxTime: string;
    participants: string;
    description: string;
    rules: string[];
  }[];

  progression: {
    step: string;
    count: string;
    label: string;
  }[];

  prizes: {
    position: string;
    title: string;
    amount: string;
    description: string;
    tier: string;
  }[];

  ruleCategories: RuleCategory[];

  penalties: {
    action: string;
    consequence: string;
    type: 'penalty' | 'disqualification';
  }[];

  scoring: {
    startCondition: string;
    stopCondition: string;
    rankingMethod: string;
    winnerCondition: string;
  };

  faq: {
    question: string;
    answer: string;
  }[];

  contacts: {
    name: string;
    phone: string;
    role: string;
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

  host: {
    organizer: string;
    institution: string;
    campus: string;
    city: string;
  };
}

export const eventData: EventConfig = {
  name: "PATH PILOT",
  titleLine1: "PATH",
  titleLine2: "PILOT",
  festName: "IGNITRRON 26",
  categoryLabel: "AUTONOMOUS ROBOTICS",
  organizer: "ELECTRONICS CLUB",
  faculty: "Dr. Jaikumar R",
  tagline: "FOLLOW THE LINE. MASTER THE COURSE.",
  description: "An autonomous line follower robot competition where precision, control and engineering determine who reaches the finish fastest.",
  date: "18 September 2026",
  dateShort: "18 / 09 / 2026",
  time: "9:00 AM – 4:00 PM",
  venue: "In front of Saaral (Chemical Block)",
  mode: "OFFLINE",
  teamSize: "Max 3 Members",
  maxTeams: "Up to 100 Teams",
  maxRobotSize: "250 mm × 250 mm",
  powerLimit: "Battery voltage below 16.8 V",
  operationMode: "Fully autonomous",
  remoteControlRule: "Strictly prohibited",
  trackLineWidth: "2.0–2.5 cm (Black Line)",
  characterImage: heroImage,
  logoText: "PP",

  overview: {
    title: "AUTONOMOUS LINE FOLLOWER ROBOT COMPETITION",
    eyebrow: "01 OVERVIEW",
    description: "PATH PILOT is an autonomous line follower robot competition organized by the Electronics Club as part of IGNITRRON 26.",
    paragraphs: [
      "PATH PILOT challenges student teams to engineer and program fully autonomous robots capable of high-speed, high-precision trajectory tracking along an intricate course.",
      "Robots must rely solely on onboard sensor arrays and embedded control algorithms to detect and follow the designated line without any external intervention.",
      "The competition unfolds in two high-stakes stages on Day 1: every registered team competes in Round 1 Qualification, with the Top 10 fastest teams advancing to the Final Round."
    ],
    pillars: [
      {
        title: "AUTONOMOUS ROBOT OPERATION",
        desc: "Robots navigate independently using realtime onboard sensor feedback and closed-loop control."
      },
      {
        title: "SENSOR-BASED LINE FOLLOWING",
        desc: "High-precision line sensing and calibration to maintain trajectory across diverse course elements."
      },
      {
        title: "ENGINEERING & PROGRAMMING",
        desc: "Custom chassis design, sensor placement, power optimization, and tuned control algorithms."
      },
      {
        title: "TWO-STAGE PROGRESSION",
        desc: "Rigorous Round 1 qualification leading to the Top 10 shootout on an exclusive Final Round track."
      }
    ]
  },

  trackFeatures: [
    {
      id: "straight",
      number: "01",
      name: "STRAIGHT SECTIONS",
      description: "High-speed acceleration corridors testing maximum stable velocity and drift recovery.",
      tag: "SPEED ZONE"
    },
    {
      id: "sharp-bends",
      number: "02",
      name: "SHARP BENDS",
      description: "High-angle acute and 90-degree transitions demanding rapid differential motor response.",
      tag: "AGILITY"
    },
    {
      id: "gradual-curves",
      number: "03",
      name: "GRADUAL CURVES",
      description: "Sweeping radii testing continuous steering precision and minimal track deviation.",
      tag: "TRAJECTORY"
    },
    {
      id: "loops",
      number: "04",
      name: "LOOPS",
      description: "Continuous circular geometries testing orientation consistency and centrifugal control.",
      tag: "STABILITY"
    },
    {
      id: "intersections",
      number: "05",
      name: "INTERSECTIONS",
      description: "Crossings requiring sensor discrimination and correct straight-through path continuation.",
      tag: "DISCRIMINATION"
    },
    {
      id: "gaps",
      number: "06",
      name: "GAPS & DISCONTINUOUS SECTIONS",
      description: "Line discontinuities testing dead-reckoning forward tracking and rapid line reacquisition.",
      tag: "DEAD-RECKONING"
    },
    {
      id: "arrangements",
      number: "07",
      name: "DIFFERENT PATH ARRANGEMENTS",
      description: "Dynamic segment sequences combining varied geometries to test all-round robot capabilities.",
      tag: "INTEGRATION"
    }
  ],

  rounds: [
    {
      day: "DAY 1",
      roundNumber: "ROUND 1",
      title: "QUALIFICATION",
      maxTime: "03 MINUTES",
      participants: "All Registered & Approved Teams (~100 Teams)",
      description: "Every registered and approved team participates on Day 1. Each team receives up to 3 minutes of official time on the qualification track. Multiple attempts may be made within that time, with only valid completed runs recorded.",
      rules: [
        "Every registered and approved team participates",
        "Maximum of 3 minutes official time per team",
        "Multiple attempts allowed within the 3-minute window",
        "Only valid completed runs are considered",
        "Top 10 teams with fastest valid completion times qualify for Final"
      ]
    },
    {
      day: "DAY 1",
      roundNumber: "ROUND 2",
      title: "FINAL ROUND",
      maxTime: "02 MINUTES",
      participants: "Top 10 Qualified Teams",
      description: "The elite Top 10 teams from Round 1 battle on a separate, dedicated Final Round track on Day 1. Each team gets a maximum official time of 2 minutes. The fastest valid completion time wins the championship.",
      rules: [
        "Strictly limited to the Top 10 teams from Round 1",
        "Conducted on a separate, newly configured Final Round track",
        "Maximum official time: 2 minutes",
        "Fastest valid completion time wins",
        "If teams obtain the same final result, a tie-breaker run may be conducted"
      ]
    }
  ],

  progression: [
    { step: "01", count: "100 TEAMS", label: "Registered Competitors" },
    { step: "02", count: "ROUND 1", label: "Qualification (3 Min)" },
    { step: "03", count: "TOP 10", label: "Advancing Finalists" },
    { step: "04", count: "FINAL ROUND", label: "Championship (2 Min)" },
    { step: "05", count: "WINNER", label: "Path Pilot Champion" }
  ],

  prizes: [
    {
      position: "1ST",
      title: "CHAMPION",
      amount: "₹5,000",
      description: "Top-ranked team with the fastest valid completion time in the Final Round.",
      tier: "GOLD"
    },
    {
      position: "2ND",
      title: "FIRST RUNNER UP",
      amount: "₹3,000",
      description: "Second fastest valid completion time in the Final Round.",
      tier: "SILVER"
    },
    {
      position: "3RD",
      title: "SECOND RUNNER UP",
      amount: "₹2,000",
      description: "Third fastest valid completion time in the Final Round.",
      tier: "BRONZE"
    }
  ],

  ruleCategories: [
    {
      id: "team",
      title: "TEAM & REGISTRATION",
      badge: "ELIGIBILITY",
      items: [
        "Maximum 3 members per team.",
        "Team members cannot be changed after registration.",
        "Only registered members may participate in official competition runs.",
        "One member must be designated for placing and starting the robot."
      ]
    },
    {
      id: "robot",
      title: "ROBOT SPECIFICATIONS",
      badge: "HARDWARE SPECS",
      items: [
        "Maximum dimensions: 250 mm × 250 mm (length × width).",
        "Battery voltage must remain strictly below 16.8 V.",
        "Own onboard battery/power source is strictly required.",
        "Damaged batteries, exposed wires, or unsafe electrical connections are not permitted."
      ]
    },
    {
      id: "autonomous",
      title: "AUTONOMOUS OPERATION",
      badge: "SYSTEM CONTROL",
      items: [
        "Robot must be fully autonomous from start to finish.",
        "Must follow the track exclusively using onboard sensors.",
        "Remote control of any form is strictly prohibited.",
        "Bluetooth, RF, Wi-Fi, and manual wireless control are strictly prohibited.",
        "Mobile phones, laptops, remote controllers, or external devices cannot be used for control during official runs.",
        "Robot must be designed, assembled, and programmed by the participating team.",
        "Ready-made, commercially fully-assembled line-following robots are not permitted."
      ]
    },
    {
      id: "track-rules",
      title: "TRACK RULES",
      badge: "ARENA PROTOCOL",
      items: [
        "Organizers maintain sole control over the official track.",
        "Participants cannot modify, mark, or obstruct the track surface.",
        "Robot must start from the designated START position.",
        "Robot must cross the designated FINISH line for a valid run.",
        "Participants must not interfere with another team's run."
      ]
    },
    {
      id: "safety",
      title: "SAFETY & ARENA INTEGRITY",
      badge: "SAFETY STANDARDS",
      items: [
        "Safe and undamaged batteries must be used at all times.",
        "No exposed wiring or loose electrical connections permitted.",
        "Robots must be powered off when not actively testing or operating.",
        "Tools, laptops, and loose components must be kept away from the track arena.",
        "Participants must remain outside the track boundary during another team's run.",
        "Organizers and safety marshals retain authority to immediately stop unsafe runs."
      ]
    }
  ],

  penalties: [],

  scoring: {
    startCondition: "When robot crosses the designated START line.",
    stopCondition: "When robot crosses the designated FINISH line.",
    rankingMethod: "Fastest valid completion time.",
    winnerCondition: "Fastest valid completion time in the Final Round."
  },

  faq: [
    {
      question: "What is the maximum team size?",
      answer: "Maximum 3 members."
    },
    {
      question: "How many teams can participate?",
      answer: "The event is expected to accommodate approximately 100 teams."
    },
    {
      question: "How does the competition work?",
      answer: "Both Round 1 Qualification and Round 2 Final take place on Day 1 (18 September 2026)."
    },
    {
      question: "How many teams qualify for the Final?",
      answer: "Top 10 teams from Round 1."
    },
    {
      question: "Is the robot allowed to be remotely controlled?",
      answer: "No. The robot must operate autonomously."
    },
    {
      question: "What is the maximum robot size?",
      answer: "250 mm × 250 mm."
    },
    {
      question: "What is the battery voltage limit?",
      answer: "Below 16.8 V."
    }
  ],

  contacts: [
    { name: "Nandhana P", phone: "93454 24357", role: "Student Coordinator" },
    { name: "Goutham R", phone: "75400 39101", role: "Student Coordinator" },
    { name: "Niranjanaa T", phone: "97872 82728", role: "Student Coordinator" }
  ],

  registration: {
    label: "REGISTER NOW ↗",
    url: "https://www.theticket9.com/event/ignitrron-26",
    status: "ACTIVE"
  },

  footer: {
    description: "An autonomous line follower robot competition where precision, control and engineering determine who reaches the finish fastest. Organized by Electronics Club as part of IGNITRRON 26.",
    organizer: "ELECTRONICS CLUB",
    institution: "KPR Institute of Engineering and Technology",
    instagram: "@kpriet_ignitrron",
    instagramUrl: "https://www.instagram.com/kpriet_ignitrron/",
    email: "ignitrron@kpriet.ac.in"
  },

  host: {
    organizer: "ELECTRONICS CLUB",
    institution: "KPR Institute of Engineering and Technology",
    campus: "KPRIET Campus",
    city: "Coimbatore, Tamil Nadu"
  }
};
