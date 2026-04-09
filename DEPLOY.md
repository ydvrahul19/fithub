# 🚀 FitHUb Website — Vercel Deployment Guide

## Option A: Deploy via GitHub (Recommended — auto-deploys on every update)

### Step 1 — Create a GitHub Repository
1. Go to https://github.com and sign in (or create a free account)
2. Click the **+** icon → **New repository**
3. Name it: `fithub-website`
4. Set it to **Public** (free Vercel works with public repos)
5. Click **Create repository**

### Step 2 — Upload your files to GitHub
**Easy way (no Git needed):**
1. Open your new repo on GitHub
2. Click **"uploading an existing file"** link
3. Drag and drop ALL files from this folder:
   - `index.html`
   - `vercel.json`
   - `.gitignore`
   - The entire `assets/` folder
4. Click **Commit changes**

**OR using Git (if you have it installed):**
```bash
cd fithub
git init
git add .
git commit -m "Initial FitHUb website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fithub-website.git
git push -u origin main
```

### Step 3 — Deploy to Vercel
1. Go to https://vercel.com and sign in with your GitHub account
2. Click **"Add New Project"**
3. Find and select your `fithub-website` repository
4. Vercel will auto-detect it as a static site
5. Click **Deploy** — done! 🎉

Your site will be live at: `https://fithub-website.vercel.app`

---

## Option B: Deploy via Vercel CLI (Fastest — no GitHub needed)

### Step 1 — Install Node.js
Download from: https://nodejs.org (install the LTS version)

### Step 2 — Install Vercel CLI
Open your terminal / command prompt and run:
```bash
npm install -g vercel
```

### Step 3 — Deploy
```bash
cd fithub
vercel
```

Follow the prompts:
- **Set up and deploy?** → Y
- **Which scope?** → Select your account
- **Link to existing project?** → N
- **Project name?** → fithub-nutrition-center
- **In which directory is your code?** → ./ (just press Enter)
- **Override settings?** → N

Your site goes live instantly! 🎉

### Step 4 — Deploy updates (after adding photos)
```bash
vercel --prod
```

---

## Option C: Drag & Drop on Vercel (Easiest — no account needed initially)

1. Go to https://vercel.com/new
2. Scroll down to **"Deploy from CLI or drag and drop"**
3. Drag your entire `fithub` folder into the browser
4. Click Deploy — live in 30 seconds! ✅

---

## 🌐 Custom Domain (Optional)

After deploying on Vercel:
1. Go to your project dashboard on Vercel
2. Click **Settings → Domains**
3. Add your domain (e.g., `fithubnutrition.com`)
4. Update your domain's DNS settings as shown by Vercel

---

## 📸 Adding Photos After Deployment

1. Add your photos to the `assets/` folder locally
2. If using GitHub: push the changes → Vercel auto-redeploys
3. If using CLI: run `vercel --prod` again
4. If using drag & drop: re-drag the updated folder

---

## 🆘 Need Help?
Contact Vercel support: https://vercel.com/support
Or WhatsApp: +91 94288 50738
