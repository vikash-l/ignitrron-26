// Central Registration Link - Changing this single variable updates every registration button across the site
export const REGISTRATION_URL = "#registration";

export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
}

export interface RoundInfo {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  iconName: string;
  visualType: 'lens' | 'cipher' | 'evidenceBoard';
  details: {
    format: string;
    objective: string;
    focusAreas: string[];
  };
}

export interface PrizeInfo {
  place: string;
  title: string;
  amount: string;
  numericAmount: number;
  highlight: string;
  badge: string;
  colorTheme: 'gold' | 'silver' | 'bronze';
}

export interface TimelineItem {
  id: string;
  phase: string;
  time: string;
  title: string;
  description: string;
  status: 'upcoming' | 'active' | 'completed';
}

export interface RuleItem {
  id: string;
  title: string;
  summary: string;
  details: string;
  category: 'General' | 'Conduct' | 'Evaluation';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Overview' | 'Schedule' | 'Rules' | 'Registration';
}

export const EVENT_DATA = {
  name: "CRIMINAL CHRONICLES 2.0",
  shortName: "CC 2.0",
  caseId: "CC-02.0",
  edition: "2.0",
  organizer: "IGNITRRON'26",
  day: "DAY 01",
  timing: "10:00 AM – 5:00 PM",
  venue: "Veena, IGN",
  primaryTagline: "INVESTIGATE • DEDUCE • SOLVE",
  secondaryTagline: "Three stages. One case. Can you uncover the truth?",
  description: "A forensic investigation challenge inspired by real investigative techniques and civil service aptitude examinations. Participants analyze crime scenes, evidence, images, witness statements, and logical clues to solve complex criminal cases.",
  
  stats: [
    { label: "EXPECTED PARTICIPANTS", value: "70+", numericValue: 70, suffix: "+" },
    { label: "EVENT DAY", value: "DAY 01", isText: true },
    { label: "EVENT TIMING", value: "10:00–5:00", isText: true },
    { label: "TOTAL PRIZE POOL", value: "₹6,000", numericValue: 6000, prefix: "₹" }
  ],

  caseBriefPillars: [
    {
      step: "01",
      title: "OBSERVE",
      quote: "Study what others overlook.",
      description: "Train your senses to detect minute visual anomalies, spatial patterns, and hidden perspective shifts in high-stakes crime scene documentation."
    },
    {
      step: "02",
      title: "DEDUCE",
      quote: "Connect clues and information.",
      description: "Synthesize disparate evidence fragments, witness statements, and locked ciphers using rigorous logical reasoning and analytical elimination."
    },
    {
      step: "03",
      title: "SOLVE",
      quote: "Build the most logical conclusion.",
      description: "Reconstruct the exact sequence of events, establish culprit motive and opportunity, and deliver an airtight forensic case presentation."
    }
  ],

  whyParticipate: [
    {
      id: "observation",
      title: "OBSERVATION",
      description: "Train your ability to notice details and interpret complex visual information under analytical pressure.",
      icon: "Eye"
    },
    {
      id: "logical-thinking",
      title: "LOGICAL THINKING",
      description: "Connect clues, systematically eliminate impossibilities, and structure rigorous deductive arguments.",
      icon: "BrainCircuit"
    },
    {
      id: "problem-solving",
      title: "PROBLEM SOLVING",
      description: "Approach unfamiliar forensic scenarios and locked cipher puzzles systematically without prior bias.",
      icon: "KeyRound"
    },
    {
      id: "teamwork",
      title: "TEAMWORK",
      description: "Collaborate effectively during intense challenge-based investigation rounds to reach consensus.",
      icon: "Users"
    }
  ],

  rounds: [
    {
      id: "round-1",
      number: "01",
      category: "ROUND 01 / VISUAL ANALYSIS",
      title: "SEE BEYOND THE FRAME",
      tagline: "Look carefully.",
      description: "Participants are shown an image and must carefully study it and describe what they observe based on perspective.",
      skills: ["OBSERVATION", "PERSPECTIVE", "VISUAL INTERPRETATION", "ATTENTION TO DETAIL"],
      iconName: "Camera",
      visualType: "lens",
      details: {
        format: "Visual Perspective Challenge",
        objective: "Examine high-resolution evidence imagery to uncover hidden visual perspective cues and structural discrepancies.",
        focusAreas: ["Spatial Relationships", "Lighting Anomalies", "Object Position Analysis", "Perspective Shifts"]
      }
    },
    {
      id: "round-2",
      number: "02",
      category: "ROUND 02 / ESCAPE ROOM",
      title: "ESCAPE THE CASE",
      tagline: "Find the way out.",
      description: "Participants enter an escape-room style challenge where they must investigate clues, solve puzzles and connect information to progress through the challenge.",
      skills: ["LOGICAL REASONING", "CLUE DISCOVERY", "PROBLEM SOLVING", "TEAM COORDINATION"],
      iconName: "Lock",
      visualType: "cipher",
      details: {
        format: "Tactical Escape Room",
        objective: "Decrypt locked evidence containers, resolve logical ciphers, and unseal sequential investigation chambers.",
        focusAreas: ["Cryptic Decryption", "Pattern Matching", "Sequential Logic", "Time-Bound Problem Solving"]
      }
    },
    {
      id: "round-3",
      number: "03",
      category: "ROUND 03 / CRIME INVESTIGATION",
      title: "SOLVE THE CRIME",
      tagline: "Uncover the ultimate truth.",
      description: "Participants investigate a crime scene, analyze the available evidence and clues, and use logical deduction to solve the crime.",
      skills: ["CRIME SCENE ANALYSIS", "EVIDENCE INTERPRETATION", "LOGICAL DEDUCTION", "CASE SOLVING"],
      iconName: "Search",
      visualType: "evidenceBoard",
      details: {
        format: "Full Crime Scene Reconstruction",
        objective: "Inspect the master crime scene board, cross-examine witness statements, correlate forensic evidence, and submit the final verdict.",
        focusAreas: ["Forensic Correlation", "Timeline Alignment", "Motive & Opportunity Mapping", "Final Case Presentation"]
      }
    }
  ] as RoundInfo[],

  timeline: [
    {
      id: "check-in",
      phase: "PHASE 01",
      time: "10:00 AM",
      title: "CHECK-IN & REGISTRATION",
      description: "Participant identity verification, distribution of investigation kits, badge issuance, and initial seating at Veena, IGN.",
      status: "upcoming"
    },
    {
      id: "briefing",
      phase: "PHASE 02",
      time: "10:30 AM",
      title: "CASE BRIEFING",
      description: "Official event inauguration, explanation of forensic guidelines, evaluation criteria, and case scenario outline.",
      status: "upcoming"
    },
    {
      id: "r1",
      phase: "PHASE 03",
      time: "TIMING TO BE ANNOUNCED",
      title: "ROUND 01: VISUAL ANALYSIS",
      description: "\"See Beyond the Frame\" — High-precision visual analysis and perspective observation challenge.",
      status: "upcoming"
    },
    {
      id: "r2",
      phase: "PHASE 04",
      time: "TIMING TO BE ANNOUNCED",
      title: "ROUND 02: ESCAPE ROOM",
      description: "\"Escape the Case\" — Interactive escape room challenge involving clues, ciphers, and sequential puzzle solving.",
      status: "upcoming"
    },
    {
      id: "r3",
      phase: "PHASE 05",
      time: "TIMING TO BE ANNOUNCED",
      title: "ROUND 03: CRIME SCENE INVESTIGATION",
      description: "\"Solve the Crime\" — Comprehensive crime scene examination, evidence correlation, and logical deduction.",
      status: "upcoming"
    },
    {
      id: "verdict",
      phase: "PHASE 06",
      time: "4:30 PM – 5:00 PM",
      title: "FINAL VERDICT & PRIZE CEREMONY",
      description: "Evaluation review by jury, presentation of final case breakdown, announcement of winners, and ₹6,000 prize distribution.",
      status: "upcoming"
    }
  ] as TimelineItem[],

  rules: [
    {
      id: "eligibility",
      title: "ELIGIBILITY",
      summary: "Official eligibility criteria for participants.",
      details: "Eligibility details will be announced by the event organizers. Open to registered participants of IGNITRRON'26.",
      category: "General"
    },
    {
      id: "participation",
      title: "PARTICIPATION & TEAMS",
      summary: "Team structure and registration protocols.",
      details: "Participation instructions will be provided by the organizers. Please ensure all team members hold valid IGNITRRON'26 passes.",
      category: "General"
    },
    {
      id: "round-guidelines",
      title: "ROUND GUIDELINES",
      summary: "Specific operational guidelines for each round.",
      details: "Detailed round instructions will be provided at the event.",
      category: "Conduct"
    },
    {
      id: "evaluation",
      title: "EVALUATION CRITERIA",
      summary: "Scoring structure and jury decisions.",
      details: "Evaluation criteria will be communicated by the organizers. Judges' decisions on forensic deduction and case accuracy are final and binding.",
      category: "Evaluation"
    },
    {
      id: "conduct",
      title: "CODE OF CONDUCT",
      summary: "Fair play and ethics policy.",
      details: "Participants must follow organizer instructions and maintain fair play.",
      category: "Conduct"
    }
  ] as RuleItem[],

  prizes: [
    {
      place: "1ST PRIZE",
      title: "CHAMPION DETECTIVE",
      amount: "₹3,000",
      numericAmount: 3000,
      highlight: "Grand Prize Award for the highest scoring team in overall forensic analysis and crime solving accuracy.",
      badge: "GOLD TROPHY",
      colorTheme: "gold"
    },
    {
      place: "2ND PRIZE",
      title: "RUNNER-UP",
      amount: "₹2,000",
      numericAmount: 2000,
      highlight: "Second place award for exceptional deductive reasoning and escape room completion velocity.",
      badge: "SILVER MEDAL",
      colorTheme: "silver"
    },
    {
      place: "3RD PRIZE",
      title: "SECOND RUNNER-UP",
      amount: "₹1,000",
      numericAmount: 1000,
      highlight: "Third place award for outstanding visual analysis and evidence correlation skills.",
      badge: "BRONZE MEDAL",
      colorTheme: "bronze"
    }
  ] as PrizeInfo[],

  totalPrizePool: "₹6,000",

  contacts: [
    {
      name: "DHIVYA BHARATHI V",
      role: "Event Coordinator",
      phone: "7810002013"
    },
    {
      name: "THYANICA V",
      role: "Event Coordinator",
      phone: "9566759995"
    },
    {
      name: "DINAKAR S",
      role: "Event Coordinator",
      phone: "9677595454"
    }
  ] as ContactInfo[],

  faq: [
    {
      id: "faq-1",
      question: "WHAT IS CRIMINAL CHRONICLES 2.0?",
      answer: "Criminal Chronicles 2.0 is a forensic investigation challenge inspired by real investigative techniques and civil service aptitude examinations. Participants analyze crime scenes, evidence, images, witness statements, and logical clues to solve complex criminal cases.",
      category: "Overview"
    },
    {
      id: "faq-2",
      question: "WHAT ARE THE THREE ROUNDS?",
      answer: "The event features three distinct sequential rounds:\n1. Round 01: See Beyond the Frame\n2. Round 02: Escape the Case\n3. Round 03: Solve the Crime",
      category: "Overview"
    },
    {
      id: "faq-3",
      question: "WHEN IS THE EVENT?",
      answer: "Criminal Chronicles 2.0 takes place on Day 1 from 10:00 AM to 5:00 PM.",
      category: "Schedule"
    },
    {
      id: "faq-4",
      question: "WHERE IS THE EVENT VENUE?",
      answer: "The event will be conducted at venue Veena, IGN.",
      category: "Schedule"
    },
    {
      id: "faq-5",
      question: "WHAT IS THE TOTAL PRIZE POOL?",
      answer: "The total prize pool is ₹6,000 distributed as:\n• 1st Place: ₹3,000\n• 2nd Place: ₹2,000\n• 3rd Place: ₹1,000",
      category: "Overview"
    },
    {
      id: "faq-6",
      question: "HOW DO I REGISTER?",
      answer: "Use the REGISTER NOW button on this website to proceed directly to the registration portal.",
      category: "Registration"
    },
    {
      id: "faq-7",
      question: "WHO CAN PARTICIPATE?",
      answer: "Eligibility details will be announced by the event organizers.",
      category: "Rules"
    }
  ] as FAQItem[]
};
