# AEGIS Autonomous Systems

**A cinematic 3D website showcasing next-generation autonomous drone technology**

## Overview

This is a production-grade marketing website for an autonomous aerial systems company. The experience features:

- **Scroll-controlled 3D drone deconstruction** using React Three Fiber
- **Cinematic timeline** with phase-based component separation and reassembly
- **Technical HUD overlay** with aerospace-grade diagnostic interface
- **Smooth scrolling** powered by Lenis
- **Responsive animations** using Framer Motion
- **Performance-optimized** WebGL rendering

## Technology Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite** - Fast build tooling
- **Three.js** + **React Three Fiber** - 3D rendering
- **@react-three/drei** - Three.js helpers
- **Framer Motion** - UI animations
- **Lenis** - Smooth scroll
- **Tailwind CSS** - Styling

## Architecture

```
src/
  three/
    Drone.tsx              # Main drone orchestrator
    Lights.tsx             # Lighting system
    DroneParts/
      FlightCore.tsx       # AI processing unit
      SensorArray.tsx      # Camera & LiDAR
      PropulsionUnit.tsx   # Rotor systems
      PowerModule.tsx      # Battery
      CommsModule.tsx      # Telemetry
      Frame.tsx            # Structural frame
  scenes/
    HeroScene.tsx          # Main 3D canvas
    Background.tsx         # Grid, particles, fog
  hooks/
    useLenis.ts            # Smooth scroll setup
    useScrollProgress.ts   # Scroll position tracking
  ui/
    HUD.tsx                # Technical overlay
  sections/
    Hero.tsx               # Main hero experience
    Mission.tsx            # Company mission
    Capabilities.tsx       # Technical capabilities
    Engineering.tsx        # Engineering approach
    Contact.tsx            # Contact information
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Performance

- **Target FPS:** 60fps
- **DPR:** Adaptive (1x to 2x)
- **Lazy loading:** 3D assets loaded via Suspense
- **Code splitting:** Automatic via Vite

## Design Principles

1. **Credibility over flash** - No sci-fi clichés, realistic materials
2. **Precision engineering** - Clean, measured, professional
3. **Technical authenticity** - Real-world terminology and specs
4. **Controlled motion** - Smooth interpolation, no jarring transitions
5. **Performance first** - 60fps target, mobile-aware rendering

## Deployment

Optimized for Vercel deployment:

```bash
npm run build
# Deploy dist/ folder
```

## License

Proprietary - AEGIS Autonomous Systems © 2026
