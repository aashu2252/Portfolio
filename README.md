# Interactive Space Portfolio | Developer Profile

A premium, fully responsive developer portfolio featuring an interactive, physics-driven deep space dark mode design aesthetic.

**Live Demo:** [https://aashu2252.github.io/Portfolio/](https://aashu2252.github.io/Portfolio/)

---

## 🌌 Theme & Design System

The application utilizes an ethereal space design language to simulate a weightless coding console:
- **Obsidian Dark Void:** High-contrast `#030303` base layer paired with glassmorphic cards (`backdrop-filter: blur(16px)`).
- **Nebula Accents:** Electric cyan, deep purple, and neon pink glows illuminating background structures.
- **Weightless Physics:** Keyframe floating animations causing cards, badges, and elements to drift slowly on the Y-axis.
- **Parallax Navigation:** Interactive canvas-based starfield background that shifts and forms constellation nodes when responding to mouse positions.
- **3D Interactive Tilts:** Multi-axis lifting tilts using Framer Motion when hover-targeting cards.

---

## 🛠️ Tech Stack

- **Core Framework:** React 18 & Vite
- **Styling Pipeline:** Tailwind CSS v4 & PostCSS
- **Animation System:** Framer Motion (for entrance triggers & 3D micro-interactions)
- **Icons Library:** Lucide React
- **Typography:** Google Fonts (Outfit for headers, Inter for text)

---

## 🚀 Sections Included

1. **Hero Section:** Bold introduction as a Second Year Undergraduate Software Developer seeking a Software Engineering Internship, typing animation of core skills, and floating decorative elements.
2. **About Me:** Academic focus on full-stack engineering based in Indore, detailing specific internship objectives and career development goals.
3. **Projects Grid:** Staggered floating cards representing:
   - **RaktSetu:** Geolocation blood-donor network using Google Maps & Firebase.
   - **IndoreVyapar:** B2B commercial inventory intelligence models.
   - **Nutricart:** Diet companion built during OpenClaw HackIndia.
4. **Achievements & Hackathons:** Interactive vertical timeline tracing SIH 2025 (Frontend Developer), OpenClaw HackIndia (Nutricart), and BECon at IIT Delhi (Golden Pass holder).
5. **Contact Footer:** Minimalist footer with interactive contact validations, success receipt transitions, and links to GitHub and LinkedIn.

---

## 🛠️ Setup & Local Development

### 1. Install Dependencies
Run the following command in your terminal to fetch all required libraries:
```bash
npm install
```

### 2. Launch Development Server
Start the local server at `http://localhost:5173`:
```bash
npm run dev
```

### 3. Production Build
Compile and optimize assets for deployment:
```bash
npm run build
```

---

## 🚀 GitHub Deployment

To link this local workspace and push it to your GitHub account:

1. **Create a remote repository** on your GitHub panel.
2. **Copy the repository URL** (e.g., `https://github.com/your-username/repo-name.git`).
3. **Add the remote** in this workspace and push:
   ```bash
   git remote add origin <your-repository-url>
   git branch -M master
   git push -u origin master
   ```
