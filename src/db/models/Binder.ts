import type { Translation } from "./_Translation";

/**
 * @file src/db/models/Binder.ts
 * @description Represents a binder in the database.
 * A binder is a collection of pictograms and categories that can be used to organize content.
 * It has properties for the icon, translations, associated pictograms, and users.
 */
export interface Binder {
  uuid: string;

  icon: Blob;
  properties: Translation;

  pictograms: string[];
  users: string[];
}