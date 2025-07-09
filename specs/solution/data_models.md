# Data Models

```typescript
export type Role = "user" | "caregiver" | "professional" | "admin";
export type EntityType =
  | "user"
  | "binder"
  | "pictogram"
  | "category"
  | "permissions";
export type HistoryAction =
  | "create"
  | "update"
  | "delete"
  | "access"
  | "share"
  | "import"
  | "export";

export interface User {
  id: string;
  name: string;
  password: string;
  role: Role;
  settings: Record<string, unknown>;
}

export interface Binder {
  id: string;
  name: string;
  icon: string;
  ownerId: string;
  pictogramIds: string[];
  sharedWith: string[];
  localizationId?: string;
}

export interface Pictogram {
  id: string;
  label: string;
  image: Blob;
  categoryIds: string[];
  localizationId?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  localizationId?: string;
}

export interface Permissions {
  userId: string;
  binderId: string;
  canEdit: boolean;
  canShare: boolean;
  canDelete: boolean;
  canManagePermissions: boolean;
  grantedBy: string; // userId of granter
}

export interface History {
  id: string;
  entityType: EntityType;
  entityId: string;
  action: HistoryAction;
  performedBy: string; // userId
  timestamp: Date;
  changes: Record<string, unknown>; // diff or details of the change
}

export interface Localization {
  id: string;
  entityType: Exclude<EntityType, "user" | "permissions">;
  entityId: string;
  language: string; // e.g., 'en', 'fr', 'es'
  fields: Record<string, string>; // key-value pairs for localized fields
}
```
