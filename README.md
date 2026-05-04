# gateway-gadgets

Gateway Gadgets is a premium frontend e-commerce storefront built with React, Vite, Tailwind CSS, and Framer Motion.

It is designed to feel like a modern, investor-ready product demo with a polished landing page, a premium catalog layout, glassmorphism styling, dark mode support, animated product cards, and a refined shopping flow.

## Overview

This repository currently focuses on the frontend experience only. The application presents a modern electronics store with:

- Premium hero section with strong visual hierarchy
- Product catalog with reusable product cards
- Search, category, and price filtering
- Product detail page with related recommendations
- Cart screen with summary and checkout actions
- Login and signup UI shells
- Dark mode toggle and polished glass UI patterns

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Toastify
- React Icons

## Project Structure

```text
gateway-gadgets/
├─ Frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ ui/
│  │  │  ├─ Hero.jsx
│  │  │  ├─ Features.jsx
│  │  │  ├─ Testimonials.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Product.jsx
│  │  │  ├─ ProductDetail.jsx
│  │  │  ├─ Cart.jsx
│  │  │  ├─ SearchItem.jsx
│  │  │  ├─ Login.jsx
│  │  │  └─ Signup.jsx
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ package.json
│  ├─ tailwind.config.cjs
│  ├─ postcss.config.cjs
│  └─ vite.config.js
└─ README.md
```

## Features

### Premium UI

- Glassmorphism cards and soft shadows
- Strong spacing and typographic hierarchy
- Premium gradient accents and polished buttons
- Smooth hover feedback and animated section reveals

### Shopping Experience

- Search by product title
- Filter by category and price range
- Add to cart flow with toast feedback
- Product detail page with related product suggestions
- Cart summary with total calculation

### Theme and Motion

- Dark mode toggle
- Animated hero and content sections
- Framer Motion product card entrances
- Skeleton loading states for a more production-grade feel

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
cd Frontend
npm install
```

### Run Locally

```bash
cd Frontend
npm run dev
```

The app typically runs at `http://localhost:5173`.

### Build for Production

```bash
cd Frontend
npm run build
```

### Preview the Production Build

```bash
cd Frontend
npm run preview
```

## How the App Works

1. The homepage loads a premium hero section, feature blocks, the product grid, and testimonials.
2. Users can search products directly from the navbar.
3. Category and price filters update the visible catalog.
4. Clicking a product opens the detail page with related products.
5. Add-to-cart actions trigger toast notifications and update the cart count.
6. The cart page shows item summaries and the total price.

## Customization Notes

- Product data lives in `Frontend/src/components/Data.jsx`.
- Design tokens and theme styles live in `Frontend/tailwind.config.cjs` and `Frontend/src/index.css`.
- Shared UI patterns are in `Frontend/src/components/ui/`.
- The hero, features, and testimonial sections can be adjusted to match any brand theme.

## Deployment Notes

This is a frontend-only application, so it can be deployed to static hosting platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

For deployment, build the app with `npm run build` inside `Frontend` and publish the generated `dist` directory.

## Future Enhancements

- Persist cart state in local storage
- Add real authentication and checkout flows
- Add API-backed product search and inventory
- Add sorting and wish list features
- Add analytics and conversion tracking

## License

No explicit license has been set in this repository yet.