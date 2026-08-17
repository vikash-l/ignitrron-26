export interface NavSection {
  id: string;
  index: string;
  label: string;
  title: string;
  badge: string;
}

export const navSections: NavSection[] = [
  { id: 'about', index: '01', label: 'EXPERIENCE', title: 'STREET EXPERIENCE', badge: 'STREET OVERVIEW' },
  { id: 'carousel', index: '02', label: 'GALLERY', title: 'EVENT CAROUSEL', badge: 'STREET SHOWCASE' },
  { id: 'activities', index: '03', label: 'ACTIVITIES', title: '10 STREET DESTINATIONS', badge: 'STALLS & EXPERIENCES' },
  { id: 'schedule', index: '04', label: 'SCHEDULE', title: 'DAY 1 & DAY 2 TIMELINE', badge: 'EVENT SCHEDULE' },
  { id: 'faq', index: '05', label: 'FAQ', title: 'FREQUENTLY ASKED QUESTIONS', badge: 'VISITOR INQUIRY' },
];

export interface ActivityItem {
  id: string;
  number: string;
  name: string;
  japaneseName: string;
  badgeType: 'MERCHANDISE' | 'FUN EVENT';
  isCompetitive: boolean;
  prizeNote: string;
  venue?: string;
  description: string;
  icon: string;
}

export interface Coordinator {
  name: string;
  phone: string;
  displayPhone: string;
}

export interface EventConfig {
  name: string;
  festName: string;
  organizer: string;
  tagline: string;
  description: string;
  registrationUrl: string;

  about: {
    title: string;
    badge: string;
    description: string;
    paragraphs: string[];
    pillars: { title: string; desc: string; icon: string }[];
  };

  activities: ActivityItem[];

  prizeDistribution: {
    day: string;
    title: string;
    description: string;
    note: string;
  };

  guidelines: {
    index: string;
    title: string;
    description: string;
  }[];

  contacts: Coordinator[];

  faq: {
    question: string;
    answer: string;
  }[];

  footer: {
    description: string;
    organizer: string;
    instagram: string;
    instagramUrl: string;
    email: string;
  };
}

