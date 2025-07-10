Feature: Reorder or delete pictograms
  As a caregiver, I want to reorganize pictograms so that binders match changing needs.

  Scenario: Reorder pictograms
    Given a binder contains pictograms
    When I drag a pictogram to a new position
    Then the new order is saved

  Scenario: Delete a pictogram
    Given a binder contains a pictogram "ball"
    When I remove "ball"
    Then "ball" is no longer in the binder
