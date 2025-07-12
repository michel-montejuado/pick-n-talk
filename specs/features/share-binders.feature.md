# Feature: Share binders

## User Story

As a user, I want to share my binders so that collaborators can assist me.

### Acceptance Criteria

- The user can share binders with others via email or link.
- Shared binders are accessible to collaborators.
- Permissions for viewing or editing can be set.

### Scenario: Share a binder with someone

Given I view one of my binders
When I share the binder using an email address
Then that person can view my binder

### Notes

- Sharing should be secure and respect privacy.
- Collaborators should be notified when a binder is shared.
