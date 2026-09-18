export interface VehicleSpec {
  label: string;
  value: string;
  unit?: string;
  detail: string;
}

export interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  position: [number, number, number]; // 3D coordinates relative to car
}

export interface ColorOption {
  name: string;
  hex: string;
  roughness: number;
  metalness: number;
  clearcoat?: number;
  clearcoatRoughness?: number;
}

export const EVENT_CONFIG = {
  title: "AUTO SHOW",
  subtitle: "IGNITRRON ’26 WALK-IN EXHIBITION",
  dates: "18 SEPTEMBER 2026",
  day: "DAY 01",
  time: "3:00 PM – 5:00 PM",
  venue: "TRIAD & CAR PARKING",
  location: "TRIAD & CAR PARKING",
  entry: "WALK-IN ENTRY",
  eventType: "WALK-IN",
  lineupCars: "20+ CARS",
  lineupBikes: "10+ SUPERBIKES",
  tagline: "THE FUTURE OF MOTION",
  registrationUrl: "https://www.theticket9.com/book/ignitrron-26",
  mainDescription: `Auto Show is a walk-in automotive exhibition that brings together a dynamic showcase of automobiles and superbikes, celebrating performance, design, engineering, innovation, and automotive culture. The exhibition offers visitors an opportunity to experience a wide range of machines up close and discover the technology, craftsmanship, styling, and mechanical character behind modern automotive engineering.

Featuring an extensive lineup of 20+ cars and 10+ superbikes, the event is designed as an immersive showcase for automobile enthusiasts, students, and visitors. From performance-focused machines to distinctive automotive builds, the exhibition brings together the energy of the automotive world in a single experience.

The Auto Show is presented by RoadTribe (the primary automotive startup & community platform) as part of IGNITRRON’26, creating a platform where automotive passion, engineering excellence, design, and community come together.`,
  specs: [
    { label: "LINEUP", value: "20+", unit: "CARS", detail: "Curated Lineup Across Automotive Styles" },
    { label: "SUPERBIKES", value: "10+", unit: "BIKES", detail: "High-Output Engineering & Design" },
    { label: "EVENT TYPE", value: "WALK-IN", unit: "", detail: "Open Access Exhibition Entry" },
    { label: "TIME", value: "3-5", unit: "PM", detail: "Day 01 • 18 September 2026" },
  ] as VehicleSpec[],
  colors: [
    { name: "PITCH BLACK", hex: "#080808", roughness: 0.15, metalness: 0.9, clearcoat: 1.0, clearcoatRoughness: 0.1 },
  ] as ColorOption[],
  hotspots: [
    {
      id: "engine",
      title: "PERFORMANCE",
      subtitle: "ENGINEERING EXCELLENCE",
      description: "Celebrating high-output powertrains and precision mechanical design.",
      position: [0, 0.4, 1.2],
    },
    {
      id: "aerodynamics",
      title: "AERODYNAMICS",
      subtitle: "ACTIVE AIRFLOW DESIGN",
      description: "Optimized body contours and functional airflow management.",
      position: [0.9, 0.2, 0.2],
    },
    {
      id: "design",
      title: "DESIGN",
      subtitle: "AUTOMOTIVE CRAFTSMANSHIP",
      description: "Distinctive automotive builds crafted for performance and styling.",
      position: [-0.8, 0.5, -0.6],
    },
    {
      id: "lighting",
      title: "INNOVATION",
      subtitle: "MODERN ILLUMINATION",
      description: "State-of-the-art optical systems and lighting architecture.",
      position: [0, 0.3, 2.1],
    },
  ] as Hotspot[],
  categories: [
    {
      id: "cars",
      title: "20+ CARS",
      subtitle: "AUTOMOTIVE SHOWCASE",
      description: "Featuring a curated lineup of 20+ cars across a range of automotive styles, performance platforms, and engineering builds.",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=65&fm=webp",
    },
    {
      id: "superbikes",
      title: "10+ SUPERBIKES",
      subtitle: "SUPERBIKE EXHIBITION",
      description: "Presenting a lineup of 10+ superbikes highlighting high-performance two-wheel engineering, craftsmanship, and distinctive styling.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=65&fm=webp",
    },
    {
      id: "performance",
      title: "PERFORMANCE & DESIGN",
      subtitle: "ENGINEERING CRAFTSMANSHIP",
      description: "Discover the craftsmanship, mechanical character, and innovation behind modern automotive builds.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=65&fm=webp",
    },
    {
      id: "culture",
      title: "AUTOMOTIVE CULTURE",
      subtitle: "COMMUNITY & PASSION",
      description: "An immersive showcase bringing together automobile enthusiasts, students, and visitors in a single shared experience.",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=65&fm=webp",
    },
  ],
};
