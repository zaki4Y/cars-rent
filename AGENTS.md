# AGENTS.md

## Project

DriveEase - car rental SPA. React 18 + Vite 5 + Tailwind CSS 3. Deployed on Vercel.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint (no test runner configured) |

Run order: `lint` → `build`. There is **no test script** despite the stale README mentioning `npm test`.

## Architecture

- **Entry point**: `src/main.jsx` (referenced by root `index.html`). `src/index.jsx` is a legacy duplicate — ignore it.
- **Router**: `react-router-dom` v6 in `src/App.jsx`. Routes: `/`, `/cars`, `/about`, `/contact`, everything else → `NotFound`.
- **Pages**: `src/pages/` (Home, Cars, About, Contact, NotFound)
- **Components**: `src/components/` (Header, Footer, Navbar, Hero, CarCard, SearchForm, BookingModal, etc.)
- **Layouts**: `src/layouts/` (header.jsx, footer.jsx) — appear unused; Header/Footer in `src/components/` are the active ones.
- **Path alias**: `@` → `./src` (configured in `vite.config.js`)
- **Utils**: `src/lib/utils.ts` exports a `cn()` helper (clsx + tailwind-merge). Only `.ts` file in the project; no TypeScript config.

## Styling

- Tailwind CSS with custom theme in `tailwind.config.js`:
  - Font: `Plus Jakarta Sans` (loaded via Google Fonts in `index.html`)
  - Colors: `primary` (blue), `secondary` (gray) with light/dark variants
- Dark background: `bg-black/[0.96]` with gradient overlay — all pages use this base.

## Key dependencies

- **Animations**: `framer-motion`
- **3D**: `@splinetool/react-spline` + `@splinetool/runtime`
- **Forms**: `formik` + `yup`
- **Icons**: `react-icons` + `@tabler/icons-react`

## Gotchas

- **README is stale**: says Create React App, but project uses Vite. Trust `package.json` scripts.
- **`.gitignore` lists `/build`** but Vite outputs to `dist/`. The `/build` entry is from CRA days.
- **`public/index.html`** is unused — Vite uses the root `index.html` as the entry template.
- **No ESLint config file** exists (no `.eslintrc*`, no `eslint.config.*`). The lint script runs with inline flags only.
- **No TypeScript setup**: `src/lib/utils.ts` is the only `.ts` file with no `tsconfig.json` or `@types` beyond React. Vite handles it via esbuild.
- **Manual chunks** configured in `vite.config.js`: `vendor` (react, react-dom, framer-motion) and `icons` (react-icons).

## Deployment

- Vercel SPA rewrites in `vercel.json` — all routes serve `index.html`.
- Build output directory: `dist/`
