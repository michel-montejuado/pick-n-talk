# Offline-First & Sync Logic

- All data stored in IndexedDB for offline use
- On reconnect, app syncs with remote (if available)
- Conflict resolution: last-write-wins, user notified of conflicts
- Sync errors shown with retry option
- User can force manual sync from settings
- Visual indicator for sync status (synced, syncing, error)
- Acceptance: All CRUD actions work offline; sync resumes automatically when online
- Edge: If sync fails repeatedly, app disables auto-sync and prompts user
