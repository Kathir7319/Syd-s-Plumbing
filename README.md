# Syd's Plumbing — Reliable, Local Plumbing in Morrisville, NC

A modern, fast, mobile-responsive multi-page website built with **React**, **Vite**, **Tailwind CSS**, and **React Router DOM** for **Syd's Plumbing** (Morrisville, NC).

---

## 🛠️ Business Profile

- **Business Name:** Syd's Plumbing
- **Service Area:** Morrisville, NC & surrounding local communities (Cary, RTP, Apex, West Raleigh, Durham borders)
- **Direct Phone:** [+1 919-271-0999](tel:+19192710999) *(Click-to-Call enabled)*
- **Core Audience:** Residential and commercial property owners
- **Hours of Operation:** Call for availability and booking • 24/7 Emergency Dispatch

---

## ✨ Features

- **Multi-Page Architecture (9 Distinct Pages):**
  - `Home (/)`: Hero section, 24/7 emergency notice, "Why Choose Syd's Plumbing?", core solutions preview, community service coverage, verified customer reviews, and quick dispatch card.
  - `Services (/services)`: Complete catalog of professional residential and light commercial plumbing solutions, 4-step quality process, and FAQ accordion.
  - `Dedicated Service Pages (/services/:slug)`:
    - `/services/emergency-plumbing`: Emergency plumbing repairs, burst lines, rapid troubleshooting.
    - `/services/water-heaters`: Conventional tank and modern tankless system repairs and installation.
    - `/services/drain-cleaning`: High-capacity snake and hydro clearing for sinks, showers, toilets, and main sewer lines.
    - `/services/fixtures-faucets`: Faucets, sinks, toilets, showerheads, and garbage disposals.
  - `About Syd's (/about)`: Company history, independent local values, commitment to integrity and community trust, and the independent vs. corporate difference.
  - `Contact & Booking (/contact)`: Direct click-to-call cards, service profile details, hours, and interactive quote/booking request form.
  - `About & Contact Document View (/about-contact)`: Dedicated page mirroring Section 3 of the blueprint specification directly.
  - `404 Not Found (*)`: Friendly branded error screen with return home navigation.
  - **Interactive Multi-Page Pagination Bar:** Next / Previous page switches and interactive pill bar on every single page.
- **Custom Designed Logo & Favicon:**
  - Modern vector SVG emblem combining an interlocking pipe wrench and water droplet with clean gradients and typography.
  - Included as SVG assets (`public/logo.svg`, `public/favicon.svg`) and reusable React component (`src/components/Logo.jsx`).
- **Interactive Free Estimate Modal:**
  - Triggerable from any page via desktop and mobile header buttons.
- **Mobile First & Responsive:**
  - Custom mobile drawer navigation, sticky header with backdrop blur, and floating quick-call button.
- **Vercel Deployment Ready:**
  - Pre-configured `vercel.json` with SPA route rewrites for clean single-page app routing.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🐙 Push to GitHub

To push this repository to your GitHub account:

1. **Create a new repository** on [GitHub](https://github.com/new) (e.g. `syds-plumbing`).
2. Run the following commands in this directory:

```bash
# Initialize git and stage all files (already pre-initialized)
git add .
git commit -m "feat: complete Syd's Plumbing multi-page responsive React website"

# Rename branch to main
git branch -M main

# Link your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git

# Push code to GitHub
git push -u origin main
```

---

## ⚡ Vercel Deployment

### Method 1: Deploy via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Import your GitHub repository (`syds-plumbing`).
4. Framework preset will automatically detect **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Your site will be live with free global CDN and SSL!

### Method 2: Deploy directly via Vercel CLI
```bash
# Deploy to preview
npx vercel

# Deploy to production
npx vercel --prod
```
The included `vercel.json` ensures that all React Router deep paths (`/services`, `/about`, `/contact`, `/services/:slug`) route seamlessly without 404 errors.
