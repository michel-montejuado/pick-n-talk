# Feature: Multilingual labels

## User Story

As a professional, I want to edit labels in various languages so that the app is accessible worldwide.

### Acceptance Criteria

- Labels can be customized in multiple languages.
- Users see labels in their selected language.
- Changes are saved and reflected immediately.

### Scenario: Customize label

Given I view a pictogram "drink"
When I set its label to "boire" in French
Then the pictogram shows "boire" for French users

### Notes

- Multilingual support should cover all major app features.
- Language selection should be easy to access.
