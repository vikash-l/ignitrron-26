export interface DomainPrompt {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  color: string;
  description: string;
  mysteryChallenges: string[];
}

export const DOMAINS_DATA: DomainPrompt[] = [
  {
    id: 'tech',
    name: 'TECHNOLOGY',
    tagline: 'Future Tech & Quantum AI',
    iconName: 'Cpu',
    color: '#00f0ff',
    description: 'Design a disruptive brand identity for next-generation hardware, AI platforms, or cyberware solutions.',
    mysteryChallenges: [
      'Incorporate a retro-futuristic synthwave aesthetic into modern UI branding.',
      'Target a demography of underground coders and high-tier enterprise clients simultaneously.'
    ]
  },
  {
    id: 'fashion',
    name: 'FASHION',
    tagline: 'Cyber-Couture & Wearables',
    iconName: 'Shirt',
    color: '#ff003c',
    description: 'Create an iconic streetwear or high-fashion brand that breaks traditional runway rules.',
    mysteryChallenges: [
      'Your brand must focus on zero-waste upcycled cyber-garments.',
      'Create a brand identity that seamlessly exists in both physical pop-ups and metaverse spaces.'
    ]
  },
  {
    id: 'restaurant',
    name: 'RESTAURANT',
    tagline: 'Neo-Dining & Molecular Gastronomy',
    iconName: 'Utensils',
    color: '#ff9900',
    description: 'Build a revolutionary dining brand—from cloud kitchens to immersive themed dining experiences.',
    mysteryChallenges: [
      'The entire brand experience must revolve around midnight dining and nocturnal foodies.',
      'Merge ancient traditional recipes with futuristic molecular dining presentation.'
    ]
  },
  {
    id: 'healthcare',
    name: 'HEALTHCARE',
    tagline: 'Bio-Hacking & Modern Wellness',
    iconName: 'HeartPulse',
    color: '#00ff88',
    description: 'Craft a approachable yet futuristic health, biotech, or mental wellness brand identity.',
    mysteryChallenges: [
      'Remove all clinical coldness and make healthcare feel like a premium lifestyle accessory.',
      'Design for a generation that prioritizes sleep tech and bio-feedback optimization.'
    ]
  },
  {
    id: 'education',
    name: 'EDUCATION',
    tagline: 'Gamified Academy & Skill Labs',
    iconName: 'GraduationCap',
    color: '#bf00ff',
    description: 'Reinvent how people learn by creating a high-octane skill academy or interactive learning brand.',
    mysteryChallenges: [
      'Position learning as an esports competition or questing guild.',
      'Zero textbooks allowed—everything must be taught through immersive story quests.'
    ]
  },
  {
    id: 'entertainment',
    name: 'ENTERTAINMENT',
    tagline: 'Indie Studios & Immersive Media',
    iconName: 'Clapperboard',
    color: '#ff00aa',
    description: 'Launch a rebellious media empire, indie music label, or interactive streaming venture.',
    mysteryChallenges: [
      'Use comic paneling and graphic novel storytelling as the primary marketing campaign.',
      'Build a cult-following brand around soundscapes and visual art drops.'
    ]
  },
  {
    id: 'lifestyle',
    name: 'LIFESTYLE',
    tagline: 'Urban Mobility & Extreme Gear',
    iconName: 'Compass',
    color: '#00bfff',
    description: 'Shape an adventurous lifestyle brand designed for modern nomads and urban explorers.',
    mysteryChallenges: [
      'The brand identity must communicate extreme durability with high aesthetic elegance.',
      'Incorporate sustainable eco-materials into a high-stakes adventure aesthetic.'
    ]
  },
  {
    id: 'more',
    name: 'AND MORE...',
    tagline: 'Gaming, Automotive & Beyond',
    iconName: 'Gamepad2',
    color: '#ffff00',
    description: 'Unleash your creativity on wildcard domains like electric vehicles, space tourism, or indie gaming guilds.',
    mysteryChallenges: [
      'Create a brand for interplanetary transport logistics.',
      'Design a brand for an underground esports arena.'
    ]
  }
];

export interface DeliverableItem {
  number: string;
  title: string;
  subtext: string;
  icon: string;
  description: string;
  badge: string;
}

export const DELIVERABLES_DATA: DeliverableItem[] = [
  {
    number: '01',
    title: 'BRAND NAME & TAGLINE',
    subtext: 'The Identity Anchor',
    icon: 'Sparkles',
    description: 'Punchy, memorable, and legally unique brand naming accompanied by a killer battle-cry slogan.',
    badge: 'CORE IDENTITY'
  },
  {
    number: '02',
    title: 'LOGO & VISUAL IDENTITY',
    subtext: 'The Signature Symbol',
    icon: 'Palette',
    description: 'Dynamic vector mark, logotype, icon mark, and responsive brand lockups designed for high impact.',
    badge: 'VISUAL SYSTEM'
  },
  {
    number: '03',
    title: 'COLOUR PALETTE & TYPOGRAPHY',
    subtext: 'The Chromatic & Type Engine',
    icon: 'Type',
    description: 'Curated HSL hex color palette with primary accents and dual-typeface hierarchy (Display + Body).',
    badge: 'BRAND ASSETS'
  },
  {
    number: '04',
    title: 'BRAND STORY & PERSONALITY',
    subtext: 'The Comic Origin Story',
    icon: 'BookOpen',
    description: 'Core brand ethos, mission statement, voice tone, and customer origin story that people remember.',
    badge: 'NARRATIVE'
  },
  {
    number: '05',
    title: 'KEY VISUALS / CREATIVES',
    subtext: 'The Promotional Arsenal',
    icon: 'Image',
    description: 'High-definition posters, social media banners, product mockups, or comic-style campaign ads.',
    badge: 'CAMPAIGN'
  },
  {
    number: '06',
    title: 'MARKETING & POSITIONING',
    subtext: 'The Market Domination Pitch',
    icon: 'TrendingUp',
    description: 'Target demographic analysis, competitor differentiator, market launch strategy, and pitch highlights.',
    badge: 'STRATEGY'
  }
];

export interface Coordinator {
  id: string;
  role: string;
  name: string;
  designation: string;
  avatarBg: string;
  spiderCode: string;
}

export const COORDINATORS_DATA: Coordinator[] = [
  {
    id: '01',
    role: 'COORDINATOR 01',
    name: 'Sanjeev A',
    designation: 'Lead Mission Ops',
    avatarBg: 'from-[#ff003c] to-[#990024]',
    spiderCode: 'CREW-ALPHA-01'
  },
  {
    id: '02',
    role: 'COORDINATOR 02',
    name: 'Madhu Rithanya V',
    designation: 'Brand & Design Strategist',
    avatarBg: 'from-[#00f0ff] to-[#006699]',
    spiderCode: 'CREW-BETA-02'
  },
  {
    id: '03',
    role: 'COORDINATOR 03',
    name: 'Mahima Pratibha -',
    designation: 'Creative Operations Lead',
    avatarBg: 'from-[#bf00ff] to-[#550088]',
    spiderCode: 'CREW-GAMMA-03'
  }
];
