# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Upgrade notes (added by project upgrade):

- Tailwind CSS integrated (add `tailwindcss`, `postcss`, `autoprefixer`).
- ThemeProvider and dark mode scaffolding added at `src/components/ui/ThemeProvider.jsx`.
- Navbar rewritten with Tailwind in `src/components/Navbar.jsx` and new design tokens.

Local setup:

```bash
cd Frontend
npm install
npm run dev
```

If installing for the first time, run `npm install` to get Tailwind and other UI libraries.