export const eventData: EventConfig = {
  name: "JAPANESE STREET",
  festName: "IGNITRRON 26",
  organizer: "IGNITRRON KPRIET",
  tagline: "ENTER THE STREET. EXPERIENCE JAPAN.",
  description: "A Japanese-inspired street experience featuring games, creative activities, performances, cosplay, and interactive stalls.",
  registrationUrl: "https://www.theticket9.com/event/ignitrron-26",

  about: {
    title: "THE JAPANESE STREET EXPERIENCE",
    badge: "01 EXPERIENCE",
    description: "Step into an atmospheric night street. Walk under lantern glows, explore vibrant stalls, play games, and immerse yourself in Japanese-inspired entertainment.",
    paragraphs: [
      "Japanese Street brings an engaging street atmosphere to IGNITRRON 26. Designed as an open street exploration, visitors can wander freely between interactive stalls, demonstrations, and fun activities.",
      "From gaming setups, anime art showcases, and cosplay walks to calligraphy and origami craft, every corner offers an inviting destination.",
      "Whether you are participating in competitive events for merchandise prizes or relaxing with fun festival activities, Japanese Street offers an unforgettable journey."
    ],
    pillars: [
      {
        title: "POP CULTURE & ANIME",
        desc: "Anime artistry, cosplay creativity, and pop-culture entertainment.",
        icon: "Sparkles"
      },
      {
        title: "GAMES & CHALLENGES",
        desc: "Gaming tournament, Japanese quiz, shateki stalls, and Beyblade clashes.",
        icon: "Gamepad2"
      },
      {
        title: "CRAFT & ART",
        desc: "Calligraphy brushwork and intricate origami paper folding.",
        icon: "Feather"
      },
      {
        title: "COMMUNITY & MEMORIES",
        desc: "Themed photos at the photo booth and expressive speeches and performances.",
        icon: "Camera"
      }
    ]
  },

  activities: [
    {
      id: "gaming-tournament",
      number: "01",
      name: "Gaming Tournament",
      japaneseName: "ゲーム 大会",
      badgeType: "MERCHANDISE",
      isCompetitive: true,
      prizeNote: "Merchandise",
      venue: "CAC",
      description: "Compete head-to-head in an energetic gaming arena. Top contenders earn exclusive merchandise rewards.",
      icon: "Gamepad2"
    },
    {
      id: "anime-art",
      number: "02",
      name: "Anime Art Competition (online)",
      japaneseName: "アニメ アート",
      badgeType: "MERCHANDISE",
      isCompetitive: true,
      prizeNote: "Merchandise",
      description: "Showcase your artistic creativity and illustration flair in this digital anime art showcase.",
      icon: "Palette"
    },
    {
      id: "japanese-quiz",
      number: "03",
      name: "Japanese Quiz Competition",
      japaneseName: "クイズ 大会",
      badgeType: "MERCHANDISE",
      isCompetitive: true,
      prizeNote: "Merchandise",
      venue: "CAC",
      description: "Put your knowledge of Japanese pop culture, entertainment, lore, and language to the test.",
      icon: "HelpCircle"
    },
    {
      id: "speech",
      number: "04",
      name: "Speech",
      japaneseName: "スピーチ",
      badgeType: "MERCHANDISE",
      isCompetitive: true,
      prizeNote: "Merchandise",
      venue: "CAC",
      description: "Take the stage to deliver an expressive, structured talk on Japanese themes and perspectives.",
      icon: "Mic"
    },
    {
      id: "cosplay",
      number: "05",
      name: "Cosplay",
      japaneseName: "コスプレ",
      badgeType: "MERCHANDISE",
      isCompetitive: true,
      prizeNote: "Merchandise",
      venue: "BME walkway",
      description: "Step into the persona of your favorite anime, manga, or gaming character along the walkway.",
      icon: "Sparkles"
    },
    {
      id: "calligraphy",
      number: "06",
      name: "Calligraphy",
      japaneseName: "書道",
      badgeType: "FUN EVENT",
      isCompetitive: false,
      prizeNote: "Fun Event",
      description: "Practice the timeless brush strokes of Japanese shodo and create your own kanji souvenir.",
      icon: "Feather"
    },
    {
      id: "shateki",
      number: "07",
      name: "Shateki",
      japaneseName: "射的",
      badgeType: "MERCHANDISE",
      isCompetitive: true,
      prizeNote: "Merchandise",
      description: "Traditional festival target shooting stall. Aim sharp and knock down targets for merchandise rewards.",
      icon: "Target"
    },
    {
      id: "origami-shop",
      number: "08",
      name: "Origami Shop",
      japaneseName: "折り紙",
      badgeType: "FUN EVENT",
      isCompetitive: false,
      prizeNote: "Fun Event",
      description: "Learn and craft intricate geometric paper forms, cranes, and traditional decorative models.",
      icon: "Origami"
    },
    {
      id: "beyblade",
      number: "09",
      name: "Beyblade",
      japaneseName: "ベイブレード",
      badgeType: "FUN EVENT",
      isCompetitive: false,
      prizeNote: "Fun Event",
      description: "Launch your spinning tops into the stadium in fast-paced battle bursts with fellow visitors.",
      icon: "Disc"
    },
    {
      id: "photo-booth",
      number: "10",
      name: "Photo Booth",
      japaneseName: "写真館",
      badgeType: "FUN EVENT",
      isCompetitive: false,
      prizeNote: "Fun Event",
      description: "Capture memorable moments against cinematic Japanese night street backdrops and themed props.",
      icon: "Camera"
    }
  ],

  prizeDistribution: {
    day: "DAY 2",
    title: "MERCHANDISE PRIZE DISTRIBUTION",
    description: "Prize distribution for all competitive activities that feature merchandise prizes takes place on DAY 2.",
    note: "Applicable to Gaming Tournament, Anime Art Competition (online), Japanese Quiz Competition, Speech, Cosplay, and Shateki."
  },

  guidelines: [
    {
      index: "01",
      title: "STREET EXPLORATION",
      description: "Visitors are free to explore stalls and participate in interactive activities throughout the venue."
    },
    {
      index: "02",
      title: "ACTIVITY SCHEDULES",
      description: "Check the schedule board for specific timings of scheduled events at CAC and the BME walkway."
    },
    {
      index: "03",
      title: "MERCHANDISE & FUN EVENTS",
      description: "Enjoy both competitive activities featuring merchandise rewards and open interactive fun stalls."
    },
    {
      index: "04",
      title: "COMMUNITY SPIRIT",
      description: "Respect fellow participants, performers, and stall coordinators while enjoying the street atmosphere."
    }
  ],

  contacts: [
    {
      name: "Sanjeev A",
      phone: "+919344136388",
      displayPhone: "+91 9344136388"
    },
    {
      name: "Pranv ram",
      phone: "+919042421905",
      displayPhone: "+91 90424 21905"
    },
    {
      name: "Selva S",
      phone: "+916374107802",
      displayPhone: "+91 63741 07802"
    }
  ],

  faq: [
    {
      question: "What is Japanese Street?",
      answer: "Japanese Street is an event at IGNITRRON 26 featuring 10 Japanese-themed stalls and activities including games, anime art, cosplay, speech, calligraphy, and interactive experiences."
    },
    {
      question: "Which activities are available at Japanese Street?",
      answer: "There are 10 official activities: Gaming Tournament, Anime Art Competition (online), Japanese Quiz Competition, Speech, Cosplay, Calligraphy, Shateki, Origami Shop, Beyblade, and Photo Booth."
    },
    {
      question: "Where is the Gaming Tournament held?",
      answer: "The Gaming Tournament takes place at CAC on Day 1 (18 September 2026) from 1:30 PM to 4:30 PM."
    },
    {
      question: "Where and when is Cosplay held?",
      answer: "Cosplay is hosted at the BME walkway. It runs for the full day on Day 1 (18 September 2026) and till 3:00 PM on Day 2 (19 September 2026)."
    },
    {
      question: "When does the Speech take place?",
      answer: "Speech takes place at CAC on Day 2 (19 September 2026) from 9:00 AM to 11:00 AM."
    },
    {
      question: "When does the Japanese Quiz Competition take place?",
      answer: "The Japanese Quiz Competition takes place at CAC on Day 1 (18 September 2026) from 9:00 AM to 12:00 PM."
    },
    {
      question: "When is the prize distribution for competitive activities?",
      answer: "Prize distribution for all competitive activities with merchandise prizes takes place on Day 2."
    },
    {
      question: "Are all activities competitive?",
      answer: "No. Japanese Street offers both competitive activities with merchandise prizes (Gaming Tournament, Japanese Quiz Competition, Speech, Cosplay, Anime Art Competition, and Shateki) and fun festival events (Calligraphy, Origami Shop, Beyblade, and Photo Booth)."
    }
  ],

  footer: {
    description: "An official IGNITRRON 26 street experience featuring games, cosplay, anime art, stalls, and Japanese pop culture.",
    organizer: "IGNITRRON KPRIET",
    instagram: "@kpriet_ignitrron",
    instagramUrl: "https://www.instagram.com/kpriet_ignitrron?igsh=Yng2aGhyMXJvanNy",
    email: "ignitrron@kpriet.ac.in"
  }
};

