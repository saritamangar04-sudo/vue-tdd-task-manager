# Internship Week 5: Unit Testing & TDD Summary Report

**Project Title:** VueJS Component Unit Testing Suite  
**Frameworks:** Vue 3, Vue Test Utils, Vitest

---

## 1. Executive Summary

This project validates application quality using Test-Driven Development (TDD). Unit tests were constructed prior to component implementations to verify props, emitted events, CSS dynamic classes, and edge cases.

---

## 2. Unit Test Matrix

| Target Component | Test File           | Test Objective                          | Test Type   | Outcome |
| :--------------- | :------------------ | :-------------------------------------- | :---------- | :------ |
| **TaskInput**    | `TaskInput.spec.js` | Verifies field and button rendering     | Normal      | PASS    |
| **TaskInput**    | `TaskInput.spec.js` | Rejects empty input submissions         | Edge Case   | PASS    |
| **TaskInput**    | `TaskInput.spec.js` | Emits `add-task` event and resets input | Normal      | PASS    |
| **TaskItem**     | `TaskItem.spec.js`  | Renders prop title accurately           | Normal      | PASS    |
| **TaskItem**     | `TaskItem.spec.js`  | Toggles `.completed` CSS class          | Normal      | PASS    |
| **TaskItem**     | `TaskItem.spec.js`  | Emits `toggle-task` payload             | Normal      | PASS    |
| **TaskItem**     | `TaskItem.spec.js`  | Emits `delete-task` payload             | Normal      | PASS    |
| **TaskList**     | `TaskList.spec.js`  | Renders fallback empty state            | Edge Case   | PASS    |
| **TaskList**     | `TaskList.spec.js`  | Renders list matching task array length | Normal      | PASS    |
| **App**          | `App.spec.js`       | Complete integration lifecycle          | Integration | PASS    |

---

## 3. Issues Uncovered During Testing

- **Whitespace Submissions:** Initial inputs permitted submitting empty spaces (`"   "`). Testing caught this edge case, leading to strict `.trim()` validation.
- **Event Target Payload Mapping:** Isolated component testing revealed event emission key mismatches before integrating child components into parent state management.

---

## 4. TDD Insights & Benefits

- **Refactoring Safety:** Testing component behavior before applying styles allowed structural modifications without breaking core reactive state.
- **Self-Documenting Code:** Unit test files serve as functional documentation for how props and events operate across component boundaries.
