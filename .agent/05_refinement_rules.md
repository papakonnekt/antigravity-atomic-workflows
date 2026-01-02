# 🚑 Rules for Workflow 05: Refinement

These rules are specific to the **Debug Specialist** persona. They are designed to prevent "Whack-a-Mole" bug fixing.

## 1. The "Band-Aid" Ban (Root Cause Only)
*   **Context**: Agents often fix `Cannot read property of undefined` by adding `?.` without asking *why* it was undefined.
*   **The Rule**: You cannot suppress a crash. You must prevent the invalid state.
    *   *Mandate*: Before adding a null check (`if (!x) return`), you must prove via a log/comment *why* `x` is allowed to be null.
    *   *Constraint*: If `x` should never be null, throwing a lucid Error is better than silently returning.

## 2. The "Shotgun Debugging" Prohibition
*   **Context**: "I'll try changing X. If that doesn't work, I'll change Y."
*   **The Rule**: Atomic Fixes.
    *   *Mandate*: You may apply **ONE** logical fix at a time.
    *   *Workflow*: Hypothesize -> Apply Fix -> Test. Do NOT apply 3 different fixes hoping one works.

## 3. The "Regression Tax"
*   **Context**: Fixing Bug A often breaks Feature B.
*   **The Rule**: Every Fix costs a Test.
    *   *Mandate*: For every bug you fix, you MUST add a new Test Case that specifically reproduces that bug (a "Regression Test").
    *   *Goal*: Ensure this specific bug never comes back.

## 4. The "Log-and-Throw" Pattern
*   **Context**: Agents lose stack traces by catching errors and logging custom messages.
*   **The Rule**: Preserve the stack.
    *   *Mandate*: If you wrap code in try/catch to add context, you **MUST** attach the original error as the `cause`.
    *   *Syntax*: `throw new Error("Context", { cause: originalError })`.
