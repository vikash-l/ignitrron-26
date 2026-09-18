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

  character: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    quotes: string[];
    sectionDialogue: {
      hero: string;
      prelims: string;
      round1: string;
      finalBoss: string;
      requirements: string;
      winners: string;
    };
    aiPrompts: {
      question: string;
      answer: string;
    }[];
  };

  sections: {
    hero: boolean;
    roadToClash: boolean;
    funnel: boolean;
    prelims: boolean;
    round1: boolean;
    finalBoss: boolean;
    requirements: boolean;
    rules: boolean;
    prizes: boolean;
    coordinators?: boolean;
    faq: boolean;
    winners: boolean;
    registration: boolean;
  };

  coordinators?: {
    faculty: {
      name: string;
      role: string;
    }[];
    student: {
      name: string;
      role: string;
      phone: string;
    }[];
  };

  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    bgColor: string;
    textColor: string;
  };

  stats: {
    value: string;
    label: string;
    sub?: string;
  }[];

  roadToClash: {
    step: string;
    title: string;
    subtitle: string;
    description: string;
    highlight?: string;
  }[];

  prelims: {
    title: string;
    subtitle: string;
    description: string;
    evaluationMethod: {
      primary: string;
      secondary: string;
    };
    qualificationBadge: string;
    qualificationSub: string;
    flow: string[];
  };

  round1: {
    title: string;
    mainTitle: string;
    description: string;
    timeLimitNotice: string;
    qualificationGate: {
      start: string;
      roundName: string;
      target: string;
      nextStage: string;
    };
    challenges: {
      id: string;
      codeNumber: string;
      title: string;
      summary: string;
      description: string;
      iconName: string;
      exampleSnippet?: string;
    }[];
  };

  finalBoss: {
    title: string;
    mainTitle: string;
    badge: string;
    description: string;
    teamsCount: string;
    rankingFactors: {
      number: string;
      title: string;
      highlight?: boolean;
    }[];
    rankingNote: string;
    flowSteps: {
      step: number;
      label: string;
    }[];
    teamworkIndicators: {
      title: string;
      icon: string;
    }[];
  };

  requirements: {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: string;
  }[];

  stationery: {
    title: string;
    item: string;
    quantity: string;
    exactPhrase: string;
  };

  rules: {
    id: string;
    title: string;
    description: string;
    category: 'GENERAL' | 'PRELIMS' | 'ROUND 1' | 'FINAL BOSS' | 'CONDUCT';
  }[];

  prizes: {
    position: string;
    subLabel: string;
    title: string;
    description: string;
    amount?: string;
    perks: string[];
    icon: string;
  }[];

  faq: {
    question: string;
    answer: string;
    category: string;
  }[];

  winner: {
    title: string;
    subtitle: string;
    status: string;
    announced: boolean;
    championTeam?: {
      name: string;
      college: string;
      members: string[];
    };
  };

  registration: {
    label: string;
    url: string;
  };

  contact: {
    email: string;
    phone: string;
    location: string;
  };

  // Optional backward compatibility fields
  about?: {
    title: string;
    description: string;
    bullets: string[];
  };
  highlights?: {
    title: string;
    description: string;
    icon: string;
  }[];
  sponsors?: {
    name: string;
    category: string;
  }[];
  timeline?: {
    phase: string;
    day: string;
    time: string;
    title: string;
    description: string;
    location: string;
  }[];
}

