Feature: Responsive layout
  As a user, I want the interface to adapt to my screen size so that it remains usable.

  Scenario: Phone view
    Given the screen width is below 600px
    Then components stack vertically

  Scenario: Tablet view
    Given the screen width is between 600px and 960px
    Then the layout displays two columns

  Scenario: Desktop view
    Given the screen width is above 960px
    Then navigation and content appear side by side
