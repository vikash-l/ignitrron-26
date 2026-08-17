export interface EventConfig {
  name: string;
  tagline: string;
  supportingText: string;
  description: string;
  category?: string;
  organizedBy: string;
  day?: string;
  time?: string;
  venue?: string;
  expectedParticipants: number;
  expectedTeams: number;
  teamSize: number;
  facultyCoordinator: string;
  totalPrizePool: string;
  presentationDuration: string;

  sections: {
    hero: boolean;
    eventInfo: boolean;
    domains: boolean;
    process: boolean;
    guidelines: boolean;
    prizes: boolean;
    contact: boolean;
    registration: boolean;
  };

  coordinators: {
    name: string;
    role: string;
    phone: string;
  }[];

  domains: {
    id: string;
    number: string;
    title: string;
    disciplines: string[];
    prizes: { first: string; second: string; total: string };
  }[];
}

export const eventData = {
  name: "IGNITRRON",
  title: "PAPER PRESENTATION",
  tagline: "PRESENT YOUR IDEA. IMPACT THE FUTURE.",
  supportingText: "Where innovation meets presentation.",
  organizedBy: "Ignitrron",
  day: "Day 2",
  time: "10:00 AM – 5:00 PM",
  venue: "ECE Class",
  expectedParticipants: 100,
  expectedTeams: 25,
  teamSize: 4,
  facultyCoordinator: "Mr. Premkumar. T",
  totalPrizePool: "₹40,000",
  presentationDuration: "5–7 MIN",

  coordinators: [
    { name: "Phavizhash V", role: "Student Coordinator 1", phone: "6381762254" },
    { name: "Varun Karthic K A", role: "Student Coordinator 2", phone: "6382163133" },
    { name: "Abarna S", role: "Student Coordinator 3", phone: "9486015006" }
  ],

  domains: [
    {
      id: "software",
      number: "01",
      title: "SOFTWARE",
      disciplines: ["IT", "CSE", "CSBS", "CSDS", "AIML", "AD"],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "circuits",
      number: "02",
      title: "CIRCUITS",
      disciplines: ["EEE", "ECE", "Instrumentation"],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "hardware-3d",
      number: "03",
      title: "HARDWARE & 3D",
      disciplines: ["Mechanical", "Civil"],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "bio",
      number: "04",
      title: "BIO",
      disciplines: ["Chemical", "Biomedical Engineering", "Biotechnology"],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "business-arts",
      number: "05",
      title: "BUSINESS & ARTS",
      disciplines: ["Business", "Management", "Arts"],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    }
  ],

  guidelines: [
    {
      title: "Bring Your Own Laptops",
      content: "Participants must bring their own laptops and prepared presentation slides (PPT/PDF)."
    },
    {
      title: "Strict Time Window",
      content: "Each team will receive approximately 5 to 7 minutes for their presentation followed by judges' queries."
    }
  ]
};
