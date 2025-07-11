# Pick'n'Talk Specifications

## Table of Contents

- [Overview](#overview)
- [Target Audience](#target-audience)
- [Goals](#goals)
- [Main Features](#main-features)
- [Feature Details](#feature-details)
  - [Accessibility Settings](#accessibility-settings)
  - [Binder List](#binder-list)
  - [Binder Setup](#binder-setup)
  - [Category Filter](#category-filter)
  - [Daltonism Mode](#daltonism-mode)
  - [Dark Mode](#dark-mode)
  - [Default Binder](#default-binder)
  - [Favorite Pictograms](#favorite-pictograms)
  - [Locale Selection](#locale-selection)
  - [Keyboard Controls](#keyboard-controls)
  - [Local Persistence](#local-persistence)
  - [Multilingual Labels](#multilingual-labels)
  - [Offline Mode](#offline-mode)
  - [Reorder/Delete Pictograms](#reorderdelete-pictograms)
  - [Responsive Design](#responsive-design)
  - [Settings Page](#settings-page)
  - [Share Binders](#share-binders)
  - [Speech Synthesis](#speech-synthesis)
  - [Text-to-Speech](#text-to-speech)
  - [Translation Storage](#translation-storage)
  - [Visual Binder](#visual-binder)
- [Technical Architecture](#technical-architecture)
- [Data Models](#data-models)
- [Permissions & Roles](#permissions--roles)
- [Extensibility](#extensibility)
- [References](#references)

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

## Feature Details

### Accessibility Settings

Feature: Accessibility settings
As a caregiver, I want to adjust visibility options so users can see the interface clearly.

- Enable high contrast and adjust font size/dark mode from settings.

### Binder List

Feature: Binder list
As a user, I want to manage binders so that my pictograms stay organized.

- Create, edit, and delete binders from the list.

### Binder Setup

Feature: Binder setup
As a caregiver, I want to create pictogram binders for personalized vocabulary.

- Create binders, add categories and pictograms.

### Category Filter

Feature: Filter pictograms by category
As a user, I want to filter pictograms by category for quick access.

- Default view shows all; filter and clear category selection.

### Daltonism Mode

Feature: Daltonism support
As a colorblind user, I want daltonism mode for clearer colors.

- Enable daltonism mode in settings.

### Dark Mode

Feature: Mode d'affichage clair ou sombre
As a user, I want to switch between light and dark modes.

- Default to system mode, persist selection, apply across pages.

### Default Binder

Feature: Default binder for first time users
As a new user, I want a default binder to start communicating quickly.

- "Getting Started" binder with basic pictograms.

### Favorite Pictograms

Feature: Favorite pictograms
As a user, I want to mark pictograms as favorites for quick access.

- Mark and view favorites.

### Locale Selection

Feature: Locale selection
As a multilingual user, I want to change app language.

- Default to system locale, change and persist selection.

### Keyboard Controls

Feature: Keyboard controls
As a power user, I want keyboard shortcuts for efficiency.

- Shortcuts for save, refresh, confirm, toggle theme, cancel.

### Local Persistence

Feature: Local persistence
As a user, I want my data stored locally for session persistence.

- Binders and pictograms remain after reload.

### Multilingual Labels

Feature: Multilingual labels
As a professional, I want to edit labels in various languages.

- Customize pictogram labels per language.

### Offline Mode

Feature: Offline mode
As a user, I want to access binders offline.

- Use app without connectivity.

### Reorder/Delete Pictograms

Feature: Reorder or delete pictograms
As a caregiver, I want to reorganize pictograms.

- Drag to reorder, delete pictograms from binders.

### Responsive Design

Feature: Responsive layout
As a user, I want the interface to adapt to screen size.

- Phone, tablet, desktop layouts.

### Settings Page

Feature: Settings page options
As a user, I want to configure preferences.

- Change theme, language, active binder from settings.

### Share Binders

Feature: Share binders
As a user, I want to share my binders with collaborators.

- Share via email for viewing.

### Speech Synthesis

Feature: Speech output from pictogram selection
As a user with speech difficulties, I want pictograms to speak.

- Tap pictograms to hear labels aloud, build phrases.

### Text-to-Speech

Feature: Text to speech
As a user who cannot read, I want text read aloud.

- Tap pictogram to hear associated word.

### Translation Storage

Feature: Translation storage
As a user, I want saved translations for my language.

- Show text in selected language.

### Visual Binder

Feature: Visual binder
As a user, I want to browse pictograms to build phrases.

- Open binder, select pictograms.

## Technical Architecture

### Frontend

- **Framework:** React (with React Router)
- **State/Logic:** Component-based, hooks
- **Localization:** i18next, language detection, translation files in `/public/locales/`
- **Styling:** CSS modules in `src/style/`

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
