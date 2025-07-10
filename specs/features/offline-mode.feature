Feature: Offline mode
  As a user, I want to access binders offline so that I can use them without connectivity.

  Scenario: Use app offline
    Given data was synced previously
    When the device has no connection
    Then all binders remain available
