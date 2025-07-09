---
applyTo: 'src/**/*.{ts,tsx,css}'
---

# Developer Instructions

This document outlines the coding standards and best practices for the Pick-N-Talk project.
Adhering to these guidelines will help maintain code quality, readability, and consistency across the codebase.

## Component Structure

- Prefer functional components and React hooks over class components.
- Keep components small, focused, and reusable.
- Use meaningful, descriptive names for components, props, and variables.
- Organize files by feature or domain for scalability.

## TypeScript Practices

- Use TypeScript interfaces and types for all component props and state.
- Always type function parameters and return values explicitly.
- Prefer immutability—never mutate state directly.

## Coding Style

- Use ES6+ features (e.g., arrow functions, destructuring, template literals) for cleaner code.
- Use CSS modules or styled-components for scoped styles.
- Avoid inline styles except for dynamic or one-off cases.

## React Hooks & Performance

- Handle side effects with `useEffect` and clean up subscriptions or listeners.
- Use `useCallback` and `useMemo` to optimize performance when necessary.

## Security & Validation

- Validate and sanitize all user input.
- Use environment variables for configuration, not hardcoded values.

## Testing & Documentation

- Write unit and integration tests for components and utilities.
- Document complex logic with comments and JSDoc.

## Accessibility & Error Handling

- Follow accessibility (a11y) best practices (e.g., semantic HTML, ARIA attributes).
- Use error boundaries for graceful error handling in the UI.

## Maintenance

- Keep dependencies up to date and remove unused packages.
- Adhere to the project's linting and formatting rules.

