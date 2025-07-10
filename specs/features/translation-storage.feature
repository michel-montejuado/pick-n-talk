Feature: Translation storage
  As a user, I want saved translations so that text appears in my language.

  Scenario: Show text in the selected language
    Given "hello" has translations for English and French
    And the user chooses French in the settings
    When the interface loads the message
    Then "bonjour" appears on screen
