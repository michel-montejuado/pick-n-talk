# Feature: Visual binder

## User Story

As a user, I want to browse pictograms so that I can build phrases.

### Acceptance Criteria

- The user can view a list of binders.
- The user can select a binder to view its pictograms.
- The user can select pictograms to build phrases.

### Scenario: Open a binder from the list

Given the binder list is displayed
When the user selects one binder
Then its pictograms become visible

### Scenario: Select a pictogram

Given a binder is open
When the user taps on a pictogram
Then that pictogram is selected

### Notes

- Binder and pictogram selection should be intuitive and accessible.
- Phrases built from pictograms should be easy to modify.
