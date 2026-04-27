# Swaroop Lute — Portfolio

A modern, responsive single-page portfolio built with **React 18 + Vite** showcasing cloud engineering expertise, serverless architecture experience, and full-stack capabilities.

## ✦ Live Demo

Open `index.html` directly in your browser for an instant preview — no build tools needed.

## ✦ Features

- **5 Dynamic Sections**:
  - **Hero** — Name, AWS certification, professional summary
  - **Skills** — 4 categories: Frontend, Backend & Cloud, DevOps & Architecture, Tools & Practices
  - **Experience** — 4+ years at Capgemini with detailed achievements
  - **Projects** — Serverless APIs, infrastructure, full-stack applications
  - **Contact** — Email, phone, GitHub, LinkedIn with direct action links

- **Theme Toggle** — Day/Night mode with localStorage persistence
- **Scroll Animations** — Elements fade in as you scroll; skill bars animate on view
- **Fully Responsive** — Mobile-first design, works on all devices
- **Zero External Dependencies** — Just React; no UI library, no Tailwind bloat
- **Production Ready** — Optimized build, semantic HTML, accessible

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| **UI** | React 18 (functional components + hooks) |
| **Build** | Vite 5 |
| **Styling** | CSS custom properties (design tokens) |
| **Fonts** | Syne (display) · Lora (body) · DM Mono (code) |
| **Deployment** | Static site (HTML/CSS/JS) |

## ✦ Quick Start

### Option A: Use the Standalone HTML (Easiest)
```bash
# Open directly in your browser
open index.html
```
No build step required. Perfect for sharing or deploying to any static host.

### Option B: Run React + Vite (Development)
```bash
npm install
npm run dev          # Development server on http://localhost:5173
npm run build        # Production build → dist/
npm run preview      # Preview the production build
```

## ✦ Project Structure

```
portfolio/
├── index.html                     # Standalone version (ready to use)
├── vite.config.js                 # Vite config
├── package.json                   # Dependencies
├── README.md                       # This file
└── src/
    ├── main.jsx                   # React entry point
    ├── App.jsx                    # Root component + ThemeContext
    ├── index.css                  # All styles (design tokens + components)
    ├── data/
    │   └── portfolio.js           # ← YOUR DATA (edit here!)
    ├── hooks/
    │   └── useScrollReveal.js     # Intersection Observer for animations
    └── components/
        ├── Nav.jsx                # Sticky nav + theme toggle
        ├── Hero.jsx               # Landing hero section
        ├── Skills.jsx             # Skill cards with animated bars
        ├── Experience.jsx         # Timeline with roles & achievements
        ├── Projects.jsx           # Project showcase cards
        ├── Contact.jsx            # Contact information section
        └── Footer.jsx             # Footer with copyright
```

## ✦ Customisation Guide

### 1. Update Your Information

Edit **`src/data/portfolio.js`** (or the data object in `index.html`):

```javascript
export const personalInfo = {
  name: 'Swaroop Lute',
  title: 'Full-Stack Software Developer & Cloud Architect',
  tagline: 'Your one-liner here',
  contact: {
    email: 'your-email@example.com',
    phone: '+91-XXXXXXXXXX',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile/',
    location: 'Your City, State',
  },
}
```

### 2. Update Skills

Each skill has a **proficiency level (0–100)** that animates as a bar:

```javascript
{
  cat: 'Frontend',           // Category name
  icon: '◈',                 // Unicode icon
  color: 'c-coral',          // Color class (c-coral, c-teal, c-amber, c-violet)
  items: [
    { n: 'React', l: 88 },   // name, level
    { n: 'HTML5 / CSS', l: 85 },
  ],
}
```

**Available color classes**: `c-coral` (red), `c-teal` (green), `c-amber` (orange), `c-violet` (purple)

### 3. Update Experience

Add or edit roles in the `experience` array:

```javascript
{
  role: 'Your Job Title',
  co: 'Company Name',
  period: 'Jan 2024 — Present',
  dur: '1+ yrs',
  type: 'Full-time',           // or 'Contract', 'Freelance'
  loc: 'City, State',
  col: 'coral',                // Timeline accent color
  hl: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
}
```

### 4. Update Projects

Showcase your work in the `projects` array:

```javascript
{
  title: 'Project Name',
  tagline: 'One-liner description',
  desc: 'Longer description of what this project does, technologies used, impact.',
  tech: ['Node.js', 'AWS Lambda', 'DynamoDB', 'Terraform'],
  stats: {
    stars: '3.8k',            // GitHub stars or any metric
    forks: '420',             // Or contributors, issues, etc.
    users: '40+',             // Or 'Production', 'Portfolio', etc.
  },
  color: 'coral',             // Card accent color
  link: 'https://demo-url.com',
  github: 'https://github.com/your-username/repo-name',
}
```

### 5. Change Accent Colors

Edit **`src/index.css`** (or the `<style>` block in `index.html`):

```css
:root {
  --coral:  #FF5C3A;   /* Primary (buttons, highlights) */
  --teal:   #00C9A7;   /* Secondary (badges, accents) */
  --amber:  #FFB347;   /* Tertiary (cards, bars) */
  --violet: #A78BFA;   /* Quaternary (alt cards, bars) */
  
  /* Typography */
  --font-display: 'Syne', sans-serif;        /* Headings */
  --font-body:    'Lora', serif;             /* Body text */
  --font-mono:    'DM Mono', monospace;      /* Code, labels */
}
```

