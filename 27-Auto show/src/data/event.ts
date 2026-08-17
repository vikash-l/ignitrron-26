import { EventConfig } from '../types/event';

export const ghostRiderAutoShowEvent: EventConfig = {
  name: "AUTO SHOW",
  subTitle: "IGNITRRON '26 // DAY 01",
  edition: "IGNITRRON '26",
  tagline: "FEEL THE FIRE. HEAR THE MACHINES.",
  description: "A walk-in automotive showcase bringing machines, motion, sound, and raw mechanical energy together at Phoenix Circle.",
  eventType: "FUN EVENT",

  // Logistics
  date: "18/09/2026",
  day: "DAY 01",
  time: "10:00 AM – 1:00 PM",
  venue: "PHOENIX CIRCLE",
  entry: "WALK-IN",

  // About Section
  about: {
    title: "WHERE MACHINES COME ALIVE",
    description: "A walk-in automotive showcase celebrating machines, design, movement, sound, and automotive culture."
  },

  // Experience Section (4 modules)
  experience: [
    {
      title: "MACHINES",
      description: "Explore the vehicles on display.",
      tag: "SHOWCASE",
      icon: "Flame"
    },
    {
      title: "DESIGN",
      description: "Experience automotive styling and engineering.",
      tag: "CRAFT",
      icon: "Wrench"
    },
    {
      title: "SOUND",
      description: "Feel the mechanical character and presence of the machines.",
      tag: "ACOUSTICS",
      icon: "Volume2"
    },
    {
      title: "ENERGY",
      description: "A live, walk-in atmosphere built around automotive culture.",
      tag: "ATMOSPHERE",
      icon: "Zap"
    }
  ],

  // Machines Showcase Section (Generic Category Labels as instructed)
  machines: [
    {
      category: "FEATURED MACHINE",
      title: "SUPERNATURAL POWER",
      subtitle: "Unbridled Mechanical Presence",
      description: "Aggressive stance, custom engineering, and untamed road character commanding the arena.",
      image: "/assets/ghost_rider_hero.jpg",
      specs: ["High-Output Engine", "Custom Geometry", "Blazing Character"]
    },
    {
      category: "CUSTOM BUILD",
      title: "BURNING CHROME & STEEL",
      subtitle: "Bespoke Two-Wheeler Fabrication",
      description: "Handcrafted lines, exposed mechanics, and raw power tuned for high aesthetic drama.",
      image: "/assets/machine_custom.jpg",
      specs: ["Bespoke Exhaust", "Raw Finish", "Custom Frame"]
    },
    {
      category: "PERFORMANCE",
      title: "TRACK-BRED AGGRESSION",
      subtitle: "Aerodynamics & Force",
      description: "Engineered for pure speed, widebody dominance, and intense tarmac authority.",
      image: "/assets/machine_perf.jpg",
      specs: ["Aero Package", "Lightweight Carbon", "Track Stance"]
    },
    {
      category: "CLASSIC",
      title: "TIMELESS MOTOR HERITAGE",
      subtitle: "Golden Era Engineering",
      description: "The enduring legacy of vintage muscle, timeless curves, and roaring mechanical grit.",
      image: "/assets/ghost_rider_hero.jpg",
      specs: ["Historic Lineage", "Pure Analog Soul", "Restored Finish"]
    }
  ],

  // Venue Section
  venueDetails: {
    title: "MEET AT PHOENIX CIRCLE",
    name: "PHOENIX CIRCLE",
    description: "The central outdoor arena transforms into an open nighttime-inspired paddock where machines, fire, and sound converge.",
    timing: "10:00 AM – 1:00 PM",
    entryNote: "ENTRY // WALK-IN"
  },

  // Coordinators Section
  coordinators: {
    faculty: [
      {
        name: "Dr. Senthil Kumar",
        role: "Faculty Coordinator"
      }
    ],
    students: [
      {
        name: "Vishal B S",
        role: "Student Coordinator",
        phone: "+91 73975 08211"
      },
      {
        name: "Sathya R V",
        role: "Student Coordinator",
        phone: "+91 76049 03115"
      },
      {
        name: "Sarveshwar",
        role: "Student Coordinator",
        phone: "+91 63824 12143"
      }
    ]
  },

  // FAQ Section (Strictly confirmed facts)
  faq: [
    {
      question: "Is this a competition?",
      answer: "No. It is a fun event."
    },
    {
      question: "Is there a prize?",
      answer: "No."
    },
    {
      question: "Is registration required?",
      answer: "The event is specified as walk-in."
    },
    {
      question: "When is the event?",
      answer: "18/09/2026, Day 1."
    },
    {
      question: "What time?",
      answer: "10:00 AM – 1:00 PM."
    },
    {
      question: "Where?",
      answer: "Phoenix Circle."
    },
    {
      question: "How do I enter?",
      answer: "Walk in during the event window."
    }
  ],

  // Final CTA Section
  finalCta: {
    title: "RIDE INTO THE FIRE.",
    subtitle: "The machines are waiting.",
    buttonText: "ENTER THE SHOW →",
    buttonLink: "#hero"
  },

  // Section Visibility Toggles (Competition sections explicitly turned off)
  sections: {
    hero: true,
    eventInfo: true,
    about: true,
    experience: true,
    machines: true,
    venue: true,
    faq: true,
    contact: true,
    finalCta: true,
    rounds: false,
    timeline: false,
    prizes: false,
    rules: false,
    sponsors: false,
    registration: false
  }
};
