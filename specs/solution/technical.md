# Technical Specifications

## Platform

- Web application (PWA, offline-first)
- Responsive design for desktop, tablet, mobile
- IndexedDB for local storage (via idb library)
- Service Worker for offline caching

## Architecture

- Frontend: React + TypeScript
- State management: Context API or Redux
- UI: Accessible component library (e.g., MUI, Chakra)
- API integration: Fetch/axios for ARASAAC

## Data

- Predefined pictogram set loaded on first launch
- Import/export binders as JSON (schema validated)
- Fetch pictograms from ARASAAC API
- Data versioning for migrations

## Security

- Role-based permissions for board management
- Password/PIN for profile switching
- Data encrypted at rest (IndexedDB)
- Secure import/export (validate JSON, sanitize input)

## Accessibility

- Intuitive, accessible UI for all ages
- WCAG 2.1 AA compliance
- ARIA labels, keyboard navigation, high-contrast mode

## Deployment

- Built with Vite
- Hosted on static site host (e.g., Netlify, Vercel)
