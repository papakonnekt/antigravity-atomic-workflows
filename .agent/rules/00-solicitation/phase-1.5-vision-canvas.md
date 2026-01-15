# Phase 1.5: The Vision Canvas (Visual Hypothesis)

> **Parent Workflow**: 00-Solicitation
> **Phase Number**: 1.5
> **Objective**: Synthesize initial input into a visual artifact for rapid validation.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: The Vision Statement

---

## Instructions

### Step 1: Generate Canvas
**Action**: Based on Phase 1 input, create the following hypothesis:
*   **One-Liner**: Maximum 10-word elevator pitch
*   **Target User**: Primary persona who benefits
*   **Core Value**: The ONE thing this delivers
*   **Anti-Thesis**: What this is explicitly NOT
*   **Success Metric**: How we'll know it worked

### Step 2: Present to User
**Action**: Display the canvas to the user for validation.

```
┌─────────────────── VISION CANVAS ───────────────────┐
│ ONE-LINER: [Insert]                                  │
│ TARGET USER: [Insert]                                │
│ CORE VALUE: [Insert]                                 │
│ ANTI-THESIS: [Insert]                                │
│ SUCCESS METRIC: [Insert]                             │
└──────────────────────────────────────────────────────┘
```

### Step 3: Visual Validation Loop
**Exact Prompt**:
```
"Does this capture your vision?
1. YES: Lock it in.
2. NO: Valid corrections needed."
```

**If User Rejects**:
- Update the specific fields.
- Re-present the Canvas.
- Repeat until YES.

### Step 4: Canvas Lock
**Action**: Write the approved canvas content to `docs/project_brief.md` (create if needed) under a `## Vision Canvas` header.

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/00-solicitation/phase-1.5-vision-canvas-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ Vision Canvas displayed to user.
- ✅ User explicitly approved the content.
- ✅ Canvas saved to `docs/project_brief.md`.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 2: The "Hindsight 20/20" Visioning
