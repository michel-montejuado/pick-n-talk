# Feature: Binder setup

## User Story

As a caregiver, I want to create pictogram binders so that users have personalized vocabulary.

### Acceptance Criteria

- The caregiver can create and name new binders.
- The caregiver can add categories and pictograms to binders.
- Changes are saved and reflected immediately.

### Scenario: Create and name a binder

Given I am logged in as caregiver
When I create a binder named "Daily"
Then the binder "Daily" is saved

### Scenario: Add categories and pictograms

Given a binder named "Daily" exists
When I add a category "Food"
And I add a pictogram "Apple" with label "apple"
Then "Apple" appears under "Food"

### Notes

- Binder setup should be user-friendly and accessible.
- Caregivers should be able to edit binder details at any time.
