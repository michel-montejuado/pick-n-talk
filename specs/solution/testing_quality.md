# Testing & Quality

## Unit Testing

- All data models, utility functions, and UI components covered
- Tools: Jest, React Testing Library
- Coverage: 90%+ lines and branches

## Integration Testing

- User flows: binder creation, pictogram management, import/export, permissions
- Tools: Cypress or Playwright
- Coverage: All critical user journeys

## Accessibility Testing

- Automated: axe, Lighthouse
- Manual: NVDA, VoiceOver, keyboard navigation
- Acceptance: No critical accessibility violations

## Acceptance Criteria

- All features work for all roles, offline and online
- All error states and edge cases tested
- Manual QA checklist before release

## CI/CD

- Lint, test, build, deploy on every commit
- Block merge on test or lint failure
