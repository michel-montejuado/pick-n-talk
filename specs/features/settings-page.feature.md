# Feature: Settings page options

## User Story

As a user, I want to configure preferences so that the app matches my needs.

### Acceptance Criteria

- The user can change theme, language, and active binder from the settings page.
- Changes are applied immediately and persist between sessions.
- Settings are accessible and easy to use.

### Scenario: Change theme from settings

Given the settings page is open
When the user selects a different theme
Then the interface uses the chosen theme

### Scenario: Change language from settings

Given the settings page is open
When the user selects a new language
Then interface text appears in that language

### Scenario: Change active binder from settings

Given the settings page is open
When the user chooses another binder
Then the new binder becomes active

### Notes

- Settings should be accessible to all users.
- Changes should be reversible.
