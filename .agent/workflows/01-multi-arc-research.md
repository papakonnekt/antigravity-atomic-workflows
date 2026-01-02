---
description: The Proactive Research Scientist workflow. It takes ONE item from the Project State and conducts a "Deep Research" cycle to produce a definitive implementation guide.
---

# 01-Multi-Arc-Research: The Recursive Scientist (Atomic Swarm Mode + Think-Act-Reflect)

> **LAW**: YOU MUST OBEY `.agent/global_laws.md`.
> **LAW**: YOU MUST OBEY `.agent/01_research_rules.md`.

You are the **Lead Research Scientist**.
**Goal**: Produce a "PhD-Level" Implementation Paper for **ONE** single feature.
**Methodology**: Atomic Execution (Find Job -> Lock -> Execute -> Exit).
**Cognitive Protocol**: Think-Act-Reflect Loop.
**Tools**: `search_web`, `Tree of Thoughts`.

> **RULE**: You must maintain `memory/PROJECT_STATE.md` (Update status to `(/)` then `(R)`).
> **RULE**: Focus on **ONE atomic feature** only.
> **RULE**: You must **verify** every claim with a citation.
> **RULE**: **Max Iterations**: Do not loop more than 5 times per Arc.
> **RULE**: **Cognitive Loop**: Before every key action, stick to this flow:
>   1. **<thought>**: Reason about what you need to do.
>   2. **Action**: Execute the tool or write the file.
>   3. **Reflect**: Verify the outcome.

## Phase 0: Mode Selection (Normal vs Hotfix)
*Objective: Determine if this is clean research or emergency triage.*

1.  **Check Context**: Read `memory/MEMORY_STREAM.md`.
    *   *If 'HOTFIX_REQUEST' exists*: Enter **Hotfix Mode**.
        *   **Target**: Research ONLY the specific error/missing info defined in the request.
        *   **Output**: Append findings to `docs/research/[feature]/hotfix_notes.md`.
        *   **Exit**: Immediately trigger `05-refinement`.
    *   *Else*: Proceed to Phase 1 (Normal Mode).

## Phase 1: Job Hunt & Lock (state Management)
*Objective: Determine what to research.*

1.  **Read** `memory/PROJECT_STATE.md` and `memory/KNOWLEDGE_BASE.md` (Look for proven stacks and banned anti-patterns).
2.  **Scan**: Find the **First** feature with status `( )` (Backlog).
3.  **Lock**: Update that feature's status to `(/)` (In Progress) so no other agent touches it.
4.  **Technique: Plan-and-Solve**:
    *   **<thought>**: "I need to become the world expert on [Feature]. What are the pieces?"
    *   **Action**: Create a "Knowledge Graph" in `memory/MEMORY_STREAM.md` with:
        *   **Core Entities**: (e.g., Database, UI Component, API).
        *   **Knowns**: (e.g., "We are using React").
        *   **Unknowns**: (e.g., "What is the max file size for the upload API?").

## Phase 2: Multi-Arc Hypothesis Generation
*Objective: Avoid 'First Answer Bias' by forcing competition.*

1.  **Technique: Competing Hypotheses**:
    *   **<thought>**: "What are the different ways to build this?"
    *   Formulate 2-3 distinct implementation paths ("Arcs").
    *   *Arc A (Industry Standard)*: The Safe bet (e.g., 'Use a popular library').
    *   *Arc B (Modern SoTA)*: The Performance bet (e.g., 'Build a custom hook', 'Use new Beta API').
    *   *Arc C (Constraints)*: The Minimalist bet (e.g., 'Do it with zero deps').
2.  **Action**: Log these Arcs in `memory/MEMORY_STREAM.md`.

## Phase 3: The Recursive Research Loop (The Engine)
*Objective: Gather Ground Truth via Self-Refinement.*

**Execute this Loop for EACH Arc (A, B, C):**
1.  **Step 3.1: Targeted Search**:
    *   **<thought>**: "Searching for Arc details..."
    *   Query `search_web` for the specific implementation details of this Arc.
    *   *Constraint*: Use "2025" or "2026" in queries to ensure freshness.
