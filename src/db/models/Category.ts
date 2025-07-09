import type { Translation } from "./_Translation";

/**
 * @file src/db/models/Category.ts
 * @description Represents a category in the database.
 * A category is a collection of pictograms that can be used to organize content.
 * It has properties for the icon, translations, and associated pictograms.
 */
export interface Category {
  uuid: string;

  icon: Blob;
  properties: Translation;

  pictograms: string[];
}