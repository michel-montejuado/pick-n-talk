# Data Models

```typescript
export type Role = "user" | "caregiver" | "professional" | "admin";
export type EntityType =
  | "user"
  | "binder"
  | "pictogram"
  | "category"
  | "permissions"
  | "history"
  | "localization";

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  settings?: Record<string, unknown>;
}

export interface Binder {
  id: string;
  name: string;
  icon: string;
  ownerId: string;
  pictogramIds: string[];
  sharedWith: string[];
  localizationId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pictogram {
  id: string;
  label: string;
  imageUrl: string;
  categoryIds: string[];
  localizationId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  icon: string;
  localizationId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Permissions {
  id: string;
  userId: string;
  binderId: string;
  canEdit: boolean;
  canShare: boolean;
  canDelete: boolean;
  canManagePermissions: boolean;
  grantedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export type HistoryAction =
  | "create"
  | "update"
  | "delete"
  | "access"
  | "share"
  | "import"
  | "export";

export interface History {
  id: string;
  entityType: EntityType;
  entityId: string;
  action: HistoryAction;
  performedBy: string;
  timestamp: Date;
  changes?: Record<string, unknown>;
}

export interface Localization {
  id: string;
  entityType: Exclude<EntityType, "user" | "permissions" | "history">;
  entityId: string;
  language: string;
  fields: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}
```
