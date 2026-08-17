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
      title: "BANNER'S ANALYSIS",
      marks: "25 MARKS",
      description: "Teams receive a short research summary or a problem statement with existing solutions. Act as a researcher (Bruce Banner) to perform a detailed literature review, identify existing solutions, extract limitations, and define the unexplored research gap. Domains: AI in healthcare, plastic recycling, smart agriculture, etc.",
      visualTheme: "Bruce Banner's Research Lab",
      visualIcon: "FolderSearch"
    },
    {
      number: "ROUND 02",
      title: "GAMMA BREAKTHROUGH",
      description: "Transform the research gap into an original research concept. Teams formulate: Title, Objective, Proposed Methodology, Expected Outcome, and Scientific Novelty. This is the moment of scientific breakthrough—focus on the conceptual strength, originality, and logic of your proposal.",
      visualTheme: "Gamma Experiment -> Research Discovery",
      visualIcon: "Atom"
    },
    {
      number: "ROUND 03",
      title: "HULK'S CHALLENGE",
      marks: "40 MARKS",
      description: "Present your proposal in a grant-style pitch deck. Outline the problem, methodology, and future scope. Engage in an academic defense: answer judges' Q&A regarding implementation challenges, validation methodology, and real-world viability with complete confidence.",
      visualTheme: "Hulk Emerging from Gamma Energy",
      visualIcon: "Dumbbell"
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
      answer: "Teams analyze a research summary or problem statement and identify: the existing solution, limitations, and the unexplored research gap."
    },
    {
      question: "What happens in Round 2?",
      answer: "Teams convert their identified research gap into an original, structured research concept outlining objectives and methodology."
    },
    {
      question: "What happens in Round 3?",
      answer: "Teams pitch their research proposal in a grant-style defense presentation and answer judges' questioning."
    },
    {
      question: "Who organizes the event?",
      answer: "The event is organized by the Science Club."
    }
  ],

  registration: {
    label: "ENTER THE RESEARCH ARENA",
    url: "#participate"
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
