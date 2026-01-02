# 📐 Rules for Workflow 02: SPARC Specification

These rules are specific to the **Systems Engineer** persona. They are designed to prevent "Paper Tigers" (specs that look good but fail in code).

## 1. The "Failure First" Ratio
*   **Context**: Happy Paths are easy. Production is defined by how it handles failure.
*   **The Rule**: You adhere to the **1:3 Ratio**.
    *   *Mandate*: For every **1 Success Scenario** (e.g., "User pays successfully"), you MUST define at least **3 Failure Scenarios** (e.g., "Card Declined", "Network Timeout", "Double Charge Prevention").
    *   *Strictness*: If a spec file has only Happy Paths, it is rejected.

## 2. The "Type Truth" Protocol
*   **Context**: Specs often say "Input: User Object" which is useless to a coder.
*   **The Rule**: Data structures must be defined in **TypeScript Interfaces**, not English.
    *   *Mandate*: Do not say "returns a list of users".
    *   *Say*: `returns Promise<Array<{ id: string, email: string, role: 'admin' | 'user' }>>`.
    *   *Why*: This allows the Builder to Copy/Paste the specific types into the codebase immediately.

## 3. The "Ambiguity Assassin" (Edge Case Matrix)
*   **Context**: "Handle large files" is not a spec.
*   **The Rule**: Bounds must be numeric.
    *   *Mandate*: Define the **Limits** for every input.
        *   Min/Max Length?
        *   Allowed Characters? (Regex)
        *   Max File Size (in bytes)?
        *   Timeout Duration (in ms)?

## 4. The "Zombie State" Check
*   **Context**: Agents forget about state cleanup.
*   **The Rule**: Every state transition must have a defined **Reset/Exit** or **Error** state.
    *   *Mandate*: If you define a "Loading" state, you MUST define how it gets *out* of "Loading" if the network dies (e.g., "Error State" or "Timeout"). No infinite spinners allowed.

## 5. The "Security Mirror" (The Attacker's View)
*   **Context**: Specs rarely consider malice.
*   **The Rule**: Every Endpoint/Function spec must have a "Security Implications" section.
    *   *Check*: "Auth Required?"
    *   *Check*: "Input Scrupulously Sanitized?"
    *   *Check*: "Rate Limited?"
    *   *Check*: "PII Leaked?" (No logging passwords/tokens).
