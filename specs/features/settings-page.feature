Feature: Settings page options
  As a user, I want to configure preferences so that the app matches my needs.

  Scenario: Change theme from settings
    Given the settings page is open
    When the user selects a different theme
    Then the interface uses the chosen theme

  Scenario: Change language from settings
    Given the settings page is open
    When the user selects a new language
    Then interface text appears in that language

  Scenario: Change active binder from settings
    Given the settings page is open
    When the user chooses another binder
    Then the new binder becomes active
