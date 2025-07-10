Feature: Accessibility settings
  As a caregiver, I want to adjust visibility options so users can see the interface clearly.

  Scenario: Enable high contrast
    Given I open settings
    When I choose high contrast
    Then contrast increases across the app

  Scenario: Adjust font size and dark mode
    Given I open settings
    When I set large text and dark mode
    Then the interface shows larger fonts in dark theme
