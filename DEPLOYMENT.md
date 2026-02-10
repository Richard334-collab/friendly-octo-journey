# Deployment Guide

## Quick Deploy to Vercel

### 1. Install Vercel CLI (optional)

```bash
npm i -g vercel
```

### 2. Deploy

```bash
# From project root
vercel

# Or for production
vercel --prod
```

### 3. Configure via Dashboard

The `vercel.json` is already configured with:
- SPA routing (all routes → index.html)
- Asset caching (1 year for /assets/*)

## Manual Deployment

### Build

```bash
npm run build
```

This creates an optimized production build in `dist/` with:
- **Gzipped size**: ~375kb total
- **Code-split chunks**:
  - three.js: 187kb gzipped
  - React Three Fiber + Drei: 136kb gzipped
  - Framer Motion: 40kb gzipped
  - App code: 11kb gzipped

### Deploy `dist/` folder to any static host:

- **Vercel**: Drag & drop or CLI
- **Netlify**: Drag & drop or CLI
- **Cloudflare Pages**: Dashboard upload
- **AWS S3 + CloudFront**: S3 bucket + CDN
- **GitHub Pages**: Via Actions

## Environment Variables

None required - this is a static frontend-only app.

## Performance Checklist

- ✅ Code splitting (Three.js, R3F, Motion in separate chunks)
- ✅ Tree shaking enabled
- ✅ Gzip compression
- ✅ Asset caching headers
- ✅ Lazy loading via Suspense
- ✅ Adaptive DPR (1x-2x)
- ✅ Mobile-aware rendering

## Post-Deployment Verification

1. **Lighthouse audit** - Target: 85+ score
2. **FPS monitoring** - Target: 50+ fps
3. **TTI (Time to Interactive)** - Target: <3s
4. **Mobile test** - Verify fallback works
5. **Scroll performance** - Smooth Lenis scrolling

## Domain Configuration

If using custom domain:
1. Add domain in Vercel dashboard
2. Update DNS records (A/CNAME)
3. SSL auto-provisioned by Vercel

## Troubleshooting

### Build fails
- Check Node version (18+ recommended)
- Clear `node_modules` and reinstall
- Check TypeScript errors

### White screen on deploy
- Check browser console
- Verify base path in vite.config
- Check network tab for 404s

### Performance issues
- Verify WebGL support in browser
- Check device capabilities
- Monitor FPS in DevTools

## Analytics (Optional)

Add to `index.html` before `</head>`:

```html
<!-- Vercel Analytics -->
<script defer src="/_vercel/insights/script.js"></script>
```

Or install package:

```bash
npm install @vercel/analytics
```

Then in `App.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

// Add inside App component
<Analytics />
```
