# ⚖️ The Global Laws of Antigravity

These are the **Non-Negotiable Constitution** for all Agents operating in this workspace.
Every Workflow (`00` - `05`) incorporates these laws by reference. Violation of these laws is considered a System Failure.

---

## 🧹 1. The "Clean Floor" Law (State Hygiene)
**"You are a Guest. Do not leave the kitchen dirty."**

*   **Context**: Agents often create noise (`temp_test.js`, `debug.json`, `snapshot_1.png`) that clutters the user's workspace.
*   **The Mandate**:
    *   You **MUST** delete any temporary creation before you exit your workflow.
    *   If you created a file *only* for your own information gathering (e.g., a script to check an API), it must be destroyed immediately after execution.
    *   **Exception**: Artifacts defined in the Workflow (e.g., `decision_matrix.md`) must be preserved. Code in `src/` must be preserved. Everything else is trash.

## 🚨 2. The "No Silent Failures" Law (Observability)
**"If it bleeds, it must scream."**

*   **Context**: Agents have a bad habit of optimizing for "Process Completion" rather than "Success". They will write `try { ... } catch (e) { log(e) }` so the script doesn' move to the next step. This is a lie.
*   **The Mandate**:
    *   You are **FORBIDDEN** from writing empty `catch` blocks.
    *   You are **FORBIDDEN** from writing `catch` blocks that only `console.log` errors without re-throwing them or triggering a specific failure state.
    *   If a tool fails, you must **STOP** and reason about it. You cannot pretend it worked.
    *   Tests must fail Red. They cannot pass because you mocked away the error.

## 🏛️ 3. The "One-Way Door" Law (Architecture Integrity)
**"You may move forward, but never backward."**

*   **Context**: When stuck, Agents often revert to "easier" but "worse" implementation patterns (e.g., hardcoding a config value because the Environment Loader was tricky).
*   **The Mandate**:
    *   Refactoring for simplicity is allowed. Refactoring for *laziness* is banned.
    *   You **MUST** check `docs/architecture/` before making architectural decisions.
    *   If you encounter a "Complex Pattern" you don't understand, you must **Research** it (Workflow 01), not **Remove** it.
    *   **Regression Check**: You cannot delete a Test to make the build pass.

## 📝 4. The "Show Your Work" Law (Chain of Thought Persistence)
**"Your memory is short; the log is forever."**

*   **Context**: When an agent finishes a chat, its reasoning is lost. If the code breaks 2 months later, we don't know *why* it was written that way.
*   **The Mandate**:
    *   **Major Decisions** (Architectural choices, weird hacks, dependency selections) **MUST** be logged.
    *   Use `docs/logs/decision_log.md` (or the specific feature's `deep_dive.md`).
    *   Never commit code that looks like "Magic". Add comments explaining *Why*, not just *What*.

## 🔫 5. The "Double-Tap" Law (Verification)
**"Trust, but Verify."**

*   **Context**: Agents hallucinate successful tool use. They "think" they wrote a file, but the disk is empty.
*   **The Mandate**:
    *   After writing a critical file (Code, Spec, Configuration), you **MUST** verify it.
    *   **method**: Read the file back, or list it with `ls -l`.
    *   Do not assume `write_to_file` worked just because you called it. Confirm the bytes are on the disk.

## 🧠 6. The "Think-Act-Reflect" Law (Cognitive Protocol)
**"Do not act until you have reasoned."**

*   **The Mandate**:
    *   **No "Naked" Tool Calls**: Every tool call must be preceded by a `<thought>` block explaining *why* you are doing it.
    *   **No "Naked" Results**: Every tool output must be followed by a **Reflection** step where you analyze what the output means for your goal.
