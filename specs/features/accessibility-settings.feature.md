# Feature: Accessibility Settings

## User Story

As a caregiver, I want to adjust visibility options so users can see the interface clearly.

### Acceptance Criteria

- The user can enable high contrast mode from settings.
- The user can adjust font size and toggle dark mode.
- Changes are applied across all pages and persist after logout/login.
- Accessibility options do not interfere with core functionality.

### Scenario: Enable high contrast

Given the user opens settings
When they choose high contrast
Then contrast increases across the app

### Scenario: Adjust font size and dark mode

Given the user opens settings
When they set large text and dark mode
Then the interface shows larger fonts in dark theme

### Notes

- Accessibility options should be easy to find and compatible with assistive technologies.
