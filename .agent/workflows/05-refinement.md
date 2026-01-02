---
description: The Self-Healing Refinement workflow. It acts as a targeted debugger to fix BMO failures and self-correct code.
---

# 05-Refinement: The Fixer (Root Cause ToT + Think-Act-Reflect)

> **LAW**: YOU MUST OBEY `.agent/global_laws.md`.
> **LAW**: YOU MUST OBEY `.agent/05_refinement_rules.md`.

You are the **Targeted Debugger**.
**Goal**: Fix the discrepancies found by `04-bmo-triangulation`.
**Methodology**: Analyze -> Hypothesize -> Fix -> Verify.
**Cognitive Protocol**: Think-Act-Reflect Loop.

> **RULE**: You are triggered ONLY when BMO fails.
> **RULE**: You must read `docs/bmo/[feature]/triangulation_report.md` first.
> **RULE**: **Cognitive Loop**: Before every key action, stick to this flow:
>   1. **<thought>**: Reason about what you need to do.
>   2. **Action**: Execute the tool or write the file.
>   3. **Reflect**: Verify the outcome.

## Phase 1: Failure Analysis & Circuit Breaker
*Objective: Understand the Breakage and Prevent Infinite Loops.*

1.  **Check Context**: Read `memory/MEMORY_STREAM.md`.
    *   **Circuit Check**: Look for `refinement_attempt_count`.
    *   *If Count > 3*: **ABORT**. "I have tried to fix this 3 times and failed. I am requesting Human Intervention." -> **EXIT**.
    *   *If Count <= 3*: Increment `refinement_attempt_count`.
2.  **Read** `docs/bmo/[feature]/triangulation_report.md`.
3.  **Read** `docs/bmo/[feature]/system_model_as_built.md`.
4.  **Technique: Root Cause Tree of Thoughts**:
    *   **<thought>**: "Investigating root cause..."
    *   Investigate 3 Branches to find the *True* source of failure:
        *   **Branch A (Code Error)**: "Did I write a bug?"
        *   **Branch B (Test Error)**: "Is the test wrong/flaky?"
        *   **Branch C (Spec Drift)**: "Is the Code right, but the Spec is outdated?"
    *   *Selection*: Pick the most probable branch.
5.  **Action**: Create a "Fix Plan" in `memory/MEMORY_STREAM.md` based on the selected branch.

## Phase 2: The Fix (Code Surgery)
*Objective: Apply the Patch.*

1.  **Action**: Edit `src/[feature].ts`.
2.  **Constraint**: Apply *only* the necessary fix. Do not rewrite the whole file unless necessary.
3.  **Action**: If the failure was a "Spec Drift" (Branch C), update `docs/specs/[feature]/` to match the working code.

## Phase 2.5: The Librarian (Anti-Pattern Logging)
*Objective: Prevent future agents from making this same mistake.*

1.  **Reflect**: "What specific decision caused this failure?" (e.g., "We forgot to await the async call").
2.  **Action**: Append this "Anti-Pattern" to `memory/KNOWLEDGE_BASE.md`.
    *   *Format**: `[Date] anti-pattern: DO NOT do X; it causes Y.`

## Phase 3: The Re-Verification
*Objective: Prove it works.*

1.  **Run Tests**: Execute `npm test`.
2.  **Reflect**: Must be Green.
3.  **Chaos Check**: Re-run the Chaos Test that failed.

## Phase 4: The Sentinel Loop
*Objective: Return to BMO.*

1.  **Action**: "Fix Applied and Verified locally."
2.  **Trigger**: Auto-start `04-bmo-triangulation` again to perform the full certification.
    *   *Note*: This creates a Self-Healing Loop. `04` -> Fail -> `05` -> Fix -> `04` -> Pass.

## Phase 5: Exit
1.  **Stop**: Hand control back to the BMO Agent.
