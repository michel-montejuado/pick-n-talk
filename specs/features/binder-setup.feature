Feature: Binder setup
  As a caregiver, I want to create pictogram binders so that users have personalized vocabulary.

  Scenario: Create and name a binder
    Given I am logged in as caregiver
    When I create a binder named "Daily"
    Then the binder "Daily" is saved

  Scenario: Add categories and pictograms
    Given a binder named "Daily" exists
    When I add a category "Food"
    And I add a pictogram "Apple" with label "apple"
    Then "Apple" appears under "Food"
