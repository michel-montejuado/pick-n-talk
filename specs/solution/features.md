# Main Features

## 1. Custom Binder Management

- Create, rename, and delete multiple binders per user
- Assign icons and names to binders
- Acceptance: User can manage at least 10 binders, each with unique name/icon

## 2. Pictogram Management

- Add, edit, delete, and organize pictograms within binders
- Drag-and-drop reordering
- Assign categories and custom labels
- Acceptance: User can add at least 100 pictograms per binder

## 3. User Profiles

- Support for multiple user profiles on one device
- Profile switching with authentication (PIN/password)
- Acceptance: At least 4 profiles can be created and switched

## 4. Accessibility

- Keyboard navigation for all actions
- High-contrast mode toggle
- Text-to-speech for pictogram selection
- Large touch targets
- Acceptance: All features usable via keyboard and screen reader

## 5. Offline-First

- All data stored in IndexedDB
- App fully functional without internet
- Sync with remote server when online (future)
- Acceptance: All CRUD actions work offline

## 6. Import/Export

- Import binders from JSON (schema validated)
- Export binders to JSON
- Error handling for invalid/oversized files
- Acceptance: User can import/export without data loss

## 7. ARASAAC API Integration

- Search and fetch pictograms from ARASAAC
- Filter by language, category, keyword
- Handle API errors (rate limit, network)
- Acceptance: User can fetch at least 20 pictograms per search

## 8. Role-Based Permissions

- Roles: user, caregiver, professional, admin
- Permissions: create/edit/delete binders, manage users, assign permissions
- Acceptance: Permissions enforced for all actions