export const eventData: EventConfig = {
  name: "TECHNO CLASH – QUIZ",
  tagline: "MULTI-ROUND TECHNICAL QUIZ",
  description: "A multi-round technical quiz covering engineering fundamentals, emerging technologies, programming, science, innovation, and current technological developments.",
  category: "NATIONAL TECHNICAL COMPETITION 2026",
  mode: "ONLINE PRELIMS + ON-STAGE FINALS",
  teamSize: "2 MEMBERS",

  character: {
    name: "NEXA",
    role: "TECHNO CLASH DIGITAL GUIDE",
    avatar: "character.jpg",
    bio: "Chief Systems Architect & inventor of the TECHNO CLASH neural evaluation grid.",
    quotes: [
      "Only 25 teams will survive the prelims.",
      "Round 1 is where logic meets speed.",
      "Ten teams remain.",
      "Welcome to the Final Boss.",
      "One correct solution. One fastest submission."
    ],
    sectionDialogue: {
      hero: "Welcome to Techno Clash. Fasten your neural links—the battle begins with Online Prelims.",
      prelims: "Only 25 teams will survive the prelims. Accuracy and score dictate who advances.",
      round1: "Round 1 is where logic meets speed. 6 challenge modules stand between 25 teams and the Top 10.",
      finalBoss: "Ten teams remain. One central challenge. Welcome to the Final Boss.",
      requirements: "Ensure your hardware and stable connection are prepped before entering the arena.",
      winners: "The arena awaits its champion. Who will conquer the Final Boss?"
    },
    aiPrompts: [
      {
        question: "WHAT IS THE COMPETITION FLOW?",
        answer: "Registration → Online Prelims → Top 25 Teams → Round 1 (Puzzle & Code) → Top 10 Teams → Round 2 (Final Boss) → Champion."
      },
      {
        question: "HOW DO PRELIMS WORK?",
        answer: "All registered teams take an online assessment covering technical aptitude, logical reasoning, and coding fundamentals. Evaluation is based on Accuracy + Score to select the Top 25."
      },
      {
        question: "WHAT IS IN ROUND 1?",
        answer: "The Top 25 teams tackle 6 challenge categories: Pattern & Sequence, Code Output, Debugging, Hidden Message, Logical Puzzles, and Optimization to qualify Top 10 for the Final Boss."
      },
      {
        question: "HOW IS FINAL BOSS RANKED?",
        answer: "Top 10 teams face a multi-step problem. Ranked by: 01 Solution Correctness, 02 Time Taken to Submit, 03 Overall Approach & Accuracy. The fastest team with a correct solution takes 1st place!"
      }
    ]
  },

  sections: {
    hero: true,
    roadToClash: true,
    funnel: true,
    prelims: true,
    round1: true,
    finalBoss: true,
    requirements: true,
    rules: true,
    prizes: true,
    coordinators: true,
    faq: true,
    winners: true,
    registration: true,
  },

  coordinators: {
    faculty: [
      {
        name: "Mr. Pradeepkumar G",
        role: "FACULTY COORDINATOR"
      }
    ],
    student: [
      {
        name: "Jai Gautham S",
        role: "STUDENT COORDINATOR",
        phone: "+91 93632 10400"
      },
      {
        name: "Gayathri K",
        role: "STUDENT COORDINATOR",
        phone: "+91 78717 51981"
      }
    ]
  },

  theme: {
    primaryColor: "from-cyan-500 via-blue-600 to-violet-600",
    secondaryColor: "from-violet-500 to-fuchsia-600",
    accentColor: "#00F0FF",
    bgColor: "bg-[#050814]",
    textColor: "text-slate-200"
  },

  stats: [
    { value: "03", label: "STAGES", sub: "Prelims → Round 1 → Final Boss" },
    { value: "TOP 25", label: "QUALIFICATION TARGET", sub: "From Online Prelims" },
    { value: "TOP 10", label: "FINALISTS", sub: "For Final Boss" },
    { value: "FINAL BOSS", label: "FINAL STAGE", sub: "Ultimate Challenge" }
  ],

  about: {
    title: "ABOUT TECHNO CLASH",
    description: "A multi-round technical quiz covering engineering fundamentals, emerging technologies, programming, science, innovation, and current technological developments.",
    bullets: [
      "Online prelims qualification based on Accuracy + Score",
      "Top 25 teams advance to Round 1: Puzzle & Code Challenge",
      "Top 10 teams face Round 2: Final Boss Challenge 👑",
      "Rankings determined by correctness, submission speed & overall approach"
    ]
  },

  roadToClash: [
    {
      step: "01",
      title: "REGISTRATION",
      subtitle: "TEAM SIGN-UP",
      description: "Form your team and register on the official portal to secure your entry pass into the TECHNO CLASH system.",
      highlight: "ALL REGISTERED TEAMS"
    },
    {
      step: "02",
      title: "ONLINE PRELIMS",
      subtitle: "QUALIFICATION ROUND",
      description: "Online preliminary assessment testing technical aptitude, logical reasoning, coding fundamentals, and problem-solving.",
      highlight: "EVALUATION: ACCURACY + SCORE"
    },
    {
      step: "03",
      title: "TOP 25 TEAMS",
      subtitle: "ROUND 1 QUALIFIERS",
      description: "The top 25 scoring teams from the online prelims unlock Round 1 on-site.",
      highlight: "TOP 25 CUTOFF"
    },
    {
      step: "04",
      title: "ROUND 1: PUZZLE & CODE",
      subtitle: "CHALLENGE MODULES",
      description: "Top 25 teams tackle short puzzles, code output prediction, debugging, hidden messages, and optimization problems.",
      highlight: "TOP 10 ADVANCE"
    },
    {
      step: "05",
      title: "ROUND 2: FINAL BOSS 👑",
      subtitle: "THE CLIMAX",
      description: "Top 10 finalist teams face a multi-step problem under high pressure. Ranked by correctness, submission speed, and analytical approach.",
      highlight: "1 CHAMPION"
    }
  ],

  prelims: {
    title: "PRELIMS",
    subtitle: "ONLINE QUALIFICATION ROUND",
    description: "All registered teams will participate in an online preliminary assessment consisting of technical aptitude, logical reasoning, coding fundamentals, and problem-solving questions.",
    evaluationMethod: {
      primary: "ACCURACY",
      secondary: "SCORE"
    },
    qualificationBadge: "TOP 25 TEAMS",
    qualificationSub: "QUALIFY FOR ROUND 1",
    flow: ["REGISTERED TEAMS", "ONLINE PRELIMS", "TOP 25", "ROUND 1"]
  },

  round1: {
    title: "ROUND 1",
    mainTitle: "PUZZLE & CODE CHALLENGE",
    description: "The Top 25 teams will face a collection of short puzzles, coding challenges, pattern-recognition problems, and logical reasoning tasks.",
    timeLimitNotice: "TIME LIMIT CONFIGURED BY ORGANIZERS",
    qualificationGate: {
      start: "25 TEAMS",
      roundName: "PUZZLE & CODE CHALLENGE",
      target: "TOP 10 TEAMS",
      nextStage: "FINAL BOSS"
    },
    challenges: [
      {
        id: "pattern-sequence",
        codeNumber: "01",
        title: "PATTERN & SEQUENCE",
        summary: "Identifying patterns and sequences",
        description: "Analyze non-linear numeric, geometric, and algorithmic sequences to deduce the next logical element.",
        iconName: "Binary",
        exampleSnippet: "Sequence: 2, 6, 12, 20, 30, ?"
      },
      {
        id: "code-output",
        codeNumber: "02",
        title: "CODE OUTPUT",
        summary: "Predicting the output of a code snippet",
        description: "Trace complex loop constructs, pointer mutations, recursion stacks, and scope bindings to predict exact console output.",
        iconName: "Terminal",
        exampleSnippet: "int a=5; printf('%d', a++ + ++a);"
      },
      {
        id: "debugging",
        codeNumber: "03",
        title: "DEBUGGING",
        summary: "Debugging a small program",
        description: "Locate off-by-one errors, memory leaks, concurrency race conditions, or syntax logic bugs within a micro-program.",
        iconName: "Bug",
        exampleSnippet: "FIX: while(i <= len) { arr[i] = ... }"
      },
      {
        id: "hidden-message",
        codeNumber: "04",
        title: "HIDDEN MESSAGE",
        summary: "Decoding hidden messages",
        description: "Decipher steganographic data streams, ciphers, binary encodings, and obfuscated string buffers.",
        iconName: "Key",
        exampleSnippet: "01010100 01000011 -> ASCII DECODE"
      },
      {
        id: "logical-puzzles",
        codeNumber: "05",
        title: "LOGICAL PUZZLES",
        summary: "Solving logical puzzles",
        description: "Tackle classic computer science logic puzzles, truth tables, state machines, and constraint satisfaction matrices.",
        iconName: "BrainCircuit",
        exampleSnippet: "P ⊕ Q ≡ ¬(P ↔ Q)"
      },
      {
        id: "optimization",
        codeNumber: "06",
        title: "OPTIMIZATION",
        summary: "Finding the most efficient solution to a given problem",
        description: "Refactor sub-optimal O(N²) algorithms into O(N log N) or O(N) spatial and temporal efficiency.",
        iconName: "Zap",
        exampleSnippet: "Reduce O(2^N) recursion to O(N) DP"
      }
    ]
  },

  finalBoss: {
    title: "ROUND 2",
    mainTitle: "FINAL BOSS CHALLENGE 👑",
    badge: "THE ULTIMATE CLIMAX",
    description: "The Top 10 teams will compete in the ultimate challenge—a multi-step problem designed to test their technical knowledge, analytical thinking, teamwork, and ability to perform under pressure.",
    teamsCount: "10 TEAMS • ONE FINAL CHALLENGE • ONE WINNER",
    rankingFactors: [
      { number: "01", title: "CORRECTNESS OF THE SOLUTION", highlight: true },
      { number: "02", title: "TIME TAKEN TO SUBMIT", highlight: true },
      { number: "03", title: "OVERALL APPROACH AND ACCURACY", highlight: false }
    ],
    rankingNote: "The fastest team to submit a correct solution will receive the highest score, followed by subsequent teams.",
    flowSteps: [
      { step: 1, label: "TOP 10 TEAMS" },
      { step: 2, label: "FINAL CHALLENGE RELEASED" },
      { step: 3, label: "ALL TEAMS START SIMULTANEOUSLY" },
      { step: 4, label: "ANALYZE" },
      { step: 5, label: "SOLVE" },
      { step: 6, label: "SUBMIT" },
      { step: 7, label: "VERIFY" },
      { step: 8, label: "RANK" }
    ],
    teamworkIndicators: [
      { title: "TECHNICAL KNOWLEDGE", icon: "Cpu" },
      { title: "ANALYTICAL THINKING", icon: "Brain" },
      { title: "TEAMWORK", icon: "Users" },
      { title: "PERFORMANCE UNDER PRESSURE", icon: "Gauge" }
    ]
  },

  requirements: [
    {
      id: "REQ-01",
      number: "01",
      title: "TEAM PARTICIPATION",
      description: "Participation will be team-based.",
      icon: "Users"
    },
    {
      id: "REQ-02",
      number: "02",
      title: "TEAM SIZE",
      description: "Each team must consist of exactly 2 members.",
      icon: "UserCheck"
    },
    {
      id: "REQ-03",
      number: "03",
      title: "DEVICE",
      description: "A laptop/computer with a functional web browser is required.",
      icon: "Laptop"
    },
    {
      id: "REQ-04",
      number: "04",
      title: "INTERNET",
      description: "A stable internet connection is required for the online Prelims.",
      icon: "Wifi"
    },
    {
      id: "REQ-05",
      number: "05",
      title: "KNOWLEDGE",
      description: "Teams should have basic knowledge of programming, logical reasoning, and problem-solving.",
      icon: "Code"
    },
    {
      id: "REQ-06",
      number: "06",
      title: "ACTIVE PARTICIPATION",
      description: "All team members are expected to actively participate.",
      icon: "Activity"
    },
    {
      id: "REQ-07",
      number: "07",
      title: "TIME LIMITS",
      description: "Each team must follow the prescribed time limits and submission procedures.",
      icon: "Clock"
    },
    {
      id: "REQ-08",
      number: "08",
      title: "AUTHORIZED ASSISTANCE",
      description: "Use of unauthorized external assistance may result in disqualification.",
      icon: "ShieldAlert"
    }
  ],

  stationery: {
    title: "STATIONERY REQUIREMENT",
    item: "A4 PAPERS",
    quantity: "100 SHEETS",
    exactPhrase: "Stationary items – A4 papers: 100"
  },

  rules: [
    {
      id: "RU-01",
      title: "TEAM PARTICIPATION",
      description: "Teams must register with exactly 2 members. Both members must be present for competition stages.",
      category: "GENERAL"
    },
    {
      id: "RU-02",
      title: "PRELIMS QUALIFICATION",
      description: "Only the Top 25 scoring teams from the Online Prelims assessment advance to Round 1 based on Accuracy + Score.",
      category: "PRELIMS"
    },
    {
      id: "RU-03",
      title: "ROUND 1 QUALIFICATION",
      description: "The Top 25 teams solve the 6 challenge modules. Only the Top 10 highest scoring teams qualify for the Final Boss.",
      category: "ROUND 1"
    },
    {
      id: "RU-04",
      title: "FINAL BOSS RANKING",
      description: "Rankings are determined by: 01 Correctness of solution, 02 Time taken to submit, 03 Overall approach and accuracy. Fastest correct submission takes top rank.",
      category: "FINAL BOSS"
    },
    {
      id: "RU-05",
      title: "TIME LIMITS & SUBMISSION PROCEDURES",
      description: "All teams must submit solutions strictly within the prescribed time limits. Late submissions will not be processed.",
      category: "GENERAL"
    },
    {
      id: "RU-06",
      title: "AUTHORIZED ASSISTANCE & DISQUALIFICATION",
      description: "Use of unauthorized external assistance, unauthorized devices, or malpractice will result in immediate disqualification.",
      category: "CONDUCT"
    }
  ],

  prizes: [
    {
      position: "1ST PRIZE",
      subLabel: "WINNER",
      title: "1ST PLACE",
      amount: "₹3,000",
      description: "Supreme triumph over the Final Boss Challenge.",
      perks: [
        "Cash Prize of ₹3,000",
        "Winner Certificate of Excellence",
        "Techno Clash Champion Trophy"
      ],
      icon: "Trophy"
    },
    {
      position: "2ND PRIZE",
      subLabel: "RUNNER UP",
      title: "2ND PLACE",
      amount: "₹2,000",
      description: "Excellence across Prelims, Round 1, and Final Boss.",
      perks: [
        "Cash Prize of ₹2,000",
        "Runner-Up Certificate of Merit"
      ],
      icon: "Award"
    },
    {
      position: "3RD PRIZE",
      subLabel: "SECOND RUNNER UP",
      title: "3RD PLACE",
      amount: "₹1,000",
      description: "Top-tier speed and algorithmic mastery.",
      perks: [
        "Cash Prize of ₹1,000",
        "Second Runner-Up Certificate of Merit"
      ],
      icon: "Medal"
    }
  ],

  faq: [
    {
      question: "What is the official competition structure?",
      answer: "Registration → Online Prelims → Top 25 Teams → Round 1 (Puzzle & Code) → Top 10 Teams → Round 2 (Final Boss) → Winners.",
      category: "STRUCTURE"
    },
    {
      question: "How many teams qualify for Round 1?",
      answer: "The Top 25 teams from the Online Prelims assessment qualify for Round 1.",
      category: "PRELIMS"
    },
    {
      question: "How many teams make it to the Final Boss?",
      answer: "The Top 10 teams from Round 1 qualify to compete in the Final Boss Challenge.",
      category: "ROUND 1"
    },
    {
      question: "How is the Final Boss ranked?",
      answer: "Rankings are based on 01 Correctness of solution, 02 Time taken to submit, and 03 Overall approach and accuracy. The fastest correct submission takes the top rank!",
      category: "FINAL BOSS"
    },
    {
      question: "What hardware is required?",
      answer: "A laptop/computer with a functional web browser and a stable internet connection for the Online Prelims.",
      category: "REQUIREMENTS"
    }
  ],

  winner: {
    title: "THE CLASH HAS A CHAMPION",
    subtitle: "FINAL BOSS VICTORY",
    status: "WINNER TO BE ANNOUNCED",
    announced: false
  },

  registration: {
    label: "REGISTER FOR CLASH",
    url: "https://www.theticket9.com/event/ignitrron-26"
  },

  contact: {
    email: "clash@techno-event.org",
    phone: "+91 98765 43210",
    location: "Department of Technology & Innovation"
  }
};
