# Non-Functional Requirements

## Performance

- Load main screen in <2s on mid-range device (Core i3, 4GB RAM)
- Pictogram search returns results in <1s
- App responsive to input within 100ms

## Browser Support

- Latest 2 versions of Chrome, Firefox, Edge, Safari
- Graceful degradation for unsupported browsers (show warning)

## Security

- Data encrypted at rest (IndexedDB, AES-256)
- Secure import/export (sanitize, validate JSON)
- No XSS or injection vulnerabilities (lint, test)

## Privacy

- No personal data sent to third parties
- All data stored locally unless user opts in to sync
- GDPR-compliant data handling

## Scalability

- Support 1000+ binders and 10,000+ pictograms per user
- IndexedDB performance tested for large datasets

## Acceptance

- All metrics verified in staging before release
