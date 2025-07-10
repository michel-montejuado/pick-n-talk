Feature: Daltonism support
  As a colorblind user, I want a daltonism mode so that colors are clearer.

  Scenario: Enable daltonism mode
    Given the settings menu is open
    When the user enables daltonism mode
    Then interface colors are adjusted for colorblind users
