import characterImg from '../assets/JwwBb.jpg';

export interface NavSection {
  id: string;
  index: string;
  label: string;
  title: string;
  badge: string;
}

export const navSections: NavSection[] = [
  { id: 'race', index: '01', label: 'RACE', title: 'THE RACE', badge: 'OBSTACLE ARENA' },
  { id: 'format', index: '02', label: 'FORMAT', title: 'RACE FORMAT', badge: 'FLIGHT PROGRESSION' },
  { id: 'specs', index: '03', label: 'SPECS', title: 'DRONE SPECIFICATIONS', badge: 'TELEMETRY MATRIX' },
  { id: 'rules', index: '04', label: 'RULES', title: 'THE RULEBOOK', badge: 'OFFICIAL PROTOCOLS' },
  { id: 'prizes', index: '05', label: 'PRIZES', title: 'PRIZE POOL', badge: 'TACTICAL REWARDS' },
  { id: 'faq', index: '06', label: 'FAQ', title: 'FREQUENTLY ASKED QUESTIONS', badge: 'FLIGHT CONTROL' },
];

export interface SpecModule {
  value: string;
  label: string;
  description: string;
  category: string;
}

export interface EventConfig {
  name: string;
  festName: string;
  organizer: string;
  tagline: string;
  description: string;
  date: string;
  dateShort: string;
  time: string;
  venue: string;
  mode: string;
  teamSize: string;
  characterImage: string;
  logoText: string;

  race: {
    title: string;
    eyebrow: string;
    description: string;
    notes: string[];
    rounds: {
      number: string;
      title: string;
      type: string;
      scoring: string;
      rules: string[];
    }[];
  };

  format: {
    stages: {
      index: string;
      title: string;
      subtitle: string;
      description: string;
    }[];
    verdict: string;
  };

  specs: {
    telemetry: SpecModule[];
    guidelines: {
      title: string;
      status: string;
      description: string;
    }[];
  };

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

  faq: {
    question: string;
    answer: string;
  }[];

