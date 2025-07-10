Feature: Filter pictograms by category
  As a user, I want to filter pictograms by category so that I can find relevant ones quickly.

  Scenario: Default view with no category
    Given the user opens the main board
    Then all pictograms in the active binder are shown

  Scenario: Select a specific category
    Given the main board is open
    When the user selects the "Animals" category
    Then only pictograms assigned to "Animals" appear

  Scenario: Clear the category selection
    Given a category filter is active
    When the user selects "All categories"
    Then all pictograms become visible again
