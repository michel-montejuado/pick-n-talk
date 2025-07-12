# Feature: Keyboard controls

## User Story

As a power user, I want keyboard shortcuts so that I can work efficiently.

### Acceptance Criteria

- The app provides keyboard shortcuts for common actions.
- Shortcuts are documented and accessible via help.
- Shortcuts work across all supported platforms.

### Scenario: List of shortcuts in help

Given I open the help menu
Then I see a section "Keyboard shortcuts"

### Scenario: Save current work

Given I edit content
When I press Ctrl+S or Cmd+S
Then my changes are saved

### Scenario: Refresh displayed data

Given I view a binder or dashboard
When I press Ctrl+R or Cmd+R
Then the view reloads with the latest data

### Scenario: Confirm a form quickly

Given a form is focused
When I press Ctrl+Enter
Then the form is submitted

### Scenario: Toggle dark theme

Given I am viewing the application
When I press Ctrl+Shift+L
Then the theme switches between light and dark

### Scenario: Cancel an action

Given a modal dialog is open
When I press Escape
Then the modal closes

### Notes

- Keyboard shortcuts should be customizable if possible.
- Accessibility for keyboard navigation is required.
