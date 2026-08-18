# Lateh Larry-Collins Portfolio — Vercel Ready

## Fix for 404 NOT_FOUND
You saw 404 because Vercel was looking for Next.js output but the project was a single HTML preview.

This folder is a proper Vite React build.

## Deploy steps (works now)
1. Push this folder to GitHub
2. Vercel Dashboard > Add New Project > Import GitHub repo
3. Framework Preset: **Vite**
4. Build Command: `npm run build` (auto)
5. Output Directory: `dist` (auto)
6. Deploy

## Alternative: drag & drop static
If you want zero build: run `npm run build` locally, then deploy the `dist/` folder as static.

## WhatsApp
Number: 237621607297 (wa.me link). No env vars needed.

## Assets
- Photo at /public/photo.jpg
- CV at /public/cv.pdf — link with /cv.pdf

After deploy, your URL latehlarry.vercel.app will work.
