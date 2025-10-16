# React + TypeScript + Tailwind Template

A minimal, fast starter built with Vite, React 19, TypeScript, and Tailwind CSS. Use this as a template to bootstrap new projects quickly.

## Features

- Vite dev server with instant HMR and optimized production build
- React 19 + TypeScript for a great developer experience
- Tailwind CSS preconfigured via PostCSS (autoprefixer included)
- Clean structure and minimal dependencies

## Getting Started

### Prerequisites
- Node.js LTS (18+ recommended)
- npm (bundled with Node) or pnpm/yarn

### Install
```bash
cd learnify
npm install
```

### Development
```bash
npm run dev
```
Open the printed local URL in your browser.

### Build
```bash
npm run build
```
Build artifacts are output to `dist/`.

### Preview production build
```bash
npm run preview
```

## Tailwind CSS
- Source CSS: `src/index.css` contains the Tailwind directives.
- Config: `tailwind.config.js` scans `./index.html` and `./src/**/*.{js,jsx,ts,tsx,mdx}`.
- PostCSS: `postcss.config.cjs` loads `tailwindcss` and `autoprefixer`.

If you see an editor warning like "Unknown at rule @tailwind", ensure:
- Dev deps are installed:
  ```bash
  npm i -D postcss autoprefixer tailwindcss
  ```
- Your editor has Tailwind CSS IntelliSense, or disable CSS at-rule validation for the workspace.

## Scripts
- `npm run dev` – Start Vite dev server
- `npm run build` – Type-check and build for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## Project Structure
```
learnify/
  src/
    main.tsx         # App entry
    App.tsx          # Template UI
    index.css        # Tailwind directives
  tailwind.config.js
  postcss.config.cjs
  vite.config.ts
  package.json
```

## Customization
- Edit the hero copy in `src/App.tsx`.
- Add new components to `src/` and import into `App.tsx`.
- Update Tailwind theme in `tailwind.config.js` if needed.

## Troubleshooting
- PostCSS plugin error (autoprefixer not found):
  ```bash
  npm i -D postcss autoprefixer
  ```
- Tailwind classes not applied: ensure `content` paths include `index.html` and `src/**/*` and restart the dev server.

## License
MIT
