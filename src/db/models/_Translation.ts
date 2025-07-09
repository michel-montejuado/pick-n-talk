/**
 * @file src/db/models/_Translation.ts
 * @description This file defines the Translation interface used in the database models.
 * It is used to store translations for various properties in different languages.
 */
export interface Translation {
  [language: string]: { [key: string]: string }
}