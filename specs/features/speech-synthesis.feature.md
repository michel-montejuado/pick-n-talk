# Feature: Speech output from pictogram selection

## User Story

As a user with speech difficulties, I want pictograms to speak so that others understand me.

### Acceptance Criteria

- The app can speak the label of any selected pictogram.
- Multiple pictograms can be selected and spoken in sequence.
- Speech output is clear and matches the selected language.

### Scenario: Tap a pictogram to hear it

Given I am viewing my binder
When I select a pictogram
Then its label is spoken aloud

### Scenario: Select multiple pictograms

Given I am building a phrase
When I select several pictograms
Then each one is spoken in order

### Notes

- Speech synthesis should support phrase building.
- Accessibility for users with speech difficulties is required.
