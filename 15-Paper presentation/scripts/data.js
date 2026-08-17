/**
 * IGNITRRON - Official Paper Presentation Event Configuration & Data Architecture
 * Theme: Quantum Science & Advanced Research Laboratory (Hank Pym Inspired)
 */

window.IGNITRRON_DATA = {
  event: {
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
    teamSize: 4, // 4 members per team
    presentationDuration: "5–7 MIN",
    presentationDurationMinutes: "5 – 7 Minutes",
    facultyCoordinator: "Mr. Premkumar. T",
    totalPrizePool: "₹40,000",
    prizePerDomain: {
      first: "₹5,000",
      second: "₹3,000",
      total: "₹8,000"
    }
  },

  coordinators: [
    {
      name: "Phavizhash V",
      role: "Student Coordinator 1",
      phone: "6381762254",
      phoneFormatted: "+91 63817 62254"
    },
    {
      name: "Varun Karthic K A",
      role: "Student Coordinator 2",
      phone: "6382163133",
      phoneFormatted: "+91 63821 63133"
    },
    {
      name: "Abarna S",
      role: "Student Coordinator 3",
      phone: "9486015006",
      phoneFormatted: "+91 94860 15006"
    }
  ],

  faculty: {
    name: "Mr. Premkumar. T",
    designation: "Faculty Coordinator",
    department: "Ignitrron Advisory Faculty"
  },

  stats: [
    { value: "₹40K", label: "TOTAL PRIZE POOL", sub: "₹8,000 per domain" },
    { value: "5", label: "RESEARCH DOMAINS", sub: "Cross-Disciplinary" },
    { value: "25", label: "EXPECTED TEAMS", sub: "4 Members / Team" },
    { value: "100", label: "PARTICIPANTS", sub: "Day 2 · ECE Class" }
  ],

  domains: [
    {
      id: "software",
      number: "01",
      code: "DOM-01",
      title: "SOFTWARE",
      tagline: "AI, Coding, Data & Networks",
      icon: "cpu",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-400/50",
      glowColor: "rgba(0, 240, 255, 0.3)",
      description: "Digital systems, artificial intelligence algorithms, quantum software, cybersecurity, and cloud data infrastructures.",
      disciplines: ["IT", "CSE", "CSBS", "CSDS", "AIML", "AD", "Related Disciplines"],
      topics: [
        "Artificial Intelligence & Machine Learning",
        "Data Science & Big Data Architectures",
        "Cloud Computing & Cybersecurity",
        "Web3, Blockchain & Distributed Systems"
      ],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "circuits",
      number: "02",
      code: "DOM-02",
      title: "CIRCUITS",
      tagline: "Electronics, Signals & Energy",
      icon: "zap",
      color: "from-purple-500 to-indigo-600",
      borderColor: "border-purple-400/50",
      glowColor: "rgba(168, 85, 247, 0.3)",
      description: "Electronic systems, VLSI, microcontrollers, embedded IoT, power electronics, and signal telemetry.",
      disciplines: ["EEE", "ECE", "Instrumentation", "Related Disciplines"],
      topics: [
        "VLSI & Embedded System Design",
        "Signal & Image Processing Telemetry",
        "Smart Power Grids & Renewable Control",
        "Sensors, IoT & Robotics Hardware"
      ],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "hardware-3d",
      number: "03",
      code: "DOM-03",
      title: "HARDWARE & 3D",
      tagline: "CAD, Structures & Mechanicals",
      icon: "box",
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-400/50",
      glowColor: "rgba(245, 158, 11, 0.3)",
      description: "Mechanical prototypes, 3D additive manufacturing, thermal fluid mechanics, civil engineering, and structural dynamics.",
      disciplines: ["Mechanical", "Civil", "Related Disciplines"],
      topics: [
        "3D CAD Modeling & Additive Manufacturing",
        "Robotics, Automation & Mechatronics",
        "Structural & Material Engineering",
        "Thermal & Fluid Flow Innovations"
      ],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "bio",
      number: "04",
      code: "DOM-04",
      title: "BIO",
      tagline: "Molecules, Biotech & Lab Science",
      icon: "dna",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-400/50",
      glowColor: "rgba(16, 185, 129, 0.3)",
      description: "Biomedical instrumentation, biotechnology synthesis, chemical process engineering, and bio-nanotechnology.",
      disciplines: ["Chemical", "Biomedical Engineering", "Biotechnology", "Related Disciplines"],
      topics: [
        "Biomedical Diagnostic Devices",
        "Biochemical Process Intensification",
        "Genetic & Molecular Engineering",
        "Bio-Materials & Nano-Medicine"
      ],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    },
    {
      id: "business-arts",
      number: "05",
      code: "DOM-05",
      title: "BUSINESS & ARTS",
      tagline: "Strategy, Creativity & Entrepreneurship",
      icon: "trending-up",
      color: "from-pink-500 to-rose-600",
      borderColor: "border-pink-400/50",
      glowColor: "rgba(236, 72, 153, 0.3)",
      description: "Business analytics, techno-management strategies, creative media design, entrepreneurship, and digital communication.",
      disciplines: ["Business", "Management", "Arts", "Related Disciplines"],
      topics: [
        "Techno-Entrepreneurship & Startup Models",
        "Financial & Business Analytics",
        "Creative Digital Media & Communication",
        "Strategic Management & Innovation"
      ],
      prizes: { first: "₹5,000", second: "₹3,000", total: "₹8,000" }
    }
  ],

  workflow: [
    {
      step: "01",
      title: "REGISTER",
      subtitle: "Team Identity Lock",
      desc: "Register your team of 4 members and provide participant and institution details.",
      tag: "STEP_01"
    },
    {
      step: "02",
      title: "SUBMIT ABSTRACT",
      subtitle: "Scientific Dossier Transmission",
      desc: "Submit your paper title, domain track, abstract summary, and PPT/document file.",
      tag: "STEP_02"
    },
    {
      step: "03",
      title: "PRESENT",
      subtitle: "Stage Defense & Evaluation",
      desc: "Bring your own laptops and presentation (PPT), and deliver your 5–7 minute defense before the judges in ECE Class.",
      tag: "STEP_03"
    }
  ],

  guidelines: [
    {
      title: "Bring Your Own Laptops",
      content: "Participants must bring their own laptops, presentation slides (PPT/PDF), and necessary demonstration requirements."
    },
    {
      title: "Presentation Slides (PPT)",
      content: "Participants must bring their prepared presentation (PPT / PDF) ready on their laptops for live display."
    },
    {
      title: "Present Using Prepared PPT",
      content: "All registered teams must present their research concept directly using their prepared PPT slides from their own laptops."
    },
    {
      title: "Strict Time Duration (5–7 Minutes)",
      content: "Each team will receive approximately 5 to 7 minutes for their presentation followed by judges' queries."
    }
  ]
};
