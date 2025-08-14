# cczw123.github.io (Next.js + TypeScript + Tailwind)

This repository now uses Next.js (App Router) and Tailwind CSS. It builds a static site via `next export` and deploys to GitHub Pages using the provided workflow.

## Local development

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Build static output

```powershell
npm run build
```

The static site is emitted to `./out`.

## Deploy

This repo includes `.github/workflows/deploy.yml` that:
- Builds the site on pushes to `main`.
- Publishes the static `out` folder to GitHub Pages.

First time only: in GitHub repo Settings > Pages, set "Build and deployment" to "GitHub Actions".

## Notes
- The old `index.html` can remain; the workflow publishes the contents of `out` instead.
- Edit `app/page.tsx` to customize your name, intro, and projects.
- Place static files (images, PDFs) under `public/`. They are served from the site root. Example: `public/docs/project-1.pdf` will be available at `/docs/project-1.pdf`.
