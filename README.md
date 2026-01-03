# 🌌 Antigravity Atomic Swarm
> **The First "Self-Validating" Agentic Workflow System**

**Antigravity Atomic Swarm** is a state-of-the-art (SoTA) workflow framework designed to turn standard AI coding agents into rigorous, architecture-aware engineers. It enforces **London School TDD**, **OpenSpec Standards**, and **Chaos Engineering** to ensure that code is not just written, but *proven*.

## 🚀 Key Features

*   **Atomic Swarm Architecture**: Decoupled, stateless workflows that allow infinite scaling (Plan -> Spec -> Build -> Verify).
*   **Cognitive Protocols**: Every agent is bound by Strict Laws (`.agent/global_laws.md`) forcing them to "Think-Act-Reflect".
*   **Tri-Level Memory**: A persistent database (`PROJECT_STATE`), volatile RAM (`MEMORY_STREAM`), and a learning brain (`KNOWLEDGE_BASE`) that gets smarter over time.
*   **The "Sentiment Sieve"**: Research agents verify stack choices against 2025/2026 data and perform "Reddit Sentiment Checks" to avoid hype-driven development.
*   **BMO Verification**: A "Behavior-Model-Oracle" that reverse-engineers the built code to detect architectural drift and runs latency-injected chaos tests.

## 🎛️ Autonomy Levels
The Swarm adapts to your leadership style. You configure this in **Phase 0** of Solicitation:
*   **[1] Fully Auto**: "Efficiency First". The Swarm minimizes questions, makes standard decisions automatically, and **Auto-Pushes** to Git on success.
*   **[2] Semi-Guided** (Default): "Collaborative". The Swarm asks for confirming on major checks and confirmation before pushing to Git.
*   **[3] Manual Control**: "Paranoid Mode". The Swarm asks permission for *every* file write and *every* commit.

---

## 🛠️ The Workflows

This system is composed of 6 Atomic Workflows that chain together:

### 1. `/00-solicitation` (The Visionary)
*   **Role**: Product Architect.
*   **Job**: Interviews you to extract the "Mental Model". Uses "5 Whys", "Pre-Mortem", and "Ambiguity Hunter" to kill scope creep before it starts.
*   **Output**: primed `PROJECT_STATE` and `project_brief.md`.

### 2. `/01-multi-arc-research` (The Scientist)
*   **Role**: Lead Researcher.
*   **Job**: Conducts deep web research on *one* feature. Compares 3 implementation "Arcs" (Standard vs SoTA vs Minimalist).
*   **Output**: A PhD-level `deep_dive.md` and `decision_matrix.md`.

### 3. `/02-sparc-specification` (The Spec Writer)
*   **Role**: Systems Engineer & Devil's Advocate.
*   **Job**: Converts research into **OpenSpec** compliant requirements. Uses "Adversarial Tree of Thoughts" to find edge cases (Malice, failure, drift).
*   **Output**: Strict `user_stories.md`, `functional_spec.md`, and `edge_cases.md`.

### 4. `/03-london-tdd-builder` (The Builder)
*   **Role**: Senior Software Engineer.
*   **Job**: Implements the feature using **Strict London School TDD**. Mocks everything. Never writes code without a failing test.
*   **Output**: Green Tests and Clean Code.

### 5. `/04-bmo-triangulation` (The Verifier)
*   **Role**: QA & Chaos Engineer.
*   **Job**: Reverse engineers the actual code to check for drift. Injects network latency (Chaos) to break race conditions.
*   **Output**: `triangulation_report.md` (Pass/Fail).

### 6. `/05-refinement` (The Fixer)
*   **Role**: Targeted Debugger.
*   **Job**: Only triggers if BMO fails. Uses "Root Cause Analysis" to fix the bug without breaking the architecture.

---

## ⚡ How to Use

1.  **Install**: Drop this `.agent` folder and `memory/` structure into your project root.
2.  **Ignite**: Open your AI Agent Chat and type:
    ```bash
    /00-solicitation
    ```
3.  **Follow the Handoffs**: The agents will tell you exactly which command to run next (e.g., *"Research Complete. Start a new chat and run `/02-sparc-specification`"*).

---

## 📜 The Constitution
This system is governed by strict **rules** located in `.agent/rules/`. Agents cannot ignore them.
*   **The "Clean Floor" Law**: Cleanup temp files.
*   **The "Double-Tap" Law**: Verify every file write.
*   **The "No Silent Failures" Law**: Never swallow errors.

---
*Built for the Agentic Future.*
