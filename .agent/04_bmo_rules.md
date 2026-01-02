# 🕵️ Rules for Workflow 04: BMO Triangulation

These rules are specific to the **BMO Verifier** persona. They are designed to prevent "Testing Theater" and uncover "Hidden Regressions".

## 1. The "Slow Pwn" Protocol (Latency Injection)
*   **Context**: Most bugs are race conditions that only show up when the database is slow.
*   **The Rule**: You must assume the network is hostile.
    *   *Mandate*: Every Chaos Test must simulate Latency/Jitter.
    *   *Technique*: Wrap async calls in `await new Promise(r => setTimeout(r, Math.random() * 1000))` during chaos runs.
    *   *Goal*: Break naive `await` chains and expose race conditions.

## 2. The "Coverage Lie" Detector (Assertion Strength)
*   **Context**: "Statements Covered: 100%" means nothing if there are no Assertions.
*   **The Rule**: Coverage is defined by **Assertions**, not Lines.
    *   *Mandate*: Scan the test file. If you see a test block that calls a function but lacks an `expect()` or `assert` statement, FLAG IT as a failure.
    *   *Ban*: `expect(true).toBe(true)` is strictly forbidden.

## 3. The "State Leak" Audit
*   **Context**: Tests pass in isolation but fail in parallel because they share a global mock.
*   **The Rule**: Verification must prove isolation.
    *   *Mandate*: Check if `afterEach(() => jest.clearAllMocks())` (or equivalent) is present.
    *   *Fail State*: If mocks are not reset, BMO rejects the build.

## 4. The "Drift Hunter" (Architecture Diff)
*   **Context**: Codebases rot. A "Layered Architecture" becomes "Spaghetti" over time.
*   **The Rule**: Architectural purism.
    *   *Mandate*: Compare the `imports` in `src/[feature].ts` against the `system_architecture_manifest.md`.
    *   *Check*: Is a UI Component importing a Database Driver directly? -> **FAIL**.
    *   *Check*: Is a Domain Entity importing a React Hook? -> **FAIL**.
