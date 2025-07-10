Feature: Favorite pictograms
  As a user, I want to mark pictograms as favorites so that I can access them quickly.

  Scenario: Mark as favorite
    Given a pictogram "water" is displayed
    When the user marks it as favorite
    Then "water" appears in the favorites list
