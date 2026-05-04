# Frontend

This folder contains the full frontend experience for Gateway Gadgets, a premium e-commerce storefront built with React and Vite.

The UI has been upgraded to feel like a modern product brand instead of a basic catalog demo. It includes premium landing sections, a polished shopping flow, reusable components, glassmorphism effects, dark mode, motion, and responsive layouts.

## What’s Inside

- Premium homepage with hero, features, and testimonials
- Product catalog with reusable cards and skeleton loading states
- Product detail page with related products
- Cart page with total summary and empty state
- Search and filter support
- Login and signup screens with a premium auth shell
- Theme provider for light/dark mode

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Toastify
- React Icons
- PropTypes

## Folder Guide

```text
src/
├─ components/
│  ├─ ui/
│  │  ├─ ThemeProvider.jsx
│  │  ├─ ProductCard.jsx
│  │  └─ Skeleton.jsx
│  ├─ Hero.jsx
│  ├─ Features.jsx
│  ├─ Testimonials.jsx
│  ├─ Navbar.jsx
│  ├─ Product.jsx
│  ├─ ProductDetail.jsx
│  ├─ Cart.jsx
│  ├─ SearchItem.jsx
│  ├─ Login.jsx
│  ├─ Signup.jsx
│  └─ Data.jsx
├─ App.jsx
├─ main.jsx
└─ index.css
```

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Design System Notes

- Colors and shadows are configured in `tailwind.config.cjs`.
- Global glass and background styling are in `src/index.css`.
- Dark mode is handled through `src/components/ui/ThemeProvider.jsx`.
- Product data is managed in `src/components/Data.jsx`.

## UX Highlights

- Animated hero section with trust metrics
- Scroll-reveal feature and testimonial cards
- Hover feedback on product cards
- Skeleton placeholders while the product grid is loading
- Toast notifications when items are added to the cart
- Sticky premium navbar with search, filters, and theme toggle

## Customization

You can easily extend the frontend by editing:

- `src/components/Data.jsx` for products
- `src/components/Navbar.jsx` for navigation
- `src/components/Hero.jsx` for branding and messaging
- `src/components/Features.jsx` and `src/components/Testimonials.jsx` for landing content
- `src/components/ui/ProductCard.jsx` for catalog card behavior

## Deployment

This is a frontend-only project, so it can be deployed to any static hosting platform that supports Vite builds.

Common options:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Before deploying, run `npm run build` and publish the `dist` folder.

## Notes

- If you add new components, keep the premium spacing, glassmorphism styling, and motion consistent.
- Keep product images optimized for fast loading.
- Add backend integration later if you want persistence for cart or auth.
