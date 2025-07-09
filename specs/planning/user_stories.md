# User Stories

## As a user with speech impairment

- I want to create custom pictogram binders so I can express myself in different contexts.
  - Acceptance: User can create, name, and delete binders; each binder is accessible from the main screen.
  - Edge: Attempting to create a binder with a duplicate name prompts an error.
- I want to add, edit, and organize pictograms to suit my communication needs.
  - Acceptance: User can add pictograms from ARASAAC or local set, edit labels, and reorder pictograms.
  - Edge: Adding more than 100 pictograms shows a warning.
- I want an interface that is easy to use and accessible.
  - Acceptance: All actions are keyboard accessible and have ARIA labels.

## As a caregiver or family member

- I want to set up pictogram binders for my dependent.
  - Acceptance: Caregiver can create, edit, and assign binders to user profiles.
- I want to import/export binders for backup or sharing.
  - Acceptance: Caregiver can import/export JSON files; invalid files show clear errors.
  - Edge: Importing a binder with conflicting IDs prompts a merge/overwrite dialog.

## As a healthcare professional

- I want to manage multiple user profiles.
  - Acceptance: Professional can create, edit, and switch between user profiles.
- I want to assign permissions for board management.
  - Acceptance: Professional can set permissions per user (edit, share, delete, manage permissions).
  - Edge: Attempting to assign permissions without admin rights is blocked.
