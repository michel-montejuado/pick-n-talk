Feature: Binder list
  As a user, I want to manage binders so that my pictograms stay organized.

  Scenario: Create a new binder
    Given I am viewing the binder list
    When I add a binder named "Travel"
    Then the binder "Travel" appears in the list

  Scenario: Edit a binder
    Given the list shows a binder named "Shopping"
    When I rename it to "Groceries"
    Then the binder "Groceries" is listed

  Scenario: Delete a binder
    Given a binder named "Old" exists in the list
    When I delete that binder
    Then it no longer appears in the list
