# Feature: Light and Dark Display Modes

## User Story

As a user, I want to switch between light and dark modes so that the display suits my preference.

### Acceptance Criteria

- The user can choose between light and dark display modes.
- The selected mode is applied across all pages.
- The selected mode is preserved after logout and login.
- The default mode matches the system setting.

### Scenario: Default to light mode

Given a new user accesses the application for the first time
Then the interface is displayed in light mode

### Scenario: Default to system mode

Given the user has selected dark mode at the system level
Then the interface uses the previously selected mode

### Scenario: Select dark mode

Given the user accesses display settings
When they select the "Dark mode" option
Then the interface switches to dark mode

### Scenario: Select light mode

Given the user accesses display settings
When they select the "Light mode" option
Then the interface switches to light mode

### Scenario: Mode applied on all pages

Given the user has selected a display mode
When they navigate between different pages
Then the interface keeps the selected display mode

### Scenario: Mode persists after reconnect

Given the user has selected a display mode
And they log out and log back in
Then the interface uses the previously selected display mode

### Notes

- The mode should be easily accessible from settings.
- Accessibility must be respected for each mode.
