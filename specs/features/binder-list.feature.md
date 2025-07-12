# Feature: Binder List

## User Story

As a user, I want to manage binders so that my pictograms stay organized.

### Acceptance Criteria

- The user can create, edit, and delete binders from the binder list.
- Each binder displays its name and a preview of its pictograms.
- Changes are reflected immediately and persist after logout/login.
- The binder list is accessible from the main navigation and is responsive.

### Scenario: Create a new binder

Given the user is viewing the binder list
When they add a binder named "Travel"
Then the binder "Travel" appears in the list

### Scenario: Edit a binder

Given the list shows a binder named "Shopping"
When they rename it to "Groceries"
Then the binder "Groceries" is listed

### Scenario: Delete a binder

Given a binder named "Old" exists in the list
When they delete that binder
Then it no longer appears in the list

### Notes

- Binder previews should be clear and informative.
- The binder list should be accessible and compatible with assistive technologies.
