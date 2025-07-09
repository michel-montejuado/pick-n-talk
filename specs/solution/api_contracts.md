# API Contracts

## ARASAAC Fetch

- Endpoint: `GET https://api.arasaac.org/api/pictograms/{lang}`
- Params: `search` (string), `category` (string), `limit` (int, default 20, max 100)
- Response: Array of pictogram objects

  - Example:

    ```json
    [{ "_id": 123, "keywords": ["eat"], "url": "...", "category": "food" }]
    ```

- Error Codes:
  - 429: Rate limit exceeded (show retry UI)
  - 500: Server error (show fallback message)
  - 400: Invalid params
- Edge: If no results, show empty state message.

## Import/Export

- Import: Accepts JSON file matching Binder schema

  - Request: File upload (JSON)
  - Response: 200 OK if valid, 400 if invalid format, 413 if file too large
  - Example error response:

    ```json
    { "error": "Invalid binder format: missing pictograms[]" }
    ```

- Export: Returns JSON file of selected binder
  - Request: `GET /export/binder/{id}`
  - Response: JSON file download
- Edge: Importing a binder with duplicate IDs prompts merge/overwrite dialog.