### 6. Adjust Theme Colors (Light/Dark)

The light and dark theme colors are defined at the top of `index.css`:

```css
[data-theme="light"] {
  --bg:           #F5F0E8;      /* Warm parchment */
  --text:         #1A1714;      /* Dark text */
  --border:       #D4CDBF;      /* Light borders */
  /* ... more vars */
}

[data-theme="dark"] {
  --bg:           #0F0E0D;      /* Deep charcoal */
  --text:         #F0EDE7;      /* Light text */
  --border:       #2E2A25;      /* Dark borders */
  /* ... more vars */
}
```

## ✦ Deployment

### Deploy to Vercel (Recommended for React)
```bash
npm install -g vercel
vercel
# Vercel auto-detects Vite and builds automatically
```

### Deploy the Static HTML
Just upload `index.html` to any static host:
- **Netlify**: Drag `index.html` to the dashboard
- **GitHub Pages**: Push to `gh-pages` branch
- **Vercel**: Upload the `dist/` folder after building
- **S3 + CloudFront**: Upload `dist/` to S3

### Using GitHub Pages

```bash
# Build the project
npm run build

# Deploy dist/ to gh-pages branch
npm install gh-pages --save-dev

# Add to package.json:
"deploy": "gh-pages -d dist"

npm run deploy
```

Then enable GitHub Pages in Settings → Pages, select `gh-pages` branch.

## ✦ Performance Tips

1. **Lazy load images** (if you add hero image):
   ```jsx
   <img src="photo.jpg" loading="lazy" alt="Your name" />
   ```

2. **Optimize project screenshots**:
   - Use WebP format for faster loading
   - Compress with TinyPNG or similar

3. **Enable GZIP compression** on your host (most do by default)

4. **Use a CDN** — Vercel, Netlify, and Cloudflare all serve globally

## ✦ SEO & Meta Tags

Edit `index.html` to improve search visibility:

```html
<meta name="description" content="Swaroop Lute — Full-stack developer & cloud architect specializing in serverless AWS solutions" />
<meta name="keywords" content="Node.js, AWS, Lambda, DynamoDB, React, Serverless" />
<meta name="author" content="Swaroop Lute" />

<!-- Open Graph (for social sharing) -->
<meta property="og:title" content="Swaroop Lute — Portfolio" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://your-domain.com/og-image.jpg" />
<meta property="og:url" content="https://your-domain.com" />
```

## ✦ Adding a Domain

1. Buy a domain from Namecheap, GoDaddy, or Vercel Domains
2. Point it to your deployment:
   - **Vercel**: Auto-configures domain in dashboard
   - **Netlify**: DNS settings → add your domain
   - **GitHub Pages**: Add custom domain in Settings → Pages

Example custom domain: `swarooplute.dev` or `swaroop.works`

## ✦ Analytics

Add Google Analytics to track visitors:

```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics tracking ID.

## ✦ Accessibility

The portfolio is built with accessibility in mind:

- ✔️ Semantic HTML (`<section>`, `<nav>`, `<footer>`)
- ✔️ ARIA labels on buttons and interactive elements
- ✔️ High contrast colors (WCAG AA compliant)
- ✔️ Keyboard navigation support
- ✔️ Focus indicators on interactive elements
- ✔️ Screen reader friendly

To improve further:
- Add `alt` text to images
- Use descriptive link text (not "click here")
- Test with screen readers (NVDA, JAWS, VoiceOver)

## ✦ Keyboard Shortcuts

The portfolio supports smooth scrolling and keyboard navigation:

- `Tab` — Navigate through links and buttons
- `Enter` / `Space` — Activate buttons and links
- `Scroll` — Smooth scroll (enabled in CSS)
- Theme toggle works with `Space` when focused

## ✦ Browser Support

Works on all modern browsers:
- ✔️ Chrome / Edge 90+
- ✔️ Firefox 88+
- ✔️ Safari 14+
- ✔️ iOS Safari 14+
- ✔️ Chrome Android

For older browser support, you'd need Babel transpilation (add to `vite.config.js`).

## ✦ Troubleshooting

### Portfolio isn't loading
- Clear browser cache (`Ctrl+Shift+Delete` or `Cmd+Shift+Delete`)
- Check browser console for errors (`F12`)
- Ensure `src/main.jsx` imports are correct

### Styles aren't applied
- Make sure `src/index.css` is imported in `src/main.jsx`
- Check for typos in class names
- Verify CSS custom properties are defined

### Theme toggle not working
- Check `localStorage` isn't disabled
- Verify `useTheme()` hook is imported in components
- Check browser DevTools → Application → Local Storage

### Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## ✦ License

Free to use and modify for your personal portfolio. Attribution appreciated but not required.

## ✦ Next Steps

1. **Personalize `src/data/portfolio.js`** with your real data
2. **Add project images** (optional, enhance the Projects section)
3. **Set up a custom domain** (your-name.dev)
4. **Deploy to Vercel/Netlify** for free hosting
5. **Share your portfolio link** — email, LinkedIn, GitHub bio

---

**Questions?** Check the code comments or refer to the React/Vite documentation.

Happy coding! 🚀