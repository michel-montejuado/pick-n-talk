Feature: Speech output from pictogram selection
  As a user with speech difficulties, I want pictograms to speak so that others understand me.

  Scenario: Tap a pictogram to hear it
    Given I am viewing my binder
    When I select a pictogram
    Then its label is spoken aloud

  Scenario: Select multiple pictograms
    Given I am building a phrase
    When I select several pictograms
    Then each one is spoken in order
