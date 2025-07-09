import type { Translation } from "./_Translation";

/**
 * @file src/db/models/Pictogram.ts
 * @description Represents a pictogram in the database.
 * A pictogram is an image that can be used in binders and categories.
 * It has properties for the image, translations, binder association, and categories.
 */
export interface Pictogram {
  uuid: string;

  image: Blob;
  properties: Translation;

  binder: string;
  categories: string[];
}