export interface EventConfig {
  name: string;
  tagline: string;
  description: string;
  category?: string;
  date?: string;
  time?: string;
  venue?: string;
  mode?: string;
  teamSize?: string;
  deadline?: string;

  sections: {
    hero: boolean;
    eventInfo: boolean;
    about: boolean;
    stats: boolean;
    highlights: boolean;
    rounds: boolean;
    timeline: boolean;
    rules: boolean;
    prizes: boolean;
    sponsors: boolean;
    faq: boolean;
    registration: boolean;
  };

  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    bgColor: string;
    textColor: string;
    fontFamily?: string;
  };

  stats?: {
    value: string;
    label: string;
  }[];

  about?: {
    title: string;
    description: string;
    bullets?: string[];
    imageUrl?: string;
  };

  highlights?: {
    title: string;
    description: string;
    icon: string;
  }[];

  rounds?: {
    number: string;
    title: string;
    description: string;
    duration?: string;
    evaluation?: string;
    rules?: string[];
  }[];

  timeline?: {
    day?: string;
    time: string;
    title: string;
    description: string;
  }[];

  rules?: {
    id: string;
    title: string;
    description: string;
  }[];

  prizes?: {
    position: string;
    subLabel: string;
    title: string;
    description: string;
    amount?: string;
    icon: string;
  }[];

  sponsors?: {
    name: string;
    category: string;
    website?: string;
  }[];

  faq?: {
    question: string;
    answer: string;
  }[];

  registration?: {
    label: string;
    url: string;
  };

  contact?: {
    email: string;
    phone: string;
    location: string;
  };

  coordinators?: {
    name: string;
    role: string;
    phone: string;
  }[];

  faculty?: {
    name: string;
    role: string;
  };

  socials?: {
    platform: string;
    url: string;
  }[];
}

