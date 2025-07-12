# Feature: Offline mode

## User Story

As a user, I want to access binders offline so that I can use them without connectivity.

### Acceptance Criteria

- The user can access binders and pictograms without an internet connection.
- Data is synced and available offline.
- Changes made offline are synced when connection is restored.

### Scenario: Use app offline

Given data was synced previously
When the device has no connection
Then all binders remain available

### Notes

- Offline mode should be seamless and reliable.
- Users should be notified when offline.
