# Phase 6: Atomic Exit

> **Parent Workflow**: 04-BMO-Triangulation
> **Phase Number**: 6
> **Objective**: Verify Integrity & Handoff via Session Exit Protocol.

---

## Instructions

### Step 1: Generate Handoff Files (Session Exit Protocol)
**Reference**: `memory/SESSION_HANDOFF.md` and `memory/handoff/[source]_to_[target].json`

1.  **Human-Readable Handoff**:
    - Update `memory/SESSION_HANDOFF.md`:
        - **Status**: Verified by BMO.
        - **Next**: (Exit or Refinement).
        - **Artifacts**: System Model, Chaos Reports.
        - **Decisions**: Verified vs. Rejected.

2.  **Machine-Readable Handoff (JSON)**:
    - Create `memory/handoff/04_bmo_to_[next].json`.
    - Fields: `source="04-bmo-triangulation"`, `target="[00...05]"`, `status="SUCCESS|FAILURE"`.

### Step 2: Validate Handoff
1.  **Schema Check**: Ensure JSON matches schema.
2.  **Validation**: Verify BMO triangulation score > 80%.
3.  **Gate**:
    - **PASS**: Proceed.
    - **FAIL**: Retry generation.

### Step 3: Finalize Episodic Memory
- Update `memory/EPISODIC_MEMORY.md` with verification outcome.
- Log metrics to `memory/PERFORMANCE_LOG.md`.

### Step 4: Update Dashboard
1.  Update `memory/HEALTH_DASHBOARD.md`.
2.  Update "BMO Pass Rate".

### Step 5: Git Operations
**Action**:
1.  **Stage & Commit**:
    ```powershell
    git add docs/bmo/ memory/PROJECT_STATE.md
    git commit -m "verify: [feature] bmo triangulation complete"
    ```
2.  **Autonomy Check**:
    -   **IF** `Config.Autonomy == "Fully Auto"` **AND** `Config.GitPush == true`:
        -   Run: `git push`
    -   **ELSE**:
        -   Ask User: "Remote configured. Ready to push?"

### Step 6: The Guidance Message (Crucial)
**Action**: You MUST output a final message to the user that guides them to the next step.

**Scenario A: BMO PASSED**
"🎉 **Verification Successful!**
BMO has certified this feature with a [Score]% verification score.
**Next Step**: Start the next feature (Research).
👉 Please run: `/step2-multi-arc-research` to begin the next feature."

**Scenario B: BMO FAILED**
"🚫 **Verification Failed.**
BMO detected critical issues or regressions.
**Next Step**: System Refinement (Fixing).
👉 Please run: `/step6-refinement` to repair the issues."

### Step 7: Phase Checklist
**Action**: Open `.agent/checklists/04-bmo-triangulation/phase-6-atomic-exit-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
- ✅ Handoff files (JSON + Markdown) created/verified.
- ✅ Verification artifacts committed.
- ✅ User explicitly guided to `/step2-multi-arc-research` OR `/step6-refinement`.
- ✅ Checklist verified.
