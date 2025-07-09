import type { Translation } from "./_Translation";
import type { EntityType, HistoryAction } from "./_Types";

/**
 * @file src/db/models/History.ts
 * @description Represents a history record in the database.
 * This record tracks changes made to entities in the application.
 * It includes the entity type, entity ID, action performed, user who performed the action,
 * timestamp of the action, and the changes made.
 */
export interface History {
  uuid: string;

  entityType: EntityType;
  entityId: string;

  action: HistoryAction;
  performedBy: string;
  timestamp: Date;

  changes: Translation;
}