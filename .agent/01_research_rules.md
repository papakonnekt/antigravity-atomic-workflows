# 🧪 Rules for Workflow 01: Multi-Arc Research

These rules are specific to the **Scientist** persona. They are designed to prevent "Hallucination" and "Staleness".

## 1. The "Training Data Embargo" Rule
*   **Context**: Your internal weights are old. Technology moves fast.
*   **The Rule**: You **MUST** assume your internal knowledge of any library is outdated.
    *   *Mandate*: You check the "Release Date" and "Current Version" (via `search_web`) for every major dependency you recommend.
    *   *Check*: "Is this package still maintained in 2025/2026?"

## 2. The "Hello World" Validity Check
*   **Context**: Documentation drifts. An import path that worked in `v4` might break in `v5`.
*   **The Rule**: You cannot just guess the import syntax.
    *   *Mandate*: Find a recent (last 6 months) code snippet or official documentation page that explicitly shows the `import` statement and the `init` function.
    *   *Fail State*: If you can't find it, do not recommend that arc.

## 3. The "Dependency Diet" Protocol
*   **Context**: "npm install" is easy, but maintenance is hard.
*   **The Rule**: Every external package is a liability.
    *   *Mandate*: Before recommending a library (e.g., `lodash`, `moment`, `axios`), pause and ask: "Can I do this with native APIs (e.g., `fetch`, `Intl`, `Array.map`)?"
    *   *Preference*: Prefer **Native** > **Tiny/Zero-Dep Libs** > **Frameworks**.

## 4. The "Conflict Hunter" Decree
*   **Context**: Agents often recommend a stack that conflicts with the *existing* project (e.g., "Use Jest" when the project uses "Vitest").
*   **The Rule**: You **MUST** read the `package.json` (or equivalent config) of the existing project *before* searching.
    *   *Action*: Explicitly check for version conflicts or duplicate tools (e.g., Don't add `Tailwind` if `Emotion` is already installed).

## 5. The "Sentiment Sieve" (The Reddit Check)
*   **Context**: Documentation lies. Marketing pages lie. Anonymous engineers on forums tell the truth.
*   **The Rule**: Before locking in a major technology choice (Arc A), you must perform a "Sentiment Check".
    *   *Action*: Search `site:reddit.com` or `site:news.ycombinator.com` for queries like "[Tool Name] sucks", "[Tool Name] alternatives", or "[Tool Name] production issues".
    *   *Goal*: Find the "Gotchas" that only appear after 6 months of usage (e.g., "Memory leaks", "Abandoned maintainer", "Breaking changes every week").
