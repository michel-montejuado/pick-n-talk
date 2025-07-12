# Feature: Favorite pictograms

## User Story

As a user, I want to mark pictograms as favorites so that I can access them quickly.

### Acceptance Criteria

- Users can mark pictograms as favorites.
- Favorite pictograms are easily accessible.
- Favorites persist between sessions.

### Scenario: Mark as favorite

Given a pictogram "water" is displayed
When the user marks it as favorite
Then "water" appears in the favorites list

### Notes

- Favorites should be visible in a dedicated section.
- Removing a favorite should be easy.
