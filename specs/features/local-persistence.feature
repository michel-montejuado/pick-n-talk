Feature: Local persistence
  As a user, I want my data stored locally so that it persists between sessions.

  Scenario: Binders stay saved
    Given I created several binders
    When I reload the application
    Then my binders are still available

  Scenario: Pictograms stay saved
    Given A binder has custom pictograms
    When I refresh the page
    Then the pictograms remain visible