  registration: {
    label: string;
    url: string;
    status: string;
    modes: string;
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
  name: "DRONE RACE",
  festName: "IGNITRRON 26",
  organizer: "IGNITRRON KPRIET",
  tagline: "CONTROL THE FLIGHT. OWN THE COURSE.",
  description: "A high-intensity drone racing experience built around obstacle navigation, precision flight, speed, and control.",
  date: "18 September 2026",
  dateShort: "18 / 09 / 2026",
  time: "10:00 AM – 4:00 PM",
  venue: "MECH / CS",
  mode: "OFFLINE ARENA",
  teamSize: "MAX 4 MEMBERS",
  characterImage: characterImg,
  logoText: "DR",

  race: {
    title: "THE RACE",
    eyebrow: "01  AEROSPACE ARENA",
    description: "A two-round obstacle racing format focused on precision, navigation, speed, and controlled flight.",
    notes: [
      "The number and structure of rounds may vary depending on the number of participants.",
      "Further details will be explained during the briefing on Race Day."
    ],
    rounds: [
      {
        number: "ROUND 01",
        title: "OBSTACLE COURSE",
        type: "MINIMAL OBSTACLES",
        scoring: "POINT-BASED SCORING",
        rules: [
          "Obstacle contact → point deduction",
          "Skipped obstacle → point deduction",
          "Quickest time → bonus points",
          "Perfect landing → bonus points"
        ]
      },
      {
        number: "ROUND 02",
        title: "OBSTACLE COURSE",
        type: "FULL OBSTACLES",
        scoring: "TIME-BASED SCORING",
        rules: [
          "High-density obstacle navigation course",
          "Strict timed flight runs across the full circuit",
          "Fastest completed qualifying time determines ranking"
        ]
      }
    ]
  },

  format: {
    stages: [
      {
        index: "01",
        title: "BRIEFING",
        subtitle: "RACE DAY ORIENTATION",
        description: "Official flight briefing, arena walkthrough, and telemetry verification conducted prior to race commencement."
      },
      {
        index: "02",
        title: "ROUND 01",
        subtitle: "MINIMAL OBSTACLES | POINT BASIS",
        description: "Initial obstacle course featuring point-based scoring, obstacle penalties, speed bonuses, and landing precision points."
      },
      {
        index: "03",
        title: "ROUND 02",
        subtitle: "FULL OBSTACLES | TIME BASIS",
        description: "Advanced obstacle course requiring maximum speed and agility, evaluated strictly on overall race completion time."
      },
      {
        index: "04",
        title: "FINAL VERDICT",
        subtitle: "OFFICIAL ADJUDICATION",
        description: "The verdict of the judges is considered final, and no arguments will be entertained."
      }
    ],
    verdict: "The verdict of the judges is considered final, and no arguments will be entertained."
  },

  specs: {
    telemetry: [
      {
        value: "45 × 45 × 45 CM",
        label: "MAX INITIAL DIMENSION",
        description: "Maximum allowable overall frame envelope",
        category: "AIRFRAME"
      },
      {
        value: "200–450 MM",
        label: "FRAME SIZE",
        description: "Diagonal motor-to-motor wheelbase range",
        category: "STRUCTURE"
      },
      {
        value: "16.80 V",
        label: "MAX POWER",
        description: "Maximum 4S LiPo battery or 16.80 V limit",
        category: "POWER SYSTEM"
      },
      {
        value: "ROTARY",
        label: "WING TYPE",
        description: "Rotary wing configuration only",
        category: "PROPULSION"
      },
      {
        value: "2.5 KG",
        label: "MAX TAKE-OFF WEIGHT",
        description: "Maximum total weight including battery",
        category: "PAYLOAD"
      },
      {
        value: "10–15 MIN",
        label: "MIN ENDURANCE",
        description: "Minimum operational flight duration",
        category: "BATTERY LIFE"
      },
      {
        value: "LINE OF SIGHT",
        label: "OPERATION",
        description: "Direct pilot line-of-sight visual control",
        category: "NAVIGATION"
      },
      {
        value: "900 MHz–2.4 GHz",
        label: "RADIO TELEMETRY",
        description: "Permitted RF control and transmission band",
        category: "RF LINK"
      }
    ],
    guidelines: [
      {
        title: "PARTICIPANT MARKING",
        status: "MANDATORY",
        description: "Head markings must be done by the participant prior to entering the arena."
      },
      {
        title: "READY-MADE DRONES",
        status: "PROHIBITED",
        description: "Ready-made off-the-shelf consumer drones are not allowed to compete."
      }
    ]
  },

  rules: [
    {
      index: "01",
      title: "TEAM COMPOSITION",
      description: "A team may comprise a maximum of four participants."
    },
    {
      index: "02",
      title: "ONE DRONE LIMIT",
      description: "Each participating team is not permitted to compete with more than one drone."
    },
    {
      index: "03",
      title: "ARENA SAFETY",
      description: "No participants are allowed inside the arena during live operations."
    },
    {
      index: "04",
      title: "NO PRACTICE RUN",
      description: "Trail runs and practice sessions inside the arena are strictly not allowed."
    },
    {
      index: "05",
      title: "SAFETY AUTHORITY",
      description: "Event organizers reserve the right to stop the match at any point if they determine that the match is becoming dangerous."
    },
    {
      index: "06",
      title: "IDENTIFICATION",
      description: "Every member of the participating team must carry a valid student ID or Company ID card of their college/company and produce it at registration."
    },
    {
      index: "07",
      title: "TEAM ELIGIBILITY",
      description: "A team can comprise students from different colleges/teams. There is no restriction on the number of teams from a college."
    },
    {
      index: "08",
      title: "JUDGES' VERDICT",
      description: "The verdict of the judges is considered final, and no arguments will be entertained. Contestants must comply with organizer instructions; violation may lead to immediate disqualification."
    }
  ],

  contacts: [
    {
      name: "Dhanush Kumar S",
      phone: "+91 82206 61884",
      role: "Event Coordinator"
    },
    {
      name: "Aravind S",
      phone: "+91 99449 14515",
      role: "Event Coordinator"
    }
  ],

  faq: [
    {
      question: "What is Drone Race?",
      answer: "Drone Race at IGNITRRON 26 is a high-intensity obstacle racing competition hosted by IGNITRRON KPRIET where pilots navigate obstacle courses testing precision flight, speed, control, and drone engineering."
    },
    {
      question: "How many members can be in a team?",
      answer: "A team may comprise a maximum of 4 participants."
    },
    {
      question: "Can participants from different colleges form a team?",
      answer: "Yes, a team can comprise students from different colleges or teams. There is also no restriction on the number of teams from a college."
    },
    {
      question: "Can a team use more than one drone?",
      answer: "No. Each participating team is not permitted to compete with more than one drone."
    },
    {
      question: "Can I register on the spot?",
      answer: "Yes, contestants can register online prior to the event, and on-spot registrations are also available on Race Day."
    },
    {
      question: "What are the two race rounds?",
      answer: "Round 01 is an Obstacle Course with minimal obstacles and point-based scoring (penalties for touching/skipping obstacles and bonuses for quickest time and perfect landing). Round 02 is an Obstacle Course with full obstacles evaluated on time-based scoring."
    },
    {
      question: "What happens if the drone touches an obstacle?",
      answer: "In Round 01, touching an obstacle results in points deduction. Skipping an obstacle also results in points deduction."
    },
    {
      question: "Are practice runs allowed inside the arena?",
      answer: "No. Trail runs and practice inside the arena are strictly not allowed, and no participants are permitted inside the arena."
    },
    {
      question: "What drone dimensions are permitted?",
      answer: "Initial dimensions must not exceed 45 cm × 45 cm × 45 cm, with a frame size of 200 mm – 450 mm, max take-off weight of 2.5 kg, and battery power of maximum 4S or 16.80 V."
    },
    {
      question: "Are ready-made drones allowed?",
      answer: "No. Ready-made drones are not allowed. Only custom built / participant assembled drones with rotary wings are permitted."
    },
    {
      question: "What identification should participants carry?",
      answer: "Every member of the participating team must carry a valid student ID or Company ID card of their college/company and produce it at registration."
    },
    {
      question: "When will additional race details be explained?",
      answer: "Further details regarding round structure and specific course guidelines will be explained during the briefing on Race Day."
    },
    {
      question: "Where is the event held?",
      answer: "The Drone Race takes place at MECH / CS on 18 September 2026 from 10:00 AM to 4:00 PM."
    }
  ],

  registration: {
    label: "REGISTER NOW ↗",
    url: "https://www.theticket9.com/event/ignitrron-26",
    status: "ACTIVE",
    modes: "ONLINE & ON-SPOT AVAILABLE"
  },

  footer: {
    description: "Official Drone Race arena at IGNITRRON 26, hosted by IGNITRRON KPRIET. High-velocity obstacle navigation, precision aerospace telemetry, and timed aerial racing.",
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
