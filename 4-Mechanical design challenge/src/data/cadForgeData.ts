export interface CADForgeData {
  event: {
    name: string;
    festName: string;
    department: string;
    tagline: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  badges: {
    icon: string;
    label: string;
    color: 'red' | 'blue' | 'purple' | 'amber';
  }[];
  rounds: {
    roundNumber: string;
    title: string;
    materials: string[];
    taskTitle: string;
    tasks: string[];
    allowedSoftware?: string[];
    qualificationNotice?: string;
    icon: string;
    badgeColor: 'red' | 'blue';
  }[];
  rules: {
    id: string;
    title: string;
    icon: string;
    accent: 'red' | 'blue' | 'purple';
  }[];
  software: {
    name: string;
    category: string;
    badge: string;
    accent: string;
    glow: string;
    iconColor: string;
  }[];
  whyParticipate: {
    title: string;
    icon: string;
    accent: 'red' | 'blue' | 'purple' | 'amber';
  }[];
  coordinators: {
    name: string;
    role: string;
    phone: string;
  }[];
}

export const cadForgeData: CADForgeData = {
  event: {
    name: "CAD FORGE 2026",
    festName: "IGNITRRON'26",
    department: "Department of Mechanical Engineering",
    tagline: "From Blueprint to CAD Reality",
    aboutTitle: "What is CAD Forge?",
    aboutDescription:
      "CAD Forge is a mechanical engineering design challenge that tests participants' visualization, engineering drawing, and CAD modeling skills.\n\nParticipants will convert a given 3D isometric model into engineering projections and then recreate the same model using professional CAD software."
  },
  badges: [
    { icon: "Laptop", label: "Laptop Compulsory", color: "blue" },
    { icon: "Users", label: "Team of 2 Members", color: "red" },
    { icon: "Cog", label: "Mechanical Engineering Event", color: "purple" },
    { icon: "Trophy", label: "Multi-Round Competition", color: "amber" }
  ],
  rounds: [
    {
      roundNumber: "ROUND 1",
      title: "Engineering Drawing Challenge",
      materials: ["An A3 Sheet", "A 3D Isometric View"],
      taskTitle: "Draw the following views accurately:",
      tasks: ["Front View", "Side View", "Top View"],
      qualificationNotice: "Only selected teams will qualify for Round 2.",
      icon: "PenTool",
      badgeColor: "red"
    },
    {
      roundNumber: "ROUND 2",
      title: "CAD Modeling Challenge",
      materials: ["Round 1 Isometric Model"],
      taskTitle: "The same model given in Round 1 must be recreated using any one of the following software:",
      tasks: [
        "Fusion 360",
        "SolidWorks",
        "CATIA"
      ],
      allowedSoftware: ["Fusion 360", "SolidWorks", "CATIA"],
      qualificationNotice: "No other software should be displayed.",
      icon: "Cpu",
      badgeColor: "blue"
    }
  ],
  rules: [
    {
      id: "01",
      title: "Team Size: 2 Members",
      icon: "Users",
      accent: "red"
    },
    {
      id: "02",
      title: "Laptop Compulsory",
      icon: "Laptop",
      accent: "blue"
    },
    {
      id: "03",
      title: "Only selected teams can participate in Round 2",
      icon: "CheckCircle2",
      accent: "purple"
    },
    {
      id: "04",
      title: "Only Fusion 360, SolidWorks, and CATIA are allowed",
      icon: "Layers",
      accent: "red"
    }
  ],
  software: [
    {
      name: "Fusion 360",
      category: "Parametric CAD / CAM",
      badge: "Autodesk",
      accent: "from-[#ff0055]/30 via-[#ff0055]/10 to-transparent",
      glow: "hover:border-[#ff0055] hover:shadow-[0_0_30px_rgba(255,0,85,0.4)]",
      iconColor: "text-[#ff0055]"
    },
    {
      name: "SolidWorks",
      category: "3D Mechanical Design",
      badge: "Dassault Systèmes",
      accent: "from-[#00f0ff]/30 via-[#00f0ff]/10 to-transparent",
      glow: "hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
      iconColor: "text-[#00f0ff]"
    },
    {
      name: "CATIA",
      category: "Advanced Surface & Solid Modeling",
      badge: "Dassault Systèmes",
      accent: "from-[#9d4edd]/30 via-[#9d4edd]/10 to-transparent",
      glow: "hover:border-[#9d4edd] hover:shadow-[0_0_30px_rgba(157,78,221,0.4)]",
      iconColor: "text-[#9d4edd]"
    }
  ],
  whyParticipate: [
    {
      title: "Test Engineering Drawing Skills",
      icon: "PencilRuler",
      accent: "red"
    },
    {
      title: "Improve CAD Modeling Skills",
      icon: "Box",
      accent: "blue"
    },
    {
      title: "Enhance Technical Visualization",
      icon: "Eye",
      accent: "purple"
    },
    {
      title: "Compete with Other Engineers",
      icon: "Flame",
      accent: "amber"
    }
  ],
  prizes: [
    {
      position: "1ST PRIZE",
      title: "CHAMPION",
      amount: "₹5,000",
      description: "First place cash award + Certificate of Excellence",
      accent: "red",
      icon: "Trophy"
    },
    {
      position: "2ND PRIZE",
      title: "RUNNER-UP",
      amount: "₹3,000",
      description: "Second place cash award + Certificate of Merit",
      accent: "cyan",
      icon: "Award"
    },
    {
      position: "3RD PRIZE",
      title: "SECOND RUNNER-UP",
      amount: "₹2,000",
      description: "Third place cash award + Certificate of Merit",
      accent: "purple",
      icon: "Medal"
    }
  ],
  coordinators: [
    {
      name: "Ayman Nuhad",
      role: "Student Coordinator",
      phone: "+91 93635 29044",
      telLink: "tel:+919363529044"
    },
    {
      name: "Kavin R K",
      role: "Student Coordinator",
      phone: "+91 93434 29709",
      telLink: "tel:+919343429709"
    },
    {
      name: "Aghasthya M N",
      role: "Student Coordinator",
      phone: "+91 99449 23482",
      telLink: "tel:+919944923482"
    }
  ]
};
