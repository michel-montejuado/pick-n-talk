# Feature: Translation storage

## User Story

As a user, I want saved translations so that text appears in my language.

### Acceptance Criteria

- The app stores translations for all supported languages.
- The user can select a language and see translated text.
- Translations are loaded and displayed correctly.

### Scenario: Show text in the selected language

Given "hello" has translations for English and French
And the user chooses French in the settings
When the interface loads the message
Then "bonjour" appears on screen

### Notes

- Translation management should be simple for caregivers and users.
- All interface text should be translatable.
