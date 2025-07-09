# Roles & Permissions Matrix

| Role         | Create Binder | Edit Binder | Delete Binder | Import/Export | Manage Users | Assign Permissions |
| ------------ | :-----------: | :---------: | :-----------: | :-----------: | :----------: | :----------------: |
| User         |       ✓       |      ✓      |       ✓       |       ✓       |      ✗       |         ✗          |
| Caregiver    |       ✓       |      ✓      |       ✓       |       ✓       |      ✓       |         ✓          |
| Professional |       ✓       |      ✓      |       ✓       |       ✓       |      ✓       |         ✓          |
| Admin        |       ✓       |      ✓      |       ✓       |       ✓       |      ✓       |         ✓          |

## Role Descriptions

- **User:** Can manage own binders and pictograms. Cannot manage other users or assign permissions.
- **Caregiver:** Can manage binders for dependents, import/export, and manage user profiles.
- **Professional:** Can manage multiple users, assign permissions, and oversee board management.
- **Admin:** Full access to all features, user management, and permissions.

## Edge Cases

- Attempting restricted action shows clear error ("Permission denied").
- Only Admin can assign permissions to other Admins.
- Caregivers cannot delete Professional or Admin accounts.
