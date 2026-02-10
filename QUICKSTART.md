# Quick Start Guide

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## What You'll See

1. **Hero Section** (400vh scroll)
   - Cinematic 3D drone with scroll-controlled timeline
   - Technical HUD overlay with diagnostics
   - 5 phases: Approach → Deconstruct → Inspect → Analyze → Reassemble

2. **Mission Section**
   - Company mission statement
   - Key metrics

3. **Capabilities Section**
   - Core technical capabilities
   - Autonomous Navigation, Thermal Imaging, Secure Telemetry, Edge Processing

4. **Engineering Section**
   - Systems engineering methodology
   - 5-step process

5. **Contact Section**
   - Contact information

## Key Features

- ✨ **Scroll-driven 3D animation** - No autoplay, user-controlled
- 🎯 **Realistic drone components** - Flight Core, Sensors, Propulsion, Power, Comms, Frame
- 📊 **Aerospace HUD** - Real-time diagnostics panel
- 🌊 **Smooth scrolling** - Lenis inertial scroll
- 🎬 **Framer Motion** - UI state animations
- ⚡ **Performance optimized** - Code-split, 60fps target

## Technology

- React 18 + TypeScript
- Three.js + React Three Fiber
- Tailwind CSS
- Framer Motion
- Lenis

## Customization

### Colors

Edit `tailwind.config.js`:

```js
colors: {
  'deep-black': '#0a0a0a',
  'graphite': '#1a1a1a',
  'electric-blue': '#00d9ff',
  'signal-amber': '#ffaa00',
}
```

### Scroll Timeline

Edit `src/three/Drone.tsx`:

```ts
const SEPARATION_START = 0.25;
const SEPARATION_END = 0.45;
const INSPECTION_END = 0.75;
const REASSEMBLY_END = 1.0;
```

### Company Info

Edit content in:
- `src/sections/Mission.tsx`
- `src/sections/Capabilities.tsx`
- `src/sections/Contact.tsx`
- `index.html` (title, meta)

## Build for Production

```bash
npm run build
```

Output: `dist/` folder (ready to deploy)

## Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full guide.

Quick deploy to Vercel:
```bash
vercel
```

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### TypeScript errors
```bash
npm run build  # Will catch all TS errors
```

### Performance issues
- Check browser WebGL support
- Monitor FPS in DevTools
- Reduce `dpr` in Canvas if needed

## Next Steps

1. Replace placeholder content with your company info
2. Add your logo/branding
3. Customize colors to match brand
4. Add analytics (Vercel, GA4)
5. Test on mobile devices
6. Deploy to production

## Questions?

This is a self-contained frontend app. No backend required.
All 3D rendering happens in the browser via WebGL.
