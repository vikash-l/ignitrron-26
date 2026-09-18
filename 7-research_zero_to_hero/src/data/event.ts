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
    researchJourney: boolean;
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

  researchJourney?: {
    step: string;
    title: string;
    description: string;
    icon: string;
  }[];

  rounds?: {
    number: string;
    title: string;
    description: string;
    marks?: string;
    duration?: string;
    evaluation?: string;
    visualTheme?: string; // Bruce Banner visual vs Gamma Experiment vs Hulk visual
    visualIcon?: string;
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
    email?: string;
    phone?: string;
    location?: string;
    faculty?: string;
    students?: { name: string; phone: string }[];
  };

  socials?: {
    platform: string;
    url: string;
  }[];
}

export const eventData: EventConfig = {
  name: "Research Zero to Hero",
  tagline: "Think Like a Researcher",
  description: "Every breakthrough begins with a question. Research Zero to Hero is a research-thinking competition that takes you from raw problems to a novel research proposal. No prototype required—evaluation is strictly on critical analysis, gap extraction, and academic defense.",
  category: "Organized by Science Club",
  date: "DAY 2",
  time: "10:00 AM – 4:00 PM",
  venue: "MECH CLASS",
  mode: "On-Campus",
  teamSize: "3",
  requirement: "Bring Own Laptops",

  sections: {
    hero: true,
    eventInfo: true,
    about: true,
    stats: false,
    highlights: true,
    researchJourney: true,
    rounds: true,
    timeline: true,
    rules: true,
    prizes: true,
    sponsors: false,
    faq: true,
    registration: true,
  },

  theme: {
    primaryColor: "from-emerald-600 to-green-700",
    secondaryColor: "from-green-400 to-emerald-500",
    accentColor: "emerald",
    bgColor: "bg-[#04080F]",
    textColor: "text-slate-350",
    fontFamily: "'Inter', sans-serif"
  },

  stats: [
    { value: "70", label: "EXPECTED PARTICIPANTS" },
    { value: "3", label: "MEMBERS PER TEAM" },
    { value: "DAY 2", label: "EVENT DAY" },
    { value: "10-4", label: "EVENT TIMING" }
  ],

  about: {
    title: "FROM ZERO TO HERO",
    description: "Participants experience the complete research process—from understanding a problem and examining existing solutions to identifying a research gap, proposing an original research idea, and defending it before judges. Critical thinking, logic, and scientific reasoning are your tools.",
    bullets: [
      "No prototype. No ordinary presentation. Think like a researcher.",
      "Understand the problem and study existing solution paradigms.",
      "Identify core limitations and extract the unexplored research gap.",
      "Defend your novelty, methodology, and grant proposal in front of judges."
    ]
  },

  highlights: [
    {
      title: "Research Thinking",
      description: "Learn to approach complex scientific and real-world problems like a researcher.",
      icon: "Microscope"
    },
    {
      title: "Critical Analysis",
      description: "Examine existing solutions and identify their weaknesses and boundaries.",
      icon: "Brain"
    },
    {
      title: "Scientific Innovation",
      description: "Transform an unexplored research gap into a fully original idea.",
      icon: "Lightbulb"
    },
    {
      title: "Methodology",
      description: "Design a logical scientific approach to validate and execute the proposed idea.",
      icon: "FlaskConical"
    },
    {
      title: "Scientific Novelty",
      description: "Explain and defend what makes your idea unique from state-of-the-art work.",
      icon: "Zap"
    },
    {
      title: "Research Pitch",
      description: "Defend your proposal before a panel of academic and industry judges.",
      icon: "Presentation"
    }
  ],

  researchJourney: [
    {
      step: "01",
      title: "BRUCE BANNER",
      description: "Question the Problem. Look closely at the core challenges and background elements.",
      icon: "🧠"
    },
    {
      step: "02",
      title: "RESEARCH",
      description: "Analyze Existing Solutions. Review literature and outline current operational limitations.",
      icon: "🔬"
    },
    {
      step: "03",
      title: "GAMMA DISCOVERY",
      description: "Identify the Research Gap. Pinpoint the specific unexplored opportunity.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "TRANSFORMATION",
      description: "Create the Novel Idea. Synthesize a structured methodology to address the gap.",
      icon: "💡"
    },
    {
      step: "05",
      title: "HULK",
      description: "Defend Your Research. Stand strong, address critiques, and justify your proposal.",
      icon: "💚"
    }
  ],

  rounds: [
    {
      number: "ROUND 01",
      title: "CLUE TO PROBLEM STATEMENT",
      description: "The participants are given an envelope which consists of clues, from which they are going to find the problem statement. If they find the problem statement they are advanced to the next round. If unable to find the problem statement using those clues they are eliminated. If they are able to find the problem statement partially and are not able to find the actual statement, their points would be deducted. The shortlisted teams advance to the next round.",
      visualTheme: "Envelope & Clue Extraction",
      visualIcon: "FolderSearch"
    },
    {
      number: "ROUND 02",
      title: "BRAINSTORM & JURY DEFENSE",
      description: "The shortlisted teams are given time to brainstorm with their team and present their research ideas with the juries. After the presentation there will be a question session with the juries. Based on their presentation skills, how well the team understands the problem, and how creative or innovative their solution is, they are awarded marks. Based on the marks, the top 3 teams are chosen and awarded the prizes.",
      visualTheme: "Research Presentation & Jury Q&A",
      visualIcon: "Atom"
    }
  ],

  timeline: [
    {
      day: "DAY 2",
      time: "10:00 AM",
      title: "EVENT STARTING",
      description: "Reporting of participants in the Mech Class and distribution of Round 1 problem statements."
    },
    {
      day: "DAY 2",
      time: "10:00 AM – 4:00 PM",
      title: "RESEARCH ZERO TO HERO WINDOW",
      description: "Official event duration spanning Banner's Analysis, Gamma Breakthrough, and Hulk's final pitches."
    },
    {
      day: "DAY 2",
      time: "04:00 PM",
      title: "EVENT WRAP-UP",
      description: "Conclusion of final judging panel assessments and closing remarks."
    }
  ],

  rules: [
    {
      id: "01",
      title: "Team Structure",
      description: "Each team consists of exactly 3 members. All members must participate."
    },
    {
      id: "02",
      title: "Research Gap",
      description: "Participants must identify a genuine, well-reasoned research gap based on materials or research domain."
    },
    {
      id: "03",
      title: "Originality",
      description: "Proposed research ideas should be completely original and not directly copied from standard existing work."
    },
    {
      id: "04",
      title: "Clear Boundaries",
      description: "Participants must clearly distinguish existing solutions from their proposed novel research idea."
    },
    {
      id: "05",
      title: "Conceptual Focus",
      description: "No prototype is required. The challenge centers on scientific thinking and proposal formulation."
    },
    {
      id: "06",
      title: "Logical Validity",
      description: "Teams must explain their proposed methodology logically, highlighting how it addresses the identified gap."
    },
    {
      id: "07",
      title: "Academic Defense",
      description: "Teams must be prepared to defend their proposal during the Q&A segment of the final pitch."
    },
    {
      id: "08",
      title: "Jury Decision",
      description: "The decisions made by the panel of judges are final and binding in all competition aspects."
    }
  ],

  prizes: [
    {
      position: "FIRST PRIZE",
      subLabel: "WINNER",
      title: "FIRST PRIZE",
      description: "Awarded for exceptional critical analysis, original idea generation, and a flawless Q&A defense.",
      amount: "₹5,000",
      icon: "Trophy"
    },
    {
      position: "SECOND PRIZE",
      subLabel: "RUNNER UP",
      title: "SECOND PRIZE",
      description: "Awarded to the second-best research proposal displaying technical complexity and clear gap analysis.",
      amount: "₹3,000",
      icon: "Award"
    },
    {
      position: "THIRD PRIZE",
      subLabel: "SECOND RUNNER UP",
      title: "THIRD PRIZE",
      description: "Recognizing outstanding logic, methodological structure, and research presentation quality.",
      amount: "₹2,000",
      icon: "Medal"
    }
  ],

  sponsors: [],

  faq: [
    {
      question: "What is Research Zero to Hero?",
      answer: "A research-thinking competition organized by the Science Club where participants move from identifying a research gap to proposing and defending a novel research idea."
    },
    {
      question: "Do we need to build a prototype?",
      answer: "No. The competition focuses on the research concept, logical validity, and scientific reasoning rather than prototype development."
    },
    {
      question: "How many members can be in a team?",
      answer: "Each team consists of exactly 3 members."
    },
    {
      question: "What happens in Round 1?",
      answer: "Participants receive an envelope containing clues to deduce the problem statement. Solving it advances the team to Round 2; failing to deduce it leads to elimination; partial deductions incur point deductions."
    },
    {
      question: "What happens in Round 2?",
      answer: "Shortlisted teams brainstorm and present their research proposals to juries followed by a Q&A session. Scoring is based on presentation, problem understanding, and innovation. Top 3 teams win prizes."
    },
    {
      question: "Who organizes the event?",
      answer: "The event is organized by the Science Club."
    }
  ],

  registration: {
    label: "ENTER THE RESEARCH ARENA",
    url: "https://www.theticket9.com/event/ignitrron-26"
  },

  contact: {
    faculty: "Dr. Subramaniyan R",
    students: [
      { name: "Sanjay Kumar S", phone: "6382098212" },
      { name: "Jai Shree P B", phone: "6383987979" },
      { name: "Rishapthi J", phone: "8637455248" }
    ]
  }
};
