# Ignitrron '26 Official Website & Event Portals

Welcome to the official repository for **Ignitrron '26** — a comprehensive technical symposium platform featuring a unified event dashboard and 20+ dedicated event portals.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)

### Run the Website Locally
To serve the complete, unified deployment (Dashboard + All Event Portals):
```bash
# Start the unified production server on http://localhost:5173
npm start
# OR
node serve-deployment.js
```

To run the unified dynamic development server:
```bash
npm run dev
# OR
node dev-server.js
```

---

## 📂 Project Structure

| Folder / Portal | Subpath | Description |
| :--- | :--- | :--- |
| `Event Page` | `/` or `/dashboard/` | Main Interactive 3D Event Hub & Dashboard |
| `1-Lanch Pad` | `/launchpad/` | Launchpad Startup / Innovation Showcase |
| `2-MUN Conference` | `/mun-conference/` | Model United Nations Conference Portal |
| `3-Techno clash` | `/techno-clash/` | Techno Clash Tech Quiz |
| `4-Mechanical design challenge` | `/mechanical-design-challenge/` | CAD / Mechanical Modeling Challenge |
| `6-Legacy code` | `/legacy-code/` | Legacy Code Debugging & Refactoring |
| `7-research_zero_to_hero` | `/research-zero-to-hero/` | Research Presentation & Workshops |
| `10-ipl-main` | `/ipl-mega-auction/` | IPL Mega Auction Simulation |
| `11-E-sports Arcade` | `/e-sports-arcade/` | E-Sports Gaming Arena |
| `12-Criminal Chronicals` | `/criminal-chronicles/` | Forensics / Mystery Solving Event |
| `13-Milan 26` | `/milan-26/` | Cultural & Flagship Gathering Portal |
| `14-Project_Presntation` | `/project-presentation/` | Engineering & Innovation Project Expo |
| `15-Paper presentation` | `/paper-presentation/` | Technical Paper Presentation |
| `17-roborace` | `/robo-race/` | Autonomous & RC Robo Race |
| `18-Drone_Race` | `/drone-race/` | FPV Drone Obstacle Race |
| `19-Line follower` | `/line-follower/` | Autonomous Line Follower Bot Competition |
| `21-Marvel Quiz` | `/marvel-quiz/` | Marvel Universe Trivia Challenge |
| `22-Game genesis X` | `/game-genesis-x/` | Game Development & Design Hackathon |
| `23-Breaking the build` | `/breaking-the-build/` | DevOps & Reverse Engineering Challenge |
| `26-Japanese_Street` | `/japanese-street/` | Anime, Cosplay & Culture Showcase |
| `27-Auto show` | `/auto-show/` | Automotive Design & Supercar Exhibition |
| `Coming_soon` | `/coming-soon/` | Teaser / Countdown Portal |
| `deployment` | `/` | Assembled, production-ready static distribution |

---

## 🛠️ Build & Assemble Scripts

- **Rebuild all event applications**:
  ```bash
  npm run build
  # OR: node build-all-deployments.js
  ```
- **Assemble prebuilt packages into `/deployment`**:
  ```bash
  npm run assemble
  # OR: node assemble-final.js
  ```
- **Verify deployment integrity**:
  ```bash
  npm run verify
  # OR: node verify-deployment.js
  ```

---

## 📄 License
All rights reserved © 2026 Ignitrron Team.
