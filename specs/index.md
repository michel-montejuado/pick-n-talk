# Pick'n'Talk Specifications

## Overview

Pick'n'Talk is a visual communication app designed for people with speech impairments. It enables users to create and use pictogram binders to express needs, emotions, and ideas. The app is localized, accessible, and works offline-first.

## Target Audience

- Individuals with speech disabilities
- Caregivers and families
- Healthcare professionals

## Goals

- Promote autonomy and inclusion
- Provide a simple, flexible, and efficient daily communication tool

## Main Features

- Multi-language support (English, French, Spanish)
- Multiple custom binders (collections of pictograms)
- Add, edit, and organize pictograms and categories
- Intuitive, accessible interface
- Role-based permissions (user, caregiver, professional)
- User profiles and settings
- Offline-first with IndexedDB storage (Dexie.js)
- Predefined pictogram set on first launch
- Import/export binders (JSON)
- Fetch pictograms from ARASAAC API
- History tracking for entity changes

## Technical Architecture

### Frontend

- **Framework:** React (with React Router)
- **State/Logic:** Component-based, hooks
- **Localization:** i18next, language detection, translation files in `/public/locales/`
- **Styling:** CSS modules in `src/style/`

### Routing Structure

- `/` — Home
- `/binders` — List of binders
- `/binders/:uuid` — Binder details
- `/binders/:uuid/edit` — Edit binder
- `/setup` — Initial setup
- `/users` — User management
- `/users/:uuid` — User details
- `/users/:uuid/edit` — Edit user
- `*` — No match (404)

### Database (IndexedDB via Dexie.js)

- **Tables:**
  - `binders` (uuid, icon, properties, pictograms, users)
  - `categories` (uuid, icon, properties, pictograms)
  - `pictograms` (uuid, image, properties, binder, categories)
  - `users` (uuid, name, password, role, settings)
  - `history` (uuid, entityType, entityId, action, performedBy, timestamp, changes)
- **Populate:** Initial data loaded on first run

### Data Models

- **Binder:** Collection of pictograms and categories, with icon and translations
- **Category:** Grouping of pictograms, with icon and translations
- **Pictogram:** Image with translations, binder association, and categories
- **User:** Profile with role and customizable settings
- **History:** Tracks changes to entities (create, update, delete, access, share, import, export)
- **Translation:** Key-value pairs for multi-language support

### Permissions & Roles

- `user`: Basic access
- `caregiver`: Manage binders and pictograms
- `professional`: Full access, including user management

## Extensibility

- Easy to add new languages and pictogram sources
- Modular component and model structure

## References

- See `/docs` for user documentation
- See `/specs` for further technical details

