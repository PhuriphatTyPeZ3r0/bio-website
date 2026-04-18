# 🌌 PhuriphatTyPeZ3r0 | Bio Hub

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15%2B-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Three.js](https://img.shields.io/badge/WebGL-Three.js-white?logo=three.js)
![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss)

Welcome to the **AGE System Bio Hub**, an ultra-modern, high-tech personal link-in-bio website and portfolio built with Next.js. Designed with a deep passion for Mecha aesthetics (specifically inspired by *Gundam Age-FX*), this project combines cyberpunk HUD elements, real-time 3D interactive canvases, and fluid background effects.

---

## 🚀 Features

- **Cyber-HUD Interface**: Fully customized UI elements with neon cyan boundaries, glowing cyber-borders (`c-funnel-glow`), and futuristic Sci-Fi typography (Orbitron).
- **Interactive 3D Carousel (WebGL)**: A state-of-the-art interactive carousel built with `React Three Fiber`. Displays project/anime cards on an immersive 3D wheel rotating seamlessly around a holographic core.
- **Dynamic Vanta.js Background**: Integrated `vanta.globe` directly with Three.js to generate an interactive, mouse-tracking cyber-network globe background that gives depth and motion to the site.
- **Glassmorphism & High Contrast**: Custom CSS utilities overlaying dark slate backgrounds via backdrop-blur, giving it that crisp "Control Panel" feel.
- **Fully Responsive**: Optimized flawlessly for all displays; from ultrawide monitors to compact mobile phone screens without sacrificing the 3D WebGL experiences.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) powered by Turbopack.
- **UI/Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Engine**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Effects**: [React Three Postprocessing](https://docs.pmnd.rs/react-three-fiber/api/events) (Bloom) & [Vanta.js](https://www.vantajs.com/)
- **Icons**: [React Icons (FontAwesome 6 & Lucide)](https://react-icons.github.io/react-icons/)

## 💻 Getting Started

To run the AGE System locally on your machine, simply follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PhuriphatTyPeZ3r0/bio-website.git
   cd bio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Boot Up Sequence:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the AGE System dashboard live.

## 📁 Project Structure highlights

- `/app` - Next.js App Router entry points (`page.tsx`, `layout.tsx`, `globals.css`).
- `/components` - Contains the specific high-tech UI components:
  - `TouchCarousel.tsx`: The WebGL interactive spin wheel.
  - `VantaBackground.tsx`: Setup and hooks for the interactive Vanta globe.
  - `Button.tsx`: Sci-Fi styled external link buttons.
- `/public/images` - Directory serving the source images used as 3D card textures limit optimization.

---

*“Advanced Generation Evolution - Don't beg for things, do it yourself. Or else you won't get anything.”*
