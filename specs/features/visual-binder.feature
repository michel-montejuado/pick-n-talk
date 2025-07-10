Feature: Visual binder
  As a user, I want to browse pictograms so that I can build phrases.

  Scenario: Open a binder from the list
    Given the binder list is displayed
    When the user selects one binder
    Then its pictograms become visible

  Scenario: Select a pictogram
    Given a binder is open
    When the user taps on a pictogram
    Then that pictogram is selected
