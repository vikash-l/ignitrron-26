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
    researchJourney: boolean; // repurposed as race journey
    rounds: boolean;
    rules: boolean;
    prizes: boolean;
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
    visualTheme?: string;
    visualIcon?: string;
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
}

export const eventData: EventConfig = {
  name: "ROBO RACE’26",
  tagline: "SPEED WITHOUT LIMITS.",
  description: "Prepare for an exhilarating RC car racing challenge where speed, precision and control determine who reaches the finish line first.",
  category: "Organized by ARC",
  date: "DAY 1",
  time: "10:00 AM – 4:00 PM",
  venue: "MECH/CS",
  mode: "On-Campus",
  teamSize: "1-3 (Configurable)",

  sections: {
    hero: true,
    eventInfo: true,
    about: true,
    stats: true,
    highlights: true,
    researchJourney: true,
    rounds: true,
    rules: true,
    prizes: true,
    faq: true,
    registration: true,
  },

  theme: {
    primaryColor: "from-slate-300 via-zinc-400 to-gray-600",
    secondaryColor: "from-zinc-100 to-slate-400",
    accentColor: "blue",
    bgColor: "bg-[#060608]",
    textColor: "text-slate-300",
    fontFamily: "'Orbitron', sans-serif"
  },

  stats: [
    { value: "60", label: "EXPECTED PARTICIPANTS" },
    { value: "2", label: "ROUNDS" },
    { value: "1", label: "LAP / ROUND" },
    { value: "35 CM", label: "TRACK WIDTH" },
    { value: "<16.80 V", label: "MAX OPERATING BATTERY" },
    { value: "₹30K", label: "PRIZE POOL" }
  ],

  about: {
    title: "FEEL THE SPEED",
    description: "Robo Race’26 challenges participants to control their customized RC cars through a demanding obstacle track where both speed and precision matter.",
    bullets: [
      "Control customized RC machines through complex racing corridors.",
      "Push your machine to the limit through two rounds of cumulative scoring.",
      "Conquer a grid of 17 brutal track hazards.",
      "Claim your spot on the podium for a share of the ₹30,000 cash prize."
    ]
  },

  highlights: [
    { title: "Split Bridges", description: "Narrow twin-bridge crossings.", icon: "GitBranch" },
    { title: "8's", description: "High-G figure-eight drift loops.", icon: "Infinity" },
    { title: "Tunnel", description: "Dark, low-clearance tube crossing.", icon: "Minimize" },
    { title: "Narrow Bridge", description: "Ultra-thin lane testing tracking accuracy.", icon: "AlignJustify" },
    { title: "Ramps", description: "Steep metallic inclines and jumps.", icon: "TrendingUp" },
    { title: "Mesh Bridge", description: "Low-traction grating bridges.", icon: "Grid" },
    { title: "Gravel", description: "Loose rock zone challenging shock-absorbers.", icon: "Dribbble" },
    { title: "Mud Pit & Slurry", description: "Deep dirt and sticky fluid obstacle.", icon: "Droplet" },
    { title: "Loops & See-Saw", description: "Dynamic gravity-defying pivots.", icon: "RefreshCw" },
    { title: "Box in the Bins", description: "Tight cornering obstacle.", icon: "Square" },
    { title: "Rotary Door", description: "Moving gates requiring perfect timing.", icon: "Disc" },
    { title: "Bumps & Zig-Zags", description: "Rapid oscillation obstacle terrains.", icon: "Activity" },
    { title: "Pendulum", description: "Swinging obstacles demanding timing.", icon: "Timer" },
    { title: "Straights", description: "Max acceleration zones.", icon: "FastForward" }
  ],

  researchJourney: [
    {
      step: "01",
      title: "BUILD",
      description: "Prepare your RC machine.",
      icon: "🔧"
    },
    {
      step: "02",
      title: "ACCELERATE",
      description: "Push your machine to its limit.",
      icon: "⚡"
    },
    {
      step: "03",
      title: "NAVIGATE",
      description: "Master every obstacle.",
      icon: "🏁"
    },
    {
      step: "04",
      title: "SURVIVE",
      description: "Avoid penalties and maintain control.",
      icon: "⚠️"
    },
    {
      step: "05",
      title: "FINISH",
      description: "Complete the track.",
      icon: "🏁"
    },
    {
      step: "06",
      title: "WIN",
      description: "Claim the podium.",
      icon: "🏆"
    }
  ],

  rounds: [
    {
      number: "ROUND 01",
      title: "THE FIRST LAP",
      description: "All participants are given ONE LAP. The number of obstacles is minimal in this round. Run time is calculated using: DRIVE TIME + PENALTY (in seconds).",
      evaluation: "Tests basic control, speed, stability, driver reaction, and initial obstacle handling.",
      visualTheme: "RC car accelerating from the starting line. Speed trails activated.",
      visualIcon: "Zap"
    },
    {
      number: "ROUND 02",
      title: "FULL SPEED",
      description: "All participants are given ONE LAP. The maximum number of obstacles is used in this round. Run time is calculated using: DRIVE TIME + PENALTY (in seconds).",
      evaluation: "High-intensity navigation, vehicle durability, precise control through 17 complex obstacles.",
      visualTheme: "RC car + complex obstacle track + Quicksilver speed trails (maximum intensity).",
      visualIcon: "Flame"
    }
  ],

  rules: [
    { id: "01", title: "Bot Dimensions", description: "Bot maximum dimensions must not exceed 30 × 30 × 15 cm (L × B × H)." },
    { id: "02", title: "Track Width", description: "Track width is 35 cm and may become smaller in narrow sections." },
    { id: "03", title: "Operating Battery", description: "Operating battery voltage must be strictly less than 16.80 V." },
    { id: "04", title: "Vehicle Shape", description: "There is no restriction on the vehicle shape." },
    { id: "05", title: "Forbidden Parts", description: "Ready-made cars, Lego Sets & E-Buggy are strictly prohibited." },
    { id: "06", title: "Radio Transmitter", description: "The external radio transmitter is not included in the vehicle size constraint." },
    { id: "07", title: "Transmission Types", description: "Wired and wireless radio transmission are allowed. Wireless transmission is highly preferred." },
    { id: "08", title: "Violations", description: "Violation of rules may result in immediate disqualification or penalties." },
    { id: "09", title: "Race Official Decision", description: "Event managers' decisions are final and binding in all cases." }
  ],

  prizes: [
    {
      position: "FIRST PLACE",
      subLabel: "CHAMPION",
      title: "1ST PRIZE",
      description: "Awarded to the fastest driver with the lowest combined time and penalty score.",
      amount: "₹15,000",
      icon: "Trophy"
    },
    {
      position: "SECOND PLACE",
      subLabel: "RUNNER UP",
      title: "2ND PRIZE",
      description: "Awarded for exceptional track times, reaction speeds, and precise handling.",
      amount: "₹10,000",
      icon: "Award"
    },
    {
      position: "THIRD PLACE",
      subLabel: "SECOND RUNNER UP",
      title: "3RD PRIZE",
      description: "Awarded to the third fastest driver completing the circuit safely.",
      amount: "₹5,000",
      icon: "Medal"
    }
  ],

  faq: [
    {
      question: "What is Robo Race'26?",
      answer: "An exciting RC car racing competition where participants build or customize their own RC cars and race them through a challenging obstacle track."
    },
    {
      question: "Are pre-assembled toys allowed?",
      answer: "No. Lego sets, pre-assembled ready-made RC toys, and E-buggies are strictly prohibited. The vehicles must be custom-built or significantly modified."
    },
    {
      question: "What is the maximum battery voltage?",
      answer: "The operating battery voltage must be strictly under 16.80 Volts."
    },
    {
      question: "How is the total score calculated?",
      answer: "The scoring formula is: ((Round 1 Time + Round 2 Time) + Penalties) / 2. The participant with the lowest final time wins."
    },
    {
      question: "Is wireless control mandatory?",
      answer: "Both wired and wireless control methods are allowed, but wireless radio control is highly recommended for maneuverability."
    }
  ],

  registration: {
    label: "ENTER THE RACE",
    url: "#registration"
  },

  contact: {
    faculty: "Dr. Arivazhagan",
    students: [
      { name: "Aravind S", phone: "9944914515" },
      { name: "Dhanaraj P", phone: "8300851643" }
    ]
  }
};
