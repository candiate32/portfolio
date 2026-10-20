# Mourya Reddy · Portfolio

A Netflix-style portfolio: intro animation, "Who's watching?" profiles that reshuffle the page, a billboard hero, scrollable rows, a Top 10 skills rail and detail modals with "episodes".

Built with React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons on Vite. All artwork is generated in CSS, so there are no image files to manage.

## Editing content

Everything on the site lives in [`src/data.ts`](src/data.ts): profile and contact details, projects ("titles"), skills, interests, and which rows each profile sees.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (Settings → Pages → Source: **GitHub Actions**).
