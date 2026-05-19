# AGENTS.md

## Project

DriveEase — premium car rental SPA. React 18 + Vite 5 + Tailwind CSS 3. Deployed on Vercel.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint (inline flags only, no config file) |

Run order: `lint` → `build`. **No test script** — stale README mentions `npm test`.

## Architecture

- **Entry**: `src/main.jsx` wraps `<App />` in `HelmetProvider` (react-helmet-async). `src/index.jsx` is a legacy duplicate — ignore.
- **Router**: `react-router-dom` v6 in `src/App.jsx`. All routes wrapped in `AnimatePresence` (framer-motion) for page transitions.
- **Routes**: `/`, `/cars`, `/cars/:id`, `/about`, `/contact`, `/login`, `/register`, `/my-bookings` (auth), `/profile` (auth), 404 catch-all.
- **Auth**: `src/context/AuthContext.jsx` — localStorage-backed. `ProtectedRoute` guards `/my-bookings` and `/profile`.
- **Data**: `src/data/` — flat JSON files (`cars.js`, `bookings.js`, `users.js`, `reviews.js`) with helper functions. No API/backend; all state is client-side.
- **Pages**: `src/pages/` (10 pages). Each uses `<SEO>` component for dynamic meta tags.
- **Components**: `src/components/` (Header, Footer, Hero, CarCard, SearchForm, BookingModal, FAQ, etc.)
- **Layouts**: `src/layouts/` — unused legacy duplicates.
- **Path alias**: `@` → `./src` (vite.config.js)
- **Utils**: `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge). Only `.ts` file; no tsconfig.

## Styling

- Tailwind CSS 3, dark theme. Fonts: **Cormorant Garamond** (display) + **Manrope** (body) via Google Fonts.
- Custom palette: `gold` (#C9A96E), `cream`, `surface`, `bg` (near-black), `text` (primary/secondary/muted).
- Base background: `bg` (#0a0a0a). Luxury card style via `.luxury-card` class in `index.css`.

## SEO Setup

- **`src/components/SEO.jsx`** — reusable Helmet wrapper. Sets title, meta description, OG tags, Twitter cards, canonical, noindex.
- **`public/robots.txt`** and **`public/sitemap.xml`** — static files copied to `dist/` on build.
- **Schema markup**: AutoRental (index.html), FAQPage (FAQ.jsx), Product + BreadcrumbList (CarDetail.jsx).
- All public pages have unique titles/descriptions. Auth pages (`/login`, `/register`, `/my-bookings`, `/profile`) use `noindex`.
- Replace `driveease.com` in all SEO URLs with actual domain before deploy.

## Key dependencies

- **Animations**: `framer-motion`
- **3D**: `@splinetool/react-spline` + `@splinetool/runtime`
- **SEO**: `react-helmet-async`
- **Forms**: `formik` + `yup`
- **Icons**: `react-icons` + `@tabler/icons-react`

## Gotchas

- **README is stale**: says Create React App. Project uses Vite. Trust `package.json`.
- **`.gitignore` lists `/build`** but Vite outputs to `dist/`. Legacy from CRA.
- **`public/index.html`** is unused — Vite uses root `index.html`.
- **No ESLint config file** — lint script uses inline flags only.
- **No TypeScript setup** — `src/lib/utils.ts` is the only `.ts` file. Vite handles via esbuild.
- **Manual chunks** in vite.config.js: `vendor` (react, react-dom, framer-motion) and `icons` (react-icons).
- **SPA client-side rendering** — Google sees minimal content without JS. All routes return 200 via Vercel rewrites (no true 404 status). Consider Next.js migration for SSR.
- **Footer links** for Privacy, Terms, Cookies point to `href="#"` — not real pages yet.
- **`sourcemap: false`** in production build (was `true`, changed for SEO/perf).

## Deployment

- Vercel SPA rewrites in `vercel.json` — all routes serve `index.html`.
- Build output: `dist/`
