import characterImg from '../assets/JwwBb.jpg';

export interface ComingSoonConfig {
  festName: string;
  status: string;
  eyebrow: string;
  mainHeading: {
    line1: string;
    line2: string;
  };
  tagline: string;
  supportingCopy: string;
  characterImage: string;
  organizer: string;
  nextChapter: {
    eyebrow: string;
    title: string;
    description: string;
    resonanceMessage: string;
  };
  social: {
    instagram: string;
    instagramUrl: string;
    email: string;
  };
}

export const comingSoonData: ComingSoonConfig = {
  festName: "IGNITRRON 26",
  status: "COMING SOON",
  eyebrow: "TRANSMISSION PENDING // MYSTIC ARCHIVE",
  mainHeading: {
    line1: "COMING",
    line2: "SOON",
  },
  tagline: "THE NEXT EXPERIENCE IS TAKING SHAPE.",
  supportingCopy: "A convergence of energy, technology, and mystic dimensions. The next chapter has not yet been revealed.",
  characterImage: characterImg,
  organizer: "IGNITRRON KPRIET",
  nextChapter: {
    eyebrow: "DIMENSIONAL REVEAL",
    title: "IGNITRRON 26 IS PREPARING SOMETHING NEW.",
    description: "A new experience is taking shape. The details will be revealed soon.",
    resonanceMessage: "AWAIT THE CONVERGENCE",
  },
  social: {
    instagram: "@kpriet_ignitrron",
    instagramUrl: "https://www.instagram.com/kpriet_ignitrron/",
    email: "ignitrron@kpriet.ac.in",
  },
};
