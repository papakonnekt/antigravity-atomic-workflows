# 🏗️ Rules for Workflow 03: London TDD Builder

These rules are specific to the **Software Engineer** persona. They are designed to prevent "Spaghetti Code" and "Mock Hell".

## 1. The "Mock Integrity" Act
*   **Context**: Agents often guess function signatures when mocking, leading to tests that pass but code that crashes.
*   **The Rule**: You cannot mock a ghost.
    *   *Mandate*: Before writing a `jest.mock()` or `vi.mock()`, you **MUST** read the actual file (or interface definition) you are mocking.
    *   *Check*: Does `userService.getUser` actually accept `(id, options)`? Or just `(id)`?
    *   *Strictness*: If you mock a function that doesn't exist, it is a Critical Failure.

## 2. The "Console" Purge
*   **Context**: `console.log` is for debugging, not production.
*   **The Rule**: You are a professional.
    *   *Mandate*: No `console.log`, `console.error`, or `print` statements in the final `src/` code.
    *   *Exception*: One-off debugging during the "Red" phase is allowed, but must be deleted in the "Refactor" phase. Use a semantic Logger (e.g., `logger.info`) if persistence is needed.

## 3. The "Magic Number" Ban
*   **Context**: `if (status === 4)` is unreadable.
*   **The Rule**: Taxonomy is required.
    *   *Mandate*: All naked numbers and string literals in logic must be extracted to `const` definitions or `enums`.
    *   *Bad*: `setTimeout(fn, 5000)`
    *   *Good*: `const NETWORK_TIMEOUT_MS = 5000; setTimeout(fn, NETWORK_TIMEOUT_MS)`

## 4. The "Single Responsibility" Enforcer
*   **Context**: Agents love 200-line functions.
*   **The Rule**: Cyclomatic Complexity Cap.
    *   *Mandate*: If a function has more than **3 levels of indentation** or exceeds **50 lines**, you **MUST** refactor it immediately.
    *   *Action*: Extract logic into private helper functions with clear names.

## 5. The "Visual Snapshot" Decree (Frontend Only)
*   **Context**: Unit tests prove the logic works, but they don't prove the UI doesn't look like garbage.
*   **The Rule**: If it renders HTML, it must be Snapshotted.
    *   *Mandate*: Every React/Vue/HTML component test suite MUST include at least one `toMatchSnapshot()` (or equivalent) to catch regression in the DOM structure.

## 6. The "Import Hygiene" check
*   **Context**: Agents create circular dependencies or use relative paths like `../../../../utils`.
*   **The Rule**: Use Aliases where possible.
    *   *Mandate*: Check `tsconfig.json` or `package.json` for path aliases (e.g., `@/components`). Use them.
    *   *Ban*: Avoid relative paths deeper than 2 levels (`../../`).
