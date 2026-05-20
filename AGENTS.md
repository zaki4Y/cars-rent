# AGENTS.md

## Project

DriveEase — premium car rental SPA. React 18 + Vite 5 + Tailwind CSS 3. Deployed on Vercel.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint with `.eslintrc.cjs` + inline flags |

Run order: `lint` → `build`. **No test script** — stale README mentions `npm test` and `npm start` (both CRA leftovers).

## Architecture

- **Entry**: `index.html` → `src/main.jsx` wraps `<App />` in `HelmetProvider`.
- **Router**: `react-router-dom` v6 in `src/App.jsx`. All routes wrapped in `AnimatePresence` (framer-motion) for page transitions. Also has `ToastProvider` for notifications.
- **Routes**: `/`, `/cars`, `/cars/:id` (slug-based), `/about`, `/contact`, `/login`, `/register`, `/my-bookings` (auth), `/profile` (auth), `/privacy`, `/terms`, `/cookies`, 404 catch-all.
- **Auth**: `src/context/AuthContext.jsx` — localStorage-backed. `ProtectedRoute` guards `/my-bookings` and `/profile`.
- **Toast**: `src/context/ToastContext.jsx` — notification system.
- **Data**: `src/data/` — flat JSON files (`cars.js`, `bookings.js`, `users.js`, `reviews.js`) with helper functions. No API/backend; all state is client-side.
- **Pages**: `src/pages/` (13 pages). Public pages use `<SEO>` component for dynamic meta tags.
- **Components**: `src/components/` (Header, Footer, Hero, CarCard, SearchForm, BookingModal, FAQ, etc.)
- **UI primitives**: `src/components/ui/` — aceternity-style effects (spotlight, wavy-background, background-beams, animated-testimonials, splite).
- **Path alias**: none configured. All imports use relative paths (`./`).
- **Utils**: `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge). Only `.ts` file; no tsconfig. Vite handles via esbuild.
- **Crypto**: `src/lib/crypto.js` — simple SHA-256 password hashing with hardcoded salt (`driveease_salt_2024`). Client-side only; not secure for production.

## Styling

- Tailwind CSS 3, dark theme. **`preflight: false`** in tailwind.config.js — no CSS reset.
- Fonts: **Cormorant Garamond** (display) + **Manrope** (body) via Google Fonts.
- Custom palette: `gold` (#C9A96E), `cream`, `surface`, `bg` (near-black), `text` (primary/secondary/muted).
- Base background: `bg` (#0a0a0a). Luxury card style via `.luxury-card` class in `index.css`.

## SEO Setup

- **`src/components/SEO.jsx`** — reusable Helmet wrapper. Sets title, meta description, OG tags, Twitter cards, canonical, noindex.
- **`public/robots.txt`**, **`public/sitemap.xml`**, **`public/google68cf1f99367ca6d4.html`** — static files copied to `dist/` on build.
- **Schema markup**: AutoRental (index.html), FAQPage (FAQ.jsx), Product + BreadcrumbList (CarDetail.jsx).
- Auth pages (`/login`, `/register`, `/my-bookings`, `/profile`) and legal pages (`/privacy`, `/terms`, `/cookies`) use `noindex`.
- Car URLs use SEO-friendly slugs (e.g., `/cars/mercedes-benz-s-class`), not numeric IDs.
- Replace `driveease.com` in all SEO URLs with actual domain before deploy.

## Key dependencies

- **Animations**: `framer-motion`
- **SEO**: `react-helmet-async`
- **Forms**: `formik` + `yup`
- **Icons**: `react-icons` + `@tabler/icons-react`
- **Noise**: `simplex-noise` (used in UI effects)

## Gotchas

- **README is stale**: says Create React App. Project uses Vite. Trust `package.json`.
- **`.gitignore` lists `/build`** but Vite outputs to `dist/`. Legacy from CRA.
- **`public/index.html`** is unused — Vite uses root `index.html`.
- **ESLint config exists** at `.eslintrc.cjs` (not inline-only). Rules: `react/react-in-jsx-scope: off`, `react/prop-types: off`, `no-unused-vars: warn` (args starting with `_` ignored).
- **No TypeScript setup** — `src/lib/utils.ts` is the only `.ts` file.
- **SPA client-side rendering** — Google sees minimal content without JS. All routes return 200 via Vercel rewrites (no true 404 status).
- **`vercel.json` rewrites**: static files (`sitemap.xml`, `robots.txt`, Google verification) must be listed BEFORE the catch-all `/(.*)` → `/index.html` rewrite, otherwise they serve as HTML.
- **`sourcemap: false`** in production build (set in build command, not config).
- **CSP** in `index.html` is restrictive: allows `unsafe-inline` and `unsafe-eval` for scripts, Google Fonts, Unsplash images, and Google frame/connect sources.
- **Car data**: `src/data/cars.js` exports `carsData` (18 vehicles), `getCarById()`, and `getCarBySlug()`. Each car has both `id` (number) and `slug` (string) fields.

## Deployment

- Vercel SPA rewrites in `vercel.json` — static files served directly, all other routes serve `index.html`.
- Build output: `dist/`
- Google Search Console verified (file: `google68cf1f99367ca6d4.html`).
