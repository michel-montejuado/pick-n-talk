# User Flows

## 1. Creating a Binder

1. User clicks "New Binder" button on dashboard.
2. Enters binder name and selects icon (icon picker modal).
3. App validates name (no duplicates, not empty).
4. User adds pictograms (from predefined set or ARASAAC search).
5. User can reorder pictograms before saving.
6. User clicks "Save"; binder appears in dashboard list.
   - Edge: If name is duplicate, show error and block save.
   - Acceptance: Binder is visible and accessible after creation.

## 2. Adding a Pictogram

1. User selects a binder from dashboard.
2. Clicks "Add Pictogram" button.
3. Searches or browses pictogram library (local and ARASAAC).
4. Selects pictogram, adds label, assigns category.
5. User can preview pictogram before saving.
6. Clicks "Save"; pictogram appears in binder.
   - Edge: If pictogram already exists in binder, show warning.
   - Acceptance: Pictogram is visible and usable in binder.

## 3. Importing a Binder

1. User clicks "Import Binder" on dashboard.
2. Selects JSON file from device.
3. App validates file against schema.
4. If valid, binder is added to dashboard; if not, show error with details.
5. If binder ID conflicts, prompt user to merge or overwrite.
   - Acceptance: Imported binder is fully functional.

## 4. Using a Binder to Communicate

1. User opens binder from dashboard.
2. Taps pictogram(s) to build message (message bar at bottom).
3. App displays message visually and with text-to-speech.
4. User can clear message or edit sequence.
   - Edge: If TTS fails, show error and fallback to visual only.
