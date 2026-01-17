# Phase 1.5: Feature Extraction & Specification (The Microscope)

> **Parent Workflow**: 00-Solicitation
> **Phase Number**: 1.5
> **Objective**: Extract, catalog, and refine *every* feature, library, and requirement using **SCoT**.

---

## Prerequisites
**MUST be completed before this phase**:
- ✅ Phase 1: The Vision Statement

---

## Instructions

### Step 1: Deep Extraction (SCoT Protocol)
**Action**: You MUST use **Structured Chain of Thought (SCoT)** to parse the user's input.
**Constraint**: Do NOT assume anything. If they said "Auth", you need to know "Which provider?".
**Internal Process**:
1.  *Analyze*: Read every word of the user's prompt.
2.  *Decompose*: Break high-level terms (e.g., "Dashboard") into atomic components (e.g., "Sidebar", "Charts", "Data Fetching").
3.  *Tech Scan*: Identify implied technologies (e.g., "Real-time" -> WebSockets/Socket.io? "3D" -> Three.js?).

### Step 2: The "Microscope" (Granular Interrogation)
**Action**: For every extracted item, ask clarification questions if any detail is fuzzy.
**Focus Areas**:
- **Features**: "What exactly does this do?"
- **UI/UX**: "Dark mode? Animations? Mobile responsive?"
- **Tech Stack**: "React or Vue? Node or Python? SQL or NoSQL?"
- **Libraries**: "Any specific preferences? (e.g., Tailwind vs MUI, Zod vs Yup)"

### Step 3: Verification Loop (The Mirror)
**Action**: Present the **Feature Inventory** to the user.
**Prompt**:
```
┌─────────────────── FEATURE INVENTORY (DRAFT) ───────────────────┐
| 1. [Feature]: [Description] (Tech: [Implied Stack])             |
| 2. [Feature]: [Description] (Tech: [Implied Stack])             |
| 3. [Feature]: [Description] (Tech: [Implied Stack])             |
└─────────────────────────────────────────────────────────────────┘
I have used SCoT to break this down.
- Am I missing any features?
- Are these the correct libraries/languages?
- Is there anything else?
```

### Step 4: Documentation (The Source of Truth)
**Action**: Save the final approved list to `docs/feature_inventory.md`.
**Format**:
```markdown
# Feature Inventory
## Core Features
1. [Feature Name]
   - **Function**: [What it does]
   - **Form**: [How it looks]
   - **Tech**: [Library/Language]

## Technical Stack (Preliminary)
- **Language**: [e.g., TypeScript]
- **Frontend**: [e.g., React, Tailwind]
- **Backend**: [e.g., Node, Express]
- **Database**: [e.g., PostgreSQL]

## Libraries & Tools
- [Lib 1]
- [Lib 2]
```

### Step 5: Phase Checklist
**Action**: Open `.agent/checklists/00-solicitation/phase-1.5-feature-extraction-checklist.md`.
**Instruction**: Verify every item is checked.

---

## Exit Criteria
**This phase is complete when ALL of the following are true**:
- ✅ SCoT analysis performed on input.
- ✅ Granular features defined (Function + Form + Tech).
- ✅ Libraries and Languages explicitly listed.
- ✅ User has explicitly confirmed the Inventory is complete.
- ✅ `docs/feature_inventory.md` created.
- ✅ Checklist verified.

---

## Related Phases
**Next Phase**: Phase 2: The "Hindsight 20/20" Visioning
