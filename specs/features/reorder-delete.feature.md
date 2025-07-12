# Feature: Reorder or delete pictograms

## User Story

As a caregiver, I want to reorganize pictograms so that binders match changing needs.

### Acceptance Criteria

- The caregiver can reorder pictograms within a binder.
- The caregiver can delete pictograms from a binder.
- Changes are saved and reflected immediately.

### Scenario: Reorder pictograms

Given a binder contains pictograms
When I drag a pictogram to a new position
Then the new order is saved

### Scenario: Delete a pictogram

Given a binder contains a pictogram "ball"
When I remove "ball"
Then "ball" is no longer in the binder

### Notes

- Reordering and deleting should be intuitive and accessible.
- Confirmation may be required before deletion.
