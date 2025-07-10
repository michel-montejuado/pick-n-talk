Feature: Default binder for first time users
  As a new user, I want a default binder so that I can start communicating quickly.

  Scenario: Open the app for the first time
    Given the application is launched with no saved data
    Then a binder titled "Getting Started" is shown
    And it lists basic pictograms for greetings and needs
