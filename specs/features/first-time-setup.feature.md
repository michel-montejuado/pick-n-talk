# Feature: First Time Setup by Caregiver

## User Story

As a caregiver, I want to be able to set up my account when I first use the application, so that I can manage users and binders efficiently.

### Acceptance Criteria

- The caregiver is guided through an onboarding/setup flow upon first launch.
- The caregiver can create and configure their own account.
- The caregiver can create one or more users, each assigned the "user" role.
- The caregiver can set up or sync binders for each user during the setup process.
- The caregiver can set user preferences for each account during setup (e.g., language, accessibility, daltonism mode, etc.).
- The caregiver can review and confirm the setup before completing onboarding.

### Scenario: First Time Setup

Given the application is launched for the first time
When the caregiver starts the setup process
Then the caregiver should be able to:

- Create and configure their own account
- Add multiple users with the "user" role
- Set up or sync binders for each user
- Set user preferences for each account (e.g., language, accessibility, daltonism mode, etc.)
And the caregiver should be able to finish onboarding and start using the application.

### Notes

- The setup flow should be user-friendly and accessible.
- The caregiver should be able to edit user, binder, and preference details during setup.
- Optionally, the caregiver can skip binder or preference setup and complete it later.
