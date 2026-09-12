# prime-test-2
this is updated version to the previous primetest website
# ⚡ Primee Ways (`primeeways.in`)

[![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

> Official production website for **Primee Ways** — a premier digital marketing and growth agency serving **Healthcare** practices and **Real Estate** brands and businesses.

🌐 **Live Domain:** [primeeways.in](https://primeeways.in)

---

## 📖 About Primee Ways

Primee Ways was founded by **Charan**, a 15-year-old entrepreneur, on a mission to eliminate legacy agency fluff, slow turnaround, and meaningless vanity metrics. The agency provides data-driven, hyper-niche digital acceleration:
- **Healthcare**: Dominating local clinic SEO, medical map-packs, HIPAA-compliant Google Search Ads, and aesthetic consult funnels.
- **Real Estate**: Engineering High-Net-Worth investor campaigns, 3D interactive property tours, and high-converting landing pages for luxury residential towers and villa communities.

> *“Dreams are free, but turning them into reality takes courage.”* — **Charan, Founder**

---

## ✨ Features & Sections

- **🌓 Dynamic Theming (Dark/Light)**:
  - **Default Dark Mode**: Sleek, modern, Apple/Linear-inspired dark aesthetic (`#0A0C10`).
  - **Soft Pastel Light Mode**: Warm beige (`#F9F7F4`), never pure white (`#FFFFFF`).
  - Persistent theme memory in `localStorage` with zero Flash of Unstyled Content (FOUC).
- **🔤 Standout Multi-Font Hero Typography**:
  - *"Hey world, we are"* in **Space Grotesk** (tracked uppercase mono-sans).
  - *"Primee Ways"* in **Syne** (bold avant-garde with a metallic silver radiant gradient).
  - *"a digital marketing agency"* in **Cormorant Garamond** (flowing luxury editorial serif).
- **⚡ Stylized Thunderbolt Mark**:
  - Precision vector Z/thunder mark rendered in silver tones (`#8B92A5` to `#CBD5E1`) over a dark rounded shield badge (`#0A0C11`), maintained across both themes.
- **🌀 Interactive Loading Experience**:
  - Concentric rotating and pulsing rings around the thunderbolt logo with typewriter-style loading text and skip support.
- **🛠️ Specialized Services**:
  - 4 tailored pillars: **SEO**, **Paid Ads**, **Social Media Marketing**, and **Web Development**.
  - Mobile-optimized: compact, equal-height, centered layout with full-width action buttons.
  - Interactive modal with comprehensive deliverable checklists and expected ROI.
- **💼 Verified Client Case Studies**:
  - Filterable tabs (`All`, `Healthcare`, `Real Estate`) highlighting quantifiable metrics (e.g., *+340% patient bookings*, *$6.8M+ property pipeline*).
- **💬 Swipeable Testimonials Carousel**:
  - Section titled **“What clients say”**.
  - Left-to-right swipe support with touch gestures for mobile and mouse-drag for desktop, complete with dots and autoplay.
- **👤 Founder Showcase**:
  - **Founder photo pinned to the left in every view** (including mobile).
  - Highlights Charan's story and core agency ethos.
- **📝 Interactive Mock Contact Form**:
  - Clean client-side mock with input validation, budget tiers, and celebratory confetti animation upon submission.
  - *(Zero backend, zero database, zero email integrations required).*
- **📱 Fully Responsive**:
  - Seamlessly adapted for mobile phones, tablets, laptops, and ultra-wide displays.
- **🔍 SEO & Social Ready**:
  - Comprehensive OpenGraph tags, Twitter cards, semantic HTML5, and responsive viewport configuration.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Space Grotesk, Syne, Cormorant Garamond, Plus Jakarta Sans)

---

## 📁 Project Structure

```text
primeeways/
├── public/                     # Static public assets
├── src/
│   ├── components/
│   │   ├── ContactMock.tsx     # Client-side mock inquiry form with confetti
│   │   ├── Footer.tsx          # Contact info, social links, domain badge
│   │   ├── Founder.tsx         # Left-aligned photo, 15yo founder story & quote
│   │   ├── Hero.tsx            # Standout 3-tier typography with metallic gradient
│   │   ├── LoadingScreen.tsx   # Concentric orbital rings + typewriter loader
│   │   ├── Logo.tsx            # Stylized thunderbolt on dark rounded badge
│   │   ├── Navbar.tsx          # Logo, links, mobile drawer, theme toggle
│   │   ├── Projects.tsx        # Healthcare & Real Estate filterable case studies
│   │   ├── ServiceModal.tsx    # Deliverables & ROI deep-dive modal
│   │   ├── Services.tsx        # SEO, Ads, Social Media, Web Dev cards
│   │   └── Testimonials.tsx    # Swipeable carousel ("What clients say")
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/light theme state & persistence
│   ├── types.ts                # TypeScript data interfaces
│   ├── App.tsx                 # Main application orchestrator
│   ├── index.css               # Tailwind directives, fonts, silver utilities
│   └── main.tsx                # React root entrypoint
├── index.html                  # SEO, meta tags, Google Fonts, SVG favicon
├── package.json                # Project scripts & dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom theme tokens (silver palette, pastel light)
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/primeeways.git
cd primeeways
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### 4. Build for Production

```bash
npm run build
```

This compiles TypeScript and builds optimized production static assets into the `dist/` folder.

### 5. Preview the Production Build

```bash
npm run preview
```

---

## ☁️ Deployment Guide

This is a static Single Page Application (SPA) and can be deployed in minutes to any modern hosting platform:

### Deploying to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `primeeways` repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository in [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Deploying to Cloudflare Pages
1. Connect your repository in the Cloudflare Dashboard under **Workers & Pages**.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Click **Save and Deploy**.

---

## 📬 Contact & Social Links

- **Email**: [primeeways@email.com](mailto:primeeways@email.com)
- **Website**: [primeeways.in](https://primeeways.in)
- **Instagram**: [@primeeways.in](https://instagram.com/primeeways.in)
- **LinkedIn**: [Primee Ways](https://linkedin.com/company/primeeways)
- **Twitter / X**: [@primee_ways](https://twitter.com/primee_ways)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

© 2026 **Primee Ways** (`primeeways.in`). Founded by Charan. All rights reserved.
