# Feature: Local persistence

## User Story

As a user, I want my data stored locally so that it persists between sessions.

### Acceptance Criteria

- User data is saved locally and persists after closing the app.
- Binders and pictograms remain available after reload or refresh.
- No data loss between sessions.

### Scenario: Binders stay saved

Given I created several binders
When I reload the application
Then my binders are still available

### Scenario: Pictograms stay saved

Given A binder has custom pictograms
When I refresh the page
Then the pictograms remain visible

### Notes

- Local storage should be secure and reliable.
- Users should be informed about local persistence.
