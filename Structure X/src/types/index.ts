export interface StructureItem {
  id: string;
  name: string;
  location: string;
  yearBuilt: string;
  category: string;
  image: string;
  engineeringSignificance: string;
  keyMaterials: string[];
  structuralSystem: string;
  primaryChallenge: string;
  blueprintSpecs: {
    height: string;
    foundationType: string;
    loadType: string;
    keyFeature: string;
  };
}

export interface TowerCutawayComponent {
  id: string;
  name: string;
  category: string;
  structuralRole: string;
  engineeringPurpose: string;
  keyConsideration: string;
  yPercent: number;
  xPercent: number;
}

export interface ForceConcept {
  id: string;
  name: string;
  symbol: string;
  description: string;
  loadBehavior: string;
  towerExample: string;
  vectorDirection: string;
  color: string;
}

export interface ResearchCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  questionsToAnswer: string[];
}

export interface MachineryItem {
  id: string;
  title: string;
  category: string;
  role: string;
  modernEquivalent: string;
  historicalContext: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  structuralRole: string;
  engineeringPurpose: string;
  keyProperties: string[];
}

export interface ChallengeItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  engineeringChallenge: string;
  solution: string;
}

export interface InnovationItem {
  id: string;
  challenge: string;
  idea: string;
  solution: string;
}

export interface PresentationSlide {
  slideNumber: number;
  title: string;
  focus: string;
  recommendedVisuals: string[];
  keyTechnicalContent: string;
}

export interface QuestionCategory {
  category: string;
  question: string;
  purpose: string;
  engineerDefenseHint: string;
}

export interface EvaluationCriterion {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
}
