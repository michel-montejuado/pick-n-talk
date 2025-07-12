# Feature: Default binder for first time users

## User Story

As a new user, I want a default binder so that I can start communicating quickly.

### Acceptance Criteria

- A default binder is created for new users.
- The default binder contains basic pictograms for greetings and needs.
- Users can customize the default binder.

### Scenario: Open the app for the first time

Given the application is launched with no saved data
Then a binder titled "Getting Started" is shown
And it lists basic pictograms for greetings and needs

### Notes

- The default binder should be editable.
- Users should be able to add or remove pictograms.