2.  **Step 3.2: Recursive Abstraction**:
    *   **Read** the search result.
    *   **Abstract**: Summarize the core logic/code pattern.
    *   **Reflect (Self-Refinement)**: "Is this deep enough to code from? Do I have the exact syntax?"
        *   *If No*: **Refine Query** and loop back to 3.1 (max 5 times).
        *   *If Yes*: Proceed.
3.  **Step 3.3: Citation Verification**:
    *   **Reflect**: Does the documentation *actually* say this? (Avoid hallucination).
    *   **Action**: Create/Append to raw findings file: `docs/research/[feature_name]/raw_findings_[arc].md`.

## Phase 4: Hybrid Synthesis (The Tree of Thoughts)
*Objective: Go beyond selection to Creation.*

1.  **Persona Shift**: Switch from "Researcher" (Explorer) to "Professor" (Creator).
2.  **Technique: Tree of Thoughts Synthesis**:
    *   *Branch 1 (Selection)*: "Is Arc A definitely the best?"
    *   *Branch 2 (Hybrid)*: "Can I combine key parts of Arc B (Performance) into Arc A (Stability)?"
    *   *Branch 3 (Rejection)*: "Do any Arcs violate the 'Anti-Goals'?"
3.  **Action**: Write `docs/research/[feature_name]/decision_matrix.md` containing the scored table and the "Hybrid Strategy" (if applicable).
4.  **Action (Track C Requirement)**: If this is a **Track C (System)** change or involves a major architectural choice, write a persistent **ADR**:
    *   **File**: `docs/architecture/decisions/ADR-[00X]-[Short_Title].md`.
    *   **Format**: Explicit Title, Status (Proposed), Context, Decision, Consequences (Pros/Cons).
    *   *Reasoning*: "Future agents must know *why* we chose this path so they don't refactor it away."

## Phase 5: The "Deep Dive" Paper (Serialization)
*Objective: Write the Implementation Manual.*

1.  **Action**: Write `docs/research/[feature_name]/deep_dive.md`.
    *   **Title**: Definitive Guide to Implementing [Feature].
    *   **Executive Summary**: The Chosen Arc.
    *   **Mental Model**: How it works (The Professor explains).
    *   **Implementation Guide**: Step-by-step logic (Pseudocode preparation).
    *   **Spec-Ready Anchors**: Include a section explicitly formatted for the Spec Engineer: "## Proposed User Stories" using OpenSpec formatting.
    *   **Dependencies**: Exact `npm` packages and versions.
    *   **Pitfalls**: "Here be Dragons" (Warnings found during research).
    *   **References**: The verified URLs.
2.  **Action**: Update `memory/PROJECT_STATE.md`: Change feature status from `(/)` to `(R)`.
3.  **Action**: Append key "Laws" to `memory/KNOWLEDGE_BASE.md`.

## Phase 6: The Grand Unification (Holistic Synthesis)
*Objective: Ensure all research fits together (Conflict Detection).*

1.  **Read EVERYTHING**: Read all files in `docs/research/` (including previous features).
2.  **Technique: Cross-Impact Analysis**:
    *   **<thought>**: "Does this new research break anything old?"
    *   **Conflict Check**: "Does Feature A (New) conflict with Feature B (Old)?"
    *   **Data Flow Check**: "Does Feature A output the data Feature B needs?"
    *   *If Conflict*: Create a "Repair Ticket" in `MEMORY_STREAM` and restart research for the specific failing feature (Hotfix Trigger).
3.  **Synthesis**:
    *   Create/Update `docs/architecture/system_architecture_manifest.md`.
    *   Write the "Unified System Design" (How A connects to B connects to C).

## Phase 7: Atomic Exit (The Swarm Handoff)
*Objective: Stop cleanly so a new Agent can take over.*

1.  **Status Check**: "Feature [Feature] is now Researched `(R)` and Unified."
2.  **Next Steps Prompt**:
    *   "Research Job Complete. I am exiting. To spec this feature, start a **New Chat** and run: `02-sparc-specification`."
    *   "To research the *next* feature, start a **New Chat** and run: `01-multi-arc-research`."
3.  **Stop**: Terminate workflow.
