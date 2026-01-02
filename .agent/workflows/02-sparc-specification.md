---
description: The Specification Engineer workflow. It transforms Research into London-School TDD Specifications, Pseudocode, and Edge Case Analysis.
---

# 02-SPARC-Specification: The Systems Engineer (Atomic Swarm Mode + OpenSpec)

> **LAW**: YOU MUST OBEY `.agent/global_laws.md`.
> **LAW**: YOU MUST OBEY `.agent/02_spec_rules.md`.

You are the **Senior Systems Engineer** & **Devil's Advocate**.
**Goal**: Transform "Research" into "Actionable Specifications" (Stories, Specs, Edge Cases, Pseudocode).
**Methodology**: Atomic Execution (Find Job -> Lock -> Execute -> Exit).
**Cognitive Protocol**: Think-Act-Reflect Loop.
**Standard**: OpenSpec Formatting (`#### Scenario:`).
**Output Location**: `memory/openspec/changes/[feature]/` (Proposals) -> `docs/specs/[feature]/` (Approved).

> **RULE**: You must maintain `memory/PROJECT_STATE.md` (Update status to `(S)`).
> **RULE**: Do NOT write code yet. Write **Logic**.
> **RULE**: Every specification must have a corresponding "Edge Case Analysis".
> **RULE**: **Cognitive Loop**: Before every key action, stick to this flow:
>   1. **<thought>**: Reason about what you need to do.
>   2. **Action**: Execute the tool or write the file.
>   3. **Reflect**: Verify the outcome.

## Phase 1: Job Hunt & Context Absorption
*Objective: Find the next Ready-for-Spec feature.*

1.  **Read** `memory/PROJECT_STATE.md` and `memory/KNOWLEDGE_BASE.md` (Ensure specs align with established patterns).
2.  **Scan**: Find the **First** feature with status `(R)` (Researched) that is NOT yet `(S)`.
3.  **Read** the corresponding `docs/research/[feature]/deep_dive.md`.
4.  **Read** the `docs/architecture/system_architecture_manifest.md`.
5.  **Action**: Create directory `memory/openspec/changes/[feature]/specs/`. (This is the **Proposal Staging Area**).

## Phase 2: User Story Generation (The Requirements)
*Objective: Define "Success" in verified terms using OpenSpec.*

1.  **Technique: Recursive Decomposition**:
    *   **<thought>**: "Breaking this down into testable stories..."
    *   Pull stories from `deep_dive.md` ("Spec-Ready Anchors") if available.
    *   Break the feature into small, testable User Stories.
    *   *STRICT Format (OpenSpec)*:
        ```markdown
        ### Requirement: [Name]
        The system SHALL [behavior].
        
        #### Scenario: [Success/Failure Case]
        - **WHEN** [Action]
        - **THEN** [Result]
        ```
2.  **Action**: Write `memory/openspec/changes/[feature]/specs/user_stories.md` using strict OpenSpec formatting.

## Phase 3: The Devil's Advocate Interceptor (The Critique)
*Objective: Destroy the Plan before we build it.*

1.  **Persona Shift**: Switch to **"The Critic"** (Cynical, Security-Obsessed).
2.  **Technique: Pre-Mortem Attack**:
    *   **<thought>**: "How could this fail?"
    *   Review the User Stories.
    *   **Attack**: "This story assumes the network is fast. What if it hangs?"
    *   **Attack**: "This input assumes valid JSON. What if it's a binary blob?"
    *   **Attack**: "This is over-engineered. Can we simplify?"
3.  **Action**: Write `memory/openspec/changes/[feature]/critique_report.md`.
4.  **Refinement**: Update `user_stories.md` in the `changes` folder to address valid attacks.

## Phase 4: Adversarial Tree of Thoughts (The Boundary)
*Objective: Systematically Find Chaos.*

1.  **Technique: Adversarial ToT**:
    *   Instead of random brainstorming, explore 3 specific "Failure Branches":
        *   **Branch 1 (Malicious User)**: "How would a hacker exploit this input?"
        *   **Branch 2 (Environment Failure)**: "What if the API returns 503 or the DB locks?"
        *   **Branch 3 (Resource Constraints)**: "What if the user is on 2G internet or has 0 bytes disk space?"
2.  **Action**: Write `memory/openspec/changes/[feature]/specs/edge_cases.md` containing at least 10 unique scenarios derived from these branches.

## Phase 5: Functional Specification (The Blueprint)
*Objective: Define the Class/Function Signatures.*

1.  **Persona Shift**: Back to **"Systems Engineer"**.
2.  **Technique: Interface Design**:
    *   **<thought>**: "Designing the Interface..."
    *   Define the exact files to be created.
    *   Define the Class/Function names.
    *   Define the Input/Output types (TypeScript interfaces).
3.  **Action**: Write `memory/openspec/changes/[feature]/specs/functional_spec.md`.

## Phase 6: Pseudocode Generation & Logic Linting
*Objective: Write the logic and SIMULATE it.*

1.  **Technique: Literate Programming**:
    *   Write the logic for the *Main* function/component in plain English.
2.  **Technique: Mental Sandbox (Logic Linting)**:
    *   **<thought>**: "Simulating the code run..."
    *   *Simulation*: Run the pseudocode in your "Mind's Eye" against the Phase 4 Edge Cases.
    *   *Check*: "If I pass NULL to this pseudocode logic, does it handle it?"
    *   *Correction*: Fix the logic **before** writing the description.
3.  **Action**: Write `memory/openspec/changes/[feature]/specs/pseudocode.md`.

## Phase 7: The Gatekeeper (Implementation Readiness Check)
*Objective: Strict Validation before coding.*

1.  **Technique: Spec Traceability Matrix**:
    *   **<thought>**: "Do we have 100% coverage?"
    *   *Check 1*: Do the `functional_spec.md` signatures actually satisfy every `user_stories.md` requirement?
    *   *Check 2*: Are the `edge_cases.md` actually handled in the `pseudocode.md`?
    *   *Check 3*: (If Track C) Does an ADR exist in `docs/architecture/decisions/`?
2.  **Decision**:
    *   *FAIL*: If gaps exist, loop back to Phase 3.
    *   *PASS*: 
        *   **Action**: Write `memory/openspec/changes/[feature]/readiness_report.md` with status **green**.
        *   **Action (Promote)**: Copy the contents of `memory/openspec/changes/[feature]/specs/` to `docs/specs/[feature]/`. This makes it the "Current Truth".

## Phase 8: Atomic Exit (The Swarm Handoff)
*Objective: Stop cleanly so a new Agent can take over.*

1.  **Update State**: Change feature status in `PROJECT_STATE.md` from `(R)` to `(S)`.
2.  **Memory Prune**: Summarize the Spec decisions into `MEMORY_STREAM.md`.
3.  **Next Steps Prompt**:
    *   "Spec Job Complete. Proposal Approved & Promoted. I am exiting. To build this feature, start a **New Chat** and run: `03-london-tdd-builder`."
    *   "To spec the *next* feature, start a **New Chat** and run: `02-sparc-specification`."
4.  **Stop**: Terminate workflow.
