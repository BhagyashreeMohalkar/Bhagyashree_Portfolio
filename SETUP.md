# Portfolio Setup Guide

## Quick Start

1. **Extract & Navigate**
   ```bash
   unzip Portfolio.zip
   cd Portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev:client
   ```

4. **Open in Browser**
   Visit `http://localhost:5000`

## Project Structure

```
client/src/
├── components/
│   ├── ui/              # UI components (Button, Form, Input, etc.)
│   ├── Hero.tsx         # Main hero section with gradient animations
│   ├── About.tsx        # About me section with profile
│   ├── Experience.tsx   # Work experience timeline
│   ├── Skills.tsx       # Skills & Technologies grid
│   ├── Projects.tsx     # Featured projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Navbar.tsx       # Navigation bar
├── pages/
│   ├── Home.tsx         # Main page layout
│   └── not-found.tsx    # 404 page
├── hooks/
│   └── use-toast.ts     # Toast notifications hook
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component with routing
├── index.css            # Global styles & Tailwind config
└── main.tsx             # Entry point
```

## Features

- ✨ Smooth scroll animations with Framer Motion
- 🎨 Gradient text effects on hero section
- 🚀 Responsive design for all devices
- 📱 Mobile-friendly navigation
- 🎯 Smooth hover effects and micro-interactions
- 📧 Contact form with validation
- 🌙 Dark mode by default

## Customization

### Update Content
- **Hero**: Edit `client/src/components/Hero.tsx`
- **About**: Edit `client/src/components/About.tsx`
- **Projects**: Edit `client/src/components/Projects.tsx`
- **Contact**: Edit `client/src/components/Contact.tsx`

### Change Colors
Edit CSS variables in `client/src/index.css` (lines 1-49):
```css
--color-primary: hsl(265 80% 65%);    /* Purple */
--color-secondary: hsl(160 80% 45%);  /* Cyan */
```

### Modify Animations
All animations use `framer-motion`. Look for `motion.*` components and `animate` props.

## Tech Stack

- **React 19** - UI Library
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety
- **Wouter** - Lightweight routing
- **Lucide React** - Icons

## Commands

```bash
npm run dev:client    # Start dev server (port 5000)
npm run check         # Run TypeScript type check
npm run build         # Build for production
npm start             # Run production build
```

## Notes

- This is a **frontend-only** portfolio (no backend)
- All animations are smooth and performant
- Fully responsive and mobile-optimized
- Ready for deployment on any static host

Enjoy! 🚀
