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
    icon: string; // lucide icon name
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

  socials?: {
    platform: string;
    url: string;
  }[];
}

export const eventData: EventConfig = {
  name: "EVENT NAME",
  tagline: "EVENT TAGLINE",
  description: "A comprehensive master template structure engineered for 27 distinct event websites. Completely data-driven, responsive, and accessible.",
  category: "OFFICIAL EVENT 2026",
  date: "DD / MM / YYYY",
  time: "00:00",
  venue: "VENUE",
  mode: "HYBRID / ONLINE / OFFLINE",
  teamSize: "1 - 4 MEMBERS",
  deadline: "DD / MM / YYYY",

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
    sponsors: true,
    faq: true,
    registration: true,
  },

  theme: {
    primaryColor: "from-blue-600 to-indigo-700",
    secondaryColor: "from-sky-400 to-blue-500",
    accentColor: "blue",
    bgColor: "bg-[#050B14]",
    textColor: "text-slate-300",
    fontFamily: "'Inter', sans-serif"
  },

  stats: [
    { value: "00", label: "TEAMS" },
    { value: "00", label: "HOURS" },
    { value: "00+", label: "PARTICIPANTS" },
    { value: "00", label: "PRIZES" }
  ],

  about: {
    title: "ABOUT THE EVENT",
    description: "This is a placeholder description for the about section. When customizing this master template for a specific event, detailed overview text, background context, rules summary, and core objectives will replace this section text.",
    bullets: [
      "Data-driven design system with zero hardcoded section strings",
      "Configurable section visibility toggles",
      "Fully responsive dynamic timeline and round indicators",
      "Standardized component hierarchy and theme-ready CSS variables"
    ]
  },

  highlights: [
    {
      title: "HIGHLIGHT TITLE 01",
      description: "Placeholder description explaining the first key highlight or core pillar of this event.",
      icon: "Zap"
    },
    {
      title: "HIGHLIGHT TITLE 02",
      description: "Placeholder description explaining the second key highlight or technical aspect.",
      icon: "Target"
    },
    {
      title: "HIGHLIGHT TITLE 03",
      description: "Placeholder description explaining the third key highlight or competitive edge.",
      icon: "Award"
    },
    {
      title: "HIGHLIGHT TITLE 04",
      description: "Placeholder description explaining the fourth key highlight or learning opportunity.",
      icon: "Users"
    }
  ],

  rounds: [
    {
      number: "ROUND 01",
      title: "PHASE TITLE 1",
      description: "Initial phase description placeholder. Objective overview and participant qualification requirements.",
      duration: "00 HOURS",
      evaluation: "Evaluation criteria placeholder: Innovation (40%), Execution (40%), Presentation (20%)."
    },
    {
      number: "ROUND 02",
      title: "PHASE TITLE 2",
      description: "Intermediate phase description placeholder. Deep dive implementation and technical challenge submission.",
      duration: "00 HOURS",
      evaluation: "Evaluation criteria placeholder: Code Quality (50%), Functionality (50%)."
    },
    {
      number: "ROUND 03",
      title: "FINALS / PRESENTATION",
      description: "Final pitch and code review. Direct interaction with judges and final demonstration of the completed prototype.",
      duration: "00 HOURS",
      evaluation: "Evaluation criteria placeholder: Pitching (30%), Execution & Demo (70%)."
    }
  ],

  timeline: [
    {
      day: "DAY 1",
      time: "09:00 AM",
      title: "EVENT REGISTRATION & CHECK-IN",
      description: "Participant verification, badge distribution, and welcome kit collection."
    },
    {
      day: "DAY 1",
      time: "10:00 AM",
      title: "OPENING CEREMONY & KEYNOTE",
      description: "Introduction to guidelines, safety rules, timeline overview, and problem statement release."
    },
    {
      day: "DAY 1",
      time: "11:00 AM",
      title: "ROUND 1 COMMENCEMENT",
      description: "Teams commence work on the initial round deliverables and tasks."
    },
    {
      day: "DAY 1",
      time: "02:00 PM",
      title: "MID-WAY REVIEWS & MENTORSHIP",
      description: "Mentors evaluate current progress and offer technical guidance."
    },
    {
      day: "DAY 2",
      time: "04:00 PM",
      title: "FINAL SUBMISSION & JUDGING",
      description: "Project code submission deadline followed by live project demonstrations."
    }
  ],

  rules: [
    {
      id: "01",
      title: "Rule Entry #1",
      description: "Rule 01 placeholder: All participants must adhere to the official code of conduct."
    },
    {
      id: "02",
      title: "Rule Entry #2",
      description: "Rule 02 placeholder: Plagiarism or pre-existing submission work is strictly prohibited."
    },
    {
      id: "03",
      title: "Rule Entry #3",
      description: "Rule 03 placeholder: Submissions must be delivered within the designated time frame."
    },
    {
      id: "04",
      title: "Rule Entry #4",
      description: "Rule 04 placeholder: Decisions made by the panel of judges are final and binding."
    },
    {
      id: "05",
      title: "Rule Entry #5",
      description: "Rule 05 placeholder: Team sizes must strictly comply with the specified event criteria."
    }
  ],

  prizes: [
    {
      position: "1ST PLACE",
      subLabel: "CHAMPION AWARD",
      title: "1ST PLACE",
      description: "Grand cash award for top overall Business Model Canvas strategy.",
      amount: "₹5,000",
      icon: "Trophy"
    },
    {
      position: "2ND PLACE",
      subLabel: "RUNNER UP",
      title: "2ND PLACE",
      description: "Cash award for second place business innovation excellence.",
      amount: "₹3,000",
      icon: "Award"
    },
    {
      position: "3RD PLACE",
      subLabel: "SECOND RUNNER UP",
      title: "3RD PLACE",
      description: "Cash award for third place strategic presentation.",
      amount: "₹2,000",
      icon: "Medal"
    }
  ],

  sponsors: [
    {
      name: "SPONSOR ORGANISATION 01",
      category: "TITLE SPONSOR"
    },
    {
      name: "SPONSOR ORGANISATION 02",
      category: "PLATINUM SPONSOR"
    },
    {
      name: "SPONSOR ORGANISATION 03",
      category: "GOLD SPONSOR"
    },
    {
      name: "SPONSOR ORGANISATION 04",
      category: "COMMUNITY PARTNER"
    }
  ],

  faq: [
    {
      question: "What is the eligibility criteria for participating in this event?",
      answer: "The event is open to undergraduate and postgraduate students from any stream who meet the age and enrollment requirements."
    },
    {
      question: "How are submissions evaluated?",
      answer: "Submissions are scored based on innovation, technical complexity, relevance to the theme, and execution criteria."
    }
  ],

  registration: {
    label: "REGISTER NOW",
    url: "https://www.theticket9.com/event/ignitrron-26"
  },

  contact: {
    email: "contact@eventdomain.com",
    phone: "+00 123 456 7890",
    location: "Main Auditorium, Campus Ground"
  },

  socials: [
    { platform: "Instagram", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "GitHub", url: "#" }
  ]
};
