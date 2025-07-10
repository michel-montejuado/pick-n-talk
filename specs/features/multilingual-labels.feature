Feature: Multilingual labels
  As a professional, I want to edit labels in various languages so that the app is accessible worldwide.

  Scenario: Customize label
    Given I view a pictogram "drink"
    When I set its label to "boire" in French
    Then the pictogram shows "boire" for French users