export const eventData: EventConfig = {
  name: "MODEL UNITED NATIONS",
  tagline: "THE WORLD NEEDS A STRATEGIST.",
  description: "The world faces complex issues. Your mission is to understand them, discuss them and engineer the solution. Teams will analyze an issue, discuss possible solutions and present their final solution before the jury.",
  category: "MISSION: NICK FURY // LEVEL 7 CLEARANCE",
  date: "Day 1",
  time: "10:00 AM – 5:00 PM",
  venue: "Pallavi Hall",
  mode: "OFFLINE // IN-PERSON DIRECTIVE",
  teamSize: "2 Members / Team",
  deadline: "DAY 1 • 10:00 AM",

  sections: {
    hero: true,
    eventInfo: true,
    about: true,
    stats: true,
    highlights: true,
    rounds: true,
    timeline: true,
    rules: true,
    prizes: true,
    sponsors: false,
    faq: true,
    registration: true,
  },

  theme: {
    primaryColor: "from-red-600 to-rose-900",
    secondaryColor: "from-amber-500 to-red-600",
    accentColor: "red",
    bgColor: "bg-[#06080d]",
    textColor: "text-slate-200",
    fontFamily: "'Orbitron', 'Space Grotesk', sans-serif"
  },

  stats: [
    { value: "50", label: "EXPECTED PARTICIPANTS" },
    { value: "2", label: "MEMBERS / TEAM" },
    { value: "2", label: "EVALUATION ROUNDS" },
    { value: "₹6,000", label: "TOTAL PRIZE POOL" }
  ],

  about: {
    title: "ABOUT THE MISSION",
    description: "The world faces complex issues. Your mission is to understand them, discuss them and engineer the solution. The jury begins with an introduction and explanation of both rounds. Participants will be given an issue to discuss. Each team must analyze the issue, discuss possible approaches, and finally present a solution to the given issue.",
    bullets: [
      "Jury introduction and explanation of both evaluation phases",
      "Analysis of classified global issues with strategic problem-solving",
      "Rigorous diplomatic discussion and multi-lateral cross-examination",
      "Final solution defense and presentation before the expert jury"
    ]
  },

  highlights: [
    {
      title: "CLASSIFIED PROBLEM BRIEF",
      description: "Receive a real-world complex crisis briefing directly from the jury panel.",
      icon: "Target"
    },
    {
      title: "STRATEGIC ANALYSIS",
      description: "Deconstruct systemic factors, geopolitics, and socio-economic variables.",
      icon: "Shield"
    },
    {
      title: "DIPLOMATIC DISCUSSION",
      description: "Engage in structured deliberation and defend policy interventions.",
      icon: "Users"
    },
    {
      title: "EXECUTIVE RESOLUTION",
      description: "Pitch high-impact actionable resolutions directly to the jury.",
      icon: "Award"
    }
  ],

  rounds: [
    {
      number: "ROUND 01",
      title: "THE BRIEFING",
      description: "The jury begins with an introduction and explanation of both rounds. Teams receive the issue/problem briefing and initiate collaborative preparation and discussion.",
      duration: "MORNING SESSION",
      evaluation: "Jury introduction, Rules & round explanation, Issue/problem briefing, Team preparation & discussion."
    },
    {
      number: "ROUND 02",
      title: "THE SOLUTION",
      description: "Teams present their solution, engage in strategic discussion, propose their final solution, and receive jury evaluation.",
      duration: "AFTERNOON SESSION",
      evaluation: "Teams present their solution, Discussion, Final solution proposal, Jury evaluation."
    }
  ],

  timeline: [
    {
      day: "DAY 1",
      time: "10:00 AM",
      title: "JURY INTRODUCTION & ROUND BRIEFING",
      description: "Official opening, jury introductions, rules explanation, and issue briefing release."
    },
    {
      day: "DAY 1",
      time: "11:30 AM",
      title: "TEAM PREPARATION & ISSUE ANALYSIS",
      description: "Teams analyze the crisis, conduct research, and formulate strategy."
    },
    {
      day: "DAY 1",
      time: "02:00 PM",
      title: "DISCUSSION COMMENCEMENT",
      description: "Deliberation and cross-examination of strategic perspectives."
    },
    {
      day: "DAY 1",
      time: "03:30 PM",
      title: "FINAL SOLUTION PRESENTATIONS",
      description: "Teams present final solution proposals before the jury panel."
    },
    {
      day: "DAY 1",
      time: "04:45 PM",
      title: "JURY EVALUATION & PRIZE CEREMONY",
      description: "Awarding of ₹6,000 prize pool to 1st, 2nd, and 3rd rank teams."
    }
  ],

  rules: [
    {
      id: "01",
      title: "Team Structure",
      description: "Each team must strictly consist of exactly 2 members."
    },
    {
      id: "02",
      title: "Round Progression",
      description: "Both Round 1 (The Briefing) and Round 2 (The Solution) are mandatory for evaluation."
    },
    {
      id: "03",
      title: "Issue Analysis",
      description: "Teams must analyze the assigned issue and propose pragmatic solutions."
    },
    {
      id: "04",
      title: "Jury Authority",
      description: "The evaluation and scoring decisions of the jury panel are final."
    }
  ],

  prizes: [
    {
      position: "1ST PRIZE",
      subLabel: "CHAMPION DIRECTIVE",
      title: "1ST PRIZE",
      description: "Highest scoring diplomatic team in final solution presentation.",
      amount: "₹3,000",
      icon: "Trophy"
    },
    {
      position: "2ND PRIZE",
      subLabel: "RUNNER UP",
      title: "2ND PRIZE",
      description: "Second highest scoring team awarded for exceptional discussion.",
      amount: "₹2,000",
      icon: "Award"
    },
    {
      position: "3RD PRIZE",
      subLabel: "SECOND RUNNER UP",
      title: "3RD PRIZE",
      description: "Third highest scoring team recognized for tactical problem solving.",
      amount: "₹1,000",
      icon: "Medal"
    }
  ],

  coordinators: [
    {
      name: "Nithish S",
      role: "Coordinator 1",
      phone: "7350614725"
    },
    {
      name: "Bhavana B",
      role: "Coordinator 2",
      phone: "9030870406"
    },
    {
      name: "Seshanth V",
      role: "Coordinator 3",
      phone: "9566783359"
    }
  ],

  faculty: {
    name: "Ms. Malavika M P",
    role: "Faculty Advisor"
  },

  faq: [
    {
      question: "What is the team size for the MUN Conference?",
      answer: "Team size is strictly 2 members per team."
    },
    {
      question: "What is the total prize pool?",
      answer: "The total prize pool is ₹6,000 (1st: ₹3,000, 2nd: ₹2,000, 3rd: ₹1,000)."
    },
    {
      question: "What are the two rounds in the event?",
      answer: "Round 01 is 'The Briefing' (Jury intro, rules, issue briefing, preparation) and Round 02 is 'The Solution' (Teams present their solution, discussion, final solution proposal, jury evaluation)."
    },
    {
      question: "Where and when is the event conducted?",
      answer: "The event is on Day 1 from 10:00 AM – 5:00 PM at Pallavi Hall."
    }
  ],

  registration: {
    label: "ENTER THE BRIEFING",
    url: "#hero"
  },

  contact: {
    email: "mun@ignitrron.org",
    phone: "7350614725",
    location: "Pallavi Hall, Campus Ground"
  },

  socials: [
    { platform: "Instagram", url: "#" },
    { platform: "LinkedIn", url: "#" }
  ]
};
