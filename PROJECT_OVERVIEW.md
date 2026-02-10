# AEGIS Autonomous Systems - Project Overview

## 🎯 Mission

This is a **production-grade, cinematic 3D website** for an autonomous aerial systems company. It represents a **credibility weapon** - designed to communicate precision engineering, technical depth, and operational reliability.

## 🚁 Core Experience

### Hero Section - The Flagship
- **400vh scroll container** with sticky 3D canvas
- **5-phase cinematic timeline**:
  1. **Approach** (0-25%) - Drone rotates slowly in space
  2. **Deconstruction** (25-45%) - Components separate in zero-gravity
  3. **Inspection** (45-55%) - Components hover, HUD labels appear
  4. **Analysis** (55-75%) - Diagnostic data streams, status indicators
  5. **Reassembly** (75-100%) - Components re-align and lock

### Technical Fidelity
- **Realistic drone architecture** with 6 modular subsystems:
  - Flight Core (AI processing)
  - Sensor Array (camera, LiDAR, thermal)
  - Propulsion Units (4x rotor systems)
  - Power Module (battery)
  - Communications Module (telemetry)
  - Protective Frame (structure)

### Visual Language
- **Ultra-dark charcoal** (#0a0a0a) base
- **Electric blue** (#00d9ff) primary accent
- **Signal amber** (#ffaa00) secondary accent
- **Procedural background**: Grid, particles, fog
- **PBR materials**: Metallic, emissive, Fresnel
- **Cinematic lighting**: HDRI environment + rim lights

### Technical HUD
- **Aerospace-grade diagnostic interface**
- Component labels with connection lines
- Live system status panel
- Scrolling diagnostic logs
- GPS coordinates, altitude, telemetry

## 📂 Architecture

```
src/
├── three/              # 3D components
│   ├── Drone.tsx      # Main orchestrator
│   ├── Lights.tsx     # Lighting system
│   └── DroneParts/    # Individual modules
├── scenes/            # 3D scenes
│   ├── HeroScene.tsx  # Main canvas
│   └── Background.tsx # Grid, particles, fog
├── hooks/             # React hooks
│   ├── useLenis.ts    # Smooth scroll
│   └── useScrollProgress.ts
├── ui/                # Overlays
│   └── HUD.tsx        # Technical interface
└── sections/          # Page sections
    ├── Hero.tsx
    ├── Mission.tsx
    ├── Capabilities.tsx
    ├── Engineering.tsx
    └── Contact.tsx
```

## 🛠 Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | React 18 + TypeScript | Type-safe component architecture |
| **3D** | Three.js + R3F | WebGL rendering |
| **3D Utils** | @react-three/drei | Three.js helpers (shadows, env) |
| **Animation** | Framer Motion | UI state transitions |
| **Scroll** | Lenis | Smooth inertial scrolling |
| **Styling** | Tailwind CSS v3 | Utility-first styling |
| **Build** | Vite | Fast bundling |

## 📊 Performance

### Build Output
```
dist/assets/
├── three.js      → 719kb (187kb gzipped)
├── r3f.js        → 426kb (136kb gzipped)
├── motion.js     → 122kb (40kb gzipped)
├── index.js      → 38kb  (11kb gzipped)
└── index.css     → 11kb  (3kb gzipped)
```

**Total gzipped**: ~375kb

### Optimizations
- ✅ Code splitting (3 main chunks)
- ✅ Tree shaking enabled
- ✅ Adaptive DPR (1x-2x)
- ✅ Lazy loading via Suspense
- ✅ Contact shadows (not real-time)
- ✅ Efficient particle system (500 points)

### Targets
- **FPS**: 50-60fps
- **TTI**: <3s
- **Lighthouse**: 85+

## 🎨 Design Principles

1. **Credibility over flash** - No sci-fi clichés
2. **Precision engineering** - Clean, measured, professional
3. **Technical authenticity** - Real-world specs and terminology
4. **Controlled motion** - Smooth interpolation, no jarring transitions
5. **Performance first** - 60fps target, mobile-aware

## 📝 Content Strategy

### Mission Section
- Grounded, technical mission statement
- Key operational metrics (flight hours, uptime, range)
- No marketing fluff

### Capabilities Section
- 4 core technical capabilities
- Real specs (SLAM, VIO, LiDAR, AES-256, YOLO)
- Tagged with technical acronyms

### Engineering Section
- 5-step systems engineering process
- Requirements → Design → Prototype → Validation → Production

### Contact Section
- Minimal, secure, professional
- Email for inquiries
- No social media links (deliberate)

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Build
```bash
npm run build  # → dist/
```

### Requirements
- Node 18+
- Modern browser with WebGL support

## 🔧 Customization Points

### Brand Colors
`tailwind.config.js` → `theme.extend.colors`

### Scroll Timeline
`src/three/Drone.tsx` → Phase constants

### Company Info
- `src/sections/Mission.tsx`
- `src/sections/Capabilities.tsx`
- `src/sections/Contact.tsx`
- `index.html` (meta tags)

### Drone Appearance
- `src/three/DroneParts/*.tsx` (geometry, materials)
- `src/three/Lights.tsx` (lighting)

## 📚 Documentation

- **README.md** - Overview and architecture
- **QUICKSTART.md** - Installation and dev guide
- **DEPLOYMENT.md** - Production deployment
- **PROJECT_OVERVIEW.md** (this file) - Complete reference

## 🎯 Target Audience

### Primary
- Defense contractors
- Industrial inspection firms
- Infrastructure monitoring agencies
- Security operations centers

### Secondary
- Robotics investors
- Technical recruiters
- Engineering talent
- Industry analysts

## 💡 What Makes This Different

### Not a Portfolio Site
This is enterprise-grade positioning for a real or aspirational company.

### Not a Demo
Every technical spec is grounded in real autonomous systems terminology.

### Not Flashy
The restraint is deliberate - credibility through precision, not spectacle.

### Production-Ready
- Type-safe throughout
- Performance optimized
- SEO-ready metadata
- Vercel-ready config

## 🔐 No Backend Required

This is a **static frontend-only application**:
- No API calls
- No database
- No authentication
- No server-side rendering

All 3D rendering happens in the browser via WebGL.

## 🎬 Final Note

This website serves one purpose: **to make a visitor believe this company can be trusted with mission-critical autonomous systems**.

Every design choice - from the dark palette to the technical terminology to the controlled motion - reinforces this single objective.

No hype. No noise. Only clarity and control.

---

**Built with precision. Engineered for credibility.**
