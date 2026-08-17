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

  socials?: {
    platform: string;
    url: string;
  }[];
}

export const eventData: EventConfig = {
  name: "MARVEL QUIZ",
  tagline: "THE GOD OF MISCHIEF HAS ALTERED THE TIMELINE.",
  description: "Enter the TVA timeline for IGNITRRON'26. Master Asgardian lore, unravel temporal paradoxes, and claim your place in the multiversal archives.",
  category: "VARIANT: LOKI • REALITY: 616",
  date: "15 MARCH 2026",
  time: "10:00 AM",
  venue: "MAIN AUDITORIUM • TVA COMPLEX",
  mode: "OFFLINE / HYBRID",
  teamSize: "1 - 3 VARIANTS",
  deadline: "14 MARCH 2026",

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
    primaryColor: "from-[#0B5D3B] to-[#00E676]",
    secondaryColor: "from-[#C9A227] to-[#8F7418]",
    accentColor: "emerald",
    bgColor: "bg-[#020604]",
    textColor: "text-slate-300",
    fontFamily: "'Inter', sans-serif"
  },

  stats: [
    { value: "616", label: "TIMELINE BRANCHES" },
    { value: "03", label: "INTENSE PHASES" },
    { value: "500+", label: "ACTIVE VARIANTS" },
    { value: "₹25K", label: "PRIZE POOL" }
  ],

  about: {
    title: "ABOUT THE TIMELINE",
    description: "The God of Mischief has seized control of IGNITRRON'26. Variants will test their knowledge of the MCU, Marvel Comics, and Asgardian history through high-stakes quiz challenges designed by Loki himself.",
    bullets: [
      "TVA Variant Classification & Instant Live Scoring",
      "3 Thrilling Phases: Temporal Screening, Sacred Knowledge, Multiverse Clash",
      "Exclusive Loki & TVA Artifact Trophies for Top Variants",
      "High-octane Marvel trivia open to all student variants"
    ]
  },

  highlights: [
    {
      title: "TEMPORAL SCREENING",
      description: "Fast-paced rapid recall testing your core knowledge of Sacred Timeline events.",
      icon: "Zap"
    },
    {
      title: "MISCHIEF & ILLUSION",
      description: "Decipher cryptic illusion puzzles, hidden variant clues, and Asgardian runes.",
      icon: "Target"
    },
    {
      title: "TVA ARCHIVES",
      description: "Deep-cut questions spanning comic storylines, variant timelines, and cinematic lore.",
      icon: "Shield"
    },
    {
      title: "MULTIVERSE SHOWDOWN",
      description: "Live buzzer battle on stage for the ultimate Glorious Purpose trophy.",
      icon: "Trophy"
    }
  ],

  rounds: [
    {
      number: "PHASE 01",
      title: "TEMPORAL SCREENING",
      description: "Preliminary written/digital screening test covering MCU Phase 1-5, comics history, and variant knowledge.",
      duration: "45 MINS",
      evaluation: "Top 20 Teams qualify for Phase 2 based on accuracy & speed."
    },
    {
      number: "PHASE 02",
      title: "SACRED KNOWLEDGE & RUNES",
      description: "Interactive visual & audio round featuring illusion puzzles, timeline branch decryption, and audio cues.",
      duration: "60 MINS",
      evaluation: "Top 6 Teams advance to the Grand Stage Finale."
    },
    {
      number: "PHASE 03",
      title: "GLORIOUS PURPOSE FINALE",
      description: "High-pressure live stage buzzer showdown with rapid questions, risk wagering, and temporal steals.",
      duration: "90 MINS",
      evaluation: "Live scoring panel determines 1st, 2nd, and 3rd Place Champions."
    }
  ],

  timeline: [
    {
      day: "MARCH 15",
      time: "09:30 AM",
      title: "VARIANT CHECK-IN & TVA VERIFICATION",
      description: "Participant verification, badge collection, and assignment of Variant IDs."
    },
    {
      day: "MARCH 15",
      time: "10:15 AM",
      title: "ILLUSION PROTOCOL INITIATION",
      description: "Opening keynote by TVA Officers, timeline rules overview, and Phase 1 launch."
    },
    {
      day: "MARCH 15",
      time: "11:00 AM",
      title: "PHASE 1: TEMPORAL SCREENING",
      description: "All teams attempt the initial timeline screening quiz."
    },
    {
      day: "MARCH 15",
      time: "01:30 PM",
      title: "PHASE 2: SACRED KNOWLEDGE",
      description: "Qualified top 20 variants compete in visual puzzle challenges."
    },
    {
      day: "MARCH 15",
      time: "03:30 PM",
      title: "PHASE 3: GLORIOUS PURPOSE FINALE",
      description: "Grand stage live buzzer finale & victory ceremony."
    }
  ],

  rules: [
    {
      id: "01",
      title: "Variant Identity",
      description: "Teams must consist of 1 to 3 registered variants from the same or different institutions."
    },
    {
      id: "02",
      title: "Temporal Integrity",
      description: "Use of external gadgets, smartphones, or TVA TemPads during active rounds leads to immediate pruning."
    },
    {
      id: "03",
      title: "Quizmaster Authority",
      description: "Decisions made by the TVA Quizmasters and judges are final and non-negotiable."
    },
    {
      id: "04",
      title: "Timing & Punctuality",
      description: "Variants must report to the venue 15 minutes prior to phase commencement."
    },
    {
      id: "05",
      title: "Fair Play Protocol",
      description: "Any form of collusion between variant teams will result in instant disqualification."
    }
  ],

  prizes: [
    {
      position: "1ST PLACE",
      subLabel: "GLORIOUS PURPOSE CHAMPION",
      title: "GLORIOUS PURPOSE CHAMPION",
      description: "Grand cash prize, Loki Horns Trophy, and TVA Champion Certification.",
      amount: "₹12,000 + TROPHY",
      icon: "Trophy"
    },
    {
      position: "2ND PLACE",
      subLabel: "SUPREME VARIANT",
      title: "SUPREME VARIANT",
      description: "Runner-up cash prize, Emerald Shield Trophy, and Certificates.",
      amount: "₹8,000 + TROPHY",
      icon: "Award"
    },
    {
      position: "3RD PLACE",
      subLabel: "MASTER OF MISCHIEF",
      title: "MASTER OF MISCHIEF",
      description: "Third place cash prize, Muted Gold Medal, and Certificates.",
      amount: "₹5,000 + MEDAL",
      icon: "Medal"
    },
    {
      position: "SPECIAL AWARD",
      subLabel: "BEST TRIVIA VARIANT",
      title: "BEST TRIVIA VARIANT",
      description: "Special recognition award for the highest individual phase score.",
      amount: "SPECIAL ARTIFACT",
      icon: "Gift"
    }
  ],

  sponsors: [
    {
      name: "TVA TIMELINE ARCHIVES",
      category: "PRESENTING PARTNER"
    },
    {
      name: "ASGARD REALM LABS",
      category: "POWERED BY"
    },
    {
      name: "IGNITRRON '26 COMMITTEE",
      category: "HOST ORGANISATION"
    },
    {
      name: "MARVEL FAN COMMUNITY",
      category: "OUTREACH PARTNER"
    }
  ],

  faq: [
    {
      question: "Who is eligible to participate in IGNITRRON'26 Marvel Quiz?",
      answer: "Any high school, college, or university student variant who loves Marvel comics and MCU lore can form a team and participate."
    },
    {
      question: "What is the team size limit?",
      answer: "Teams can have between 1 to 3 members. Solo variants are also welcome to compete!"
    },
    {
      question: "Will the questions focus on MCU or Marvel Comics?",
      answer: "The quiz will feature a balanced mix of MCU movies & series, Marvel Comics lore, Loki variants, and Asgardian mythology."
    },
    {
      question: "Is there an entry fee?",
      answer: "Registration details and entry instructions are available via the 'ENTER THE TIMELINE' button."
    }
  ],

  registration: {
    label: "ENTER THE TIMELINE",
    url: "#registration"
  },

  contact: {
    email: "tva.marvelquiz@ignitrron26.com",
    phone: "+91 98765 43210",
    location: "Main Auditorium, TVA Complex"
  },

  socials: [
    { platform: "Instagram", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "GitHub", url: "#" }
  ]
};
