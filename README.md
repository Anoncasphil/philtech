# Philtech – Personal Website

A minimalistic personal website built with React, TypeScript, Tailwind CSS, and Vite. It showcases projects, experience, education/certifications, and a contact form with a clean two-color theme (light: `#111827` on white, dark: white on black).

## Tech Stack
- React 19 + TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## Features
- 3-column hero layout with responsive design
- Projects section with minimal 2-column cards and fixed bottom action
- Experience and Education tabs with monochrome cards and icons
- Certifications with sources and years
- Contact tab: two-column info + form, aligned actions
- Theme-aware logo and minimal custom scrollbar (light/dark)

## Getting Started

### Prerequisites
- Node.js LTS (18+ recommended)

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Project Structure
```
react-ts-tailwind-template/
├─ public/
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ assets/
├─ index.html
├─ tailwind.config.js
├─ tsconfig.json
└─ vite.config.ts
```

## Conventions
- Prefer TypeScript and descriptive naming
- Tailwind utility classes; keep styles minimal and readable
- External links: `target="_blank" rel="noopener noreferrer"`
- Palette constrained to white and `#111827`

## License
MIT
