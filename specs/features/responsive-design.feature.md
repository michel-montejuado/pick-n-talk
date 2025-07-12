# Feature: Responsive layout

## User Story

As a user, I want the interface to adapt to my screen size so that it remains usable.

### Acceptance Criteria

- The layout adapts to phone, tablet, and desktop screen sizes.
- Components stack vertically on small screens.
- Two-column layout is used for tablets.
- Navigation and content are side by side on desktops.

### Scenario: Phone view

Given the screen width is below 600px
Then components stack vertically

### Scenario: Tablet view

Given the screen width is between 600px and 960px
Then the layout displays two columns

### Scenario: Desktop view

Given the screen width is above 960px
Then navigation and content appear side by side

### Notes

- Responsive design should be tested on multiple devices.
- Accessibility should be maintained across layouts.
