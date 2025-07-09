import type { Role } from "./_Types";

/**
 * @file src/db/models/User.ts
 * @description Represents a user in the database.
 * A user has a unique identifier, a name, an optional password, a role,
 * and a set of settings that can be customized.
 * The role determines the permissions and capabilities of the user within the application.
 * The settings are stored as key-value pairs, allowing for flexible configuration.
 */
export interface User {
  uuid: string;

  name: string;
  password?: string;

  role: Role;

  settings: Record<string, boolean | number | string>;
}