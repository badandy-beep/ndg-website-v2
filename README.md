# Noetic Dharma Group Website

> Wisdom for an Unstable Age

## Overview

This is the official website for Noetic Dharma Group, built with Next.js 14 and deployed on Vercel.

**CONFIDENTIAL & PROPRIETARY** — © 2025 Noetic Dharma Group, LLC

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Deployment to Vercel

### Option 1: Via GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js
- Build the project
- Deploy to a `.vercel.app` domain

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

---

## Route Structure

| Route | Purpose |
|-------|---------|
| `/` | Home — Hero with rotating phrases |
| `/the-moment` | Fourth Turning context |
| `/the-method` | Socratic method explanation |
| `/the-work` | Services overview |
| `/the-way` | Ethos and selectivity |
| `/engagement` | Contact information |
| `/client-access` | PIN-protected access gate |
| `/client-access/[project]` | Project-specific materials |

---

## Client Access Codes

| Code | Project |
|------|---------|
| `MAHA-972028` | Project MAHA |
| `USAX-687173` | Project USAX |
| `WEBUILT-398960` | Project WEBUILT |
| `WARROOM-482177` | Project WARROOM |
| `GARY-535231` | Project GARY |
| `EMBLEM-146236` | Project EMBLEM |
| `NIKOLAELECTRIC-411400` | Project NIKOLA ELECTRIC |

To update codes, edit `/lib/access-map.ts`.

---

## Font Setup

The project uses:
- **Canela** (headlines) — Commercial Type, licensed
- **Inter** (body) — Google Fonts

Canela fonts are stored in `/public/fonts/`:
- `Canela-Regular.woff2` (400)
- `Canela-Medium.woff2` (500)
- `Canela-Semibold.woff2` (600)

---

## Image Assets

| File | Usage |
|------|-------|
| `ndg-hero-socrates-cosmic.png` | Homepage hero |
| `ndg-method-socrates-contemplative.png` | The Method page |
| `ndg-closing-socrates-approval.png` | Deck closing slide only |

Images are in `/public/images/`.

---

## Design Tokens

### Colors
- Background: `#0E0E11`
- Primary text: `#F2F2EE`
- Muted text: `rgba(242,242,238,0.65)`

### Typography
- Hero: `clamp(44px, 8vw, 88px)`
- H1: `clamp(36px, 6vw, 64px)`
- Body: `clamp(16px, 1.5vw, 20px)`

---

## Mobile Optimization

- Body text never below 16px
- Tap targets ≥ 44px
- Hero overlay increases to 80-85% on mobile
- Respects `prefers-reduced-motion`

---

## Adding Client Logos

1. Place logo in `/public/client-logos/`
2. Name format: `project-[slug].png` (e.g., `project-maha.png`)
3. Logo will automatically appear on project pages

---

## Adding Project Materials

1. Edit `/lib/access-map.ts`
2. Add modules to the project config:

```typescript
modules: [
  { title: "Executive Brief", type: "pdf", url: "/path/to/file.pdf" },
  { title: "Financial Model", type: "xlsx", url: "/path/to/file.xlsx" },
]
```

---

## Security Notes

- Access codes are validated server-side only
- Codes never exposed in client bundle
- Project pages use `noindex` meta tags
- No public directory listing

---

## Support

For technical issues, contact your development team.

**CONFIDENTIAL & PROPRIETARY**
© 2025 Noetic Dharma Group, LLC | www.noeticdharma.com
