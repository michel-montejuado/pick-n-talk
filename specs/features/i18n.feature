Feature: Locale selection
  As a multilingual user, I want to change the app language so that I can use it in my preferred language.

  Scenario: Default to system locale
    Given my device language is French
    When I first open the app
    Then the interface appears in French

  Scenario: Change the locale
    Given I open the language settings
    When I choose English
    Then the interface switches to English

  Scenario: Persist the locale
    Given English is selected
    When I reopen the app
    Then the interface is still in English
