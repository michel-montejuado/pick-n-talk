# Feature: Daltonism support

## User Story

As a colorblind user, I want a daltonism mode so that colors are clearer.

### Acceptance Criteria

- The user can enable daltonism mode from the settings menu.
- Interface colors are adjusted for colorblind users.
- The setting persists between sessions.

### Scenario: Enable daltonism mode

Given the settings menu is open
When the user enables daltonism mode
Then interface colors are adjusted for colorblind users

### Notes

- Daltonism mode should be accessible and easy to toggle.
- Color choices should be tested for common types of color blindness.
