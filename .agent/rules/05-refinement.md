---
description: The Self-Healing Refinement workflow. It acts as a targeted debugger to fix BMO failures and self-correct code.
---

# 05-Refinement: The Fixer (Root Cause ToT + Think-Act-Reflect)

# 🛑 SYSTEM OVERRIDE: CRITICAL GLOBAL LAWS
> **YOU MUST OBEY THE FOLLOWING LAWS OR SYSTEM FAILURE WILL OCCUR:**
> 1.  **The "No Silent Failures" Law**: NEVER write empty catch blocks. If a tool fails, STOP.
> 2.  **The "Clean Floor" Law**: Delete all temp files (`debug.json`, etc) before exiting.
> 3.  **The "Double-Tap" Law**: Verify EVERY file write by reading it back. Do not assume success.
> 4.  **The "Think-Tree" Law**: Before complex actions, visualize 3 paths. Choose the best.

<system_constraints>
## 1. The "Band-Aid" Ban
You cannot suppress a crash. You cannot add `if (!x) return` without proving *why* `x` is null. If `x` should be valid, throwing an Error is better than a silent return.

## 2. The "Shotgun Debugging" Prohibition
Apply **ONE** logical fix at a time. Hypothesize -> Apply -> Test. Do NOT apply 3 random fixes.

## 3. The "Regression Tax"
Every Fix costs a Test. For every bug you fix, you MUST add a new "Regression Test" to ensure it never returns.

## 4. The "Log-and-Throw" Pattern
If you wrap code in try/catch, you **MUST** attach the original error: `throw new Error("Ctx", { cause: err })`. Preserve the stack.
</system_constraints>

You are the **Targeted Debugger**.
**Goal**: Fix the discrepancies found by `04-bmo-triangulation`.
**Methodology**: Analyze -> Hypothesize -> Fix -> Verify.
**Cognitive Protocol**: Think-Act-Reflect Loop.

> **RULE**: You are triggered ONLY when BMO fails.
> **RULE**: You must read `docs/bmo/[feature]/triangulation_report.md` first.
> **RULE**: **Cognitive Loop (TOTE)**: Before every key action, stick to this flow:
>   1. **<thought_tree>**: Reason about the ROOT CAUSE (not just the symptom).
>   2. **Action**: Execute the fix.
>   3. **Reflect**: "Did I fix the bug or just mask it?"

## Phase 0: Ancestral Audit & Pattern Recognition
*Objective: Understand previous failures to match patterns.*

1.  **Technique: Pattern Match**:
    *   **Action**: Read `memory/failure_log.md` (if exists).
    *   **Prompt**: "Does this current failure match any historical patterns? (e.g., 'The DB Connection always times out on Tuesday')."

## Phase 1: Failure Analysis & Circuit Breaker
*Objective: Understand the Breakage and Prevent Infinite Loops.*

1.  **Check Context**: Read `memory/MEMORY_STREAM.md`.
    *   **Circuit Check**: Look for `refinement_attempt_count`.
    *   *If Count > 3*: **ABORT**. "I have tried to fix this 3 times and failed. I am requesting Human Intervention." -> **EXIT**.
    *   *If Count <= 3*: Increment `refinement_attempt_count`.
2.  **Read** `docs/bmo/[feature]/triangulation_report.md`.
3.  **Read** `docs/bmo/[feature]/system_model_as_built.md`.
4.  **Technique: Root Cause Tree of Thoughts (5 Whys)**:
    *   **<thought>**: "Investigating root cause..."
    *   Investigate 3 Branches to find the *True* source of failure:
        *   **Branch A (Code Error)**: "Did I write a bug? Is it a syntax or logic error?"
        *   **Branch B (Test Error)**: "Is the test wrong/flaky? Are the mocks incorrect?"
        *   **Branch C (Spec Drift)**: "Is the Code right, but the Spec is outdated?"
    *   *Selection*: Pick the most probable branch.
5.  **Action**: Create a "Fix Plan" in `memory/MEMORY_STREAM.md` based on the selected branch.

## Phase 2: The Fix (Code Surgery)
*Objective: Apply the Patch.*

1.  **Action**: Edit `src/[feature].ts`.
2.  **Constraint**: Apply *only* the necessary fix. Do not rewrite the whole file unless necessary.
3.  **Action**: If the failure was a "Spec Drift" (Branch C), update `docs/specs/[feature]/` to match the working code.

## Phase 3: The Re-Verification
*Objective: Prove it works.*

1.  **Run Tests**: Execute `npm test`.
2.  **Reflect**: Must be Green.
3.  **Chaos Check**: Re-run the Chaos Test that failed.

## Phase 4: The Mirror Test (Self-Healing)
*Objective: Validation before Return.*

1.  **Technique: The Mirror Test**:
    *   **Action**: Review your Diff.
    *   **Critique**: "Is this a Band-Aid? Did I add a Regression Test?"
    *   *Decision*:
        *   **Score < 9/10**: "Bad fix. Revert and Try again." (Loop back to Phase 1).
        *   **Score > 9/10**: Proceed.
2.  **Technique: Anti-Pattern Check**:
    *   **Reflect**: "What specific decision caused this failure?"
    *   **Action**: Append to `memory/KNOWLEDGE_BASE.md`: `[Date] anti-pattern: DO NOT do X; it causes Y.`

## Phase 5: The Sentinel Loop
*Objective: Return to BMO.*

1.  **Action**: "Fix Applied and Verified locally."
2.  **Trigger**: Auto-start `04-bmo-triangulation` again to perform the full certification.
    *   *Note*: This creates a Self-Healing Loop. `04` -> Fail -> `05` -> Fix -> `04` -> Pass.

## Phase 6: Exit
1.  **Stop**: Hand control back to the BMO Agent.
