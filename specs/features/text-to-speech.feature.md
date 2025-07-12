# Feature: Text to speech

## User Story

As a user who cannot read, I want text read aloud so that I understand the pictograms.

### Acceptance Criteria

- The app can read aloud the text associated with pictograms.
- The user can trigger text-to-speech for any pictogram.
- Speech output is clear and matches the selected language.

### Scenario: Speak selected pictogram

Given a binder is open
When the user taps a pictogram
Then the associated word is spoken

### Notes

- Text-to-speech should support multiple languages.
- Accessibility for users with reading difficulties is required.
