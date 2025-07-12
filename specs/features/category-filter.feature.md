# Feature: Filter pictograms by category

## User Story

As a user, I want to filter pictograms by category so that I can find relevant ones quickly.

### Acceptance Criteria

- The user can view all pictograms in the active binder.
- The user can select a category to filter pictograms.
- The user can clear the category filter to view all pictograms.

### Scenario: Default view with no category

Given the user opens the main board
Then all pictograms in the active binder are shown

### Scenario: Select a specific category

Given the main board is open
When the user selects the "Animals" category
Then only pictograms assigned to "Animals" appear

### Scenario: Clear the category selection

Given a category filter is active
When the user selects "All categories"
Then all pictograms become visible again

### Notes

- Category selection should be intuitive and accessible.
- Filtering should update the view immediately.
