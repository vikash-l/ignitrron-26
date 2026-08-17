export interface OfferItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
  protocolCode: string;
}

export interface StudentOpportunity {
  id: string;
  text: string;
  badge: string;
}

export const MILAN_DATA = {
  event: {
    name: "MILAN '26",
    acronymExpanded: "Merging Industry Leaders and Academicians for New Horizons",
    theme: "Skilling Through Collaborative Innovation",
    host: "IGNITRRON '26",
    statusBadge: "LEADERSHIP & INNOVATION SUMMIT",
    shieldClearance: "LEVEL 8 SUMMIT CLEARANCE",
  },
  hero: {
    title: "MILAN '26",
    subtitle: "Merging Industry Leaders and Academicians for New Horizons",
    tagline: "Skilling Through Collaborative Innovation",
    primaryCta: "Explore Conclave",
    secondaryCta: "Learn More",
    badges: [
      { name: "Industry Leaders", icon: "Shield", code: "SEC-IND" },
      { name: "Academic Experts", icon: "GraduationCap", code: "SEC-ACAD" },
      { name: "Innovation", icon: "Lightbulb", code: "SEC-INNOV" },
      { name: "Collaboration", icon: "Users", code: "SEC-COLLAB" },
      { name: "Future Skills", icon: "Zap", code: "SEC-SKILLS" },
    ],
  },
  about: {
    heading: "About MILAN '26",
    badge: "EXECUTIVE BRIEFING",
    paragraph1:
      "MILAN ’26 is a dynamic industry–academia conclave designed to bring together visionary industry leaders, academicians, innovators, and aspiring students on one collaborative platform.",
    paragraph2:
      "Built around the theme “Skilling Through Collaborative Innovation,” the conclave explores how meaningful collaboration between academia and industry can shape future-ready talent, unlock new opportunities, and transform innovative ideas into real-world impact.",
  },
  whyMilan: {
    heading: "Why MILAN '26",
    badge: "MISSION DIRECTIVE",
    leadStatement: "The world is evolving faster than ever.",
    paragraphs: [
      {
        title: "The Evolving Landscape",
        text: "Emerging technologies, changing industry demands, and new career pathways require students to continuously learn, adapt, and innovate.",
        highlight: "Continuous Learning & Adaptability",
      },
      {
        title: "Where Experience Meets Ambition",
        text: "MILAN ’26 creates a space where experience meets ambition. The conclave brings together distinguished industry professionals and academic leaders to share insights, experiences, and perspectives on the future of skills, careers, technology, and innovation.",
        highlight: "Strategic Convergence",
      },
      {
        title: "Charting Clear Pathways",
        text: "Through meaningful conversations and collaborative engagement, participants will gain a clearer understanding of the opportunities and avenues that lie ahead.",
        highlight: "Actionable Clarity",
      },
    ],
  },
  offers: [
    {
      id: "insights",
      icon: "Rocket",
      title: "Industry Insights",
      description:
        "Gain perspectives directly from experienced professionals and leaders shaping the future of their industries.",
      tag: "PERSPECTIVE",
      protocolCode: "CMD-01",
    },
    {
      id: "upskilling",
      icon: "Target",
      title: "Upskilling Opportunities",
      description:
        "Discover the skills, technologies, and competencies that can help you stay relevant in an ever-evolving professional landscape.",
      tag: "COMPETENCY",
      protocolCode: "CMD-02",
    },
    {
      id: "innovation",
      icon: "Lightbulb",
      title: "Innovation & Collaboration",
      description:
        "Explore how collaborative thinking can transform ideas into impactful projects and meaningful solutions.",
      tag: "SYNTHESIS",
      protocolCode: "CMD-03",
    },
    {
      id: "connect",
      icon: "Handshake",
      title: "Industry–Academia Connect",
      description:
        "Bridge the gap between classroom learning and real-world expectations through conversations with industry and academic experts.",
      tag: "ALIGNMENT",
      protocolCode: "CMD-04",
    },
    {
      id: "horizons",
      icon: "Globe",
      title: "New Horizons",
      description:
        "Discover emerging opportunities, unconventional career paths, innovative domains, and possibilities beyond traditional learning.",
      tag: "FRONTIER",
      protocolCode: "CMD-05",
    },
  ] as OfferItem[],
  collaborativeInnovation: {
    heading: "Why Collaborative Innovation?",
    badge: "STRATEGIC DOCTRINE",
    leadStatement: "The future cannot be built in isolation.",
    paragraph1:
      "Innovation becomes more powerful when diverse perspectives, knowledge, and experiences come together.",
    paragraph2:
      "MILAN ’26 believes that the strongest ideas emerge when students, academicians, and industry professionals collaborate, challenge perspectives, and build together.",
    paragraph3:
      "Skilling through collaborative innovation is not just about learning new technologies—it is about developing the mindset to adapt, connect, create, and lead.",
  },
  futureReady: {
    heading: "FOR THE FUTURE-READY GENERATION",
    badge: "STUDENT EMPOWERMENT",
    leadStatement: "MILAN ’26 is an opportunity for students to:",
    checklist: [
      {
        id: "c1",
        text: "Connect with industry professionals and academic leaders",
        badge: "NETWORK",
      },
      {
        id: "c2",
        text: "Learn about emerging opportunities and evolving industry expectations",
        badge: "FORESIGHT",
      },
      {
        id: "c3",
        text: "Explore pathways for continuous learning and upskilling",
        badge: "GROWTH",
      },
      {
        id: "c4",
        text: "Innovate through collaborative ideas and projects",
        badge: "CREATION",
      },
      {
        id: "c5",
        text: "Prepare for a future driven by technology, creativity, and transformation",
        badge: "READINESS",
      },
    ] as StudentOpportunity[],
  },
  manifesto: {
    heading: "ONE PLATFORM. ENDLESS POSSIBILITIES.",
    badge: "CONCLAVE CREED",
    lines: [
      {
        text: "Ideas will be exchanged.",
        subtext: "Cross-disciplinary knowledge transfer at executive caliber.",
      },
      {
        text: "Perspectives will be challenged.",
        subtext: "Redefining conventional paradigms with fresh vision.",
      },
      {
        text: "Connections will be created.",
        subtext: "Lasting bridges between academia, students, and industry pioneers.",
      },
      {
        text: "New horizons will emerge.",
        subtext: "Pioneering the next era of industrial transformation and leadership.",
      },
    ],
  },
  closing: {
    title: "MILAN '26",
    tagline1: "Where Industry Meets Academia.",
    tagline2: "Where Collaboration Creates the Future.",
    themePrefix: "Theme",
    theme: "Skilling Through Collaborative Innovation",
  },
  footer: {
    title: "MILAN '26",
    line1: "Merging Industry Leaders and Academicians for New Horizons",
    line2: "Skilling Through Collaborative Innovation",
    host: "IGNITRRON '26",
  },
};
